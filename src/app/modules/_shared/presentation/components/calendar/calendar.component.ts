import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslatePipe } from '../../../../../core/services/translation';

/**
 * Événement du calendrier
 */
export interface CalendarEvent {
    /** ID unique */
    id: string | number;
    /** Titre */
    title: string;
    /** Date de début */
    start: Date;
    /** Date de fin */
    end?: Date;
    /** Couleur */
    color?: string;
    /** Description */
    description?: string;
    /** Données personnalisées */
    data?: any;
}

/**
 * Vue du calendrier
 */
export type CalendarView = 'month' | 'week' | 'day';

/**
 * Configuration du calendrier
 */
export interface CalendarConfig {
    /** Vue par défaut */
    defaultView?: CalendarView;
    /** Premier jour de la semaine (0 = dimanche, 1 = lundi) */
    firstDayOfWeek?: number;
    /** Afficher les numéros de semaine */
    showWeekNumbers?: boolean;
    /** Permettre la sélection de dates */
    selectable?: boolean;
    /** Afficher les événements */
    showEvents?: boolean;
    /** Hauteur des cellules */
    cellHeight?: number;
}

/**
 * Composant Calendar - Calendrier/Planning
 * 
 * Features:
 * - 3 vues (mois, semaine, jour)
 * - Gestion d'événements
 * - Sélection de dates
 * - Navigation
 * - i18n
 * 
 * @example
 * ```html
 * <app-calendar
 *   [events]="calendarEvents"
 *   [config]="calendarConfig"
 *   (dateSelected)="onDateSelected($event)"
 *   (eventClicked)="onEventClicked($event)">
 * </app-calendar>
 * ```
 */
@Component({
    selector: 'app-calendar',
    standalone: true,
    imports: [CommonModule, TranslatePipe],
    templateUrl: './calendar.component.html',
    styleUrls: ['./calendar.component.scss']
})
export class CalendarComponent implements OnInit {
    /** Événements */
    @Input() events: CalendarEvent[] = [];

    /** Configuration */
    @Input() config: CalendarConfig = {
        defaultView: 'month',
        firstDayOfWeek: 1, // Lundi
        showWeekNumbers: false,
        selectable: true,
        showEvents: true,
        cellHeight: 100
    };

    /** Événement de sélection de date */
    @Output() dateSelected = new EventEmitter<Date>();

    /** Événement de clic sur un événement */
    @Output() eventClicked = new EventEmitter<CalendarEvent>();

    /** Événement de changement de vue */
    @Output() viewChanged = new EventEmitter<CalendarView>();

    /** Vue courante */
    currentView: CalendarView = 'month';

    /** Date courante */
    currentDate = new Date();

    /** Jours de la semaine */
    weekDays: string[] = [];

    /** Jours du mois courant */
    monthDays: Date[] = [];

    ngOnInit(): void {
        this.currentView = this.config.defaultView || 'month';
        this.initWeekDays();
        this.generateMonthDays();
    }

    /**
     * Initialiser les jours de la semaine
     */
    private initWeekDays(): void {
        const days = ['Dim', 'Lun', 'Mar', 'Mer', 'Jeu', 'Ven', 'Sam'];
        const firstDay = this.config.firstDayOfWeek || 1;

        this.weekDays = [
            ...days.slice(firstDay),
            ...days.slice(0, firstDay)
        ];
    }

    /**
     * Générer les jours du mois
     */
    private generateMonthDays(): void {
        const year = this.currentDate.getFullYear();
        const month = this.currentDate.getMonth();

        // Premier jour du mois
        const firstDay = new Date(year, month, 1);
        const firstDayOfWeek = firstDay.getDay();

        // Dernier jour du mois
        const lastDay = new Date(year, month + 1, 0);

        // Calculer le décalage
        const offset = (firstDayOfWeek - (this.config.firstDayOfWeek || 1) + 7) % 7;

        // Générer les jours
        this.monthDays = [];

        // Jours du mois précédent
        for (let i = offset - 1; i >= 0; i--) {
            const date = new Date(year, month, -i);
            this.monthDays.push(date);
        }

        // Jours du mois courant
        for (let i = 1; i <= lastDay.getDate(); i++) {
            const date = new Date(year, month, i);
            this.monthDays.push(date);
        }

        // Jours du mois suivant pour compléter la grille
        const remainingDays = 42 - this.monthDays.length; // 6 semaines * 7 jours
        for (let i = 1; i <= remainingDays; i++) {
            const date = new Date(year, month + 1, i);
            this.monthDays.push(date);
        }
    }

    /**
     * Changer de vue
     */
    changeView(view: CalendarView): void {
        this.currentView = view;
        this.viewChanged.emit(view);
    }

    /**
     * Mois précédent
     */
    previousMonth(): void {
        this.currentDate = new Date(
            this.currentDate.getFullYear(),
            this.currentDate.getMonth() - 1,
            1
        );
        this.generateMonthDays();
    }

    /**
     * Mois suivant
     */
    nextMonth(): void {
        this.currentDate = new Date(
            this.currentDate.getFullYear(),
            this.currentDate.getMonth() + 1,
            1
        );
        this.generateMonthDays();
    }

    /**
     * Aujourd'hui
     */
    goToToday(): void {
        this.currentDate = new Date();
        this.generateMonthDays();
    }

    /**
     * Sélectionner une date
     */
    selectDate(date: Date): void {
        if (this.config.selectable) {
            this.dateSelected.emit(date);
        }
    }

    /**
     * Cliquer sur un événement
     */
    onEventClick(event: CalendarEvent, $event: Event): void {
        $event.stopPropagation();
        this.eventClicked.emit(event);
    }

    /**
     * Obtenir les événements pour une date
     */
    getEventsForDate(date: Date): CalendarEvent[] {
        return this.events.filter(event => {
            const eventDate = new Date(event.start);
            return (
                eventDate.getFullYear() === date.getFullYear() &&
                eventDate.getMonth() === date.getMonth() &&
                eventDate.getDate() === date.getDate()
            );
        });
    }

    /**
     * Vérifier si une date est aujourd'hui
     */
    isToday(date: Date): boolean {
        const today = new Date();
        return (
            date.getFullYear() === today.getFullYear() &&
            date.getMonth() === today.getMonth() &&
            date.getDate() === today.getDate()
        );
    }

    /**
     * Vérifier si une date est dans le mois courant
     */
    isCurrentMonth(date: Date): boolean {
        return date.getMonth() === this.currentDate.getMonth();
    }

    /**
     * Obtenir le titre du mois
     */
    getMonthTitle(): string {
        const months = [
            'Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin',
            'Juillet', 'Août', 'Septembre', 'Octobre', 'Novembre', 'Décembre'
        ];
        return `${months[this.currentDate.getMonth()]} ${this.currentDate.getFullYear()}`;
    }
}

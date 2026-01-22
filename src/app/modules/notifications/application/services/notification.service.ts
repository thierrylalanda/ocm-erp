import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { 
  NotificationDto, 
  NotificationsPagedResponseDto, 
  NotificationFiltersDto,
  MarkAsReadResponseDto,
  NotificationStatsDto,
  NotificationType,
  NotificationPriority,
  NotificationChannel,
  NotificationStatus
} from '../../domain/dto/notification.dto';
import { AuthService } from '../../../../core/services/auth/auth.service';
import { environment } from '../../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {
  private baseUrl = environment.api + 'notification/notifications';
  private authService = inject(AuthService);
  private http = inject(HttpClient);

  /**
   * Récupère les notifications de l'utilisateur courant avec pagination et filtres
   */
  getNotifications(filters: NotificationFiltersDto = {}): Observable<NotificationsPagedResponseDto> {
    const user = this.authService.user;
    if (!user || !user.id) {
      throw new Error('User not authenticated');
    }

    // Toujours inclure l'ID du destinataire
    const params: any = {
      destinataireId: user.id.toString(),
      page: filters.page?.toString() || '0',
      size: filters.size?.toString() || '20',
      sort: filters.sort || 'nsDateCreation,desc'
    };

    // Ajouter les filtres optionnels
    if (filters.statut) params.statut = filters.statut;
    if (filters.canal) params.canal = filters.canal;
    if (filters.type) params.type = filters.type;
    if (filters.priorite) params.priorite = filters.priorite;
    if (filters.dateDebut) params.dateDebut = filters.dateDebut;
    if (filters.dateFin) params.dateFin = filters.dateFin;

    return this.http.get<NotificationsPagedResponseDto>(this.baseUrl, { params });
  }

  /**
   * Récupère une notification par son ID
   */
  getNotification(id: number): Observable<NotificationDto> {
    return this.http.get<NotificationDto>(`${this.baseUrl}/${id}`);
  }

  /**
   * Marque une notification comme lue
   */
  markAsRead(id: number): Observable<MarkAsReadResponseDto> {
    return this.http.patch<MarkAsReadResponseDto>(`${this.baseUrl}/${id}/read`, {});
  }

  /**
   * Marque plusieurs notifications comme lues
   */
  markMultipleAsRead(ids: number[]): Observable<MarkAsReadResponseDto[]> {
    return this.http.patch<MarkAsReadResponseDto[]>(`${this.baseUrl}/batch-read`, { ids });
  }

  /**
   * Marque toutes les notifications de l'utilisateur comme lues
   */
  markAllAsRead(): Observable<{ count: number }> {
    const user = this.authService.user;
    if (!user || !user.id) {
      throw new Error('User not authenticated');
    }
    
    return this.http.patch<{ count: number }>(`${this.baseUrl}/mark-all-read`, {
      destinataireId: user.id
    });
  }

  /**
   * Supprime une notification
   */
  deleteNotification(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${id}`);
  }

  /**
   * Supprime plusieurs notifications
   */
  deleteMultipleNotifications(ids: number[]): Observable<{ count: number }> {
    return this.http.post<{ count: number }>(`${this.baseUrl}/batch-delete`, { ids });
  }

  /**
   * Récupère les statistiques des notifications de l'utilisateur
   */
  getNotificationStats(): Observable<NotificationStatsDto> {
    const user = this.authService.user;
    if (!user || !user.id) {
      throw new Error('User not authenticated');
    }

    return this.http.get<NotificationStatsDto>(`${this.baseUrl}/stats`, {
      params: { destinataireId: user.id.toString() }
    });
  }

  /**
   * Récupère le nombre de notifications non lues
   */
  getUnreadCount(): Observable<{ count: number }> {
    const user = this.authService.user;
    if (!user || !user.id) {
      throw new Error('User not authenticated');
    }

    return this.http.get<{ count: number }>(`${this.baseUrl}/unread-count`, {
      params: { destinataireId: user.id.toString() }
    });
  }

  /**
   * Récupère les options pour les types de notifications
   */
  getNotificationTypeOptions(): Array<{ value: NotificationType, label: string }> {
    return [
      { value: 'NOUVEAU_TICKET', label: 'Nouveau ticket' },
      { value: 'TICKET_MODIFIE', label: 'Ticket modifié' },
      { value: 'TICKET_RESOLU', label: 'Ticket résolu' },
      { value: 'NOUVELLE_PLAINTE', label: 'Nouvelle plainte' },
      { value: 'PLAINTE_MODIFIEE', label: 'Plainte modifiée' },
      { value: 'PLAINTE_RESOLUE', label: 'Plainte résolue' },
      { value: 'NOUVEAU_MESSAGE', label: 'Nouveau message' },
      { value: 'RAPPEL', label: 'Rappel' },
      { value: 'ALERTE', label: 'Alerte' },
      { value: 'AUTRE', label: 'Autre' }
    ];
  }

  /**
   * Récupère les options pour les priorités
   */
  getPriorityOptions(): Array<{ value: NotificationPriority, label: string, color: string }> {
    return [
      { value: 'INFO', label: 'Information', color: 'primary' },
      { value: 'WARNING', label: 'Avertissement', color: 'warning' },
      { value: 'ERROR', label: 'Erreur', color: 'danger' },
      { value: 'CRITICAL', label: 'Critique', color: 'dark' }
    ];
  }

  /**
   * Récupère les options pour les canaux
   */
  getChannelOptions(): Array<{ value: NotificationChannel, label: string, icon: string }> {
    return [
      { value: 'EMAIL', label: 'Email', icon: 'isax isax-sms' },
      { value: 'SMS', label: 'SMS', icon: 'isax isax-message' },
      { value: 'NOTIFICATION_INTERNE', label: 'Notification interne', icon: 'isax isax-notification' },
      { value: 'WHATSAPP', label: 'WhatsApp', icon: 'isax isax-whatsapp' }
    ];
  }

  /**
   * Récupère les options pour les statuts
   */
  getStatusOptions(): Array<{ value: NotificationStatus, label: string, badgeClass: string }> {
    return [
      { value: 'EN_ATTENTE', label: 'En attente', badgeClass: 'badge-soft-warning' },
      { value: 'ENVOYE', label: 'Envoyé', badgeClass: 'badge-soft-info' },
      { value: 'DELIVRE', label: 'Délivré', badgeClass: 'badge-soft-primary' },
      { value: 'LU', label: 'Lu', badgeClass: 'badge-soft-success' },
      { value: 'ECHEC', label: 'Échec', badgeClass: 'badge-soft-danger' }
    ];
  }

  /**
   * Formate la date pour l'affichage
   */
  formatDate(dateString: string): string {
    const date = new Date(dateString);
    const now = new Date();
    const diffMs = now.getTime() - date.getTime();
    const diffMins = Math.floor(diffMs / 60000);
    const diffHours = Math.floor(diffMs / 3600000);
    const diffDays = Math.floor(diffMs / 86400000);

    if (diffMins < 1) {
      return 'À l\'instant';
    } else if (diffMins < 60) {
      return `Il y a ${diffMins} min`;
    } else if (diffHours < 24) {
      return `Il y a ${diffHours} h`;
    } else if (diffDays < 7) {
      return `Il y a ${diffDays} j`;
    } else {
      return date.toLocaleDateString('fr-FR', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
      });
    }
  }

  /**
   * Obtient l'icône en fonction du type de notification
   */
  getNotificationIcon(type: NotificationType): string {
    const icons: Record<NotificationType, string> = {
      'NOUVEAU_TICKET': 'isax isax-ticket',
      'TICKET_MODIFIE': 'isax isax-edit',
      'TICKET_RESOLU': 'isax isax-tick-circle',
      'NOUVELLE_PLAINTE': 'isax isax-danger',
      'PLAINTE_MODIFIEE': 'isax isax-edit-2',
      'PLAINTE_RESOLUE': 'isax isax-tick-circle',
      'NOUVEAU_MESSAGE': 'isax isax-message',
      'RAPPEL': 'isax isax-calendar',
      'ALERTE': 'isax isax-notification',
      'AUTRE': 'isax isax-info-circle'
    };
    return icons[type] || 'isax isax-info-circle';
  }

  /**
   * Obtient la couleur en fonction de la priorité
   */
  getPriorityColor(priority: NotificationPriority): string {
    const colors: Record<NotificationPriority, string> = {
      'INFO': 'primary',
      'WARNING': 'warning',
      'ERROR': 'danger',
      'CRITICAL': 'dark'
    };
    return colors[priority] || 'primary';
  }

  /**
   * Vérifie si une notification est récente (moins de 24h)
   */
  isRecentNotification(dateString: string): boolean {
    const date = new Date(dateString);
    const now = new Date();
    const diffMs = now.getTime() - date.getTime();
    const diffHours = diffMs / 3600000;
    return diffHours < 24;
  }

  /**
   * Extrait le lien d'action à partir du message de notification
   */
  extractActionLink(notification: NotificationDto): string | null {
    if (notification.plainteId && notification.plainteNumero) {
      return `/complaints/${notification.plainteId}`;
    }
    
    // Autres logiques d'extraction de liens selon le type
    switch (notification.nsType) {
      case 'NOUVEAU_TICKET':
      case 'TICKET_MODIFIE':
      case 'TICKET_RESOLU':
        return '/tickets';
      case 'NOUVELLE_PLAINTE':
      case 'PLAINTE_MODIFIEE':
      case 'PLAINTE_RESOLUE':
        return '/complaints';
      case 'NOUVEAU_MESSAGE':
        return '/messages';
      default:
        return null;
    }
  }
}

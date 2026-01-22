import { Component, OnInit, inject, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { Subscription } from 'rxjs';
import { 
  NotificationDto, 
  NotificationFiltersDto,
  NotificationType,
  NotificationPriority,
  NotificationChannel,
  NotificationStatus
} from './domain/dto/notification.dto';
import { NotificationService } from './application/services/notification.service';
import { AuthService } from '../../core/services/auth/auth.service';
import { ToasterService } from '../../core/services/toaster/toaster.service';

@Component({
  selector: 'app-notifications',
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.scss'],
})
export class NotificationsComponent implements OnInit, OnDestroy {
  private notificationService = inject(NotificationService);
  private authService = inject(AuthService);
  private toasterService = inject(ToasterService);
  private subscriptions: Subscription[] = [];

  // États
  loading = false;
  loadingStats = false;
  processing = false;
  error: string | null = null;
  success: string | null = null;

  // Données
  notifications: NotificationDto[] = [];
  selectedNotifications: Set<number> = new Set();
  stats: any = null;
  unreadCount = 0;

  // Pagination
  currentPage = 0;
  pageSize = 20;
  totalElements = 0;
  totalPages = 0;

  // Filtres
  filters: NotificationFiltersDto = {
    page: 0,
    size: 20,
    sort: 'nsDateCreation,desc'
  };

  // Options de filtres
  typeOptions = this.notificationService.getNotificationTypeOptions();
  priorityOptions = this.notificationService.getPriorityOptions();
  channelOptions = this.notificationService.getChannelOptions();
  statusOptions = this.notificationService.getStatusOptions();

  // Filtres actifs
  activeFilters: Partial<NotificationFiltersDto> = {};

  // Modal
  showFiltersModal = false;
  showDeleteModal = false;
  showMarkAllModal = false;

  ngOnInit(): void {
    this.loadNotifications();
    this.loadStats();
    this.loadUnreadCount();
    
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(sub => sub.unsubscribe());
  }

  /**
   * Charge les notifications avec les filtres actuels
   */
  loadNotifications(): void {
    this.loading = true;
    this.error = null;

    const sub = this.notificationService.getNotifications(this.filters).subscribe({
      next: (response) => {
        this.notifications = response.content;
        this.currentPage = response.page;
        this.pageSize = response.size;
        this.totalElements = response.totalElements;
        this.totalPages = response.totalPages;
        this.loading = false;
        this.selectedNotifications.clear();
      },
      error: (error: any) => {
        console.error('Erreur lors du chargement des notifications:', error);
        this.error = error.message || 'Erreur lors du chargement des notifications';
        this.loading = false;
        if (this.error) {
          this.toasterService.typeError(this.error);
        }
      }
    });

    this.subscriptions.push(sub);
  }

  /**
   * Charge les statistiques
   */
  loadStats(): void {
    this.loadingStats = true;
    const sub = this.notificationService.getNotificationStats().subscribe({
      next: (stats) => {
        this.stats = stats;
        this.loadingStats = false;
      },
      error: (error: any) => {
        console.error('Erreur lors du chargement des statistiques:', error);
        this.loadingStats = false;
      }
    });

    this.subscriptions.push(sub);
  }

  /**
   * Charge le nombre de notifications non lues
   */
  loadUnreadCount(): void {
    const sub = this.notificationService.getUnreadCount().subscribe({
      next: (response) => {
        this.unreadCount = response.count;
      },
      error: (error: any) => {
        console.error('Erreur lors du chargement du nombre de notifications non lues:', error);
      }
    });

    this.subscriptions.push(sub);
  }

  /**
   * Applique les filtres
   */
  applyFilters(): void {
    this.filters = {
      ...this.filters,
      ...this.activeFilters,
      page: 0 // Retour à la première page
    };
    this.loadNotifications();
    this.closeFiltersModal();
  }

  /**
   * Réinitialise les filtres
   */
  resetFilters(): void {
    this.activeFilters = {};
    this.filters = {
      page: 0,
      size: 20,
      sort: 'nsDateCreation,desc'
    };
    this.loadNotifications();
    this.closeFiltersModal();
  }

  /**
   * Change de page
   */
  changePage(page: number): void {
    if (page >= 0 && page < this.totalPages) {
      this.filters.page = page;
      this.loadNotifications();
    }
  }

  /**
   * Sélectionne/désélectionne une notification
   */
  toggleSelection(id: number): void {
    if (this.selectedNotifications.has(id)) {
      this.selectedNotifications.delete(id);
    } else {
      this.selectedNotifications.add(id);
    }
  }

  /**
   * Sélectionne/désélectionne toutes les notifications
   */
  toggleSelectAll(): void {
    if (this.selectedNotifications.size === this.notifications.length) {
      this.selectedNotifications.clear();
    } else {
      this.notifications.forEach(notification => {
        this.selectedNotifications.add(notification.id);
      });
    }
  }

  /**
   * Marque une notification comme lue
   */
  markAsRead(notification: NotificationDto, event?: Event): void {
    if (event) event.stopPropagation();
    
    if (notification.nsStatut === 'LU') return;

    this.processing = true;
    const sub = this.notificationService.markAsRead(notification.id).subscribe({
      next: (response) => {
        notification.nsStatut = response.nsStatut;
        this.unreadCount = Math.max(0, this.unreadCount - 1);
        this.toasterService.typeSuccess('Notification marquée comme lue');
        this.processing = false;
      },
      error: (error: any) => {
        console.error('Erreur lors du marquage comme lu:', error);
        this.toasterService.typeError('Erreur lors du marquage comme lu');
        this.processing = false;
      }
    });

    this.subscriptions.push(sub);
  }

  /**
   * Marque les notifications sélectionnées comme lues
   */
  markSelectedAsRead(): void {
    if (this.selectedNotifications.size === 0) return;

    const ids = Array.from(this.selectedNotifications);
    this.processing = true;
    const sub = this.notificationService.markMultipleAsRead(ids).subscribe({
      next: (responses) => {
        // Mettre à jour les notifications locales
        responses.forEach(response => {
          const notification = this.notifications.find(n => n.id === response.id);
          if (notification) {
            notification.nsStatut = response.nsStatut;
          }
        });
        
        this.unreadCount = Math.max(0, this.unreadCount - ids.length);
        this.selectedNotifications.clear();
        this.toasterService.typeSuccess(`${ids.length} notification(s) marquée(s) comme lue(s)`);
        this.processing = false;
      },
      error: (error: any) => {
        console.error('Erreur lors du marquage multiple comme lu:', error);
        this.toasterService.typeError('Erreur lors du marquage comme lu');
        this.processing = false;
      }
    });

    this.subscriptions.push(sub);
  }

  /**
   * Marque toutes les notifications comme lues
   */
  markAllAsRead(): void {
    this.processing = true;
    const sub = this.notificationService.markAllAsRead().subscribe({
      next: (response) => {
        // Mettre à jour toutes les notifications locales
        this.notifications.forEach(notification => {
          if (notification.nsStatut !== 'LU') {
            notification.nsStatut = 'LU';
          }
        });
        
        this.unreadCount = 0;
        this.toasterService.typeSuccess(`${response.count} notification(s) marquée(s) comme lue(s)`);
        this.processing = false;
        this.closeMarkAllModal();
      },
      error: (error: any) => {
        console.error('Erreur lors du marquage de toutes les notifications comme lues:', error);
        this.toasterService.typeError('Erreur lors du marquage comme lu');
        this.processing = false;
      }
    });

    this.subscriptions.push(sub);
  }

  /**
   * Supprime une notification
   */
  deleteNotification(notification: NotificationDto, event?: Event): void {
    if (event) event.stopPropagation();

    this.processing = true;
    const sub = this.notificationService.deleteNotification(notification.id).subscribe({
      next: () => {
        this.notifications = this.notifications.filter(n => n.id !== notification.id);
        if (notification.nsStatut !== 'LU') {
          this.unreadCount = Math.max(0, this.unreadCount - 1);
        }
        this.totalElements--;
        this.toasterService.typeSuccess('Notification supprimée');
        this.processing = false;
      },
      error: (error: any) => {
        console.error('Erreur lors de la suppression:', error);
        this.toasterService.typeError('Erreur lors de la suppression');
        this.processing = false;
      }
    });

    this.subscriptions.push(sub);
  }

  /**
   * Supprime les notifications sélectionnées
   */
  deleteSelectedNotifications(): void {
    if (this.selectedNotifications.size === 0) return;

    const ids = Array.from(this.selectedNotifications);
    this.processing = true;
    const sub = this.notificationService.deleteMultipleNotifications(ids).subscribe({
      next: (response) => {
        // Supprimer les notifications locales
        this.notifications = this.notifications.filter(n => !ids.includes(n.id));
        
        // Mettre à jour le compteur de non lues
        const deletedUnread = this.notifications.filter(n => 
          ids.includes(n.id) && n.nsStatut !== 'LU'
        ).length;
        this.unreadCount = Math.max(0, this.unreadCount - deletedUnread);
        
        this.totalElements -= response.count;
        this.selectedNotifications.clear();
        this.toasterService.typeSuccess(`${response.count} notification(s) supprimée(s)`);
        this.processing = false;
        this.closeDeleteModal();
      },
      error: (error: any) => {
        console.error('Erreur lors de la suppression multiple:', error);
        this.toasterService.typeError('Erreur lors de la suppression');
        this.processing = false;
      }
    });

    this.subscriptions.push(sub);
  }

  /**
   * Ouvre le modal de filtres
   */
  openFiltersModal(): void {
    this.showFiltersModal = true;
  }

  /**
   * Ferme le modal de filtres
   */
  closeFiltersModal(): void {
    this.showFiltersModal = false;
  }

  /**
   * Ouvre le modal de confirmation de suppression
   */
  openDeleteModal(): void {
    if (this.selectedNotifications.size === 0) {
      this.toasterService.typeWarning('Veuillez sélectionner au moins une notification');
      return;
    }
    this.showDeleteModal = true;
  }

  /**
   * Ferme le modal de confirmation de suppression
   */
  closeDeleteModal(): void {
    this.showDeleteModal = false;
  }

  /**
   * Ouvre le modal de confirmation pour marquer toutes comme lues
   */
  openMarkAllModal(): void {
    this.showMarkAllModal = true;
  }

  /**
   * Ferme le modal de confirmation pour marquer toutes comme lues
   */
  closeMarkAllModal(): void {
    this.showMarkAllModal = false;
  }

  /**
   * Obtient l'icône pour un type de notification
   */
  getNotificationIcon(type: NotificationType): string {
    return this.notificationService.getNotificationIcon(type);
  }

  /**
   * Obtient la couleur pour une priorité
   */
  getPriorityColor(priority: NotificationPriority): string {
    return this.notificationService.getPriorityColor(priority);
  }

  /**
   * Formate une date
   */
  formatDate(dateString: string): string {
    return this.notificationService.formatDate(dateString);
  }

  /**
   * Vérifie si une notification est récente
   */
  isRecentNotification(dateString: string): boolean {
    return this.notificationService.isRecentNotification(dateString);
  }

  /**
   * Obtient le lien d'action pour une notification
   */
  getActionLink(notification: NotificationDto): string | null {
    return this.notificationService.extractActionLink(notification);
  }

  /**
   * Obtient le texte du badge de statut
   */
  getStatusText(status: NotificationStatus): string {
    const option = this.statusOptions.find(opt => opt.value === status);
    return option ? option.label : status;
  }

  /**
   * Obtient la classe CSS du badge de statut
   */
  getStatusBadgeClass(status: NotificationStatus): string {
    const option = this.statusOptions.find(opt => opt.value === status);
    return option ? option.badgeClass : 'badge-soft-secondary';
  }

  /**
   * Obtient le texte du type de notification
   */
  getTypeText(type: NotificationType): string {
    const option = this.typeOptions.find(opt => opt.value === type);
    return option ? option.label : type;
  }

  /**
   * Obtient le texte du canal
   */
  getChannelText(channel: NotificationChannel): string {
    const option = this.channelOptions.find(opt => opt.value === channel);
    return option ? option.label : channel;
  }

  /**
   * Obtient l'icône du canal
   */
  getChannelIcon(channel: NotificationChannel): string {
    const option = this.channelOptions.find(opt => opt.value === channel);
    return option ? option.icon : 'isax isax-info-circle';
  }

  /**
   * Calcule les pages à afficher dans la pagination
   */
  getPages(): number[] {
    const pages: number[] = [];
    const maxVisiblePages = 5;
    let startPage = Math.max(0, this.currentPage - Math.floor(maxVisiblePages / 2));
    let endPage = Math.min(this.totalPages - 1, startPage + maxVisiblePages - 1);
    
    // Ajuster si on est proche du début
    if (endPage - startPage + 1 < maxVisiblePages) {
      startPage = Math.max(0, endPage - maxVisiblePages + 1);
    }
    
    for (let i = startPage; i <= endPage; i++) {
      pages.push(i);
    }
    
    return pages;
  }

  /**
   * Utilitaire pour Math.min dans le template
   */
  min(a: number, b: number): number {
    return Math.min(a, b);
  }
}

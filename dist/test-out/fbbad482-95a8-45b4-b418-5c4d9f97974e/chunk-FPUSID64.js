import {
  environment,
  init_environment
} from "./chunk-Q2A5OOYR.js";
import {
  FormsModule,
  init_forms
} from "./chunk-2RBILSOV.js";
import {
  AuthService,
  init_auth_service
} from "./chunk-SDAHDEJE.js";
import {
  ToasterService,
  init_toaster_service
} from "./chunk-FUOYOFVQ.js";
import {
  RouterModule,
  init_router
} from "./chunk-EDGRTZKC.js";
import {
  HttpClient,
  init_http
} from "./chunk-H7VTUQ3B.js";
import {
  CommonModule,
  init_common
} from "./chunk-HQHIWYWO.js";
import {
  Component,
  Injectable,
  __decorate,
  init_core,
  init_tslib_es6,
  inject
} from "./chunk-W6MIRXHE.js";
import {
  __esm,
  __spreadProps,
  __spreadValues
} from "./chunk-FWMZPJRE.js";

// angular:jit:template:src/app/modules/notifications/notifications.component.html
var notifications_component_default;
var init_notifications_component = __esm({
  "angular:jit:template:src/app/modules/notifications/notifications.component.html"() {
    notifications_component_default = `<div class="">
    <div>
        <!-- En-t\xEAte avec statistiques -->
        <div class="pb-3 d-flex align-items-center justify-content-between border-bottom mb-3">
            <h6 class="mb-0">Notifications</h6>
            <div class="d-flex align-items-center gap-2">
                <button type="button" class="btn btn-outline-primary" (click)="openFiltersModal()">
                    <i class="isax isax-filter me-1"></i>Filtres
                </button>
                <button type="button" class="btn btn-primary" (click)="openMarkAllModal()" [disabled]="unreadCount === 0">
                    <i class="isax isax-tick-circle me-1"></i>Tout marquer comme lu
                </button>
            </div>
        </div>

        <!-- Statistiques -->
        <div *ngIf="!loadingStats && stats" class="row mb-4">
            <div class="col-md-3 col-sm-6">
                <div class="card">
                    <div class="card-body">
                        <div class="d-flex align-items-center">
                            <div class="avatar avatar-lg bg-light-primary me-3 p-2">
                                <i class="isax isax-notification fs-24 text-primary"></i>
                            </div>
                            <div>
                                <p class="text-gray-9 fw-medium mb-0">Total</p>
                                <h4 class="mb-0">{{ stats.total || 0 }}</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-md-3 col-sm-6">
                <div class="card">
                    <div class="card-body">
                        <div class="d-flex align-items-center">
                            <div class="avatar avatar-lg bg-light-warning me-3 p-2">
                                <i class="isax isax-notification-1 fs-24 text-warning"></i>
                            </div>
                            <div>
                                <p class="text-gray-9 fw-medium mb-0">Non lues</p>
                                <h4 class="mb-0">{{ stats.nonLues || unreadCount }}</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-md-3 col-sm-6">
                <div class="card">
                    <div class="card-body">
                        <div class="d-flex align-items-center">
                            <div class="avatar avatar-lg bg-light-success me-3 p-2">
                                <i class="isax isax-tick-circle fs-24 text-success"></i>
                            </div>
                            <div>
                                <p class="text-gray-9 fw-medium mb-0">Lues</p>
                                <h4 class="mb-0">{{ stats.lues || 0 }}</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-md-3 col-sm-6">
                <div class="card">
                    <div class="card-body">
                        <div class="d-flex align-items-center">
                            <div class="avatar avatar-lg bg-light-danger me-3 p-2">
                                <i class="isax isax-danger fs-24 text-danger"></i>
                            </div>
                            <div>
                                <p class="text-gray-9 fw-medium mb-0">\xC9checs</p>
                                <h4 class="mb-0">{{ stats.echecs || 0 }}</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- Messages d'alerte -->
        <div *ngIf="error" class="alert alert-danger alert-dismissible fade show" role="alert">
            <i class="isax isax-danger me-2"></i>{{ error }}
            <button type="button" class="btn-close" (click)="error = null"></button>
        </div>

        <div *ngIf="success" class="alert alert-success alert-dismissible fade show" role="alert">
            <i class="isax isax-tick-circle me-2"></i>{{ success }}
            <button type="button" class="btn-close" (click)="success = null"></button>
        </div>

        <!-- Actions en masse -->
        <div *ngIf="selectedNotifications.size > 0" class="alert alert-info alert-dismissible fade show mb-3" role="alert">
            <div class="d-flex align-items-center justify-content-between">
                <div>
                    <i class="isax isax-info-circle me-2"></i>
                    <strong>{{ selectedNotifications.size }} notification(s) s\xE9lectionn\xE9e(s)</strong>
                </div>
                <div class="d-flex gap-2">
                    <button type="button" class="btn btn-sm btn-success" (click)="markSelectedAsRead()" [disabled]="processing">
                        <i class="isax isax-tick-circle me-1"></i>Marquer comme lu
                    </button>
                    <button type="button" class="btn btn-sm btn-danger" (click)="openDeleteModal()" [disabled]="processing">
                        <i class="isax isax-trash me-1"></i>Supprimer
                    </button>
                </div>
            </div>
        </div>

        <!-- Chargement -->
        <div *ngIf="loading" class="text-center py-5">
            <div class="spinner-border text-primary" role="status">
                <span class="visually-hidden">Chargement...</span>
            </div>
            <p class="mt-2">Chargement des notifications...</p>
        </div>

        <!-- Liste des notifications -->
        <div *ngIf="!loading" class="mb-0">
            <!-- Message si aucune notification -->
            <div *ngIf="notifications.length === 0" class="text-center py-5">
                <div class="mb-3">
                    <img src="assets/img/icons/notification.svg" alt="Aucune notification" class="img-fluid" style="max-width: 100px;">
                </div>
                <h6 class="mb-2">Aucune notification</h6>
                <p class="text-muted mb-4">Vous n'avez aucune notification pour le moment.</p>
            </div>

            <!-- Tableau des notifications -->
            <div *ngIf="notifications.length > 0" class="table-responsive">
                <table class="table table-hover">
                    <thead>
                        <tr>
                            <th width="50">
                                <div class="form-check">
                                    <input class="form-check-input" type="checkbox" 
                                           [checked]="selectedNotifications.size === notifications.length"
                                           (change)="toggleSelectAll()">
                                </div>
                            </th>
                            <th width="60"></th>
                            <th>Notification</th>
                            <th width="120">Type</th>
                            <th width="120">Canal</th>
                            <th width="120">Statut</th>
                            <th width="150">Date</th>
                            <th width="100">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr *ngFor="let notification of notifications" 
                            [class.table-primary]="notification.nsStatut !== 'LU'"
                            [class.bg-light]="isRecentNotification(notification.nsDateCreation)">
                            <td>
                                <div class="form-check">
                                    <input class="form-check-input" type="checkbox" 
                                           [checked]="selectedNotifications.has(notification.id)"
                                           (change)="toggleSelection(notification.id)">
                                </div>
                            </td>
                            <td>
                                <div class="avatar avatar-sm" [ngClass]="'bg-light-' + getPriorityColor(notification.nsPriorite)">
                                    <i [class]="getNotificationIcon(notification.nsType) + ' text-' + getPriorityColor(notification.nsPriorite)"></i>
                                </div>
                            </td>
                            <td>
                                <div class="d-flex flex-column">
                                    <strong class="mb-1">{{ notification.nsTitre }}</strong>
                                    <small class="text-muted">{{ notification.nsMessage }}</small>
                                    <div class="mt-1">
                                        <small class="text-muted">
                                            <i class="isax isax-user me-1"></i>
                                            {{ notification.destinataireNom }}
                                        </small>
                                        <small class="text-muted ms-3">
                                            <i class="isax isax-sms me-1"></i>
                                            {{ notification.destinataireEmail }}
                                        </small>
                                    </div>
                                </div>
                            </td>
                            <td>
                                <span class="badge badge-soft-primary">{{ getTypeText(notification.nsType) }}</span>
                            </td>
                            <td>
                                <div class="d-flex align-items-center">
                                    <i [class]="getChannelIcon(notification.nsCanal) + ' me-1'"></i>
                                    <span>{{ getChannelText(notification.nsCanal) }}</span>
                                </div>
                            </td>
                            <td>
                                <span [class]="'badge ' + getStatusBadgeClass(notification.nsStatut)">
                                    {{ getStatusText(notification.nsStatut) }}
                                </span>
                            </td>
                            <td>
                                <small class="text-muted">{{ formatDate(notification.nsDateCreation) }}</small>
                            </td>
                            <td>
                                <div class="d-flex gap-1">
                                    <button type="button" class="btn btn-sm btn-outline-primary" 
                                            (click)="markAsRead(notification, $event)"
                                            [disabled]="notification.nsStatut === 'LU' || processing"
                                            title="Marquer comme lu">
                                        <i class="isax isax-tick-circle"></i>
                                    </button>
                                    <a *ngIf="getActionLink(notification)" 
                                       [routerLink]="getActionLink(notification)"
                                       class="btn btn-sm btn-outline-info"
                                       title="Voir les d\xE9tails">
                                        <i class="isax isax-eye"></i>
                                    </a>
                                    <button type="button" class="btn btn-sm btn-outline-danger" 
                                            (click)="deleteNotification(notification, $event)"
                                            [disabled]="processing"
                                            title="Supprimer">
                                        <i class="isax isax-trash"></i>
                                    </button>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <!-- Pagination -->
            <div *ngIf="notifications.length > 0" class="d-flex justify-content-between align-items-center mt-3">
                <div>
                    <small class="text-muted">
                        Affichage de {{ (currentPage * pageSize) + 1 }} \xE0 {{ min((currentPage + 1) * pageSize, totalElements) }} sur {{ totalElements }} notifications
                    </small>
                </div>
                <div>
                    <nav>
                        <ul class="pagination pagination-sm mb-0">
                            <li class="page-item" [class.disabled]="currentPage === 0">
                                <a class="page-link" href="javascript:void(0);" (click)="changePage(currentPage - 1)">
                                    <i class="isax isax-arrow-left"></i>
                                </a>
                            </li>
                            <li *ngFor="let page of getPages()" class="page-item" [class.active]="page === currentPage">
                                <a class="page-link" href="javascript:void(0);" (click)="changePage(page)">{{ page + 1 }}</a>
                            </li>
                            <li class="page-item" [class.disabled]="currentPage === totalPages - 1">
                                <a class="page-link" href="javascript:void(0);" (click)="changePage(currentPage + 1)">
                                    <i class="isax isax-arrow-right"></i>
                                </a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
    </div>
</div>

<!-- Modal de filtres -->
<div class="modal fade" [class.show]="showFiltersModal" [style.display]="showFiltersModal ? 'block' : 'none'" 
     [class.d-block]="showFiltersModal" tabindex="-1" role="dialog" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
            <div class="modal-header">
                <h4 class="modal-title">Filtrer les notifications</h4>
                <button type="button" class="btn-close btn-close-modal custom-btn-close" (click)="closeFiltersModal()" aria-label="Close">
                    <i class="fa-solid fa-x"></i>
                </button>
            </div>
            <div class="modal-body">
                <div class="row">
                    <!-- Type de notification -->
                    <div class="col-md-6">
                        <div class="mb-3">
                            <label class="form-label">Type</label>
                            <select class="form-select" [(ngModel)]="activeFilters.type">
                                <option [value]="undefined">Tous les types</option>
                                <option *ngFor="let option of typeOptions" [value]="option.value">{{ option.label }}</option>
                            </select>
                        </div>
                    </div>

                    <!-- Statut -->
                    <div class="col-md-6">
                        <div class="mb-3">
                            <label class="form-label">Statut</label>
                            <select class="form-select" [(ngModel)]="activeFilters.statut">
                                <option [value]="undefined">Tous les statuts</option>
                                <option *ngFor="let option of statusOptions" [value]="option.value">{{ option.label }}</option>
                            </select>
                        </div>
                    </div>

                    <!-- Canal -->
                    <div class="col-md-6">
                        <div class="mb-3">
                            <label class="form-label">Canal</label>
                            <select class="form-select" [(ngModel)]="activeFilters.canal">
                                <option [value]="undefined">Tous les canaux</option>
                                <option *ngFor="let option of channelOptions" [value]="option.value">{{ option.label }}</option>
                            </select>
                        </div>
                    </div>

                    <!-- Priorit\xE9 -->
                    <div class="col-md-6">
                        <div class="mb-3">
                            <label class="form-label">Priorit\xE9</label>
                            <select class="form-select" [(ngModel)]="activeFilters.priorite">
                                <option [value]="undefined">Toutes les priorit\xE9s</option>
                                <option *ngFor="let option of priorityOptions" [value]="option.value">{{ option.label }}</option>
                            </select>
                        </div>
                    </div>

                    <!-- Date de d\xE9but -->
                    <div class="col-md-6">
                        <div class="mb-3">
                            <label class="form-label">Date de d\xE9but</label>
                            <input type="date" class="form-control" [(ngModel)]="activeFilters.dateDebut">
                        </div>
                    </div>

                    <!-- Date de fin -->
                    <div class="col-md-6">
                        <div class="mb-3">
                            <label class="form-label">Date de fin</label>
                            <input type="date" class="form-control" [(ngModel)]="activeFilters.dateFin">
                        </div>
                    </div>
                </div>
            </div>
            <div class="modal-footer d-flex align-items-center justify-content-between gap-1">
                <button type="button" class="btn btn-outline-white" (click)="resetFilters()">R\xE9initialiser</button>
                <div class="d-flex gap-2">
                    <button type="button" class="btn btn-outline-white" (click)="closeFiltersModal()">Annuler</button>
                    <button type="button" class="btn btn-primary" (click)="applyFilters()">Appliquer</button>
                </div>
            </div>
        </div>
    </div>
</div>

<!-- Modal de confirmation pour marquer toutes comme lues -->
<div class="modal fade" [class.show]="showMarkAllModal" [style.display]="showMarkAllModal ? 'block' : 'none'" 
     [class.d-block]="showMarkAllModal" tabindex="-1" role="dialog" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered modal-sm">
        <div class="modal-content">
            <div class="modal-body text-center">
                <div class="mb-3">
                    <img src="assets/img/icons/notification-check.svg" alt="Marquer toutes comme lues">
                </div>
                <h6 class="mb-1">Marquer toutes comme lues</h6>
                <p class="mb-3">
                    \xCAtes-vous s\xFBr de vouloir marquer toutes les notifications comme lues ?
                </p>
                <div class="d-flex justify-content-center">
                    <button type="button" class="btn btn-outline-white me-3" (click)="closeMarkAllModal()" [disabled]="processing">Annuler</button>
                    <button type="button" class="btn btn-primary" (click)="markAllAsRead()" [disabled]="processing">
                        <span *ngIf="processing" class="spinner-border spinner-border-sm me-1"></span>
                        Confirmer
                    </button>
                </div>
            </div>
        </div>
    </div>
</div>

<!-- Modal de confirmation de suppression -->
<div class="modal fade" [class.show]="showDeleteModal" [style.display]="showDeleteModal ? 'block' : 'none'" 
     [class.d-block]="showDeleteModal" tabindex="-1" role="dialog" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered modal-sm">
        <div class="modal-content">
            <div class="modal-body text-center">
                <div class="mb-3">
                    <img src="assets/img/icons/delete.svg" alt="Suppression">
                </div>
                <h6 class="mb-1">Supprimer les notifications</h6>
                <p class="mb-3">
                    \xCAtes-vous s\xFBr de vouloir supprimer {{ selectedNotifications.size }} notification(s) s\xE9lectionn\xE9e(s) ?
                </p>
                <div class="d-flex justify-content-center">
                    <button type="button" class="btn btn-outline-white me-3" (click)="closeDeleteModal()" [disabled]="processing">Annuler</button>
                    <button type="button" class="btn btn-danger" (click)="deleteSelectedNotifications()" [disabled]="processing">
                        <span *ngIf="processing" class="spinner-border spinner-border-sm me-1"></span>
                        Supprimer
                    </button>
                </div>
            </div>
        </div>
    </div>
</div>
`;
  }
});

// angular:jit:style:src/app/modules/notifications/notifications.component.scss
var notifications_component_default2;
var init_notifications_component2 = __esm({
  "angular:jit:style:src/app/modules/notifications/notifications.component.scss"() {
    notifications_component_default2 = "/* src/app/modules/notifications/notifications.component.scss */\n.notifications-container .notification-item {\n  transition: all 0.3s ease;\n}\n.notifications-container .notification-item:hover {\n  background-color: rgba(var(--bs-primary-rgb), 0.05);\n}\n.notifications-container .notification-item.unread {\n  background-color: rgba(var(--bs-primary-rgb), 0.1);\n  border-left: 3px solid var(--bs-primary);\n}\n.notifications-container .notification-item.recent {\n  animation: pulse 2s infinite;\n}\n.notifications-container .notification-icon {\n  width: 40px;\n  height: 40px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border-radius: 8px;\n}\n.notifications-container .notification-icon.priority-info {\n  background-color: rgba(var(--bs-primary-rgb), 0.1);\n  color: var(--bs-primary);\n}\n.notifications-container .notification-icon.priority-warning {\n  background-color: rgba(var(--bs-warning-rgb), 0.1);\n  color: var(--bs-warning);\n}\n.notifications-container .notification-icon.priority-error {\n  background-color: rgba(var(--bs-danger-rgb), 0.1);\n  color: var(--bs-danger);\n}\n.notifications-container .notification-icon.priority-critical {\n  background-color: rgba(var(--bs-dark-rgb), 0.1);\n  color: var(--bs-dark);\n}\n.notifications-container .notification-badge {\n  font-size: 0.75rem;\n  padding: 0.25rem 0.5rem;\n}\n.notifications-container .notification-badge.status-en-attente {\n  background-color: rgba(var(--bs-warning-rgb), 0.1);\n  color: var(--bs-warning);\n}\n.notifications-container .notification-badge.status-envoye {\n  background-color: rgba(var(--bs-info-rgb), 0.1);\n  color: var(--bs-info);\n}\n.notifications-container .notification-badge.status-delivre {\n  background-color: rgba(var(--bs-primary-rgb), 0.1);\n  color: var(--bs-primary);\n}\n.notifications-container .notification-badge.status-lu {\n  background-color: rgba(var(--bs-success-rgb), 0.1);\n  color: var(--bs-success);\n}\n.notifications-container .notification-badge.status-echec {\n  background-color: rgba(var(--bs-danger-rgb), 0.1);\n  color: var(--bs-danger);\n}\n.notifications-container .notification-actions {\n  opacity: 0;\n  transition: opacity 0.3s ease;\n}\n.notification-item:hover .notifications-container .notification-actions {\n  opacity: 1;\n}\n.notifications-container .stats-card {\n  transition: transform 0.3s ease;\n}\n.notifications-container .stats-card:hover {\n  transform: translateY(-5px);\n}\n.notifications-container .filters-modal .modal-content {\n  border-radius: 12px;\n  border: none;\n  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.1);\n}\n.notifications-container .filters-modal .modal-header {\n  border-bottom: 1px solid var(--bs-border-color);\n  padding: 1.5rem;\n}\n.notifications-container .filters-modal .modal-header .modal-title {\n  font-weight: 600;\n  color: var(--bs-heading-color);\n}\n.notifications-container .filters-modal .modal-body {\n  padding: 1.5rem;\n}\n.notifications-container .filters-modal .modal-footer {\n  border-top: 1px solid var(--bs-border-color);\n  padding: 1rem 1.5rem;\n}\n.notifications-container .confirmation-modal .modal-content {\n  border-radius: 12px;\n  border: none;\n  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.1);\n}\n.notifications-container .confirmation-modal .modal-body {\n  padding: 2rem;\n}\n.notifications-container .confirmation-modal .modal-body img {\n  max-width: 80px;\n  margin: 0 auto 1.5rem;\n}\n.notifications-container .confirmation-modal .modal-body h6 {\n  font-weight: 600;\n  margin-bottom: 0.5rem;\n  color: var(--bs-heading-color);\n}\n.notifications-container .confirmation-modal .modal-body p {\n  color: var(--bs-secondary-color);\n  margin-bottom: 1.5rem;\n}\n@keyframes pulse {\n  0% {\n    box-shadow: 0 0 0 0 rgba(var(--bs-primary-rgb), 0.4);\n  }\n  70% {\n    box-shadow: 0 0 0 10px rgba(var(--bs-primary-rgb), 0);\n  }\n  100% {\n    box-shadow: 0 0 0 0 rgba(var(--bs-primary-rgb), 0);\n  }\n}\n@media (max-width: 768px) {\n  .notifications-container .stats-card {\n    margin-bottom: 1rem;\n  }\n  .notifications-container .table-responsive {\n    font-size: 0.875rem;\n  }\n  .notifications-container .table-responsive th,\n  .notifications-container .table-responsive td {\n    padding: 0.5rem;\n  }\n  .notifications-container .table-responsive .notification-actions {\n    opacity: 1;\n  }\n  .notifications-container .modal-dialog {\n    margin: 0.5rem;\n  }\n  .notifications-container .modal-dialog.modal-dialog-centered {\n    min-height: calc(100% - 1rem);\n  }\n}\n[data-bs-theme=dark] .notifications-container .notification-item:hover {\n  background-color: rgba(255, 255, 255, 0.05);\n}\n[data-bs-theme=dark] .notifications-container .notification-item.unread {\n  background-color: rgba(var(--bs-primary-rgb), 0.15);\n}\n[data-bs-theme=dark] .notifications-container .notification-icon.priority-info {\n  background-color: rgba(var(--bs-primary-rgb), 0.2);\n}\n[data-bs-theme=dark] .notifications-container .notification-icon.priority-warning {\n  background-color: rgba(var(--bs-warning-rgb), 0.2);\n}\n[data-bs-theme=dark] .notifications-container .notification-icon.priority-error {\n  background-color: rgba(var(--bs-danger-rgb), 0.2);\n}\n[data-bs-theme=dark] .notifications-container .notification-icon.priority-critical {\n  background-color: rgba(var(--bs-dark-rgb), 0.2);\n}\n[data-bs-theme=dark] .notifications-container .notification-badge.status-en-attente {\n  background-color: rgba(var(--bs-warning-rgb), 0.2);\n}\n[data-bs-theme=dark] .notifications-container .notification-badge.status-envoye {\n  background-color: rgba(var(--bs-info-rgb), 0.2);\n}\n[data-bs-theme=dark] .notifications-container .notification-badge.status-delivre {\n  background-color: rgba(var(--bs-primary-rgb), 0.2);\n}\n[data-bs-theme=dark] .notifications-container .notification-badge.status-lu {\n  background-color: rgba(var(--bs-success-rgb), 0.2);\n}\n[data-bs-theme=dark] .notifications-container .notification-badge.status-echec {\n  background-color: rgba(var(--bs-danger-rgb), 0.2);\n}\n/*# sourceMappingURL=notifications.component.css.map */\n";
  }
});

// src/app/modules/notifications/application/services/notification.service.ts
var NotificationService;
var init_notification_service = __esm({
  "src/app/modules/notifications/application/services/notification.service.ts"() {
    "use strict";
    init_tslib_es6();
    init_core();
    init_http();
    init_auth_service();
    init_environment();
    NotificationService = class NotificationService2 {
      baseUrl = environment.api + "notification/notifications";
      authService = inject(AuthService);
      http = inject(HttpClient);
      /**
       * Récupère les notifications de l'utilisateur courant avec pagination et filtres
       */
      getNotifications(filters = {}) {
        const user = this.authService.user;
        if (!user || !user.id) {
          throw new Error("User not authenticated");
        }
        const params = {
          destinataireId: user.id.toString(),
          page: filters.page?.toString() || "0",
          size: filters.size?.toString() || "20",
          sort: filters.sort || "nsDateCreation,desc"
        };
        if (filters.statut)
          params.statut = filters.statut;
        if (filters.canal)
          params.canal = filters.canal;
        if (filters.type)
          params.type = filters.type;
        if (filters.priorite)
          params.priorite = filters.priorite;
        if (filters.dateDebut)
          params.dateDebut = filters.dateDebut;
        if (filters.dateFin)
          params.dateFin = filters.dateFin;
        return this.http.get(this.baseUrl, { params });
      }
      /**
       * Récupère une notification par son ID
       */
      getNotification(id) {
        return this.http.get(`${this.baseUrl}/${id}`);
      }
      /**
       * Marque une notification comme lue
       */
      markAsRead(id) {
        return this.http.patch(`${this.baseUrl}/${id}/read`, {});
      }
      /**
       * Marque plusieurs notifications comme lues
       */
      markMultipleAsRead(ids) {
        return this.http.patch(`${this.baseUrl}/batch-read`, { ids });
      }
      /**
       * Marque toutes les notifications de l'utilisateur comme lues
       */
      markAllAsRead() {
        const user = this.authService.user;
        if (!user || !user.id) {
          throw new Error("User not authenticated");
        }
        return this.http.patch(`${this.baseUrl}/mark-all-read`, {
          destinataireId: user.id
        });
      }
      /**
       * Supprime une notification
       */
      deleteNotification(id) {
        return this.http.delete(`${this.baseUrl}/${id}`);
      }
      /**
       * Supprime plusieurs notifications
       */
      deleteMultipleNotifications(ids) {
        return this.http.post(`${this.baseUrl}/batch-delete`, { ids });
      }
      /**
       * Récupère les statistiques des notifications de l'utilisateur
       */
      getNotificationStats() {
        const user = this.authService.user;
        if (!user || !user.id) {
          throw new Error("User not authenticated");
        }
        return this.http.get(`${this.baseUrl}/stats`, {
          params: { destinataireId: user.id.toString() }
        });
      }
      /**
       * Récupère le nombre de notifications non lues
       */
      getUnreadCount() {
        const user = this.authService.user;
        if (!user || !user.id) {
          throw new Error("User not authenticated");
        }
        return this.http.get(`${this.baseUrl}/unread-count`, {
          params: { destinataireId: user.id.toString() }
        });
      }
      /**
       * Récupère les options pour les types de notifications
       */
      getNotificationTypeOptions() {
        return [
          { value: "NOUVEAU_TICKET", label: "Nouveau ticket" },
          { value: "TICKET_MODIFIE", label: "Ticket modifi\xE9" },
          { value: "TICKET_RESOLU", label: "Ticket r\xE9solu" },
          { value: "NOUVELLE_PLAINTE", label: "Nouvelle plainte" },
          { value: "PLAINTE_MODIFIEE", label: "Plainte modifi\xE9e" },
          { value: "PLAINTE_RESOLUE", label: "Plainte r\xE9solue" },
          { value: "NOUVEAU_MESSAGE", label: "Nouveau message" },
          { value: "RAPPEL", label: "Rappel" },
          { value: "ALERTE", label: "Alerte" },
          { value: "AUTRE", label: "Autre" }
        ];
      }
      /**
       * Récupère les options pour les priorités
       */
      getPriorityOptions() {
        return [
          { value: "INFO", label: "Information", color: "primary" },
          { value: "WARNING", label: "Avertissement", color: "warning" },
          { value: "ERROR", label: "Erreur", color: "danger" },
          { value: "CRITICAL", label: "Critique", color: "dark" }
        ];
      }
      /**
       * Récupère les options pour les canaux
       */
      getChannelOptions() {
        return [
          { value: "EMAIL", label: "Email", icon: "isax isax-sms" },
          { value: "SMS", label: "SMS", icon: "isax isax-message" },
          { value: "NOTIFICATION_INTERNE", label: "Notification interne", icon: "isax isax-notification" },
          { value: "WHATSAPP", label: "WhatsApp", icon: "isax isax-whatsapp" }
        ];
      }
      /**
       * Récupère les options pour les statuts
       */
      getStatusOptions() {
        return [
          { value: "EN_ATTENTE", label: "En attente", badgeClass: "badge-soft-warning" },
          { value: "ENVOYE", label: "Envoy\xE9", badgeClass: "badge-soft-info" },
          { value: "DELIVRE", label: "D\xE9livr\xE9", badgeClass: "badge-soft-primary" },
          { value: "LU", label: "Lu", badgeClass: "badge-soft-success" },
          { value: "ECHEC", label: "\xC9chec", badgeClass: "badge-soft-danger" }
        ];
      }
      /**
       * Formate la date pour l'affichage
       */
      formatDate(dateString) {
        const date = new Date(dateString);
        const now = /* @__PURE__ */ new Date();
        const diffMs = now.getTime() - date.getTime();
        const diffMins = Math.floor(diffMs / 6e4);
        const diffHours = Math.floor(diffMs / 36e5);
        const diffDays = Math.floor(diffMs / 864e5);
        if (diffMins < 1) {
          return "\xC0 l'instant";
        } else if (diffMins < 60) {
          return `Il y a ${diffMins} min`;
        } else if (diffHours < 24) {
          return `Il y a ${diffHours} h`;
        } else if (diffDays < 7) {
          return `Il y a ${diffDays} j`;
        } else {
          return date.toLocaleDateString("fr-FR", {
            day: "2-digit",
            month: "2-digit",
            year: "numeric",
            hour: "2-digit",
            minute: "2-digit"
          });
        }
      }
      /**
       * Obtient l'icône en fonction du type de notification
       */
      getNotificationIcon(type) {
        const icons = {
          "NOUVEAU_TICKET": "isax isax-ticket",
          "TICKET_MODIFIE": "isax isax-edit",
          "TICKET_RESOLU": "isax isax-tick-circle",
          "NOUVELLE_PLAINTE": "isax isax-danger",
          "PLAINTE_MODIFIEE": "isax isax-edit-2",
          "PLAINTE_RESOLUE": "isax isax-tick-circle",
          "NOUVEAU_MESSAGE": "isax isax-message",
          "RAPPEL": "isax isax-calendar",
          "ALERTE": "isax isax-notification",
          "AUTRE": "isax isax-info-circle"
        };
        return icons[type] || "isax isax-info-circle";
      }
      /**
       * Obtient la couleur en fonction de la priorité
       */
      getPriorityColor(priority) {
        const colors = {
          "INFO": "primary",
          "WARNING": "warning",
          "ERROR": "danger",
          "CRITICAL": "dark"
        };
        return colors[priority] || "primary";
      }
      /**
       * Vérifie si une notification est récente (moins de 24h)
       */
      isRecentNotification(dateString) {
        const date = new Date(dateString);
        const now = /* @__PURE__ */ new Date();
        const diffMs = now.getTime() - date.getTime();
        const diffHours = diffMs / 36e5;
        return diffHours < 24;
      }
      /**
       * Extrait le lien d'action à partir du message de notification
       */
      extractActionLink(notification) {
        if (notification.plainteId && notification.plainteNumero) {
          return `/complaints/${notification.plainteId}`;
        }
        switch (notification.nsType) {
          case "NOUVEAU_TICKET":
          case "TICKET_MODIFIE":
          case "TICKET_RESOLU":
            return "/tickets";
          case "NOUVELLE_PLAINTE":
          case "PLAINTE_MODIFIEE":
          case "PLAINTE_RESOLUE":
            return "/complaints";
          case "NOUVEAU_MESSAGE":
            return "/messages";
          default:
            return null;
        }
      }
    };
    NotificationService = __decorate([
      Injectable({
        providedIn: "root"
      })
    ], NotificationService);
  }
});

// src/app/modules/notifications/notifications.component.ts
var NotificationsComponent;
var init_notifications_component3 = __esm({
  "src/app/modules/notifications/notifications.component.ts"() {
    "use strict";
    init_tslib_es6();
    init_notifications_component();
    init_notifications_component2();
    init_core();
    init_common();
    init_forms();
    init_router();
    init_notification_service();
    init_auth_service();
    init_toaster_service();
    NotificationsComponent = class NotificationsComponent2 {
      notificationService = inject(NotificationService);
      authService = inject(AuthService);
      toasterService = inject(ToasterService);
      subscriptions = [];
      // États
      loading = false;
      loadingStats = false;
      processing = false;
      error = null;
      success = null;
      // Données
      notifications = [];
      selectedNotifications = /* @__PURE__ */ new Set();
      stats = null;
      unreadCount = 0;
      // Pagination
      currentPage = 0;
      pageSize = 20;
      totalElements = 0;
      totalPages = 0;
      // Filtres
      filters = {
        page: 0,
        size: 20,
        sort: "nsDateCreation,desc"
      };
      // Options de filtres
      typeOptions = this.notificationService.getNotificationTypeOptions();
      priorityOptions = this.notificationService.getPriorityOptions();
      channelOptions = this.notificationService.getChannelOptions();
      statusOptions = this.notificationService.getStatusOptions();
      // Filtres actifs
      activeFilters = {};
      // Modal
      showFiltersModal = false;
      showDeleteModal = false;
      showMarkAllModal = false;
      ngOnInit() {
        this.loadNotifications();
        this.loadStats();
        this.loadUnreadCount();
      }
      ngOnDestroy() {
        this.subscriptions.forEach((sub) => sub.unsubscribe());
      }
      /**
       * Charge les notifications avec les filtres actuels
       */
      loadNotifications() {
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
          error: (error) => {
            console.error("Erreur lors du chargement des notifications:", error);
            this.error = error.message || "Erreur lors du chargement des notifications";
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
      loadStats() {
        this.loadingStats = true;
        const sub = this.notificationService.getNotificationStats().subscribe({
          next: (stats) => {
            this.stats = stats;
            this.loadingStats = false;
          },
          error: (error) => {
            console.error("Erreur lors du chargement des statistiques:", error);
            this.loadingStats = false;
          }
        });
        this.subscriptions.push(sub);
      }
      /**
       * Charge le nombre de notifications non lues
       */
      loadUnreadCount() {
        const sub = this.notificationService.getUnreadCount().subscribe({
          next: (response) => {
            this.unreadCount = response.count;
          },
          error: (error) => {
            console.error("Erreur lors du chargement du nombre de notifications non lues:", error);
          }
        });
        this.subscriptions.push(sub);
      }
      /**
       * Applique les filtres
       */
      applyFilters() {
        this.filters = __spreadProps(__spreadValues(__spreadValues({}, this.filters), this.activeFilters), {
          page: 0
          // Retour à la première page
        });
        this.loadNotifications();
        this.closeFiltersModal();
      }
      /**
       * Réinitialise les filtres
       */
      resetFilters() {
        this.activeFilters = {};
        this.filters = {
          page: 0,
          size: 20,
          sort: "nsDateCreation,desc"
        };
        this.loadNotifications();
        this.closeFiltersModal();
      }
      /**
       * Change de page
       */
      changePage(page) {
        if (page >= 0 && page < this.totalPages) {
          this.filters.page = page;
          this.loadNotifications();
        }
      }
      /**
       * Sélectionne/désélectionne une notification
       */
      toggleSelection(id) {
        if (this.selectedNotifications.has(id)) {
          this.selectedNotifications.delete(id);
        } else {
          this.selectedNotifications.add(id);
        }
      }
      /**
       * Sélectionne/désélectionne toutes les notifications
       */
      toggleSelectAll() {
        if (this.selectedNotifications.size === this.notifications.length) {
          this.selectedNotifications.clear();
        } else {
          this.notifications.forEach((notification) => {
            this.selectedNotifications.add(notification.id);
          });
        }
      }
      /**
       * Marque une notification comme lue
       */
      markAsRead(notification, event) {
        if (event)
          event.stopPropagation();
        if (notification.nsStatut === "LU")
          return;
        this.processing = true;
        const sub = this.notificationService.markAsRead(notification.id).subscribe({
          next: (response) => {
            notification.nsStatut = response.nsStatut;
            this.unreadCount = Math.max(0, this.unreadCount - 1);
            this.toasterService.typeSuccess("Notification marqu\xE9e comme lue");
            this.processing = false;
          },
          error: (error) => {
            console.error("Erreur lors du marquage comme lu:", error);
            this.toasterService.typeError("Erreur lors du marquage comme lu");
            this.processing = false;
          }
        });
        this.subscriptions.push(sub);
      }
      /**
       * Marque les notifications sélectionnées comme lues
       */
      markSelectedAsRead() {
        if (this.selectedNotifications.size === 0)
          return;
        const ids = Array.from(this.selectedNotifications);
        this.processing = true;
        const sub = this.notificationService.markMultipleAsRead(ids).subscribe({
          next: (responses) => {
            responses.forEach((response) => {
              const notification = this.notifications.find((n) => n.id === response.id);
              if (notification) {
                notification.nsStatut = response.nsStatut;
              }
            });
            this.unreadCount = Math.max(0, this.unreadCount - ids.length);
            this.selectedNotifications.clear();
            this.toasterService.typeSuccess(`${ids.length} notification(s) marqu\xE9e(s) comme lue(s)`);
            this.processing = false;
          },
          error: (error) => {
            console.error("Erreur lors du marquage multiple comme lu:", error);
            this.toasterService.typeError("Erreur lors du marquage comme lu");
            this.processing = false;
          }
        });
        this.subscriptions.push(sub);
      }
      /**
       * Marque toutes les notifications comme lues
       */
      markAllAsRead() {
        this.processing = true;
        const sub = this.notificationService.markAllAsRead().subscribe({
          next: (response) => {
            this.notifications.forEach((notification) => {
              if (notification.nsStatut !== "LU") {
                notification.nsStatut = "LU";
              }
            });
            this.unreadCount = 0;
            this.toasterService.typeSuccess(`${response.count} notification(s) marqu\xE9e(s) comme lue(s)`);
            this.processing = false;
            this.closeMarkAllModal();
          },
          error: (error) => {
            console.error("Erreur lors du marquage de toutes les notifications comme lues:", error);
            this.toasterService.typeError("Erreur lors du marquage comme lu");
            this.processing = false;
          }
        });
        this.subscriptions.push(sub);
      }
      /**
       * Supprime une notification
       */
      deleteNotification(notification, event) {
        if (event)
          event.stopPropagation();
        this.processing = true;
        const sub = this.notificationService.deleteNotification(notification.id).subscribe({
          next: () => {
            this.notifications = this.notifications.filter((n) => n.id !== notification.id);
            if (notification.nsStatut !== "LU") {
              this.unreadCount = Math.max(0, this.unreadCount - 1);
            }
            this.totalElements--;
            this.toasterService.typeSuccess("Notification supprim\xE9e");
            this.processing = false;
          },
          error: (error) => {
            console.error("Erreur lors de la suppression:", error);
            this.toasterService.typeError("Erreur lors de la suppression");
            this.processing = false;
          }
        });
        this.subscriptions.push(sub);
      }
      /**
       * Supprime les notifications sélectionnées
       */
      deleteSelectedNotifications() {
        if (this.selectedNotifications.size === 0)
          return;
        const ids = Array.from(this.selectedNotifications);
        this.processing = true;
        const sub = this.notificationService.deleteMultipleNotifications(ids).subscribe({
          next: (response) => {
            this.notifications = this.notifications.filter((n) => !ids.includes(n.id));
            const deletedUnread = this.notifications.filter((n) => ids.includes(n.id) && n.nsStatut !== "LU").length;
            this.unreadCount = Math.max(0, this.unreadCount - deletedUnread);
            this.totalElements -= response.count;
            this.selectedNotifications.clear();
            this.toasterService.typeSuccess(`${response.count} notification(s) supprim\xE9e(s)`);
            this.processing = false;
            this.closeDeleteModal();
          },
          error: (error) => {
            console.error("Erreur lors de la suppression multiple:", error);
            this.toasterService.typeError("Erreur lors de la suppression");
            this.processing = false;
          }
        });
        this.subscriptions.push(sub);
      }
      /**
       * Ouvre le modal de filtres
       */
      openFiltersModal() {
        this.showFiltersModal = true;
      }
      /**
       * Ferme le modal de filtres
       */
      closeFiltersModal() {
        this.showFiltersModal = false;
      }
      /**
       * Ouvre le modal de confirmation de suppression
       */
      openDeleteModal() {
        if (this.selectedNotifications.size === 0) {
          this.toasterService.typeWarning("Veuillez s\xE9lectionner au moins une notification");
          return;
        }
        this.showDeleteModal = true;
      }
      /**
       * Ferme le modal de confirmation de suppression
       */
      closeDeleteModal() {
        this.showDeleteModal = false;
      }
      /**
       * Ouvre le modal de confirmation pour marquer toutes comme lues
       */
      openMarkAllModal() {
        this.showMarkAllModal = true;
      }
      /**
       * Ferme le modal de confirmation pour marquer toutes comme lues
       */
      closeMarkAllModal() {
        this.showMarkAllModal = false;
      }
      /**
       * Obtient l'icône pour un type de notification
       */
      getNotificationIcon(type) {
        return this.notificationService.getNotificationIcon(type);
      }
      /**
       * Obtient la couleur pour une priorité
       */
      getPriorityColor(priority) {
        return this.notificationService.getPriorityColor(priority);
      }
      /**
       * Formate une date
       */
      formatDate(dateString) {
        return this.notificationService.formatDate(dateString);
      }
      /**
       * Vérifie si une notification est récente
       */
      isRecentNotification(dateString) {
        return this.notificationService.isRecentNotification(dateString);
      }
      /**
       * Obtient le lien d'action pour une notification
       */
      getActionLink(notification) {
        return this.notificationService.extractActionLink(notification);
      }
      /**
       * Obtient le texte du badge de statut
       */
      getStatusText(status) {
        const option = this.statusOptions.find((opt) => opt.value === status);
        return option ? option.label : status;
      }
      /**
       * Obtient la classe CSS du badge de statut
       */
      getStatusBadgeClass(status) {
        const option = this.statusOptions.find((opt) => opt.value === status);
        return option ? option.badgeClass : "badge-soft-secondary";
      }
      /**
       * Obtient le texte du type de notification
       */
      getTypeText(type) {
        const option = this.typeOptions.find((opt) => opt.value === type);
        return option ? option.label : type;
      }
      /**
       * Obtient le texte du canal
       */
      getChannelText(channel) {
        const option = this.channelOptions.find((opt) => opt.value === channel);
        return option ? option.label : channel;
      }
      /**
       * Obtient l'icône du canal
       */
      getChannelIcon(channel) {
        const option = this.channelOptions.find((opt) => opt.value === channel);
        return option ? option.icon : "isax isax-info-circle";
      }
      /**
       * Calcule les pages à afficher dans la pagination
       */
      getPages() {
        const pages = [];
        const maxVisiblePages = 5;
        let startPage = Math.max(0, this.currentPage - Math.floor(maxVisiblePages / 2));
        let endPage = Math.min(this.totalPages - 1, startPage + maxVisiblePages - 1);
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
      min(a, b) {
        return Math.min(a, b);
      }
    };
    NotificationsComponent = __decorate([
      Component({
        selector: "app-notifications",
        imports: [CommonModule, FormsModule, RouterModule],
        template: notifications_component_default,
        styles: [notifications_component_default2]
      })
    ], NotificationsComponent);
  }
});

export {
  NotificationService,
  init_notification_service,
  NotificationsComponent,
  init_notifications_component3 as init_notifications_component
};
//# sourceMappingURL=chunk-FPUSID64.js.map

import { Component, OnInit, OnDestroy, Inject } from '@angular/core';
import { MenuItem } from '../../../../../../src/app/core/models/models';
import { AuthService, DataService, routes } from '../../../../../../src/app/core/core.index';
import { SideBarService } from '../../../../../../src/app/core/services/side-bar/side-bar.service';
import { NavigationEnd, Router, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { LanguageSelectorComponent } from '../../../../core/services/translation';
import { User } from '../../../../modules/manage-users';
import {
  NotificationDto,
  NotificationService,
  GetNotificationsUseCase,
  GET_NOTIFICATIONS_USE_CASE,
  GetNotificationsUseCaseImpl,
  MarkNotificationAsReadUseCase,
  MARK_NOTIFICATION_AS_READ_USE_CASE,
  MarkNotificationAsReadUseCaseImpl,
  DeleteNotificationUseCase,
  DELETE_NOTIFICATION_USE_CASE,
  DeleteNotificationUseCaseImpl
} from '../../../../modules/notifications';
import { Subscription } from 'rxjs';
import { APPLICATION_CONTEXT } from '../../../../modules/_shared';
import { LocalStorageContextAdapter } from '../../../../modules/_shared/infrastructure/adapters/local-storage-context.adapter';
interface breadCrumbData {
  hasSubData: boolean;
  data: string;
  data2?: string;
  base: string;
  route?: string;
}
interface url {
  url: string
}
@Component({
  selector: 'app-header-one',
  templateUrl: './header-one.component.html',
  styleUrls: ['./header-one.component.scss'],
  imports: [CommonModule, RouterLink, LanguageSelectorComponent],
  providers: [
    { provide: 'LOCAL_STORAGE', useValue: localStorage },
    { provide: APPLICATION_CONTEXT, useClass: LocalStorageContextAdapter },
    { provide: GET_NOTIFICATIONS_USE_CASE, useClass: GetNotificationsUseCaseImpl },
    { provide: MARK_NOTIFICATION_AS_READ_USE_CASE, useClass: MarkNotificationAsReadUseCaseImpl },
    { provide: DELETE_NOTIFICATION_USE_CASE, useClass: DeleteNotificationUseCaseImpl }
  ]
})

export class HeaderOneComponent implements OnInit, OnDestroy {
  public miniSidebar = false;
  public headerSidebarStyle = '1';
  public routes = routes;
  base = '';
  page = '';
  last = '';
  currentRoute = '';
  themeColor = 'light';
  public themeMode: string = '';
  mobileSidebar = false;
  elem = document.documentElement
  bread_Crumb: any[] = [];
  currentUser: User | null = null;

  // Notification properties
  notifications: NotificationDto[] = [];
  unreadCount = 0;
  loadingNotifications = false;
  private subscriptions: Subscription[] = [];
  constructor(
    private auth: AuthService,
    public sideBar: SideBarService,
    private data: DataService,
    public router: Router,
    private notificationService: NotificationService,
    @Inject(GET_NOTIFICATIONS_USE_CASE) private getNotificationsUseCase: GetNotificationsUseCase,
    @Inject(MARK_NOTIFICATION_AS_READ_USE_CASE) private markAsReadUseCase: MarkNotificationAsReadUseCase,
    @Inject(DELETE_NOTIFICATION_USE_CASE) private deleteNotificationUseCase: DeleteNotificationUseCase
  ) {
    this.sideBar.toggleSideBar.subscribe((res: string) => {
      if (res == 'true') {
        this.miniSidebar = true;
      } else {
        this.miniSidebar = false;
      }

    });
    router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.getRoutes(event);
      }
    });
    this.getRoutes(this.router);
    this.sideBar.headerSidebarStyle.subscribe((res: string) => {
      this.headerSidebarStyle = res;
    });
    this.data.getBreadCrumb.subscribe((res: breadCrumbData[]) => {
      this.bread_Crumb = res;
    });
    this.sideBar.themeColors.subscribe((res: string) => {
      this.themeColor = res;
    });
    // Récupérer l'utilisateur connecté
    this.currentUser = this.auth.user;
  }

  private getRoutes(route: url): void {
    const splitVal = route.url.split('/');
    this.currentRoute = route.url;
    this.base = splitVal[1];
    this.page = splitVal[2];
    this.last = splitVal[3];
  }

  public async logOut(): Promise<void> {
    await this.auth.logout();
  }
  public toggleSideBar(): void {
    this.sideBar.switchSideMenuPosition();
  }
  public toggleMobileIcon(): void {
    this.sideBar.switchMobileSideBarPosition();
    this.mobileSidebar = !this.mobileSidebar;
  }
  overlayClose() {
    this.mobileSidebar = false;
  }
  fullscreen() {
    if (!document.fullscreenElement) {
      this.elem.requestFullscreen();
    }
    else {
      document.exitFullscreen();
    }
  }
  ngOnInit(): void {
    const themeColor = localStorage.getItem('themeColor') || 'light';
    this.sideBar.changeThemeColor(themeColor);
    this.loadNotifications();
    this.loadUnreadCount();
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(sub => sub.unsubscribe());
  }

  /**
   * Load recent notifications for the dropdown
   */
  async loadNotifications(): Promise<void> {
    this.loadingNotifications = true;
    const result = await this.getNotificationsUseCase.execute({ page: 0, size: 5, sort: 'nsDateCreation,desc' });

    if (result.isSuccess) {
      this.notifications = result.value.content;
    } else {
      console.error('Error loading notifications:', result.error);
    }

    this.loadingNotifications = false;
  }

  /**
   * Load unread notification count
   */
  loadUnreadCount(): void {
    const sub = this.notificationService.getUnreadCount()
      .subscribe({
        next: (response: { count: number }) => {
          this.unreadCount = response.count;
        },
        error: (error: any) => {
          console.error('Error loading unread count:', error);
        }
      });
    this.subscriptions.push(sub);
  }

  /**
   * Mark a notification as read
   */
  async markNotificationAsRead(notification: NotificationDto, event: Event): Promise<void> {
    event.stopPropagation();
    if (notification.nsStatut === 'LU') return;

    const result = await this.markAsReadUseCase.execute(notification.id);

    if (result.isSuccess) {
      notification.nsStatut = result.value.nsStatut;
      this.unreadCount = Math.max(0, this.unreadCount - 1);
    } else {
      console.error('Error marking notification as read:', result.error);
    }
  }

  /**
   * Mark all notifications as read
   */
  markAllNotificationsAsRead(): void {
    const sub = this.notificationService.markAllAsRead()
      .subscribe({
        next: (response) => {
          this.notifications.forEach(n => n.nsStatut = 'LU');
          this.unreadCount = 0;
        },
        error: (error) => {
          console.error('Error marking all as read:', error);
        }
      });
    this.subscriptions.push(sub);
  }

  /**
   * Delete a notification
   */
  async deleteNotification(notification: NotificationDto, event: Event): Promise<void> {
    event.stopPropagation();
    const result = await this.deleteNotificationUseCase.execute(notification.id);

    if (result.isSuccess) {
      this.notifications = this.notifications.filter(n => n.id !== notification.id);
      if (notification.nsStatut !== 'LU') {
        this.unreadCount = Math.max(0, this.unreadCount - 1);
      }
    } else {
      console.error('Error deleting notification:', result.error);
    }
  }

  /**
   * Get notification icon based on type
   */
  getNotificationIcon(notification: NotificationDto): string {
    return this.notificationService.getNotificationIcon(notification.nsType);
  }

  /**
   * Format notification date
   */
  formatNotificationDate(dateString: string): string {
    return this.notificationService.formatDate(dateString);
  }

  /**
   * Get user avatar URL or generate initials avatar
   */
  getUserAvatar(): string {
    if (this.currentUser?.photo && this.currentUser.photo != "string") {
      return this.currentUser.photo;
    }
    // Return default avatar
    return 'assets/img/profiles/avatar-01.jpg';
  }

  /**
   * Get user initials for avatar
   */
  getUserInitials(): string {
    if (!this.currentUser?.nomPrenom) {
      return 'U';
    }
    const names = this.currentUser.nomPrenom.split(' ');
    if (names.length >= 2) {
      return (names[0].charAt(0) + names[1].charAt(0)).toUpperCase();
    }
    return names[0].charAt(0).toUpperCase();
  }
}

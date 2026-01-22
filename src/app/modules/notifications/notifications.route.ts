import { Routes } from '@angular/router';
import { NotificationsComponent } from './notifications.component';

export const NOTIFICATIONS_ROUTES: Routes = [
  {
    path: '',
    component: NotificationsComponent,
    data: {
      title: 'Notifications',
      breadcrumb: [
        {
          label: 'Accueil',
          url: '/'
        },
        {
          label: 'Notifications',
          url: ''
        }
      ]
    }
  }
];

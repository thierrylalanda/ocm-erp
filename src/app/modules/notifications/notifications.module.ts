import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { NotificationsComponent } from './notifications.component';
import { NOTIFICATIONS_ROUTES } from './notifications.route';

@NgModule({
  imports: [
    NotificationsComponent,
    RouterModule.forChild(NOTIFICATIONS_ROUTES)
  ]
})
export class NotificationsModule { }

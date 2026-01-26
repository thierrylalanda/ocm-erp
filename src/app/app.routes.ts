import { Routes } from '@angular/router';
import { LoggedInGuard } from './core/guards/loggedIn/logged-in.guard';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'index',
    pathMatch: 'full',
  },
  {
    // Auth Routes - Lazy loaded but defined at root level due to path: 'auth' inside
    path: '',
    loadChildren: () => import('./auth/auth.routes').then(m => m.AUTH_ROUTES)
  },
  {
    // Modules Routes - Clean Architecture implementation
    path: 'app',
    canActivate: [LoggedInGuard],
    canActivateChild: [LoggedInGuard],
    loadChildren: () => import('./modules/modules.routes').then(m => m.MODULES_ROUTES)
  },
  {
    // Template Features Routes - Acts as catch-all for template pages
    path: '',
    loadChildren: () => import('./features/features.routes').then(m => m.FEATURES_ROUTES)
  }
];

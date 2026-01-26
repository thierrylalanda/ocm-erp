import { Routes } from '@angular/router';

export const AUTH_ROUTES: Routes = [
    {
        path: 'auth', loadComponent: () => import('./auth.component').then((m) => m.AuthComponent),
        children: [
            { path: 'login', loadComponent: () => import('./login/login.component').then((m) => m.LoginComponent), },
            { path: 'register', loadComponent: () => import('./register/register.component').then((m) => m.RegisterComponent), },
            { path: 'lock-screen', loadComponent: () => import('./lock-screen/lock-screen.component').then((m) => m.LockScreenComponent,), },
            { path: 'forgot-password', loadComponent: () => import('./forgot-password/forgot-password.component').then((m) => m.ForgotPasswordComponent,), },
            { path: 'email-verification', loadComponent: () => import('./email-verification/email-verification.component').then(m => m.EmailVerificationComponent) },
            { path: 'two-step-verification', loadComponent: () => import('./two-step-verification/two-step-verification.component').then(m => m.TwoStepVerificationComponent) },
            { path: 'reset-password', loadComponent: () => import('./reset-password/reset-password.component').then(m => m.ResetPasswordComponent) },
            { path: 'success', loadComponent: () => import('./success/success.component').then(m => m.SuccessComponent) },
        ],
    },
];

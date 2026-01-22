import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration, withEventReplay } from '@angular/platform-browser';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideHttpClient, withInterceptorsFromDi, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgxMaskModule } from 'ngx-mask';
import { USER_REPOSITORY } from './modules/_shared/domain/repositories/user.repository';
import { InMemoryUserRepository } from './modules/_shared/infrastructure/repositories/in-memory-user.repository';
import { AuthInterceptor } from './core/interceptor/auth/auth.interceptor';
import { provideToastr } from 'ngx-toastr';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    BsDatepickerModule.forRoot().providers!,
    provideAnimations(),
    provideToastr(),
    provideHttpClient(
      withInterceptorsFromDi()
    ),
    NgxMaskModule.forRoot({
      showMaskTyped: false,
    }).providers!,
    { provide: USER_REPOSITORY, useClass: InMemoryUserRepository },
    // Enregistrer l'intercepteur avec le token HTTP_INTERCEPTORS
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }
  ],

};

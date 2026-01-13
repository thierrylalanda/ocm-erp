import { Injectable } from '@angular/core';
import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';
import { AuthService } from '../../services/auth/auth.service';
import { AuthUtils } from '../../utils/auth.utils';

@Injectable()
export class AuthInterceptor implements HttpInterceptor
{
    /**
     * Constructor
     */
    constructor(private _authService: AuthService)
    {
    }

    /**
     * Intercept
     *
     * @param req
     * @param next
     */
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>>
    {
        // Get the access token
        const accessToken = this._authService.accessToken;
         const expiresAt = this._authService.expiresAt;
        // If we have an access token, add it to the request
        if (accessToken && accessToken.trim() !== '' ) {
            // Clone the request and add the authorization header
            const authReq = req.clone({
                headers: req.headers.set('Authorization', 'Bearer ' + accessToken)
            });
        
            // Response with the modified request
            return next.handle(authReq).pipe(
                catchError((error) => {
                    // Debug log
                    console.log('AuthInterceptor: Error occurred', error);

                    // Catch "401 Unauthorized" responses
                    if ( error instanceof HttpErrorResponse && error.status === 401 )
                    {
                        console.log('AuthInterceptor: 401 Unauthorized - logging out');
                        // Sign out
                        this._authService.logout();
                    }

                    return throwError(error);
                })
            );
        } else {
          this._authService.logout();
            // Continue with the original request
            return next.handle(req).pipe(
                catchError((error) => {
                    console.log('AuthInterceptor: Error occurred (no token)', error);
                    return throwError(error);
                })
            );
        }
    }
}

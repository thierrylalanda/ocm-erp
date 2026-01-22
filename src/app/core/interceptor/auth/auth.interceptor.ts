import { Injectable } from '@angular/core';
import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { BehaviorSubject, catchError, filter, Observable, switchMap, take, throwError, from, of } from 'rxjs';
import { AuthService } from '../../services/auth/auth.service';
import { AuthUtils } from '../../utils/auth.utils';
import { ToasterService } from '../../services/toaster/toaster.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor
{
    private isRefreshing = false;
    private refreshTokenSubject: BehaviorSubject<any> = new BehaviorSubject<any>(null);
    
    /**
     * Constructor
     */
    constructor(private _authService: AuthService,private _toasterService:ToasterService)
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
        // Get the access token and expiration date
        const accessToken = this._authService.accessToken;
        const expiresAt = this._authService.expiresAt;
        const expiresIn = this._authService.expiresIn;
        // If we have an access token, check if it's expired or about to expire
        if (accessToken && accessToken.trim() !== '' ) {
            
            // Check if token is expired or about to expire (within 60 seconds)
            const isExpired = AuthUtils.isTokenExpiredByDate(expiresAt);
            const isAboutToExpire = AuthUtils.isTokenAboutToExpire(expiresAt, 60); // 60 seconds threshold (1 minute)
            
            if (isExpired || isAboutToExpire) {
                console.log(`AuthInterceptor: Token ${isExpired ? 'expired' : 'about to expire (within 60s)'} - attempting proactive refresh`);
                // Token is expired or about to expire, refresh it before sending the request
              //  return this.refreshTokenAndRetry(req, next);
            }
            
            // Token is still valid, add it to the request
            const authReq = this.addTokenToRequest(req, accessToken);
        
            // Response with the modified request
            return next.handle(authReq).pipe(
                catchError((error) => {
                    // Debug log
                    console.log('AuthInterceptor: Error occurred', error);

                    // Catch "401 Unauthorized" responses
                    if ( error instanceof HttpErrorResponse && error.status === 401 )
                    {
                        console.log('AuthInterceptor: 401 Unauthorized - attempting token refresh');
                        // Attempt to refresh token
                        return this.handle401Error(req, next);
                    }
                    if ( error instanceof HttpErrorResponse && error.status === 403 )
                    {
                        this._toasterService.typeError(error.message ??"Accès refusé","");
                    }

                     if ( error instanceof HttpErrorResponse && error.status === 0 )
                    {
                       this._toasterService.typeError("Verifier votre connexion à internet","Connexion Internet")
                        // Attempt to refresh token
                        return this.handle401Error(req, next);
                    }

                    return throwError(() => error);
                })
            );
        } else {
            // No token available, continue with original request
            this._authService.logout();
            return next.handle(req).pipe(
                catchError((error) => {
                    console.log('AuthInterceptor: Error occurred (no token)', error);
                    return throwError(() => error);
                })
            ) ;
        }
    }

    /**
     * Add authorization token to request
     */
    private addTokenToRequest(request: HttpRequest<any>, token: string): HttpRequest<any> {
        return request.clone({
            headers: request.headers.set('Authorization', 'Bearer ' + token)
        });
    }

    /**
     * Refresh token proactively (before sending request)
     */
    private refreshTokenAndRetry(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        if (!this.isRefreshing) {
            this.isRefreshing = true;
            this.refreshTokenSubject.next(null);

            return this._authService.refresh().pipe(
                switchMap((response) => {
                    this.isRefreshing = false;
                    this.refreshTokenSubject.next(response.accessToken);
                    
                    // Retry the original request with new token
                    return next.handle(this.addTokenToRequest(request, response.accessToken));
                }),
                catchError((error) => {
                    this.isRefreshing = false;
                    
                    // If refresh fails with 401, logout user
                    if (error instanceof HttpErrorResponse && error.status === 401) {
                        console.log('AuthInterceptor: Proactive refresh failed with 401 - logging out');
                        this._authService.logout();
                        return throwError(() => error);
                    } else {
                        console.error('AuthInterceptor: Proactive token refresh failed', error);
                        console.log('AuthInterceptor: Continuing with current token despite refresh failure');
                        // Even if proactive refresh fails, try the original request (might still work)
                        return next.handle(this.addTokenToRequest(request, this._authService.accessToken));
                    }
                })
            );
        } else {
            // If refresh is already in progress, wait for it to complete
            return this.refreshTokenSubject.pipe(
                filter(token => token !== null),
                take(1),
                switchMap(token => {
                    // Retry the original request with new token
                    return next.handle(this.addTokenToRequest(request, token));
                })
            );
        }
    }

    /**
     * Handle 401 Unauthorized error by attempting to refresh token (reactive)
     */
    private handle401Error(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        if (!this.isRefreshing) {
            this.isRefreshing = true;
            this.refreshTokenSubject.next(null);

            return this._authService.refresh().pipe(
                switchMap((response) => {
                    this.isRefreshing = false;
                    this.refreshTokenSubject.next(response.accessToken);
                    
                    // Retry the original request with new token
                    return next.handle(this.addTokenToRequest(request, response.accessToken));
                }),
                catchError((error) => {
                    this.isRefreshing = false;
                    
                    // If refresh fails with 401, logout user
                    if (error instanceof HttpErrorResponse && error.status === 401) {
                        console.log('AuthInterceptor: Reactive refresh failed with 401 - logging out');
                        this._authService.logout();
                    } else {
                        console.error('AuthInterceptor: Reactive token refresh failed', error);
                        console.log('AuthInterceptor: Token refresh failed but continuing with current request');
                    }
                    this._authService.logout();
                    return throwError(() => error);
                })
            );
        } else {
            // If refresh is already in progress, wait for it to complete
            return this.refreshTokenSubject.pipe(
                filter(token => token !== null),
                take(1),
                switchMap(token => {
                    // Retry the original request with new token
                    return next.handle(this.addTokenToRequest(request, token));
                })
            );
        }
    }
}

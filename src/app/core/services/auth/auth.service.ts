import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable, throwError, timeout, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { routes, SideBarService } from '../../core.index';
import { User } from '../../../modules/manage-users';
import { LoginRequestDto } from './dto/login-request.dto';
import { LoginResponseDto } from './dto/login-response.dto';
import { environment } from '../../../../environments/environment';
import { PermissionService } from './permission.service';
import { AuthUtils } from '../../utils/auth.utils';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private readonly baseUrl = 'http://192.168.1.25:8080/erp/auth/';
  private readonly USER_KEY = window.btoa("user");
  private readonly TOKEN_KEY = window.btoa("accessToken");
  private readonly REFRESH_TOKEN_KEY = window.btoa("refreshToken");
  public checkAuth: BehaviorSubject<string> = new BehaviorSubject<string>(
    localStorage.getItem('authenticated') || "true"
  );

  // Properties for authentication data
  private _accessToken: string = '';
  private _tokenType: string = 'Bearer';
  private _refreshToken: string = '';
  private _expiresAt: string = '';
  private _expiresIn: number = 0;
  private _user: User | null = null;

  constructor(
    private router: Router, 
    private sidebar: SideBarService,
    private http: HttpClient,
    private permissionService: PermissionService
  ) {
    // Load authentication data from localStorage on initialization
    this.loadAuthData();
  }

  // Getters and setters for authentication properties
  public get accessToken(): string {
    return this._accessToken || localStorage.getItem(this.TOKEN_KEY) || '';
  }

  public set accessToken(value: string) {
    this._accessToken = value;
    if (value) {
      localStorage.setItem(this.TOKEN_KEY, value);
    } else {
      localStorage.removeItem(this.TOKEN_KEY);
    }
  }

  public get tokenType(): string {
    return this._tokenType;
  }

  public set tokenType(value: string) {
    this._tokenType = value;
  }

  public get refreshToken(): string {
    return this._refreshToken || localStorage.getItem(this.REFRESH_TOKEN_KEY) || '';
  }

  public set refreshToken(value: string) {
    this._refreshToken = value;
    if (value) {
      localStorage.setItem(this.REFRESH_TOKEN_KEY, value);
    } else {
      localStorage.removeItem(this.REFRESH_TOKEN_KEY);
    }
  }

  public get expiresAt(): string {
    return this._expiresAt;
  }

  public set expiresAt(value: string) {
    this._expiresAt = value;
  }

  public get expiresIn(): number {
    return this._expiresIn;
  }

  public set expiresIn(value: number) {
    this._expiresIn = value;
  }

   get user(): User | any {
        if(localStorage.getItem(this.USER_KEY)){
            const decodedBytes = new Uint8Array(window.atob(localStorage.getItem(this.USER_KEY)!).split('').map((c) => c.charCodeAt(0)));
            return JSON.parse(new TextDecoder().decode(decodedBytes));
        }
        return null;
    }
    set user(us: User) {
        const utf8Bytes = new TextEncoder().encode(JSON.stringify(us));
        localStorage.setItem(this.USER_KEY, window.btoa(String.fromCharCode(...utf8Bytes)));
    }

  get idUser(): string {
        return window.atob(localStorage.getItem('idUser')!) ?? '';
    }
    set idUser(us: string) {
        localStorage.setItem('idUser', window.btoa(us));
    }

  /**
   * Load authentication data from localStorage
   */
  private loadAuthData(): void {
    // Tokens are loaded via getters
    // User is loaded via getter
  }

  /**
   * Clear all authentication data from memory and localStorage
   */
  private clearAuthData(): void {
    this._accessToken = '';
    this._tokenType = 'Bearer';
    this._refreshToken = '';
    this._expiresAt = '';
    this._expiresIn = 0;
    this._user = null;
    
    localStorage.removeItem(this.TOKEN_KEY);
    localStorage.removeItem(this.REFRESH_TOKEN_KEY);
    localStorage.removeItem(this.USER_KEY);
    localStorage.removeItem('authenticated');
    localStorage.removeItem('timeOut');
  }

  /**
   * Clear local storage and redirect to login page
   */
  private clearLocalStorageAndRedirect(): void {
    this.clearAuthData();
    this.checkAuth.next('false');
    this.router.navigate(['/auth/login']);
  }

  public login(): void {
    this.checkAuth.next('true');
    localStorage.setItem('authenticated', 'true');
    localStorage.setItem('timeOut', Date());
    this.router.navigate([routes.index]);
    localStorage.setItem('layoutPosition', '1');
  }

  /**
   * Authenticate user with username and password
   * @param username 
   * @param password 
   * @param rememberMe 
   * @returns Observable with login response
   */
  public authenticate(username: string, password: string, rememberMe: boolean = false): Observable<LoginResponseDto> {
    const loginData: LoginRequestDto = { username, password, rememberMe };
    
    return new Observable<LoginResponseDto>(observer => {
      this.http.post<LoginResponseDto>(this.baseUrl + 'login', loginData).subscribe({
        next: (response) => {
          // Store authentication data
          this.accessToken = response.accessToken;
          this.tokenType = response.tokenType;
          this.refreshToken = response.refreshToken;
          this.expiresAt = response.expiresAt;
          this.expiresIn = response.expiresIn;
          this.user = response.user;
          
          if (response.user?.permissions) {
            console.log('Setting permissions:', response.user.permissions);
            this.permissionService.setPermissions(response.user.permissions);
          }
          
          // Mark as authenticated
          this.login();
          
          observer.next(response);
          observer.complete();
        },
        error: (error) => {
          observer.error(error);
        }
      });
    });
  }

  /**
   * Refresh the access token using the refresh token
   * @returns Observable with new login response
   */
  public refresh(): Observable<LoginResponseDto> {
    const refreshToken = this.refreshToken;
    
    console.log('AuthService.refresh(): Checking refresh token availability');
    console.log('Refresh token exists:', !!refreshToken);
    console.log('Refresh token length:', refreshToken?.length);
    console.log('Refresh token first 10 chars:', refreshToken?.substring(0, 10) + '...');
    
    if (!refreshToken || refreshToken.trim() === '') {
      console.error('AuthService.refresh(): No refresh token available');
      return throwError(() => new Error('No refresh token available'));
    }
    
    // Check if refresh token looks valid (at least 10 characters)
    if (refreshToken.length < 10) {
      console.error('AuthService.refresh(): Refresh token appears invalid (too short)');
      return throwError(() => new Error('Invalid refresh token'));
    }
    
    const refreshData = { refreshToken };
    const refreshUrl = this.baseUrl + 'refresh';
    console.log('AuthService.refresh(): Sending refresh request to', refreshUrl);
    console.log('AuthService.refresh(): Request body:', { refreshToken: '***' + refreshToken.substring(refreshToken.length - 4) });
    console.log('AuthService.refresh(): Full URL:', refreshUrl);
    
    return this.http.post<LoginResponseDto>(refreshUrl, refreshData)
      .pipe(
        timeout(5000), // 5 second timeout for faster feedback
        tap((response) => {
          console.log('AuthService.refresh(): Token refresh successful');
          console.log('New access token length:', response.accessToken?.length);
          console.log('New refresh token length:', response.refreshToken?.length);
          console.log('Response has user:', !!response.user);
          console.log('Response has permissions:', !!response.user?.permissions);
          
          // Update authentication data
          this.accessToken = response.accessToken;
          this.tokenType = response.tokenType;
          this.refreshToken = response.refreshToken;
          this.expiresAt = response.expiresAt;
          this.expiresIn = response.expiresIn;
          this.user = response.user;
          
          if (response.user?.permissions) {
            this.permissionService.setPermissions(response.user.permissions);
            console.log('Token refreshed successfully - permissions updated');
          } else {
            console.warn('AuthService.refresh(): No permissions in response');
          }
        }),
        catchError((error) => {
          console.error('AuthService.refresh(): Token refresh failed with error:', error);
          console.error('Error name:', error.name);
          console.error('Error message:', error.message);
          console.error('Error status:', error.status);
          console.error('Error URL:', error.url);
          console.error('Error headers:', error.headers);
          console.error('Error error:', error.error);
          
          if (error.name === 'TimeoutError') {
            console.error('AuthService.refresh(): Timeout after 5 seconds - server is not reachable');
            console.error('AuthService.refresh(): Server URL:', this.baseUrl);
            console.error('AuthService.refresh(): The request timed out before reaching the server');
            console.error('AuthService.refresh(): This means the server is offline or network is blocked');
          }
          
          if (error.status === 401) {
            console.error('AuthService.refresh(): 401 Unauthorized - refresh token may be invalid or expired');
          }
          
          if (error.status === 404) {
            console.error('AuthService.refresh(): 404 Not Found - endpoint may not exist');
            console.error('AuthService.refresh(): Check if endpoint exists:', refreshUrl);
          }
          
          if (error.status === 0) {
            console.error('AuthService.refresh(): Status 0 - Network error or CORS issue');
            console.error('AuthService.refresh(): The request was blocked by browser (CORS)');
            console.error('AuthService.refresh(): Server must allow requests from:', window.location.origin);
          }
          
          // Create a more informative error
          const detailedError = new Error(`Refresh failed: ${error.message || 'Server unreachable'}`);
          (detailedError as any).originalError = error;
          (detailedError as any).serverUrl = this.baseUrl;
          (detailedError as any).isNetworkError = error.status === 0 || error.name === 'TimeoutError';
          
          return throwError(() => detailedError);
        })
      );
  }

  /**
   * Logout user by calling API and clearing local storage
   * Automatically subscribes to the API call
   */
  public logout(): void {
    // First call the logout API if we have a token
    const accessToken = this.accessToken;
    
    if (accessToken && accessToken.trim() !== '') {
      this.http.post(this.baseUrl + 'logout', {}, {
        headers: {
          'Authorization': 'Bearer ' + accessToken
        }
      }).subscribe({
        next: () => {
          // API call successful, clear local storage and redirect
          this.clearLocalStorageAndRedirect();
        },
        error: (error) => {
          // Even if API call fails, clear local storage and redirect
          console.error('Logout API call failed:', error);
          this.clearLocalStorageAndRedirect();
        }
      });
    } else {
      // No token available, just clear local storage and redirect
      this.clearLocalStorageAndRedirect();
    }
  }

  /**
   * Logout user and return Observable for API call (for components that need to handle response)
   * @returns Observable for API call
   */
  public logoutWithObservable(): Observable<any> {
    const accessToken = this.accessToken;
    
    if (accessToken && accessToken.trim() !== '') {
      return this.http.post(this.baseUrl + 'logout', {}, {
        headers: {
          'Authorization': 'Bearer ' + accessToken
        }
      }).pipe(
        tap(() => {
          // API call successful, clear local storage and redirect
          this.clearLocalStorageAndRedirect();
        }),
        catchError((error) => {
          // Even if API call fails, clear local storage and redirect
          console.error('Logout API call failed:', error);
          this.clearLocalStorageAndRedirect();
          return throwError(() => error);
        })
      );
    } else {
      // No token available, just clear local storage and redirect
      this.clearLocalStorageAndRedirect();
      return of({ success: true });
    }
  }

  /**
   * Check if user is authenticated
   * @returns boolean indicating authentication status
   */
  public isAuthenticated(): boolean {
    return !!this.accessToken && this.accessToken.trim() !== '';
  }

  /**
   * Get current user (for components that need it)
   * @returns Current user or null
   */
  public getCurrentUser(): User | null {
    return this.user;
  }

  /**
   * Get authorization header for HTTP requests
   * @returns Authorization header value or empty string
   */
  public getAuthorizationHeader(): string {
    if (this.accessToken && this.tokenType) {
      return `${this.tokenType} ${this.accessToken}`;
    }
    return '';
  }

  /**
   * Check authentication status
   * @returns Observable with authentication status (true/false)
   */
  public check(): Observable<boolean> {
    return new Observable<boolean>(observer => {
      const isAuthenticated = this.isAuthenticated();
      observer.next(isAuthenticated);
      observer.complete();
    });
  }
}

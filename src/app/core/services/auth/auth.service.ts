import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { routes, SideBarService } from '../../core.index';
import { User } from '../../../modules/manage-users';
import { LoginRequestDto } from './dto/login-request.dto';
import { LoginResponseDto } from './dto/login-response.dto';
import { environment } from '../../../../environments/environment';
import { PermissionService } from './permission.service';

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

  constructor(
    private router: Router, 
    private sidebar: SideBarService,
    private http: HttpClient,
    private permissionService:PermissionService
  ) {}

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
      this.http.post<LoginResponseDto>(this.baseUrl+'login', loginData).subscribe({
        next: (response) => {
          // Store authentication data
          this.accessToken = response.accessToken;
          this.tokenType = response.tokenType;
          this.refreshToken = response.refreshToken;
          this.expiresAt = response.expiresAt;
          this.expiresIn = response.expiresIn;
          this.user = response.user;
          console.log(response.user.permissions);
          this.permissionService.setPermissions(response.user.permissions) ;
        
          
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
  public logout(): void {
    this.router.navigate([routes.login]);
    this.checkAuth.next("true");
    localStorage.clear();
    sessionStorage.clear();
  }

  get expiresIn(): number {
        return localStorage.getItem('expiresIn')!= null ? parseInt(localStorage.getItem('expiresIn')!) : 0;
    }
    set expiresIn(token: number) {
        localStorage.setItem('expiresIn', token.toString());
    }

   get expiresAt(): string {
        return localStorage.getItem('tokenExpiresAt') ?? '';
    }
    set expiresAt(token: string) {
        localStorage.setItem('tokenExpiresAt', token);
    }

    get accessToken(): string {
        return localStorage.getItem(this.TOKEN_KEY) ?? '';
    }
    set accessToken(token: string) {
        localStorage.setItem(this.TOKEN_KEY, token);
    }

     get tokenType(): string {
        return localStorage.getItem('tokenType') ?? '';
    }
    set tokenType(token: string) {
        localStorage.setItem('tokenType', token);
    }

     get refreshToken(): string {
        return localStorage.getItem(this.REFRESH_TOKEN_KEY) ?? '';
    }
    set refreshToken(token: string) {
        localStorage.setItem(this.REFRESH_TOKEN_KEY, token);
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
   
}

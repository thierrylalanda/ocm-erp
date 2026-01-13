import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserResponseDto, UpdateUserRequestDto } from '../../domain/dto/user.dto';
import { AuthService } from '../../../../core/services/auth/auth.service';
import { environment } from '../../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private baseUrl = environment.api + 'hierarchie/utilisateurs';

  constructor(
    private http: HttpClient,
    private authService: AuthService
  ) {}

  /**
   * Get user by ID
   * @param id User ID
   * @returns Observable with user data
   */
  getUser(id: number): Observable<UserResponseDto> {
    return this.http.get<UserResponseDto>(`${this.baseUrl}/${id}`);
  }

  /**
   * Get current authenticated user
   * @returns Observable with user data
   */
  getCurrentUser(): Observable<UserResponseDto> {
    const user = this.authService.user;
    if (!user || !user.id) {
      throw new Error('User not authenticated or user ID not found');
    }
    return this.getUser(user.id);
  }

  /**
   * Update user
   * @param id User ID
   * @param data User data to update
   * @returns Observable with updated user data
   */
  updateUser(id: number, data: UpdateUserRequestDto): Observable<UserResponseDto> {
    return this.http.put<UserResponseDto>(`${this.baseUrl}/${id}`, data);
  }

  /**
   * Update current authenticated user
   * @param data User data to update
   * @returns Observable with updated user data
   */
  updateCurrentUser(data: UpdateUserRequestDto): Observable<UserResponseDto> {
    const user = this.authService.user;
    if (!user || !user.id) {
      throw new Error('User not authenticated or user ID not found');
    }
    return this.updateUser(user.id, data);
  }

  /**
   * Update user password
   * @param id User ID
   * @param currentPassword Current password
   * @param newPassword New password
   * @returns Observable with success status
   */
  updatePassword(id: number, currentPassword: string, newPassword: string): Observable<any> {
    return this.http.post(`${this.baseUrl}/${id}/change-password`, {
      currentPassword,
      newPassword
    });
  }

  /**
   * Update current user password
   * @param currentPassword Current password
   * @param newPassword New password
   * @returns Observable with success status
   */
  updateCurrentUserPassword(currentPassword: string, newPassword: string): Observable<any> {
    const user = this.authService.user;
    if (!user || !user.id) {
      throw new Error('User not authenticated or user ID not found');
    }
    return this.updatePassword(user.id, currentPassword, newPassword);
  }
}

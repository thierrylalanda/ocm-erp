import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../../../environments/environment';

export interface UserRoleRequestDto {
  utilisateurId: number;
  roleId: number;
  dateExpiration: string;
  actif: boolean;
  attribueParId: number;
}

export interface UserRoleResponseDto {
  id: number;
  utilisateurId: number;
  utilisateurNomPrenom: string;
  utilisateurUsername: string;
  roleId: number;
  roleCode: string;
  roleNom: string;
  dateAttribution: string;
  dateExpiration: string;
  actif: boolean;
  dateFin: string;
  attribueParId: number;
  attribueParNomPrenom: string;
}

export interface ChangePasswordRequestDto {
  username: string;
  password: string;
}

@Injectable({
  providedIn: 'root'
})
export class UserRoleService {
  private http = inject(HttpClient);
  private apiUrl = `${environment.api}`;

  /**
   * Récupère les rôles d'un utilisateur
   */
  getUserRoles(utilisateurId: number): Observable<UserRoleResponseDto[]> {
    return this.http.get<UserRoleResponseDto[]>(
      `${this.apiUrl}security/utilisateurs-roles`,
      { params: { utilisateurId: utilisateurId.toString() } }
    );
  }

  /**
   * Ajoute un rôle à un utilisateur
   */
  addUserRole(roleData: UserRoleRequestDto): Observable<UserRoleResponseDto> {
    return this.http.post<UserRoleResponseDto>(
      `${this.apiUrl}security/utilisateurs-roles`,
      roleData
    );
  }

  /**
   * Active un rôle utilisateur
   */
  activateUserRole(roleId: number): Observable<UserRoleResponseDto> {
    return this.http.patch<UserRoleResponseDto>(
      `${this.apiUrl}security/utilisateurs-roles/${roleId}/activate`,
      {}
    );
  }

  /**
   * Désactive un rôle utilisateur
   */
  deactivateUserRole(roleId: number): Observable<UserRoleResponseDto> {
    return this.http.patch<UserRoleResponseDto>(
      `${this.apiUrl}security/utilisateurs-roles/${roleId}/deactivate`,
      {}
    );
  }

  /**
   * Change le mot de passe d'un utilisateur
   */
  changeUserPassword(userId: number, passwordData: ChangePasswordRequestDto): Observable<any> {
    return this.http.post(
      `${this.apiUrl}security/utilisateurs/${userId}/change-password`,
      passwordData
    );
  }
}

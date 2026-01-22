import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
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

export interface UserRolePageResponseDto {
  content: UserRoleResponseDto[];
  page: number;
  size: number;
  totalElements: number;
  totalPages: number;
}

export interface ChangePasswordRequestDto {
  username: string;
  password: string;
}

export interface GenericResponseDto {
  [key: string]: any;
}

@Injectable({
  providedIn: 'root'
})
export class UserRoleService {
  private http = inject(HttpClient);
  private apiUrl = `${environment.api}`;

  /**
   * Récupère un rôle utilisateur par son ID
   * GET /api/security/utilisateurs-roles/{id}
   */
  getUserRoleById(id: number): Observable<UserRoleResponseDto> {
    return this.http.get<UserRoleResponseDto>(
      `${this.apiUrl}security/utilisateurs-roles/${id}`
    );
  }

  /**
   * Récupère les rôles attribués par un utilisateur
   * GET /api/security/utilisateurs-roles/attribue-par/{utilisateurId}
   */
  getRolesByAttributedBy(utilisateurId: number): Observable<UserRoleResponseDto[]> {
    return this.http.get<UserRoleResponseDto[]>(
      `${this.apiUrl}security/utilisateurs-roles/attribue-par/${utilisateurId}`
    );
  }

  /**
   * Compte les rôles d'un utilisateur
   * GET /api/security/utilisateurs-roles/count/utilisateur/{utilisateurId}
   */
  getUserRoleCount(utilisateurId: number): Observable<GenericResponseDto> {
    return this.http.get<GenericResponseDto>(
      `${this.apiUrl}security/utilisateurs-roles/count/utilisateur/${utilisateurId}`
    );
  }

  /**
   * Récupère les statistiques globales des rôles utilisateurs
   * GET /api/security/utilisateurs-roles/statistics
   */
  getUserRoleStatistics(): Observable<GenericResponseDto> {
    return this.http.get<GenericResponseDto>(
      `${this.apiUrl}security/utilisateurs-roles/statistics`
    );
  }

  /**
   * Récupère les statistiques d'un rôle spécifique
   * GET /api/security/utilisateurs-roles/statistics/role/{roleId}
   */
  getRoleStatistics(roleId: number): Observable<GenericResponseDto> {
    return this.http.get<GenericResponseDto>(
      `${this.apiUrl}security/utilisateurs-roles/statistics/role/${roleId}`
    );
  }

  /**
   * Récupère tous les rôles d'un utilisateur
   * GET /api/security/utilisateurs-roles/utilisateur/{utilisateurId}
   */
  getUserRoles(utilisateurId: number): Observable<UserRoleResponseDto[]> {
    return this.http.get<UserRoleResponseDto[]>(
      `${this.apiUrl}security/utilisateurs-roles/utilisateur/${utilisateurId}`
    );
  }

  /**
   * Récupère les rôles actifs d'un utilisateur
   * GET /api/security/utilisateurs-roles/utilisateur/{utilisateurId}/actifs
   */
  getActiveUserRoles(utilisateurId: number): Observable<UserRoleResponseDto[]> {
    return this.http.get<UserRoleResponseDto[]>(
      `${this.apiUrl}security/utilisateurs-roles/utilisateur/${utilisateurId}/actifs`
    );
  }

  /**
   * Désactive tous les rôles d'un utilisateur
   * PATCH /api/security/utilisateurs-roles/utilisateur/{utilisateurId}/deactivate
   */
  deactivateAllUserRoles(utilisateurId: number): Observable<GenericResponseDto> {
    return this.http.patch<GenericResponseDto>(
      `${this.apiUrl}security/utilisateurs-roles/utilisateur/${utilisateurId}/deactivate`,
      {}
    );
  }

  /**
   * Récupère les rôles d'un utilisateur avec pagination
   * GET /api/security/utilisateurs-roles/utilisateur/{utilisateurId}/page
   */
  getUserRolesWithPagination(
    utilisateurId: number, 
    page: number = 0, 
    size: number = 20, 
    sort: string = ''
  ): Observable<UserRolePageResponseDto> {
    const params = new HttpParams()
      .set('page', page.toString())
      .set('size', size.toString())
      .set('sort', sort);
      
    return this.http.get<UserRolePageResponseDto>(
      `${this.apiUrl}security/utilisateurs-roles/utilisateur/${utilisateurId}/page`,
      { params }
    );
  }

  /**
   * Récupère le rôle d'un utilisateur spécifique
   * GET /api/security/utilisateurs-roles/utilisateur/{utilisateurId}/role/{roleId}
   */
  getUserSpecificRole(utilisateurId: number, roleId: number): Observable<UserRoleResponseDto> {
    return this.http.get<UserRoleResponseDto>(
      `${this.apiUrl}security/utilisateurs-roles/utilisateur/${utilisateurId}/role/${roleId}`
    );
  }

  /**
   * Récupère les rôles valides (actifs et non expirés) d'un utilisateur
   * GET /api/security/utilisateurs-roles/utilisateur/{utilisateurId}/valides
   */
  getValidUserRoles(utilisateurId: number): Observable<UserRoleResponseDto[]> {
    return this.http.get<UserRoleResponseDto[]>(
      `${this.apiUrl}security/utilisateurs-roles/utilisateur/${utilisateurId}/valides`
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

import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../../../environments/environment';
import { PermissionRepository } from '../../domain/repositories/permission.repository';
import { 
  PermissionsPagedResponseDto, 
  RolePermissionsResponseDto, 
  AssignPermissionDto 
} from '../../application/dto/permission.dto';

@Injectable()
export class HttpPermissionRepository implements PermissionRepository {
  private http = inject(HttpClient);
  private baseUrl = `${environment.api}security`;

  getAllPermissions(page = 0, size = 100): Observable<PermissionsPagedResponseDto> {
    const params = new HttpParams()
      .set('page', page.toString())
      .set('size', size.toString());
    
    return this.http.get<PermissionsPagedResponseDto>(`${this.baseUrl}/permissions`, { params });
  }

  getRolePermissions(roleId: number): Observable<RolePermissionsResponseDto> {
    return this.http.get<RolePermissionsResponseDto>(`${this.baseUrl}/roles/${roleId}/permissions`);
  }

  assignPermissionToRole(roleId: number, permission: AssignPermissionDto): Observable<void> {
    return this.http.post<void>(`${this.baseUrl}/roles/${roleId}/permissions`, permission);
  }

  removePermissionFromRole(roleId: number, permissionId: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/roles/${roleId}/permissions/${permissionId}`);
  }

  assignPermissionsBatch(roleId: number, permissionIds: number[]): Observable<RolePermissionsResponseDto> {
    const batchData = { permissionIds };
    return this.http.post<RolePermissionsResponseDto>(
      `${this.baseUrl}/roles/${roleId}/permissions/batch`, 
      batchData
    );
  }
}

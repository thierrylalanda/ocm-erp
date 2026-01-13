import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../../../environments/environment';
import { RoleRepository } from '../../domain/repositories/role.repository';
import { CreateRoleDto, RoleResponseDto, UpdateRoleDto, CopyRoleDto } from '../../application/dto/create-role.dto';

@Injectable()
export class HttpRoleRepository implements RoleRepository {
  private http = inject(HttpClient);
  private baseUrl = `${environment.api}security/roles`;

  create(role: CreateRoleDto): Observable<RoleResponseDto> {
    return this.http.post<RoleResponseDto>(this.baseUrl, role);
  }

  findAllBySociete(societeId: number): Observable<RoleResponseDto[]> {
    return this.http.get<RoleResponseDto[]>(`${this.baseUrl}/societe/${societeId}`);
  }

  findById(id: number): Observable<RoleResponseDto> {
    return this.http.get<RoleResponseDto>(`${this.baseUrl}/${id}`);
  }

  update(id: number, role: UpdateRoleDto): Observable<RoleResponseDto> {
    return this.http.put<RoleResponseDto>(`${this.baseUrl}/${id}`, role);
  }

  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${id}`);
  }

  copy(id: number, copyData: CopyRoleDto): Observable<RoleResponseDto> {
    return this.http.post<RoleResponseDto>(`${this.baseUrl}/${id}/copy`, copyData);
  }
}

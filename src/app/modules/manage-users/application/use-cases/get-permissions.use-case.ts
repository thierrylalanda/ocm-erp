import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PermissionsPagedResponseDto } from '../dto/permission.dto';
import { PERMISSION_REPOSITORY } from '../../domain/repositories/permission.repository.token';

/**
 * Interface pour le use case de récupération des permissions
 */
export interface GetPermissionsUseCase {
  execute(page?: number, size?: number): Observable<PermissionsPagedResponseDto>;
}

/**
 * Implémentation du use case de récupération des permissions
 */
@Injectable()
export class GetPermissionsUseCaseImpl implements GetPermissionsUseCase {
  private permissionRepository = inject(PERMISSION_REPOSITORY);

  execute(page = 0, size = 100): Observable<PermissionsPagedResponseDto> {
    return this.permissionRepository.getAllPermissions(page, size);
  }
}

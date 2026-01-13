import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CopyRoleDto, RoleResponseDto } from '../dto/create-role.dto';
import { ROLE_REPOSITORY } from '../../domain/repositories/role.repository.token';

/**
 * Interface pour le use case de copie de rôle
 */
export interface CopyRoleUseCase {
  execute(id: number, copyData: CopyRoleDto): Observable<RoleResponseDto>;
}

/**
 * Implémentation du use case de copie de rôle
 */
@Injectable()
export class CopyRoleUseCaseImpl implements CopyRoleUseCase {
  private roleRepository = inject(ROLE_REPOSITORY);

  execute(id: number, copyData: CopyRoleDto): Observable<RoleResponseDto> {
    // Validation des données
    this.validateCopyData(copyData);

    // Appel au repository
    return this.roleRepository.copy(id, copyData);
  }

  /**
   * Valide les données de copie
   */
  private validateCopyData(copyData: CopyRoleDto): void {
    if (!copyData.newRoleCode || copyData.newRoleCode.trim().length === 0) {
      throw new Error('Le code du nouveau rôle est obligatoire');
    }

    if (!copyData.newRoleNom || copyData.newRoleNom.trim().length === 0) {
      throw new Error('Le nom du nouveau rôle est obligatoire');
    }
  }
}

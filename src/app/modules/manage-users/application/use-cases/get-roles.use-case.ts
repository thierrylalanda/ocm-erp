import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RoleResponseDto } from '../dto/create-role.dto';
import { ROLE_REPOSITORY } from '../../domain/repositories/role.repository.token';

/**
 * Interface pour le use case de récupération des rôles
 */
export interface GetRolesUseCase {
  execute(societeId: number): Observable<RoleResponseDto[]>;
}

/**
 * Implémentation du use case de récupération des rôles
 */
@Injectable()
export class GetRolesUseCaseImpl implements GetRolesUseCase {
  private roleRepository = inject(ROLE_REPOSITORY);

  execute(societeId: number): Observable<RoleResponseDto[]> {
    // Validation
    if (societeId === undefined || societeId === null) {
      throw new Error('L\'ID de la société est obligatoire');
    }

    // Appel au repository
    return this.roleRepository.findAllBySociete(societeId);
  }
}

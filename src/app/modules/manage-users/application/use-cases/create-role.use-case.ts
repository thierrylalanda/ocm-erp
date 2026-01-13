import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CreateRoleDto, RoleResponseDto } from '../dto/create-role.dto';
import { ROLE_REPOSITORY } from '../../domain/repositories/role.repository.token';

/**
 * Interface pour le use case de création de rôle
 */
export interface CreateRoleUseCase {
  execute(role: CreateRoleDto): Observable<RoleResponseDto>;
}

/**
 * Implémentation du use case de création de rôle
 */
@Injectable()
export class CreateRoleUseCaseImpl implements CreateRoleUseCase {
  private roleRepository = inject(ROLE_REPOSITORY);

  execute(role: CreateRoleDto): Observable<RoleResponseDto> {
    // Validation des données
    this.validateRole(role);

    // Appel au repository
    return this.roleRepository.create(role);
  }

  /**
   * Valide les données du rôle
   */
  private validateRole(role: CreateRoleDto): void {
    if (!role.roleCode || role.roleCode.trim().length === 0) {
      throw new Error('Le code du rôle est obligatoire');
    }

    if (!role.roleNom || role.roleNom.trim().length === 0) {
      throw new Error('Le nom du rôle est obligatoire');
    }

    if (role.roleNiveau === undefined || role.roleNiveau === null) {
      throw new Error('Le niveau du rôle est obligatoire');
    }

    if (role.societeId === undefined || role.societeId === null) {
      throw new Error('L\'ID de la société est obligatoire');
    }
  }
}

import { Inject, Injectable } from '@angular/core';
import { TenantEntity } from '../../../_shared/domain/entities/tenant.entity';
import { CompanyRepository } from '../../domain/repositories/company.repository';
import { COMPANY_REPOSITORY } from '../../domain/repositories/company.repository.token';
import { CreateCompanyDto, mapCreateCompanyDtoToTenantCreateCommand, mapTenantToCreateCompanyResponseDto } from '../dto/create-company.dto';
import { Result, DomainError, ValidationError, AlreadyExistsError, InfrastructureError, Email } from '../../../_shared';

export interface CreateCompanyUseCase {
  execute(dto: CreateCompanyDto): Promise<Result<any, DomainError>>;
}

@Injectable()
export class CreateCompanyUseCaseImpl implements CreateCompanyUseCase {
  constructor(
    @Inject(COMPANY_REPOSITORY) private readonly companyRepository: CompanyRepository
  ) { }

  async execute(dto: CreateCompanyDto): Promise<Result<any, DomainError>> {
    try {
      // 1. Validation des données
      const validationResult = this.validateCreateCompanyDto(dto);
      if (validationResult.isFailure) {
        return validationResult;
      }

      // 2. Vérifier si une société avec le même email existe déjà
      const existingByEmail = await this.companyRepository.findByEmail(dto.email);
      if (existingByEmail) {
        return Result.fail(
          new AlreadyExistsError('Société', 'email', dto.email)
        );
      }

      // 3. Vérifier si une société avec le même numéro contribuable existe déjà
      if (dto.nc) {
        const existingByTaxNumber = await this.companyRepository.findByTaxNumber(dto.nc);
        if (existingByTaxNumber) {
          return Result.fail(
            new AlreadyExistsError('Société', 'numéro contribuable', dto.nc)
          );
        }
      }

      // 4. Vérifier si une société avec le même RCCM existe déjà
      if (dto.rccm) {
        const existingByTradeRegister = await this.companyRepository.findByTradeRegister(dto.rccm);
        if (existingByTradeRegister) {
          return Result.fail(
            new AlreadyExistsError('Société', 'RCCM', dto.rccm)
          );
        }
      }

      // 5. Convertir le DTO en commande Tenant
      const tenantCommand = mapCreateCompanyDtoToTenantCreateCommand(dto);

      // 6. Créer l'entité Tenant
      const tenantEntity = TenantEntity.create(tenantCommand);

      // 7. Sauvegarder dans le repository
      const savedTenant = await this.companyRepository.create(tenantEntity);

      // 8. Convertir en DTO de réponse
      const response = mapTenantToCreateCompanyResponseDto(savedTenant);

      return Result.ok(response);

    } catch (error: any) {
      console.error('CreateCompanyUseCase error:', error);

      return Result.fail(
        new InfrastructureError(
          error.message || 'Erreur lors de la création de la société'
        )
      );
    }
  }

  private validateCreateCompanyDto(dto: CreateCompanyDto): Result<void, ValidationError> {
    const errors: string[] = [];

    // Validation du nom
    if (!dto.nom || dto.nom.trim().length === 0) {
      errors.push('Le nom de la société est requis');
    }

    // Validation de l'activité
    if (!dto.activite || dto.activite.trim().length === 0) {
      errors.push("L'activité de la société est requise");
    }

    // Validation de l'email avec Value Object
    if (!dto.email) {
      errors.push('L\'email est requis');
    } else {
      const emailResult = Email.create(dto.email);
      if (emailResult.isFailure) {
        errors.push(`Email invalide: ${emailResult.error.message}`);
      }
    }

    // Validation du numéro contribuable
    if (!dto.nc || dto.nc.trim().length === 0) {
      errors.push('Le numéro contribuable (NC) est requis');
    }

    // Validation du RCCM
    if (!dto.rccm || dto.rccm.trim().length === 0) {
      errors.push('Le RCCM est requis');
    }

    // Validation du régime fiscal
    if (!dto.regimeFiscal || dto.regimeFiscal.trim().length === 0) {
      errors.push('Le régime fiscal est requis');
    }

    // Validation de la devise
    if (!dto.devise || dto.devise.trim().length === 0) {
      errors.push('La devise est requise');
    }

    if (errors.length > 0) {
      return Result.fail(
        new ValidationError(`Validation échouée: ${errors.join(', ')}`)
      );
    }

    return Result.ok(undefined);
  }
}

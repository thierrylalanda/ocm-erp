import { Inject, Injectable } from '@angular/core';
import { TenantEntity } from '../../../_shared/domain/entities/tenant.entity';
import { CompanyRepository } from '../../domain/repositories/company.repository';
import { COMPANY_REPOSITORY } from '../../domain/repositories/company.repository.token';
import { CreateCompanyDto, mapCreateCompanyDtoToTenantCreateCommand, mapTenantToCreateCompanyResponseDto } from '../dto/create-company.dto';

export interface CreateCompanyUseCase {
  execute(dto: CreateCompanyDto): Promise<any>;
}

@Injectable()
export class CreateCompanyUseCaseImpl implements CreateCompanyUseCase {
  constructor(
    @Inject(COMPANY_REPOSITORY) private readonly companyRepository: CompanyRepository
  ) {}

  async execute(dto: CreateCompanyDto): Promise<any> {
    // Validation des données
    this.validateCreateCompanyDto(dto);

    // Vérifier si une société avec le même email existe déjà
    const existingByEmail = await this.companyRepository.findByEmail(dto.email);
    if (existingByEmail) {
      throw new Error(`Une société avec l'email ${dto.email} existe déjà`);
    }

    // Vérifier si une société avec le même numéro contribuable existe déjà
    if (dto.nc) {
      const existingByTaxNumber = await this.companyRepository.findByTaxNumber(dto.nc);
      if (existingByTaxNumber) {
        throw new Error(`Une société avec le numéro contribuable ${dto.nc} existe déjà`);
      }
    }

    // Vérifier si une société avec le même RCCM existe déjà
    if (dto.rccm) {
      const existingByTradeRegister = await this.companyRepository.findByTradeRegister(dto.rccm);
      if (existingByTradeRegister) {
        throw new Error(`Une société avec le RCCM ${dto.rccm} existe déjà`);
      }
    }

    // Convertir le DTO en commande Tenant
    const tenantCommand = mapCreateCompanyDtoToTenantCreateCommand(dto);

    // Créer l'entité Tenant
    const tenantEntity = TenantEntity.create(tenantCommand);

    // Sauvegarder dans le repository
    const savedTenant = await this.companyRepository.create(tenantEntity);

    // Convertir en DTO de réponse
    return mapTenantToCreateCompanyResponseDto(savedTenant);
  }

  private validateCreateCompanyDto(dto: CreateCompanyDto): void {
    const errors: string[] = [];

    if (!dto.nom || dto.nom.trim().length === 0) {
      errors.push('Le nom de la société est requis');
    }

    if (!dto.activite || dto.activite.trim().length === 0) {
      errors.push("L'activité de la société est requise");
    }

    if (!dto.email || !this.isValidEmail(dto.email)) {
      errors.push('Un email valide est requis');
    }

    if (!dto.nc || dto.nc.trim().length === 0) {
      errors.push('Le numéro contribuable (NC) est requis');
    }

    if (!dto.rccm || dto.rccm.trim().length === 0) {
      errors.push('Le RCCM est requis');
    }

    if (!dto.regimeFiscal || dto.regimeFiscal.trim().length === 0) {
      errors.push('Le régime fiscal est requis');
    }

    if (!dto.devise || dto.devise.trim().length === 0) {
      errors.push('La devise est requise');
    }

    if (errors.length > 0) {
      throw new Error(`Validation failed: ${errors.join(', ')}`);
    }
  }

  private isValidEmail(email: string): boolean {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }
}

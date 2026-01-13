import { Injectable } from '@angular/core';
import { Tenant, TenantCreateCommand, TenantUpdateCommand } from '../../../_shared/domain/entities/tenant.entity';
import { CompanyRepository } from '../../domain/repositories/company.repository';

@Injectable()
export class InMemoryCompanyRepository implements CompanyRepository {
  setStatut(id: number, statut: boolean): Promise<Tenant | null> {
      throw new Error('Method not implemented.');
  }
  private companies: Map<string, Tenant> = new Map();

  async create(tenant: Tenant): Promise<Tenant> {
    this.companies.set(tenant.id.toString(), tenant);
    return tenant;
  }

  async update(id: number, command: TenantUpdateCommand): Promise<Tenant> {
    const existing = this.companies.get(id.toString());
    if (!existing) {
      throw new Error(`Company with id ${id} not found`);
    }

    // Simuler une mise à jour
    const updatedTenant: Tenant = {
      ...existing,
      ...command,
      updatedAt: new Date(),
    };

    this.companies.set(id.toString(), updatedTenant);
    return updatedTenant;
  }

  async delete(id: number): Promise<void> {
    this.companies.delete(id.toString());
  }

  async findById(id: number): Promise<Tenant | null> {
    return this.companies.get(id.toString()) || null;
  }

  async findAll(): Promise<Tenant[]> {
    return Array.from(this.companies.values());
  }

  async findByCode(code: string): Promise<Tenant | null> {
    for (const company of this.companies.values()) {
      if (company.code === code) {
        return company;
      }
    }
    return null;
  }

  async findByEmail(email: string): Promise<Tenant | null> {
    for (const company of this.companies.values()) {
      if (company.email === email) {
        return company;
      }
    }
    return null;
  }

  async findByTaxNumber(taxNumber: string): Promise<Tenant | null> {
    for (const company of this.companies.values()) {
      if (company.taxNumber === taxNumber) {
        return company;
      }
    }
    return null;
  }

  async findByTradeRegister(tradeRegister: string): Promise<Tenant | null> {
    for (const company of this.companies.values()) {
      if (company.tradeRegister === tradeRegister) {
        return company;
      }
    }
    return null;
  }
}

import { Tenant, TenantCreateCommand, TenantUpdateCommand } from '../../../_shared/domain/entities/tenant.entity';

export interface CompanyRepository {
  create(tenant: Tenant): Promise<Tenant>;
  update(id: number, command: TenantUpdateCommand): Promise<Tenant>;
  delete(id: number): Promise<void>;
  findById(id: number): Promise<Tenant | null>;
  setStatut(id: number,statut:boolean): Promise<Tenant | null>;
  findAll(): Promise<Tenant[]>;
  findByCode(code: string): Promise<Tenant | null>;
  findByEmail(email: string): Promise<Tenant | null>;
  findByTaxNumber(taxNumber: string): Promise<Tenant | null>;
  findByTradeRegister(tradeRegister: string): Promise<Tenant | null>;
}

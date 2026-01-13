import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { CompanyRepository } from '../../domain/repositories/company.repository';
import { Tenant, TenantCreateCommand, TenantUpdateCommand } from '../../../_shared/domain/entities/tenant.entity';
import { CreateCompanyDto, mapCreateCompanyDtoToTenantCreateCommand, mapTenantToCreateCompanyResponseDto } from '../../application/dto/create-company.dto';
import { environment } from '../../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HttpCompanyRepository implements CompanyRepository {
  private readonly baseUrl = environment.api+'hierarchie/societes';

  constructor(private http: HttpClient) {}

  create(tenant: Tenant): Promise<Tenant> {
    const command: TenantCreateCommand = {
      nom: tenant.nom,
      code: tenant.code,
      description: tenant.description,
      email: tenant.email,
      phoneNumber: tenant.phoneNumber,
      address: tenant.address,
      city: tenant.city,
      pays: tenant.pays,
      currency: tenant.currency,
      activite: tenant.activite,
      postalBox: tenant.postalBox,
      region: tenant.region,
      taxNumber: tenant.taxNumber,
      tradeRegister: tenant.tradeRegister,
      fiscalRegime: tenant.fiscalRegime,
      faviconUrl: tenant.faviconUrl,
      maxUsers: tenant.maxUsers,
      timezone: tenant.timezone,
      language: tenant.language,
    };

    return this.http.post<Tenant>(this.baseUrl, command).toPromise()
      .then(response => response as Tenant)
      .catch(error => {
        console.error('Erreur création société:', error);
        throw error;
      });
  }

  update(id: number, command: TenantUpdateCommand): Promise<Tenant> {
    return this.http.put<Tenant>(`${this.baseUrl}/${id}`, command).toPromise()
      .then(response => response as Tenant)
      .catch(error => {
        console.error('Erreur mise à jour société:', error);
        throw error;
      });
  }

  delete(id: number): Promise<void> {
    return this.http.delete<void>(`${this.baseUrl}/${id}`).toPromise()
      .catch(error => {
        console.error('Erreur suppression société:', error);
        throw error;
      });
  }

  findById(id: number): Promise<Tenant | null> {
    return this.http.get<Tenant>(`${this.baseUrl}/${id}`).toPromise()
      .then(response => response as Tenant)
      .catch(error => {
        console.error('Erreur récupération société:', error);
        return null;
      });
  }

  setStatut(id: number, statut: boolean): Promise<Tenant | null> {
    return this.http.patch<Tenant>(`${this.baseUrl}/${id}/statut`, { isActive: statut }).toPromise()
      .then(response => response as Tenant)
      .catch(error => {
        console.error('Erreur changement statut société:', error);
        return null;
      });
  }

  findAll(): Promise<Tenant[]> {
    return this.http.get<any>(this.baseUrl).toPromise()
      .then(response => response.content as Tenant[])
      .catch(error => {
        console.error('Erreur récupération liste sociétés:', error);
        return [];
      });
  }

  findByCode(code: string): Promise<Tenant | null> {
    return this.http.get<Tenant[]>(`${this.baseUrl}?code=${code}`).toPromise()
      .then(response => response && response.length > 0 ? response[0] : null)
      .catch(error => {
        console.error('Erreur recherche par code:', error);
        return null;
      });
  }

  findByEmail(email: string): Promise<Tenant | null> {
    return this.http.get<Tenant[]>(`${this.baseUrl}?email=${email}`).toPromise()
      .then(response => response && response.length > 0 ? response[0] : null)
      .catch(error => {
        console.error('Erreur recherche par email:', error);
        return null;
      });
  }

  findByTaxNumber(taxNumber: string): Promise<Tenant | null> {
    return this.http.get<Tenant[]>(`${this.baseUrl}?taxNumber=${taxNumber}`).toPromise()
      .then(response => response && response.length > 0 ? response[0] : null)
      .catch(error => {
        console.error('Erreur recherche par numéro fiscal:', error);
        return null;
      });
  }

  findByTradeRegister(tradeRegister: string): Promise<Tenant | null> {
    return this.http.get<Tenant[]>(`${this.baseUrl}?tradeRegister=${tradeRegister}`).toPromise()
      .then(response => response && response.length > 0 ? response[0] : null)
      .catch(error => {
        console.error('Erreur recherche par registre commerce:', error);
        return null;
      });
  }

  // Méthodes supplémentaires pour le DTO
  createFromDto(dto: CreateCompanyDto): Promise<Tenant> {
    const command = mapCreateCompanyDtoToTenantCreateCommand(dto);
    return this.create(command as unknown as Tenant);
  }

  findAllAsDto(): Promise<any[]> {
    return this.findAll()
      .then(tenants => tenants.map(tenant => mapTenantToCreateCompanyResponseDto(tenant)));
  }
}

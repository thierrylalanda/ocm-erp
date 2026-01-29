import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ConfigurationParameterDto, PaginatedResponse } from '../../domain/dto/configuration.dto';
import { environment } from '../../../../../environments/environment';

@Injectable({
    providedIn: 'root'
})
export class ConfigurationService {
    private baseUrl = environment.api + 'hierarchie/parametres-configuration';

    constructor(private http: HttpClient) { }

    /**
     * Récupère toutes les configurations avec pagination
     */
    getAllConfigurations(page = 0, size = 10, sort = ''): Observable<PaginatedResponse<ConfigurationParameterDto>> {
        let params = new HttpParams()
            .set('page', page.toString())
            .set('size', size.toString());

        if (sort) {
            params = params.set('sort', sort);
        }

        return this.http.get<PaginatedResponse<ConfigurationParameterDto>>(this.baseUrl, { params });
    }

    /**
     * Récupère les configurations par catégorie
     */
    getConfigurationsByCategory(category: string, page = 0, size = 10, sort = ''): Observable<PaginatedResponse<ConfigurationParameterDto>> {
        let params = new HttpParams()
            .set('page', page.toString())
            .set('size', size.toString());

        if (sort) {
            params = params.set('sort', sort);
        }

        return this.http.get<PaginatedResponse<ConfigurationParameterDto>>(`${this.baseUrl}/by-categorie/${category}`, { params });
    }

    /**
     * Récupère les configurations d'une société
     */
    getConfigurationsByCompany(societeId: number, page = 0, size = 10, sort = ''): Observable<PaginatedResponse<ConfigurationParameterDto>> {
        let params = new HttpParams()
            .set('page', page.toString())
            .set('size', size.toString());

        if (sort) {
            params = params.set('sort', sort);
        }

        return this.http.get<PaginatedResponse<ConfigurationParameterDto>>(`${this.baseUrl}/by-societe/${societeId}`, { params });
    }

    /**
    * Récupère les configurations d'une entite par clé
    */
    getConfigurationsByCle(cle: string, niveau: "GLOBAL" | "SOCIETE" | "SITE" | "DEPARTEMENT" | "UTILISATEUR", entiteId: number): Observable<ConfigurationParameterDto> {
        let params = new HttpParams()
            .set('cle', cle)
            .set('niveau', niveau)
            .set('entiteId', entiteId.toString());


        return this.http.get<ConfigurationParameterDto>(`${this.baseUrl}/by-cle`, { params });
    }

    /**
     * Récupère les configurations d'une société
     */
    getConfigurationsByNiveauEntite(niveau: "GLOBAL" | "SOCIETE" | "SITE" | "DEPARTEMENT" | "UTILISATEUR", entiteId: number): Observable<Array<ConfigurationParameterDto>> {
        let params = new HttpParams()
            .set('niveau', niveau)
            .set('entiteId', entiteId.toString());

        return this.http.get<Array<ConfigurationParameterDto>>(`${this.baseUrl}/by-niveau-entite`, { params });
    }

    /**
     * Récupère les configurations par niveau
     */
    getConfigurationsByNiveau(niveau: "GLOBAL" | "SOCIETE" | "SITE" | "DEPARTEMENT" | "UTILISATEUR", page = 0, size = 10, sort = ''): Observable<PaginatedResponse<ConfigurationParameterDto>> {
        let params = new HttpParams()
            .set('page', page.toString())
            .set('size', size.toString());

        if (sort) {
            params = params.set('sort', sort);
        }

        return this.http.get<PaginatedResponse<ConfigurationParameterDto>>(`${this.baseUrl}/by-niveau/${niveau}`, { params });
    }

    /**
     * Sauvegarde une configuration (TODO: implement when API is ready)
     */
    saveConfiguration(config: any): Observable<any> {
        return this.http.post<any>(this.baseUrl, config);
    }

    /**
     * Sauvegarde plusieurs configurations (TODO: implement when API is ready)
     */
    saveConfigurations(configs: any[]): Observable<any[]> {
        return this.http.post<any[]>(`${this.baseUrl}/bulk`, configs);
    }
}

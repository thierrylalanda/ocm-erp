import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../../../environments/environment';
import { CurrencyDto, PaginatedResponse, SocieteCurrencyDto, SiteCurrencyDto } from '../../domain/dto/currency.dto';

@Injectable({
    providedIn: 'root'
})
export class CurrencyService {
    private baseUrl = environment.api + 'hierarchie/currencies';

    constructor(private http: HttpClient) { }

    /**
     * Retrieves all currencies with pagination and sorting
     */
    getAllCurrencies(page = 0, size = 10, sort = ''): Observable<PaginatedResponse<CurrencyDto>> {
        let params = new HttpParams()
            .set('page', page.toString())
            .set('size', size.toString());

        if (sort) {
            params = params.set('sort', sort);
        }

        return this.http.get<PaginatedResponse<CurrencyDto>>(this.baseUrl, { params });
    }

    getSocieteCurrencies(societeId: number): Observable<SocieteCurrencyDto[]> {
        return this.http.get<SocieteCurrencyDto[]>(`${environment.api}hierarchie/societe-currencies/societe/${societeId}`);
    }

    addSocieteCurrency(data: any): Observable<SocieteCurrencyDto> {
        return this.http.post<SocieteCurrencyDto>(`${environment.api}hierarchie/societe-currencies`, data);
    }

    toggleSocieteCurrencyActive(id: number, actif: boolean): Observable<SocieteCurrencyDto> {
        return this.http.patch<SocieteCurrencyDto>(`${environment.api}hierarchie/societe-currencies/${id}/actif?actif=${actif}`, {});
    }

    setSocieteCurrencyDefault(id: number): Observable<SocieteCurrencyDto> {
        return this.http.patch<SocieteCurrencyDto>(`${environment.api}hierarchie/societe-currencies/${id}/default`, {});
    }

    deleteSocieteCurrency(id: number): Observable<void> {
        return this.http.delete<void>(`${environment.api}hierarchie/societe-currencies/${id}`);
    }

    // Site Currencies
    getSiteCurrencies(siteId: number): Observable<SiteCurrencyDto[]> {
        return this.http.get<SiteCurrencyDto[]>(`${environment.api}hierarchie/site-currencies/site/${siteId}`);
    }

    addSiteCurrency(data: any): Observable<SiteCurrencyDto> {
        return this.http.post<SiteCurrencyDto>(`${environment.api}hierarchie/site-currencies`, data);
    }

    toggleSiteCurrencyActive(id: number, actif: boolean): Observable<SiteCurrencyDto> {
        return this.http.patch<SiteCurrencyDto>(`${environment.api}hierarchie/site-currencies/${id}/actif?actif=${actif}`, {});
    }

    setSiteCurrencyDefault(id: number): Observable<SiteCurrencyDto> {
        return this.http.patch<SiteCurrencyDto>(`${environment.api}hierarchie/site-currencies/${id}/default`, {});
    }

    deleteSiteCurrency(id: number): Observable<void> {
        return this.http.delete<void>(`${environment.api}hierarchie/site-currencies/${id}`);
    }
}

import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { environment } from '../../../../../environments/environment';
import {
  CreateSiteDto,
  UpdateSiteDto,
  SiteResponseDto,
  PagedSiteResponse
} from '../../domain/dto/site.dto';
import { AuthService } from '../../../../core/services/auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class SiteService {
  private apiUrl = `${environment.api}hierarchie/sites`;

  constructor(
    private http: HttpClient,
    private authService: AuthService
  ) {}

  /**
   * Récupère la liste paginée des sites
   * @param params Paramètres de pagination et filtrage
   */
  getSites(params: {
    page?: number;
    size?: number;
    societeId?: number;
    type?: string;
    actif?: boolean;
    ville?: string;
    pays?: string;
  }): Observable<PagedSiteResponse> {
    let httpParams = new HttpParams();
    
    if (params.page !== undefined) {
      httpParams = httpParams.set('page', params.page.toString());
    }
    if (params.size !== undefined) {
      httpParams = httpParams.set('size', params.size.toString());
    }
    if (params.societeId !== undefined) {
      httpParams = httpParams.set('societeId', params.societeId.toString());
    }
    if (params.type) {
      httpParams = httpParams.set('type', params.type);
    }
    if (params.actif !== undefined) {
      httpParams = httpParams.set('actif', params.actif.toString());
    }
    if (params.ville) {
      httpParams = httpParams.set('ville', params.ville);
    }
    if (params.pays) {
      httpParams = httpParams.set('pays', params.pays);
    }

    return this.http.get<PagedSiteResponse>(this.apiUrl, { params: httpParams })
      .pipe(
        catchError(error => this.handleError(error, 'Erreur lors de la récupération des sites'))
      );
  }

  /**
   * Récupère un site par son ID
   * @param id Identifiant du site
   */
  getSite(id: number): Observable<SiteResponseDto> {
    return this.http.get<SiteResponseDto>(`${this.apiUrl}/${id}`)
      .pipe(
        catchError(error => this.handleError(error, 'Site non trouvé'))
      );
  }

  /**
   * Crée un nouveau site
   * @param site Données du site à créer
   */
  createSite(site: CreateSiteDto): Observable<SiteResponseDto> {
    return this.http.post<SiteResponseDto>(this.apiUrl, site)
      .pipe(
        catchError(error => this.handleError(error, 'Erreur lors de la création du site'))
      );
  }

  /**
   * Met à jour un site existant
   * @param id Identifiant du site
   * @param site Données du site à mettre à jour
   */
  updateSite(id: number, site: UpdateSiteDto): Observable<SiteResponseDto> {
    return this.http.put<SiteResponseDto>(`${this.apiUrl}/${id}`, site)
      .pipe(
        catchError(error => this.handleError(error, 'Erreur lors de la mise à jour du site'))
      );
  }

  /**
   * Supprime un site
   * @param id Identifiant du site
   */
  deleteSite(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`)
      .pipe(
        catchError(error => this.handleError(error, 'Erreur lors de la suppression du site'))
      );
  }

  /**
   * Active ou désactive un site
   * @param id Identifiant du site
   * @param actif Statut actif/inactif
   */
  toggleSiteStatus(id: number, actif: boolean): Observable<SiteResponseDto> {
    return this.http.patch<SiteResponseDto>(`${this.apiUrl}/${id}/status`, { actif })
      .pipe(
        catchError(error => this.handleError(error, 'Erreur lors du changement de statut'))
      );
  }

  /**
   * Récupère la société de l'utilisateur connecté
   */
  getCurrentUserSocieteId(): number | null {
    const user = this.authService.user;
    return user?.societeId || null;
  }

  /**
   * Gestion des erreurs HTTP
   * @param error Erreur HTTP
   * @param defaultMessage Message par défaut
   */
  private handleError(error: HttpErrorResponse, defaultMessage: string): Observable<never> {
    let errorMessage = defaultMessage;

    if (error.error instanceof ErrorEvent) {
      // Erreur côté client
      errorMessage = `Erreur: ${error.error.message}`;
    } else {
      // Erreur côté serveur
      switch (error.status) {
        case 400:
          errorMessage = 'Données invalides. Vérifiez les champs du formulaire.';
          if (error.error?.message) {
            errorMessage += ` ${error.error.message}`;
          }
          break;
        case 401:
          errorMessage = 'Non autorisé. Veuillez vous reconnecter.';
          break;
        case 403:
          errorMessage = 'Accès interdit. Vous n\'avez pas les permissions nécessaires.';
          break;
        case 404:
          errorMessage = 'Site non trouvé.';
          break;
        case 409:
          errorMessage = 'Un site avec ce code existe déjà pour cette société.';
          break;
        case 500:
          errorMessage = 'Erreur serveur. Veuillez réessayer plus tard.';
          break;
        case 503:
          errorMessage = 'Service temporairement indisponible. Veuillez réessayer.';
          break;
        default:
          errorMessage = `${defaultMessage} (Code: ${error.status})`;
          if (error.error?.message) {
            errorMessage += ` - ${error.error.message}`;
          }
      }
    }

    console.error('Site Service Error:', {
      status: error.status,
      message: errorMessage,
      error: error.error
    });

    return throwError(() => new Error(errorMessage));
  }

  /**
   * Vérifie si un code de site est disponible
   * @param code Code à vérifier
   * @param societeId ID de la société
   * @param excludeSiteId ID du site à exclure (lors de la mise à jour)
   */
  checkCodeAvailability(code: string, societeId: number, excludeSiteId?: number): Observable<boolean> {
    let httpParams = new HttpParams()
      .set('code', code)
      .set('societeId', societeId.toString());
    
    if (excludeSiteId) {
      httpParams = httpParams.set('excludeId', excludeSiteId.toString());
    }

    return this.http.get<{ available: boolean }>(`${this.apiUrl}/check-code`, { params: httpParams })
      .pipe(
        map(response => response.available),
        catchError(() => of(true)) // En cas d'erreur, on considère que le code est disponible
      );
  }

  /**
   * Exporte les sites en CSV
   * @param params Paramètres de filtrage
   */
  exportSitesToCsv(params: {
    societeId?: number;
    type?: string;
    actif?: boolean;
  }): Observable<Blob> {
    let httpParams = new HttpParams();
    
    if (params.societeId !== undefined) {
      httpParams = httpParams.set('societeId', params.societeId.toString());
    }
    if (params.type) {
      httpParams = httpParams.set('type', params.type);
    }
    if (params.actif !== undefined) {
      httpParams = httpParams.set('actif', params.actif.toString());
    }

    return this.http.get(`${this.apiUrl}/export/csv`, {
      params: httpParams,
      responseType: 'blob'
    }).pipe(
      catchError(error => this.handleError(error, 'Erreur lors de l\'export'))
    );
  }

  /**
   * Récupère les statistiques des sites
   * @param societeId ID de la société
   */
  getSiteStatistics(societeId: number): Observable<{
    total: number;
    actifs: number;
    inactifs: number;
    parType: Record<string, number>;
    parVille: Record<string, number>;
    parPays: Record<string, number>;
  }> {
    const params = new HttpParams().set('societeId', societeId.toString());
    
    return this.http.get<any>(`${this.apiUrl}/statistics`, { params })
      .pipe(
        catchError(() => of({
          total: 0,
          actifs: 0,
          inactifs: 0,
          parType: {},
          parVille: {},
          parPays: {}
        }))
      );
  }
}

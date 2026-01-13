import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { environment } from '../../../../../environments/environment';
import { 
  CreateDepartementDto, 
  UpdateDepartementDto, 
  DepartementResponseDto, 
  PagedDepartementResponse,
  DepartementStatistics 
} from '../../domain/dto/departement.dto';
import { AuthService } from '../../../../core/services/auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class DepartementService {
  private apiUrl = `${environment.api}hierarchie/departements`;

  constructor(private http: HttpClient,private authService: AuthService) {}

  /**
   * Récupère la liste paginée des départements
   * @param societeId ID de la société (optionnel)
   * @param page Numéro de page (0-based)
   * @param size Taille de la page
   * @param search Terme de recherche
   * @param actif Filtre par statut
   */
  getDepartements(
    societeId?: number,
    page: number = 0,
    size: number = 10,
    search?: string,
    actif?: boolean
  ): Observable<PagedDepartementResponse> {
    let params = new HttpParams()
      .set('page', page.toString())
      .set('size', size.toString());

    if (societeId) {
      params = params.set('societeId', societeId.toString());
    }

    if (search) {
      params = params.set('search', search);
    }

    if (actif !== undefined) {
      params = params.set('actif', actif.toString());
    }

    return this.http.get<PagedDepartementResponse>(this.apiUrl, { params });
  }

  /**
   * Récupère un département par son ID
   * @param id ID du département
   */
  getDepartement(id: number): Observable<DepartementResponseDto> {
    return this.http.get<DepartementResponseDto>(`${this.apiUrl}/${id}`);
  }

  /**
   * Crée un nouveau département
   * @param dto Données du département
   */
  createDepartement(dto: CreateDepartementDto): Observable<DepartementResponseDto> {
    return this.http.post<DepartementResponseDto>(this.apiUrl, dto);
  }

  /**
   * Met à jour un département existant
   * @param id ID du département
   * @param dto Données mises à jour
   */
  updateDepartement(id: number, dto: UpdateDepartementDto): Observable<DepartementResponseDto> {
    return this.http.put<DepartementResponseDto>(`${this.apiUrl}/${id}`, dto);
  }

  /**
   * Supprime un département
   * @param id ID du département
   */
  deleteDepartement(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }

  /**
   * Active ou désactive un département
   * @param id ID du département
   * @param actif Nouveau statut
   */
  toggleDepartementStatus(id: number, actif: boolean): Observable<DepartementResponseDto> {
    return this.http.patch<DepartementResponseDto>(`${this.apiUrl}/${id}/status`, { actif });
  }

  /**
   * Récupère les statistiques des départements
   * @param societeId ID de la société (optionnel)
   */
  getDepartementStatistics(societeId?: number): Observable<DepartementStatistics> {
    let params = new HttpParams();
    if (societeId) {
      params = params.set('societeId', societeId.toString());
    }
    
    return this.http.get<DepartementStatistics>(`${this.apiUrl}/statistics`, { params });
  }

  /**
   * Récupère la liste de toutes les sociétés (pour les dropdowns)
   * Note: Cette méthode dépend de l'API des sociétés
   */
  getSocietes(): Observable<any[]> {
    // À adapter selon l'API des sociétés
    return this.http.get<any[]>(`${environment.api}societes`);
  }

   /**
   * Récupère la société de l'utilisateur connecté
   */
  getCurrentUserSocieteId(): number | null {
    const user = this.authService.user;
    return user?.societeId || null;
  }
}

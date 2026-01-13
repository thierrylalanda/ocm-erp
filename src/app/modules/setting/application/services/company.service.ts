import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CompanyResponseDto, UpdateCompanyRequestDto } from '../../domain/dto/company.dto';
import { AuthService } from '../../../../core/services/auth/auth.service';
import { environment } from '../../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {
  private baseUrl = environment.api+'hierarchie/societes';

  constructor(
    private http: HttpClient,
    private authService: AuthService
  ) {}

  /**
   * Get company by ID
   * @param id Company ID
   * @returns Observable with company data
   */
  getCompany(id: number): Observable<CompanyResponseDto> {
    return this.http.get<CompanyResponseDto>(`${this.baseUrl}/${id}`);
  }

  /**
   * Get current user's company
   * @returns Observable with company data
   */
  getCurrentUserCompany(): Observable<CompanyResponseDto> {
    const user = this.authService.user;
    if (!user || !user.societeId) {
      throw new Error('User not authenticated or company ID not found');
    }
    return this.getCompany(user.societeId);
  }

  /**
   * Update company
   * @param id Company ID
   * @param data Company data to update
   * @returns Observable with updated company data
   */
  updateCompany(id: number, data: UpdateCompanyRequestDto): Observable<CompanyResponseDto> {
    return this.http.put<CompanyResponseDto>(`${this.baseUrl}/${id}`, data);
  }

  /**
   * Update current user's company
   * @param data Company data to update
   * @returns Observable with updated company data
   */
  updateCurrentUserCompany(data: UpdateCompanyRequestDto): Observable<CompanyResponseDto> {
    const user = this.authService.user;
    if (!user || !user.societeId) {
      throw new Error('User not authenticated or company ID not found');
    }
    return this.updateCompany(user.societeId, data);
  }

  /**
   * Upload logo for company
   * @param id Company ID
   * @param logoFile Logo file to upload
   * @returns Observable with updated company data
   */
  uploadLogo(id: number, logoFile: File): Observable<CompanyResponseDto> {
    const formData = new FormData();
    formData.append('file', logoFile);
    
    return this.http.post<CompanyResponseDto>(`${this.baseUrl}/${id}/logo`, formData);
  }

  /**
   * Upload logo for current user's company
   * @param logoFile Logo file to upload
   * @returns Observable with updated company data
   */
  uploadCurrentUserCompanyLogo(logoFile: File): Observable<CompanyResponseDto> {
    const user = this.authService.user;
    if (!user || !user.societeId) {
      throw new Error('User not authenticated or company ID not found');
    }
    return this.uploadLogo(user.societeId, logoFile);
  }

  /**
   * Delete logo for company
   * @param id Company ID
   * @returns Observable with updated company data
   */
  deleteLogo(id: number): Observable<CompanyResponseDto> {
    return this.http.delete<CompanyResponseDto>(`${this.baseUrl}/${id}/logo`);
  }

  /**
   * Delete logo for current user's company
   * @returns Observable with updated company data
   */
  deleteCurrentUserCompanyLogo(): Observable<CompanyResponseDto> {
    const user = this.authService.user;
    if (!user || !user.societeId) {
      throw new Error('User not authenticated or company ID not found');
    }
    return this.deleteLogo(user.societeId);
  }
}

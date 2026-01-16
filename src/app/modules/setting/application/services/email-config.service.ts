import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { 
  CreateEmailConfigRequestDto, 
  EmailConfigResponseDto, 
  UpdateEmailConfigRequestDto,
  EmailConfigPagedResponseDto,
  SendTestEmailRequestDto,
  SendTestEmailResponseDto 
} from '../../domain/dto/email-config.dto';
import { AuthService } from '../../../../core/services/auth/auth.service';
import { environment } from '../../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EmailConfigService {
  private baseUrl = environment.api + 'notification/email-config';

  constructor(
    private http: HttpClient,
    private authService: AuthService
  ) {}

  /**
   * Récupère toutes les configurations email de la société de l'utilisateur courant
   */
  getEmailConfigs(page: number = 0, size: number = 10, sort: string = 'id,desc'): Observable<EmailConfigPagedResponseDto> {
    const user = this.authService.user;
    if (!user || !user.societeId) {
      throw new Error('User not authenticated or company ID not found');
    }
    
    const params = {
      societeId: user.societeId.toString(),
      page: page.toString(),
      size: size.toString(),
      sort: sort
    };
    
    // L'API retourne les configurations de la société de l'utilisateur
    return this.http.get<EmailConfigPagedResponseDto>(this.baseUrl, { params });
  }

  /**
   * Récupère une configuration email par son ID
   */
  getEmailConfig(id: number): Observable<EmailConfigResponseDto> {
    return this.http.get<EmailConfigResponseDto>(`${this.baseUrl}/${id}`);
  }

  /**
   * Crée une nouvelle configuration email
   */
  createEmailConfig(data: CreateEmailConfigRequestDto): Observable<EmailConfigResponseDto> {
    const user = this.authService.user;
    if (!user || !user.societeId) {
      throw new Error('User not authenticated or company ID not found');
    }
    
    // S'assurer que la société ID est correcte
    const configData = {
      ...data,
      societeId: user.societeId
    };
    
    return this.http.post<EmailConfigResponseDto>(this.baseUrl, configData);
  }

  /**
   * Met à jour une configuration email existante
   */
  updateEmailConfig(id: number, data: UpdateEmailConfigRequestDto): Observable<EmailConfigResponseDto> {
    return this.http.put<EmailConfigResponseDto>(`${this.baseUrl}/${id}`, data);
  }

  /**
   * Supprime une configuration email
   */
  deleteEmailConfig(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${id}`);
  }

  /**
   * Active ou désactive une configuration email
   */
  toggleEmailConfigStatus(id: number, isActive: boolean): Observable<EmailConfigResponseDto> {
    return this.http.patch<EmailConfigResponseDto>(`${this.baseUrl}/${id}/active`, { isActive });
  }

  /**
   * Envoie un email de test
   */
  sendTestEmail(data: SendTestEmailRequestDto): Observable<SendTestEmailResponseDto> {
    return this.http.post<SendTestEmailResponseDto>(`${this.baseUrl}/${data.configId}/test`, data);
  }

  /**
   * Envoie un email de test avec une configuration spécifique
   */
  sendTestEmailWithConfig(configId: number, emailAddress: string): Observable<SendTestEmailResponseDto> {
    return this.sendTestEmail({
      emailAddress,
      configId
    });
  }

  /**
   * Récupère les options SMTP Secure disponibles
   */
  getSmtpSecureOptions(): Array<{ value: 'SSL' | 'TLS' | 'NONE', label: string }> {
    return [
      { value: 'SSL', label: 'SSL' },
      { value: 'TLS', label: 'TLS' },
      { value: 'NONE', label: 'Aucun' }
    ];
  }

  /**
   * Récupère les types d'authentification disponibles
   */
  getAuthTypeOptions(): Array<{ value: string, label: string }> {
    return [
      { value: 'PLAIN', label: 'PLAIN' },
      { value: 'LOGIN', label: 'LOGIN' },
      { value: 'CRAM-MD5', label: 'CRAM-MD5' }
    ];
  }

  /**
   * Valide une configuration email
   */
  validateEmailConfig(data: CreateEmailConfigRequestDto | UpdateEmailConfigRequestDto): string[] {
    const errors: string[] = [];

    if (!data.host || data.host.trim() === '') {
      errors.push('Le serveur SMTP est requis');
    }

    if (!data.port || data.port <= 0 || data.port > 65535) {
      errors.push('Le port SMTP doit être entre 1 et 65535');
    }

    if (!data.username || data.username.trim() === '') {
      errors.push('Le nom d\'utilisateur est requis');
    }

    if ('passwordTxt' in data && (!data.passwordTxt || data.passwordTxt.trim() === '')) {
      errors.push('Le mot de passe est requis');
    }

    if (!data.fromAdress || data.fromAdress.trim() === '') {
      errors.push('L\'adresse email d\'expédition est requise');
    } else if (!this.isValidEmail(data.fromAdress)) {
      errors.push('L\'adresse email d\'expédition n\'est pas valide');
    }

    if (!data.fromName || data.fromName.trim() === '') {
      errors.push('Le nom d\'expéditeur est requis');
    }

    return errors;
  }

  /**
   * Valide une adresse email
   */
  private isValidEmail(email: string): boolean {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }
}

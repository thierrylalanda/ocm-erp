/**
 * DTO pour la création d'une configuration email
 */
export interface CreateEmailConfigRequestDto {
  host: string;
  port: number;
  auth: number;
  authType: string;
  username: string;
  passwordTxt: string;
  fromAdress: string;
  fromName: string;
  societeId: number;
  smtpSecure: 'SSL' | 'TLS' | 'NONE';
  isActive: boolean;
  testEmail: string;
}

/**
 * DTO pour la réponse d'une configuration email
 */
export interface EmailConfigResponseDto {
  id: number;
  host: string;
  port: number;
  auth: number;
  authType: string;
  username: string;
  fromAdress: string;
  fromName: string;
  societeId: number;
  societeNom: string;
  smtpSecure: 'SSL' | 'TLS' | 'NONE';
  isActive: boolean;
  testEmail: string;
  dateCreation: string;
}

/**
 * DTO pour la mise à jour d'une configuration email
 */
export interface UpdateEmailConfigRequestDto {
  host?: string;
  port?: number;
  auth?: number;
  authType?: string;
  username?: string;
  passwordTxt?: string;
  fromAdress?: string;
  fromName?: string;
  smtpSecure?: 'SSL' | 'TLS' | 'NONE';
  isActive?: boolean;
  testEmail?: string;
}

/**
 * DTO pour la réponse paginée des configurations email
 */
export interface EmailConfigPagedResponseDto {
  content: EmailConfigResponseDto[];
  page: number;
  size: number;
  totalElements: number;
  totalPages: number;
}

/**
 * DTO pour l'envoi d'un email de test
 */
export interface SendTestEmailRequestDto {
  emailAddress: string;
  configId?: number;
}

/**
 * DTO pour la réponse d'envoi d'email de test
 */
export interface SendTestEmailResponseDto {
  success: boolean;
  message: string;
  timestamp: string;
}

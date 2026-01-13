import { UserStatus } from '../../domain/entities/user.entity';
import { role } from '../../../../core/models/models';

/**
 * DTO pour la création d'un utilisateur (données envoyées à l'API)
 */
export interface CreateUserDto {
  id?: number;
  nomPrenom: string;
  telephone: string;
  adresse: string;
  userName: string;
  password: string;
  email: string;
  pwdText: string;
  societeId: number;
  siteId: number;
  departementId: number;
  statut: UserStatus;
  photo: string;
  signature: string;
  langue: string;
}

/**
 * DTO de réponse pour un utilisateur (données reçues de l'API)
 */
export interface UserResponseDto {
  id: number;
  nomPrenom: string;
  telephone: string;
  adresse: string;
  userName: string;
  email: string;
  pwdText: string;
  statut: string;
  societeId: number;
  societeNom: string;
  siteId: number;
  siteNom: string;
  departementId: number;
  departementNom: string;
  derniereConnexion: string | null;
  tentativesConnexion: number;
  photo: string;
  signature: string;
  langue: string;
  dateCreation: string;
  roles:string[];
  permissions:string[];
}

/**
 * DTO pour la mise à jour d'un utilisateur
 */
export interface UpdateUserDto {
  nomPrenom?: string;
  telephone?: string;
  adresse?: string;
  userName?: string;
  email?: string;
  statut?: UserStatus;
  siteId?: number;
  societeId?: number;
  departementId?: number;
  photo?: string;
  signature?: string;
  langue?: string;
}

/**
 * DTO pour la réponse paginée des utilisateurs
 */
export interface UsersPagedResponseDto {
  content: UserResponseDto[];
  page: number;
  size: number;
  totalElements: number;
  totalPages: number;
}

/**
 * DTO pour les options de pagination
 */
export interface UsersPaginationOptionsDto {
  page?: number;
  size?: number;
  sortBy?: string;
  sortOrder?: 'asc' | 'desc';
  search?: string;
  status?: string;
  siteId?: number;
  departmentId?: number;
}

/**
 * Mappers pour convertir entre les DTOs et les entités
 */
export class UserMapper {
  /**
   * Convertit CreateUserDto en UserCreateCommand
   */
  static toCreateCommand(dto: CreateUserDto) {
    return {
      nomPrenom: dto.nomPrenom,
      telephone: dto.telephone,
      adresse: dto.adresse,
      userName: dto.userName,
      password: dto.password,
      email: dto.email,
      pwdText: dto.pwdText,
      societeId: dto.societeId,
      siteId: dto.siteId,
      departementId: dto.departementId,
      statut: dto.statut,
      photo: dto.photo,
      signature: dto.signature,
      langue: dto.langue
    };
  }

  /**
   * Convertit UpdateUserDto en UserUpdateCommand
   */
  static toUpdateCommand(dto: UpdateUserDto) {
    return {
      nomPrenom: dto.nomPrenom,
      telephone: dto.telephone,
      adresse: dto.adresse,
      userName: dto.userName,
      email: dto.email,
      statut: dto.statut,
      siteId: dto.siteId,
      societeId:dto.societeId,
      departementId: dto.departementId,
      photo: dto.photo,
      signature: dto.signature,
      langue: dto.langue
    };
  }

  /**
   * Convertit UserResponseDto en User
   */
  static toUser(dto: UserResponseDto) {
    return {
      id: { value: dto.id },
      nomPrenom: dto.nomPrenom,
      telephone: dto.telephone,
      adresse: dto.adresse,
      userName: dto.userName,
      email: dto.email,
      pwdText: dto.pwdText,
      statut: dto.statut as UserStatus,
      societeId: dto.societeId,
      societeNom: dto.societeNom,
      siteId: dto.siteId,
      siteNom: dto.siteNom,
      departementId: dto.departementId,
      departementNom: dto.departementNom,
      derniereConnexion: dto.derniereConnexion ? new Date(dto.derniereConnexion) : null,
      tentativesConnexion: dto.tentativesConnexion,
      photo: dto.photo,
      signature: dto.signature,
      langue: dto.langue,
      dateCreation: new Date(dto.dateCreation)
    };
  }

  /**
   * Convertit User en UserResponseDto
   */
  static toResponseDto(user: any): UserResponseDto {
    return {
      id: user.id || 0,
      nomPrenom: user.nomPrenom,
      telephone: user.telephone,
      adresse: user.adresse,
      userName: user.userName,
      email: user.email,
      pwdText: user.pwdText,
      statut: user.statut,
      societeId: user.societeId,
      societeNom: user.societeNom || '',
      siteId: user.siteId,
      siteNom: user.siteNom || '',
      departementId: user.departementId,
      departementNom: user.departementNom || '',
      derniereConnexion: user.derniereConnexion ? user.derniereConnexion : null,
      tentativesConnexion: user.tentativesConnexion || 0,
      photo: user.photo,
      signature: user.signature,
      langue: user.langue,
      dateCreation: user.dateCreation ? user.dateCreation.toISOString() : new Date().toISOString(),
      roles:user.roles ||[],
      permissions:user.permissions|| []
    };
  }

  /**
   * Convertit UsersPagedResponse en UsersPagedResponseDto
   */
  static toPagedResponseDto(response: any): UsersPagedResponseDto {
    return {
      content: response.content?.map((user: any) => this.toResponseDto(user)) || [],
      page: response.page || 0,
      size: response.size || 10,
      totalElements: response.totalElements || 0,
      totalPages: response.totalPages || 0
    };
  }
}

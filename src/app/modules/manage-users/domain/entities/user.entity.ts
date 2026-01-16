import { PagedResponse } from '../types/paged-response.type';

/**
 * ID de l'utilisateur (numérique selon l'API)
 */
export interface UserId {
  value: number;
}

/**
 * Statut de l'utilisateur selon l'API
 */
export type UserStatus = 'ACTIF' | 'INACTIF' | 'SUSPENDU' | 'BLOQUE';

/**
 * Entité Utilisateur adaptée à l'API
 */
export interface User {
  id: number;
  nomPrenom: string;
  telephone: string;
  adresse: string;
  userName: string;
  email: string;
  pwdText: string;
  statut: UserStatus;
  societeId: number;
  societeNom: string;
  siteId: number;
  siteNom: string;
  departementId: number;
  departementNom: string;
  derniereConnexion: Date | null;
  tentativesConnexion: number;
  photo: string;
  signature: string;
  langue: string;
  dateCreation: Date;
  permissions:string[];
  roles:string[];
}

/**
 * Commande pour créer un utilisateur (données à envoyer à l'API)
 */
export interface UserCreateCommand {
  id?:number,
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
 * Commande pour mettre à jour un utilisateur
 */
export interface UserUpdateCommand {
  nomPrenom?: string;
  telephone?: string;
  adresse?: string;
  userName?: string;
  email?: string;
  statut?: UserStatus;
  siteId?: number;
  departementId?: number;
  photo?: string;
  signature?: string;
  langue?: string;
}

/**
 * Réponse de l'API pour un utilisateur
 */
export interface UserResponse {
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
  permissions:string[];
  roles:string[];
}

/**
 * Réponse paginée pour les utilisateurs
 */
export type UsersPagedResponse = PagedResponse<UserResponse>;

/**
 * Entité métier Utilisateur
 */
export class UserEntity implements User {
  constructor(
    public readonly id: number,
    public readonly nomPrenom: string,
    public readonly telephone: string,
    public readonly adresse: string,
    public readonly userName: string,
    public readonly email: string,
    public readonly pwdText: string,
    public readonly statut: UserStatus,
    public readonly societeId: number,
    public readonly societeNom: string,
    public readonly siteId: number,
    public readonly siteNom: string,
    public readonly departementId: number,
    public readonly departementNom: string,
    public readonly derniereConnexion: Date | null,
    public readonly tentativesConnexion: number,
    public readonly photo: string,
    public readonly signature: string,
    public readonly langue: string,
    public readonly dateCreation: Date,
    public readonly permissions: string[],
    public readonly roles: string[],
  ) {}

  /**
   * Crée une nouvelle entité utilisateur
   */
  static create(command: UserCreateCommand): UserEntity {
    const now = new Date();
    const userId: UserId = { value: 0 }; // L'ID sera généré par l'API

    return new UserEntity(
      command.id!,
      command.nomPrenom,
      command.telephone,
      command.adresse,
      command.userName,
      command.email,
      command.pwdText,
      command.statut,
      command.societeId,
      '', // societeNom sera rempli par l'API
      command.siteId,
      '', // siteNom sera rempli par l'API
      command.departementId,
      '', // departementNom sera rempli par l'API
      null, // derniereConnexion
      0, // tentativesConnexion
      command.photo,
      command.signature,
      command.langue,
      now,
      [],[]
    );
  }

  /**
   * Met à jour l'entité utilisateur
   */
  update(command: UserUpdateCommand): UserEntity {
    return new UserEntity(
      this.id,
      command.nomPrenom ?? this.nomPrenom,
      command.telephone ?? this.telephone,
      command.adresse ?? this.adresse,
      command.userName ?? this.userName,
      command.email ?? this.email,
      this.pwdText, // pwdText ne peut pas être mis à jour via update
      command.statut ?? this.statut,
      this.societeId,
      this.societeNom,
      command.siteId ?? this.siteId,
      this.siteNom,
      command.departementId ?? this.departementId,
      this.departementNom,
      this.derniereConnexion,
      this.tentativesConnexion,
      command.photo ?? this.photo,
      command.signature ?? this.signature,
      command.langue ?? this.langue,
      this.dateCreation,[],[]
    );
  }

  /**
   * Marque l'utilisateur comme inactif
   */
  deactivate(): UserEntity {
    return new UserEntity(
      this.id,
      this.nomPrenom,
      this.telephone,
      this.adresse,
      this.userName,
      this.email,
      this.pwdText,
      'INACTIF',
      this.societeId,
      this.societeNom,
      this.siteId,
      this.siteNom,
      this.departementId,
      this.departementNom,
      this.derniereConnexion,
      this.tentativesConnexion,
      this.photo,
      this.signature,
      this.langue,
      this.dateCreation,[],[]
    );
  }

  /**
   * Marque l'utilisateur comme actif
   */
  activate(): UserEntity {
    return new UserEntity(
      this.id,
      this.nomPrenom,
      this.telephone,
      this.adresse,
      this.userName,
      this.email,
      this.pwdText,
      'ACTIF',
      this.societeId,
      this.societeNom,
      this.siteId,
      this.siteNom,
      this.departementId,
      this.departementNom,
      this.derniereConnexion,
      this.tentativesConnexion,
      this.photo,
      this.signature,
      this.langue,
      this.dateCreation,[],[]
    );
  }

  /**
   * Enregistre une connexion
   */
  recordLogin(): UserEntity {
    return new UserEntity(
      this.id,
      this.nomPrenom,
      this.telephone,
      this.adresse,
      this.userName,
      this.email,
      this.pwdText,
      this.statut,
      this.societeId,
      this.societeNom,
      this.siteId,
      this.siteNom,
      this.departementId,
      this.departementNom,
      new Date(),
      this.tentativesConnexion + 1,
      this.photo,
      this.signature,
      this.langue,
      this.dateCreation,[],[]
    );
  }

  /**
   * Vérifie si l'utilisateur est actif
   */
  isActive(): boolean {
    return this.statut === 'ACTIF';
  }

  /**
   * Obtient le nom complet
   */
  getFullName(): string {
    return this.nomPrenom;
  }

  /**
   * Obtient l'identifiant sous forme de nombre
   */
  getIdValue(): number {
    return this.id;
  }
}

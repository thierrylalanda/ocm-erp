import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { User, UserId, UserCreateCommand, UserUpdateCommand, UserResponse, UsersPagedResponse, UserEntity } from '../../domain/entities/user.entity';
import { UserRepository, BaseUserRepository, UserRepositoryQueryOptions } from '../../domain/repositories/user.repository';
import { UserMapper } from '../mappers/user.mapper';
import { PaginationOptions } from '../../domain/types/paged-response.type';
import { environment } from '../../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HttpUserRepository extends BaseUserRepository implements UserRepository {
  private readonly baseUrl = environment.api+'hierarchie/utilisateurs';

  constructor(
    private http: HttpClient,
    @Inject('LOCAL_STORAGE') private localStorage: Storage
  ) {
    super();
  }

  // Méthodes de mapping protégées
  protected mapResponseToUser(response: UserResponse): User {
    return UserMapper.fromResponseToEntity(response);
  }

  protected mapUserToCreateCommand(user: User): UserCreateCommand {
    // Convertir User en UserEntity si nécessaire
    const userEntity = user instanceof UserEntity ? user : new UserEntity(
      user.id,
      user.nomPrenom,
      user.telephone,
      user.adresse,
      user.userName,
      user.email,
      user.pwdText,
      user.statut,
      user.societeId,
      user.societeNom,
      user.siteId,
      user.siteNom,
      user.departementId,
      user.departementNom,
      user.derniereConnexion,
      user.tentativesConnexion,
      user.photo,
      user.signature,
      user.langue,
      user.dateCreation,
      user.permissions,
      user.roles
    );
    
    return {
      nomPrenom: userEntity.nomPrenom,
      telephone: userEntity.telephone,
      adresse: userEntity.adresse,
      userName: userEntity.userName,
      password: userEntity.pwdText,
      email: userEntity.email,
      pwdText: userEntity.pwdText,
      societeId: userEntity.societeId,
      siteId: userEntity.siteId,
      departementId: userEntity.departementId,
      statut: userEntity.statut,
      photo: userEntity.photo,
      signature: userEntity.signature,
      langue: userEntity.langue
    };
  }

  protected mapUserToUpdateCommand(user: User): UserUpdateCommand {
    // Convertir User en UserEntity si nécessaire
    const userEntity = user instanceof UserEntity ? user : new UserEntity(
      user.id,
      user.nomPrenom,
      user.telephone,
      user.adresse,
      user.userName,
      user.email,
      user.pwdText,
      user.statut,
      user.societeId,
      user.societeNom,
      user.siteId,
      user.siteNom,
      user.departementId,
      user.departementNom,
      user.derniereConnexion,
      user.tentativesConnexion,
      user.photo,
      user.signature,
      user.langue,
      user.dateCreation,
      user.permissions,
      user.roles
    );
    
    return {
      nomPrenom: userEntity.nomPrenom,
      telephone: userEntity.telephone,
      adresse: userEntity.adresse,
      userName: userEntity.userName,
      email: userEntity.email,
      statut: userEntity.statut,
      siteId: userEntity.siteId,
      departementId: userEntity.departementId,
      photo: userEntity.photo,
      signature: userEntity.signature,
      langue: userEntity.langue
    };
  }

  // Implémentation des méthodes du repository

  async findById(id: UserId): Promise<User | null> {
    try {
      const response = await this.http.get<any>(`${this.baseUrl}/${id.value}`).toPromise();
      const userResponse = UserMapper.fromApiResponse(response);
      return UserMapper.fromResponseToEntity(userResponse);
    } catch (error) {
      console.error('Erreur récupération utilisateur par ID:', error);
      return null;
    }
  }

  async findByEmail(email: string): Promise<User | null> {
    try {
      const params = new HttpParams().set('email', email);
      const response = await this.http.get<any>(this.baseUrl, { params }).toPromise();
      
      if (response.content && response.content.length > 0) {
        const userResponse = UserMapper.fromApiResponse(response.content[0]);
        return UserMapper.fromResponseToEntity(userResponse);
      }
      return null;
    } catch (error) {
      console.error('Erreur recherche par email:', error);
      return null;
    }
  }

  async findByUsername(username: string): Promise<User | null> {
    try {
      const params = new HttpParams().set('userName', username);
      const response = await this.http.get<any>(this.baseUrl, { params }).toPromise();
      
      if (response.content && response.content.length > 0) {
        const userResponse = UserMapper.fromApiResponse(response.content[0]);
        return UserMapper.fromResponseToEntity(userResponse);
      }
      return null;
    } catch (error) {
      console.error('Erreur recherche par nom d\'utilisateur:', error);
      return null;
    }
  }

  async findAllPaginated(options?: PaginationOptions): Promise<UsersPagedResponse> {
    try {
      let params = new HttpParams();
      
      if (options?.page !== undefined) {
        params = params.set('page', options.page.toString());
      }
      
      if (options?.size !== undefined) {
        params = params.set('size', options.size.toString());
      }
      
      if (options?.sortBy) {
        params = params.set('sortBy', options.sortBy);
      }
      
      if (options?.sortOrder) {
        params = params.set('sortOrder', options.sortOrder);
      }
      
      if (options?.search) {
        params = params.set('search', options.search);
      }

      // Ajouter le societeId depuis le localStorage
      const societeId = this.getSocieteIdFromLocalStorage();
      if (societeId) {
        params = params.set('societeId', societeId.toString());
      }

      const response = await this.http.get<any>(this.baseUrl, { params }).toPromise();
      return UserMapper.fromApiPagedResponse(response);
    } catch (error) {
      console.error('Erreur récupération liste paginée utilisateurs:', error);
      return {
        content: [],
        page: 0,
        size: 10,
        totalElements: 0,
        totalPages: 0
      };
    }
  }

  async create(user: User): Promise<User> {
    try {
      // Convertir User en UserEntity
      const userEntity = this.convertToUserEntity(user);
      const createData = UserMapper.toApiCreateObject(userEntity);
      
      // S'assurer que societeId est présent (depuis localStorage si non fourni)
      if (!createData.societeId) {
        createData.societeId = this.getSocieteIdFromLocalStorage();
      }

      const response = await this.http.post<any>(this.baseUrl, createData).toPromise();
      const userResponse = UserMapper.fromApiResponse(response);
      return UserMapper.fromResponseToEntity(userResponse);
    } catch (error) {
      console.error('Erreur création utilisateur:', error);
      throw error;
    }
  }

  async update(user: User): Promise<User> {
    try {
      // Convertir User en UserEntity
      const userEntity = this.convertToUserEntity(user);
      const updateData = UserMapper.toApiUpdateObject(userEntity);
      const response = await this.http.put<any>(`${this.baseUrl}/${userEntity.getIdValue()}`, updateData).toPromise();
      const userResponse = UserMapper.fromApiResponse(response);
      return UserMapper.fromResponseToEntity(userResponse);
    } catch (error) {
      console.error('Erreur mise à jour utilisateur:', error);
      throw error;
    }
  }

  async delete(id: UserId): Promise<void> {
    try {
      await this.http.delete<void>(`${this.baseUrl}/${id.value}`).toPromise();
    } catch (error) {
      console.error('Erreur suppression utilisateur:', error);
      throw error;
    }
  }

  async activateUser(id: UserId): Promise<User> {
    try {
      const response = await this.http.patch<any>(`${this.baseUrl}/${id.value}/activate`, {}).toPromise();
      const userResponse = UserMapper.fromApiResponse(response);
      return UserMapper.fromResponseToEntity(userResponse);
    } catch (error) {
      console.error('Erreur activation utilisateur:', error);
      throw error;
    }
  }

  async deactivateUser(id: UserId): Promise<User> {
    try {
      const response = await this.http.patch<any>(`${this.baseUrl}/${id.value}/deactivate`, {}).toPromise();
      const userResponse = UserMapper.fromApiResponse(response);
      return UserMapper.fromResponseToEntity(userResponse);
    } catch (error) {
      console.error('Erreur désactivation utilisateur:', error);
      throw error;
    }
  }

  async recordLogin(id: UserId): Promise<void> {
    try {
      await this.http.patch<void>(`${this.baseUrl}/${id.value}/record-login`, {}).toPromise();
    } catch (error) {
      console.error('Erreur enregistrement connexion:', error);
      throw error;
    }
  }

  async searchUsers(query: string, options?: PaginationOptions): Promise<UsersPagedResponse> {
    try {
      let params = new HttpParams().set('search', query);
      
      if (options?.page !== undefined) {
        params = params.set('page', options.page.toString());
      }
      
      if (options?.size !== undefined) {
        params = params.set('size', options.size.toString());
      }

      const societeId = this.getSocieteIdFromLocalStorage();
      if (societeId) {
        params = params.set('societeId', societeId.toString());
      }

      const response = await this.http.get<any>(this.baseUrl, { params }).toPromise();
      return UserMapper.fromApiPagedResponse(response);
    } catch (error) {
      console.error('Erreur recherche utilisateurs:', error);
      return {
        content: [],
        page: 0,
        size: 10,
        totalElements: 0,
        totalPages: 0
      };
    }
  }

  async findByStatus(status: string, options?: PaginationOptions): Promise<UsersPagedResponse> {
    try {
      let params = new HttpParams().set('statut', status);
      
      if (options?.page !== undefined) {
        params = params.set('page', options.page.toString());
      }
      
      if (options?.size !== undefined) {
        params = params.set('size', options.size.toString());
      }

      const societeId = this.getSocieteIdFromLocalStorage();
      if (societeId) {
        params = params.set('societeId', societeId.toString());
      }

      const response = await this.http.get<any>(this.baseUrl, { params }).toPromise();
      return UserMapper.fromApiPagedResponse(response);
    } catch (error) {
      console.error('Erreur recherche par statut:', error);
      return {
        content: [],
        page: 0,
        size: 10,
        totalElements: 0,
        totalPages: 0
      };
    }
  }

  async findBySite(siteId: number, options?: PaginationOptions): Promise<UsersPagedResponse> {
    try {
      let params = new HttpParams();
      
      if (options?.page !== undefined) {
        params = params.set('page', options.page.toString());
      }
      
      if (options?.size !== undefined) {
        params = params.set('size', options.size.toString());
      }

      // Utiliser l'API spécifique pour le site
      const response = await this.http.get<any>(`${this.baseUrl}/site/${siteId}`, { params }).toPromise();
      return UserMapper.fromApiPagedResponse(response);
    } catch (error) {
      console.error('Erreur recherche par site:', error);
      return {
        content: [],
        page: 0,
        size: 10,
        totalElements: 0,
        totalPages: 0
      };
    }
  }

  async findByDepartment(departmentId: number, options?: PaginationOptions): Promise<UsersPagedResponse> {
    try {
      let params = new HttpParams();
      
      if (options?.page !== undefined) {
        params = params.set('page', options.page.toString());
      }
      
      if (options?.size !== undefined) {
        params = params.set('size', options.size.toString());
      }

      // Utiliser l'API spécifique pour le département
      const response = await this.http.get<any>(`${this.baseUrl}/departement/${departmentId}`, { params }).toPromise();
      return UserMapper.fromApiPagedResponse(response);
    } catch (error) {
      console.error('Erreur recherche par département:', error);
      return {
        content: [],
        page: 0,
        size: 10,
        totalElements: 0,
        totalPages: 0
      };
    }
  }

  async findBySociete(societeId: number, options?: PaginationOptions): Promise<UsersPagedResponse> {
    try {
      let params = new HttpParams();
      
      if (options?.page !== undefined) {
        params = params.set('page', options.page.toString());
      }
      
      if (options?.size !== undefined) {
        params = params.set('size', options.size.toString());
      }

      // Utiliser l'API spécifique pour la société
      const response = await this.http.get<any>(`${this.baseUrl}/societe/${societeId}`, { params }).toPromise();
      return UserMapper.fromApiPagedResponse(response);
    } catch (error) {
      console.error('Erreur recherche par société:', error);
      return {
        content: [],
        page: 0,
        size: 10,
        totalElements: 0,
        totalPages: 0
      };
    }
  }

  async existsByEmail(email: string): Promise<boolean> {
    try {
      const user = await this.findByEmail(email);
      return user !== null;
    } catch (error) {
      console.error('Erreur vérification email:', error);
      return false;
    }
  }

  async existsByUsername(username: string): Promise<boolean> {
    try {
      const user = await this.findByUsername(username);
      return user !== null;
    } catch (error) {
      console.error('Erreur vérification nom d\'utilisateur:', error);
      return false;
    }
  }

  async createMany(users: User[]): Promise<User[]> {
    try {
      const createdUsers: User[] = [];
      for (const user of users) {
        const createdUser = await this.create(user);
        createdUsers.push(createdUser);
      }
      return createdUsers;
    } catch (error) {
      console.error('Erreur création multiple utilisateurs:', error);
      throw error;
    }
  }

  async updateMany(users: User[]): Promise<User[]> {
    try {
      const updatedUsers: User[] = [];
      for (const user of users) {
        const updatedUser = await this.update(user);
        updatedUsers.push(updatedUser);
      }
      return updatedUsers;
    } catch (error) {
      console.error('Erreur mise à jour multiple utilisateurs:', error);
      throw error;
    }
  }

  // Méthodes utilitaires privées

  private getSocieteIdFromLocalStorage(): number {
    try {
      const societeId = this.localStorage.getItem('societeId');
      return societeId ? parseInt(societeId, 10) : 0;
    } catch (error) {
      console.error('Erreur récupération societeId depuis localStorage:', error);
      return 0;
    }
  }

  private getAuthHeaders(): { [header: string]: string } {
    // Récupérer le token d'authentification depuis localStorage
    const token = this.localStorage.getItem('authToken');
    return token ? { Authorization: `Bearer ${token}` } : {};
  }

  /**
   * Convertit un objet User en UserEntity
   */
  private convertToUserEntity(user: User): UserEntity {
    if (user instanceof UserEntity) {
      return user;
    }
    
    // Créer une nouvelle UserEntity à partir des propriétés de l'objet User
    return new UserEntity(
      user.id,
      user.nomPrenom,
      user.telephone,
      user.adresse,
      user.userName,
      user.email,
      user.pwdText,
      user.statut,
      user.societeId,
      user.societeNom,
      user.siteId,
      user.siteNom,
      user.departementId,
      user.departementNom,
      user.derniereConnexion,
      user.tentativesConnexion,
      user.photo,
      user.signature,
      user.langue,
      user.dateCreation,
      user.permissions,
      user.roles
    );
  }
}

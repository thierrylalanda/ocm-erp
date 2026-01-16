import {
  BaseUserRepository,
  USER_REPOSITORY,
  UserEntity,
  UserMapper
} from "./chunk-RGTECRIG.js";
import {
  environment
} from "./chunk-7SCMAJTM.js";
import {
  HttpClient,
  HttpParams
} from "./chunk-PQZYD7EB.js";
import {
  Inject,
  Injectable,
  setClassMetadata,
  ɵɵdefineInjectable,
  ɵɵinject
} from "./chunk-U4CEU3KS.js";
import {
  __async
} from "./chunk-TXDUYLVM.js";

// src/app/modules/manage-users/infrastructure/mappers/user.mapper.ts
var UserMapper2 = class {
  /**
   * Convertit UserResponseDto en UserEntity
   */
  static toEntity(dto) {
    const userId = { value: dto.id };
    return new UserEntity(dto.id, dto.nomPrenom, dto.telephone, dto.adresse, dto.userName, dto.email, dto.pwdText, dto.statut, dto.societeId, dto.societeNom, dto.siteId, dto.siteNom, dto.departementId, dto.departementNom, dto.derniereConnexion ? new Date(dto.derniereConnexion) : null, dto.tentativesConnexion, dto.photo, dto.signature, dto.langue, new Date(dto.dateCreation), dto.permissions, dto.roles);
  }
  /**
   * Convertit UserResponse en UserEntity
   */
  static fromResponseToEntity(response) {
    const userId = { value: response.id };
    return new UserEntity(response.id, response.nomPrenom, response.telephone, response.adresse, response.userName, response.email, response.pwdText, response.statut, response.societeId, response.societeNom, response.siteId, response.siteNom, response.departementId, response.departementNom, response.derniereConnexion ? new Date(response.derniereConnexion) : null, response.tentativesConnexion, response.photo, response.signature, response.langue, new Date(response.dateCreation), response.permissions, response.roles);
  }
  /**
   * Convertit UserEntity en UserResponseDto
   */
  static toResponseDto(entity) {
    return {
      id: entity.getIdValue(),
      nomPrenom: entity.nomPrenom,
      telephone: entity.telephone,
      adresse: entity.adresse,
      userName: entity.userName,
      email: entity.email,
      pwdText: entity.pwdText,
      statut: entity.statut,
      societeId: entity.societeId,
      societeNom: entity.societeNom,
      siteId: entity.siteId,
      siteNom: entity.siteNom,
      departementId: entity.departementId,
      departementNom: entity.departementNom,
      derniereConnexion: entity.derniereConnexion ? entity.derniereConnexion.toISOString() : null,
      tentativesConnexion: entity.tentativesConnexion,
      photo: entity.photo,
      signature: entity.signature,
      langue: entity.langue,
      dateCreation: entity.dateCreation.toISOString(),
      permissions: entity.permissions,
      roles: entity.roles
    };
  }
  /**
   * Convertit CreateUserDto en UserCreateCommand
   */
  static toCreateCommand(dto) {
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
  static toUpdateCommand(dto) {
    return {
      nomPrenom: dto.nomPrenom,
      telephone: dto.telephone,
      adresse: dto.adresse,
      userName: dto.userName,
      email: dto.email,
      statut: dto.statut,
      siteId: dto.siteId,
      departementId: dto.departementId,
      photo: dto.photo,
      signature: dto.signature,
      langue: dto.langue
    };
  }
  /**
   * Convertit UserEntity en objet pour l'API (création)
   */
  static toApiCreateObject(entity) {
    return {
      nomPrenom: entity.nomPrenom,
      telephone: entity.telephone,
      adresse: entity.adresse,
      userName: entity.userName,
      password: entity.pwdText,
      // Note: l'API attend "password" mais nous utilisons pwdText
      email: entity.email,
      pwdText: entity.pwdText,
      societeId: entity.societeId,
      siteId: entity.siteId,
      departementId: entity.departementId,
      statut: entity.statut,
      photo: entity.photo,
      signature: entity.signature,
      langue: entity.langue
    };
  }
  /**
   * Convertit UserEntity en objet pour l'API (mise à jour)
   */
  static toApiUpdateObject(entity) {
    return {
      nomPrenom: entity.nomPrenom,
      id: entity.id,
      societeId: entity.societeId,
      telephone: entity.telephone,
      adresse: entity.adresse,
      userName: entity.userName,
      email: entity.email,
      statut: entity.statut,
      siteId: entity.siteId,
      departementId: entity.departementId,
      photo: entity.photo,
      signature: entity.signature,
      langue: entity.langue
    };
  }
  /**
   * Convertit la réponse API en UserResponse
   */
  static fromApiResponse(apiResponse) {
    return {
      id: apiResponse.id,
      nomPrenom: apiResponse.nomPrenom,
      telephone: apiResponse.telephone,
      adresse: apiResponse.adresse,
      userName: apiResponse.userName,
      email: apiResponse.email,
      pwdText: apiResponse.pwdText,
      statut: apiResponse.statut,
      societeId: apiResponse.societeId,
      societeNom: apiResponse.societeNom,
      siteId: apiResponse.siteId,
      siteNom: apiResponse.siteNom,
      departementId: apiResponse.departementId,
      departementNom: apiResponse.departementNom,
      derniereConnexion: apiResponse.derniereConnexion,
      tentativesConnexion: apiResponse.tentativesConnexion,
      photo: apiResponse.photo,
      signature: apiResponse.signature,
      langue: apiResponse.langue,
      dateCreation: apiResponse.dateCreation,
      permissions: apiResponse.permissions,
      roles: apiResponse.roles
    };
  }
  /**
   * Convertit la réponse paginée API
   */
  static fromApiPagedResponse(apiResponse) {
    return {
      content: apiResponse.content?.map((item) => this.fromApiResponse(item)) || [],
      page: apiResponse.page,
      size: apiResponse.size,
      totalElements: apiResponse.totalElements,
      totalPages: apiResponse.totalPages
    };
  }
};

// src/app/modules/manage-users/infrastructure/repositories/http-user.repository.ts
var HttpUserRepository = class _HttpUserRepository extends BaseUserRepository {
  http;
  localStorage;
  baseUrl = environment.api + "hierarchie/utilisateurs";
  constructor(http, localStorage) {
    super();
    this.http = http;
    this.localStorage = localStorage;
  }
  // Méthodes de mapping protégées
  mapResponseToUser(response) {
    return UserMapper2.fromResponseToEntity(response);
  }
  mapUserToCreateCommand(user) {
    const userEntity = user instanceof UserEntity ? user : new UserEntity(user.id, user.nomPrenom, user.telephone, user.adresse, user.userName, user.email, user.pwdText, user.statut, user.societeId, user.societeNom, user.siteId, user.siteNom, user.departementId, user.departementNom, user.derniereConnexion, user.tentativesConnexion, user.photo, user.signature, user.langue, user.dateCreation, user.permissions, user.roles);
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
  mapUserToUpdateCommand(user) {
    const userEntity = user instanceof UserEntity ? user : new UserEntity(user.id, user.nomPrenom, user.telephone, user.adresse, user.userName, user.email, user.pwdText, user.statut, user.societeId, user.societeNom, user.siteId, user.siteNom, user.departementId, user.departementNom, user.derniereConnexion, user.tentativesConnexion, user.photo, user.signature, user.langue, user.dateCreation, user.permissions, user.roles);
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
  findById(id) {
    return __async(this, null, function* () {
      try {
        const response = yield this.http.get(`${this.baseUrl}/${id.value}`).toPromise();
        const userResponse = UserMapper2.fromApiResponse(response);
        return UserMapper2.fromResponseToEntity(userResponse);
      } catch (error) {
        console.error("Erreur r\xE9cup\xE9ration utilisateur par ID:", error);
        return null;
      }
    });
  }
  findByEmail(email) {
    return __async(this, null, function* () {
      try {
        const params = new HttpParams().set("email", email);
        const response = yield this.http.get(this.baseUrl, { params }).toPromise();
        if (response.content && response.content.length > 0) {
          const userResponse = UserMapper2.fromApiResponse(response.content[0]);
          return UserMapper2.fromResponseToEntity(userResponse);
        }
        return null;
      } catch (error) {
        console.error("Erreur recherche par email:", error);
        return null;
      }
    });
  }
  findByUsername(username) {
    return __async(this, null, function* () {
      try {
        const params = new HttpParams().set("userName", username);
        const response = yield this.http.get(this.baseUrl, { params }).toPromise();
        if (response.content && response.content.length > 0) {
          const userResponse = UserMapper2.fromApiResponse(response.content[0]);
          return UserMapper2.fromResponseToEntity(userResponse);
        }
        return null;
      } catch (error) {
        console.error("Erreur recherche par nom d'utilisateur:", error);
        return null;
      }
    });
  }
  findAllPaginated(options) {
    return __async(this, null, function* () {
      try {
        let params = new HttpParams();
        if (options?.page !== void 0) {
          params = params.set("page", options.page.toString());
        }
        if (options?.size !== void 0) {
          params = params.set("size", options.size.toString());
        }
        if (options?.sortBy) {
          params = params.set("sortBy", options.sortBy);
        }
        if (options?.sortOrder) {
          params = params.set("sortOrder", options.sortOrder);
        }
        if (options?.search) {
          params = params.set("search", options.search);
        }
        const societeId = this.getSocieteIdFromLocalStorage();
        if (societeId) {
          params = params.set("societeId", societeId.toString());
        }
        const response = yield this.http.get(this.baseUrl, { params }).toPromise();
        return UserMapper2.fromApiPagedResponse(response);
      } catch (error) {
        console.error("Erreur r\xE9cup\xE9ration liste pagin\xE9e utilisateurs:", error);
        return {
          content: [],
          page: 0,
          size: 10,
          totalElements: 0,
          totalPages: 0
        };
      }
    });
  }
  create(user) {
    return __async(this, null, function* () {
      try {
        const userEntity = this.convertToUserEntity(user);
        const createData = UserMapper2.toApiCreateObject(userEntity);
        if (!createData.societeId) {
          createData.societeId = this.getSocieteIdFromLocalStorage();
        }
        const response = yield this.http.post(this.baseUrl, createData).toPromise();
        const userResponse = UserMapper2.fromApiResponse(response);
        return UserMapper2.fromResponseToEntity(userResponse);
      } catch (error) {
        console.error("Erreur cr\xE9ation utilisateur:", error);
        throw error;
      }
    });
  }
  update(user) {
    return __async(this, null, function* () {
      try {
        const userEntity = this.convertToUserEntity(user);
        const updateData = UserMapper2.toApiUpdateObject(userEntity);
        const response = yield this.http.put(`${this.baseUrl}/${userEntity.getIdValue()}`, updateData).toPromise();
        const userResponse = UserMapper2.fromApiResponse(response);
        return UserMapper2.fromResponseToEntity(userResponse);
      } catch (error) {
        console.error("Erreur mise \xE0 jour utilisateur:", error);
        throw error;
      }
    });
  }
  delete(id) {
    return __async(this, null, function* () {
      try {
        yield this.http.delete(`${this.baseUrl}/${id.value}`).toPromise();
      } catch (error) {
        console.error("Erreur suppression utilisateur:", error);
        throw error;
      }
    });
  }
  activateUser(id) {
    return __async(this, null, function* () {
      try {
        const response = yield this.http.patch(`${this.baseUrl}/${id.value}/1`, {}).toPromise();
        const userResponse = UserMapper2.fromApiResponse(response);
        return UserMapper2.fromResponseToEntity(userResponse);
      } catch (error) {
        console.error("Erreur activation utilisateur:", error);
        throw error;
      }
    });
  }
  deactivateUser(id) {
    return __async(this, null, function* () {
      try {
        const response = yield this.http.patch(`${this.baseUrl}/${id.value}/0`, {}).toPromise();
        const userResponse = UserMapper2.fromApiResponse(response);
        return UserMapper2.fromResponseToEntity(userResponse);
      } catch (error) {
        console.error("Erreur d\xE9sactivation utilisateur:", error);
        throw error;
      }
    });
  }
  toggleUserStatus(id, actif) {
    return __async(this, null, function* () {
      try {
        const response = yield this.http.patch(`${this.baseUrl}/${id.value}/${actif}`, {}).toPromise();
        const userResponse = UserMapper2.fromApiResponse(response);
        return UserMapper2.fromResponseToEntity(userResponse);
      } catch (error) {
        console.error("Erreur changement statut utilisateur:", error);
        throw error;
      }
    });
  }
  recordLogin(id) {
    return __async(this, null, function* () {
      try {
        yield this.http.patch(`${this.baseUrl}/${id.value}/record-login`, {}).toPromise();
      } catch (error) {
        console.error("Erreur enregistrement connexion:", error);
        throw error;
      }
    });
  }
  searchUsers(query, options) {
    return __async(this, null, function* () {
      try {
        let params = new HttpParams().set("search", query);
        if (options?.page !== void 0) {
          params = params.set("page", options.page.toString());
        }
        if (options?.size !== void 0) {
          params = params.set("size", options.size.toString());
        }
        const societeId = this.getSocieteIdFromLocalStorage();
        if (societeId) {
          params = params.set("societeId", societeId.toString());
        }
        const response = yield this.http.get(this.baseUrl, { params }).toPromise();
        return UserMapper2.fromApiPagedResponse(response);
      } catch (error) {
        console.error("Erreur recherche utilisateurs:", error);
        return {
          content: [],
          page: 0,
          size: 10,
          totalElements: 0,
          totalPages: 0
        };
      }
    });
  }
  findByStatus(status, options) {
    return __async(this, null, function* () {
      try {
        let params = new HttpParams().set("statut", status);
        if (options?.page !== void 0) {
          params = params.set("page", options.page.toString());
        }
        if (options?.size !== void 0) {
          params = params.set("size", options.size.toString());
        }
        const societeId = this.getSocieteIdFromLocalStorage();
        if (societeId) {
          params = params.set("societeId", societeId.toString());
        }
        const response = yield this.http.get(this.baseUrl, { params }).toPromise();
        return UserMapper2.fromApiPagedResponse(response);
      } catch (error) {
        console.error("Erreur recherche par statut:", error);
        return {
          content: [],
          page: 0,
          size: 10,
          totalElements: 0,
          totalPages: 0
        };
      }
    });
  }
  findBySite(siteId, options) {
    return __async(this, null, function* () {
      try {
        let params = new HttpParams();
        if (options?.page !== void 0) {
          params = params.set("page", options.page.toString());
        }
        if (options?.size !== void 0) {
          params = params.set("size", options.size.toString());
        }
        const response = yield this.http.get(`${this.baseUrl}/site/${siteId}`, { params }).toPromise();
        return UserMapper2.fromApiPagedResponse(response);
      } catch (error) {
        console.error("Erreur recherche par site:", error);
        return {
          content: [],
          page: 0,
          size: 10,
          totalElements: 0,
          totalPages: 0
        };
      }
    });
  }
  findByDepartment(departmentId, options) {
    return __async(this, null, function* () {
      try {
        let params = new HttpParams();
        if (options?.page !== void 0) {
          params = params.set("page", options.page.toString());
        }
        if (options?.size !== void 0) {
          params = params.set("size", options.size.toString());
        }
        const response = yield this.http.get(`${this.baseUrl}/departement/${departmentId}`, { params }).toPromise();
        return UserMapper2.fromApiPagedResponse(response);
      } catch (error) {
        console.error("Erreur recherche par d\xE9partement:", error);
        return {
          content: [],
          page: 0,
          size: 10,
          totalElements: 0,
          totalPages: 0
        };
      }
    });
  }
  findBySociete(societeId, options) {
    return __async(this, null, function* () {
      try {
        let params = new HttpParams();
        if (options?.page !== void 0) {
          params = params.set("page", options.page.toString());
        }
        if (options?.size !== void 0) {
          params = params.set("size", options.size.toString());
        }
        const response = yield this.http.get(`${this.baseUrl}/societe/${societeId}`, { params }).toPromise();
        return UserMapper2.fromApiPagedResponse(response);
      } catch (error) {
        console.error("Erreur recherche par soci\xE9t\xE9:", error);
        return {
          content: [],
          page: 0,
          size: 10,
          totalElements: 0,
          totalPages: 0
        };
      }
    });
  }
  existsByEmail(email) {
    return __async(this, null, function* () {
      try {
        const user = yield this.findByEmail(email);
        return user !== null;
      } catch (error) {
        console.error("Erreur v\xE9rification email:", error);
        return false;
      }
    });
  }
  existsByUsername(username) {
    return __async(this, null, function* () {
      try {
        const user = yield this.findByUsername(username);
        return user !== null;
      } catch (error) {
        console.error("Erreur v\xE9rification nom d'utilisateur:", error);
        return false;
      }
    });
  }
  createMany(users) {
    return __async(this, null, function* () {
      try {
        const createdUsers = [];
        for (const user of users) {
          const createdUser = yield this.create(user);
          createdUsers.push(createdUser);
        }
        return createdUsers;
      } catch (error) {
        console.error("Erreur cr\xE9ation multiple utilisateurs:", error);
        throw error;
      }
    });
  }
  updateMany(users) {
    return __async(this, null, function* () {
      try {
        const updatedUsers = [];
        for (const user of users) {
          const updatedUser = yield this.update(user);
          updatedUsers.push(updatedUser);
        }
        return updatedUsers;
      } catch (error) {
        console.error("Erreur mise \xE0 jour multiple utilisateurs:", error);
        throw error;
      }
    });
  }
  // Méthodes utilitaires privées
  getSocieteIdFromLocalStorage() {
    try {
      const societeId = this.localStorage.getItem("societeId");
      return societeId ? parseInt(societeId, 10) : 0;
    } catch (error) {
      console.error("Erreur r\xE9cup\xE9ration societeId depuis localStorage:", error);
      return 0;
    }
  }
  getAuthHeaders() {
    const token = this.localStorage.getItem("authToken");
    return token ? { Authorization: `Bearer ${token}` } : {};
  }
  /**
   * Convertit un objet User en UserEntity
   */
  convertToUserEntity(user) {
    if (user instanceof UserEntity) {
      return user;
    }
    return new UserEntity(user.id, user.nomPrenom, user.telephone, user.adresse, user.userName, user.email, user.pwdText, user.statut, user.societeId, user.societeNom, user.siteId, user.siteNom, user.departementId, user.departementNom, user.derniereConnexion, user.tentativesConnexion, user.photo, user.signature, user.langue, user.dateCreation, user.permissions, user.roles);
  }
  static \u0275fac = function HttpUserRepository_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _HttpUserRepository)(\u0275\u0275inject(HttpClient), \u0275\u0275inject("LOCAL_STORAGE"));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _HttpUserRepository, factory: _HttpUserRepository.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(HttpUserRepository, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{ type: HttpClient }, { type: Storage, decorators: [{
    type: Inject,
    args: ["LOCAL_STORAGE"]
  }] }], null);
})();

// src/app/modules/manage-users/application/use-cases/get-users.use-case.ts
var GetUsersUseCaseImpl = class _GetUsersUseCaseImpl {
  userRepository;
  constructor(userRepository) {
    this.userRepository = userRepository;
  }
  execute(options) {
    return __async(this, null, function* () {
      const paginationOptions = this.mapToPaginationOptions(options);
      const pagedResponse = yield this.userRepository.findAllPaginated(paginationOptions);
      return UserMapper.toPagedResponseDto(pagedResponse);
    });
  }
  /**
   * Convertit les options DTO en options de pagination
   */
  mapToPaginationOptions(dto) {
    if (!dto) {
      return {
        page: 0,
        size: 10
      };
    }
    const options = {};
    if (dto.page !== void 0) {
      options.page = dto.page;
    }
    if (dto.size !== void 0) {
      options.size = dto.size;
    }
    if (dto.sortBy) {
      options.sortBy = dto.sortBy;
    }
    if (dto.sortOrder) {
      options.sortOrder = dto.sortOrder;
    }
    if (dto.search) {
      options.search = dto.search;
    }
    return options;
  }
  /**
   * Recherche des utilisateurs avec un terme de recherche
   */
  searchUsers(query, options) {
    return __async(this, null, function* () {
      const paginationOptions = this.mapToPaginationOptions(options);
      const pagedResponse = yield this.userRepository.searchUsers(query, paginationOptions);
      return UserMapper.toPagedResponseDto(pagedResponse);
    });
  }
  /**
   * Récupère les utilisateurs par statut
   */
  getUsersByStatus(status, options) {
    return __async(this, null, function* () {
      const paginationOptions = this.mapToPaginationOptions(options);
      const pagedResponse = yield this.userRepository.findByStatus(status, paginationOptions);
      return UserMapper.toPagedResponseDto(pagedResponse);
    });
  }
  /**
   * Récupère les utilisateurs par site
   */
  getUsersBySite(siteId, options) {
    return __async(this, null, function* () {
      const paginationOptions = this.mapToPaginationOptions(options);
      const pagedResponse = yield this.userRepository.findBySite(siteId, paginationOptions);
      return UserMapper.toPagedResponseDto(pagedResponse);
    });
  }
  /**
   * Récupère les utilisateurs par département
   */
  getUsersByDepartment(departmentId, options) {
    return __async(this, null, function* () {
      const paginationOptions = this.mapToPaginationOptions(options);
      const pagedResponse = yield this.userRepository.findByDepartment(departmentId, paginationOptions);
      return UserMapper.toPagedResponseDto(pagedResponse);
    });
  }
  /**
   * Récupère les utilisateurs actifs
   */
  getActiveUsers(options) {
    return __async(this, null, function* () {
      return this.getUsersByStatus("ACTIF", options);
    });
  }
  /**
   * Récupère les utilisateurs inactifs
   */
  getInactiveUsers(options) {
    return __async(this, null, function* () {
      return this.getUsersByStatus("INACTIF", options);
    });
  }
  /**
   * Implémentation de executeBySite
   */
  executeBySite(siteId, options) {
    return __async(this, null, function* () {
      return this.getUsersBySite(siteId, options);
    });
  }
  /**
   * Implémentation de executeByDepartment
   */
  executeByDepartment(departmentId, options) {
    return __async(this, null, function* () {
      return this.getUsersByDepartment(departmentId, options);
    });
  }
  /**
   * Implémentation de executeBySociete
   */
  executeBySociete(societeId, options) {
    return __async(this, null, function* () {
      const paginationOptions = this.mapToPaginationOptions(options);
      const pagedResponse = yield this.userRepository.findBySociete(societeId, paginationOptions);
      return UserMapper.toPagedResponseDto(pagedResponse);
    });
  }
  static \u0275fac = function GetUsersUseCaseImpl_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _GetUsersUseCaseImpl)(\u0275\u0275inject(USER_REPOSITORY));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _GetUsersUseCaseImpl, factory: _GetUsersUseCaseImpl.\u0275fac });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(GetUsersUseCaseImpl, [{
    type: Injectable
  }], () => [{ type: void 0, decorators: [{
    type: Inject,
    args: [USER_REPOSITORY]
  }] }], null);
})();

export {
  HttpUserRepository,
  GetUsersUseCaseImpl
};
//# sourceMappingURL=chunk-FY5JDTBR.js.map

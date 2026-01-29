import {
  BaseUserRepository,
  USER_REPOSITORY,
  init_user_repository
} from "./chunk-KEZTFTN3.js";
import {
  init_shared
} from "./chunk-LUFAATTA.js";
import {
  APPLICATION_CONTEXT
} from "./chunk-MU4ENZR6.js";
import {
  environment,
  init_environment
} from "./chunk-Q2A5OOYR.js";
import {
  HttpClient,
  HttpParams,
  init_http
} from "./chunk-H7VTUQ3B.js";
import {
  Inject,
  Injectable,
  InjectionToken,
  __decorate,
  init_core,
  init_tslib_es6
} from "./chunk-W6MIRXHE.js";
import {
  __async,
  __esm
} from "./chunk-FWMZPJRE.js";

// src/app/modules/manage-users/application/use-cases/create-user.use-case.token.ts
var CREATE_USER_USE_CASE;
var init_create_user_use_case_token = __esm({
  "src/app/modules/manage-users/application/use-cases/create-user.use-case.token.ts"() {
    "use strict";
    init_core();
    CREATE_USER_USE_CASE = new InjectionToken("CreateUserUseCase");
  }
});

// src/app/modules/manage-users/application/use-cases/get-users.use-case.token.ts
var GET_USERS_USE_CASE;
var init_get_users_use_case_token = __esm({
  "src/app/modules/manage-users/application/use-cases/get-users.use-case.token.ts"() {
    "use strict";
    init_core();
    GET_USERS_USE_CASE = new InjectionToken("GetUsersUseCase");
  }
});

// src/app/modules/manage-users/domain/entities/user.entity.ts
var UserEntity;
var init_user_entity = __esm({
  "src/app/modules/manage-users/domain/entities/user.entity.ts"() {
    "use strict";
    UserEntity = class _UserEntity {
      id;
      nomPrenom;
      telephone;
      adresse;
      userName;
      email;
      pwdText;
      statut;
      societeId;
      societeNom;
      siteId;
      siteNom;
      departementId;
      departementNom;
      derniereConnexion;
      tentativesConnexion;
      photo;
      signature;
      langue;
      dateCreation;
      permissions;
      roles;
      constructor(id, nomPrenom, telephone, adresse, userName, email, pwdText, statut, societeId, societeNom, siteId, siteNom, departementId, departementNom, derniereConnexion, tentativesConnexion, photo, signature, langue, dateCreation, permissions, roles) {
        this.id = id;
        this.nomPrenom = nomPrenom;
        this.telephone = telephone;
        this.adresse = adresse;
        this.userName = userName;
        this.email = email;
        this.pwdText = pwdText;
        this.statut = statut;
        this.societeId = societeId;
        this.societeNom = societeNom;
        this.siteId = siteId;
        this.siteNom = siteNom;
        this.departementId = departementId;
        this.departementNom = departementNom;
        this.derniereConnexion = derniereConnexion;
        this.tentativesConnexion = tentativesConnexion;
        this.photo = photo;
        this.signature = signature;
        this.langue = langue;
        this.dateCreation = dateCreation;
        this.permissions = permissions;
        this.roles = roles;
      }
      /**
       * Crée une nouvelle entité utilisateur
       */
      static create(command) {
        const now = /* @__PURE__ */ new Date();
        const userId = { value: 0 };
        return new _UserEntity(
          command.id,
          command.nomPrenom,
          command.telephone,
          command.adresse,
          command.userName,
          command.email,
          command.pwdText,
          command.statut,
          command.societeId,
          "",
          // societeNom sera rempli par l'API
          command.siteId,
          "",
          // siteNom sera rempli par l'API
          command.departementId,
          "",
          // departementNom sera rempli par l'API
          null,
          // derniereConnexion
          0,
          // tentativesConnexion
          command.photo,
          command.signature,
          command.langue,
          now,
          [],
          []
        );
      }
      /**
       * Met à jour l'entité utilisateur
       */
      update(command) {
        return new _UserEntity(
          this.id,
          command.nomPrenom ?? this.nomPrenom,
          command.telephone ?? this.telephone,
          command.adresse ?? this.adresse,
          command.userName ?? this.userName,
          command.email ?? this.email,
          this.pwdText,
          // pwdText ne peut pas être mis à jour via update
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
          this.dateCreation,
          [],
          []
        );
      }
      /**
       * Marque l'utilisateur comme inactif
       */
      deactivate() {
        return new _UserEntity(this.id, this.nomPrenom, this.telephone, this.adresse, this.userName, this.email, this.pwdText, "INACTIF", this.societeId, this.societeNom, this.siteId, this.siteNom, this.departementId, this.departementNom, this.derniereConnexion, this.tentativesConnexion, this.photo, this.signature, this.langue, this.dateCreation, [], []);
      }
      /**
       * Marque l'utilisateur comme actif
       */
      activate() {
        return new _UserEntity(this.id, this.nomPrenom, this.telephone, this.adresse, this.userName, this.email, this.pwdText, "ACTIF", this.societeId, this.societeNom, this.siteId, this.siteNom, this.departementId, this.departementNom, this.derniereConnexion, this.tentativesConnexion, this.photo, this.signature, this.langue, this.dateCreation, [], []);
      }
      /**
       * Enregistre une connexion
       */
      recordLogin() {
        return new _UserEntity(this.id, this.nomPrenom, this.telephone, this.adresse, this.userName, this.email, this.pwdText, this.statut, this.societeId, this.societeNom, this.siteId, this.siteNom, this.departementId, this.departementNom, /* @__PURE__ */ new Date(), this.tentativesConnexion + 1, this.photo, this.signature, this.langue, this.dateCreation, [], []);
      }
      /**
       * Vérifie si l'utilisateur est actif
       */
      isActive() {
        return this.statut === "ACTIF";
      }
      /**
       * Obtient le nom complet
       */
      getFullName() {
        return this.nomPrenom;
      }
      /**
       * Obtient l'identifiant sous forme de nombre
       */
      getIdValue() {
        return this.id;
      }
    };
  }
});

// src/app/modules/manage-users/infrastructure/mappers/user.mapper.ts
var UserMapper;
var init_user_mapper = __esm({
  "src/app/modules/manage-users/infrastructure/mappers/user.mapper.ts"() {
    "use strict";
    init_user_entity();
    UserMapper = class {
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
  }
});

// src/app/modules/manage-users/infrastructure/repositories/http-user.repository.ts
var HttpUserRepository;
var init_http_user_repository = __esm({
  "src/app/modules/manage-users/infrastructure/repositories/http-user.repository.ts"() {
    "use strict";
    init_tslib_es6();
    init_core();
    init_http();
    init_user_entity();
    init_user_repository();
    init_user_mapper();
    init_environment();
    init_shared();
    HttpUserRepository = class HttpUserRepository2 extends BaseUserRepository {
      http;
      context;
      baseUrl = environment.api + "hierarchie/utilisateurs";
      constructor(http, context) {
        super();
        this.http = http;
        this.context = context;
      }
      // Méthodes de mapping protégées
      mapResponseToUser(response) {
        return UserMapper.fromResponseToEntity(response);
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
            const userResponse = UserMapper.fromApiResponse(response);
            return UserMapper.fromResponseToEntity(userResponse);
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
              const userResponse = UserMapper.fromApiResponse(response.content[0]);
              return UserMapper.fromResponseToEntity(userResponse);
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
              const userResponse = UserMapper.fromApiResponse(response.content[0]);
              return UserMapper.fromResponseToEntity(userResponse);
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
            return UserMapper.fromApiPagedResponse(response);
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
            const createData = UserMapper.toApiCreateObject(userEntity);
            if (!createData.societeId) {
              createData.societeId = this.getSocieteIdFromLocalStorage();
            }
            const response = yield this.http.post(this.baseUrl, createData).toPromise();
            const userResponse = UserMapper.fromApiResponse(response);
            return UserMapper.fromResponseToEntity(userResponse);
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
            const updateData = UserMapper.toApiUpdateObject(userEntity);
            const response = yield this.http.put(`${this.baseUrl}/${userEntity.getIdValue()}`, updateData).toPromise();
            const userResponse = UserMapper.fromApiResponse(response);
            return UserMapper.fromResponseToEntity(userResponse);
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
            const userResponse = UserMapper.fromApiResponse(response);
            return UserMapper.fromResponseToEntity(userResponse);
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
            const userResponse = UserMapper.fromApiResponse(response);
            return UserMapper.fromResponseToEntity(userResponse);
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
            const userResponse = UserMapper.fromApiResponse(response);
            return UserMapper.fromResponseToEntity(userResponse);
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
            return UserMapper.fromApiPagedResponse(response);
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
            return UserMapper.fromApiPagedResponse(response);
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
            return UserMapper.fromApiPagedResponse(response);
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
            return UserMapper.fromApiPagedResponse(response);
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
            return UserMapper.fromApiPagedResponse(response);
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
          return this.context.getSocieteId();
        } catch (error) {
          console.error("Erreur r\xE9cup\xE9ration societeId depuis ApplicationContext:", error);
          return 0;
        }
      }
      getAuthHeaders() {
        const token = this.context.getToken();
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
      static ctorParameters = () => [
        { type: HttpClient },
        { type: void 0, decorators: [{ type: Inject, args: [APPLICATION_CONTEXT] }] }
      ];
    };
    HttpUserRepository = __decorate([
      Injectable({
        providedIn: "root"
      })
    ], HttpUserRepository);
  }
});

// src/app/modules/manage-users/application/dto/create-user.dto.ts
var UserMapper2;
var init_create_user_dto = __esm({
  "src/app/modules/manage-users/application/dto/create-user.dto.ts"() {
    "use strict";
    UserMapper2 = class {
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
          societeId: dto.societeId,
          departementId: dto.departementId,
          photo: dto.photo,
          signature: dto.signature,
          langue: dto.langue
        };
      }
      /**
       * Convertit UserResponseDto en User
       */
      static toUser(dto) {
        return {
          id: { value: dto.id },
          nomPrenom: dto.nomPrenom,
          telephone: dto.telephone,
          adresse: dto.adresse,
          userName: dto.userName,
          email: dto.email,
          pwdText: dto.pwdText,
          statut: dto.statut,
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
      static toResponseDto(user) {
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
          societeNom: user.societeNom || "",
          siteId: user.siteId,
          siteNom: user.siteNom || "",
          departementId: user.departementId,
          departementNom: user.departementNom || "",
          derniereConnexion: user.derniereConnexion ? user.derniereConnexion : null,
          tentativesConnexion: user.tentativesConnexion || 0,
          photo: user.photo,
          signature: user.signature,
          langue: user.langue,
          dateCreation: user.dateCreation ? user.dateCreation.toISOString() : (/* @__PURE__ */ new Date()).toISOString(),
          roles: user.roles || [],
          permissions: user.permissions || []
        };
      }
      /**
       * Convertit UsersPagedResponse en UsersPagedResponseDto
       */
      static toPagedResponseDto(response) {
        return {
          content: response.content?.map((user) => this.toResponseDto(user)) || [],
          page: response.page || 0,
          size: response.size || 10,
          totalElements: response.totalElements || 0,
          totalPages: response.totalPages || 0
        };
      }
    };
  }
});

// src/app/modules/manage-users/application/use-cases/create-user.use-case.ts
var CreateUserUseCaseImpl;
var init_create_user_use_case = __esm({
  "src/app/modules/manage-users/application/use-cases/create-user.use-case.ts"() {
    "use strict";
    init_tslib_es6();
    init_core();
    init_user_entity();
    init_user_repository();
    init_create_user_dto();
    CreateUserUseCaseImpl = class CreateUserUseCaseImpl2 {
      userRepository;
      constructor(userRepository) {
        this.userRepository = userRepository;
      }
      execute(dto) {
        return __async(this, null, function* () {
          this.validateCreateUserDto(dto);
          const existingByEmail = yield this.userRepository.findByEmail(dto.email);
          if (existingByEmail) {
          }
          const existingByUsername = yield this.userRepository.findByUsername(dto.userName);
          if (existingByUsername) {
          }
          const createCommand = UserMapper2.toCreateCommand(dto);
          const userEntity = UserEntity.create(createCommand);
          const savedUser = yield this.userRepository.create(userEntity);
          return UserMapper2.toResponseDto(savedUser);
        });
      }
      /**
       * Valide les données de création d'utilisateur
       */
      validateCreateUserDto(dto) {
        const errors = [];
        if (!dto.nomPrenom || dto.nomPrenom.trim().length === 0) {
          errors.push("Le nom et pr\xE9nom sont requis");
        }
        if (!dto.userName || dto.userName.trim().length === 0) {
          errors.push("Le nom d'utilisateur est requis");
        }
        if (!dto.email || !this.isValidEmail(dto.email)) {
          errors.push("Un email valide est requis");
        }
        if (!dto.password || dto.password.trim().length < 6) {
          errors.push("Le mot de passe doit contenir au moins 6 caract\xE8res");
        }
        if (!dto.pwdText || dto.pwdText.trim().length === 0) {
          errors.push("Le texte du mot de passe est requis");
        }
        if (!dto.societeId || dto.societeId <= 0) {
          errors.push("Un identifiant de soci\xE9t\xE9 valide est requis");
        }
        if (!dto.siteId || dto.siteId <= 0) {
          errors.push("Un identifiant de site valide est requis");
        }
        if (!dto.departementId || dto.departementId <= 0) {
          errors.push("Un identifiant de d\xE9partement valide est requis");
        }
        if (!dto.statut) {
          errors.push("Le statut est requis");
        }
        if (errors.length > 0) {
          throw new Error(`Validation \xE9chou\xE9e: ${errors.join(", ")}`);
        }
      }
      /**
       * Valide le format d'email
       */
      isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
      }
      /**
       * Valide le numéro de téléphone
       */
      isValidPhoneNumber(phone) {
        const phoneRegex = /^[\d\s\-\+\(\)]{8,20}$/;
        return phoneRegex.test(phone);
      }
      static ctorParameters = () => [
        { type: void 0, decorators: [{ type: Inject, args: [USER_REPOSITORY] }] }
      ];
    };
    CreateUserUseCaseImpl = __decorate([
      Injectable()
    ], CreateUserUseCaseImpl);
  }
});

// src/app/modules/manage-users/application/use-cases/get-users.use-case.ts
var GetUsersUseCaseImpl;
var init_get_users_use_case = __esm({
  "src/app/modules/manage-users/application/use-cases/get-users.use-case.ts"() {
    "use strict";
    init_tslib_es6();
    init_core();
    init_user_repository();
    init_create_user_dto();
    GetUsersUseCaseImpl = class GetUsersUseCaseImpl2 {
      userRepository;
      constructor(userRepository) {
        this.userRepository = userRepository;
      }
      execute(options) {
        return __async(this, null, function* () {
          const paginationOptions = this.mapToPaginationOptions(options);
          const pagedResponse = yield this.userRepository.findAllPaginated(paginationOptions);
          return UserMapper2.toPagedResponseDto(pagedResponse);
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
          return UserMapper2.toPagedResponseDto(pagedResponse);
        });
      }
      /**
       * Récupère les utilisateurs par statut
       */
      getUsersByStatus(status, options) {
        return __async(this, null, function* () {
          const paginationOptions = this.mapToPaginationOptions(options);
          const pagedResponse = yield this.userRepository.findByStatus(status, paginationOptions);
          return UserMapper2.toPagedResponseDto(pagedResponse);
        });
      }
      /**
       * Récupère les utilisateurs par site
       */
      getUsersBySite(siteId, options) {
        return __async(this, null, function* () {
          const paginationOptions = this.mapToPaginationOptions(options);
          const pagedResponse = yield this.userRepository.findBySite(siteId, paginationOptions);
          return UserMapper2.toPagedResponseDto(pagedResponse);
        });
      }
      /**
       * Récupère les utilisateurs par département
       */
      getUsersByDepartment(departmentId, options) {
        return __async(this, null, function* () {
          const paginationOptions = this.mapToPaginationOptions(options);
          const pagedResponse = yield this.userRepository.findByDepartment(departmentId, paginationOptions);
          return UserMapper2.toPagedResponseDto(pagedResponse);
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
          return UserMapper2.toPagedResponseDto(pagedResponse);
        });
      }
      static ctorParameters = () => [
        { type: void 0, decorators: [{ type: Inject, args: [USER_REPOSITORY] }] }
      ];
    };
    GetUsersUseCaseImpl = __decorate([
      Injectable()
    ], GetUsersUseCaseImpl);
  }
});

export {
  CREATE_USER_USE_CASE,
  init_create_user_use_case_token,
  GET_USERS_USE_CASE,
  init_get_users_use_case_token,
  HttpUserRepository,
  init_http_user_repository,
  UserMapper2 as UserMapper,
  init_create_user_dto,
  CreateUserUseCaseImpl,
  init_create_user_use_case,
  GetUsersUseCaseImpl,
  init_get_users_use_case
};
//# sourceMappingURL=chunk-WFCRFQRJ.js.map

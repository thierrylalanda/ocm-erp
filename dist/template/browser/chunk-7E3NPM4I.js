import {
  InjectionToken
} from "./chunk-HKG6HBOI.js";
import {
  __async
} from "./chunk-TXDUYLVM.js";

// src/app/modules/manage-users/domain/repositories/user.repository.ts
var USER_REPOSITORY = new InjectionToken("UserRepository");
var BaseUserRepository = class {
  // Méthodes étendues
  findWithOptions(options) {
    return __async(this, null, function* () {
      const response = yield this.findAllPaginated(options);
      return {
        users: response.content.map((userResponse) => this.mapResponseToUser(userResponse)),
        total: response.totalElements,
        hasMore: response.page < response.totalPages - 1,
        currentPage: response.page,
        totalPages: response.totalPages
      };
    });
  }
  countByStatus(status) {
    return __async(this, null, function* () {
      const response = yield this.findByStatus(status);
      return response.totalElements;
    });
  }
  countBySite(siteId) {
    return __async(this, null, function* () {
      const response = yield this.findBySite(siteId);
      return response.totalElements;
    });
  }
  countByDepartment(departmentId) {
    return __async(this, null, function* () {
      const response = yield this.findByDepartment(departmentId);
      return response.totalElements;
    });
  }
  findActiveUsers(options) {
    return __async(this, null, function* () {
      return this.findByStatus("ACTIF", options);
    });
  }
  findInactiveUsers(options) {
    return __async(this, null, function* () {
      return this.findByStatus("INACTIF", options);
    });
  }
};

// src/app/modules/manage-users/application/use-cases/get-users.use-case.token.ts
var GET_USERS_USE_CASE = new InjectionToken("GetUsersUseCase");

// src/app/modules/manage-users/domain/entities/user.entity.ts
var UserEntity = class _UserEntity {
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

// src/app/modules/manage-users/application/dto/create-user.dto.ts
var UserMapper = class {
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

export {
  USER_REPOSITORY,
  BaseUserRepository,
  GET_USERS_USE_CASE,
  UserEntity,
  UserMapper
};
//# sourceMappingURL=chunk-7E3NPM4I.js.map

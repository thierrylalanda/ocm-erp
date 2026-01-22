import {
  Inject,
  Injectable,
  InjectionToken,
  setClassMetadata,
  ɵɵdefineInjectable,
  ɵɵinject
} from "./chunk-HKG6HBOI.js";
import {
  __async
} from "./chunk-TXDUYLVM.js";

// src/app/modules/configuration/domain/repositories/company.repository.token.ts
var COMPANY_REPOSITORY = new InjectionToken("CompanyRepository");

// src/app/modules/configuration/application/use-cases/create-company.use-case.token.ts
var CREATE_COMPANY_USE_CASE = new InjectionToken("CreateCompanyUseCase");

// src/app/modules/_shared/domain/entities/tenant.entity.ts
var TenantEntity = class _TenantEntity {
  id;
  nom;
  code;
  description;
  logoUrl;
  website;
  email;
  phoneNumber;
  address;
  city;
  country;
  timezone;
  language;
  currency;
  isActive;
  subscriptionPlan;
  subscriptionExpiresAt;
  maxUsers;
  createdAt;
  updatedAt;
  deletedAt;
  activity;
  postalBox;
  region;
  taxNumber;
  tradeRegister;
  fiscalRegime;
  faviconUrl;
  constructor(id, nom, code, description, logoUrl, website, email, phoneNumber, address, city, country, timezone, language, currency, isActive, subscriptionPlan, subscriptionExpiresAt, maxUsers, createdAt, updatedAt, deletedAt, activity = void 0, postalBox = void 0, region = void 0, taxNumber = void 0, tradeRegister = void 0, fiscalRegime = void 0, faviconUrl = void 0) {
    this.id = id;
    this.nom = nom;
    this.code = code;
    this.description = description;
    this.logoUrl = logoUrl;
    this.website = website;
    this.email = email;
    this.phoneNumber = phoneNumber;
    this.address = address;
    this.city = city;
    this.country = country;
    this.timezone = timezone;
    this.language = language;
    this.currency = currency;
    this.isActive = isActive;
    this.subscriptionPlan = subscriptionPlan;
    this.subscriptionExpiresAt = subscriptionExpiresAt;
    this.maxUsers = maxUsers;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
    this.deletedAt = deletedAt;
    this.activity = activity;
    this.postalBox = postalBox;
    this.region = region;
    this.taxNumber = taxNumber;
    this.tradeRegister = tradeRegister;
    this.fiscalRegime = fiscalRegime;
    this.faviconUrl = faviconUrl;
  }
  // Domain logic
  static create(command) {
    const now = /* @__PURE__ */ new Date();
    const tenantId = { value: this.generateId() };
    return new _TenantEntity(
      command.id,
      command.nom,
      command.code,
      command.description,
      void 0,
      // logoUrl
      void 0,
      // website
      command.email,
      command.phoneNumber,
      command.address,
      command.city,
      command.pays,
      command.timezone || "UTC",
      command.language || "fr",
      command.currency || "XAF",
      true,
      // isActive
      void 0,
      // subscriptionPlan
      void 0,
      // subscriptionExpiresAt
      command.maxUsers || 10,
      now,
      // createdAt
      now,
      // updatedAt
      void 0,
      // deletedAt
      command.activite,
      command.postalBox,
      command.region,
      command.taxNumber,
      command.tradeRegister,
      command.fiscalRegime,
      command.faviconUrl
    );
  }
  update(command) {
    return new _TenantEntity(
      this.id,
      command.nom ?? this.nom,
      this.code,
      // code cannot be changed
      command.description ?? this.description,
      command.logoUrl ?? this.logoUrl,
      command.website ?? this.website,
      command.email ?? this.email,
      command.phoneNumber ?? this.phoneNumber,
      command.address ?? this.address,
      command.city ?? this.city,
      command.country ?? this.country,
      command.timezone ?? this.timezone,
      command.language ?? this.language,
      command.currency ?? this.currency,
      command.isActive ?? this.isActive,
      this.subscriptionPlan,
      this.subscriptionExpiresAt,
      command.maxUsers ?? this.maxUsers,
      this.createdAt,
      /* @__PURE__ */ new Date(),
      // updatedAt
      this.deletedAt,
      command.activity ?? this.activity,
      command.postalBox ?? this.postalBox,
      command.region ?? this.region,
      command.taxNumber ?? this.taxNumber,
      command.tradeRegister ?? this.tradeRegister,
      command.fiscalRegime ?? this.fiscalRegime,
      command.faviconUrl ?? this.faviconUrl
    );
  }
  markAsDeleted() {
    return new _TenantEntity(
      this.id,
      this.nom,
      this.code,
      this.description,
      this.logoUrl,
      this.website,
      this.email,
      this.phoneNumber,
      this.address,
      this.city,
      this.country,
      this.timezone,
      this.language,
      this.currency,
      false,
      // isActive
      this.subscriptionPlan,
      this.subscriptionExpiresAt,
      this.maxUsers,
      this.createdAt,
      /* @__PURE__ */ new Date(),
      // updatedAt
      /* @__PURE__ */ new Date(),
      // deletedAt
      this.activity,
      this.postalBox,
      this.region,
      this.taxNumber,
      this.tradeRegister,
      this.fiscalRegime,
      this.faviconUrl
    );
  }
  activate() {
    return new _TenantEntity(
      this.id,
      this.nom,
      this.code,
      this.description,
      this.logoUrl,
      this.website,
      this.email,
      this.phoneNumber,
      this.address,
      this.city,
      this.country,
      this.timezone,
      this.language,
      this.currency,
      true,
      // isActive
      this.subscriptionPlan,
      this.subscriptionExpiresAt,
      this.maxUsers,
      this.createdAt,
      /* @__PURE__ */ new Date(),
      // updatedAt
      this.deletedAt,
      this.activity,
      this.postalBox,
      this.region,
      this.taxNumber,
      this.tradeRegister,
      this.fiscalRegime,
      this.faviconUrl
    );
  }
  deactivate() {
    return new _TenantEntity(
      this.id,
      this.nom,
      this.code,
      this.description,
      this.logoUrl,
      this.website,
      this.email,
      this.phoneNumber,
      this.address,
      this.city,
      this.country,
      this.timezone,
      this.language,
      this.currency,
      false,
      // isActive
      this.subscriptionPlan,
      this.subscriptionExpiresAt,
      this.maxUsers,
      this.createdAt,
      /* @__PURE__ */ new Date(),
      // updatedAt
      this.deletedAt,
      this.activity,
      this.postalBox,
      this.region,
      this.taxNumber,
      this.tradeRegister,
      this.fiscalRegime,
      this.faviconUrl
    );
  }
  updateSubscription(plan, expiresAt) {
    return new _TenantEntity(
      this.id,
      this.nom,
      this.code,
      this.description,
      this.logoUrl,
      this.website,
      this.email,
      this.phoneNumber,
      this.address,
      this.city,
      this.country,
      this.timezone,
      this.language,
      this.currency,
      this.isActive,
      plan,
      expiresAt,
      this.maxUsers,
      this.createdAt,
      /* @__PURE__ */ new Date(),
      // updatedAt
      this.deletedAt,
      this.activity,
      this.postalBox,
      this.region,
      this.taxNumber,
      this.tradeRegister,
      this.fiscalRegime,
      this.faviconUrl
    );
  }
  canAddMoreUsers(currentUserCount) {
    return currentUserCount < this.maxUsers;
  }
  isSubscriptionActive() {
    if (!this.subscriptionExpiresAt) {
      return false;
    }
    return this.subscriptionExpiresAt > /* @__PURE__ */ new Date();
  }
  static generateId() {
    return `tenant_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
  }
};

// src/app/modules/configuration/application/dto/create-company.dto.ts
function mapCreateCompanyDtoToTenantCreateCommand(dto) {
  return {
    nom: dto.nom,
    id: dto.id,
    code: generateCompanyCode(dto.nom),
    description: dto.activite,
    email: dto.email,
    phoneNumber: dto.telephone,
    address: dto.adresse,
    city: dto.region,
    country: dto.pays,
    currency: dto.devise,
    activity: dto.activite,
    postalBox: dto.boitePostal,
    region: dto.region,
    taxNumber: dto.nc,
    tradeRegister: dto.rccm,
    fiscalRegime: dto.regimeFiscal,
    website: dto.siteWeb,
    logoUrl: dto.logo,
    faviconUrl: dto.favicon,
    isActive: dto.actif,
    maxUsers: 10,
    // Valeur par défaut
    timezone: "UTC",
    // Valeur par défaut
    language: "fr"
    // Valeur par défaut
  };
}
function mapTenantToCreateCompanyResponseDto(tenant) {
  return {
    id: tenant.id.value,
    nom: tenant.name,
    activite: tenant.activity || tenant.description || "",
    adresse: tenant.address,
    boitePostal: tenant.postalBox,
    pays: tenant.country,
    region: tenant.region || tenant.city,
    telephone: tenant.phoneNumber,
    nc: tenant.taxNumber || "",
    rccm: tenant.tradeRegister || "",
    regimeFiscal: tenant.fiscalRegime || "",
    devise: tenant.currency,
    email: tenant.email,
    siteWeb: tenant.website,
    logo: tenant.logoUrl,
    favicon: tenant.faviconUrl,
    actif: tenant.isActive,
    createdAt: tenant.createdAt.toISOString(),
    updatedAt: tenant.updatedAt.toISOString()
  };
}
function generateCompanyCode(companyName) {
  const cleanName = companyName.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toUpperCase().replace(/[^A-Z]/g, "");
  const prefix = cleanName.substring(0, Math.min(3, cleanName.length));
  const timestamp = Date.now().toString().slice(-4);
  return `${prefix}${timestamp}`;
}

// src/app/modules/configuration/application/use-cases/create-company.use-case.ts
var CreateCompanyUseCaseImpl = class _CreateCompanyUseCaseImpl {
  companyRepository;
  constructor(companyRepository) {
    this.companyRepository = companyRepository;
  }
  execute(dto) {
    return __async(this, null, function* () {
      this.validateCreateCompanyDto(dto);
      const existingByEmail = yield this.companyRepository.findByEmail(dto.email);
      if (existingByEmail) {
        throw new Error(`Une soci\xE9t\xE9 avec l'email ${dto.email} existe d\xE9j\xE0`);
      }
      if (dto.nc) {
        const existingByTaxNumber = yield this.companyRepository.findByTaxNumber(dto.nc);
        if (existingByTaxNumber) {
          throw new Error(`Une soci\xE9t\xE9 avec le num\xE9ro contribuable ${dto.nc} existe d\xE9j\xE0`);
        }
      }
      if (dto.rccm) {
        const existingByTradeRegister = yield this.companyRepository.findByTradeRegister(dto.rccm);
        if (existingByTradeRegister) {
          throw new Error(`Une soci\xE9t\xE9 avec le RCCM ${dto.rccm} existe d\xE9j\xE0`);
        }
      }
      const tenantCommand = mapCreateCompanyDtoToTenantCreateCommand(dto);
      const tenantEntity = TenantEntity.create(tenantCommand);
      const savedTenant = yield this.companyRepository.create(tenantEntity);
      return mapTenantToCreateCompanyResponseDto(savedTenant);
    });
  }
  validateCreateCompanyDto(dto) {
    const errors = [];
    if (!dto.nom || dto.nom.trim().length === 0) {
      errors.push("Le nom de la soci\xE9t\xE9 est requis");
    }
    if (!dto.activite || dto.activite.trim().length === 0) {
      errors.push("L'activit\xE9 de la soci\xE9t\xE9 est requise");
    }
    if (!dto.email || !this.isValidEmail(dto.email)) {
      errors.push("Un email valide est requis");
    }
    if (!dto.nc || dto.nc.trim().length === 0) {
      errors.push("Le num\xE9ro contribuable (NC) est requis");
    }
    if (!dto.rccm || dto.rccm.trim().length === 0) {
      errors.push("Le RCCM est requis");
    }
    if (!dto.regimeFiscal || dto.regimeFiscal.trim().length === 0) {
      errors.push("Le r\xE9gime fiscal est requis");
    }
    if (!dto.devise || dto.devise.trim().length === 0) {
      errors.push("La devise est requise");
    }
    if (errors.length > 0) {
      throw new Error(`Validation failed: ${errors.join(", ")}`);
    }
  }
  isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }
  static \u0275fac = function CreateCompanyUseCaseImpl_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CreateCompanyUseCaseImpl)(\u0275\u0275inject(COMPANY_REPOSITORY));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _CreateCompanyUseCaseImpl, factory: _CreateCompanyUseCaseImpl.\u0275fac });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CreateCompanyUseCaseImpl, [{
    type: Injectable
  }], () => [{ type: void 0, decorators: [{
    type: Inject,
    args: [COMPANY_REPOSITORY]
  }] }], null);
})();

export {
  COMPANY_REPOSITORY,
  CREATE_COMPANY_USE_CASE,
  mapCreateCompanyDtoToTenantCreateCommand,
  mapTenantToCreateCompanyResponseDto,
  CreateCompanyUseCaseImpl
};
//# sourceMappingURL=chunk-VNIVGURK.js.map

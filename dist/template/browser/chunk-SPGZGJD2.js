import {
  COMPANY_REPOSITORY,
  CREATE_COMPANY_USE_CASE,
  CreateCompanyUseCaseImpl
} from "./chunk-ZH3GTM4L.js";
import {
  FormsModule,
  ReactiveFormsModule
} from "./chunk-BLAAMQ2R.js";
import {
  CommonModule,
  NgForOf,
  NgIf
} from "./chunk-ZV6UYXXV.js";
import {
  Component,
  Injectable,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵProvidersFeature,
  ɵɵadvance,
  ɵɵclassProp,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-U4CEU3KS.js";
import {
  __async,
  __spreadProps,
  __spreadValues
} from "./chunk-TXDUYLVM.js";

// src/app/modules/configuration/infrastructure/repositories/in-memory-company.repository.ts
var InMemoryCompanyRepository = class _InMemoryCompanyRepository {
  setStatut(id, statut) {
    throw new Error("Method not implemented.");
  }
  companies = /* @__PURE__ */ new Map();
  create(tenant) {
    return __async(this, null, function* () {
      this.companies.set(tenant.id.toString(), tenant);
      return tenant;
    });
  }
  update(id, command) {
    return __async(this, null, function* () {
      const existing = this.companies.get(id.toString());
      if (!existing) {
        throw new Error(`Company with id ${id} not found`);
      }
      const updatedTenant = __spreadProps(__spreadValues(__spreadValues({}, existing), command), {
        updatedAt: /* @__PURE__ */ new Date()
      });
      this.companies.set(id.toString(), updatedTenant);
      return updatedTenant;
    });
  }
  delete(id) {
    return __async(this, null, function* () {
      this.companies.delete(id.toString());
    });
  }
  findById(id) {
    return __async(this, null, function* () {
      return this.companies.get(id.toString()) || null;
    });
  }
  findAll() {
    return __async(this, null, function* () {
      return Array.from(this.companies.values());
    });
  }
  findByCode(code) {
    return __async(this, null, function* () {
      for (const company of this.companies.values()) {
        if (company.code === code) {
          return company;
        }
      }
      return null;
    });
  }
  findByEmail(email) {
    return __async(this, null, function* () {
      for (const company of this.companies.values()) {
        if (company.email === email) {
          return company;
        }
      }
      return null;
    });
  }
  findByTaxNumber(taxNumber) {
    return __async(this, null, function* () {
      for (const company of this.companies.values()) {
        if (company.taxNumber === taxNumber) {
          return company;
        }
      }
      return null;
    });
  }
  findByTradeRegister(tradeRegister) {
    return __async(this, null, function* () {
      for (const company of this.companies.values()) {
        if (company.tradeRegister === tradeRegister) {
          return company;
        }
      }
      return null;
    });
  }
  static \u0275fac = function InMemoryCompanyRepository_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _InMemoryCompanyRepository)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _InMemoryCompanyRepository, factory: _InMemoryCompanyRepository.\u0275fac });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(InMemoryCompanyRepository, [{
    type: Injectable
  }], null, null);
})();

// src/app/modules/configuration/presentation/pages/company-demo/company-demo.component.ts
function CompanyDemoComponent_div_12_div_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 11)(1, "div", 12)(2, "h3");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 13);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 14)(7, "div", 15)(8, "span", 16);
    \u0275\u0275text(9, "ID:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "span", 17);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "div", 15)(13, "span", 16);
    \u0275\u0275text(14, "Activit\xE9:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "span", 17);
    \u0275\u0275text(16);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(17, "div", 15)(18, "span", 16);
    \u0275\u0275text(19, "Email:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "span", 17);
    \u0275\u0275text(21);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(22, "div", 15)(23, "span", 16);
    \u0275\u0275text(24, "NC:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "span", 17);
    \u0275\u0275text(26);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(27, "div", 15)(28, "span", 16);
    \u0275\u0275text(29, "RCCM:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "span", 17);
    \u0275\u0275text(31);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(32, "div", 15)(33, "span", 16);
    \u0275\u0275text(34, "Cr\xE9\xE9e le:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(35, "span", 17);
    \u0275\u0275text(36);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const company_r1 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(company_r1.nom);
    \u0275\u0275advance();
    \u0275\u0275classProp("active", company_r1.actif);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", company_r1.actif ? "Active" : "Inactive", " ");
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(company_r1.id);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(company_r1.activite);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(company_r1.email);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(company_r1.nc);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(company_r1.rccm);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.formatDate(company_r1.createdAt));
  }
}
function CompanyDemoComponent_div_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 3)(1, "h2");
    \u0275\u0275text(2, "Soci\xE9t\xE9s cr\xE9\xE9es");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 9);
    \u0275\u0275template(4, CompanyDemoComponent_div_12_div_4_Template, 37, 10, "div", 10);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275property("ngForOf", ctx_r1.createdCompanies);
  }
}
var CompanyDemoComponent = class _CompanyDemoComponent {
  createdCompanies = [];
  onCompanyCreated(company) {
    this.createdCompanies.unshift(company);
    console.log("Soci\xE9t\xE9 cr\xE9\xE9e:", company);
  }
  onCancel() {
    console.log("Cr\xE9ation annul\xE9e");
  }
  formatDate(dateString) {
    const date = new Date(dateString);
    return date.toLocaleDateString("fr-FR", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit"
    });
  }
  static \u0275fac = function CompanyDemoComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CompanyDemoComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CompanyDemoComponent, selectors: [["app-company-demo"]], features: [\u0275\u0275ProvidersFeature([
    {
      provide: COMPANY_REPOSITORY,
      useClass: InMemoryCompanyRepository
    },
    {
      provide: CREATE_COMPANY_USE_CASE,
      useClass: CreateCompanyUseCaseImpl
    },
    CreateCompanyUseCaseImpl
  ])], decls: 62, vars: 1, consts: [[1, "company-demo"], [1, "demo-header"], [1, "demo-content"], [1, "demo-section"], [1, "section-description"], ["class", "demo-section", 4, "ngIf"], [1, "architecture-info"], [1, "architecture-layer"], [1, "demo-footer"], [1, "companies-list"], ["class", "company-card", 4, "ngFor", "ngForOf"], [1, "company-card"], [1, "company-header"], [1, "company-status"], [1, "company-details"], [1, "detail-row"], [1, "detail-label"], [1, "detail-value"]], template: function CompanyDemoComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "header", 1)(2, "h1");
      \u0275\u0275text(3, "D\xE9monstration - Gestion des Soci\xE9t\xE9s");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(4, "p");
      \u0275\u0275text(5, "Module de configuration ERP OCM - Architecture Clean Architecture");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(6, "div", 2)(7, "div", 3)(8, "h2");
      \u0275\u0275text(9, "Cr\xE9er une nouvelle soci\xE9t\xE9");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(10, "p", 4);
      \u0275\u0275text(11, " Utilisez le formulaire ci-dessous pour cr\xE9er une nouvelle soci\xE9t\xE9. Tous les champs marqu\xE9s d'un ast\xE9risque (*) sont obligatoires. ");
      \u0275\u0275elementEnd()();
      \u0275\u0275template(12, CompanyDemoComponent_div_12_Template, 5, 1, "div", 5);
      \u0275\u0275elementStart(13, "div", 3)(14, "h2");
      \u0275\u0275text(15, "Architecture du module");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(16, "div", 6)(17, "div", 7)(18, "h3");
      \u0275\u0275text(19, "Domain (M\xE9tier)");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(20, "ul")(21, "li");
      \u0275\u0275text(22, "Entit\xE9s m\xE9tier (TenantEntity)");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(23, "li");
      \u0275\u0275text(24, "Interfaces de repositories");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(25, "li");
      \u0275\u0275text(26, "R\xE8gles m\xE9tier");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(27, "div", 7)(28, "h3");
      \u0275\u0275text(29, "Application (Use Cases)");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(30, "ul")(31, "li");
      \u0275\u0275text(32, "CreateCompanyUseCase");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(33, "li");
      \u0275\u0275text(34, "DTOs de transfert");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(35, "li");
      \u0275\u0275text(36, "Validation m\xE9tier");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(37, "div", 7)(38, "h3");
      \u0275\u0275text(39, "Infrastructure");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(40, "ul")(41, "li");
      \u0275\u0275text(42, "Repository in-memory");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(43, "li");
      \u0275\u0275text(44, "Mappers entit\xE9\u2194DTO");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(45, "li");
      \u0275\u0275text(46, "Services externes");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(47, "div", 7)(48, "h3");
      \u0275\u0275text(49, "Presentation (UI)");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(50, "ul")(51, "li");
      \u0275\u0275text(52, "CompanyFormComponent");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(53, "li");
      \u0275\u0275text(54, "Pages de d\xE9monstration");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(55, "li");
      \u0275\u0275text(56, "Gestion d'\xE9tat");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(57, "footer", 8)(58, "p");
      \u0275\u0275text(59, "Module de Configuration - ERP OCM \xA9 2024");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(60, "p");
      \u0275\u0275text(61, "Architecture Clean Architecture - Angular 17+");
      \u0275\u0275elementEnd()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(12);
      \u0275\u0275property("ngIf", ctx.createdCompanies.length > 0);
    }
  }, dependencies: [
    CommonModule,
    NgForOf,
    NgIf,
    FormsModule,
    ReactiveFormsModule
  ], styles: ["\n\n.company-demo[_ngcontent-%COMP%] {\n  min-height: 100vh;\n  background:\n    linear-gradient(\n      135deg,\n      #667eea 0%,\n      #764ba2 100%);\n  padding: 20px;\n}\n.demo-header[_ngcontent-%COMP%] {\n  text-align: center;\n  color: white;\n  margin-bottom: 40px;\n  padding: 20px;\n  background: rgba(255, 255, 255, 0.1);\n  border-radius: 12px;\n  -webkit-backdrop-filter: blur(10px);\n  backdrop-filter: blur(10px);\n}\n.demo-header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  margin: 0 0 10px 0;\n  font-size: 2.5rem;\n  font-weight: 700;\n}\n.demo-header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 1.1rem;\n  opacity: 0.9;\n}\n.demo-content[_ngcontent-%COMP%] {\n  max-width: 1200px;\n  margin: 0 auto;\n}\n.demo-section[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: 12px;\n  padding: 30px;\n  margin-bottom: 30px;\n  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);\n}\n.demo-section[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  color: #333;\n  margin-top: 0;\n  margin-bottom: 15px;\n  font-size: 1.8rem;\n  border-bottom: 2px solid #667eea;\n  padding-bottom: 10px;\n}\n.section-description[_ngcontent-%COMP%] {\n  color: #666;\n  margin-bottom: 25px;\n  font-size: 1rem;\n  line-height: 1.6;\n}\n.companies-list[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));\n  gap: 20px;\n  margin-top: 20px;\n}\n.company-card[_ngcontent-%COMP%] {\n  background: #f8f9fa;\n  border-radius: 8px;\n  padding: 20px;\n  border: 1px solid #e9ecef;\n  transition: transform 0.3s, box-shadow 0.3s;\n}\n.company-card[_ngcontent-%COMP%]:hover {\n  transform: translateY(-5px);\n  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.1);\n}\n.company-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 15px;\n}\n.company-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0;\n  color: #333;\n  font-size: 1.2rem;\n}\n.company-status[_ngcontent-%COMP%] {\n  padding: 4px 12px;\n  border-radius: 20px;\n  font-size: 0.8rem;\n  font-weight: 600;\n}\n.company-status.active[_ngcontent-%COMP%] {\n  background: #d4edda;\n  color: #155724;\n}\n.company-status[_ngcontent-%COMP%]:not(.active) {\n  background: #f8d7da;\n  color: #721c24;\n}\n.company-details[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n}\n.detail-row[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n.detail-label[_ngcontent-%COMP%] {\n  font-weight: 600;\n  color: #555;\n  font-size: 0.9rem;\n}\n.detail-value[_ngcontent-%COMP%] {\n  color: #333;\n  font-size: 0.9rem;\n  text-align: right;\n  max-width: 60%;\n  word-break: break-word;\n}\n.architecture-info[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));\n  gap: 20px;\n  margin-top: 20px;\n}\n.architecture-layer[_ngcontent-%COMP%] {\n  background: #f8f9fa;\n  border-radius: 8px;\n  padding: 20px;\n  border-left: 4px solid #667eea;\n}\n.architecture-layer[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin-top: 0;\n  color: #333;\n  font-size: 1.1rem;\n}\n.architecture-layer[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  margin: 0;\n  padding-left: 20px;\n}\n.architecture-layer[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  margin-bottom: 8px;\n  color: #555;\n  font-size: 0.9rem;\n}\n.demo-footer[_ngcontent-%COMP%] {\n  text-align: center;\n  color: white;\n  margin-top: 40px;\n  padding: 20px;\n  opacity: 0.8;\n  font-size: 0.9rem;\n}\n.demo-footer[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 5px 0;\n}\n@media (max-width: 768px) {\n  .demo-header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    font-size: 2rem;\n  }\n  .demo-section[_ngcontent-%COMP%] {\n    padding: 20px;\n  }\n  .companies-list[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .architecture-info[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n/*# sourceMappingURL=company-demo.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CompanyDemoComponent, [{
    type: Component,
    args: [{ selector: "app-company-demo", imports: [
      CommonModule,
      FormsModule,
      ReactiveFormsModule
    ], providers: [
      {
        provide: COMPANY_REPOSITORY,
        useClass: InMemoryCompanyRepository
      },
      {
        provide: CREATE_COMPANY_USE_CASE,
        useClass: CreateCompanyUseCaseImpl
      },
      CreateCompanyUseCaseImpl
    ], template: `
    <div class="company-demo">
      <header class="demo-header">
        <h1>D\xE9monstration - Gestion des Soci\xE9t\xE9s</h1>
        <p>Module de configuration ERP OCM - Architecture Clean Architecture</p>
      </header>

      <div class="demo-content">
        <div class="demo-section">
          <h2>Cr\xE9er une nouvelle soci\xE9t\xE9</h2>
          <p class="section-description">
            Utilisez le formulaire ci-dessous pour cr\xE9er une nouvelle soci\xE9t\xE9. 
            Tous les champs marqu\xE9s d'un ast\xE9risque (*) sont obligatoires.
          </p>
         
        </div>

        <div class="demo-section" *ngIf="createdCompanies.length > 0">
          <h2>Soci\xE9t\xE9s cr\xE9\xE9es</h2>
          <div class="companies-list">
            <div *ngFor="let company of createdCompanies" class="company-card">
              <div class="company-header">
                <h3>{{ company.nom }}</h3>
                <span class="company-status" [class.active]="company.actif">
                  {{ company.actif ? 'Active' : 'Inactive' }}
                </span>
              </div>
              
              <div class="company-details">
                <div class="detail-row">
                  <span class="detail-label">ID:</span>
                  <span class="detail-value">{{ company.id }}</span>
                </div>
                <div class="detail-row">
                  <span class="detail-label">Activit\xE9:</span>
                  <span class="detail-value">{{ company.activite }}</span>
                </div>
                <div class="detail-row">
                  <span class="detail-label">Email:</span> 
                  <span class="detail-value">{{ company.email }}</span>
                </div>
                <div class="detail-row">
                  <span class="detail-label">NC:</span>
                  <span class="detail-value">{{ company.nc }}</span>
                </div>
                <div class="detail-row">
                  <span class="detail-label">RCCM:</span>
                  <span class="detail-value">{{ company.rccm }}</span>
                </div>
                <div class="detail-row">
                  <span class="detail-label">Cr\xE9\xE9e le:</span>
                  <span class="detail-value">{{ formatDate(company.createdAt) }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="demo-section">
          <h2>Architecture du module</h2>
          <div class="architecture-info">
            <div class="architecture-layer">
              <h3>Domain (M\xE9tier)</h3>
              <ul>
                <li>Entit\xE9s m\xE9tier (TenantEntity)</li>
                <li>Interfaces de repositories</li>
                <li>R\xE8gles m\xE9tier</li>
              </ul>
            </div>
            
            <div class="architecture-layer">
              <h3>Application (Use Cases)</h3>
              <ul>
                <li>CreateCompanyUseCase</li>
                <li>DTOs de transfert</li>
                <li>Validation m\xE9tier</li>
              </ul>
            </div>
            
            <div class="architecture-layer">
              <h3>Infrastructure</h3>
              <ul>
                <li>Repository in-memory</li>
                <li>Mappers entit\xE9\u2194DTO</li>
                <li>Services externes</li>
              </ul>
            </div>
            
            <div class="architecture-layer">
              <h3>Presentation (UI)</h3>
              <ul>
                <li>CompanyFormComponent</li>
                <li>Pages de d\xE9monstration</li>
                <li>Gestion d'\xE9tat</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <footer class="demo-footer">
        <p>Module de Configuration - ERP OCM \xA9 2024</p>
        <p>Architecture Clean Architecture - Angular 17+</p>
      </footer>
    </div>
  `, styles: ["/* angular:styles/component:scss;622df8cdc05e05f5cbd7577271f2db0f520f04ae59bdc393dded705c9ecd9248;/Users/a1/Documents/angularProjects/ocm/src/app/modules/configuration/presentation/pages/company-demo/company-demo.component.ts */\n.company-demo {\n  min-height: 100vh;\n  background:\n    linear-gradient(\n      135deg,\n      #667eea 0%,\n      #764ba2 100%);\n  padding: 20px;\n}\n.demo-header {\n  text-align: center;\n  color: white;\n  margin-bottom: 40px;\n  padding: 20px;\n  background: rgba(255, 255, 255, 0.1);\n  border-radius: 12px;\n  -webkit-backdrop-filter: blur(10px);\n  backdrop-filter: blur(10px);\n}\n.demo-header h1 {\n  margin: 0 0 10px 0;\n  font-size: 2.5rem;\n  font-weight: 700;\n}\n.demo-header p {\n  margin: 0;\n  font-size: 1.1rem;\n  opacity: 0.9;\n}\n.demo-content {\n  max-width: 1200px;\n  margin: 0 auto;\n}\n.demo-section {\n  background: white;\n  border-radius: 12px;\n  padding: 30px;\n  margin-bottom: 30px;\n  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);\n}\n.demo-section h2 {\n  color: #333;\n  margin-top: 0;\n  margin-bottom: 15px;\n  font-size: 1.8rem;\n  border-bottom: 2px solid #667eea;\n  padding-bottom: 10px;\n}\n.section-description {\n  color: #666;\n  margin-bottom: 25px;\n  font-size: 1rem;\n  line-height: 1.6;\n}\n.companies-list {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));\n  gap: 20px;\n  margin-top: 20px;\n}\n.company-card {\n  background: #f8f9fa;\n  border-radius: 8px;\n  padding: 20px;\n  border: 1px solid #e9ecef;\n  transition: transform 0.3s, box-shadow 0.3s;\n}\n.company-card:hover {\n  transform: translateY(-5px);\n  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.1);\n}\n.company-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 15px;\n}\n.company-header h3 {\n  margin: 0;\n  color: #333;\n  font-size: 1.2rem;\n}\n.company-status {\n  padding: 4px 12px;\n  border-radius: 20px;\n  font-size: 0.8rem;\n  font-weight: 600;\n}\n.company-status.active {\n  background: #d4edda;\n  color: #155724;\n}\n.company-status:not(.active) {\n  background: #f8d7da;\n  color: #721c24;\n}\n.company-details {\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n}\n.detail-row {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n.detail-label {\n  font-weight: 600;\n  color: #555;\n  font-size: 0.9rem;\n}\n.detail-value {\n  color: #333;\n  font-size: 0.9rem;\n  text-align: right;\n  max-width: 60%;\n  word-break: break-word;\n}\n.architecture-info {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));\n  gap: 20px;\n  margin-top: 20px;\n}\n.architecture-layer {\n  background: #f8f9fa;\n  border-radius: 8px;\n  padding: 20px;\n  border-left: 4px solid #667eea;\n}\n.architecture-layer h3 {\n  margin-top: 0;\n  color: #333;\n  font-size: 1.1rem;\n}\n.architecture-layer ul {\n  margin: 0;\n  padding-left: 20px;\n}\n.architecture-layer li {\n  margin-bottom: 8px;\n  color: #555;\n  font-size: 0.9rem;\n}\n.demo-footer {\n  text-align: center;\n  color: white;\n  margin-top: 40px;\n  padding: 20px;\n  opacity: 0.8;\n  font-size: 0.9rem;\n}\n.demo-footer p {\n  margin: 5px 0;\n}\n@media (max-width: 768px) {\n  .demo-header h1 {\n    font-size: 2rem;\n  }\n  .demo-section {\n    padding: 20px;\n  }\n  .companies-list {\n    grid-template-columns: 1fr;\n  }\n  .architecture-info {\n    grid-template-columns: 1fr;\n  }\n}\n/*# sourceMappingURL=company-demo.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CompanyDemoComponent, { className: "CompanyDemoComponent", filePath: "src/app/modules/configuration/presentation/pages/company-demo/company-demo.component.ts", lineNumber: 332 });
})();
export {
  CompanyDemoComponent
};
//# sourceMappingURL=chunk-SPGZGJD2.js.map

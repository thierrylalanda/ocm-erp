import {
  GET_ROLES_USE_CASE,
  GetRolesUseCaseImpl,
  HttpRoleRepository,
  ROLE_REPOSITORY
} from "./chunk-LI6MJE53.js";
import "./chunk-7SCMAJTM.js";
import {
  TranslatePipe
} from "./chunk-42UJGEGX.js";
import {
  CheckboxControlValueAccessor,
  DefaultValueAccessor,
  FormBuilder,
  FormControlName,
  FormGroup,
  FormGroupDirective,
  MinValidator,
  NgControlStatus,
  NgControlStatusGroup,
  NumberValueAccessor,
  ReactiveFormsModule,
  Validators,
  ɵNgNoValidate
} from "./chunk-NAWYXTZ5.js";
import {
  AuthService
} from "./chunk-YJY3UYMJ.js";
import "./chunk-AWXYRVJS.js";
import {
  RouterLink
} from "./chunk-WOBWH5QA.js";
import "./chunk-KYBWVUSB.js";
import "./chunk-ZCJVS2AD.js";
import {
  CommonModule,
  NgForOf,
  NgIf
} from "./chunk-LNSVVXVJ.js";
import {
  Component,
  Injectable,
  InjectionToken,
  inject,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵProvidersFeature,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassMap,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵinterpolate,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵproperty,
  ɵɵreference,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-HKG6HBOI.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-TXDUYLVM.js";

// src/app/modules/manage-users/application/use-cases/create-role.use-case.token.ts
var CREATE_ROLE_USE_CASE = new InjectionToken("CreateRoleUseCase");

// src/app/modules/manage-users/application/use-cases/copy-role.use-case.token.ts
var COPY_ROLE_USE_CASE = new InjectionToken("COPY_ROLE_USE_CASE");

// src/app/modules/manage-users/application/use-cases/create-role.use-case.ts
var CreateRoleUseCaseImpl = class _CreateRoleUseCaseImpl {
  roleRepository = inject(ROLE_REPOSITORY);
  execute(role) {
    this.validateRole(role);
    return this.roleRepository.create(role);
  }
  /**
   * Valide les données du rôle
   */
  validateRole(role) {
    if (!role.roleCode || role.roleCode.trim().length === 0) {
      throw new Error("Le code du r\xF4le est obligatoire");
    }
    if (!role.roleNom || role.roleNom.trim().length === 0) {
      throw new Error("Le nom du r\xF4le est obligatoire");
    }
    if (role.roleNiveau === void 0 || role.roleNiveau === null) {
      throw new Error("Le niveau du r\xF4le est obligatoire");
    }
    if (role.societeId === void 0 || role.societeId === null) {
      throw new Error("L'ID de la soci\xE9t\xE9 est obligatoire");
    }
  }
  static \u0275fac = function CreateRoleUseCaseImpl_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CreateRoleUseCaseImpl)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _CreateRoleUseCaseImpl, factory: _CreateRoleUseCaseImpl.\u0275fac });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CreateRoleUseCaseImpl, [{
    type: Injectable
  }], null, null);
})();

// src/app/modules/manage-users/application/use-cases/copy-role.use-case.ts
var CopyRoleUseCaseImpl = class _CopyRoleUseCaseImpl {
  roleRepository = inject(ROLE_REPOSITORY);
  execute(id, copyData) {
    this.validateCopyData(copyData);
    return this.roleRepository.copy(id, copyData);
  }
  /**
   * Valide les données de copie
   */
  validateCopyData(copyData) {
    if (!copyData.newRoleCode || copyData.newRoleCode.trim().length === 0) {
      throw new Error("Le code du nouveau r\xF4le est obligatoire");
    }
    if (!copyData.newRoleNom || copyData.newRoleNom.trim().length === 0) {
      throw new Error("Le nom du nouveau r\xF4le est obligatoire");
    }
  }
  static \u0275fac = function CopyRoleUseCaseImpl_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CopyRoleUseCaseImpl)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _CopyRoleUseCaseImpl, factory: _CopyRoleUseCaseImpl.\u0275fac });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CopyRoleUseCaseImpl, [{
    type: Injectable
  }], null, null);
})();

// src/app/modules/manage-users/presentation/pages/roles-permissions/roles-permissions.component.ts
function RolesPermissionsComponent_div_33_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 66)(1, "div", 67)(2, "span", 68);
    \u0275\u0275text(3, "Loading...");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "p", 69);
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(6, 1, "rolesPermissions.loading"));
  }
}
function RolesPermissionsComponent_div_34_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 70);
    \u0275\u0275element(1, "i", 71);
    \u0275\u0275text(2);
    \u0275\u0275elementStart(3, "button", 72);
    \u0275\u0275listener("click", function RolesPermissionsComponent_div_34_Template_button_click_3_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.loadRoles());
    });
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r1.error, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(5, 2, "common.retry"));
  }
}
function RolesPermissionsComponent_div_35_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 73);
    \u0275\u0275element(1, "i", 74);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275element(4, "button", 75);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 1, "rolesPermissions.saveSuccess"), " ");
  }
}
function RolesPermissionsComponent_div_36_tr_25_span_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const role_r4 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275attribute("data-bs-toggle", role_r4.roleDescription.length > 50 ? "popover" : null)("data-bs-trigger", role_r4.roleDescription.length > 50 ? "hover focus" : null)("data-bs-placement", role_r4.roleDescription.length > 50 ? "top" : null)("data-bs-content", role_r4.roleDescription.length > 50 ? role_r4.roleDescription : null)("title", role_r4.roleDescription.length > 50 ? role_r4.roleDescription : null);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.truncateDescription(role_r4.roleDescription), " ");
  }
}
function RolesPermissionsComponent_div_36_tr_25_ng_template_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, "-");
  }
}
function RolesPermissionsComponent_div_36_tr_25_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "td");
    \u0275\u0275template(6, RolesPermissionsComponent_div_36_tr_25_span_6_Template, 2, 6, "span", 82)(7, RolesPermissionsComponent_div_36_tr_25_ng_template_7_Template, 1, 0, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "td");
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "td")(12, "span");
    \u0275\u0275text(13);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "td");
    \u0275\u0275text(15);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "td")(17, "a", 83);
    \u0275\u0275element(18, "i", 84);
    \u0275\u0275text(19);
    \u0275\u0275pipe(20, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(21, "td", 85)(22, "a", 86);
    \u0275\u0275element(23, "i", 87);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "ul", 7)(25, "li")(26, "a", 88);
    \u0275\u0275listener("click", function RolesPermissionsComponent_div_36_tr_25_Template_a_click_26_listener() {
      const role_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.openEditModal(role_r4));
    });
    \u0275\u0275element(27, "i", 89);
    \u0275\u0275text(28);
    \u0275\u0275pipe(29, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(30, "li")(31, "a", 90);
    \u0275\u0275listener("click", function RolesPermissionsComponent_div_36_tr_25_Template_a_click_31_listener() {
      const role_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.openCopyModal(role_r4));
    });
    \u0275\u0275element(32, "i", 91);
    \u0275\u0275text(33);
    \u0275\u0275pipe(34, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(35, "li")(36, "a", 92);
    \u0275\u0275element(37, "i", 93);
    \u0275\u0275text(38);
    \u0275\u0275pipe(39, "translate");
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const role_r4 = ctx.$implicit;
    const noDescription_r5 = \u0275\u0275reference(8);
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(role_r4.roleCode);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(role_r4.roleNom);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", role_r4.roleDescription)("ngIfElse", noDescription_r5);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(role_r4.roleNiveau);
    \u0275\u0275advance(2);
    \u0275\u0275classMap(ctx_r1.getRoleStatusClass(role_r4));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.getRoleStatus(role_r4));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.formatDate(role_r4.roleDateCreation));
    \u0275\u0275advance(2);
    \u0275\u0275property("routerLink", ctx_r1.routes.permission(role_r4.id));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(20, 14, "rolesPermissions.permissions"), " ");
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(29, 16, "rolesPermissions.edit"), " ");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(34, 18, "rolesPermissions.copy"), " ");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(39, 20, "rolesPermissions.delete"), " ");
  }
}
function RolesPermissionsComponent_div_36_tr_26_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 94);
    \u0275\u0275element(2, "i", 95);
    \u0275\u0275elementStart(3, "p", 96);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(5, 1, "rolesPermissions.noRoles"));
  }
}
function RolesPermissionsComponent_div_36_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 76)(1, "table", 77)(2, "thead", 78)(3, "tr")(4, "th");
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "th");
    \u0275\u0275text(8);
    \u0275\u0275pipe(9, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "th");
    \u0275\u0275text(11);
    \u0275\u0275pipe(12, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "th");
    \u0275\u0275text(14);
    \u0275\u0275pipe(15, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "th");
    \u0275\u0275text(17);
    \u0275\u0275pipe(18, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "th");
    \u0275\u0275text(20);
    \u0275\u0275pipe(21, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275element(22, "th", 79)(23, "th", 79);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(24, "tbody");
    \u0275\u0275template(25, RolesPermissionsComponent_div_36_tr_25_Template, 40, 22, "tr", 80)(26, RolesPermissionsComponent_div_36_tr_26_Template, 6, 3, "tr", 81);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(6, 8, "rolesPermissions.roleName"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(9, 10, "rolesPermissions.roleName"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(12, 12, "rolesPermissions.description"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(15, 14, "rolesPermissions.level"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(18, 16, "rolesPermissions.status"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(21, 18, "rolesPermissions.createdDate"));
    \u0275\u0275advance(5);
    \u0275\u0275property("ngForOf", ctx_r1.roles);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.roles.length === 0 && !ctx_r1.loading);
  }
}
function RolesPermissionsComponent_div_56_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 97);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.getFieldError("roleCode"), " ");
  }
}
function RolesPermissionsComponent_div_65_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 97);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.getFieldError("roleNom"), " ");
  }
}
function RolesPermissionsComponent_div_79_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 97);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.getFieldError("roleNiveau"), " ");
  }
}
function RolesPermissionsComponent_span_91_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 98);
  }
}
function RolesPermissionsComponent_div_106_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 73);
    \u0275\u0275element(1, "i", 74);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275element(4, "button", 75);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 1, "permissions.roleForm.successEdit"), " ");
  }
}
function RolesPermissionsComponent_div_107_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 70);
    \u0275\u0275element(1, "i", 71);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r1.editError, " ");
  }
}
function RolesPermissionsComponent_div_124_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 97);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.getEditFieldError("roleNom"), " ");
  }
}
function RolesPermissionsComponent_div_138_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 97);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.getEditFieldError("roleNiveau"), " ");
  }
}
function RolesPermissionsComponent_span_150_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 98);
  }
}
function RolesPermissionsComponent_div_184_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 73);
    \u0275\u0275element(1, "i", 74);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275element(4, "button", 75);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 1, "permissions.roleForm.successCopy"), " ");
  }
}
function RolesPermissionsComponent_div_185_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 70);
    \u0275\u0275element(1, "i", 71);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r1.copyError, " ");
  }
}
function RolesPermissionsComponent_div_194_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 97);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.getCopyFieldError("newRoleCode"), " ");
  }
}
function RolesPermissionsComponent_div_203_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 97);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.getCopyFieldError("newRoleNom"), " ");
  }
}
function RolesPermissionsComponent_span_214_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 98);
  }
}
var RolesPermissionsComponent = class _RolesPermissionsComponent {
  fb = inject(FormBuilder);
  createRoleUseCase = inject(CREATE_ROLE_USE_CASE);
  getRolesUseCase = inject(GET_ROLES_USE_CASE);
  copyRoleUseCase = inject(COPY_ROLE_USE_CASE);
  authService = inject(AuthService);
  roleForm;
  editForm;
  copyForm;
  roles = [];
  loading = false;
  error = null;
  success = false;
  editSuccess = false;
  editError = null;
  copySuccess = false;
  copyError = null;
  selectedRole = null;
  routes = {
    permission: (roleId) => `/app/manage-users/permission/${roleId}`
  };
  ngOnInit() {
    this.initForm();
    this.initEditForm();
    this.initCopyForm();
    this.loadRoles();
  }
  /**
   * Initialise le formulaire de création de rôle
   */
  initForm() {
    this.roleForm = this.fb.group({
      roleCode: ["", [Validators.required, Validators.minLength(3)]],
      roleNom: ["", [Validators.required, Validators.minLength(3)]],
      roleDescription: [""],
      roleNiveau: [1, [Validators.required, Validators.min(1)]],
      roleActif: [true]
    });
  }
  /**
   * Initialise le formulaire d'édition de rôle
   */
  initEditForm() {
    this.editForm = this.fb.group({
      roleNom: ["", [Validators.required, Validators.minLength(3)]],
      roleDescription: [""],
      roleNiveau: [1, [Validators.required, Validators.min(1)]],
      roleActif: [true]
    });
  }
  /**
   * Charge la liste des rôles
   */
  loadRoles() {
    this.loading = true;
    this.error = null;
    const societeId = this.authService.user.societeId;
    this.getRolesUseCase.execute(societeId).subscribe({
      next: (roles) => {
        this.roles = roles;
        this.loading = false;
      },
      error: (error) => {
        console.error("Erreur lors du chargement des r\xF4les:", error);
        this.error = "Erreur lors du chargement des r\xF4les";
        this.loading = false;
      }
    });
  }
  /**
   * Soumet le formulaire de création de rôle
   */
  onSubmit() {
    if (this.roleForm.invalid) {
      this.markFormGroupTouched(this.roleForm);
      return;
    }
    this.loading = true;
    this.error = null;
    this.success = false;
    const roleData = __spreadProps(__spreadValues({}, this.roleForm.value), {
      societeId: 1
      // Pour l'instant, on utilise l'ID de société 1
    });
    this.createRoleUseCase.execute(roleData).subscribe({
      next: (role) => {
        this.success = true;
        this.roles.push(role);
        this.roleForm.reset({
          roleNiveau: 1,
          roleActif: true
        });
        this.loading = false;
      },
      error: (error) => {
        console.error("Erreur lors de la cr\xE9ation du r\xF4le:", error);
        this.error = error.message || "Erreur lors de la cr\xE9ation du r\xF4le";
        this.loading = false;
      }
    });
  }
  /**
   * Marque tous les champs du formulaire comme touchés pour afficher les erreurs
   */
  markFormGroupTouched(formGroup) {
    Object.values(formGroup.controls).forEach((control) => {
      control.markAsTouched();
      if (control instanceof FormGroup) {
        this.markFormGroupTouched(control);
      }
    });
  }
  /**
   * Vérifie si un champ est invalide et a été touché
   */
  isFieldInvalid(fieldName) {
    const field = this.roleForm.get(fieldName);
    return field ? field.invalid && (field.dirty || field.touched) : false;
  }
  /**
   * Récupère le message d'erreur pour un champ
   */
  getFieldError(fieldName) {
    const field = this.roleForm.get(fieldName);
    if (!field || !field.errors) {
      return "";
    }
    if (field.errors["required"]) {
      return "Ce champ est obligatoire";
    }
    if (field.errors["minlength"]) {
      return `Minimum ${field.errors["minlength"].requiredLength} caract\xE8res`;
    }
    if (field.errors["min"]) {
      return `La valeur minimale est ${field.errors["min"].min}`;
    }
    return "Valeur invalide";
  }
  /**
   * Formate la date pour l'affichage
   */
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
  /**
   * Retourne le statut du rôle sous forme de texte
   */
  getRoleStatus(role) {
    return role.roleActif ? "Actif" : "Inactif";
  }
  /**
   * Retourne la classe CSS pour le statut du rôle
   */
  getRoleStatusClass(role) {
    return role.roleActif ? "badge bg-success" : "badge bg-danger";
  }
  /**
   * Initialise le formulaire de copie de rôle
   */
  initCopyForm() {
    this.copyForm = this.fb.group({
      newRoleCode: ["", [Validators.required, Validators.minLength(3)]],
      newRoleNom: ["", [Validators.required, Validators.minLength(3)]]
    });
  }
  /**
   * Ouvre la modal d'édition pour un rôle
   */
  openEditModal(role) {
    this.selectedRole = role;
    this.editForm.patchValue({
      roleNom: role.roleNom,
      roleDescription: role.roleDescription || "",
      roleNiveau: role.roleNiveau,
      roleActif: role.roleActif
    });
    this.editError = null;
    this.editSuccess = false;
  }
  /**
   * Ferme la modal d'édition
   */
  closeEditModal() {
    this.selectedRole = null;
    this.editForm.reset({
      roleNiveau: 1,
      roleActif: true
    });
    this.editError = null;
    this.editSuccess = false;
  }
  /**
   * Soumet le formulaire d'édition de rôle
   */
  onEditSubmit() {
    if (this.editForm.invalid || !this.selectedRole) {
      this.markFormGroupTouched(this.editForm);
      return;
    }
    this.loading = true;
    this.editError = null;
    this.editSuccess = false;
    const updateData = __spreadProps(__spreadValues({}, this.editForm.value), {
      id: this.selectedRole.id,
      societeId: 1
      // Pour l'instant, on utilise l'ID de société 1
    });
    setTimeout(() => {
      const index = this.roles.findIndex((r) => r.id === this.selectedRole.id);
      if (index !== -1) {
        this.roles[index] = __spreadValues(__spreadValues({}, this.roles[index]), updateData);
      }
      this.editSuccess = true;
      this.loading = false;
      setTimeout(() => {
        this.closeEditModal();
      }, 2e3);
    }, 1e3);
  }
  /**
   * Vérifie si un champ du formulaire d'édition est invalide
   */
  isEditFieldInvalid(fieldName) {
    const field = this.editForm.get(fieldName);
    return field ? field.invalid && (field.dirty || field.touched) : false;
  }
  /**
   * Récupère le message d'erreur pour un champ du formulaire d'édition
   */
  getEditFieldError(fieldName) {
    const field = this.editForm.get(fieldName);
    if (!field || !field.errors) {
      return "";
    }
    if (field.errors["required"]) {
      return "Ce champ est obligatoire";
    }
    if (field.errors["minlength"]) {
      return `Minimum ${field.errors["minlength"].requiredLength} caract\xE8res`;
    }
    if (field.errors["min"]) {
      return `La valeur minimale est ${field.errors["min"].min}`;
    }
    return "Valeur invalide";
  }
  /**
   * Ouvre la modal de copie pour un rôle
   */
  openCopyModal(role) {
    this.selectedRole = role;
    this.copyForm.reset({
      newRoleCode: `${role.roleCode}_COPY`,
      newRoleNom: `${role.roleNom} (Copie)`
    });
    this.copyError = null;
    this.copySuccess = false;
  }
  /**
   * Ferme la modal de copie
   */
  closeCopyModal() {
    this.selectedRole = null;
    this.copyForm.reset();
    this.copyError = null;
    this.copySuccess = false;
  }
  /**
   * Soumet le formulaire de copie de rôle
   */
  onCopySubmit() {
    if (this.copyForm.invalid || !this.selectedRole) {
      this.markFormGroupTouched(this.copyForm);
      return;
    }
    this.loading = true;
    this.copyError = null;
    this.copySuccess = false;
    const copyData = this.copyForm.value;
    this.copyRoleUseCase.execute(this.selectedRole.id, copyData).subscribe({
      next: (role) => {
        this.copySuccess = true;
        this.roles.push(role);
        this.loading = false;
        setTimeout(() => {
          this.closeCopyModal();
        }, 2e3);
      },
      error: (error) => {
        console.error("Erreur lors de la copie du r\xF4le:", error);
        this.copyError = error.message || "Erreur lors de la copie du r\xF4le";
        this.loading = false;
      }
    });
  }
  /**
   * Vérifie si un champ du formulaire de copie est invalide
   */
  isCopyFieldInvalid(fieldName) {
    const field = this.copyForm.get(fieldName);
    return field ? field.invalid && (field.dirty || field.touched) : false;
  }
  /**
   * Récupère le message d'erreur pour un champ du formulaire de copie
   */
  getCopyFieldError(fieldName) {
    const field = this.copyForm.get(fieldName);
    if (!field || !field.errors) {
      return "";
    }
    if (field.errors["required"]) {
      return "Ce champ est obligatoire";
    }
    if (field.errors["minlength"]) {
      return `Minimum ${field.errors["minlength"].requiredLength} caract\xE8res`;
    }
    return "Valeur invalide";
  }
  /**
   * Tronque la description à 50 caractères et ajoute "..." si nécessaire
   */
  truncateDescription(description) {
    if (!description)
      return "-";
    const maxLength = 50;
    if (description.length <= maxLength) {
      return description;
    }
    return description.substring(0, maxLength) + "...";
  }
  static \u0275fac = function RolesPermissionsComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _RolesPermissionsComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _RolesPermissionsComponent, selectors: [["app-roles-permissions"]], features: [\u0275\u0275ProvidersFeature([
    {
      provide: ROLE_REPOSITORY,
      useClass: HttpRoleRepository
    },
    {
      provide: CREATE_ROLE_USE_CASE,
      useClass: CreateRoleUseCaseImpl
    },
    {
      provide: GET_ROLES_USE_CASE,
      useClass: GetRolesUseCaseImpl
    },
    {
      provide: COPY_ROLE_USE_CASE,
      useClass: CopyRoleUseCaseImpl
    }
  ])], decls: 218, vars: 159, consts: [["noDescription", ""], [1, "content-two"], [1, "d-flex", "d-block", "align-items-center", "justify-content-between", "flex-wrap", "gap-3", "mb-3"], [1, "d-flex", "my-xl-auto", "right-content", "align-items-center", "flex-wrap", "gap-2"], [1, "dropdown"], ["href", "javascript:void(0);", "data-bs-toggle", "dropdown", 1, "btn", "btn-outline-white", "d-inline-flex", "align-items-center"], [1, "isax", "isax-export-1", "me-1"], [1, "dropdown-menu"], ["href", "javascript:void(0);", 1, "dropdown-item"], ["href", "javascript:void(0);", "data-bs-toggle", "modal", "data-bs-target", "#add_modal", 1, "btn", "btn-primary", "d-flex", "align-items-center"], [1, "isax", "isax-add-circle5", "me-1"], [1, "row"], [1, "col-md-3"], [1, "input-group", "mb-3"], [1, "input-group-text", "bg-white", "border-end-0"], [1, "isax", "isax-search-normal", "fs-12"], ["type", "text", 1, "form-control", "border-start-0", "ps-0", "bg-white", 3, "placeholder"], ["class", "text-center py-5", 4, "ngIf"], ["class", "alert alert-danger", "role", "alert", 4, "ngIf"], ["class", "alert alert-success alert-dismissible fade show", "role", "alert", 4, "ngIf"], ["class", "table-responsive table-nowrap", 4, "ngIf"], ["id", "add_modal", 1, "modal", "fade"], [1, "modal-dialog", "modal-dialog-centered", "modal-md"], [1, "modal-content"], [1, "modal-header"], [1, "modal-title"], ["type", "button", "data-bs-dismiss", "modal", "aria-label", "Close", 1, "btn-close", "btn-close-modal", "custom-btn-close"], [1, "fa-solid", "fa-x"], [3, "ngSubmit", "formGroup"], [1, "modal-body"], [1, "mb-3"], [1, "form-label"], [1, "text-danger"], ["type", "text", "formControlName", "roleCode", 1, "form-control", 3, "placeholder"], ["class", "text-danger small mt-1", 4, "ngIf"], ["type", "text", "formControlName", "roleNom", 1, "form-control", 3, "placeholder"], ["formControlName", "roleDescription", "rows", "2", 1, "form-control", 3, "placeholder"], ["type", "number", "formControlName", "roleNiveau", "min", "1", 1, "form-control"], [1, "mb-0"], [1, "form-check", "form-switch"], ["type", "checkbox", "role", "switch", "formControlName", "roleActif", "id", "roleActif", 1, "form-check-input"], ["for", "roleActif", 1, "form-check-label"], [1, "modal-footer", "d-flex", "align-items-center", "justify-content-between", "gap-1"], ["type", "button", "data-bs-dismiss", "modal", 1, "btn", "btn-outline-white"], ["type", "submit", 1, "btn", "btn-primary", 3, "disabled"], ["class", "spinner-border spinner-border-sm me-1", 4, "ngIf"], ["id", "edit_modal", 1, "modal", "fade"], ["type", "button", "data-bs-dismiss", "modal", "aria-label", "Close", 1, "btn-close", "btn-close-modal", "custom-btn-close", 3, "click"], ["type", "text", "readonly", "", 1, "form-control", "bg-light", 3, "value"], [1, "text-muted", "small", "mt-1"], ["type", "checkbox", "role", "switch", "formControlName", "roleActif", "id", "editRoleActif", 1, "form-check-input"], ["for", "editRoleActif", 1, "form-check-label"], ["type", "button", "data-bs-dismiss", "modal", 1, "btn", "btn-outline-white", 3, "click"], ["id", "delete_modal", 1, "modal", "fade"], [1, "modal-dialog", "modal-dialog-centered", "modal-sm"], [1, "modal-body", "text-center"], ["src", "assets/img/icons/delete.svg", "alt", "img"], [1, "mb-1"], [1, "d-flex", "justify-content-center"], ["href", "javascript:void(0);", "data-bs-dismiss", "modal", 1, "btn", "btn-outline-white", "me-3"], ["href", "javascript:void(0);", "data-bs-dismiss", "modal", 1, "btn", "btn-primary"], ["id", "copy_modal", 1, "modal", "fade"], ["type", "text", "formControlName", "newRoleCode", 1, "form-control", 3, "placeholder"], ["type", "text", "formControlName", "newRoleNom", 1, "form-control", 3, "placeholder"], [1, "text-muted", "small"], [1, "isax", "isax-info-circle", "me-1"], [1, "text-center", "py-5"], ["role", "status", 1, "spinner-border", "text-primary"], [1, "visually-hidden"], [1, "mt-2"], ["role", "alert", 1, "alert", "alert-danger"], [1, "isax", "isax-danger", "me-2"], ["type", "button", 1, "btn", "btn-sm", "btn-outline-danger", "ms-2", 3, "click"], ["role", "alert", 1, "alert", "alert-success", "alert-dismissible", "fade", "show"], [1, "isax", "isax-tick-circle", "me-2"], ["type", "button", "data-bs-dismiss", "alert", "aria-label", "Close", 1, "btn-close"], [1, "table-responsive", "table-nowrap"], [1, "table", "border", "mb-0"], [1, "table-light"], [1, "no-sort"], [4, "ngFor", "ngForOf"], [4, "ngIf"], [4, "ngIf", "ngIfElse"], [1, "btn", "btn-outline-white", "d-inline-flex", "align-items-center", 3, "routerLink"], [1, "isax", "isax-shield-tick", "me-1"], [1, "action-item"], ["href", "javascript:void(0);", "data-bs-toggle", "dropdown"], [1, "isax", "isax-more"], ["href", "javascript:void(0);", "data-bs-toggle", "modal", "data-bs-target", "#edit_modal", 1, "dropdown-item", "d-flex", "align-items-center", 3, "click"], [1, "isax", "isax-edit", "me-2"], ["href", "javascript:void(0);", "data-bs-toggle", "modal", "data-bs-target", "#copy_modal", 1, "dropdown-item", "d-flex", "align-items-center", 3, "click"], [1, "isax", "isax-copy", "me-2"], ["href", "javascript:void(0);", "data-bs-toggle", "modal", "data-bs-target", "#delete_modal", 1, "dropdown-item", "d-flex", "align-items-center"], [1, "isax", "isax-trash", "me-2"], ["colspan", "8", 1, "text-center", "py-4"], [1, "isax", "isax-user-square", "fs-24", "text-muted", "mb-2", "d-block"], [1, "text-muted", "mb-0"], [1, "text-danger", "small", "mt-1"], [1, "spinner-border", "spinner-border-sm", "me-1"]], template: function RolesPermissionsComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 1)(1, "div", 2)(2, "div")(3, "h6");
      \u0275\u0275text(4);
      \u0275\u0275pipe(5, "translate");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(6, "div", 3)(7, "div", 4)(8, "a", 5);
      \u0275\u0275element(9, "i", 6);
      \u0275\u0275text(10);
      \u0275\u0275pipe(11, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(12, "ul", 7)(13, "li")(14, "a", 8);
      \u0275\u0275text(15);
      \u0275\u0275pipe(16, "translate");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(17, "li")(18, "a", 8);
      \u0275\u0275text(19);
      \u0275\u0275pipe(20, "translate");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(21, "div")(22, "a", 9);
      \u0275\u0275element(23, "i", 10);
      \u0275\u0275text(24);
      \u0275\u0275pipe(25, "translate");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(26, "div", 11)(27, "div", 12)(28, "div", 13)(29, "span", 14);
      \u0275\u0275element(30, "i", 15);
      \u0275\u0275elementEnd();
      \u0275\u0275element(31, "input", 16);
      \u0275\u0275pipe(32, "translate");
      \u0275\u0275elementEnd()()();
      \u0275\u0275template(33, RolesPermissionsComponent_div_33_Template, 7, 3, "div", 17)(34, RolesPermissionsComponent_div_34_Template, 6, 4, "div", 18)(35, RolesPermissionsComponent_div_35_Template, 5, 3, "div", 19)(36, RolesPermissionsComponent_div_36_Template, 27, 20, "div", 20);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(37, "div", 21)(38, "div", 22)(39, "div", 23)(40, "div", 24)(41, "h4", 25);
      \u0275\u0275text(42);
      \u0275\u0275pipe(43, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(44, "button", 26);
      \u0275\u0275element(45, "i", 27);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(46, "form", 28);
      \u0275\u0275listener("ngSubmit", function RolesPermissionsComponent_Template_form_ngSubmit_46_listener() {
        return ctx.onSubmit();
      });
      \u0275\u0275elementStart(47, "div", 29)(48, "div", 30)(49, "label", 31);
      \u0275\u0275text(50);
      \u0275\u0275pipe(51, "translate");
      \u0275\u0275elementStart(52, "span", 32);
      \u0275\u0275text(53, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(54, "input", 33);
      \u0275\u0275pipe(55, "translate");
      \u0275\u0275template(56, RolesPermissionsComponent_div_56_Template, 2, 1, "div", 34);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(57, "div", 30)(58, "label", 31);
      \u0275\u0275text(59);
      \u0275\u0275pipe(60, "translate");
      \u0275\u0275elementStart(61, "span", 32);
      \u0275\u0275text(62, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(63, "input", 35);
      \u0275\u0275pipe(64, "translate");
      \u0275\u0275template(65, RolesPermissionsComponent_div_65_Template, 2, 1, "div", 34);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(66, "div", 30)(67, "label", 31);
      \u0275\u0275text(68);
      \u0275\u0275pipe(69, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275element(70, "textarea", 36);
      \u0275\u0275pipe(71, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(72, "div", 30)(73, "label", 31);
      \u0275\u0275text(74);
      \u0275\u0275pipe(75, "translate");
      \u0275\u0275elementStart(76, "span", 32);
      \u0275\u0275text(77, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(78, "input", 37);
      \u0275\u0275template(79, RolesPermissionsComponent_div_79_Template, 2, 1, "div", 34);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(80, "div", 38)(81, "div", 39);
      \u0275\u0275element(82, "input", 40);
      \u0275\u0275elementStart(83, "label", 41);
      \u0275\u0275text(84);
      \u0275\u0275pipe(85, "translate");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(86, "div", 42)(87, "button", 43);
      \u0275\u0275text(88);
      \u0275\u0275pipe(89, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(90, "button", 44);
      \u0275\u0275template(91, RolesPermissionsComponent_span_91_Template, 1, 0, "span", 45);
      \u0275\u0275text(92);
      \u0275\u0275pipe(93, "translate");
      \u0275\u0275pipe(94, "translate");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(95, "div", 46)(96, "div", 22)(97, "div", 23)(98, "div", 24)(99, "h4", 25);
      \u0275\u0275text(100);
      \u0275\u0275pipe(101, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(102, "button", 47);
      \u0275\u0275listener("click", function RolesPermissionsComponent_Template_button_click_102_listener() {
        return ctx.closeEditModal();
      });
      \u0275\u0275element(103, "i", 27);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(104, "form", 28);
      \u0275\u0275listener("ngSubmit", function RolesPermissionsComponent_Template_form_ngSubmit_104_listener() {
        return ctx.onEditSubmit();
      });
      \u0275\u0275elementStart(105, "div", 29);
      \u0275\u0275template(106, RolesPermissionsComponent_div_106_Template, 5, 3, "div", 19)(107, RolesPermissionsComponent_div_107_Template, 3, 1, "div", 18);
      \u0275\u0275elementStart(108, "div", 30)(109, "label", 31);
      \u0275\u0275text(110);
      \u0275\u0275pipe(111, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275element(112, "input", 48);
      \u0275\u0275elementStart(113, "p", 49);
      \u0275\u0275text(114);
      \u0275\u0275pipe(115, "translate");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(116, "div", 30)(117, "label", 31);
      \u0275\u0275text(118);
      \u0275\u0275pipe(119, "translate");
      \u0275\u0275elementStart(120, "span", 32);
      \u0275\u0275text(121, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(122, "input", 35);
      \u0275\u0275pipe(123, "translate");
      \u0275\u0275template(124, RolesPermissionsComponent_div_124_Template, 2, 1, "div", 34);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(125, "div", 30)(126, "label", 31);
      \u0275\u0275text(127);
      \u0275\u0275pipe(128, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275element(129, "textarea", 36);
      \u0275\u0275pipe(130, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(131, "div", 30)(132, "label", 31);
      \u0275\u0275text(133);
      \u0275\u0275pipe(134, "translate");
      \u0275\u0275elementStart(135, "span", 32);
      \u0275\u0275text(136, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(137, "input", 37);
      \u0275\u0275template(138, RolesPermissionsComponent_div_138_Template, 2, 1, "div", 34);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(139, "div", 38)(140, "div", 39);
      \u0275\u0275element(141, "input", 50);
      \u0275\u0275elementStart(142, "label", 51);
      \u0275\u0275text(143);
      \u0275\u0275pipe(144, "translate");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(145, "div", 42)(146, "button", 52);
      \u0275\u0275listener("click", function RolesPermissionsComponent_Template_button_click_146_listener() {
        return ctx.closeEditModal();
      });
      \u0275\u0275text(147);
      \u0275\u0275pipe(148, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(149, "button", 44);
      \u0275\u0275template(150, RolesPermissionsComponent_span_150_Template, 1, 0, "span", 45);
      \u0275\u0275text(151);
      \u0275\u0275pipe(152, "translate");
      \u0275\u0275pipe(153, "translate");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(154, "div", 53)(155, "div", 54)(156, "div", 23)(157, "div", 55)(158, "div", 30);
      \u0275\u0275element(159, "img", 56);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(160, "h6", 57);
      \u0275\u0275text(161);
      \u0275\u0275pipe(162, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(163, "p", 30);
      \u0275\u0275text(164);
      \u0275\u0275pipe(165, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(166, "div", 58)(167, "a", 59);
      \u0275\u0275text(168);
      \u0275\u0275pipe(169, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(170, "a", 60);
      \u0275\u0275text(171);
      \u0275\u0275pipe(172, "translate");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(173, "div", 61)(174, "div", 22)(175, "div", 23)(176, "div", 24)(177, "h4", 25);
      \u0275\u0275text(178);
      \u0275\u0275pipe(179, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(180, "button", 47);
      \u0275\u0275listener("click", function RolesPermissionsComponent_Template_button_click_180_listener() {
        return ctx.closeCopyModal();
      });
      \u0275\u0275element(181, "i", 27);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(182, "form", 28);
      \u0275\u0275listener("ngSubmit", function RolesPermissionsComponent_Template_form_ngSubmit_182_listener() {
        return ctx.onCopySubmit();
      });
      \u0275\u0275elementStart(183, "div", 29);
      \u0275\u0275template(184, RolesPermissionsComponent_div_184_Template, 5, 3, "div", 19)(185, RolesPermissionsComponent_div_185_Template, 3, 1, "div", 18);
      \u0275\u0275elementStart(186, "div", 30)(187, "label", 31);
      \u0275\u0275text(188);
      \u0275\u0275pipe(189, "translate");
      \u0275\u0275elementStart(190, "span", 32);
      \u0275\u0275text(191, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(192, "input", 62);
      \u0275\u0275pipe(193, "translate");
      \u0275\u0275template(194, RolesPermissionsComponent_div_194_Template, 2, 1, "div", 34);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(195, "div", 30)(196, "label", 31);
      \u0275\u0275text(197);
      \u0275\u0275pipe(198, "translate");
      \u0275\u0275elementStart(199, "span", 32);
      \u0275\u0275text(200, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(201, "input", 63);
      \u0275\u0275pipe(202, "translate");
      \u0275\u0275template(203, RolesPermissionsComponent_div_203_Template, 2, 1, "div", 34);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(204, "div", 38)(205, "p", 64);
      \u0275\u0275element(206, "i", 65);
      \u0275\u0275text(207);
      \u0275\u0275pipe(208, "translate");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(209, "div", 42)(210, "button", 52);
      \u0275\u0275listener("click", function RolesPermissionsComponent_Template_button_click_210_listener() {
        return ctx.closeCopyModal();
      });
      \u0275\u0275text(211);
      \u0275\u0275pipe(212, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(213, "button", 44);
      \u0275\u0275template(214, RolesPermissionsComponent_span_214_Template, 1, 0, "span", 45);
      \u0275\u0275text(215);
      \u0275\u0275pipe(216, "translate");
      \u0275\u0275pipe(217, "translate");
      \u0275\u0275elementEnd()()()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(5, 73, "rolesPermissions.title"));
      \u0275\u0275advance(6);
      \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(11, 75, "rolesPermissions.export"), " ");
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(16, 77, "rolesPermissions.exportPdf"));
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(20, 79, "rolesPermissions.exportExcel"));
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(25, 81, "rolesPermissions.newRole"), " ");
      \u0275\u0275advance(7);
      \u0275\u0275property("placeholder", \u0275\u0275interpolate(\u0275\u0275pipeBind1(32, 83, "rolesPermissions.search")));
      \u0275\u0275advance(2);
      \u0275\u0275property("ngIf", ctx.loading && ctx.roles.length === 0);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.error && ctx.roles.length === 0);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.success);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.loading || ctx.roles.length > 0);
      \u0275\u0275advance(6);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(43, 85, "permissions.roleForm.addTitle"));
      \u0275\u0275advance(4);
      \u0275\u0275property("formGroup", ctx.roleForm);
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(51, 87, "permissions.roleForm.roleCode"), " ");
      \u0275\u0275advance(4);
      \u0275\u0275property("placeholder", \u0275\u0275interpolate(\u0275\u0275pipeBind1(55, 89, "permissions.roleForm.roleCodePlaceholder")));
      \u0275\u0275advance(2);
      \u0275\u0275property("ngIf", ctx.isFieldInvalid("roleCode"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(60, 91, "permissions.roleForm.roleName"), " ");
      \u0275\u0275advance(4);
      \u0275\u0275property("placeholder", \u0275\u0275interpolate(\u0275\u0275pipeBind1(64, 93, "permissions.roleForm.roleNamePlaceholder")));
      \u0275\u0275advance(2);
      \u0275\u0275property("ngIf", ctx.isFieldInvalid("roleNom"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(69, 95, "permissions.roleForm.description"));
      \u0275\u0275advance(2);
      \u0275\u0275property("placeholder", \u0275\u0275interpolate(\u0275\u0275pipeBind1(71, 97, "permissions.roleForm.descriptionPlaceholder")));
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(75, 99, "permissions.roleForm.level"), " ");
      \u0275\u0275advance(5);
      \u0275\u0275property("ngIf", ctx.isFieldInvalid("roleNiveau"));
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(85, 101, "permissions.roleForm.active"));
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(89, 103, "permissions.roleForm.cancel"));
      \u0275\u0275advance(2);
      \u0275\u0275property("disabled", ctx.roleForm.invalid || ctx.loading);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.loading);
      \u0275\u0275advance();
      \u0275\u0275textInterpolate1(" ", ctx.loading ? \u0275\u0275pipeBind1(93, 105, "permissions.roleForm.saving") : \u0275\u0275pipeBind1(94, 107, "permissions.roleForm.create"), " ");
      \u0275\u0275advance(8);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(101, 109, "permissions.roleForm.editTitle"));
      \u0275\u0275advance(4);
      \u0275\u0275property("formGroup", ctx.editForm);
      \u0275\u0275advance(2);
      \u0275\u0275property("ngIf", ctx.editSuccess);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.editError);
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(111, 111, "permissions.roleForm.roleCode"));
      \u0275\u0275advance(2);
      \u0275\u0275property("value", (ctx.selectedRole == null ? null : ctx.selectedRole.roleCode) || "");
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(115, 113, "permissions.roleForm.codeReadonly"));
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(119, 115, "permissions.roleForm.roleName"), " ");
      \u0275\u0275advance(4);
      \u0275\u0275property("placeholder", \u0275\u0275interpolate(\u0275\u0275pipeBind1(123, 117, "permissions.roleForm.roleNamePlaceholder")));
      \u0275\u0275advance(2);
      \u0275\u0275property("ngIf", ctx.isEditFieldInvalid("roleNom"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(128, 119, "permissions.roleForm.description"));
      \u0275\u0275advance(2);
      \u0275\u0275property("placeholder", \u0275\u0275interpolate(\u0275\u0275pipeBind1(130, 121, "permissions.roleForm.descriptionPlaceholder")));
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(134, 123, "permissions.roleForm.level"), " ");
      \u0275\u0275advance(5);
      \u0275\u0275property("ngIf", ctx.isEditFieldInvalid("roleNiveau"));
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(144, 125, "permissions.roleForm.active"));
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(148, 127, "permissions.roleForm.cancel"));
      \u0275\u0275advance(2);
      \u0275\u0275property("disabled", ctx.editForm.invalid || ctx.loading);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.loading);
      \u0275\u0275advance();
      \u0275\u0275textInterpolate1(" ", ctx.loading ? \u0275\u0275pipeBind1(152, 129, "permissions.roleForm.saving") : \u0275\u0275pipeBind1(153, 131, "permissions.roleForm.save"), " ");
      \u0275\u0275advance(10);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(162, 133, "permissions.roleForm.deleteTitle"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(165, 135, "permissions.roleForm.deleteConfirm"));
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(169, 137, "permissions.roleForm.cancel"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(172, 139, "permissions.roleForm.delete"));
      \u0275\u0275advance(7);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(179, 141, "permissions.roleForm.copyTitle"));
      \u0275\u0275advance(4);
      \u0275\u0275property("formGroup", ctx.copyForm);
      \u0275\u0275advance(2);
      \u0275\u0275property("ngIf", ctx.copySuccess);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.copyError);
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(189, 143, "permissions.roleForm.roleCode"), " ");
      \u0275\u0275advance(4);
      \u0275\u0275property("placeholder", \u0275\u0275interpolate(\u0275\u0275pipeBind1(193, 145, "permissions.roleForm.roleCodePlaceholder")));
      \u0275\u0275advance(2);
      \u0275\u0275property("ngIf", ctx.isCopyFieldInvalid("newRoleCode"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(198, 147, "permissions.roleForm.roleName"), " ");
      \u0275\u0275advance(4);
      \u0275\u0275property("placeholder", \u0275\u0275interpolate(\u0275\u0275pipeBind1(202, 149, "permissions.roleForm.roleNamePlaceholder")));
      \u0275\u0275advance(2);
      \u0275\u0275property("ngIf", ctx.isCopyFieldInvalid("newRoleNom"));
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(208, 151, "permissions.roleForm.copyInfo"), " ");
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(212, 153, "permissions.roleForm.cancel"));
      \u0275\u0275advance(2);
      \u0275\u0275property("disabled", ctx.copyForm.invalid || ctx.loading);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.loading);
      \u0275\u0275advance();
      \u0275\u0275textInterpolate1(" ", ctx.loading ? \u0275\u0275pipeBind1(216, 155, "permissions.roleForm.saving") : \u0275\u0275pipeBind1(217, 157, "permissions.roleForm.copy"), " ");
    }
  }, dependencies: [CommonModule, NgForOf, NgIf, RouterLink, ReactiveFormsModule, \u0275NgNoValidate, DefaultValueAccessor, NumberValueAccessor, CheckboxControlValueAccessor, NgControlStatus, NgControlStatusGroup, MinValidator, FormGroupDirective, FormControlName, TranslatePipe], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RolesPermissionsComponent, [{
    type: Component,
    args: [{ selector: "app-roles-permissions", imports: [CommonModule, RouterLink, ReactiveFormsModule, TranslatePipe], providers: [
      {
        provide: ROLE_REPOSITORY,
        useClass: HttpRoleRepository
      },
      {
        provide: CREATE_ROLE_USE_CASE,
        useClass: CreateRoleUseCaseImpl
      },
      {
        provide: GET_ROLES_USE_CASE,
        useClass: GetRolesUseCaseImpl
      },
      {
        provide: COPY_ROLE_USE_CASE,
        useClass: CopyRoleUseCaseImpl
      }
    ], template: `<!-- Start Content -->
<div class="content-two">

    <!-- Page Header -->
    <div class="d-flex d-block align-items-center justify-content-between flex-wrap gap-3 mb-3">
        <div>
            <h6>{{ 'rolesPermissions.title' | translate }}</h6>
        </div>
        <div class="d-flex my-xl-auto right-content align-items-center flex-wrap gap-2">
            <div class="dropdown">
                <a href="javascript:void(0);" class="btn btn-outline-white d-inline-flex align-items-center" data-bs-toggle="dropdown">
                    <i class="isax isax-export-1 me-1"></i>{{ 'rolesPermissions.export' | translate }}
                </a>
                <ul class="dropdown-menu">
                    <li>
                        <a class="dropdown-item" href="javascript:void(0);">{{ 'rolesPermissions.exportPdf' | translate }}</a>
                    </li>
                    <li>
                        <a class="dropdown-item" href="javascript:void(0);">{{ 'rolesPermissions.exportExcel' | translate }}</a>
                    </li>
                </ul>
            </div>
            <div>
                <a href="javascript:void(0);" class="btn btn-primary d-flex align-items-center" data-bs-toggle="modal" data-bs-target="#add_modal">
                    <i class="isax isax-add-circle5 me-1"></i>{{ 'rolesPermissions.newRole' | translate }}
                </a>
            </div>
        </div>
    </div>
    <!-- End Page Header -->

    <!-- start row -->
    <div class="row">
        <div class="col-md-3">
            <div class="input-group mb-3">
                <span class="input-group-text bg-white border-end-0">
                    <i class="isax isax-search-normal fs-12"></i>
                </span>
                <input type="text" class="form-control border-start-0 ps-0 bg-white" placeholder="{{ 'rolesPermissions.search' | translate }}">
            </div>
        </div><!-- end col -->
    </div>
    <!-- end row -->

    <!-- Loading State -->
    <div *ngIf="loading && roles.length === 0" class="text-center py-5">
        <div class="spinner-border text-primary" role="status">
            <span class="visually-hidden">Loading...</span>
        </div>
        <p class="mt-2">{{ 'rolesPermissions.loading' | translate }}</p>
    </div>

    <!-- Error State -->
    <div *ngIf="error && roles.length === 0" class="alert alert-danger" role="alert">
        <i class="isax isax-danger me-2"></i> {{ error }}
        <button type="button" class="btn btn-sm btn-outline-danger ms-2" (click)="loadRoles()">{{ 'common.retry' | translate }}</button>
    </div>

    <!-- Success Message -->
    <div *ngIf="success" class="alert alert-success alert-dismissible fade show" role="alert">
        <i class="isax isax-tick-circle me-2"></i> {{ 'rolesPermissions.saveSuccess' | translate }}
        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
    </div>

    <!-- Table List -->
    <div *ngIf="!loading || roles.length > 0" class="table-responsive table-nowrap">
        <table class="table border mb-0">
            <thead class="table-light">
                <tr>
                    <th>{{ 'rolesPermissions.roleName' | translate }}</th>
                    <th>{{ 'rolesPermissions.roleName' | translate }}</th>
                    <th>{{ 'rolesPermissions.description' | translate }}</th>
                    <th>{{ 'rolesPermissions.level' | translate }}</th>
                    <th>{{ 'rolesPermissions.status' | translate }}</th>
                    <th>{{ 'rolesPermissions.createdDate' | translate }}</th>
                    <th class="no-sort"></th>
                    <th class="no-sort"></th>
                </tr>
            </thead>
            <tbody>
                <tr *ngFor="let role of roles">
                    <td>{{ role.roleCode }}</td>
                    <td>{{ role.roleNom }}</td>
                    <td>
                        <span *ngIf="role.roleDescription; else noDescription"
                              [attr.data-bs-toggle]="role.roleDescription.length > 50 ? 'popover' : null"
                              [attr.data-bs-trigger]="role.roleDescription.length > 50 ? 'hover focus' : null"
                              [attr.data-bs-placement]="role.roleDescription.length > 50 ? 'top' : null"
                              [attr.data-bs-content]="role.roleDescription.length > 50 ? role.roleDescription : null"
                              [attr.title]="role.roleDescription.length > 50 ? role.roleDescription : null">
                            {{ truncateDescription(role.roleDescription) }}
                        </span>
                        <ng-template #noDescription>-</ng-template>
                    </td>
                    <td>{{ role.roleNiveau }}</td>
                    <td>
                        <span [class]="getRoleStatusClass(role)">{{ getRoleStatus(role) }}</span>
                    </td>
                    <td>{{ formatDate(role.roleDateCreation) }}</td>
                    <td>
                        <a [routerLink]="routes.permission(role.id)" class="btn btn-outline-white d-inline-flex align-items-center">
                            <i class="isax isax-shield-tick me-1"></i> {{ 'rolesPermissions.permissions' | translate }}
                        </a>
                    </td>
                    <td class="action-item">
                        <a href="javascript:void(0);" data-bs-toggle="dropdown">
                            <i class="isax isax-more"></i>
                        </a>
                        <ul class="dropdown-menu">
                            <li>
                                <a href="javascript:void(0);" class="dropdown-item d-flex align-items-center" (click)="openEditModal(role)" data-bs-toggle="modal" data-bs-target="#edit_modal">
                                    <i class="isax isax-edit me-2"></i>{{ 'rolesPermissions.edit' | translate }}
                                </a>
                            </li>
                            <li>
                                <a href="javascript:void(0);" class="dropdown-item d-flex align-items-center" (click)="openCopyModal(role)" data-bs-toggle="modal" data-bs-target="#copy_modal">
                                    <i class="isax isax-copy me-2"></i>{{ 'rolesPermissions.copy' | translate }}
                                </a>
                            </li>
                            <li>
                                <a href="javascript:void(0);" class="dropdown-item d-flex align-items-center" data-bs-toggle="modal" data-bs-target="#delete_modal">
                                    <i class="isax isax-trash me-2"></i>{{ 'rolesPermissions.delete' | translate }}
                                </a>
                            </li>
                        </ul>
                    </td>
                </tr>
                <tr *ngIf="roles.length === 0 && !loading">
                    <td colspan="8" class="text-center py-4">
                        <i class="isax isax-user-square fs-24 text-muted mb-2 d-block"></i>
                        <p class="text-muted mb-0">{{ 'rolesPermissions.noRoles' | translate }}</p>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
    <!-- /Table List -->

</div>
<!-- End Content -->

<!-- Start Add Modal -->
<div id="add_modal" class="modal fade">
    <div class="modal-dialog modal-dialog-centered modal-md">
        <div class="modal-content">
            <!-- Start modal header -->
            <div class="modal-header">
                <h4 class="modal-title">{{ 'permissions.roleForm.addTitle' | translate }}</h4>
                <button type="button" class="btn-close btn-close-modal custom-btn-close" data-bs-dismiss="modal" aria-label="Close">
                    <i class="fa-solid fa-x"></i>
                </button>
            </div>
            <!-- End modal header -->

            <form [formGroup]="roleForm" (ngSubmit)="onSubmit()">
                <div class="modal-body">
                    <div class="mb-3">
                        <label class="form-label">{{ 'permissions.roleForm.roleCode' | translate }} <span class="text-danger">*</span></label>
                        <input type="text" class="form-control" formControlName="roleCode" placeholder="{{ 'permissions.roleForm.roleCodePlaceholder' | translate }}">
                        <div *ngIf="isFieldInvalid('roleCode')" class="text-danger small mt-1">
                            {{ getFieldError('roleCode') }}
                        </div>
                    </div>
                    <div class="mb-3">
                        <label class="form-label">{{ 'permissions.roleForm.roleName' | translate }} <span class="text-danger">*</span></label>
                        <input type="text" class="form-control" formControlName="roleNom" placeholder="{{ 'permissions.roleForm.roleNamePlaceholder' | translate }}">
                        <div *ngIf="isFieldInvalid('roleNom')" class="text-danger small mt-1">
                            {{ getFieldError('roleNom') }}
                        </div>
                    </div>
                    <div class="mb-3">
                        <label class="form-label">{{ 'permissions.roleForm.description' | translate }}</label>
                        <textarea class="form-control" formControlName="roleDescription" rows="2" placeholder="{{ 'permissions.roleForm.descriptionPlaceholder' | translate }}"></textarea>
                    </div>
                    <div class="mb-3">
                        <label class="form-label">{{ 'permissions.roleForm.level' | translate }} <span class="text-danger">*</span></label>
                        <input type="number" class="form-control" formControlName="roleNiveau" min="1">
                        <div *ngIf="isFieldInvalid('roleNiveau')" class="text-danger small mt-1">
                            {{ getFieldError('roleNiveau') }}
                        </div>
                    </div>
                    <div class="mb-0">
                        <div class="form-check form-switch">
                            <input class="form-check-input" type="checkbox" role="switch" formControlName="roleActif" id="roleActif">
                            <label class="form-check-label" for="roleActif">{{ 'permissions.roleForm.active' | translate }}</label>
                        </div>
                    </div>
                </div>
                <div class="modal-footer d-flex align-items-center justify-content-between gap-1">
                    <button type="button" class="btn btn-outline-white" data-bs-dismiss="modal">{{ 'permissions.roleForm.cancel' | translate }}</button>
                    <button type="submit" class="btn btn-primary" [disabled]="roleForm.invalid || loading">
                        <span *ngIf="loading" class="spinner-border spinner-border-sm me-1"></span>
                        {{ loading ? ('permissions.roleForm.saving' | translate) : ('permissions.roleForm.create' | translate) }}
                    </button>
                </div>
            </form>
        </div><!-- End modal content-->
    </div><!-- End modal dialog-->
</div>
<!-- / End Add Modal -->

<!-- Start Edit Modal -->
<div id="edit_modal" class="modal fade">
    <div class="modal-dialog modal-dialog-centered modal-md">
        <div class="modal-content">
            <!-- Start modal header -->
            <div class="modal-header">
                <h4 class="modal-title">{{ 'permissions.roleForm.editTitle' | translate }}</h4>
                <button type="button" class="btn-close btn-close-modal custom-btn-close" data-bs-dismiss="modal" aria-label="Close" (click)="closeEditModal()">
                    <i class="fa-solid fa-x"></i>
                </button>
            </div>
            <!-- End modal header -->

            <form [formGroup]="editForm" (ngSubmit)="onEditSubmit()">
                <div class="modal-body">
                    <!-- Success Message -->
                    <div *ngIf="editSuccess" class="alert alert-success alert-dismissible fade show" role="alert">
                        <i class="isax isax-tick-circle me-2"></i> {{ 'permissions.roleForm.successEdit' | translate }}
                        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                    </div>

                    <!-- Error Message -->
                    <div *ngIf="editError" class="alert alert-danger" role="alert">
                        <i class="isax isax-danger me-2"></i> {{ editError }}
                    </div>

                    <div class="mb-3">
                        <label class="form-label">{{ 'permissions.roleForm.roleCode' | translate }}</label>
                        <input type="text" class="form-control bg-light" [value]="selectedRole?.roleCode || ''" readonly>
                        <p class="text-muted small mt-1">{{ 'permissions.roleForm.codeReadonly' | translate }}</p>
                    </div>
                    <div class="mb-3">
                        <label class="form-label">{{ 'permissions.roleForm.roleName' | translate }} <span class="text-danger">*</span></label>
                        <input type="text" class="form-control" formControlName="roleNom" placeholder="{{ 'permissions.roleForm.roleNamePlaceholder' | translate }}">
                        <div *ngIf="isEditFieldInvalid('roleNom')" class="text-danger small mt-1">
                            {{ getEditFieldError('roleNom') }}
                        </div>
                    </div>
                    <div class="mb-3">
                        <label class="form-label">{{ 'permissions.roleForm.description' | translate }}</label>
                        <textarea class="form-control" formControlName="roleDescription" rows="2" placeholder="{{ 'permissions.roleForm.descriptionPlaceholder' | translate }}"></textarea>
                    </div>
                    <div class="mb-3">
                        <label class="form-label">{{ 'permissions.roleForm.level' | translate }} <span class="text-danger">*</span></label>
                        <input type="number" class="form-control" formControlName="roleNiveau" min="1">
                        <div *ngIf="isEditFieldInvalid('roleNiveau')" class="text-danger small mt-1">
                            {{ getEditFieldError('roleNiveau') }}
                        </div>
                    </div>
                    <div class="mb-0">
                        <div class="form-check form-switch">
                            <input class="form-check-input" type="checkbox" role="switch" formControlName="roleActif" id="editRoleActif">
                            <label class="form-check-label" for="editRoleActif">{{ 'permissions.roleForm.active' | translate }}</label>
                        </div>
                    </div>
                </div>
                <div class="modal-footer d-flex align-items-center justify-content-between gap-1">
                    <button type="button" class="btn btn-outline-white" data-bs-dismiss="modal" (click)="closeEditModal()">{{ 'permissions.roleForm.cancel' | translate }}</button>
                    <button type="submit" class="btn btn-primary" [disabled]="editForm.invalid || loading">
                        <span *ngIf="loading" class="spinner-border spinner-border-sm me-1"></span>
                        {{ loading ? ('permissions.roleForm.saving' | translate) : ('permissions.roleForm.save' | translate) }}
                    </button>
                </div>
            </form>
        </div><!-- End modal content-->
    </div><!-- End modal dialog-->
</div>
<!-- / End Edit Modal -->

<!-- Start Delete Modal -->
<div class="modal fade" id="delete_modal">
    <div class="modal-dialog modal-dialog-centered modal-sm">
        <div class="modal-content">
                <div class="modal-body text-center">
                    <div class="mb-3">
                        <img src="assets/img/icons/delete.svg" alt="img">
                    </div>
                    <h6 class="mb-1">{{ 'permissions.roleForm.deleteTitle' | translate }}</h6>
                    <p class="mb-3">{{ 'permissions.roleForm.deleteConfirm' | translate }}</p>
                    <div class="d-flex justify-content-center">
                        <a href="javascript:void(0);" class="btn btn-outline-white me-3" data-bs-dismiss="modal">{{ 'permissions.roleForm.cancel' | translate }}</a>
                        <a href="javascript:void(0);" class="btn btn-primary" data-bs-dismiss="modal">{{ 'permissions.roleForm.delete' | translate }}</a>
                    </div>
            </div><!-- End modal body -->
        </div><!-- End modal content-->
    </div><!-- End modal dialog-->
</div>
<!-- / End Delete Modal -->

<!-- Start Copy Modal -->
<div id="copy_modal" class="modal fade">
    <div class="modal-dialog modal-dialog-centered modal-md">
        <div class="modal-content">
            <!-- Start modal header -->
            <div class="modal-header">
                <h4 class="modal-title">{{ 'permissions.roleForm.copyTitle' | translate }}</h4>
                <button type="button" class="btn-close btn-close-modal custom-btn-close" data-bs-dismiss="modal" aria-label="Close" (click)="closeCopyModal()">
                    <i class="fa-solid fa-x"></i>
                </button>
            </div>
            <!-- End modal header -->

            <form [formGroup]="copyForm" (ngSubmit)="onCopySubmit()">
                <div class="modal-body">
                    <!-- Success Message -->
                    <div *ngIf="copySuccess" class="alert alert-success alert-dismissible fade show" role="alert">
                        <i class="isax isax-tick-circle me-2"></i> {{ 'permissions.roleForm.successCopy' | translate }}
                        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                    </div>

                    <!-- Error Message -->
                    <div *ngIf="copyError" class="alert alert-danger" role="alert">
                        <i class="isax isax-danger me-2"></i> {{ copyError }}
                    </div>

                    <div class="mb-3">
                        <label class="form-label">{{ 'permissions.roleForm.roleCode' | translate }} <span class="text-danger">*</span></label>
                        <input type="text" class="form-control" formControlName="newRoleCode" placeholder="{{ 'permissions.roleForm.roleCodePlaceholder' | translate }}">
                        <div *ngIf="isCopyFieldInvalid('newRoleCode')" class="text-danger small mt-1">
                            {{ getCopyFieldError('newRoleCode') }}
                        </div>
                    </div>
                    <div class="mb-3">
                        <label class="form-label">{{ 'permissions.roleForm.roleName' | translate }} <span class="text-danger">*</span></label>
                        <input type="text" class="form-control" formControlName="newRoleNom" placeholder="{{ 'permissions.roleForm.roleNamePlaceholder' | translate }}">
                        <div *ngIf="isCopyFieldInvalid('newRoleNom')" class="text-danger small mt-1">
                            {{ getCopyFieldError('newRoleNom') }}
                        </div>
                    </div>
                    <div class="mb-0">
                        <p class="text-muted small">
                            <i class="isax isax-info-circle me-1"></i>
                            {{ 'permissions.roleForm.copyInfo' | translate }}
                        </p>
                    </div>
                </div>
                <div class="modal-footer d-flex align-items-center justify-content-between gap-1">
                    <button type="button" class="btn btn-outline-white" data-bs-dismiss="modal" (click)="closeCopyModal()">{{ 'permissions.roleForm.cancel' | translate }}</button>
                    <button type="submit" class="btn btn-primary" [disabled]="copyForm.invalid || loading">
                        <span *ngIf="loading" class="spinner-border spinner-border-sm me-1"></span>
                        {{ loading ? ('permissions.roleForm.saving' | translate) : ('permissions.roleForm.copy' | translate) }}
                    </button>
                </div>
            </form>
        </div><!-- End modal content-->
    </div><!-- End modal dialog-->
</div>
<!-- / End Copy Modal -->
` }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(RolesPermissionsComponent, { className: "RolesPermissionsComponent", filePath: "src/app/modules/manage-users/presentation/pages/roles-permissions/roles-permissions.component.ts", lineNumber: 46 });
})();
export {
  RolesPermissionsComponent
};
//# sourceMappingURL=chunk-RC63EIM5.js.map

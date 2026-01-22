import {
  DepartementService
} from "./chunk-TPM7FSTR.js";
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
  FormsModule,
  MaxLengthValidator,
  NgControlStatus,
  NgControlStatusGroup,
  NgModel,
  NgSelectOption,
  ReactiveFormsModule,
  SelectControlValueAccessor,
  Validators,
  ɵNgNoValidate,
  ɵNgSelectMultipleOption
} from "./chunk-NAWYXTZ5.js";
import "./chunk-YJY3UYMJ.js";
import "./chunk-AWXYRVJS.js";
import "./chunk-WOBWH5QA.js";
import "./chunk-KYBWVUSB.js";
import "./chunk-ZCJVS2AD.js";
import {
  CommonModule,
  NgClass,
  NgForOf,
  NgIf
} from "./chunk-LNSVVXVJ.js";
import {
  Component,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassMap,
  ɵɵclassProp,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵinterpolate,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵpureFunction3,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-HKG6HBOI.js";
import {
  __spreadValues
} from "./chunk-TXDUYLVM.js";

// src/app/modules/setting/domain/dto/departement.dto.ts
function formatDate(dateString) {
  if (!dateString)
    return "";
  const date = new Date(dateString);
  return date.toLocaleDateString("fr-FR", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit"
  });
}
function truncateText(text, maxLength) {
  if (!text)
    return "";
  if (text.length <= maxLength)
    return text;
  return text.substring(0, maxLength) + "...";
}
function getStatusBadge(actif) {
  return actif ? { label: "Actif", class: "badge bg-success-light text-success" } : { label: "Inactif", class: "badge bg-danger-light text-danger" };
}

// src/app/modules/setting/presentation/pages/general-settings/departement-settings/departement-settings.component.ts
var _c0 = (a0, a1, a2) => ({ start: a0, end: a1, total: a2 });
function DepartementSettingsComponent_div_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 57);
    \u0275\u0275element(1, "i", 58);
    \u0275\u0275text(2);
    \u0275\u0275elementStart(3, "button", 39);
    \u0275\u0275listener("click", function DepartementSettingsComponent_div_12_Template_button_click_3_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.successMessage = "");
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r1.successMessage, " ");
  }
}
function DepartementSettingsComponent_div_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 59);
    \u0275\u0275element(1, "i", 60);
    \u0275\u0275text(2);
    \u0275\u0275elementStart(3, "button", 39);
    \u0275\u0275listener("click", function DepartementSettingsComponent_div_13_Template_button_click_3_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.errorMessage = "");
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r1.errorMessage, " ");
  }
}
function DepartementSettingsComponent_div_88_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 61)(1, "div", 62)(2, "span", 63);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "p", 64);
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(4, 2, "common.loading"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(7, 4, "departementSettings.loader"));
  }
}
function DepartementSettingsComponent_div_89_tr_23_p_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 73);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "departementSettings.tryFilters"), " ");
  }
}
function DepartementSettingsComponent_div_89_tr_23_p_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 73);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "departementSettings.startCreating"), " ");
  }
}
function DepartementSettingsComponent_div_89_tr_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 69);
    \u0275\u0275element(2, "i", 70);
    \u0275\u0275elementStart(3, "p", 71);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275template(6, DepartementSettingsComponent_div_89_tr_23_p_6_Template, 3, 3, "p", 72)(7, DepartementSettingsComponent_div_89_tr_23_p_7_Template, 3, 3, "p", 72);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(5, 3, "departementSettings.noResults"));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r1.searchTerm || ctx_r1.filterSocieteId || ctx_r1.filterStatus !== void 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.searchTerm && !ctx_r1.filterSocieteId && ctx_r1.filterStatus === void 0);
  }
}
function DepartementSettingsComponent_div_89_tr_24_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td")(2, "div", 74)(3, "div", 75);
    \u0275\u0275element(4, "i", 17);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div")(6, "div", 76);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "small", 48);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(10, "td")(11, "span", 48);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "td");
    \u0275\u0275text(14);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "td")(16, "span", 77);
    \u0275\u0275text(17);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(18, "td");
    \u0275\u0275text(19);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "td", 67)(21, "div", 78)(22, "button", 79);
    \u0275\u0275element(23, "i", 80);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "ul", 81)(25, "li")(26, "a", 82);
    \u0275\u0275listener("click", function DepartementSettingsComponent_div_89_tr_24_Template_a_click_26_listener() {
      const departement_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.openEditModal(departement_r5));
    });
    \u0275\u0275element(27, "i", 83);
    \u0275\u0275text(28);
    \u0275\u0275pipe(29, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(30, "li")(31, "a", 82);
    \u0275\u0275listener("click", function DepartementSettingsComponent_div_89_tr_24_Template_a_click_31_listener() {
      const departement_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.toggleDepartementStatus(departement_r5));
    });
    \u0275\u0275element(32, "i");
    \u0275\u0275text(33);
    \u0275\u0275pipe(34, "translate");
    \u0275\u0275pipe(35, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(36, "li")(37, "a", 84);
    \u0275\u0275listener("click", function DepartementSettingsComponent_div_89_tr_24_Template_a_click_37_listener() {
      const departement_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.deleteDepartement(departement_r5));
    });
    \u0275\u0275element(38, "i", 85);
    \u0275\u0275text(39);
    \u0275\u0275pipe(40, "translate");
    \u0275\u0275elementEnd()()()()()();
  }
  if (rf & 2) {
    const departement_r5 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(departement_r5.nom);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("ID: ", departement_r5.id);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.truncateText(departement_r5.description || "Non renseign\xE9e", 60));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.getSocieteName(departement_r5.societeId));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngClass", ctx_r1.getStatusBadge(departement_r5.actif).class);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.getStatusBadge(departement_r5.actif).label, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.formatDate(departement_r5.dateCreation));
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(29, 12, "departementSettings.dropdownActions.edit"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275classMap(departement_r5.actif ? "fas fa-toggle-off me-2" : "fas fa-toggle-on me-2");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", departement_r5.actif ? \u0275\u0275pipeBind1(34, 14, "departementSettings.dropdownActions.deactivate") : \u0275\u0275pipeBind1(35, 16, "departementSettings.dropdownActions.activate"), " ");
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(40, 18, "departementSettings.dropdownActions.delete"), " ");
  }
}
function DepartementSettingsComponent_div_89_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 65)(1, "table", 66)(2, "thead")(3, "tr")(4, "th");
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
    \u0275\u0275elementStart(19, "th", 67);
    \u0275\u0275text(20);
    \u0275\u0275pipe(21, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(22, "tbody");
    \u0275\u0275template(23, DepartementSettingsComponent_div_89_tr_23_Template, 8, 5, "tr", 55)(24, DepartementSettingsComponent_div_89_tr_24_Template, 41, 20, "tr", 68);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(6, 8, "departementSettings.name"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(9, 10, "departementSettings.description"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(12, 12, "departementSettings.company"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(15, 14, "departementSettings.status"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(18, 16, "departementSettings.creationDate"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(21, 18, "departementSettings.actions"));
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", ctx_r1.paginatedDepartements.length === 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.paginatedDepartements);
  }
}
function DepartementSettingsComponent_div_90_li_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "li", 88)(1, "a", 89);
    \u0275\u0275listener("click", function DepartementSettingsComponent_div_90_li_9_Template_a_click_1_listener() {
      const page_r8 = \u0275\u0275restoreView(_r7).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.goToPage(page_r8));
    });
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const page_r8 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("active", page_r8 === ctx_r1.currentPage);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(page_r8 + 1);
  }
}
function DepartementSettingsComponent_div_90_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 86)(1, "div");
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "nav")(5, "ul", 87)(6, "li", 88)(7, "a", 89);
    \u0275\u0275listener("click", function DepartementSettingsComponent_div_90_Template_a_click_7_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.previousPage());
    });
    \u0275\u0275element(8, "i", 90);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(9, DepartementSettingsComponent_div_90_li_9_Template, 3, 3, "li", 91);
    \u0275\u0275elementStart(10, "li", 88)(11, "a", 89);
    \u0275\u0275listener("click", function DepartementSettingsComponent_div_90_Template_a_click_11_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.nextPage());
    });
    \u0275\u0275element(12, "i", 92);
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(3, 6, "departementSettings.paginationText", \u0275\u0275pureFunction3(9, _c0, ctx_r1.currentPage * ctx_r1.pageSize + 1, ctx_r1.Math.min((ctx_r1.currentPage + 1) * ctx_r1.pageSize, ctx_r1.totalElements), ctx_r1.totalElements)), " ");
    \u0275\u0275advance(4);
    \u0275\u0275classProp("disabled", ctx_r1.currentPage === 0);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngForOf", ctx_r1.paginationPages);
    \u0275\u0275advance();
    \u0275\u0275classProp("disabled", ctx_r1.currentPage >= ctx_r1.totalPages - 1);
  }
}
function DepartementSettingsComponent_div_102_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 93);
    \u0275\u0275element(1, "i", 60);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r1.errorMessage, " ");
  }
}
function DepartementSettingsComponent_div_112_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 94);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "departementSettings.modal.nameRequired"), " ");
  }
}
function DepartementSettingsComponent_div_113_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 94);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "departementSettings.modal.nameMinLength"), " ");
  }
}
function DepartementSettingsComponent_div_114_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 94);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "departementSettings.modal.nameMaxLength"), " ");
  }
}
function DepartementSettingsComponent_div_124_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 94);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "departementSettings.modal.descriptionMaxLength"), " ");
  }
}
function DepartementSettingsComponent_span_140_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.isEditMode ? \u0275\u0275pipeBind1(2, 1, "departementSettings.modal.update") : \u0275\u0275pipeBind1(3, 3, "departementSettings.modal.create"), " ");
  }
}
function DepartementSettingsComponent_span_141_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275element(1, "span", 95);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r1.isEditMode ? \u0275\u0275pipeBind1(3, 1, "departementSettings.modal.updating") : \u0275\u0275pipeBind1(4, 3, "departementSettings.modal.creating"), " ");
  }
}
function DepartementSettingsComponent_div_142_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 96);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275classProp("show", ctx_r1.showModal);
  }
}
var DepartementSettingsComponent = class _DepartementSettingsComponent {
  departementService;
  fb;
  // États
  isLoading = false;
  isSaving = false;
  isEditMode = false;
  showModal = false;
  // Données
  departements = [];
  paginatedDepartements = [];
  selectedDepartement = null;
  societes = [];
  // Filtres
  searchTerm = "";
  filterSocieteId;
  filterStatus;
  // Pagination
  currentPage = 0;
  pageSize = 10;
  totalElements = 0;
  totalPages = 0;
  // Statistiques
  statistics = {
    total: 0,
    actifs: 0,
    inactifs: 0
  };
  // Messages
  successMessage = "";
  errorMessage = "";
  // Formulaire
  departementForm;
  constructor(departementService, fb) {
    this.departementService = departementService;
    this.fb = fb;
    this.departementForm = this.createForm();
  }
  ngOnInit() {
    this.loadData();
    this.loadSocietes();
  }
  // Initialisation du formulaire
  createForm() {
    return this.fb.group({
      nom: ["", [Validators.required, Validators.minLength(3), Validators.maxLength(100)]],
      description: ["", [Validators.maxLength(500)]],
      societeId: [this.departementService.getCurrentUserSocieteId(), []],
      actif: [true]
    });
  }
  // Chargement des données
  loadData() {
    this.isLoading = true;
    this.errorMessage = "";
    this.departementService.getDepartementStatistics(this.filterSocieteId).subscribe({
      next: (stats) => {
        this.statistics = stats;
      },
      error: (error) => {
        console.error("Erreur lors du chargement des statistiques:", error);
      }
    });
    this.departementService.getDepartements(this.filterSocieteId, this.currentPage, this.pageSize, this.searchTerm, this.filterStatus).subscribe({
      next: (response) => {
        this.departements = response.content;
        this.paginatedDepartements = response.content;
        this.totalElements = response.totalElements;
        this.totalPages = response.totalPages;
        this.isLoading = false;
      },
      error: (error) => {
        this.errorMessage = "Erreur lors du chargement des d\xE9partements. Veuillez r\xE9essayer.";
        this.isLoading = false;
        console.error("Erreur:", error);
      }
    });
  }
  // Charger la liste des sociétés
  loadSocietes() {
    this.departementService.getSocietes().subscribe({
      next: (societes) => {
        this.societes = societes;
      },
      error: (error) => {
        console.error("Erreur lors du chargement des soci\xE9t\xE9s:", error);
      }
    });
  }
  // Gestion des filtres
  onSearch(term) {
    this.searchTerm = term;
    this.currentPage = 0;
    this.loadData();
  }
  onFilterChange() {
    this.currentPage = 0;
    this.loadData();
  }
  // Gestion de la pagination
  get paginationPages() {
    const pages = [];
    const maxPagesToShow = 5;
    let startPage = Math.max(0, this.currentPage - Math.floor(maxPagesToShow / 2));
    let endPage = Math.min(this.totalPages - 1, startPage + maxPagesToShow - 1);
    if (endPage - startPage + 1 < maxPagesToShow) {
      startPage = Math.max(0, endPage - maxPagesToShow + 1);
    }
    for (let i = startPage; i <= endPage; i++) {
      pages.push(i);
    }
    return pages;
  }
  goToPage(page) {
    if (page >= 0 && page < this.totalPages) {
      this.currentPage = page;
      this.loadData();
    }
  }
  previousPage() {
    if (this.currentPage > 0) {
      this.currentPage--;
      this.loadData();
    }
  }
  nextPage() {
    if (this.currentPage < this.totalPages - 1) {
      this.currentPage++;
      this.loadData();
    }
  }
  // Gestion des modals
  openCreateModal() {
    this.isEditMode = false;
    this.selectedDepartement = null;
    this.departementForm.reset({
      nom: "",
      description: "",
      societeId: null,
      actif: true
    });
    this.showModal = true;
    this.errorMessage = "";
  }
  openEditModal(departement) {
    this.isEditMode = true;
    this.selectedDepartement = departement;
    this.departementForm.patchValue({
      nom: departement.nom,
      description: departement.description || "",
      societeId: departement.societeId,
      actif: departement.actif
    });
    this.showModal = true;
    this.errorMessage = "";
  }
  closeModal() {
    this.showModal = false;
    this.selectedDepartement = null;
    this.departementForm.reset();
  }
  // Soumission du formulaire
  onSubmit() {
    if (this.departementForm.invalid) {
      this.markFormGroupTouched(this.departementForm);
      return;
    }
    this.isSaving = true;
    this.errorMessage = "";
    const formValue = this.departementForm.value;
    formValue.societeId = this.departementService.getCurrentUserSocieteId();
    if (this.isEditMode && this.selectedDepartement) {
      const updateDto = __spreadValues({
        id: this.selectedDepartement.id
      }, formValue);
      this.departementService.updateDepartement(this.selectedDepartement.id, updateDto).subscribe({
        next: (response) => {
          this.successMessage = "D\xE9partement mis \xE0 jour avec succ\xE8s.";
          this.closeModal();
          this.loadData();
          this.isSaving = false;
        },
        error: (error) => {
          this.errorMessage = error.message || "Erreur lors de la mise \xE0 jour du d\xE9partement.";
          this.isSaving = false;
        }
      });
    } else {
      const createDto = formValue;
      console.log(createDto);
      this.departementService.createDepartement(createDto).subscribe({
        next: (response) => {
          this.successMessage = "D\xE9partement cr\xE9\xE9 avec succ\xE8s.";
          this.closeModal();
          this.loadData();
          this.isSaving = false;
        },
        error: (error) => {
          this.errorMessage = error.message || "Erreur lors de la cr\xE9ation du d\xE9partement.";
          this.isSaving = false;
        }
      });
    }
  }
  // Suppression d'un département
  deleteDepartement(departement) {
    if (confirm(`\xCAtes-vous s\xFBr de vouloir supprimer le d\xE9partement "${departement.nom}" ?`)) {
      this.departementService.deleteDepartement(departement.id).subscribe({
        next: () => {
          this.successMessage = "D\xE9partement supprim\xE9 avec succ\xE8s.";
          this.loadData();
        },
        error: (error) => {
          this.errorMessage = error.message || "Erreur lors de la suppression du d\xE9partement.";
        }
      });
    }
  }
  // Activation/désactivation
  toggleDepartementStatus(departement) {
    const newStatus = !departement.actif;
    this.departementService.toggleDepartementStatus(departement.id, newStatus).subscribe({
      next: (response) => {
        this.successMessage = `D\xE9partement ${newStatus ? "activ\xE9" : "d\xE9sactiv\xE9"} avec succ\xE8s.`;
        departement.actif = newStatus;
      },
      error: (error) => {
        this.errorMessage = error.message || "Erreur lors du changement de statut.";
        departement.actif = !newStatus;
      }
    });
  }
  // Utilitaires pour le template
  formatDate(dateString) {
    return formatDate(dateString);
  }
  truncateText(text, maxLength = 50) {
    return truncateText(text, maxLength);
  }
  getStatusBadge(actif) {
    return getStatusBadge(actif);
  }
  getSocieteName(societeId) {
    const societe = this.societes.find((s) => s.id === societeId);
    return societe ? societe.nom : `ID: ${societeId}`;
  }
  // Validation du formulaire
  isFieldInvalid(fieldName) {
    const field = this.departementForm.get(fieldName);
    return field ? field.invalid && (field.dirty || field.touched) : false;
  }
  hasError(fieldName, errorType) {
    const field = this.departementForm.get(fieldName);
    return field ? field.hasError(errorType) : false;
  }
  markFormGroupTouched(formGroup) {
    Object.values(formGroup.controls).forEach((control) => {
      control.markAsTouched();
      if (control instanceof FormGroup) {
        this.markFormGroupTouched(control);
      }
    });
  }
  // Méthodes utilitaires pour le template
  Math = Math;
  static \u0275fac = function DepartementSettingsComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _DepartementSettingsComponent)(\u0275\u0275directiveInject(DepartementService), \u0275\u0275directiveInject(FormBuilder));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DepartementSettingsComponent, selectors: [["app-departement-settings"]], decls: 143, vars: 104, consts: [[1, "mb-3"], [1, "pb-3", "border-bottom", "mb-3"], [1, "row", "align-items-center"], [1, "col-md-6"], [1, "mb-0"], [1, "col-md-6", "text-end"], ["type", "button", 1, "btn", "btn-primary", 3, "click"], [1, "fas", "fa-plus", "me-2"], ["class", "alert alert-success alert-dismissible fade show", "role", "alert", 4, "ngIf"], ["class", "alert alert-danger alert-dismissible fade show", "role", "alert", 4, "ngIf"], [1, "row", "mb-4"], [1, "col-xl-3", "col-sm-6"], [1, "card"], [1, "card-body"], [1, "d-flex", "align-items-center", "justify-content-between"], [1, "d-block", "mb-1"], [1, "avatar", "avatar-lg", "bg-primary-light", "rounded-circle"], [1, "fas", "fa-building", "text-primary"], [1, "avatar", "avatar-lg", "bg-success-light", "rounded-circle"], [1, "fas", "fa-check-circle", "text-success"], [1, "avatar", "avatar-lg", "bg-danger-light", "rounded-circle"], [1, "fas", "fa-times-circle", "text-danger"], [1, "avatar", "avatar-lg", "bg-info-light", "rounded-circle"], [1, "fas", "fa-percentage", "text-info"], [1, "card", "mb-4"], [1, "row", "g-3"], [1, "col-md-4"], [1, "form-label"], ["type", "text", 1, "form-control", 3, "ngModelChange", "input", "placeholder", "ngModel"], [1, "form-select", 3, "ngModelChange", "change", "ngModel"], [3, "value"], ["class", "text-center py-5", 4, "ngIf"], ["class", "table-responsive", 4, "ngIf"], ["class", "d-flex justify-content-between align-items-center mt-3", 4, "ngIf"], ["tabindex", "-1", 1, "modal", "fade"], [1, "modal-dialog", "modal-dialog-centered"], [1, "modal-content"], [1, "modal-header"], [1, "modal-title"], ["type", "button", 1, "btn-close", 3, "click"], [3, "ngSubmit", "formGroup"], [1, "modal-body"], ["class", "alert alert-danger", 4, "ngIf"], [1, "col-md-12"], [1, "text-danger"], ["type", "text", "formControlName", "nom", 1, "form-control", 3, "placeholder"], ["class", "invalid-feedback", 4, "ngIf"], ["formControlName", "description", "rows", "3", "maxlength", "500", 1, "form-control", 3, "placeholder"], [1, "text-muted"], [1, "form-check", "form-switch"], ["type", "checkbox", "formControlName", "actif", 1, "form-check-input"], [1, "form-check-label"], [1, "modal-footer"], ["type", "button", 1, "btn", "btn-secondary", 3, "click", "disabled"], ["type", "submit", 1, "btn", "btn-primary", 3, "disabled"], [4, "ngIf"], ["class", "modal-backdrop fade", 3, "show", 4, "ngIf"], ["role", "alert", 1, "alert", "alert-success", "alert-dismissible", "fade", "show"], [1, "fas", "fa-check-circle", "me-2"], ["role", "alert", 1, "alert", "alert-danger", "alert-dismissible", "fade", "show"], [1, "fas", "fa-exclamation-circle", "me-2"], [1, "text-center", "py-5"], ["role", "status", 1, "spinner-border", "text-primary"], [1, "visually-hidden"], [1, "mt-2"], [1, "table-responsive"], [1, "table", "table-hover"], [1, "text-end"], [4, "ngFor", "ngForOf"], ["colspan", "6", 1, "text-center", "py-4"], [1, "fas", "fa-building", "fa-2x", "text-muted"], [1, "mt-2", "mb-0"], ["class", "text-muted small", 4, "ngIf"], [1, "text-muted", "small"], [1, "d-flex", "align-items-center"], [1, "avatar", "avatar-sm", "bg-primary-light", "me-2"], [1, "fw-medium"], [3, "ngClass"], [1, "dropdown"], ["type", "button", "data-bs-toggle", "dropdown", 1, "btn", "btn-sm", "btn-outline-secondary", "dropdown-toggle"], [1, "fas", "fa-ellipsis-v"], [1, "dropdown-menu"], [1, "dropdown-item", 3, "click"], [1, "fas", "fa-edit", "me-2"], [1, "dropdown-item", "text-danger", 3, "click"], [1, "fas", "fa-trash", "me-2"], [1, "d-flex", "justify-content-between", "align-items-center", "mt-3"], [1, "pagination", "mb-0"], [1, "page-item"], [1, "page-link", 3, "click"], [1, "fas", "fa-chevron-left"], ["class", "page-item", 3, "active", 4, "ngFor", "ngForOf"], [1, "fas", "fa-chevron-right"], [1, "alert", "alert-danger"], [1, "invalid-feedback"], [1, "spinner-border", "spinner-border-sm", "me-1"], [1, "modal-backdrop", "fade"]], template: function DepartementSettingsComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "h6", 4);
      \u0275\u0275text(5);
      \u0275\u0275pipe(6, "translate");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(7, "div", 5)(8, "button", 6);
      \u0275\u0275listener("click", function DepartementSettingsComponent_Template_button_click_8_listener() {
        return ctx.openCreateModal();
      });
      \u0275\u0275element(9, "i", 7);
      \u0275\u0275text(10);
      \u0275\u0275pipe(11, "translate");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275template(12, DepartementSettingsComponent_div_12_Template, 4, 1, "div", 8)(13, DepartementSettingsComponent_div_13_Template, 4, 1, "div", 9);
      \u0275\u0275elementStart(14, "div", 10)(15, "div", 11)(16, "div", 12)(17, "div", 13)(18, "div", 14)(19, "div")(20, "span", 15);
      \u0275\u0275text(21);
      \u0275\u0275pipe(22, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(23, "h4", 4);
      \u0275\u0275text(24);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(25, "div", 16);
      \u0275\u0275element(26, "i", 17);
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(27, "div", 11)(28, "div", 12)(29, "div", 13)(30, "div", 14)(31, "div")(32, "span", 15);
      \u0275\u0275text(33);
      \u0275\u0275pipe(34, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(35, "h4", 4);
      \u0275\u0275text(36);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(37, "div", 18);
      \u0275\u0275element(38, "i", 19);
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(39, "div", 11)(40, "div", 12)(41, "div", 13)(42, "div", 14)(43, "div")(44, "span", 15);
      \u0275\u0275text(45);
      \u0275\u0275pipe(46, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(47, "h4", 4);
      \u0275\u0275text(48);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(49, "div", 20);
      \u0275\u0275element(50, "i", 21);
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(51, "div", 11)(52, "div", 12)(53, "div", 13)(54, "div", 14)(55, "div")(56, "span", 15);
      \u0275\u0275text(57);
      \u0275\u0275pipe(58, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(59, "h4", 4);
      \u0275\u0275text(60);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(61, "div", 22);
      \u0275\u0275element(62, "i", 23);
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(63, "div", 24)(64, "div", 13)(65, "div", 25)(66, "div", 26)(67, "label", 27);
      \u0275\u0275text(68);
      \u0275\u0275pipe(69, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(70, "input", 28);
      \u0275\u0275pipe(71, "translate");
      \u0275\u0275twoWayListener("ngModelChange", function DepartementSettingsComponent_Template_input_ngModelChange_70_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.searchTerm, $event) || (ctx.searchTerm = $event);
        return $event;
      });
      \u0275\u0275listener("input", function DepartementSettingsComponent_Template_input_input_70_listener($event) {
        return ctx.onSearch($event.target.value);
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(72, "div", 26)(73, "label", 27);
      \u0275\u0275text(74);
      \u0275\u0275pipe(75, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(76, "select", 29);
      \u0275\u0275twoWayListener("ngModelChange", function DepartementSettingsComponent_Template_select_ngModelChange_76_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.filterStatus, $event) || (ctx.filterStatus = $event);
        return $event;
      });
      \u0275\u0275listener("change", function DepartementSettingsComponent_Template_select_change_76_listener() {
        return ctx.onFilterChange();
      });
      \u0275\u0275elementStart(77, "option", 30);
      \u0275\u0275text(78);
      \u0275\u0275pipe(79, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(80, "option", 30);
      \u0275\u0275text(81);
      \u0275\u0275pipe(82, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(83, "option", 30);
      \u0275\u0275text(84);
      \u0275\u0275pipe(85, "translate");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(86, "div", 12)(87, "div", 13);
      \u0275\u0275template(88, DepartementSettingsComponent_div_88_Template, 8, 6, "div", 31)(89, DepartementSettingsComponent_div_89_Template, 25, 20, "div", 32)(90, DepartementSettingsComponent_div_90_Template, 13, 13, "div", 33);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(91, "div", 34)(92, "div", 35)(93, "div", 36)(94, "div", 37)(95, "h5", 38);
      \u0275\u0275text(96);
      \u0275\u0275pipe(97, "translate");
      \u0275\u0275pipe(98, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(99, "button", 39);
      \u0275\u0275listener("click", function DepartementSettingsComponent_Template_button_click_99_listener() {
        return ctx.closeModal();
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(100, "form", 40);
      \u0275\u0275listener("ngSubmit", function DepartementSettingsComponent_Template_form_ngSubmit_100_listener() {
        return ctx.onSubmit();
      });
      \u0275\u0275elementStart(101, "div", 41);
      \u0275\u0275template(102, DepartementSettingsComponent_div_102_Template, 3, 1, "div", 42);
      \u0275\u0275elementStart(103, "div", 25)(104, "div", 43)(105, "label", 27);
      \u0275\u0275text(106);
      \u0275\u0275pipe(107, "translate");
      \u0275\u0275elementStart(108, "span", 44);
      \u0275\u0275text(109, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(110, "input", 45);
      \u0275\u0275pipe(111, "translate");
      \u0275\u0275template(112, DepartementSettingsComponent_div_112_Template, 3, 3, "div", 46)(113, DepartementSettingsComponent_div_113_Template, 3, 3, "div", 46)(114, DepartementSettingsComponent_div_114_Template, 3, 3, "div", 46);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(115, "div", 43)(116, "label", 27);
      \u0275\u0275text(117);
      \u0275\u0275pipe(118, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275element(119, "textarea", 47);
      \u0275\u0275pipe(120, "translate");
      \u0275\u0275elementStart(121, "small", 48);
      \u0275\u0275text(122);
      \u0275\u0275pipe(123, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275template(124, DepartementSettingsComponent_div_124_Template, 3, 3, "div", 46);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(125, "div", 43)(126, "label", 27);
      \u0275\u0275text(127);
      \u0275\u0275pipe(128, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(129, "div", 49);
      \u0275\u0275element(130, "input", 50);
      \u0275\u0275elementStart(131, "label", 51);
      \u0275\u0275text(132);
      \u0275\u0275pipe(133, "translate");
      \u0275\u0275pipe(134, "translate");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(135, "div", 52)(136, "button", 53);
      \u0275\u0275listener("click", function DepartementSettingsComponent_Template_button_click_136_listener() {
        return ctx.closeModal();
      });
      \u0275\u0275text(137);
      \u0275\u0275pipe(138, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(139, "button", 54);
      \u0275\u0275template(140, DepartementSettingsComponent_span_140_Template, 4, 5, "span", 55)(141, DepartementSettingsComponent_span_141_Template, 5, 5, "span", 55);
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275template(142, DepartementSettingsComponent_div_142_Template, 1, 2, "div", 56);
    }
    if (rf & 2) {
      let tmp_40_0;
      let tmp_43_0;
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(6, 58, "departementSettings.title"));
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(11, 60, "departementSettings.newDepartement"), " ");
      \u0275\u0275advance(2);
      \u0275\u0275property("ngIf", ctx.successMessage);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.errorMessage);
      \u0275\u0275advance(8);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(22, 62, "departementSettings.totalDepartements"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(ctx.statistics.total);
      \u0275\u0275advance(9);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(34, 64, "departementSettings.activeDepartements"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(ctx.statistics.actifs);
      \u0275\u0275advance(9);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(46, 66, "departementSettings.inactiveDepartements"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(ctx.statistics.inactifs);
      \u0275\u0275advance(9);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(58, 68, "departementSettings.activationRate"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate1("", ctx.statistics.total > 0 ? ctx.Math.round(ctx.statistics.actifs / ctx.statistics.total * 100) : 0, "%");
      \u0275\u0275advance(8);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(69, 70, "common.search"));
      \u0275\u0275advance(2);
      \u0275\u0275property("placeholder", \u0275\u0275interpolate(\u0275\u0275pipeBind1(71, 72, "departementSettings.search")));
      \u0275\u0275twoWayProperty("ngModel", ctx.searchTerm);
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(75, 74, "departementSettings.status"));
      \u0275\u0275advance(2);
      \u0275\u0275twoWayProperty("ngModel", ctx.filterStatus);
      \u0275\u0275advance();
      \u0275\u0275property("value", void 0);
      \u0275\u0275advance();
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(79, 76, "departementSettings.allStatus"));
      \u0275\u0275advance(2);
      \u0275\u0275property("value", true);
      \u0275\u0275advance();
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(82, 78, "departementSettings.active"));
      \u0275\u0275advance(2);
      \u0275\u0275property("value", false);
      \u0275\u0275advance();
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(85, 80, "departementSettings.inactive"));
      \u0275\u0275advance(4);
      \u0275\u0275property("ngIf", ctx.isLoading);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.isLoading);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.isLoading && ctx.paginatedDepartements.length > 0);
      \u0275\u0275advance();
      \u0275\u0275styleProp("display", ctx.showModal ? "block" : "none");
      \u0275\u0275classProp("show", ctx.showModal);
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate1(" ", ctx.isEditMode ? \u0275\u0275pipeBind1(97, 82, "departementSettings.modal.editTitle") : \u0275\u0275pipeBind1(98, 84, "departementSettings.modal.createTitle"), " ");
      \u0275\u0275advance(4);
      \u0275\u0275property("formGroup", ctx.departementForm);
      \u0275\u0275advance(2);
      \u0275\u0275property("ngIf", ctx.errorMessage);
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(107, 86, "departementSettings.modal.nameLabel"), " ");
      \u0275\u0275advance(4);
      \u0275\u0275classProp("is-invalid", ctx.isFieldInvalid("nom"));
      \u0275\u0275property("placeholder", \u0275\u0275interpolate(\u0275\u0275pipeBind1(111, 88, "departementSettings.modal.namePlaceholder")));
      \u0275\u0275advance(2);
      \u0275\u0275property("ngIf", ctx.hasError("nom", "required"));
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.hasError("nom", "minlength"));
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.hasError("nom", "maxlength"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(118, 90, "departementSettings.modal.descriptionLabel"));
      \u0275\u0275advance(2);
      \u0275\u0275classProp("is-invalid", ctx.isFieldInvalid("description"));
      \u0275\u0275property("placeholder", \u0275\u0275interpolate(\u0275\u0275pipeBind1(120, 92, "departementSettings.modal.descriptionPlaceholder")));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate2(" ", ((tmp_40_0 = ctx.departementForm.get("description")) == null ? null : tmp_40_0.value == null ? null : tmp_40_0.value.length) || 0, " / 500 ", \u0275\u0275pipeBind1(123, 94, "common.characters"), " ");
      \u0275\u0275advance(2);
      \u0275\u0275property("ngIf", ctx.hasError("description", "maxlength"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(128, 96, "departementSettings.modal.statusLabel"));
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate1(" ", ((tmp_43_0 = ctx.departementForm.get("actif")) == null ? null : tmp_43_0.value) ? \u0275\u0275pipeBind1(133, 98, "departementSettings.modal.active") : \u0275\u0275pipeBind1(134, 100, "departementSettings.modal.inactive"), " ");
      \u0275\u0275advance(4);
      \u0275\u0275property("disabled", ctx.isSaving);
      \u0275\u0275advance();
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(138, 102, "departementSettings.modal.cancel"), " ");
      \u0275\u0275advance(2);
      \u0275\u0275property("disabled", ctx.departementForm.invalid || ctx.isSaving);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.isSaving);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.isSaving);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.showModal);
    }
  }, dependencies: [CommonModule, NgClass, NgForOf, NgIf, ReactiveFormsModule, \u0275NgNoValidate, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, CheckboxControlValueAccessor, SelectControlValueAccessor, NgControlStatus, NgControlStatusGroup, MaxLengthValidator, FormGroupDirective, FormControlName, FormsModule, NgModel, TranslatePipe], styles: ['@charset "UTF-8";\n\n\n\n.departement-settings[_ngcontent-%COMP%]   .page-header[_ngcontent-%COMP%] {\n  margin-bottom: 1.5rem;\n}\n.departement-settings[_ngcontent-%COMP%]   .empty-state[_ngcontent-%COMP%] {\n  padding: 3rem 1rem;\n  text-align: center;\n}\n.departement-settings[_ngcontent-%COMP%]   .empty-state[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  opacity: 0.5;\n}\n.departement-settings[_ngcontent-%COMP%]   .empty-state[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {\n  margin-top: 1rem;\n  margin-bottom: 0.5rem;\n  color: #495057;\n}\n.departement-settings[_ngcontent-%COMP%]   .empty-state[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #6c757d;\n  margin-bottom: 0;\n}\n.departement-settings[_ngcontent-%COMP%]   .table-avatar[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  margin-bottom: 0;\n}\n.departement-settings[_ngcontent-%COMP%]   .table-avatar[_ngcontent-%COMP%]   .avatar[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 32px;\n  height: 32px;\n  border-radius: 50%;\n  background-color: #f0f0f0;\n  color: #6c757d;\n}\n.departement-settings[_ngcontent-%COMP%]   .table-avatar[_ngcontent-%COMP%]   .avatar[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 14px;\n}\n.departement-settings[_ngcontent-%COMP%]   .table-avatar[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #495057;\n  font-weight: 500;\n  text-decoration: none;\n}\n.departement-settings[_ngcontent-%COMP%]   .table-avatar[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  color: #0d6efd;\n}\n.departement-settings[_ngcontent-%COMP%]   .actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 0.25rem;\n}\n.departement-settings[_ngcontent-%COMP%]   .actions[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  padding: 0.25rem 0.5rem;\n  font-size: 0.875rem;\n}\n.departement-settings[_ngcontent-%COMP%]   .modal.show[_ngcontent-%COMP%] {\n  display: block;\n  background-color: rgba(0, 0, 0, 0.5);\n}\n.departement-settings[_ngcontent-%COMP%]   .modal-backdrop.show[_ngcontent-%COMP%] {\n  opacity: 0.5;\n}\n@media (max-width: 768px) {\n  .departement-settings[_ngcontent-%COMP%]   .table-responsive[_ngcontent-%COMP%] {\n    border: 0;\n  }\n  .departement-settings[_ngcontent-%COMP%]   .table-responsive[_ngcontent-%COMP%]   table[_ngcontent-%COMP%] {\n    display: block;\n    width: 100%;\n  }\n  .departement-settings[_ngcontent-%COMP%]   .table-responsive[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .departement-settings[_ngcontent-%COMP%]   .table-responsive[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%] {\n    display: block;\n    width: 100%;\n  }\n  .departement-settings[_ngcontent-%COMP%]   .table-responsive[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {\n    display: block;\n    margin-bottom: 1rem;\n    border: 1px solid #dee2e6;\n    border-radius: 0.25rem;\n  }\n  .departement-settings[_ngcontent-%COMP%]   .table-responsive[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n    display: block;\n    text-align: right;\n    padding: 0.75rem;\n    border-bottom: 1px solid #dee2e6;\n  }\n  .departement-settings[_ngcontent-%COMP%]   .table-responsive[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:before {\n    content: attr(data-label);\n    float: left;\n    font-weight: bold;\n    text-transform: uppercase;\n    font-size: 0.875rem;\n    color: #6c757d;\n  }\n  .departement-settings[_ngcontent-%COMP%]   .table-responsive[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:last-child {\n    border-bottom: 0;\n  }\n  .departement-settings[_ngcontent-%COMP%]   .actions[_ngcontent-%COMP%] {\n    justify-content: flex-end;\n  }\n}\n.badge.bg-success-light[_ngcontent-%COMP%] {\n  background-color: rgba(25, 135, 84, 0.1);\n  color: #198754;\n}\n.badge.bg-danger-light[_ngcontent-%COMP%] {\n  background-color: rgba(220, 53, 69, 0.1);\n  color: #dc3545;\n}\n.dash-widget-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  margin-bottom: 1rem;\n}\n.dash-widget-header[_ngcontent-%COMP%]   .dash-widget-icon[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 48px;\n  height: 48px;\n  border-radius: 50%;\n  margin-right: 1rem;\n}\n.dash-widget-header[_ngcontent-%COMP%]   .dash-widget-icon[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n  color: white;\n}\n.dash-widget-header[_ngcontent-%COMP%]   .dash-widget-icon.bg-primary[_ngcontent-%COMP%] {\n  background-color: #0d6efd;\n}\n.dash-widget-header[_ngcontent-%COMP%]   .dash-widget-icon.bg-success[_ngcontent-%COMP%] {\n  background-color: #198754;\n}\n.dash-widget-header[_ngcontent-%COMP%]   .dash-widget-icon.bg-danger[_ngcontent-%COMP%] {\n  background-color: #dc3545;\n}\n.dash-widget-header[_ngcontent-%COMP%]   .dash-widget-icon.bg-info[_ngcontent-%COMP%] {\n  background-color: #0dcaf0;\n}\n.dash-widget-header[_ngcontent-%COMP%]   .dash-count[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 1.5rem;\n  font-weight: 600;\n}\n.dash-widget-info[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 0.875rem;\n}\n/*# sourceMappingURL=departement-settings.component.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DepartementSettingsComponent, [{
    type: Component,
    args: [{ selector: "app-departement-settings", imports: [CommonModule, ReactiveFormsModule, FormsModule, TranslatePipe], template: `<div class="mb-3">
  <!-- En-t\xEAte -->
  <div class="pb-3 border-bottom mb-3">
    <div class="row align-items-center">
      <div class="col-md-6">
        <h6 class="mb-0">{{ 'departementSettings.title' | translate }}</h6>
      </div>
      <div class="col-md-6 text-end">
        <button type="button" class="btn btn-primary" (click)="openCreateModal()">
          <i class="fas fa-plus me-2"></i>
          {{ 'departementSettings.newDepartement' | translate }}
        </button>
      </div>
    </div>
  </div>

  <!-- Messages d'alerte -->
  <div *ngIf="successMessage" class="alert alert-success alert-dismissible fade show" role="alert">
    <i class="fas fa-check-circle me-2"></i>
    {{ successMessage }}
    <button type="button" class="btn-close" (click)="successMessage = ''"></button>
  </div>
  
  <div *ngIf="errorMessage" class="alert alert-danger alert-dismissible fade show" role="alert">
    <i class="fas fa-exclamation-circle me-2"></i>
    {{ errorMessage }}
    <button type="button" class="btn-close" (click)="errorMessage = ''"></button>
  </div>

  <!-- Statistiques -->
  <div class="row mb-4">
    <div class="col-xl-3 col-sm-6">
      <div class="card">
        <div class="card-body">
          <div class="d-flex align-items-center justify-content-between">
            <div>
              <span class="d-block mb-1">{{ 'departementSettings.totalDepartements' | translate }}</span>
              <h4 class="mb-0">{{ statistics.total }}</h4>
            </div>
            <div class="avatar avatar-lg bg-primary-light rounded-circle">
              <i class="fas fa-building text-primary"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
    
    <div class="col-xl-3 col-sm-6">
      <div class="card">
        <div class="card-body">
          <div class="d-flex align-items-center justify-content-between">
            <div>
              <span class="d-block mb-1">{{ 'departementSettings.activeDepartements' | translate }}</span>
              <h4 class="mb-0">{{ statistics.actifs }}</h4>
            </div>
            <div class="avatar avatar-lg bg-success-light rounded-circle">
              <i class="fas fa-check-circle text-success"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
    
    <div class="col-xl-3 col-sm-6">
      <div class="card">
        <div class="card-body">
          <div class="d-flex align-items-center justify-content-between">
            <div>
              <span class="d-block mb-1">{{ 'departementSettings.inactiveDepartements' | translate }}</span>
              <h4 class="mb-0">{{ statistics.inactifs }}</h4>
            </div>
            <div class="avatar avatar-lg bg-danger-light rounded-circle">
              <i class="fas fa-times-circle text-danger"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
    
    <div class="col-xl-3 col-sm-6">
      <div class="card">
        <div class="card-body">
          <div class="d-flex align-items-center justify-content-between">
            <div>
              <span class="d-block mb-1">{{ 'departementSettings.activationRate' | translate }}</span>
              <h4 class="mb-0">{{ statistics.total > 0 ? Math.round((statistics.actifs / statistics.total) * 100) : 0 }}%</h4>
            </div>
            <div class="avatar avatar-lg bg-info-light rounded-circle">
              <i class="fas fa-percentage text-info"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- Filtres -->
  <div class="card mb-4">
    <div class="card-body">
      <div class="row g-3">
        <div class="col-md-4">
          <label class="form-label">{{ 'common.search' | translate }}</label>
          <input 
            type="text" 
            class="form-control" 
            placeholder="{{ 'departementSettings.search' | translate }}" 
            [(ngModel)]="searchTerm"
            (input)="onSearch($any($event.target).value)">
        </div>
        
        
        <div class="col-md-4">
          <label class="form-label">{{ 'departementSettings.status' | translate }}</label>
          <select class="form-select" [(ngModel)]="filterStatus" (change)="onFilterChange()">
            <option [value]="undefined">{{ 'departementSettings.allStatus' | translate }}</option>
            <option [value]="true">{{ 'departementSettings.active' | translate }}</option>
            <option [value]="false">{{ 'departementSettings.inactive' | translate }}</option>
          </select>
        </div>
      </div>
    </div>
  </div>

  <!-- Tableau des d\xE9partements -->
  <div class="card">
    <div class="card-body">
      <!-- Loader -->
      <div *ngIf="isLoading" class="text-center py-5">
        <div class="spinner-border text-primary" role="status">
          <span class="visually-hidden">{{ 'common.loading' | translate }}</span>
        </div>
        <p class="mt-2">{{ 'departementSettings.loader' | translate }}</p>
      </div>

      <!-- Table -->
      <div *ngIf="!isLoading" class="table-responsive">
        <table class="table table-hover">
          <thead>
            <tr>
              <th>{{ 'departementSettings.name' | translate }}</th>
              <th>{{ 'departementSettings.description' | translate }}</th>
              <th>{{ 'departementSettings.company' | translate }}</th>
              <th>{{ 'departementSettings.status' | translate }}</th>
              <th>{{ 'departementSettings.creationDate' | translate }}</th>
              <th class="text-end">{{ 'departementSettings.actions' | translate }}</th>
            </tr>
          </thead>
          <tbody>
            <tr *ngIf="paginatedDepartements.length === 0">
              <td colspan="6" class="text-center py-4">
                <i class="fas fa-building fa-2x text-muted"></i>
                <p class="mt-2 mb-0">{{ 'departementSettings.noResults' | translate }}</p>
                <p *ngIf="searchTerm || filterSocieteId || filterStatus !== undefined" class="text-muted small">
                  {{ 'departementSettings.tryFilters' | translate }}
                </p>
                <p *ngIf="!searchTerm && !filterSocieteId && filterStatus === undefined" class="text-muted small">
                  {{ 'departementSettings.startCreating' | translate }}
                </p>
              </td>
            </tr>
            
            <tr *ngFor="let departement of paginatedDepartements">
              <td>
                <div class="d-flex align-items-center">
                  <div class="avatar avatar-sm bg-primary-light me-2">
                    <i class="fas fa-building text-primary"></i>
                  </div>
                  <div>
                    <div class="fw-medium">{{ departement.nom }}</div>
                    <small class="text-muted">ID: {{ departement.id }}</small>
                  </div>
                </div>
              </td>
              <td>
                <span class="text-muted">{{ truncateText(departement.description || 'Non renseign\xE9e', 60) }}</span>
              </td>
              <td>{{ getSocieteName(departement.societeId) }}</td>
              <td>
                <span [ngClass]="getStatusBadge(departement.actif).class">
                  {{ getStatusBadge(departement.actif).label }}
                </span>
              </td>
              <td>{{ formatDate(departement.dateCreation) }}</td>
              <td class="text-end">
                <div class="dropdown">
                  <button 
                    class="btn btn-sm btn-outline-secondary dropdown-toggle" 
                    type="button" 
                    data-bs-toggle="dropdown"
                  >
                    <i class="fas fa-ellipsis-v"></i>
                  </button>
                  <ul class="dropdown-menu">
                    <li>
                      <a class="dropdown-item" (click)="openEditModal(departement)">
                        <i class="fas fa-edit me-2"></i>
                        {{ 'departementSettings.dropdownActions.edit' | translate }}
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" (click)="toggleDepartementStatus(departement)">
                        <i [class]="departement.actif ? 'fas fa-toggle-off me-2' : 'fas fa-toggle-on me-2'"></i>
                        {{ departement.actif ? ('departementSettings.dropdownActions.deactivate' | translate) : ('departementSettings.dropdownActions.activate' | translate) }}
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item text-danger" (click)="deleteDepartement(departement)">
                        <i class="fas fa-trash me-2"></i>
                        {{ 'departementSettings.dropdownActions.delete' | translate }}
                      </a>
                    </li>
                  </ul>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <!-- Pagination -->
      <div *ngIf="!isLoading && paginatedDepartements.length > 0" class="d-flex justify-content-between align-items-center mt-3">
        <div>
          {{ 'departementSettings.paginationText' | translate:{start: (currentPage * pageSize) + 1, end: Math.min((currentPage + 1) * pageSize, totalElements), total: totalElements} }}
        </div>
        <nav>
          <ul class="pagination mb-0">
            <li class="page-item" [class.disabled]="currentPage === 0">
              <a class="page-link" (click)="previousPage()">
                <i class="fas fa-chevron-left"></i>
              </a>
            </li>
            <li 
              *ngFor="let page of paginationPages" 
              class="page-item" 
              [class.active]="page === currentPage"
            >
              <a class="page-link" (click)="goToPage(page)">{{ page + 1 }}</a>
            </li>
            <li class="page-item" [class.disabled]="currentPage >= totalPages - 1">
              <a class="page-link" (click)="nextPage()">
                <i class="fas fa-chevron-right"></i>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </div>
</div>

<!-- Modal pour cr\xE9er/modifier un d\xE9partement -->
<div class="modal fade" [class.show]="showModal" [style.display]="showModal ? 'block' : 'none'" tabindex="-1">
  <div class="modal-dialog modal-dialog-centered">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title">
          {{ isEditMode ? ('departementSettings.modal.editTitle' | translate) : ('departementSettings.modal.createTitle' | translate) }}
        </h5>
        <button type="button" class="btn-close" (click)="closeModal()"></button>
      </div>
      
      <form [formGroup]="departementForm" (ngSubmit)="onSubmit()">
        <div class="modal-body">
          <!-- Message d'erreur dans le modal -->
          <div *ngIf="errorMessage" class="alert alert-danger">
            <i class="fas fa-exclamation-circle me-2"></i>
            {{ errorMessage }}
          </div>

          <div class="row g-3">
            <div class="col-md-12">
              <label class="form-label">{{ 'departementSettings.modal.nameLabel' | translate }} <span class="text-danger">*</span></label>
              <input 
                type="text" 
                class="form-control" 
                formControlName="nom"
                [class.is-invalid]="isFieldInvalid('nom')"
                placeholder="{{ 'departementSettings.modal.namePlaceholder' | translate }}">
              
              <div *ngIf="hasError('nom', 'required')" class="invalid-feedback">
                {{ 'departementSettings.modal.nameRequired' | translate }}
              </div>
              <div *ngIf="hasError('nom', 'minlength')" class="invalid-feedback">
                {{ 'departementSettings.modal.nameMinLength' | translate }}
              </div>
              <div *ngIf="hasError('nom', 'maxlength')" class="invalid-feedback">
                {{ 'departementSettings.modal.nameMaxLength' | translate }}
              </div>
            </div>
            
            <div class="col-md-12">
              <label class="form-label">{{ 'departementSettings.modal.descriptionLabel' | translate }}</label>
              <textarea 
                class="form-control" 
                formControlName="description"
                [class.is-invalid]="isFieldInvalid('description')"
                rows="3"
                placeholder="{{ 'departementSettings.modal.descriptionPlaceholder' | translate }}"
                maxlength="500"></textarea>
              
              <small class="text-muted">
                {{ departementForm.get('description')?.value?.length || 0 }} / 500 {{ 'common.characters' | translate }}
              </small>
              <div *ngIf="hasError('description', 'maxlength')" class="invalid-feedback">
                {{ 'departementSettings.modal.descriptionMaxLength' | translate }}
              </div>
            </div>
         
            
            <div class="col-md-12">
              <label class="form-label">{{ 'departementSettings.modal.statusLabel' | translate }}</label>
              <div class="form-check form-switch">
                <input 
                  class="form-check-input" 
                  type="checkbox" 
                  formControlName="actif">
                <label class="form-check-label">
                  {{ departementForm.get('actif')?.value ? ('departementSettings.modal.active' | translate) : ('departementSettings.modal.inactive' | translate) }}
                </label>
              </div>
            </div>
          </div>
        </div>
        
        <div class="modal-footer">
          <button 
            type="button" 
            class="btn btn-secondary" 
            (click)="closeModal()"
            [disabled]="isSaving">
            {{ 'departementSettings.modal.cancel' | translate }}
          </button>
          <button 
            type="submit" 
            class="btn btn-primary"
            [disabled]="departementForm.invalid || isSaving">
            <span *ngIf="!isSaving">
              {{ isEditMode ? ('departementSettings.modal.update' | translate) : ('departementSettings.modal.create' | translate) }}
            </span>
            <span *ngIf="isSaving">
              <span class="spinner-border spinner-border-sm me-1"></span>
              {{ isEditMode ? ('departementSettings.modal.updating' | translate) : ('departementSettings.modal.creating' | translate) }}
            </span>
          </button>
        </div>
      </form>
    </div>
  </div>
</div>

<!-- Backdrop du modal -->
<div class="modal-backdrop fade" [class.show]="showModal" *ngIf="showModal"></div>
`, styles: ['@charset "UTF-8";\n\n/* src/app/modules/setting/presentation/pages/general-settings/departement-settings/departement-settings.component.scss */\n.departement-settings .page-header {\n  margin-bottom: 1.5rem;\n}\n.departement-settings .empty-state {\n  padding: 3rem 1rem;\n  text-align: center;\n}\n.departement-settings .empty-state i {\n  opacity: 0.5;\n}\n.departement-settings .empty-state h5 {\n  margin-top: 1rem;\n  margin-bottom: 0.5rem;\n  color: #495057;\n}\n.departement-settings .empty-state p {\n  color: #6c757d;\n  margin-bottom: 0;\n}\n.departement-settings .table-avatar {\n  display: flex;\n  align-items: center;\n  margin-bottom: 0;\n}\n.departement-settings .table-avatar .avatar {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 32px;\n  height: 32px;\n  border-radius: 50%;\n  background-color: #f0f0f0;\n  color: #6c757d;\n}\n.departement-settings .table-avatar .avatar i {\n  font-size: 14px;\n}\n.departement-settings .table-avatar a {\n  color: #495057;\n  font-weight: 500;\n  text-decoration: none;\n}\n.departement-settings .table-avatar a:hover {\n  color: #0d6efd;\n}\n.departement-settings .actions {\n  display: flex;\n  gap: 0.25rem;\n}\n.departement-settings .actions .btn {\n  padding: 0.25rem 0.5rem;\n  font-size: 0.875rem;\n}\n.departement-settings .modal.show {\n  display: block;\n  background-color: rgba(0, 0, 0, 0.5);\n}\n.departement-settings .modal-backdrop.show {\n  opacity: 0.5;\n}\n@media (max-width: 768px) {\n  .departement-settings .table-responsive {\n    border: 0;\n  }\n  .departement-settings .table-responsive table {\n    display: block;\n    width: 100%;\n  }\n  .departement-settings .table-responsive table thead {\n    display: none;\n  }\n  .departement-settings .table-responsive table tbody {\n    display: block;\n    width: 100%;\n  }\n  .departement-settings .table-responsive table tbody tr {\n    display: block;\n    margin-bottom: 1rem;\n    border: 1px solid #dee2e6;\n    border-radius: 0.25rem;\n  }\n  .departement-settings .table-responsive table tbody tr td {\n    display: block;\n    text-align: right;\n    padding: 0.75rem;\n    border-bottom: 1px solid #dee2e6;\n  }\n  .departement-settings .table-responsive table tbody tr td:before {\n    content: attr(data-label);\n    float: left;\n    font-weight: bold;\n    text-transform: uppercase;\n    font-size: 0.875rem;\n    color: #6c757d;\n  }\n  .departement-settings .table-responsive table tbody tr td:last-child {\n    border-bottom: 0;\n  }\n  .departement-settings .actions {\n    justify-content: flex-end;\n  }\n}\n.badge.bg-success-light {\n  background-color: rgba(25, 135, 84, 0.1);\n  color: #198754;\n}\n.badge.bg-danger-light {\n  background-color: rgba(220, 53, 69, 0.1);\n  color: #dc3545;\n}\n.dash-widget-header {\n  display: flex;\n  align-items: center;\n  margin-bottom: 1rem;\n}\n.dash-widget-header .dash-widget-icon {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 48px;\n  height: 48px;\n  border-radius: 50%;\n  margin-right: 1rem;\n}\n.dash-widget-header .dash-widget-icon i {\n  font-size: 1.5rem;\n  color: white;\n}\n.dash-widget-header .dash-widget-icon.bg-primary {\n  background-color: #0d6efd;\n}\n.dash-widget-header .dash-widget-icon.bg-success {\n  background-color: #198754;\n}\n.dash-widget-header .dash-widget-icon.bg-danger {\n  background-color: #dc3545;\n}\n.dash-widget-header .dash-widget-icon.bg-info {\n  background-color: #0dcaf0;\n}\n.dash-widget-header .dash-count h3 {\n  margin: 0;\n  font-size: 1.5rem;\n  font-weight: 600;\n}\n.dash-widget-info h6 {\n  margin: 0;\n  font-size: 0.875rem;\n}\n/*# sourceMappingURL=departement-settings.component.css.map */\n'] }]
  }], () => [{ type: DepartementService }, { type: FormBuilder }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DepartementSettingsComponent, { className: "DepartementSettingsComponent", filePath: "src/app/modules/setting/presentation/pages/general-settings/departement-settings/departement-settings.component.ts", lineNumber: 24 });
})();
export {
  DepartementSettingsComponent
};
//# sourceMappingURL=chunk-UUTH7Z3Z.js.map

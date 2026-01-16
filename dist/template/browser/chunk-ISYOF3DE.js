import {
  CdkDrag,
  CdkDropList,
  DragDropModule,
  moveItemInArray,
  transferArrayItem
} from "./chunk-TFXGYYMY.js";
import {
  MatOption,
  MatSelect,
  MatSelectModule
} from "./chunk-SFILXEE7.js";
import "./chunk-A5LCI4UV.js";
import "./chunk-QSJG5NOL.js";
import "./chunk-BVBMCBML.js";
import "./chunk-KA6DODO3.js";
import "./chunk-KEUB2FQU.js";
import "./chunk-T3U7HIOV.js";
import "./chunk-AZWQ5RV7.js";
import "./chunk-RIL4TINW.js";
import "./chunk-5H6GXSFV.js";
import "./chunk-YETY7SH2.js";
import "./chunk-M4MC2D7Y.js";
import "./chunk-UNWSAGEL.js";
import "./chunk-YWH7SLE3.js";
import "./chunk-YKL5IIDX.js";
import {
  BsDatepickerDirective,
  BsDatepickerInputDirective,
  BsDatepickerModule
} from "./chunk-6H2KZBXU.js";
import "./chunk-KKWHEPUK.js";
import "./chunk-BLAAMQ2R.js";
import {
  routes
} from "./chunk-U2VXEBUE.js";
import "./chunk-SCUCSJ4X.js";
import {
  RouterLink
} from "./chunk-PCRWA3NK.js";
import "./chunk-ZM5T2PIK.js";
import "./chunk-PQZYD7EB.js";
import {
  CommonModule,
  NgClass
} from "./chunk-ZV6UYXXV.js";
import {
  Component,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassMap,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵproperty,
  ɵɵpureFunction4,
  ɵɵreference,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-U4CEU3KS.js";
import "./chunk-TXDUYLVM.js";

// src/app/features/manage/tickets/ticket-kanban/ticket-kanban.component.ts
var _c0 = (a0, a1, a2, a3) => [a0, a1, a2, a3];
function TicketKanbanComponent_For_149_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 71)(1, "div", 85)(2, "div", 23)(3, "div", 86)(4, "div", 7)(5, "span");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 62)(8, "a", 88);
    \u0275\u0275element(9, "i", 89);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "ul", 65)(11, "li")(12, "a", 66);
    \u0275\u0275element(13, "i", 67);
    \u0275\u0275text(14, "Edit");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "li")(16, "a", 68);
    \u0275\u0275element(17, "i", 69);
    \u0275\u0275text(18, "Delete");
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(19, "div", 90)(20, "h6", 91);
    \u0275\u0275text(21);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "div", 92)(23, "span", 93);
    \u0275\u0275text(24, " #1234");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "span", 163);
    \u0275\u0275element(26, "i", 164);
    \u0275\u0275text(27);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(28, "div", 57)(29, "div", 96)(30, "span", 97);
    \u0275\u0275element(31, "img", 98);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "span", 97);
    \u0275\u0275element(33, "img", 99);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(34, "span", 97);
    \u0275\u0275element(35, "img", 100);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(36, "span", 97);
    \u0275\u0275element(37, "img", 101);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(38, "span", 97);
    \u0275\u0275element(39, "img", 102);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(40, "a", 103);
    \u0275\u0275text(41, " 1+ ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(42, "div", 104);
    \u0275\u0275element(43, "i", 105);
    \u0275\u0275text(44, "30 Jan 2025 ");
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const data_r2 = ctx.$implicit;
    \u0275\u0275advance(5);
    \u0275\u0275classMap(data_r2.PowerClass);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(data_r2.kanbanPower);
    \u0275\u0275advance(15);
    \u0275\u0275textInterpolate(data_r2.Name);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngClass", data_r2.Status === "Open" ? "badge-soft-primary " : "badge-soft-warning");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", data_r2.Status);
  }
}
function TicketKanbanComponent_For_179_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 71)(1, "div", 85)(2, "div", 23)(3, "div", 86)(4, "div", 7)(5, "span");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 62)(8, "a", 88);
    \u0275\u0275element(9, "i", 89);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "ul", 65)(11, "li")(12, "a", 66);
    \u0275\u0275element(13, "i", 67);
    \u0275\u0275text(14, "Edit");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "li")(16, "a", 68);
    \u0275\u0275element(17, "i", 69);
    \u0275\u0275text(18, "Delete");
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(19, "div", 90)(20, "h6", 91);
    \u0275\u0275text(21);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "div", 92)(23, "span", 93);
    \u0275\u0275text(24, " #1234");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "span", 163);
    \u0275\u0275element(26, "i", 164);
    \u0275\u0275text(27);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(28, "div", 57)(29, "div", 96)(30, "span", 97);
    \u0275\u0275element(31, "img", 98);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "span", 97);
    \u0275\u0275element(33, "img", 99);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(34, "span", 97);
    \u0275\u0275element(35, "img", 100);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(36, "span", 97);
    \u0275\u0275element(37, "img", 101);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(38, "span", 97);
    \u0275\u0275element(39, "img", 102);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(40, "a", 103);
    \u0275\u0275text(41, " 1+ ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(42, "div", 104);
    \u0275\u0275element(43, "i", 105);
    \u0275\u0275text(44, "30 Jan 2025 ");
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const data_r3 = ctx.$implicit;
    \u0275\u0275advance(5);
    \u0275\u0275classMap(data_r3.PowerClass);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(data_r3.kanbanPower);
    \u0275\u0275advance(15);
    \u0275\u0275textInterpolate(data_r3.Name);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngClass", data_r3.Status === "Open" ? "badge-soft-primary text-primary" : "badge-soft-warning text-warning");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", data_r3.Status);
  }
}
function TicketKanbanComponent_For_209_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 71)(1, "div", 85)(2, "div", 23)(3, "div", 86)(4, "div", 7)(5, "span");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 62)(8, "a", 88);
    \u0275\u0275element(9, "i", 89);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "ul", 65)(11, "li")(12, "a", 66);
    \u0275\u0275element(13, "i", 67);
    \u0275\u0275text(14, "Edit");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "li")(16, "a", 68);
    \u0275\u0275element(17, "i", 69);
    \u0275\u0275text(18, "Delete");
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(19, "div", 90)(20, "h6", 91);
    \u0275\u0275text(21);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "div", 92)(23, "span", 93);
    \u0275\u0275text(24, " #1234");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "span", 163);
    \u0275\u0275element(26, "i", 164);
    \u0275\u0275text(27);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(28, "div", 57)(29, "div", 96)(30, "span", 97);
    \u0275\u0275element(31, "img", 98);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "span", 97);
    \u0275\u0275element(33, "img", 99);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(34, "span", 97);
    \u0275\u0275element(35, "img", 100);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(36, "span", 97);
    \u0275\u0275element(37, "img", 101);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(38, "span", 97);
    \u0275\u0275element(39, "img", 102);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(40, "a", 103);
    \u0275\u0275text(41, " 1+ ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(42, "div", 104);
    \u0275\u0275element(43, "i", 105);
    \u0275\u0275text(44, "30 Jan 2025 ");
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const data_r4 = ctx.$implicit;
    \u0275\u0275advance(5);
    \u0275\u0275classMap(data_r4.PowerClass);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(data_r4.kanbanPower);
    \u0275\u0275advance(15);
    \u0275\u0275textInterpolate(data_r4.Name);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngClass", data_r4.Status === "Open" ? "badge-soft-primary text-primary" : "badge-soft-warning text-warning");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", data_r4.Status);
  }
}
function TicketKanbanComponent_For_239_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 71)(1, "div", 85)(2, "div", 23)(3, "div", 86)(4, "div", 7)(5, "span");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 62)(8, "a", 88);
    \u0275\u0275element(9, "i", 89);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "ul", 65)(11, "li")(12, "a", 66);
    \u0275\u0275element(13, "i", 67);
    \u0275\u0275text(14, "Edit");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "li")(16, "a", 68);
    \u0275\u0275element(17, "i", 69);
    \u0275\u0275text(18, "Delete");
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(19, "div", 90)(20, "h6", 91);
    \u0275\u0275text(21);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "div", 92)(23, "span", 93);
    \u0275\u0275text(24, " #1234");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "span", 163);
    \u0275\u0275element(26, "i", 164);
    \u0275\u0275text(27);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(28, "div", 57)(29, "div", 96)(30, "span", 97);
    \u0275\u0275element(31, "img", 98);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "span", 97);
    \u0275\u0275element(33, "img", 99);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(34, "span", 97);
    \u0275\u0275element(35, "img", 100);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(36, "span", 97);
    \u0275\u0275element(37, "img", 101);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(38, "span", 97);
    \u0275\u0275element(39, "img", 102);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(40, "a", 103);
    \u0275\u0275text(41, " 1+ ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(42, "div", 104);
    \u0275\u0275element(43, "i", 105);
    \u0275\u0275text(44, "30 Jan 2025 ");
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const data_r5 = ctx.$implicit;
    \u0275\u0275advance(5);
    \u0275\u0275classMap(data_r5.PowerClass);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(data_r5.kanbanPower);
    \u0275\u0275advance(15);
    \u0275\u0275textInterpolate(data_r5.Name);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngClass", data_r5.Status === "Open" ? "badge-soft-primary text-primary" : "badge-soft-warning text-warning");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", data_r5.Status);
  }
}
var TicketKanbanComponent = class _TicketKanbanComponent {
  routes = routes;
  lstOne = [];
  lstTwo = [];
  lstThree = [];
  lstFour = [];
  ngOnInit() {
    this.lstOne = [
      {
        kanbanPower: "Low",
        PowerClass: "badge bg-light badge-sm border-info d-flex align-items-center justify-content-center text-info fs-12 fw-medium",
        Name: "Support For Theme",
        Status: "Open"
      },
      {
        kanbanPower: "Medium",
        PowerClass: "badge bg-soft-orange badge-sm border d-flex align-items-center justify-content-center text-orange fs-12 fw-medium text-danger",
        Name: "Verify Your Email",
        Status: "Open"
      }
    ];
    this.lstTwo = [
      {
        kanbanPower: "Low",
        PowerClass: "badge bg-light badge-sm border-info d-flex align-items-center justify-content-center text-info fs-12 fw-medium",
        Name: "Support For Theme",
        Status: "Pending"
      },
      {
        kanbanPower: "Medium",
        PowerClass: "badge bg-soft-orange badge-sm border d-flex align-items-center justify-content-center text-orange fs-12 fw-medium text-danger",
        Name: "Verify Your Email",
        Status: "Pending"
      },
      {
        kanbanPower: "Low",
        PowerClass: "badge bg-light badge-sm border-info d-flex align-items-center justify-content-center text-info fs-12 fw-medium",
        Name: "Support For Theme",
        Status: "Pending"
      },
      {
        kanbanPower: "Medium",
        PowerClass: "badge bg-soft-orange badge-sm border d-flex align-items-center justify-content-center text-orange fs-12 fw-medium text-danger",
        Name: "Verify Your Email",
        Status: "Pending"
      }
    ];
    this.lstThree = [
      {
        kanbanPower: "Low",
        PowerClass: "badge bg-light badge-sm border-info d-flex align-items-center justify-content-center text-info fs-12 fw-medium",
        Name: "Support For Theme",
        Status: "Open"
      },
      {
        kanbanPower: "Medium",
        PowerClass: "badge bg-soft-orange badge-sm border d-flex align-items-center justify-content-center text-orange fs-12 fw-medium text-danger",
        Name: "Verify Your Email",
        Status: "Open"
      }
    ];
    this.lstFour = [
      {
        kanbanPower: "Low",
        PowerClass: "badge bg-light badge-sm border-info d-flex align-items-center justify-content-center text-info fs-12 fw-medium",
        Name: "Support For Theme",
        Status: "Pending"
      },
      {
        kanbanPower: "Medium",
        PowerClass: "badge bg-soft-orange badge-sm border d-flex align-items-center justify-content-center text-orange fs-12 fw-medium text-danger",
        Name: "Verify Your Email",
        Status: "Pending"
      }
    ];
  }
  //  drap and drop
  onDrop(event) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data, event.container.data, event.previousIndex, event.currentIndex);
    }
  }
  static \u0275fac = function TicketKanbanComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _TicketKanbanComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _TicketKanbanComponent, selectors: [["app-ticket-kanban"]], decls: 1030, vars: 31, consts: [["FirstList", "cdkDropList"], ["SecondList", "cdkDropList"], ["ThirdList", "cdkDropList"], ["FourList", "cdkDropList"], [1, "content-two"], [1, "d-flex", "d-block", "align-items-center", "justify-content-between", "flex-wrap", "gap-3", "mb-3"], [1, "d-flex", "my-xl-auto", "right-content", "align-items-center", "flex-wrap", "gap-2"], [1, "d-flex", "align-items-center"], [1, "btn", "btn-outline-white", "p-2", "d-inline-flex", "align-items-center", "justify-content-center", "me-2", 3, "routerLink"], [1, "isax", "isax-menu-1"], [1, "isax", "isax-grid-25"], [1, "btn", "btn-primary", "p-2", "d-inline-flex", "align-items-center", "justify-content-center", "me-1", 3, "routerLink"], [1, "isax", "isax-kanban"], [1, "dropdown", "me-1"], ["href", "javascript:void(0);", "data-bs-toggle", "dropdown", 1, "btn", "btn-outline-white", "d-inline-flex", "align-items-center"], [1, "isax", "isax-export-1", "me-1"], [1, "dropdown-menu"], ["href", "javascript:void(0);", "data-bs-toggle", "tab", "data-bs-target", "#tab", 1, "dropdown-item"], ["href", "javascript:void(0);", "data-bs-toggle", "modal", "data-bs-target", "#add_modal", 1, "btn", "btn-primary", "d-flex", "align-items-center"], [1, "isax", "isax-add-circle5", "me-1"], [1, "row"], [1, "col-xl-3", "col-lg-4", "col-md-6"], [1, "card", "position-relative"], [1, "card-body"], [1, "d-flex", "align-items-center", "justify-content-between", "mb-2", "pb-2", "border-bottom"], [1, "mb-1"], [1, "fs-16", "fw-semibold"], [1, "avatar", "bg-primary", "rounded-circle"], [1, "isax", "isax-receipt-item"], [1, "fs-13", "mb-0"], [1, "text-success"], [1, "isax", "isax-send", "text-success", "me-1"], [1, "position-absolute", "end-0", "bottom-0"], ["src", "assets/img/bg/card-overlay-01.svg", "alt", "User Img"], [1, "avatar", "bg-success", "rounded-circle"], [1, "isax", "isax-tick-circle"], ["src", "assets/img/bg/card-overlay-02.svg", "alt", "User Img"], [1, "avatar", "bg-warning", "rounded-circle"], [1, "isax", "isax-timer"], ["src", "assets/img/bg/card-overlay-03.svg", "alt", "User Img"], [1, "avatar", "bg-danger", "rounded-circle"], [1, "isax", "isax-information"], [1, "text-danger"], [1, "isax", "isax-received", "text-danger", "me-1"], ["src", "assets/img/bg/card-overlay-04.svg", "alt", "User Img"], [1, "nav", "nav-tabs", "nav-bordered", "mb-3", "gap-2"], [1, "nav-item"], ["href", "javascript:void(0);", "data-bs-toggle", "tab", "data-bs-target", "#All_tab", 1, "nav-link", "active"], ["href", "javascript:void(0);", "data-bs-toggle", "tab", "data-bs-target", "#Open_tab", 1, "nav-link"], ["href", "javascript:void(0);", "data-bs-toggle", "tab", "data-bs-target", "#Resolved_tab", 1, "nav-link"], ["href", "javascript:void(0);", "data-bs-toggle", "tab", "data-bs-target", "#Pending_tab", 1, "nav-link"], ["href", "javascript:void(0);", "data-bs-toggle", "tab", "data-bs-target", "#Closed_tab", 1, "nav-link"], ["id", "pills-tabContent", 1, "tab-content"], ["id", "All_tab", "role", "tabpanel", 1, "tab-pane", "fade", "show", "active"], [1, "d-flex", "align-items-start", "overflow-auto", "project-status", "flex-wrap", "flex-lg-nowrap", "flex-md-nowrap"], [1, "p-3", "rounded", "bg-light", "w-100", "me-3"], [1, "bg-white", "border", "p-2", "rounded", "mb-2"], [1, "d-flex", "align-items-center", "justify-content-between"], [1, "bg-soft-pink", "p-1", "d-flex", "rounded-circle", "me-2"], [1, "bg-info", "rounded-circle", "d-block", "p-1"], [1, "me-2", "fs-16", "fw-semibold"], [1, "badge", "bg-light", "rounded-circle", "fs-10", "avatar", "avatar-xs", "text-dark"], [1, "dropdown"], ["href", "javascript:void(0);", "data-bs-toggle", "dropdown", 1, "d-inline-flex", "align-items-center", "btn", "btn-white", "border-0"], [1, "isax", "isax-more"], [1, "dropdown-menu", "dropdown-menu-end", "p-3"], ["href", "javascript:void(0);", "data-bs-toggle", "modal", "data-bs-target", "#edit_modal", 1, "dropdown-item", "rounded-1"], [1, "isax", "isax-edit", "me-2"], ["href", "javascript:void(0);", "data-bs-toggle", "modal", "data-bs-target", "#delete_modal", 1, "dropdown-item", "rounded-1"], [1, "isax", "isax-trash", "me-2"], ["cdkDropList", "", 1, "kanban-drag-wrap", 3, "cdkDropListDropped", "cdkDropListData", "cdkDropListConnectedTo"], ["cdkDrag", ""], [1, "pt-2"], ["href", "javascript:void(0);", "data-bs-toggle", "modal", "data-bs-target", "#add_modal", 1, "btn", "btn-white", "bg-white", "border", "d-flex", "align-items-center", "justify-content-center"], [1, "isax", "isax-add-circle", "text-gray-9", "fs-13", "me-1"], [1, "bg-transparent-primary", "p-1", "d-flex", "rounded-circle", "me-2"], [1, "bg-primary", "rounded-circle", "d-block", "p-1"], ["cdkDropList", "", "cdkDropList", "", 1, "kanban-drag-wrap", 3, "cdkDropListDropped", "cdkDropListData", "cdkDropListConnectedTo"], [1, "bg-soft-danger", "p-1", "d-flex", "rounded-circle", "me-2"], [1, "bg-danger", "rounded-circle", "d-block", "p-1"], [1, "p-3", "rounded", "bg-light", "w-100"], [1, "bg-transparent-success", "p-1", "d-flex", "rounded-circle", "me-2"], [1, "bg-success", "rounded-circle", "d-block", "p-1"], ["id", "Open_tab", "role", "tabpanel", 1, "tab-pane", "fade"], [1, "kanban-drag-wrap"], [1, "card", "kanban-card", "mb-2"], [1, "d-flex", "align-items-center", "justify-content-between", "mb-3", "border-bottom", "pb-2"], [1, "badge", "bg-light", "badge-sm", "border-info", "d-flex", "align-items-center", "justify-content-center", "text-info", "fs-12", "fw-medium"], ["href", "javascript:void(0);", "data-bs-toggle", "dropdown", 1, "d-inline-flex", "align-items-center", "bg-white", "rounded-circle", "p-1", "border", "justify-content-center"], [1, "isax", "isax-more", "d-flex", "align-items-center", "justify-content-center", "text-gray-5"], [1, "d-flex", "align-items-start", "mb-3", "border-bottom", "border-1", "border-light", "pb-3", "mb-3", "flex-column"], [1, "d-flex", "align-items-center", "mb-3"], [1, "d-flex", "align-items-center", "gap-3"], [1, "badge", "badge-sm", "badge-soft-light", "border", "fs-10", "text-dark"], [1, "badge", "badge-sm", "badge-soft-primary", "fs-10", "text-primary", "fw-medium", "d-flex", "align-items-center", "justify-content-center"], [1, "fa-solid", "fa-circle", "text-primary", "me-1", "fs-5"], [1, "avatar-list-stacked", "avatar-group-sm", "me-3"], [1, "avatar", "avatar-rounded"], ["src", "assets/img/profiles/avatar-10.jpg", "alt", "img", 1, "border", "border-white"], ["src", "assets/img/profiles/avatar-08.jpg", "alt", "img", 1, "border", "border-white"], ["src", "assets/img/profiles/avatar-07.jpg", "alt", "img", 1, "border", "border-white"], ["src", "assets/img/profiles/avatar-02.jpg", "alt", "img", 1, "border", "border-white"], ["src", "assets/img/profiles/avatar-03.jpg", "alt", "img", 1, "border", "border-white"], ["href", "javascript:void(0);", 1, "avatar", "avatar-rounded", "bg-primary", "fs-12", "text-white"], [1, "d-flex", "align-items-center", "fs-12", "text-gray-9"], [1, "isax", "isax-calendar-2", "text-gray-5", "fs-14", "me-1"], [1, "badge", "bg-soft-orange", "badge-sm", "border", "d-flex", "align-items-center", "justify-content-center", "text-orange", "fs-12", "fw-medium", "text-danger"], ["id", "Resolved_tab", "role", "tabpanel", 1, "tab-pane", "fade"], [1, "d-flex", "align-items-start", "overflow-auto", "project-status", "pb-3", "flex-wrap", "flex-lg-nowrap", "flex-md-nowrap"], [1, "badge", "badge-sm", "badge-soft-warning", "fs-10", "text-warning", "fw-medium", "d-flex", "align-items-center", "justify-content-center"], [1, "fa-solid", "fa-circle", "text-warning", "me-1", "fs-5"], [1, "badge", "badge-sm", "badge-soft-warning", "fs-10", "text-warning", "fw-medium"], [1, "fa-solid", "fa-circle", "text-warning", "me-1", "fs-6"], ["id", "Pending_tab", "role", "tabpanel", 1, "tab-pane", "fade"], ["id", "Closed_tab", "role", "tabpanel", 1, "tab-pane", "fade"], ["id", "add_modal", 1, "modal", "fade"], [1, "modal-dialog", "modal-dialog-centered", "modal-lg"], [1, "modal-content"], [1, "modal-header"], [1, "modal-title"], ["type", "button", "data-bs-dismiss", "modal", "aria-label", "Close", 1, "btn-close", "btn-close-modal", "custom-btn-close"], [1, "fa-solid", "fa-x"], [1, "modal-body"], [1, "col-md-6"], [1, "mb-3"], [1, "form-label"], [1, "text-danger", "ms-1"], ["type", "text", 1, "form-control"], ["id", "dateRangePicker", 1, "form-label"], [1, "input-group", "position-relative", "mb-3", "ngxdate"], ["type", "text", "bsDatepicker", "", "container", ".ngxdate", "placeholder", "dd/mm/yyyy", 1, "form-control", "datetimepicker", "rounded-end"], [1, "input-icon-addon", "fs-16", "text-gray-9"], [1, "isax", "isax-calendar-2"], [1, "input-group", "position-relative", "mb-3", "ngxdate1"], ["type", "text", "bsDatepicker", "", "container", ".ngxdate1", "placeholder", "dd/mm/yyyy", 1, "form-control", "datetimepicker", "rounded-end"], [1, "input-group", "position-relative", "mb-3", "ngxdate2"], ["type", "text", "bsDatepicker", "", "container", ".ngxdate2", "placeholder", "dd/mm/yyyy", 1, "form-control", "datetimepicker", "rounded-end"], ["placeholder", "Select", 1, "custom-mat-select", "select"], ["value", "1"], [1, "col-md-12"], [1, "form-control"], [1, "modal-footer", "d-flex", "align-items-center", "justify-content-between", "gap-1"], ["type", "button", "data-bs-dismiss", "modal", 1, "btn", "btn-outline-white"], ["type", "submit", "data-bs-dismiss", "modal", 1, "btn", "btn-primary"], ["id", "edit_modal", 1, "modal", "fade"], ["type", "text", "value", "Management", 1, "form-control"], ["type", "text", "value", "Joh Carter", 1, "form-control"], [1, "input-group", "position-relative", "mb-3", "ngxdate4"], ["type", "text", "bsDatepicker", "", "container", ".ngxdate4", "placeholder", "dd/mm/yyyy", 1, "form-control", "datetimepicker", "rounded-end"], [1, "input-group", "position-relative", "mb-3", "ngxdate5"], ["type", "text", "bsDatepicker", "", "container", ".ngxdate5", "placeholder", "dd/mm/yyyy", 1, "form-control", "datetimepicker", "rounded-end"], [1, "input-group", "position-relative", "mb-3", "ngxdate6"], ["type", "text", "bsDatepicker", "", "container", ".ngxdate6", "placeholder", "dd/mm/yyyy", 1, "form-control", "datetimepicker", "rounded-end"], ["type", "text", "value", "Emma Lewis", 1, "form-control"], ["placeholder", "High", 1, "custom-mat-select", "select"], ["placeholder", "Open", 1, "custom-mat-select", "select"], ["id", "delete_modal", 1, "modal", "fade"], [1, "modal-dialog", "modal-dialog-centered", "modal-sm"], [1, "modal-body", "text-center"], ["src", "assets/img/icons/delete.svg", "alt", "img"], [1, "d-flex", "justify-content-center"], ["href", "javascript:void(0);", "data-bs-dismiss", "modal", 1, "btn", "btn-outline-white", "me-3"], ["href", "javascript:void(0);", "data-bs-dismiss", "modal", 1, "btn", "btn-primary"], [1, "badge", "badge-sm", "fs-10", "fw-medium", "d-flex", "align-items-center", "justify-content-center", 3, "ngClass"], [1, "fa-solid", "fa-circle", "me-1", "fs-5"]], template: function TicketKanbanComponent_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = \u0275\u0275getCurrentView();
      \u0275\u0275elementStart(0, "div", 4)(1, "div", 5)(2, "div")(3, "h6");
      \u0275\u0275text(4, "Tickets Kanban View");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(5, "div", 6)(6, "div", 7)(7, "a", 8);
      \u0275\u0275element(8, "i", 9);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(9, "a", 8);
      \u0275\u0275element(10, "i", 10);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(11, "a", 11);
      \u0275\u0275element(12, "i", 12);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(13, "div", 13)(14, "a", 14);
      \u0275\u0275element(15, "i", 15);
      \u0275\u0275text(16, "Export ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(17, "ul", 16)(18, "li")(19, "a", 17);
      \u0275\u0275text(20, "Download as PDF");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(21, "li")(22, "a", 17);
      \u0275\u0275text(23, "Download as Excel");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(24, "div")(25, "a", 18);
      \u0275\u0275element(26, "i", 19);
      \u0275\u0275text(27, "New Ticket ");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(28, "div", 20)(29, "div", 21)(30, "div", 22)(31, "div", 23)(32, "div", 24)(33, "div")(34, "p", 25);
      \u0275\u0275text(35, "Total Tickets");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(36, "h6", 26);
      \u0275\u0275text(37, "298");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(38, "div")(39, "span", 27);
      \u0275\u0275element(40, "i", 28);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(41, "p", 29)(42, "span", 30);
      \u0275\u0275element(43, "i", 31);
      \u0275\u0275text(44, "5.62%");
      \u0275\u0275elementEnd();
      \u0275\u0275text(45, "from last month");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(46, "span", 32);
      \u0275\u0275element(47, "img", 33);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(48, "div", 21)(49, "div", 22)(50, "div", 23)(51, "div", 24)(52, "div")(53, "p", 25);
      \u0275\u0275text(54, "Completed Tickets");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(55, "h6", 26);
      \u0275\u0275text(56, "185");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(57, "div")(58, "span", 34);
      \u0275\u0275element(59, "i", 35);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(60, "p", 29)(61, "span", 30);
      \u0275\u0275element(62, "i", 31);
      \u0275\u0275text(63, "11.4%");
      \u0275\u0275elementEnd();
      \u0275\u0275text(64, " from last month");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(65, "span", 32);
      \u0275\u0275element(66, "img", 36);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(67, "div", 21)(68, "div", 22)(69, "div", 23)(70, "div", 24)(71, "div")(72, "p", 25);
      \u0275\u0275text(73, "In Progress Tickets");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(74, "h6", 26);
      \u0275\u0275text(75, "32");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(76, "div")(77, "span", 37);
      \u0275\u0275element(78, "i", 38);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(79, "p", 29)(80, "span", 30);
      \u0275\u0275element(81, "i", 31);
      \u0275\u0275text(82, "8.52%");
      \u0275\u0275elementEnd();
      \u0275\u0275text(83, " from last month");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(84, "span", 32);
      \u0275\u0275element(85, "img", 39);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(86, "div", 21)(87, "div", 22)(88, "div", 23)(89, "div", 24)(90, "div")(91, "p", 25);
      \u0275\u0275text(92, "Closed Tickets");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(93, "h6", 26);
      \u0275\u0275text(94, "24");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(95, "div")(96, "span", 40);
      \u0275\u0275element(97, "i", 41);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(98, "p", 29)(99, "span", 42);
      \u0275\u0275element(100, "i", 43);
      \u0275\u0275text(101, "7.45%");
      \u0275\u0275elementEnd();
      \u0275\u0275text(102, " from last month");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(103, "span", 32);
      \u0275\u0275element(104, "img", 44);
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(105, "ul", 45)(106, "li", 46)(107, "a", 47);
      \u0275\u0275text(108, "All");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(109, "li", 46)(110, "a", 48);
      \u0275\u0275text(111, "Open");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(112, "li", 46)(113, "a", 49);
      \u0275\u0275text(114, "Resolved");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(115, "li", 46)(116, "a", 50);
      \u0275\u0275text(117, "Pending");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(118, "li", 46)(119, "a", 51);
      \u0275\u0275text(120, "Closed");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(121, "div", 52)(122, "div", 53)(123, "div", 54)(124, "div", 55)(125, "div", 56)(126, "div", 57)(127, "div", 7)(128, "span", 58);
      \u0275\u0275element(129, "span", 59);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(130, "h6", 60);
      \u0275\u0275text(131, "Open");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(132, "span", 61);
      \u0275\u0275text(133, "5");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(134, "div", 62)(135, "a", 63);
      \u0275\u0275element(136, "i", 64);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(137, "ul", 65)(138, "li")(139, "a", 66);
      \u0275\u0275element(140, "i", 67);
      \u0275\u0275text(141, "Edit");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(142, "li")(143, "a", 68);
      \u0275\u0275element(144, "i", 69);
      \u0275\u0275text(145, "Delete");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(146, "div", 70, 0);
      \u0275\u0275listener("cdkDropListDropped", function TicketKanbanComponent_Template_div_cdkDropListDropped_146_listener($event) {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.onDrop($event));
      });
      \u0275\u0275repeaterCreate(148, TicketKanbanComponent_For_149_Template, 45, 6, "div", 71, \u0275\u0275repeaterTrackByIdentity);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(150, "div", 72)(151, "a", 73);
      \u0275\u0275element(152, "i", 74);
      \u0275\u0275text(153, " New Ticket ");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(154, "div", 55)(155, "div", 56)(156, "div", 57)(157, "div", 7)(158, "span", 75);
      \u0275\u0275element(159, "span", 76);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(160, "h6", 60);
      \u0275\u0275text(161, "Pending");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(162, "span", 61);
      \u0275\u0275text(163, "9");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(164, "div", 62)(165, "a", 63);
      \u0275\u0275element(166, "i", 64);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(167, "ul", 65)(168, "li")(169, "a", 66);
      \u0275\u0275element(170, "i", 67);
      \u0275\u0275text(171, "Edit");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(172, "li")(173, "a", 68);
      \u0275\u0275element(174, "i", 69);
      \u0275\u0275text(175, "Delete");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(176, "div", 77, 1);
      \u0275\u0275listener("cdkDropListDropped", function TicketKanbanComponent_Template_div_cdkDropListDropped_176_listener($event) {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.onDrop($event));
      });
      \u0275\u0275repeaterCreate(178, TicketKanbanComponent_For_179_Template, 45, 6, "div", 71, \u0275\u0275repeaterTrackByIdentity);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(180, "div", 72)(181, "a", 73);
      \u0275\u0275element(182, "i", 74);
      \u0275\u0275text(183, " New Ticket ");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(184, "div", 55)(185, "div", 56)(186, "div", 57)(187, "div", 7)(188, "span", 78);
      \u0275\u0275element(189, "span", 79);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(190, "h6", 60);
      \u0275\u0275text(191, "Closed");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(192, "span", 61);
      \u0275\u0275text(193, "7");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(194, "div", 62)(195, "a", 63);
      \u0275\u0275element(196, "i", 64);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(197, "ul", 65)(198, "li")(199, "a", 66);
      \u0275\u0275element(200, "i", 67);
      \u0275\u0275text(201, "Edit");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(202, "li")(203, "a", 68);
      \u0275\u0275element(204, "i", 69);
      \u0275\u0275text(205, "Delete");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(206, "div", 70, 2);
      \u0275\u0275listener("cdkDropListDropped", function TicketKanbanComponent_Template_div_cdkDropListDropped_206_listener($event) {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.onDrop($event));
      });
      \u0275\u0275repeaterCreate(208, TicketKanbanComponent_For_209_Template, 45, 6, "div", 71, \u0275\u0275repeaterTrackByIdentity);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(210, "div", 72)(211, "a", 73);
      \u0275\u0275element(212, "i", 74);
      \u0275\u0275text(213, " New Ticket ");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(214, "div", 80)(215, "div", 56)(216, "div", 57)(217, "div", 7)(218, "span", 81);
      \u0275\u0275element(219, "span", 82);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(220, "h6", 60);
      \u0275\u0275text(221, "Resolved");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(222, "span", 61);
      \u0275\u0275text(223, "7");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(224, "div", 62)(225, "a", 63);
      \u0275\u0275element(226, "i", 64);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(227, "ul", 65)(228, "li")(229, "a", 66);
      \u0275\u0275element(230, "i", 67);
      \u0275\u0275text(231, "Edit");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(232, "li")(233, "a", 68);
      \u0275\u0275element(234, "i", 69);
      \u0275\u0275text(235, "Delete");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(236, "div", 70, 3);
      \u0275\u0275listener("cdkDropListDropped", function TicketKanbanComponent_Template_div_cdkDropListDropped_236_listener($event) {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.onDrop($event));
      });
      \u0275\u0275repeaterCreate(238, TicketKanbanComponent_For_239_Template, 45, 6, "div", 71, \u0275\u0275repeaterTrackByIdentity);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(240, "div", 72)(241, "a", 73);
      \u0275\u0275element(242, "i", 74);
      \u0275\u0275text(243, " New Ticket ");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(244, "div", 83)(245, "div", 54)(246, "div", 55)(247, "div", 56)(248, "div", 57)(249, "div", 7)(250, "span", 58);
      \u0275\u0275element(251, "span", 59);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(252, "h6", 60);
      \u0275\u0275text(253, "Open");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(254, "span", 61);
      \u0275\u0275text(255, "5");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(256, "div", 62)(257, "a", 63);
      \u0275\u0275element(258, "i", 64);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(259, "ul", 65)(260, "li")(261, "a", 66);
      \u0275\u0275element(262, "i", 67);
      \u0275\u0275text(263, "Edit");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(264, "li")(265, "a", 68);
      \u0275\u0275element(266, "i", 69);
      \u0275\u0275text(267, "Delete");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(268, "div", 84)(269, "div")(270, "div", 85)(271, "div", 23)(272, "div", 86)(273, "div", 7)(274, "span", 87);
      \u0275\u0275text(275, "Low");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(276, "div", 62)(277, "a", 88);
      \u0275\u0275element(278, "i", 89);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(279, "ul", 65)(280, "li")(281, "a", 66);
      \u0275\u0275element(282, "i", 67);
      \u0275\u0275text(283, "Edit");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(284, "li")(285, "a", 68);
      \u0275\u0275element(286, "i", 69);
      \u0275\u0275text(287, "Delete");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(288, "div", 90)(289, "h6", 91);
      \u0275\u0275text(290, "Support For Theme");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(291, "div", 92)(292, "span", 93);
      \u0275\u0275text(293, " #1234");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(294, "span", 94);
      \u0275\u0275element(295, "i", 95);
      \u0275\u0275text(296, " Open");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(297, "div", 57)(298, "div", 96)(299, "span", 97);
      \u0275\u0275element(300, "img", 98);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(301, "span", 97);
      \u0275\u0275element(302, "img", 99);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(303, "span", 97);
      \u0275\u0275element(304, "img", 100);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(305, "span", 97);
      \u0275\u0275element(306, "img", 101);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(307, "span", 97);
      \u0275\u0275element(308, "img", 102);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(309, "a", 103);
      \u0275\u0275text(310, " 1+ ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(311, "div", 104);
      \u0275\u0275element(312, "i", 105);
      \u0275\u0275text(313, "30 Jan 2025 ");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(314, "div")(315, "div", 85)(316, "div", 23)(317, "div", 86)(318, "div", 7)(319, "span", 106);
      \u0275\u0275text(320, "Medium");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(321, "div", 62)(322, "a", 88);
      \u0275\u0275element(323, "i", 89);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(324, "ul", 65)(325, "li")(326, "a", 66);
      \u0275\u0275element(327, "i", 67);
      \u0275\u0275text(328, "Edit");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(329, "li")(330, "a", 68);
      \u0275\u0275element(331, "i", 69);
      \u0275\u0275text(332, "Delete");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(333, "div", 90)(334, "h6", 91);
      \u0275\u0275text(335, "Verify your email");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(336, "div", 92)(337, "span", 93);
      \u0275\u0275text(338, " #1234");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(339, "span", 94);
      \u0275\u0275element(340, "i", 95);
      \u0275\u0275text(341, " Open");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(342, "div", 57)(343, "div", 96)(344, "span", 97);
      \u0275\u0275element(345, "img", 98);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(346, "span", 97);
      \u0275\u0275element(347, "img", 99);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(348, "span", 97);
      \u0275\u0275element(349, "img", 100);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(350, "span", 97);
      \u0275\u0275element(351, "img", 101);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(352, "span", 97);
      \u0275\u0275element(353, "img", 102);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(354, "a", 103);
      \u0275\u0275text(355, " 1+ ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(356, "div", 104);
      \u0275\u0275element(357, "i", 105);
      \u0275\u0275text(358, "30 Jan 2025 ");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(359, "div", 72)(360, "a", 73);
      \u0275\u0275element(361, "i", 74);
      \u0275\u0275text(362, " New Ticket ");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(363, "div", 107)(364, "div", 108)(365, "div", 80)(366, "div", 56)(367, "div", 57)(368, "div", 7)(369, "span", 81);
      \u0275\u0275element(370, "span", 82);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(371, "h6", 60);
      \u0275\u0275text(372, "Resolved");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(373, "span", 61);
      \u0275\u0275text(374, "7");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(375, "div", 62)(376, "a", 63);
      \u0275\u0275element(377, "i", 64);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(378, "ul", 65)(379, "li")(380, "a", 66);
      \u0275\u0275element(381, "i", 67);
      \u0275\u0275text(382, "Edit");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(383, "li")(384, "a", 68);
      \u0275\u0275element(385, "i", 69);
      \u0275\u0275text(386, "Delete");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(387, "div", 84)(388, "div")(389, "div", 85)(390, "div", 23)(391, "div", 86)(392, "div", 7)(393, "span", 87);
      \u0275\u0275text(394, "Low");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(395, "div", 62)(396, "a", 88);
      \u0275\u0275element(397, "i", 89);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(398, "ul", 65)(399, "li")(400, "a", 66);
      \u0275\u0275element(401, "i", 67);
      \u0275\u0275text(402, "Edit");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(403, "li")(404, "a", 68);
      \u0275\u0275element(405, "i", 69);
      \u0275\u0275text(406, "Delete");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(407, "div", 90)(408, "h6", 91);
      \u0275\u0275text(409, "Support For Theme");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(410, "div", 92)(411, "span", 93);
      \u0275\u0275text(412, " #1234");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(413, "span", 109);
      \u0275\u0275element(414, "i", 110);
      \u0275\u0275text(415, " Pending");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(416, "div", 57)(417, "div", 96)(418, "span", 97);
      \u0275\u0275element(419, "img", 98);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(420, "span", 97);
      \u0275\u0275element(421, "img", 99);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(422, "span", 97);
      \u0275\u0275element(423, "img", 100);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(424, "span", 97);
      \u0275\u0275element(425, "img", 101);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(426, "span", 97);
      \u0275\u0275element(427, "img", 102);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(428, "a", 103);
      \u0275\u0275text(429, " 1+ ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(430, "div", 104);
      \u0275\u0275element(431, "i", 105);
      \u0275\u0275text(432, "30 Jan 2025 ");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(433, "div")(434, "div", 85)(435, "div", 23)(436, "div", 86)(437, "div", 7)(438, "span", 106);
      \u0275\u0275text(439, "Medium");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(440, "div", 62)(441, "a", 88);
      \u0275\u0275element(442, "i", 89);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(443, "ul", 65)(444, "li")(445, "a", 66);
      \u0275\u0275element(446, "i", 67);
      \u0275\u0275text(447, "Edit");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(448, "li")(449, "a", 68);
      \u0275\u0275element(450, "i", 69);
      \u0275\u0275text(451, "Delete");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(452, "div", 90)(453, "h6", 91);
      \u0275\u0275text(454, "Verify your email");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(455, "div", 92)(456, "span", 93);
      \u0275\u0275text(457, " #1234");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(458, "span", 111);
      \u0275\u0275element(459, "i", 112);
      \u0275\u0275text(460, " Pending");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(461, "div", 57)(462, "div", 96)(463, "span", 97);
      \u0275\u0275element(464, "img", 98);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(465, "span", 97);
      \u0275\u0275element(466, "img", 99);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(467, "span", 97);
      \u0275\u0275element(468, "img", 100);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(469, "span", 97);
      \u0275\u0275element(470, "img", 101);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(471, "span", 97);
      \u0275\u0275element(472, "img", 102);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(473, "a", 103);
      \u0275\u0275text(474, " 1+ ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(475, "div", 104);
      \u0275\u0275element(476, "i", 105);
      \u0275\u0275text(477, "30 Jan 2025 ");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(478, "div", 72)(479, "a", 73);
      \u0275\u0275element(480, "i", 74);
      \u0275\u0275text(481, " New Ticket ");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(482, "div", 113)(483, "div", 108)(484, "div", 55)(485, "div", 56)(486, "div", 57)(487, "div", 7)(488, "span", 75);
      \u0275\u0275element(489, "span", 76);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(490, "h6", 60);
      \u0275\u0275text(491, "Pending");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(492, "span", 61);
      \u0275\u0275text(493, "9");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(494, "div", 62)(495, "a", 63);
      \u0275\u0275element(496, "i", 64);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(497, "ul", 65)(498, "li")(499, "a", 66);
      \u0275\u0275element(500, "i", 67);
      \u0275\u0275text(501, "Edit");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(502, "li")(503, "a", 68);
      \u0275\u0275element(504, "i", 69);
      \u0275\u0275text(505, "Delete");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(506, "div", 84)(507, "div")(508, "div", 85)(509, "div", 23)(510, "div", 86)(511, "div", 7)(512, "span", 87);
      \u0275\u0275text(513, "Low");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(514, "div", 62)(515, "a", 88);
      \u0275\u0275element(516, "i", 89);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(517, "ul", 65)(518, "li")(519, "a", 66);
      \u0275\u0275element(520, "i", 67);
      \u0275\u0275text(521, "Edit");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(522, "li")(523, "a", 68);
      \u0275\u0275element(524, "i", 69);
      \u0275\u0275text(525, "Delete");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(526, "div", 90)(527, "h6", 91);
      \u0275\u0275text(528, "Support For Theme");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(529, "div", 92)(530, "span", 93);
      \u0275\u0275text(531, " #1234");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(532, "span", 109);
      \u0275\u0275element(533, "i", 110);
      \u0275\u0275text(534, " Pending");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(535, "div", 57)(536, "div", 96)(537, "span", 97);
      \u0275\u0275element(538, "img", 98);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(539, "span", 97);
      \u0275\u0275element(540, "img", 99);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(541, "span", 97);
      \u0275\u0275element(542, "img", 100);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(543, "span", 97);
      \u0275\u0275element(544, "img", 101);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(545, "span", 97);
      \u0275\u0275element(546, "img", 102);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(547, "a", 103);
      \u0275\u0275text(548, " 1+ ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(549, "div", 104);
      \u0275\u0275element(550, "i", 105);
      \u0275\u0275text(551, "30 Jan 2025 ");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(552, "div")(553, "div", 85)(554, "div", 23)(555, "div", 86)(556, "div", 7)(557, "span", 106);
      \u0275\u0275text(558, "Medium");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(559, "div", 62)(560, "a", 88);
      \u0275\u0275element(561, "i", 89);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(562, "ul", 65)(563, "li")(564, "a", 66);
      \u0275\u0275element(565, "i", 67);
      \u0275\u0275text(566, "Edit");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(567, "li")(568, "a", 68);
      \u0275\u0275element(569, "i", 69);
      \u0275\u0275text(570, "Delete");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(571, "div", 90)(572, "h6", 91);
      \u0275\u0275text(573, "Verify your email");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(574, "div", 92)(575, "span", 93);
      \u0275\u0275text(576, " #1234");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(577, "span", 109);
      \u0275\u0275element(578, "i", 110);
      \u0275\u0275text(579, " Pending");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(580, "div", 57)(581, "div", 96)(582, "span", 97);
      \u0275\u0275element(583, "img", 98);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(584, "span", 97);
      \u0275\u0275element(585, "img", 99);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(586, "span", 97);
      \u0275\u0275element(587, "img", 100);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(588, "span", 97);
      \u0275\u0275element(589, "img", 101);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(590, "span", 97);
      \u0275\u0275element(591, "img", 102);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(592, "a", 103);
      \u0275\u0275text(593, " 1+ ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(594, "div", 104);
      \u0275\u0275element(595, "i", 105);
      \u0275\u0275text(596, "30 Jan 2025 ");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(597, "div")(598, "div", 85)(599, "div", 23)(600, "div", 86)(601, "div", 7)(602, "span", 87);
      \u0275\u0275text(603, "Low");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(604, "div", 62)(605, "a", 88);
      \u0275\u0275element(606, "i", 89);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(607, "ul", 65)(608, "li")(609, "a", 66);
      \u0275\u0275element(610, "i", 67);
      \u0275\u0275text(611, "Edit");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(612, "li")(613, "a", 68);
      \u0275\u0275element(614, "i", 69);
      \u0275\u0275text(615, "Delete");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(616, "div", 90)(617, "h6", 91);
      \u0275\u0275text(618, "Support For Theme");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(619, "div", 92)(620, "span", 93);
      \u0275\u0275text(621, " #1234");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(622, "span", 109);
      \u0275\u0275element(623, "i", 110);
      \u0275\u0275text(624, " Pending");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(625, "div", 57)(626, "div", 96)(627, "span", 97);
      \u0275\u0275element(628, "img", 98);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(629, "span", 97);
      \u0275\u0275element(630, "img", 99);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(631, "span", 97);
      \u0275\u0275element(632, "img", 100);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(633, "span", 97);
      \u0275\u0275element(634, "img", 101);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(635, "span", 97);
      \u0275\u0275element(636, "img", 102);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(637, "a", 103);
      \u0275\u0275text(638, " 1+ ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(639, "div", 104);
      \u0275\u0275element(640, "i", 105);
      \u0275\u0275text(641, "30 Jan 2025 ");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(642, "div")(643, "div", 85)(644, "div", 23)(645, "div", 86)(646, "div", 7)(647, "span", 106);
      \u0275\u0275text(648, "Medium");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(649, "div", 62)(650, "a", 88);
      \u0275\u0275element(651, "i", 89);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(652, "ul", 65)(653, "li")(654, "a", 66);
      \u0275\u0275element(655, "i", 67);
      \u0275\u0275text(656, "Edit");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(657, "li")(658, "a", 68);
      \u0275\u0275element(659, "i", 69);
      \u0275\u0275text(660, "Delete");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(661, "div", 90)(662, "h6", 91);
      \u0275\u0275text(663, "Verify your email");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(664, "div", 92)(665, "span", 93);
      \u0275\u0275text(666, " #1234");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(667, "span", 109);
      \u0275\u0275element(668, "i", 110);
      \u0275\u0275text(669, " Pending");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(670, "div", 57)(671, "div", 96)(672, "span", 97);
      \u0275\u0275element(673, "img", 98);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(674, "span", 97);
      \u0275\u0275element(675, "img", 99);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(676, "span", 97);
      \u0275\u0275element(677, "img", 100);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(678, "span", 97);
      \u0275\u0275element(679, "img", 101);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(680, "span", 97);
      \u0275\u0275element(681, "img", 102);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(682, "a", 103);
      \u0275\u0275text(683, " 1+ ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(684, "div", 104);
      \u0275\u0275element(685, "i", 105);
      \u0275\u0275text(686, "30 Jan 2025 ");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(687, "div", 72)(688, "a", 73);
      \u0275\u0275element(689, "i", 74);
      \u0275\u0275text(690, " New Ticket ");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(691, "div", 114)(692, "div", 108)(693, "div", 55)(694, "div", 56)(695, "div", 57)(696, "div", 7)(697, "span", 78);
      \u0275\u0275element(698, "span", 79);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(699, "h6", 60);
      \u0275\u0275text(700, "Closed");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(701, "span", 61);
      \u0275\u0275text(702, "7");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(703, "div", 62)(704, "a", 63);
      \u0275\u0275element(705, "i", 64);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(706, "ul", 65)(707, "li")(708, "a", 66);
      \u0275\u0275element(709, "i", 67);
      \u0275\u0275text(710, "Edit");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(711, "li")(712, "a", 68);
      \u0275\u0275element(713, "i", 69);
      \u0275\u0275text(714, "Delete");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(715, "div", 84)(716, "div")(717, "div", 85)(718, "div", 23)(719, "div", 86)(720, "div", 7)(721, "span", 87);
      \u0275\u0275text(722, "Low");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(723, "div", 62)(724, "a", 88);
      \u0275\u0275element(725, "i", 89);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(726, "ul", 65)(727, "li")(728, "a", 66);
      \u0275\u0275element(729, "i", 67);
      \u0275\u0275text(730, "Edit");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(731, "li")(732, "a", 68);
      \u0275\u0275element(733, "i", 69);
      \u0275\u0275text(734, "Delete");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(735, "div", 90)(736, "h6", 91);
      \u0275\u0275text(737, "Support For Theme");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(738, "div", 92)(739, "span", 93);
      \u0275\u0275text(740, " #1234");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(741, "span", 94);
      \u0275\u0275element(742, "i", 95);
      \u0275\u0275text(743, " Open");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(744, "div", 57)(745, "div", 96)(746, "span", 97);
      \u0275\u0275element(747, "img", 98);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(748, "span", 97);
      \u0275\u0275element(749, "img", 99);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(750, "span", 97);
      \u0275\u0275element(751, "img", 100);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(752, "span", 97);
      \u0275\u0275element(753, "img", 101);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(754, "span", 97);
      \u0275\u0275element(755, "img", 102);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(756, "a", 103);
      \u0275\u0275text(757, " 1+ ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(758, "div", 104);
      \u0275\u0275element(759, "i", 105);
      \u0275\u0275text(760, "30 Jan 2025 ");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(761, "div")(762, "div", 85)(763, "div", 23)(764, "div", 86)(765, "div", 7)(766, "span", 106);
      \u0275\u0275text(767, "Medium");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(768, "div", 62)(769, "a", 88);
      \u0275\u0275element(770, "i", 89);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(771, "ul", 65)(772, "li")(773, "a", 66);
      \u0275\u0275element(774, "i", 67);
      \u0275\u0275text(775, "Edit");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(776, "li")(777, "a", 68);
      \u0275\u0275element(778, "i", 69);
      \u0275\u0275text(779, "Delete");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(780, "div", 90)(781, "h6", 91);
      \u0275\u0275text(782, "Verify your email");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(783, "div", 92)(784, "span", 93);
      \u0275\u0275text(785, " #1234");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(786, "span", 94);
      \u0275\u0275element(787, "i", 95);
      \u0275\u0275text(788, " Open");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(789, "div", 57)(790, "div", 96)(791, "span", 97);
      \u0275\u0275element(792, "img", 98);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(793, "span", 97);
      \u0275\u0275element(794, "img", 99);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(795, "span", 97);
      \u0275\u0275element(796, "img", 100);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(797, "span", 97);
      \u0275\u0275element(798, "img", 101);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(799, "span", 97);
      \u0275\u0275element(800, "img", 102);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(801, "a", 103);
      \u0275\u0275text(802, " 1+ ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(803, "div", 104);
      \u0275\u0275element(804, "i", 105);
      \u0275\u0275text(805, "30 Jan 2025 ");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(806, "div", 72)(807, "a", 73);
      \u0275\u0275element(808, "i", 74);
      \u0275\u0275text(809, " New Ticket ");
      \u0275\u0275elementEnd()()()()()()();
      \u0275\u0275elementStart(810, "div", 115)(811, "div", 116)(812, "div", 117)(813, "div", 118)(814, "h4", 119);
      \u0275\u0275text(815, "Add New Ticket");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(816, "button", 120);
      \u0275\u0275element(817, "i", 121);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(818, "form")(819, "div", 122)(820, "div", 20)(821, "div", 123)(822, "div", 124)(823, "label", 125);
      \u0275\u0275text(824, "Subject");
      \u0275\u0275elementStart(825, "span", 126);
      \u0275\u0275text(826, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(827, "input", 127);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(828, "div", 123)(829, "div", 124)(830, "label", 125);
      \u0275\u0275text(831, "Assigned Name");
      \u0275\u0275elementStart(832, "span", 126);
      \u0275\u0275text(833, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(834, "input", 127);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(835, "div", 123)(836, "div", 124)(837, "label", 128);
      \u0275\u0275text(838, "Assigned Date");
      \u0275\u0275elementStart(839, "span", 126);
      \u0275\u0275text(840, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(841, "div", 129);
      \u0275\u0275element(842, "input", 130);
      \u0275\u0275elementStart(843, "span", 131);
      \u0275\u0275element(844, "i", 132);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(845, "div", 123)(846, "div", 124)(847, "label", 128);
      \u0275\u0275text(848, "Created Date");
      \u0275\u0275elementStart(849, "span", 126);
      \u0275\u0275text(850, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(851, "div", 133);
      \u0275\u0275element(852, "input", 134);
      \u0275\u0275elementStart(853, "span", 131);
      \u0275\u0275element(854, "i", 132);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(855, "div", 123)(856, "div", 124)(857, "label", 128);
      \u0275\u0275text(858, "Due Date");
      \u0275\u0275elementStart(859, "span", 126);
      \u0275\u0275text(860, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(861, "div", 135);
      \u0275\u0275element(862, "input", 136);
      \u0275\u0275elementStart(863, "span", 131);
      \u0275\u0275element(864, "i", 132);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(865, "div", 123)(866, "div", 124)(867, "label", 125);
      \u0275\u0275text(868, "Assignee Name");
      \u0275\u0275elementStart(869, "span", 126);
      \u0275\u0275text(870, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(871, "input", 127);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(872, "div", 123)(873, "div", 124)(874, "label", 125);
      \u0275\u0275text(875, "Priority");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(876, "mat-select", 137)(877, "mat-option", 138);
      \u0275\u0275text(878, "Select");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(879, "mat-option", 138);
      \u0275\u0275text(880, "Medium");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(881, "mat-option", 138);
      \u0275\u0275text(882, "Low");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(883, "mat-option", 138);
      \u0275\u0275text(884, "High");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(885, "div", 123)(886, "div", 124)(887, "label", 125);
      \u0275\u0275text(888, "Status");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(889, "mat-select", 137)(890, "mat-option", 138);
      \u0275\u0275text(891, "Select");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(892, "mat-option", 138);
      \u0275\u0275text(893, "Resolved");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(894, "mat-option", 138);
      \u0275\u0275text(895, "Closed");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(896, "mat-option", 138);
      \u0275\u0275text(897, "Open");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(898, "mat-option", 138);
      \u0275\u0275text(899, "Pending");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(900, "div", 139)(901, "div")(902, "label", 125);
      \u0275\u0275text(903, "Content");
      \u0275\u0275elementStart(904, "span", 126);
      \u0275\u0275text(905, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(906, "textarea", 140);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(907, "div", 141)(908, "button", 142);
      \u0275\u0275text(909, "Cancel");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(910, "button", 143);
      \u0275\u0275text(911, "Create");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(912, "div", 144)(913, "div", 116)(914, "div", 117)(915, "div", 118)(916, "h4", 119);
      \u0275\u0275text(917, "Edit Ticket");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(918, "button", 120);
      \u0275\u0275element(919, "i", 121);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(920, "form")(921, "div", 122)(922, "div", 20)(923, "div", 123)(924, "div", 124)(925, "label", 125);
      \u0275\u0275text(926, "Subject");
      \u0275\u0275elementStart(927, "span", 126);
      \u0275\u0275text(928, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(929, "input", 145);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(930, "div", 123)(931, "div", 124)(932, "label", 125);
      \u0275\u0275text(933, "Assigned Name");
      \u0275\u0275elementStart(934, "span", 126);
      \u0275\u0275text(935, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(936, "input", 146);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(937, "div", 123)(938, "div", 124)(939, "label", 128);
      \u0275\u0275text(940, "Assigned Date");
      \u0275\u0275elementStart(941, "span", 126);
      \u0275\u0275text(942, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(943, "div", 147);
      \u0275\u0275element(944, "input", 148);
      \u0275\u0275elementStart(945, "span", 131);
      \u0275\u0275element(946, "i", 132);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(947, "div", 123)(948, "div", 124)(949, "label", 128);
      \u0275\u0275text(950, "Created Date");
      \u0275\u0275elementStart(951, "span", 126);
      \u0275\u0275text(952, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(953, "div", 149);
      \u0275\u0275element(954, "input", 150);
      \u0275\u0275elementStart(955, "span", 131);
      \u0275\u0275element(956, "i", 132);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(957, "div", 123)(958, "div", 124)(959, "label", 128);
      \u0275\u0275text(960, "Due Date");
      \u0275\u0275elementStart(961, "span", 126);
      \u0275\u0275text(962, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(963, "div", 151);
      \u0275\u0275element(964, "input", 152);
      \u0275\u0275elementStart(965, "span", 131);
      \u0275\u0275element(966, "i", 132);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(967, "div", 123)(968, "div", 124)(969, "label", 125);
      \u0275\u0275text(970, "Assignee Name");
      \u0275\u0275elementStart(971, "span", 126);
      \u0275\u0275text(972, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(973, "input", 153);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(974, "div", 123)(975, "div", 124)(976, "label", 125);
      \u0275\u0275text(977, "Priority");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(978, "mat-select", 154)(979, "mat-option", 138);
      \u0275\u0275text(980, "Select");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(981, "mat-option", 138);
      \u0275\u0275text(982, "Medium");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(983, "mat-option", 138);
      \u0275\u0275text(984, "Low");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(985, "mat-option", 138);
      \u0275\u0275text(986, "High");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(987, "div", 123)(988, "div", 124)(989, "label", 125);
      \u0275\u0275text(990, "Status");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(991, "mat-select", 155)(992, "mat-option", 138);
      \u0275\u0275text(993, "Select");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(994, "mat-option", 138);
      \u0275\u0275text(995, "Resolved");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(996, "mat-option", 138);
      \u0275\u0275text(997, "Closed");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(998, "mat-option", 138);
      \u0275\u0275text(999, "Open");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1e3, "mat-option", 138);
      \u0275\u0275text(1001, "Pending");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(1002, "div", 139)(1003, "div")(1004, "label", 125);
      \u0275\u0275text(1005, "Content");
      \u0275\u0275elementStart(1006, "span", 126);
      \u0275\u0275text(1007, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(1008, "textarea", 140);
      \u0275\u0275text(1009, "Need help? Submit a support ticket, and our team will assist you quickly. Provide your name, email, issue category, and a detailed description of the problem. Choose a priority level and attach relevant files if needed.\n                                        ");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(1010, "div", 141)(1011, "button", 142);
      \u0275\u0275text(1012, "Cancel");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1013, "button", 143);
      \u0275\u0275text(1014, "Save Changes");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(1015, "div", 156)(1016, "div", 157)(1017, "div", 117)(1018, "div", 158)(1019, "div", 124);
      \u0275\u0275element(1020, "img", 159);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1021, "h6", 25);
      \u0275\u0275text(1022, "Delete Tickets Kanban");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1023, "p", 124);
      \u0275\u0275text(1024, "Are you sure, you want to delete Tickets Kanban?");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1025, "div", 160)(1026, "a", 161);
      \u0275\u0275text(1027, "Cancel");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1028, "a", 162);
      \u0275\u0275text(1029, "Yes, Delete");
      \u0275\u0275elementEnd()()()()()();
    }
    if (rf & 2) {
      const FirstList_r6 = \u0275\u0275reference(147);
      const SecondList_r7 = \u0275\u0275reference(177);
      const ThirdList_r8 = \u0275\u0275reference(207);
      const FourList_r9 = \u0275\u0275reference(237);
      \u0275\u0275advance(7);
      \u0275\u0275property("routerLink", ctx.routes.ticketLists);
      \u0275\u0275advance(2);
      \u0275\u0275property("routerLink", ctx.routes.ticketList);
      \u0275\u0275advance(2);
      \u0275\u0275property("routerLink", ctx.routes.ticketKanban);
      \u0275\u0275advance(135);
      \u0275\u0275property("cdkDropListData", ctx.lstOne)("cdkDropListConnectedTo", \u0275\u0275pureFunction4(11, _c0, FirstList_r6, SecondList_r7, ThirdList_r8, FourList_r9));
      \u0275\u0275advance(2);
      \u0275\u0275repeater(ctx.lstOne);
      \u0275\u0275advance(28);
      \u0275\u0275property("cdkDropListData", ctx.lstTwo)("cdkDropListConnectedTo", \u0275\u0275pureFunction4(16, _c0, FirstList_r6, SecondList_r7, ThirdList_r8, FourList_r9));
      \u0275\u0275advance(2);
      \u0275\u0275repeater(ctx.lstTwo);
      \u0275\u0275advance(28);
      \u0275\u0275property("cdkDropListData", ctx.lstThree)("cdkDropListConnectedTo", \u0275\u0275pureFunction4(21, _c0, FirstList_r6, SecondList_r7, ThirdList_r8, FourList_r9));
      \u0275\u0275advance(2);
      \u0275\u0275repeater(ctx.lstThree);
      \u0275\u0275advance(28);
      \u0275\u0275property("cdkDropListData", ctx.lstFour)("cdkDropListConnectedTo", \u0275\u0275pureFunction4(26, _c0, FirstList_r6, SecondList_r7, ThirdList_r8, FourList_r9));
      \u0275\u0275advance(2);
      \u0275\u0275repeater(ctx.lstFour);
    }
  }, dependencies: [MatSelectModule, MatSelect, MatOption, CommonModule, NgClass, DragDropModule, CdkDropList, CdkDrag, RouterLink, BsDatepickerModule, BsDatepickerDirective, BsDatepickerInputDirective], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TicketKanbanComponent, [{
    type: Component,
    args: [{ selector: "app-ticket-kanban", imports: [MatSelectModule, CommonModule, DragDropModule, RouterLink, BsDatepickerModule], template: `            <!-- Start Content -->
            <div class="content-two">

                <!-- Page Header -->
                <div class="d-flex d-block align-items-center justify-content-between flex-wrap gap-3 mb-3">
                    <div>
                        <h6>Tickets Kanban View</h6>
                    </div>
                    <div class="d-flex my-xl-auto right-content align-items-center flex-wrap gap-2">
                        <div class="d-flex align-items-center">
                            <a [routerLink]="routes.ticketLists" class="btn btn-outline-white p-2 d-inline-flex align-items-center justify-content-center me-2"><i class="isax isax-menu-1"></i></a>
                            <a [routerLink]="routes.ticketList" class="btn btn-outline-white p-2 d-inline-flex align-items-center justify-content-center me-2"><i class="isax isax-grid-25"></i></a>
                            <a [routerLink]="routes.ticketKanban" class="btn btn-primary p-2 d-inline-flex align-items-center justify-content-center me-1"><i class="isax isax-kanban"></i></a>
                        </div>
                        <div class="dropdown me-1">
                            <a href="javascript:void(0);" class="btn btn-outline-white d-inline-flex align-items-center" data-bs-toggle="dropdown">
                                <i class="isax isax-export-1 me-1"></i>Export
                            </a>
                            <ul class="dropdown-menu">
                                <li>
                                    <a class="dropdown-item" href="javascript:void(0);" data-bs-toggle="tab" data-bs-target="#tab">Download as PDF</a>
                                </li>
                                <li>
                                    <a class="dropdown-item" href="javascript:void(0);" data-bs-toggle="tab" data-bs-target="#tab">Download as Excel</a>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <a href="javascript:void(0);" class="btn btn-primary d-flex align-items-center" data-bs-toggle="modal" data-bs-target="#add_modal">
                                <i class="isax isax-add-circle5 me-1"></i>New Ticket
                            </a>
                        </div>
                    </div>
                </div>
                <!-- End Page Header -->

                <!-- start row -->
                <div class="row">
                    <div class="col-xl-3 col-lg-4 col-md-6">
                        <div class="card position-relative">
                            <div class="card-body">
                                <div class="d-flex align-items-center justify-content-between mb-2 pb-2 border-bottom">
                                    <div>
                                        <p class="mb-1">Total Tickets</p>
                                        <h6 class="fs-16 fw-semibold">298</h6>
                                    </div>
                                    <div>
                                        <span class="avatar bg-primary rounded-circle">
											<i class="isax isax-receipt-item"></i>
										</span>
                                    </div>
                                </div>
                                <p class="fs-13 mb-0"><span class="text-success"><i class="isax isax-send text-success me-1"></i>5.62%</span>from last month</p>
                                <span class="position-absolute end-0 bottom-0">
									<img src="assets/img/bg/card-overlay-01.svg" alt="User Img">
								</span>
                            </div>
                            <!-- end card body -->
                        </div>
                        <!-- end card -->
                    </div>
                    <div class="col-xl-3 col-lg-4 col-md-6">
                        <div class="card position-relative">
                            <div class="card-body">
                                <div class="d-flex align-items-center justify-content-between mb-2 pb-2 border-bottom">
                                    <div>
                                        <p class="mb-1">Completed Tickets</p>
                                        <h6 class="fs-16 fw-semibold">185</h6>
                                    </div>
                                    <div>
                                        <span class="avatar bg-success rounded-circle">
											<i class="isax isax-tick-circle"></i>
										</span>
                                    </div>
                                </div>
                                <p class="fs-13 mb-0"><span class="text-success"><i class="isax isax-send text-success me-1"></i>11.4%</span> from last month</p>
                                <span class="position-absolute end-0 bottom-0">
									<img src="assets/img/bg/card-overlay-02.svg" alt="User Img">
								</span>
                            </div>
                            <!-- end card body -->
                        </div>
                        <!-- end card -->
                    </div>
                    <div class="col-xl-3 col-lg-4 col-md-6">
                        <div class="card position-relative">
                            <div class="card-body">
                                <div class="d-flex align-items-center justify-content-between mb-2 pb-2 border-bottom">
                                    <div>
                                        <p class="mb-1">In Progress Tickets</p>
                                        <h6 class="fs-16 fw-semibold">32</h6>
                                    </div>
                                    <div>
                                        <span class="avatar bg-warning rounded-circle">
											<i class="isax isax-timer"></i>
										</span>
                                    </div>
                                </div>
                                <p class="fs-13 mb-0"><span class="text-success"><i class="isax isax-send text-success me-1"></i>8.52%</span> from last month</p>
                                <span class="position-absolute end-0 bottom-0">
									<img src="assets/img/bg/card-overlay-03.svg" alt="User Img">
								</span>
                            </div>
                            <!-- end card body -->
                        </div>
                        <!-- end card -->
                    </div>
                    <div class="col-xl-3 col-lg-4 col-md-6">
                        <div class="card position-relative">
                            <div class="card-body">
                                <div class="d-flex align-items-center justify-content-between mb-2 pb-2 border-bottom">
                                    <div>
                                        <p class="mb-1">Closed Tickets</p>
                                        <h6 class="fs-16 fw-semibold">24</h6>
                                    </div>
                                    <div>
                                        <span class="avatar bg-danger rounded-circle">
											<i class="isax isax-information"></i>
										</span>
                                    </div>
                                </div>
                                <p class="fs-13 mb-0"><span class="text-danger"><i class="isax isax-received text-danger me-1"></i>7.45%</span> from last month</p>
                                <span class="position-absolute end-0 bottom-0">
									<img src="assets/img/bg/card-overlay-04.svg" alt="User Img">
								</span>
                            </div>
                            <!-- end card body -->
                        </div>
                        <!-- end card -->
                    </div>
                </div>
                <!-- end row -->

                <!-- Tabs Start-->
                <ul class="nav nav-tabs nav-bordered mb-3 gap-2">
                    <li class="nav-item"><a class="nav-link active" href="javascript:void(0);" data-bs-toggle="tab" data-bs-target="#All_tab">All</a></li>
                    <li class="nav-item"><a class="nav-link" href="javascript:void(0);" data-bs-toggle="tab" data-bs-target="#Open_tab">Open</a></li>
                    <li class="nav-item"><a class="nav-link" href="javascript:void(0);" data-bs-toggle="tab" data-bs-target="#Resolved_tab">Resolved</a></li>
                    <li class="nav-item"><a class="nav-link" href="javascript:void(0);" data-bs-toggle="tab" data-bs-target="#Pending_tab">Pending</a></li>
                    <li class="nav-item"><a class="nav-link" href="javascript:void(0);" data-bs-toggle="tab" data-bs-target="#Closed_tab">Closed</a></li>
                </ul>

                <div class="tab-content" id="pills-tabContent">
                    <div class="tab-pane fade show active" id="All_tab" role="tabpanel">
                        <div class="d-flex align-items-start overflow-auto project-status flex-wrap flex-lg-nowrap flex-md-nowrap">
                            <div class="p-3 rounded bg-light w-100 me-3">
                                <div class="bg-white border p-2 rounded mb-2">
                                    <div class="d-flex align-items-center justify-content-between">
                                        <div class="d-flex align-items-center">
                                            <span class="bg-soft-pink p-1 d-flex rounded-circle me-2"><span class="bg-info rounded-circle d-block p-1"></span></span>
                                            <h6 class="me-2 fs-16 fw-semibold">Open</h6>
                                            <span class="badge bg-light rounded-circle fs-10 avatar avatar-xs text-dark">5</span>
                                        </div>
                                        <div class="dropdown">
                                            <a href="javascript:void(0);" class="d-inline-flex align-items-center btn btn-white border-0" data-bs-toggle="dropdown">
                                                <i class="isax isax-more"></i>
                                            </a>
                                            <ul class="dropdown-menu dropdown-menu-end p-3">
                                                <li>
                                                    <a href="javascript:void(0);" class="dropdown-item rounded-1" data-bs-toggle="modal" data-bs-target="#edit_modal"><i class="isax isax-edit me-2"></i>Edit</a>
                                                </li>
                                                <li>
                                                    <a href="javascript:void(0);" class="dropdown-item rounded-1" data-bs-toggle="modal" data-bs-target="#delete_modal"><i class="isax isax-trash me-2"></i>Delete</a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                <div class="kanban-drag-wrap"
                                cdkDropList
                                #FirstList="cdkDropList"
                                [cdkDropListData]="lstOne"
                                [cdkDropListConnectedTo]="[
                                    FirstList,
                                    SecondList,
                                    ThirdList,
                                    FourList
                                ]"
                                (cdkDropListDropped)="onDrop($event)">
                                @for (data of lstOne; track data) {
                                    <div cdkDrag>
                                        <div class="card kanban-card mb-2">
                                            <div class="card-body">
                                                <div class="d-flex align-items-center justify-content-between mb-3 border-bottom pb-2">
                                                    <div class="d-flex align-items-center">
                                                        <span [class]="data.PowerClass">{{data.kanbanPower}}</span>
                                                    </div>
                                                    <div class="dropdown">
                                                        <a href="javascript:void(0);" class="d-inline-flex align-items-center bg-white rounded-circle p-1 border justify-content-center" data-bs-toggle="dropdown">
                                                            <i class="isax isax-more d-flex align-items-center justify-content-center text-gray-5"></i>
                                                        </a>
                                                        <ul class="dropdown-menu dropdown-menu-end p-3">
                                                            <li>
                                                                <a href="javascript:void(0);" class="dropdown-item rounded-1" data-bs-toggle="modal" data-bs-target="#edit_modal"><i class="isax isax-edit me-2"></i>Edit</a>
                                                            </li>
                                                            <li>
                                                                <a href="javascript:void(0);" class="dropdown-item rounded-1" data-bs-toggle="modal" data-bs-target="#delete_modal"><i class="isax isax-trash me-2"></i>Delete</a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div class="d-flex align-items-start mb-3 border-bottom border-1 border-light pb-3 mb-3 flex-column">
                                                    <h6 class="d-flex align-items-center mb-3">{{data.Name}}</h6>

                                                    <div class="d-flex align-items-center gap-3">
                                                        <span class="badge badge-sm badge-soft-light border fs-10 text-dark"> #1234</span>
                                                        <span class="badge badge-sm fs-10  fw-medium d-flex align-items-center justify-content-center" [ngClass]="data.Status==='Open'?'badge-soft-primary ':'badge-soft-warning'"> <i class="fa-solid fa-circle me-1 fs-5"></i> {{data.Status}}</span>
                                                    </div>

                                                </div>
                                                <div class="d-flex align-items-center justify-content-between">
                                                    <div class="avatar-list-stacked avatar-group-sm me-3">
                                                        <span class="avatar avatar-rounded">
														<img class="border border-white" src="assets/img/profiles/avatar-10.jpg" alt="img">
													</span>
                                                        <span class="avatar avatar-rounded">
														<img class="border border-white" src="assets/img/profiles/avatar-08.jpg" alt="img">
													</span>
                                                        <span class="avatar avatar-rounded">
														<img class="border border-white" src="assets/img/profiles/avatar-07.jpg" alt="img">
													</span>
                                                        <span class="avatar avatar-rounded">
														<img class="border border-white" src="assets/img/profiles/avatar-02.jpg" alt="img">
													</span>
                                                        <span class="avatar avatar-rounded">
														<img class="border border-white" src="assets/img/profiles/avatar-03.jpg" alt="img">
													</span>
                                                        <a href="javascript:void(0);" class="avatar avatar-rounded bg-primary fs-12 text-white">
														1+
													</a>
                                                    </div>
                                                    <div class="d-flex align-items-center fs-12 text-gray-9">
                                                        <i class="isax isax-calendar-2 text-gray-5 fs-14 me-1"></i>30 Jan 2025
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                }
                                </div>
                                <div class="pt-2">
                                    <a href="javascript:void(0);" class="btn btn-white bg-white border d-flex align-items-center justify-content-center" data-bs-toggle="modal" data-bs-target="#add_modal">
                                        <i class="isax isax-add-circle text-gray-9 fs-13 me-1"></i> New Ticket
                                    </a>
                                </div>
                            </div>
                            <div class="p-3 rounded bg-light w-100 me-3">
                                <div class="bg-white border p-2 rounded mb-2">
                                    <div class="d-flex align-items-center justify-content-between">
                                        <div class="d-flex align-items-center">
                                            <span class="bg-transparent-primary p-1 d-flex rounded-circle me-2"><span class="bg-primary rounded-circle d-block p-1"></span></span>
                                            <h6 class="me-2 fs-16 fw-semibold">Pending</h6>
                                            <span class="badge bg-light rounded-circle fs-10 avatar avatar-xs text-dark">9</span>
                                        </div>
                                        <div class="dropdown">
                                            <a href="javascript:void(0);" class="d-inline-flex align-items-center btn btn-white border-0" data-bs-toggle="dropdown">
                                                <i class="isax isax-more"></i>
                                            </a>
                                            <ul class="dropdown-menu dropdown-menu-end p-3">
                                                <li>
                                                    <a href="javascript:void(0);" class="dropdown-item rounded-1" data-bs-toggle="modal" data-bs-target="#edit_modal"><i class="isax isax-edit me-2"></i>Edit</a>
                                                </li>
                                                <li>
                                                    <a href="javascript:void(0);" class="dropdown-item rounded-1" data-bs-toggle="modal" data-bs-target="#delete_modal"><i class="isax isax-trash me-2"></i>Delete</a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div class="kanban-drag-wrap" cdkDropList
                                cdkDropList
                                #SecondList="cdkDropList"
                                [cdkDropListData]="lstTwo"
                                [cdkDropListConnectedTo]="[
                                FirstList,
                                SecondList,
                                ThirdList,
                                FourList
                                ]"
                                (cdkDropListDropped)="onDrop($event)">
                                @for (data of lstTwo; track data) {
                                    <div cdkDrag>
                                        <div class="card kanban-card mb-2">
                                            <div class="card-body">
                                                <div class="d-flex align-items-center justify-content-between mb-3 border-bottom pb-2">
                                                    <div class="d-flex align-items-center">
                                                        <span [class]="data.PowerClass">{{data.kanbanPower}}</span>
                                                    </div>
                                                    <div class="dropdown">
                                                        <a href="javascript:void(0);" class="d-inline-flex align-items-center bg-white rounded-circle p-1 border justify-content-center" data-bs-toggle="dropdown">
                                                            <i class="isax isax-more d-flex align-items-center justify-content-center text-gray-5"></i>
                                                        </a>
                                                        <ul class="dropdown-menu dropdown-menu-end p-3">
                                                            <li>
                                                                <a href="javascript:void(0);" class="dropdown-item rounded-1" data-bs-toggle="modal" data-bs-target="#edit_modal"><i class="isax isax-edit me-2"></i>Edit</a>
                                                            </li>
                                                            <li>
                                                                <a href="javascript:void(0);" class="dropdown-item rounded-1" data-bs-toggle="modal" data-bs-target="#delete_modal"><i class="isax isax-trash me-2"></i>Delete</a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div class="d-flex align-items-start mb-3 border-bottom border-1 border-light pb-3 mb-3 flex-column">
                                                    <h6 class="d-flex align-items-center mb-3">{{data.Name}}</h6>

                                                    <div class="d-flex align-items-center gap-3">
                                                        <span class="badge badge-sm badge-soft-light border fs-10 text-dark"> #1234</span>
                                                        <span class="badge badge-sm fs-10  fw-medium d-flex align-items-center justify-content-center" [ngClass]="data.Status==='Open'?'badge-soft-primary text-primary':'badge-soft-warning text-warning'"> <i class="fa-solid fa-circle me-1 fs-5"></i> {{data.Status}}</span>
                                                    </div>

                                                </div>
                                                <div class="d-flex align-items-center justify-content-between">
                                                    <div class="avatar-list-stacked avatar-group-sm me-3">
                                                        <span class="avatar avatar-rounded">
														<img class="border border-white" src="assets/img/profiles/avatar-10.jpg" alt="img">
													</span>
                                                        <span class="avatar avatar-rounded">
														<img class="border border-white" src="assets/img/profiles/avatar-08.jpg" alt="img">
													</span>
                                                        <span class="avatar avatar-rounded">
														<img class="border border-white" src="assets/img/profiles/avatar-07.jpg" alt="img">
													</span>
                                                        <span class="avatar avatar-rounded">
														<img class="border border-white" src="assets/img/profiles/avatar-02.jpg" alt="img">
													</span>
                                                        <span class="avatar avatar-rounded">
														<img class="border border-white" src="assets/img/profiles/avatar-03.jpg" alt="img">
													</span>
                                                        <a href="javascript:void(0);" class="avatar avatar-rounded bg-primary fs-12 text-white">
														1+
													</a>
                                                    </div>
                                                    <div class="d-flex align-items-center fs-12 text-gray-9">
                                                        <i class="isax isax-calendar-2 text-gray-5 fs-14 me-1"></i>30 Jan 2025
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                }
                                </div>
                                <div class="pt-2">
                                    <a href="javascript:void(0);" class="btn btn-white bg-white border d-flex align-items-center justify-content-center" data-bs-toggle="modal" data-bs-target="#add_modal">
                                        <i class="isax isax-add-circle text-gray-9 fs-13 me-1"></i> New Ticket
                                    </a>
                                </div>
                            </div>
                            <div class="p-3 rounded bg-light w-100 me-3">
                                <div class="bg-white border p-2 rounded mb-2">
                                    <div class="d-flex align-items-center justify-content-between">
                                        <div class="d-flex align-items-center">
                                            <span class="bg-soft-danger p-1 d-flex rounded-circle me-2"><span class="bg-danger rounded-circle d-block p-1"></span></span>
                                            <h6 class="me-2 fs-16 fw-semibold">Closed</h6>
                                            <span class="badge bg-light rounded-circle fs-10 avatar avatar-xs text-dark">7</span>
                                        </div>
                                        <div class="dropdown">
                                            <a href="javascript:void(0);" class="d-inline-flex align-items-center btn btn-white border-0" data-bs-toggle="dropdown">
                                                <i class="isax isax-more"></i>
                                            </a>
                                            <ul class="dropdown-menu dropdown-menu-end p-3">
                                                <li>
                                                    <a href="javascript:void(0);" class="dropdown-item rounded-1" data-bs-toggle="modal" data-bs-target="#edit_modal"><i class="isax isax-edit me-2"></i>Edit</a>
                                                </li>
                                                <li>
                                                    <a href="javascript:void(0);" class="dropdown-item rounded-1" data-bs-toggle="modal" data-bs-target="#delete_modal"><i class="isax isax-trash me-2"></i>Delete</a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div class="kanban-drag-wrap"cdkDropList
                                #ThirdList="cdkDropList"
                                [cdkDropListData]="lstThree"
                                [cdkDropListConnectedTo]="[
                                  FirstList,
                                  SecondList,
                                  ThirdList,
                                  FourList
                                ]"
                                (cdkDropListDropped)="onDrop($event)">
                                @for (data of lstThree; track data) {
                                    <div cdkDrag>
                                        <div class="card kanban-card mb-2">
                                            <div class="card-body">
                                                <div class="d-flex align-items-center justify-content-between mb-3 border-bottom pb-2">
                                                    <div class="d-flex align-items-center">
                                                        <span [class]="data.PowerClass">{{data.kanbanPower}}</span>
                                                    </div>
                                                    <div class="dropdown">
                                                        <a href="javascript:void(0);" class="d-inline-flex align-items-center bg-white rounded-circle p-1 border justify-content-center" data-bs-toggle="dropdown">
                                                            <i class="isax isax-more d-flex align-items-center justify-content-center text-gray-5"></i>
                                                        </a>
                                                        <ul class="dropdown-menu dropdown-menu-end p-3">
                                                            <li>
                                                                <a href="javascript:void(0);" class="dropdown-item rounded-1" data-bs-toggle="modal" data-bs-target="#edit_modal"><i class="isax isax-edit me-2"></i>Edit</a>
                                                            </li>
                                                            <li>
                                                                <a href="javascript:void(0);" class="dropdown-item rounded-1" data-bs-toggle="modal" data-bs-target="#delete_modal"><i class="isax isax-trash me-2"></i>Delete</a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div class="d-flex align-items-start mb-3 border-bottom border-1 border-light pb-3 mb-3 flex-column">
                                                    <h6 class="d-flex align-items-center mb-3">{{data.Name}}</h6>

                                                    <div class="d-flex align-items-center gap-3">
                                                        <span class="badge badge-sm badge-soft-light border fs-10 text-dark"> #1234</span>
                                                        <span class="badge badge-sm fs-10  fw-medium d-flex align-items-center justify-content-center" [ngClass]="data.Status==='Open'?'badge-soft-primary text-primary':'badge-soft-warning text-warning'"> <i class="fa-solid fa-circle me-1 fs-5"></i> {{data.Status}}</span>
                                                    </div>

                                                </div>
                                                <div class="d-flex align-items-center justify-content-between">
                                                    <div class="avatar-list-stacked avatar-group-sm me-3">
                                                        <span class="avatar avatar-rounded">
														<img class="border border-white" src="assets/img/profiles/avatar-10.jpg" alt="img">
													</span>
                                                        <span class="avatar avatar-rounded">
														<img class="border border-white" src="assets/img/profiles/avatar-08.jpg" alt="img">
													</span>
                                                        <span class="avatar avatar-rounded">
														<img class="border border-white" src="assets/img/profiles/avatar-07.jpg" alt="img">
													</span>
                                                        <span class="avatar avatar-rounded">
														<img class="border border-white" src="assets/img/profiles/avatar-02.jpg" alt="img">
													</span>
                                                        <span class="avatar avatar-rounded">
														<img class="border border-white" src="assets/img/profiles/avatar-03.jpg" alt="img">
													</span>
                                                        <a href="javascript:void(0);" class="avatar avatar-rounded bg-primary fs-12 text-white">
														1+
													</a>
                                                    </div>
                                                    <div class="d-flex align-items-center fs-12 text-gray-9">
                                                        <i class="isax isax-calendar-2 text-gray-5 fs-14 me-1"></i>30 Jan 2025
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                }
                                </div>
                                <div class="pt-2">
                                    <a href="javascript:void(0);" class="btn btn-white bg-white border d-flex align-items-center justify-content-center" data-bs-toggle="modal" data-bs-target="#add_modal">
                                        <i class="isax isax-add-circle text-gray-9 fs-13 me-1"></i> New Ticket
                                    </a>
                                </div>
                            </div>
                            <div class="p-3 rounded bg-light w-100">
                                <div class="bg-white border p-2 rounded mb-2">
                                    <div class="d-flex align-items-center justify-content-between">
                                        <div class="d-flex align-items-center">
                                            <span class="bg-transparent-success p-1 d-flex rounded-circle me-2"><span class="bg-success rounded-circle d-block p-1"></span></span>
                                            <h6 class="me-2 fs-16 fw-semibold">Resolved</h6>
                                            <span class="badge bg-light rounded-circle fs-10 avatar avatar-xs text-dark">7</span>
                                        </div>
                                        <div class="dropdown">
                                            <a href="javascript:void(0);" class="d-inline-flex align-items-center btn btn-white border-0" data-bs-toggle="dropdown">
                                                <i class="isax isax-more"></i>
                                            </a>
                                            <ul class="dropdown-menu dropdown-menu-end p-3">
                                                <li>
                                                    <a href="javascript:void(0);" class="dropdown-item rounded-1" data-bs-toggle="modal" data-bs-target="#edit_modal"><i class="isax isax-edit me-2"></i>Edit</a>
                                                </li>
                                                <li>
                                                    <a href="javascript:void(0);" class="dropdown-item rounded-1" data-bs-toggle="modal" data-bs-target="#delete_modal"><i class="isax isax-trash me-2"></i>Delete</a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div class="kanban-drag-wrap" cdkDropList
                                #FourList="cdkDropList"
                                [cdkDropListData]="lstFour"
                                [cdkDropListConnectedTo]="[
                                  FirstList,
                                  SecondList,
                                  ThirdList,
                                  FourList
                                ]"
                                (cdkDropListDropped)="onDrop($event)">
                                @for (data of lstFour; track data) {
                                    <div cdkDrag>
                                        <div class="card kanban-card mb-2">
                                            <div class="card-body">
                                                <div class="d-flex align-items-center justify-content-between mb-3 border-bottom pb-2">
                                                    <div class="d-flex align-items-center">
                                                        <span [class]="data.PowerClass">{{data.kanbanPower}}</span>
                                                    </div>
                                                    <div class="dropdown">
                                                        <a href="javascript:void(0);" class="d-inline-flex align-items-center bg-white rounded-circle p-1 border justify-content-center" data-bs-toggle="dropdown">
                                                            <i class="isax isax-more d-flex align-items-center justify-content-center text-gray-5"></i>
                                                        </a>
                                                        <ul class="dropdown-menu dropdown-menu-end p-3">
                                                            <li>
                                                                <a href="javascript:void(0);" class="dropdown-item rounded-1" data-bs-toggle="modal" data-bs-target="#edit_modal"><i class="isax isax-edit me-2"></i>Edit</a>
                                                            </li>
                                                            <li>
                                                                <a href="javascript:void(0);" class="dropdown-item rounded-1" data-bs-toggle="modal" data-bs-target="#delete_modal"><i class="isax isax-trash me-2"></i>Delete</a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div class="d-flex align-items-start mb-3 border-bottom border-1 border-light pb-3 mb-3 flex-column">
                                                    <h6 class="d-flex align-items-center mb-3">{{data.Name}}</h6>

                                                    <div class="d-flex align-items-center gap-3">
                                                        <span class="badge badge-sm badge-soft-light border fs-10 text-dark"> #1234</span>
                                                        <span class="badge badge-sm fs-10  fw-medium d-flex align-items-center justify-content-center" [ngClass]="data.Status==='Open'?'badge-soft-primary text-primary':'badge-soft-warning text-warning'"> <i class="fa-solid fa-circle me-1 fs-5"></i> {{data.Status}}</span>
                                                    </div>

                                                </div>
                                                <div class="d-flex align-items-center justify-content-between">
                                                    <div class="avatar-list-stacked avatar-group-sm me-3">
                                                        <span class="avatar avatar-rounded">
                                                        <img class="border border-white" src="assets/img/profiles/avatar-10.jpg" alt="img">
                                                    </span>
                                                        <span class="avatar avatar-rounded">
                                                        <img class="border border-white" src="assets/img/profiles/avatar-08.jpg" alt="img">
                                                    </span>
                                                        <span class="avatar avatar-rounded">
                                                        <img class="border border-white" src="assets/img/profiles/avatar-07.jpg" alt="img">
                                                    </span>
                                                        <span class="avatar avatar-rounded">
                                                        <img class="border border-white" src="assets/img/profiles/avatar-02.jpg" alt="img">
                                                    </span>
                                                        <span class="avatar avatar-rounded">
                                                        <img class="border border-white" src="assets/img/profiles/avatar-03.jpg" alt="img">
                                                    </span>
                                                        <a href="javascript:void(0);" class="avatar avatar-rounded bg-primary fs-12 text-white">
                                                        1+
                                                    </a>
                                                    </div>
                                                    <div class="d-flex align-items-center fs-12 text-gray-9">
                                                        <i class="isax isax-calendar-2 text-gray-5 fs-14 me-1"></i>30 Jan 2025
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                }
                                </div>
                                <div class="pt-2">
                                    <a href="javascript:void(0);" class="btn btn-white bg-white border d-flex align-items-center justify-content-center" data-bs-toggle="modal" data-bs-target="#add_modal">
                                        <i class="isax isax-add-circle text-gray-9 fs-13 me-1"></i> New Ticket
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="tab-pane fade" id="Open_tab" role="tabpanel">
                        <div class="d-flex align-items-start overflow-auto project-status flex-wrap flex-lg-nowrap flex-md-nowrap">
                            <div class="p-3 rounded bg-light w-100 me-3">
                                <div class="bg-white border p-2 rounded mb-2">
                                    <div class="d-flex align-items-center justify-content-between">
                                        <div class="d-flex align-items-center">
                                            <span class="bg-soft-pink p-1 d-flex rounded-circle me-2"><span class="bg-info rounded-circle d-block p-1"></span></span>
                                            <h6 class="me-2 fs-16 fw-semibold">Open</h6>
                                            <span class="badge bg-light rounded-circle fs-10 avatar avatar-xs text-dark">5</span>
                                        </div>
                                        <div class="dropdown">
                                            <a href="javascript:void(0);" class="d-inline-flex align-items-center btn btn-white border-0" data-bs-toggle="dropdown">
                                                <i class="isax isax-more"></i>
                                            </a>
                                            <ul class="dropdown-menu dropdown-menu-end p-3">
                                                <li>
                                                    <a href="javascript:void(0);" class="dropdown-item rounded-1" data-bs-toggle="modal" data-bs-target="#edit_modal"><i class="isax isax-edit me-2"></i>Edit</a>
                                                </li>
                                                <li>
                                                    <a href="javascript:void(0);" class="dropdown-item rounded-1" data-bs-toggle="modal" data-bs-target="#delete_modal"><i class="isax isax-trash me-2"></i>Delete</a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                <div class="kanban-drag-wrap">
                                
                                    <div>
                                        <div class="card kanban-card mb-2">
                                            <div class="card-body">
                                                <div class="d-flex align-items-center justify-content-between mb-3 border-bottom pb-2">
                                                    <div class="d-flex align-items-center">
                                                        <span class="badge bg-light badge-sm border-info d-flex align-items-center justify-content-center text-info fs-12 fw-medium">Low</span>
                                                    </div>
                                                    <div class="dropdown">
                                                        <a href="javascript:void(0);" class="d-inline-flex align-items-center bg-white rounded-circle p-1 border justify-content-center" data-bs-toggle="dropdown">
                                                            <i class="isax isax-more d-flex align-items-center justify-content-center text-gray-5"></i>
                                                        </a>
                                                        <ul class="dropdown-menu dropdown-menu-end p-3">
                                                            <li>
                                                                <a href="javascript:void(0);" class="dropdown-item rounded-1" data-bs-toggle="modal" data-bs-target="#edit_modal"><i class="isax isax-edit me-2"></i>Edit</a>
                                                            </li>
                                                            <li>
                                                                <a href="javascript:void(0);" class="dropdown-item rounded-1" data-bs-toggle="modal" data-bs-target="#delete_modal"><i class="isax isax-trash me-2"></i>Delete</a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div class="d-flex align-items-start mb-3 border-bottom border-1 border-light pb-3 mb-3 flex-column">
                                                    <h6 class="d-flex align-items-center mb-3">Support For Theme</h6>

                                                    <div class="d-flex align-items-center gap-3">
                                                        <span class="badge badge-sm badge-soft-light border fs-10 text-dark"> #1234</span>
                                                        <span class="badge badge-sm badge-soft-primary fs-10 text-primary fw-medium d-flex align-items-center justify-content-center"> <i class="fa-solid fa-circle text-primary me-1 fs-5"></i> Open</span>
                                                    </div>

                                                </div>
                                                <div class="d-flex align-items-center justify-content-between">
                                                    <div class="avatar-list-stacked avatar-group-sm me-3">
                                                        <span class="avatar avatar-rounded">
														<img class="border border-white" src="assets/img/profiles/avatar-10.jpg" alt="img">
													</span>
                                                        <span class="avatar avatar-rounded">
														<img class="border border-white" src="assets/img/profiles/avatar-08.jpg" alt="img">
													</span>
                                                        <span class="avatar avatar-rounded">
														<img class="border border-white" src="assets/img/profiles/avatar-07.jpg" alt="img">
													</span>
                                                        <span class="avatar avatar-rounded">
														<img class="border border-white" src="assets/img/profiles/avatar-02.jpg" alt="img">
													</span>
                                                        <span class="avatar avatar-rounded">
														<img class="border border-white" src="assets/img/profiles/avatar-03.jpg" alt="img">
													</span>
                                                        <a href="javascript:void(0);" class="avatar avatar-rounded bg-primary fs-12 text-white">
														1+
													</a>
                                                    </div>
                                                    <div class="d-flex align-items-center fs-12 text-gray-9">
                                                        <i class="isax isax-calendar-2 text-gray-5 fs-14 me-1"></i>30 Jan 2025
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div>
                                        <div class="card kanban-card mb-2">
                                            <div class="card-body">
                                                <div class="d-flex align-items-center justify-content-between mb-3 border-bottom pb-2">
                                                    <div class="d-flex align-items-center">
                                                        <span class="badge bg-soft-orange badge-sm border d-flex align-items-center justify-content-center text-orange fs-12 fw-medium text-danger">Medium</span>
                                                    </div>
                                                    <div class="dropdown">
                                                        <a href="javascript:void(0);" class="d-inline-flex align-items-center bg-white rounded-circle p-1 border justify-content-center" data-bs-toggle="dropdown">
                                                            <i class="isax isax-more d-flex align-items-center justify-content-center text-gray-5"></i>
                                                        </a>
                                                        <ul class="dropdown-menu dropdown-menu-end p-3">
                                                            <li>
                                                                <a href="javascript:void(0);" class="dropdown-item rounded-1" data-bs-toggle="modal" data-bs-target="#edit_modal"><i class="isax isax-edit me-2"></i>Edit</a>
                                                            </li>
                                                            <li>
                                                                <a href="javascript:void(0);" class="dropdown-item rounded-1" data-bs-toggle="modal" data-bs-target="#delete_modal"><i class="isax isax-trash me-2"></i>Delete</a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div class="d-flex align-items-start mb-3 border-bottom border-1 border-light pb-3 mb-3 flex-column">
                                                    <h6 class="d-flex align-items-center mb-3">Verify your email</h6>

                                                    <div class="d-flex align-items-center gap-3">
                                                        <span class="badge badge-sm badge-soft-light border fs-10 text-dark"> #1234</span>
                                                        <span class="badge badge-sm badge-soft-primary fs-10 text-primary fw-medium d-flex align-items-center justify-content-center"> <i class="fa-solid fa-circle text-primary me-1 fs-5"></i> Open</span>
                                                    </div>

                                                </div>
                                                <div class="d-flex align-items-center justify-content-between">
                                                    <div class="avatar-list-stacked avatar-group-sm me-3">
                                                        <span class="avatar avatar-rounded">
														<img class="border border-white" src="assets/img/profiles/avatar-10.jpg" alt="img">
													</span>
                                                        <span class="avatar avatar-rounded">
														<img class="border border-white" src="assets/img/profiles/avatar-08.jpg" alt="img">
													</span>
                                                        <span class="avatar avatar-rounded">
														<img class="border border-white" src="assets/img/profiles/avatar-07.jpg" alt="img">
													</span>
                                                        <span class="avatar avatar-rounded">
														<img class="border border-white" src="assets/img/profiles/avatar-02.jpg" alt="img">
													</span>
                                                        <span class="avatar avatar-rounded">
														<img class="border border-white" src="assets/img/profiles/avatar-03.jpg" alt="img">
													</span>
                                                        <a href="javascript:void(0);" class="avatar avatar-rounded bg-primary fs-12 text-white">
														1+
													</a>
                                                    </div>
                                                    <div class="d-flex align-items-center fs-12 text-gray-9">
                                                        <i class="isax isax-calendar-2 text-gray-5 fs-14 me-1"></i>30 Jan 2025
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="pt-2">
                                    <a href="javascript:void(0);" class="btn btn-white bg-white border d-flex align-items-center justify-content-center" data-bs-toggle="modal" data-bs-target="#add_modal">
                                        <i class="isax isax-add-circle text-gray-9 fs-13 me-1"></i> New Ticket
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="tab-pane fade" id="Resolved_tab" role="tabpanel">
                        <div class="d-flex align-items-start overflow-auto project-status pb-3 flex-wrap flex-lg-nowrap flex-md-nowrap">
                            <div class="p-3 rounded bg-light w-100">
                                <div class="bg-white border p-2 rounded mb-2">
                                    <div class="d-flex align-items-center justify-content-between">
                                        <div class="d-flex align-items-center">
                                            <span class="bg-transparent-success p-1 d-flex rounded-circle me-2"><span class="bg-success rounded-circle d-block p-1"></span></span>
                                            <h6 class="me-2 fs-16 fw-semibold">Resolved</h6>
                                            <span class="badge bg-light rounded-circle fs-10 avatar avatar-xs text-dark">7</span>
                                        </div>
                                        <div class="dropdown">
                                            <a href="javascript:void(0);" class="d-inline-flex align-items-center btn btn-white border-0" data-bs-toggle="dropdown">
                                                <i class="isax isax-more"></i>
                                            </a>
                                            <ul class="dropdown-menu dropdown-menu-end p-3">
                                                <li>
                                                    <a href="javascript:void(0);" class="dropdown-item rounded-1" data-bs-toggle="modal" data-bs-target="#edit_modal"><i class="isax isax-edit me-2"></i>Edit</a>
                                                </li>
                                                <li>
                                                    <a href="javascript:void(0);" class="dropdown-item rounded-1" data-bs-toggle="modal" data-bs-target="#delete_modal"><i class="isax isax-trash me-2"></i>Delete</a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div class="kanban-drag-wrap">
                                    <div>
                                        <div class="card kanban-card mb-2">
                                            <div class="card-body">
                                                <div class="d-flex align-items-center justify-content-between mb-3 border-bottom pb-2">
                                                    <div class="d-flex align-items-center">
                                                        <span class="badge bg-light badge-sm border-info d-flex align-items-center justify-content-center text-info fs-12 fw-medium">Low</span>
                                                    </div>
                                                    <div class="dropdown">
                                                        <a href="javascript:void(0);" class="d-inline-flex align-items-center bg-white rounded-circle p-1 border justify-content-center" data-bs-toggle="dropdown">
                                                            <i class="isax isax-more d-flex align-items-center justify-content-center text-gray-5"></i>
                                                        </a>
                                                        <ul class="dropdown-menu dropdown-menu-end p-3">
                                                            <li>
                                                                <a href="javascript:void(0);" class="dropdown-item rounded-1" data-bs-toggle="modal" data-bs-target="#edit_modal"><i class="isax isax-edit me-2"></i>Edit</a>
                                                            </li>
                                                            <li>
                                                                <a href="javascript:void(0);" class="dropdown-item rounded-1" data-bs-toggle="modal" data-bs-target="#delete_modal"><i class="isax isax-trash me-2"></i>Delete</a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div class="d-flex align-items-start mb-3 border-bottom border-1 border-light pb-3 mb-3 flex-column">
                                                    <h6 class="d-flex align-items-center mb-3">Support For Theme</h6>

                                                    <div class="d-flex align-items-center gap-3">
                                                        <span class="badge badge-sm badge-soft-light border fs-10 text-dark"> #1234</span>
                                                        <span class="badge badge-sm badge-soft-warning fs-10 text-warning fw-medium d-flex align-items-center justify-content-center"> <i class="fa-solid fa-circle text-warning me-1 fs-5"></i> Pending</span>
                                                    </div>

                                                </div>
                                                <div class="d-flex align-items-center justify-content-between">
                                                    <div class="avatar-list-stacked avatar-group-sm me-3">
                                                        <span class="avatar avatar-rounded">
														<img class="border border-white" src="assets/img/profiles/avatar-10.jpg" alt="img">
													</span>
                                                        <span class="avatar avatar-rounded">
														<img class="border border-white" src="assets/img/profiles/avatar-08.jpg" alt="img">
													</span>
                                                        <span class="avatar avatar-rounded">
														<img class="border border-white" src="assets/img/profiles/avatar-07.jpg" alt="img">
													</span>
                                                        <span class="avatar avatar-rounded">
														<img class="border border-white" src="assets/img/profiles/avatar-02.jpg" alt="img">
													</span>
                                                        <span class="avatar avatar-rounded">
														<img class="border border-white" src="assets/img/profiles/avatar-03.jpg" alt="img">
													</span>
                                                        <a href="javascript:void(0);" class="avatar avatar-rounded bg-primary fs-12 text-white">
														1+
													</a>
                                                    </div>
                                                    <div class="d-flex align-items-center fs-12 text-gray-9">
                                                        <i class="isax isax-calendar-2 text-gray-5 fs-14 me-1"></i>30 Jan 2025
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div>
                                        <div class="card kanban-card mb-2">
                                            <div class="card-body">
                                                <div class="d-flex align-items-center justify-content-between mb-3 border-bottom pb-2">
                                                    <div class="d-flex align-items-center">
                                                        <span class="badge bg-soft-orange badge-sm border d-flex align-items-center justify-content-center text-orange fs-12 fw-medium text-danger">Medium</span>
                                                    </div>
                                                    <div class="dropdown">
                                                        <a href="javascript:void(0);" class="d-inline-flex align-items-center bg-white rounded-circle p-1 border justify-content-center" data-bs-toggle="dropdown">
                                                            <i class="isax isax-more d-flex align-items-center justify-content-center text-gray-5"></i>
                                                        </a>
                                                        <ul class="dropdown-menu dropdown-menu-end p-3">
                                                            <li>
                                                                <a href="javascript:void(0);" class="dropdown-item rounded-1" data-bs-toggle="modal" data-bs-target="#edit_modal"><i class="isax isax-edit me-2"></i>Edit</a>
                                                            </li>
                                                            <li>
                                                                <a href="javascript:void(0);" class="dropdown-item rounded-1" data-bs-toggle="modal" data-bs-target="#delete_modal"><i class="isax isax-trash me-2"></i>Delete</a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div class="d-flex align-items-start mb-3 border-bottom border-1 border-light pb-3 mb-3 flex-column">
                                                    <h6 class="d-flex align-items-center mb-3">Verify your email</h6>

                                                    <div class="d-flex align-items-center gap-3">
                                                        <span class="badge badge-sm badge-soft-light border fs-10 text-dark"> #1234</span>
                                                        <span class="badge badge-sm badge-soft-warning fs-10 text-warning fw-medium"> <i class="fa-solid fa-circle text-warning me-1 fs-6"></i> Pending</span>
                                                    </div>

                                                </div>
                                                <div class="d-flex align-items-center justify-content-between">
                                                    <div class="avatar-list-stacked avatar-group-sm me-3">
                                                        <span class="avatar avatar-rounded">
														<img class="border border-white" src="assets/img/profiles/avatar-10.jpg" alt="img">
													</span>
                                                        <span class="avatar avatar-rounded">
														<img class="border border-white" src="assets/img/profiles/avatar-08.jpg" alt="img">
													</span>
                                                        <span class="avatar avatar-rounded">
														<img class="border border-white" src="assets/img/profiles/avatar-07.jpg" alt="img">
													</span>
                                                        <span class="avatar avatar-rounded">
														<img class="border border-white" src="assets/img/profiles/avatar-02.jpg" alt="img">
													</span>
                                                        <span class="avatar avatar-rounded">
														<img class="border border-white" src="assets/img/profiles/avatar-03.jpg" alt="img">
													</span>
                                                        <a href="javascript:void(0);" class="avatar avatar-rounded bg-primary fs-12 text-white">
														1+
													</a>
                                                    </div>
                                                    <div class="d-flex align-items-center fs-12 text-gray-9">
                                                        <i class="isax isax-calendar-2 text-gray-5 fs-14 me-1"></i>30 Jan 2025
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="pt-2">
                                    <a href="javascript:void(0);" class="btn btn-white bg-white border d-flex align-items-center justify-content-center" data-bs-toggle="modal" data-bs-target="#add_modal">
                                        <i class="isax isax-add-circle text-gray-9 fs-13 me-1"></i> New Ticket
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="tab-pane fade" id="Pending_tab" role="tabpanel">
                        <div class="d-flex align-items-start overflow-auto project-status pb-3 flex-wrap flex-lg-nowrap flex-md-nowrap">
                            <div class="p-3 rounded bg-light w-100 me-3">
                                <div class="bg-white border p-2 rounded mb-2">
                                    <div class="d-flex align-items-center justify-content-between">
                                        <div class="d-flex align-items-center">
                                            <span class="bg-transparent-primary p-1 d-flex rounded-circle me-2"><span class="bg-primary rounded-circle d-block p-1"></span></span>
                                            <h6 class="me-2 fs-16 fw-semibold">Pending</h6>
                                            <span class="badge bg-light rounded-circle fs-10 avatar avatar-xs text-dark">9</span>
                                        </div>
                                        <div class="dropdown">
                                            <a href="javascript:void(0);" class="d-inline-flex align-items-center btn btn-white border-0" data-bs-toggle="dropdown">
                                                <i class="isax isax-more"></i>
                                            </a>
                                            <ul class="dropdown-menu dropdown-menu-end p-3">
                                                <li>
                                                    <a href="javascript:void(0);" class="dropdown-item rounded-1" data-bs-toggle="modal" data-bs-target="#edit_modal"><i class="isax isax-edit me-2"></i>Edit</a>
                                                </li>
                                                <li>
                                                    <a href="javascript:void(0);" class="dropdown-item rounded-1" data-bs-toggle="modal" data-bs-target="#delete_modal"><i class="isax isax-trash me-2"></i>Delete</a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div class="kanban-drag-wrap">
                                    <div>
                                        <div class="card kanban-card mb-2">
                                            <div class="card-body">
                                                <div class="d-flex align-items-center justify-content-between mb-3 border-bottom pb-2">
                                                    <div class="d-flex align-items-center">
                                                        <span class="badge bg-light badge-sm border-info d-flex align-items-center justify-content-center text-info fs-12 fw-medium">Low</span>
                                                    </div>
                                                    <div class="dropdown">
                                                        <a href="javascript:void(0);" class="d-inline-flex align-items-center bg-white rounded-circle p-1 border justify-content-center" data-bs-toggle="dropdown">
                                                            <i class="isax isax-more d-flex align-items-center justify-content-center text-gray-5"></i>
                                                        </a>
                                                        <ul class="dropdown-menu dropdown-menu-end p-3">
                                                            <li>
                                                                <a href="javascript:void(0);" class="dropdown-item rounded-1" data-bs-toggle="modal" data-bs-target="#edit_modal"><i class="isax isax-edit me-2"></i>Edit</a>
                                                            </li>
                                                            <li>
                                                                <a href="javascript:void(0);" class="dropdown-item rounded-1" data-bs-toggle="modal" data-bs-target="#delete_modal"><i class="isax isax-trash me-2"></i>Delete</a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div class="d-flex align-items-start mb-3 border-bottom border-1 border-light pb-3 mb-3 flex-column">
                                                    <h6 class="d-flex align-items-center mb-3">Support For Theme</h6>

                                                    <div class="d-flex align-items-center gap-3">
                                                        <span class="badge badge-sm badge-soft-light border fs-10 text-dark"> #1234</span>
                                                        <span class="badge badge-sm badge-soft-warning fs-10 text-warning fw-medium d-flex align-items-center justify-content-center"> <i class="fa-solid fa-circle text-warning me-1 fs-5"></i> Pending</span>
                                                    </div>

                                                </div>
                                                <div class="d-flex align-items-center justify-content-between">
                                                    <div class="avatar-list-stacked avatar-group-sm me-3">
                                                        <span class="avatar avatar-rounded">
														<img class="border border-white" src="assets/img/profiles/avatar-10.jpg" alt="img">
													</span>
                                                        <span class="avatar avatar-rounded">
														<img class="border border-white" src="assets/img/profiles/avatar-08.jpg" alt="img">
													</span>
                                                        <span class="avatar avatar-rounded">
														<img class="border border-white" src="assets/img/profiles/avatar-07.jpg" alt="img">
													</span>
                                                        <span class="avatar avatar-rounded">
														<img class="border border-white" src="assets/img/profiles/avatar-02.jpg" alt="img">
													</span>
                                                        <span class="avatar avatar-rounded">
														<img class="border border-white" src="assets/img/profiles/avatar-03.jpg" alt="img">
													</span>
                                                        <a href="javascript:void(0);" class="avatar avatar-rounded bg-primary fs-12 text-white">
														1+
													</a>
                                                    </div>
                                                    <div class="d-flex align-items-center fs-12 text-gray-9">
                                                        <i class="isax isax-calendar-2 text-gray-5 fs-14 me-1"></i>30 Jan 2025
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div>
                                        <div class="card kanban-card mb-2">
                                            <div class="card-body">
                                                <div class="d-flex align-items-center justify-content-between mb-3 border-bottom pb-2">
                                                    <div class="d-flex align-items-center">
                                                        <span class="badge bg-soft-orange badge-sm border d-flex align-items-center justify-content-center text-orange fs-12 fw-medium text-danger">Medium</span>
                                                    </div>
                                                    <div class="dropdown">
                                                        <a href="javascript:void(0);" class="d-inline-flex align-items-center bg-white rounded-circle p-1 border justify-content-center" data-bs-toggle="dropdown">
                                                            <i class="isax isax-more d-flex align-items-center justify-content-center text-gray-5"></i>
                                                        </a>
                                                        <ul class="dropdown-menu dropdown-menu-end p-3">
                                                            <li>
                                                                <a href="javascript:void(0);" class="dropdown-item rounded-1" data-bs-toggle="modal" data-bs-target="#edit_modal"><i class="isax isax-edit me-2"></i>Edit</a>
                                                            </li>
                                                            <li>
                                                                <a href="javascript:void(0);" class="dropdown-item rounded-1" data-bs-toggle="modal" data-bs-target="#delete_modal"><i class="isax isax-trash me-2"></i>Delete</a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div class="d-flex align-items-start mb-3 border-bottom border-1 border-light pb-3 mb-3 flex-column">
                                                    <h6 class="d-flex align-items-center mb-3">Verify your email</h6>

                                                    <div class="d-flex align-items-center gap-3">
                                                        <span class="badge badge-sm badge-soft-light border fs-10 text-dark"> #1234</span>
                                                        <span class="badge badge-sm badge-soft-warning fs-10 text-warning fw-medium d-flex align-items-center justify-content-center"> <i class="fa-solid fa-circle text-warning me-1 fs-5"></i> Pending</span>
                                                    </div>

                                                </div>
                                                <div class="d-flex align-items-center justify-content-between">
                                                    <div class="avatar-list-stacked avatar-group-sm me-3">
                                                        <span class="avatar avatar-rounded">
														<img class="border border-white" src="assets/img/profiles/avatar-10.jpg" alt="img">
													</span>
                                                        <span class="avatar avatar-rounded">
														<img class="border border-white" src="assets/img/profiles/avatar-08.jpg" alt="img">
													</span>
                                                        <span class="avatar avatar-rounded">
														<img class="border border-white" src="assets/img/profiles/avatar-07.jpg" alt="img">
													</span>
                                                        <span class="avatar avatar-rounded">
														<img class="border border-white" src="assets/img/profiles/avatar-02.jpg" alt="img">
													</span>
                                                        <span class="avatar avatar-rounded">
														<img class="border border-white" src="assets/img/profiles/avatar-03.jpg" alt="img">
													</span>
                                                        <a href="javascript:void(0);" class="avatar avatar-rounded bg-primary fs-12 text-white">
														1+
													</a>
                                                    </div>
                                                    <div class="d-flex align-items-center fs-12 text-gray-9">
                                                        <i class="isax isax-calendar-2 text-gray-5 fs-14 me-1"></i>30 Jan 2025
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div>
                                        <div class="card kanban-card mb-2">
                                            <div class="card-body">
                                                <div class="d-flex align-items-center justify-content-between mb-3 border-bottom pb-2">
                                                    <div class="d-flex align-items-center">
                                                        <span class="badge bg-light badge-sm border-info d-flex align-items-center justify-content-center text-info fs-12 fw-medium">Low</span>
                                                    </div>
                                                    <div class="dropdown">
                                                        <a href="javascript:void(0);" class="d-inline-flex align-items-center bg-white rounded-circle p-1 border justify-content-center" data-bs-toggle="dropdown">
                                                            <i class="isax isax-more d-flex align-items-center justify-content-center text-gray-5"></i>
                                                        </a>
                                                        <ul class="dropdown-menu dropdown-menu-end p-3">
                                                            <li>
                                                                <a href="javascript:void(0);" class="dropdown-item rounded-1" data-bs-toggle="modal" data-bs-target="#edit_modal"><i class="isax isax-edit me-2"></i>Edit</a>
                                                            </li>
                                                            <li>
                                                                <a href="javascript:void(0);" class="dropdown-item rounded-1" data-bs-toggle="modal" data-bs-target="#delete_modal"><i class="isax isax-trash me-2"></i>Delete</a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div class="d-flex align-items-start mb-3 border-bottom border-1 border-light pb-3 mb-3 flex-column">
                                                    <h6 class="d-flex align-items-center mb-3">Support For Theme</h6>

                                                    <div class="d-flex align-items-center gap-3">
                                                        <span class="badge badge-sm badge-soft-light border fs-10 text-dark"> #1234</span>
                                                        <span class="badge badge-sm badge-soft-warning fs-10 text-warning fw-medium d-flex align-items-center justify-content-center"> <i class="fa-solid fa-circle text-warning me-1 fs-5"></i> Pending</span>
                                                    </div>

                                                </div>
                                                <div class="d-flex align-items-center justify-content-between">
                                                    <div class="avatar-list-stacked avatar-group-sm me-3">
                                                        <span class="avatar avatar-rounded">
														<img class="border border-white" src="assets/img/profiles/avatar-10.jpg" alt="img">
													</span>
                                                        <span class="avatar avatar-rounded">
														<img class="border border-white" src="assets/img/profiles/avatar-08.jpg" alt="img">
													</span>
                                                        <span class="avatar avatar-rounded">
														<img class="border border-white" src="assets/img/profiles/avatar-07.jpg" alt="img">
													</span>
                                                        <span class="avatar avatar-rounded">
														<img class="border border-white" src="assets/img/profiles/avatar-02.jpg" alt="img">
													</span>
                                                        <span class="avatar avatar-rounded">
														<img class="border border-white" src="assets/img/profiles/avatar-03.jpg" alt="img">
													</span>
                                                        <a href="javascript:void(0);" class="avatar avatar-rounded bg-primary fs-12 text-white">
														1+
													</a>
                                                    </div>
                                                    <div class="d-flex align-items-center fs-12 text-gray-9">
                                                        <i class="isax isax-calendar-2 text-gray-5 fs-14 me-1"></i>30 Jan 2025
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div>
                                        <div class="card kanban-card mb-2">
                                            <div class="card-body">
                                                <div class="d-flex align-items-center justify-content-between mb-3 border-bottom pb-2">
                                                    <div class="d-flex align-items-center">
                                                        <span class="badge bg-soft-orange badge-sm border d-flex align-items-center justify-content-center text-orange fs-12 fw-medium text-danger">Medium</span>
                                                    </div>
                                                    <div class="dropdown">
                                                        <a href="javascript:void(0);" class="d-inline-flex align-items-center bg-white rounded-circle p-1 border justify-content-center" data-bs-toggle="dropdown">
                                                            <i class="isax isax-more d-flex align-items-center justify-content-center text-gray-5"></i>
                                                        </a>
                                                        <ul class="dropdown-menu dropdown-menu-end p-3">
                                                            <li>
                                                                <a href="javascript:void(0);" class="dropdown-item rounded-1" data-bs-toggle="modal" data-bs-target="#edit_modal"><i class="isax isax-edit me-2"></i>Edit</a>
                                                            </li>
                                                            <li>
                                                                <a href="javascript:void(0);" class="dropdown-item rounded-1" data-bs-toggle="modal" data-bs-target="#delete_modal"><i class="isax isax-trash me-2"></i>Delete</a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div class="d-flex align-items-start mb-3 border-bottom border-1 border-light pb-3 mb-3 flex-column">
                                                    <h6 class="d-flex align-items-center mb-3">Verify your email</h6>

                                                    <div class="d-flex align-items-center gap-3">
                                                        <span class="badge badge-sm badge-soft-light border fs-10 text-dark"> #1234</span>
                                                        <span class="badge badge-sm badge-soft-warning fs-10 text-warning fw-medium d-flex align-items-center justify-content-center"> <i class="fa-solid fa-circle text-warning me-1 fs-5"></i> Pending</span>
                                                    </div>

                                                </div>
                                                <div class="d-flex align-items-center justify-content-between">
                                                    <div class="avatar-list-stacked avatar-group-sm me-3">
                                                        <span class="avatar avatar-rounded">
														<img class="border border-white" src="assets/img/profiles/avatar-10.jpg" alt="img">
													</span>
                                                        <span class="avatar avatar-rounded">
														<img class="border border-white" src="assets/img/profiles/avatar-08.jpg" alt="img">
													</span>
                                                        <span class="avatar avatar-rounded">
														<img class="border border-white" src="assets/img/profiles/avatar-07.jpg" alt="img">
													</span>
                                                        <span class="avatar avatar-rounded">
														<img class="border border-white" src="assets/img/profiles/avatar-02.jpg" alt="img">
													</span>
                                                        <span class="avatar avatar-rounded">
														<img class="border border-white" src="assets/img/profiles/avatar-03.jpg" alt="img">
													</span>
                                                        <a href="javascript:void(0);" class="avatar avatar-rounded bg-primary fs-12 text-white">
														1+
													</a>
                                                    </div>
                                                    <div class="d-flex align-items-center fs-12 text-gray-9">
                                                        <i class="isax isax-calendar-2 text-gray-5 fs-14 me-1"></i>30 Jan 2025
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="pt-2">
                                    <a href="javascript:void(0);" class="btn btn-white bg-white border d-flex align-items-center justify-content-center" data-bs-toggle="modal" data-bs-target="#add_modal">
                                        <i class="isax isax-add-circle text-gray-9 fs-13 me-1"></i> New Ticket
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="tab-pane fade" id="Closed_tab" role="tabpanel">
                        <div class="d-flex align-items-start overflow-auto project-status pb-3 flex-wrap flex-lg-nowrap flex-md-nowrap">
                            <div class="p-3 rounded bg-light w-100 me-3">
                                <div class="bg-white border p-2 rounded mb-2">
                                    <div class="d-flex align-items-center justify-content-between">
                                        <div class="d-flex align-items-center">
                                            <span class="bg-soft-danger p-1 d-flex rounded-circle me-2"><span class="bg-danger rounded-circle d-block p-1"></span></span>
                                            <h6 class="me-2 fs-16 fw-semibold">Closed</h6>
                                            <span class="badge bg-light rounded-circle fs-10 avatar avatar-xs text-dark">7</span>
                                        </div>
                                        <div class="dropdown">
                                            <a href="javascript:void(0);" class="d-inline-flex align-items-center btn btn-white border-0" data-bs-toggle="dropdown">
                                                <i class="isax isax-more"></i>
                                            </a>
                                            <ul class="dropdown-menu dropdown-menu-end p-3">
                                                <li>
                                                    <a href="javascript:void(0);" class="dropdown-item rounded-1" data-bs-toggle="modal" data-bs-target="#edit_modal"><i class="isax isax-edit me-2"></i>Edit</a>
                                                </li>
                                                <li>
                                                    <a href="javascript:void(0);" class="dropdown-item rounded-1" data-bs-toggle="modal" data-bs-target="#delete_modal"><i class="isax isax-trash me-2"></i>Delete</a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div class="kanban-drag-wrap">
                                    <div>
                                        <div class="card kanban-card mb-2">
                                            <div class="card-body">
                                                <div class="d-flex align-items-center justify-content-between mb-3 border-bottom pb-2">
                                                    <div class="d-flex align-items-center">
                                                        <span class="badge bg-light badge-sm border-info d-flex align-items-center justify-content-center text-info fs-12 fw-medium">Low</span>
                                                    </div>
                                                    <div class="dropdown">
                                                        <a href="javascript:void(0);" class="d-inline-flex align-items-center bg-white rounded-circle p-1 border justify-content-center" data-bs-toggle="dropdown">
                                                            <i class="isax isax-more d-flex align-items-center justify-content-center text-gray-5"></i>
                                                        </a>
                                                        <ul class="dropdown-menu dropdown-menu-end p-3">
                                                            <li>
                                                                <a href="javascript:void(0);" class="dropdown-item rounded-1" data-bs-toggle="modal" data-bs-target="#edit_modal"><i class="isax isax-edit me-2"></i>Edit</a>
                                                            </li>
                                                            <li>
                                                                <a href="javascript:void(0);" class="dropdown-item rounded-1" data-bs-toggle="modal" data-bs-target="#delete_modal"><i class="isax isax-trash me-2"></i>Delete</a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div class="d-flex align-items-start mb-3 border-bottom border-1 border-light pb-3 mb-3 flex-column">
                                                    <h6 class="d-flex align-items-center mb-3">Support For Theme</h6>

                                                    <div class="d-flex align-items-center gap-3">
                                                        <span class="badge badge-sm badge-soft-light border fs-10 text-dark"> #1234</span>
                                                        <span class="badge badge-sm badge-soft-primary fs-10 text-primary fw-medium d-flex align-items-center justify-content-center"> <i class="fa-solid fa-circle text-primary me-1 fs-5"></i> Open</span>
                                                    </div>

                                                </div>
                                                <div class="d-flex align-items-center justify-content-between">
                                                    <div class="avatar-list-stacked avatar-group-sm me-3">
                                                        <span class="avatar avatar-rounded">
														<img class="border border-white" src="assets/img/profiles/avatar-10.jpg" alt="img">
													</span>
                                                        <span class="avatar avatar-rounded">
														<img class="border border-white" src="assets/img/profiles/avatar-08.jpg" alt="img">
													</span>
                                                        <span class="avatar avatar-rounded">
														<img class="border border-white" src="assets/img/profiles/avatar-07.jpg" alt="img">
													</span>
                                                        <span class="avatar avatar-rounded">
														<img class="border border-white" src="assets/img/profiles/avatar-02.jpg" alt="img">
													</span>
                                                        <span class="avatar avatar-rounded">
														<img class="border border-white" src="assets/img/profiles/avatar-03.jpg" alt="img">
													</span>
                                                        <a href="javascript:void(0);" class="avatar avatar-rounded bg-primary fs-12 text-white">
														1+
													</a>
                                                    </div>
                                                    <div class="d-flex align-items-center fs-12 text-gray-9">
                                                        <i class="isax isax-calendar-2 text-gray-5 fs-14 me-1"></i>30 Jan 2025
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div>
                                        <div class="card kanban-card mb-2">
                                            <div class="card-body">
                                                <div class="d-flex align-items-center justify-content-between mb-3 border-bottom pb-2">
                                                    <div class="d-flex align-items-center">
                                                        <span class="badge bg-soft-orange badge-sm border d-flex align-items-center justify-content-center text-orange fs-12 fw-medium text-danger">Medium</span>
                                                    </div>
                                                    <div class="dropdown">
                                                        <a href="javascript:void(0);" class="d-inline-flex align-items-center bg-white rounded-circle p-1 border justify-content-center" data-bs-toggle="dropdown">
                                                            <i class="isax isax-more d-flex align-items-center justify-content-center text-gray-5"></i>
                                                        </a>
                                                        <ul class="dropdown-menu dropdown-menu-end p-3">
                                                            <li>
                                                                <a href="javascript:void(0);" class="dropdown-item rounded-1" data-bs-toggle="modal" data-bs-target="#edit_modal"><i class="isax isax-edit me-2"></i>Edit</a>
                                                            </li>
                                                            <li>
                                                                <a href="javascript:void(0);" class="dropdown-item rounded-1" data-bs-toggle="modal" data-bs-target="#delete_modal"><i class="isax isax-trash me-2"></i>Delete</a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div class="d-flex align-items-start mb-3 border-bottom border-1 border-light pb-3 mb-3 flex-column">
                                                    <h6 class="d-flex align-items-center mb-3">Verify your email</h6>

                                                    <div class="d-flex align-items-center gap-3">
                                                        <span class="badge badge-sm badge-soft-light border fs-10 text-dark"> #1234</span>
                                                        <span class="badge badge-sm badge-soft-primary fs-10 text-primary fw-medium d-flex align-items-center justify-content-center"> <i class="fa-solid fa-circle text-primary me-1 fs-5"></i> Open</span>
                                                    </div>

                                                </div>
                                                <div class="d-flex align-items-center justify-content-between">
                                                    <div class="avatar-list-stacked avatar-group-sm me-3">
                                                        <span class="avatar avatar-rounded">
														<img class="border border-white" src="assets/img/profiles/avatar-10.jpg" alt="img">
													</span>
                                                        <span class="avatar avatar-rounded">
														<img class="border border-white" src="assets/img/profiles/avatar-08.jpg" alt="img">
													</span>
                                                        <span class="avatar avatar-rounded">
														<img class="border border-white" src="assets/img/profiles/avatar-07.jpg" alt="img">
													</span>
                                                        <span class="avatar avatar-rounded">
														<img class="border border-white" src="assets/img/profiles/avatar-02.jpg" alt="img">
													</span>
                                                        <span class="avatar avatar-rounded">
														<img class="border border-white" src="assets/img/profiles/avatar-03.jpg" alt="img">
													</span>
                                                        <a href="javascript:void(0);" class="avatar avatar-rounded bg-primary fs-12 text-white">
														1+
													</a>
                                                    </div>
                                                    <div class="d-flex align-items-center fs-12 text-gray-9">
                                                        <i class="isax isax-calendar-2 text-gray-5 fs-14 me-1"></i>30 Jan 2025
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="pt-2">
                                    <a href="javascript:void(0);" class="btn btn-white bg-white border d-flex align-items-center justify-content-center" data-bs-toggle="modal" data-bs-target="#add_modal">
                                        <i class="isax isax-add-circle text-gray-9 fs-13 me-1"></i> New Ticket
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- Tabs End -->



            </div>
            <!-- End Content -->



                    <!-- Add Modal Start -->
        <div id="add_modal" class="modal fade">
            <div class="modal-dialog modal-dialog-centered modal-lg">
                <div class="modal-content">
                    <div class="modal-header">
                        <h4 class="modal-title">Add New Ticket</h4>
                        <button type="button" class="btn-close btn-close-modal custom-btn-close" data-bs-dismiss="modal" aria-label="Close"><i class="fa-solid fa-x"></i></button>
                    </div>
                    <form>
                        <div class="modal-body">
                            <div class="row">
                                <div class="col-md-6">
                                    <div class="mb-3">
                                        <label class="form-label">Subject<span class="text-danger ms-1">*</span></label>
                                        <input type="text" class="form-control">
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <div class="mb-3">
                                        <label class="form-label">Assigned Name<span class="text-danger ms-1">*</span></label>
                                        <input type="text" class="form-control">
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <div class="mb-3">
                                        <label id="dateRangePicker" class="form-label">Assigned Date<span class="text-danger ms-1">*</span></label>
                                        <div class="input-group position-relative mb-3 ngxdate">
                                            <input type="text" class="form-control datetimepicker rounded-end" bsDatepicker container=".ngxdate" placeholder="dd/mm/yyyy">
                                            <span class="input-icon-addon fs-16 text-gray-9">
                                                <i class="isax isax-calendar-2"></i>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <div class="mb-3">
                                        <label id="dateRangePicker" class="form-label">Created Date<span class="text-danger ms-1">*</span></label>
                                        <div class="input-group position-relative mb-3 ngxdate1">
                                            <input type="text" class="form-control datetimepicker rounded-end" bsDatepicker container=".ngxdate1" placeholder="dd/mm/yyyy">
                                            <span class="input-icon-addon fs-16 text-gray-9">
                                                <i class="isax isax-calendar-2"></i>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <div class="mb-3">
                                        <label id="dateRangePicker" class="form-label">Due Date<span class="text-danger ms-1">*</span></label>
                                        <div class="input-group position-relative mb-3 ngxdate2">
                                            <input type="text" class="form-control datetimepicker rounded-end" bsDatepicker container=".ngxdate2" placeholder="dd/mm/yyyy">
                                            <span class="input-icon-addon fs-16 text-gray-9">
                                                <i class="isax isax-calendar-2"></i>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <div class="mb-3">
                                        <label class="form-label">Assignee Name<span class="text-danger ms-1">*</span></label>
                                        <input type="text" class="form-control">
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <div class="mb-3">
                                        <label class="form-label">Priority</label>
                                        <mat-select class="custom-mat-select select" placeholder="Select">
                                            <mat-option value="1">Select</mat-option>
                                            <mat-option value="1">Medium</mat-option>
                                            <mat-option value="1">Low</mat-option>
                                            <mat-option value="1">High</mat-option>

                                        </mat-select>
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <div class="mb-3">
                                        <label class="form-label">Status</label>
                                        <mat-select class="custom-mat-select select" placeholder="Select">
                                            <mat-option value="1">Select</mat-option>
                                            <mat-option value="1">Resolved</mat-option>
                                            <mat-option value="1">Closed</mat-option>
                                            <mat-option value="1">Open</mat-option>
                                            <mat-option value="1">Pending</mat-option>
                                        </mat-select>
                                    </div>
                                </div>

                            </div>
                            <div class="col-md-12">
                                <div>
                                    <label class="form-label">Content<span class="text-danger ms-1">*</span></label>
                                    <textarea class="form-control"></textarea>
                                </div>
                            </div>


                        </div>
                        <div class="modal-footer d-flex align-items-center justify-content-between gap-1">
                            <button type="button" class="btn btn-outline-white" data-bs-dismiss="modal">Cancel</button>
                            <button type="submit" class="btn btn-primary" data-bs-dismiss="modal">Create</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
        <!-- Add Modal End -->

        <!-- Edit Modal Start -->
        <div id="edit_modal" class="modal fade">
            <div class="modal-dialog modal-dialog-centered modal-lg">
                <div class="modal-content">
                    <div class="modal-header">
                        <h4 class="modal-title">Edit Ticket</h4>
                        <button type="button" class="btn-close btn-close-modal custom-btn-close" data-bs-dismiss="modal" aria-label="Close"><i class="fa-solid fa-x"></i></button>
                    </div>
                    <form>
                        <div class="modal-body">
                            <div class="row">
                                <div class="col-md-6">
                                    <div class="mb-3">
                                        <label class="form-label">Subject<span class="text-danger ms-1">*</span></label>
                                        <input type="text" class="form-control" value="Management">
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <div class="mb-3">
                                        <label class="form-label">Assigned Name<span class="text-danger ms-1">*</span></label>
                                        <input type="text" class="form-control" value="Joh Carter">
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <div class="mb-3">
                                        <label id="dateRangePicker" class="form-label">Assigned Date<span class="text-danger ms-1">*</span></label>
                                        <div class="input-group position-relative mb-3 ngxdate4">
                                            <input type="text" class="form-control datetimepicker rounded-end" bsDatepicker container=".ngxdate4" placeholder="dd/mm/yyyy">
                                            <span class="input-icon-addon fs-16 text-gray-9">
                                                <i class="isax isax-calendar-2"></i>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <div class="mb-3">
                                        <label id="dateRangePicker" class="form-label">Created Date<span class="text-danger ms-1">*</span></label>
                                        <div class="input-group position-relative mb-3 ngxdate5">
                                            <input type="text" class="form-control datetimepicker rounded-end" bsDatepicker container=".ngxdate5" placeholder="dd/mm/yyyy">
                                            <span class="input-icon-addon fs-16 text-gray-9">
                                                <i class="isax isax-calendar-2"></i>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <div class="mb-3">
                                        <label id="dateRangePicker" class="form-label">Due Date<span class="text-danger ms-1">*</span></label>
                                        <div class="input-group position-relative mb-3 ngxdate6">
                                            <input type="text" class="form-control datetimepicker rounded-end" bsDatepicker container=".ngxdate6" placeholder="dd/mm/yyyy">
                                            <span class="input-icon-addon fs-16 text-gray-9">
                                                <i class="isax isax-calendar-2"></i>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <div class="mb-3">
                                        <label class="form-label">Assignee Name<span class="text-danger ms-1">*</span></label>
                                        <input type="text" class="form-control" value="Emma Lewis">
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <div class="mb-3">
                                        <label class="form-label">Priority</label>
                                        <mat-select class="custom-mat-select select" placeholder="High">
                                            <mat-option value="1">Select</mat-option>
                                            <mat-option value="1">Medium</mat-option>
                                            <mat-option value="1">Low</mat-option>
                                            <mat-option value="1">High</mat-option>

                                        </mat-select>
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <div class="mb-3">
                                        <label class="form-label">Status</label>
                                        <mat-select class="custom-mat-select select" placeholder="Open">
                                            <mat-option value="1">Select</mat-option>
                                            <mat-option value="1">Resolved</mat-option>
                                            <mat-option value="1">Closed</mat-option>
                                            <mat-option value="1">Open</mat-option>
                                            <mat-option value="1">Pending</mat-option>
                                        </mat-select>
                                    </div>
                                </div>

                            </div>
                            <div class="col-md-12">
                                <div>
                                    <label class="form-label">Content<span class="text-danger ms-1">*</span></label>
                                    <textarea class="form-control">Need help? Submit a support ticket, and our team will assist you quickly. Provide your name, email, issue category, and a detailed description of the problem. Choose a priority level and attach relevant files if needed.
                                        </textarea>
                                </div>
                            </div>


                        </div>
                        <div class="modal-footer d-flex align-items-center justify-content-between gap-1">
                            <button type="button" class="btn btn-outline-white" data-bs-dismiss="modal">Cancel</button>
                            <button type="submit" class="btn btn-primary" data-bs-dismiss="modal">Save Changes</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
        <!-- Edit Modal End -->

        <!-- Delete Modal Start -->
        <div class="modal fade" id="delete_modal">
            <div class="modal-dialog modal-dialog-centered modal-sm">
                <div class="modal-content">
                    <div class="modal-body text-center">
                        <div class="mb-3">
                            <img src="assets/img/icons/delete.svg" alt="img">
                        </div>
                        <h6 class="mb-1">Delete Tickets Kanban</h6>
                        <p class="mb-3">Are you sure, you want to delete Tickets Kanban?</p>
                        <div class="d-flex justify-content-center">
                            <a href="javascript:void(0);" class="btn btn-outline-white me-3" data-bs-dismiss="modal">Cancel</a>
                            <a href="javascript:void(0);" class="btn btn-primary" data-bs-dismiss="modal">Yes, Delete</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- Delete Modal End -->` }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(TicketKanbanComponent, { className: "TicketKanbanComponent", filePath: "src/app/features/manage/tickets/ticket-kanban/ticket-kanban.component.ts", lineNumber: 20 });
})();
export {
  TicketKanbanComponent
};
//# sourceMappingURL=chunk-ISYOF3DE.js.map

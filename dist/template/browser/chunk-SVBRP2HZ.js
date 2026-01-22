import {
  routes
} from "./chunk-YJY3UYMJ.js";
import "./chunk-AWXYRVJS.js";
import {
  RouterLink
} from "./chunk-WOBWH5QA.js";
import "./chunk-KYBWVUSB.js";
import "./chunk-ZCJVS2AD.js";
import {
  CommonModule
} from "./chunk-LNSVVXVJ.js";
import {
  Component,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵproperty,
  ɵɵtext
} from "./chunk-HKG6HBOI.js";
import "./chunk-TXDUYLVM.js";

// src/app/features/ui-interface/base-ui/modals/modals.component.ts
var ModalsComponent = class _ModalsComponent {
  routes = routes;
  static \u0275fac = function ModalsComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ModalsComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ModalsComponent, selectors: [["app-modals"]], decls: 952, vars: 4, consts: [[1, ""], [1, "d-flex", "align-items-sm-center", "flex-sm-row", "flex-column", "gap-2", "pb-3"], [1, "flex-grow-1"], [1, "fs-18", "fw-semibold", "mb-0"], [1, "text-end"], [1, "breadcrumb", "m-0", "py-0"], [1, "breadcrumb-item"], ["href", "javascript: void(0);"], [1, "breadcrumb-item", "active"], [1, "row"], [1, "col-xl-6"], [1, "card"], [1, "card-header"], [1, "card-title"], [1, "card-body"], [1, "text-muted"], ["id", "standard-modal", "tabindex", "-1", "role", "dialog", "aria-labelledby", "standard-modalLabel", "aria-hidden", "true", 1, "modal", "fade"], [1, "modal-dialog"], [1, "modal-content"], [1, "modal-header"], ["id", "standard-modalLabel", 1, "modal-title"], ["type", "button", "data-bs-dismiss", "modal", "aria-label", "Close", 1, "btn-close"], [1, "modal-body"], [1, "mb-0"], [1, "modal-footer"], ["type", "button", "data-bs-dismiss", "modal", 1, "btn", "btn-secondary"], ["type", "button", 1, "btn", "btn-primary"], ["id", "bs-example-modal-lg", "tabindex", "-1", "role", "dialog", "aria-labelledby", "myLargeModalLabel", "aria-hidden", "true", 1, "modal", "fade"], [1, "modal-dialog", "modal-lg"], ["id", "myLargeModalLabel", 1, "modal-title"], ["id", "bs-example-modal-sm", "tabindex", "-1", "role", "dialog", "aria-labelledby", "mySmallModalLabel", "aria-hidden", "true", 1, "modal", "fade"], [1, "modal-dialog", "modal-sm"], ["id", "mySmallModalLabel", 1, "modal-title"], ["id", "full-width-modal", "tabindex", "-1", "role", "dialog", "aria-labelledby", "fullWidthModalLabel", "aria-hidden", "true", 1, "modal", "fade"], [1, "modal-dialog", "modal-full-width"], ["id", "fullWidthModalLabel", 1, "modal-title"], ["id", "scrollable-modal", "tabindex", "-1", "role", "dialog", "aria-labelledby", "scrollableModalTitle", "aria-hidden", "true", 1, "modal", "fade"], ["role", "document", 1, "modal-dialog", "modal-dialog-scrollable"], ["id", "scrollableModalTitle", 1, "modal-title"], [1, "d-flex", "flex-wrap", "gap-2"], ["type", "button", "data-bs-toggle", "modal", "data-bs-target", "#standard-modal", 1, "btn", "btn-primary"], ["type", "button", "data-bs-toggle", "modal", "data-bs-target", "#bs-example-modal-lg", 1, "btn", "btn-info"], ["type", "button", "data-bs-toggle", "modal", "data-bs-target", "#bs-example-modal-sm", 1, "btn", "btn-success"], ["type", "button", "data-bs-toggle", "modal", "data-bs-target", "#full-width-modal", 1, "btn", "btn-primary"], ["type", "button", "data-bs-toggle", "modal", "data-bs-target", "#scrollable-modal", 1, "btn", "btn-secondary"], ["id", "top-modal", "tabindex", "-1", "role", "dialog", "aria-hidden", "true", 1, "modal", "fade"], [1, "modal-dialog", "modal-top"], ["id", "topModalLabel", 1, "modal-title"], [1, "mt-0"], ["id", "bottom-modal", "tabindex", "-1", "role", "dialog", "aria-hidden", "true", 1, "modal", "fade"], [1, "modal-dialog", "modal-bottom"], ["id", "bottomModalLabel", 1, "modal-title"], ["id", "centermodal", "tabindex", "-1", "role", "dialog", "aria-hidden", "true", 1, "modal", "fade"], [1, "modal-dialog", "modal-dialog-centered"], ["id", "myCenterModalLabel", 1, "modal-title"], ["type", "button", "data-bs-toggle", "modal", "data-bs-target", "#top-modal", 1, "btn", "btn-secondary"], ["type", "button", "data-bs-toggle", "modal", "data-bs-target", "#bottom-modal", 1, "btn", "btn-secondary"], ["type", "button", "data-bs-toggle", "modal", "data-bs-target", "#centermodal", 1, "btn", "btn-secondary"], ["id", "signup-modal", "tabindex", "-1", "role", "dialog", "aria-hidden", "true", 1, "modal", "fade"], [1, "auth-brand", "text-center", "mt-2", "mb-3", "position-relative", "top-0"], [1, "logo-dark", 3, "routerLink"], ["src", "assets/img/logo-white.svg", "alt", "dark logo", "height", "33"], [1, "logo-light", 3, "routerLink"], ["src", "assets/img/logo.svg", "alt", "logo", "height", "33"], ["action", "#", 1, "ps-3", "pe-3"], [1, "mb-3"], ["for", "username", 1, "form-label"], ["type", "email", "id", "username", "required", "", "placeholder", "Michael Zenaty", 1, "form-control"], ["for", "emailaddress", 1, "form-label"], ["type", "email", "id", "emailaddress", "required", "", "placeholder", "john@deo.com", 1, "form-control"], ["for", "password", 1, "form-label"], ["type", "password", "required", "", "id", "password", "placeholder", "Enter your password", 1, "form-control"], [1, "form-check"], ["type", "checkbox", "id", "customCheck1", 1, "form-check-input", "fs-15"], ["for", "customCheck1", 1, "form-check-label"], ["href", "javascript:void(0);"], [1, "mb-3", "text-center"], ["type", "submit", 1, "btn", "btn-primary"], ["id", "login-modal", "tabindex", "-1", "role", "dialog", "aria-hidden", "true", 1, "modal", "fade"], ["src", "assets/img/logo-white.svg", "alt", "dark logo", "height", "22"], ["src", "assets/img/logo.svg", "alt", "logo", "height", "22"], ["for", "emailaddress1", 1, "form-label"], ["type", "email", "id", "emailaddress1", "required", "", "placeholder", "john@deo.com", 1, "form-control"], ["for", "password1", 1, "form-label"], ["type", "password", "required", "", "id", "password1", "placeholder", "Enter your password", 1, "form-control"], ["type", "checkbox", "id", "RememberCheckBox", 1, "form-check-input"], ["for", "RememberCheckBox", 1, "form-check-label"], ["type", "submit", 1, "btn", "rounded-pill", "btn-primary"], ["type", "button", "data-bs-toggle", "modal", "data-bs-target", "#signup-modal", 1, "btn", "btn-primary"], ["type", "button", "data-bs-toggle", "modal", "data-bs-target", "#login-modal", 1, "btn", "btn-info"], ["id", "success-alert-modal", "tabindex", "-1", "role", "dialog", "aria-hidden", "true", 1, "modal", "fade"], [1, "modal-content", "modal-filled", "bg-success"], [1, "modal-body", "p-4"], [1, "text-center"], [1, "ti", "ti-check", "h1"], [1, "mt-2"], [1, "mt-3"], ["type", "button", "data-bs-dismiss", "modal", 1, "btn", "btn-secondary", "my-2"], ["id", "info-alert-modal", "tabindex", "-1", "role", "dialog", "aria-hidden", "true", 1, "modal", "fade"], [1, "ti", "ti-info-square-rounded", "h1", "text-info"], ["type", "button", "data-bs-dismiss", "modal", 1, "btn", "btn-info", "my-2"], ["id", "warning-alert-modal", "tabindex", "-1", "role", "dialog", "aria-hidden", "true", 1, "modal", "fade"], [1, "ti", "ti-alert-circle", "h1", "text-warning"], ["type", "button", "data-bs-dismiss", "modal", 1, "btn", "btn-warning", "my-2"], ["id", "danger-alert-modal", "tabindex", "-1", "role", "dialog", "aria-hidden", "true", 1, "modal", "fade"], [1, "modal-content", "modal-filled", "bg-danger"], [1, "ti", "ti-circle-x", "h1"], ["type", "button", "data-bs-toggle", "modal", "data-bs-target", "#success-alert-modal", 1, "btn", "btn-success"], ["type", "button", "data-bs-toggle", "modal", "data-bs-target", "#info-alert-modal", 1, "btn", "btn-info"], ["type", "button", "data-bs-toggle", "modal", "data-bs-target", "#warning-alert-modal", 1, "btn", "btn-warning"], ["type", "button", "data-bs-toggle", "modal", "data-bs-target", "#danger-alert-modal", 1, "btn", "btn-danger"], ["id", "primary-header-modal", "tabindex", "-1", "role", "dialog", "aria-labelledby", "primary-header-modalLabel", "aria-hidden", "true", 1, "modal", "fade"], [1, "modal-header", "text-bg-primary", "border-0"], ["id", "primary-header-modalLabel", 1, "modal-title"], ["type", "button", "data-bs-dismiss", "modal", "aria-label", "Close", 1, "btn-close", "btn-close-white"], ["id", "success-header-modal", "tabindex", "-1", "role", "dialog", "aria-labelledby", "success-header-modalLabel", "aria-hidden", "true", 1, "modal", "fade"], [1, "modal-header", "text-bg-success", "border-0"], ["id", "success-header-modalLabel", 1, "modal-title"], ["type", "button", 1, "btn", "btn-success"], ["id", "info-header-modal", "tabindex", "-1", "role", "dialog", "aria-labelledby", "info-header-modalLabel", "aria-hidden", "true", 1, "modal", "fade"], [1, "modal-header", "text-bg-info", "border-0"], ["id", "info-header-modalLabel", 1, "modal-title"], ["type", "button", 1, "btn", "btn-info"], ["id", "warning-header-modal", "tabindex", "-1", "role", "dialog", "aria-labelledby", "warning-header-modalLabel", "aria-hidden", "true", 1, "modal", "fade"], [1, "modal-header", "text-bg-warning", "border-0"], ["id", "warning-header-modalLabel", 1, "modal-title"], ["type", "button", 1, "btn", "btn-warning"], ["id", "danger-header-modal", "tabindex", "-1", "role", "dialog", "aria-labelledby", "danger-header-modalLabel", "aria-hidden", "true", 1, "modal", "fade"], [1, "modal-header", "text-bg-danger", "border-0"], ["id", "danger-header-modalLabel", 1, "modal-title"], ["type", "button", 1, "btn", "btn-danger"], ["id", "dark-header-modal", "tabindex", "-1", "role", "dialog", "aria-labelledby", "dark-header-modalLabel", "aria-hidden", "true", 1, "modal", "fade"], [1, "modal-header", "text-bg-dark", "border-0"], ["id", "dark-header-modalLabel", 1, "modal-title"], ["type", "button", 1, "btn", "btn-dark"], ["type", "button", "data-bs-toggle", "modal", "data-bs-target", "#primary-header-modal", 1, "btn", "btn-primary"], ["type", "button", "data-bs-toggle", "modal", "data-bs-target", "#success-header-modal", 1, "btn", "btn-success"], ["type", "button", "data-bs-toggle", "modal", "data-bs-target", "#info-header-modal", 1, "btn", "btn-info"], ["type", "button", "data-bs-toggle", "modal", "data-bs-target", "#warning-header-modal", 1, "btn", "btn-warning"], ["type", "button", "data-bs-toggle", "modal", "data-bs-target", "#danger-header-modal", 1, "btn", "btn-danger"], ["type", "button", "data-bs-toggle", "modal", "data-bs-target", "#dark-header-modal", 1, "btn", "btn-dark"], ["id", "fill-primary-modal", "tabindex", "-1", "role", "dialog", "aria-labelledby", "fill-primary-modalLabel", "aria-hidden", "true", 1, "modal", "fade"], [1, "modal-content", "modal-filled", "bg-primary"], ["id", "fill-primary-modalLabel", 1, "modal-title"], ["type", "button", "data-bs-dismiss", "modal", 1, "btn", "btn-danger"], ["type", "button", 1, "btn", "btn-secondary"], ["id", "fill-success-modal", "tabindex", "-1", "role", "dialog", "aria-labelledby", "fill-success-modalLabel", "aria-hidden", "true", 1, "modal", "fade"], ["id", "fill-success-modalLabel", 1, "modal-title"], ["id", "fill-info-modal", "tabindex", "-1", "role", "dialog", "aria-labelledby", "fill-info-modalLabel", "aria-hidden", "true", 1, "modal", "fade"], [1, "modal-content", "modal-filled", "bg-info"], ["id", "fill-info-modalLabel", 1, "modal-title"], ["id", "fill-warning-modal", "tabindex", "-1", "role", "dialog", "aria-labelledby", "fill-warning-modalLabel", "aria-hidden", "true", 1, "modal", "fade"], [1, "modal-content", "modal-filled", "bg-warning"], ["id", "fill-warning-modalLabel", 1, "modal-title"], ["id", "fill-danger-modal", "tabindex", "-1", "role", "dialog", "aria-labelledby", "fill-danger-modalLabel", "aria-hidden", "true", 1, "modal", "fade"], ["id", "fill-danger-modalLabel", 1, "modal-title"], ["type", "button", "data-bs-dismiss", "modal", 1, "btn", "btn-info"], ["id", "fill-dark-modal", "tabindex", "-1", "role", "dialog", "aria-labelledby", "fill-dark-modalLabel", "aria-hidden", "true", 1, "modal", "fade"], [1, "modal-content", "modal-filled", "bg-dark"], ["id", "fill-dark-modalLabel", 1, "modal-title"], ["type", "button", "data-bs-toggle", "modal", "data-bs-target", "#fill-primary-modal", 1, "btn", "btn-primary"], ["type", "button", "data-bs-toggle", "modal", "data-bs-target", "#fill-success-modal", 1, "btn", "btn-success"], ["type", "button", "data-bs-toggle", "modal", "data-bs-target", "#fill-info-modal", 1, "btn", "btn-info"], ["type", "button", "data-bs-toggle", "modal", "data-bs-target", "#fill-warning-modal", 1, "btn", "btn-warning"], ["type", "button", "data-bs-toggle", "modal", "data-bs-target", "#fill-danger-modal", 1, "btn", "btn-danger"], ["type", "button", "data-bs-toggle", "modal", "data-bs-target", "#fill-dark-modal", 1, "btn", "btn-dark"], ["id", "multiple-one", "tabindex", "-1", "role", "dialog", "aria-labelledby", "multiple-oneModalLabel", "aria-hidden", "true", 1, "modal", "fade"], ["id", "multiple-oneModalLabel", 1, "modal-title"], ["type", "button", "data-bs-target", "#multiple-two", "data-bs-toggle", "modal", "data-bs-dismiss", "modal", 1, "btn", "btn-primary"], ["id", "multiple-two", "tabindex", "-1", "role", "dialog", "aria-labelledby", "multiple-twoModalLabel", "aria-hidden", "true", 1, "modal", "fade"], ["id", "multiple-twoModalLabel", 1, "modal-title"], ["type", "button", "data-bs-dismiss", "modal", 1, "btn", "btn-primary"], ["type", "button", "data-bs-toggle", "modal", "data-bs-target", "#multiple-one", 1, "btn", "btn-primary"], ["id", "exampleModalToggle", "aria-hidden", "true", "aria-labelledby", "exampleModalToggleLabel", "tabindex", "-1", 1, "modal", "fade"], ["id", "exampleModalToggleLabel", 1, "modal-title"], ["data-bs-target", "#exampleModalToggle2", "data-bs-toggle", "modal", "data-bs-dismiss", "modal", 1, "btn", "btn-primary"], ["id", "exampleModalToggle2", "aria-hidden", "true", "aria-labelledby", "exampleModalToggleLabel2", "tabindex", "-1", 1, "modal", "fade"], ["id", "exampleModalToggleLabel2", 1, "modal-title"], ["data-bs-target", "#exampleModalToggle", "data-bs-toggle", "modal", "data-bs-dismiss", "modal", 1, "btn", "btn-primary"], ["data-bs-toggle", "modal", "href", "#exampleModalToggle", "role", "button", 1, "btn", "btn-secondary"], [1, "col-xl", "-6"], [1, "hstack", "gap-2", "flex-wrap"], ["type", "button", "data-bs-toggle", "modal", "data-bs-target", "#fullscreeexampleModal", 1, "btn", "btn-primary"], ["type", "button", "data-bs-toggle", "modal", "data-bs-target", "#exampleModalFullscreenSm", 1, "btn", "btn-primary"], ["type", "button", "data-bs-toggle", "modal", "data-bs-target", "#exampleModalFullscreenMd", 1, "btn", "btn-primary"], ["type", "button", "data-bs-toggle", "modal", "data-bs-target", "#exampleModalFullscreenLg", 1, "btn", "btn-primary"], ["type", "button", "data-bs-toggle", "modal", "data-bs-target", "#exampleModalFullscreenXl", 1, "btn", "btn-primary"], ["type", "button", "data-bs-toggle", "modal", "data-bs-target", "#exampleModalFullscreenXxl", 1, "btn", "btn-primary"], ["id", "fullscreeexampleModal", "tabindex", "-1", "aria-labelledby", "fullscreeexampleModalLabel", "aria-hidden", "true", 1, "modal", "fade"], [1, "modal-dialog", "modal-fullscreen"], ["id", "fullscreeexampleModalLabel", 1, "modal-title"], ["href", "javascript:void(0);", "data-bs-dismiss", "modal", 1, "btn", "btn-secondary"], ["id", "exampleModalFullscreenSm", "tabindex", "-1", "aria-labelledby", "exampleModalFullscreenSmLabel", "aria-hidden", "true", 1, "modal", "fade"], [1, "modal-dialog", "modal-fullscreen-sm-down"], ["id", "exampleModalFullscreenSmLabel", 1, "modal-title"], ["id", "exampleModalFullscreenMd", "tabindex", "-1", "aria-labelledby", "exampleModalFullscreenMdLabel", "aria-hidden", "true", 1, "modal", "fade"], [1, "modal-dialog", "modal-fullscreen-md-down"], ["id", "exampleModalFullscreenMdLabel", 1, "modal-title"], ["id", "exampleModalFullscreenLg", "tabindex", "-1", "aria-labelledby", "exampleModalFullscreenLgLabel", "aria-hidden", "true", 1, "modal", "fade"], [1, "modal-dialog", "modal-fullscreen-lg-down"], ["id", "exampleModalFullscreenLgLabel", 1, "modal-title"], ["id", "exampleModalFullscreenXl", "tabindex", "-1", "aria-labelledby", "exampleModalFullscreenXlLabel", "aria-hidden", "true", 1, "modal", "fade"], ["id", "exampleModalFullscreenXlLabel", 1, "modal-title"], ["id", "exampleModalFullscreenXxl", "tabindex", "-1", "aria-labelledby", "exampleModalFullscreenXxlLabel", "aria-hidden", "true", 1, "modal", "fade"], [1, "modal-dialog", "modal-fullscreen-xxl-down"], ["id", "exampleModalFullscreenXxlLabel", 1, "modal-title"], ["href", "https://developer.mozilla.org/en-US/docs/Learn/HTML/Howto/Use_data_attributes", "target", "_blank"], ["type", "button", "data-bs-toggle", "modal", "data-bs-target", "#exampleModal", "data-bs-whatever", "@mdo", 1, "btn", "btn-primary"], ["type", "button", "data-bs-toggle", "modal", "data-bs-target", "#exampleModal", "data-bs-whatever", "@fat", 1, "btn", "btn-primary"], ["type", "button", "data-bs-toggle", "modal", "data-bs-target", "#exampleModal", "data-bs-whatever", "@getbootstrap", 1, "btn", "btn-primary"], ["id", "exampleModal", "tabindex", "-1", "aria-labelledby", "exampleModalLabel", "aria-hidden", "true", 1, "modal", "fade"], ["id", "exampleModalLabel", 1, "modal-title"], ["for", "recipient-name", 1, "col-form-label"], ["type", "text", "id", "recipient-name", 1, "form-control"], ["for", "message-text", 1, "col-form-label"], ["id", "message-text", 1, "form-control"], ["type", "button", "data-bs-toggle", "modal", "data-bs-target", "#staticBackdrop", 1, "btn", "btn-info"], ["id", "staticBackdrop", "data-bs-backdrop", "static", "data-bs-keyboard", "false", "tabindex", "-1", "aria-labelledby", "staticBackdropLabel", "aria-hidden", "true", 1, "modal", "fade"], ["id", "staticBackdropLabel", 1, "modal-title"], [1, "m-0"], ["type", "button", "data-bs-toggle", "modal", "data-bs-target", "#exampleModalPopovers", 1, "btn", "btn-primary"], ["id", "exampleModalPopovers", "tabindex", "-1", "aria-labelledby", "exampleModalPopoversLabel", "aria-hidden", "true", 1, "modal", "fade"], ["id", "exampleModalPopove	rsLabel", 1, "modal-title"], [1, "fs-12"], ["data-bs-toggle", "popover", "title", "Popover title", "data-bs-content", "Popover body content is set in this attribute.", 1, "btn", "btn-secondary"], ["href", "javascript:void(0);", "data-bs-toggle", "tooltip", "title", "Tooltip", 1, "text-primary"], [1, "col-xl-4"], ["type", "button", "aria-label", "Close", 1, "btn-close"], ["type", "button", "disabled", "", "aria-label", "Close", 1, "btn-close"], [1, "card", "overflow-hidden"], [1, "card-body", "bg-black"], ["type", "button", "aria-label", "Close", 1, "btn-close", "btn-close-white"], ["type", "button", "disabled", "", "aria-label", "Close", 1, "btn-close", "btn-close-white"]], template: function ModalsComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "h4", 3);
      \u0275\u0275text(4, "Modals");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(5, "div", 4)(6, "ol", 5)(7, "li", 6)(8, "a", 7);
      \u0275\u0275text(9, "Home");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(10, "li", 6)(11, "a", 7);
      \u0275\u0275text(12, "Base UI");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(13, "li", 8);
      \u0275\u0275text(14, "Modals");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(15, "div", 9)(16, "div", 10)(17, "div", 11)(18, "div", 12)(19, "h5", 13);
      \u0275\u0275text(20, "Bootstrap Modals");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(21, "div", 14)(22, "p", 15);
      \u0275\u0275text(23, " A rendered modal with header, body, and set of actions in the footer. ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(24, "div", 16)(25, "div", 17)(26, "div", 18)(27, "div", 19)(28, "h4", 20);
      \u0275\u0275text(29, "Modal Heading");
      \u0275\u0275elementEnd();
      \u0275\u0275element(30, "button", 21);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(31, "div", 22)(32, "h5");
      \u0275\u0275text(33, "Text in a modal");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(34, "p");
      \u0275\u0275text(35, "Duis mollis, est non commodo luctus, nisi erat porttitor ligula.");
      \u0275\u0275elementEnd();
      \u0275\u0275element(36, "hr");
      \u0275\u0275elementStart(37, "h5");
      \u0275\u0275text(38, "Overflowing text to show scroll behavior");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(39, "p");
      \u0275\u0275text(40, "Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(41, "p");
      \u0275\u0275text(42, "Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(43, "p", 23);
      \u0275\u0275text(44, "Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(45, "div", 24)(46, "button", 25);
      \u0275\u0275text(47, "Close");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(48, "button", 26);
      \u0275\u0275text(49, "Save changes");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(50, "div", 27)(51, "div", 28)(52, "div", 18)(53, "div", 19)(54, "h4", 29);
      \u0275\u0275text(55, "Large modal");
      \u0275\u0275elementEnd();
      \u0275\u0275element(56, "button", 21);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(57, "div", 22);
      \u0275\u0275text(58, " ... ");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(59, "div", 30)(60, "div", 31)(61, "div", 18)(62, "div", 19)(63, "h4", 32);
      \u0275\u0275text(64, "Small modal");
      \u0275\u0275elementEnd();
      \u0275\u0275element(65, "button", 21);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(66, "div", 22);
      \u0275\u0275text(67, " ... ");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(68, "div", 33)(69, "div", 34)(70, "div", 18)(71, "div", 19)(72, "h4", 35);
      \u0275\u0275text(73, "Modal Heading");
      \u0275\u0275elementEnd();
      \u0275\u0275element(74, "button", 21);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(75, "div", 22)(76, "h5");
      \u0275\u0275text(77, "Text in a modal");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(78, "p");
      \u0275\u0275text(79, "Duis mollis, est non commodo luctus, nisi erat porttitor ligula.");
      \u0275\u0275elementEnd();
      \u0275\u0275element(80, "hr");
      \u0275\u0275elementStart(81, "h5");
      \u0275\u0275text(82, "Overflowing text to show scroll behavior");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(83, "p");
      \u0275\u0275text(84, "Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(85, "p");
      \u0275\u0275text(86, "Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(87, "p", 23);
      \u0275\u0275text(88, "Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(89, "div", 24)(90, "button", 25);
      \u0275\u0275text(91, "Close");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(92, "button", 26);
      \u0275\u0275text(93, "Save changes");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(94, "div", 36)(95, "div", 37)(96, "div", 18)(97, "div", 19)(98, "h4", 38);
      \u0275\u0275text(99, "Modal title");
      \u0275\u0275elementEnd();
      \u0275\u0275element(100, "button", 21);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(101, "div", 22)(102, "p");
      \u0275\u0275text(103, "Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(104, "p");
      \u0275\u0275text(105, "Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(106, "p");
      \u0275\u0275text(107, "Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(108, "p");
      \u0275\u0275text(109, "Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(110, "p");
      \u0275\u0275text(111, "Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(112, "p");
      \u0275\u0275text(113, "Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(114, "p");
      \u0275\u0275text(115, "Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(116, "p");
      \u0275\u0275text(117, "Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(118, "p");
      \u0275\u0275text(119, "Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(120, "p");
      \u0275\u0275text(121, "Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(122, "p");
      \u0275\u0275text(123, "Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(124, "p");
      \u0275\u0275text(125, "Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(126, "p");
      \u0275\u0275text(127, "Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(128, "p");
      \u0275\u0275text(129, "Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(130, "p");
      \u0275\u0275text(131, "Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(132, "p");
      \u0275\u0275text(133, "Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(134, "p");
      \u0275\u0275text(135, "Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(136, "p", 23);
      \u0275\u0275text(137, "Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(138, "div", 24)(139, "button", 25);
      \u0275\u0275text(140, "Close");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(141, "button", 26);
      \u0275\u0275text(142, "Save changes");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(143, "div", 39)(144, "button", 40);
      \u0275\u0275text(145, "Standard Modal");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(146, "button", 41);
      \u0275\u0275text(147, "Large Modal");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(148, "button", 42);
      \u0275\u0275text(149, "Small Modal");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(150, "button", 43);
      \u0275\u0275text(151, "Full Width Modal");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(152, "button", 44);
      \u0275\u0275text(153, "Scrollable Modal");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(154, "div", 10)(155, "div", 11)(156, "div", 12)(157, "h5", 13);
      \u0275\u0275text(158, "Modal Position");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(159, "div", 14)(160, "p", 15);
      \u0275\u0275text(161, "Specify the position for the modal. You can display modal at top, bottom, or center of page by specifying classes ");
      \u0275\u0275elementStart(162, "code");
      \u0275\u0275text(163, "modal-top");
      \u0275\u0275elementEnd();
      \u0275\u0275text(164, ", ");
      \u0275\u0275elementStart(165, "code");
      \u0275\u0275text(166, "modal-bottom");
      \u0275\u0275elementEnd();
      \u0275\u0275text(167, "and ");
      \u0275\u0275elementStart(168, "code");
      \u0275\u0275text(169, "modal-dialog-centered");
      \u0275\u0275elementEnd();
      \u0275\u0275text(170, "respectively.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(171, "div", 45)(172, "div", 46)(173, "div", 18)(174, "div", 19)(175, "h4", 47);
      \u0275\u0275text(176, "Modal Heading");
      \u0275\u0275elementEnd();
      \u0275\u0275element(177, "button", 21);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(178, "div", 22)(179, "h5", 48);
      \u0275\u0275text(180, "Text in a modal");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(181, "p", 23);
      \u0275\u0275text(182, "Duis mollis, est non commodo luctus, nisi erat porttitor ligula.");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(183, "div", 24)(184, "button", 25);
      \u0275\u0275text(185, "Close");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(186, "button", 26);
      \u0275\u0275text(187, "Save changes");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(188, "div", 49)(189, "div", 50)(190, "div", 18)(191, "div", 19)(192, "h4", 51);
      \u0275\u0275text(193, "Modal Heading");
      \u0275\u0275elementEnd();
      \u0275\u0275element(194, "button", 21);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(195, "div", 22)(196, "h5", 48);
      \u0275\u0275text(197, "Text in a modal");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(198, "p", 23);
      \u0275\u0275text(199, "Duis mollis, est non commodo luctus, nisi erat porttitor ligula.");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(200, "div", 24)(201, "button", 25);
      \u0275\u0275text(202, "Close");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(203, "button", 26);
      \u0275\u0275text(204, "Save changes");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(205, "div", 52)(206, "div", 53)(207, "div", 18)(208, "div", 19)(209, "h4", 54);
      \u0275\u0275text(210, "Center Modal");
      \u0275\u0275elementEnd();
      \u0275\u0275element(211, "button", 21);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(212, "div", 22)(213, "h5", 48);
      \u0275\u0275text(214, "Overflowing text to show scroll behavior");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(215, "p");
      \u0275\u0275text(216, "Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(217, "p", 23);
      \u0275\u0275text(218, "Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(219, "div", 39)(220, "button", 55);
      \u0275\u0275text(221, "Top Modal");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(222, "button", 56);
      \u0275\u0275text(223, "Bottom Modal");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(224, "button", 57);
      \u0275\u0275text(225, "Center Modal");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(226, "div", 9)(227, "div", 10)(228, "div", 11)(229, "div", 12)(230, "h5", 13);
      \u0275\u0275text(231, "Modal with Pages");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(232, "div", 14)(233, "p", 15);
      \u0275\u0275text(234, "Examples of custom modals.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(235, "div", 58)(236, "div", 17)(237, "div", 18)(238, "div", 22)(239, "div", 59)(240, "a", 60)(241, "span");
      \u0275\u0275element(242, "img", 61);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(243, "a", 62)(244, "span");
      \u0275\u0275element(245, "img", 63);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(246, "form", 64)(247, "div", 65)(248, "label", 66);
      \u0275\u0275text(249, "Name");
      \u0275\u0275elementEnd();
      \u0275\u0275element(250, "input", 67);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(251, "div", 65)(252, "label", 68);
      \u0275\u0275text(253, "Email address");
      \u0275\u0275elementEnd();
      \u0275\u0275element(254, "input", 69);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(255, "div", 65)(256, "label", 70);
      \u0275\u0275text(257, "Password");
      \u0275\u0275elementEnd();
      \u0275\u0275element(258, "input", 71);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(259, "div", 65)(260, "div", 72);
      \u0275\u0275element(261, "input", 73);
      \u0275\u0275elementStart(262, "label", 74);
      \u0275\u0275text(263, "I accept ");
      \u0275\u0275elementStart(264, "a", 75);
      \u0275\u0275text(265, "Terms and Conditions");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(266, "div", 76)(267, "button", 77);
      \u0275\u0275text(268, "Sign Up Free");
      \u0275\u0275elementEnd()()()()()()();
      \u0275\u0275elementStart(269, "div", 78)(270, "div", 17)(271, "div", 18)(272, "div", 22)(273, "div", 59)(274, "a", 60)(275, "span");
      \u0275\u0275element(276, "img", 79);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(277, "a", 62)(278, "span");
      \u0275\u0275element(279, "img", 80);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(280, "form", 64)(281, "div", 65)(282, "label", 81);
      \u0275\u0275text(283, "Email address");
      \u0275\u0275elementEnd();
      \u0275\u0275element(284, "input", 82);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(285, "div", 65)(286, "label", 83);
      \u0275\u0275text(287, "Password");
      \u0275\u0275elementEnd();
      \u0275\u0275element(288, "input", 84);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(289, "div", 65)(290, "div", 72);
      \u0275\u0275element(291, "input", 85);
      \u0275\u0275elementStart(292, "label", 86);
      \u0275\u0275text(293, "Remember me");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(294, "div", 76)(295, "button", 87);
      \u0275\u0275text(296, "Sign In");
      \u0275\u0275elementEnd()()()()()()();
      \u0275\u0275elementStart(297, "div", 39)(298, "button", 88);
      \u0275\u0275text(299, "Sign Up Modal");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(300, "button", 89);
      \u0275\u0275text(301, "Log In Modal");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(302, "div", 10)(303, "div", 11)(304, "div", 12)(305, "h5", 13);
      \u0275\u0275text(306, "Modal based Alerts");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(307, "div", 14)(308, "p", 15);
      \u0275\u0275text(309, "Show different contexual alert messages using modal component");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(310, "div", 90)(311, "div", 31)(312, "div", 91)(313, "div", 92)(314, "div", 93);
      \u0275\u0275element(315, "i", 94);
      \u0275\u0275elementStart(316, "h4", 95);
      \u0275\u0275text(317, "Well Done!");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(318, "p", 96);
      \u0275\u0275text(319, "Congratulations! You've achieved success! \u{1F389} Your hard work, dedication, and perseverance have paid off. Keep up the great work and continue to strive for excellence.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(320, "button", 97);
      \u0275\u0275text(321, "Continue");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(322, "div", 98)(323, "div", 31)(324, "div", 18)(325, "div", 92)(326, "div", 93);
      \u0275\u0275element(327, "i", 99);
      \u0275\u0275elementStart(328, "h4", 95);
      \u0275\u0275text(329, "Heads up!");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(330, "p", 96);
      \u0275\u0275text(331, "Please be informed that our platform will undergo scheduled maintenance on 21 April from 10:30 PM to 11:45 PM.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(332, "button", 100);
      \u0275\u0275text(333, "Continue");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(334, "div", 101)(335, "div", 31)(336, "div", 18)(337, "div", 92)(338, "div", 93);
      \u0275\u0275element(339, "i", 102);
      \u0275\u0275elementStart(340, "h4", 95);
      \u0275\u0275text(341, "Incorrect Information");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(342, "p", 96);
      \u0275\u0275text(343, "We have detected suspicious activity on our platform. As a precautionary measure, we urge all users to refrain from logging in or providing any personal information until further notice.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(344, "button", 103);
      \u0275\u0275text(345, "Continue");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(346, "div", 104)(347, "div", 31)(348, "div", 105)(349, "div", 92)(350, "div", 93);
      \u0275\u0275element(351, "i", 106);
      \u0275\u0275elementStart(352, "h4", 95);
      \u0275\u0275text(353, "Oh snap!");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(354, "p", 96);
      \u0275\u0275text(355, "A critical security breach has been identified on our platform. Your personal information and sensitive data may be at risk.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(356, "button", 97);
      \u0275\u0275text(357, "Continue");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(358, "div", 39)(359, "button", 107);
      \u0275\u0275text(360, "Success Alert");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(361, "button", 108);
      \u0275\u0275text(362, "Info Alert");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(363, "button", 109);
      \u0275\u0275text(364, "Warning Alert");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(365, "button", 110);
      \u0275\u0275text(366, "Danger Alert");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(367, "div", 9)(368, "div", 10)(369, "div", 11)(370, "div", 12)(371, "h5", 13);
      \u0275\u0275text(372, "Colored Header Modals");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(373, "div", 14)(374, "p", 15);
      \u0275\u0275text(375, "A rendered modal with header having contexual background color.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(376, "div", 111)(377, "div", 17)(378, "div", 18)(379, "div", 112)(380, "h4", 113);
      \u0275\u0275text(381, "Modal Heading");
      \u0275\u0275elementEnd();
      \u0275\u0275element(382, "button", 114);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(383, "div", 22)(384, "h5", 48);
      \u0275\u0275text(385, "Primary Background");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(386, "p");
      \u0275\u0275text(387, "Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(388, "p", 23);
      \u0275\u0275text(389, "Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(390, "div", 24)(391, "button", 25);
      \u0275\u0275text(392, "Close");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(393, "button", 26);
      \u0275\u0275text(394, "Save changes");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(395, "div", 115)(396, "div", 17)(397, "div", 18)(398, "div", 116)(399, "h4", 117);
      \u0275\u0275text(400, "Modal Heading");
      \u0275\u0275elementEnd();
      \u0275\u0275element(401, "button", 114);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(402, "div", 22)(403, "h5", 48);
      \u0275\u0275text(404, "Success Background");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(405, "p");
      \u0275\u0275text(406, "Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(407, "p", 23);
      \u0275\u0275text(408, "Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(409, "div", 24)(410, "button", 25);
      \u0275\u0275text(411, "Close");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(412, "button", 118);
      \u0275\u0275text(413, "Save changes");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(414, "div", 119)(415, "div", 17)(416, "div", 18)(417, "div", 120)(418, "h4", 121);
      \u0275\u0275text(419, "Modal Heading");
      \u0275\u0275elementEnd();
      \u0275\u0275element(420, "button", 114);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(421, "div", 22)(422, "h5", 48);
      \u0275\u0275text(423, "Info Background");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(424, "p");
      \u0275\u0275text(425, "Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(426, "p", 23);
      \u0275\u0275text(427, "Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(428, "div", 24)(429, "button", 25);
      \u0275\u0275text(430, "Close");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(431, "button", 122);
      \u0275\u0275text(432, "Save changes");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(433, "div", 123)(434, "div", 17)(435, "div", 18)(436, "div", 124)(437, "h4", 125);
      \u0275\u0275text(438, "Modal Heading");
      \u0275\u0275elementEnd();
      \u0275\u0275element(439, "button", 114);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(440, "div", 22)(441, "h5", 48);
      \u0275\u0275text(442, "Warning Background");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(443, "p");
      \u0275\u0275text(444, "Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(445, "p", 23);
      \u0275\u0275text(446, "Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(447, "div", 24)(448, "button", 25);
      \u0275\u0275text(449, "Close");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(450, "button", 126);
      \u0275\u0275text(451, "Save changes");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(452, "div", 127)(453, "div", 17)(454, "div", 18)(455, "div", 128)(456, "h4", 129);
      \u0275\u0275text(457, "Modal Heading");
      \u0275\u0275elementEnd();
      \u0275\u0275element(458, "button", 114);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(459, "div", 22)(460, "h5", 48);
      \u0275\u0275text(461, "Danger Background");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(462, "p");
      \u0275\u0275text(463, "Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(464, "p", 23);
      \u0275\u0275text(465, "Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(466, "div", 24)(467, "button", 25);
      \u0275\u0275text(468, "Close");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(469, "button", 130);
      \u0275\u0275text(470, "Save changes");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(471, "div", 131)(472, "div", 17)(473, "div", 18)(474, "div", 132)(475, "h4", 133);
      \u0275\u0275text(476, "Modal Heading");
      \u0275\u0275elementEnd();
      \u0275\u0275element(477, "button", 114);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(478, "div", 22)(479, "h5", 48);
      \u0275\u0275text(480, "Dark Background");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(481, "p");
      \u0275\u0275text(482, "Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(483, "p", 23);
      \u0275\u0275text(484, "Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(485, "div", 24)(486, "button", 25);
      \u0275\u0275text(487, "Close");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(488, "button", 134);
      \u0275\u0275text(489, "Save changes");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(490, "div", 39)(491, "button", 135);
      \u0275\u0275text(492, "Primary Header");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(493, "button", 136);
      \u0275\u0275text(494, "Success Header");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(495, "button", 137);
      \u0275\u0275text(496, "Info Header");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(497, "button", 138);
      \u0275\u0275text(498, "Warning Header");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(499, "button", 139);
      \u0275\u0275text(500, "Danger Header");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(501, "button", 140);
      \u0275\u0275text(502, "Dark Header");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(503, "div", 10)(504, "div", 11)(505, "div", 12)(506, "h5", 13);
      \u0275\u0275text(507, "Filled Modals");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(508, "div", 14)(509, "p", 15);
      \u0275\u0275text(510, "Modal with header, body and footer having contexual background color.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(511, "div", 141)(512, "div", 17)(513, "div", 142)(514, "div", 19)(515, "h4", 143);
      \u0275\u0275text(516, "Primary Filled Modal");
      \u0275\u0275elementEnd();
      \u0275\u0275element(517, "button", 114);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(518, "div", 22)(519, "p");
      \u0275\u0275text(520, "Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(521, "p");
      \u0275\u0275text(522, "Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(523, "div", 24)(524, "button", 144);
      \u0275\u0275text(525, "Close");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(526, "button", 145);
      \u0275\u0275text(527, "Save changes");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(528, "div", 146)(529, "div", 17)(530, "div", 91)(531, "div", 19)(532, "h4", 147);
      \u0275\u0275text(533, "Success Filled Modal");
      \u0275\u0275elementEnd();
      \u0275\u0275element(534, "button", 114);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(535, "div", 22)(536, "p");
      \u0275\u0275text(537, "Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(538, "p");
      \u0275\u0275text(539, "Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(540, "div", 24)(541, "button", 144);
      \u0275\u0275text(542, "Close");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(543, "button", 145);
      \u0275\u0275text(544, "Save changes");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(545, "div", 148)(546, "div", 17)(547, "div", 149)(548, "div", 19)(549, "h4", 150);
      \u0275\u0275text(550, "Info Filled Modal");
      \u0275\u0275elementEnd();
      \u0275\u0275element(551, "button", 114);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(552, "div", 22)(553, "p");
      \u0275\u0275text(554, "Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(555, "p");
      \u0275\u0275text(556, "Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(557, "div", 24)(558, "button", 144);
      \u0275\u0275text(559, "Close");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(560, "button", 145);
      \u0275\u0275text(561, "Save changes");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(562, "div", 151)(563, "div", 17)(564, "div", 152)(565, "div", 19)(566, "h4", 153);
      \u0275\u0275text(567, "Warning Filled Modal");
      \u0275\u0275elementEnd();
      \u0275\u0275element(568, "button", 114);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(569, "div", 22)(570, "p");
      \u0275\u0275text(571, "Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(572, "p");
      \u0275\u0275text(573, "Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(574, "div", 24)(575, "button", 144);
      \u0275\u0275text(576, "Close");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(577, "button", 145);
      \u0275\u0275text(578, "Save changes");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(579, "div", 154)(580, "div", 17)(581, "div", 105)(582, "div", 19)(583, "h4", 155);
      \u0275\u0275text(584, "Danger Filled Modal");
      \u0275\u0275elementEnd();
      \u0275\u0275element(585, "button", 114);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(586, "div", 22)(587, "p");
      \u0275\u0275text(588, "Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(589, "p");
      \u0275\u0275text(590, "Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(591, "div", 24)(592, "button", 156);
      \u0275\u0275text(593, "Close");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(594, "button", 145);
      \u0275\u0275text(595, "Save changes");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(596, "div", 157)(597, "div", 17)(598, "div", 158)(599, "div", 19)(600, "h4", 159);
      \u0275\u0275text(601, "Dark Filled Modal");
      \u0275\u0275elementEnd();
      \u0275\u0275element(602, "button", 114);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(603, "div", 22)(604, "p");
      \u0275\u0275text(605, "Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(606, "p");
      \u0275\u0275text(607, "Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(608, "div", 24)(609, "button", 144);
      \u0275\u0275text(610, "Close");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(611, "button", 145);
      \u0275\u0275text(612, "Save changes");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(613, "div", 39)(614, "button", 160);
      \u0275\u0275text(615, "Primary Filled");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(616, "button", 161);
      \u0275\u0275text(617, "Success Filled");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(618, "button", 162);
      \u0275\u0275text(619, "Info Filled");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(620, "button", 163);
      \u0275\u0275text(621, "Warning Filled");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(622, "button", 164);
      \u0275\u0275text(623, "Danger Filled");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(624, "button", 165);
      \u0275\u0275text(625, "Dark Filled");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(626, "div", 9)(627, "div", 10)(628, "div", 11)(629, "div", 12)(630, "h5", 13);
      \u0275\u0275text(631, "Multiple Modal");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(632, "div", 14)(633, "p", 15);
      \u0275\u0275text(634, "Display a series of modals one by one to guide your users on multiple aspects or take step wise input.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(635, "div", 166)(636, "div", 17)(637, "div", 18)(638, "div", 19)(639, "h4", 167);
      \u0275\u0275text(640, "Modal Heading");
      \u0275\u0275elementEnd();
      \u0275\u0275element(641, "button", 21);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(642, "div", 22)(643, "h5", 48);
      \u0275\u0275text(644, "Text in a modal");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(645, "p", 23);
      \u0275\u0275text(646, "Duis mollis, est non commodo luctus, nisi erat porttitor ligula.");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(647, "div", 24)(648, "button", 168);
      \u0275\u0275text(649, "Next");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(650, "div", 169)(651, "div", 17)(652, "div", 18)(653, "div", 19)(654, "h4", 170);
      \u0275\u0275text(655, "Modal Heading");
      \u0275\u0275elementEnd();
      \u0275\u0275element(656, "button", 21);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(657, "div", 22)(658, "h5", 48);
      \u0275\u0275text(659, "Text in a modal");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(660, "p", 23);
      \u0275\u0275text(661, "Duis mollis, est non commodo luctus, nisi erat porttitor ligula.");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(662, "div", 24)(663, "button", 171);
      \u0275\u0275text(664, "Close");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(665, "div", 39)(666, "button", 172);
      \u0275\u0275text(667, "Multiple Modal");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(668, "div", 10)(669, "div", 11)(670, "div", 12)(671, "h5", 13);
      \u0275\u0275text(672, "Toggle Between Modals");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(673, "div", 14)(674, "p", 15);
      \u0275\u0275text(675, "Toggle between multiple modals with some clever placement of the ");
      \u0275\u0275elementStart(676, "code");
      \u0275\u0275text(677, "data-bs-target");
      \u0275\u0275elementEnd();
      \u0275\u0275text(678, " and ");
      \u0275\u0275elementStart(679, "code");
      \u0275\u0275text(680, "data-bs-toggle");
      \u0275\u0275elementEnd();
      \u0275\u0275text(681, " attributes.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(682, "div", 173)(683, "div", 53)(684, "div", 18)(685, "div", 19)(686, "h5", 174);
      \u0275\u0275text(687, "Modal 1");
      \u0275\u0275elementEnd();
      \u0275\u0275element(688, "button", 21);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(689, "div", 22);
      \u0275\u0275text(690, " Show a second modal and hide this one with the button below. ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(691, "div", 24)(692, "button", 175);
      \u0275\u0275text(693, "Open second modal");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(694, "div", 176)(695, "div", 53)(696, "div", 18)(697, "div", 19)(698, "h5", 177);
      \u0275\u0275text(699, "Modal 2");
      \u0275\u0275elementEnd();
      \u0275\u0275element(700, "button", 21);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(701, "div", 22);
      \u0275\u0275text(702, " Hide this modal and show the first with the button below. ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(703, "div", 24)(704, "button", 178);
      \u0275\u0275text(705, "Back to first");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(706, "a", 179);
      \u0275\u0275text(707, "Open First Modal");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(708, "div", 9)(709, "div", 180)(710, "div", 11)(711, "div", 12)(712, "h5", 13);
      \u0275\u0275text(713, "Fullscreen Modal");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(714, "div", 14)(715, "p", 15);
      \u0275\u0275text(716, "Another override is the option to pop up a modal that covers the user viewport, available via modifier classes that are placed on a ");
      \u0275\u0275elementStart(717, "code");
      \u0275\u0275text(718, ".modal-dialog");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(719, "div", 181)(720, "button", 182);
      \u0275\u0275text(721, " Fullscreen Modal ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(722, "button", 183);
      \u0275\u0275text(723, "Full Screen Below sm");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(724, "button", 184);
      \u0275\u0275text(725, "Full Screen Below md");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(726, "button", 185);
      \u0275\u0275text(727, "Full Screen Below lg");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(728, "button", 186);
      \u0275\u0275text(729, "Full Screen Below xl");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(730, "button", 187);
      \u0275\u0275text(731, "Full Screen Below xxl");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(732, "div", 188)(733, "div", 189)(734, "div", 18)(735, "div", 19)(736, "h5", 190);
      \u0275\u0275text(737, "Full Screen Modal");
      \u0275\u0275elementEnd();
      \u0275\u0275element(738, "button", 21);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(739, "div", 22);
      \u0275\u0275text(740, " ... ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(741, "div", 24)(742, "a", 191);
      \u0275\u0275text(743, "Close");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(744, "button", 26);
      \u0275\u0275text(745, "Save Changes");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(746, "div", 192)(747, "div", 193)(748, "div", 18)(749, "div", 19)(750, "h5", 194);
      \u0275\u0275text(751, "Full screen below sm");
      \u0275\u0275elementEnd();
      \u0275\u0275element(752, "button", 21);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(753, "div", 22);
      \u0275\u0275text(754, " ... ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(755, "div", 24)(756, "a", 191);
      \u0275\u0275text(757, "Close");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(758, "button", 26);
      \u0275\u0275text(759, "Save Changes");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(760, "div", 195)(761, "div", 196)(762, "div", 18)(763, "div", 19)(764, "h5", 197);
      \u0275\u0275text(765, "Full screen below md");
      \u0275\u0275elementEnd();
      \u0275\u0275element(766, "button", 21);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(767, "div", 22);
      \u0275\u0275text(768, " ... ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(769, "div", 24)(770, "a", 191);
      \u0275\u0275text(771, "Close");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(772, "button", 26);
      \u0275\u0275text(773, "Save Changes");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(774, "div", 198)(775, "div", 199)(776, "div", 18)(777, "div", 19)(778, "h5", 200);
      \u0275\u0275text(779, "Full screen below lg");
      \u0275\u0275elementEnd();
      \u0275\u0275element(780, "button", 21);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(781, "div", 22);
      \u0275\u0275text(782, " ... ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(783, "div", 24)(784, "a", 191);
      \u0275\u0275text(785, "Close");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(786, "button", 26);
      \u0275\u0275text(787, "Save Changes");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(788, "div", 201)(789, "div", 193)(790, "div", 18)(791, "div", 19)(792, "h5", 202);
      \u0275\u0275text(793, "Full screen below xl");
      \u0275\u0275elementEnd();
      \u0275\u0275element(794, "button", 21);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(795, "div", 22);
      \u0275\u0275text(796, " ... ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(797, "div", 24)(798, "a", 191);
      \u0275\u0275text(799, "Close");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(800, "button", 26);
      \u0275\u0275text(801, "Save Changes");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(802, "div", 203)(803, "div", 204)(804, "div", 18)(805, "div", 19)(806, "h5", 205);
      \u0275\u0275text(807, "Full screen below xxl");
      \u0275\u0275elementEnd();
      \u0275\u0275element(808, "button", 21);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(809, "div", 22);
      \u0275\u0275text(810, " ... ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(811, "div", 24)(812, "a", 191);
      \u0275\u0275text(813, "Close");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(814, "button", 26);
      \u0275\u0275text(815, "Save Changes");
      \u0275\u0275elementEnd()()()()()()()();
      \u0275\u0275elementStart(816, "div", 10)(817, "div", 11)(818, "div", 12)(819, "h5", 13);
      \u0275\u0275text(820, "Varying Modal Content");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(821, "div", 14)(822, "p", 15);
      \u0275\u0275text(823, "Have a bunch of buttons that all trigger the same modal with slightly different contents? Use ");
      \u0275\u0275elementStart(824, "code");
      \u0275\u0275text(825, "event.relatedTarget");
      \u0275\u0275elementEnd();
      \u0275\u0275text(826, " and ");
      \u0275\u0275elementStart(827, "a", 206);
      \u0275\u0275text(828, "HTML ");
      \u0275\u0275elementStart(829, "code");
      \u0275\u0275text(830, "data-bs-*");
      \u0275\u0275elementEnd();
      \u0275\u0275text(831, " attributes");
      \u0275\u0275elementEnd();
      \u0275\u0275text(832, " to vary the contents of the modal depending on which button was clicked. ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(833, "div", 181)(834, "button", 207);
      \u0275\u0275text(835, "Open modal for @mdo");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(836, "button", 208);
      \u0275\u0275text(837, "Open modal for @fat");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(838, "button", 209);
      \u0275\u0275text(839, "Open modal for @getbootstrap");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(840, "div", 210)(841, "div", 17)(842, "div", 18)(843, "div", 19)(844, "h5", 211);
      \u0275\u0275text(845, "New message");
      \u0275\u0275elementEnd();
      \u0275\u0275element(846, "button", 21);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(847, "div", 22)(848, "form")(849, "div", 65)(850, "label", 212);
      \u0275\u0275text(851, "Recipient:");
      \u0275\u0275elementEnd();
      \u0275\u0275element(852, "input", 213);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(853, "div", 65)(854, "label", 214);
      \u0275\u0275text(855, "Message:");
      \u0275\u0275elementEnd();
      \u0275\u0275element(856, "textarea", 215);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(857, "div", 24)(858, "button", 25);
      \u0275\u0275text(859, "Close");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(860, "button", 26);
      \u0275\u0275text(861, "Send message");
      \u0275\u0275elementEnd()()()()()()()()();
      \u0275\u0275elementStart(862, "div", 9)(863, "div", 10)(864, "div", 11)(865, "div", 12)(866, "h5", 13);
      \u0275\u0275text(867, "Static Backdrop");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(868, "div", 14)(869, "p", 15);
      \u0275\u0275text(870, "When backdrop is set to static, the modal will not close when clicking outside it. Click the button below to try it.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(871, "div", 39)(872, "button", 216);
      \u0275\u0275text(873, " Static Backdrop ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(874, "div", 217)(875, "div", 17)(876, "div", 18)(877, "div", 19)(878, "h5", 218);
      \u0275\u0275text(879, "Modal title");
      \u0275\u0275elementEnd();
      \u0275\u0275element(880, "button", 21);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(881, "div", 22)(882, "p", 219);
      \u0275\u0275text(883, "I will not close if you click outside me. Don't even try to press escape key.");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(884, "div", 24)(885, "button", 25);
      \u0275\u0275text(886, "Close");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(887, "button", 26);
      \u0275\u0275text(888, "Understood");
      \u0275\u0275elementEnd()()()()()()()();
      \u0275\u0275elementStart(889, "div", 10)(890, "div", 11)(891, "div", 12)(892, "h5", 13);
      \u0275\u0275text(893, "Tooltips and Popovers");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(894, "div", 14)(895, "p");
      \u0275\u0275text(896, "Tooltips and popovers can be placed within modals as needed. When modals are closed, any tooltips and popovers within are also automatically dismissed.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(897, "button", 220);
      \u0275\u0275text(898, " Launch demo modal ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(899, "div", 221)(900, "div", 17)(901, "div", 18)(902, "div", 19)(903, "h1", 222);
      \u0275\u0275text(904, "Modal title");
      \u0275\u0275elementEnd();
      \u0275\u0275element(905, "button", 21);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(906, "div", 22)(907, "h2", 223);
      \u0275\u0275text(908, "Popover in a modal");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(909, "p");
      \u0275\u0275text(910, "This ");
      \u0275\u0275elementStart(911, "button", 224);
      \u0275\u0275text(912, "button");
      \u0275\u0275elementEnd();
      \u0275\u0275text(913, " triggers a popover on click.");
      \u0275\u0275elementEnd();
      \u0275\u0275element(914, "hr");
      \u0275\u0275elementStart(915, "h2", 223);
      \u0275\u0275text(916, "Tooltips in a modal");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(917, "p")(918, "a", 225);
      \u0275\u0275text(919, "This link");
      \u0275\u0275elementEnd();
      \u0275\u0275text(920, " and ");
      \u0275\u0275elementStart(921, "a", 225);
      \u0275\u0275text(922, "that link");
      \u0275\u0275elementEnd();
      \u0275\u0275text(923, " have tooltips on hover.");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(924, "div", 24)(925, "button", 25);
      \u0275\u0275text(926, "Close");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(927, "button", 26);
      \u0275\u0275text(928, "Save changes");
      \u0275\u0275elementEnd()()()()()()()()();
      \u0275\u0275elementStart(929, "div", 9)(930, "div", 226)(931, "div", 11)(932, "div", 12)(933, "h5", 13);
      \u0275\u0275text(934, "Basic Close");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(935, "div", 14);
      \u0275\u0275element(936, "button", 227);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(937, "div", 226)(938, "div", 11)(939, "div", 12)(940, "h5", 13);
      \u0275\u0275text(941, "Disable State");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(942, "div", 14);
      \u0275\u0275element(943, "button", 228);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(944, "div", 226)(945, "div", 229)(946, "div", 12)(947, "h5", 13);
      \u0275\u0275text(948, "White Variant");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(949, "div", 230);
      \u0275\u0275element(950, "button", 231)(951, "button", 232);
      \u0275\u0275elementEnd()()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(240);
      \u0275\u0275property("routerLink", ctx.routes.index);
      \u0275\u0275advance(3);
      \u0275\u0275property("routerLink", ctx.routes.index);
      \u0275\u0275advance(31);
      \u0275\u0275property("routerLink", ctx.routes.index);
      \u0275\u0275advance(3);
      \u0275\u0275property("routerLink", ctx.routes.index);
    }
  }, dependencies: [CommonModule, RouterLink], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ModalsComponent, [{
    type: Component,
    args: [{ selector: "app-modals", imports: [CommonModule, RouterLink], template: `			<!-- Start Content -->
      <div class="">

        <!-- Page Header -->
        <div class="d-flex align-items-sm-center flex-sm-row flex-column gap-2 pb-3">
            <div class="flex-grow-1">
                <h4 class="fs-18 fw-semibold mb-0">Modals</h4>
            </div>

            <div class="text-end">
                <ol class="breadcrumb m-0 py-0">
                    <li class="breadcrumb-item"><a href="javascript: void(0);">Home</a></li>
                    
                    <li class="breadcrumb-item"><a href="javascript: void(0);">Base UI</a></li>
                    
                    <li class="breadcrumb-item active">Modals</li>
                </ol>
            </div>
</div>
<!-- End Page Header -->
        
<!-- start row -->
        <div class="row">
            <div class="col-xl-6">
                <div class="card">
                    <div class="card-header">
                        <h5 class="card-title">Bootstrap Modals</h5>
                    </div>
                    <div class="card-body">
                        <p class="text-muted">
                            A rendered modal with header, body, and set of actions in the footer.
                        </p>

                        <!-- Standard modal content -->
                        <div id="standard-modal" class="modal fade" tabindex="-1" role="dialog" aria-labelledby="standard-modalLabel" aria-hidden="true">
                            <div class="modal-dialog">
                                <div class="modal-content">
                                    <div class="modal-header">
                                        <h4 class="modal-title" id="standard-modalLabel">Modal Heading</h4>
                                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                    </div>
                                    <div class="modal-body">
                                        <h5>Text in a modal</h5>
                                        <p>Duis mollis, est non commodo luctus, nisi erat porttitor ligula.</p>
                                        <hr>
                                        <h5>Overflowing text to show scroll behavior</h5>
                                        <p>Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>
                                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.</p>
                                        <p class="mb-0">Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.</p>
                                    </div>
                                    <div class="modal-footer">
                                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                        <button type="button" class="btn btn-primary">Save changes</button>
                                    </div>
                                </div><!-- end modal content -->
                            </div><!-- end modal dialog -->
                        </div><!-- end modal -->

                        <!--  Modal content for the Large example -->
                        <div class="modal fade" id="bs-example-modal-lg" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
                            <div class="modal-dialog modal-lg">
                                <div class="modal-content">
                                    <div class="modal-header">
                                        <h4 class="modal-title" id="myLargeModalLabel">Large modal</h4>
                                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                    </div>
                                    <div class="modal-body">
                                        ...
                                    </div>
                                </div><!-- end modal content -->
                            </div><!-- end modal dialog -->
                        </div><!-- end modal -->

                        <div class="modal fade" id="bs-example-modal-sm" tabindex="-1" role="dialog" aria-labelledby="mySmallModalLabel" aria-hidden="true">
                            <div class="modal-dialog modal-sm">
                                <div class="modal-content">
                                    <div class="modal-header">
                                        <h4 class="modal-title" id="mySmallModalLabel">Small modal</h4>
                                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                    </div>
                                    <div class="modal-body">
                                        ...
                                    </div>
                                </div><!-- end modal content -->
                            </div><!-- end modal dialog -->
                        </div><!-- end modal -->

                        <!-- Full width modal content -->
                        <div id="full-width-modal" class="modal fade" tabindex="-1" role="dialog" aria-labelledby="fullWidthModalLabel" aria-hidden="true">
                            <div class="modal-dialog modal-full-width">
                                <div class="modal-content">
                                    <div class="modal-header">
                                        <h4 class="modal-title" id="fullWidthModalLabel">Modal Heading</h4>
                                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                    </div>
                                    <div class="modal-body">
                                        <h5>Text in a modal</h5>
                                        <p>Duis mollis, est non commodo luctus, nisi erat porttitor ligula.</p>
                                        <hr>
                                        <h5>Overflowing text to show scroll behavior</h5>
                                        <p>Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>
                                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.</p>
                                        <p class="mb-0">Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.</p>
                                    </div>
                                    <div class="modal-footer">
                                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                        <button type="button" class="btn btn-primary">Save changes</button>
                                    </div>
                                </div><!-- end modal content -->
                            </div><!-- end modal dialog -->
                        </div><!-- end modal -->

                        <!-- Long Content Scroll Modal -->
                        <div class="modal fade" id="scrollable-modal" tabindex="-1" role="dialog" aria-labelledby="scrollableModalTitle" aria-hidden="true">
                            <div class="modal-dialog modal-dialog-scrollable" role="document">
                                <div class="modal-content">
                                    <div class="modal-header">
                                        <h4 class="modal-title" id="scrollableModalTitle">Modal title</h4>
                                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                    </div>
                                    <div class="modal-body">
                                        <p>Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas
                                            eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>
                                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue
                                            laoreet rutrum faucibus dolor auctor.</p>
                                        <p>Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl
                                            consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.</p>
                                        <p>Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas
                                            eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>
                                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue
                                            laoreet rutrum faucibus dolor auctor.</p>
                                        <p>Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl
                                            consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.</p>
                                        <p>Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas
                                            eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>
                                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue
                                            laoreet rutrum faucibus dolor auctor.</p>
                                        <p>Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl
                                            consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.</p>
                                        <p>Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas
                                            eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>
                                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue
                                            laoreet rutrum faucibus dolor auctor.</p>
                                        <p>Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl
                                            consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.</p>
                                        <p>Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas
                                            eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>
                                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue
                                            laoreet rutrum faucibus dolor auctor.</p>
                                        <p>Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl
                                            consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.</p>
                                        <p>Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas
                                            eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>
                                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue
                                            laoreet rutrum faucibus dolor auctor.</p>
                                        <p class="mb-0">Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl
                                            consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.</p>
                                    </div>
                                    <div class="modal-footer">
                                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                        <button type="button" class="btn btn-primary">Save changes</button>
                                    </div>
                                </div><!-- end modal content -->
                            </div><!-- end modal dialog -->
                        </div><!-- end modal -->

                        <div class="d-flex flex-wrap gap-2">
                            <!-- Standard  modal -->
                            <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#standard-modal">Standard Modal</button>
                            <!-- Large modal -->
                            <button type="button" class="btn btn-info" data-bs-toggle="modal" data-bs-target="#bs-example-modal-lg">Large Modal</button>
                            <!-- Small modal -->
                            <button type="button" class="btn btn-success" data-bs-toggle="modal" data-bs-target="#bs-example-modal-sm">Small Modal</button>
                            <!-- Full width modal -->
                            <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#full-width-modal">Full Width Modal</button>
                            <!-- Scrollable modal -->
                            <button type="button" class="btn btn-secondary" data-bs-toggle="modal" data-bs-target="#scrollable-modal">Scrollable Modal</button>
                        </div>

                    </div> <!-- end card body -->
                </div> <!-- end card-->
            </div> <!-- end col -->

            <div class="col-xl-6">
                <div class="card">
                    <div class="card-header">
                        <h5 class="card-title">Modal Position</h5>
                    </div>
                    <div class="card-body">
                        <p class="text-muted">Specify the position for the modal. You can display modal at top, bottom, or center of page by specifying classes <code>modal-top</code>, <code>modal-bottom</code>and <code>modal-dialog-centered</code>respectively.</p>

                        <!-- Top modal content -->
                        <div id="top-modal" class="modal fade" tabindex="-1" role="dialog" aria-hidden="true">
                            <div class="modal-dialog modal-top">
                                <div class="modal-content">
                                    <div class="modal-header">
                                        <h4 class="modal-title" id="topModalLabel">Modal Heading</h4>
                                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                    </div>
                                    <div class="modal-body">
                                        <h5 class="mt-0">Text in a modal</h5>
                                        <p class="mb-0">Duis mollis, est non commodo luctus, nisi erat porttitor ligula.</p>
                                    </div>
                                    <div class="modal-footer">
                                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                        <button type="button" class="btn btn-primary">Save changes</button>
                                    </div>
                                </div><!-- end modal content -->
                            </div><!-- end modal dialog -->
                        </div><!-- end modal -->

                        <!-- Bottom modal content -->
                        <div id="bottom-modal" class="modal fade" tabindex="-1" role="dialog" aria-hidden="true">
                            <div class="modal-dialog modal-bottom">
                                <div class="modal-content">
                                    <div class="modal-header">
                                        <h4 class="modal-title" id="bottomModalLabel">Modal Heading</h4>
                                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                    </div>
                                    <div class="modal-body">
                                        <h5 class="mt-0">Text in a modal</h5>
                                        <p class="mb-0">Duis mollis, est non commodo luctus, nisi erat porttitor ligula.</p>
                                    </div>
                                    <div class="modal-footer">
                                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                        <button type="button" class="btn btn-primary">Save changes</button>
                                    </div>
                                </div><!-- end modal content -->
                            </div><!-- end modal dialog -->
                        </div><!-- end modal -->

                        <!-- Center modal content -->
                        <div class="modal fade" id="centermodal" tabindex="-1" role="dialog" aria-hidden="true">
                            <div class="modal-dialog modal-dialog-centered">
                                <div class="modal-content">
                                    <div class="modal-header">
                                        <h4 class="modal-title" id="myCenterModalLabel">Center Modal</h4>
                                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                    </div>
                                    <div class="modal-body">
                                        <h5 class="mt-0">Overflowing text to show scroll behavior</h5>
                                        <p>Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>
                                        <p class="mb-0">Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.</p>
                                    </div>
                                </div><!-- end modal content -->
                            </div><!-- end modal dialog -->
                        </div><!-- end modal -->

                        <div class="d-flex flex-wrap gap-2">
                            <!-- Top modal -->
                            <button type="button" class="btn btn-secondary" data-bs-toggle="modal" data-bs-target="#top-modal">Top Modal</button>
                            <!-- Bottom modal -->
                            <button type="button" class="btn btn-secondary" data-bs-toggle="modal" data-bs-target="#bottom-modal">Bottom Modal</button>
                            <!-- Center modal -->
                            <button type="button" class="btn btn-secondary" data-bs-toggle="modal" data-bs-target="#centermodal">Center Modal</button>
                        </div>

                    </div> <!-- end card body -->
                </div> <!-- end card-->
            </div> <!-- end col -->
        </div>
        <!-- end row -->

        <div class="row">

            <div class="col-xl-6">
                <div class="card">
                    <div class="card-header">
                        <h5 class="card-title">Modal with Pages</h5>
                    </div>
                    <div class="card-body">
                        <p class="text-muted">Examples of custom modals.</p>

                        <!-- Signup modal content -->
                        <div id="signup-modal" class="modal fade" tabindex="-1" role="dialog" aria-hidden="true">
                            <div class="modal-dialog">
                                <div class="modal-content">
                                    <div class="modal-body">
                                        <div class="auth-brand text-center mt-2 mb-3 position-relative top-0">
                                            <a [routerLink]="routes.index" class="logo-dark">
                                                <span><img src="assets/img/logo-white.svg" alt="dark logo" height="33"></span>
                                            </a>
                                            <a [routerLink]="routes.index" class="logo-light">
                                                <span><img src="assets/img/logo.svg" alt="logo" height="33"></span>
                                            </a>
                                        </div>
                                        <form class="ps-3 pe-3" action="#">
                                            <div class="mb-3">
                                                <label for="username" class="form-label">Name</label>
                                                <input class="form-control" type="email" id="username" required="" placeholder="Michael Zenaty">
                                            </div>
                                            <div class="mb-3">
                                                <label for="emailaddress" class="form-label">Email address</label>
                                                <input class="form-control" type="email" id="emailaddress" required="" placeholder="john&#64;deo.com">
                                            </div>
                                            <div class="mb-3">
                                                <label for="password" class="form-label">Password</label>
                                                <input class="form-control" type="password" required="" id="password" placeholder="Enter your password">
                                            </div>
                                            <div class="mb-3">
                                                <div class="form-check">
                                                    <input type="checkbox" class="form-check-input fs-15" id="customCheck1">
                                                    <label class="form-check-label" for="customCheck1">I accept <a href="javascript:void(0);">Terms and Conditions</a></label>
                                                </div>
                                            </div>
                                            <div class="mb-3 text-center">
                                                <button class="btn btn-primary" type="submit">Sign Up Free</button>
                                            </div>
                                        </form>

                                    </div>
                                </div><!-- end modal content -->
                            </div><!-- end modal dialog -->
                        </div><!-- end modal -->

                        <!-- SignIn modal content -->
                        <div id="login-modal" class="modal fade" tabindex="-1" role="dialog" aria-hidden="true">
                            <div class="modal-dialog">
                                <div class="modal-content">
                                    <div class="modal-body">
                                        <div class="auth-brand text-center mt-2 mb-3 position-relative top-0">
                                            <a [routerLink]="routes.index" class="logo-dark">
                                                <span><img src="assets/img/logo-white.svg" alt="dark logo" height="22"></span>
                                            </a>
                                            <a [routerLink]="routes.index" class="logo-light">
                                                <span><img src="assets/img/logo.svg" alt="logo" height="22"></span>
                                            </a>
                                        </div>
                                        <form action="#" class="ps-3 pe-3">
                                            <div class="mb-3">
                                                <label for="emailaddress1" class="form-label">Email address</label>
                                                <input class="form-control" type="email" id="emailaddress1" required="" placeholder="john&#64;deo.com">
                                            </div>
                                            <div class="mb-3">
                                                <label for="password1" class="form-label">Password</label>
                                                <input class="form-control" type="password" required="" id="password1" placeholder="Enter your password">
                                            </div>
                                            <div class="mb-3">
                                                <div class="form-check">
                                                    <input type="checkbox" class="form-check-input" id="RememberCheckBox">
                                                    <label class="form-check-label" for="RememberCheckBox">Remember me</label>
                                                </div>
                                            </div>
                                            <div class="mb-3 text-center">
                                                <button class="btn rounded-pill btn-primary" type="submit">Sign In</button>
                                            </div>
                                        </form>
                                    </div>
                                </div><!-- end modal content -->
                            </div><!-- end modal dialog -->
                        </div><!-- end modal -->

                        <div class="d-flex flex-wrap gap-2">
                            <!-- Sign Up modal -->
                            <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#signup-modal">Sign Up Modal</button>
                            <!-- Log In modal -->
                            <button type="button" class="btn btn-info" data-bs-toggle="modal" data-bs-target="#login-modal">Log In Modal</button>
                        </div>

                    </div> <!-- end card body -->
                </div> <!-- end card-->
            </div> <!-- end col -->
  
            <div class="col-xl-6">
                <div class="card">
                    <div class="card-header">
                        <h5 class="card-title">Modal based Alerts</h5>
                    </div>
                    <div class="card-body">
                        <p class="text-muted">Show different contexual alert messages using modal component</p>
        
                        <!-- Success Alert Modal -->
                        <div id="success-alert-modal" class="modal fade" tabindex="-1" role="dialog" aria-hidden="true">
                            <div class="modal-dialog modal-sm">
                                <div class="modal-content modal-filled bg-success">
                                    <div class="modal-body p-4">
                                        <div class="text-center">
                                            <i class="ti ti-check h1"></i>
                                            <h4 class="mt-2">Well Done!</h4>
                                            <p class="mt-3">Congratulations! You've achieved success! \u{1F389} Your hard work, dedication, and perseverance have paid off. Keep up the great work and continue to strive for excellence.</p>
                                            <button type="button" class="btn btn-secondary my-2" data-bs-dismiss="modal">Continue</button>
                                        </div>
                                    </div>
                                </div><!-- end modal content -->
                            </div><!-- end modal dialog -->
                        </div><!-- end modal -->

                        <!-- Info Alert Modal -->
                        <div id="info-alert-modal" class="modal fade" tabindex="-1" role="dialog" aria-hidden="true">
                            <div class="modal-dialog modal-sm">
                                <div class="modal-content">
                                    <div class="modal-body p-4">
                                        <div class="text-center">
                                            <i class="ti ti-info-square-rounded h1 text-info"></i>
                                            <h4 class="mt-2">Heads up!</h4>
                                            <p class="mt-3">Please be informed that our platform will undergo scheduled maintenance on 21 April from 10:30 PM to 11:45 PM.</p>
                                            <button type="button" class="btn btn-info my-2" data-bs-dismiss="modal">Continue</button>
                                        </div>
                                    </div>
                                </div><!-- end modal content -->
                            </div><!-- end modal dialog -->
                        </div><!-- end modal -->

                        <!-- Warning Alert Modal -->
                        <div id="warning-alert-modal" class="modal fade" tabindex="-1" role="dialog" aria-hidden="true">
                            <div class="modal-dialog modal-sm">
                                <div class="modal-content">
                                    <div class="modal-body p-4">
                                        <div class="text-center">
                                            <i class="ti ti-alert-circle h1 text-warning"></i>
                                            <h4 class="mt-2">Incorrect Information</h4>
                                            <p class="mt-3">We have detected suspicious activity on our platform. As a precautionary measure, we urge all users to refrain from logging in or providing any personal information until further notice.</p>
                                            <button type="button" class="btn btn-warning my-2" data-bs-dismiss="modal">Continue</button>
                                        </div>
                                    </div>
                                </div><!-- end modal content -->
                            </div><!-- end modal dialog -->
                        </div><!-- end modal -->

                        <!-- Danger Alert Modal -->
                        <div id="danger-alert-modal" class="modal fade" tabindex="-1" role="dialog" aria-hidden="true">
                            <div class="modal-dialog modal-sm">
                                <div class="modal-content modal-filled bg-danger">
                                    <div class="modal-body p-4">
                                        <div class="text-center">
                                            <i class="ti ti-circle-x h1"></i>
                                            <h4 class="mt-2">Oh snap!</h4>
                                            <p class="mt-3">A critical security breach has been identified on our platform. Your personal information and sensitive data may be at risk.</p>
                                            <button type="button" class="btn btn-secondary my-2" data-bs-dismiss="modal">Continue</button>
                                        </div>
                                    </div>
                                </div><!-- end modal content -->
                            </div><!-- end modal dialog -->
                        </div><!-- end modal -->

                        <div class="d-flex flex-wrap gap-2">
                            <!-- Success Alert modal -->
                            <button type="button" class="btn btn-success" data-bs-toggle="modal" data-bs-target="#success-alert-modal">Success Alert</button>
                            <!-- Info Alert modal -->
                            <button type="button" class="btn btn-info" data-bs-toggle="modal" data-bs-target="#info-alert-modal">Info Alert</button>
                            <!-- Warning Alert modal -->
                            <button type="button" class="btn btn-warning" data-bs-toggle="modal" data-bs-target="#warning-alert-modal">Warning Alert</button>
                            <!-- Danger Alert modal -->
                            <button type="button" class="btn btn-danger" data-bs-toggle="modal" data-bs-target="#danger-alert-modal">Danger Alert</button>
                        </div>

                    </div> <!-- end card body -->
                </div> <!-- end card-->
            </div> <!-- end col -->
        </div>
        <!-- end row -->

        <div class="row">
            <div class="col-xl-6">
                <div class="card">
                    <div class="card-header">
                        <h5 class="card-title">Colored Header Modals</h5>
                    </div>

                    <div class="card-body">
                        <p class="text-muted">A rendered modal with header having contexual background color.</p>

                        <!-- Primary Header Modal -->
                        <div id="primary-header-modal" class="modal fade" tabindex="-1" role="dialog" aria-labelledby="primary-header-modalLabel" aria-hidden="true">
                            <div class="modal-dialog">
                                <div class="modal-content">
                                    <div class="modal-header text-bg-primary border-0">
                                        <h4 class="modal-title" id="primary-header-modalLabel">Modal Heading</h4>
                                        <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close"></button>
                                    </div>
                                    <div class="modal-body">
                                        <h5 class="mt-0">Primary Background</h5>
                                        <p>Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>
                                        <p class="mb-0">Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.</p>
                                    </div>
                                    <div class="modal-footer">
                                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                        <button type="button" class="btn btn-primary">Save changes</button>
                                    </div>
                                </div><!-- end modal content -->
                            </div><!-- end modal dialog -->
                        </div><!-- end modal -->

                        <!-- Success Header Modal -->
                        <div id="success-header-modal" class="modal fade" tabindex="-1" role="dialog" aria-labelledby="success-header-modalLabel" aria-hidden="true">
                            <div class="modal-dialog">
                                <div class="modal-content">
                                    <div class="modal-header text-bg-success border-0">
                                        <h4 class="modal-title" id="success-header-modalLabel">Modal Heading</h4>
                                        <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close"></button>
                                    </div>
                                    <div class="modal-body">
                                        <h5 class="mt-0">Success Background</h5>
                                        <p>Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>
                                        <p class="mb-0">Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.</p>
                                    </div>
                                    <div class="modal-footer">
                                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                        <button type="button" class="btn btn-success">Save changes</button>
                                    </div>
                                </div><!-- end modal content -->
                            </div><!-- end modal dialog -->
                        </div><!-- end modal -->

                        <!-- Info Header Modal -->
                        <div id="info-header-modal" class="modal fade" tabindex="-1" role="dialog" aria-labelledby="info-header-modalLabel" aria-hidden="true">
                            <div class="modal-dialog">
                                <div class="modal-content">
                                    <div class="modal-header text-bg-info border-0">
                                        <h4 class="modal-title" id="info-header-modalLabel">Modal Heading</h4>
                                        <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close"></button>
                                    </div>
                                    <div class="modal-body">
                                        <h5 class="mt-0">Info Background</h5>
                                        <p>Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>
                                        <p class="mb-0">Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.</p>
                                    </div>
                                    <div class="modal-footer">
                                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                        <button type="button" class="btn btn-info">Save changes</button>
                                    </div>
                                </div><!-- end modal content -->
                            </div><!-- end modal dialog -->
                        </div><!-- end modal -->

                        <!-- Warning Header Modal -->
                        <div id="warning-header-modal" class="modal fade" tabindex="-1" role="dialog" aria-labelledby="warning-header-modalLabel" aria-hidden="true">
                            <div class="modal-dialog">
                                <div class="modal-content">
                                    <div class="modal-header text-bg-warning border-0">
                                        <h4 class="modal-title" id="warning-header-modalLabel">Modal Heading</h4>
                                        <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close"></button>
                                    </div>
                                    <div class="modal-body">
                                        <h5 class="mt-0">Warning Background</h5>
                                        <p>Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>
                                        <p class="mb-0">Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.</p>
                                    </div>
                                    <div class="modal-footer">
                                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                        <button type="button" class="btn btn-warning">Save changes</button>
                                    </div>
                                </div><!-- end modal content -->
                            </div><!-- end modal dialog -->
                        </div><!-- end modal -->

                        <!-- Danger Header Modal -->
                        <div id="danger-header-modal" class="modal fade" tabindex="-1" role="dialog" aria-labelledby="danger-header-modalLabel" aria-hidden="true">
                            <div class="modal-dialog">
                                <div class="modal-content">
                                    <div class="modal-header text-bg-danger border-0">
                                        <h4 class="modal-title" id="danger-header-modalLabel">Modal Heading</h4>
                                        <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close"></button>
                                    </div>
                                    <div class="modal-body">
                                        <h5 class="mt-0">Danger Background</h5>
                                        <p>Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>
                                        <p class="mb-0">Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.</p>
                                    </div>
                                    <div class="modal-footer">
                                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                        <button type="button" class="btn btn-danger">Save changes</button>
                                    </div>
                                </div><!-- end modal content -->
                            </div><!-- end modal dialog -->
                        </div><!-- end modal -->

                        <!-- Dark Header Modal -->
                        <div id="dark-header-modal" class="modal fade" tabindex="-1" role="dialog" aria-labelledby="dark-header-modalLabel" aria-hidden="true">
                            <div class="modal-dialog">
                                <div class="modal-content">
                                    <div class="modal-header text-bg-dark border-0">
                                        <h4 class="modal-title" id="dark-header-modalLabel">Modal Heading</h4>
                                        <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close"></button>
                                    </div>
                                    <div class="modal-body">
                                        <h5 class="mt-0">Dark Background</h5>
                                        <p>Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>
                                        <p class="mb-0">Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.</p>
                                    </div>
                                    <div class="modal-footer">
                                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                        <button type="button" class="btn btn-dark">Save changes</button>
                                    </div>
                                </div><!-- end modal content -->
                            </div><!-- end modal dialog -->
                        </div><!-- end modal -->

                        <div class="d-flex flex-wrap gap-2">
                            <!-- Primary header modal -->
                            <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#primary-header-modal">Primary Header</button>
                            <!-- Success header modal -->
                            <button type="button" class="btn btn-success" data-bs-toggle="modal" data-bs-target="#success-header-modal">Success Header</button>
                            <!-- Info header modal -->
                            <button type="button" class="btn btn-info" data-bs-toggle="modal" data-bs-target="#info-header-modal">Info Header</button>
                            <!-- Warning header modal -->
                            <button type="button" class="btn btn-warning" data-bs-toggle="modal" data-bs-target="#warning-header-modal">Warning Header</button>
                            <!-- Danger header modal -->
                            <button type="button" class="btn btn-danger" data-bs-toggle="modal" data-bs-target="#danger-header-modal">Danger Header</button>
                            <!-- Dark header modal -->
                            <button type="button" class="btn btn-dark" data-bs-toggle="modal" data-bs-target="#dark-header-modal">Dark Header</button>
                        </div>

                    </div> <!-- end card body -->
                </div> <!-- end card-->
            </div> <!-- end col -->

            <div class="col-xl-6">
                <div class="card">
                    <div class="card-header">
                        <h5 class="card-title">Filled Modals</h5>
                    </div>

                    <div class="card-body">
                        <p class="text-muted">Modal with header, body and footer having contexual background color.</p>

                        <!-- Primary Filled Modal -->
                        <div id="fill-primary-modal" class="modal fade" tabindex="-1" role="dialog" aria-labelledby="fill-primary-modalLabel" aria-hidden="true">
                            <div class="modal-dialog">
                                <div class="modal-content modal-filled bg-primary">
                                    <div class="modal-header">
                                        <h4 class="modal-title" id="fill-primary-modalLabel">Primary Filled Modal</h4>
                                        <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close"></button>
                                    </div>
                                    <div class="modal-body">
                                        <p>Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>
                                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.</p>
                                    </div>
                                    <div class="modal-footer">
                                        <button type="button" class="btn btn-danger" data-bs-dismiss="modal">Close</button>
                                        <button type="button" class="btn btn-secondary">Save changes</button>
                                    </div>
                                </div><!-- end modal content -->
                            </div><!-- end modal dialog -->
                        </div><!-- end modal -->

                        <!-- Success Filled Modal -->
                        <div id="fill-success-modal" class="modal fade" tabindex="-1" role="dialog" aria-labelledby="fill-success-modalLabel" aria-hidden="true">
                            <div class="modal-dialog">
                                <div class="modal-content modal-filled bg-success">
                                    <div class="modal-header">
                                        <h4 class="modal-title" id="fill-success-modalLabel">Success Filled Modal</h4>
                                        <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close"></button>
                                    </div>
                                    <div class="modal-body">
                                        <p>Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>
                                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.</p>
                                    </div>
                                    <div class="modal-footer">
                                        <button type="button" class="btn btn-danger" data-bs-dismiss="modal">Close</button>
                                        <button type="button" class="btn btn-secondary">Save changes</button>
                                    </div>
                                </div><!-- end modal content -->
                            </div><!-- end modal dialog -->
                        </div><!-- end modal -->

                        <!-- Info Filled Modal -->
                        <div id="fill-info-modal" class="modal fade" tabindex="-1" role="dialog" aria-labelledby="fill-info-modalLabel" aria-hidden="true">
                            <div class="modal-dialog">
                                <div class="modal-content modal-filled bg-info">
                                    <div class="modal-header">
                                        <h4 class="modal-title" id="fill-info-modalLabel">Info Filled Modal</h4>
                                        <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close"></button>
                                    </div>
                                    <div class="modal-body">
                                        <p>Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>
                                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.</p>
                                    </div>
                                    <div class="modal-footer">
                                        <button type="button" class="btn btn-danger" data-bs-dismiss="modal">Close</button>
                                        <button type="button" class="btn btn-secondary">Save changes</button>
                                    </div>
                                </div><!-- end modal content -->
                            </div><!-- end modal dialog -->
                        </div><!-- end modal -->

                        <!-- Warning Filled Modal -->
                        <div id="fill-warning-modal" class="modal fade" tabindex="-1" role="dialog" aria-labelledby="fill-warning-modalLabel" aria-hidden="true">
                            <div class="modal-dialog">
                                <div class="modal-content modal-filled bg-warning">
                                    <div class="modal-header">
                                        <h4 class="modal-title" id="fill-warning-modalLabel">Warning Filled Modal</h4>
                                        <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close"></button>
                                    </div>
                                    <div class="modal-body">
                                        <p>Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>
                                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.</p>
                                    </div>
                                    <div class="modal-footer">
                                        <button type="button" class="btn btn-danger" data-bs-dismiss="modal">Close</button>
                                        <button type="button" class="btn btn-secondary">Save changes</button>
                                    </div>
                                </div><!-- end modal content -->
                            </div><!-- end modal dialog -->
                        </div><!-- end modal -->

                        <!-- Danger Filled Modal -->
                        <div id="fill-danger-modal" class="modal fade" tabindex="-1" role="dialog" aria-labelledby="fill-danger-modalLabel" aria-hidden="true">
                            <div class="modal-dialog">
                                <div class="modal-content modal-filled bg-danger">
                                    <div class="modal-header">
                                        <h4 class="modal-title" id="fill-danger-modalLabel">Danger Filled Modal</h4>
                                        <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close"></button>
                                    </div>
                                    <div class="modal-body">
                                        <p>Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>
                                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.</p>
                                    </div>
                                    <div class="modal-footer">
                                        <button type="button" class="btn btn-info" data-bs-dismiss="modal">Close</button>
                                        <button type="button" class="btn btn-secondary">Save changes</button>
                                    </div>
                                </div><!-- end modal content -->
                            </div><!-- end modal dialog -->
                        </div><!-- end modal -->

                        <!-- Dark Filled Modal -->
                        <div id="fill-dark-modal" class="modal fade" tabindex="-1" role="dialog" aria-labelledby="fill-dark-modalLabel" aria-hidden="true">
                            <div class="modal-dialog">
                                <div class="modal-content modal-filled bg-dark">
                                    <div class="modal-header">
                                        <h4 class="modal-title" id="fill-dark-modalLabel">Dark Filled Modal</h4>
                                        <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close"></button>
                                    </div>
                                    <div class="modal-body">
                                        <p>Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>
                                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.</p>
                                    </div>
                                    <div class="modal-footer">
                                        <button type="button" class="btn btn-danger" data-bs-dismiss="modal">Close</button>
                                        <button type="button" class="btn btn-secondary">Save changes</button>
                                    </div>
                                </div><!-- end modal content -->
                            </div><!-- end modal dialog -->
                        </div><!-- end modal -->


                        <div class="d-flex flex-wrap gap-2">
                            <!-- Primary header modal -->
                            <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#fill-primary-modal">Primary Filled</button>
                            <!-- Success header modal -->
                            <button type="button" class="btn btn-success" data-bs-toggle="modal" data-bs-target="#fill-success-modal">Success Filled</button>
                            <!-- Info header modal -->
                            <button type="button" class="btn btn-info" data-bs-toggle="modal" data-bs-target="#fill-info-modal">Info Filled</button>
                            <!-- Warning header modal -->
                            <button type="button" class="btn btn-warning" data-bs-toggle="modal" data-bs-target="#fill-warning-modal">Warning Filled</button>
                            <!-- Danger header modal -->
                            <button type="button" class="btn btn-danger" data-bs-toggle="modal" data-bs-target="#fill-danger-modal">Danger Filled</button>
                            <!-- Dark header modal -->
                            <button type="button" class="btn btn-dark" data-bs-toggle="modal" data-bs-target="#fill-dark-modal">Dark Filled</button>
                        </div>

                    </div> <!-- end card body -->
                </div> <!-- end card-->
            </div> <!-- end col -->
        </div>
        <!-- end row -->

        <div class="row">
            <div class="col-xl-6">
                <div class="card">
                    <div class="card-header">
                        <h5 class="card-title">Multiple Modal</h5>
                    </div>

                    <div class="card-body">
                        <p class="text-muted">Display a series of modals one by one to guide your users on multiple aspects or take step wise input.</p>


                        <!-- Modal -->
                        <div id="multiple-one" class="modal fade" tabindex="-1" role="dialog" aria-labelledby="multiple-oneModalLabel" aria-hidden="true">
                            <div class="modal-dialog">
                                <div class="modal-content">
                                    <div class="modal-header">
                                        <h4 class="modal-title" id="multiple-oneModalLabel">Modal Heading</h4>
                                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                    </div>
                                    <div class="modal-body">
                                        <h5 class="mt-0">Text in a modal</h5>
                                        <p class="mb-0">Duis mollis, est non commodo luctus, nisi erat porttitor ligula.</p>
                                    </div>
                                    <div class="modal-footer">
                                        <button type="button" class="btn btn-primary" data-bs-target="#multiple-two" data-bs-toggle="modal" data-bs-dismiss="modal">Next</button>
                                    </div>
                                </div><!-- end modal content -->
                            </div><!-- end modal dialog -->
                        </div><!-- end modal -->

                        <!-- Modal -->
                        <div id="multiple-two" class="modal fade" tabindex="-1" role="dialog" aria-labelledby="multiple-twoModalLabel" aria-hidden="true">
                            <div class="modal-dialog">
                                <div class="modal-content">
                                    <div class="modal-header">
                                        <h4 class="modal-title" id="multiple-twoModalLabel">Modal Heading</h4>
                                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                    </div>
                                    <div class="modal-body">
                                        <h5 class="mt-0">Text in a modal</h5>
                                        <p class="mb-0">Duis mollis, est non commodo luctus, nisi erat porttitor ligula.</p>
                                    </div>
                                    <div class="modal-footer">
                                        <button type="button" class="btn btn-primary" data-bs-dismiss="modal">Close</button>
                                    </div>
                                </div><!-- end modal content -->
                            </div><!-- end modal dialog -->
                        </div><!-- end modal -->

                        <div class="d-flex flex-wrap gap-2">
                            <!-- Multiple modal -->
                            <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#multiple-one">Multiple Modal</button>
                        </div>

                    </div> <!-- end card body -->
                </div> <!-- end card-->
            </div> <!-- end col -->

            <div class="col-xl-6">
                <div class="card">
                    <div class="card-header">
                        <h5 class="card-title">Toggle Between Modals</h5>
                    </div>

                    <div class="card-body">
                        <p class="text-muted">Toggle between multiple modals with some clever placement of the <code>data-bs-target</code> and <code>data-bs-toggle</code> attributes.</p>

                        <!-- Modal -->
                        <div class="modal fade" id="exampleModalToggle" aria-hidden="true" aria-labelledby="exampleModalToggleLabel" tabindex="-1">
                            <div class="modal-dialog modal-dialog-centered">
                                <div class="modal-content">
                                    <div class="modal-header">
                                        <h5 class="modal-title" id="exampleModalToggleLabel">Modal 1</h5>
                                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                    </div>
                                    <div class="modal-body">
                                        Show a second modal and hide this one with the button below.
                                    </div>
                                    <div class="modal-footer">
                                        <button class="btn btn-primary" data-bs-target="#exampleModalToggle2" data-bs-toggle="modal" data-bs-dismiss="modal">Open second modal</button>
                                    </div>
                                </div><!-- end modal content -->
                            </div><!-- end modal dialog -->
                        </div><!-- end modal -->

                        <!-- Modal -->
                        <div class="modal fade" id="exampleModalToggle2" aria-hidden="true" aria-labelledby="exampleModalToggleLabel2" tabindex="-1">
                            <div class="modal-dialog modal-dialog-centered">
                                <div class="modal-content">
                                    <div class="modal-header">
                                        <h5 class="modal-title" id="exampleModalToggleLabel2">Modal 2</h5>
                                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                    </div>
                                    <div class="modal-body">
                                        Hide this modal and show the first with the button below.
                                    </div>
                                    <div class="modal-footer">
                                        <button class="btn btn-primary" data-bs-target="#exampleModalToggle" data-bs-toggle="modal" data-bs-dismiss="modal">Back to first</button>
                                    </div>
                                </div><!-- end modal content -->
                            </div><!-- end modal dialog -->
                        </div><!-- end modal -->

                        <a class="btn btn-secondary" data-bs-toggle="modal" href="#exampleModalToggle" role="button">Open First Modal</a>

                    </div> <!-- end card body -->
                </div> <!-- end card-->
            </div> <!-- end col -->
        </div>
        <!-- end row -->

        <div class="row">
            <div class="col-xl  -6">
                <div class="card">
                    <div class="card-header">
                        <h5 class="card-title">Fullscreen Modal</h5>
                    </div>

                    <div class="card-body">
                        <p class="text-muted">Another override is the option to pop up a modal that covers the user viewport, available via modifier classes that are placed on a <code>.modal-dialog</code></p>

                        <div class="hstack gap-2 flex-wrap">
                            <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#fullscreeexampleModal">
                                Fullscreen Modal
                            </button>
                            <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModalFullscreenSm">Full Screen Below sm</button>
                            <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModalFullscreenMd">Full Screen Below md</button>
                            <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModalFullscreenLg">Full Screen Below lg</button>
                            <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModalFullscreenXl">Full Screen Below xl</button>
                            <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModalFullscreenXxl">Full Screen Below xxl</button>
                        </div>

                        <div class="modal fade" id="fullscreeexampleModal" tabindex="-1" aria-labelledby="fullscreeexampleModalLabel" aria-hidden="true">
                            <div class="modal-dialog modal-fullscreen">
                                <div class="modal-content">
                                    <div class="modal-header">
                                        <h5 class="modal-title" id="fullscreeexampleModalLabel">Full Screen Modal</h5>
                                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                    </div>
                                    <div class="modal-body">
                                        ...
                                    </div>
                                    <div class="modal-footer">
                                        <a href="javascript:void(0);" class="btn btn-secondary" data-bs-dismiss="modal">Close</a>
                                        <button type="button" class="btn btn-primary">Save Changes</button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <!-- Modal -->
                        <div class="modal fade" id="exampleModalFullscreenSm" tabindex="-1" aria-labelledby="exampleModalFullscreenSmLabel" aria-hidden="true">
                            <div class="modal-dialog modal-fullscreen-sm-down">
                                <div class="modal-content">
                                    <div class="modal-header">
                                        <h5 class="modal-title" id="exampleModalFullscreenSmLabel">Full screen below sm</h5>
                                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                    </div>
                                    <div class="modal-body">
                                        ...
                                    </div>
                                    <div class="modal-footer">
                                        <a href="javascript:void(0);" class="btn btn-secondary" data-bs-dismiss="modal">Close</a>
                                        <button type="button" class="btn btn-primary">Save Changes</button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <!-- Modal -->
                        <div class="modal fade" id="exampleModalFullscreenMd" tabindex="-1" aria-labelledby="exampleModalFullscreenMdLabel" aria-hidden="true">
                            <div class="modal-dialog modal-fullscreen-md-down">
                                <div class="modal-content">
                                    <div class="modal-header">
                                        <h5 class="modal-title" id="exampleModalFullscreenMdLabel">Full screen below md</h5>
                                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                    </div>
                                    <div class="modal-body">
                                        ...
                                    </div>
                                    <div class="modal-footer">
                                        <a href="javascript:void(0);" class="btn btn-secondary" data-bs-dismiss="modal">Close</a>
                                        <button type="button" class="btn btn-primary">Save Changes</button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <!-- Modal -->
                        <div class="modal fade" id="exampleModalFullscreenLg" tabindex="-1" aria-labelledby="exampleModalFullscreenLgLabel" aria-hidden="true">
                            <div class="modal-dialog modal-fullscreen-lg-down">
                                <div class="modal-content">
                                    <div class="modal-header">
                                        <h5 class="modal-title" id="exampleModalFullscreenLgLabel">Full screen below lg</h5>
                                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                    </div>
                                    <div class="modal-body">
                                        ...
                                    </div>
                                    <div class="modal-footer">
                                        <a href="javascript:void(0);" class="btn btn-secondary" data-bs-dismiss="modal">Close</a>
                                        <button type="button" class="btn btn-primary">Save Changes</button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <!-- Modal -->
                        <div class="modal fade" id="exampleModalFullscreenXl" tabindex="-1" aria-labelledby="exampleModalFullscreenXlLabel" aria-hidden="true">
                            <div class="modal-dialog modal-fullscreen-sm-down">
                                <div class="modal-content">
                                    <div class="modal-header">
                                        <h5 class="modal-title" id="exampleModalFullscreenXlLabel">Full screen below xl</h5>
                                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                    </div>
                                    <div class="modal-body">
                                        ...
                                    </div>
                                    <div class="modal-footer">
                                        <a href="javascript:void(0);" class="btn btn-secondary" data-bs-dismiss="modal">Close</a>
                                        <button type="button" class="btn btn-primary">Save Changes</button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <!-- Modal -->
                        <div class="modal fade" id="exampleModalFullscreenXxl" tabindex="-1" aria-labelledby="exampleModalFullscreenXxlLabel" aria-hidden="true">
                            <div class="modal-dialog modal-fullscreen-xxl-down">
                                <div class="modal-content">
                                    <div class="modal-header">
                                        <h5 class="modal-title" id="exampleModalFullscreenXxlLabel">Full screen below xxl</h5>
                                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                    </div>
                                    <div class="modal-body">
                                        ...
                                    </div>
                                    <div class="modal-footer">
                                        <a href="javascript:void(0);" class="btn btn-secondary" data-bs-dismiss="modal">Close</a>
                                        <button type="button" class="btn btn-primary">Save Changes</button>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div> <!-- end card body -->
                </div> <!-- end card-->
            </div> <!-- end col -->
  
  
            <div class="col-xl-6">
                <div class="card">
                    <div class="card-header">
                        <h5 class="card-title">Varying Modal Content</h5>
                    </div>

                    <div class="card-body">
                        <p class="text-muted">Have a bunch of buttons that all trigger the same modal with slightly different contents? Use
                            <code>event.relatedTarget</code> and <a href="https://developer.mozilla.org/en-US/docs/Learn/HTML/Howto/Use_data_attributes" target="_blank">HTML <code>data-bs-*</code>
                                attributes</a> to vary the contents of the modal depending on which button was clicked.
                        </p>
                        <div class="hstack gap-2 flex-wrap">
                            <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="&#64;mdo">Open modal for &#64;mdo</button>
                            <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="&#64;fat">Open modal for &#64;fat</button>
                            <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="&#64;getbootstrap">Open modal for &#64;getbootstrap</button>
                        </div>

                        <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                            <div class="modal-dialog">
                                <div class="modal-content">
                                    <div class="modal-header">
                                        <h5 class="modal-title" id="exampleModalLabel">New message</h5>
                                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                    </div>
                                    <div class="modal-body">
                                        <form>
                                            <div class="mb-3">
                                                <label for="recipient-name" class="col-form-label">Recipient:</label>
                                                <input type="text" class="form-control" id="recipient-name">
                                            </div>
                                            <div class="mb-3">
                                                <label for="message-text" class="col-form-label">Message:</label>
                                                <textarea class="form-control" id="message-text"></textarea>
                                            </div>
                                        </form>
                                    </div>
                                    <div class="modal-footer">
                                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                        <button type="button" class="btn btn-primary">Send message</button>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div> <!-- end card body -->
                </div> <!-- end card-->

            </div> <!-- end col -->

        </div>
        <!-- end row -->


        <div class="row">

            <div class="col-xl-6">
                <div class="card">
                    <div class="card-header">
                        <h5 class="card-title">Static Backdrop</h5>
                    </div>

                    <div class="card-body">
                        <p class="text-muted">When backdrop is set to static, the modal will not close when clicking outside it. Click the button below to try it.</p>

                        <div class="d-flex flex-wrap gap-2">
                            <!-- Static Backdrop modal -->
                            <button type="button" class="btn btn-info" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                                Static Backdrop
                            </button>
                        </div> <!-- btn list -->

                        <!-- Modal -->
                        <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                            <div class="modal-dialog">
                                <div class="modal-content">
                                    <div class="modal-header">
                                        <h5 class="modal-title" id="staticBackdropLabel">Modal title</h5>
                                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                    </div> <!-- end modal header -->
                                    <div class="modal-body">
                                        <p class="m-0">I will not close if you click outside me. Don't even try to press escape key.</p>
                                    </div>
                                    <div class="modal-footer">
                                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                        <button type="button" class="btn btn-primary">Understood</button>
                                    </div> <!-- end modal footer -->
                                </div> <!-- end modal content-->
                            </div> <!-- end modal dialog-->
                        </div> <!-- end modal-->
                    </div> <!-- end card body -->
                </div> <!-- end card-->
            </div> <!-- end col -->



            <div class="col-xl-6">
                <div class="card">
                    <div class="card-header">
                        <h5 class="card-title">Tooltips and Popovers</h5>
                    </div>
      
                    <div class="card-body">
        <p>Tooltips and popovers can be placed within modals as needed. When modals are closed, any tooltips and popovers within are also automatically dismissed.</p>
                        <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModalPopovers">
                            Launch demo modal
                        </button>
        <div class="modal fade" id="exampleModalPopovers" tabindex="-1" aria-labelledby="exampleModalPopoversLabel" aria-hidden="true">
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <h1 class="modal-title " id="exampleModalPopove	rsLabel">Modal title</h1>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div class="modal-body">
                <h2 class="fs-12">Popover in a modal</h2>
                <p>This
                  <button class="btn btn-secondary" data-bs-toggle="popover" title="Popover title" data-bs-content="Popover body content is set in this attribute.">button</button> triggers a popover on click.</p>
                <hr>
                <h2 class="fs-12">Tooltips in a modal</h2>
                <p><a href="javascript:void(0);" class="text-primary" data-bs-toggle="tooltip" title="Tooltip">This link</a> and <a href="javascript:void(0);" class="text-primary" data-bs-toggle="tooltip" title="Tooltip">that link</a> have tooltips on hover.</p>
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                <button type="button" class="btn btn-primary">Save changes</button>
              </div>
            </div>
          </div>
        </div>
                    </div>
                </div>
            </div> <!-- end col -->
        </div>
        <!-- end row -->

<div class="row">
  <div class="col-xl-4">
    <div class="card">
      <div class="card-header">
        <h5 class="card-title">Basic Close</h5>
      </div>
      <div class="card-body">
        <button type="button" class="btn-close" aria-label="Close"></button>
      </div>
    </div>
  </div>
  <div class="col-xl-4">
    <div class="card ">
      <div class="card-header">
        <h5 class="card-title">Disable State</h5>
      </div>
      <div class="card-body">
        <button type="button" class="btn-close" disabled="" aria-label="Close"></button>
      </div>
    </div>
  </div>
  <div class="col-xl-4">
    <div class="card overflow-hidden">
      <div class="card-header">
        <h5 class="card-title">White Variant</h5>
      </div>
      <div class="card-body bg-black">
        <button type="button" class="btn-close btn-close-white" aria-label="Close"></button>
        <button type="button" class="btn-close btn-close-white" disabled="" aria-label="Close"></button>
      </div>
    </div>
  </div>
</div>

    </div>
<!-- End Content -->` }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ModalsComponent, { className: "ModalsComponent", filePath: "src/app/features/ui-interface/base-ui/modals/modals.component.ts", lineNumber: 12 });
})();
export {
  ModalsComponent
};
//# sourceMappingURL=chunk-SVBRP2HZ.js.map

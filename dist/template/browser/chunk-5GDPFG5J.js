import {
  require_intlTelInput
} from "./chunk-SOAGTYBX.js";
import {
  routes
} from "./chunk-U2VXEBUE.js";
import "./chunk-SCUCSJ4X.js";
import "./chunk-PCRWA3NK.js";
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
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵlistener,
  ɵɵproperty,
  ɵɵpureFunction1,
  ɵɵpureFunction4,
  ɵɵtext
} from "./chunk-U4CEU3KS.js";
import {
  __toESM
} from "./chunk-TXDUYLVM.js";

// src/app/modules/setting/presentation/pages/general-settings/security-settings/security-settings.component.ts
var import_intl_tel_input = __toESM(require_intlTelInput());
var _c0 = (a0, a1, a2, a3) => ({ "poor-active": a0, "avg-active": a1, "strong-active": a2, "heavy-active": a3 });
var _c1 = (a0) => ({ "active": a0 });
var SecuritySettingsComponent = class _SecuritySettingsComponent {
  routes = routes;
  showPassword = [false];
  togglePassword(index) {
    this.showPassword[index] = !this.showPassword[index];
  }
  passwordValue = "";
  strengthLevel = "";
  passwordInfoMessage = null;
  passwordInfoColor = "";
  poorRegExp = /[a-z]/;
  weakRegExp = /(?=.*?[0-9])/;
  strongRegExp = /(?=.*?[#?!@$%^&*-])/;
  whitespaceRegExp = /^$|\s+/;
  checkPasswordStrength(event) {
    const inputElement = event.target;
    const password = inputElement.value;
    this.passwordValue = password;
    const passwordLength = password.length;
    const hasPoor = this.poorRegExp.test(password);
    const hasWeak = this.weakRegExp.test(password);
    const hasStrong = this.strongRegExp.test(password);
    const hasWhitespace = this.whitespaceRegExp.test(password);
    if (password === "") {
      this.resetStrength();
      return;
    }
    if (hasWhitespace) {
      this.passwordInfoMessage = "Whitespaces are not allowed";
      this.passwordInfoColor = "red";
      this.strengthLevel = "";
      return;
    }
    if (passwordLength < 8) {
      this.strengthLevel = "poor";
      this.passwordInfoMessage = "Weak. Must contain at least 8 characters.";
      this.passwordInfoColor = "red";
    } else if (hasPoor || hasWeak || hasStrong) {
      this.strengthLevel = "weak";
      this.passwordInfoMessage = "Average. Must contain at least 1 letter or number.";
      this.passwordInfoColor = "#FFB54A";
    }
    if (passwordLength >= 8 && hasPoor && (hasWeak || hasStrong)) {
      this.strengthLevel = "strong";
      this.passwordInfoMessage = "Almost strong. Must contain a special symbol.";
      this.passwordInfoColor = "#1D9CFD";
    }
    if (passwordLength >= 8 && hasPoor && hasWeak && hasStrong) {
      this.strengthLevel = "heavy";
      this.passwordInfoMessage = "Awesome! You have a secure password.";
      this.passwordInfoColor = "#159F46";
    }
  }
  resetStrength() {
    this.strengthLevel = "";
    this.passwordInfoMessage = null;
  }
  ngAfterViewInit() {
    const input = document.querySelector("#phone");
    const input2 = document.querySelector("#phone2");
    const input3 = document.querySelector("#phone3");
    (0, import_intl_tel_input.default)(input, {
      initialCountry: "us",
      preferredCountries: ["us", "gb", "in"],
      utilsScript: "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.19/js/utils.js"
    });
    (0, import_intl_tel_input.default)(input2, {
      initialCountry: "us",
      preferredCountries: ["us", "gb", "in"],
      utilsScript: "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.19/js/utils.js"
    });
    (0, import_intl_tel_input.default)(input3, {
      initialCountry: "us",
      preferredCountries: ["us", "gb", "in"],
      utilsScript: "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.19/js/utils.js"
    });
    input.addEventListener("input", () => {
      input.value = input.value.replace(/[^0-9+()-\s]/g, "");
    });
    input2.addEventListener("input", () => {
      input2.value = input2.value.replace(/[^0-9+()-\s]/g, "");
    });
    input3.addEventListener("input", () => {
      input3.value = input3.value.replace(/[^0-9+()-\s]/g, "");
    });
  }
  static \u0275fac = function SecuritySettingsComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _SecuritySettingsComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SecuritySettingsComponent, selectors: [["app-security-settings"]], decls: 415, vars: 28, consts: [[1, "mb-3"], [1, "pb-3", "border-bottom", "mb-3"], [1, "mb-0"], [1, "d-flex", "align-items-center", "justify-content-between", "flex-wrap", "row-gap-3", "border-bottom", "mb-3", "pb-3"], [1, "d-flex", "align-items-center"], [1, "avatar", "avatar-lg", "border", "bg-light", "me-2"], [1, "isax", "isax-lock-circle", "text-dark", "fs-24"], [1, "fs-16", "fw-semibold", "mb-1"], [1, "fs-14"], [1, "badge", "badge-md", "badge-soft-danger", "me-3"], ["href", "javascript:void(0);", "data-bs-toggle", "modal", "data-bs-target", "#change_password"], [1, "badge", "badge-soft-light", "text-dark", "d-inline-flex", "align-items-center"], [1, "isax", "isax-edit"], [1, "isax", "isax-security-safe", "text-dark", "fs-24"], [1, "badge", "badge-md", "badge-soft-danger"], [1, "d-flex", "align-items-center", "form-switch", "ps-3"], ["type", "checkbox", "checked", "", 1, "form-check-input", "m-0", "me-2"], ["href", "javascript:void(0);"], ["data-bs-toggle", "modal", "data-bs-target", "#two-factor", 1, "badge", "badge-soft-light", "text-dark", "d-inline-flex", "align-items-center"], [1, "isax", "isax-setting-2"], ["src", "assets/img/icons/google-icon.svg", "alt", "icon", 1, "w-75"], [1, "badge", "badge-outline-light", "text-dark", "border", "d-flex", "align-items-center"], [1, "fa", "fa-circle", "text-success", "fs-8", "me-1"], [1, "isax", "isax-call", "text-dark", "fs-24"], [1, "badge", "badge-md", "badge-soft-success", "me-3"], [1, "isax", "isax-tick-circle", "ms-1"], ["href", "javascript:void(0);", "data-bs-toggle", "modal", "data-bs-target", "#phone_verification", 1, "me-3"], [1, "isax", "isax-trash"], [1, "isax", "isax-sms-tracking", "text-dark", "fs-24"], ["href", "javascript:void(0);", "data-bs-toggle", "modal", "data-bs-target", "#email_verification", 1, "me-3"], [1, "isax", "isax-device-message", "text-dark", "fs-24"], ["href", "javascript:void(0);", "data-bs-toggle", "modal", "data-bs-target", "#view_device"], [1, "isax", "isax-eye"], [1, "isax", "isax-close-circle", "text-dark", "fs-24"], [1, "isax", "isax-slash"], [1, "d-flex", "align-items-center", "justify-content-between", "flex-wrap", "row-gap-3"], [1, "isax", "isax-info-circle", "text-dark", "fs-24"], ["href", "javascript:void(0);", "data-bs-toggle", "modal", "data-bs-target", "#delete_modal"], ["id", "change_password", 1, "modal", "fade"], [1, "modal-dialog", "modal-dialog-centered"], [1, "modal-content"], [1, "modal-header"], [1, "modal-title"], ["type", "button", "data-bs-dismiss", "modal", "aria-label", "Close", 1, "btn-close", "btn-close-modal", "custom-btn-close"], [1, "fa-solid", "fa-x"], [1, "modal-body"], [1, "form-label"], [1, "text-danger", "ms-1"], [1, "pass-group", "input-group"], [1, "input-group-text", "border-end-0"], [1, "isax", "isax-lock"], [1, "isax", "toggle-password", 3, "click", "ngClass"], ["type", "password", "placeholder", "****************", 1, "pass-input", "form-control", "border-start-0", "ps-0", 3, "type"], [1, "pass-group", "input-group", "mb-3"], ["type", "password", "placeholder", "****************", 1, "pass-input", "form-control", "border-start-0", "ps-0", 3, "input", "type"], ["id", "passwordStrength", 1, "strength-meter", "password-strength", "d-flex", 3, "ngClass"], ["id", "poor", 3, "ngClass"], ["id", "weak", 3, "ngClass"], ["id", "strong", 3, "ngClass"], ["id", "heavy", 3, "ngClass"], ["id", "passwordInfo", 1, "mb-2"], [1, "text-gray-5"], [1, "modal-footer", "d-flex", "align-items-center", "justify-content-between", "gap-1"], ["type", "button", "data-bs-dismiss", "modal", 1, "btn", "btn-outline-white"], ["type", "submit", "data-bs-dismiss", "modal", 1, "btn", "btn-primary"], ["id", "phone_verification", 1, "modal", "fade"], ["type", "text", "id", "phone", 1, "form-control"], ["type", "text", "id", "phone2", 1, "form-control"], [1, "mt-2", "d-inline-flex", "align-items-center"], [1, "isax", "isax-info-circle", "me-1"], ["id", "email_verification", 1, "modal", "fade"], ["type", "email", 1, "form-control"], ["id", "two-factor", 1, "modal", "fade"], [1, "modal-dialog", "modal-dialog-centered", "modal-md"], ["type", "text", "id", "phone3", 1, "form-control"], [1, "fs-13", "mb-0"], ["id", "view_device", 1, "modal", "fade"], [1, "modal-dialog", "modal-dialog-centered", "modal-lg"], [1, "table-responsive", "border", "border-bottom-0"], [1, "table"], [1, "thead-light"], [1, "text-dark"], [1, "isax", "isax-logout"], ["id", "delete_modal", 1, "modal", "fade"], [1, "text-dark", "fw-semibold", "mb-0"], [1, "fs-13"], [1, "form-check", "mb-3", "d-flex", "align-items-center"], ["type", "radio", "name", "Radio-2", "id", "Radio-sm-1", 1, "form-check-input"], [1, "ms-2"], ["for", "Radio-sm-1", 1, "form-check-label", "fs-13"], ["type", "radio", "name", "Radio-2", "id", "Radio-sm-2", 1, "form-check-input"], ["for", "Radio-sm-2", 1, "form-check-label", "fs-13"], ["type", "radio", "name", "Radio-2", "id", "Radio-sm-3", 1, "form-check-input"], ["for", "Radio-sm-3", 1, "form-check-label", "fs-13"], ["type", "radio", "name", "Radio-2", "id", "Radio-sm-4", 1, "form-check-input"], ["for", "Radio-sm-4", 1, "form-check-label", "fs-13"], [1, "form-check", "mb-3"], ["type", "radio", "name", "Radio-2", "id", "Radio-sm-5", "checked", "", 1, "form-check-input"], ["for", "Radio-sm-5", 1, "form-check-label", "text-dark", "fw-semibold"], ["rows", "3", 1, "form-control"], ["type", "submit", 1, "btn", "btn-primary"]], template: function SecuritySettingsComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "h6", 2);
      \u0275\u0275text(3, "Security");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(4, "div", 3)(5, "div", 4)(6, "span", 5);
      \u0275\u0275element(7, "i", 6);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(8, "div")(9, "h5", 7);
      \u0275\u0275text(10, "Password");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(11, "p", 8);
      \u0275\u0275text(12, "Set a unique password to secure the account");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(13, "div", 4)(14, "span", 9);
      \u0275\u0275text(15, "Last Changed, Jan 16, 2025");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(16, "a", 10)(17, "span", 11);
      \u0275\u0275element(18, "i", 12);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(19, "div", 3)(20, "div", 4)(21, "span", 5);
      \u0275\u0275element(22, "i", 13);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(23, "div")(24, "h5", 7);
      \u0275\u0275text(25, "Two Factor Authentication");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(26, "p", 8);
      \u0275\u0275text(27, "Use your mobile phone to receive security PIN.");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(28, "div", 4)(29, "span", 14);
      \u0275\u0275text(30, "Enabled, Jan 16, 2025");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(31, "label", 15);
      \u0275\u0275element(32, "input", 16);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(33, "a", 17)(34, "span", 18);
      \u0275\u0275element(35, "i", 19);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(36, "div", 3)(37, "div", 4)(38, "span", 5);
      \u0275\u0275element(39, "img", 20);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(40, "div")(41, "h5", 7);
      \u0275\u0275text(42, "Google Authentication");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(43, "p", 8);
      \u0275\u0275text(44, "Connect to Google");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(45, "div", 4)(46, "span", 21);
      \u0275\u0275element(47, "i", 22);
      \u0275\u0275text(48, "Connected");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(49, "label", 15);
      \u0275\u0275element(50, "input", 16);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(51, "div", 3)(52, "div", 4)(53, "span", 5);
      \u0275\u0275element(54, "i", 23);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(55, "div")(56, "h5", 7);
      \u0275\u0275text(57, "Phone Number Verification");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(58, "p", 8);
      \u0275\u0275text(59, "Phone Number associated with the account");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(60, "div", 4)(61, "span", 24);
      \u0275\u0275text(62, "Verified");
      \u0275\u0275element(63, "i", 25);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(64, "a", 26)(65, "span", 11);
      \u0275\u0275element(66, "i", 12);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(67, "a", 17)(68, "span", 11);
      \u0275\u0275element(69, "i", 27);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(70, "div", 3)(71, "div", 4)(72, "span", 5);
      \u0275\u0275element(73, "i", 28);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(74, "div")(75, "h5", 7);
      \u0275\u0275text(76, "Email Verification");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(77, "p", 8);
      \u0275\u0275text(78, "Email Address associated with the account");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(79, "div", 4)(80, "span", 24);
      \u0275\u0275text(81, "Verified");
      \u0275\u0275element(82, "i", 25);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(83, "a", 29)(84, "span", 11);
      \u0275\u0275element(85, "i", 12);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(86, "a", 17)(87, "span", 11);
      \u0275\u0275element(88, "i", 27);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(89, "div", 3)(90, "div", 4)(91, "span", 5);
      \u0275\u0275element(92, "i", 30);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(93, "div")(94, "h5", 7);
      \u0275\u0275text(95, "Browsers & Devices");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(96, "p", 8);
      \u0275\u0275text(97, "The browsers & devices associated with the account");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(98, "a", 31)(99, "span", 11);
      \u0275\u0275element(100, "i", 32);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(101, "div", 3)(102, "div", 4)(103, "span", 5);
      \u0275\u0275element(104, "i", 33);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(105, "div")(106, "h5", 7);
      \u0275\u0275text(107, "Deactivate Account");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(108, "p", 8);
      \u0275\u0275text(109, "This will shutdown your account. Your account will be reactive when you sign in again");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(110, "a", 17)(111, "span", 11);
      \u0275\u0275element(112, "i", 34);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(113, "div", 35)(114, "div", 4)(115, "span", 5);
      \u0275\u0275element(116, "i", 36);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(117, "div")(118, "h5", 7);
      \u0275\u0275text(119, "Delete Account");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(120, "p", 8);
      \u0275\u0275text(121, "Your account will be permanently deleted");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(122, "a", 37)(123, "span", 11);
      \u0275\u0275element(124, "i", 27);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(125, "div", 38)(126, "div", 39)(127, "div", 40)(128, "div", 41)(129, "h4", 42);
      \u0275\u0275text(130, "Change Password");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(131, "button", 43);
      \u0275\u0275element(132, "i", 44);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(133, "form")(134, "div", 45)(135, "div", 0)(136, "label", 46);
      \u0275\u0275text(137, "Current Password");
      \u0275\u0275elementStart(138, "span", 47);
      \u0275\u0275text(139, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(140, "div", 48)(141, "span", 49);
      \u0275\u0275element(142, "i", 50);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(143, "span", 51);
      \u0275\u0275listener("click", function SecuritySettingsComponent_Template_span_click_143_listener() {
        return ctx.togglePassword(0);
      });
      \u0275\u0275elementEnd();
      \u0275\u0275element(144, "input", 52);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(145, "div", 0)(146, "label", 46);
      \u0275\u0275text(147, "New Password");
      \u0275\u0275elementStart(148, "span", 47);
      \u0275\u0275text(149, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(150, "div", 53)(151, "span", 49);
      \u0275\u0275element(152, "i", 50);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(153, "span", 51);
      \u0275\u0275listener("click", function SecuritySettingsComponent_Template_span_click_153_listener() {
        return ctx.togglePassword(1);
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(154, "input", 54);
      \u0275\u0275listener("input", function SecuritySettingsComponent_Template_input_input_154_listener($event) {
        return ctx.checkPasswordStrength($event);
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(155, "div", 55);
      \u0275\u0275element(156, "span", 56)(157, "span", 57)(158, "span", 58)(159, "span", 59);
      \u0275\u0275elementEnd();
      \u0275\u0275element(160, "div", 60);
      \u0275\u0275elementStart(161, "p", 61);
      \u0275\u0275text(162, "Use 8 or more characters with a mix of letters, numbers & symbols.");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(163, "div")(164, "label", 46);
      \u0275\u0275text(165, "Confirm Password");
      \u0275\u0275elementStart(166, "span", 47);
      \u0275\u0275text(167, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(168, "div", 48)(169, "span", 49);
      \u0275\u0275element(170, "i", 50);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(171, "span", 51);
      \u0275\u0275listener("click", function SecuritySettingsComponent_Template_span_click_171_listener() {
        return ctx.togglePassword(2);
      });
      \u0275\u0275elementEnd();
      \u0275\u0275element(172, "input", 52);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(173, "div", 62)(174, "button", 63);
      \u0275\u0275text(175, "Cancel");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(176, "button", 64);
      \u0275\u0275text(177, "Save Changes");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(178, "div", 65)(179, "div", 39)(180, "div", 40)(181, "div", 41)(182, "h4", 42);
      \u0275\u0275text(183, "Change Phone Number");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(184, "button", 43);
      \u0275\u0275element(185, "i", 44);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(186, "form")(187, "div", 45)(188, "div", 0)(189, "label", 46);
      \u0275\u0275text(190, "Current Phone Number");
      \u0275\u0275elementStart(191, "span", 47);
      \u0275\u0275text(192, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(193, "input", 66);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(194, "div", 0)(195, "label", 46);
      \u0275\u0275text(196, "New Phone Number");
      \u0275\u0275elementStart(197, "span", 47);
      \u0275\u0275text(198, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(199, "input", 67);
      \u0275\u0275elementStart(200, "p", 68);
      \u0275\u0275element(201, "i", 69);
      \u0275\u0275text(202, "New phone number only updated once you verified ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(203, "div")(204, "label", 46);
      \u0275\u0275text(205, "Current Password");
      \u0275\u0275elementStart(206, "span", 47);
      \u0275\u0275text(207, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(208, "div", 48)(209, "span", 49);
      \u0275\u0275element(210, "i", 50);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(211, "span", 51);
      \u0275\u0275listener("click", function SecuritySettingsComponent_Template_span_click_211_listener() {
        return ctx.togglePassword(3);
      });
      \u0275\u0275elementEnd();
      \u0275\u0275element(212, "input", 52);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(213, "div", 62)(214, "button", 63);
      \u0275\u0275text(215, "Cancel");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(216, "button", 64);
      \u0275\u0275text(217, "Save Changes");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(218, "div", 70)(219, "div", 39)(220, "div", 40)(221, "div", 41)(222, "h4", 42);
      \u0275\u0275text(223, "Change Email Address");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(224, "button", 43);
      \u0275\u0275element(225, "i", 44);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(226, "form")(227, "div", 45)(228, "div", 0)(229, "label", 46);
      \u0275\u0275text(230, "Current Email Address");
      \u0275\u0275elementStart(231, "span", 47);
      \u0275\u0275text(232, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(233, "input", 71);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(234, "div", 0)(235, "label", 46);
      \u0275\u0275text(236, "New Email Address");
      \u0275\u0275elementStart(237, "span", 47);
      \u0275\u0275text(238, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(239, "input", 71);
      \u0275\u0275elementStart(240, "p", 68);
      \u0275\u0275element(241, "i", 69);
      \u0275\u0275text(242, "New email address only updated once you verified ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(243, "div")(244, "label", 46);
      \u0275\u0275text(245, "Current Password");
      \u0275\u0275elementStart(246, "span", 47);
      \u0275\u0275text(247, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(248, "div", 48)(249, "span", 49);
      \u0275\u0275element(250, "i", 50);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(251, "span", 51);
      \u0275\u0275listener("click", function SecuritySettingsComponent_Template_span_click_251_listener() {
        return ctx.togglePassword(4);
      });
      \u0275\u0275elementEnd();
      \u0275\u0275element(252, "input", 52);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(253, "div", 62)(254, "button", 63);
      \u0275\u0275text(255, "Cancel");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(256, "button", 64);
      \u0275\u0275text(257, "Save Changes");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(258, "div", 72)(259, "div", 73)(260, "div", 40)(261, "div", 41)(262, "h4", 42);
      \u0275\u0275text(263, "SMS Two Factor Authentication");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(264, "button", 43);
      \u0275\u0275element(265, "i", 44);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(266, "form")(267, "div", 45)(268, "div", 0)(269, "label", 46);
      \u0275\u0275text(270, "Phone Number");
      \u0275\u0275elementStart(271, "span", 47);
      \u0275\u0275text(272, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(273, "input", 74);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(274, "p", 75);
      \u0275\u0275text(275, "By providing your phone number, you agree to receive text messages from Figma to enable two-factor authentication when you log in. ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(276, "div", 62)(277, "button", 63);
      \u0275\u0275text(278, "Cancel");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(279, "button", 64);
      \u0275\u0275text(280, "Verify");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(281, "div", 76)(282, "div", 77)(283, "div", 40)(284, "div", 41)(285, "h4", 42);
      \u0275\u0275text(286, "Browsers & Devices");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(287, "button", 43);
      \u0275\u0275element(288, "i", 44);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(289, "div", 45)(290, "div", 78)(291, "table", 79)(292, "thead", 80)(293, "tr")(294, "th");
      \u0275\u0275text(295, "Device");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(296, "th");
      \u0275\u0275text(297, "Date");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(298, "th");
      \u0275\u0275text(299, "IP Address");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(300, "th");
      \u0275\u0275text(301, "Location");
      \u0275\u0275elementEnd();
      \u0275\u0275element(302, "th");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(303, "tbody")(304, "tr")(305, "td", 81);
      \u0275\u0275text(306, "Chrome - Windows");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(307, "td");
      \u0275\u0275text(308, "24 Jan 2025, 10:00 AM");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(309, "td");
      \u0275\u0275text(310, "232.222.12.72");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(311, "td");
      \u0275\u0275text(312, "Newyork / USA");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(313, "td")(314, "a", 17)(315, "span", 11);
      \u0275\u0275element(316, "i", 82);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(317, "tr")(318, "td", 81);
      \u0275\u0275text(319, "Safari Macos");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(320, "td");
      \u0275\u0275text(321, "19 Dec 2024, 09:30 AM");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(322, "td");
      \u0275\u0275text(323, "224.111.12.75");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(324, "td");
      \u0275\u0275text(325, "Newyork / USA");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(326, "td")(327, "a", 17)(328, "span", 11);
      \u0275\u0275element(329, "i", 82);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(330, "tr")(331, "td", 81);
      \u0275\u0275text(332, "Firefox Windows");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(333, "td");
      \u0275\u0275text(334, "11 Dec 2024, 05:20 PM");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(335, "td");
      \u0275\u0275text(336, "111.222.13.28");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(337, "td");
      \u0275\u0275text(338, "Newyork / USA");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(339, "td")(340, "a", 17)(341, "span", 11);
      \u0275\u0275element(342, "i", 82);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(343, "tr")(344, "td", 81);
      \u0275\u0275text(345, "Safari Macos");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(346, "td");
      \u0275\u0275text(347, "29 Nov 2024, 04:45 PM");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(348, "td");
      \u0275\u0275text(349, "333.555.10.54");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(350, "td");
      \u0275\u0275text(351, "Newyork / USA");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(352, "td")(353, "a", 17)(354, "span", 11);
      \u0275\u0275element(355, "i", 82);
      \u0275\u0275elementEnd()()()()()()()()()()();
      \u0275\u0275elementStart(356, "div", 83)(357, "div", 73)(358, "div", 40)(359, "div", 41)(360, "h4", 42);
      \u0275\u0275text(361, "Delete Account");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(362, "button", 43);
      \u0275\u0275element(363, "i", 44);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(364, "form")(365, "div", 45)(366, "div", 0)(367, "p", 84);
      \u0275\u0275text(368, "Why Are You Deleting Your Account?");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(369, "p", 85);
      \u0275\u0275text(370, "We're sorry to see you go! To help us improve, please let us know your reason for deleting your account");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(371, "div")(372, "div", 86);
      \u0275\u0275element(373, "input", 87);
      \u0275\u0275elementStart(374, "div", 88)(375, "p", 84);
      \u0275\u0275text(376, "No longer using the service");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(377, "label", 89);
      \u0275\u0275text(378, " I no longer need this service and won\u2019t be using it in the future. ");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(379, "div", 86);
      \u0275\u0275element(380, "input", 90);
      \u0275\u0275elementStart(381, "div", 88)(382, "p", 84);
      \u0275\u0275text(383, "Privacy concerns");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(384, "label", 91);
      \u0275\u0275text(385, " I am concerned about how my data is handled and want to remove ");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(386, "div", 86);
      \u0275\u0275element(387, "input", 92);
      \u0275\u0275elementStart(388, "div", 88)(389, "p", 84);
      \u0275\u0275text(390, "Too many notifications/emails");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(391, "label", 93);
      \u0275\u0275text(392, " I\u2019m overwhelmed by the volume of notifications or emails ");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(393, "div", 86);
      \u0275\u0275element(394, "input", 94);
      \u0275\u0275elementStart(395, "div", 88)(396, "p", 84);
      \u0275\u0275text(397, "Poor user experience");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(398, "label", 95);
      \u0275\u0275text(399, " I\u2019ve had difficulty using the platform, and it didn\u2019t meet my expectations ");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(400, "div", 96);
      \u0275\u0275element(401, "input", 97);
      \u0275\u0275elementStart(402, "label", 98);
      \u0275\u0275text(403, " Other (Please specify) ");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(404, "div")(405, "label", 46);
      \u0275\u0275text(406, "Reason");
      \u0275\u0275elementStart(407, "span", 47);
      \u0275\u0275text(408, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(409, "textarea", 99);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(410, "div", 62)(411, "button", 63);
      \u0275\u0275text(412, "Cancel");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(413, "button", 100);
      \u0275\u0275text(414, "Confirm & Delete");
      \u0275\u0275elementEnd()()()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(143);
      \u0275\u0275property("ngClass", ctx.showPassword[0] ? "isax-eye" : "isax-eye-slash");
      \u0275\u0275advance();
      \u0275\u0275property("type", ctx.showPassword[0] ? "text" : "password");
      \u0275\u0275advance(9);
      \u0275\u0275property("ngClass", ctx.showPassword[1] ? "isax-eye" : "isax-eye-slash");
      \u0275\u0275advance();
      \u0275\u0275property("type", ctx.showPassword[1] ? "text" : "password");
      \u0275\u0275advance();
      \u0275\u0275property("ngClass", \u0275\u0275pureFunction4(15, _c0, ctx.strengthLevel === "poor", ctx.strengthLevel === "weak", ctx.strengthLevel === "strong", ctx.strengthLevel === "heavy"));
      \u0275\u0275advance();
      \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(20, _c1, ctx.strengthLevel === "poor" || ctx.strengthLevel === "weak" || ctx.strengthLevel === "strong" || ctx.strengthLevel === "heavy"));
      \u0275\u0275advance();
      \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(22, _c1, ctx.strengthLevel === "weak" || ctx.strengthLevel === "strong" || ctx.strengthLevel === "heavy"));
      \u0275\u0275advance();
      \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(24, _c1, ctx.strengthLevel === "strong" || ctx.strengthLevel === "heavy"));
      \u0275\u0275advance();
      \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(26, _c1, ctx.strengthLevel === "heavy"));
      \u0275\u0275advance(12);
      \u0275\u0275property("ngClass", ctx.showPassword[2] ? "isax-eye" : "isax-eye-slash");
      \u0275\u0275advance();
      \u0275\u0275property("type", ctx.showPassword[2] ? "text" : "password");
      \u0275\u0275advance(39);
      \u0275\u0275property("ngClass", ctx.showPassword[3] ? "isax-eye" : "isax-eye-slash");
      \u0275\u0275advance();
      \u0275\u0275property("type", ctx.showPassword[3] ? "text" : "password");
      \u0275\u0275advance(39);
      \u0275\u0275property("ngClass", ctx.showPassword[4] ? "isax-eye" : "isax-eye-slash");
      \u0275\u0275advance();
      \u0275\u0275property("type", ctx.showPassword[4] ? "text" : "password");
    }
  }, dependencies: [CommonModule, NgClass], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SecuritySettingsComponent, [{
    type: Component,
    args: [{ selector: "app-security-settings", imports: [CommonModule], template: `        <div class="mb-3">
            <div class="pb-3 border-bottom mb-3">
                <h6 class="mb-0">Security</h6>
            </div>
            <div class="d-flex align-items-center justify-content-between flex-wrap row-gap-3 border-bottom mb-3 pb-3">
                <div class="d-flex align-items-center">
                    <span class="avatar avatar-lg border bg-light me-2">
                        <i class="isax isax-lock-circle text-dark fs-24"></i>
                    </span>
                    <div>
                        <h5 class="fs-16 fw-semibold mb-1">Password</h5>
                        <p class="fs-14">Set a unique password to secure the account</p>
                    </div>
                </div>
                <div class="d-flex align-items-center">
                    <span class="badge badge-md badge-soft-danger me-3">Last Changed, Jan 16, 2025</span>                                            
                    <a href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#change_password"><span class="badge badge-soft-light text-dark d-inline-flex align-items-center"><i class="isax isax-edit"></i></span></a>
                </div>
            </div>
            <div class="d-flex align-items-center justify-content-between flex-wrap row-gap-3 border-bottom mb-3 pb-3">
                <div class="d-flex align-items-center">
                    <span class="avatar avatar-lg border bg-light me-2">
                        <i class="isax isax-security-safe text-dark fs-24"></i>
                    </span>
                    <div>
                        <h5 class="fs-16 fw-semibold mb-1">Two Factor Authentication</h5>
                        <p class="fs-14">Use your mobile phone to receive security PIN.</p>
                    </div>
                </div>
                <div class="d-flex align-items-center">
                    <span class="badge badge-md badge-soft-danger">Enabled, Jan 16, 2025</span>
                    <label class="d-flex align-items-center form-switch ps-3">
                        <input class="form-check-input m-0 me-2" type="checkbox" checked>
                    </label>
                    <a href="javascript:void(0);"><span class="badge badge-soft-light text-dark d-inline-flex align-items-center" data-bs-toggle="modal" data-bs-target="#two-factor"><i class="isax isax-setting-2"></i></span></a>
                </div>
            </div>
            <div class="d-flex align-items-center justify-content-between flex-wrap row-gap-3 border-bottom mb-3 pb-3">										
                <div class="d-flex align-items-center">
                    <span class="avatar avatar-lg border bg-light me-2">
                        <img src="assets/img/icons/google-icon.svg" class="w-75" alt="icon">
                    </span>
                    <div>
                        <h5 class="fs-16 fw-semibold mb-1">Google Authentication</h5>
                        <p class="fs-14">Connect to Google</p>
                    </div>
                </div>
                <div class="d-flex align-items-center">
                    <span class="badge badge-outline-light text-dark border d-flex align-items-center"><i class="fa fa-circle text-success fs-8 me-1"></i>Connected</span>
                    <label class="d-flex align-items-center form-switch ps-3">
                        <input class="form-check-input m-0 me-2" type="checkbox" checked>
                    </label>
                </div>
            </div>
            <div class="d-flex align-items-center justify-content-between flex-wrap row-gap-3 border-bottom mb-3 pb-3">
                <div class="d-flex align-items-center">
                    <span class="avatar avatar-lg border bg-light me-2">
                        <i class="isax isax-call text-dark fs-24"></i>
                    </span>
                    <div>
                        <h5 class="fs-16 fw-semibold mb-1">Phone Number Verification</h5>
                        <p class="fs-14">Phone Number associated with the account</p>
                    </div>
                </div>
                <div class="d-flex align-items-center">
                    <span class="badge badge-md badge-soft-success me-3">Verified<i class="isax isax-tick-circle ms-1"></i></span>
                    <a href="javascript:void(0);" class="me-3" data-bs-toggle="modal" data-bs-target="#phone_verification"><span class="badge badge-soft-light text-dark d-inline-flex align-items-center"><i class="isax isax-edit"></i></span></a>
                    <a href="javascript:void(0);"><span class="badge badge-soft-light text-dark d-inline-flex align-items-center"><i class="isax isax-trash"></i></span></a>
                </div>
            </div>
            <div class="d-flex align-items-center justify-content-between flex-wrap row-gap-3 border-bottom mb-3 pb-3">
                <div class="d-flex align-items-center">
                    <span class="avatar avatar-lg border bg-light me-2">
                        <i class="isax isax-sms-tracking text-dark fs-24"></i>
                    </span>
                    <div>
                        <h5 class="fs-16 fw-semibold mb-1">Email Verification</h5>
                        <p class="fs-14">Email Address associated with the account</p>
                    </div>
                </div>
                <div class="d-flex align-items-center">
                    <span class="badge badge-md badge-soft-success me-3">Verified<i class="isax isax-tick-circle ms-1"></i></span>
                    <a href="javascript:void(0);" class="me-3" data-bs-toggle="modal" data-bs-target="#email_verification"><span class="badge badge-soft-light text-dark d-inline-flex align-items-center"><i class="isax isax-edit"></i></span></a>
                    <a href="javascript:void(0);"><span class="badge badge-soft-light text-dark d-inline-flex align-items-center"><i class="isax isax-trash"></i></span></a>
                </div>
            </div>
            <div class="d-flex align-items-center justify-content-between flex-wrap row-gap-3 border-bottom mb-3 pb-3">
                <div class="d-flex align-items-center">
                    <span class="avatar avatar-lg border bg-light me-2">
                        <i class="isax isax-device-message text-dark fs-24"></i>
                    </span>
                    <div>
                        <h5 class="fs-16 fw-semibold mb-1">Browsers & Devices</h5>
                        <p class="fs-14">The browsers & devices associated with the account</p>
                    </div>
                </div>
                <a href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#view_device"><span class="badge badge-soft-light text-dark d-inline-flex align-items-center"><i class="isax isax-eye"></i></span></a>
            </div>
            <div class="d-flex align-items-center justify-content-between flex-wrap row-gap-3 border-bottom mb-3 pb-3">
                <div class="d-flex align-items-center">
                    <span class="avatar avatar-lg border bg-light me-2">
                        <i class="isax isax-close-circle text-dark fs-24"></i>
                    </span>
                    <div>
                        <h5 class="fs-16 fw-semibold mb-1">Deactivate Account</h5>
                        <p class="fs-14">This will shutdown your account. Your account will be reactive when you sign in again</p>
                    </div>
                </div>
                <a href="javascript:void(0);"><span class="badge badge-soft-light text-dark d-inline-flex align-items-center"><i class="isax isax-slash"></i></span></a>
            </div>
            <div class="d-flex align-items-center justify-content-between flex-wrap row-gap-3">
                <div class="d-flex align-items-center">
                    <span class="avatar avatar-lg border bg-light me-2">
                        <i class="isax isax-info-circle text-dark fs-24"></i>
                    </span>
                    <div>
                        <h5 class="fs-16 fw-semibold mb-1">Delete Account</h5>
                        <p class="fs-14">Your account will be permanently deleted</p>
                    </div>
                </div>
                <a href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#delete_modal"><span class="badge badge-soft-light text-dark d-inline-flex align-items-center"><i class="isax isax-trash"></i></span></a>
            </div>
        </div>


        <!-- Start Change Password Modal  -->
		<div id="change_password" class="modal fade">
			<div class="modal-dialog modal-dialog-centered">
				<div class="modal-content">
					<!-- Start modal header -->
					<div class="modal-header">
						<h4 class="modal-title">Change Password</h4>
						<button type="button" class="btn-close btn-close-modal custom-btn-close" data-bs-dismiss="modal" aria-label="Close"><i class="fa-solid fa-x"></i></button>
					</div>
					<!-- End modal header -->
					<form >
						<div class="modal-body">
							<div class="mb-3">
								<label class="form-label">Current Password<span class="text-danger ms-1">*</span></label>
								<div class="pass-group input-group">
									<span class="input-group-text border-end-0">
										<i class="isax isax-lock"></i>
									</span>
									<span class="isax toggle-password " (click)="togglePassword(0)" [ngClass]="showPassword[0]?'isax-eye':'isax-eye-slash'"></span>
									<input type="password" [type]="showPassword[0]?'text':'password'" class="pass-input form-control border-start-0 ps-0" placeholder="****************">
								</div>
							</div>
							<div class="mb-3">
								<label class="form-label">New Password<span class="text-danger ms-1">*</span></label>
								<div class="pass-group input-group mb-3">
									<span class="input-group-text border-end-0">
										<i class="isax isax-lock"></i>
									</span>
									<span class="isax toggle-password " (click)="togglePassword(1)" [ngClass]="showPassword[1]?'isax-eye':'isax-eye-slash'"></span>
									<input type="password" [type]="showPassword[1]?'text':'password'" class="pass-input form-control border-start-0 ps-0" placeholder="****************" (input)="checkPasswordStrength($event)">
								</div>
                                <div id="passwordStrength" class="strength-meter password-strength d-flex" [ngClass]="{'poor-active':strengthLevel === 'poor','avg-active':strengthLevel === 'weak','strong-active':strengthLevel === 'strong','heavy-active':strengthLevel === 'heavy'}" >
                                    <span id="poor" [ngClass]="{'active': strengthLevel === 'poor'||strengthLevel === 'weak'||strengthLevel === 'strong'||strengthLevel === 'heavy'}"></span>
                                    <span id="weak" [ngClass]="{'active': strengthLevel === 'weak'||strengthLevel === 'strong'||strengthLevel === 'heavy'}"></span>
                                    <span id="strong" [ngClass]="{'active': strengthLevel === 'strong'||strengthLevel === 'heavy'}"></span>
                                    <span id="heavy" [ngClass]="{'active': strengthLevel === 'heavy'}"></span>
                                  </div>
								
								<div id="passwordInfo" class="mb-2"></div>
								<p class="text-gray-5">Use 8 or more characters with a mix of letters, numbers & symbols.</p>
							</div>
							<div>
								<label class="form-label">Confirm Password<span class="text-danger ms-1">*</span></label>
								<div class="pass-group input-group">
									<span class="input-group-text border-end-0">
										<i class="isax isax-lock"></i>
									</span>
									<span class="isax toggle-password " (click)="togglePassword(2)" [ngClass]="showPassword[2]?'isax-eye':'isax-eye-slash'"></span>
									<input type="password" [type]="showPassword[2]?'text':'password'" class="pass-input form-control border-start-0 ps-0" placeholder="****************">
								</div>
							</div>
						</div><!-- End modal body -->
						<div class="modal-footer d-flex align-items-center justify-content-between gap-1">
							<button type="button" class="btn btn-outline-white" data-bs-dismiss="modal">Cancel</button>
							<button type="submit" class="btn btn-primary" data-bs-dismiss="modal">Save Changes</button>
						</div><!-- End modal footer -->
					</form>
				</div><!-- End modal content-->
			</div><!-- End modal dialog-->
		</div>
		<!-- / End Change Password Modal -->

		<!-- Start Phone Verification Modal  -->
		<div id="phone_verification" class="modal fade">
			<div class="modal-dialog modal-dialog-centered">
				<div class="modal-content">
					<!-- Start modal header -->
					<div class="modal-header">
						<h4 class="modal-title">Change Phone Number</h4>
						<button type="button" class="btn-close btn-close-modal custom-btn-close" data-bs-dismiss="modal" aria-label="Close"><i class="fa-solid fa-x"></i></button>
					</div>
					<!-- End modal header -->
					<form >
						<div class="modal-body">
							<div class="mb-3">
								<label class="form-label">Current Phone Number<span class="text-danger ms-1">*</span></label>
								<input type="text" class="form-control" id="phone">
							</div>
							<div class="mb-3">
								<label class="form-label">New Phone Number<span class="text-danger ms-1">*</span></label>
								<input type="text" class="form-control" id="phone2">
								<p class="mt-2 d-inline-flex align-items-center"><i class="isax isax-info-circle me-1"></i>New phone number only updated once you verified </p>
							</div>
							<div>
								<label class="form-label">Current Password<span class="text-danger ms-1">*</span></label>
								<div class="pass-group input-group">
									<span class="input-group-text border-end-0">
										<i class="isax isax-lock"></i>
									</span>
									<span class="isax toggle-password " (click)="togglePassword(3)" [ngClass]="showPassword[3]?'isax-eye':'isax-eye-slash'"></span>
									<input type="password" [type]="showPassword[3]?'text':'password'" class="pass-input form-control border-start-0 ps-0" placeholder="****************">
								</div>
							</div>								
						</div><!-- End modal body -->
						<div class="modal-footer d-flex align-items-center justify-content-between gap-1">
							<button type="button" class="btn btn-outline-white" data-bs-dismiss="modal">Cancel</button>
							<button type="submit" class="btn btn-primary" data-bs-dismiss="modal">Save Changes</button>
						</div><!-- End modal footer -->
					</form>
				</div><!-- End modal content-->
			</div><!-- End modal dialog-->
		</div>
		<!-- / End Phone Verification Modal -->

		<!-- Start Email Verification Modal  -->
		<div id="email_verification" class="modal fade">
			<div class="modal-dialog modal-dialog-centered">
				<div class="modal-content">
					<!-- End modal header -->
					<div class="modal-header">
						<h4 class="modal-title">Change Email Address</h4>
						<button type="button" class="btn-close btn-close-modal custom-btn-close" data-bs-dismiss="modal" aria-label="Close"><i class="fa-solid fa-x"></i></button>
					</div>
					<!-- End modal header -->
					<form >
						<div class="modal-body">
							<div class="mb-3">
								<label class="form-label">Current Email Address<span class="text-danger ms-1">*</span></label>
								<input type="email" class="form-control">
							</div>
							<div class="mb-3">
								<label class="form-label">New Email Address<span class="text-danger ms-1">*</span></label>
								<input type="email" class="form-control">
								<p class="mt-2 d-inline-flex align-items-center"><i class="isax isax-info-circle me-1"></i>New email address only updated once you verified </p>
							</div>
							<div>
								<label class="form-label">Current Password<span class="text-danger ms-1">*</span></label>
								<div class="pass-group input-group">
									<span class="input-group-text border-end-0">
										<i class="isax isax-lock"></i>
									</span>
									<span class="isax toggle-password " (click)="togglePassword(4)" [ngClass]="showPassword[4]?'isax-eye':'isax-eye-slash'"></span>
									<input type="password" [type]="showPassword[4]?'text':'password'" class="pass-input form-control border-start-0 ps-0" placeholder="****************">
								</div>
							</div>								
						</div><!-- End modal body -->
						<div class="modal-footer d-flex align-items-center justify-content-between gap-1">
							<button type="button" class="btn btn-outline-white" data-bs-dismiss="modal">Cancel</button>
							<button type="submit" class="btn btn-primary" data-bs-dismiss="modal">Save Changes</button>
						</div><!-- End modal footer -->
					</form>
				</div><!-- End modal content-->
			</div><!-- End modal dialog-->
		</div>
		<!-- / End Email Verification Modal -->

		<!-- Start two step -->
		<div id="two-factor" class="modal fade">
			<div class="modal-dialog modal-dialog-centered modal-md">
				<div class="modal-content">
					<!-- Start modal header -->
					<div class="modal-header">
						<h4 class="modal-title">SMS Two Factor Authentication</h4>
						<button type="button" class="btn-close btn-close-modal custom-btn-close" data-bs-dismiss="modal" aria-label="Close"><i class="fa-solid fa-x"></i></button>
					</div>
					<!-- End modal header -->
					<form >
						<div class="modal-body">
							<div class="mb-3">
								<label class="form-label">Phone Number<span class="text-danger ms-1">*</span></label>
								<input type="text" class="form-control" id="phone3">
							</div>
							<p class="fs-13 mb-0">By providing your phone number, you agree to receive text messages from Figma to enable two-factor authentication when you log in. </p>							
						</div><!-- End modal body -->
						<div class="modal-footer d-flex align-items-center justify-content-between gap-1">
							<button type="button" class="btn btn-outline-white" data-bs-dismiss="modal">Cancel</button>
							<button type="submit" class="btn btn-primary" data-bs-dismiss="modal">Verify</button>
						</div><!-- End modal footer -->
					</form>
				</div><!-- End modal content-->
			</div><!-- End modal dialog-->
		</div>
		<!-- / End two step -->

		<!-- Start View Device Modal  -->
		<div id="view_device" class="modal fade">
			<div class="modal-dialog modal-dialog-centered modal-lg">
				<div class="modal-content">
					<!-- Start modal header -->
					<div class="modal-header">
						<h4 class="modal-title">Browsers & Devices</h4>
						<button type="button" class="btn-close btn-close-modal custom-btn-close" data-bs-dismiss="modal" aria-label="Close"><i class="fa-solid fa-x"></i></button>
					</div>
					<!-- End modal header -->
					<div class="modal-body">								
						<!-- Table List -->
						<div class="table-responsive border border-bottom-0">
							<table class="table">
								<thead class="thead-light">
									<tr>
										<th>Device</th>
										<th>Date</th>
										<th>IP Address</th>
										<th>Location</th>
										<th></th>
									</tr>
								</thead>
								<tbody>
									<tr>
										<td class="text-dark">Chrome - Windows</td>
										<td>24 Jan 2025, 10:00 AM</td>
										<td>232.222.12.72</td>
										<td>Newyork / USA</td>
										<td>
											<a href="javascript:void(0);"><span class="badge badge-soft-light text-dark d-inline-flex align-items-center"><i class="isax isax-logout"></i></span></a>	
										</td>
									</tr>
									<tr>
										<td class="text-dark">Safari Macos</td>
										<td>19 Dec 2024, 09:30 AM</td>
										<td>224.111.12.75</td>
										<td>Newyork / USA</td>
										<td>
											<a href="javascript:void(0);"><span class="badge badge-soft-light text-dark d-inline-flex align-items-center"><i class="isax isax-logout"></i></span></a>		
										</td>
									</tr>
									<tr>
										<td class="text-dark">Firefox Windows</td>
										<td>11 Dec 2024, 05:20 PM</td>
										<td>111.222.13.28</td>
										<td>Newyork / USA</td>
										<td>
											<a href="javascript:void(0);"><span class="badge badge-soft-light text-dark d-inline-flex align-items-center"><i class="isax isax-logout"></i></span></a>		
										</td>
									</tr>
									<tr>
										<td class="text-dark">Safari Macos</td>
										<td>29 Nov 2024, 04:45 PM</td>
										<td>333.555.10.54</td>
										<td>Newyork / USA</td>
										<td>
											<a href="javascript:void(0);"><span class="badge badge-soft-light text-dark d-inline-flex align-items-center"><i class="isax isax-logout"></i></span></a>		
										</td>
									</tr>
								</tbody>
							</table>
						</div>
						<!-- /Table List -->
					</div><!-- End modal body -->
				</div><!-- End modal content-->
			</div><!-- End modal dialog-->
		</div>
		<!-- / End View Device Modal -->

		<!-- Start Delete Account  -->
		<div id="delete_modal" class="modal fade">
			<div class="modal-dialog modal-dialog-centered modal-md">
				<div class="modal-content">
					<!-- Start modal header -->
					<div class="modal-header">
						<h4 class="modal-title">Delete Account</h4>
						<button type="button" class="btn-close btn-close-modal custom-btn-close" data-bs-dismiss="modal" aria-label="Close"><i class="fa-solid fa-x"></i></button>
					</div>
					<!-- End modal header -->
					<form >
						<div class="modal-body">
							<div class="mb-3">
								<p class="text-dark fw-semibold mb-0">Why Are You Deleting Your Account?</p>
								<p class="fs-13">We're sorry to see you go! To help us improve, please let us know your reason for deleting your account</p>
							</div>
							<div>
								<div class="form-check mb-3 d-flex align-items-center">
									<input class="form-check-input" type="radio" name="Radio-2" id="Radio-sm-1">
									<div class="ms-2">
										<p class="text-dark fw-semibold mb-0">No longer using the service</p>
										<label class="form-check-label fs-13" for="Radio-sm-1">
											I no longer need this service and won\u2019t be using it in the future.
										</label>
									</div>
								</div>
								<div class="form-check mb-3 d-flex align-items-center">
									<input class="form-check-input" type="radio" name="Radio-2" id="Radio-sm-2">
									<div class="ms-2">
										<p class="text-dark fw-semibold mb-0">Privacy concerns</p>
										<label class="form-check-label fs-13" for="Radio-sm-2">
											I am concerned about how my data is handled and want to remove
										</label>
									</div>
								</div>
								<div class="form-check mb-3 d-flex align-items-center">
									<input class="form-check-input" type="radio" name="Radio-2" id="Radio-sm-3">
									<div class="ms-2">
										<p class="text-dark fw-semibold mb-0">Too many notifications/emails</p>
										<label class="form-check-label fs-13" for="Radio-sm-3">
											I\u2019m overwhelmed by the volume of notifications or emails
										</label>
									</div>
								</div>
								<div class="form-check mb-3 d-flex align-items-center">
									<input class="form-check-input" type="radio" name="Radio-2" id="Radio-sm-4">
									<div class="ms-2">
										<p class="text-dark fw-semibold mb-0">Poor user experience</p>
										<label class="form-check-label fs-13" for="Radio-sm-4">
											I\u2019ve had difficulty using the platform, and it didn\u2019t meet my expectations
										</label>
									</div>
								</div>
								<div class="form-check mb-3">
									<input class="form-check-input" type="radio" name="Radio-2" id="Radio-sm-5" checked>
									<label class="form-check-label text-dark fw-semibold" for="Radio-sm-5">
										Other (Please specify)
									</label>
								</div>
							</div>	
							<div>
								<label class="form-label">Reason<span class="text-danger ms-1">*</span></label>
								<textarea class="form-control" rows="3"></textarea>
							</div>					
						</div><!-- End modal body -->
						<div class="modal-footer d-flex align-items-center justify-content-between gap-1">
							<button type="button" class="btn btn-outline-white" data-bs-dismiss="modal">Cancel</button>
							<button type="submit" class="btn btn-primary">Confirm & Delete</button>
						</div><!-- End modal footer -->
					</form>
				</div><!-- End modal content-->
			</div><!-- End modal dialog-->
		</div>
		<!-- / End Delete Account  -->` }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SecuritySettingsComponent, { className: "SecuritySettingsComponent", filePath: "src/app/modules/setting/presentation/pages/general-settings/security-settings/security-settings.component.ts", lineNumber: 12 });
})();
export {
  SecuritySettingsComponent
};
//# sourceMappingURL=chunk-5GDPFG5J.js.map

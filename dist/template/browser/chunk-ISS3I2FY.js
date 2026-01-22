import {
  MatOption,
  MatSelect,
  MatSelectModule
} from "./chunk-MUITGCTV.js";
import "./chunk-O6CHOV5Y.js";
import "./chunk-OMNMTJX2.js";
import "./chunk-2GQT47Z7.js";
import "./chunk-OSDWQYYA.js";
import "./chunk-4CMXULEF.js";
import "./chunk-HQMPBCJK.js";
import "./chunk-Y23EXZTF.js";
import "./chunk-WLTG2KP6.js";
import "./chunk-ZTQFL2WC.js";
import "./chunk-OWHJPR44.js";
import "./chunk-5PLILXVY.js";
import "./chunk-MDKDGAXP.js";
import "./chunk-YWH7SLE3.js";
import "./chunk-EXNS3HGN.js";
import "./chunk-NAWYXTZ5.js";
import {
  CommonModule
} from "./chunk-LNSVVXVJ.js";
import {
  Component,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵtext
} from "./chunk-HKG6HBOI.js";
import "./chunk-TXDUYLVM.js";

// src/app/modules/setting/presentation/pages/website-settings/localization-settings/localization-settings.component.ts
var LocalizationSettingsComponent = class _LocalizationSettingsComponent {
  static \u0275fac = function LocalizationSettingsComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _LocalizationSettingsComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _LocalizationSettingsComponent, selectors: [["app-localization-settings"]], decls: 200, vars: 0, consts: [[1, "mb-3", "pb-2"], [1, "mb-3", "pb-3", "border-bottom"], [1, "fw-bold", "mb-0"], [1, "d-flex", "align-items-center", "mb-3"], [1, "p-1", "rounded-2", "bg-dark", "text-white", "d-inline-flex", "align-items-center", "justify-content-center", "me-2"], [1, "isax", "isax-info-circle"], [1, "fw-semibold", "fs-16", "mb-0", "d-inline-flex", "align-items-center"], [1, "row", "align-items-center", "row-gap-3", "mb-3"], [1, "col-xl-9", "col-sm-7"], [1, "setting-info"], [1, "fs-14", "fw-medium", "mb-0"], [1, "text-danger", "ms-1"], [1, "col-xl-3", "col-sm-5", "float-sm-end"], ["placeholder", "(+5:30) GMT", 1, "custom-mat-select", "select"], ["value", "1"], ["placeholder", "Monday", 1, "custom-mat-select", "select"], ["placeholder", "18 Mar 2025", 1, "custom-mat-select", "select"], ["placeholder", "12 hrs", 1, "custom-mat-select", "select"], ["placeholder", "English", 1, "custom-mat-select", "select"], [1, "form-check", "form-switch", "ps-0"], ["type", "checkbox", "checked", "", 1, "form-check-input", "m-0"], [1, "col-md-12"], [1, "border-top", "mt-2", "pt-4"], [1, "isax", "isax-dollar-square"], ["placeholder", "USD", 1, "custom-mat-select", "select"], ["placeholder", "$", 1, "custom-mat-select", "select"], ["placeholder", "$100", 1, "custom-mat-select", "select"], ["placeholder", ".", 1, "custom-mat-select", "select"], ["placeholder", ".", 1, "custom-mat-select", "select", "lh-2"], [1, "d-flex", "align-items-center", "justify-content-between", "settings-bottom-btn", "mt-0", "border-top", "pt-3"], ["type", "button", 1, "btn", "btn-outline-white", "btn-md", "me-2"], ["type", "submit", 1, "btn", "btn-primary", "btn-md"]], template: function LocalizationSettingsComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "h6", 2);
      \u0275\u0275text(3, "Localization");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(4, "div", 3)(5, "span", 4);
      \u0275\u0275element(6, "i", 5);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(7, "h6", 6);
      \u0275\u0275text(8, "Basic Information");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(9, "div", 7)(10, "div", 8)(11, "div", 9)(12, "h6", 10);
      \u0275\u0275text(13, "Time Zone");
      \u0275\u0275elementStart(14, "span", 11);
      \u0275\u0275text(15, "*");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(16, "div", 12)(17, "div")(18, "mat-select", 13)(19, "mat-option", 14);
      \u0275\u0275text(20, "(+5:30) GMT");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(21, "mat-option", 14);
      \u0275\u0275text(22, "(GMT -10:00) Hawaii");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(23, "mat-option", 14);
      \u0275\u0275text(24, "(GMT -9:30) Taiohae");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(25, "mat-option", 14);
      \u0275\u0275text(26, "(GMT -9:00) Alaska ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(27, "mat-option", 14);
      \u0275\u0275text(28, "(GMT -8:00) Pacific Time, Canada");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(29, "div", 8)(30, "div", 9)(31, "h6", 10);
      \u0275\u0275text(32, "Start Week On");
      \u0275\u0275elementStart(33, "span", 11);
      \u0275\u0275text(34, "*");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(35, "div", 12)(36, "div")(37, "mat-select", 15)(38, "mat-option", 14);
      \u0275\u0275text(39, "Monday");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(40, "mat-option", 14);
      \u0275\u0275text(41, "Tuesday");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(42, "mat-option", 14);
      \u0275\u0275text(43, "Wednesday");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(44, "mat-option", 14);
      \u0275\u0275text(45, "Thursday");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(46, "mat-option", 14);
      \u0275\u0275text(47, "Friday");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(48, "mat-option", 14);
      \u0275\u0275text(49, "Saturday");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(50, "mat-option", 14);
      \u0275\u0275text(51, "Sunday");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(52, "div", 8)(53, "div", 9)(54, "h6", 10);
      \u0275\u0275text(55, "Date Format");
      \u0275\u0275elementStart(56, "span", 11);
      \u0275\u0275text(57, "*");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(58, "div", 12)(59, "div")(60, "mat-select", 16)(61, "mat-option", 14);
      \u0275\u0275text(62, "18 Mar 2025");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(63, "mat-option", 14);
      \u0275\u0275text(64, "Mar 18 2025");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(65, "mat-option", 14);
      \u0275\u0275text(66, "2025 Mar 18");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(67, "div", 8)(68, "div", 9)(69, "h6", 10);
      \u0275\u0275text(70, "Time Format");
      \u0275\u0275elementStart(71, "span", 11);
      \u0275\u0275text(72, "*");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(73, "div", 12)(74, "div")(75, "mat-select", 17)(76, "mat-option", 14);
      \u0275\u0275text(77, "12 hrs");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(78, "mat-option", 14);
      \u0275\u0275text(79, "24hrs");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(80, "div", 8)(81, "div", 9)(82, "h6", 10);
      \u0275\u0275text(83, "Default Language");
      \u0275\u0275elementStart(84, "span", 11);
      \u0275\u0275text(85, "*");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(86, "div", 12)(87, "div")(88, "mat-select", 18)(89, "mat-option", 14);
      \u0275\u0275text(90, "English");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(91, "mat-option", 14);
      \u0275\u0275text(92, "German");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(93, "mat-option", 14);
      \u0275\u0275text(94, "Arabic");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(95, "mat-option", 14);
      \u0275\u0275text(96, "French");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(97, "div", 8)(98, "div", 9)(99, "h6", 10);
      \u0275\u0275text(100, "Language Switcher");
      \u0275\u0275elementStart(101, "span", 11);
      \u0275\u0275text(102, "*");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(103, "div", 12)(104, "div")(105, "div", 19);
      \u0275\u0275element(106, "input", 20);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(107, "div", 21)(108, "div", 22)(109, "div", 3)(110, "span", 4);
      \u0275\u0275element(111, "i", 23);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(112, "h5", 6);
      \u0275\u0275text(113, "Currency Information");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(114, "div", 8)(115, "div", 9)(116, "h6", 10);
      \u0275\u0275text(117, "Currency");
      \u0275\u0275elementStart(118, "span", 11);
      \u0275\u0275text(119, "*");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(120, "div", 12)(121, "div")(122, "mat-select", 24)(123, "mat-option", 14);
      \u0275\u0275text(124, "USD");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(125, "mat-option", 14);
      \u0275\u0275text(126, "Dollar");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(127, "mat-option", 14);
      \u0275\u0275text(128, "Euro");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(129, "mat-option", 14);
      \u0275\u0275text(130, "Pound");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(131, "mat-option", 14);
      \u0275\u0275text(132, "Rupee");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(133, "div", 8)(134, "div", 9)(135, "h6", 10);
      \u0275\u0275text(136, "Currency Symbol ");
      \u0275\u0275elementStart(137, "span", 11);
      \u0275\u0275text(138, "*");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(139, "div", 12)(140, "div")(141, "mat-select", 25)(142, "mat-option", 14);
      \u0275\u0275text(143, "$");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(144, "mat-option", 14);
      \u0275\u0275text(145, "\u20B9");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(146, "mat-option", 14);
      \u0275\u0275text(147, "\xA3");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(148, "mat-option", 14);
      \u0275\u0275text(149, "\u20AC");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(150, "div", 8)(151, "div", 9)(152, "h6", 10);
      \u0275\u0275text(153, "Currency Position");
      \u0275\u0275elementStart(154, "span", 11);
      \u0275\u0275text(155, "*");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(156, "div", 12)(157, "div")(158, "mat-select", 26)(159, "mat-option", 14);
      \u0275\u0275text(160, "$100");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(161, "mat-option", 14);
      \u0275\u0275text(162, "100$");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(163, "mat-option", 14);
      \u0275\u0275text(164, "$ 100");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(165, "mat-option", 14);
      \u0275\u0275text(166, "100 $");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(167, "div", 8)(168, "div", 9)(169, "h6", 10);
      \u0275\u0275text(170, "Decimal Separator");
      \u0275\u0275elementStart(171, "span", 11);
      \u0275\u0275text(172, "*");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(173, "div", 12)(174, "div")(175, "mat-select", 27)(176, "mat-option", 14);
      \u0275\u0275text(177, ".");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(178, "mat-option", 14);
      \u0275\u0275text(179, ",");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(180, "div", 8)(181, "div", 9)(182, "h6", 10);
      \u0275\u0275text(183, "Thousand Separator");
      \u0275\u0275elementStart(184, "span", 11);
      \u0275\u0275text(185, "*");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(186, "div", 12)(187, "div")(188, "mat-select", 28)(189, "mat-option", 14);
      \u0275\u0275text(190, ".");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(191, "mat-option", 14);
      \u0275\u0275text(192, ",");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(193, "mat-option", 14);
      \u0275\u0275text(194, "'");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(195, "div", 29)(196, "button", 30);
      \u0275\u0275text(197, "Cancel");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(198, "button", 31);
      \u0275\u0275text(199, "Save Changes");
      \u0275\u0275elementEnd()()();
    }
  }, dependencies: [CommonModule, MatSelectModule, MatSelect, MatOption], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LocalizationSettingsComponent, [{
    type: Component,
    args: [{ selector: "app-localization-settings", imports: [CommonModule, MatSelectModule], template: `<div class="mb-3 pb-2">
    <div class="mb-3 pb-3 border-bottom">
        <h6 class="fw-bold mb-0">Localization</h6>
    </div>
    <div class="d-flex align-items-center mb-3">
        <span class="p-1 rounded-2 bg-dark text-white d-inline-flex align-items-center justify-content-center me-2"><i class="isax isax-info-circle"></i></span>
        <h6 class="fw-semibold fs-16 mb-0 d-inline-flex align-items-center">Basic Information</h6>
    </div>
    <div class="row align-items-center row-gap-3 mb-3">
        <div class="col-xl-9 col-sm-7">
            <div class="setting-info">
                <h6 class="fs-14 fw-medium mb-0">Time Zone<span class="text-danger ms-1">*</span></h6>
            </div>
        </div>
        <div class="col-xl-3 col-sm-5 float-sm-end">
            <div>
                <mat-select class="custom-mat-select select" placeholder="(+5:30) GMT">
                    <mat-option value="1">(+5:30) GMT</mat-option>
                    <mat-option value="1">(GMT -10:00) Hawaii</mat-option>
                    <mat-option value="1">(GMT -9:30) Taiohae</mat-option>
                    <mat-option value="1">(GMT -9:00) Alaska </mat-option>
                    <mat-option value="1">(GMT -8:00) Pacific Time, Canada</mat-option>
                </mat-select>
            </div>
        </div>
        <div class="col-xl-9 col-sm-7">
            <div class="setting-info">
                <h6 class="fs-14 fw-medium mb-0">Start Week On<span class="text-danger ms-1">*</span></h6>
            </div>
        </div>
        <div class="col-xl-3 col-sm-5 float-sm-end">
            <div>
                <mat-select class="custom-mat-select select" placeholder="Monday">
                    <mat-option value="1">Monday</mat-option>
                    <mat-option value="1">Tuesday</mat-option>
                    <mat-option value="1">Wednesday</mat-option>
                    <mat-option value="1">Thursday</mat-option>
                    <mat-option value="1">Friday</mat-option>
                    <mat-option value="1">Saturday</mat-option>
                    <mat-option value="1">Sunday</mat-option>
                </mat-select>
            </div>
        </div>
        <div class="col-xl-9 col-sm-7">
            <div class="setting-info">
                <h6 class="fs-14 fw-medium mb-0">Date Format<span class="text-danger ms-1">*</span></h6>
            </div>
        </div>
        <div class="col-xl-3 col-sm-5 float-sm-end">
            <div>
                <mat-select class="custom-mat-select select" placeholder="18 Mar 2025">
                    <mat-option value="1">18 Mar 2025</mat-option>
                    <mat-option value="1">Mar 18 2025</mat-option>
                    <mat-option value="1">2025 Mar 18</mat-option>
                </mat-select>
            </div>

        </div>
        <div class="col-xl-9 col-sm-7">
            <div class="setting-info">
                <h6 class="fs-14 fw-medium mb-0">Time Format<span class="text-danger ms-1">*</span></h6>
            </div>
        </div>
        <div class="col-xl-3 col-sm-5 float-sm-end">
            <div>
                <mat-select class="custom-mat-select select" placeholder="12 hrs">
                    <mat-option value="1">12 hrs</mat-option>
                    <mat-option value="1">24hrs</mat-option>
                </mat-select>
            </div>

        </div>
        <div class="col-xl-9 col-sm-7">
            <div class="setting-info">
                <h6 class="fs-14 fw-medium mb-0">Default Language<span class="text-danger ms-1">*</span></h6>
            </div>
        </div>
        <div class="col-xl-3 col-sm-5 float-sm-end">
            <div>
                <mat-select class="custom-mat-select select" placeholder="English">
                    <mat-option value="1">English</mat-option>
                    <mat-option value="1">German</mat-option>
                    <mat-option value="1">Arabic</mat-option>
                    <mat-option value="1">French</mat-option>
                </mat-select>
            </div>
        </div>
        <div class="col-xl-9 col-sm-7">
            <div class="setting-info">
                <h6 class="fs-14 fw-medium mb-0">Language Switcher<span class="text-danger ms-1">*</span></h6>
            </div>
        </div>
        <div class="col-xl-3 col-sm-5 float-sm-end">
            <div>
                <div class="form-check form-switch ps-0">
                    <input class="form-check-input m-0" type="checkbox" checked="">
                </div>
            </div>
        </div>
        <div class="col-md-12">
            <div class="border-top mt-2 pt-4">
                <div class="d-flex align-items-center mb-3">
                    <span class="p-1 rounded-2 bg-dark text-white d-inline-flex align-items-center justify-content-center me-2"><i class="isax isax-dollar-square"></i></span>
                    <h5 class="fw-semibold fs-16 mb-0 d-inline-flex align-items-center">Currency Information</h5>
                </div>
            </div>
        </div>
        <div class="col-xl-9 col-sm-7">
            <div class="setting-info">
                <h6 class="fs-14 fw-medium mb-0">Currency<span class="text-danger ms-1">*</span></h6>
            </div>
        </div>
        <div class="col-xl-3 col-sm-5 float-sm-end">
            <div>
                <mat-select class="custom-mat-select select" placeholder="USD">
                    <mat-option value="1">USD</mat-option>
                    <mat-option value="1">Dollar</mat-option>
                    <mat-option value="1">Euro</mat-option>
                    <mat-option value="1">Pound</mat-option>
                    <mat-option value="1">Rupee</mat-option>
                </mat-select>
            </div>
        </div>
        <div class="col-xl-9 col-sm-7">
            <div class="setting-info">
                <h6 class="fs-14 fw-medium mb-0">Currency Symbol <span class="text-danger ms-1">*</span></h6>
            </div>
        </div>
        <div class="col-xl-3 col-sm-5 float-sm-end">
            <div>
                <mat-select class="custom-mat-select select" placeholder="$">
                    <mat-option value="1">$</mat-option>
                    <mat-option value="1">\u20B9</mat-option>
                    <mat-option value="1">\xA3</mat-option>
                    <mat-option value="1">\u20AC</mat-option>
                </mat-select>
            </div>
        </div>
        <div class="col-xl-9 col-sm-7">
            <div class="setting-info">
                <h6 class="fs-14 fw-medium mb-0">Currency Position<span class="text-danger ms-1">*</span></h6>
            </div>
        </div>
        <div class="col-xl-3 col-sm-5 float-sm-end">
            <div>
                <mat-select class="custom-mat-select select" placeholder="$100">
                    <mat-option value="1">$100</mat-option>
                    <mat-option value="1">100$</mat-option>
                    <mat-option value="1">$ 100</mat-option>
                    <mat-option value="1">100 $</mat-option>
                </mat-select>
            </div>
        </div>
        <div class="col-xl-9 col-sm-7">
            <div class="setting-info">
                <h6 class="fs-14 fw-medium mb-0">Decimal Separator<span class="text-danger ms-1">*</span></h6>
            </div>
        </div>
        <div class="col-xl-3 col-sm-5 float-sm-end">
            <div>
                <mat-select class="custom-mat-select select" placeholder=".">
                    <mat-option value="1">.</mat-option>
                    <mat-option value="1">,</mat-option>
                </mat-select>
            </div>
        </div>

        <div class="col-xl-9 col-sm-7">
            <div class="setting-info">
                <h6 class="fs-14 fw-medium mb-0">Thousand Separator<span class="text-danger ms-1">*</span></h6>
            </div>
        </div>
        <div class="col-xl-3 col-sm-5 float-sm-end">
            <div>
                <mat-select class="custom-mat-select select lh-2" placeholder=".">
                    <mat-option value="1">.</mat-option>
                    <mat-option value="1">,</mat-option>
                    <mat-option value="1">'</mat-option>
                </mat-select>
            </div>
        </div>
    </div>
    <div class="d-flex align-items-center justify-content-between settings-bottom-btn mt-0 border-top pt-3">
        <button type="button" class="btn btn-outline-white btn-md me-2">Cancel</button>
        <button type="submit" class="btn btn-primary btn-md">Save Changes</button>
    </div>
</div>` }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(LocalizationSettingsComponent, { className: "LocalizationSettingsComponent", filePath: "src/app/modules/setting/presentation/pages/website-settings/localization-settings/localization-settings.component.ts", lineNumber: 11 });
})();
export {
  LocalizationSettingsComponent
};
//# sourceMappingURL=chunk-ISS3I2FY.js.map

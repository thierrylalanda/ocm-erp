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
import "./chunk-BLAAMQ2R.js";
import {
  CommonModule
} from "./chunk-ZV6UYXXV.js";
import {
  Component,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵtext
} from "./chunk-U4CEU3KS.js";
import "./chunk-TXDUYLVM.js";

// src/app/features/customers/settings/account-settings/account-settings.component.ts
var AccountSettingsComponent = class _AccountSettingsComponent {
  static \u0275fac = function AccountSettingsComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AccountSettingsComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AccountSettingsComponent, selectors: [["app-account-settings"]], decls: 147, vars: 0, consts: [[1, "mb-3"], [1, "pb-3", "border-bottom", "mb-3"], [1, "mb-0"], [1, "d-flex", "align-items-center", "mb-3"], [1, "bg-dark", "avatar", "avatar-sm", "me-2", "flex-shrink-0"], [1, "isax", "isax-info-circle", "fs-14"], [1, "fs-16", "fw-semibold", "mb-0"], [1, "text-gray-9", "fw-bold", "mb-2", "d-flex"], [1, "text-danger", "ms-1"], [1, "d-flex", "align-items-center"], [1, "avatar", "avatar-xxl", "border", "border-dashed", "bg-light", "me-3", "flex-shrink-0"], [1, "position-relative", "d-flex", "align-items-center"], ["src", "assets/img/users/user-01.jpg", "alt", "User Img", 1, "avatar", "avatar-xl"], ["href", "javascript:void(0);", 1, "rounded-trash", "trash-top", "d-flex", "align-items-center", "justify-content-center"], [1, "isax", "isax-trash"], [1, "d-inline-flex", "flex-column", "align-items-start"], [1, "drag-upload-btn", "btn", "btn-sm", "btn-primary", "position-relative", "mb-2"], [1, "isax", "isax-image", "me-1"], ["type", "file", "multiple", "", 1, "form-control", "image-sign"], [1, "text-gray-9", "fs-12"], [1, "border-bottom", "mb-3", "pb-2"], [1, "row", "gx-3"], [1, "col-lg-4", "col-md-6"], [1, "form-label"], [1, "text-danger"], ["type", "text", 1, "form-control"], ["placeholder", "Select", 1, "custom-mat-select", "select"], ["value", "1"], [1, "input-group", "position-relative", "mb-3"], ["type", "text", "bsDatepicker", "", "placeholder", "25 Mar 2025", 1, "form-control", "datetimepicker", "rounded-end"], [1, "input-icon-addon", "fs-16", "text-gray-9"], [1, "isax", "isax-calendar-2"], [1, "border-bottom", "mb-3"], [1, "col-lg-12"], [1, "col-md-6"], [1, "d-flex", "align-items-center", "justify-content-between"], ["type", "button", 1, "btn", "btn-outline-white"], ["type", "submit", 1, "btn", "btn-primary"]], template: function AccountSettingsComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "h6", 2);
      \u0275\u0275text(3, "Account Settings");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(4, "div", 3)(5, "span", 4);
      \u0275\u0275element(6, "i", 5);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(7, "h6", 6);
      \u0275\u0275text(8, "General Information");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(9, "form")(10, "div", 0)(11, "span", 7);
      \u0275\u0275text(12, "Profile Image");
      \u0275\u0275elementStart(13, "span", 8);
      \u0275\u0275text(14, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(15, "div", 9)(16, "div", 10)(17, "div", 11);
      \u0275\u0275element(18, "img", 12);
      \u0275\u0275elementStart(19, "a", 13);
      \u0275\u0275element(20, "i", 14);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(21, "div", 15)(22, "div", 16);
      \u0275\u0275element(23, "i", 17);
      \u0275\u0275text(24, "Upload Image ");
      \u0275\u0275element(25, "input", 18);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(26, "span", 19);
      \u0275\u0275text(27, "JPG or PNG format, not exceeding 5MB.");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(28, "div", 20)(29, "div", 21)(30, "div", 22)(31, "div", 0)(32, "label", 23);
      \u0275\u0275text(33, "Name ");
      \u0275\u0275elementStart(34, "span", 24);
      \u0275\u0275text(35, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(36, "input", 25);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(37, "div", 22)(38, "div", 0)(39, "label", 23);
      \u0275\u0275text(40, "Email ");
      \u0275\u0275elementStart(41, "span", 24);
      \u0275\u0275text(42, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(43, "input", 25);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(44, "div", 22)(45, "div", 0)(46, "label", 23);
      \u0275\u0275text(47, "Mobile Number ");
      \u0275\u0275elementStart(48, "span", 24);
      \u0275\u0275text(49, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(50, "input", 25);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(51, "div", 22)(52, "div", 0)(53, "label", 23);
      \u0275\u0275text(54, "Gender");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(55, "mat-select", 26)(56, "mat-option", 27);
      \u0275\u0275text(57, "Select");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(58, "mat-option", 27);
      \u0275\u0275text(59, "Male");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(60, "mat-option", 27);
      \u0275\u0275text(61, "Female");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(62, "div", 22)(63, "div", 0)(64, "label", 23);
      \u0275\u0275text(65, "DOB");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(66, "div", 28);
      \u0275\u0275element(67, "input", 29);
      \u0275\u0275elementStart(68, "span", 30);
      \u0275\u0275element(69, "i", 31);
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(70, "div", 32)(71, "div", 3)(72, "span", 4);
      \u0275\u0275element(73, "i", 5);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(74, "h6", 6);
      \u0275\u0275text(75, "Address Information");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(76, "div", 21)(77, "div", 33)(78, "div", 0)(79, "label", 23);
      \u0275\u0275text(80, "Address");
      \u0275\u0275elementEnd();
      \u0275\u0275element(81, "input", 25);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(82, "div", 34)(83, "div", 0)(84, "label", 23);
      \u0275\u0275text(85, "Country");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(86, "mat-select", 26)(87, "mat-option", 27);
      \u0275\u0275text(88, "Select");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(89, "mat-option", 27);
      \u0275\u0275text(90, "United States");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(91, "mat-option", 27);
      \u0275\u0275text(92, "Canada");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(93, "mat-option", 27);
      \u0275\u0275text(94, "UK");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(95, "mat-option", 27);
      \u0275\u0275text(96, "Germany");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(97, "mat-option", 27);
      \u0275\u0275text(98, "France");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(99, "div", 34)(100, "div", 0)(101, "label", 23);
      \u0275\u0275text(102, "State");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(103, "mat-select", 26)(104, "mat-option", 27);
      \u0275\u0275text(105, "Select");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(106, "mat-option", 27);
      \u0275\u0275text(107, "California");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(108, "mat-option", 27);
      \u0275\u0275text(109, "Ontario");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(110, "mat-option", 27);
      \u0275\u0275text(111, "Bavaria");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(112, "mat-option", 27);
      \u0275\u0275text(113, "Wellington");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(114, "mat-option", 27);
      \u0275\u0275text(115, "Le-de-France");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(116, "div", 34)(117, "div", 0)(118, "label", 23);
      \u0275\u0275text(119, "City");
      \u0275\u0275elementStart(120, "span", 8);
      \u0275\u0275text(121, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(122, "mat-select", 26)(123, "mat-option", 27);
      \u0275\u0275text(124, "Select");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(125, "mat-option", 27);
      \u0275\u0275text(126, "Los Angeles");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(127, "mat-option", 27);
      \u0275\u0275text(128, "Toronto");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(129, "mat-option", 27);
      \u0275\u0275text(130, "London");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(131, "mat-option", 27);
      \u0275\u0275text(132, "Munich");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(133, "mat-option", 27);
      \u0275\u0275text(134, "Sydney");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(135, "div", 34)(136, "div", 0)(137, "label", 23);
      \u0275\u0275text(138, "Postal Code");
      \u0275\u0275elementStart(139, "span", 8);
      \u0275\u0275text(140, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(141, "input", 25);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(142, "div", 35)(143, "button", 36);
      \u0275\u0275text(144, "Cancel");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(145, "button", 37);
      \u0275\u0275text(146, "Save Changes");
      \u0275\u0275elementEnd()()()();
    }
  }, dependencies: [CommonModule, MatSelectModule, MatSelect, MatOption], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AccountSettingsComponent, [{
    type: Component,
    args: [{ selector: "app-account-settings", imports: [CommonModule, MatSelectModule], template: '<div class="mb-3">\n    <div class="pb-3 border-bottom mb-3">\n        <h6 class="mb-0">Account Settings</h6>\n    </div>\n    <div class="d-flex align-items-center mb-3">\n        <span class="bg-dark avatar avatar-sm me-2 flex-shrink-0"><i class="isax isax-info-circle fs-14"></i></span>\n        <h6 class="fs-16 fw-semibold mb-0">General Information</h6>\n    </div>\n    <form>\n        <div class="mb-3">\n            <span class="text-gray-9 fw-bold mb-2 d-flex">Profile Image<span class="text-danger ms-1">*</span></span>\n            <div class="d-flex align-items-center">\n                <div class="avatar avatar-xxl border border-dashed bg-light me-3 flex-shrink-0">\n                    <div class="position-relative d-flex align-items-center">\n                        <img src="assets/img/users/user-01.jpg" class="avatar avatar-xl " alt="User Img">\n                        <a href="javascript:void(0);" class="rounded-trash trash-top d-flex align-items-center justify-content-center"><i class="isax isax-trash"></i></a>\n                    </div>\n                </div>\n                <div class="d-inline-flex flex-column align-items-start">\n                    <div class="drag-upload-btn btn btn-sm btn-primary position-relative mb-2">\n                        <i class="isax isax-image me-1"></i>Upload Image\n                        <input type="file" class="form-control image-sign" multiple="">\n                    </div>\n                    <span class="text-gray-9 fs-12">JPG or PNG format, not exceeding 5MB.</span>\n                </div>\n            </div>\n        </div>\n        <div class="border-bottom mb-3 pb-2">\n\n            <!-- start row -->\n            <div class="row gx-3">\n\n                <div class="col-lg-4 col-md-6">\n                    <div class="mb-3">\n                        <label class="form-label">Name <span class="text-danger">*</span></label>\n                        <input type="text" class="form-control">\n                    </div>\n                </div><!-- end col -->\n                <div class="col-lg-4 col-md-6">\n                    <div class="mb-3">\n                        <label class="form-label">Email <span class="text-danger">*</span></label>\n                        <input type="text" class="form-control">\n                    </div>\n                </div><!-- end col -->\n                <div class="col-lg-4 col-md-6">\n                    <div class="mb-3">\n                        <label class="form-label">Mobile Number <span class="text-danger">*</span></label>\n                        <input type="text" class="form-control">\n                    </div>\n                </div><!-- end col -->\n                <div class="col-lg-4 col-md-6">\n                    <div class="mb-3">\n                        <label class="form-label">Gender</label>\n                        <mat-select class="custom-mat-select select" placeholder="Select">\n                            <mat-option value="1">Select</mat-option>\n                            <mat-option value="1">Male</mat-option>\n                            <mat-option value="1">Female</mat-option>\n                        </mat-select>\n                    </div>\n                </div><!-- end col -->\n                <div class="col-lg-4 col-md-6">\n                    <div class="mb-3">\n                        <label class="form-label">DOB</label>\n                        <div class="input-group position-relative mb-3">\n                            <input type="text" class="form-control datetimepicker rounded-end" bsDatepicker placeholder="25 Mar 2025">\n                            <span class="input-icon-addon fs-16 text-gray-9">\n                                <i class="isax isax-calendar-2"></i>\n                            </span>\n                        </div>\n                    </div>\n                </div><!-- end col -->\n            </div><!-- end row -->\n        </div>\n        <div class="border-bottom mb-3">\n            <div class="d-flex align-items-center mb-3">\n                <span class="bg-dark avatar avatar-sm me-2 flex-shrink-0"><i class="isax isax-info-circle fs-14"></i></span>\n                <h6 class="fs-16 fw-semibold mb-0">Address Information</h6>\n            </div>\n\n            <!-- start row -->\n            <div class="row gx-3">\n                <div class="col-lg-12">\n                    <div class="mb-3">\n                        <label class="form-label">Address</label>\n                        <input type="text" class="form-control">\n                    </div>\n                </div><!-- end col -->\n                <div class="col-md-6">\n                    <div class="mb-3">\n                        <label class="form-label">Country</label>\n                        <mat-select class="custom-mat-select select" placeholder="Select">\n                            <mat-option value="1">Select</mat-option>\n                            <mat-option value="1">United States</mat-option>\n                            <mat-option value="1">Canada</mat-option>\n                            <mat-option value="1">UK</mat-option>\n                            <mat-option value="1">Germany</mat-option>\n                            <mat-option value="1">France</mat-option>\n                        </mat-select>\n                    </div>\n                </div><!-- end col -->\n                <div class="col-md-6">\n                    <div class="mb-3">\n                        <label class="form-label">State</label>\n                        <mat-select class="custom-mat-select select" placeholder="Select">\n                            <mat-option value="1">Select</mat-option>\n                            <mat-option value="1">California</mat-option>\n                            <mat-option value="1">Ontario</mat-option>\n                            <mat-option value="1">Bavaria</mat-option>\n                            <mat-option value="1">Wellington</mat-option>\n                            <mat-option value="1">Le-de-France</mat-option>\n                        </mat-select>\n                    </div>\n                </div><!-- end col -->\n                <div class="col-md-6">\n                    <div class="mb-3">\n                        <label class="form-label">City<span class="text-danger ms-1">*</span></label>\n                        <mat-select class="custom-mat-select select" placeholder="Select">\n                            <mat-option value="1">Select</mat-option>\n                            <mat-option value="1">Los Angeles</mat-option>\n                            <mat-option value="1">Toronto</mat-option>\n                            <mat-option value="1">London</mat-option>\n                            <mat-option value="1">Munich</mat-option>\n                            <mat-option value="1">Sydney</mat-option>\n                        </mat-select>\n                    </div>\n                </div><!-- end col -->\n                <div class="col-md-6">\n                    <div class="mb-3">\n                        <label class="form-label">Postal Code<span class="text-danger ms-1">*</span></label>\n                        <input type="text" class="form-control">\n                    </div>\n                </div><!-- end col -->\n            </div>\n            <!-- end row -->\n\n        </div>\n\n        <div class="d-flex align-items-center justify-content-between">\n            <button type="button" class="btn btn-outline-white">Cancel</button>\n            <button type="submit" class="btn btn-primary">Save Changes</button>\n        </div>\n        \n    </form>\n</div>' }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AccountSettingsComponent, { className: "AccountSettingsComponent", filePath: "src/app/features/customers/settings/account-settings/account-settings.component.ts", lineNumber: 11 });
})();
export {
  AccountSettingsComponent
};
//# sourceMappingURL=chunk-X3AYW5HE.js.map

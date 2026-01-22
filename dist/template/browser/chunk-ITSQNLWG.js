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
import {
  BsDatepickerDirective,
  BsDatepickerInputDirective,
  BsDatepickerModule
} from "./chunk-MR3VQUUR.js";
import "./chunk-F375ST7H.js";
import "./chunk-NAWYXTZ5.js";
import "./chunk-AWXYRVJS.js";
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

// src/app/features/pages/profile/profile.component.ts
var ProfileComponent = class _ProfileComponent {
  static \u0275fac = function ProfileComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ProfileComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ProfileComponent, selectors: [["app-profile"]], decls: 149, vars: 0, consts: [[1, "content-two"], [1, "row", "justify-content-center"], [1, "col-lg-10"], [1, "mb-3", "border-bottom", "pb-3"], [1, "mb-0"], [1, "card", "mb-0"], [1, "card-body"], [1, "d-flex", "align-items-center", "mb-3"], [1, "bg-dark", "avatar", "avatar-sm", "me-2", "flex-shrink-0"], [1, "isax", "isax-info-circle", "fs-14"], [1, "fs-16", "fw-semibold", "mb-0"], [1, "mb-3"], [1, "text-gray-9", "fw-bold", "mb-2", "d-flex"], [1, "d-flex", "align-items-center"], [1, "avatar", "avatar-xxl", "border", "border-dashed", "bg-light", "me-3", "flex-shrink-0"], [1, "position-relative", "d-flex", "align-items-center"], ["src", "assets/img/users/user-01.jpg", "alt", "User Img", 1, "avatar", "avatar-xl"], ["href", "javascript:void(0);", 1, "rounded-trash", "trash-top", "d-flex", "align-items-center", "justify-content-center"], [1, "isax", "isax-trash"], [1, "d-inline-flex", "flex-column", "align-items-start"], [1, "drag-upload-btn", "btn", "btn-sm", "btn-primary", "position-relative", "mb-2"], [1, "isax", "isax-image", "me-1"], ["type", "file", "multiple", "", 1, "form-control", "image-sign"], [1, "text-gray-9", "fs-12"], [1, "border-bottom", "mb-3", "pb-2"], [1, "row", "gx-3"], [1, "col-lg-4", "col-md-6"], [1, "form-label"], [1, "text-danger"], ["type", "text", 1, "form-control"], ["placeholder", "Select", 1, "custom-mat-select", "select"], ["value", "1"], [1, "input-group", "position-relative", "mb-3"], ["type", "text", "bsDatepicker", "", "placeholder", "25 Mar 2025", 1, "form-control", "datetimepicker", "rounded-end"], [1, "input-icon-addon", "fs-16", "text-gray-9"], [1, "isax", "isax-calendar-2"], [1, "border-bottom", "mb-3"], [1, "col-lg-12"], [1, "col-md-6"], [1, "text-danger", "ms-1"], [1, "d-flex", "align-items-center", "justify-content-between"], ["type", "button", 1, "btn", "btn-outline-white"], ["type", "submit", 1, "btn", "btn-primary"]], template: function ProfileComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "h6", 4);
      \u0275\u0275text(5, "Profile");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(6, "div", 5)(7, "div", 6)(8, "div", 7)(9, "span", 8);
      \u0275\u0275element(10, "i", 9);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(11, "h6", 10);
      \u0275\u0275text(12, "General Information");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(13, "form")(14, "div", 11)(15, "span", 12);
      \u0275\u0275text(16, "Profile Image");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(17, "div", 13)(18, "div", 14)(19, "div", 15);
      \u0275\u0275element(20, "img", 16);
      \u0275\u0275elementStart(21, "a", 17);
      \u0275\u0275element(22, "i", 18);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(23, "div", 19)(24, "div", 20);
      \u0275\u0275element(25, "i", 21);
      \u0275\u0275text(26, "Upload Image ");
      \u0275\u0275element(27, "input", 22);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(28, "span", 23);
      \u0275\u0275text(29, "JPG or PNG format, not exceeding 5MB.");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(30, "div", 24)(31, "div", 25)(32, "div", 26)(33, "div", 11)(34, "label", 27);
      \u0275\u0275text(35, "Name ");
      \u0275\u0275elementStart(36, "span", 28);
      \u0275\u0275text(37, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(38, "input", 29);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(39, "div", 26)(40, "div", 11)(41, "label", 27);
      \u0275\u0275text(42, "Email ");
      \u0275\u0275elementStart(43, "span", 28);
      \u0275\u0275text(44, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(45, "input", 29);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(46, "div", 26)(47, "div", 11)(48, "label", 27);
      \u0275\u0275text(49, "Mobile Number ");
      \u0275\u0275elementStart(50, "span", 28);
      \u0275\u0275text(51, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(52, "input", 29);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(53, "div", 26)(54, "div", 11)(55, "label", 27);
      \u0275\u0275text(56, "Gender");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(57, "mat-select", 30)(58, "mat-option", 31);
      \u0275\u0275text(59, "Select");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(60, "mat-option", 31);
      \u0275\u0275text(61, "Male");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(62, "mat-option", 31);
      \u0275\u0275text(63, "Female");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(64, "div", 26)(65, "div", 11)(66, "label", 27);
      \u0275\u0275text(67, "DOB");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(68, "div", 32);
      \u0275\u0275element(69, "input", 33);
      \u0275\u0275elementStart(70, "span", 34);
      \u0275\u0275element(71, "i", 35);
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(72, "div", 36)(73, "div", 7)(74, "span", 8);
      \u0275\u0275element(75, "i", 9);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(76, "h6", 10);
      \u0275\u0275text(77, "Address Information");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(78, "div", 25)(79, "div", 37)(80, "div", 11)(81, "label", 27);
      \u0275\u0275text(82, "Address");
      \u0275\u0275elementEnd();
      \u0275\u0275element(83, "input", 29);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(84, "div", 38)(85, "div", 11)(86, "label", 27);
      \u0275\u0275text(87, "Country");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(88, "mat-select", 30)(89, "mat-option", 31);
      \u0275\u0275text(90, "Select");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(91, "mat-option", 31);
      \u0275\u0275text(92, "United States");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(93, "mat-option", 31);
      \u0275\u0275text(94, "Canada");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(95, "mat-option", 31);
      \u0275\u0275text(96, "UK");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(97, "mat-option", 31);
      \u0275\u0275text(98, "Germany");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(99, "mat-option", 31);
      \u0275\u0275text(100, "France");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(101, "div", 38)(102, "div", 11)(103, "label", 27);
      \u0275\u0275text(104, "State");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(105, "mat-select", 30)(106, "mat-option", 31);
      \u0275\u0275text(107, "Select");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(108, "mat-option", 31);
      \u0275\u0275text(109, "California");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(110, "mat-option", 31);
      \u0275\u0275text(111, "Ontario");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(112, "mat-option", 31);
      \u0275\u0275text(113, "Bavaria");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(114, "mat-option", 31);
      \u0275\u0275text(115, "Wellington");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(116, "mat-option", 31);
      \u0275\u0275text(117, "Le-de-France");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(118, "div", 38)(119, "div", 11)(120, "label", 27);
      \u0275\u0275text(121, "City");
      \u0275\u0275elementStart(122, "span", 39);
      \u0275\u0275text(123, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(124, "mat-select", 30)(125, "mat-option", 31);
      \u0275\u0275text(126, "Select");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(127, "mat-option", 31);
      \u0275\u0275text(128, "Los Angeles");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(129, "mat-option", 31);
      \u0275\u0275text(130, "Toronto");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(131, "mat-option", 31);
      \u0275\u0275text(132, "London");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(133, "mat-option", 31);
      \u0275\u0275text(134, "Munich");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(135, "mat-option", 31);
      \u0275\u0275text(136, "Sydney");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(137, "div", 38)(138, "div", 11)(139, "label", 27);
      \u0275\u0275text(140, "Postal Code");
      \u0275\u0275elementStart(141, "span", 39);
      \u0275\u0275text(142, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(143, "input", 29);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(144, "div", 40)(145, "button", 41);
      \u0275\u0275text(146, "Cancel");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(147, "button", 42);
      \u0275\u0275text(148, "Save Changes");
      \u0275\u0275elementEnd()()()()()()()();
    }
  }, dependencies: [CommonModule, BsDatepickerModule, BsDatepickerDirective, BsDatepickerInputDirective, MatSelectModule, MatSelect, MatOption], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ProfileComponent, [{
    type: Component,
    args: [{ selector: "app-profile", imports: [CommonModule, BsDatepickerModule, MatSelectModule], template: '            <!-- Start Container  -->\n            <div class="content-two">\n\n                <!-- start row  -->\n                <div class="row justify-content-center">\n                    <div class="col-lg-10">\n                        <div class="mb-3 border-bottom pb-3">\n                            <h6 class="mb-0">Profile</h6>\n                        </div>\n                        <div class="card mb-0">\n                            <div class="card-body">\n                                <div class="d-flex align-items-center mb-3">\n                                    <span class="bg-dark avatar avatar-sm me-2 flex-shrink-0"><i class="isax isax-info-circle fs-14"></i></span>\n                                    <h6 class="fs-16 fw-semibold mb-0">General Information</h6>\n                                </div>\n                                <form>\n                                    <div class="mb-3">\n                                        <span class="text-gray-9 fw-bold mb-2 d-flex">Profile Image</span>\n                                        <div class="d-flex align-items-center">\n                                            <div class="avatar avatar-xxl border border-dashed bg-light me-3 flex-shrink-0">\n                                                <div class="position-relative d-flex align-items-center">\n                                                    <img src="assets/img/users/user-01.jpg" class="avatar avatar-xl " alt="User Img">\n                                                    <a href="javascript:void(0);" class="rounded-trash trash-top d-flex align-items-center justify-content-center"><i class="isax isax-trash"></i></a>\n                                                </div>\n                                            </div>\n                                            <div class="d-inline-flex flex-column align-items-start">\n                                                <div class="drag-upload-btn btn btn-sm btn-primary position-relative mb-2">\n                                                    <i class="isax isax-image me-1"></i>Upload Image\n                                                    <input type="file" class="form-control image-sign" multiple="">\n                                                </div>\n                                                <span class="text-gray-9 fs-12">JPG or PNG format, not exceeding 5MB.</span>\n                                            </div>\n                                        </div>\n                                    </div>\n                                    <div class="border-bottom mb-3 pb-2">\n\n										<!-- start row -->\n                                        <div class="row gx-3">\n                                            <div class="col-lg-4 col-md-6">\n                                                <div class="mb-3">\n                                                    <label class="form-label">Name <span class="text-danger">*</span></label>\n                                                    <input type="text" class="form-control">\n                                                </div>\n                                            </div><!-- end col -->\n                                            <div class="col-lg-4 col-md-6">\n                                                <div class="mb-3">\n                                                    <label class="form-label">Email <span class="text-danger">*</span></label>\n                                                    <input type="text" class="form-control">\n                                                </div>\n                                            </div><!-- end col -->\n                                            <div class="col-lg-4 col-md-6">\n                                                <div class="mb-3">\n                                                    <label class="form-label">Mobile Number <span class="text-danger">*</span></label>\n                                                    <input type="text" class="form-control">\n                                                </div>\n                                            </div><!-- end col -->\n                                            <div class="col-lg-4 col-md-6">\n                                                <div class="mb-3">\n                                                    <label class="form-label">Gender</label>\n                                                    <mat-select class="custom-mat-select select" placeholder="Select">\n                                                        <mat-option value="1">Select</mat-option>\n                                                        <mat-option value="1">Male</mat-option>\n                                                        <mat-option value="1">Female</mat-option>\n                                                    </mat-select>\n                                                </div>\n                                            </div><!-- end col -->\n                                            <div class="col-lg-4 col-md-6">\n                                                <div class="mb-3">\n                                                    <label class="form-label">DOB</label>\n                                                    <div class="input-group position-relative mb-3">\n                                                        <input type="text" class="form-control datetimepicker rounded-end" bsDatepicker placeholder="25 Mar 2025">\n                                                        <span class="input-icon-addon fs-16 text-gray-9">\n                                                            <i class="isax isax-calendar-2"></i>\n                                                        </span>\n                                                    </div>\n                                                </div>\n                                            </div><!-- end col -->\n                                        </div>\n										<!-- end row -->\n\n                                    </div>\n                                    <div class="border-bottom mb-3">\n                                        <div class="d-flex align-items-center mb-3">\n                                            <span class="bg-dark avatar avatar-sm me-2 flex-shrink-0"><i class="isax isax-info-circle fs-14"></i></span>\n                                            <h6 class="fs-16 fw-semibold mb-0">Address Information</h6>\n                                        </div>\n\n										<!-- start row -->\n                                        <div class="row gx-3">\n                                            <div class="col-lg-12">\n                                                <div class="mb-3">\n                                                    <label class="form-label">Address</label>\n                                                    <input type="text" class="form-control">\n                                                </div>\n                                            </div><!-- end col -->\n                                            <div class="col-md-6">\n                                                <div class="mb-3">\n                                                    <label class="form-label">Country</label>\n                                                    <mat-select class="custom-mat-select select" placeholder="Select">\n                                                        <mat-option value="1">Select</mat-option>\n                                                        <mat-option value="1">United States</mat-option>\n                                                        <mat-option value="1">Canada</mat-option>\n                                                        <mat-option value="1">UK</mat-option>\n                                                        <mat-option value="1">Germany</mat-option>\n                                                        <mat-option value="1">France</mat-option>\n                                                    </mat-select>\n                                                </div>\n                                            </div><!-- end col -->\n                                            <div class="col-md-6">\n                                                <div class="mb-3">\n                                                    <label class="form-label">State</label>\n                                                    <mat-select class="custom-mat-select select" placeholder="Select">\n                                                        <mat-option value="1">Select</mat-option>\n                                                        <mat-option value="1">California</mat-option>\n                                                        <mat-option value="1">Ontario</mat-option>\n                                                        <mat-option value="1">Bavaria</mat-option>\n                                                        <mat-option value="1">Wellington</mat-option>\n                                                        <mat-option value="1">Le-de-France</mat-option>\n                                                    </mat-select>\n                                                </div>\n                                            </div><!-- end col -->\n                                            <div class="col-md-6">\n                                                <div class="mb-3">\n                                                    <label class="form-label">City<span class="text-danger ms-1">*</span></label>\n                                                    <mat-select class="custom-mat-select select" placeholder="Select">\n                                                        <mat-option value="1">Select</mat-option>\n                                                        <mat-option value="1">Los Angeles</mat-option>\n                                                        <mat-option value="1">Toronto</mat-option>\n                                                        <mat-option value="1">London</mat-option>\n                                                        <mat-option value="1">Munich</mat-option>\n                                                        <mat-option value="1">Sydney</mat-option>\n                                                    </mat-select>\n                                                </div>\n                                            </div><!-- end col -->\n                                            <div class="col-md-6">\n                                                <div class="mb-3">\n                                                    <label class="form-label">Postal Code<span class="text-danger ms-1">*</span></label>\n                                                    <input type="text" class="form-control">\n                                                </div>\n                                            </div><!-- end col -->\n                                        </div>\n										<!-- end row -->\n\n                                    </div>\n                                    <div class="d-flex align-items-center justify-content-between">\n                                        <button type="button" class="btn btn-outline-white">Cancel</button>\n                                        <button type="submit" class="btn btn-primary">Save Changes</button>\n                                    </div>\n                                </form>\n                            </div><!-- end card body  -->\n                        </div><!-- end card  -->\n                    </div><!-- end col  -->\n                </div>\n                <!-- end row  -->\n\n            </div>\n            <!-- container  -->' }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ProfileComponent, { className: "ProfileComponent", filePath: "src/app/features/pages/profile/profile.component.ts", lineNumber: 12 });
})();
export {
  ProfileComponent
};
//# sourceMappingURL=chunk-ITSQNLWG.js.map

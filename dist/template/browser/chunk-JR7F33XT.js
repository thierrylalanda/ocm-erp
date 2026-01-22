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
  BsDatepickerModule
} from "./chunk-MR3VQUUR.js";
import "./chunk-F375ST7H.js";
import "./chunk-NAWYXTZ5.js";
import {
  routes
} from "./chunk-YJY3UYMJ.js";
import "./chunk-AWXYRVJS.js";
import {
  RouterLink
} from "./chunk-WOBWH5QA.js";
import "./chunk-KYBWVUSB.js";
import "./chunk-ZCJVS2AD.js";
import "./chunk-LNSVVXVJ.js";
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

// src/app/features/invantory-sales/customers/add-customer/add-customer.component.ts
var AddCustomerComponent = class _AddCustomerComponent {
  routes = routes;
  static \u0275fac = function AddCustomerComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AddCustomerComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AddCustomerComponent, selectors: [["app-add-customer"]], decls: 268, vars: 1, consts: [[1, "row"], [1, "col-md-10", "mx-auto"], [1, "d-flex", "align-items-center", "justify-content-between", "mb-3"], [3, "routerLink"], [1, "isax", "isax-arrow-left", "me-2"], ["href", "javascript:void(0);", 1, "btn", "btn-outline-white", "d-inline-flex", "align-items-center"], [1, "isax", "isax-eye", "me-1"], [1, "card"], [1, "card-body"], [1, "mb-3"], [1, "text-gray-9", "fw-bold", "mb-2", "d-flex"], [1, "d-flex", "align-items-center"], [1, "avatar", "avatar-xxl", "border", "border-dashed", "bg-light", "me-3", "flex-shrink-0"], [1, "isax", "isax-image", "text-primary", "fs-24"], [1, "d-inline-flex", "flex-column", "align-items-start"], [1, "drag-upload-btn", "btn", "btn-sm", "btn-primary", "position-relative", "mb-2"], [1, "isax", "isax-image", "me-1"], ["type", "file", "multiple", "", 1, "form-control", "image-sign"], [1, "text-gray-9"], [1, "row", "gx-3"], [1, "col-lg-4", "col-md-6"], [1, "form-label"], [1, "text-danger", "ms-1"], ["type", "text", 1, "form-control"], ["type", "email", 1, "form-control"], ["placeholder", "Select", 1, "custom-mat-select", "select"], ["value", "1"], [1, "border-top", "my-2"], [1, "row", "gx-5"], [1, "col-md-6"], [1, "mb-3", "pt-4"], [1, "col-12"], [1, "d-flex", "align-items-center", "justify-content-between", "mb-3", "pt-4"], ["href", "javascript:void(0);", 1, "d-inline-flex", "align-items-center", "text-primary", "text-decoration-underline", "fs-13"], [1, "isax", "isax-document-copy", "me-1"], [1, "d-flex", "align-items-center", "justify-content-between", "pt-4", "border-top"], ["type", "button", 1, "btn", "btn-outline-white"], ["type", "submit", 1, "btn", "btn-primary"]], template: function AddCustomerComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div")(3, "div", 2)(4, "h6")(5, "a", 3);
      \u0275\u0275element(6, "i", 4);
      \u0275\u0275text(7, "Customer");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(8, "a", 5);
      \u0275\u0275element(9, "i", 6);
      \u0275\u0275text(10, "Preview");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(11, "div", 7)(12, "div", 8)(13, "h5", 9);
      \u0275\u0275text(14, "Add Customer");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(15, "form")(16, "div", 9)(17, "h6", 10);
      \u0275\u0275text(18, "Basic Details");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(19, "div", 11)(20, "div", 12);
      \u0275\u0275element(21, "i", 13);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(22, "div", 14)(23, "div", 15);
      \u0275\u0275element(24, "i", 16);
      \u0275\u0275text(25, "Upload Image ");
      \u0275\u0275element(26, "input", 17);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(27, "span", 18);
      \u0275\u0275text(28, "JPG or PNG format, not exceeding 5MB.");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(29, "div", 19)(30, "div", 20)(31, "div", 9)(32, "label", 21);
      \u0275\u0275text(33, "Name ");
      \u0275\u0275elementStart(34, "span", 22);
      \u0275\u0275text(35, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(36, "input", 23);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(37, "div", 20)(38, "div", 9)(39, "label", 21);
      \u0275\u0275text(40, "Email ");
      \u0275\u0275elementStart(41, "span", 22);
      \u0275\u0275text(42, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(43, "input", 24);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(44, "div", 20)(45, "div", 9)(46, "label", 21);
      \u0275\u0275text(47, "Phone Number ");
      \u0275\u0275elementStart(48, "span", 22);
      \u0275\u0275text(49, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(50, "input", 23);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(51, "div", 20)(52, "div", 9)(53, "label", 21);
      \u0275\u0275text(54, "Currency");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(55, "mat-select", 25)(56, "mat-option", 26);
      \u0275\u0275text(57, "Select");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(58, "mat-option", 26);
      \u0275\u0275text(59, "Dollar");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(60, "mat-option", 26);
      \u0275\u0275text(61, "Euro");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(62, "mat-option", 26);
      \u0275\u0275text(63, "Yen");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(64, "mat-option", 26);
      \u0275\u0275text(65, "Pound");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(66, "mat-option", 26);
      \u0275\u0275text(67, "Rupee");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(68, "div", 20)(69, "div", 9)(70, "label", 21);
      \u0275\u0275text(71, "Website");
      \u0275\u0275elementEnd();
      \u0275\u0275element(72, "input", 23);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(73, "div", 20)(74, "div", 9)(75, "label", 21);
      \u0275\u0275text(76, "Notes");
      \u0275\u0275elementEnd();
      \u0275\u0275element(77, "input", 23);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(78, "div", 27)(79, "div", 28)(80, "div", 29)(81, "h6", 30);
      \u0275\u0275text(82, "Billing Address");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(83, "div", 0)(84, "div", 31)(85, "div", 9)(86, "label", 21);
      \u0275\u0275text(87, "Name");
      \u0275\u0275elementEnd();
      \u0275\u0275element(88, "input", 23);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(89, "div", 31)(90, "div", 9)(91, "label", 21);
      \u0275\u0275text(92, "Address Line 1");
      \u0275\u0275elementEnd();
      \u0275\u0275element(93, "input", 23);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(94, "div", 31)(95, "div", 9)(96, "label", 21);
      \u0275\u0275text(97, "Address Line 2");
      \u0275\u0275elementEnd();
      \u0275\u0275element(98, "input", 23);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(99, "div", 29)(100, "div", 9)(101, "label", 21);
      \u0275\u0275text(102, "Country");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(103, "mat-select", 25)(104, "mat-option", 26);
      \u0275\u0275text(105, "Select");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(106, "mat-option", 26);
      \u0275\u0275text(107, "United States");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(108, "mat-option", 26);
      \u0275\u0275text(109, "Canada");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(110, "mat-option", 26);
      \u0275\u0275text(111, "UK");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(112, "mat-option", 26);
      \u0275\u0275text(113, "Germany");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(114, "mat-option", 26);
      \u0275\u0275text(115, "France");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(116, "div", 29)(117, "div", 9)(118, "label", 21);
      \u0275\u0275text(119, "State");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(120, "mat-select", 25)(121, "mat-option", 26);
      \u0275\u0275text(122, "Select");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(123, "mat-option", 26);
      \u0275\u0275text(124, "California");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(125, "mat-option", 26);
      \u0275\u0275text(126, "Ontario");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(127, "mat-option", 26);
      \u0275\u0275text(128, "Bavaria");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(129, "mat-option", 26);
      \u0275\u0275text(130, "Wellington");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(131, "mat-option", 26);
      \u0275\u0275text(132, "Le-de-France");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(133, "div", 29)(134, "div", 9)(135, "label", 21);
      \u0275\u0275text(136, "City");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(137, "mat-select", 25)(138, "mat-option", 26);
      \u0275\u0275text(139, "Select");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(140, "mat-option", 26);
      \u0275\u0275text(141, "Los Angeles");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(142, "mat-option", 26);
      \u0275\u0275text(143, "Toronto");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(144, "mat-option", 26);
      \u0275\u0275text(145, "London");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(146, "mat-option", 26);
      \u0275\u0275text(147, "Munich");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(148, "mat-option", 26);
      \u0275\u0275text(149, "Sydney");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(150, "div", 29)(151, "div", 9)(152, "label", 21);
      \u0275\u0275text(153, "Pincode");
      \u0275\u0275elementEnd();
      \u0275\u0275element(154, "input", 23);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(155, "div", 29)(156, "div", 32)(157, "h6");
      \u0275\u0275text(158, "Shipping Address");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(159, "a", 33);
      \u0275\u0275element(160, "i", 34);
      \u0275\u0275text(161, "Copy From Billing ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(162, "div", 0)(163, "div", 31)(164, "div", 9)(165, "label", 21);
      \u0275\u0275text(166, "Name");
      \u0275\u0275elementEnd();
      \u0275\u0275element(167, "input", 23);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(168, "div", 31)(169, "div", 9)(170, "label", 21);
      \u0275\u0275text(171, "Address Line 1");
      \u0275\u0275elementEnd();
      \u0275\u0275element(172, "input", 23);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(173, "div", 31)(174, "div", 9)(175, "label", 21);
      \u0275\u0275text(176, "Address Line 2");
      \u0275\u0275elementEnd();
      \u0275\u0275element(177, "input", 23);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(178, "div", 29)(179, "div", 9)(180, "label", 21);
      \u0275\u0275text(181, "Country");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(182, "mat-select", 25)(183, "mat-option", 26);
      \u0275\u0275text(184, "Select");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(185, "mat-option", 26);
      \u0275\u0275text(186, "United States");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(187, "mat-option", 26);
      \u0275\u0275text(188, "Canada");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(189, "mat-option", 26);
      \u0275\u0275text(190, "UK");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(191, "mat-option", 26);
      \u0275\u0275text(192, "Germany");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(193, "mat-option", 26);
      \u0275\u0275text(194, "France");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(195, "div", 29)(196, "div", 9)(197, "label", 21);
      \u0275\u0275text(198, "State");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(199, "mat-select", 25)(200, "mat-option", 26);
      \u0275\u0275text(201, "Select");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(202, "mat-option", 26);
      \u0275\u0275text(203, "California");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(204, "mat-option", 26);
      \u0275\u0275text(205, "Ontario");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(206, "mat-option", 26);
      \u0275\u0275text(207, "Bavaria");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(208, "mat-option", 26);
      \u0275\u0275text(209, "Wellington");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(210, "mat-option", 26);
      \u0275\u0275text(211, "Le-de-France");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(212, "div", 29)(213, "div", 9)(214, "label", 21);
      \u0275\u0275text(215, "City");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(216, "mat-select", 25)(217, "mat-option", 26);
      \u0275\u0275text(218, "Select");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(219, "mat-option", 26);
      \u0275\u0275text(220, "Los Angeles");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(221, "mat-option", 26);
      \u0275\u0275text(222, "Toronto");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(223, "mat-option", 26);
      \u0275\u0275text(224, "London");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(225, "mat-option", 26);
      \u0275\u0275text(226, "Munich");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(227, "mat-option", 26);
      \u0275\u0275text(228, "Sydney");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(229, "div", 29)(230, "div", 9)(231, "label", 21);
      \u0275\u0275text(232, "Pincode");
      \u0275\u0275elementEnd();
      \u0275\u0275element(233, "input", 23);
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(234, "div", 27)(235, "h6", 30);
      \u0275\u0275text(236, "Banking Details");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(237, "div", 19)(238, "div", 20)(239, "div", 9)(240, "label", 21);
      \u0275\u0275text(241, "Bank Name");
      \u0275\u0275elementEnd();
      \u0275\u0275element(242, "input", 23);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(243, "div", 20)(244, "div", 9)(245, "label", 21);
      \u0275\u0275text(246, "Branch");
      \u0275\u0275elementEnd();
      \u0275\u0275element(247, "input", 23);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(248, "div", 20)(249, "div", 9)(250, "label", 21);
      \u0275\u0275text(251, "Account Holder");
      \u0275\u0275elementEnd();
      \u0275\u0275element(252, "input", 23);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(253, "div", 20)(254, "div", 9)(255, "label", 21);
      \u0275\u0275text(256, "Account Number");
      \u0275\u0275elementEnd();
      \u0275\u0275element(257, "input", 23);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(258, "div", 20)(259, "div", 9)(260, "label", 21);
      \u0275\u0275text(261, "IFSC");
      \u0275\u0275elementEnd();
      \u0275\u0275element(262, "input", 23);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(263, "div", 35)(264, "button", 36);
      \u0275\u0275text(265, "Cancel");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(266, "button", 37);
      \u0275\u0275text(267, "Create New");
      \u0275\u0275elementEnd()()()()()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(5);
      \u0275\u0275property("routerLink", ctx.routes.customerList);
    }
  }, dependencies: [MatSelectModule, MatSelect, MatOption, RouterLink, BsDatepickerModule], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AddCustomerComponent, [{
    type: Component,
    args: [{ selector: "app-add-customer", imports: [MatSelectModule, RouterLink, BsDatepickerModule], template: '<!-- start row -->\n<div class="row">\n    <div class="col-md-10 mx-auto">\n        <div>\n            <div class="d-flex align-items-center justify-content-between mb-3">\n                <h6><a [routerLink]="routes.customerList"><i class="isax isax-arrow-left me-2"></i>Customer</a></h6>\n                <a href="javascript:void(0);" class="btn btn-outline-white d-inline-flex align-items-center"><i class="isax isax-eye me-1"></i>Preview</a>\n            </div>\n            <div class="card">\n                <div class="card-body">\n                    <h5 class="mb-3">Add Customer</h5>\n                    <form>\n                        <div class="mb-3">\n                            <h6 class="text-gray-9 fw-bold mb-2 d-flex">Basic Details</h6>\n                            <div class="d-flex align-items-center">\n                                <div class="avatar avatar-xxl border border-dashed bg-light me-3 flex-shrink-0">\n                                    <i class="isax isax-image text-primary fs-24"></i>\n                                </div>\n                                <div class="d-inline-flex flex-column align-items-start">\n                                    <div class="drag-upload-btn btn btn-sm btn-primary position-relative mb-2">\n                                        <i class="isax isax-image me-1"></i>Upload Image\n                                        <input type="file" class="form-control image-sign" multiple="">\n                                    </div>\n                                    <span class="text-gray-9">JPG or PNG format, not exceeding 5MB.</span>\n                                </div>\n                            </div>\n                        </div>\n                        <div class="row gx-3">\n                            <div class="col-lg-4 col-md-6">\n                                <div class="mb-3">\n                                    <label class="form-label">Name <span class="text-danger ms-1">*</span></label>\n                                    <input type="text" class="form-control">\n                                </div>\n                            </div>\n                            <div class="col-lg-4 col-md-6">\n                                <div class="mb-3">\n                                    <label class="form-label">Email <span class="text-danger ms-1">*</span></label>\n                                    <input type="email" class="form-control">\n                                </div>\n                            </div>\n                            <div class="col-lg-4 col-md-6">\n                                <div class="mb-3">\n                                    <label class="form-label">Phone Number <span class="text-danger ms-1">*</span></label>\n                                    <input type="text" class="form-control">\n                                </div>\n                            </div>\n                            <div class="col-lg-4 col-md-6">\n                                <div class="mb-3">\n                                    <label class="form-label">Currency</label>\n                                    <mat-select class="custom-mat-select select" placeholder="Select">\n                                        <mat-option value="1">Select</mat-option>\n                                        <mat-option value="1">Dollar</mat-option>\n                                        <mat-option value="1">Euro</mat-option>\n                                        <mat-option value="1">Yen</mat-option>\n                                        <mat-option value="1">Pound</mat-option>\n                                        <mat-option value="1">Rupee</mat-option>\n                                    </mat-select>\n                                </div>\n                            </div>\n                            <div class="col-lg-4 col-md-6">\n                                <div class="mb-3">\n                                    <label class="form-label">Website</label>\n                                    <input type="text" class="form-control">\n                                </div>\n                            </div>\n                            <div class="col-lg-4 col-md-6">\n                                <div class="mb-3">\n                                    <label class="form-label">Notes</label>\n                                    <input type="text" class="form-control">\n                                </div>\n                            </div>\n                        </div>\n                        <div class="border-top my-2">\n                            <div class="row gx-5">\n                                <div class="col-md-6 ">\n                                    <h6 class="mb-3 pt-4">Billing Address</h6>\n                                    <div class="row">\n                                        <div class="col-12">\n                                            <div class="mb-3">\n                                                <label class="form-label">Name</label>\n                                                <input type="text" class="form-control">\n                                            </div>\n                                        </div>\n                                        <div class="col-12">\n                                            <div class="mb-3">\n                                                <label class="form-label">Address Line 1</label>\n                                                <input type="text" class="form-control">\n                                            </div>\n                                        </div>\n                                        <div class="col-12">\n                                            <div class="mb-3">\n                                                <label class="form-label">Address Line 2</label>\n                                                <input type="text" class="form-control">\n                                            </div>\n                                        </div>\n                                        <div class="col-md-6">\n                                            <div class="mb-3">\n                                                <label class="form-label">Country</label>\n                                                <mat-select class="custom-mat-select select" placeholder="Select">\n                                                    <mat-option value="1">Select</mat-option>\n                                                    <mat-option value="1">United States</mat-option>\n                                                    <mat-option value="1">Canada</mat-option>\n                                                    <mat-option value="1">UK</mat-option>\n                                                    <mat-option value="1">Germany</mat-option>\n                                                    <mat-option value="1">France</mat-option>\n                                                </mat-select>\n                                            </div>\n                                        </div>\n                                        <div class="col-md-6">\n                                            <div class="mb-3">\n                                                <label class="form-label">State</label>\n                                                <mat-select class="custom-mat-select select" placeholder="Select">\n                                                    <mat-option value="1">Select</mat-option>\n                                                    <mat-option value="1">California</mat-option>\n                                                    <mat-option value="1">Ontario</mat-option>\n                                                    <mat-option value="1">Bavaria</mat-option>\n                                                    <mat-option value="1">Wellington</mat-option>\n                                                    <mat-option value="1">Le-de-France</mat-option>\n                                                </mat-select>\n                                            </div>\n                                        </div>\n                                        <div class="col-md-6">\n                                            <div class="mb-3">\n                                                <label class="form-label">City</label>\n                                                <mat-select class="custom-mat-select select" placeholder="Select">\n                                                    <mat-option value="1">Select</mat-option>\n                                                    <mat-option value="1">Los Angeles</mat-option>\n                                                    <mat-option value="1">Toronto</mat-option>\n                                                    <mat-option value="1">London</mat-option>\n                                                    <mat-option value="1">Munich</mat-option>\n                                                    <mat-option value="1">Sydney</mat-option>\n                                                </mat-select>\n                                            </div>\n                                        </div>\n                                        <div class="col-md-6">\n                                            <div class="mb-3">\n                                                <label class="form-label">Pincode</label>\n                                                <input type="text" class="form-control">\n                                            </div>\n                                        </div>\n                                    </div>\n                                </div>\n                                <div class="col-md-6">\n                                    <div class="d-flex align-items-center justify-content-between mb-3 pt-4">\n                                        <h6>Shipping Address</h6>\n                                        <a href="javascript:void(0);" class="d-inline-flex align-items-center text-primary text-decoration-underline fs-13">\n                                            <i class="isax isax-document-copy me-1"></i>Copy From Billing\n                                        </a>\n                                    </div>\n                                    <div class="row">\n                                        <div class="col-12">\n                                            <div class="mb-3">\n                                                <label class="form-label">Name</label>\n                                                <input type="text" class="form-control">\n                                            </div>\n                                        </div>\n                                        <div class="col-12">\n                                            <div class="mb-3">\n                                                <label class="form-label">Address Line 1</label>\n                                                <input type="text" class="form-control">\n                                            </div>\n                                        </div>\n                                        <div class="col-12">\n                                            <div class="mb-3">\n                                                <label class="form-label">Address Line 2</label>\n                                                <input type="text" class="form-control">\n                                            </div>\n                                        </div>\n                                        <div class="col-md-6">\n                                            <div class="mb-3">\n                                                <label class="form-label">Country</label>\n                                                <mat-select class="custom-mat-select select" placeholder="Select">\n                                                    <mat-option value="1">Select</mat-option>\n                                                    <mat-option value="1">United States</mat-option>\n                                                    <mat-option value="1">Canada</mat-option>\n                                                    <mat-option value="1">UK</mat-option>\n                                                    <mat-option value="1">Germany</mat-option>\n                                                    <mat-option value="1">France</mat-option>\n                                                </mat-select>\n                                            </div>\n                                        </div>\n                                        <div class="col-md-6">\n                                            <div class="mb-3">\n                                                <label class="form-label">State</label>\n                                                <mat-select class="custom-mat-select select" placeholder="Select">\n                                                    <mat-option value="1">Select</mat-option>\n                                                    <mat-option value="1">California</mat-option>\n                                                    <mat-option value="1">Ontario</mat-option>\n                                                    <mat-option value="1">Bavaria</mat-option>\n                                                    <mat-option value="1">Wellington</mat-option>\n                                                    <mat-option value="1">Le-de-France</mat-option>\n                                                </mat-select>\n                                            </div>\n                                        </div>\n                                        <div class="col-md-6">\n                                            <div class="mb-3">\n                                                <label class="form-label">City</label>\n                                                <mat-select class="custom-mat-select select" placeholder="Select">\n                                                    <mat-option value="1">Select</mat-option>\n                                                    <mat-option value="1">Los Angeles</mat-option>\n                                                    <mat-option value="1">Toronto</mat-option>\n                                                    <mat-option value="1">London</mat-option>\n                                                    <mat-option value="1">Munich</mat-option>\n                                                    <mat-option value="1">Sydney</mat-option>\n                                                </mat-select>\n                                            </div>\n                                        </div>\n                                        <div class="col-md-6">\n                                            <div class="mb-3">\n                                                <label class="form-label">Pincode</label>\n                                                <input type="text" class="form-control">\n                                            </div>\n                                        </div>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                        <div class="border-top my-2">\n                            <h6 class="mb-3 pt-4">Banking Details</h6>\n                            <div class="row gx-3">\n                                <div class="col-lg-4 col-md-6">\n                                    <div class="mb-3">\n                                        <label class="form-label">Bank Name</label>\n                                        <input type="text" class="form-control">\n                                    </div>\n                                </div>\n                                <div class="col-lg-4 col-md-6">\n                                    <div class="mb-3">\n                                        <label class="form-label">Branch</label>\n                                        <input type="text" class="form-control">\n                                    </div>\n                                </div>\n                                <div class="col-lg-4 col-md-6">\n                                    <div class="mb-3">\n                                        <label class="form-label">Account Holder</label>\n                                        <input type="text" class="form-control">\n                                    </div>\n                                </div>\n                                <div class="col-lg-4 col-md-6">\n                                    <div class="mb-3">\n                                        <label class="form-label">Account Number</label>\n                                        <input type="text" class="form-control">\n                                    </div>\n                                </div>\n                                <div class="col-lg-4 col-md-6">\n                                    <div class="mb-3">\n                                        <label class="form-label">IFSC</label>\n                                        <input type="text" class="form-control">\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                        <div class="d-flex align-items-center justify-content-between pt-4 border-top">\n                            <button type="button" class="btn btn-outline-white">Cancel</button>\n                            <button type="submit" class="btn btn-primary">Create New</button>\n                        </div>\n                    </form>\n                </div><!-- end card body -->\n            </div><!-- end card -->\n        </div>\n    </div><!-- end col -->\n</div>\n<!-- end row -->' }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AddCustomerComponent, { className: "AddCustomerComponent", filePath: "src/app/features/invantory-sales/customers/add-customer/add-customer.component.ts", lineNumber: 13 });
})();
export {
  AddCustomerComponent
};
//# sourceMappingURL=chunk-JR7F33XT.js.map

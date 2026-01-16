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
import "./chunk-ZV6UYXXV.js";
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
} from "./chunk-U4CEU3KS.js";
import "./chunk-TXDUYLVM.js";

// src/app/features/invantory-sales/customers/edit-customer/edit-customer.component.ts
var EditCustomerComponent = class _EditCustomerComponent {
  routes = routes;
  static \u0275fac = function EditCustomerComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _EditCustomerComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _EditCustomerComponent, selectors: [["app-edit-customer"]], decls: 273, vars: 1, consts: [[1, "row"], [1, "col-md-10", "mx-auto"], [1, "d-flex", "align-items-center", "justify-content-between", "mb-3"], [3, "routerLink"], [1, "isax", "isax-arrow-left", "me-2"], ["href", "javascript:void(0);", 1, "btn", "btn-outline-white", "d-inline-flex", "align-items-center"], [1, "isax", "isax-eye", "me-1"], [1, "card"], [1, "card-body"], [1, "mb-3"], [1, "text-gray-9", "fw-bold", "mb-2", "d-flex"], [1, "text-danger"], [1, "d-flex", "align-items-center"], [1, "avatar", "avatar-xxl", "border", "border-dashed", "bg-light", "me-3", "flex-shrink-0"], [1, "position-relative", "d-flex", "align-items-center"], ["src", "assets/img/profiles/avatar-16.jpg", "alt", "User Img", 1, "avatar", "avatar-xl"], ["href", "javascript:void(0);", 1, "rounded-trash", "trash-top", "d-flex", "align-items-center", "justify-content-center"], [1, "isax", "isax-trash"], [1, "d-inline-flex", "flex-column", "align-items-start"], [1, "drag-upload-btn", "btn", "btn-sm", "btn-primary", "position-relative", "mb-2"], [1, "isax", "isax-image", "me-1"], ["type", "file", "multiple", "", 1, "form-control", "image-sign"], [1, "text-gray-9"], [1, "row", "gx-3"], [1, "col-lg-4", "col-md-6"], [1, "form-label"], ["type", "text", "value", "Mitchel Johnson", 1, "form-control"], ["type", "email", "value", "mitchel@example.com", 1, "form-control"], ["type", "text", "value", "+1 9876543210", 1, "form-control"], ["placeholder", "Dollar", 1, "custom-mat-select", "select"], ["value", "1"], ["type", "text", "value", "https://www.example.com", 1, "form-control"], ["type", "text", "value", "Ensure all details are accurate.", 1, "form-control"], [1, "border-top", "my-2"], [1, "row", "gx-5"], [1, "col-md-6"], [1, "mb-3", "pt-4"], [1, "col-12"], ["type", "text", "value", "1234, Sunset Boulevard", 1, "form-control"], ["type", "text", "value", "Los Angeles, CA 900026, USA", 1, "form-control"], ["placeholder", "United States", 1, "custom-mat-select", "select"], ["placeholder", "California", 1, "custom-mat-select", "select"], ["placeholder", "Los Angeles", 1, "custom-mat-select", "select"], ["type", "text", "value", "900026", 1, "form-control"], [1, "d-flex", "align-items-center", "justify-content-between", "mb-3", "pt-4"], ["href", "javascript:void(0);", 1, "d-inline-flex", "align-items-center", "text-primary", "text-decoration-underline", "fs-13"], [1, "isax", "isax-document-copy", "me-1"], ["type", "text", "value", "ABCD International Bank", 1, "form-control"], ["type", "text", "value", "MNOP Branch", 1, "form-control"], ["type", "text", "value", "988722543618", 1, "form-control"], ["type", "text", "value", "ABCD00001234", 1, "form-control"], [1, "d-flex", "align-items-center", "justify-content-between", "pt-4", "border-top"], ["type", "button", 1, "btn", "btn-outline-white"], ["type", "submit", 1, "btn", "btn-primary"]], template: function EditCustomerComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div")(3, "div", 2)(4, "h6")(5, "a", 3);
      \u0275\u0275element(6, "i", 4);
      \u0275\u0275text(7, "Customer");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(8, "a", 5);
      \u0275\u0275element(9, "i", 6);
      \u0275\u0275text(10, "Preview");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(11, "div", 7)(12, "div", 8)(13, "h6", 9);
      \u0275\u0275text(14, "Basic Details");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(15, "form")(16, "div", 9)(17, "span", 10);
      \u0275\u0275text(18, "Project Image ");
      \u0275\u0275elementStart(19, "span", 11);
      \u0275\u0275text(20, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(21, "div", 12)(22, "div", 13)(23, "div", 14);
      \u0275\u0275element(24, "img", 15);
      \u0275\u0275elementStart(25, "a", 16);
      \u0275\u0275element(26, "i", 17);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(27, "div", 18)(28, "div", 19);
      \u0275\u0275element(29, "i", 20);
      \u0275\u0275text(30, "Upload Image ");
      \u0275\u0275element(31, "input", 21);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(32, "span", 22);
      \u0275\u0275text(33, "JPG or PNG format, not exceeding 5MB.");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(34, "div", 23)(35, "div", 24)(36, "div", 9)(37, "label", 25);
      \u0275\u0275text(38, "Name ");
      \u0275\u0275elementStart(39, "span", 11);
      \u0275\u0275text(40, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(41, "input", 26);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(42, "div", 24)(43, "div", 9)(44, "label", 25);
      \u0275\u0275text(45, "Email ");
      \u0275\u0275elementStart(46, "span", 11);
      \u0275\u0275text(47, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(48, "input", 27);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(49, "div", 24)(50, "div", 9)(51, "label", 25);
      \u0275\u0275text(52, "Phone Number ");
      \u0275\u0275elementStart(53, "span", 11);
      \u0275\u0275text(54, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(55, "input", 28);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(56, "div", 24)(57, "div", 9)(58, "label", 25);
      \u0275\u0275text(59, "Currency");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(60, "mat-select", 29)(61, "mat-option", 30);
      \u0275\u0275text(62, "Select");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(63, "mat-option", 30);
      \u0275\u0275text(64, "Dollar");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(65, "mat-option", 30);
      \u0275\u0275text(66, "Euro");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(67, "mat-option", 30);
      \u0275\u0275text(68, "Yen");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(69, "mat-option", 30);
      \u0275\u0275text(70, "Pound");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(71, "mat-option", 30);
      \u0275\u0275text(72, "Rupee");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(73, "div", 24)(74, "div", 9)(75, "label", 25);
      \u0275\u0275text(76, "Website");
      \u0275\u0275elementEnd();
      \u0275\u0275element(77, "input", 31);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(78, "div", 24)(79, "div", 9)(80, "label", 25);
      \u0275\u0275text(81, "Notes");
      \u0275\u0275elementEnd();
      \u0275\u0275element(82, "input", 32);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(83, "div", 33)(84, "div", 34)(85, "div", 35)(86, "h6", 36);
      \u0275\u0275text(87, "Billing Address");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(88, "div", 0)(89, "div", 37)(90, "div", 9)(91, "label", 25);
      \u0275\u0275text(92, "Name");
      \u0275\u0275elementEnd();
      \u0275\u0275element(93, "input", 26);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(94, "div", 37)(95, "div", 9)(96, "label", 25);
      \u0275\u0275text(97, "Address Line 1");
      \u0275\u0275elementEnd();
      \u0275\u0275element(98, "input", 38);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(99, "div", 37)(100, "div", 9)(101, "label", 25);
      \u0275\u0275text(102, "Address Line 2");
      \u0275\u0275elementEnd();
      \u0275\u0275element(103, "input", 39);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(104, "div", 35)(105, "div", 9)(106, "label", 25);
      \u0275\u0275text(107, "Country");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(108, "mat-select", 40)(109, "mat-option", 30);
      \u0275\u0275text(110, "Select");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(111, "mat-option", 30);
      \u0275\u0275text(112, "United States");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(113, "mat-option", 30);
      \u0275\u0275text(114, "Canada");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(115, "mat-option", 30);
      \u0275\u0275text(116, "UK");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(117, "mat-option", 30);
      \u0275\u0275text(118, "Germany");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(119, "mat-option", 30);
      \u0275\u0275text(120, "France");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(121, "div", 35)(122, "div", 9)(123, "label", 25);
      \u0275\u0275text(124, "State");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(125, "mat-select", 41)(126, "mat-option", 30);
      \u0275\u0275text(127, "Select");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(128, "mat-option", 30);
      \u0275\u0275text(129, "California");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(130, "mat-option", 30);
      \u0275\u0275text(131, "Ontario");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(132, "mat-option", 30);
      \u0275\u0275text(133, "Bavaria");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(134, "mat-option", 30);
      \u0275\u0275text(135, "Wellington");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(136, "mat-option", 30);
      \u0275\u0275text(137, "Le-de-France");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(138, "div", 35)(139, "div", 9)(140, "label", 25);
      \u0275\u0275text(141, "City");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(142, "mat-select", 42)(143, "mat-option", 30);
      \u0275\u0275text(144, "Select");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(145, "mat-option", 30);
      \u0275\u0275text(146, "Los Angeles");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(147, "mat-option", 30);
      \u0275\u0275text(148, "Toronto");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(149, "mat-option", 30);
      \u0275\u0275text(150, "London");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(151, "mat-option", 30);
      \u0275\u0275text(152, "Munich");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(153, "mat-option", 30);
      \u0275\u0275text(154, "Sydney");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(155, "div", 35)(156, "div", 9)(157, "label", 25);
      \u0275\u0275text(158, "Pincode");
      \u0275\u0275elementEnd();
      \u0275\u0275element(159, "input", 43);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(160, "div", 35)(161, "div", 44)(162, "h6");
      \u0275\u0275text(163, "Shipping Address");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(164, "a", 45);
      \u0275\u0275element(165, "i", 46);
      \u0275\u0275text(166, "Copy From Billing ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(167, "div", 0)(168, "div", 37)(169, "div", 9)(170, "label", 25);
      \u0275\u0275text(171, "Name");
      \u0275\u0275elementEnd();
      \u0275\u0275element(172, "input", 26);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(173, "div", 37)(174, "div", 9)(175, "label", 25);
      \u0275\u0275text(176, "Address Line 1");
      \u0275\u0275elementEnd();
      \u0275\u0275element(177, "input", 38);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(178, "div", 37)(179, "div", 9)(180, "label", 25);
      \u0275\u0275text(181, "Address Line 2");
      \u0275\u0275elementEnd();
      \u0275\u0275element(182, "input", 39);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(183, "div", 35)(184, "div", 9)(185, "label", 25);
      \u0275\u0275text(186, "Country");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(187, "mat-select", 40)(188, "mat-option", 30);
      \u0275\u0275text(189, "Select");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(190, "mat-option", 30);
      \u0275\u0275text(191, "United States");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(192, "mat-option", 30);
      \u0275\u0275text(193, "Canada");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(194, "mat-option", 30);
      \u0275\u0275text(195, "UK");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(196, "mat-option", 30);
      \u0275\u0275text(197, "Germany");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(198, "mat-option", 30);
      \u0275\u0275text(199, "France");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(200, "div", 35)(201, "div", 9)(202, "label", 25);
      \u0275\u0275text(203, "State");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(204, "mat-select", 41)(205, "mat-option", 30);
      \u0275\u0275text(206, "Select");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(207, "mat-option", 30);
      \u0275\u0275text(208, "California");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(209, "mat-option", 30);
      \u0275\u0275text(210, "Ontario");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(211, "mat-option", 30);
      \u0275\u0275text(212, "Bavaria");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(213, "mat-option", 30);
      \u0275\u0275text(214, "Wellington");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(215, "mat-option", 30);
      \u0275\u0275text(216, "Le-de-France");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(217, "div", 35)(218, "div", 9)(219, "label", 25);
      \u0275\u0275text(220, "City");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(221, "mat-select", 42)(222, "mat-option", 30);
      \u0275\u0275text(223, "Select");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(224, "mat-option", 30);
      \u0275\u0275text(225, "Los Angeles");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(226, "mat-option", 30);
      \u0275\u0275text(227, "Toronto");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(228, "mat-option", 30);
      \u0275\u0275text(229, "London");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(230, "mat-option", 30);
      \u0275\u0275text(231, "Munich");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(232, "mat-option", 30);
      \u0275\u0275text(233, "Sydney");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(234, "div", 35)(235, "div", 9)(236, "label", 25);
      \u0275\u0275text(237, "Pincode");
      \u0275\u0275elementEnd();
      \u0275\u0275element(238, "input", 43);
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(239, "div", 33)(240, "h6", 36);
      \u0275\u0275text(241, "Banking Details");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(242, "div", 23)(243, "div", 24)(244, "div", 9)(245, "label", 25);
      \u0275\u0275text(246, "Bank Name");
      \u0275\u0275elementEnd();
      \u0275\u0275element(247, "input", 47);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(248, "div", 24)(249, "div", 9)(250, "label", 25);
      \u0275\u0275text(251, "Branch");
      \u0275\u0275elementEnd();
      \u0275\u0275element(252, "input", 48);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(253, "div", 24)(254, "div", 9)(255, "label", 25);
      \u0275\u0275text(256, "Account Holder");
      \u0275\u0275elementEnd();
      \u0275\u0275element(257, "input", 26);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(258, "div", 24)(259, "div", 9)(260, "label", 25);
      \u0275\u0275text(261, "Account Number");
      \u0275\u0275elementEnd();
      \u0275\u0275element(262, "input", 49);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(263, "div", 24)(264, "div", 9)(265, "label", 25);
      \u0275\u0275text(266, "IFSC");
      \u0275\u0275elementEnd();
      \u0275\u0275element(267, "input", 50);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(268, "div", 51)(269, "button", 52);
      \u0275\u0275text(270, "Cancel");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(271, "button", 53);
      \u0275\u0275text(272, "Save Changes");
      \u0275\u0275elementEnd()()()()()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(5);
      \u0275\u0275property("routerLink", ctx.routes.customerList);
    }
  }, dependencies: [MatSelectModule, MatSelect, MatOption, RouterLink, BsDatepickerModule], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(EditCustomerComponent, [{
    type: Component,
    args: [{ selector: "app-edit-customer", imports: [MatSelectModule, RouterLink, BsDatepickerModule], template: ' <!-- start row -->\n <div class="row">\n    <div class="col-md-10 mx-auto">\n        <div>\n            <div class="d-flex align-items-center justify-content-between mb-3">\n                <h6><a [routerLink]="routes.customerList"><i class="isax isax-arrow-left me-2"></i>Customer</a></h6>\n                <a href="javascript:void(0);" class="btn btn-outline-white d-inline-flex align-items-center"><i class="isax isax-eye me-1"></i>Preview</a>\n            </div>\n            <div class="card">\n                <div class="card-body">\n                    <h6 class="mb-3">Basic Details</h6>\n                    <form>\n                        <div class="mb-3">\n                            <span class="text-gray-9 fw-bold mb-2 d-flex">Project Image <span class="text-danger">*</span></span>\n                            <div class="d-flex align-items-center">\n                                <div class="avatar avatar-xxl border border-dashed bg-light me-3 flex-shrink-0">\n                                    <div class="position-relative d-flex align-items-center">\n                                        <img src="assets/img/profiles/avatar-16.jpg" class="avatar avatar-xl " alt="User Img">\n                                        <a href="javascript:void(0);" class="rounded-trash trash-top d-flex align-items-center justify-content-center"><i class="isax isax-trash"></i></a>\n                                    </div>\n                                </div>\n                                <div class="d-inline-flex flex-column align-items-start">\n                                    <div class="drag-upload-btn btn btn-sm btn-primary position-relative mb-2">\n                                        <i class="isax isax-image me-1"></i>Upload Image\n                                        <input type="file" class="form-control image-sign" multiple="">\n                                    </div>\n                                    <span class="text-gray-9">JPG or PNG format, not exceeding 5MB.</span>\n                                </div>\n                            </div>\n                        </div>\n                        <div class="row gx-3">\n                            <div class="col-lg-4 col-md-6">\n                                <div class="mb-3">\n                                    <label class="form-label">Name <span class="text-danger">*</span></label>\n                                    <input type="text" class="form-control" value="Mitchel Johnson">\n                                </div>\n                            </div>\n                            <div class="col-lg-4 col-md-6">\n                                <div class="mb-3">\n                                    <label class="form-label">Email <span class="text-danger">*</span></label>\n                                    <input type="email" class="form-control" value="mitchel@example.com">\n                                </div>\n                            </div>\n                            <div class="col-lg-4 col-md-6">\n                                <div class="mb-3">\n                                    <label class="form-label">Phone Number <span class="text-danger">*</span></label>\n                                    <input type="text" class="form-control" value="+1 9876543210">\n                                </div>\n                            </div>\n                            <div class="col-lg-4 col-md-6">\n                                <div class="mb-3">\n                                    <label class="form-label">Currency</label>\n                                    <mat-select class="custom-mat-select select" placeholder="Dollar">\n                                        <mat-option value="1">Select</mat-option>\n                                        <mat-option value="1">Dollar</mat-option>\n                                        <mat-option value="1">Euro</mat-option>\n                                        <mat-option value="1">Yen</mat-option>\n                                        <mat-option value="1">Pound</mat-option>\n                                        <mat-option value="1">Rupee</mat-option>\n                                    </mat-select>\n                                </div>\n                            </div>\n                            <div class="col-lg-4 col-md-6">\n                                <div class="mb-3">\n                                    <label class="form-label">Website</label>\n                                    <input type="text" class="form-control" value="https://www.example.com">\n                                </div>\n                            </div>\n                            <div class="col-lg-4 col-md-6">\n                                <div class="mb-3">\n                                    <label class="form-label">Notes</label>\n                                    <input type="text" class="form-control" value="Ensure all details are accurate.">\n                                </div>\n                            </div>\n                        </div>\n                        <div class="border-top my-2">\n                            <div class="row gx-5">\n                                <div class="col-md-6 ">\n                                    <h6 class="mb-3 pt-4">Billing Address</h6>\n                                    <div class="row">\n                                        <div class="col-12">\n                                            <div class="mb-3">\n                                                <label class="form-label">Name</label>\n                                                <input type="text" class="form-control" value="Mitchel Johnson">\n                                            </div>\n                                        </div>\n                                        <div class="col-12">\n                                            <div class="mb-3">\n                                                <label class="form-label">Address Line 1</label>\n                                                <input type="text" class="form-control" value="1234, Sunset Boulevard">\n                                            </div>\n                                        </div>\n                                        <div class="col-12">\n                                            <div class="mb-3">\n                                                <label class="form-label">Address Line 2</label>\n                                                <input type="text" class="form-control" value="Los Angeles, CA 900026, USA">\n                                            </div>\n                                        </div>\n                                        <div class="col-md-6">\n                                            <div class="mb-3">\n                                                <label class="form-label">Country</label>\n                                                <mat-select class="custom-mat-select select" placeholder="United States">\n                                                    <mat-option value="1">Select</mat-option>\n                                                    <mat-option value="1">United States</mat-option>\n                                                    <mat-option value="1">Canada</mat-option>\n                                                    <mat-option value="1">UK</mat-option>\n                                                    <mat-option value="1">Germany</mat-option>\n                                                    <mat-option value="1">France</mat-option>\n                                                </mat-select>\n                                            </div>\n                                        </div>\n                                        <div class="col-md-6">\n                                            <div class="mb-3">\n                                                <label class="form-label">State</label>\n                                                <mat-select class="custom-mat-select select" placeholder="California">\n                                                    <mat-option value="1">Select</mat-option>\n                                                    <mat-option value="1">California</mat-option>\n                                                    <mat-option value="1">Ontario</mat-option>\n                                                    <mat-option value="1">Bavaria</mat-option>\n                                                    <mat-option value="1">Wellington</mat-option>\n                                                    <mat-option value="1">Le-de-France</mat-option>\n                                                </mat-select>\n                                            </div>\n                                        </div>\n                                        <div class="col-md-6">\n                                            <div class="mb-3">\n                                                <label class="form-label">City</label>\n                                                <mat-select class="custom-mat-select select" placeholder="Los Angeles">\n                                                    <mat-option value="1">Select</mat-option>\n                                                    <mat-option value="1">Los Angeles</mat-option>\n                                                    <mat-option value="1">Toronto</mat-option>\n                                                    <mat-option value="1">London</mat-option>\n                                                    <mat-option value="1">Munich</mat-option>\n                                                    <mat-option value="1">Sydney</mat-option>\n                                                </mat-select>\n                                            </div>\n                                        </div>\n                                        <div class="col-md-6">\n                                            <div class="mb-3">\n                                                <label class="form-label">Pincode</label>\n                                                <input type="text" class="form-control" value="900026">\n                                            </div>\n                                        </div>\n                                    </div>\n                                </div>\n                                <div class="col-md-6">\n                                    <div class="d-flex align-items-center justify-content-between mb-3 pt-4">\n                                        <h6>Shipping Address</h6>\n                                        <a href="javascript:void(0);" class="d-inline-flex align-items-center text-primary text-decoration-underline fs-13">\n                                            <i class="isax isax-document-copy me-1"></i>Copy From Billing\n                                        </a>\n                                    </div>\n                                    <div class="row">\n                                        <div class="col-12">\n                                            <div class="mb-3">\n                                                <label class="form-label">Name</label>\n                                                <input type="text" class="form-control" value="Mitchel Johnson">\n                                            </div>\n                                        </div>\n                                        <div class="col-12">\n                                            <div class="mb-3">\n                                                <label class="form-label">Address Line 1</label>\n                                                <input type="text" class="form-control" value="1234, Sunset Boulevard">\n                                            </div>\n                                        </div>\n                                        <div class="col-12">\n                                            <div class="mb-3">\n                                                <label class="form-label">Address Line 2</label>\n                                                <input type="text" class="form-control" value="Los Angeles, CA 900026, USA">\n                                            </div>\n                                        </div>\n                                        <div class="col-md-6">\n                                            <div class="mb-3">\n                                                <label class="form-label">Country</label>\n                                                <mat-select class="custom-mat-select select" placeholder="United States">\n                                                    <mat-option value="1">Select</mat-option>\n                                                    <mat-option value="1">United States</mat-option>\n                                                    <mat-option value="1">Canada</mat-option>\n                                                    <mat-option value="1">UK</mat-option>\n                                                    <mat-option value="1">Germany</mat-option>\n                                                    <mat-option value="1">France</mat-option>\n                                                </mat-select>\n                                            </div>\n                                        </div>\n                                        <div class="col-md-6">\n                                            <div class="mb-3">\n                                                <label class="form-label">State</label>\n                                                <mat-select class="custom-mat-select select" placeholder="California">\n                                                    <mat-option value="1">Select</mat-option>\n                                                    <mat-option value="1">California</mat-option>\n                                                    <mat-option value="1">Ontario</mat-option>\n                                                    <mat-option value="1">Bavaria</mat-option>\n                                                    <mat-option value="1">Wellington</mat-option>\n                                                    <mat-option value="1">Le-de-France</mat-option>\n                                                </mat-select>\n                                            </div>\n                                        </div>\n                                        <div class="col-md-6">\n                                            <div class="mb-3">\n                                                <label class="form-label">City</label>\n                                                <mat-select class="custom-mat-select select" placeholder="Los Angeles">\n                                                    <mat-option value="1">Select</mat-option>\n                                                    <mat-option value="1">Los Angeles</mat-option>\n                                                    <mat-option value="1">Toronto</mat-option>\n                                                    <mat-option value="1">London</mat-option>\n                                                    <mat-option value="1">Munich</mat-option>\n                                                    <mat-option value="1">Sydney</mat-option>\n                                                </mat-select>\n                                            </div>\n                                        </div>\n                                        <div class="col-md-6">\n                                            <div class="mb-3">\n                                                <label class="form-label">Pincode</label>\n                                                <input type="text" class="form-control" value="900026">\n                                            </div>\n                                        </div>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                        <div class="border-top my-2">\n                            <h6 class="mb-3 pt-4">Banking Details</h6>\n                            <div class="row gx-3">\n                                <div class="col-lg-4 col-md-6">\n                                    <div class="mb-3">\n                                        <label class="form-label">Bank Name</label>\n                                        <input type="text" class="form-control" value="ABCD International Bank">\n                                    </div>\n                                </div>\n                                <div class="col-lg-4 col-md-6">\n                                    <div class="mb-3">\n                                        <label class="form-label">Branch</label>\n                                        <input type="text" class="form-control" value="MNOP Branch">\n                                    </div>\n                                </div>\n                                <div class="col-lg-4 col-md-6">\n                                    <div class="mb-3">\n                                        <label class="form-label">Account Holder</label>\n                                        <input type="text" class="form-control" value="Mitchel Johnson">\n                                    </div>\n                                </div>\n                                <div class="col-lg-4 col-md-6">\n                                    <div class="mb-3">\n                                        <label class="form-label">Account Number</label>\n                                        <input type="text" class="form-control" value="988722543618">\n                                    </div>\n                                </div>\n                                <div class="col-lg-4 col-md-6">\n                                    <div class="mb-3">\n                                        <label class="form-label">IFSC</label>\n                                        <input type="text" class="form-control" value="ABCD00001234">\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                        <div class="d-flex align-items-center justify-content-between pt-4 border-top">\n                            <button type="button" class="btn btn-outline-white">Cancel</button>\n                            <button type="submit" class="btn btn-primary">Save Changes</button>\n                        </div>\n                    </form>\n                </div><!-- end card body -->\n            </div><!-- end card -->\n        </div>\n    </div><!-- end col -->\n</div>\n<!-- end row -->' }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(EditCustomerComponent, { className: "EditCustomerComponent", filePath: "src/app/features/invantory-sales/customers/edit-customer/edit-customer.component.ts", lineNumber: 13 });
})();
export {
  EditCustomerComponent
};
//# sourceMappingURL=chunk-LAKBKZPM.js.map

import {
  Component,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵdefineComponent,
  ɵɵdomElement,
  ɵɵdomElementEnd,
  ɵɵdomElementStart,
  ɵɵtext
} from "./chunk-HKG6HBOI.js";
import "./chunk-TXDUYLVM.js";

// src/app/modules/setting/presentation/pages/finance-settings/payment-methods/payment-methods.component.ts
var PaymentMethodsComponent = class _PaymentMethodsComponent {
  static \u0275fac = function PaymentMethodsComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _PaymentMethodsComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _PaymentMethodsComponent, selectors: [["app-payment-methods"]], decls: 231, vars: 0, consts: [[1, ""], [1, "mb-0"], [1, "pb-3", "border-bottom", "mb-3"], [1, "card-body"], [1, "row", "align-items-center", "saas-settings"], [1, "col-md-6"], [1, "card", "shadow-none"], [1, "d-flex", "align-items-center", "justify-content-between", "mb-2"], ["src", "assets/img/icons/paypal-name.svg", "alt", "image"], [1, "badge", "badge-soft-success", "d-inline-flex", "align-items-center", "ms-2"], [1, "badge-dot", "bg-success", "me-1"], [1, "text-truncate", "line-clamb-2"], [1, "card-footer", "bg-light", "d-flex", "align-items-center", "justify-content-between"], [1, "d-flex", "align-items-center"], ["href", "javascript:void(0);", "data-bs-toggle", "modal", "data-bs-target", "#delete_modal", 1, "btn", "btn-sm", "btn-dark", "rounded-2", "d-inline-flex", "align-items-center", "justify-content-center", "p-1", "me-2"], [1, "isax", "isax-trash"], ["href", "javascript:void(0);", "data-bs-toggle", "modal", "data-bs-target", "#add_paypall", 1, "btn", "btn-sm", "btn-dark", "rounded-2", "d-inline-flex", "align-items-center", "justify-content-center", "p-1"], [1, "isax", "isax-setting-2"], [1, "form-check", "form-switch"], ["type", "checkbox", "checked", "", 1, "form-check-input", "m-0"], ["src", "assets/img/icons/stripe-icon.svg", "alt", "image"], ["href", "javascript:void(0);", "data-bs-toggle", "modal", "data-bs-target", "#add_strip", 1, "btn", "btn-sm", "btn-dark", "rounded-2", "d-inline-flex", "align-items-center", "justify-content-center", "p-1"], ["src", "assets/img/icons/razorpay-icon.svg", "alt", "image"], ["href", "javascript:void(0);", "data-bs-toggle", "modal", "data-bs-target", "#add_razorpay", 1, "btn", "btn-sm", "btn-dark", "rounded-2", "d-inline-flex", "align-items-center", "justify-content-center", "p-1"], ["src", "assets/img/icons/applepay-icon.svg", "alt", "image"], [1, "badge", "badge-soft-primary", "d-inline-flex", "align-items-center", "ms-2"], [1, "badge-dot", "bg-dark", "me-1"], ["href", "javascript:void(0);", "data-bs-toggle", "modal", "data-bs-target", "#add_applepay", 1, "btn", "btn-sm", "btn-dark", "rounded-2", "d-inline-flex", "align-items-center", "justify-content-center", "p-1"], ["id", "add_paypall", 1, "modal", "fade"], [1, "modal-dialog", "modal-dialog-centered"], [1, "modal-content"], [1, "modal-header"], [1, "modal-title"], ["type", "button", "data-bs-dismiss", "modal", "aria-label", "Close", 1, "btn-close", "btn-close-modal", "custom-btn-close"], [1, "fa-solid", "fa-x"], [1, "modal-body"], [1, "mb-3"], [1, "form-label"], [1, "text-danger"], ["type", "text", 1, "form-control"], [1, "modal-footer", "d-flex", "align-items-center", "justify-content-between", "gap-1"], ["type", "button", "data-bs-dismiss", "modal", 1, "btn", "btn-outline-white"], ["type", "submit", 1, "btn", "btn-primary"], ["id", "add_strip", 1, "modal", "fade"], ["type", "submit", "data-bs-dismiss", "modal", 1, "btn", "btn-primary"], ["id", "add_razorpay", 1, "modal", "fade"], ["id", "add_applepay", 1, "modal", "fade"], ["id", "delete_modal", 1, "modal", "fade"], [1, "modal-dialog", "modal-dialog-centered", "modal-sm"], [1, "modal-body", "text-center"], ["src", "assets/img/icons/delete.svg", "alt", "img"], [1, "mb-1"], [1, "d-flex", "justify-content-center"], ["href", "javascript:void(0);", "data-bs-dismiss", "modal", 1, "btn", "btn-outline-white", "me-3"], ["href", "javascript:void(0);", "data-bs-dismiss", "modal", 1, "btn", "btn-primary"]], template: function PaymentMethodsComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275domElementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "h6", 1);
      \u0275\u0275text(4, "Payments Method");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(5, "form")(6, "div", 3)(7, "div", 4)(8, "div", 5)(9, "div", 6)(10, "div", 3)(11, "div", 7)(12, "span");
      \u0275\u0275domElement(13, "img", 8);
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(14, "span", 9);
      \u0275\u0275domElement(15, "span", 10);
      \u0275\u0275text(16, "Connected");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(17, "p", 11);
      \u0275\u0275text(18, "PayPal is the faster, safer way to send and receive money ");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(19, "div", 12)(20, "div", 13)(21, "a", 14);
      \u0275\u0275domElement(22, "i", 15);
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(23, "a", 16);
      \u0275\u0275domElement(24, "i", 17);
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(25, "div", 18);
      \u0275\u0275domElement(26, "input", 19);
      \u0275\u0275domElementEnd()()()();
      \u0275\u0275domElementStart(27, "div", 5)(28, "div", 6)(29, "div", 3)(30, "div", 7)(31, "span");
      \u0275\u0275domElement(32, "img", 20);
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(33, "span", 9);
      \u0275\u0275domElement(34, "span", 10);
      \u0275\u0275text(35, "Connected");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(36, "p", 11);
      \u0275\u0275text(37, "APIs to accept cards, manage subscriptions, send money. ");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(38, "div", 12)(39, "div", 13)(40, "a", 14);
      \u0275\u0275domElement(41, "i", 15);
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(42, "a", 21);
      \u0275\u0275domElement(43, "i", 17);
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(44, "div", 18);
      \u0275\u0275domElement(45, "input", 19);
      \u0275\u0275domElementEnd()()()();
      \u0275\u0275domElementStart(46, "div", 5)(47, "div", 6)(48, "div", 3)(49, "div", 7)(50, "span");
      \u0275\u0275domElement(51, "img", 22);
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(52, "span", 9);
      \u0275\u0275domElement(53, "span", 10);
      \u0275\u0275text(54, "Connected");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(55, "p", 11);
      \u0275\u0275text(56, "Razorpay is an India's all in one payment solution. ");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(57, "div", 12)(58, "div", 13)(59, "a", 14);
      \u0275\u0275domElement(60, "i", 15);
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(61, "a", 23);
      \u0275\u0275domElement(62, "i", 17);
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(63, "div", 18);
      \u0275\u0275domElement(64, "input", 19);
      \u0275\u0275domElementEnd()()()();
      \u0275\u0275domElementStart(65, "div", 5)(66, "div", 6)(67, "div", 3)(68, "div", 7)(69, "span");
      \u0275\u0275domElement(70, "img", 24);
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(71, "span", 25);
      \u0275\u0275domElement(72, "span", 26);
      \u0275\u0275text(73, "Not Connected");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(74, "p", 11);
      \u0275\u0275text(75, "PayPal is the faster, safer way to send and");
      \u0275\u0275domElement(76, "br");
      \u0275\u0275text(77, " receive money ");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(78, "div", 12)(79, "div", 13)(80, "a", 14);
      \u0275\u0275domElement(81, "i", 15);
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(82, "a", 27);
      \u0275\u0275domElement(83, "i", 17);
      \u0275\u0275domElementEnd()()()()()()()()()();
      \u0275\u0275domElementStart(84, "div", 28)(85, "div", 29)(86, "div", 30)(87, "div", 31)(88, "h4", 32);
      \u0275\u0275text(89, "PayPal");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(90, "button", 33);
      \u0275\u0275domElement(91, "i", 34);
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(92, "form")(93, "div", 35)(94, "div", 36)(95, "label", 37);
      \u0275\u0275text(96, "From Email Address ");
      \u0275\u0275domElementStart(97, "span", 38);
      \u0275\u0275text(98, "*");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElement(99, "input", 39);
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(100, "div", 36)(101, "label", 37);
      \u0275\u0275text(102, "API Key ");
      \u0275\u0275domElementStart(103, "span", 38);
      \u0275\u0275text(104, "*");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElement(105, "input", 39);
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(106, "div", 1)(107, "label", 37);
      \u0275\u0275text(108, "Secret Key ");
      \u0275\u0275domElementStart(109, "span", 38);
      \u0275\u0275text(110, "*");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElement(111, "input", 39);
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(112, "div", 40)(113, "button", 41);
      \u0275\u0275text(114, "Cancel");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(115, "button", 42);
      \u0275\u0275text(116, "Submit");
      \u0275\u0275domElementEnd()()()()()();
      \u0275\u0275domElementStart(117, "div", 43)(118, "div", 29)(119, "div", 30)(120, "div", 31)(121, "h4", 32);
      \u0275\u0275text(122, "Strip");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(123, "button", 33);
      \u0275\u0275domElement(124, "i", 34);
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(125, "form")(126, "div", 35)(127, "div", 36)(128, "label", 37);
      \u0275\u0275text(129, "From Email Address ");
      \u0275\u0275domElementStart(130, "span", 38);
      \u0275\u0275text(131, "*");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElement(132, "input", 39);
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(133, "div", 36)(134, "label", 37);
      \u0275\u0275text(135, "API Key ");
      \u0275\u0275domElementStart(136, "span", 38);
      \u0275\u0275text(137, "*");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElement(138, "input", 39);
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(139, "div", 1)(140, "label", 37);
      \u0275\u0275text(141, "Secret Key ");
      \u0275\u0275domElementStart(142, "span", 38);
      \u0275\u0275text(143, "*");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElement(144, "input", 39);
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(145, "div", 40)(146, "button", 41);
      \u0275\u0275text(147, "Cancel");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(148, "button", 44);
      \u0275\u0275text(149, "Submit");
      \u0275\u0275domElementEnd()()()()()();
      \u0275\u0275domElementStart(150, "div", 45)(151, "div", 29)(152, "div", 30)(153, "div", 31)(154, "h4", 32);
      \u0275\u0275text(155, "Razorpay");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(156, "button", 33);
      \u0275\u0275domElement(157, "i", 34);
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(158, "form")(159, "div", 35)(160, "div", 36)(161, "label", 37);
      \u0275\u0275text(162, "From Email Address ");
      \u0275\u0275domElementStart(163, "span", 38);
      \u0275\u0275text(164, "*");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElement(165, "input", 39);
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(166, "div", 36)(167, "label", 37);
      \u0275\u0275text(168, "API Key ");
      \u0275\u0275domElementStart(169, "span", 38);
      \u0275\u0275text(170, "*");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElement(171, "input", 39);
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(172, "div", 1)(173, "label", 37);
      \u0275\u0275text(174, "Secret Key ");
      \u0275\u0275domElementStart(175, "span", 38);
      \u0275\u0275text(176, "*");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElement(177, "input", 39);
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(178, "div", 40)(179, "button", 41);
      \u0275\u0275text(180, "Cancel");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(181, "button", 44);
      \u0275\u0275text(182, "Submit");
      \u0275\u0275domElementEnd()()()()()();
      \u0275\u0275domElementStart(183, "div", 46)(184, "div", 29)(185, "div", 30)(186, "div", 31)(187, "h4", 32);
      \u0275\u0275text(188, "Apple Pay");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(189, "button", 33);
      \u0275\u0275domElement(190, "i", 34);
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(191, "form")(192, "div", 35)(193, "div", 36)(194, "label", 37);
      \u0275\u0275text(195, "From Email Address ");
      \u0275\u0275domElementStart(196, "span", 38);
      \u0275\u0275text(197, "*");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElement(198, "input", 39);
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(199, "div", 36)(200, "label", 37);
      \u0275\u0275text(201, "API Key ");
      \u0275\u0275domElementStart(202, "span", 38);
      \u0275\u0275text(203, "*");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElement(204, "input", 39);
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(205, "div", 1)(206, "label", 37);
      \u0275\u0275text(207, "Secret Key ");
      \u0275\u0275domElementStart(208, "span", 38);
      \u0275\u0275text(209, "*");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElement(210, "input", 39);
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(211, "div", 40)(212, "button", 41);
      \u0275\u0275text(213, "Cancel");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(214, "button", 44);
      \u0275\u0275text(215, "Submit");
      \u0275\u0275domElementEnd()()()()()();
      \u0275\u0275domElementStart(216, "div", 47)(217, "div", 48)(218, "div", 30)(219, "div", 49)(220, "div", 36);
      \u0275\u0275domElement(221, "img", 50);
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(222, "h6", 51);
      \u0275\u0275text(223, "Delete Payment Method");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(224, "p", 36);
      \u0275\u0275text(225, "Are you sure, you want to delete payment method?");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(226, "div", 52)(227, "a", 53);
      \u0275\u0275text(228, "Cancel");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(229, "a", 54);
      \u0275\u0275text(230, "Yes, Delete");
      \u0275\u0275domElementEnd()()()()()();
    }
  }, encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PaymentMethodsComponent, [{
    type: Component,
    args: [{ selector: "app-payment-methods", imports: [], template: `<div class="">
    <div class="mb-0">
        <div class="pb-3 border-bottom mb-3">
            <h6 class="mb-0">Payments Method</h6>
        </div>
        <form >
            <div class="card-body">
                <!-- start row -->
                <div class="row align-items-center saas-settings">
                    <div class="col-md-6">
                        <div class="card shadow-none">
                            <div class="card-body">
                                    <div class="d-flex align-items-center justify-content-between mb-2">
                                        <span><img src="assets/img/icons/paypal-name.svg" alt="image"></span>
                                        <span class="badge badge-soft-success d-inline-flex align-items-center ms-2"><span class="badge-dot bg-success me-1"></span>Connected</span>
                                    </div>
                                <p class="text-truncate line-clamb-2">PayPal is the faster, safer way to send and receive money </p>
                            </div> <!-- end card body -->
                            <div class="card-footer bg-light d-flex align-items-center justify-content-between ">
                                <div class="d-flex align-items-center">
                                    <a class="btn btn-sm btn-dark rounded-2 d-inline-flex align-items-center justify-content-center p-1 me-2" href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#delete_modal"><i class="isax isax-trash"></i></a>
                                    <a class="btn btn-sm btn-dark rounded-2 d-inline-flex align-items-center justify-content-center p-1" href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#add_paypall"><i class="isax isax-setting-2"></i></a>
                                </div>
                                <div class="form-check form-switch">
                                    <input class="form-check-input m-0" type="checkbox" checked="">
                                </div>
                            </div> <!-- end card footer -->
                        </div> <!-- end card -->
                    </div> <!-- end col -->

                    <div class="col-md-6">
                        <div class="card shadow-none">
                            <div class="card-body">
                                    <div class="d-flex align-items-center justify-content-between mb-2">
                                        <span><img src="assets/img/icons/stripe-icon.svg" alt="image"></span>
                                        <span class="badge badge-soft-success d-inline-flex align-items-center ms-2"><span class="badge-dot bg-success me-1"></span>Connected</span>
                                    </div>
                                <p class="text-truncate line-clamb-2">APIs to accept cards, manage subscriptions, send money. </p>
                            </div> <!-- end card body -->
                            <div class="card-footer bg-light d-flex align-items-center justify-content-between ">
                                <div class="d-flex align-items-center">
                                    <a class="btn btn-sm btn-dark rounded-2 d-inline-flex align-items-center justify-content-center p-1 me-2" href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#delete_modal"><i class="isax isax-trash"></i></a>
                                    <a class="btn btn-sm btn-dark rounded-2 d-inline-flex align-items-center justify-content-center p-1" href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#add_strip"><i class="isax isax-setting-2"></i></a>
                                </div>
                                <div class="form-check form-switch">
                                    <input class="form-check-input m-0" type="checkbox" checked="">
                                </div>
                            </div> <!-- end card footer -->
                        </div> <!-- end card -->
                    </div> <!-- end col -->

                    <div class="col-md-6">
                        <div class="card shadow-none">
                            <div class="card-body">
                                    <div class="d-flex align-items-center justify-content-between mb-2">
                                        <span><img src="assets/img/icons/razorpay-icon.svg" alt="image"></span>
                                        <span class="badge badge-soft-success d-inline-flex align-items-center ms-2"><span class="badge-dot bg-success me-1"></span>Connected</span>
                                    </div>
                                <p class="text-truncate line-clamb-2">Razorpay is an India's all in one payment solution. </p>
                            </div> <!-- end card body -->
                            <div class="card-footer bg-light d-flex align-items-center justify-content-between ">
                                <div class="d-flex align-items-center">
                                    <a class="btn btn-sm btn-dark rounded-2 d-inline-flex align-items-center justify-content-center p-1 me-2" href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#delete_modal"><i class="isax isax-trash"></i></a>
                                    <a class="btn btn-sm btn-dark rounded-2 d-inline-flex align-items-center justify-content-center p-1" href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#add_razorpay"><i class="isax isax-setting-2"></i></a>
                                </div>
                                <div class="form-check form-switch">
                                    <input class="form-check-input m-0" type="checkbox" checked="">
                                </div>
                            </div> <!-- end card footer -->
                        </div> <!-- end card -->
                    </div> <!-- end col -->

                    <div class="col-md-6">
                        <div class="card shadow-none">
                            <div class="card-body">
                                <div class="d-flex align-items-center justify-content-between mb-2">
                                    <span><img src="assets/img/icons/applepay-icon.svg" alt="image"></span>
                                    <span class="badge badge-soft-primary d-inline-flex align-items-center ms-2"><span class="badge-dot bg-dark me-1"></span>Not Connected</span>
                                </div>
                                <p class="text-truncate line-clamb-2">PayPal is the faster, safer way to send and<br> receive money </p>
                            </div> <!-- end col -->
                            <div class="card-footer bg-light d-flex align-items-center justify-content-between ">
                                <div class="d-flex align-items-center">
                                    <a class="btn btn-sm btn-dark rounded-2 d-inline-flex align-items-center justify-content-center p-1 me-2" href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#delete_modal"><i class="isax isax-trash"></i></a>
                                    <a class="btn btn-sm btn-dark rounded-2 d-inline-flex align-items-center justify-content-center p-1" href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#add_applepay"><i class="isax isax-setting-2"></i></a>
                                </div>
                            </div>  <!-- end card footer -->
                        </div> <!-- end card -->
                    </div> <!-- end col -->
                </div>
                <!-- end row -->
            </div> <!-- end card body -->
        </form>
    </div> 
</div> <!-- end col -->


		<!-- Start Add Modal  -->
		<div id="add_paypall" class="modal fade">
			<div class="modal-dialog modal-dialog-centered">
				<div class="modal-content">
					<div class="modal-header">
						<h4 class="modal-title">PayPal</h4>
						<button type="button" class="btn-close btn-close-modal custom-btn-close" data-bs-dismiss="modal" aria-label="Close"><i class="fa-solid fa-x"></i></button>
					</div>
					<form>
						<div class="modal-body">
							<div class="mb-3">
								<label class="form-label">From Email Address <span class="text-danger">*</span></label>
								<input type="text" class="form-control">
							</div>
							<div class="mb-3">
								<label class="form-label">API Key <span class="text-danger">*</span></label>
								<input type="text" class="form-control">                           
							</div>
							<div class="mb-0">
								<label class="form-label">Secret Key <span class="text-danger">*</span></label>
								<input type="text" class="form-control">                           
							</div>
						</div>
						<div class="modal-footer d-flex align-items-center justify-content-between gap-1">
							<button type="button" class="btn btn-outline-white" data-bs-dismiss="modal">Cancel</button>
							<button type="submit" class="btn btn-primary">Submit</button>
						</div>
					</form>
				</div>
			</div>
		</div>
		<!-- End Add Modal -->

		<!-- Start Add Modal  -->
		<div id="add_strip" class="modal fade">
			<div class="modal-dialog modal-dialog-centered">
				<div class="modal-content">
					<div class="modal-header">
						<h4 class="modal-title">Strip</h4>
						<button type="button" class="btn-close btn-close-modal custom-btn-close" data-bs-dismiss="modal" aria-label="Close"><i class="fa-solid fa-x"></i></button>
					</div>
					<form>
						<div class="modal-body">
							<div class="mb-3">
								<label class="form-label">From Email Address <span class="text-danger">*</span></label>
								<input type="text" class="form-control">
							</div>
							<div class="mb-3">
								<label class="form-label">API Key <span class="text-danger">*</span></label>
								<input type="text" class="form-control">                           
							</div>
							<div class="mb-0">
								<label class="form-label">Secret Key <span class="text-danger">*</span></label>
								<input type="text" class="form-control">                           
							</div>
						</div>
						<div class="modal-footer d-flex align-items-center justify-content-between gap-1">
							<button type="button" class="btn btn-outline-white" data-bs-dismiss="modal">Cancel</button>
							<button type="submit" class="btn btn-primary" data-bs-dismiss="modal">Submit</button>
						</div>
					</form>
				</div>
			</div>
		</div>
		<!-- End Add Modal -->

		<!-- Start Add Modal  -->
		<div id="add_razorpay" class="modal fade">
			<div class="modal-dialog modal-dialog-centered">
				<div class="modal-content">
					<div class="modal-header">
						<h4 class="modal-title">Razorpay</h4>
						<button type="button" class="btn-close btn-close-modal custom-btn-close" data-bs-dismiss="modal" aria-label="Close"><i class="fa-solid fa-x"></i></button>
					</div>
					<form>
						<div class="modal-body">
							<div class="mb-3">
								<label class="form-label">From Email Address <span class="text-danger">*</span></label>
								<input type="text" class="form-control">
							</div>
							<div class="mb-3">
								<label class="form-label">API Key <span class="text-danger">*</span></label>
								<input type="text" class="form-control">                           
							</div>
							<div class="mb-0">
								<label class="form-label">Secret Key <span class="text-danger">*</span></label>
								<input type="text" class="form-control">                           
							</div>
						</div>
						<div class="modal-footer d-flex align-items-center justify-content-between gap-1">
							<button type="button" class="btn btn-outline-white" data-bs-dismiss="modal">Cancel</button>
							<button type="submit" class="btn btn-primary" data-bs-dismiss="modal">Submit</button>
						</div>
					</form>
				</div>
			</div>
		</div>
		<!-- End Add Modal -->

		<!-- Start Add Modal  -->
		<div id="add_applepay" class="modal fade">
			<div class="modal-dialog modal-dialog-centered">
				<div class="modal-content">
					<div class="modal-header">
						<h4 class="modal-title">Apple Pay</h4>
						<button type="button" class="btn-close btn-close-modal custom-btn-close" data-bs-dismiss="modal" aria-label="Close"><i class="fa-solid fa-x"></i></button>
					</div>
					<form>
						<div class="modal-body">
							<div class="mb-3">
								<label class="form-label">From Email Address <span class="text-danger">*</span></label>
								<input type="text" class="form-control">
							</div>
							<div class="mb-3">
								<label class="form-label">API Key <span class="text-danger">*</span></label>
								<input type="text" class="form-control">                           
							</div>
							<div class="mb-0">
								<label class="form-label">Secret Key <span class="text-danger">*</span></label>
								<input type="text" class="form-control">                           
							</div>
						</div>
						<div class="modal-footer d-flex align-items-center justify-content-between gap-1">
							<button type="button" class="btn btn-outline-white" data-bs-dismiss="modal">Cancel</button>
							<button type="submit" class="btn btn-primary" data-bs-dismiss="modal">Submit</button>
						</div>
					</form>
				</div>
			</div>
		</div>
		<!-- End Add Modal -->

		<!-- Start Delete Modal  -->
        <div class="modal fade" id="delete_modal">
            <div class="modal-dialog modal-dialog-centered modal-sm">
                <div class="modal-content">
                    <div class="modal-body text-center">
                        <div class="mb-3">
                            <img src="assets/img/icons/delete.svg" alt="img">
                        </div>
                        <h6 class="mb-1">Delete Payment Method</h6>
                        <p class="mb-3">Are you sure, you want to delete payment method?</p>
                        <div class="d-flex justify-content-center">
                            <a href="javascript:void(0);" class="btn btn-outline-white me-3" data-bs-dismiss="modal">Cancel</a>
                            <a href="javascript:void(0);" class="btn btn-primary" data-bs-dismiss="modal">Yes, Delete</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- End Delete Modal  -->` }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(PaymentMethodsComponent, { className: "PaymentMethodsComponent", filePath: "src/app/modules/setting/presentation/pages/finance-settings/payment-methods/payment-methods.component.ts", lineNumber: 9 });
})();
export {
  PaymentMethodsComponent
};
//# sourceMappingURL=chunk-OFRXMCRC.js.map

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

// src/app/modules/setting/presentation/pages/system-settings/sms-gateways/sms-gateways.component.ts
var SmsGatewaysComponent = class _SmsGatewaysComponent {
  static \u0275fac = function SmsGatewaysComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _SmsGatewaysComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SmsGatewaysComponent, selectors: [["app-sms-gateways"]], decls: 184, vars: 0, consts: [[1, ""], [1, "pb-3", "d-flex", "align-items-center", "justify-content-between", "border-bottom", "mb-3"], [1, "mb-0"], [1, "row"], [1, "col-md-6", "d-flex"], [1, "card", "flex-fill"], [1, "card-body"], [1, "d-flex", "align-items-center", "justify-content-between", "mb-3", "gap-2", "flex-wrap"], [1, "d-flex", "align-items-center"], ["src", "assets/img/icons/nexmo-logo-icon.svg", "alt", "img", 1, "img-fluid"], [1, "badge", "badge-soft-success", "d-flex", "align-items-center"], [1, "badge-dot", "bg-success", "me-1"], [1, "fs-13"], [1, "card-footer"], [1, "d-flex", "justify-content-between", "align-items-center"], ["href", "javascript:void(0);", "data-bs-toggle", "modal", "data-bs-target", "#delete_modal", 1, "btn", "btn-sm", "btn-dark", "rounded-2", "d-inline-flex", "align-items-center", "justify-content-center", "p-1", "me-2"], [1, "isax", "isax-trash", "fs-14"], ["href", "javascript:void(0);", "data-bs-toggle", "modal", "data-bs-target", "#add_nexmo", 1, "btn", "btn-sm", "btn-dark", "rounded-2", "d-inline-flex", "align-items-center", "justify-content-center", "p-1", "me-2"], [1, "isax", "isax-setting-2", "fs-14"], [1, "form-check", "form-switch"], ["type", "checkbox", "role", "switch", "checked", "", 1, "form-check-input"], ["src", "assets/img/icons/two-factor-icon.svg", "alt", "img", 1, "img-fluid"], ["href", "javascript:void(0);", "data-bs-toggle", "modal", "data-bs-target", "#add_2factor", 1, "btn", "btn-sm", "btn-dark", "rounded-2", "d-inline-flex", "align-items-center", "justify-content-center", "p-1", "me-2"], ["src", "assets/img/icons/twilio-icon.svg", "alt", "img", 1, "img-fluid"], [1, "badge", "badge-soft-primary", "d-flex", "align-items-center", "text-gray-9"], [1, "badge-dot", "bg-dark", "me-1"], ["href", "javascript:void(0);", "data-bs-toggle", "modal", "data-bs-target", "#add_twilio", 1, "btn", "btn-sm", "btn-dark", "rounded-2", "d-inline-flex", "align-items-center", "justify-content-center", "p-1", "me-2"], ["id", "add_nexmo", 1, "modal", "fade"], [1, "modal-dialog", "modal-dialog-centered", "modal-md"], [1, "modal-content"], [1, "modal-header"], ["type", "button", "data-bs-dismiss", "modal", "aria-label", "Close", 1, "btn-close", "btn-close-modal", "custom-btn-close"], [1, "fa-solid", "fa-x"], [1, "modal-body"], [1, "mb-3"], [1, "form-label"], [1, "text-danger"], ["type", "text", 1, "form-control"], [1, "modal-footer", "d-flex", "align-items-center", "justify-content-between", "gap-1"], ["type", "button", "data-bs-dismiss", "modal", 1, "btn", "btn-outline-white"], ["type", "submit", "data-bs-dismiss", "modal", 1, "btn", "btn-primary"], ["id", "add_2factor", 1, "modal", "fade"], ["id", "add_twilio", 1, "modal", "fade"], ["id", "delete_modal", 1, "modal", "fade"], [1, "modal-dialog", "modal-dialog-centered", "modal-sm"], [1, "modal-body", "text-center"], ["src", "assets/img/icons/delete.svg", "alt", "img"], [1, "mb-1"], [1, "d-flex", "justify-content-center"], ["href", "javascript:void(0);", "data-bs-dismiss", "modal", 1, "btn", "btn-outline-white", "me-3"], ["href", "javascript:void(0);", "data-bs-dismiss", "modal", 1, "btn", "btn-primary"]], template: function SmsGatewaysComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275domElementStart(0, "div", 0)(1, "div")(2, "div", 1)(3, "h6", 2);
      \u0275\u0275text(4, "SMS Gateways");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(5, "div", 2)(6, "div", 3)(7, "div", 4)(8, "div", 5)(9, "div", 6)(10, "div", 7)(11, "div", 8)(12, "span");
      \u0275\u0275domElement(13, "img", 9);
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(14, "span", 10);
      \u0275\u0275domElement(15, "span", 11);
      \u0275\u0275text(16, " Connected ");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(17, "p", 12);
      \u0275\u0275text(18, "Enables seamless communication through SMS, voice, and APIs.");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(19, "div", 13)(20, "div", 14)(21, "div", 14)(22, "a", 15);
      \u0275\u0275domElement(23, "i", 16);
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(24, "a", 17);
      \u0275\u0275domElement(25, "i", 18);
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(26, "div", 19);
      \u0275\u0275domElement(27, "input", 20);
      \u0275\u0275domElementEnd()()()()();
      \u0275\u0275domElementStart(28, "div", 4)(29, "div", 5)(30, "div", 6)(31, "div", 7)(32, "div", 8)(33, "span");
      \u0275\u0275domElement(34, "img", 21);
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(35, "span", 10);
      \u0275\u0275domElement(36, "span", 11);
      \u0275\u0275text(37, " Connected ");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(38, "p", 12);
      \u0275\u0275text(39, "2Factor offers simple sms integration API\xA0and sample code to send SMS");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(40, "div", 13)(41, "div", 14)(42, "div", 14)(43, "a", 15);
      \u0275\u0275domElement(44, "i", 16);
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(45, "a", 22);
      \u0275\u0275domElement(46, "i", 18);
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(47, "div", 19);
      \u0275\u0275domElement(48, "input", 20);
      \u0275\u0275domElementEnd()()()()();
      \u0275\u0275domElementStart(49, "div", 4)(50, "div", 5)(51, "div", 6)(52, "div", 7)(53, "div", 8)(54, "span");
      \u0275\u0275domElement(55, "img", 23);
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(56, "span", 24);
      \u0275\u0275domElement(57, "span", 25);
      \u0275\u0275text(58, " Not Connected ");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(59, "p", 12);
      \u0275\u0275text(60, "Twilio provides APIs for messaging, voice, and video integration.");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(61, "div", 13)(62, "div", 14)(63, "div", 14)(64, "a", 15);
      \u0275\u0275domElement(65, "i", 16);
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(66, "a", 26);
      \u0275\u0275domElement(67, "i", 18);
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(68, "div", 19);
      \u0275\u0275domElement(69, "input", 20);
      \u0275\u0275domElementEnd()()()()()()()()();
      \u0275\u0275domElementStart(70, "div", 27)(71, "div", 28)(72, "div", 29)(73, "div", 30)(74, "h5", 2);
      \u0275\u0275text(75, "Nexmo");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(76, "button", 31);
      \u0275\u0275domElement(77, "i", 32);
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(78, "form")(79, "div", 33)(80, "div", 34)(81, "label", 35);
      \u0275\u0275text(82, "API Key ");
      \u0275\u0275domElementStart(83, "span", 36);
      \u0275\u0275text(84, "*");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElement(85, "input", 37);
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(86, "div", 34)(87, "label", 35);
      \u0275\u0275text(88, "API Secret Key ");
      \u0275\u0275domElementStart(89, "span", 36);
      \u0275\u0275text(90, "*");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElement(91, "input", 37);
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(92, "div", 2)(93, "label", 35);
      \u0275\u0275text(94, "Sender ID ");
      \u0275\u0275domElementStart(95, "span", 36);
      \u0275\u0275text(96, "*");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElement(97, "input", 37);
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(98, "div", 38)(99, "button", 39);
      \u0275\u0275text(100, "Cancel");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(101, "button", 40);
      \u0275\u0275text(102, "Submit");
      \u0275\u0275domElementEnd()()()()()();
      \u0275\u0275domElementStart(103, "div", 41)(104, "div", 28)(105, "div", 29)(106, "div", 30)(107, "h5", 2);
      \u0275\u0275text(108, "2Factor");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(109, "button", 31);
      \u0275\u0275domElement(110, "i", 32);
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(111, "form")(112, "div", 33)(113, "div", 34)(114, "label", 35);
      \u0275\u0275text(115, "API Key ");
      \u0275\u0275domElementStart(116, "span", 36);
      \u0275\u0275text(117, "*");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElement(118, "input", 37);
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(119, "div", 34)(120, "label", 35);
      \u0275\u0275text(121, "API Secret Key ");
      \u0275\u0275domElementStart(122, "span", 36);
      \u0275\u0275text(123, "*");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElement(124, "input", 37);
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(125, "div", 2)(126, "label", 35);
      \u0275\u0275text(127, "Sender ID ");
      \u0275\u0275domElementStart(128, "span", 36);
      \u0275\u0275text(129, "*");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElement(130, "input", 37);
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(131, "div", 38)(132, "button", 39);
      \u0275\u0275text(133, "Cancel");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(134, "button", 40);
      \u0275\u0275text(135, "Submit");
      \u0275\u0275domElementEnd()()()()()();
      \u0275\u0275domElementStart(136, "div", 42)(137, "div", 28)(138, "div", 29)(139, "div", 30)(140, "h5", 2);
      \u0275\u0275text(141, "Twilio");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(142, "button", 31);
      \u0275\u0275domElement(143, "i", 32);
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(144, "form")(145, "div", 33)(146, "div", 34)(147, "label", 35);
      \u0275\u0275text(148, "API Key ");
      \u0275\u0275domElementStart(149, "span", 36);
      \u0275\u0275text(150, "*");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElement(151, "input", 37);
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(152, "div", 34)(153, "label", 35);
      \u0275\u0275text(154, "API Secret Key ");
      \u0275\u0275domElementStart(155, "span", 36);
      \u0275\u0275text(156, "*");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElement(157, "input", 37);
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(158, "div", 2)(159, "label", 35);
      \u0275\u0275text(160, "Sender ID ");
      \u0275\u0275domElementStart(161, "span", 36);
      \u0275\u0275text(162, "*");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElement(163, "input", 37);
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(164, "div", 38)(165, "button", 39);
      \u0275\u0275text(166, "Cancel");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(167, "button", 40);
      \u0275\u0275text(168, "Submit");
      \u0275\u0275domElementEnd()()()()()();
      \u0275\u0275domElementStart(169, "div", 43)(170, "div", 44)(171, "div", 29)(172, "div", 45)(173, "div", 34);
      \u0275\u0275domElement(174, "img", 46);
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(175, "h6", 47);
      \u0275\u0275text(176, "Delete");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(177, "p", 34);
      \u0275\u0275text(178, "Are you sure, you want to delete?");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(179, "div", 48)(180, "a", 49);
      \u0275\u0275text(181, "Cancel");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(182, "a", 50);
      \u0275\u0275text(183, "Yes, Delete");
      \u0275\u0275domElementEnd()()()()()();
    }
  }, encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SmsGatewaysComponent, [{
    type: Component,
    args: [{ selector: "app-sms-gateways", imports: [], template: '<div class="">\n    <div>\n        <div class="pb-3 d-flex align-items-center justify-content-between border-bottom mb-3">\n            <h6 class="mb-0">SMS Gateways</h6>\n        </div>\n        <div class="mb-0">\n\n            <!-- start row -->\n            <div class="row">\n                <div class="col-md-6 d-flex">\n                    <div class="card flex-fill">\n                        <div class="card-body">\n                            <div class="d-flex align-items-center justify-content-between mb-3 gap-2 flex-wrap">\n                                <div class="d-flex align-items-center">\n                                    <span>\n                                        <img src="assets/img/icons/nexmo-logo-icon.svg" class="img-fluid" alt="img">\n                                    </span>\n                                </div>\n                                <span class="badge badge-soft-success d-flex align-items-center">\n                                    <span class="badge-dot bg-success me-1"></span>\n                                    Connected\n                                </span>\n                            </div>\n                            <p class="fs-13">Enables seamless communication through SMS, voice, and APIs.</p>\n                        </div><!-- end card body -->\n                        <div class="card-footer">\n                            <div class="d-flex justify-content-between align-items-center">\n                                <div class="d-flex justify-content-between align-items-center">\n                                    <a href="javascript:void(0);" class="btn btn-sm btn-dark rounded-2 d-inline-flex align-items-center justify-content-center p-1 me-2" data-bs-toggle="modal" data-bs-target="#delete_modal">\n                                        <i class="isax isax-trash fs-14"></i>\n                                    </a>\n                                    <a href="javascript:void(0);" class="btn btn-sm btn-dark rounded-2 d-inline-flex align-items-center justify-content-center p-1 me-2" data-bs-toggle="modal" data-bs-target="#add_nexmo">\n                                        <i class="isax isax-setting-2 fs-14"></i>\n                                    </a>\n                                </div>\n                                <div class="form-check form-switch">\n                                    <input class="form-check-input" type="checkbox" role="switch" checked>\n                                </div>\n                            </div>\n                        </div><!-- end card footer -->\n                    </div><!-- end card -->\n                </div><!-- end col -->\n                <div class="col-md-6 d-flex">\n                    <div class="card flex-fill">\n                        <div class="card-body">\n                            <div class="d-flex align-items-center justify-content-between mb-3 gap-2 flex-wrap">\n                                <div class="d-flex align-items-center">\n                                    <span>\n                                        <img src="assets/img/icons/two-factor-icon.svg" class="img-fluid" alt="img">\n                                    </span>\n                                </div>\n                                <span class="badge badge-soft-success d-flex align-items-center">\n                                    <span class="badge-dot bg-success me-1"></span>\n                                    Connected\n                                </span>\n                            </div>\n                            <p class="fs-13">2Factor offers simple sms integration API\xA0and sample code to send SMS</p>\n                        </div><!-- end card body -->\n                        <div class="card-footer">\n                            <div class="d-flex justify-content-between align-items-center">\n                                <div class="d-flex justify-content-between align-items-center">\n                                    <a href="javascript:void(0);" class="btn btn-sm btn-dark rounded-2 d-inline-flex align-items-center justify-content-center p-1 me-2" data-bs-toggle="modal" data-bs-target="#delete_modal">\n                                        <i class="isax isax-trash fs-14"></i>\n                                    </a>\n                                    <a href="javascript:void(0);" class="btn btn-sm btn-dark rounded-2 d-inline-flex align-items-center justify-content-center p-1 me-2" data-bs-toggle="modal" data-bs-target="#add_2factor">\n                                        <i class="isax isax-setting-2 fs-14"></i>\n                                    </a>\n                                </div>\n                                <div class="form-check form-switch">\n                                    <input class="form-check-input" type="checkbox" role="switch" checked>\n                                </div>\n                        </div>\n                        </div><!-- end card footer -->\n                    </div><!-- end card -->\n                </div><!-- end col -->\n                <div class="col-md-6 d-flex">\n                    <div class="card flex-fill">\n                        <div class="card-body">\n                            <div class="d-flex align-items-center justify-content-between mb-3 gap-2 flex-wrap">\n                                <div class="d-flex align-items-center">\n                                    <span>\n                                        <img src="assets/img/icons/twilio-icon.svg" class="img-fluid" alt="img">\n                                    </span>\n                                </div>\n                                <span class="badge badge-soft-primary d-flex align-items-center text-gray-9">\n                                    <span class="badge-dot bg-dark me-1"></span>\n                                    Not Connected\n                                </span>\n                            </div>\n                            <p class="fs-13">Twilio provides APIs for messaging, voice, and video integration.</p>\n                        </div>\n                        <div class="card-footer">\n                            <div class="d-flex justify-content-between align-items-center">\n                                <div class="d-flex justify-content-between align-items-center">\n                                    <a href="javascript:void(0);" class="btn btn-sm btn-dark rounded-2 d-inline-flex align-items-center justify-content-center p-1 me-2" data-bs-toggle="modal" data-bs-target="#delete_modal">\n                                        <i class="isax isax-trash fs-14"></i>\n                                    </a>\n                                    <a href="javascript:void(0);" class="btn btn-sm btn-dark rounded-2 d-inline-flex align-items-center justify-content-center p-1 me-2" data-bs-toggle="modal" data-bs-target="#add_twilio">\n                                        <i class="isax isax-setting-2 fs-14"></i>\n                                    </a>\n                                </div>\n                                <div class="form-check form-switch">\n                                    <input class="form-check-input" type="checkbox" role="switch" checked>\n                                </div>\n                            </div>\n                        </div><!-- end card footer -->\n                    </div><!-- end card -->\n                </div><!-- end col -->\n            </div>\n            <!-- end row -->\n\n        </div>\n    </div>\n</div><!-- end col -->\n\n\n\n		<!-- Start Add nexom -->\n        <div class="modal fade" id="add_nexmo">\n            <div class="modal-dialog modal-dialog-centered modal-md">\n                <div class="modal-content">\n					<!-- Start modal header -->\n					<div class="modal-header">\n						<h5 class="mb-0">Nexmo</h5>\n						<button type="button" class="btn-close btn-close-modal custom-btn-close" data-bs-dismiss="modal" aria-label="Close">\n							<i class="fa-solid fa-x"></i>\n						</button>\n					</div>\n					<!-- End modal header -->\n                    <form>\n                    <div class="modal-body">\n						<div class="mb-3">\n							<label class="form-label">API Key  <span class="text-danger">*</span></label>\n							<input type="text" class="form-control">\n						</div>                     \n						<div class="mb-3">\n							<label class="form-label">API Secret Key <span class="text-danger">*</span></label>\n							<input type="text" class="form-control">\n						</div>                     \n						<div class="mb-0">\n							<label class="form-label">Sender ID <span class="text-danger">*</span></label>\n							<input type="text" class="form-control">\n						</div>                     \n                    </div>\n					<div class="modal-footer d-flex align-items-center justify-content-between gap-1">\n                        <button type="button" class="btn btn-outline-white" data-bs-dismiss="modal">Cancel</button>\n                        <button type="submit" class="btn btn-primary" data-bs-dismiss="modal">Submit</button>\n                    </div>\n                </form>\n                </div><!-- End modal content-->\n            </div><!-- End modal dialog-->\n        </div>\n        <!-- End Add nexom -->\n\n		<!-- Start Add 2factor -->\n        <div class="modal fade" id="add_2factor">\n            <div class="modal-dialog modal-dialog-centered modal-md">\n                <div class="modal-content">\n					<!-- Start modal header -->\n					<div class="modal-header">\n						<h5 class="mb-0">2Factor</h5>\n						<button type="button" class="btn-close btn-close-modal custom-btn-close" data-bs-dismiss="modal" aria-label="Close">\n							<i class="fa-solid fa-x"></i>\n						</button>\n					</div>\n					<!-- End modal header -->\n                    <form>\n                    <div class="modal-body">\n						<div class="mb-3">\n							<label class="form-label">API Key  <span class="text-danger">*</span></label>\n							<input type="text" class="form-control">\n						</div>                     \n						<div class="mb-3">\n							<label class="form-label">API Secret Key <span class="text-danger">*</span></label>\n							<input type="text" class="form-control">\n						</div>                     \n						<div class="mb-0">\n							<label class="form-label">Sender ID <span class="text-danger">*</span></label>\n							<input type="text" class="form-control">\n						</div>                     \n                    </div>\n					<div class="modal-footer d-flex align-items-center justify-content-between gap-1">\n                        <button type="button" class="btn btn-outline-white" data-bs-dismiss="modal">Cancel</button>\n                        <button type="submit" class="btn btn-primary" data-bs-dismiss="modal">Submit</button>\n                    </div>\n                </form>\n                </div><!-- End modal content-->\n            </div><!-- End modal dialog-->\n        </div>\n        <!-- End Add nexom -->\n\n		<!-- Start Add twilio -->\n        <div class="modal fade" id="add_twilio">\n            <div class="modal-dialog modal-dialog-centered modal-md">\n                <div class="modal-content">\n					<!-- Start modal header -->\n					<div class="modal-header">\n						<h5 class="mb-0">Twilio</h5>\n						<button type="button" class="btn-close btn-close-modal custom-btn-close" data-bs-dismiss="modal" aria-label="Close">\n							<i class="fa-solid fa-x"></i>\n						</button>\n					</div>\n					<!-- End modal header -->\n                    <form>\n                    <div class="modal-body">\n						<div class="mb-3">\n							<label class="form-label">API Key  <span class="text-danger">*</span></label>\n							<input type="text" class="form-control">\n						</div>                     \n						<div class="mb-3">\n							<label class="form-label">API Secret Key <span class="text-danger">*</span></label>\n							<input type="text" class="form-control">\n						</div>                     \n						<div class="mb-0">\n							<label class="form-label">Sender ID <span class="text-danger">*</span></label>\n							<input type="text" class="form-control">\n						</div>                     \n                    </div>\n					<div class="modal-footer d-flex align-items-center justify-content-between gap-1">\n                        <button type="button" class="btn btn-outline-white" data-bs-dismiss="modal">Cancel</button>\n                        <button type="submit" class="btn btn-primary" data-bs-dismiss="modal">Submit</button>\n                    </div>\n                </form>\n                </div><!-- End modal content-->\n            </div><!-- End modal dialog-->\n        </div>\n        <!-- End Add nexom -->\n        \n		<!-- Start Delete Modal  -->\n		<div class="modal fade" id="delete_modal">\n			<div class="modal-dialog modal-dialog-centered modal-sm">\n				<div class="modal-content">\n					<div class="modal-body text-center">\n						<div class="mb-3">\n							<img src="assets/img/icons/delete.svg" alt="img">\n						</div>\n						<h6 class="mb-1">Delete</h6>\n						<p class="mb-3">Are you sure,  you want to delete?</p>\n						<div class="d-flex justify-content-center">\n							<a href="javascript:void(0);" class="btn btn-outline-white me-3" data-bs-dismiss="modal">Cancel</a>\n							<a href="javascript:void(0);" class="btn btn-primary" data-bs-dismiss="modal">Yes, Delete</a>\n						</div>\n					</div><!-- End modal body -->\n				</div><!-- End modal content -->\n			</div><!-- End modal dialog -->\n		</div>\n		<!-- End Delete Modal  -->' }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SmsGatewaysComponent, { className: "SmsGatewaysComponent", filePath: "src/app/modules/setting/presentation/pages/system-settings/sms-gateways/sms-gateways.component.ts", lineNumber: 9 });
})();
export {
  SmsGatewaysComponent
};
//# sourceMappingURL=chunk-EUBUSZSM.js.map

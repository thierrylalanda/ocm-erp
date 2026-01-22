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

// src/app/modules/setting/presentation/pages/other-settings/sitemap/sitemap.component.ts
var SitemapComponent = class _SitemapComponent {
  static \u0275fac = function SitemapComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _SitemapComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SitemapComponent, selectors: [["app-sitemap"]], decls: 107, vars: 0, consts: [[1, ""], [1, "pb-3", "border-bottom", "mb-3"], [1, "mb-0"], [1, "mb-3"], [1, "row"], [1, "col-md-3"], [1, "input-icon-start", "position-relative", "me-2", "mb-3"], [1, "input-icon-addon"], [1, "isax", "isax-search-normal"], ["type", "text", "placeholder", "Search", 1, "form-control", "form-control-sm", "bg-white"], [1, "col-md-9"], [1, "d-flex", "justify-content-end", "align-items-center", "flex-wrap", "gap-2", "mb-3"], ["href", "javascript:void(0);", "data-bs-toggle", "modal", "data-bs-target", "#add_modal", 1, "btn", "btn-primary", "d-flex", "align-items-center"], [1, "isax", "isax-add-circle5", "me-1"], [1, "table-responsive", "table-nowrap"], [1, "table", "border", "dataTable"], [1, "table-light"], [1, "no-sort"], [1, "fs-14", "fw-normal"], [1, "action-item"], ["href", "javascript:void(0);", "data-bs-toggle", "dropdown"], [1, "isax", "isax-more"], [1, "dropdown-menu"], ["href", "javascript:void(0);", "data-bs-toggle", "modal", "data-bs-target", "#edit_modal", 1, "dropdown-item", "d-flex", "align-items-center"], [1, "isax", "isax-edit", "me-2"], ["href", "javascript:void(0);", "data-bs-toggle", "modal", "data-bs-target", "#delete_modal", 1, "dropdown-item", "d-flex", "align-items-center"], [1, "isax", "isax-trash", "me-2"], ["id", "add_modal", 1, "modal", "fade"], [1, "modal-dialog", "modal-dialog-centered"], [1, "modal-content"], [1, "modal-header"], [1, "modal-title"], ["type", "button", "data-bs-dismiss", "modal", "aria-label", "Close", 1, "btn-close", "btn-close-modal", "custom-btn-close"], [1, "fa-solid", "fa-x"], [1, "modal-body"], [1, "col-md-12"], [1, "form-label"], [1, "text-danger"], ["type", "text", 1, "form-control"], [1, "modal-footer", "d-flex", "align-items-center", "justify-content-between", "gap-1"], ["type", "button", "data-bs-dismiss", "modal", 1, "btn", "btn-outline-white"], ["type", "submit", "data-bs-dismiss", "modal", 1, "btn", "btn-primary"], ["id", "edit_modal", 1, "modal", "fade"], ["type", "text", "value", "https://localhost/Kanakku", 1, "form-control"], ["id", "delete_modal", 1, "modal", "fade"], [1, "modal-dialog", "modal-dialog-centered", "modal-sm"], [1, "modal-body", "text-center"], ["src", "assets/img/icons/delete.svg", "alt", "img"], [1, "mb-1"], [1, "d-flex", "justify-content-center"], ["href", "javascript:void(0);", "data-bs-dismiss", "modal", 1, "btn", "btn-outline-white", "me-3"], ["href", "javascript:void(0);", "data-bs-dismiss", "modal", 1, "btn", "btn-primary"]], template: function SitemapComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275domElementStart(0, "div", 0)(1, "div")(2, "div", 1)(3, "h6", 2);
      \u0275\u0275text(4, "Sitemap");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(5, "div", 3)(6, "div", 4)(7, "div", 5)(8, "div", 6)(9, "span", 7);
      \u0275\u0275domElement(10, "i", 8);
      \u0275\u0275domElementEnd();
      \u0275\u0275domElement(11, "input", 9);
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(12, "div", 10)(13, "div", 11)(14, "div")(15, "a", 12);
      \u0275\u0275domElement(16, "i", 13);
      \u0275\u0275text(17, "Generate Sitemap");
      \u0275\u0275domElementEnd()()()()();
      \u0275\u0275domElementStart(18, "div", 14)(19, "table", 15)(20, "thead", 16)(21, "tr")(22, "th");
      \u0275\u0275text(23, "URL");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(24, "th");
      \u0275\u0275text(25, "File Name");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElement(26, "th", 17);
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(27, "tbody")(28, "tr")(29, "td")(30, "h6", 18);
      \u0275\u0275text(31, "https://localhost/Kanakku");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(32, "td");
      \u0275\u0275text(33, "sitemap18725604.xml");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(34, "td", 19)(35, "a", 20);
      \u0275\u0275domElement(36, "i", 21);
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(37, "ul", 22)(38, "li")(39, "a", 23);
      \u0275\u0275domElement(40, "i", 24);
      \u0275\u0275text(41, "Edit");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(42, "li")(43, "a", 25);
      \u0275\u0275domElement(44, "i", 26);
      \u0275\u0275text(45, "Delete");
      \u0275\u0275domElementEnd()()()()()()()()()()();
      \u0275\u0275domElementStart(46, "div", 27)(47, "div", 28)(48, "div", 29)(49, "div", 30)(50, "h4", 31);
      \u0275\u0275text(51, "Add Sitemap");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(52, "button", 32);
      \u0275\u0275domElement(53, "i", 33);
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(54, "form")(55, "div", 34)(56, "div", 4)(57, "div", 35)(58, "div")(59, "label", 36);
      \u0275\u0275text(60, "Sitemap URL ");
      \u0275\u0275domElementStart(61, "span", 37);
      \u0275\u0275text(62, "*");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElement(63, "input", 38);
      \u0275\u0275domElementEnd()()()();
      \u0275\u0275domElementStart(64, "div", 39)(65, "button", 40);
      \u0275\u0275text(66, "Cancel");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(67, "button", 41);
      \u0275\u0275text(68, "Add New");
      \u0275\u0275domElementEnd()()()()()();
      \u0275\u0275domElementStart(69, "div", 42)(70, "div", 28)(71, "div", 29)(72, "div", 30)(73, "h4", 31);
      \u0275\u0275text(74, "Edit Sitemap");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(75, "button", 32);
      \u0275\u0275domElement(76, "i", 33);
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(77, "form")(78, "div", 34)(79, "div", 4)(80, "div", 35)(81, "div")(82, "label", 36);
      \u0275\u0275text(83, "Sitemap URL ");
      \u0275\u0275domElementStart(84, "span", 37);
      \u0275\u0275text(85, "*");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElement(86, "input", 43);
      \u0275\u0275domElementEnd()()()();
      \u0275\u0275domElementStart(87, "div", 39)(88, "button", 40);
      \u0275\u0275text(89, "Cancel");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(90, "button", 41);
      \u0275\u0275text(91, "Save Changes");
      \u0275\u0275domElementEnd()()()()()();
      \u0275\u0275domElementStart(92, "div", 44)(93, "div", 45)(94, "div", 29)(95, "div", 46)(96, "div", 3);
      \u0275\u0275domElement(97, "img", 47);
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(98, "h6", 48);
      \u0275\u0275text(99, "Delete Sitemap");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(100, "p", 3);
      \u0275\u0275text(101, "Are you sure, you want to delete Sitemap?");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(102, "div", 49)(103, "a", 50);
      \u0275\u0275text(104, "Cancel");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(105, "a", 51);
      \u0275\u0275text(106, "Yes, Delete");
      \u0275\u0275domElementEnd()()()()()();
    }
  }, encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SitemapComponent, [{
    type: Component,
    args: [{ selector: "app-sitemap", imports: [], template: '<div class="">\n    <div>\n        <div class="pb-3 border-bottom mb-3">\n            <h6 class="mb-0">Sitemap</h6>\n        </div>\n        <div class="mb-3">\n            <!-- Table Search -->\n\n             <!-- start row -->\n            <div class="row">\n                <div class="col-md-3">\n                    <div class="input-icon-start position-relative me-2 mb-3">\n                        <span class="input-icon-addon">\n                            <i class="isax isax-search-normal"></i>\n                        </span>\n                        <input type="text" class="form-control form-control-sm bg-white" placeholder="Search">\n                    \n                    </div>\n                </div><!-- end col -->\n                <div class="col-md-9">\n                    <div class="d-flex justify-content-end align-items-center flex-wrap gap-2 mb-3">\n                        <div>\n                            <a href="javascript:void(0);" class="btn btn-primary d-flex align-items-center" data-bs-toggle="modal" data-bs-target="#add_modal"><i class="isax isax-add-circle5 me-1"></i>Generate Sitemap</a>\n                        </div>\n                    </div>\n                </div><!-- end col -->\n            </div>\n            <!-- end row -->\n            <!-- /Table Search -->\n            \n            <!-- Table List -->\n            <div class="table-responsive table-nowrap">\n                <table class="table border dataTable">\n                    <thead class="table-light">\n                        <tr>\n                            <th>URL</th>\n                            <th>File Name</th>\n                            <th class="no-sort"></th>\n                        </tr>\n                    </thead>\n                    <tbody>\n                        <tr>\n                            <td><h6 class="fs-14 fw-normal">https://localhost/Kanakku</h6></td>\n                            <td>sitemap18725604.xml</td>\n                            <td class="action-item">\n                                <a href="javascript:void(0);" data-bs-toggle="dropdown">\n                                    <i class="isax isax-more"></i>\n                                </a>\n                                <ul class="dropdown-menu">\n                                    <li>\n                                        <a href="javascript:void(0);" class="dropdown-item d-flex align-items-center" data-bs-toggle="modal" data-bs-target="#edit_modal"><i class="isax isax-edit me-2"></i>Edit</a>\n                                    </li>\n                                    <li>\n                                        <a href="javascript:void(0);" class="dropdown-item d-flex align-items-center" data-bs-toggle="modal" data-bs-target="#delete_modal"><i class="isax isax-trash me-2"></i>Delete</a>\n                                    </li>\n                                </ul>\n                            </td>\n                        </tr>\n                    </tbody>\n                </table>\n            </div>\n            <!-- /Table List -->\n        </div>\n    </div>\n</div><!-- end col -->\n\n\n\n<!-- Start Add Modal  -->\n<div id="add_modal" class="modal fade">\n    <div class="modal-dialog modal-dialog-centered">\n        <div class="modal-content">\n            <!-- Start modal header -->\n            <div class="modal-header">\n                <h4 class="modal-title">Add Sitemap</h4>\n                <button type="button" class="btn-close btn-close-modal custom-btn-close" data-bs-dismiss="modal" aria-label="Close"><i class="fa-solid fa-x"></i></button>\n            </div>\n            <!-- End modal header -->\n            <form>\n                <div class="modal-body">\n\n                    <!-- start row -->\n                    <div class="row">\n                        <div class="col-md-12">\n                            <div>\n                                <label class="form-label">Sitemap URL <span class="text-danger">*</span></label>\n                                <input type="text" class="form-control">\n                            </div>\n                        </div><!-- end col -->\n                    </div>\n                    <!-- end row -->\n\n                </div>\n\n                <div class="modal-footer d-flex align-items-center justify-content-between gap-1">\n                    <button type="button" class="btn btn-outline-white" data-bs-dismiss="modal">Cancel</button>\n                    <button type="submit" class="btn btn-primary" data-bs-dismiss="modal">Add New</button>\n                </div>\n\n            </form>\n        </div><!-- End modal content-->\n    </div><!-- End modal dialog-->\n</div>\n<!-- / End  Add Modal -->\n\n<!-- Start Edit Modal  -->\n<div id="edit_modal" class="modal fade">\n    <div class="modal-dialog modal-dialog-centered">\n        <div class="modal-content">\n            <!-- Start modal header -->\n            <div class="modal-header">\n                <h4 class="modal-title">Edit Sitemap</h4>\n                <button type="button" class="btn-close btn-close-modal custom-btn-close" data-bs-dismiss="modal" aria-label="Close"><i class="fa-solid fa-x"></i></button>\n            </div>\n            <!-- End modal header -->\n            <form>\n                <div class="modal-body">\n                    <div class="row">\n                        <div class="col-md-12">\n                            <div>\n                                <label class="form-label">Sitemap URL <span class="text-danger">*</span></label>\n                                <input type="text" value="https://localhost/Kanakku" class="form-control">\n                            </div>\n                        </div>\n                    </div>\n                </div>\n                <div class="modal-footer d-flex align-items-center justify-content-between gap-1">\n                    <button type="button" class="btn btn-outline-white" data-bs-dismiss="modal">Cancel</button>\n                    <button type="submit" class="btn btn-primary" data-bs-dismiss="modal">Save Changes</button>\n                </div>\n            </form>\n        </div><!-- End modal content-->\n    </div><!-- End modal dialog-->\n</div>\n<!-- / End Edit Modal -->\n\n<!-- Start Delete Modal  -->\n<div class="modal fade" id="delete_modal">\n    <div class="modal-dialog modal-dialog-centered modal-sm">\n        <div class="modal-content">\n            <div class="modal-body text-center">\n                <div class="mb-3">\n                    <img src="assets/img/icons/delete.svg" alt="img">\n                </div>\n                <h6 class="mb-1">Delete Sitemap</h6>\n                <p class="mb-3">Are you sure,  you want to delete Sitemap?</p>\n                <div class="d-flex justify-content-center">\n                    <a href="javascript:void(0);" class="btn btn-outline-white me-3" data-bs-dismiss="modal">Cancel</a>\n                    <a href="javascript:void(0);" class="btn btn-primary" data-bs-dismiss="modal">Yes, Delete</a>\n                </div>\n            </div><!-- End modal body -->\n        </div><!-- End modal content -->\n    </div><!-- End modal dialog -->\n</div>\n<!-- End Delete Modal  -->' }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SitemapComponent, { className: "SitemapComponent", filePath: "src/app/modules/setting/presentation/pages/other-settings/sitemap/sitemap.component.ts", lineNumber: 9 });
})();
export {
  SitemapComponent
};
//# sourceMappingURL=chunk-ENX5423I.js.map

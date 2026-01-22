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

// src/app/features/manage/manage-users/roles-permissions/roles-permissions.component.ts
var RolesPermissionsComponent = class _RolesPermissionsComponent {
  routes = routes;
  static \u0275fac = function RolesPermissionsComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _RolesPermissionsComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _RolesPermissionsComponent, selectors: [["app-roles-permissions"]], decls: 163, vars: 3, consts: [[1, "content-two"], [1, "d-flex", "d-block", "align-items-center", "justify-content-between", "flex-wrap", "gap-3", "mb-3"], [1, "d-flex", "my-xl-auto", "right-content", "align-items-center", "flex-wrap", "gap-2"], [1, "dropdown"], ["href", "javascript:void(0);", "data-bs-toggle", "dropdown", 1, "btn", "btn-outline-white", "d-inline-flex", "align-items-center"], [1, "isax", "isax-export-1", "me-1"], [1, "dropdown-menu"], ["href", "javascript:void(0);", 1, "dropdown-item"], ["href", "javascript:void(0);", "data-bs-toggle", "modal", "data-bs-target", "#add_modal", 1, "btn", "btn-primary", "d-flex", "align-items-center"], [1, "isax", "isax-add-circle5", "me-1"], [1, "row"], [1, "col-md-3"], [1, "input-group", "mb-3"], [1, "input-group-text", "bg-white", "border-end-0"], [1, "isax", "isax-search-normal", "fs-12"], ["type", "text", "placeholder", "Search", 1, "form-control", "border-start-0", "ps-0", "bg-white"], [1, "table-responsive", "table-nowrap"], [1, "table", "border", "mb-0"], [1, "table-light"], [1, "no-sort"], [1, "bg-light"], [1, "text-gray-3"], [1, "btn", "btn-outline-white", "d-inline-flex", "align-items-center", 3, "routerLink"], [1, "isax", "isax-shield-tick", "me-1"], [1, "action-item"], ["href", "javascript:void(0);", "data-bs-toggle", "dropdown"], [1, "isax", "isax-more"], ["href", "javascript:void(0);", "data-bs-toggle", "modal", "data-bs-target", "#edit_modal", 1, "dropdown-item", "d-flex", "align-items-center"], [1, "isax", "isax-edit", "me-2"], ["href", "javascript:void(0);", "data-bs-toggle", "modal", "data-bs-target", "#delete_modal", 1, "dropdown-item", "d-flex", "align-items-center"], [1, "isax", "isax-trash", "me-2"], ["id", "add_modal", 1, "modal", "fade"], [1, "modal-dialog", "modal-dialog-centered", "modal-md"], [1, "modal-content"], [1, "modal-header"], [1, "modal-title"], ["type", "button", "data-bs-dismiss", "modal", "aria-label", "Close", 1, "btn-close", "btn-close-modal", "custom-btn-close"], [1, "fa-solid", "fa-x"], [1, "modal-body"], [1, "mb-0"], [1, "form-label"], ["type", "text", 1, "form-control"], [1, "modal-footer", "d-flex", "align-items-center", "justify-content-between", "gap-1"], ["type", "button", "data-bs-dismiss", "modal", 1, "btn", "btn-outline-white"], ["type", "submit", "data-bs-dismiss", "modal", 1, "btn", "btn-primary"], ["id", "edit_modal", 1, "modal", "fade"], ["type", "text", "value", "Admin", 1, "form-control"], ["id", "delete_modal", 1, "modal", "fade"], [1, "modal-dialog", "modal-dialog-centered", "modal-sm"], [1, "modal-body", "text-center"], [1, "mb-3"], ["src", "assets/img/icons/delete.svg", "alt", "img"], [1, "mb-1"], [1, "d-flex", "justify-content-center"], ["href", "javascript:void(0);", "data-bs-dismiss", "modal", 1, "btn", "btn-outline-white", "me-3"], ["href", "javascript:void(0);", "data-bs-dismiss", "modal", 1, "btn", "btn-primary"]], template: function RolesPermissionsComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div")(3, "h6");
      \u0275\u0275text(4, "Roles & Permission");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(5, "div", 2)(6, "div", 3)(7, "a", 4);
      \u0275\u0275element(8, "i", 5);
      \u0275\u0275text(9, "Export ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(10, "ul", 6)(11, "li")(12, "a", 7);
      \u0275\u0275text(13, "Download as PDF");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(14, "li")(15, "a", 7);
      \u0275\u0275text(16, "Download as Excel");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(17, "div")(18, "a", 8);
      \u0275\u0275element(19, "i", 9);
      \u0275\u0275text(20, "New Role ");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(21, "div", 10)(22, "div", 11)(23, "div", 12)(24, "span", 13);
      \u0275\u0275element(25, "i", 14);
      \u0275\u0275elementEnd();
      \u0275\u0275element(26, "input", 15);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(27, "div", 16)(28, "table", 17)(29, "thead", 18)(30, "tr")(31, "th");
      \u0275\u0275text(32, "Role");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(33, "th");
      \u0275\u0275text(34, "Create On");
      \u0275\u0275elementEnd();
      \u0275\u0275element(35, "th", 19)(36, "th", 19);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(37, "tbody")(38, "tr")(39, "td", 20)(40, "span", 21);
      \u0275\u0275text(41, "Admin");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(42, "td", 20)(43, "span", 21);
      \u0275\u0275text(44, "22 Feb 2025");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(45, "td", 20)(46, "td", 20);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(47, "tr")(48, "td");
      \u0275\u0275text(49, "Customer");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(50, "td");
      \u0275\u0275text(51, "07 Feb 2025");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(52, "td")(53, "a", 22);
      \u0275\u0275element(54, "i", 23);
      \u0275\u0275text(55, " Permissions ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(56, "td", 24)(57, "a", 25);
      \u0275\u0275element(58, "i", 26);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(59, "ul", 6)(60, "li")(61, "a", 27);
      \u0275\u0275element(62, "i", 28);
      \u0275\u0275text(63, "Edit");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(64, "li")(65, "a", 29);
      \u0275\u0275element(66, "i", 30);
      \u0275\u0275text(67, "Delete");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(68, "tr")(69, "td");
      \u0275\u0275text(70, "Shop Owner");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(71, "td");
      \u0275\u0275text(72, "30 Jan 2025");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(73, "td")(74, "a", 22);
      \u0275\u0275element(75, "i", 23);
      \u0275\u0275text(76, " Permissions ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(77, "td", 24)(78, "a", 25);
      \u0275\u0275element(79, "i", 26);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(80, "ul", 6)(81, "li")(82, "a", 27);
      \u0275\u0275element(83, "i", 28);
      \u0275\u0275text(84, "Edit");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(85, "li")(86, "a", 29);
      \u0275\u0275element(87, "i", 30);
      \u0275\u0275text(88, "Delete");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(89, "tr")(90, "td");
      \u0275\u0275text(91, "Receptionist");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(92, "td");
      \u0275\u0275text(93, "04 Jan 2025");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(94, "td")(95, "a", 22);
      \u0275\u0275element(96, "i", 23);
      \u0275\u0275text(97, " Permissions ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(98, "td", 24)(99, "a", 25);
      \u0275\u0275element(100, "i", 26);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(101, "ul", 6)(102, "li")(103, "a", 27);
      \u0275\u0275element(104, "i", 28);
      \u0275\u0275text(105, "Edit");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(106, "li")(107, "a", 29);
      \u0275\u0275element(108, "i", 30);
      \u0275\u0275text(109, "Delete");
      \u0275\u0275elementEnd()()()()()()()()();
      \u0275\u0275elementStart(110, "div", 31)(111, "div", 32)(112, "div", 33)(113, "div", 34)(114, "h4", 35);
      \u0275\u0275text(115, "Add New Role");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(116, "button", 36);
      \u0275\u0275element(117, "i", 37);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(118, "form")(119, "div", 38)(120, "div", 39)(121, "label", 40);
      \u0275\u0275text(122, "Role Name");
      \u0275\u0275elementEnd();
      \u0275\u0275element(123, "input", 41);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(124, "div", 42)(125, "button", 43);
      \u0275\u0275text(126, "Cancel");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(127, "button", 44);
      \u0275\u0275text(128, "Create");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(129, "div", 45)(130, "div", 32)(131, "div", 33)(132, "div", 34)(133, "h4", 35);
      \u0275\u0275text(134, "Edit Role");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(135, "button", 36);
      \u0275\u0275element(136, "i", 37);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(137, "form")(138, "div", 38)(139, "div", 39)(140, "label", 40);
      \u0275\u0275text(141, "Role Name");
      \u0275\u0275elementEnd();
      \u0275\u0275element(142, "input", 46);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(143, "div", 42)(144, "button", 43);
      \u0275\u0275text(145, "Cancel");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(146, "button", 44);
      \u0275\u0275text(147, "Save Changes");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(148, "div", 47)(149, "div", 48)(150, "div", 33)(151, "div", 49)(152, "div", 50);
      \u0275\u0275element(153, "img", 51);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(154, "h6", 52);
      \u0275\u0275text(155, "Delete Role");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(156, "p", 50);
      \u0275\u0275text(157, "Are you sure, you want to delete role?");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(158, "div", 53)(159, "a", 54);
      \u0275\u0275text(160, "Cancel");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(161, "a", 55);
      \u0275\u0275text(162, "Yes, Delete");
      \u0275\u0275elementEnd()()()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(53);
      \u0275\u0275property("routerLink", ctx.routes.permission);
      \u0275\u0275advance(21);
      \u0275\u0275property("routerLink", ctx.routes.permission);
      \u0275\u0275advance(21);
      \u0275\u0275property("routerLink", ctx.routes.permission);
    }
  }, dependencies: [RouterLink], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RolesPermissionsComponent, [{
    type: Component,
    args: [{ selector: "app-roles-permissions", imports: [RouterLink], template: '\n			<!-- Start Content -->\n            <div class="content-two">\n\n                <!-- Page Header -->\n                <div class="d-flex d-block align-items-center justify-content-between flex-wrap gap-3 mb-3">\n                    <div>\n                        <h6>Roles & Permission</h6>\n                    </div>\n                    <div class="d-flex my-xl-auto right-content align-items-center flex-wrap gap-2">\n                        <div class="dropdown">\n                            <a href="javascript:void(0);" class="btn btn-outline-white d-inline-flex align-items-center" data-bs-toggle="dropdown">\n                                <i class="isax isax-export-1 me-1"></i>Export\n                            </a>\n                            <ul class="dropdown-menu">\n                                <li>\n                                    <a class="dropdown-item" href="javascript:void(0);">Download as PDF</a>\n                                </li>\n                                <li>\n                                    <a class="dropdown-item" href="javascript:void(0);">Download as Excel</a>\n                                </li>\n                            </ul>\n                        </div>\n                        <div>\n                            <a href="javascript:void(0);" class="btn btn-primary d-flex align-items-center" data-bs-toggle="modal" data-bs-target="#add_modal">\n                                <i class="isax isax-add-circle5 me-1"></i>New Role\n                            </a>\n                        </div>\n                    </div>\n                </div>\n                <!-- End Page Header -->\n\n				 <!-- start row -->\n                <div class="row">\n                    <div class="col-md-3">\n                        <div class="input-group mb-3">\n                            <span class="input-group-text bg-white border-end-0">\n								<i class="isax isax-search-normal fs-12"></i>\n							</span>\n                            <input type="text" class="form-control border-start-0 ps-0 bg-white" placeholder="Search">\n                        </div>\n                    </div><!-- end col -->\n                </div>\n				<!-- end row -->\n\n                <!-- Table List -->\n                <div class="table-responsive table-nowrap">\n                    <table class="table border mb-0">\n                        <thead class="table-light">\n                            <tr>\n                                <th>Role</th>\n                                <th>Create On</th>\n                                <th class="no-sort"></th>\n                                <th class="no-sort"></th>\n                            </tr>\n                        </thead>\n                        <tbody>\n                            <tr>\n                                <td class="bg-light"><span class="text-gray-3">Admin</span></td>\n                                <td class="bg-light"><span class="text-gray-3">22 Feb 2025</span></td>\n                                <td class="bg-light"></td>\n                                <td class="bg-light"></td>\n                            </tr>\n                            <tr>\n                                <td>Customer</td>\n                                <td>07 Feb 2025</td>\n                                <td>\n                                    <a [routerLink]="routes.permission" class="btn btn-outline-white d-inline-flex align-items-center">\n                                        <i class="isax isax-shield-tick me-1"></i> Permissions\n                                    </a>\n                                </td>\n                                <td class="action-item">\n                                    <a href="javascript:void(0);" data-bs-toggle="dropdown">\n                                        <i class="isax isax-more"></i>\n                                    </a>\n                                    <ul class="dropdown-menu">\n                                        <li>\n                                            <a href="javascript:void(0);" class="dropdown-item d-flex align-items-center" data-bs-toggle="modal" data-bs-target="#edit_modal"><i class="isax isax-edit me-2"></i>Edit</a>\n                                        </li>\n                                        <li>\n                                            <a href="javascript:void(0);" class="dropdown-item d-flex align-items-center" data-bs-toggle="modal" data-bs-target="#delete_modal"><i class="isax isax-trash me-2"></i>Delete</a>\n                                        </li>\n                                    </ul>\n                                </td>\n                            </tr>\n                            <tr>\n                                <td>Shop Owner</td>\n                                <td>30 Jan 2025</td>\n                                <td>\n                                    <a [routerLink]="routes.permission" class="btn btn-outline-white d-inline-flex align-items-center">\n                                        <i class="isax isax-shield-tick me-1"></i> Permissions\n                                    </a>\n                                </td>\n                                <td class="action-item">\n                                    <a href="javascript:void(0);" data-bs-toggle="dropdown">\n                                        <i class="isax isax-more"></i>\n                                    </a>\n                                    <ul class="dropdown-menu">\n                                        <li>\n                                            <a href="javascript:void(0);" class="dropdown-item d-flex align-items-center" data-bs-toggle="modal" data-bs-target="#edit_modal"><i class="isax isax-edit me-2"></i>Edit</a>\n                                        </li>\n                                        <li>\n                                            <a href="javascript:void(0);" class="dropdown-item d-flex align-items-center" data-bs-toggle="modal" data-bs-target="#delete_modal"><i class="isax isax-trash me-2"></i>Delete</a>\n                                        </li>\n                                    </ul>\n                                </td>\n                            </tr>\n                            <tr>\n                                <td>Receptionist</td>\n                                <td>04 Jan 2025</td>\n                                <td>\n                                    <a [routerLink]="routes.permission" class="btn btn-outline-white d-inline-flex align-items-center">\n                                        <i class="isax isax-shield-tick me-1"></i> Permissions\n                                    </a>\n                                </td>\n                                <td class="action-item">\n                                    <a href="javascript:void(0);" data-bs-toggle="dropdown">\n                                        <i class="isax isax-more"></i>\n                                    </a>\n                                    <ul class="dropdown-menu">\n                                        <li>\n                                            <a href="javascript:void(0);" class="dropdown-item d-flex align-items-center" data-bs-toggle="modal" data-bs-target="#edit_modal"><i class="isax isax-edit me-2"></i>Edit</a>\n                                        </li>\n                                        <li>\n                                            <a href="javascript:void(0);" class="dropdown-item d-flex align-items-center" data-bs-toggle="modal" data-bs-target="#delete_modal"><i class="isax isax-trash me-2"></i>Delete</a>\n                                        </li>\n                                    </ul>\n                                </td>\n                            </tr>\n                        </tbody>\n                    </table>\n                </div>\n                <!-- /Table List -->\n\n            </div>\n			<!-- End Content -->\n\n\n\n                    <!-- Start Add Modal  -->\n        <div id="add_modal" class="modal fade">\n            <div class="modal-dialog modal-dialog-centered modal-md">\n                <div class="modal-content">\n					<!-- Start modal header -->\n                    <div class="modal-header">\n                        <h4 class="modal-title">Add New Role</h4>\n                        <button type="button" class="btn-close btn-close-modal custom-btn-close" data-bs-dismiss="modal" aria-label="Close"><i class="fa-solid fa-x"></i></button>\n                    </div>\n					<!-- End modal header -->\n\n                    <form>\n                        <div class="modal-body">\n                            <div class="mb-0">\n                                <label class="form-label">Role Name</label>\n                                <input type="text" class="form-control">\n                            </div>\n                        </div>\n                        <div class="modal-footer d-flex align-items-center justify-content-between gap-1">\n                            <button type="button" class="btn btn-outline-white" data-bs-dismiss="modal">Cancel</button>\n                            <button type="submit" class="btn btn-primary" data-bs-dismiss="modal">Create</button>\n                        </div>\n                    </form>\n                </div><!-- End modal content-->\n			</div><!-- End modal dialog-->\n        </div>\n        <!-- / End Add Modal -->\n\n        <!-- Start Edit Modal  -->\n        <div id="edit_modal" class="modal fade">\n            <div class="modal-dialog modal-dialog-centered modal-md">\n                <div class="modal-content">\n					<!-- Start modal header -->\n                    <div class="modal-header">\n                        <h4 class="modal-title">Edit Role</h4>\n                        <button type="button" class="btn-close btn-close-modal custom-btn-close" data-bs-dismiss="modal" aria-label="Close"><i class="fa-solid fa-x"></i></button>\n                    </div>\n					<!-- End modal header -->\n\n                    <form>\n                        <div class="modal-body">\n                            <div class="mb-0">\n                                <label class="form-label">Role Name</label>\n                                <input type="text" class="form-control" value="Admin">\n                            </div>\n                        </div>\n                        <div class="modal-footer d-flex align-items-center justify-content-between gap-1">\n                            <button type="button" class="btn btn-outline-white" data-bs-dismiss="modal">Cancel</button>\n                            <button type="submit" class="btn btn-primary" data-bs-dismiss="modal">Save Changes</button>\n                        </div>\n                    </form>\n                </div><!-- End modal content-->\n			</div><!-- End modal dialog-->\n        </div>\n        <!-- / End Edit Modal -->\n\n        <!-- Start Delete Modal  -->\n        <div class="modal fade" id="delete_modal">\n            <div class="modal-dialog modal-dialog-centered modal-sm">\n                <div class="modal-content">\n                    <div class="modal-body text-center">\n                        <div class="mb-3">\n                            <img src="assets/img/icons/delete.svg" alt="img">\n                        </div>\n                        <h6 class="mb-1">Delete Role</h6>\n                        <p class="mb-3">Are you sure, you want to delete role?</p>\n                        <div class="d-flex justify-content-center">\n                            <a href="javascript:void(0);" class="btn btn-outline-white me-3" data-bs-dismiss="modal">Cancel</a>\n                            <a href="javascript:void(0);" class="btn btn-primary" data-bs-dismiss="modal">Yes, Delete</a>\n                        </div>\n                    </div><!-- End modal body -->\n                </div><!-- End modal content-->\n			</div><!-- End modal dialog-->\n        </div>\n        <!-- / End Delete Modal  -->' }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(RolesPermissionsComponent, { className: "RolesPermissionsComponent", filePath: "src/app/features/manage/manage-users/roles-permissions/roles-permissions.component.ts", lineNumber: 11 });
})();
export {
  RolesPermissionsComponent
};
//# sourceMappingURL=chunk-ZR3MVFRG.js.map

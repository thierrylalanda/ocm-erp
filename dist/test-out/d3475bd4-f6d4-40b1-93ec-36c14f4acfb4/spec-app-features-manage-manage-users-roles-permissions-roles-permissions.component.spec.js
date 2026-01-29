import {
  init_core_index,
  routes
} from "./chunk-NSLU4XKJ.js";
import "./chunk-EOPPSJQQ.js";
import "./chunk-FUOYOFVQ.js";
import "./chunk-5B5ZAECM.js";
import "./chunk-2O5UQ647.js";
import {
  RouterLink,
  init_router
} from "./chunk-EDGRTZKC.js";
import "./chunk-BIGDKMS7.js";
import "./chunk-RSLHKDCR.js";
import "./chunk-H7VTUQ3B.js";
import "./chunk-HQHIWYWO.js";
import "./chunk-PV6FWBJN.js";
import {
  TestBed,
  init_testing
} from "./chunk-SXCZ3RJK.js";
import {
  Component,
  __decorate,
  init_core,
  init_tslib_es6
} from "./chunk-W6MIRXHE.js";
import {
  __async,
  __commonJS,
  __esm
} from "./chunk-FWMZPJRE.js";

// angular:jit:template:src/app/features/manage/manage-users/roles-permissions/roles-permissions.component.html
var roles_permissions_component_default;
var init_roles_permissions_component = __esm({
  "angular:jit:template:src/app/features/manage/manage-users/roles-permissions/roles-permissions.component.html"() {
    roles_permissions_component_default = '\n			<!-- Start Content -->\n            <div class="content-two">\n\n                <!-- Page Header -->\n                <div class="d-flex d-block align-items-center justify-content-between flex-wrap gap-3 mb-3">\n                    <div>\n                        <h6>Roles & Permission</h6>\n                    </div>\n                    <div class="d-flex my-xl-auto right-content align-items-center flex-wrap gap-2">\n                        <div class="dropdown">\n                            <a href="javascript:void(0);" class="btn btn-outline-white d-inline-flex align-items-center" data-bs-toggle="dropdown">\n                                <i class="isax isax-export-1 me-1"></i>Export\n                            </a>\n                            <ul class="dropdown-menu">\n                                <li>\n                                    <a class="dropdown-item" href="javascript:void(0);">Download as PDF</a>\n                                </li>\n                                <li>\n                                    <a class="dropdown-item" href="javascript:void(0);">Download as Excel</a>\n                                </li>\n                            </ul>\n                        </div>\n                        <div>\n                            <a href="javascript:void(0);" class="btn btn-primary d-flex align-items-center" data-bs-toggle="modal" data-bs-target="#add_modal">\n                                <i class="isax isax-add-circle5 me-1"></i>New Role\n                            </a>\n                        </div>\n                    </div>\n                </div>\n                <!-- End Page Header -->\n\n				 <!-- start row -->\n                <div class="row">\n                    <div class="col-md-3">\n                        <div class="input-group mb-3">\n                            <span class="input-group-text bg-white border-end-0">\n								<i class="isax isax-search-normal fs-12"></i>\n							</span>\n                            <input type="text" class="form-control border-start-0 ps-0 bg-white" placeholder="Search">\n                        </div>\n                    </div><!-- end col -->\n                </div>\n				<!-- end row -->\n\n                <!-- Table List -->\n                <div class="table-responsive table-nowrap">\n                    <table class="table border mb-0">\n                        <thead class="table-light">\n                            <tr>\n                                <th>Role</th>\n                                <th>Create On</th>\n                                <th class="no-sort"></th>\n                                <th class="no-sort"></th>\n                            </tr>\n                        </thead>\n                        <tbody>\n                            <tr>\n                                <td class="bg-light"><span class="text-gray-3">Admin</span></td>\n                                <td class="bg-light"><span class="text-gray-3">22 Feb 2025</span></td>\n                                <td class="bg-light"></td>\n                                <td class="bg-light"></td>\n                            </tr>\n                            <tr>\n                                <td>Customer</td>\n                                <td>07 Feb 2025</td>\n                                <td>\n                                    <a [routerLink]="routes.permission" class="btn btn-outline-white d-inline-flex align-items-center">\n                                        <i class="isax isax-shield-tick me-1"></i> Permissions\n                                    </a>\n                                </td>\n                                <td class="action-item">\n                                    <a href="javascript:void(0);" data-bs-toggle="dropdown">\n                                        <i class="isax isax-more"></i>\n                                    </a>\n                                    <ul class="dropdown-menu">\n                                        <li>\n                                            <a href="javascript:void(0);" class="dropdown-item d-flex align-items-center" data-bs-toggle="modal" data-bs-target="#edit_modal"><i class="isax isax-edit me-2"></i>Edit</a>\n                                        </li>\n                                        <li>\n                                            <a href="javascript:void(0);" class="dropdown-item d-flex align-items-center" data-bs-toggle="modal" data-bs-target="#delete_modal"><i class="isax isax-trash me-2"></i>Delete</a>\n                                        </li>\n                                    </ul>\n                                </td>\n                            </tr>\n                            <tr>\n                                <td>Shop Owner</td>\n                                <td>30 Jan 2025</td>\n                                <td>\n                                    <a [routerLink]="routes.permission" class="btn btn-outline-white d-inline-flex align-items-center">\n                                        <i class="isax isax-shield-tick me-1"></i> Permissions\n                                    </a>\n                                </td>\n                                <td class="action-item">\n                                    <a href="javascript:void(0);" data-bs-toggle="dropdown">\n                                        <i class="isax isax-more"></i>\n                                    </a>\n                                    <ul class="dropdown-menu">\n                                        <li>\n                                            <a href="javascript:void(0);" class="dropdown-item d-flex align-items-center" data-bs-toggle="modal" data-bs-target="#edit_modal"><i class="isax isax-edit me-2"></i>Edit</a>\n                                        </li>\n                                        <li>\n                                            <a href="javascript:void(0);" class="dropdown-item d-flex align-items-center" data-bs-toggle="modal" data-bs-target="#delete_modal"><i class="isax isax-trash me-2"></i>Delete</a>\n                                        </li>\n                                    </ul>\n                                </td>\n                            </tr>\n                            <tr>\n                                <td>Receptionist</td>\n                                <td>04 Jan 2025</td>\n                                <td>\n                                    <a [routerLink]="routes.permission" class="btn btn-outline-white d-inline-flex align-items-center">\n                                        <i class="isax isax-shield-tick me-1"></i> Permissions\n                                    </a>\n                                </td>\n                                <td class="action-item">\n                                    <a href="javascript:void(0);" data-bs-toggle="dropdown">\n                                        <i class="isax isax-more"></i>\n                                    </a>\n                                    <ul class="dropdown-menu">\n                                        <li>\n                                            <a href="javascript:void(0);" class="dropdown-item d-flex align-items-center" data-bs-toggle="modal" data-bs-target="#edit_modal"><i class="isax isax-edit me-2"></i>Edit</a>\n                                        </li>\n                                        <li>\n                                            <a href="javascript:void(0);" class="dropdown-item d-flex align-items-center" data-bs-toggle="modal" data-bs-target="#delete_modal"><i class="isax isax-trash me-2"></i>Delete</a>\n                                        </li>\n                                    </ul>\n                                </td>\n                            </tr>\n                        </tbody>\n                    </table>\n                </div>\n                <!-- /Table List -->\n\n            </div>\n			<!-- End Content -->\n\n\n\n                    <!-- Start Add Modal  -->\n        <div id="add_modal" class="modal fade">\n            <div class="modal-dialog modal-dialog-centered modal-md">\n                <div class="modal-content">\n					<!-- Start modal header -->\n                    <div class="modal-header">\n                        <h4 class="modal-title">Add New Role</h4>\n                        <button type="button" class="btn-close btn-close-modal custom-btn-close" data-bs-dismiss="modal" aria-label="Close"><i class="fa-solid fa-x"></i></button>\n                    </div>\n					<!-- End modal header -->\n\n                    <form>\n                        <div class="modal-body">\n                            <div class="mb-0">\n                                <label class="form-label">Role Name</label>\n                                <input type="text" class="form-control">\n                            </div>\n                        </div>\n                        <div class="modal-footer d-flex align-items-center justify-content-between gap-1">\n                            <button type="button" class="btn btn-outline-white" data-bs-dismiss="modal">Cancel</button>\n                            <button type="submit" class="btn btn-primary" data-bs-dismiss="modal">Create</button>\n                        </div>\n                    </form>\n                </div><!-- End modal content-->\n			</div><!-- End modal dialog-->\n        </div>\n        <!-- / End Add Modal -->\n\n        <!-- Start Edit Modal  -->\n        <div id="edit_modal" class="modal fade">\n            <div class="modal-dialog modal-dialog-centered modal-md">\n                <div class="modal-content">\n					<!-- Start modal header -->\n                    <div class="modal-header">\n                        <h4 class="modal-title">Edit Role</h4>\n                        <button type="button" class="btn-close btn-close-modal custom-btn-close" data-bs-dismiss="modal" aria-label="Close"><i class="fa-solid fa-x"></i></button>\n                    </div>\n					<!-- End modal header -->\n\n                    <form>\n                        <div class="modal-body">\n                            <div class="mb-0">\n                                <label class="form-label">Role Name</label>\n                                <input type="text" class="form-control" value="Admin">\n                            </div>\n                        </div>\n                        <div class="modal-footer d-flex align-items-center justify-content-between gap-1">\n                            <button type="button" class="btn btn-outline-white" data-bs-dismiss="modal">Cancel</button>\n                            <button type="submit" class="btn btn-primary" data-bs-dismiss="modal">Save Changes</button>\n                        </div>\n                    </form>\n                </div><!-- End modal content-->\n			</div><!-- End modal dialog-->\n        </div>\n        <!-- / End Edit Modal -->\n\n        <!-- Start Delete Modal  -->\n        <div class="modal fade" id="delete_modal">\n            <div class="modal-dialog modal-dialog-centered modal-sm">\n                <div class="modal-content">\n                    <div class="modal-body text-center">\n                        <div class="mb-3">\n                            <img src="assets/img/icons/delete.svg" alt="img">\n                        </div>\n                        <h6 class="mb-1">Delete Role</h6>\n                        <p class="mb-3">Are you sure, you want to delete role?</p>\n                        <div class="d-flex justify-content-center">\n                            <a href="javascript:void(0);" class="btn btn-outline-white me-3" data-bs-dismiss="modal">Cancel</a>\n                            <a href="javascript:void(0);" class="btn btn-primary" data-bs-dismiss="modal">Yes, Delete</a>\n                        </div>\n                    </div><!-- End modal body -->\n                </div><!-- End modal content-->\n			</div><!-- End modal dialog-->\n        </div>\n        <!-- / End Delete Modal  -->';
  }
});

// angular:jit:style:src/app/features/manage/manage-users/roles-permissions/roles-permissions.component.scss
var roles_permissions_component_default2;
var init_roles_permissions_component2 = __esm({
  "angular:jit:style:src/app/features/manage/manage-users/roles-permissions/roles-permissions.component.scss"() {
    roles_permissions_component_default2 = "/* src/app/features/manage/manage-users/roles-permissions/roles-permissions.component.scss */\n/*# sourceMappingURL=roles-permissions.component.css.map */\n";
  }
});

// src/app/features/manage/manage-users/roles-permissions/roles-permissions.component.ts
var RolesPermissionsComponent;
var init_roles_permissions_component3 = __esm({
  "src/app/features/manage/manage-users/roles-permissions/roles-permissions.component.ts"() {
    "use strict";
    init_tslib_es6();
    init_roles_permissions_component();
    init_roles_permissions_component2();
    init_core();
    init_core_index();
    init_router();
    RolesPermissionsComponent = class RolesPermissionsComponent2 {
      routes = routes;
    };
    RolesPermissionsComponent = __decorate([
      Component({
        selector: "app-roles-permissions",
        imports: [RouterLink],
        template: roles_permissions_component_default,
        styles: [roles_permissions_component_default2]
      })
    ], RolesPermissionsComponent);
  }
});

// src/app/features/manage/manage-users/roles-permissions/roles-permissions.component.spec.ts
var require_roles_permissions_component_spec = __commonJS({
  "src/app/features/manage/manage-users/roles-permissions/roles-permissions.component.spec.ts"(exports) {
    init_testing();
    init_roles_permissions_component3();
    describe("RolesPermissionsComponent", () => {
      let component;
      let fixture;
      beforeEach(() => __async(null, null, function* () {
        yield TestBed.configureTestingModule({
          declarations: [RolesPermissionsComponent]
        }).compileComponents();
        fixture = TestBed.createComponent(RolesPermissionsComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
      }));
      it("should create", () => {
        expect(component).toBeTruthy();
      });
    });
  }
});
export default require_roles_permissions_component_spec();
//# sourceMappingURL=spec-app-features-manage-manage-users-roles-permissions-roles-permissions.component.spec.js.map

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

// angular:jit:template:src/app/features/setting/other-settings/database-backup/database-backup.component.html
var database_backup_component_default;
var init_database_backup_component = __esm({
  "angular:jit:template:src/app/features/setting/other-settings/database-backup/database-backup.component.html"() {
    database_backup_component_default = '<div class="">\n    <div>\n        <div class="pb-3 border-bottom mb-3">\n            <h6 class="mb-0">Database Backup</h6>\n        </div>\n\n        <!-- Table Search -->\n        <div class="row justify-content-between align-items-center pb-1">\n            <div class="col-md-5 mb-3">\n                <div class="input-icon-start position-relative">\n                    <span class="input-icon-addon">\n                        <i class="isax isax-search-normal"></i>\n                    </span>\n                    <input type="text" class="form-control form-control-sm bg-white" placeholder="Search">\n\n                </div>\n            </div>\n            <div class="col-md-7 text-end mb-3">\n                <a href="javascript:void(0);" class="btn btn-primary d-inline-flex align-items-center" data-bs-toggle="modal" data-bs-target="#generate_modal"><i class="isax isax-folder-connection5 me-1"></i>Generate Backup</a>\n            </div>\n        </div>\n        <!-- /Table Search -->\n         \n        <!-- Table List -->\n        <div class="table-responsive table-nowrap">\n            <table class="table border dataTable">\n                <thead class="table-light">\n                    <tr>\n                        <th class="no-sort">Template Name</th>\n                        <th class="no-sort">Created On</th>\n                        <th></th>\n                    </tr>\n                </thead>\n                <tbody>\n                    <tr>\n                        <td>\n                            <p class="text-dark">sales_db_backup_20250312.sql</p>\n                        </td>\n                        <td>\n                            22 Feb 2025\n                        </td>\n                        <td class="action-item">\n                            <a href="javascript:void(0);" data-bs-toggle="dropdown">\n                                <i class="isax isax-more"></i>\n                            </a>\n                            <ul class="dropdown-menu">\n                                <li>\n                                    <a href="javascript:void(0);" class="dropdown-item d-flex align-items-center" data-bs-toggle="modal" data-bs-target="#delete_modal"><i class="isax isax-trash me-2"></i>Delete</a>\n                                </li>\n                            </ul>\n                        </td>\n                    </tr>\n                    <tr>\n                        <td>\n                            <p class="text-dark">invoice_db_backup_2025-03-12_1430.sql</p>\n                        </td>\n                        <td>\n                            07 Feb 2025\n                        </td>\n                        <td class="action-item">\n                            <a href="javascript:void(0);" data-bs-toggle="dropdown">\n                                <i class="isax isax-more"></i>\n                            </a>\n                            <ul class="dropdown-menu">\n                                <li>\n                                    <a href="javascript:void(0);" class="dropdown-item d-flex align-items-center" data-bs-toggle="modal" data-bs-target="#delete_modal"><i class="isax isax-trash me-2"></i>Delete</a>\n                                </li>\n                            </ul>\n                        </td>\n                    </tr>\n                    <tr>\n                        <td>\n                            <p class="text-dark">customer_db_backup_2025-03-12.sql</p>\n                        </td>\n                        <td>\n                            30 Jan 2025\n                        </td>\n                        <td class="action-item">\n                            <a href="javascript:void(0);" data-bs-toggle="dropdown">\n                                <i class="isax isax-more"></i>\n                            </a>\n                            <ul class="dropdown-menu">\n                                <li>\n                                    <a href="javascript:void(0);" class="dropdown-item d-flex align-items-center" data-bs-toggle="modal" data-bs-target="#delete_modal"><i class="isax isax-trash me-2"></i>Delete</a>\n                                </li>\n                            </ul>\n                        </td>\n                    </tr>\n                    <tr>\n                        <td>\n                            <p class="text-dark">full_backup_2025-03-12.sql</p>\n                        </td>\n                        <td>\n                            02 Jan 2025\n                        </td>\n                        <td class="action-item">\n                            <a href="javascript:void(0);" data-bs-toggle="dropdown">\n                                <i class="isax isax-more"></i>\n                            </a>\n                            <ul class="dropdown-menu">\n                                <li>\n                                    <a href="javascript:void(0);" class="dropdown-item d-flex align-items-center" data-bs-toggle="modal" data-bs-target="#delete_modal"><i class="isax isax-trash me-2"></i>Delete</a>\n                                </li>\n                            </ul>\n                        </td>\n                    </tr>\n                </tbody>\n            </table>\n        </div>\n        <!-- /Table List -->\n    </div>\n</div><!-- end col -->\n\n\n        <!-- Generate Modal Start -->\n        <div class="modal fade" id="generate_modal">\n            <div class="modal-dialog modal-dialog-centered modal-sm">\n                <div class="modal-content">\n                    <div class="modal-body text-center">\n                        <div class="mb-3">\n                            <i class="isax isax-folder-24 fs-48 text-primary fw-normal"></i>\n                        </div>\n                        <h6 class="mb-1">Generate Backup</h6>\n                        <p class="mb-3">Are you sure you want to generate database backup?</p>\n                        <div class="d-flex justify-content-center">\n                            <a href="javascript:void(0);" class="btn btn-outline-white me-3" data-bs-dismiss="modal">Cancel</a>\n                            <a href="javascript:void(0);" class="btn btn-primary" data-bs-dismiss="modal">Generate</a>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n        <!-- /Generate Modal End -->\n\n\n        <!-- Delete Modal Start -->\n        <div class="modal fade" id="delete_modal">\n            <div class="modal-dialog modal-dialog-centered modal-sm">\n                <div class="modal-content">\n                    <div class="modal-body text-center">\n                        <div class="mb-3">\n                            <img src="assets/img/icons/delete.svg" alt="img">\n                        </div>\n                        <h6 class="mb-1">Delete Databse</h6>\n                        <p class="mb-3">Are you sure, you want to delete Databse?</p>\n                        <div class="d-flex justify-content-center">\n                            <a href="javascript:void(0);" class="btn btn-outline-white me-3" data-bs-dismiss="modal">Cancel</a>\n                            <a href="javascript:void(0);" class="btn btn-primary" data-bs-dismiss="modal">Yes, Delete</a>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n        <!-- /Delete Modal End -->';
  }
});

// angular:jit:style:src/app/features/setting/other-settings/database-backup/database-backup.component.scss
var database_backup_component_default2;
var init_database_backup_component2 = __esm({
  "angular:jit:style:src/app/features/setting/other-settings/database-backup/database-backup.component.scss"() {
    database_backup_component_default2 = "/* src/app/features/setting/other-settings/database-backup/database-backup.component.scss */\n/*# sourceMappingURL=database-backup.component.css.map */\n";
  }
});

// src/app/features/setting/other-settings/database-backup/database-backup.component.ts
var DatabaseBackupComponent;
var init_database_backup_component3 = __esm({
  "src/app/features/setting/other-settings/database-backup/database-backup.component.ts"() {
    "use strict";
    init_tslib_es6();
    init_database_backup_component();
    init_database_backup_component2();
    init_core();
    DatabaseBackupComponent = class DatabaseBackupComponent2 {
    };
    DatabaseBackupComponent = __decorate([
      Component({
        selector: "app-database-backup",
        imports: [],
        template: database_backup_component_default,
        styles: [database_backup_component_default2]
      })
    ], DatabaseBackupComponent);
  }
});

// src/app/features/setting/other-settings/database-backup/database-backup.component.spec.ts
var require_database_backup_component_spec = __commonJS({
  "src/app/features/setting/other-settings/database-backup/database-backup.component.spec.ts"(exports) {
    init_testing();
    init_database_backup_component3();
    describe("DatabaseBackupComponent", () => {
      let component;
      let fixture;
      beforeEach(() => __async(null, null, function* () {
        yield TestBed.configureTestingModule({
          declarations: [DatabaseBackupComponent]
        }).compileComponents();
        fixture = TestBed.createComponent(DatabaseBackupComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
      }));
      it("should create", () => {
        expect(component).toBeTruthy();
      });
    });
  }
});
export default require_database_backup_component_spec();
//# sourceMappingURL=spec-app-features-setting-other-settings-database-backup-database-backup.component.spec.js.map

import {
  Component,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵdefineComponent,
  ɵɵdomElement,
  ɵɵdomElementEnd,
  ɵɵdomElementStart,
  ɵɵtext
} from "./chunk-U4CEU3KS.js";
import "./chunk-TXDUYLVM.js";

// src/app/modules/setting/presentation/pages/other-settings/system-backup/system-backup.component.ts
var SystemBackupComponent = class _SystemBackupComponent {
  static \u0275fac = function SystemBackupComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _SystemBackupComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SystemBackupComponent, selectors: [["app-system-backup"]], decls: 111, vars: 0, consts: [[1, ""], [1, "pb-3", "border-bottom", "mb-3"], [1, "mb-0"], [1, "row", "justify-content-between", "align-items-center", "pb-1"], [1, "col-md-5", "mb-3"], [1, "input-icon-start", "position-relative"], [1, "input-icon-addon"], [1, "isax", "isax-search-normal"], ["type", "text", "placeholder", "Search", 1, "form-control", "form-control-sm", "bg-white"], [1, "col-md-7", "text-end", "mb-3"], ["href", "javascript:void(0);", "data-bs-toggle", "modal", "data-bs-target", "#generate_modal", 1, "btn", "btn-primary", "d-inline-flex", "align-items-center"], [1, "isax", "isax-folder-connection5", "me-1"], [1, "table-responsive", "table-nowrap"], [1, "table", "border", "dataTable"], [1, "table-light"], [1, "no-sort"], [1, "text-dark"], [1, "action-item"], ["href", "javascript:void(0);", "data-bs-toggle", "dropdown"], [1, "isax", "isax-more"], [1, "dropdown-menu"], ["href", "javascript:void(0);", "data-bs-toggle", "modal", "data-bs-target", "#delete_modal", 1, "dropdown-item", "d-flex", "align-items-center"], [1, "isax", "isax-trash", "me-2"], ["id", "generate_modal", 1, "modal", "fade"], [1, "modal-dialog", "modal-dialog-centered", "modal-sm"], [1, "modal-content"], [1, "modal-body", "text-center"], [1, "mb-3"], [1, "isax", "isax-folder-24", "fs-48", "text-primary", "fw-normal"], [1, "mb-1"], [1, "d-flex", "justify-content-center"], ["href", "javascript:void(0);", "data-bs-dismiss", "modal", 1, "btn", "btn-outline-white", "me-3"], ["href", "javascript:void(0);", "data-bs-dismiss", "modal", 1, "btn", "btn-primary"], ["id", "delete_modal", 1, "modal", "fade"], ["src", "assets/img/icons/delete.svg", "alt", "img"]], template: function SystemBackupComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275domElementStart(0, "div", 0)(1, "div")(2, "div", 1)(3, "h6", 2);
      \u0275\u0275text(4, "System Backup");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(5, "div", 3)(6, "div", 4)(7, "div", 5)(8, "span", 6);
      \u0275\u0275domElement(9, "i", 7);
      \u0275\u0275domElementEnd();
      \u0275\u0275domElement(10, "input", 8);
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(11, "div", 9)(12, "a", 10);
      \u0275\u0275domElement(13, "i", 11);
      \u0275\u0275text(14, "Generate Backup");
      \u0275\u0275domElementEnd()()();
      \u0275\u0275domElementStart(15, "div", 12)(16, "table", 13)(17, "thead", 14)(18, "tr")(19, "th", 15);
      \u0275\u0275text(20, "Template Name");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(21, "th", 15);
      \u0275\u0275text(22, "Created On");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElement(23, "th");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(24, "tbody")(25, "tr")(26, "td")(27, "p", 16);
      \u0275\u0275text(28, "customer_data_backup_2025.txt");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(29, "td");
      \u0275\u0275text(30, " 22 Feb 2025 ");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(31, "td", 17)(32, "a", 18);
      \u0275\u0275domElement(33, "i", 19);
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(34, "ul", 20)(35, "li")(36, "a", 21);
      \u0275\u0275domElement(37, "i", 22);
      \u0275\u0275text(38, "Delete");
      \u0275\u0275domElementEnd()()()()();
      \u0275\u0275domElementStart(39, "tr")(40, "td")(41, "p", 16);
      \u0275\u0275text(42, "invoice_records_backup_2024.txt");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(43, "td");
      \u0275\u0275text(44, " 07 Feb 2025 ");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(45, "td", 17)(46, "a", 18);
      \u0275\u0275domElement(47, "i", 19);
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(48, "ul", 20)(49, "li")(50, "a", 21);
      \u0275\u0275domElement(51, "i", 22);
      \u0275\u0275text(52, "Delete");
      \u0275\u0275domElementEnd()()()()();
      \u0275\u0275domElementStart(53, "tr")(54, "td")(55, "p", 16);
      \u0275\u0275text(56, "sales_transactions_2024.txt");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(57, "td");
      \u0275\u0275text(58, " 30 Jan 2025 ");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(59, "td", 17)(60, "a", 18);
      \u0275\u0275domElement(61, "i", 19);
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(62, "ul", 20)(63, "li")(64, "a", 21);
      \u0275\u0275domElement(65, "i", 22);
      \u0275\u0275text(66, "Delete");
      \u0275\u0275domElementEnd()()()()();
      \u0275\u0275domElementStart(67, "tr")(68, "td")(69, "p", 16);
      \u0275\u0275text(70, "payment_transactions_2024");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(71, "td");
      \u0275\u0275text(72, " 02 Jan 2025 ");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(73, "td", 17)(74, "a", 18);
      \u0275\u0275domElement(75, "i", 19);
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(76, "ul", 20)(77, "li")(78, "a", 21);
      \u0275\u0275domElement(79, "i", 22);
      \u0275\u0275text(80, "Delete");
      \u0275\u0275domElementEnd()()()()()()()()()();
      \u0275\u0275domElementStart(81, "div", 23)(82, "div", 24)(83, "div", 25)(84, "div", 26)(85, "div", 27);
      \u0275\u0275domElement(86, "i", 28);
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(87, "h6", 29);
      \u0275\u0275text(88, "Generate Backup");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(89, "p", 27);
      \u0275\u0275text(90, "Are you sure you want to generate database backup?");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(91, "div", 30)(92, "a", 31);
      \u0275\u0275text(93, "Cancel");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(94, "a", 32);
      \u0275\u0275text(95, "Generate");
      \u0275\u0275domElementEnd()()()()()();
      \u0275\u0275domElementStart(96, "div", 33)(97, "div", 24)(98, "div", 25)(99, "div", 26)(100, "div", 27);
      \u0275\u0275domElement(101, "img", 34);
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(102, "h6", 29);
      \u0275\u0275text(103, "Delete System Backup");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(104, "p", 27);
      \u0275\u0275text(105, "Are you sure, you want to delete System Backup?");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(106, "div", 30)(107, "a", 31);
      \u0275\u0275text(108, "Cancel");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(109, "a", 32);
      \u0275\u0275text(110, "Yes, Delete");
      \u0275\u0275domElementEnd()()()()()();
    }
  }, encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SystemBackupComponent, [{
    type: Component,
    args: [{ selector: "app-system-backup", imports: [], template: '<div class="">\n    <div>\n        <div class="pb-3 border-bottom mb-3">\n            <h6 class="mb-0">System Backup</h6>\n        </div>\n        \n        <!-- start row -->\n        <div class="row justify-content-between align-items-center pb-1">\n            <div class="col-md-5 mb-3">\n                <div class="input-icon-start position-relative">\n                    <span class="input-icon-addon">\n                        <i class="isax isax-search-normal"></i>\n                    </span>\n                    <input type="text" class="form-control form-control-sm bg-white" placeholder="Search">\n                </div>	\n            </div><!-- end col -->\n            <div class="col-md-7 text-end mb-3">\n                <a href="javascript:void(0);" class="btn btn-primary d-inline-flex align-items-center" data-bs-toggle="modal" data-bs-target="#generate_modal"><i class="isax isax-folder-connection5 me-1"></i>Generate Backup</a>\n            </div><!-- end col -->\n        </div>\n        <!-- end row -->\n\n        <!-- Table List -->\n        <div class="table-responsive table-nowrap">\n            <table class="table border dataTable">\n                <thead class="table-light">\n                    <tr>\n                        <th class="no-sort">Template Name</th>\n                        <th class="no-sort">Created On</th>\n                        <th></th>\n                    </tr>\n                </thead>\n                <tbody>\n                    <tr>\n                        <td>\n                            <p class="text-dark">customer_data_backup_2025.txt</p>\n                        </td>\n                        <td>\n                            22 Feb 2025\n                        </td>\n                        <td class="action-item">\n                            <a href="javascript:void(0);" data-bs-toggle="dropdown">\n                                <i class="isax isax-more"></i>\n                            </a>\n                            <ul class="dropdown-menu">\n                                <li>\n                                    <a href="javascript:void(0);" class="dropdown-item d-flex align-items-center" data-bs-toggle="modal" data-bs-target="#delete_modal"><i class="isax isax-trash me-2"></i>Delete</a>\n                                </li>\n                            </ul>\n                        </td>\n                    </tr>\n                    <tr>\n                        <td>\n                            <p class="text-dark">invoice_records_backup_2024.txt</p>\n                        </td>\n                        <td>\n                            07 Feb 2025\n                        </td>\n                        <td class="action-item">\n                            <a href="javascript:void(0);" data-bs-toggle="dropdown">\n                                <i class="isax isax-more"></i>\n                            </a>\n                            <ul class="dropdown-menu">\n                                <li>\n                                    <a href="javascript:void(0);" class="dropdown-item d-flex align-items-center" data-bs-toggle="modal" data-bs-target="#delete_modal"><i class="isax isax-trash me-2"></i>Delete</a>\n                                </li>\n                            </ul>\n                        </td>\n                    </tr>\n                    <tr>\n                        <td>\n                            <p class="text-dark">sales_transactions_2024.txt</p>\n                        </td>\n                        <td>\n                            30 Jan 2025\n                        </td>\n                        <td class="action-item">\n                            <a href="javascript:void(0);" data-bs-toggle="dropdown">\n                                <i class="isax isax-more"></i>\n                            </a>\n                            <ul class="dropdown-menu">\n                                <li>\n                                    <a href="javascript:void(0);" class="dropdown-item d-flex align-items-center" data-bs-toggle="modal" data-bs-target="#delete_modal"><i class="isax isax-trash me-2"></i>Delete</a>\n                                </li>\n                            </ul>\n                        </td>\n                    </tr>\n                    <tr>\n                        <td>\n                            <p class="text-dark">payment_transactions_2024</p>\n                        </td>\n                        <td>\n                            02 Jan 2025\n                        </td>\n                        <td class="action-item">\n                            <a href="javascript:void(0);" data-bs-toggle="dropdown">\n                                <i class="isax isax-more"></i>\n                            </a>\n                            <ul class="dropdown-menu">\n                                <li>\n                                    <a href="javascript:void(0);" class="dropdown-item d-flex align-items-center" data-bs-toggle="modal" data-bs-target="#delete_modal"><i class="isax isax-trash me-2"></i>Delete</a>\n                                </li>\n                            </ul>\n                        </td>\n                    </tr>\n                </tbody>\n            </table>\n        </div>\n        <!-- /Table List -->\n\n    </div>\n</div><!-- end col -->\n\n\n        <!-- Add Modal Start -->\n		<div class="modal fade" id="generate_modal">\n			<div class="modal-dialog modal-dialog-centered modal-sm">\n				<div class="modal-content">\n					<div class="modal-body text-center">\n						<div class="mb-3">\n							<i class="isax isax-folder-24 fs-48 text-primary fw-normal"></i>\n						</div>\n						<h6 class="mb-1">Generate Backup</h6>\n						<p class="mb-3">Are you sure you want to generate database backup?</p>\n						<div class="d-flex justify-content-center">\n							<a href="javascript:void(0);" class="btn btn-outline-white me-3" data-bs-dismiss="modal">Cancel</a>\n							<a href="javascript:void(0);" class="btn btn-primary" data-bs-dismiss="modal">Generate</a>\n						</div>\n					</div>\n				</div>\n			</div>\n		</div>\n		<!-- Add Modal End -->\n\n\n        <!-- Delete Modal Start -->\n		<div class="modal fade" id="delete_modal">\n			<div class="modal-dialog modal-dialog-centered modal-sm">\n				<div class="modal-content">\n					<div class="modal-body text-center">\n						<div class="mb-3">\n							<img src="assets/img/icons/delete.svg" alt="img">\n						</div>\n						<h6 class="mb-1">Delete System Backup</h6>\n						<p class="mb-3">Are you sure,  you want to delete System Backup?</p>\n						<div class="d-flex justify-content-center">\n							<a href="javascript:void(0);" class="btn btn-outline-white me-3" data-bs-dismiss="modal">Cancel</a>\n							<a href="javascript:void(0);" class="btn btn-primary" data-bs-dismiss="modal">Yes, Delete</a>\n						</div>\n					</div>\n				</div>\n			</div>\n		</div>\n		<!-- Delete Modal End -->' }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SystemBackupComponent, { className: "SystemBackupComponent", filePath: "src/app/modules/setting/presentation/pages/other-settings/system-backup/system-backup.component.ts", lineNumber: 9 });
})();
export {
  SystemBackupComponent
};
//# sourceMappingURL=chunk-MYMPFYEN.js.map

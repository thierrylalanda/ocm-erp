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
import {
  CommonModule,
  init_common
} from "./chunk-HQHIWYWO.js";
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

// angular:jit:template:src/app/features/notifications/notifications.component.html
var notifications_component_default;
var init_notifications_component = __esm({
  "angular:jit:template:src/app/features/notifications/notifications.component.html"() {
    notifications_component_default = '            <!-- Start Content -->\n            <div class="content-two">\n\n                <!-- Start Breadcrumb -->\n                <div class="mb-3">\n					<h6>All Notifications</h6>\n				</div>\n                <!-- End Breadcrumb -->\n\n                <div class="card mb-3">\n                    <div class="card-body">\n                        <div class="d-flex align-items-center">\n                            <div class="d-flex me-2">\n                                <a [routerLink]="routes.profile" class="avatar avatar-lg avatar-rounded">\n                                    <img src="assets/img/profiles/avatar-19.jpg" alt="Elwis Mathew">\n                                </a>\n                            </div>\n                            <div class="flex-fill ml-3">\n                                <p class=" mb-0"><a [routerLink]="routes.profile" class="fs-14 fw-semibold">Elwis Mathew</a> <span>added a new product</span> <a [routerLink]="routes.profile" class="fs-14 fw-semibold">Redmi Pro 7 Mobile</a></p>\n                                <span><i class="ti ti-clock me-1"></i>Just Now</span>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n\n                <div class="card mb-3">\n                    <div class="card-body">\n                        <div class="d-flex align-items-center">\n                            <div class="d-flex me-2">\n                                <a [routerLink]="routes.profile" class="avatar avatar-lg avatar-rounded">\n                                    <img src="assets/img/profiles/avatar-18.jpg" alt="Elizabeth Olsen">\n                                </a>\n                            </div>\n                            <div class="flex-fill ml-3">\n                                <p class=" mb-0"><a [routerLink]="routes.profile" class="fs-14 fw-semibold">Elizabeth Olsen</a> <span>added a new product category</span> <a [routerLink]="routes.profile" class="fs-14 fw-semibold">Desktop Computers</a></p>\n                                <span class="fs-12 d-flex align-items-center"><i class="ti ti-clock me-1"></i>4 min ago</span>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n\n                <div class="card mb-3">\n                    <div class="card-body">\n                        <div class="d-flex align-items-center">\n                            <div class="d-flex me-2">\n                                <a [routerLink]="routes.profile" class="avatar avatar-lg avatar-rounded">\n                                    <img src="assets/img/profiles/avatar-17.jpg" alt="William Smith">\n                                </a>\n                            </div>\n                            <div class="flex-fill ml-3">\n                                <p class=" mb-0"><a [routerLink]="routes.profile" class="fs-14 fw-semibold">William Smith</a> <span>added a new sales list for</span> <a [routerLink]="routes.profile" class="fs-14 fw-semibold">January Month</a></p>\n                                <span class="fs-12 d-flex align-items-center"><i class="ti ti-clock me-1"></i>6 min ago</span>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n\n                <div class="card mb-3">\n                    <div class="card-body">\n                        <div class="d-flex align-items-center">\n                            <div class="d-flex me-2">\n                                <a [routerLink]="routes.profile" class="avatar avatar-lg avatar-rounded">\n                                    <img src="assets/img/profiles/avatar-15.jpg" alt="Lesley Grauer">\n                                </a>\n                            </div>\n                            <div class="flex-fill ml-3">\n                                <p class=" mb-0"><a [routerLink]="routes.profile" class="fs-14 fw-semibold">Lesley Grauer</a> <span>has updated invoice</span> <a [routerLink]="routes.profile" class="fs-14 fw-semibold">#987654</a></p>\n                                <span class="fs-12 d-flex align-items-center"><i class="ti ti-clock me-1"></i>12 min ago</span>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n\n                <div class="card mb-3">\n                    <div class="card-body">\n                        <div class="d-flex align-items-center">\n                            <div class="d-flex me-2">\n                                <a [routerLink]="routes.profile" class="avatar avatar-lg bg-success avatar-rounded">\n                                    <span class="avatar-title text-white">CE</span>\n                                </a>\n                            </div>\n                            <div class="flex-fill ml-3">\n                                <p class=" mb-0"><a [routerLink]="routes.profile" class="fs-14 fw-semibold">Carl Evans</a> <span>adjust the stock</span> <a [routerLink]="routes.profile" class="fs-14 fw-semibold">Apple Series 5 Watch</a></p>\n                                <span class="fs-12 d-flex align-items-center"><i class="ti ti-clock me-1"></i>2 days ago</span>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n\n                <div class="card mb-0">\n                    <div class="card-body">\n                        <div class="d-flex align-items-center">\n                            <div class="d-flex me-2">\n                                <a [routerLink]="routes.profile" class="avatar avatar-lg bg-primary avatar-rounded">\n                                    <span class="avatar-title text-white">MR</span>\n                                </a>\n                            </div>\n                            <div class="flex-fill ml-3">\n                                <p class=" mb-0"><a [routerLink]="routes.profile" class="fs-14 fw-semibold">Minerva Rameriz</a> <span>accepted Quotation</span><a [routerLink]="routes.profile" class="fs-14 fw-semibold"> #QUO0001</a></p>\n                                <span class="fs-12 d-flex align-items-center"><i class="ti ti-clock me-1"></i>1 month ago</span>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n\n            </div>\n            <!-- End Content -->';
  }
});

// angular:jit:style:src/app/features/notifications/notifications.component.scss
var notifications_component_default2;
var init_notifications_component2 = __esm({
  "angular:jit:style:src/app/features/notifications/notifications.component.scss"() {
    notifications_component_default2 = "/* src/app/features/notifications/notifications.component.scss */\n/*# sourceMappingURL=notifications.component.css.map */\n";
  }
});

// src/app/features/notifications/notifications.component.ts
var NotificationsComponent;
var init_notifications_component3 = __esm({
  "src/app/features/notifications/notifications.component.ts"() {
    "use strict";
    init_tslib_es6();
    init_notifications_component();
    init_notifications_component2();
    init_core();
    init_core_index();
    init_common();
    init_router();
    NotificationsComponent = class NotificationsComponent2 {
      routes = routes;
    };
    NotificationsComponent = __decorate([
      Component({
        selector: "app-notifications",
        imports: [CommonModule, RouterLink],
        template: notifications_component_default,
        styles: [notifications_component_default2]
      })
    ], NotificationsComponent);
  }
});

// src/app/features/notifications/notifications.component.spec.ts
var require_notifications_component_spec = __commonJS({
  "src/app/features/notifications/notifications.component.spec.ts"(exports) {
    init_testing();
    init_notifications_component3();
    describe("NotificationsComponent", () => {
      let component;
      let fixture;
      beforeEach(() => __async(null, null, function* () {
        yield TestBed.configureTestingModule({
          declarations: [NotificationsComponent]
        }).compileComponents();
        fixture = TestBed.createComponent(NotificationsComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
      }));
      it("should create", () => {
        expect(component).toBeTruthy();
      });
    });
  }
});
export default require_notifications_component_spec();
//# sourceMappingURL=spec-app-features-notifications-notifications.component.spec.js.map

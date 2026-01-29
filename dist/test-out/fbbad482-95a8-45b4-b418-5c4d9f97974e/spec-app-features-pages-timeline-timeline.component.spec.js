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

// angular:jit:template:src/app/features/pages/timeline/timeline.component.html
var timeline_component_default;
var init_timeline_component = __esm({
  "angular:jit:template:src/app/features/pages/timeline/timeline.component.html"() {
    timeline_component_default = '			<!-- Start Content -->\n            <div class="content-two">\n\n                <!-- start row -->\n                <div class="row justify-content-center">\n                    <div class="col-lg-10">\n                        <div class="mb-3 border-bottom pb-3">\n                            <h6 class="mb-0">Timeline</h6>\n                        </div>\n                        <div class="card mb-0">\n                            <div class="card-body">\n                                <div class="d-flex align-items-center">\n                                    <p class="text-dark me-4 mb-0 timeline-date flex-shrink-0">07 Apr 2025</p>\n                                    <div class="border-start ps-4 py-4 border-circle position-relative">\n                                        <p class="text-dark fw-semibold mb-1">Invoice Marked as Paid</p>\n                                        <p>Status updated to Paid</p>\n                                    </div>\n                                </div>\n                                <div class="d-flex align-items-center">\n                                    <p class="text-dark me-4 mb-0 timeline-date flex-shrink-0">07 Apr 2025</p>\n                                    <div class="border-start ps-4 py-4 border-circle position-relative">\n                                        <p class="text-dark fw-semibold mb-1">Payment Received</p>\n                                        <p>Payment received for Invoice #INV-1025</p>\n                                    </div>\n                                </div>\n                                <div class="d-flex align-items-center">\n                                    <p class="text-dark me-4 mb-0 timeline-date flex-shrink-0">03 Apr 2025</p>\n                                    <div class="border-start ps-4 py-4 border-circle position-relative">\n                                        <p class="text-dark fw-semibold mb-1">Invoice Sent to Client</p>\n                                        <p>Invoice #INV-1025 emailed to billing&#64;abccorp.com</p>\n                                    </div>\n                                </div>\n                                <div class="d-flex align-items-center">\n                                    <p class="text-dark me-4 mb-0 timeline-date flex-shrink-0">02 Apr 2025</p>\n                                    <div class="border-start ps-4 py-4 border-circle position-relative">\n                                        <p class="text-dark fw-semibold mb-1">Invoice Approved</p>\n                                        <p>Invoice #INV-1025 approved for processing</p>\n                                    </div>\n                                </div>\n                                <div class="d-flex align-items-center">\n                                    <p class="text-dark me-4 mb-0 timeline-date flex-shrink-0">01 Apr 2025</p>\n                                    <div class="border-start ps-4 py-4 border-circle position-relative">\n                                        <p class="text-dark fw-semibold mb-1">Invoice Created</p>\n                                        <p>Invoice #INV-1025 was generated for Client: ABC Corp.</p>\n                                    </div>\n                                </div>\n                            </div><!-- end card body -->\n                        </div><!-- end card -->\n                    </div><!-- end col -->\n                </div>\n                <!-- end row -->\n\n            </div>\n			<!-- End Content -->';
  }
});

// angular:jit:style:src/app/features/pages/timeline/timeline.component.scss
var timeline_component_default2;
var init_timeline_component2 = __esm({
  "angular:jit:style:src/app/features/pages/timeline/timeline.component.scss"() {
    timeline_component_default2 = "/* src/app/features/pages/timeline/timeline.component.scss */\n/*# sourceMappingURL=timeline.component.css.map */\n";
  }
});

// src/app/features/pages/timeline/timeline.component.ts
var TimelineComponent;
var init_timeline_component3 = __esm({
  "src/app/features/pages/timeline/timeline.component.ts"() {
    "use strict";
    init_tslib_es6();
    init_timeline_component();
    init_timeline_component2();
    init_core();
    TimelineComponent = class TimelineComponent2 {
    };
    TimelineComponent = __decorate([
      Component({
        selector: "app-timeline",
        imports: [],
        template: timeline_component_default,
        styles: [timeline_component_default2]
      })
    ], TimelineComponent);
  }
});

// src/app/features/pages/timeline/timeline.component.spec.ts
var require_timeline_component_spec = __commonJS({
  "src/app/features/pages/timeline/timeline.component.spec.ts"(exports) {
    init_testing();
    init_timeline_component3();
    describe("TimelineComponent", () => {
      let component;
      let fixture;
      beforeEach(() => __async(null, null, function* () {
        yield TestBed.configureTestingModule({
          declarations: [TimelineComponent]
        }).compileComponents();
        fixture = TestBed.createComponent(TimelineComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
      }));
      it("should create", () => {
        expect(component).toBeTruthy();
      });
    });
  }
});
export default require_timeline_component_spec();
//# sourceMappingURL=spec-app-features-pages-timeline-timeline.component.spec.js.map

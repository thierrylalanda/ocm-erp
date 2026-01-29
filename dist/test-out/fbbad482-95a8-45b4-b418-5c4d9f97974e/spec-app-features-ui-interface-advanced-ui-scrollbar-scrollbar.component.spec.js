import {
  ScrollingModule,
  init_scrolling
} from "./chunk-BAYPUVG5.js";
import "./chunk-MTEB3W4S.js";
import {
  FormsModule,
  init_forms
} from "./chunk-2RBILSOV.js";
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
  ChangeDetectionStrategy,
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

// angular:jit:template:src/app/features/ui-interface/advanced-ui/scrollbar/scrollbar.component.html
var scrollbar_component_default;
var init_scrollbar_component = __esm({
  "angular:jit:template:src/app/features/ui-interface/advanced-ui/scrollbar/scrollbar.component.html"() {
    scrollbar_component_default = `<!-- Page Header -->
<div class="d-flex align-items-sm-center flex-sm-row flex-column gap-2 pb-3">
  <div class="flex-grow-1">
      <h4 class="fs-18 fw-semibold mb-0">Scrollbar</h4>
  </div>

  <div class="text-end">
      <ol class="breadcrumb m-0 py-0">
          <li class="breadcrumb-item"><a href="javascript: void(0);">Home</a></li>

          <li class="breadcrumb-item"><a href="javascript: void(0);">Advanced UI</a></li>

          <li class="breadcrumb-item active">Scrollbar</li>
      </ol>
  </div>
</div>
<!-- /Page Header -->
<div class="row">
  <!-- Scroll -->
  <div class="col-md-6">
    <div class="card">
      <div class="card-header">
        <h5 class="card-title">Horizontal Scroll</h5>
      </div>
      <div class="card-body">
        <div>
          <cdk-virtual-scroll-viewport
            orientation="horizontal"
            class="horizontal-scroll scroll-demo"
            itemSize="50"
          >
            <div class="row">
              <p class="col-sm-3" *cdkVirtualFor="let item of horizontalScroll">
                {{ item }}
              </p>
            </div>
          </cdk-virtual-scroll-viewport>
        </div>

        <!-- <div class="scroll-bar-wrap">
          <div class="horizontal-scroll scroll-demo">
            <div class="horz-scroll-content">
              <div class="row">
                <div class="col-sm-3">
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book. It has survived not only five centuries,
                    but also the leap into electronic typesetting, remaining
                    essentially unchanged.Lorem Ipsum is simply dummy text of
                    the printing and typesetting industry. Lorem Ipsum has been
                    the industry's standard dummy text ever since the 1500s,
                    when an unknown printer took a galley of type and scrambled
                    it to make a type specimen book. It has survived not only
                    five centuries, but also the leap into electronic
                    typesetting, remaining essentially unchanged.
                  </p>
                </div>
                <div class="col-sm-3">
                  <p>
                    It was popularised in the 1960s with the release of Letraset
                    sheets containing Lorem Ipsum passages, and more recently
                    with desktop publishing software like Aldus PageMaker
                    including versions of Lorem Ipsum.It was popularised in the
                    1960s with the release of Letraset sheets containing Lorem
                    Ipsum passages, and more recently with desktop publishing
                    software like Aldus PageMaker including versions of Lorem
                    Ipsum.
                  </p>
                </div>
                <div class="col-sm-3">
                  <p>
                    Contrary to popular belief, Lorem Ipsum is not simply random
                    text. It has roots in a piece of classical Latin literature
                    from 45 BC, making it over 2000 years old. Richard
                    McClintock, a Latin professor at Hampden-Sydney College in
                    Virginia, looked up one of the more obscure Latin words.It
                    was popularised in the 1960s with the release of Letraset
                    sheets containing Lorem Ipsum passages, and more recently
                    with desktop publishing software like Aldus PageMaker
                    including versions of Lorem Ipsum.
                  </p>
                </div>
                <div class="col-sm-3">
                  <p>
                    It is a long established fact that a reader will be
                    distracted by the readable content of a page when looking at
                    its layout. The point of using Lorem Ipsum is that it has a
                    more-or-less normal distribution of letters, as opposed to
                    using 'Content here, content here', making it look like
                    readable English. Many desktop publishing packages and web
                    page editors.It was popularised in the 1960s with the
                    release of Letraset sheets containing Lorem Ipsum passages,
                    and more recently with desktop publishing software like
                    Aldus PageMaker including versions of Lorem Ipsum.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div> -->
      </div>
    </div>
  </div>
  <!-- /Scroll -->

  <!-- Scroll -->
  <div class="col-md-6">
    <div class="card">
      <div class="card-header">
        <h5 class="card-title">Vertical Scroll</h5>
      </div>
      <div class="card-body">
        <cdk-virtual-scroll-viewport
          appendOnly
          itemSize="10"
          class="vertical-scroll scroll-demo"
        >
          <p *cdkVirtualFor="let item of verticalScroll">{{ item }}</p>
        </cdk-virtual-scroll-viewport>
      </div>
    </div>
  </div>
  <!-- /Scroll -->

  <!-- Scroll -->
  <div class="col-md-6">
    <div class="card">
      <div class="card-header">
        <h5 class="card-title">Small Size Scroll</h5>
      </div>
      <div class="card-body">
        <cdk-virtual-scroll-viewport
          appendOnly
          itemSize="50"
          class="small-scroll scroll-demo"
        >
          <p *cdkVirtualFor="let item of verticalScroll">{{ item }}</p>
        </cdk-virtual-scroll-viewport>
      </div>
    </div>
  </div>
  <!-- /Scroll -->

  <!-- Scroll -->
  <div class="col-md-6">
    <div class="card">
      <div class="card-header">
        <h5 class="card-title">Visible Scroll</h5>
      </div>
      <div class="card-body">
        <div>
          <cdk-virtual-scroll-viewport
            orientation="horizontal"
            class="scroll-demo"
            itemSize="50"
          >
            <div class="row">
              <p class="col-sm-3" *cdkVirtualFor="let item of horizontalScroll">
                {{ item }}
              </p>
            </div>
          </cdk-virtual-scroll-viewport>
        </div>
      </div>
    </div>
  </div>
  <!-- /Scroll -->
</div>
`;
  }
});

// angular:jit:style:src/app/features/ui-interface/advanced-ui/scrollbar/scrollbar.component.scss
var scrollbar_component_default2;
var init_scrollbar_component2 = __esm({
  "angular:jit:style:src/app/features/ui-interface/advanced-ui/scrollbar/scrollbar.component.scss"() {
    scrollbar_component_default2 = "/* src/app/features/ui-interface/advanced-ui/scrollbar/scrollbar.component.scss */\n.scroll-demo {\n  height: 300px;\n  scroll-behavior: smooth;\n  scrollbar-width: thin;\n}\n.horizontal-scroll {\n  overflow-y: hidden !important;\n}\n/*# sourceMappingURL=scrollbar.component.css.map */\n";
  }
});

// src/app/features/ui-interface/advanced-ui/scrollbar/scrollbar.component.ts
var ScrollbarComponent;
var init_scrollbar_component3 = __esm({
  "src/app/features/ui-interface/advanced-ui/scrollbar/scrollbar.component.ts"() {
    "use strict";
    init_tslib_es6();
    init_scrollbar_component();
    init_scrollbar_component2();
    init_core();
    init_common();
    init_scrolling();
    init_forms();
    ScrollbarComponent = class ScrollbarComponent2 {
      horizontalScroll = Array.from({ length: 100 }).map((_, i) => `'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.${i}`);
      verticalScroll = Array.from({ length: 10 }).map((_, i) => `'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.${i}`);
    };
    ScrollbarComponent = __decorate([
      Component({
        selector: "app-scrollbar",
        template: scrollbar_component_default,
        changeDetection: ChangeDetectionStrategy.OnPush,
        imports: [CommonModule, ScrollingModule, FormsModule],
        styles: [scrollbar_component_default2]
      })
    ], ScrollbarComponent);
  }
});

// src/app/features/ui-interface/advanced-ui/scrollbar/scrollbar.component.spec.ts
var require_scrollbar_component_spec = __commonJS({
  "src/app/features/ui-interface/advanced-ui/scrollbar/scrollbar.component.spec.ts"(exports) {
    init_testing();
    init_scrollbar_component3();
    describe("ScrollbarComponent", () => {
      let component;
      let fixture;
      beforeEach(() => __async(null, null, function* () {
        yield TestBed.configureTestingModule({
          declarations: [ScrollbarComponent]
        }).compileComponents();
        fixture = TestBed.createComponent(ScrollbarComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
      }));
      it("should create", () => {
        expect(component).toBeTruthy();
      });
    });
  }
});
export default require_scrollbar_component_spec();
//# sourceMappingURL=spec-app-features-ui-interface-advanced-ui-scrollbar-scrollbar.component.spec.js.map

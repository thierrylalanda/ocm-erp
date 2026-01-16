import {
  CdkFixedSizeVirtualScroll,
  CdkVirtualForOf,
  CdkVirtualScrollViewport,
  ScrollingModule
} from "./chunk-AZWQ5RV7.js";
import "./chunk-YKL5IIDX.js";
import {
  FormsModule
} from "./chunk-BLAAMQ2R.js";
import {
  CommonModule
} from "./chunk-ZV6UYXXV.js";
import {
  ChangeDetectionStrategy,
  Component,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵproperty,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-U4CEU3KS.js";
import "./chunk-TXDUYLVM.js";

// src/app/features/ui-interface/advanced-ui/scrollbar/scrollbar.component.ts
function ScrollbarComponent_p_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 20);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r1 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", item_r1, " ");
  }
}
function ScrollbarComponent_p_32_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r2 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(item_r2);
  }
}
function ScrollbarComponent_p_40_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r3 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(item_r3);
  }
}
function ScrollbarComponent_p_50_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 20);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r4 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", item_r4, " ");
  }
}
var ScrollbarComponent = class _ScrollbarComponent {
  horizontalScroll = Array.from({ length: 100 }).map((_, i) => `'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.${i}`);
  verticalScroll = Array.from({ length: 10 }).map((_, i) => `'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.${i}`);
  static \u0275fac = function ScrollbarComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ScrollbarComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ScrollbarComponent, selectors: [["app-scrollbar"]], decls: 51, vars: 4, consts: [[1, "d-flex", "align-items-sm-center", "flex-sm-row", "flex-column", "gap-2", "pb-3"], [1, "flex-grow-1"], [1, "fs-18", "fw-semibold", "mb-0"], [1, "text-end"], [1, "breadcrumb", "m-0", "py-0"], [1, "breadcrumb-item"], ["href", "javascript: void(0);"], [1, "breadcrumb-item", "active"], [1, "row"], [1, "col-md-6"], [1, "card"], [1, "card-header"], [1, "card-title"], [1, "card-body"], ["orientation", "horizontal", "itemSize", "50", 1, "horizontal-scroll", "scroll-demo"], ["class", "col-sm-3", 4, "cdkVirtualFor", "cdkVirtualForOf"], ["appendOnly", "", "itemSize", "10", 1, "vertical-scroll", "scroll-demo"], [4, "cdkVirtualFor", "cdkVirtualForOf"], ["appendOnly", "", "itemSize", "50", 1, "small-scroll", "scroll-demo"], ["orientation", "horizontal", "itemSize", "50", 1, "scroll-demo"], [1, "col-sm-3"]], template: function ScrollbarComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "h4", 2);
      \u0275\u0275text(3, "Scrollbar");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(4, "div", 3)(5, "ol", 4)(6, "li", 5)(7, "a", 6);
      \u0275\u0275text(8, "Home");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(9, "li", 5)(10, "a", 6);
      \u0275\u0275text(11, "Advanced UI");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(12, "li", 7);
      \u0275\u0275text(13, "Scrollbar");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(14, "div", 8)(15, "div", 9)(16, "div", 10)(17, "div", 11)(18, "h5", 12);
      \u0275\u0275text(19, "Horizontal Scroll");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(20, "div", 13)(21, "div")(22, "cdk-virtual-scroll-viewport", 14)(23, "div", 8);
      \u0275\u0275template(24, ScrollbarComponent_p_24_Template, 2, 1, "p", 15);
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(25, "div", 9)(26, "div", 10)(27, "div", 11)(28, "h5", 12);
      \u0275\u0275text(29, "Vertical Scroll");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(30, "div", 13)(31, "cdk-virtual-scroll-viewport", 16);
      \u0275\u0275template(32, ScrollbarComponent_p_32_Template, 2, 1, "p", 17);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(33, "div", 9)(34, "div", 10)(35, "div", 11)(36, "h5", 12);
      \u0275\u0275text(37, "Small Size Scroll");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(38, "div", 13)(39, "cdk-virtual-scroll-viewport", 18);
      \u0275\u0275template(40, ScrollbarComponent_p_40_Template, 2, 1, "p", 17);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(41, "div", 9)(42, "div", 10)(43, "div", 11)(44, "h5", 12);
      \u0275\u0275text(45, "Visible Scroll");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(46, "div", 13)(47, "div")(48, "cdk-virtual-scroll-viewport", 19)(49, "div", 8);
      \u0275\u0275template(50, ScrollbarComponent_p_50_Template, 2, 1, "p", 15);
      \u0275\u0275elementEnd()()()()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(24);
      \u0275\u0275property("cdkVirtualForOf", ctx.horizontalScroll);
      \u0275\u0275advance(8);
      \u0275\u0275property("cdkVirtualForOf", ctx.verticalScroll);
      \u0275\u0275advance(8);
      \u0275\u0275property("cdkVirtualForOf", ctx.verticalScroll);
      \u0275\u0275advance(10);
      \u0275\u0275property("cdkVirtualForOf", ctx.horizontalScroll);
    }
  }, dependencies: [CommonModule, ScrollingModule, CdkFixedSizeVirtualScroll, CdkVirtualForOf, CdkVirtualScrollViewport, FormsModule], styles: ["\n\n.scroll-demo[_ngcontent-%COMP%] {\n  height: 300px;\n  scroll-behavior: smooth;\n  scrollbar-width: thin;\n}\n.horizontal-scroll[_ngcontent-%COMP%] {\n  overflow-y: hidden !important;\n}\n/*# sourceMappingURL=scrollbar.component.css.map */"], changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ScrollbarComponent, [{
    type: Component,
    args: [{ selector: "app-scrollbar", changeDetection: ChangeDetectionStrategy.OnPush, imports: [CommonModule, ScrollingModule, FormsModule], template: `<!-- Page Header -->
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
`, styles: ["/* src/app/features/ui-interface/advanced-ui/scrollbar/scrollbar.component.scss */\n.scroll-demo {\n  height: 300px;\n  scroll-behavior: smooth;\n  scrollbar-width: thin;\n}\n.horizontal-scroll {\n  overflow-y: hidden !important;\n}\n/*# sourceMappingURL=scrollbar.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ScrollbarComponent, { className: "ScrollbarComponent", filePath: "src/app/features/ui-interface/advanced-ui/scrollbar/scrollbar.component.ts", lineNumber: 13 });
})();
export {
  ScrollbarComponent
};
//# sourceMappingURL=chunk-U26AAODI.js.map

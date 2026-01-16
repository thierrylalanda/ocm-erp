import {
  Lightbox,
  LightboxModule
} from "./chunk-KOOOLFXK.js";
import {
  LightgalleryModule
} from "./chunk-AQAXF32S.js";
import "./chunk-ZM5T2PIK.js";
import "./chunk-PQZYD7EB.js";
import {
  CommonModule
} from "./chunk-ZV6UYXXV.js";
import {
  Component,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵdomElement,
  ɵɵdomElementEnd,
  ɵɵdomElementStart,
  ɵɵdomListener,
  ɵɵdomProperty,
  ɵɵgetCurrentView,
  ɵɵnextContext,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵtext
} from "./chunk-U4CEU3KS.js";
import "./chunk-TXDUYLVM.js";

// src/app/features/ui-interface/advanced-ui/lightbox/lightbox.component.ts
function LightboxComponent_For_23_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275domElementStart(0, "div", 14)(1, "a", 15);
    \u0275\u0275domListener("click", function LightboxComponent_For_23_Conditional_0_Template_a_click_1_listener() {
      \u0275\u0275restoreView(_r1);
      const \u0275$index_40_r2 = \u0275\u0275nextContext().$index;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.open(\u0275$index_40_r2, ctx_r2.albumsOne));
    });
    \u0275\u0275domElement(2, "img", 16);
    \u0275\u0275domElementEnd()();
  }
  if (rf & 2) {
    const image_r4 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275domProperty("src", image_r4.src, \u0275\u0275sanitizeUrl);
  }
}
function LightboxComponent_For_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, LightboxComponent_For_23_Conditional_0_Template, 3, 1, "div", 14);
  }
  if (rf & 2) {
    const \u0275$index_40_r2 = ctx.$index;
    \u0275\u0275conditional(\u0275$index_40_r2 < 2 ? 0 : -1);
  }
}
function LightboxComponent_For_32_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275domElementStart(0, "div", 14)(1, "a", 15);
    \u0275\u0275domListener("click", function LightboxComponent_For_32_Conditional_0_Template_a_click_1_listener() {
      \u0275\u0275restoreView(_r5);
      const \u0275$index_61_r6 = \u0275\u0275nextContext().$index;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.open(\u0275$index_61_r6, ctx_r2.albumsTwo));
    });
    \u0275\u0275domElement(2, "img", 16);
    \u0275\u0275domElementEnd()();
  }
  if (rf & 2) {
    const image_r7 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275domProperty("src", image_r7.src, \u0275\u0275sanitizeUrl);
  }
}
function LightboxComponent_For_32_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, LightboxComponent_For_32_Conditional_0_Template, 3, 1, "div", 14);
  }
  if (rf & 2) {
    const \u0275$index_61_r6 = ctx.$index;
    \u0275\u0275conditional(\u0275$index_61_r6 > 2 ? 0 : -1);
  }
}
var LightboxComponent = class _LightboxComponent {
  _lightbox;
  albumsOne = [];
  albumsTwo = [];
  constructor(_lightbox) {
    this._lightbox = _lightbox;
    for (let i = 1; i <= 5; i++) {
      const src = "assets/img/media/img-0" + i + ".jpg";
      const caption = "Image " + i + " caption here";
      this.albumsOne.push({ src });
      this.albumsTwo.push({ src, caption });
    }
  }
  open(index, albumArray) {
    this._lightbox.open(albumArray, index);
  }
  close() {
    this._lightbox.close();
  }
  static \u0275fac = function LightboxComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _LightboxComponent)(\u0275\u0275directiveInject(Lightbox));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _LightboxComponent, selectors: [["app-lightbox"]], decls: 33, vars: 0, consts: [[1, "d-flex", "align-items-sm-center", "flex-sm-row", "flex-column", "gap-2", "pb-3"], [1, "flex-grow-1"], [1, "fs-18", "fw-semibold", "mb-0"], [1, "text-end"], [1, "breadcrumb", "m-0", "py-0"], [1, "breadcrumb-item"], ["href", "javascript: void(0);"], [1, "breadcrumb-item", "active"], [1, "row"], [1, "col-md-12"], [1, "card"], [1, "card-header"], [1, "card-title"], [1, "card-body"], [1, "col-md-4", "mb-2", "mb-md-0"], ["href", "javascript:void(0);", 3, "click"], ["alt", "image", 1, "img-fluid", 3, "src"]], template: function LightboxComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275domElementStart(0, "div", 0)(1, "div", 1)(2, "h4", 2);
      \u0275\u0275text(3, "Light Box");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(4, "div", 3)(5, "ol", 4)(6, "li", 5)(7, "a", 6);
      \u0275\u0275text(8, "Home");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(9, "li", 5)(10, "a", 6);
      \u0275\u0275text(11, "Advanced UI");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(12, "li", 7);
      \u0275\u0275text(13, "Light Box");
      \u0275\u0275domElementEnd()()()();
      \u0275\u0275domElementStart(14, "div", 8)(15, "div", 9)(16, "div", 10)(17, "div", 11)(18, "h5", 12);
      \u0275\u0275text(19, "Single Image Lightbox");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(20, "div", 13)(21, "div", 8);
      \u0275\u0275repeaterCreate(22, LightboxComponent_For_23_Template, 1, 1, null, null, \u0275\u0275repeaterTrackByIdentity);
      \u0275\u0275domElementEnd()()()();
      \u0275\u0275domElementStart(24, "div", 9)(25, "div", 10)(26, "div", 11)(27, "h5", 12);
      \u0275\u0275text(28, "Image with Description");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(29, "div", 13)(30, "div", 8);
      \u0275\u0275repeaterCreate(31, LightboxComponent_For_32_Template, 1, 1, null, null, \u0275\u0275repeaterTrackByIdentity);
      \u0275\u0275domElementEnd()()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(22);
      \u0275\u0275repeater(ctx.albumsOne);
      \u0275\u0275advance(9);
      \u0275\u0275repeater(ctx.albumsTwo);
    }
  }, dependencies: [CommonModule, LightgalleryModule, LightboxModule], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LightboxComponent, [{
    type: Component,
    args: [{ selector: "app-lightbox", imports: [CommonModule, LightgalleryModule, LightboxModule], template: '<!-- Page Header -->\n<div class="d-flex align-items-sm-center flex-sm-row flex-column gap-2 pb-3">\n  <div class="flex-grow-1">\n      <h4 class="fs-18 fw-semibold mb-0">Light Box</h4>\n  </div>\n\n  <div class="text-end">\n      <ol class="breadcrumb m-0 py-0">\n          <li class="breadcrumb-item"><a href="javascript: void(0);">Home</a></li>\n\n          <li class="breadcrumb-item"><a href="javascript: void(0);">Advanced UI</a></li>\n\n          <li class="breadcrumb-item active">Light Box</li>\n      </ol>\n  </div>\n</div>\n<!-- /Page Header -->\n<div class="row">\n  <!-- Lightbox -->\n  <div class="col-md-12">\n    <div class="card">\n      <div class="card-header">\n        <h5 class="card-title">Single Image Lightbox</h5>\n      </div>\n      <div class="card-body">\n        <div class="row">\n          @for (image of albumsOne; track image; let i = $index) {\n            @if (i < 2) {\n              <div class="col-md-4 mb-2 mb-md-0">\n                <a (click)="open(i, albumsOne)"href="javascript:void(0);">\n                  <img\n                    class="img-fluid"\n                    [src]="image.src"\n                    alt="image"\n                    />\n                  </a>\n                </div>\n              }\n            }\n          </div>\n        </div>\n      </div>\n    </div>\n    <!-- /Lightbox -->\n\n    <!-- Lightbox -->\n    <div class="col-md-12">\n      <div class="card">\n        <div class="card-header">\n          <h5 class="card-title">Image with Description</h5>\n        </div>\n        <div class="card-body">\n          <div class="row">\n            @for (image of albumsTwo; track image; let i = $index) {\n              @if (i > 2) {\n                <div class="col-md-4 mb-2 mb-md-0">\n                  <a (click)="open(i, albumsTwo)" href="javascript:void(0);">\n                    <img\n                      class="img-fluid"\n                      [src]="image.src"\n                      alt="image"\n                      />\n                    </a>\n                  </div>\n                }\n              }\n            </div>\n          </div>\n        </div>\n      </div>\n      <!-- /Lightbox -->\n    </div>\n' }]
  }], () => [{ type: Lightbox }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(LightboxComponent, { className: "LightboxComponent", filePath: "src/app/features/ui-interface/advanced-ui/lightbox/lightbox.component.ts", lineNumber: 14 });
})();
export {
  LightboxComponent
};
//# sourceMappingURL=chunk-ESS5PKSY.js.map

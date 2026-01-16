import {
  FormsModule,
  NG_VALUE_ACCESSOR,
  NgControlStatus,
  NgModel
} from "./chunk-BLAAMQ2R.js";
import {
  routes
} from "./chunk-U2VXEBUE.js";
import "./chunk-SCUCSJ4X.js";
import "./chunk-PCRWA3NK.js";
import "./chunk-ZM5T2PIK.js";
import "./chunk-PQZYD7EB.js";
import {
  CommonModule,
  NgForOf,
  NgTemplateOutlet
} from "./chunk-ZV6UYXXV.js";
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  EventEmitter,
  HostListener,
  Injectable,
  Input,
  NgModule,
  Output,
  forwardRef,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵProvidersFeature,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵpureFunction2,
  ɵɵreference,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-U4CEU3KS.js";
import "./chunk-TXDUYLVM.js";

// node_modules/ngx-bootstrap/rating/fesm2022/ngx-bootstrap-rating.mjs
var _c0 = (a0, a1) => ({
  index: a0,
  value: a1
});
function RatingComponent_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const value_r2 = ctx.value;
    const index_r3 = ctx.index;
    \u0275\u0275textInterpolate(index_r3 < value_r2 ? "\u2605" : "\u2606");
  }
}
function RatingComponent_ng_template_3_ng_template_3_Template(rf, ctx) {
}
function RatingComponent_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "span", 3);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "span", 4);
    \u0275\u0275listener("mouseenter", function RatingComponent_ng_template_3_Template_span_mouseenter_2_listener() {
      const index_r5 = \u0275\u0275restoreView(_r4).index;
      const ctx_r5 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r5.enter(index_r5 + 1));
    })("click", function RatingComponent_ng_template_3_Template_span_click_2_listener() {
      const index_r5 = \u0275\u0275restoreView(_r4).index;
      const ctx_r5 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r5.rate(index_r5 + 1));
    });
    \u0275\u0275template(3, RatingComponent_ng_template_3_ng_template_3_Template, 0, 0, "ng-template", 5);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const r_r7 = ctx.$implicit;
    const index_r5 = ctx.index;
    const ctx_r5 = \u0275\u0275nextContext();
    const star_r8 = \u0275\u0275reference(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("(", index_r5 < ctx_r5.value ? "*" : " ", ")");
    \u0275\u0275advance();
    \u0275\u0275styleProp("cursor", ctx_r5.readonly ? "default" : "pointer");
    \u0275\u0275classProp("active", index_r5 < ctx_r5.value);
    \u0275\u0275property("title", r_r7.title);
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", ctx_r5.customTemplate || star_r8)("ngTemplateOutletContext", \u0275\u0275pureFunction2(8, _c0, index_r5, ctx_r5.value));
  }
}
var _RatingConfig = class _RatingConfig {
  constructor() {
    this.ariaLabel = "rating";
  }
};
_RatingConfig.\u0275fac = function RatingConfig_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _RatingConfig)();
};
_RatingConfig.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
  token: _RatingConfig,
  factory: _RatingConfig.\u0275fac,
  providedIn: "root"
});
var RatingConfig = _RatingConfig;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RatingConfig, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();
var RATING_CONTROL_VALUE_ACCESSOR = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => RatingComponent),
  multi: true
};
var _RatingComponent = class _RatingComponent {
  constructor(changeDetection, config) {
    this.changeDetection = changeDetection;
    this.max = 5;
    this.readonly = false;
    this.titles = [];
    this.onHover = new EventEmitter();
    this.onLeave = new EventEmitter();
    this.onChange = Function.prototype;
    this.onTouched = Function.prototype;
    this.ariaLabel = "rating";
    this.range = [];
    this.value = 0;
    Object.assign(this, config);
  }
  onKeydown(event) {
    if ([37, 38, 39, 40].indexOf(event.which) === -1) {
      return;
    }
    event.preventDefault();
    event.stopPropagation();
    const sign = event.which === 38 || event.which === 39 ? 1 : -1;
    this.rate(this.value + sign);
  }
  ngOnInit() {
    this.max = this.max || 5;
    this.titles = typeof this.titles !== "undefined" && this.titles.length > 0 ? this.titles : [];
    this.range = this.buildTemplateObjects(this.max);
  }
  // model -> view
  writeValue(value) {
    if (value % 1 !== value) {
      this.value = Math.round(value);
      this.preValue = value;
      this.changeDetection.markForCheck();
      return;
    }
    this.preValue = value;
    this.value = value;
    this.changeDetection.markForCheck();
  }
  enter(value) {
    if (!this.readonly) {
      this.value = value;
      this.changeDetection.markForCheck();
      this.onHover.emit(value);
    }
  }
  reset() {
    if (typeof this.preValue === "number") {
      this.value = Math.round(this.preValue);
      this.changeDetection.markForCheck();
      this.onLeave.emit(this.value);
    }
  }
  registerOnChange(fn) {
    this.onChange = fn;
  }
  registerOnTouched(fn) {
    this.onTouched = fn;
  }
  rate(value) {
    if (!this.readonly && this.range && value >= 0 && value <= this.range.length) {
      this.writeValue(value);
      this.onChange(value);
    }
  }
  buildTemplateObjects(max) {
    const result = [];
    for (let i = 0; i < max; i++) {
      result.push({
        index: i,
        title: this.titles[i] || i + 1
      });
    }
    return result;
  }
};
_RatingComponent.\u0275fac = function RatingComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _RatingComponent)(\u0275\u0275directiveInject(ChangeDetectorRef), \u0275\u0275directiveInject(RatingConfig));
};
_RatingComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
  type: _RatingComponent,
  selectors: [["rating"]],
  hostBindings: function RatingComponent_HostBindings(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275listener("keydown", function RatingComponent_keydown_HostBindingHandler($event) {
        return ctx.onKeydown($event);
      });
    }
  },
  inputs: {
    max: "max",
    readonly: "readonly",
    titles: "titles",
    customTemplate: "customTemplate"
  },
  outputs: {
    onHover: "onHover",
    onLeave: "onLeave"
  },
  features: [\u0275\u0275ProvidersFeature([RATING_CONTROL_VALUE_ACCESSOR])],
  decls: 4,
  vars: 4,
  consts: [["star", ""], ["tabindex", "0", "role", "slider", "aria-valuemin", "0", 3, "mouseleave", "keydown"], ["ngFor", "", 3, "ngForOf"], [1, "sr-only", "visually-hidden"], [1, "bs-rating-star", 3, "mouseenter", "click", "title"], [3, "ngTemplateOutlet", "ngTemplateOutletContext"]],
  template: function RatingComponent_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = \u0275\u0275getCurrentView();
      \u0275\u0275elementStart(0, "span", 1);
      \u0275\u0275listener("mouseleave", function RatingComponent_Template_span_mouseleave_0_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.reset());
      })("keydown", function RatingComponent_Template_span_keydown_0_listener($event) {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.onKeydown($event));
      });
      \u0275\u0275template(1, RatingComponent_ng_template_1_Template, 1, 1, "ng-template", null, 0, \u0275\u0275templateRefExtractor)(3, RatingComponent_ng_template_3_Template, 4, 11, "ng-template", 2);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275attribute("aria-label", ctx.ariaLabel)("aria-valuemax", ctx.range.length)("aria-valuenow", ctx.value);
      \u0275\u0275advance(3);
      \u0275\u0275property("ngForOf", ctx.range);
    }
  },
  dependencies: [NgForOf, NgTemplateOutlet],
  encapsulation: 2,
  changeDetection: 0
});
var RatingComponent = _RatingComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RatingComponent, [{
    type: Component,
    args: [{
      selector: "rating",
      providers: [RATING_CONTROL_VALUE_ACCESSOR],
      changeDetection: ChangeDetectionStrategy.OnPush,
      standalone: true,
      imports: [NgForOf, NgTemplateOutlet],
      template: `<span (mouseleave)="reset()" (keydown)="onKeydown($event)" tabindex="0"
      role="slider" aria-valuemin="0"
      [attr.aria-label]="ariaLabel"
      [attr.aria-valuemax]="range.length"
      [attr.aria-valuenow]="value">
  <ng-template #star let-value="value" let-index="index">{{ index < value ? '&#9733;' : '&#9734;' }}</ng-template>
  <ng-template ngFor let-r [ngForOf]="range" let-index="index">
    <span class="sr-only visually-hidden">({{ index < value ? '*' : ' ' }})</span>
    <span class="bs-rating-star"
          (mouseenter)="enter(index + 1)"
          (click)="rate(index + 1)"
          [title]="r.title"
          [style.cursor]="readonly ? 'default' : 'pointer'"
          [class.active]="index < value">
      <ng-template [ngTemplateOutlet]="customTemplate || star"
                   [ngTemplateOutletContext]="{index: index, value: value}">
      </ng-template>
    </span>
  </ng-template>
</span>
`
    }]
  }], () => [{
    type: ChangeDetectorRef
  }, {
    type: RatingConfig
  }], {
    max: [{
      type: Input
    }],
    readonly: [{
      type: Input
    }],
    titles: [{
      type: Input
    }],
    customTemplate: [{
      type: Input
    }],
    onHover: [{
      type: Output
    }],
    onLeave: [{
      type: Output
    }],
    onKeydown: [{
      type: HostListener,
      args: ["keydown", ["$event"]]
    }]
  });
})();
var _RatingModule = class _RatingModule {
  // @deprecated method not required anymore, will be deleted in v19.0.0
  static forRoot() {
    return {
      ngModule: _RatingModule,
      providers: []
    };
  }
};
_RatingModule.\u0275fac = function RatingModule_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _RatingModule)();
};
_RatingModule.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
  type: _RatingModule,
  imports: [RatingComponent],
  exports: [RatingComponent]
});
_RatingModule.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({});
var RatingModule = _RatingModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RatingModule, [{
    type: NgModule,
    args: [{
      imports: [RatingComponent],
      exports: [RatingComponent]
    }]
  }], null, null);
})();

// src/app/features/ui-interface/advanced-ui/rating/rating.component.ts
function RatingComponent_For_40_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "img", 35);
    \u0275\u0275listener("click", function RatingComponent_For_40_Conditional_0_Template_img_click_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      const item_r3 = ctx_r1.$implicit;
      const \u0275$index_69_r4 = ctx_r1.$index;
      const ctx_r4 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r4.clickBasicStar(item_r3, \u0275$index_69_r4, ctx_r4.halfRatingStar));
    });
    \u0275\u0275elementEnd();
  }
}
function RatingComponent_For_40_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "img", 36);
    \u0275\u0275listener("click", function RatingComponent_For_40_Conditional_1_Template_img_click_0_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext();
      const item_r3 = ctx_r1.$implicit;
      const \u0275$index_69_r4 = ctx_r1.$index;
      const ctx_r4 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r4.clickBasicStar(item_r3, \u0275$index_69_r4, ctx_r4.halfRatingStar));
    });
    \u0275\u0275elementEnd();
  }
}
function RatingComponent_For_40_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 34);
  }
}
function RatingComponent_For_40_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, RatingComponent_For_40_Conditional_0_Template, 1, 0, "img", 32);
    \u0275\u0275conditionalCreate(1, RatingComponent_For_40_Conditional_1_Template, 1, 0, "img", 33);
    \u0275\u0275conditionalCreate(2, RatingComponent_For_40_Conditional_2_Template, 1, 0, "img", 34);
  }
  if (rf & 2) {
    const item_r3 = ctx.$implicit;
    \u0275\u0275conditional(item_r3.show === false && item_r3.half === false ? 0 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(item_r3.show === true ? 1 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(item_r3.half === true ? 2 : -1);
  }
}
function RatingComponent_For_52_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "img", 37);
    \u0275\u0275listener("click", function RatingComponent_For_52_Template_img_click_0_listener() {
      const ctx_r7 = \u0275\u0275restoreView(_r7);
      const item_r9 = ctx_r7.$implicit;
      const \u0275$index_97_r10 = ctx_r7.$index;
      const ctx_r4 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r4.clickBasicStar(item_r9, \u0275$index_97_r10, ctx_r4.maxStar));
    })("mouseover", function RatingComponent_For_52_Template_img_mouseover_0_listener() {
      const \u0275$index_97_r10 = \u0275\u0275restoreView(_r7).$index;
      const ctx_r4 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r4.hoverStar(\u0275$index_97_r10, ctx_r4.maxStar));
    })("mouseout", function RatingComponent_For_52_Template_img_mouseout_0_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r4 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r4.hoverStar(-1, ctx_r4.maxStar));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r9 = ctx.$implicit;
    \u0275\u0275property("src", item_r9.show ? "assets/img/ratings/star-on.png" : "assets/img/ratings/star-off.png", \u0275\u0275sanitizeUrl);
  }
}
function RatingComponent_For_64_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 32);
  }
}
function RatingComponent_For_64_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 33);
  }
}
function RatingComponent_For_64_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, RatingComponent_For_64_Conditional_0_Template, 1, 0, "img", 32);
    \u0275\u0275conditionalCreate(1, RatingComponent_For_64_Conditional_1_Template, 1, 0, "img", 33);
  }
  if (rf & 2) {
    const item_r11 = ctx.$implicit;
    \u0275\u0275conditional(item_r11.show === false ? 0 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(item_r11.show === true ? 1 : -1);
  }
}
function RatingComponent_For_76_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "img", 35);
    \u0275\u0275listener("click", function RatingComponent_For_76_Conditional_0_Template_img_click_0_listener() {
      \u0275\u0275restoreView(_r12);
      const ctx_r12 = \u0275\u0275nextContext();
      const item_r14 = ctx_r12.$implicit;
      const \u0275$index_143_r15 = ctx_r12.$index;
      const ctx_r4 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r4.clickBasicStar(item_r14, \u0275$index_143_r15, ctx_r4.savedStar));
    });
    \u0275\u0275elementEnd();
  }
}
function RatingComponent_For_76_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r16 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "img", 36);
    \u0275\u0275listener("click", function RatingComponent_For_76_Conditional_1_Template_img_click_0_listener() {
      \u0275\u0275restoreView(_r16);
      const ctx_r12 = \u0275\u0275nextContext();
      const item_r14 = ctx_r12.$implicit;
      const \u0275$index_143_r15 = ctx_r12.$index;
      const ctx_r4 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r4.clickBasicStar(item_r14, \u0275$index_143_r15, ctx_r4.savedStar));
    });
    \u0275\u0275elementEnd();
  }
}
function RatingComponent_For_76_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, RatingComponent_For_76_Conditional_0_Template, 1, 0, "img", 32);
    \u0275\u0275conditionalCreate(1, RatingComponent_For_76_Conditional_1_Template, 1, 0, "img", 33);
  }
  if (rf & 2) {
    const item_r14 = ctx.$implicit;
    \u0275\u0275conditional(item_r14.show === false ? 0 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(item_r14.show === true ? 1 : -1);
  }
}
function getRatingConfig() {
  return Object.assign(new RatingConfig(), { ariaLabel: "My Rating" });
}
var RatingComponent2 = class _RatingComponent2 {
  routes = routes;
  max = 5;
  rate = 3;
  basicStar = [
    { show: false },
    { show: false },
    { show: false },
    { show: false },
    { show: false }
  ];
  basicStar1 = [
    { show: false },
    { show: false },
    { show: false },
    { show: false },
    { show: false }
  ];
  savedStar = [
    { show: true },
    { show: true },
    { show: true },
    { show: false },
    { show: false }
  ];
  maxStar = [
    { show: false },
    { show: false },
    { show: false },
    { show: false },
    { show: false }
  ];
  readOnlyStar = [
    { show: true },
    { show: true },
    { show: true },
    { show: true },
    { show: true },
    { show: true },
    { show: false },
    { show: false },
    { show: false },
    { show: false }
  ];
  halfRatingStar = [
    { show: true, half: false },
    { show: true, half: false },
    { show: false, half: true },
    { show: false, half: false },
    { show: false, half: false }
  ];
  heartIcon = [
    { show: false },
    { show: false },
    { show: false },
    { show: false },
    { show: false }
  ];
  clickBasicStar(item, i, array) {
    if (item.show == false) {
      array.map((res, index) => {
        if (index <= i) {
          res.show = true;
        }
      });
    } else {
      array.map((res, index) => {
        if (index >= i && index != 0) {
          res.show = false;
        }
      });
    }
    if (array === this.halfRatingStar) {
      array.map((res) => {
        res.half = false;
      });
    }
  }
  clickBasicStar1(item, i, array) {
    if (item.show == false) {
      array.map((res, index) => {
        if (index <= i) {
          res.show = true;
        }
      });
    } else {
      array.map((res, index) => {
        if (index >= i && index != 0) {
          res.show = false;
        }
      });
    }
    this.increaseRating();
    if (array === this.halfRatingStar) {
      array.map((res) => {
        res.half = false;
      });
    }
  }
  liveRating = 1;
  increaseRating() {
    this.liveRating++;
  }
  resetStars() {
    this.heartIcon.forEach((item) => {
      item.show = false;
    });
  }
  hoverStar1(isHovered, index, halfRatingStar) {
    const item = halfRatingStar[index];
    if (item && item.half) {
      item.hover = isHovered;
    }
  }
  hoverStar(index, array) {
    for (let i = 0; i <= index; i++) {
      if (array[i]) {
        array[i].show = true;
      }
    }
    for (let i = index + 1; i < array.length; i++) {
      if (array[i]) {
        array[i].show = false;
      }
    }
  }
  // bread crumb items
  breadCrumbItems;
  readonly = false;
  defaultSelect = 3;
  currentRate = 2;
  customColor = 4;
  hoverSelect = 2;
  hovered = 0;
  clearRate = 2;
  constructor() {
  }
  ngOnInit() {
    this.breadCrumbItems = [
      { label: "Advance UI" },
      { label: "Ratings", active: true }
    ];
  }
  static \u0275fac = function RatingComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _RatingComponent2)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _RatingComponent2, selectors: [["app-rating"]], features: [\u0275\u0275ProvidersFeature([{ provide: RatingConfig, useFactory: getRatingConfig }])], decls: 105, vars: 7, consts: [[1, "d-flex", "align-items-sm-center", "flex-sm-row", "flex-column", "gap-2", "pb-3"], [1, "flex-grow-1"], [1, "fs-18", "fw-semibold", "mb-0"], [1, "text-end"], [1, "breadcrumb", "m-0", "py-0"], [1, "breadcrumb-item"], ["href", "javascript: void(0);"], [1, "breadcrumb-item", "active"], [1, "row"], [1, "col-xxl-4", "col-xl-6"], [1, "card", "custom-card"], [1, "card-header"], [1, "card-title"], [1, "card-body"], [1, "d-flex", "flex-wrap", "align-items-center", "justify-content-between"], [1, "fs-14", "mb-0", "fw-semibold"], [1, "text-danger"], ["id", "rater-basic"], [3, "ngModelChange", "ngModel", "max"], ["id", "rater-steps"], [1, "col-xxl-4", "col-xl-12"], ["id", "custom-messages"], [1, "me-1", 3, "src"], [1, "col-xxl-6", "col-xl-6"], ["id", "stars-unlimited"], ["id", "stars-busytext"], [1, "d-flex", "flex-wrap", "align-items-center"], ["id", "stars-hover"], [1, "live-rating", "badge", "bg-success-transparent", "ms-3", 3, "click"], ["id", "rater-reset"], ["id", "rater-reset-button", "data-bs-toggle", "tooltip", "data-bs-placement", "top", "data-bs-title", "Reset", 1, "btn", "btn-icon", "btn-sm", "btn-danger-light", "ms-3", 3, "click"], [1, "feather", "icon-rotate-cw", "feather-16"], ["src", "assets/img/ratings/star-off.png", 1, "me-1"], ["src", "assets/img/ratings/star-on.png", 1, "me-1"], ["src", "assets/img/ratings/star-half.png"], ["src", "assets/img/ratings/star-off.png", 1, "me-1", 3, "click"], ["src", "assets/img/ratings/star-on.png", 1, "me-1", 3, "click"], [1, "me-1", 3, "click", "mouseover", "mouseout", "src"]], template: function RatingComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "h4", 2);
      \u0275\u0275text(3, "Rating");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(4, "div", 3)(5, "ol", 4)(6, "li", 5)(7, "a", 6);
      \u0275\u0275text(8, "Home");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(9, "li", 5)(10, "a", 6);
      \u0275\u0275text(11, "Advanced UI");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(12, "li", 7);
      \u0275\u0275text(13, "Rating");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(14, "div", 8)(15, "div", 9)(16, "div", 10)(17, "div", 11)(18, "div", 12);
      \u0275\u0275text(19, " Basic Rater ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(20, "div", 13)(21, "div", 14)(22, "p", 15);
      \u0275\u0275text(23, "Show Some ");
      \u0275\u0275elementStart(24, "span", 16);
      \u0275\u0275text(25, "\u2764");
      \u0275\u0275elementEnd();
      \u0275\u0275text(26, " with rating :");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(27, "div", 17)(28, "rating", 18);
      \u0275\u0275twoWayListener("ngModelChange", function RatingComponent_Template_rating_ngModelChange_28_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.rate, $event) || (ctx.rate = $event);
        return $event;
      });
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(29, "div", 9)(30, "div", 10)(31, "div", 11)(32, "div", 12);
      \u0275\u0275text(33, " 5 star rater with steps ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(34, "div", 13)(35, "div", 14)(36, "p", 15);
      \u0275\u0275text(37, "Dont forget to rate the product :");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(38, "div", 19);
      \u0275\u0275repeaterCreate(39, RatingComponent_For_40_Template, 3, 3, null, null, \u0275\u0275repeaterTrackByIdentity);
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(41, "div", 20)(42, "div", 10)(43, "div", 11)(44, "div", 12);
      \u0275\u0275text(45, " Custom messages ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(46, "div", 13)(47, "div", 14)(48, "p", 15);
      \u0275\u0275text(49, "Your rating is much appreciated:");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(50, "div", 21);
      \u0275\u0275repeaterCreate(51, RatingComponent_For_52_Template, 1, 1, "img", 22, \u0275\u0275repeaterTrackByIdentity);
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(53, "div", 23)(54, "div", 10)(55, "div", 11)(56, "div", 12);
      \u0275\u0275text(57, " Unlimited number of stars readOnly ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(58, "div", 13)(59, "div", 14)(60, "p", 15);
      \u0275\u0275text(61, "Thanks for rating :");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(62, "div", 24);
      \u0275\u0275repeaterCreate(63, RatingComponent_For_64_Template, 2, 2, null, null, \u0275\u0275repeaterTrackByIdentity);
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(65, "div", 23)(66, "div", 10)(67, "div", 11)(68, "div", 12);
      \u0275\u0275text(69, " 5 Star rater with custom isBusyText and simulated backend ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(70, "div", 13)(71, "div", 14)(72, "p", 15);
      \u0275\u0275text(73, "Thanks for rating :");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(74, "div", 25);
      \u0275\u0275repeaterCreate(75, RatingComponent_For_76_Template, 2, 2, null, null, \u0275\u0275repeaterTrackByIdentity);
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(77, "div", 9)(78, "div", 10)(79, "div", 11)(80, "div", 12);
      \u0275\u0275text(81, " On hover event ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(82, "div", 13)(83, "div", 14)(84, "p", 15);
      \u0275\u0275text(85, "Please give your valuable rating :");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(86, "div", 26)(87, "div", 27)(88, "rating", 18);
      \u0275\u0275twoWayListener("ngModelChange", function RatingComponent_Template_rating_ngModelChange_88_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.rate, $event) || (ctx.rate = $event);
        return $event;
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(89, "span", 28);
      \u0275\u0275listener("click", function RatingComponent_Template_span_click_89_listener() {
        return ctx.increaseRating();
      });
      \u0275\u0275text(90);
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(91, "div", 9)(92, "div", 10)(93, "div", 11)(94, "div", 12);
      \u0275\u0275text(95, " Clear/reset rater ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(96, "div", 13)(97, "div", 14)(98, "p", 15);
      \u0275\u0275text(99, "Thank You so much for your support :");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(100, "div", 26)(101, "div", 29)(102, "rating", 18);
      \u0275\u0275twoWayListener("ngModelChange", function RatingComponent_Template_rating_ngModelChange_102_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.rate, $event) || (ctx.rate = $event);
        return $event;
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(103, "button", 30);
      \u0275\u0275listener("click", function RatingComponent_Template_button_click_103_listener() {
        return ctx.clearRate = 0;
      });
      \u0275\u0275element(104, "i", 31);
      \u0275\u0275elementEnd()()()()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(28);
      \u0275\u0275twoWayProperty("ngModel", ctx.rate);
      \u0275\u0275property("max", ctx.max);
      \u0275\u0275advance(11);
      \u0275\u0275repeater(ctx.halfRatingStar);
      \u0275\u0275advance(12);
      \u0275\u0275repeater(ctx.maxStar);
      \u0275\u0275advance(12);
      \u0275\u0275repeater(ctx.readOnlyStar);
      \u0275\u0275advance(12);
      \u0275\u0275repeater(ctx.savedStar);
      \u0275\u0275advance(13);
      \u0275\u0275twoWayProperty("ngModel", ctx.rate);
      \u0275\u0275property("max", ctx.max);
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate1(" ", ctx.hovered, " ");
      \u0275\u0275advance(12);
      \u0275\u0275twoWayProperty("ngModel", ctx.rate);
      \u0275\u0275property("max", ctx.max);
    }
  }, dependencies: [RatingModule, RatingComponent, FormsModule, NgControlStatus, NgModel, CommonModule], styles: ["\n\n.rating.rating-custom-icon[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  margin: 2px;\n}\n/*# sourceMappingURL=rating.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RatingComponent2, [{
    type: Component,
    args: [{ selector: "app-rating", providers: [{ provide: RatingConfig, useFactory: getRatingConfig }], imports: [RatingModule, FormsModule, CommonModule], template: `<!-- Page Header -->
<div class="d-flex align-items-sm-center flex-sm-row flex-column gap-2 pb-3">
  <div class="flex-grow-1">
      <h4 class="fs-18 fw-semibold mb-0">Rating</h4>
  </div>

  <div class="text-end">
      <ol class="breadcrumb m-0 py-0">
          <li class="breadcrumb-item"><a href="javascript: void(0);">Home</a></li>

          <li class="breadcrumb-item"><a href="javascript: void(0);">Advanced UI</a></li>

          <li class="breadcrumb-item active">Rating</li>
      </ol>
  </div>
</div>
<!-- /Page Header -->
<div class="row">
  <div class="col-xxl-4 col-xl-6">
    <div class="card custom-card">
      <div class="card-header">
      <div class="card-title">
          Basic Rater
      </div>
      </div>
      <div class="card-body">
        <div class="d-flex flex-wrap align-items-center justify-content-between">
          <p class="fs-14 mb-0 fw-semibold">Show Some <span class="text-danger">&#10084;</span> with rating :</p>
          <div id="rater-basic">
            <!-- <ngb-rating [(rate)]="defaultSelect" [readonly]="readonly" class="stars" [max]=5 ></ngb-rating> -->
            <rating [(ngModel)]="rate" [max]="max"></rating>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="col-xxl-4 col-xl-6">
    <div class="card custom-card">
      <div class="card-header">
        <div class="card-title">
          5 star rater with steps
        </div>
      </div>
      <div class="card-body">
        <div class="d-flex flex-wrap align-items-center justify-content-between">
          <p class="fs-14 mb-0 fw-semibold">Dont forget to rate the product :</p>
          <div id="rater-steps">
            @for (item of halfRatingStar; track item; let i = $index) {
              @if (item.show === false && item.half === false) {
                <img
                  (click)="clickBasicStar(item, i, halfRatingStar)" class="me-1"
                  src="assets/img/ratings/star-off.png" />
              }
              @if (item.show === true) {
                <img (click)="clickBasicStar(item, i, halfRatingStar)" class="me-1"
                  src="assets/img/ratings/star-on.png" />
              }
              @if (item.half === true) {
                <img src="assets/img/ratings/star-half.png" />
              }
            }
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="col-xxl-4 col-xl-12">
    <div class="card custom-card">
      <div class="card-header">
        <div class="card-title">
          Custom messages
        </div>
      </div>
      <div class="card-body">
        <div class="d-flex flex-wrap align-items-center justify-content-between">
          <p class="fs-14 mb-0 fw-semibold">Your rating is much appreciated:</p>
          <div id="custom-messages">
            @for (item of maxStar; track item; let i = $index) {
              <img
                (click)="clickBasicStar(item, i, maxStar)"
                (mouseover)="hoverStar(i, maxStar)"
                (mouseout)="hoverStar(-1, maxStar)"
                class="me-1"
                [src]="item.show ? 'assets/img/ratings/star-on.png' : 'assets/img/ratings/star-off.png'" />
            }
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="col-xxl-6 col-xl-6">
    <div class="card custom-card">
      <div class="card-header">
        <div class="card-title">
          Unlimited number of stars readOnly
        </div>
      </div>
      <div class="card-body">
        <div class="d-flex flex-wrap align-items-center justify-content-between">
          <p class="fs-14 mb-0 fw-semibold">Thanks for rating :</p>
          <div id="stars-unlimited">
            @for (item of readOnlyStar; track item; let i = $index) {
              @if (item.show === false) {
                <img src="assets/img/ratings/star-off.png" class="me-1"/>
              }
              @if (item.show === true) {
                <img src="assets/img/ratings/star-on.png" class="me-1"/>
              }
            }
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="col-xxl-6 col-xl-6">
    <div class="card custom-card">
      <div class="card-header">
        <div class="card-title">
          5 Star rater with custom isBusyText and simulated backend
        </div>
      </div>
      <div class="card-body">
        <div class="d-flex flex-wrap align-items-center justify-content-between">
          <p class="fs-14 mb-0 fw-semibold">Thanks for rating :</p>
          <div id="stars-busytext">
            @for (item of savedStar; track item; let i = $index) {
              @if (item.show === false) {
                <img (click)="clickBasicStar(item, i, savedStar)" class="me-1"
                  src="assets/img/ratings/star-off.png" />
              }
              @if (item.show === true) {
                <img (click)="clickBasicStar(item, i, savedStar)" class="me-1"
                  src="assets/img/ratings/star-on.png" />
              }
            }
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="col-xxl-4 col-xl-6">
    <div class="card custom-card">
      <div class="card-header">
        <div class="card-title">
          On hover event
        </div>
      </div>
      <div class="card-body">
        <div class="d-flex flex-wrap align-items-center justify-content-between">
          <p class="fs-14 mb-0 fw-semibold">Please give your valuable rating :</p>
          <div class="d-flex flex-wrap align-items-center">
            <div id="stars-hover">
              <!-- <ngb-rating [(rate)]="hoverSelect" (hover)="hovered=$event" (leave)="hovered=0" [readonly]="readonly" class="stars" [max]=5></ngb-rating> -->
              <rating [(ngModel)]="rate" [max]="max"></rating>
            </div>
            <span class="live-rating badge bg-success-transparent ms-3" (click)="increaseRating()">
              {{hovered}}
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="col-xxl-4 col-xl-6">
    <div class="card custom-card">
      <div class="card-header">
        <div class="card-title">
          Clear/reset rater
        </div>
      </div>
      <div class="card-body">
        <div class="d-flex flex-wrap align-items-center justify-content-between">
          <p class="fs-14 mb-0 fw-semibold">Thank You so much for your support :</p>
          <div class="d-flex flex-wrap align-items-center">
            <div id="rater-reset">
              <!-- <ngb-rating [(rate)]="clearRate" [readonly]="readonly" class="stars align-middle star-rating" [max]=5></ngb-rating> -->
              <rating [(ngModel)]="rate" [max]="max"></rating>
            </div>
            <button class="btn btn-icon btn-sm btn-danger-light ms-3" id="rater-reset-button" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="Reset" (click)="clearRate = 0">
              <i  class="feather icon-rotate-cw feather-16"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
`, styles: ["/* src/app/features/ui-interface/advanced-ui/rating/rating.component.scss */\n.rating.rating-custom-icon img {\n  margin: 2px;\n}\n/*# sourceMappingURL=rating.component.css.map */\n"] }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(RatingComponent2, { className: "RatingComponent", filePath: "src/app/features/ui-interface/advanced-ui/rating/rating.component.ts", lineNumber: 26 });
})();
export {
  RatingComponent2 as RatingComponent,
  getRatingConfig
};
//# sourceMappingURL=chunk-DA47LZES.js.map

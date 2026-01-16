import {
  SettingsService
} from "./chunk-GULTOLI6.js";
import {
  SharedResizeObserver
} from "./chunk-5H6GXSFV.js";
import {
  ContentObserver
} from "./chunk-UNWSAGEL.js";
import {
  Directionality,
  Platform,
  coerceElement
} from "./chunk-YKL5IIDX.js";
import {
  toSignal
} from "./chunk-KKWHEPUK.js";
import {
  LanguageSelectorComponent
} from "./chunk-6JYD3OCR.js";
import {
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgModel
} from "./chunk-BLAAMQ2R.js";
import {
  AuthService,
  DataService,
  PermissionService,
  SideBarService,
  routes
} from "./chunk-U2VXEBUE.js";
import {
  NavigationEnd,
  Router,
  RouterLink,
  RouterLinkActive
} from "./chunk-PCRWA3NK.js";
import {
  CommonModule,
  NgClass,
  NgForOf,
  NgIf,
  NgStyle,
  isPlatformBrowser
} from "./chunk-ZV6UYXXV.js";
import {
  ApplicationRef,
  ChangeDetectionStrategy,
  Component,
  DOCUMENT,
  Directive,
  EMPTY,
  ElementRef,
  Injectable,
  InjectionToken,
  Injector,
  NgModule,
  NgZone,
  Observable,
  PLATFORM_ID,
  Renderer2,
  Subject,
  afterRenderEffect,
  animationFrameScheduler,
  booleanAttribute,
  combineLatest,
  computed,
  contentChild,
  createComponent,
  delay,
  effect,
  finalize,
  from,
  fromEvent,
  inject,
  input,
  interval,
  linkedSignal,
  map,
  merge,
  numberAttribute,
  of,
  output,
  setClassMetadata,
  signal,
  startWith,
  switchMap,
  take,
  takeUntil,
  takeWhile,
  tap,
  throttleTime,
  untracked,
  viewChild,
  ɵsetClassDebugInfo,
  ɵɵInheritDefinitionFeature,
  ɵɵProvidersFeature,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassMap,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵcontentQuerySignal,
  ɵɵdefineComponent,
  ɵɵdefineDirective,
  ɵɵdefineInjectable,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdirectiveInject,
  ɵɵdomElement,
  ɵɵdomElementEnd,
  ɵɵdomElementStart,
  ɵɵelement,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵgetInheritedFactory,
  ɵɵinterpolate1,
  ɵɵlistener,
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵprojection,
  ɵɵprojectionDef,
  ɵɵproperty,
  ɵɵpureFunction1,
  ɵɵqueryAdvance,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty,
  ɵɵviewQuerySignal
} from "./chunk-U4CEU3KS.js";
import {
  __async,
  __spreadProps,
  __spreadValues
} from "./chunk-TXDUYLVM.js";

// node_modules/ngx-scrollbar/fesm2022/ngx-scrollbar-smooth-scroll.mjs
var NEWTON_ITERATIONS = 4;
var NEWTON_MIN_SLOPE = 1e-3;
var SUBDIVISION_PRECISION = 1e-7;
var SUBDIVISION_MAX_ITERATIONS = 10;
var kSplineTableSize = 11;
var kSampleStepSize = 1 / (kSplineTableSize - 1);
var float32ArraySupported = typeof Float32Array === "function";
function A(aA1, aA2) {
  return 1 - 3 * aA2 + 3 * aA1;
}
function B(aA1, aA2) {
  return 3 * aA2 - 6 * aA1;
}
function C(aA1) {
  return 3 * aA1;
}
function calcBezier(aT, aA1, aA2) {
  return ((A(aA1, aA2) * aT + B(aA1, aA2)) * aT + C(aA1)) * aT;
}
function getSlope(aT, aA1, aA2) {
  return 3 * A(aA1, aA2) * aT * aT + 2 * B(aA1, aA2) * aT + C(aA1);
}
function binarySubdivide(aX, aA, aB, mX1, mX2) {
  let currentX, currentT, i = 0;
  do {
    currentT = aA + (aB - aA) / 2;
    currentX = calcBezier(currentT, mX1, mX2) - aX;
    if (currentX > 0) {
      aB = currentT;
    } else {
      aA = currentT;
    }
  } while (Math.abs(currentX) > SUBDIVISION_PRECISION && ++i < SUBDIVISION_MAX_ITERATIONS);
  return currentT;
}
function newtonRaphsonIterate(aX, aGuessT, mX1, mX2) {
  for (let i = 0; i < NEWTON_ITERATIONS; ++i) {
    const currentSlope = getSlope(aGuessT, mX1, mX2);
    if (currentSlope === 0) {
      return aGuessT;
    }
    const currentX = calcBezier(aGuessT, mX1, mX2) - aX;
    aGuessT -= currentX / currentSlope;
  }
  return aGuessT;
}
function LinearEasing(x) {
  return x;
}
function bezier(mX1, mY1, mX2, mY2) {
  if (!(0 <= mX1 && mX1 <= 1 && 0 <= mX2 && mX2 <= 1)) {
    throw new Error("bezier x values must be in [0, 1] range");
  }
  if (mX1 === mY1 && mX2 === mY2) {
    return LinearEasing;
  }
  const sampleValues = float32ArraySupported ? new Float32Array(kSplineTableSize) : new Array(kSplineTableSize);
  for (let i = 0; i < kSplineTableSize; ++i) {
    sampleValues[i] = calcBezier(i * kSampleStepSize, mX1, mX2);
  }
  function getTForX(aX) {
    let intervalStart = 0;
    let currentSample = 1;
    const lastSample = kSplineTableSize - 1;
    for (; currentSample !== lastSample && sampleValues[currentSample] <= aX; ++currentSample) {
      intervalStart += kSampleStepSize;
    }
    --currentSample;
    const dist = (aX - sampleValues[currentSample]) / (sampleValues[currentSample + 1] - sampleValues[currentSample]);
    const guessForT = intervalStart + dist * kSampleStepSize;
    const initialSlope = getSlope(guessForT, mX1, mX2);
    if (initialSlope >= NEWTON_MIN_SLOPE) {
      return newtonRaphsonIterate(aX, guessForT, mX1, mX2);
    } else if (initialSlope === 0) {
      return guessForT;
    } else {
      return binarySubdivide(aX, intervalStart, intervalStart + kSampleStepSize, mX1, mX2);
    }
  }
  return function BezierEasing(x) {
    if (x === 0) {
      return 0;
    }
    if (x === 1) {
      return 1;
    }
    return calcBezier(getTForX(x), mY1, mY2);
  };
}
var defaultSmoothScrollOptions = {
  duration: 468,
  easing: {
    x1: 0.42,
    y1: 0,
    x2: 0.58,
    y2: 1
  }
};
var SMOOTH_SCROLL_OPTIONS = new InjectionToken("SMOOTH_SCROLL_OPTIONS", {
  providedIn: "root",
  factory: () => defaultSmoothScrollOptions
});
var _SmoothScrollManager = class _SmoothScrollManager {
  constructor() {
    this.document = inject(DOCUMENT);
    this.zone = inject(NgZone);
    this._defaultOptions = inject(SMOOTH_SCROLL_OPTIONS);
    this.onGoingScrolls = /* @__PURE__ */ new Map();
  }
  /**
   * Timing method
   */
  get now() {
    return this.document.defaultView.performance?.now?.bind(this.document.defaultView.performance) || Date.now;
  }
  /**
   * changes scroll position inside an element
   */
  scrollElement(el, x, y) {
    el.scrollLeft = x;
    el.scrollTop = y;
  }
  /**
   * Handles a given parameter of type HTMLElement, ElementRef or selector
   */
  getElement(el, parent) {
    if (typeof el === "string") {
      return (parent || this.document).querySelector(el);
    }
    return coerceElement(el);
  }
  /**
   * Initializes a destroyer stream, re-initializes it if the element is already being scrolled
   */
  getScrollDestroyerRef(el) {
    if (this.onGoingScrolls.has(el)) {
      this.onGoingScrolls.get(el).next();
    }
    return this.onGoingScrolls.set(el, new Subject()).get(el);
  }
  /**
   * A function called recursively that, given a context, steps through scrolling
   */
  step(context) {
    return new Observable((subscriber) => {
      let elapsed = (this.now() - context.startTime) / context.duration;
      elapsed = elapsed > 1 ? 1 : elapsed;
      const value = context.easing(elapsed);
      context.currentX = context.startX + (context.x - context.startX) * value;
      context.currentY = context.startY + (context.y - context.startY) * value;
      this.scrollElement(context.scrollable, context.currentX, context.currentY);
      requestAnimationFrame(() => {
        subscriber.next();
        subscriber.complete();
      });
    });
  }
  /**
   * Checks if smooth scroll has reached, cleans up the smooth scroll stream
   */
  isReached(context, destroyed) {
    if (context.currentX === context.x && context.currentY === context.y) {
      destroyed.next();
      return true;
    }
    return false;
  }
  /**
   * Scroll recursively until coordinates are reached
   * @param context
   * @param destroyed
   */
  scrolling(context, destroyed) {
    return this.step(context).pipe(
      // Continue while target coordinates hasn't reached yet
      takeWhile(() => !this.isReached(context, destroyed)),
      switchMap(() => this.scrolling(context, destroyed))
    );
  }
  /**
   * Deletes the destroyer function, runs if the smooth scroll has finished or interrupted
   */
  onScrollReached(el, resolve, destroyed) {
    destroyed.complete();
    this.onGoingScrolls.delete(el);
    this.zone.run(() => resolve());
  }
  /**
   * Terminates an ongoing smooth scroll
   */
  interrupted(el, destroyed) {
    return merge(fromEvent(el, "wheel", {
      passive: true,
      capture: true
    }), fromEvent(el, "touchmove", {
      passive: true,
      capture: true
    }), destroyed).pipe(take(1));
  }
  applyScrollToOptions(el, options) {
    if (!options.duration) {
      this.scrollElement(el, options.left, options.top);
      return Promise.resolve();
    }
    return new Promise((resolve) => {
      this.zone.runOutsideAngular(() => {
        const destroyed = this.getScrollDestroyerRef(el);
        const context = {
          scrollable: el,
          startTime: this.now(),
          startX: el.scrollLeft,
          startY: el.scrollTop,
          x: options.left == null ? el.scrollLeft : ~~options.left,
          y: options.top == null ? el.scrollTop : ~~options.top,
          duration: options.duration,
          easing: bezier(options.easing.x1, options.easing.y1, options.easing.x2, options.easing.y2)
        };
        this.scrolling(context, destroyed).pipe(
          // Continue until interrupted by another scroll (new smooth scroll / wheel / touchmove)
          takeUntil(this.interrupted(el, destroyed)),
          // Once finished, clean up the destroyer stream and resolve the promise
          finalize(() => this.onScrollReached(el, resolve, destroyed))
        ).subscribe();
      });
    });
  }
  /**
   * Scrolls to the specified offsets. This is a normalized version of the browser's native scrollTo
   * method, since browsers are not consistent about what scrollLeft means in RTL. For this method
   * left and right always refer to the left and right side of the scrolling container irrespective
   * of the layout direction. start and end refer to left and right in an LTR context and vice-versa
   * in an RTL context.
   * @param scrollable element
   * @param customOptions specified the offsets to scroll to.
   */
  scrollTo(scrollable, customOptions) {
    const el = this.getElement(scrollable);
    const isRtl = getComputedStyle(el).direction === "rtl";
    const options = __spreadValues(__spreadValues(__spreadValues({}, this._defaultOptions), customOptions), {
      // Rewrite start & end offsets as right or left offsets.
      left: customOptions.left == null ? isRtl ? customOptions.end : customOptions.start : customOptions.left,
      right: customOptions.right == null ? isRtl ? customOptions.start : customOptions.end : customOptions.right
    });
    if (options.bottom != null) {
      options.top = el.scrollHeight - el.clientHeight - options.bottom;
    }
    if (isRtl) {
      if (options.left != null) {
        options.right = el.scrollWidth - el.clientWidth - options.left;
      }
      options.left = options.right ? -options.right : options.right;
    } else {
      if (options.right != null) {
        options.left = el.scrollWidth - el.clientWidth - options.right;
      }
    }
    return this.applyScrollToOptions(el, options);
  }
  /**
   * Scroll to element by reference or selector
   */
  scrollToElement(scrollable, target, customOptions = {}) {
    const scrollableEl = this.getElement(scrollable);
    const targetEl = this.getElement(target, scrollableEl);
    const isRtl = getComputedStyle(scrollableEl).direction === "rtl";
    if (!targetEl || !scrollableEl) {
      return Promise.resolve();
    }
    const scrollableRect = scrollableEl.getBoundingClientRect();
    const targetRect = targetEl.getBoundingClientRect();
    const options = __spreadValues(__spreadValues(__spreadValues({}, this._defaultOptions), customOptions), {
      top: targetRect.top + scrollableEl.scrollTop - scrollableRect.top + (customOptions.top || 0),
      // Rewrite start & end offsets as right or left offsets.
      left: customOptions.left == null ? isRtl ? customOptions.end : customOptions.start : customOptions.left,
      right: customOptions.right == null ? isRtl ? customOptions.start : customOptions.end : customOptions.right
    });
    if (customOptions.center) {
      const containerCenterX = scrollableRect.left + scrollableRect.width / 2;
      const containerCenterY = scrollableRect.top + scrollableRect.height / 2;
      const targetCenterX = targetRect.left + targetRect.width / 2;
      const targetCenterY = targetRect.top + targetRect.height / 2;
      options.left = targetCenterX - containerCenterX + scrollableEl.scrollLeft;
      options.top = targetCenterY - containerCenterY + scrollableEl.scrollTop;
      return this.applyScrollToOptions(scrollableEl, options);
    }
    if (options.bottom != null) {
      const bottomEdge = scrollableRect.height - targetRect.height;
      options.top = targetRect.top + scrollableEl.scrollTop - scrollableRect.top - bottomEdge + (customOptions.bottom || 0);
    }
    if (isRtl) {
      options.left = targetRect.left - scrollableRect.left + scrollableEl.scrollLeft + (options.left || 0);
      if (options.right != null) {
        options.left = targetRect.right - scrollableRect.left + scrollableEl.scrollLeft - scrollableRect.width + (options.right || 0);
      }
    } else {
      options.left = targetRect.left - scrollableRect.left + scrollableEl.scrollLeft + (options.left || 0);
      if (options.right != null) {
        options.left = targetRect.right - scrollableRect.left + scrollableEl.scrollLeft - scrollableRect.width + (options.right || 0);
      }
    }
    const computedOptions = {
      top: options.top,
      left: options.left,
      easing: options.easing,
      duration: options.duration
    };
    return this.applyScrollToOptions(scrollableEl, computedOptions);
  }
};
_SmoothScrollManager.\u0275fac = function SmoothScrollManager_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _SmoothScrollManager)();
};
_SmoothScrollManager.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
  token: _SmoothScrollManager,
  factory: _SmoothScrollManager.\u0275fac,
  providedIn: "root"
});
var SmoothScrollManager = _SmoothScrollManager;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SmoothScrollManager, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();
var _SmoothScroll = class _SmoothScroll {
  constructor() {
    this.smoothScroll = inject(SmoothScrollManager);
    this.element = inject(ElementRef);
  }
  scrollTo(options) {
    return this.smoothScroll.scrollTo(this.element, options);
  }
  scrollToElement(target, options) {
    return this.smoothScroll.scrollToElement(this.element, target, options);
  }
};
_SmoothScroll.\u0275fac = function SmoothScroll_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _SmoothScroll)();
};
_SmoothScroll.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
  type: _SmoothScroll,
  selectors: [["", "smoothScroll", ""]],
  exportAs: ["smoothScroll"]
});
var SmoothScroll = _SmoothScroll;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SmoothScroll, [{
    type: Directive,
    args: [{
      standalone: true,
      selector: "[smoothScroll]",
      exportAs: "smoothScroll"
    }]
  }], null, null);
})();

// node_modules/ngx-scrollbar/fesm2022/ngx-scrollbar.mjs
var _c0 = ["scrollbarButton", ""];
function ScrollbarY_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "button", 4)(1, "button", 5);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275classMap(\u0275\u0275interpolate1("ng-scrollbar-button ", ctx_r0.cmp.buttonClass()));
    \u0275\u0275advance();
    \u0275\u0275classMap(\u0275\u0275interpolate1("ng-scrollbar-button ", ctx_r0.cmp.buttonClass()));
  }
}
function ScrollbarX_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "button", 4)(1, "button", 5);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275classMap(\u0275\u0275interpolate1("ng-scrollbar-button ", ctx_r0.cmp.buttonClass()));
    \u0275\u0275advance();
    \u0275\u0275classMap(\u0275\u0275interpolate1("ng-scrollbar-button ", ctx_r0.cmp.buttonClass()));
  }
}
var _c1 = "[_nghost-%COMP%]{position:absolute;inset:0;pointer-events:none;min-width:calc(var(--viewport-width) * 1px);min-height:calc(var(--viewport-height) * 1px)}.ng-scrollbar-sticky[_ngcontent-%COMP%]{top:calc(var(--_scrollbar-wrapper-top) * 1px);left:calc(var(--_scrollbar-wrapper-left) * 1px);right:calc(var(--_scrollbar-wrapper-right) * 1px);height:calc(var(--_scrollbar-wrapper-height) * 1px);width:calc(var(--_scrollbar-wrapper-width) * 1px);position:sticky;z-index:100;opacity:var(--_scrollbar-hover-opacity);transition:var(--_scrollbar-opacity-transition);pointer-events:var(--_scrollbar-pointer-events)}.ng-scrollbar-track-wrapper[_ngcontent-%COMP%]{touch-action:none;-webkit-user-select:none;user-select:none;top:var(--_scrollbar-track-top);bottom:var(--_scrollbar-track-bottom);right:var(--_scrollbar-track-right);left:var(--_scrollbar-track-left);transition:var(--INTERNAL-scrollbar-track-wrapper-transition);position:absolute;overflow:hidden;display:flex;place-items:center}.ng-scrollbar-track[_ngcontent-%COMP%]{position:relative;width:100%;height:100%;background-color:var(--INTERNAL-scrollbar-track-color);border-radius:var(--INTERNAL-scrollbar-border-radius);cursor:default;z-index:1;order:2}.ng-scrollbar-thumb[_ngcontent-%COMP%]{box-sizing:border-box;position:absolute;transition:var(--INTERNAL-scrollbar-thumb-transition);border-radius:var(--INTERNAL-scrollbar-border-radius);height:var(--_thumb-height);width:var(--_thumb-width);animation-name:_ngcontent-%COMP%_scrollbarThumbAnimation;animation-duration:1ms;animation-timing-function:linear}@keyframes _ngcontent-%COMP%_scrollbarThumbAnimation{0%{translate:var(--_scrollbar-thumb-transform-from)}to{translate:var(--_scrollbar-thumb-transform-to)}}";
function Scrollbars_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "scrollbar-y");
  }
}
function Scrollbars_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "scrollbar-x");
  }
}
var _c2 = ["contentWrapper"];
var _c3 = ["*"];
var _c4 = ["externalViewport", ""];
var _c5 = "[_nghost-%COMP%]{display:block;position:relative;max-height:100%;max-width:100%;--INTERNAL-scrollbar-border-radius: var(--scrollbar-border-radius, 0px);--INTERNAL-scrollbar-thickness: var(--scrollbar-thickness, 5);--INTERNAL-scrollbar-offset: var(--scrollbar-offset, 0);--INTERNAL-scrollbar-track-wrapper-transition: var(--scrollbar-track-wrapper-transition, width 60ms linear, height 60ms linear);--INTERNAL-scrollbar-track-color: var(--scrollbar-track-color, transparent);--INTERNAL-scrollbar-thumb-color: var(--scrollbar-thumb-color, rgb(0 0 0 / 20%));--INTERNAL-scrollbar-thumb-hover-color: var(--scrollbar-thumb-hover-color, var(--INTERNAL-scrollbar-thumb-color));--INTERNAL-scrollbar-hover-thickness: var(--scrollbar-hover-thickness, var(--INTERNAL-scrollbar-thickness));--INTERNAL-scrollbar-thumb-transition: var(--scrollbar-thumb-transition, none);--INTERNAL-scrollbar-thumb-min-size: var(--scrollbar-thumb-min-size, 20);--INTERNAL-scrollbar-button-color: var(--scrollbar-button-color, var(--INTERNAL-scrollbar-thumb-color));--INTERNAL-scrollbar-button-hover-color: var(--scrollbar-button-hover-color, var(--INTERNAL-scrollbar-button-color));--INTERNAL-scrollbar-button-active-color: var(--scrollbar-button-active-color, var(--INTERNAL-scrollbar-button-hover-color));--INTERNAL-scrollbar-button-fill: var(--scrollbar-button-fill, white);--INTERNAL-scrollbar-button-hover-fill: var(--scrollbar-button-hover-fill, var(--INTERNAL-scrollbar-button-fill));--INTERNAL-scrollbar-button-active-fill: var(--scrollbar-button-active-fill, var(--INTERNAL-scrollbar-button-hover-fill));--INTERNAL-scrollbar-button-size: var(--scrollbar-button-size, 20px);--INTERNAL-scrollbar-hover-opacity-transition-enter-duration: var(--scrollbar-hover-opacity-transition-enter-duration, 0);--INTERNAL-scrollbar-hover-opacity-transition-leave-duration: var(--scrollbar-hover-opacity-transition-leave-duration, .4s);--INTERNAL-scrollbar-hover-opacity-transition-leave-delay: var(--scrollbar-hover-opacity-transition-leave-delay, 1s);--INTERNAL-scrollbar-overscroll-behavior: var(--scrollbar-overscroll-behavior, initial);--INTERNAL-scrollbar-mobile-overscroll-behavior: var(--scrollbar-mobile-overscroll-behavior, none);--_scrollbar-thickness: calc(var(--INTERNAL-scrollbar-thickness) + var(--INTERNAL-scrollbar-offset) * 2);--_scrollbar-pointer-events: auto;--_scrollbar-offset-px: calc(var(--INTERNAL-scrollbar-offset) * 1px);--_scrollbar-thickness-px: calc(var(--INTERNAL-scrollbar-thickness) * 1px);--_scrollbar-hover-thickness-px: calc(var(--INTERNAL-scrollbar-hover-thickness) * 1px);--_viewport-padding-top: 0;--_viewport-padding-bottom: 0;--_viewport-padding-left: 0;--_viewport-padding-right: 0;--_horizontal-thumb-display: block;--_vertical-thumb-display: block;--_viewport-overflow: auto;--_viewport-pointer-events: auto;--_thumb-x-color: var(--INTERNAL-scrollbar-thumb-color);--_thumb-y-color: var(--INTERNAL-scrollbar-thumb-color);--_track-y-thickness: var(--_scrollbar-thickness-px);--_track-x-thickness: var(--_scrollbar-thickness-px);--_viewport-overscroll-behavior: var(--INTERNAL-scrollbar-overscroll-behavior);--_scrollbar-content-width: fit-content}[_nghost-%COMP%]{--_spacer-width: var(--spacer-width);--_spacer-height: var(--spacer-height);--_vertical-top: var(--_scrollbar-offset-px);--_vertical-bottom: var(--_scrollbar-offset-px);--_horizontal-left: var(--_scrollbar-offset-px);--_horizontal-right: var(--_scrollbar-offset-px);--_horizontal-top: initial;--_horizontal-bottom: var(--_scrollbar-offset-px);--_scrollbar-wrapper-x-top: calc(var(--viewport-height) - var(--_scrollbar-thickness));--reached-offset: 1px;--reached-offset-top: var(--reached-offset);--reached-offset-bottom: var(--reached-offset);--reached-offset-start: var(--reached-offset);--reached-offset-end: var(--reached-offset);--dropped-offset: 1px;--dropped-offset-top: var(--dropped-offset);--dropped-offset-bottom: var(--dropped-offset);--dropped-offset-start: var(--dropped-offset);--dropped-offset-end: var(--dropped-offset);--_viewport_scroll-timeline: unset;--_animation-timeline-y: unset;--_scrollbar-y-thumb-transform-to-value: unset;--_scrollbar-x-thumb-transform-to-value: unset;--_scrollbar-thumb-transform-from: unset;--_scrollbar-thumb-transform-to: unset}.ng-scrollbar-external-viewport[_nghost-%COMP%]     .ng-scroll-viewport{min-height:100%;min-width:100%;height:100%;max-height:100%;max-width:100%}.ng-scroll-viewport[_nghost-%COMP%], .ng-scrollbar-external-viewport[_nghost-%COMP%]     .ng-scroll-viewport{position:relative;overflow:var(--_viewport-overflow);scroll-timeline:var(--_viewport_scroll-timeline);box-sizing:border-box!important;-webkit-overflow-scrolling:touch;will-change:scroll-position;-webkit-user-select:var(--_viewport-user-select);user-select:var(--_viewport-user-select);overscroll-behavior:var(--_viewport-overscroll-behavior);pointer-events:var(--_viewport-pointer-events)}.ng-scroll-viewport[_nghost-%COMP%] > .ng-scroll-content[_ngcontent-%COMP%], .ng-scrollbar-external-viewport[_nghost-%COMP%]     .ng-scroll-viewport>.ng-scroll-content{width:var(--_scrollbar-content-width);z-index:1;min-width:100%;min-height:100%;contain:content;padding:var(--_viewport-padding-top, 0) var(--_viewport-padding-right, 0) var(--_viewport-padding-bottom, 0) var(--_viewport-padding-left, 0)}[appearance=native][_nghost-%COMP%]{--_spacer-width: calc(var(--spacer-width) + var(--_scrollbar-thickness));--_spacer-height: calc(var(--spacer-height) + var(--_scrollbar-thickness))}.ng-scroll-viewport[_nghost-%COMP%] > .ng-scroll-spacer[_ngcontent-%COMP%], .ng-scrollbar-external-viewport[_nghost-%COMP%]     .ng-scroll-viewport>.ng-scroll-spacer{position:relative;width:calc(var(--_spacer-width) * 1px);height:calc(var(--_spacer-height) * 1px)}.ng-scroll-viewport[_nghost-%COMP%], .ng-scrollbar-external-viewport[_nghost-%COMP%]     .ng-scroll-viewport{scrollbar-width:none!important}.ng-scroll-viewport[_nghost-%COMP%]::-webkit-scrollbar, .ng-scrollbar-external-viewport[_nghost-%COMP%]     .ng-scroll-viewport::-webkit-scrollbar{display:none!important}[position=invertX][_nghost-%COMP%], [position=invertAll][_nghost-%COMP%]{--_horizontal-top: var(--_scrollbar-offset-px);--_horizontal-bottom: initial;--_scrollbar-wrapper-x-top: 0}[dir=ltr][_nghost-%COMP%]{--_scrollbar-wrapper-y-right: initial;--_vertical-right: var(--_scrollbar-offset-px);--_vertical-left: initial;--_scrollbar-wrapper-y-left: calc(var(--viewport-width) - var(--_scrollbar-thickness))}[dir=ltr][position=invertY][_nghost-%COMP%], [dir=ltr][position=invertAll][_nghost-%COMP%]{--_vertical-left: var(--_scrollbar-offset-px);--_vertical-right: initial;--_scrollbar-wrapper-y-left: 0}[dir=rtl][_nghost-%COMP%]{--_scrollbar-wrapper-y-left: initial;--_vertical-left: var(--_scrollbar-offset-px);--_vertical-right: initial;--_scrollbar-wrapper-y-right: calc(var(--viewport-width) - var(--_scrollbar-thickness))}[dir=rtl][position=invertY][_nghost-%COMP%], [dir=rtl][position=invertAll][_nghost-%COMP%]{--_vertical-right: var(--_scrollbar-offset-px);--_vertical-left: initial;--_scrollbar-wrapper-y-right: 0}[verticalUsed=true][horizontalUsed=true][_nghost-%COMP%]{--_scrollbar-thickness-margin: calc(var(--INTERNAL-scrollbar-thickness) + var(--INTERNAL-scrollbar-offset) * 3);--_scrollbar-thickness-margin-px: calc(var(--_scrollbar-thickness-margin) * 1px)}[horizontalUsed=true][_nghost-%COMP%]{--_vertical-top: var(--_scrollbar-offset-px);--_vertical-bottom: var(--_scrollbar-thickness-margin-px)}[horizontalUsed=true][position=invertX][_nghost-%COMP%], [horizontalUsed=true][position=invertAll][_nghost-%COMP%]{--_vertical-top: var(--_scrollbar-thickness-margin-px);--_vertical-bottom: var(--_scrollbar-offset-px)}[verticalUsed=true][dir=ltr][_nghost-%COMP%]{--_horizontal-left: var(--_scrollbar-offset-px);--_horizontal-right: var(--_scrollbar-thickness-margin-px)}[verticalUsed=true][dir=rtl][_nghost-%COMP%]{--_horizontal-left: var(--_scrollbar-thickness-margin-px);--_horizontal-right: var(--_scrollbar-offset-px)}[verticalUsed=true][position=invertY][dir=ltr][_nghost-%COMP%], [verticalUsed=true][position=invertAll][dir=ltr][_nghost-%COMP%]{--_horizontal-left: var(--_scrollbar-thickness-margin-px);--_horizontal-right: var(--_scrollbar-offset-px)}[verticalUsed=true][position=invertY][dir=rtl][_nghost-%COMP%], [verticalUsed=true][position=invertAll][dir=rtl][_nghost-%COMP%]{--_horizontal-left: var(--_scrollbar-offset-px);--_horizontal-right: var(--_scrollbar-thickness-margin-px)}[appearance=native][verticalUsed=true][dir=ltr][_nghost-%COMP%]{--_viewport-padding-left: 0;--_viewport-padding-right: calc(var(--_scrollbar-thickness) * 1px)}[appearance=native][verticalUsed=true][dir=rtl][_nghost-%COMP%]{--_viewport-padding-left: calc(var(--_scrollbar-thickness) * 1px);--_viewport-padding-right: 0}[appearance=native][verticalUsed=true][position=invertY][dir=ltr][_nghost-%COMP%], [appearance=native][verticalUsed=true][position=invertAll][dir=ltr][_nghost-%COMP%]{--_viewport-padding-left: calc(var(--_scrollbar-thickness) * 1px);--_viewport-padding-right: 0}[appearance=native][verticalUsed=true][position=invertY][dir=rtl][_nghost-%COMP%], [appearance=native][verticalUsed=true][position=invertAll][dir=rtl][_nghost-%COMP%]{--_viewport-padding-left: 0;--_viewport-padding-right: calc(var(--_scrollbar-thickness) * 1px)}[appearance=native][horizontalUsed=true][_nghost-%COMP%]{--_viewport-padding-top: 0;--_viewport-padding-bottom: calc(var(--_scrollbar-thickness) * 1px)}[appearance=native][horizontalUsed=true][position=invertX][_nghost-%COMP%], [appearance=native][horizontalUsed=true][position=invertAll][_nghost-%COMP%]{--_viewport-padding-top: calc(var(--_scrollbar-thickness) * 1px);--_viewport-padding-bottom: 0}[visibility=hover][_nghost-%COMP%]{--_scrollbar-hover-opacity: 0;--_scrollbar-opacity-transition: opacity var(--INTERNAL-scrollbar-hover-opacity-transition-leave-duration) var(--INTERNAL-scrollbar-hover-opacity-transition-leave-delay)}[visibility=hover][_nghost-%COMP%]:hover, [visibility=hover][_nghost-%COMP%]:active, [visibility=hover][_nghost-%COMP%]:focus{--_scrollbar-hover-opacity: 1;--_scrollbar-opacity-transition: opacity var(--INTERNAL-scrollbar-hover-opacity-transition-enter-duration)}[dir=ltr][_nghost-%COMP%]     .scroll-reached-trigger-element[trigger=start], [dir=ltr][_nghost-%COMP%]     .scroll-dropped-trigger-element[trigger=start]{left:0;right:unset}[dir=ltr][_nghost-%COMP%]     .scroll-reached-trigger-element[trigger=end], [dir=ltr][_nghost-%COMP%]     .scroll-dropped-trigger-element[trigger=end]{right:0;left:unset}[dir=rtl][_nghost-%COMP%]     .scroll-reached-trigger-element[trigger=start], [dir=rtl][_nghost-%COMP%]     .scroll-dropped-trigger-element[trigger=start]{right:0;left:unset}[dir=rtl][_nghost-%COMP%]     .scroll-reached-trigger-element[trigger=end], [dir=rtl][_nghost-%COMP%]     .scroll-dropped-trigger-element[trigger=end]{left:0;right:unset}[_nghost-%COMP%]     .ng-scroll-reached-wrapper, [_nghost-%COMP%]     .ng-scroll-dropped-wrapper, [_nghost-%COMP%]     .scroll-reached-trigger-element, [_nghost-%COMP%]     .scroll-dropped-trigger-element{position:absolute;-webkit-user-select:none;user-select:none;pointer-events:none;z-index:-9999}[_nghost-%COMP%]     .ng-scroll-reached-wrapper, [_nghost-%COMP%]     .ng-scroll-dropped-wrapper{visibility:hidden;inset:0;min-width:calc(var(--viewport-width) * 1px);min-height:calc(var(--viewport-height) * 1px)}[_nghost-%COMP%]     [isHorizontallyScrollable=false] .scroll-reached-trigger-element[trigger=end], [_nghost-%COMP%]     [isHorizontallyScrollable=false] .scroll-dropped-trigger-element[trigger=end]{display:none}[_nghost-%COMP%]     [isVerticallyScrollable=false] .scroll-reached-trigger-element[trigger=bottom], [_nghost-%COMP%]     [isVerticallyScrollable=false] .scroll-dropped-trigger-element[trigger=bottom]{display:none}[_nghost-%COMP%]     .scroll-reached-trigger-element{background:red}[_nghost-%COMP%]     .scroll-reached-trigger-element[trigger=top], [_nghost-%COMP%]     .scroll-reached-trigger-element[trigger=bottom]{left:0;right:0}[_nghost-%COMP%]     .scroll-reached-trigger-element[trigger=start], [_nghost-%COMP%]     .scroll-reached-trigger-element[trigger=end]{top:0;bottom:0}[_nghost-%COMP%]     .scroll-reached-trigger-element[trigger=top]{top:0;height:var(--reached-offset-top)}[_nghost-%COMP%]     .scroll-reached-trigger-element[trigger=bottom]{bottom:0;height:var(--reached-offset-bottom)}[_nghost-%COMP%]     .scroll-reached-trigger-element[trigger=start]{width:var(--reached-offset-start)}[_nghost-%COMP%]     .scroll-reached-trigger-element[trigger=end]{width:var(--reached-offset-end)}[_nghost-%COMP%]   .scroll-dropped-trigger-element[_ngcontent-%COMP%]{background:#00f}[_nghost-%COMP%]   .scroll-dropped-trigger-element[trigger=top][_ngcontent-%COMP%], [_nghost-%COMP%]   .scroll-dropped-trigger-element[trigger=bottom][_ngcontent-%COMP%]{left:0;right:0}[_nghost-%COMP%]   .scroll-dropped-trigger-element[trigger=start][_ngcontent-%COMP%], [_nghost-%COMP%]   .scroll-dropped-trigger-element[trigger=end][_ngcontent-%COMP%]{top:0;bottom:0}[_nghost-%COMP%]   .scroll-dropped-trigger-element[trigger=top][_ngcontent-%COMP%]{top:0;height:var(--dropped-offset-top)}[_nghost-%COMP%]   .scroll-dropped-trigger-element[trigger=bottom][_ngcontent-%COMP%]{bottom:0;height:var(--dropped-offset-bottom)}[_nghost-%COMP%]   .scroll-dropped-trigger-element[trigger=start][_ngcontent-%COMP%]{width:var(--dropped-offset-start)}[_nghost-%COMP%]   .scroll-dropped-trigger-element[trigger=end][_ngcontent-%COMP%]{width:var(--dropped-offset-end)}[verticalUsed=true][_nghost-%COMP%]{--_timeline-scope: --scrollerY;--_animation-timeline-y: --scrollerY;--_viewport_scroll-timeline: --scrollerY y}[horizontalUsed=true][_nghost-%COMP%]{--_timeline-scope: --scrollerX;--_animation-timeline-x: --scrollerX;--_viewport_scroll-timeline: --scrollerX x}[verticalUsed=true][horizontalUsed=true][_nghost-%COMP%]{--_timeline-scope: --scrollerX, --scrollerY;--_viewport_scroll-timeline: --scrollerX x, --scrollerY y}[orientation=vertical][_nghost-%COMP%]{--_viewport-overflow: hidden auto;--_scrollbar-content-width: unset}[orientation=horizontal][_nghost-%COMP%]{--_viewport-overflow: auto hidden}[disableInteraction=true][_nghost-%COMP%]{--_viewport-pointer-events: none;--_scrollbar-pointer-events: none}[isVerticallyScrollable=false][_nghost-%COMP%]{--_vertical-thumb-display: none}[isHorizontallyScrollable=false][_nghost-%COMP%]{--_horizontal-thumb-display: none}[dragging=x][_nghost-%COMP%], [dragging=y][_nghost-%COMP%]{--_viewport-user-select: none}[dragging=x][_nghost-%COMP%]{--_track-x-thickness: calc(var(--INTERNAL-scrollbar-hover-thickness) * 1px);--_thumb-x-color: var(var(--INTERNAL-scrollbar-thumb-min-size))}[dragging=y][_nghost-%COMP%]{--_track-y-thickness: calc(var(--INTERNAL-scrollbar-hover-thickness) * 1px);--_thumb-y-color: var(var(--INTERNAL-scrollbar-thumb-min-size))}[mobile=true][_nghost-%COMP%]{--_viewport-overscroll-behavior: var(--INTERNAL-scrollbar-mobile-overscroll-behavior)}";
var _ScrollViewport = class _ScrollViewport {
  constructor() {
    this.nativeElement = inject(ElementRef).nativeElement;
  }
};
_ScrollViewport.\u0275fac = function ScrollViewport_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _ScrollViewport)();
};
_ScrollViewport.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
  type: _ScrollViewport,
  selectors: [["", "scrollViewport", ""]]
});
var ScrollViewport = _ScrollViewport;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ScrollViewport, [{
    type: Directive,
    args: [{
      standalone: true,
      selector: "[scrollViewport]"
    }]
  }], null, null);
})();
function preventSelection(doc) {
  return tap(() => doc.onselectstart = () => false);
}
function enableSelection(doc) {
  return tap(() => doc.onselectstart = null);
}
function stopPropagation() {
  return tap((e) => {
    e.preventDefault();
    e.stopPropagation();
  });
}
function getThrottledStream(stream, duration) {
  return stream.pipe(throttleTime(duration || 0, null, {
    leading: false,
    trailing: true
  }));
}
var ViewportClasses;
(function(ViewportClasses2) {
  ViewportClasses2["Viewport"] = "ng-scroll-viewport";
  ViewportClasses2["Content"] = "ng-scroll-content";
  ViewportClasses2["Spacer"] = "ng-scroll-spacer";
})(ViewportClasses || (ViewportClasses = {}));
var _ViewportAdapter = class _ViewportAdapter {
  constructor() {
    this.initialized = signal(false);
  }
  /** Viewport clientHeight */
  get offsetHeight() {
    return this.nativeElement.offsetHeight;
  }
  /** Viewport clientWidth */
  get offsetWidth() {
    return this.nativeElement.offsetWidth;
  }
  /** Viewport scrollTop */
  get scrollTop() {
    return this.nativeElement.scrollTop;
  }
  /** Viewport scrollLeft */
  get scrollLeft() {
    return this.nativeElement.scrollLeft;
  }
  /** Content height */
  get contentHeight() {
    return this.contentWrapperElement.offsetHeight;
  }
  /** Content width */
  get contentWidth() {
    return this.contentWrapperElement.offsetWidth;
  }
  /** The remaining vertical scrollable distance. */
  get scrollMaxX() {
    return this.contentWidth - this.offsetWidth;
  }
  /** The vertical remaining scrollable distance */
  get scrollMaxY() {
    return this.contentHeight - this.offsetHeight;
  }
  /**
   * Initialize viewport
   */
  init(viewportElement, contentElement, spacerElement) {
    viewportElement.classList.add(ViewportClasses.Viewport);
    this.nativeElement = viewportElement;
    contentElement.classList.add(ViewportClasses.Content);
    if (spacerElement) {
      spacerElement.classList.add(ViewportClasses.Spacer);
      this.contentWrapperElement = spacerElement;
    } else {
      this.contentWrapperElement = contentElement;
    }
    this.initialized.set(true);
  }
  reset() {
    this.nativeElement = null;
    this.contentWrapperElement = null;
    this.initialized.set(false);
  }
  /**
   * Scrolls the viewport vertically to the specified value.
   */
  scrollYTo(value) {
    this.nativeElement.scrollTop = value;
  }
  /**
   * Scrolls the viewport horizontally to the specified value.
   */
  scrollXTo(value) {
    this.nativeElement.scrollLeft = value;
  }
};
_ViewportAdapter.\u0275fac = function ViewportAdapter_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _ViewportAdapter)();
};
_ViewportAdapter.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
  token: _ViewportAdapter,
  factory: _ViewportAdapter.\u0275fac
});
var ViewportAdapter = _ViewportAdapter;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ViewportAdapter, [{
    type: Injectable
  }], null, null);
})();
var NG_SCROLLBAR = new InjectionToken("NG_SCROLLBAR");
var defaultOptions = {
  trackClass: "",
  thumbClass: "",
  buttonClass: "",
  orientation: "auto",
  appearance: "native",
  visibility: "native",
  position: "native",
  trackScrollDuration: 50,
  sensorThrottleTime: 0,
  disableSensor: false,
  disableInteraction: false,
  buttons: false,
  hoverOffset: false
};
var defaultScrollTimelinePolyfill = "https://cdn.statically.io/gist/MurhafSousli/c852b6a672069396953f06ddd4b64620/raw/ef55db72e2abb7bc002ed79f4ad4cf408bfdb72f/scroll-timeline-lite.js";
var ScrollbarUpdateReason;
(function(ScrollbarUpdateReason2) {
  ScrollbarUpdateReason2["AfterInit"] = "AfterInit";
  ScrollbarUpdateReason2["Resized"] = "ResizeObserver";
})(ScrollbarUpdateReason || (ScrollbarUpdateReason = {}));
var NG_SCROLLBAR_OPTIONS = new InjectionToken("NG_SCROLLBAR_OPTIONS", {
  providedIn: "root",
  factory: () => defaultOptions
});
var NG_SCROLLBAR_POLYFILL = new InjectionToken("NG_SCROLLBAR_POLYFILL", {
  providedIn: "root",
  factory: () => defaultScrollTimelinePolyfill
});
function filterResizeEntries(entries, target) {
  return entries.filter((entry) => entry.target === target)[0]?.contentRect;
}
var _NgScrollbarCore = class _NgScrollbarCore {
  constructor() {
    this.options = inject(NG_SCROLLBAR_OPTIONS);
    this.sharedResizeObserver = inject(SharedResizeObserver);
    this.zone = inject(NgZone);
    this.platform = inject(Platform);
    this.isMobile = this.platform.IOS || this.platform.ANDROID;
    this.dir = inject(Directionality);
    this.smoothScroll = inject(SmoothScrollManager);
    this.viewport = inject(ViewportAdapter, {
      self: true
    });
    this.nativeElement = inject(ElementRef).nativeElement;
    this.direction = toSignal(this.dir.change, {
      initialValue: this.dir.value
    });
    this.dragging = signal("none");
    this.orientation = input(this.options.orientation);
    this.visibility = input(this.options.visibility);
    this.buttons = input(this.options.buttons, {
      transform: booleanAttribute
    });
    this.disableInteraction = input(this.options.disableInteraction, {
      transform: booleanAttribute
    });
    this.disableSensor = input(this.options.disableSensor, {
      transform: booleanAttribute
    });
    this.sensorThrottleTime = input(this.options.sensorThrottleTime, {
      transform: numberAttribute
    });
    this.hoverOffset = input(this.options.hoverOffset, {
      transform: booleanAttribute
    });
    this.viewportDimension = signal({
      width: 0,
      height: 0
    });
    this.contentDimension = signal({
      width: 0,
      height: 0
    });
    this.state = computed(() => {
      let verticalUsed = false;
      let horizontalUsed = false;
      let isVerticallyScrollable = false;
      let isHorizontallyScrollable = false;
      const orientation = this.orientation();
      const visibility = this.visibility();
      const viewportDimensions = this.viewportDimension();
      const contentDimensions = this.contentDimension();
      if (orientation === "auto" || orientation === "vertical") {
        isVerticallyScrollable = contentDimensions.height > viewportDimensions.height;
        verticalUsed = visibility === "visible" || isVerticallyScrollable;
      }
      if (orientation === "auto" || orientation === "horizontal") {
        isHorizontallyScrollable = contentDimensions.width > viewportDimensions.width;
        horizontalUsed = visibility === "visible" || isHorizontallyScrollable;
      }
      return {
        verticalUsed,
        horizontalUsed,
        isVerticallyScrollable,
        isHorizontallyScrollable
      };
    });
    this.isVerticallyScrollable = computed(() => this.state().isVerticallyScrollable);
    this.isHorizontallyScrollable = computed(() => this.state().isHorizontallyScrollable);
    this.verticalUsed = computed(() => this.state().verticalUsed);
    this.horizontalUsed = computed(() => this.state().horizontalUsed);
    this.trackScrollDuration = input(this.options.trackScrollDuration, {
      transform: numberAttribute
    });
    this.appearance = input(this.options.appearance);
    this.position = input(this.options.position);
    this.trackClass = input(this.options.trackClass);
    this.thumbClass = input(this.options.thumbClass);
    this.buttonClass = input(this.options.thumbClass);
    this.afterInit = output();
    this.afterUpdate = output();
    let resizeSub$;
    let hasInitialized;
    afterRenderEffect({
      earlyRead: (onCleanup) => {
        const disableSensor = this.disableSensor();
        const throttleDuration = this.sensorThrottleTime();
        const viewportInit = this.viewport.initialized();
        untracked(() => {
          if (viewportInit) {
            if (disableSensor) {
              requestAnimationFrame(() => this.update(ScrollbarUpdateReason.AfterInit));
            } else {
              this.zone.runOutsideAngular(() => {
                resizeSub$ = getThrottledStream(combineLatest([this.sharedResizeObserver.observe(this.viewport.nativeElement), this.sharedResizeObserver.observe(this.viewport.contentWrapperElement)]), throttleDuration).subscribe(() => {
                  this.zone.run(() => {
                    this.updateDimensions();
                    if (hasInitialized) {
                      this.afterUpdate.emit();
                    } else {
                      this.afterInit.emit();
                    }
                    hasInitialized = true;
                  });
                });
              });
            }
          }
          onCleanup(() => resizeSub$?.unsubscribe());
        });
      }
    });
  }
  /**
   * Manual update
   */
  update(reason) {
    this.updateDimensions();
    if (reason === ScrollbarUpdateReason.AfterInit) {
      this.afterInit.emit();
    } else {
      this.afterUpdate.emit();
    }
  }
  /**
   * Smooth scroll functions
   */
  scrollTo(options) {
    return this.smoothScroll.scrollTo(this.viewport.nativeElement, options);
  }
  /**
   * Scroll to element by reference or selector
   */
  scrollToElement(target, options) {
    return this.smoothScroll.scrollToElement(this.viewport.nativeElement, target, options);
  }
  updateDimensions() {
    this.viewportDimension.set({
      width: this.viewport.offsetWidth,
      height: this.viewport.offsetHeight
    });
    this.contentDimension.set({
      width: this.viewport.contentWidth,
      height: this.viewport.contentHeight
    });
  }
};
_NgScrollbarCore.\u0275fac = function NgScrollbarCore_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _NgScrollbarCore)();
};
_NgScrollbarCore.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
  type: _NgScrollbarCore,
  hostVars: 22,
  hostBindings: function NgScrollbarCore_HostBindings(rf, ctx) {
    if (rf & 2) {
      \u0275\u0275attribute("verticalUsed", ctx.verticalUsed())("horizontalUsed", ctx.horizontalUsed())("isVerticallyScrollable", ctx.isVerticallyScrollable())("isHorizontallyScrollable", ctx.isHorizontallyScrollable())("mobile", ctx.isMobile)("dir", ctx.direction())("position", ctx.position())("dragging", ctx.dragging())("appearance", ctx.appearance())("visibility", ctx.visibility())("orientation", ctx.orientation())("disableInteraction", ctx.disableInteraction());
      \u0275\u0275styleProp("--content-height", ctx.contentDimension().height)("--content-width", ctx.contentDimension().width)("--viewport-height", ctx.viewportDimension().height)("--viewport-width", ctx.viewportDimension().width);
      \u0275\u0275classProp("ng-scrollbar", true);
    }
  },
  inputs: {
    orientation: [1, "orientation"],
    visibility: [1, "visibility"],
    buttons: [1, "buttons"],
    disableInteraction: [1, "disableInteraction"],
    disableSensor: [1, "disableSensor"],
    sensorThrottleTime: [1, "sensorThrottleTime"],
    hoverOffset: [1, "hoverOffset"],
    trackScrollDuration: [1, "trackScrollDuration"],
    appearance: [1, "appearance"],
    position: [1, "position"],
    trackClass: [1, "trackClass"],
    thumbClass: [1, "thumbClass"],
    buttonClass: [1, "buttonClass"]
  },
  outputs: {
    afterInit: "afterInit",
    afterUpdate: "afterUpdate"
  },
  features: [\u0275\u0275ProvidersFeature([{
    provide: NG_SCROLLBAR,
    useExisting: _NgScrollbarCore
  }])]
});
var NgScrollbarCore = _NgScrollbarCore;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgScrollbarCore, [{
    type: Directive,
    args: [{
      host: {
        "[class.ng-scrollbar]": "true",
        "[attr.verticalUsed]": "verticalUsed()",
        "[attr.horizontalUsed]": "horizontalUsed()",
        "[attr.isVerticallyScrollable]": "isVerticallyScrollable()",
        "[attr.isHorizontallyScrollable]": "isHorizontallyScrollable()",
        "[attr.mobile]": "isMobile",
        "[attr.dir]": "direction()",
        "[attr.position]": "position()",
        "[attr.dragging]": "dragging()",
        "[attr.appearance]": "appearance()",
        "[attr.visibility]": "visibility()",
        "[attr.orientation]": "orientation()",
        "[attr.disableInteraction]": "disableInteraction()",
        "[style.--content-height]": "contentDimension().height",
        "[style.--content-width]": "contentDimension().width",
        "[style.--viewport-height]": "viewportDimension().height",
        "[style.--viewport-width]": "viewportDimension().width"
      },
      providers: [{
        provide: NG_SCROLLBAR,
        useExisting: NgScrollbarCore
      }]
    }]
  }], () => [], null);
})();
var SCROLLBAR_CONTROL = new InjectionToken("SCROLLBAR_CONTROL");
var _ScrollbarAdapter = class _ScrollbarAdapter {
  constructor() {
    this.trackSize = signal(0);
    this.cmp = inject(NG_SCROLLBAR);
  }
};
_ScrollbarAdapter.\u0275fac = function ScrollbarAdapter_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _ScrollbarAdapter)();
};
_ScrollbarAdapter.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
  type: _ScrollbarAdapter
});
var ScrollbarAdapter = _ScrollbarAdapter;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ScrollbarAdapter, [{
    type: Directive
  }], null, null);
})();
var _PointerEventsAdapter = class _PointerEventsAdapter {
  constructor() {
    this.cmp = inject(NG_SCROLLBAR);
    this.control = inject(SCROLLBAR_CONTROL);
    this.document = inject(DOCUMENT);
    this.zone = inject(NgZone);
    this.nativeElement = inject(ElementRef).nativeElement;
    effect((onCleanup) => {
      const disableInteraction = this.cmp.disableInteraction();
      untracked(() => {
        if (!disableInteraction) {
          this.zone.runOutsideAngular(() => {
            this._pointerEventsSub = this.pointerEvents.subscribe();
          });
        }
        onCleanup(() => this._pointerEventsSub?.unsubscribe());
      });
    });
  }
};
_PointerEventsAdapter.\u0275fac = function PointerEventsAdapter_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _PointerEventsAdapter)();
};
_PointerEventsAdapter.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
  type: _PointerEventsAdapter
});
var PointerEventsAdapter = _PointerEventsAdapter;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PointerEventsAdapter, [{
    type: Directive
  }], () => [], null);
})();
var _TrackAdapter = class _TrackAdapter extends PointerEventsAdapter {
  // Returns viewport client size
  get viewportSize() {
    return this.cmp.viewport[this.control.sizeProperty];
  }
  // Get track client rect
  get clientRect() {
    return this.nativeElement.getBoundingClientRect();
  }
  // Scrollbar track offset
  get offset() {
    return this.clientRect[this.control.rectOffsetProperty];
  }
  // Scrollbar track length
  get size() {
    return this.nativeElement[this.control.sizeProperty];
  }
  // Observable for track dragging events
  get pointerEvents() {
    const pointerDown$ = fromEvent(this.nativeElement, "pointerdown").pipe(stopPropagation(), preventSelection(this.document));
    const pointerUp$ = fromEvent(this.document, "pointerup", {
      passive: true
    }).pipe(enableSelection(this.document));
    const pointerEnter$ = fromEvent(this.nativeElement, "pointerover", {
      passive: true
    }).pipe(
      // When mouse is out and enters again, must set the current position first
      tap((e) => this.currMousePosition = e[this.control.offsetProperty]),
      map(() => true)
    );
    const pointerLeave$ = fromEvent(this.nativeElement, "pointerout", {
      passive: true
    }).pipe(map(() => false));
    const pointerOver$ = merge(pointerEnter$, pointerLeave$).pipe(startWith(true));
    const pointerMove$ = fromEvent(this.nativeElement, "pointermove", {
      passive: true
    }).pipe(tap((e) => this.currMousePosition = e[this.control.offsetProperty]));
    return pointerDown$.pipe(switchMap((startEvent) => {
      pointerMove$.pipe(takeUntil(pointerUp$)).subscribe();
      return this.onTrackFirstClick(startEvent).pipe(delay(200), switchMap(() => {
        return pointerOver$.pipe(switchMap((over) => {
          const currDirection = this.getScrollDirection(this.currMousePosition);
          const sameDirection = this.scrollDirection === currDirection;
          return over && sameDirection ? this.onTrackOngoingMousedown() : EMPTY;
        }));
      }), takeUntil(pointerUp$));
    }));
  }
  constructor() {
    afterRenderEffect({
      earlyRead: () => {
        this.cmp.viewportDimension();
        this.cmp.contentDimension();
        untracked(() => {
          this.control.trackSize.set(this.size);
          if (!this.size) {
            requestAnimationFrame(() => this.control.trackSize.set(this.size));
          }
        });
      }
    });
    super();
  }
  /**
   *  Callback when mouse is first clicked on the track
   */
  onTrackFirstClick(e) {
    this.currMousePosition = e[this.control.offsetProperty];
    this.scrollDirection = this.getScrollDirection(this.currMousePosition);
    this.scrollMax = this.control.viewportScrollMax;
    return this.scrollTo(this.nextStep());
  }
  nextStep() {
    if (this.scrollDirection === "forward") {
      const scrollForwardIncrement = this.getScrollForwardStep();
      if (scrollForwardIncrement >= this.scrollMax) {
        return this.scrollMax;
      }
      return scrollForwardIncrement;
    }
    const scrollBackwardIncrement = this.getScrollBackwardStep();
    if (scrollBackwardIncrement <= 0) {
      return 0;
    }
    return scrollBackwardIncrement;
  }
  /**
   * Callback when mouse is still down on the track
   * Incrementally scrolls towards target position until reached
   */
  onTrackOngoingMousedown() {
    const position = this.nextStep();
    return this.scrollTo(position).pipe(takeWhile(() => !this.isReached(position)), switchMap(() => this.onTrackOngoingMousedown()));
  }
  /**
   * Returns a flag that determines whether the scroll from the given position is the final step or not
   */
  isReached(position) {
    if (this.scrollDirection === "forward") {
      return position >= this.scrollMax;
    }
    return position <= 0;
  }
};
_TrackAdapter.\u0275fac = function TrackAdapter_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _TrackAdapter)();
};
_TrackAdapter.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
  type: _TrackAdapter,
  features: [\u0275\u0275InheritDefinitionFeature]
});
var TrackAdapter = _TrackAdapter;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TrackAdapter, [{
    type: Directive
  }], () => [], null);
})();
var _TrackXDirective = class _TrackXDirective extends TrackAdapter {
  get contentSize() {
    return this.cmp.viewport.contentWidth;
  }
  constructor() {
    effect(() => {
      if (this.cmp.direction() === "rtl") {
        this.getCurrPosition = () => {
          const offset = this.contentSize - this.viewportSize - this.control.viewportScrollOffset;
          return offset * this.size / this.contentSize;
        };
        this.getScrollDirection = (position) => {
          return position < this.getCurrPosition() ? "forward" : "backward";
        };
      } else {
        this.getCurrPosition = () => {
          return this.control.viewportScrollOffset * this.size / this.contentSize;
        };
        this.getScrollDirection = (position) => {
          return position > this.getCurrPosition() ? "forward" : "backward";
        };
      }
    });
    super();
  }
  scrollTo(start) {
    return from(this.cmp.scrollTo({
      start,
      duration: this.cmp.trackScrollDuration()
    }));
  }
  getScrollForwardStep() {
    return this.control.viewportScrollOffset + this.viewportSize;
  }
  getScrollBackwardStep() {
    return this.control.viewportScrollOffset - this.viewportSize;
  }
};
_TrackXDirective.\u0275fac = function TrackXDirective_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _TrackXDirective)();
};
_TrackXDirective.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
  type: _TrackXDirective,
  selectors: [["", "scrollbarTrackX", ""]],
  features: [\u0275\u0275ProvidersFeature([{
    provide: TrackAdapter,
    useExisting: _TrackXDirective
  }]), \u0275\u0275InheritDefinitionFeature]
});
var TrackXDirective = _TrackXDirective;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TrackXDirective, [{
    type: Directive,
    args: [{
      standalone: true,
      selector: "[scrollbarTrackX]",
      providers: [{
        provide: TrackAdapter,
        useExisting: TrackXDirective
      }]
    }]
  }], () => [], null);
})();
var _TrackYDirective = class _TrackYDirective extends TrackAdapter {
  get contentSize() {
    return this.cmp.viewport.contentHeight;
  }
  getCurrPosition() {
    return this.control.viewportScrollOffset * this.size / this.contentSize;
  }
  getScrollDirection(position) {
    return position > this.getCurrPosition() ? "forward" : "backward";
  }
  scrollTo(top) {
    return from(this.cmp.scrollTo({
      top,
      duration: this.cmp.trackScrollDuration()
    }));
  }
  getScrollForwardStep() {
    return this.control.viewportScrollOffset + this.viewportSize;
  }
  getScrollBackwardStep() {
    return this.control.viewportScrollOffset - this.viewportSize;
  }
};
_TrackYDirective.\u0275fac = /* @__PURE__ */ (() => {
  let \u0275TrackYDirective_BaseFactory;
  return function TrackYDirective_Factory(__ngFactoryType__) {
    return (\u0275TrackYDirective_BaseFactory || (\u0275TrackYDirective_BaseFactory = \u0275\u0275getInheritedFactory(_TrackYDirective)))(__ngFactoryType__ || _TrackYDirective);
  };
})();
_TrackYDirective.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
  type: _TrackYDirective,
  selectors: [["", "scrollbarTrackY", ""]],
  features: [\u0275\u0275ProvidersFeature([{
    provide: TrackAdapter,
    useExisting: _TrackYDirective
  }]), \u0275\u0275InheritDefinitionFeature]
});
var TrackYDirective = _TrackYDirective;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TrackYDirective, [{
    type: Directive,
    args: [{
      standalone: true,
      selector: "[scrollbarTrackY]",
      providers: [{
        provide: TrackAdapter,
        useExisting: TrackYDirective
      }]
    }]
  }], null, null);
})();
var _ScrollbarManager = class _ScrollbarManager {
  constructor() {
    this.isBrowser = isPlatformBrowser(inject(PLATFORM_ID));
    this._polyfillUrl = inject(NG_SCROLLBAR_POLYFILL);
    this.document = inject(DOCUMENT);
    this.window = this.document.defaultView;
    this.scrollTimelinePolyfill = signal(null);
    if (this.isBrowser && (!this.window["ScrollTimeline"] || !CSS.supports("animation-timeline", "scroll()"))) {
      this.initPolyfill();
    }
  }
  initPolyfill() {
    return __async(this, null, function* () {
      try {
        const script = this.document.createElement("script");
        script.src = this._polyfillUrl;
        yield new Promise((resolve, reject) => {
          script.onload = resolve;
          script.onerror = reject;
          this.document.head.appendChild(script);
        });
        if (this.window["ScrollTimeline"]) {
          this.scrollTimelinePolyfill.set(this.window["ScrollTimeline"]);
        } else {
          console.error("[NgScrollbar]: ScrollTimeline is not attached to the window object.");
        }
      } catch (error) {
        console.error("[NgScrollbar]: Error loading ScrollTimeline script:", error);
      }
    });
  }
};
_ScrollbarManager.\u0275fac = function ScrollbarManager_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _ScrollbarManager)();
};
_ScrollbarManager.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
  token: _ScrollbarManager,
  factory: _ScrollbarManager.\u0275fac,
  providedIn: "root"
});
var ScrollbarManager = _ScrollbarManager;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ScrollbarManager, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [], null);
})();
var _ThumbAdapter = class _ThumbAdapter extends PointerEventsAdapter {
  // Returns thumb size
  get size() {
    return this.nativeElement.getBoundingClientRect()[this.control.rectSizeProperty];
  }
  // The maximum space available for scrolling.
  get trackMax() {
    return this.track.size - this.size;
  }
  /**
   * Stream that emits the 'scrollTo' position when a scrollbar thumb element is dragged
   * This function is called by thumb drag event using viewport or scrollbar pointer events
   */
  get pointerEvents() {
    return fromEvent(this.nativeElement, "pointerdown").pipe(stopPropagation(), preventSelection(this.document), switchMap((e) => {
      let startTrackMax;
      let startScrollMax;
      const dragStart = of(e).pipe(tap(() => {
        startTrackMax = this.trackMax;
        startScrollMax = this.control.viewportScrollMax;
        this.setDragging(this.control.axis);
      }));
      const dragging = fromEvent(this.document, "pointermove").pipe(stopPropagation());
      const dragEnd = fromEvent(this.document, "pointerup", {
        capture: true
      }).pipe(stopPropagation(), enableSelection(this.document), tap(() => this.setDragging("none")));
      return dragStart.pipe(map((startEvent) => startEvent[this.control.offsetProperty]), switchMap((startOffset) => dragging.pipe(
        map((moveEvent) => moveEvent[this.control.clientProperty]),
        // Calculate how far the pointer is from the top/left of the scrollbar (minus the dragOffset).
        map((moveClient) => moveClient - this.track.offset),
        map((trackRelativeOffset) => startScrollMax * (trackRelativeOffset - startOffset) / startTrackMax),
        tap((scrollPosition) => this.control.instantScrollTo(scrollPosition, startScrollMax)),
        takeUntil(dragEnd)
      )));
    }));
  }
  constructor() {
    afterRenderEffect({
      earlyRead: () => {
        const script = this.manager.scrollTimelinePolyfill();
        untracked(() => {
          if (script && !this._animation) {
            this._animation = startPolyfill(script, this.nativeElement, this.cmp.viewport.nativeElement, this.control.axis);
          }
        });
      }
    });
    super();
    this.manager = inject(ScrollbarManager);
    this.track = inject(TrackAdapter);
  }
  setDragging(value) {
    this.zone.run(() => this.cmp.dragging.set(value));
  }
};
_ThumbAdapter.\u0275fac = function ThumbAdapter_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _ThumbAdapter)();
};
_ThumbAdapter.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
  type: _ThumbAdapter,
  features: [\u0275\u0275InheritDefinitionFeature]
});
var ThumbAdapter = _ThumbAdapter;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ThumbAdapter, [{
    type: Directive
  }], () => [], null);
})();
function startPolyfill(ScrollTimeline, element, source, axis) {
  return element.animate({
    translate: ["var(--_scrollbar-thumb-transform-from)", "var(--_scrollbar-thumb-transform-to)"]
  }, {
    fill: "both",
    easing: "linear",
    timeline: new ScrollTimeline({
      source,
      axis
    })
  });
}
var _ThumbXDirective = class _ThumbXDirective extends ThumbAdapter {
};
_ThumbXDirective.\u0275fac = /* @__PURE__ */ (() => {
  let \u0275ThumbXDirective_BaseFactory;
  return function ThumbXDirective_Factory(__ngFactoryType__) {
    return (\u0275ThumbXDirective_BaseFactory || (\u0275ThumbXDirective_BaseFactory = \u0275\u0275getInheritedFactory(_ThumbXDirective)))(__ngFactoryType__ || _ThumbXDirective);
  };
})();
_ThumbXDirective.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
  type: _ThumbXDirective,
  selectors: [["", "scrollbarThumbX", ""]],
  features: [\u0275\u0275ProvidersFeature([{
    provide: ThumbAdapter,
    useExisting: _ThumbXDirective
  }]), \u0275\u0275InheritDefinitionFeature]
});
var ThumbXDirective = _ThumbXDirective;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ThumbXDirective, [{
    type: Directive,
    args: [{
      standalone: true,
      selector: "[scrollbarThumbX]",
      providers: [{
        provide: ThumbAdapter,
        useExisting: ThumbXDirective
      }]
    }]
  }], null, null);
})();
var _ThumbYDirective = class _ThumbYDirective extends ThumbAdapter {
};
_ThumbYDirective.\u0275fac = /* @__PURE__ */ (() => {
  let \u0275ThumbYDirective_BaseFactory;
  return function ThumbYDirective_Factory(__ngFactoryType__) {
    return (\u0275ThumbYDirective_BaseFactory || (\u0275ThumbYDirective_BaseFactory = \u0275\u0275getInheritedFactory(_ThumbYDirective)))(__ngFactoryType__ || _ThumbYDirective);
  };
})();
_ThumbYDirective.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
  type: _ThumbYDirective,
  selectors: [["", "scrollbarThumbY", ""]],
  features: [\u0275\u0275ProvidersFeature([{
    provide: ThumbAdapter,
    useExisting: _ThumbYDirective
  }]), \u0275\u0275InheritDefinitionFeature]
});
var ThumbYDirective = _ThumbYDirective;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ThumbYDirective, [{
    type: Directive,
    args: [{
      standalone: true,
      selector: "[scrollbarThumbY]",
      providers: [{
        provide: ThumbAdapter,
        useExisting: ThumbYDirective
      }]
    }]
  }], null, null);
})();
var canScrollFunc = {
  forward: (scrollOffset, scrollMax) => scrollOffset < scrollMax,
  backward: (scrollOffset) => scrollOffset > 0
};
var scrollStepFunc = {
  forward: (scrollBy, offset) => offset + scrollBy,
  backward: (scrollBy, offset) => offset - scrollBy
};
var horizontalScrollStepFunc = {
  rtl: {
    forward: (scrollBy, offset, scrollMax) => scrollMax - offset - scrollBy,
    backward: (scrollBy, offset, scrollMax) => scrollMax - offset + scrollBy
  },
  ltr: scrollStepFunc
};
var _ScrollbarButton = class _ScrollbarButton extends PointerEventsAdapter {
  get pointerEvents() {
    const pointerDown$ = fromEvent(this.nativeElement, "pointerdown").pipe(stopPropagation(), preventSelection(this.document));
    const pointerUp$ = fromEvent(this.document, "pointerup", {
      passive: true
    }).pipe(enableSelection(this.document));
    const pointerLeave$ = fromEvent(this.nativeElement, "pointerleave", {
      passive: true
    });
    const pointerUpOrLeave$ = merge(pointerUp$, pointerLeave$);
    return pointerDown$.pipe(switchMap(() => this.firstScrollStep().pipe(delay(this.afterFirstClickDelay), switchMap(() => this.onOngoingPointerdown()), takeUntil(pointerUpOrLeave$))));
  }
  constructor() {
    effect(() => {
      const scrollDirection = this.scrollDirection();
      const dir = this.cmp.direction();
      untracked(() => {
        this.canScroll = canScrollFunc[scrollDirection];
        if (this.control.axis === "x") {
          this.nextStep = horizontalScrollStepFunc[dir][scrollDirection];
        } else {
          this.nextStep = scrollStepFunc[scrollDirection];
        }
      });
    });
    super();
    this.scrollbarButton = input.required();
    this.scrollDirection = input.required();
    this.afterFirstClickDelay = 120;
    this.firstClickDuration = 100;
    this.scrollBy = 50;
    this.onGoingScrollBy = 12;
  }
  firstScrollStep() {
    const value = this.nextStep(this.scrollBy, this.control.viewportScrollOffset, this.control.viewportScrollMax);
    return this.control.scrollTo(value, this.firstClickDuration);
  }
  onGoingScrollStep() {
    const scrollMax = this.control.viewportScrollMax;
    const value = this.nextStep(this.onGoingScrollBy, this.control.viewportScrollOffset, scrollMax);
    this.control.instantScrollTo(value, scrollMax);
  }
  onOngoingPointerdown() {
    return interval(0, animationFrameScheduler).pipe(takeWhile(() => this.canScroll(this.control.viewportScrollOffset, this.control.viewportScrollMax)), tap(() => this.onGoingScrollStep()));
  }
};
_ScrollbarButton.\u0275fac = function ScrollbarButton_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _ScrollbarButton)();
};
_ScrollbarButton.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
  type: _ScrollbarButton,
  selectors: [["button", "scrollbarButton", ""]],
  inputs: {
    scrollbarButton: [1, "scrollbarButton"],
    scrollDirection: [1, "scrollDirection"]
  },
  features: [\u0275\u0275InheritDefinitionFeature],
  attrs: _c0,
  decls: 3,
  vars: 0,
  consts: [[1, "ng-scrollbar-button-icon"], ["viewBox", "0 0 512 512", "xmlns", "http://www.w3.org/2000/svg"], ["d", "M413.1,327.3l-1.8-2.1l-136-156.5c-4.6-5.3-11.5-8.6-19.2-8.6c-7.7,0-14.6,3.4-19.2,8.6L101,324.9l-2.3,2.6  C97,330,96,333,96,336.2c0,8.7,7.4,15.8,16.6,15.8v0h286.8v0c9.2,0,16.6-7.1,16.6-15.8C416,332.9,414.9,329.8,413.1,327.3z"]],
  template: function ScrollbarButton_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275domElementStart(0, "div", 0);
      \u0275\u0275namespaceSVG();
      \u0275\u0275domElementStart(1, "svg", 1);
      \u0275\u0275domElement(2, "path", 2);
      \u0275\u0275domElementEnd()();
    }
  },
  styles: ["[_nghost-%COMP%]{position:relative;border:none;margin:0;padding:0;border-radius:0;appearance:none;background-color:var(--INTERNAL-scrollbar-button-color)}[_nghost-%COMP%]   svg[_ngcontent-%COMP%]{width:100%;height:100%;fill:var(--INTERNAL-scrollbar-button-fill)}[_nghost-%COMP%]:hover{background:var(--INTERNAL-scrollbar-button-hover-color)}[_nghost-%COMP%]:hover   svg[_ngcontent-%COMP%]{fill:var(--INTERNAL-scrollbar-button-hover-fill)}[_nghost-%COMP%]:active{background:var(--INTERNAL-scrollbar-button-active-color)}[_nghost-%COMP%]:active   svg[_ngcontent-%COMP%]{fill:var(--INTERNAL-scrollbar-button-active-fill)}[scrollbarButton=top][_nghost-%COMP%], [scrollbarButton=start][_nghost-%COMP%]{order:1}[scrollbarButton=bottom][_nghost-%COMP%], [scrollbarButton=end][_nghost-%COMP%]{order:3}[scrollbarButton=top][_nghost-%COMP%], [scrollbarButton=bottom][_nghost-%COMP%]{width:100%;height:var(--INTERNAL-scrollbar-button-size)}[scrollbarButton=start][_nghost-%COMP%], [scrollbarButton=end][_nghost-%COMP%]{width:var(--INTERNAL-scrollbar-button-size);height:100%}[scrollbarButton=bottom][_nghost-%COMP%]{--_button-rotate: 180deg}[scrollbarButton=start][_nghost-%COMP%]{--_button-rotate: -90deg}[scrollbarButton=start][_nghost-%COMP%]   .ng-scrollbar-button-icon[_ngcontent-%COMP%]{writing-mode:vertical-lr}[scrollbarButton=end][_nghost-%COMP%]{--_button-rotate: 90deg}[scrollbarButton=end][_nghost-%COMP%]   .ng-scrollbar-button-icon[_ngcontent-%COMP%]{writing-mode:vertical-rl}.ng-scrollbar-button-icon[_ngcontent-%COMP%]{rotate:var(--_button-rotate);display:flex;place-content:center;place-items:center;width:100%;height:100%}"],
  changeDetection: 0
});
var ScrollbarButton = _ScrollbarButton;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ScrollbarButton, [{
    type: Component,
    args: [{
      selector: "button[scrollbarButton]",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: '<div class="ng-scrollbar-button-icon">\r\n  <svg viewBox="0 0 512 512"\r\n       xmlns="http://www.w3.org/2000/svg">\r\n    <path\r\n      d="M413.1,327.3l-1.8-2.1l-136-156.5c-4.6-5.3-11.5-8.6-19.2-8.6c-7.7,0-14.6,3.4-19.2,8.6L101,324.9l-2.3,2.6  C97,330,96,333,96,336.2c0,8.7,7.4,15.8,16.6,15.8v0h286.8v0c9.2,0,16.6-7.1,16.6-15.8C416,332.9,414.9,329.8,413.1,327.3z"/>\r\n  </svg>\r\n</div>\r\n',
      styles: [":host{position:relative;border:none;margin:0;padding:0;border-radius:0;appearance:none;background-color:var(--INTERNAL-scrollbar-button-color)}:host svg{width:100%;height:100%;fill:var(--INTERNAL-scrollbar-button-fill)}:host:hover{background:var(--INTERNAL-scrollbar-button-hover-color)}:host:hover svg{fill:var(--INTERNAL-scrollbar-button-hover-fill)}:host:active{background:var(--INTERNAL-scrollbar-button-active-color)}:host:active svg{fill:var(--INTERNAL-scrollbar-button-active-fill)}:host[scrollbarButton=top],:host[scrollbarButton=start]{order:1}:host[scrollbarButton=bottom],:host[scrollbarButton=end]{order:3}:host[scrollbarButton=top],:host[scrollbarButton=bottom]{width:100%;height:var(--INTERNAL-scrollbar-button-size)}:host[scrollbarButton=start],:host[scrollbarButton=end]{width:var(--INTERNAL-scrollbar-button-size);height:100%}:host[scrollbarButton=bottom]{--_button-rotate: 180deg}:host[scrollbarButton=start]{--_button-rotate: -90deg}:host[scrollbarButton=start] .ng-scrollbar-button-icon{writing-mode:vertical-lr}:host[scrollbarButton=end]{--_button-rotate: 90deg}:host[scrollbarButton=end] .ng-scrollbar-button-icon{writing-mode:vertical-rl}.ng-scrollbar-button-icon{rotate:var(--_button-rotate);display:flex;place-content:center;place-items:center;width:100%;height:100%}\n"]
    }]
  }], () => [], null);
})();
var _ScrollbarY = class _ScrollbarY extends ScrollbarAdapter {
  constructor() {
    super(...arguments);
    this.rectOffsetProperty = "top";
    this.rectSizeProperty = "height";
    this.sizeProperty = "offsetHeight";
    this.clientProperty = "clientY";
    this.offsetProperty = "offsetY";
    this.axis = "y";
  }
  get viewportScrollMax() {
    return this.cmp.viewport.scrollMaxY;
  }
  get viewportScrollOffset() {
    return this.cmp.viewport.scrollTop;
  }
  scrollTo(top, duration) {
    return from(this.cmp.scrollTo({
      top,
      duration
    }));
  }
  instantScrollTo(value) {
    this.cmp.viewport.scrollYTo(value);
  }
};
_ScrollbarY.\u0275fac = /* @__PURE__ */ (() => {
  let \u0275ScrollbarY_BaseFactory;
  return function ScrollbarY_Factory(__ngFactoryType__) {
    return (\u0275ScrollbarY_BaseFactory || (\u0275ScrollbarY_BaseFactory = \u0275\u0275getInheritedFactory(_ScrollbarY)))(__ngFactoryType__ || _ScrollbarY);
  };
})();
_ScrollbarY.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
  type: _ScrollbarY,
  selectors: [["scrollbar-y"]],
  hostVars: 2,
  hostBindings: function ScrollbarY_HostBindings(rf, ctx) {
    if (rf & 2) {
      \u0275\u0275styleProp("--track-size", ctx.trackSize());
    }
  },
  features: [\u0275\u0275ProvidersFeature([{
    provide: SCROLLBAR_CONTROL,
    useExisting: _ScrollbarY
  }]), \u0275\u0275InheritDefinitionFeature],
  decls: 5,
  vars: 11,
  consts: [[1, "ng-scrollbar-sticky"], [1, "ng-scrollbar-track-wrapper"], ["scrollbarTrackY", ""], ["scrollbarThumbY", ""], ["scrollbarButton", "top", "scrollDirection", "backward"], ["scrollbarButton", "bottom", "scrollDirection", "forward"]],
  template: function ScrollbarY_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2);
      \u0275\u0275element(3, "div", 3);
      \u0275\u0275elementEnd();
      \u0275\u0275conditionalCreate(4, ScrollbarY_Conditional_4_Template, 2, 6);
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      \u0275\u0275classProp("ng-scrollbar-hover", ctx.cmp.hoverOffset());
      \u0275\u0275advance();
      \u0275\u0275classProp("ng-scrollbar-hover", !ctx.cmp.hoverOffset());
      \u0275\u0275advance();
      \u0275\u0275classMap(\u0275\u0275interpolate1("ng-scrollbar-track ", ctx.cmp.trackClass()));
      \u0275\u0275advance();
      \u0275\u0275classMap(\u0275\u0275interpolate1("ng-scrollbar-thumb ", ctx.cmp.thumbClass()));
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.cmp.buttons() ? 4 : -1);
    }
  },
  dependencies: [TrackYDirective, ThumbYDirective, ScrollbarButton],
  styles: ["[_nghost-%COMP%]{position:absolute;inset:0;pointer-events:none;min-width:calc(var(--viewport-width) * 1px);min-height:calc(var(--viewport-height) * 1px)}.ng-scrollbar-sticky[_ngcontent-%COMP%]{top:calc(var(--_scrollbar-wrapper-top) * 1px);left:calc(var(--_scrollbar-wrapper-left) * 1px);right:calc(var(--_scrollbar-wrapper-right) * 1px);height:calc(var(--_scrollbar-wrapper-height) * 1px);width:calc(var(--_scrollbar-wrapper-width) * 1px);position:sticky;z-index:100;opacity:var(--_scrollbar-hover-opacity);transition:var(--_scrollbar-opacity-transition);pointer-events:var(--_scrollbar-pointer-events)}.ng-scrollbar-track-wrapper[_ngcontent-%COMP%]{touch-action:none;-webkit-user-select:none;user-select:none;top:var(--_scrollbar-track-top);bottom:var(--_scrollbar-track-bottom);right:var(--_scrollbar-track-right);left:var(--_scrollbar-track-left);transition:var(--INTERNAL-scrollbar-track-wrapper-transition);position:absolute;overflow:hidden;display:flex;place-items:center}.ng-scrollbar-track[_ngcontent-%COMP%]{position:relative;width:100%;height:100%;background-color:var(--INTERNAL-scrollbar-track-color);border-radius:var(--INTERNAL-scrollbar-border-radius);cursor:default;z-index:1;order:2}.ng-scrollbar-thumb[_ngcontent-%COMP%]{box-sizing:border-box;position:absolute;transition:var(--INTERNAL-scrollbar-thumb-transition);border-radius:var(--INTERNAL-scrollbar-border-radius);height:var(--_thumb-height);width:var(--_thumb-width);animation-name:_ngcontent-%COMP%_scrollbarThumbAnimation;animation-duration:1ms;animation-timing-function:linear}@keyframes _ngcontent-%COMP%_scrollbarThumbAnimation{0%{translate:var(--_scrollbar-thumb-transform-from)}to{translate:var(--_scrollbar-thumb-transform-to)}}", "[_nghost-%COMP%]{--_scrollbar-wrapper-top: 0;--_scrollbar-wrapper-left: var(--_scrollbar-wrapper-y-left);--_scrollbar-wrapper-right: var(--_scrollbar-wrapper-y-right);--_scrollbar-wrapper-height: var(--viewport-height);--_scrollbar-wrapper-width: var(--_scrollbar-thickness);--_scrollbar-track-top: var(--_vertical-top);--_scrollbar-track-bottom: var(--_vertical-bottom);--_scrollbar-track-right: var(--_vertical-right);--_scrollbar-track-left: var(--_vertical-left);--thumb-size: max(calc(var(--viewport-height) * var(--track-size) / var(--content-height)), var(--INTERNAL-scrollbar-thumb-min-size));--_thumb-height: calc(var(--thumb-size) * 1px);--_thumb-width: 100%;--_scrollbar-y-thumb-transform-to-value: calc(var(--track-size) - var(--thumb-size));--_scrollbar-thumb-transform-from: 0 0;--_scrollbar-thumb-transform-to: 0 calc(var(--_scrollbar-y-thumb-transform-to-value) * 1px)}.ng-scrollbar-track-wrapper[_ngcontent-%COMP%]{width:var(--_track-y-thickness);flex-direction:column}.ng-scrollbar-hover[_ngcontent-%COMP%]:hover, .ng-scrollbar-hover[_ngcontent-%COMP%]:active{--_track-y-thickness: var(--_scrollbar-hover-thickness-px);--_thumb-y-color: var(--INTERNAL-scrollbar-thumb-hover-color)}.ng-scrollbar-thumb[_ngcontent-%COMP%]{animation-timeline:var(--_animation-timeline-y);min-height:calc(var(--INTERNAL-scrollbar-thumb-min-size) * 1px);display:var(--_vertical-thumb-display);background-color:var(--_thumb-y-color)}"],
  changeDetection: 0
});
var ScrollbarY = _ScrollbarY;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ScrollbarY, [{
    type: Component,
    args: [{
      selector: "scrollbar-y",
      template: `
    <div class="ng-scrollbar-sticky"
         [class.ng-scrollbar-hover]="cmp.hoverOffset()">
      <div class="ng-scrollbar-track-wrapper"
           [class.ng-scrollbar-hover]="!cmp.hoverOffset()">
        <div scrollbarTrackY class="ng-scrollbar-track {{ cmp.trackClass() }}">
          <div scrollbarThumbY class="ng-scrollbar-thumb {{ cmp.thumbClass() }}"></div>
        </div>
        @if (cmp.buttons()) {
          <button class="ng-scrollbar-button {{ cmp.buttonClass() }}"
                  scrollbarButton="top"
                  scrollDirection="backward"></button>
          <button class="ng-scrollbar-button {{ cmp.buttonClass() }}"
                  scrollbarButton="bottom"
                  scrollDirection="forward"></button>
        }
      </div>
    </div>
  `,
      imports: [TrackYDirective, ThumbYDirective, ScrollbarButton],
      providers: [{
        provide: SCROLLBAR_CONTROL,
        useExisting: ScrollbarY
      }],
      host: {
        "[style.--track-size]": "trackSize()"
      },
      changeDetection: ChangeDetectionStrategy.OnPush,
      styles: [":host{position:absolute;inset:0;pointer-events:none;min-width:calc(var(--viewport-width) * 1px);min-height:calc(var(--viewport-height) * 1px)}.ng-scrollbar-sticky{top:calc(var(--_scrollbar-wrapper-top) * 1px);left:calc(var(--_scrollbar-wrapper-left) * 1px);right:calc(var(--_scrollbar-wrapper-right) * 1px);height:calc(var(--_scrollbar-wrapper-height) * 1px);width:calc(var(--_scrollbar-wrapper-width) * 1px);position:sticky;z-index:100;opacity:var(--_scrollbar-hover-opacity);transition:var(--_scrollbar-opacity-transition);pointer-events:var(--_scrollbar-pointer-events)}.ng-scrollbar-track-wrapper{touch-action:none;-webkit-user-select:none;user-select:none;top:var(--_scrollbar-track-top);bottom:var(--_scrollbar-track-bottom);right:var(--_scrollbar-track-right);left:var(--_scrollbar-track-left);transition:var(--INTERNAL-scrollbar-track-wrapper-transition);position:absolute;overflow:hidden;display:flex;place-items:center}.ng-scrollbar-track{position:relative;width:100%;height:100%;background-color:var(--INTERNAL-scrollbar-track-color);border-radius:var(--INTERNAL-scrollbar-border-radius);cursor:default;z-index:1;order:2}.ng-scrollbar-thumb{box-sizing:border-box;position:absolute;transition:var(--INTERNAL-scrollbar-thumb-transition);border-radius:var(--INTERNAL-scrollbar-border-radius);height:var(--_thumb-height);width:var(--_thumb-width);animation-name:scrollbarThumbAnimation;animation-duration:1ms;animation-timing-function:linear}@keyframes scrollbarThumbAnimation{0%{translate:var(--_scrollbar-thumb-transform-from)}to{translate:var(--_scrollbar-thumb-transform-to)}}\n", ":host{--_scrollbar-wrapper-top: 0;--_scrollbar-wrapper-left: var(--_scrollbar-wrapper-y-left);--_scrollbar-wrapper-right: var(--_scrollbar-wrapper-y-right);--_scrollbar-wrapper-height: var(--viewport-height);--_scrollbar-wrapper-width: var(--_scrollbar-thickness);--_scrollbar-track-top: var(--_vertical-top);--_scrollbar-track-bottom: var(--_vertical-bottom);--_scrollbar-track-right: var(--_vertical-right);--_scrollbar-track-left: var(--_vertical-left);--thumb-size: max(calc(var(--viewport-height) * var(--track-size) / var(--content-height)), var(--INTERNAL-scrollbar-thumb-min-size));--_thumb-height: calc(var(--thumb-size) * 1px);--_thumb-width: 100%;--_scrollbar-y-thumb-transform-to-value: calc(var(--track-size) - var(--thumb-size));--_scrollbar-thumb-transform-from: 0 0;--_scrollbar-thumb-transform-to: 0 calc(var(--_scrollbar-y-thumb-transform-to-value) * 1px)}.ng-scrollbar-track-wrapper{width:var(--_track-y-thickness);flex-direction:column}.ng-scrollbar-hover:hover,.ng-scrollbar-hover:active{--_track-y-thickness: var(--_scrollbar-hover-thickness-px);--_thumb-y-color: var(--INTERNAL-scrollbar-thumb-hover-color)}.ng-scrollbar-thumb{animation-timeline:var(--_animation-timeline-y);min-height:calc(var(--INTERNAL-scrollbar-thumb-min-size) * 1px);display:var(--_vertical-thumb-display);background-color:var(--_thumb-y-color)}\n"]
    }]
  }], null, null);
})();
var _ScrollbarX = class _ScrollbarX extends ScrollbarAdapter {
  get viewportScrollMax() {
    return this.cmp.viewport.scrollMaxX;
  }
  get viewportScrollOffset() {
    return Math.abs(this.cmp.viewport.scrollLeft);
  }
  constructor() {
    effect(() => {
      if (this.cmp.direction() === "rtl") {
        this.handlePosition = (position, scrollMax) => -(scrollMax - position);
      } else {
        this.handlePosition = (position) => position;
      }
    });
    super();
    this.manager = inject(ScrollbarManager);
    this.rectOffsetProperty = "left";
    this.rectSizeProperty = "width";
    this.sizeProperty = "offsetWidth";
    this.clientProperty = "clientX";
    this.offsetProperty = "offsetX";
    this.axis = "x";
  }
  scrollTo(left, duration) {
    return from(this.cmp.scrollTo({
      left,
      duration
    }));
  }
  instantScrollTo(value, scrollMax) {
    this.cmp.viewport.scrollXTo(this.handlePosition(value, scrollMax));
  }
};
_ScrollbarX.\u0275fac = function ScrollbarX_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _ScrollbarX)();
};
_ScrollbarX.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
  type: _ScrollbarX,
  selectors: [["scrollbar-x"]],
  hostVars: 3,
  hostBindings: function ScrollbarX_HostBindings(rf, ctx) {
    if (rf & 2) {
      \u0275\u0275attribute("dir", ctx.cmp.direction());
      \u0275\u0275styleProp("--track-size", ctx.trackSize());
    }
  },
  features: [\u0275\u0275ProvidersFeature([{
    provide: SCROLLBAR_CONTROL,
    useExisting: _ScrollbarX
  }]), \u0275\u0275InheritDefinitionFeature],
  decls: 5,
  vars: 11,
  consts: [[1, "ng-scrollbar-sticky"], [1, "ng-scrollbar-track-wrapper"], ["scrollbarTrackX", ""], ["scrollbarThumbX", ""], ["scrollbarButton", "start", "scrollDirection", "backward"], ["scrollbarButton", "end", "scrollDirection", "forward"]],
  template: function ScrollbarX_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2);
      \u0275\u0275element(3, "div", 3);
      \u0275\u0275elementEnd();
      \u0275\u0275conditionalCreate(4, ScrollbarX_Conditional_4_Template, 2, 6);
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      \u0275\u0275classProp("ng-scrollbar-hover", ctx.cmp.hoverOffset());
      \u0275\u0275advance();
      \u0275\u0275classProp("ng-scrollbar-hover", !ctx.cmp.hoverOffset());
      \u0275\u0275advance();
      \u0275\u0275classMap(\u0275\u0275interpolate1("ng-scrollbar-track ", ctx.cmp.trackClass()));
      \u0275\u0275advance();
      \u0275\u0275classMap(\u0275\u0275interpolate1("ng-scrollbar-thumb ", ctx.cmp.thumbClass()));
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.cmp.buttons() ? 4 : -1);
    }
  },
  dependencies: [TrackXDirective, ThumbXDirective, ScrollbarButton],
  styles: [_c1, "[_nghost-%COMP%]{--_scrollbar-wrapper-top: var(--_scrollbar-wrapper-x-top);--_scrollbar-wrapper-left: 0;--_scrollbar-wrapper-right: 0;--_scrollbar-wrapper-height: var(--_scrollbar-thickness);--_scrollbar-wrapper-width: var(--viewport-width);--_scrollbar-track-top: var(--_horizontal-top);--_scrollbar-track-bottom: var(--_horizontal-bottom);--_scrollbar-track-right: var(--_horizontal-right);--_scrollbar-track-left: var(--_horizontal-left);--thumb-size: max(calc(var(--viewport-width) * var(--track-size) / var(--content-width)), var(--INTERNAL-scrollbar-thumb-min-size));--_thumb-height: 100%;--_thumb-width: calc(var(--thumb-size) * 1px);--_scrollbar-x-thumb-transform-to-value: calc(var(--track-size) - var(--thumb-size));--_scrollbar-thumb-transform-from: 0;--_scrollbar-thumb-transform-to: calc(var(--_scrollbar-x-thumb-transform-to-value) * 1px)}[_nghost-%COMP%]   .ng-scrollbar-button[scrollbarButton=start][_ngcontent-%COMP%]{_--button-rotate:90}[_nghost-%COMP%]   .ng-scrollbar-button[scrollbarButton=end][_ngcontent-%COMP%]{_--button-rotate:-90}[dir=rtl][_nghost-%COMP%]   .ng-scrollbar-thumb[_ngcontent-%COMP%]{animation-name:_ngcontent-%COMP%_scrollbarThumbRTLAnimation;will-change:right;--_scrollbar-thumb-transform-to: calc(var(--_scrollbar-x-thumb-transform-to-value) * -1px)}[dir=rtl][_nghost-%COMP%]   .ng-scrollbar-button[scrollbarButton=start][_ngcontent-%COMP%]{--_button-rotate: 90deg}[dir=rtl][_nghost-%COMP%]   .ng-scrollbar-button[scrollbarButton=end][_ngcontent-%COMP%]{--_button-rotate: -90deg}.ng-scrollbar-track-wrapper[_ngcontent-%COMP%]{height:var(--_track-x-thickness);flex-direction:row}.ng-scrollbar-hover[_ngcontent-%COMP%]:hover, .ng-scrollbar-hover[_ngcontent-%COMP%]:active{--_track-x-thickness: var(--_scrollbar-hover-thickness-px);--_thumb-x-color: var(--INTERNAL-scrollbar-thumb-hover-color)}.ng-scrollbar-thumb[_ngcontent-%COMP%]{animation-timeline:var(--_animation-timeline-x);min-width:calc(var(--INTERNAL-scrollbar-thumb-min-size) * 1px);display:var(--_horizontal-thumb-display);background-color:var(--_thumb-x-color)}@keyframes _ngcontent-%COMP%_scrollbarThumbRTLAnimation{0%{right:var(--_scrollbar-thumb-transform-from)}to{right:calc(var(--_scrollbar-thumb-transform-to) * -1)}}"],
  changeDetection: 0
});
var ScrollbarX = _ScrollbarX;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ScrollbarX, [{
    type: Component,
    args: [{
      selector: "scrollbar-x",
      template: `
    <div class="ng-scrollbar-sticky"
         [class.ng-scrollbar-hover]="cmp.hoverOffset()">
      <div class="ng-scrollbar-track-wrapper"
           [class.ng-scrollbar-hover]="!cmp.hoverOffset()">
        <div scrollbarTrackX class="ng-scrollbar-track {{ cmp.trackClass() }}">
          <div scrollbarThumbX class="ng-scrollbar-thumb {{ cmp.thumbClass() }}"></div>
        </div>
        @if (cmp.buttons()) {
          <button class="ng-scrollbar-button {{ cmp.buttonClass() }}"
                  scrollbarButton="start"
                  scrollDirection="backward"></button>
          <button class="ng-scrollbar-button {{ cmp.buttonClass() }}"
                  scrollbarButton="end"
                  scrollDirection="forward"></button>
        }
      </div>
    </div>
  `,
      imports: [TrackXDirective, ThumbXDirective, ScrollbarButton],
      providers: [{
        provide: SCROLLBAR_CONTROL,
        useExisting: ScrollbarX
      }],
      host: {
        "[attr.dir]": "cmp.direction()",
        "[style.--track-size]": "trackSize()"
      },
      changeDetection: ChangeDetectionStrategy.OnPush,
      styles: [":host{position:absolute;inset:0;pointer-events:none;min-width:calc(var(--viewport-width) * 1px);min-height:calc(var(--viewport-height) * 1px)}.ng-scrollbar-sticky{top:calc(var(--_scrollbar-wrapper-top) * 1px);left:calc(var(--_scrollbar-wrapper-left) * 1px);right:calc(var(--_scrollbar-wrapper-right) * 1px);height:calc(var(--_scrollbar-wrapper-height) * 1px);width:calc(var(--_scrollbar-wrapper-width) * 1px);position:sticky;z-index:100;opacity:var(--_scrollbar-hover-opacity);transition:var(--_scrollbar-opacity-transition);pointer-events:var(--_scrollbar-pointer-events)}.ng-scrollbar-track-wrapper{touch-action:none;-webkit-user-select:none;user-select:none;top:var(--_scrollbar-track-top);bottom:var(--_scrollbar-track-bottom);right:var(--_scrollbar-track-right);left:var(--_scrollbar-track-left);transition:var(--INTERNAL-scrollbar-track-wrapper-transition);position:absolute;overflow:hidden;display:flex;place-items:center}.ng-scrollbar-track{position:relative;width:100%;height:100%;background-color:var(--INTERNAL-scrollbar-track-color);border-radius:var(--INTERNAL-scrollbar-border-radius);cursor:default;z-index:1;order:2}.ng-scrollbar-thumb{box-sizing:border-box;position:absolute;transition:var(--INTERNAL-scrollbar-thumb-transition);border-radius:var(--INTERNAL-scrollbar-border-radius);height:var(--_thumb-height);width:var(--_thumb-width);animation-name:scrollbarThumbAnimation;animation-duration:1ms;animation-timing-function:linear}@keyframes scrollbarThumbAnimation{0%{translate:var(--_scrollbar-thumb-transform-from)}to{translate:var(--_scrollbar-thumb-transform-to)}}\n", ":host{--_scrollbar-wrapper-top: var(--_scrollbar-wrapper-x-top);--_scrollbar-wrapper-left: 0;--_scrollbar-wrapper-right: 0;--_scrollbar-wrapper-height: var(--_scrollbar-thickness);--_scrollbar-wrapper-width: var(--viewport-width);--_scrollbar-track-top: var(--_horizontal-top);--_scrollbar-track-bottom: var(--_horizontal-bottom);--_scrollbar-track-right: var(--_horizontal-right);--_scrollbar-track-left: var(--_horizontal-left);--thumb-size: max(calc(var(--viewport-width) * var(--track-size) / var(--content-width)), var(--INTERNAL-scrollbar-thumb-min-size));--_thumb-height: 100%;--_thumb-width: calc(var(--thumb-size) * 1px);--_scrollbar-x-thumb-transform-to-value: calc(var(--track-size) - var(--thumb-size));--_scrollbar-thumb-transform-from: 0;--_scrollbar-thumb-transform-to: calc(var(--_scrollbar-x-thumb-transform-to-value) * 1px)}:host .ng-scrollbar-button[scrollbarButton=start]{_--button-rotate:90}:host .ng-scrollbar-button[scrollbarButton=end]{_--button-rotate:-90}:host[dir=rtl] .ng-scrollbar-thumb{animation-name:scrollbarThumbRTLAnimation;will-change:right;--_scrollbar-thumb-transform-to: calc(var(--_scrollbar-x-thumb-transform-to-value) * -1px)}:host[dir=rtl] .ng-scrollbar-button[scrollbarButton=start]{--_button-rotate: 90deg}:host[dir=rtl] .ng-scrollbar-button[scrollbarButton=end]{--_button-rotate: -90deg}.ng-scrollbar-track-wrapper{height:var(--_track-x-thickness);flex-direction:row}.ng-scrollbar-hover:hover,.ng-scrollbar-hover:active{--_track-x-thickness: var(--_scrollbar-hover-thickness-px);--_thumb-x-color: var(--INTERNAL-scrollbar-thumb-hover-color)}.ng-scrollbar-thumb{animation-timeline:var(--_animation-timeline-x);min-width:calc(var(--INTERNAL-scrollbar-thumb-min-size) * 1px);display:var(--_horizontal-thumb-display);background-color:var(--_thumb-x-color)}@keyframes scrollbarThumbRTLAnimation{0%{right:var(--_scrollbar-thumb-transform-from)}to{right:calc(var(--_scrollbar-thumb-transform-to) * -1)}}\n"]
    }]
  }], () => [], null);
})();
var _Scrollbars = class _Scrollbars {
  constructor() {
    this.cmp = inject(NG_SCROLLBAR);
  }
};
_Scrollbars.\u0275fac = function Scrollbars_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _Scrollbars)();
};
_Scrollbars.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
  type: _Scrollbars,
  selectors: [["scrollbars"]],
  decls: 2,
  vars: 2,
  template: function Scrollbars_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275conditionalCreate(0, Scrollbars_Conditional_0_Template, 1, 0, "scrollbar-y");
      \u0275\u0275conditionalCreate(1, Scrollbars_Conditional_1_Template, 1, 0, "scrollbar-x");
    }
    if (rf & 2) {
      \u0275\u0275conditional(ctx.cmp.verticalUsed() ? 0 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.cmp.horizontalUsed() ? 1 : -1);
    }
  },
  dependencies: [ScrollbarX, ScrollbarY],
  styles: ["[_nghost-%COMP%]{display:contents}"],
  changeDetection: 0
});
var Scrollbars = _Scrollbars;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Scrollbars, [{
    type: Component,
    args: [{
      selector: "scrollbars",
      changeDetection: ChangeDetectionStrategy.OnPush,
      imports: [ScrollbarX, ScrollbarY],
      template: `
    @if (cmp.verticalUsed()) {
      <scrollbar-y/>
    }
    @if (cmp.horizontalUsed()) {
      <scrollbar-x/>
    }
  `,
      styles: [":host{display:contents}\n"]
    }]
  }], null, null);
})();
var _NgScrollbar = class _NgScrollbar extends NgScrollbarCore {
  constructor() {
    effect(() => {
      const contentWrapper = this.contentWrapper().nativeElement;
      untracked(() => {
        this.viewport.init(this.nativeElement, contentWrapper);
      });
    });
    super();
    this.contentWrapper = viewChild.required("contentWrapper");
    this._scrollbars = viewChild.required(Scrollbars);
  }
};
_NgScrollbar.\u0275fac = function NgScrollbar_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _NgScrollbar)();
};
_NgScrollbar.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
  type: _NgScrollbar,
  selectors: [["ng-scrollbar", 3, "externalViewport", ""]],
  viewQuery: function NgScrollbar_Query(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275viewQuerySignal(ctx.contentWrapper, _c2, 5);
      \u0275\u0275viewQuerySignal(ctx._scrollbars, Scrollbars, 5);
    }
    if (rf & 2) {
      \u0275\u0275queryAdvance(2);
    }
  },
  exportAs: ["ngScrollbar"],
  features: [\u0275\u0275ProvidersFeature([{
    provide: NG_SCROLLBAR,
    useExisting: _NgScrollbar
  }, ViewportAdapter]), \u0275\u0275InheritDefinitionFeature],
  ngContentSelectors: _c3,
  decls: 4,
  vars: 0,
  consts: [["contentWrapper", ""]],
  template: function NgScrollbar_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275projectionDef();
      \u0275\u0275elementStart(0, "div", null, 0);
      \u0275\u0275projection(2);
      \u0275\u0275element(3, "scrollbars");
      \u0275\u0275elementEnd();
    }
  },
  dependencies: [Scrollbars],
  styles: ["[_nghost-%COMP%]{display:block;position:relative;max-height:100%;max-width:100%;--INTERNAL-scrollbar-border-radius: var(--scrollbar-border-radius, 0px);--INTERNAL-scrollbar-thickness: var(--scrollbar-thickness, 5);--INTERNAL-scrollbar-offset: var(--scrollbar-offset, 0);--INTERNAL-scrollbar-track-wrapper-transition: var(--scrollbar-track-wrapper-transition, width 60ms linear, height 60ms linear);--INTERNAL-scrollbar-track-color: var(--scrollbar-track-color, transparent);--INTERNAL-scrollbar-thumb-color: var(--scrollbar-thumb-color, rgb(0 0 0 / 20%));--INTERNAL-scrollbar-thumb-hover-color: var(--scrollbar-thumb-hover-color, var(--INTERNAL-scrollbar-thumb-color));--INTERNAL-scrollbar-hover-thickness: var(--scrollbar-hover-thickness, var(--INTERNAL-scrollbar-thickness));--INTERNAL-scrollbar-thumb-transition: var(--scrollbar-thumb-transition, none);--INTERNAL-scrollbar-thumb-min-size: var(--scrollbar-thumb-min-size, 20);--INTERNAL-scrollbar-button-color: var(--scrollbar-button-color, var(--INTERNAL-scrollbar-thumb-color));--INTERNAL-scrollbar-button-hover-color: var(--scrollbar-button-hover-color, var(--INTERNAL-scrollbar-button-color));--INTERNAL-scrollbar-button-active-color: var(--scrollbar-button-active-color, var(--INTERNAL-scrollbar-button-hover-color));--INTERNAL-scrollbar-button-fill: var(--scrollbar-button-fill, white);--INTERNAL-scrollbar-button-hover-fill: var(--scrollbar-button-hover-fill, var(--INTERNAL-scrollbar-button-fill));--INTERNAL-scrollbar-button-active-fill: var(--scrollbar-button-active-fill, var(--INTERNAL-scrollbar-button-hover-fill));--INTERNAL-scrollbar-button-size: var(--scrollbar-button-size, 20px);--INTERNAL-scrollbar-hover-opacity-transition-enter-duration: var(--scrollbar-hover-opacity-transition-enter-duration, 0);--INTERNAL-scrollbar-hover-opacity-transition-leave-duration: var(--scrollbar-hover-opacity-transition-leave-duration, .4s);--INTERNAL-scrollbar-hover-opacity-transition-leave-delay: var(--scrollbar-hover-opacity-transition-leave-delay, 1s);--INTERNAL-scrollbar-overscroll-behavior: var(--scrollbar-overscroll-behavior, initial);--INTERNAL-scrollbar-mobile-overscroll-behavior: var(--scrollbar-mobile-overscroll-behavior, none);--_scrollbar-thickness: calc(var(--INTERNAL-scrollbar-thickness) + var(--INTERNAL-scrollbar-offset) * 2);--_scrollbar-pointer-events: auto;--_scrollbar-offset-px: calc(var(--INTERNAL-scrollbar-offset) * 1px);--_scrollbar-thickness-px: calc(var(--INTERNAL-scrollbar-thickness) * 1px);--_scrollbar-hover-thickness-px: calc(var(--INTERNAL-scrollbar-hover-thickness) * 1px);--_viewport-padding-top: 0;--_viewport-padding-bottom: 0;--_viewport-padding-left: 0;--_viewport-padding-right: 0;--_horizontal-thumb-display: block;--_vertical-thumb-display: block;--_viewport-overflow: auto;--_viewport-pointer-events: auto;--_thumb-x-color: var(--INTERNAL-scrollbar-thumb-color);--_thumb-y-color: var(--INTERNAL-scrollbar-thumb-color);--_track-y-thickness: var(--_scrollbar-thickness-px);--_track-x-thickness: var(--_scrollbar-thickness-px);--_viewport-overscroll-behavior: var(--INTERNAL-scrollbar-overscroll-behavior);--_scrollbar-content-width: fit-content}[_nghost-%COMP%]{--_spacer-width: var(--spacer-width);--_spacer-height: var(--spacer-height);--_vertical-top: var(--_scrollbar-offset-px);--_vertical-bottom: var(--_scrollbar-offset-px);--_horizontal-left: var(--_scrollbar-offset-px);--_horizontal-right: var(--_scrollbar-offset-px);--_horizontal-top: initial;--_horizontal-bottom: var(--_scrollbar-offset-px);--_scrollbar-wrapper-x-top: calc(var(--viewport-height) - var(--_scrollbar-thickness));--reached-offset: 1px;--reached-offset-top: var(--reached-offset);--reached-offset-bottom: var(--reached-offset);--reached-offset-start: var(--reached-offset);--reached-offset-end: var(--reached-offset);--dropped-offset: 1px;--dropped-offset-top: var(--dropped-offset);--dropped-offset-bottom: var(--dropped-offset);--dropped-offset-start: var(--dropped-offset);--dropped-offset-end: var(--dropped-offset);--_viewport_scroll-timeline: unset;--_animation-timeline-y: unset;--_scrollbar-y-thumb-transform-to-value: unset;--_scrollbar-x-thumb-transform-to-value: unset;--_scrollbar-thumb-transform-from: unset;--_scrollbar-thumb-transform-to: unset}.ng-scrollbar-external-viewport[_nghost-%COMP%]     .ng-scroll-viewport{min-height:100%;min-width:100%;height:100%;max-height:100%;max-width:100%}.ng-scroll-viewport[_nghost-%COMP%], .ng-scrollbar-external-viewport[_nghost-%COMP%]     .ng-scroll-viewport{position:relative;overflow:var(--_viewport-overflow);scroll-timeline:var(--_viewport_scroll-timeline);box-sizing:border-box!important;-webkit-overflow-scrolling:touch;will-change:scroll-position;-webkit-user-select:var(--_viewport-user-select);user-select:var(--_viewport-user-select);overscroll-behavior:var(--_viewport-overscroll-behavior);pointer-events:var(--_viewport-pointer-events)}.ng-scroll-viewport[_nghost-%COMP%] > .ng-scroll-content[_ngcontent-%COMP%], .ng-scrollbar-external-viewport[_nghost-%COMP%]     .ng-scroll-viewport>.ng-scroll-content{width:var(--_scrollbar-content-width);z-index:1;min-width:100%;min-height:100%;contain:content;padding:var(--_viewport-padding-top, 0) var(--_viewport-padding-right, 0) var(--_viewport-padding-bottom, 0) var(--_viewport-padding-left, 0)}[appearance=native][_nghost-%COMP%]{--_spacer-width: calc(var(--spacer-width) + var(--_scrollbar-thickness));--_spacer-height: calc(var(--spacer-height) + var(--_scrollbar-thickness))}.ng-scroll-viewport[_nghost-%COMP%] > .ng-scroll-spacer[_ngcontent-%COMP%], .ng-scrollbar-external-viewport[_nghost-%COMP%]     .ng-scroll-viewport>.ng-scroll-spacer{position:relative;width:calc(var(--_spacer-width) * 1px);height:calc(var(--_spacer-height) * 1px)}.ng-scroll-viewport[_nghost-%COMP%], .ng-scrollbar-external-viewport[_nghost-%COMP%]     .ng-scroll-viewport{scrollbar-width:none!important}.ng-scroll-viewport[_nghost-%COMP%]::-webkit-scrollbar, .ng-scrollbar-external-viewport[_nghost-%COMP%]     .ng-scroll-viewport::-webkit-scrollbar{display:none!important}[position=invertX][_nghost-%COMP%], [position=invertAll][_nghost-%COMP%]{--_horizontal-top: var(--_scrollbar-offset-px);--_horizontal-bottom: initial;--_scrollbar-wrapper-x-top: 0}[dir=ltr][_nghost-%COMP%]{--_scrollbar-wrapper-y-right: initial;--_vertical-right: var(--_scrollbar-offset-px);--_vertical-left: initial;--_scrollbar-wrapper-y-left: calc(var(--viewport-width) - var(--_scrollbar-thickness))}[dir=ltr][position=invertY][_nghost-%COMP%], [dir=ltr][position=invertAll][_nghost-%COMP%]{--_vertical-left: var(--_scrollbar-offset-px);--_vertical-right: initial;--_scrollbar-wrapper-y-left: 0}[dir=rtl][_nghost-%COMP%]{--_scrollbar-wrapper-y-left: initial;--_vertical-left: var(--_scrollbar-offset-px);--_vertical-right: initial;--_scrollbar-wrapper-y-right: calc(var(--viewport-width) - var(--_scrollbar-thickness))}[dir=rtl][position=invertY][_nghost-%COMP%], [dir=rtl][position=invertAll][_nghost-%COMP%]{--_vertical-right: var(--_scrollbar-offset-px);--_vertical-left: initial;--_scrollbar-wrapper-y-right: 0}[verticalUsed=true][horizontalUsed=true][_nghost-%COMP%]{--_scrollbar-thickness-margin: calc(var(--INTERNAL-scrollbar-thickness) + var(--INTERNAL-scrollbar-offset) * 3);--_scrollbar-thickness-margin-px: calc(var(--_scrollbar-thickness-margin) * 1px)}[horizontalUsed=true][_nghost-%COMP%]{--_vertical-top: var(--_scrollbar-offset-px);--_vertical-bottom: var(--_scrollbar-thickness-margin-px)}[horizontalUsed=true][position=invertX][_nghost-%COMP%], [horizontalUsed=true][position=invertAll][_nghost-%COMP%]{--_vertical-top: var(--_scrollbar-thickness-margin-px);--_vertical-bottom: var(--_scrollbar-offset-px)}[verticalUsed=true][dir=ltr][_nghost-%COMP%]{--_horizontal-left: var(--_scrollbar-offset-px);--_horizontal-right: var(--_scrollbar-thickness-margin-px)}[verticalUsed=true][dir=rtl][_nghost-%COMP%]{--_horizontal-left: var(--_scrollbar-thickness-margin-px);--_horizontal-right: var(--_scrollbar-offset-px)}[verticalUsed=true][position=invertY][dir=ltr][_nghost-%COMP%], [verticalUsed=true][position=invertAll][dir=ltr][_nghost-%COMP%]{--_horizontal-left: var(--_scrollbar-thickness-margin-px);--_horizontal-right: var(--_scrollbar-offset-px)}[verticalUsed=true][position=invertY][dir=rtl][_nghost-%COMP%], [verticalUsed=true][position=invertAll][dir=rtl][_nghost-%COMP%]{--_horizontal-left: var(--_scrollbar-offset-px);--_horizontal-right: var(--_scrollbar-thickness-margin-px)}[appearance=native][verticalUsed=true][dir=ltr][_nghost-%COMP%]{--_viewport-padding-left: 0;--_viewport-padding-right: calc(var(--_scrollbar-thickness) * 1px)}[appearance=native][verticalUsed=true][dir=rtl][_nghost-%COMP%]{--_viewport-padding-left: calc(var(--_scrollbar-thickness) * 1px);--_viewport-padding-right: 0}[appearance=native][verticalUsed=true][position=invertY][dir=ltr][_nghost-%COMP%], [appearance=native][verticalUsed=true][position=invertAll][dir=ltr][_nghost-%COMP%]{--_viewport-padding-left: calc(var(--_scrollbar-thickness) * 1px);--_viewport-padding-right: 0}[appearance=native][verticalUsed=true][position=invertY][dir=rtl][_nghost-%COMP%], [appearance=native][verticalUsed=true][position=invertAll][dir=rtl][_nghost-%COMP%]{--_viewport-padding-left: 0;--_viewport-padding-right: calc(var(--_scrollbar-thickness) * 1px)}[appearance=native][horizontalUsed=true][_nghost-%COMP%]{--_viewport-padding-top: 0;--_viewport-padding-bottom: calc(var(--_scrollbar-thickness) * 1px)}[appearance=native][horizontalUsed=true][position=invertX][_nghost-%COMP%], [appearance=native][horizontalUsed=true][position=invertAll][_nghost-%COMP%]{--_viewport-padding-top: calc(var(--_scrollbar-thickness) * 1px);--_viewport-padding-bottom: 0}[visibility=hover][_nghost-%COMP%]{--_scrollbar-hover-opacity: 0;--_scrollbar-opacity-transition: opacity var(--INTERNAL-scrollbar-hover-opacity-transition-leave-duration) var(--INTERNAL-scrollbar-hover-opacity-transition-leave-delay)}[visibility=hover][_nghost-%COMP%]:hover, [visibility=hover][_nghost-%COMP%]:active, [visibility=hover][_nghost-%COMP%]:focus{--_scrollbar-hover-opacity: 1;--_scrollbar-opacity-transition: opacity var(--INTERNAL-scrollbar-hover-opacity-transition-enter-duration)}[dir=ltr][_nghost-%COMP%]     .scroll-reached-trigger-element[trigger=start], [dir=ltr][_nghost-%COMP%]     .scroll-dropped-trigger-element[trigger=start]{left:0;right:unset}[dir=ltr][_nghost-%COMP%]     .scroll-reached-trigger-element[trigger=end], [dir=ltr][_nghost-%COMP%]     .scroll-dropped-trigger-element[trigger=end]{right:0;left:unset}[dir=rtl][_nghost-%COMP%]     .scroll-reached-trigger-element[trigger=start], [dir=rtl][_nghost-%COMP%]     .scroll-dropped-trigger-element[trigger=start]{right:0;left:unset}[dir=rtl][_nghost-%COMP%]     .scroll-reached-trigger-element[trigger=end], [dir=rtl][_nghost-%COMP%]     .scroll-dropped-trigger-element[trigger=end]{left:0;right:unset}[_nghost-%COMP%]     .ng-scroll-reached-wrapper, [_nghost-%COMP%]     .ng-scroll-dropped-wrapper, [_nghost-%COMP%]     .scroll-reached-trigger-element, [_nghost-%COMP%]     .scroll-dropped-trigger-element{position:absolute;-webkit-user-select:none;user-select:none;pointer-events:none;z-index:-9999}[_nghost-%COMP%]     .ng-scroll-reached-wrapper, [_nghost-%COMP%]     .ng-scroll-dropped-wrapper{visibility:hidden;inset:0;min-width:calc(var(--viewport-width) * 1px);min-height:calc(var(--viewport-height) * 1px)}[_nghost-%COMP%]     [isHorizontallyScrollable=false] .scroll-reached-trigger-element[trigger=end], [_nghost-%COMP%]     [isHorizontallyScrollable=false] .scroll-dropped-trigger-element[trigger=end]{display:none}[_nghost-%COMP%]     [isVerticallyScrollable=false] .scroll-reached-trigger-element[trigger=bottom], [_nghost-%COMP%]     [isVerticallyScrollable=false] .scroll-dropped-trigger-element[trigger=bottom]{display:none}[_nghost-%COMP%]     .scroll-reached-trigger-element{background:red}[_nghost-%COMP%]     .scroll-reached-trigger-element[trigger=top], [_nghost-%COMP%]     .scroll-reached-trigger-element[trigger=bottom]{left:0;right:0}[_nghost-%COMP%]     .scroll-reached-trigger-element[trigger=start], [_nghost-%COMP%]     .scroll-reached-trigger-element[trigger=end]{top:0;bottom:0}[_nghost-%COMP%]     .scroll-reached-trigger-element[trigger=top]{top:0;height:var(--reached-offset-top)}[_nghost-%COMP%]     .scroll-reached-trigger-element[trigger=bottom]{bottom:0;height:var(--reached-offset-bottom)}[_nghost-%COMP%]     .scroll-reached-trigger-element[trigger=start]{width:var(--reached-offset-start)}[_nghost-%COMP%]     .scroll-reached-trigger-element[trigger=end]{width:var(--reached-offset-end)}[_nghost-%COMP%]   .scroll-dropped-trigger-element[_ngcontent-%COMP%]{background:#00f}[_nghost-%COMP%]   .scroll-dropped-trigger-element[trigger=top][_ngcontent-%COMP%], [_nghost-%COMP%]   .scroll-dropped-trigger-element[trigger=bottom][_ngcontent-%COMP%]{left:0;right:0}[_nghost-%COMP%]   .scroll-dropped-trigger-element[trigger=start][_ngcontent-%COMP%], [_nghost-%COMP%]   .scroll-dropped-trigger-element[trigger=end][_ngcontent-%COMP%]{top:0;bottom:0}[_nghost-%COMP%]   .scroll-dropped-trigger-element[trigger=top][_ngcontent-%COMP%]{top:0;height:var(--dropped-offset-top)}[_nghost-%COMP%]   .scroll-dropped-trigger-element[trigger=bottom][_ngcontent-%COMP%]{bottom:0;height:var(--dropped-offset-bottom)}[_nghost-%COMP%]   .scroll-dropped-trigger-element[trigger=start][_ngcontent-%COMP%]{width:var(--dropped-offset-start)}[_nghost-%COMP%]   .scroll-dropped-trigger-element[trigger=end][_ngcontent-%COMP%]{width:var(--dropped-offset-end)}[verticalUsed=true][_nghost-%COMP%]{--_timeline-scope: --scrollerY;--_animation-timeline-y: --scrollerY;--_viewport_scroll-timeline: --scrollerY y}[horizontalUsed=true][_nghost-%COMP%]{--_timeline-scope: --scrollerX;--_animation-timeline-x: --scrollerX;--_viewport_scroll-timeline: --scrollerX x}[verticalUsed=true][horizontalUsed=true][_nghost-%COMP%]{--_timeline-scope: --scrollerX, --scrollerY;--_viewport_scroll-timeline: --scrollerX x, --scrollerY y}[orientation=vertical][_nghost-%COMP%]{--_viewport-overflow: hidden auto;--_scrollbar-content-width: unset}[orientation=horizontal][_nghost-%COMP%]{--_viewport-overflow: auto hidden}[disableInteraction=true][_nghost-%COMP%]{--_viewport-pointer-events: none;--_scrollbar-pointer-events: none}[isVerticallyScrollable=false][_nghost-%COMP%]{--_vertical-thumb-display: none}[isHorizontallyScrollable=false][_nghost-%COMP%]{--_horizontal-thumb-display: none}[dragging=x][_nghost-%COMP%], [dragging=y][_nghost-%COMP%]{--_viewport-user-select: none}[dragging=x][_nghost-%COMP%]{--_track-x-thickness: calc(var(--INTERNAL-scrollbar-hover-thickness) * 1px);--_thumb-x-color: var(var(--INTERNAL-scrollbar-thumb-min-size))}[dragging=y][_nghost-%COMP%]{--_track-y-thickness: calc(var(--INTERNAL-scrollbar-hover-thickness) * 1px);--_thumb-y-color: var(var(--INTERNAL-scrollbar-thumb-min-size))}[mobile=true][_nghost-%COMP%]{--_viewport-overscroll-behavior: var(--INTERNAL-scrollbar-mobile-overscroll-behavior)}"],
  changeDetection: 0
});
var NgScrollbar = _NgScrollbar;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgScrollbar, [{
    type: Component,
    args: [{
      selector: "ng-scrollbar:not([externalViewport])",
      exportAs: "ngScrollbar",
      imports: [Scrollbars],
      template: `
    <div #contentWrapper>
      <ng-content/>
      <scrollbars/>
    </div>
  `,
      changeDetection: ChangeDetectionStrategy.OnPush,
      providers: [{
        provide: NG_SCROLLBAR,
        useExisting: NgScrollbar
      }, ViewportAdapter],
      styles: [":host{display:block;position:relative;max-height:100%;max-width:100%;--INTERNAL-scrollbar-border-radius: var(--scrollbar-border-radius, 0px);--INTERNAL-scrollbar-thickness: var(--scrollbar-thickness, 5);--INTERNAL-scrollbar-offset: var(--scrollbar-offset, 0);--INTERNAL-scrollbar-track-wrapper-transition: var(--scrollbar-track-wrapper-transition, width 60ms linear, height 60ms linear);--INTERNAL-scrollbar-track-color: var(--scrollbar-track-color, transparent);--INTERNAL-scrollbar-thumb-color: var(--scrollbar-thumb-color, rgb(0 0 0 / 20%));--INTERNAL-scrollbar-thumb-hover-color: var(--scrollbar-thumb-hover-color, var(--INTERNAL-scrollbar-thumb-color));--INTERNAL-scrollbar-hover-thickness: var(--scrollbar-hover-thickness, var(--INTERNAL-scrollbar-thickness));--INTERNAL-scrollbar-thumb-transition: var(--scrollbar-thumb-transition, none);--INTERNAL-scrollbar-thumb-min-size: var(--scrollbar-thumb-min-size, 20);--INTERNAL-scrollbar-button-color: var(--scrollbar-button-color, var(--INTERNAL-scrollbar-thumb-color));--INTERNAL-scrollbar-button-hover-color: var(--scrollbar-button-hover-color, var(--INTERNAL-scrollbar-button-color));--INTERNAL-scrollbar-button-active-color: var(--scrollbar-button-active-color, var(--INTERNAL-scrollbar-button-hover-color));--INTERNAL-scrollbar-button-fill: var(--scrollbar-button-fill, white);--INTERNAL-scrollbar-button-hover-fill: var(--scrollbar-button-hover-fill, var(--INTERNAL-scrollbar-button-fill));--INTERNAL-scrollbar-button-active-fill: var(--scrollbar-button-active-fill, var(--INTERNAL-scrollbar-button-hover-fill));--INTERNAL-scrollbar-button-size: var(--scrollbar-button-size, 20px);--INTERNAL-scrollbar-hover-opacity-transition-enter-duration: var(--scrollbar-hover-opacity-transition-enter-duration, 0);--INTERNAL-scrollbar-hover-opacity-transition-leave-duration: var(--scrollbar-hover-opacity-transition-leave-duration, .4s);--INTERNAL-scrollbar-hover-opacity-transition-leave-delay: var(--scrollbar-hover-opacity-transition-leave-delay, 1s);--INTERNAL-scrollbar-overscroll-behavior: var(--scrollbar-overscroll-behavior, initial);--INTERNAL-scrollbar-mobile-overscroll-behavior: var(--scrollbar-mobile-overscroll-behavior, none);--_scrollbar-thickness: calc(var(--INTERNAL-scrollbar-thickness) + var(--INTERNAL-scrollbar-offset) * 2);--_scrollbar-pointer-events: auto;--_scrollbar-offset-px: calc(var(--INTERNAL-scrollbar-offset) * 1px);--_scrollbar-thickness-px: calc(var(--INTERNAL-scrollbar-thickness) * 1px);--_scrollbar-hover-thickness-px: calc(var(--INTERNAL-scrollbar-hover-thickness) * 1px);--_viewport-padding-top: 0;--_viewport-padding-bottom: 0;--_viewport-padding-left: 0;--_viewport-padding-right: 0;--_horizontal-thumb-display: block;--_vertical-thumb-display: block;--_viewport-overflow: auto;--_viewport-pointer-events: auto;--_thumb-x-color: var(--INTERNAL-scrollbar-thumb-color);--_thumb-y-color: var(--INTERNAL-scrollbar-thumb-color);--_track-y-thickness: var(--_scrollbar-thickness-px);--_track-x-thickness: var(--_scrollbar-thickness-px);--_viewport-overscroll-behavior: var(--INTERNAL-scrollbar-overscroll-behavior);--_scrollbar-content-width: fit-content}:host{--_spacer-width: var(--spacer-width);--_spacer-height: var(--spacer-height);--_vertical-top: var(--_scrollbar-offset-px);--_vertical-bottom: var(--_scrollbar-offset-px);--_horizontal-left: var(--_scrollbar-offset-px);--_horizontal-right: var(--_scrollbar-offset-px);--_horizontal-top: initial;--_horizontal-bottom: var(--_scrollbar-offset-px);--_scrollbar-wrapper-x-top: calc(var(--viewport-height) - var(--_scrollbar-thickness));--reached-offset: 1px;--reached-offset-top: var(--reached-offset);--reached-offset-bottom: var(--reached-offset);--reached-offset-start: var(--reached-offset);--reached-offset-end: var(--reached-offset);--dropped-offset: 1px;--dropped-offset-top: var(--dropped-offset);--dropped-offset-bottom: var(--dropped-offset);--dropped-offset-start: var(--dropped-offset);--dropped-offset-end: var(--dropped-offset);--_viewport_scroll-timeline: unset;--_animation-timeline-y: unset;--_scrollbar-y-thumb-transform-to-value: unset;--_scrollbar-x-thumb-transform-to-value: unset;--_scrollbar-thumb-transform-from: unset;--_scrollbar-thumb-transform-to: unset}:host.ng-scrollbar-external-viewport ::ng-deep .ng-scroll-viewport{min-height:100%;min-width:100%;height:100%;max-height:100%;max-width:100%}:host.ng-scroll-viewport,:host.ng-scrollbar-external-viewport ::ng-deep .ng-scroll-viewport{position:relative;overflow:var(--_viewport-overflow);scroll-timeline:var(--_viewport_scroll-timeline);box-sizing:border-box!important;-webkit-overflow-scrolling:touch;will-change:scroll-position;-webkit-user-select:var(--_viewport-user-select);user-select:var(--_viewport-user-select);overscroll-behavior:var(--_viewport-overscroll-behavior);pointer-events:var(--_viewport-pointer-events)}:host.ng-scroll-viewport>.ng-scroll-content,:host.ng-scrollbar-external-viewport ::ng-deep .ng-scroll-viewport>.ng-scroll-content{width:var(--_scrollbar-content-width);z-index:1;min-width:100%;min-height:100%;contain:content;padding:var(--_viewport-padding-top, 0) var(--_viewport-padding-right, 0) var(--_viewport-padding-bottom, 0) var(--_viewport-padding-left, 0)}:host[appearance=native]{--_spacer-width: calc(var(--spacer-width) + var(--_scrollbar-thickness));--_spacer-height: calc(var(--spacer-height) + var(--_scrollbar-thickness))}:host.ng-scroll-viewport>.ng-scroll-spacer,:host.ng-scrollbar-external-viewport ::ng-deep .ng-scroll-viewport>.ng-scroll-spacer{position:relative;width:calc(var(--_spacer-width) * 1px);height:calc(var(--_spacer-height) * 1px)}:host.ng-scroll-viewport,:host.ng-scrollbar-external-viewport ::ng-deep .ng-scroll-viewport{scrollbar-width:none!important}:host.ng-scroll-viewport::-webkit-scrollbar,:host.ng-scrollbar-external-viewport ::ng-deep .ng-scroll-viewport::-webkit-scrollbar{display:none!important}:host[position=invertX],:host[position=invertAll]{--_horizontal-top: var(--_scrollbar-offset-px);--_horizontal-bottom: initial;--_scrollbar-wrapper-x-top: 0}:host[dir=ltr]{--_scrollbar-wrapper-y-right: initial;--_vertical-right: var(--_scrollbar-offset-px);--_vertical-left: initial;--_scrollbar-wrapper-y-left: calc(var(--viewport-width) - var(--_scrollbar-thickness))}:host[dir=ltr][position=invertY],:host[dir=ltr][position=invertAll]{--_vertical-left: var(--_scrollbar-offset-px);--_vertical-right: initial;--_scrollbar-wrapper-y-left: 0}:host[dir=rtl]{--_scrollbar-wrapper-y-left: initial;--_vertical-left: var(--_scrollbar-offset-px);--_vertical-right: initial;--_scrollbar-wrapper-y-right: calc(var(--viewport-width) - var(--_scrollbar-thickness))}:host[dir=rtl][position=invertY],:host[dir=rtl][position=invertAll]{--_vertical-right: var(--_scrollbar-offset-px);--_vertical-left: initial;--_scrollbar-wrapper-y-right: 0}:host[verticalUsed=true][horizontalUsed=true]{--_scrollbar-thickness-margin: calc(var(--INTERNAL-scrollbar-thickness) + var(--INTERNAL-scrollbar-offset) * 3);--_scrollbar-thickness-margin-px: calc(var(--_scrollbar-thickness-margin) * 1px)}:host[horizontalUsed=true]{--_vertical-top: var(--_scrollbar-offset-px);--_vertical-bottom: var(--_scrollbar-thickness-margin-px)}:host[horizontalUsed=true][position=invertX],:host[horizontalUsed=true][position=invertAll]{--_vertical-top: var(--_scrollbar-thickness-margin-px);--_vertical-bottom: var(--_scrollbar-offset-px)}:host[verticalUsed=true][dir=ltr]{--_horizontal-left: var(--_scrollbar-offset-px);--_horizontal-right: var(--_scrollbar-thickness-margin-px)}:host[verticalUsed=true][dir=rtl]{--_horizontal-left: var(--_scrollbar-thickness-margin-px);--_horizontal-right: var(--_scrollbar-offset-px)}:host[verticalUsed=true][position=invertY][dir=ltr],:host[verticalUsed=true][position=invertAll][dir=ltr]{--_horizontal-left: var(--_scrollbar-thickness-margin-px);--_horizontal-right: var(--_scrollbar-offset-px)}:host[verticalUsed=true][position=invertY][dir=rtl],:host[verticalUsed=true][position=invertAll][dir=rtl]{--_horizontal-left: var(--_scrollbar-offset-px);--_horizontal-right: var(--_scrollbar-thickness-margin-px)}:host[appearance=native][verticalUsed=true][dir=ltr]{--_viewport-padding-left: 0;--_viewport-padding-right: calc(var(--_scrollbar-thickness) * 1px)}:host[appearance=native][verticalUsed=true][dir=rtl]{--_viewport-padding-left: calc(var(--_scrollbar-thickness) * 1px);--_viewport-padding-right: 0}:host[appearance=native][verticalUsed=true][position=invertY][dir=ltr],:host[appearance=native][verticalUsed=true][position=invertAll][dir=ltr]{--_viewport-padding-left: calc(var(--_scrollbar-thickness) * 1px);--_viewport-padding-right: 0}:host[appearance=native][verticalUsed=true][position=invertY][dir=rtl],:host[appearance=native][verticalUsed=true][position=invertAll][dir=rtl]{--_viewport-padding-left: 0;--_viewport-padding-right: calc(var(--_scrollbar-thickness) * 1px)}:host[appearance=native][horizontalUsed=true]{--_viewport-padding-top: 0;--_viewport-padding-bottom: calc(var(--_scrollbar-thickness) * 1px)}:host[appearance=native][horizontalUsed=true][position=invertX],:host[appearance=native][horizontalUsed=true][position=invertAll]{--_viewport-padding-top: calc(var(--_scrollbar-thickness) * 1px);--_viewport-padding-bottom: 0}:host[visibility=hover]{--_scrollbar-hover-opacity: 0;--_scrollbar-opacity-transition: opacity var(--INTERNAL-scrollbar-hover-opacity-transition-leave-duration) var(--INTERNAL-scrollbar-hover-opacity-transition-leave-delay)}:host[visibility=hover]:hover,:host[visibility=hover]:active,:host[visibility=hover]:focus{--_scrollbar-hover-opacity: 1;--_scrollbar-opacity-transition: opacity var(--INTERNAL-scrollbar-hover-opacity-transition-enter-duration)}:host[dir=ltr] ::ng-deep .scroll-reached-trigger-element[trigger=start],:host[dir=ltr] ::ng-deep .scroll-dropped-trigger-element[trigger=start]{left:0;right:unset}:host[dir=ltr] ::ng-deep .scroll-reached-trigger-element[trigger=end],:host[dir=ltr] ::ng-deep .scroll-dropped-trigger-element[trigger=end]{right:0;left:unset}:host[dir=rtl] ::ng-deep .scroll-reached-trigger-element[trigger=start],:host[dir=rtl] ::ng-deep .scroll-dropped-trigger-element[trigger=start]{right:0;left:unset}:host[dir=rtl] ::ng-deep .scroll-reached-trigger-element[trigger=end],:host[dir=rtl] ::ng-deep .scroll-dropped-trigger-element[trigger=end]{left:0;right:unset}:host ::ng-deep .ng-scroll-reached-wrapper,:host ::ng-deep .ng-scroll-dropped-wrapper,:host ::ng-deep .scroll-reached-trigger-element,:host ::ng-deep .scroll-dropped-trigger-element{position:absolute;-webkit-user-select:none;user-select:none;pointer-events:none;z-index:-9999}:host ::ng-deep .ng-scroll-reached-wrapper,:host ::ng-deep .ng-scroll-dropped-wrapper{visibility:hidden;inset:0;min-width:calc(var(--viewport-width) * 1px);min-height:calc(var(--viewport-height) * 1px)}:host ::ng-deep [isHorizontallyScrollable=false] .scroll-reached-trigger-element[trigger=end],:host ::ng-deep [isHorizontallyScrollable=false] .scroll-dropped-trigger-element[trigger=end]{display:none}:host ::ng-deep [isVerticallyScrollable=false] .scroll-reached-trigger-element[trigger=bottom],:host ::ng-deep [isVerticallyScrollable=false] .scroll-dropped-trigger-element[trigger=bottom]{display:none}:host ::ng-deep .scroll-reached-trigger-element{background:red}:host ::ng-deep .scroll-reached-trigger-element[trigger=top],:host ::ng-deep .scroll-reached-trigger-element[trigger=bottom]{left:0;right:0}:host ::ng-deep .scroll-reached-trigger-element[trigger=start],:host ::ng-deep .scroll-reached-trigger-element[trigger=end]{top:0;bottom:0}:host ::ng-deep .scroll-reached-trigger-element[trigger=top]{top:0;height:var(--reached-offset-top)}:host ::ng-deep .scroll-reached-trigger-element[trigger=bottom]{bottom:0;height:var(--reached-offset-bottom)}:host ::ng-deep .scroll-reached-trigger-element[trigger=start]{width:var(--reached-offset-start)}:host ::ng-deep .scroll-reached-trigger-element[trigger=end]{width:var(--reached-offset-end)}:host .scroll-dropped-trigger-element{background:#00f}:host .scroll-dropped-trigger-element[trigger=top],:host .scroll-dropped-trigger-element[trigger=bottom]{left:0;right:0}:host .scroll-dropped-trigger-element[trigger=start],:host .scroll-dropped-trigger-element[trigger=end]{top:0;bottom:0}:host .scroll-dropped-trigger-element[trigger=top]{top:0;height:var(--dropped-offset-top)}:host .scroll-dropped-trigger-element[trigger=bottom]{bottom:0;height:var(--dropped-offset-bottom)}:host .scroll-dropped-trigger-element[trigger=start]{width:var(--dropped-offset-start)}:host .scroll-dropped-trigger-element[trigger=end]{width:var(--dropped-offset-end)}:host[verticalUsed=true]{--_timeline-scope: --scrollerY;--_animation-timeline-y: --scrollerY;--_viewport_scroll-timeline: --scrollerY y}:host[horizontalUsed=true]{--_timeline-scope: --scrollerX;--_animation-timeline-x: --scrollerX;--_viewport_scroll-timeline: --scrollerX x}:host[verticalUsed=true][horizontalUsed=true]{--_timeline-scope: --scrollerX, --scrollerY;--_viewport_scroll-timeline: --scrollerX x, --scrollerY y}:host[orientation=vertical]{--_viewport-overflow: hidden auto;--_scrollbar-content-width: unset}:host[orientation=horizontal]{--_viewport-overflow: auto hidden}:host[disableInteraction=true]{--_viewport-pointer-events: none;--_scrollbar-pointer-events: none}:host[isVerticallyScrollable=false]{--_vertical-thumb-display: none}:host[isHorizontallyScrollable=false]{--_horizontal-thumb-display: none}:host[dragging=x],:host[dragging=y]{--_viewport-user-select: none}:host[dragging=x]{--_track-x-thickness: calc(var(--INTERNAL-scrollbar-hover-thickness) * 1px);--_thumb-x-color: var(var(--INTERNAL-scrollbar-thumb-min-size))}:host[dragging=y]{--_track-y-thickness: calc(var(--INTERNAL-scrollbar-hover-thickness) * 1px);--_thumb-y-color: var(var(--INTERNAL-scrollbar-thumb-min-size))}:host[mobile=true]{--_viewport-overscroll-behavior: var(--INTERNAL-scrollbar-mobile-overscroll-behavior)}\n"]
    }]
  }], () => [], null);
})();
var _NgScrollbarExt = class _NgScrollbarExt extends NgScrollbarCore {
  constructor() {
    effect(() => {
      const viewportElement = this.viewportElement();
      const contentWrapperElement = this.contentWrapperElement();
      const spacerElement = this.spacerElement();
      const viewportError = this.viewportError();
      const contentWrapperError = this.contentWrapperError();
      const spacerError = this.spacerError();
      untracked(() => {
        if (!this.skipInit) {
          const error = viewportError || contentWrapperError || spacerError;
          if (error) {
            console.error(error);
          } else {
            this.initialize(viewportElement, contentWrapperElement, spacerElement);
          }
        }
      });
    });
    super();
    this.renderer = inject(Renderer2);
    this.appRef = inject(ApplicationRef);
    this._scrollbars = signal(null);
    this.externalViewport = input();
    this.externalContentWrapper = input();
    this.externalSpacer = input();
    this.viewportElement = linkedSignal({
      source: this.externalViewport,
      // If viewport selector was defined, query the element
      computation: (selector) => this.getElement(selector) || this.customViewport()?.nativeElement
    });
    this.viewportError = computed(() => {
      return !this.viewportElement() ? `[NgScrollbar]: Could not find the viewport element for the provided selector "${this.externalViewport()}"` : null;
    });
    this.contentWrapperElement = linkedSignal({
      source: this.externalContentWrapper,
      computation: (selector) => this.getElement(selector)
    });
    this.contentWrapperError = computed(() => {
      return !this.contentWrapperElement() && this.externalContentWrapper() ? `[NgScrollbar]: Content wrapper element not found for the provided selector "${this.externalContentWrapper()}"` : null;
    });
    this.spacerElement = linkedSignal({
      source: this.externalSpacer,
      computation: (selector) => this.getElement(selector)
    });
    this.spacerError = computed(() => {
      return !this.spacerElement() && this.externalSpacer() ? `[NgScrollbar]: Spacer element not found for the provided selector "${this.externalSpacer()}"` : null;
    });
    this.customViewport = contentChild(ScrollViewport, {
      descendants: true
    });
  }
  ngOnDestroy() {
    if (this._scrollbarsRef) {
      this.appRef.detachView(this._scrollbarsRef.hostView);
      this._scrollbarsRef.destroy();
    }
  }
  initialize(viewportElement, contentWrapperElement, spacerElement) {
    if (this.skipInit) {
      this.viewportElement.set(viewportElement);
      this.contentWrapperElement.set(contentWrapperElement);
      this.spacerElement.set(spacerElement);
    }
    if (!spacerElement && !contentWrapperElement) {
      contentWrapperElement = this.renderer.createElement("div");
      const childNodes = Array.from(viewportElement.childNodes);
      childNodes.forEach((node) => this.renderer.appendChild(contentWrapperElement, node));
      this.renderer.appendChild(viewportElement, contentWrapperElement);
    }
    if (contentWrapperElement) {
      this.viewport.init(viewportElement, contentWrapperElement, spacerElement);
      this._attachScrollbars();
    }
  }
  _attachScrollbars() {
    this._scrollbarsRef = createComponent(Scrollbars, {
      environmentInjector: this.appRef.injector,
      elementInjector: Injector.create({
        providers: [{
          provide: NG_SCROLLBAR,
          useValue: this
        }]
      })
    });
    this.renderer.appendChild(this.viewport.contentWrapperElement, this._scrollbarsRef.location.nativeElement);
    this.appRef.attachView(this._scrollbarsRef.hostView);
    this._scrollbars.set(this._scrollbarsRef.instance);
  }
  getElement(selector) {
    return selector ? this.nativeElement.querySelector(selector) : null;
  }
};
_NgScrollbarExt.\u0275fac = function NgScrollbarExt_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _NgScrollbarExt)();
};
_NgScrollbarExt.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
  type: _NgScrollbarExt,
  selectors: [["ng-scrollbar", "externalViewport", ""]],
  contentQueries: function NgScrollbarExt_ContentQueries(rf, ctx, dirIndex) {
    if (rf & 1) {
      \u0275\u0275contentQuerySignal(dirIndex, ctx.customViewport, ScrollViewport, 5);
    }
    if (rf & 2) {
      \u0275\u0275queryAdvance();
    }
  },
  hostAttrs: ["ngSkipHydration", "true"],
  hostVars: 2,
  hostBindings: function NgScrollbarExt_HostBindings(rf, ctx) {
    if (rf & 2) {
      \u0275\u0275classProp("ng-scrollbar-external-viewport", true);
    }
  },
  inputs: {
    externalViewport: [1, "externalViewport"],
    externalContentWrapper: [1, "externalContentWrapper"],
    externalSpacer: [1, "externalSpacer"]
  },
  exportAs: ["ngScrollbar"],
  features: [\u0275\u0275ProvidersFeature([{
    provide: NG_SCROLLBAR,
    useExisting: _NgScrollbarExt
  }, {
    provide: NgScrollbarCore,
    useExisting: NgScrollbar
  }, ViewportAdapter]), \u0275\u0275InheritDefinitionFeature],
  attrs: _c4,
  ngContentSelectors: _c3,
  decls: 1,
  vars: 0,
  template: function NgScrollbarExt_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275projectionDef();
      \u0275\u0275projection(0);
    }
  },
  styles: [_c5],
  changeDetection: 0
});
var NgScrollbarExt = _NgScrollbarExt;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgScrollbarExt, [{
    type: Component,
    args: [{
      standalone: true,
      selector: "ng-scrollbar[externalViewport]",
      exportAs: "ngScrollbar",
      template: "<ng-content/>",
      changeDetection: ChangeDetectionStrategy.OnPush,
      host: {
        // This component appends a content wrapper element to the viewport
        // A hydration mismatch error will be thrown (NG0500) during DOM manipulation.
        // To avoid this error, the 'ngSkipHydration' attribute is added to skip hydration.
        ngSkipHydration: "true",
        "[class.ng-scrollbar-external-viewport]": "true"
      },
      providers: [{
        provide: NG_SCROLLBAR,
        useExisting: NgScrollbarExt
      }, {
        provide: NgScrollbarCore,
        useExisting: NgScrollbar
      }, ViewportAdapter],
      styles: [":host{display:block;position:relative;max-height:100%;max-width:100%;--INTERNAL-scrollbar-border-radius: var(--scrollbar-border-radius, 0px);--INTERNAL-scrollbar-thickness: var(--scrollbar-thickness, 5);--INTERNAL-scrollbar-offset: var(--scrollbar-offset, 0);--INTERNAL-scrollbar-track-wrapper-transition: var(--scrollbar-track-wrapper-transition, width 60ms linear, height 60ms linear);--INTERNAL-scrollbar-track-color: var(--scrollbar-track-color, transparent);--INTERNAL-scrollbar-thumb-color: var(--scrollbar-thumb-color, rgb(0 0 0 / 20%));--INTERNAL-scrollbar-thumb-hover-color: var(--scrollbar-thumb-hover-color, var(--INTERNAL-scrollbar-thumb-color));--INTERNAL-scrollbar-hover-thickness: var(--scrollbar-hover-thickness, var(--INTERNAL-scrollbar-thickness));--INTERNAL-scrollbar-thumb-transition: var(--scrollbar-thumb-transition, none);--INTERNAL-scrollbar-thumb-min-size: var(--scrollbar-thumb-min-size, 20);--INTERNAL-scrollbar-button-color: var(--scrollbar-button-color, var(--INTERNAL-scrollbar-thumb-color));--INTERNAL-scrollbar-button-hover-color: var(--scrollbar-button-hover-color, var(--INTERNAL-scrollbar-button-color));--INTERNAL-scrollbar-button-active-color: var(--scrollbar-button-active-color, var(--INTERNAL-scrollbar-button-hover-color));--INTERNAL-scrollbar-button-fill: var(--scrollbar-button-fill, white);--INTERNAL-scrollbar-button-hover-fill: var(--scrollbar-button-hover-fill, var(--INTERNAL-scrollbar-button-fill));--INTERNAL-scrollbar-button-active-fill: var(--scrollbar-button-active-fill, var(--INTERNAL-scrollbar-button-hover-fill));--INTERNAL-scrollbar-button-size: var(--scrollbar-button-size, 20px);--INTERNAL-scrollbar-hover-opacity-transition-enter-duration: var(--scrollbar-hover-opacity-transition-enter-duration, 0);--INTERNAL-scrollbar-hover-opacity-transition-leave-duration: var(--scrollbar-hover-opacity-transition-leave-duration, .4s);--INTERNAL-scrollbar-hover-opacity-transition-leave-delay: var(--scrollbar-hover-opacity-transition-leave-delay, 1s);--INTERNAL-scrollbar-overscroll-behavior: var(--scrollbar-overscroll-behavior, initial);--INTERNAL-scrollbar-mobile-overscroll-behavior: var(--scrollbar-mobile-overscroll-behavior, none);--_scrollbar-thickness: calc(var(--INTERNAL-scrollbar-thickness) + var(--INTERNAL-scrollbar-offset) * 2);--_scrollbar-pointer-events: auto;--_scrollbar-offset-px: calc(var(--INTERNAL-scrollbar-offset) * 1px);--_scrollbar-thickness-px: calc(var(--INTERNAL-scrollbar-thickness) * 1px);--_scrollbar-hover-thickness-px: calc(var(--INTERNAL-scrollbar-hover-thickness) * 1px);--_viewport-padding-top: 0;--_viewport-padding-bottom: 0;--_viewport-padding-left: 0;--_viewport-padding-right: 0;--_horizontal-thumb-display: block;--_vertical-thumb-display: block;--_viewport-overflow: auto;--_viewport-pointer-events: auto;--_thumb-x-color: var(--INTERNAL-scrollbar-thumb-color);--_thumb-y-color: var(--INTERNAL-scrollbar-thumb-color);--_track-y-thickness: var(--_scrollbar-thickness-px);--_track-x-thickness: var(--_scrollbar-thickness-px);--_viewport-overscroll-behavior: var(--INTERNAL-scrollbar-overscroll-behavior);--_scrollbar-content-width: fit-content}:host{--_spacer-width: var(--spacer-width);--_spacer-height: var(--spacer-height);--_vertical-top: var(--_scrollbar-offset-px);--_vertical-bottom: var(--_scrollbar-offset-px);--_horizontal-left: var(--_scrollbar-offset-px);--_horizontal-right: var(--_scrollbar-offset-px);--_horizontal-top: initial;--_horizontal-bottom: var(--_scrollbar-offset-px);--_scrollbar-wrapper-x-top: calc(var(--viewport-height) - var(--_scrollbar-thickness));--reached-offset: 1px;--reached-offset-top: var(--reached-offset);--reached-offset-bottom: var(--reached-offset);--reached-offset-start: var(--reached-offset);--reached-offset-end: var(--reached-offset);--dropped-offset: 1px;--dropped-offset-top: var(--dropped-offset);--dropped-offset-bottom: var(--dropped-offset);--dropped-offset-start: var(--dropped-offset);--dropped-offset-end: var(--dropped-offset);--_viewport_scroll-timeline: unset;--_animation-timeline-y: unset;--_scrollbar-y-thumb-transform-to-value: unset;--_scrollbar-x-thumb-transform-to-value: unset;--_scrollbar-thumb-transform-from: unset;--_scrollbar-thumb-transform-to: unset}:host.ng-scrollbar-external-viewport ::ng-deep .ng-scroll-viewport{min-height:100%;min-width:100%;height:100%;max-height:100%;max-width:100%}:host.ng-scroll-viewport,:host.ng-scrollbar-external-viewport ::ng-deep .ng-scroll-viewport{position:relative;overflow:var(--_viewport-overflow);scroll-timeline:var(--_viewport_scroll-timeline);box-sizing:border-box!important;-webkit-overflow-scrolling:touch;will-change:scroll-position;-webkit-user-select:var(--_viewport-user-select);user-select:var(--_viewport-user-select);overscroll-behavior:var(--_viewport-overscroll-behavior);pointer-events:var(--_viewport-pointer-events)}:host.ng-scroll-viewport>.ng-scroll-content,:host.ng-scrollbar-external-viewport ::ng-deep .ng-scroll-viewport>.ng-scroll-content{width:var(--_scrollbar-content-width);z-index:1;min-width:100%;min-height:100%;contain:content;padding:var(--_viewport-padding-top, 0) var(--_viewport-padding-right, 0) var(--_viewport-padding-bottom, 0) var(--_viewport-padding-left, 0)}:host[appearance=native]{--_spacer-width: calc(var(--spacer-width) + var(--_scrollbar-thickness));--_spacer-height: calc(var(--spacer-height) + var(--_scrollbar-thickness))}:host.ng-scroll-viewport>.ng-scroll-spacer,:host.ng-scrollbar-external-viewport ::ng-deep .ng-scroll-viewport>.ng-scroll-spacer{position:relative;width:calc(var(--_spacer-width) * 1px);height:calc(var(--_spacer-height) * 1px)}:host.ng-scroll-viewport,:host.ng-scrollbar-external-viewport ::ng-deep .ng-scroll-viewport{scrollbar-width:none!important}:host.ng-scroll-viewport::-webkit-scrollbar,:host.ng-scrollbar-external-viewport ::ng-deep .ng-scroll-viewport::-webkit-scrollbar{display:none!important}:host[position=invertX],:host[position=invertAll]{--_horizontal-top: var(--_scrollbar-offset-px);--_horizontal-bottom: initial;--_scrollbar-wrapper-x-top: 0}:host[dir=ltr]{--_scrollbar-wrapper-y-right: initial;--_vertical-right: var(--_scrollbar-offset-px);--_vertical-left: initial;--_scrollbar-wrapper-y-left: calc(var(--viewport-width) - var(--_scrollbar-thickness))}:host[dir=ltr][position=invertY],:host[dir=ltr][position=invertAll]{--_vertical-left: var(--_scrollbar-offset-px);--_vertical-right: initial;--_scrollbar-wrapper-y-left: 0}:host[dir=rtl]{--_scrollbar-wrapper-y-left: initial;--_vertical-left: var(--_scrollbar-offset-px);--_vertical-right: initial;--_scrollbar-wrapper-y-right: calc(var(--viewport-width) - var(--_scrollbar-thickness))}:host[dir=rtl][position=invertY],:host[dir=rtl][position=invertAll]{--_vertical-right: var(--_scrollbar-offset-px);--_vertical-left: initial;--_scrollbar-wrapper-y-right: 0}:host[verticalUsed=true][horizontalUsed=true]{--_scrollbar-thickness-margin: calc(var(--INTERNAL-scrollbar-thickness) + var(--INTERNAL-scrollbar-offset) * 3);--_scrollbar-thickness-margin-px: calc(var(--_scrollbar-thickness-margin) * 1px)}:host[horizontalUsed=true]{--_vertical-top: var(--_scrollbar-offset-px);--_vertical-bottom: var(--_scrollbar-thickness-margin-px)}:host[horizontalUsed=true][position=invertX],:host[horizontalUsed=true][position=invertAll]{--_vertical-top: var(--_scrollbar-thickness-margin-px);--_vertical-bottom: var(--_scrollbar-offset-px)}:host[verticalUsed=true][dir=ltr]{--_horizontal-left: var(--_scrollbar-offset-px);--_horizontal-right: var(--_scrollbar-thickness-margin-px)}:host[verticalUsed=true][dir=rtl]{--_horizontal-left: var(--_scrollbar-thickness-margin-px);--_horizontal-right: var(--_scrollbar-offset-px)}:host[verticalUsed=true][position=invertY][dir=ltr],:host[verticalUsed=true][position=invertAll][dir=ltr]{--_horizontal-left: var(--_scrollbar-thickness-margin-px);--_horizontal-right: var(--_scrollbar-offset-px)}:host[verticalUsed=true][position=invertY][dir=rtl],:host[verticalUsed=true][position=invertAll][dir=rtl]{--_horizontal-left: var(--_scrollbar-offset-px);--_horizontal-right: var(--_scrollbar-thickness-margin-px)}:host[appearance=native][verticalUsed=true][dir=ltr]{--_viewport-padding-left: 0;--_viewport-padding-right: calc(var(--_scrollbar-thickness) * 1px)}:host[appearance=native][verticalUsed=true][dir=rtl]{--_viewport-padding-left: calc(var(--_scrollbar-thickness) * 1px);--_viewport-padding-right: 0}:host[appearance=native][verticalUsed=true][position=invertY][dir=ltr],:host[appearance=native][verticalUsed=true][position=invertAll][dir=ltr]{--_viewport-padding-left: calc(var(--_scrollbar-thickness) * 1px);--_viewport-padding-right: 0}:host[appearance=native][verticalUsed=true][position=invertY][dir=rtl],:host[appearance=native][verticalUsed=true][position=invertAll][dir=rtl]{--_viewport-padding-left: 0;--_viewport-padding-right: calc(var(--_scrollbar-thickness) * 1px)}:host[appearance=native][horizontalUsed=true]{--_viewport-padding-top: 0;--_viewport-padding-bottom: calc(var(--_scrollbar-thickness) * 1px)}:host[appearance=native][horizontalUsed=true][position=invertX],:host[appearance=native][horizontalUsed=true][position=invertAll]{--_viewport-padding-top: calc(var(--_scrollbar-thickness) * 1px);--_viewport-padding-bottom: 0}:host[visibility=hover]{--_scrollbar-hover-opacity: 0;--_scrollbar-opacity-transition: opacity var(--INTERNAL-scrollbar-hover-opacity-transition-leave-duration) var(--INTERNAL-scrollbar-hover-opacity-transition-leave-delay)}:host[visibility=hover]:hover,:host[visibility=hover]:active,:host[visibility=hover]:focus{--_scrollbar-hover-opacity: 1;--_scrollbar-opacity-transition: opacity var(--INTERNAL-scrollbar-hover-opacity-transition-enter-duration)}:host[dir=ltr] ::ng-deep .scroll-reached-trigger-element[trigger=start],:host[dir=ltr] ::ng-deep .scroll-dropped-trigger-element[trigger=start]{left:0;right:unset}:host[dir=ltr] ::ng-deep .scroll-reached-trigger-element[trigger=end],:host[dir=ltr] ::ng-deep .scroll-dropped-trigger-element[trigger=end]{right:0;left:unset}:host[dir=rtl] ::ng-deep .scroll-reached-trigger-element[trigger=start],:host[dir=rtl] ::ng-deep .scroll-dropped-trigger-element[trigger=start]{right:0;left:unset}:host[dir=rtl] ::ng-deep .scroll-reached-trigger-element[trigger=end],:host[dir=rtl] ::ng-deep .scroll-dropped-trigger-element[trigger=end]{left:0;right:unset}:host ::ng-deep .ng-scroll-reached-wrapper,:host ::ng-deep .ng-scroll-dropped-wrapper,:host ::ng-deep .scroll-reached-trigger-element,:host ::ng-deep .scroll-dropped-trigger-element{position:absolute;-webkit-user-select:none;user-select:none;pointer-events:none;z-index:-9999}:host ::ng-deep .ng-scroll-reached-wrapper,:host ::ng-deep .ng-scroll-dropped-wrapper{visibility:hidden;inset:0;min-width:calc(var(--viewport-width) * 1px);min-height:calc(var(--viewport-height) * 1px)}:host ::ng-deep [isHorizontallyScrollable=false] .scroll-reached-trigger-element[trigger=end],:host ::ng-deep [isHorizontallyScrollable=false] .scroll-dropped-trigger-element[trigger=end]{display:none}:host ::ng-deep [isVerticallyScrollable=false] .scroll-reached-trigger-element[trigger=bottom],:host ::ng-deep [isVerticallyScrollable=false] .scroll-dropped-trigger-element[trigger=bottom]{display:none}:host ::ng-deep .scroll-reached-trigger-element{background:red}:host ::ng-deep .scroll-reached-trigger-element[trigger=top],:host ::ng-deep .scroll-reached-trigger-element[trigger=bottom]{left:0;right:0}:host ::ng-deep .scroll-reached-trigger-element[trigger=start],:host ::ng-deep .scroll-reached-trigger-element[trigger=end]{top:0;bottom:0}:host ::ng-deep .scroll-reached-trigger-element[trigger=top]{top:0;height:var(--reached-offset-top)}:host ::ng-deep .scroll-reached-trigger-element[trigger=bottom]{bottom:0;height:var(--reached-offset-bottom)}:host ::ng-deep .scroll-reached-trigger-element[trigger=start]{width:var(--reached-offset-start)}:host ::ng-deep .scroll-reached-trigger-element[trigger=end]{width:var(--reached-offset-end)}:host .scroll-dropped-trigger-element{background:#00f}:host .scroll-dropped-trigger-element[trigger=top],:host .scroll-dropped-trigger-element[trigger=bottom]{left:0;right:0}:host .scroll-dropped-trigger-element[trigger=start],:host .scroll-dropped-trigger-element[trigger=end]{top:0;bottom:0}:host .scroll-dropped-trigger-element[trigger=top]{top:0;height:var(--dropped-offset-top)}:host .scroll-dropped-trigger-element[trigger=bottom]{bottom:0;height:var(--dropped-offset-bottom)}:host .scroll-dropped-trigger-element[trigger=start]{width:var(--dropped-offset-start)}:host .scroll-dropped-trigger-element[trigger=end]{width:var(--dropped-offset-end)}:host[verticalUsed=true]{--_timeline-scope: --scrollerY;--_animation-timeline-y: --scrollerY;--_viewport_scroll-timeline: --scrollerY y}:host[horizontalUsed=true]{--_timeline-scope: --scrollerX;--_animation-timeline-x: --scrollerX;--_viewport_scroll-timeline: --scrollerX x}:host[verticalUsed=true][horizontalUsed=true]{--_timeline-scope: --scrollerX, --scrollerY;--_viewport_scroll-timeline: --scrollerX x, --scrollerY y}:host[orientation=vertical]{--_viewport-overflow: hidden auto;--_scrollbar-content-width: unset}:host[orientation=horizontal]{--_viewport-overflow: auto hidden}:host[disableInteraction=true]{--_viewport-pointer-events: none;--_scrollbar-pointer-events: none}:host[isVerticallyScrollable=false]{--_vertical-thumb-display: none}:host[isHorizontallyScrollable=false]{--_horizontal-thumb-display: none}:host[dragging=x],:host[dragging=y]{--_viewport-user-select: none}:host[dragging=x]{--_track-x-thickness: calc(var(--INTERNAL-scrollbar-hover-thickness) * 1px);--_thumb-x-color: var(var(--INTERNAL-scrollbar-thumb-min-size))}:host[dragging=y]{--_track-y-thickness: calc(var(--INTERNAL-scrollbar-hover-thickness) * 1px);--_thumb-y-color: var(var(--INTERNAL-scrollbar-thumb-min-size))}:host[mobile=true]{--_viewport-overscroll-behavior: var(--INTERNAL-scrollbar-mobile-overscroll-behavior)}\n"]
    }]
  }], () => [], null);
})();
var _AsyncDetection = class _AsyncDetection {
  constructor() {
    this.scrollbar = inject(NgScrollbarExt, {
      self: true
    });
    this.zone = inject(NgZone);
    this.contentObserver = inject(ContentObserver);
    this.asyncDetection = input();
    this.scrollbar.skipInit = true;
    let sub$;
    effect((onCleanup) => {
      const init = this.scrollbar.viewport.initialized();
      const externalViewport = this.scrollbar.externalViewport();
      const externalContentWrapper = this.scrollbar.externalContentWrapper();
      const externalSpacer = this.scrollbar.externalSpacer();
      const asyncDetection = this.asyncDetection();
      untracked(() => {
        let viewportElement;
        let contentWrapperElement;
        this.zone.runOutsideAngular(() => {
          sub$ = this.contentObserver.observe(this.scrollbar.nativeElement).pipe(throttleTime(100, null, {
            leading: true,
            trailing: true
          })).subscribe(() => {
            viewportElement = this.scrollbar.nativeElement.querySelector(externalViewport);
            contentWrapperElement = this.scrollbar.nativeElement.querySelector(externalContentWrapper);
            this.zone.run(() => {
              if (!init && viewportElement && contentWrapperElement) {
                let spacerElement;
                if (externalSpacer) {
                  spacerElement = this.scrollbar.nativeElement.querySelector(externalSpacer);
                }
                this.scrollbar.initialize(viewportElement, contentWrapperElement, spacerElement);
              } else if (!viewportElement || !contentWrapperElement) {
                this.scrollbar.viewport.reset();
              }
            });
            if (asyncDetection !== "auto") {
              sub$.unsubscribe();
            }
          });
        });
        onCleanup(() => sub$?.unsubscribe());
      });
    });
  }
};
_AsyncDetection.\u0275fac = function AsyncDetection_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _AsyncDetection)();
};
_AsyncDetection.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
  type: _AsyncDetection,
  selectors: [["ng-scrollbar", "externalViewport", "", "asyncDetection", ""]],
  inputs: {
    asyncDetection: [1, "asyncDetection"]
  }
});
var AsyncDetection = _AsyncDetection;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AsyncDetection, [{
    type: Directive,
    args: [{
      standalone: true,
      selector: "ng-scrollbar[externalViewport][asyncDetection]"
    }]
  }], () => [], null);
})();
var _SyncSpacer = class _SyncSpacer {
  constructor() {
    this.sharedResizeObserver = inject(SharedResizeObserver);
    this.scrollbar = inject(NgScrollbarExt, {
      self: true
    });
    this.zone = inject(NgZone);
    this.spacerDimension = signal({});
    let sub$;
    effect((onCleanup) => {
      const spacerElement = this.scrollbar.spacerElement();
      const contentWrapperElement = this.scrollbar.contentWrapperElement();
      const throttleDuration = this.scrollbar.sensorThrottleTime();
      const disableSensor = this.scrollbar.disableSensor();
      untracked(() => {
        if (!disableSensor && contentWrapperElement && spacerElement) {
          this.zone.runOutsideAngular(() => {
            sub$ = getThrottledStream(this.sharedResizeObserver.observe(contentWrapperElement), throttleDuration).pipe(map((entries) => filterResizeEntries(entries, contentWrapperElement))).subscribe(() => {
              this.zone.run(() => {
                requestAnimationFrame(() => {
                  this.spacerDimension.set({
                    width: contentWrapperElement.offsetWidth,
                    height: contentWrapperElement.offsetHeight
                  });
                });
              });
            });
          });
        }
        onCleanup(() => sub$?.unsubscribe());
      });
    });
  }
};
_SyncSpacer.\u0275fac = function SyncSpacer_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _SyncSpacer)();
};
_SyncSpacer.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
  type: _SyncSpacer,
  selectors: [["ng-scrollbar", "externalViewport", "", "syncSpacer", ""]],
  hostVars: 4,
  hostBindings: function SyncSpacer_HostBindings(rf, ctx) {
    if (rf & 2) {
      \u0275\u0275styleProp("--spacer-width", ctx.spacerDimension().width)("--spacer-height", ctx.spacerDimension().height);
    }
  }
});
var SyncSpacer = _SyncSpacer;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SyncSpacer, [{
    type: Directive,
    args: [{
      standalone: true,
      selector: "ng-scrollbar[externalViewport][syncSpacer]",
      host: {
        "[style.--spacer-width]": "spacerDimension().width",
        "[style.--spacer-height]": "spacerDimension().height"
      }
    }]
  }], () => [], null);
})();
var _NgScrollbarModule = class _NgScrollbarModule {
};
_NgScrollbarModule.\u0275fac = function NgScrollbarModule_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _NgScrollbarModule)();
};
_NgScrollbarModule.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
  type: _NgScrollbarModule,
  imports: [NgScrollbar, ScrollViewport, NgScrollbarExt, AsyncDetection, SyncSpacer],
  exports: [NgScrollbar, ScrollViewport, NgScrollbarExt, AsyncDetection, SyncSpacer]
});
_NgScrollbarModule.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({});
var NgScrollbarModule = _NgScrollbarModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgScrollbarModule, [{
    type: NgModule,
    args: [{
      imports: [NgScrollbar, ScrollViewport, NgScrollbarExt, AsyncDetection, SyncSpacer],
      exports: [NgScrollbar, ScrollViewport, NgScrollbarExt, AsyncDetection, SyncSpacer]
    }]
  }], null, null);
})();

// src/app/features/common/side-menus/side-menu-three/side-menu-three.component.ts
var _c02 = (a0) => ({ "subdrop": a0 });
function SideMenuThreeComponent_For_67_For_3_Conditional_0_For_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 61);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const subMenu_r4 = ctx.$implicit;
    \u0275\u0275property("routerLink", subMenu_r4.route);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(subMenu_r4.menuValue);
  }
}
function SideMenuThreeComponent_For_67_For_3_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "li", 55)(1, "a", 57);
    \u0275\u0275listener("click", function SideMenuThreeComponent_For_67_For_3_Conditional_0_Template_a_click_1_listener() {
      \u0275\u0275restoreView(_r1);
      const menu_r2 = \u0275\u0275nextContext().$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.expandSubMenus(menu_r2));
    });
    \u0275\u0275element(2, "i", 58);
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275element(5, "span", 59);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "ul", 60)(7, "li");
    \u0275\u0275repeaterCreate(8, SideMenuThreeComponent_For_67_For_3_Conditional_0_For_9_Template, 2, 2, "a", 61, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const menu_r2 = \u0275\u0275nextContext().$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275classProp("active", ctx_r2.page === menu_r2.base || ctx_r2.page === menu_r2.base2);
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(7, _c02, menu_r2.showSubRoute === true));
    \u0275\u0275advance();
    \u0275\u0275classMap("isax-" + menu_r2.icon);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(menu_r2.menuValue);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngClass", menu_r2.showSubRoute === true ? "d-block" : "d-none");
    \u0275\u0275advance(2);
    \u0275\u0275repeater(menu_r2.subMenus);
  }
}
function SideMenuThreeComponent_For_67_For_3_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li")(1, "a", 21);
    \u0275\u0275element(2, "i", 58);
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const menu_r2 = \u0275\u0275nextContext().$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("active", ctx_r2.page === menu_r2.base);
    \u0275\u0275advance();
    \u0275\u0275property("routerLink", menu_r2.route);
    \u0275\u0275advance();
    \u0275\u0275classMap("isax-" + menu_r2.icon);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(menu_r2.menuValue);
  }
}
function SideMenuThreeComponent_For_67_For_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, SideMenuThreeComponent_For_67_For_3_Conditional_0_Template, 10, 9, "li", 55);
    \u0275\u0275conditionalCreate(1, SideMenuThreeComponent_For_67_For_3_Conditional_1_Template, 5, 6, "li", 56);
  }
  if (rf & 2) {
    const menu_r2 = ctx.$implicit;
    \u0275\u0275conditional(menu_r2.hasSubRoute === true ? 0 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(menu_r2.hasSubRoute === false ? 1 : -1);
  }
}
function SideMenuThreeComponent_For_67_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li")(1, "ul");
    \u0275\u0275repeaterCreate(2, SideMenuThreeComponent_For_67_For_3_Template, 2, 2, null, null, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const mainMenus_r5 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275repeater(mainMenus_r5.menu);
  }
}
var SideMenuThreeComponent = class _SideMenuThreeComponent {
  router;
  data;
  sideBar;
  auth;
  routes = routes;
  headerSidebarStyle = "1";
  primarySkinStyle = "1";
  mobileSidebar = false;
  base = "dashboard";
  page = "";
  last = "";
  currentRoute = "";
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  side_bar_data = [];
  toggleSidebar() {
    this.sideBar.switchSideMenuPosition();
  }
  constructor(router, data, sideBar, auth) {
    this.router = router;
    this.data = data;
    this.sideBar = sideBar;
    this.auth = auth;
    router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.getRoutes(event);
      }
    });
    this.getRoutes(this.router);
    this.sideBar.headerSidebarStyle.subscribe((res) => {
      this.headerSidebarStyle = res;
    });
    this.sideBar.primarySkinStyle.subscribe((res) => {
      this.primarySkinStyle = res;
    });
    this.data.getSideBar3Data.subscribe((res) => {
      this.side_bar_data = res;
    });
  }
  getRoutes(route) {
    const splitVal = route.url.split("/");
    this.currentRoute = route.url;
    this.base = splitVal[1];
    this.page = splitVal[2];
    this.last = splitVal[3];
  }
  miniSideBarMouseHover(position) {
    if (position == "over") {
      this.sideBar.expandSideBar.next("true");
    } else {
      this.sideBar.expandSideBar.next("false");
    }
  }
  expandSubMenus(menu) {
    sessionStorage.setItem("menuValue", menu.menuValue);
    this.side_bar_data.map((mainMenus) => {
      mainMenus.menu.map((resMenu) => {
        if (resMenu.menuValue == menu.menuValue) {
          menu.showSubRoute = !menu.showSubRoute;
        } else {
          resMenu.showSubRoute = false;
        }
      });
    });
  }
  ngOnDestroy() {
    this.sideBar.resetMiniSidebar();
  }
  logOut() {
    this.auth.logout();
  }
  navigateAuth(menuValue) {
    if (menuValue == "Authentication")
      localStorage.removeItem("authenticated");
  }
  sidebarfooter = false;
  closefooter() {
    this.sidebarfooter = true;
  }
  static \u0275fac = function SideMenuThreeComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _SideMenuThreeComponent)(\u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(DataService), \u0275\u0275directiveInject(SideBarService), \u0275\u0275directiveInject(AuthService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SideMenuThreeComponent, selectors: [["app-side-menu-three"]], decls: 95, vars: 16, consts: [["id", "two-col-sidebar", 1, "two-col-sidebar", "d-block", 3, "mouseover", "focus", "mouseout", "blur"], [1, "twocol-mini"], [1, "dropdown"], ["data-bs-toggle", "dropdown", "href", "javascript:void(0);", "role", "button", "data-bs-display", "static", "data-bs-reference", "parent", 1, "btn", "btn-primary", "bg-gradient", "btn-sm", "btn-icon", "rounded-circle", "d-flex", "align-items-center", "justify-content-center"], [1, "isax", "isax-add"], [1, "dropdown-menu", "dropdown-menu-start"], [1, "dropdown-item", "d-flex", "align-items-center", 3, "routerLink"], [1, "isax", "isax-document-text-1", "me-2"], [1, "isax", "isax-money-send", "me-2"], [1, "isax", "isax-money-add", "me-2"], [1, "isax", "isax-money-recive", "me-2"], [1, "isax", "isax-document", "me-2"], [1, "isax", "isax-document-download", "me-2"], [1, "isax", "isax-document-forward", "me-2"], [1, "menu-list"], ["data-bs-toggle", "tooltip", "data-bs-placement", "right", "data-bs-title", "Settings", 3, "routerLink"], [1, "isax", "isax-setting-25"], ["href", "javascript:void(0);", "data-bs-toggle", "tooltip", "data-bs-placement", "right", "data-bs-title", "Documentation"], [1, "isax", "isax-document-normal4"], ["href", "javascript:void(0);", "data-bs-toggle", "tooltip", "data-bs-placement", "right", "data-bs-title", "Changelog"], [1, "isax", "isax-cloud-change5"], [3, "routerLink"], [1, "isax", "isax-login-15"], ["id", "sidebar-two", 1, "sidebar"], [1, "sidebar-logo"], [1, "logo", "logo-normal", 3, "routerLink"], ["src", "assets/img/logo.svg", "alt", "Logo"], [1, "logo-small", 3, "routerLink"], ["src", "assets/img/logo-small.svg", "alt", "Logo"], [1, "dark-logo", 3, "routerLink"], ["src", "assets/img/logo-white.svg", "alt", "Logo"], ["id", "toggle_btn", "href", "javascript:void(0);", 3, "click"], [1, "isax", "isax-menu-1"], [1, "sidebar-search"], [1, "input-icon-end", "position-relative"], ["type", "text", "placeholder", "Search", 1, "form-control"], [1, "input-icon-addon"], [1, "isax", "isax-search-normal"], [1, "sidebar-inner", "slimscroll"], ["id", "sidebar-menu", 1, "sidebar-menu"], [1, "sidebar-footer", 3, "hidden"], [1, "trial-item", "bg-white", "text-center", "border"], [1, "bg-light", "p-3", "text-center"], ["src", "assets/img/icons/upgrade.svg", "alt", "img"], [1, "p-2"], [1, "fs-14", "fw-semibold", "mb-1"], [1, "fs-13", "mb-2"], [1, "btn", "btn-sm", "btn-primary", "w-100", "d-flex", "align-items-center", "justify-content-center", 3, "routerLink"], [1, "isax", "isax-crown5", "me-1"], ["href", "javascript:void(0);", 1, "close-icon", 3, "click"], [1, "fa-solid", "fa-x"], ["data-bs-toggle", "tooltip", "data-bs-placement", "top", "data-bs-title", "Settings", 3, "routerLink"], ["href", "javascript:void(0);", "data-bs-toggle", "tooltip", "data-bs-placement", "top", "data-bs-title", "Documentation"], ["href", "javascript:void(0);", "data-bs-toggle", "tooltip", "data-bs-placement", "top", "data-bs-title", "Changelog"], ["data-bs-toggle", "tooltip", "data-bs-placement", "top", "data-bs-title", "Login", 3, "routerLink"], [1, "submenu"], [3, "active"], ["href", "javascript:void(0);", 3, "click", "ngClass"], [1, "isax", "text-dark"], [1, "menu-arrow"], [3, "ngClass"], ["routerLinkActive", "active", 3, "routerLink"]], template: function SideMenuThreeComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0);
      \u0275\u0275listener("mouseover", function SideMenuThreeComponent_Template_div_mouseover_0_listener() {
        return ctx.miniSideBarMouseHover("over");
      })("focus", function SideMenuThreeComponent_Template_div_focus_0_listener() {
        return ctx.miniSideBarMouseHover("over");
      })("mouseout", function SideMenuThreeComponent_Template_div_mouseout_0_listener() {
        return ctx.miniSideBarMouseHover("out");
      })("blur", function SideMenuThreeComponent_Template_div_blur_0_listener() {
        return ctx.miniSideBarMouseHover("out");
      });
      \u0275\u0275elementStart(1, "div", 1)(2, "div", 2)(3, "a", 3);
      \u0275\u0275element(4, "i", 4);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "ul", 5)(6, "li")(7, "a", 6);
      \u0275\u0275element(8, "i", 7);
      \u0275\u0275text(9, "Invoice ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(10, "li")(11, "a", 6);
      \u0275\u0275element(12, "i", 8);
      \u0275\u0275text(13, "Expense ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(14, "li")(15, "a", 6);
      \u0275\u0275element(16, "i", 9);
      \u0275\u0275text(17, "Credit Notes ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(18, "li")(19, "a", 6);
      \u0275\u0275element(20, "i", 10);
      \u0275\u0275text(21, "Debit Notes ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(22, "li")(23, "a", 6);
      \u0275\u0275element(24, "i", 11);
      \u0275\u0275text(25, "Purchase Order ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(26, "li")(27, "a", 6);
      \u0275\u0275element(28, "i", 12);
      \u0275\u0275text(29, "Quotation ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(30, "li")(31, "a", 6);
      \u0275\u0275element(32, "i", 13);
      \u0275\u0275text(33, "Delivery Challan ");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(34, "ul", 14)(35, "li")(36, "a", 15);
      \u0275\u0275element(37, "i", 16);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(38, "li")(39, "a", 17);
      \u0275\u0275element(40, "i", 18);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(41, "li")(42, "a", 19);
      \u0275\u0275element(43, "i", 20);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(44, "li")(45, "a", 21);
      \u0275\u0275element(46, "i", 22);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(47, "div", 23)(48, "div", 24)(49, "a", 25);
      \u0275\u0275element(50, "img", 26);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(51, "a", 27);
      \u0275\u0275element(52, "img", 28);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(53, "a", 29);
      \u0275\u0275element(54, "img", 30);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(55, "a", 31);
      \u0275\u0275listener("click", function SideMenuThreeComponent_Template_a_click_55_listener() {
        return ctx.toggleSidebar();
      });
      \u0275\u0275element(56, "i", 32);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(57, "div", 33)(58, "div", 34);
      \u0275\u0275element(59, "input", 35);
      \u0275\u0275elementStart(60, "span", 36);
      \u0275\u0275element(61, "i", 37);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(62, "ng-scrollbar")(63, "div", 38)(64, "div", 39)(65, "ul");
      \u0275\u0275repeaterCreate(66, SideMenuThreeComponent_For_67_Template, 4, 0, "li", null, \u0275\u0275repeaterTrackByIdentity);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(68, "div", 40)(69, "div", 41)(70, "div", 42);
      \u0275\u0275element(71, "img", 43);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(72, "div", 44)(73, "h6", 45);
      \u0275\u0275text(74, "Upgrade to More");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(75, "p", 46);
      \u0275\u0275text(76, "Subscribe to get more with Premium Features");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(77, "a", 47);
      \u0275\u0275element(78, "i", 48);
      \u0275\u0275text(79, "Upgrade");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(80, "a", 49);
      \u0275\u0275listener("click", function SideMenuThreeComponent_Template_a_click_80_listener() {
        return ctx.closefooter();
      });
      \u0275\u0275element(81, "i", 50);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(82, "ul", 14)(83, "li")(84, "a", 51);
      \u0275\u0275element(85, "i", 16);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(86, "li")(87, "a", 52);
      \u0275\u0275element(88, "i", 18);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(89, "li")(90, "a", 53);
      \u0275\u0275element(91, "i", 20);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(92, "li")(93, "a", 54);
      \u0275\u0275element(94, "i", 22);
      \u0275\u0275elementEnd()()()()()()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(7);
      \u0275\u0275property("routerLink", ctx.routes.addInvoice);
      \u0275\u0275advance(4);
      \u0275\u0275property("routerLink", ctx.routes.expenses);
      \u0275\u0275advance(4);
      \u0275\u0275property("routerLink", ctx.routes.addCreditNotes);
      \u0275\u0275advance(4);
      \u0275\u0275property("routerLink", ctx.routes.addDebitNotes);
      \u0275\u0275advance(4);
      \u0275\u0275property("routerLink", ctx.routes.addPurchaseOrder);
      \u0275\u0275advance(4);
      \u0275\u0275property("routerLink", ctx.routes.addQuotations);
      \u0275\u0275advance(4);
      \u0275\u0275property("routerLink", ctx.routes.addDeliveryChallan);
      \u0275\u0275advance(5);
      \u0275\u0275property("routerLink", ctx.routes.customerAccountsettings);
      \u0275\u0275advance(9);
      \u0275\u0275property("routerLink", ctx.routes.login);
      \u0275\u0275advance(4);
      \u0275\u0275property("routerLink", ctx.routes.index);
      \u0275\u0275advance(2);
      \u0275\u0275property("routerLink", ctx.routes.index);
      \u0275\u0275advance(2);
      \u0275\u0275property("routerLink", ctx.routes.index);
      \u0275\u0275advance(13);
      \u0275\u0275repeater(ctx.side_bar_data);
      \u0275\u0275advance(2);
      \u0275\u0275property("hidden", ctx.sidebarfooter);
      \u0275\u0275advance(9);
      \u0275\u0275property("routerLink", ctx.routes.customerPlanssettings);
      \u0275\u0275advance(7);
      \u0275\u0275property("routerLink", ctx.routes.customerAccountsettings);
      \u0275\u0275advance(9);
      \u0275\u0275property("routerLink", ctx.routes.login);
    }
  }, dependencies: [CommonModule, NgClass, RouterLink, NgScrollbarModule, NgScrollbar], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SideMenuThreeComponent, [{
    type: Component,
    args: [{ selector: "app-side-menu-three", imports: [CommonModule, RouterLink, NgScrollbarModule], template: `<!-- Sidebar -->
<div
class="two-col-sidebar d-block" id="two-col-sidebar"
  (mouseover)="miniSideBarMouseHover('over')"
  (focus)="miniSideBarMouseHover('over')"
  (mouseout)="miniSideBarMouseHover('out')"
  (blur)="miniSideBarMouseHover('out')"
  >
  <div class="twocol-mini">
    <!-- Add -->
    <div class="dropdown">
      <a class="btn btn-primary bg-gradient btn-sm btn-icon rounded-circle d-flex align-items-center justify-content-center" data-bs-toggle="dropdown" href="javascript:void(0);" role="button"  data-bs-display="static" data-bs-reference="parent">
        <i class="isax isax-add"></i>
      </a>
      <ul class="dropdown-menu dropdown-menu-start">
        <li>
          <a [routerLink]="routes.addInvoice" class="dropdown-item d-flex align-items-center">
            <i class="isax isax-document-text-1 me-2"></i>Invoice
          </a>
        </li>
        <li>
          <a [routerLink]="routes.expenses" class="dropdown-item d-flex align-items-center">
            <i class="isax isax-money-send me-2"></i>Expense
          </a>
        </li>
        <li>
          <a [routerLink]="routes.addCreditNotes" class="dropdown-item d-flex align-items-center">
            <i class="isax isax-money-add me-2"></i>Credit Notes
          </a>
        </li>
        <li>
          <a [routerLink]="routes.addDebitNotes" class="dropdown-item d-flex align-items-center">
            <i class="isax isax-money-recive me-2"></i>Debit Notes
          </a>
        </li>
        <li>
          <a [routerLink]="routes.addPurchaseOrder" class="dropdown-item d-flex align-items-center">
            <i class="isax isax-document me-2"></i>Purchase Order
          </a>
        </li>
        <li>
          <a [routerLink]="routes.addQuotations" class="dropdown-item d-flex align-items-center">
            <i class="isax isax-document-download me-2"></i>Quotation
          </a>
        </li>
        <li>
          <a [routerLink]="routes.addDeliveryChallan" class="dropdown-item d-flex align-items-center">
            <i class="isax isax-document-forward me-2"></i>Delivery Challan
          </a>
        </li>
      </ul>
    </div>
    <!-- /Add -->

    <ul class="menu-list">
      <li>
        <a [routerLink]="routes.customerAccountsettings" data-bs-toggle="tooltip" data-bs-placement="right" data-bs-title="Settings"><i class="isax isax-setting-25"></i></a>
      </li>
      <li>
        <a href="javascript:void(0);" data-bs-toggle="tooltip" data-bs-placement="right" data-bs-title="Documentation"><i class="isax isax-document-normal4"></i></a>						
      </li>
      <li>
        <a href="javascript:void(0);" data-bs-toggle="tooltip" data-bs-placement="right" data-bs-title="Changelog"><i class="isax isax-cloud-change5"></i></a>						
      </li>
      <li>
        <a [routerLink]="routes.login"><i class="isax isax-login-15"></i></a>				
      </li>
    </ul>
  </div>
  <div class="sidebar" id="sidebar-two">
    <!-- Logo -->
    <div class="sidebar-logo">
      <a [routerLink]="routes.index" class="logo logo-normal">
        <img src="assets/img/logo.svg" alt="Logo">
      </a>
      <a [routerLink]="routes.index" class="logo-small">
        <img src="assets/img/logo-small.svg" alt="Logo">
      </a>
      <a [routerLink]="routes.index" class="dark-logo">
        <img src="assets/img/logo-white.svg" alt="Logo">
      </a>
              
      <a id="toggle_btn" href="javascript:void(0);" (click)="toggleSidebar()">
        <i class="isax isax-menu-1"></i>
      </a>
    </div>
    <!-- /Logo -->
        
    <!-- Search -->
    <div class="sidebar-search">
      <div class="input-icon-end position-relative">
        <input type="text" class="form-control" placeholder="Search">
        <span class="input-icon-addon">
          <i class="isax isax-search-normal"></i>
        </span>
      </div>
    </div>
    <!-- /Search -->
<ng-scrollbar>
  <div class="sidebar-inner slimscroll">
    <div id="sidebar-menu" class="sidebar-menu">
      <ul>
        @for(mainMenus of side_bar_data;track mainMenus){
          <li>
            <ul>
              @for(menu of mainMenus.menu;track menu){
                @if(menu.hasSubRoute===true){
              <li class="submenu">
                  <a href="javascript:void(0);" (click)="expandSubMenus(menu)"
                  [ngClass]="{ 'subdrop': menu.showSubRoute === true}" [class.active]="page===menu.base || page===menu.base2">
                    <i class="isax text-dark" [class]="'isax-' + menu.icon"></i><span>{{menu.menuValue}}</span>
                    <span class="menu-arrow"></span>
                  </a>
                  <ul [ngClass]="
                  menu.showSubRoute === true
                    ? 'd-block'
                    : 'd-none'
                ">
                    <li>
                      @for(subMenu of menu.subMenus;track subMenu){
                        <a [routerLink]="subMenu.route" routerLinkActive="active">{{subMenu.menuValue}}</a>
                      }
                    </li>
                  </ul>
                </li>
                }
                @if(menu.hasSubRoute===false){
                  <li [class.active]="page===menu.base">
                    <a [routerLink]="menu.route" >
                      <i class="isax text-dark" [class]="'isax-' + menu.icon"></i><span>{{menu.menuValue}}</span>
                    </a>
                  </li>
                }
              }
            </ul>
          </li>
        }
      </ul>
      <div class="sidebar-footer" [hidden]="sidebarfooter">
        <div class="trial-item bg-white text-center border">
          <div class="bg-light p-3 text-center">
            <img src="assets/img/icons/upgrade.svg" alt="img">
          </div>
          <div class="p-2">
            <h6 class="fs-14 fw-semibold mb-1">Upgrade to More</h6>
            <p class="fs-13 mb-2">Subscribe to get more with Premium Features</p>
            <a [routerLink]="routes.customerPlanssettings" class="btn btn-sm btn-primary w-100 d-flex align-items-center justify-content-center"><i class="isax isax-crown5 me-1"></i>Upgrade</a>
          </div>
          <a href="javascript:void(0);" class="close-icon" (click)="closefooter()"><i class="fa-solid fa-x"></i></a>
        </div>
                      <ul class="menu-list">
                          <li>
                              <a [routerLink]="routes.customerAccountsettings" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="Settings"><i class="isax isax-setting-25"></i></a>
                          </li>
                          <li>
                              <a href="javascript:void(0);" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="Documentation"><i class="isax isax-document-normal4"></i></a>						
                          </li>
                          <li>
                              <a href="javascript:void(0);" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="Changelog"><i class="isax isax-cloud-change5"></i></a>						
                          </li>
                          <li>
                              <a [routerLink]="routes.login" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="Login"><i class="isax isax-login-15"></i></a>				
                          </li>
                      </ul>
      </div>
    </div>
  </div>
</ng-scrollbar>
  </div>


</div>
<!-- /Sidebar -->
        ` }]
  }], () => [{ type: Router }, { type: DataService }, { type: SideBarService }, { type: AuthService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SideMenuThreeComponent, { className: "SideMenuThreeComponent", filePath: "src/app/features/common/side-menus/side-menu-three/side-menu-three.component.ts", lineNumber: 18 });
})();

// src/app/features/common/side-menus/side-menu-two/side-menu-two.component.ts
var _c03 = (a0) => ({ "subdrop": a0 });
function SideMenuTwoComponent_For_67_For_3_Conditional_0_For_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 61);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const subMenu_r4 = ctx.$implicit;
    \u0275\u0275property("routerLink", subMenu_r4.route);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(subMenu_r4.menuValue);
  }
}
function SideMenuTwoComponent_For_67_For_3_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "li", 55)(1, "a", 57);
    \u0275\u0275listener("click", function SideMenuTwoComponent_For_67_For_3_Conditional_0_Template_a_click_1_listener() {
      \u0275\u0275restoreView(_r1);
      const menu_r2 = \u0275\u0275nextContext().$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.expandSubMenus(menu_r2));
    });
    \u0275\u0275element(2, "i", 58);
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275element(5, "span", 59);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "ul", 60)(7, "li");
    \u0275\u0275repeaterCreate(8, SideMenuTwoComponent_For_67_For_3_Conditional_0_For_9_Template, 2, 2, "a", 61, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const menu_r2 = \u0275\u0275nextContext().$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275classProp("active", ctx_r2.page === menu_r2.base || ctx_r2.page === menu_r2.base2);
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(7, _c03, menu_r2.showSubRoute === true));
    \u0275\u0275advance();
    \u0275\u0275classMap("isax-" + menu_r2.icon);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(menu_r2.menuValue);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngClass", menu_r2.showSubRoute === true ? "d-block" : "d-none");
    \u0275\u0275advance(2);
    \u0275\u0275repeater(menu_r2.subMenus);
  }
}
function SideMenuTwoComponent_For_67_For_3_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "li")(1, "a", 62);
    \u0275\u0275listener("click", function SideMenuTwoComponent_For_67_For_3_Conditional_1_Template_a_click_1_listener() {
      \u0275\u0275restoreView(_r5);
      const menu_r2 = \u0275\u0275nextContext().$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.expandSubMenus(menu_r2));
    });
    \u0275\u0275element(2, "i", 58);
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const menu_r2 = \u0275\u0275nextContext().$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("active", ctx_r2.page === menu_r2.base);
    \u0275\u0275advance();
    \u0275\u0275property("routerLink", menu_r2.route);
    \u0275\u0275advance();
    \u0275\u0275classMap("isax-" + menu_r2.icon);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(menu_r2.menuValue);
  }
}
function SideMenuTwoComponent_For_67_For_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, SideMenuTwoComponent_For_67_For_3_Conditional_0_Template, 10, 9, "li", 55);
    \u0275\u0275conditionalCreate(1, SideMenuTwoComponent_For_67_For_3_Conditional_1_Template, 5, 6, "li", 56);
  }
  if (rf & 2) {
    const menu_r2 = ctx.$implicit;
    \u0275\u0275conditional(menu_r2.hasSubRoute === true ? 0 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(menu_r2.hasSubRoute === false ? 1 : -1);
  }
}
function SideMenuTwoComponent_For_67_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li")(1, "ul");
    \u0275\u0275repeaterCreate(2, SideMenuTwoComponent_For_67_For_3_Template, 2, 2, null, null, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const mainMenus_r6 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275repeater(mainMenus_r6.menu);
  }
}
var SideMenuTwoComponent = class _SideMenuTwoComponent {
  router;
  data;
  sideBar;
  auth;
  routes = routes;
  headerSidebarStyle = "1";
  primarySkinStyle = "1";
  mobileSidebar = false;
  base = "dashboard";
  page = "";
  last = "";
  currentRoute = "";
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  side_bar_data = [];
  toggleSidebar() {
    this.sideBar.switchSideMenuPosition();
  }
  constructor(router, data, sideBar, auth) {
    this.router = router;
    this.data = data;
    this.sideBar = sideBar;
    this.auth = auth;
    router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.getRoutes(event);
      }
    });
    this.getRoutes(this.router);
    this.sideBar.headerSidebarStyle.subscribe((res) => {
      this.headerSidebarStyle = res;
    });
    this.sideBar.primarySkinStyle.subscribe((res) => {
      this.primarySkinStyle = res;
    });
    this.data.getSideBar2Data.subscribe((res) => {
      this.side_bar_data = res;
    });
  }
  getRoutes(route) {
    const splitVal = route.url.split("/");
    this.currentRoute = route.url;
    this.base = splitVal[1];
    this.page = splitVal[2];
    this.last = splitVal[3];
  }
  miniSideBarMouseHover(position) {
    if (position == "over") {
      this.sideBar.expandSideBar.next("true");
    } else {
      this.sideBar.expandSideBar.next("false");
    }
  }
  expandSubMenus(menu) {
    sessionStorage.setItem("menuValue", menu.menuValue);
    this.side_bar_data.map((mainMenus) => {
      mainMenus.menu.map((resMenu) => {
        if (resMenu.menuValue == menu.menuValue) {
          menu.showSubRoute = !menu.showSubRoute;
        } else {
          resMenu.showSubRoute = false;
        }
      });
    });
  }
  ngOnDestroy() {
    this.sideBar.resetMiniSidebar();
  }
  logOut() {
    this.auth.logout();
  }
  navigateAuth(menuValue) {
    if (menuValue == "Authentication")
      localStorage.removeItem("authenticated");
  }
  sidebarfooter = false;
  closefooter() {
    this.sidebarfooter = true;
  }
  static \u0275fac = function SideMenuTwoComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _SideMenuTwoComponent)(\u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(DataService), \u0275\u0275directiveInject(SideBarService), \u0275\u0275directiveInject(AuthService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SideMenuTwoComponent, selectors: [["app-side-menu-two"]], decls: 95, vars: 16, consts: [["id", "two-col-sidebar", 1, "two-col-sidebar", "d-block", 3, "mouseover", "focus", "mouseout", "blur"], [1, "twocol-mini"], [1, "dropdown"], ["data-bs-toggle", "dropdown", "href", "javascript:void(0);", "role", "button", "data-bs-display", "static", "data-bs-reference", "parent", 1, "btn", "btn-primary", "bg-gradient", "btn-sm", "btn-icon", "rounded-circle", "d-flex", "align-items-center", "justify-content-center"], [1, "isax", "isax-add"], [1, "dropdown-menu", "dropdown-menu-start"], [1, "dropdown-item", "d-flex", "align-items-center", 3, "routerLink"], [1, "isax", "isax-document-text-1", "me-2"], [1, "isax", "isax-money-send", "me-2"], [1, "isax", "isax-money-add", "me-2"], [1, "isax", "isax-money-recive", "me-2"], [1, "isax", "isax-document", "me-2"], [1, "isax", "isax-document-download", "me-2"], [1, "isax", "isax-document-forward", "me-2"], [1, "menu-list"], ["data-bs-toggle", "tooltip", "data-bs-placement", "right", "data-bs-title", "Settings", 3, "routerLink"], [1, "isax", "isax-setting-25"], ["href", "javascript:void(0);", "data-bs-toggle", "tooltip", "data-bs-placement", "right", "data-bs-title", "Documentation"], [1, "isax", "isax-document-normal4"], ["href", "javascript:void(0);", "data-bs-toggle", "tooltip", "data-bs-placement", "right", "data-bs-title", "Changelog"], [1, "isax", "isax-cloud-change5"], [3, "routerLink"], [1, "isax", "isax-login-15"], ["id", "sidebar-two", 1, "sidebar"], [1, "sidebar-logo"], [1, "logo", "logo-normal", 3, "routerLink"], ["src", "assets/img/logo.svg", "alt", "Logo"], [1, "logo-small", 3, "routerLink"], ["src", "assets/img/logo-small.svg", "alt", "Logo"], [1, "dark-logo", 3, "routerLink"], ["src", "assets/img/logo-white.svg", "alt", "Logo"], ["id", "toggle_btn", "href", "javascript:void(0);", 3, "click"], [1, "isax", "isax-menu-1"], [1, "sidebar-search"], [1, "input-icon-end", "position-relative"], ["type", "text", "placeholder", "Search", 1, "form-control"], [1, "input-icon-addon"], [1, "isax", "isax-search-normal"], [1, "sidebar-inner", "slimscroll"], ["id", "sidebar-menu", 1, "sidebar-menu"], [1, "sidebar-footer", 3, "hidden"], [1, "trial-item", "bg-white", "text-center", "border"], [1, "bg-light", "p-3", "text-center"], ["src", "assets/img/icons/upgrade.svg", "alt", "img"], [1, "p-2"], [1, "fs-14", "fw-semibold", "mb-1"], [1, "fs-13", "mb-2"], [1, "btn", "btn-sm", "btn-primary", "w-100", "d-flex", "align-items-center", "justify-content-center", 3, "routerLink"], [1, "isax", "isax-crown5", "me-1"], ["href", "javascript:void(0);", 1, "close-icon", 3, "click"], [1, "fa-solid", "fa-x"], ["data-bs-toggle", "tooltip", "data-bs-placement", "top", "data-bs-title", "Settings", 3, "routerLink"], ["href", "javascript:void(0);", "data-bs-toggle", "tooltip", "data-bs-placement", "top", "data-bs-title", "Documentation"], ["href", "javascript:void(0);", "data-bs-toggle", "tooltip", "data-bs-placement", "top", "data-bs-title", "Changelog"], ["data-bs-toggle", "tooltip", "data-bs-placement", "top", "data-bs-title", "Login", 3, "routerLink"], [1, "submenu"], [3, "active"], ["href", "javascript:void(0);", 3, "click", "ngClass"], [1, "isax", "text-dark"], [1, "menu-arrow"], [3, "ngClass"], ["routerLinkActive", "active", 3, "routerLink"], [3, "click", "routerLink"]], template: function SideMenuTwoComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0);
      \u0275\u0275listener("mouseover", function SideMenuTwoComponent_Template_div_mouseover_0_listener() {
        return ctx.miniSideBarMouseHover("over");
      })("focus", function SideMenuTwoComponent_Template_div_focus_0_listener() {
        return ctx.miniSideBarMouseHover("over");
      })("mouseout", function SideMenuTwoComponent_Template_div_mouseout_0_listener() {
        return ctx.miniSideBarMouseHover("out");
      })("blur", function SideMenuTwoComponent_Template_div_blur_0_listener() {
        return ctx.miniSideBarMouseHover("out");
      });
      \u0275\u0275elementStart(1, "div", 1)(2, "div", 2)(3, "a", 3);
      \u0275\u0275element(4, "i", 4);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "ul", 5)(6, "li")(7, "a", 6);
      \u0275\u0275element(8, "i", 7);
      \u0275\u0275text(9, "Invoice ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(10, "li")(11, "a", 6);
      \u0275\u0275element(12, "i", 8);
      \u0275\u0275text(13, "Expense ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(14, "li")(15, "a", 6);
      \u0275\u0275element(16, "i", 9);
      \u0275\u0275text(17, "Credit Notes ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(18, "li")(19, "a", 6);
      \u0275\u0275element(20, "i", 10);
      \u0275\u0275text(21, "Debit Notes ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(22, "li")(23, "a", 6);
      \u0275\u0275element(24, "i", 11);
      \u0275\u0275text(25, "Purchase Order ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(26, "li")(27, "a", 6);
      \u0275\u0275element(28, "i", 12);
      \u0275\u0275text(29, "Quotation ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(30, "li")(31, "a", 6);
      \u0275\u0275element(32, "i", 13);
      \u0275\u0275text(33, "Delivery Challan ");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(34, "ul", 14)(35, "li")(36, "a", 15);
      \u0275\u0275element(37, "i", 16);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(38, "li")(39, "a", 17);
      \u0275\u0275element(40, "i", 18);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(41, "li")(42, "a", 19);
      \u0275\u0275element(43, "i", 20);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(44, "li")(45, "a", 21);
      \u0275\u0275element(46, "i", 22);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(47, "div", 23)(48, "div", 24)(49, "a", 25);
      \u0275\u0275element(50, "img", 26);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(51, "a", 27);
      \u0275\u0275element(52, "img", 28);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(53, "a", 29);
      \u0275\u0275element(54, "img", 30);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(55, "a", 31);
      \u0275\u0275listener("click", function SideMenuTwoComponent_Template_a_click_55_listener() {
        return ctx.toggleSidebar();
      });
      \u0275\u0275element(56, "i", 32);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(57, "div", 33)(58, "div", 34);
      \u0275\u0275element(59, "input", 35);
      \u0275\u0275elementStart(60, "span", 36);
      \u0275\u0275element(61, "i", 37);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(62, "ng-scrollbar")(63, "div", 38)(64, "div", 39)(65, "ul");
      \u0275\u0275repeaterCreate(66, SideMenuTwoComponent_For_67_Template, 4, 0, "li", null, \u0275\u0275repeaterTrackByIdentity);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(68, "div", 40)(69, "div", 41)(70, "div", 42);
      \u0275\u0275element(71, "img", 43);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(72, "div", 44)(73, "h6", 45);
      \u0275\u0275text(74, "Upgrade to More");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(75, "p", 46);
      \u0275\u0275text(76, "Subscribe to get more with Premium Features");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(77, "a", 47);
      \u0275\u0275element(78, "i", 48);
      \u0275\u0275text(79, "Upgrade");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(80, "a", 49);
      \u0275\u0275listener("click", function SideMenuTwoComponent_Template_a_click_80_listener() {
        return ctx.closefooter();
      });
      \u0275\u0275element(81, "i", 50);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(82, "ul", 14)(83, "li")(84, "a", 51);
      \u0275\u0275element(85, "i", 16);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(86, "li")(87, "a", 52);
      \u0275\u0275element(88, "i", 18);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(89, "li")(90, "a", 53);
      \u0275\u0275element(91, "i", 20);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(92, "li")(93, "a", 54);
      \u0275\u0275element(94, "i", 22);
      \u0275\u0275elementEnd()()()()()()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(7);
      \u0275\u0275property("routerLink", ctx.routes.addInvoice);
      \u0275\u0275advance(4);
      \u0275\u0275property("routerLink", ctx.routes.expenses);
      \u0275\u0275advance(4);
      \u0275\u0275property("routerLink", ctx.routes.addCreditNotes);
      \u0275\u0275advance(4);
      \u0275\u0275property("routerLink", ctx.routes.addDebitNotes);
      \u0275\u0275advance(4);
      \u0275\u0275property("routerLink", ctx.routes.addPurchaseOrder);
      \u0275\u0275advance(4);
      \u0275\u0275property("routerLink", ctx.routes.addQuotations);
      \u0275\u0275advance(4);
      \u0275\u0275property("routerLink", ctx.routes.addDeliveryChallan);
      \u0275\u0275advance(5);
      \u0275\u0275property("routerLink", ctx.routes.customerAccountsettings);
      \u0275\u0275advance(9);
      \u0275\u0275property("routerLink", ctx.routes.login);
      \u0275\u0275advance(4);
      \u0275\u0275property("routerLink", ctx.routes.index);
      \u0275\u0275advance(2);
      \u0275\u0275property("routerLink", ctx.routes.index);
      \u0275\u0275advance(2);
      \u0275\u0275property("routerLink", ctx.routes.index);
      \u0275\u0275advance(13);
      \u0275\u0275repeater(ctx.side_bar_data);
      \u0275\u0275advance(2);
      \u0275\u0275property("hidden", ctx.sidebarfooter);
      \u0275\u0275advance(9);
      \u0275\u0275property("routerLink", ctx.routes.customerPlanssettings);
      \u0275\u0275advance(7);
      \u0275\u0275property("routerLink", ctx.routes.customerAccountsettings);
      \u0275\u0275advance(9);
      \u0275\u0275property("routerLink", ctx.routes.login);
    }
  }, dependencies: [CommonModule, NgClass, RouterLink, NgScrollbarModule, NgScrollbar, RouterLinkActive], styles: ["\n\n  .custom-scrollbars {\n  background-color: rgb(117, 57, 255) !important;\n}\n  .custom-scrollbars:hover, \n  .custom-scrollbars:active {\n  background-color: rgb(117, 57, 255) !important;\n}\n/*# sourceMappingURL=side-menu-two.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SideMenuTwoComponent, [{
    type: Component,
    args: [{ selector: "app-side-menu-two", imports: [CommonModule, RouterLink, NgScrollbarModule, RouterLinkActive], template: `<!-- Sidebar -->
<div
class="two-col-sidebar d-block" id="two-col-sidebar"
  (mouseover)="miniSideBarMouseHover('over')"
  (focus)="miniSideBarMouseHover('over')"
  (mouseout)="miniSideBarMouseHover('out')"
  (blur)="miniSideBarMouseHover('out')"
  >
  <div class="twocol-mini">
    <!-- Add -->
    <div class="dropdown">
      <a class="btn btn-primary bg-gradient btn-sm btn-icon rounded-circle d-flex align-items-center justify-content-center" data-bs-toggle="dropdown" href="javascript:void(0);" role="button"  data-bs-display="static" data-bs-reference="parent">
        <i class="isax isax-add"></i>
      </a>
      <ul class="dropdown-menu dropdown-menu-start">
        <li>
          <a [routerLink]="routes.addInvoice" class="dropdown-item d-flex align-items-center">
            <i class="isax isax-document-text-1 me-2"></i>Invoice
          </a>
        </li>
        <li>
          <a [routerLink]="routes.expenses" class="dropdown-item d-flex align-items-center">
            <i class="isax isax-money-send me-2"></i>Expense
          </a>
        </li>
        <li>
          <a [routerLink]="routes.addCreditNotes" class="dropdown-item d-flex align-items-center">
            <i class="isax isax-money-add me-2"></i>Credit Notes
          </a>
        </li>
        <li>
          <a [routerLink]="routes.addDebitNotes" class="dropdown-item d-flex align-items-center">
            <i class="isax isax-money-recive me-2"></i>Debit Notes
          </a>
        </li>
        <li>
          <a [routerLink]="routes.addPurchaseOrder" class="dropdown-item d-flex align-items-center">
            <i class="isax isax-document me-2"></i>Purchase Order
          </a>
        </li>
        <li>
          <a [routerLink]="routes.addQuotations" class="dropdown-item d-flex align-items-center">
            <i class="isax isax-document-download me-2"></i>Quotation
          </a>
        </li>
        <li>
          <a [routerLink]="routes.addDeliveryChallan" class="dropdown-item d-flex align-items-center">
            <i class="isax isax-document-forward me-2"></i>Delivery Challan
          </a>
        </li>
      </ul>
    </div>
    <!-- /Add -->

    <ul class="menu-list">
      <li>
        <a [routerLink]="routes.customerAccountsettings" data-bs-toggle="tooltip" data-bs-placement="right" data-bs-title="Settings"><i class="isax isax-setting-25"></i></a>
      </li>
      <li>
        <a href="javascript:void(0);" data-bs-toggle="tooltip" data-bs-placement="right" data-bs-title="Documentation"><i class="isax isax-document-normal4"></i></a>						
      </li>
      <li>
        <a href="javascript:void(0);" data-bs-toggle="tooltip" data-bs-placement="right" data-bs-title="Changelog"><i class="isax isax-cloud-change5"></i></a>						
      </li>
      <li>
        <a [routerLink]="routes.login"><i class="isax isax-login-15"></i></a>				
      </li>
    </ul>
  </div>
  <div class="sidebar" id="sidebar-two">
    <!-- Logo -->
    <div class="sidebar-logo">
      <a [routerLink]="routes.index" class="logo logo-normal">
        <img src="assets/img/logo.svg" alt="Logo">
      </a>
      <a [routerLink]="routes.index" class="logo-small">
        <img src="assets/img/logo-small.svg" alt="Logo">
      </a>
      <a [routerLink]="routes.index" class="dark-logo">
        <img src="assets/img/logo-white.svg" alt="Logo">
      </a>
              
      <a id="toggle_btn" href="javascript:void(0);" (click)="toggleSidebar()">
        <i class="isax isax-menu-1"></i>
      </a>
    </div>
    <!-- /Logo -->
        
    <!-- Search -->
    <div class="sidebar-search">
      <div class="input-icon-end position-relative">
        <input type="text" class="form-control" placeholder="Search">
        <span class="input-icon-addon">
          <i class="isax isax-search-normal"></i>
        </span>
      </div>
    </div>
    <!-- /Search -->
<ng-scrollbar>
  <div class="sidebar-inner slimscroll">
    <div id="sidebar-menu" class="sidebar-menu">
      <ul>
        @for(mainMenus of side_bar_data;track mainMenus){
          <li>
            <ul>
              @for(menu of mainMenus.menu;track menu){
                @if(menu.hasSubRoute===true){
              <li class="submenu">
                  <a href="javascript:void(0);" (click)="expandSubMenus(menu)"
                  [ngClass]="{ 'subdrop': menu.showSubRoute === true}" [class.active]="page===menu.base || page===menu.base2">
                    <i class="isax text-dark" [class]="'isax-' + menu.icon"></i><span>{{menu.menuValue}}</span>
                    <span class="menu-arrow"></span>
                  </a>
                  <ul [ngClass]="
                  menu.showSubRoute === true
                    ? 'd-block'
                    : 'd-none'
                ">
                    <li>
                      @for(subMenu of menu.subMenus;track subMenu){
                        <a [routerLink]="subMenu.route" routerLinkActive="active" >{{subMenu.menuValue}}</a>
                      }
                    </li>
                  </ul>
                </li>
                }
                @if(menu.hasSubRoute===false){
                  <li [class.active]="page===menu.base">
                    <a [routerLink]="menu.route" (click)="expandSubMenus(menu)">
                      <i class="isax text-dark" [class]="'isax-' + menu.icon"></i><span>{{menu.menuValue}}</span>
                    </a>
                  </li>
                }
              }
            </ul>
          </li>
        }
      </ul>
      <div class="sidebar-footer" [hidden]="sidebarfooter">
        <div class="trial-item bg-white text-center border">
          <div class="bg-light p-3 text-center">
            <img src="assets/img/icons/upgrade.svg" alt="img">
          </div>
          <div class="p-2">
            <h6 class="fs-14 fw-semibold mb-1">Upgrade to More</h6>
            <p class="fs-13 mb-2">Subscribe to get more with Premium Features</p>
            <a [routerLink]="routes.customerPlanssettings" class="btn btn-sm btn-primary w-100 d-flex align-items-center justify-content-center"><i class="isax isax-crown5 me-1"></i>Upgrade</a>
          </div>
          <a href="javascript:void(0);" class="close-icon" (click)="closefooter()"><i class="fa-solid fa-x"></i></a>
        </div>
                      <ul class="menu-list">
                          <li>
                              <a [routerLink]="routes.customerAccountsettings" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="Settings"><i class="isax isax-setting-25"></i></a>
                          </li>
                          <li>
                              <a href="javascript:void(0);" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="Documentation"><i class="isax isax-document-normal4"></i></a>						
                          </li>
                          <li>
                              <a href="javascript:void(0);" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="Changelog"><i class="isax isax-cloud-change5"></i></a>						
                          </li>
                          <li>
                              <a [routerLink]="routes.login" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="Login"><i class="isax isax-login-15"></i></a>				
                          </li>
                      </ul>
      </div>
    </div>
  </div>
</ng-scrollbar>
  </div>


</div>
<!-- /Sidebar -->
        `, styles: ["/* src/app/features/common/side-menus/side-menu-two/side-menu-two.component.scss */\n::ng-deep .custom-scrollbars {\n  background-color: rgb(117, 57, 255) !important;\n}\n::ng-deep .custom-scrollbars:hover,\n::ng-deep .custom-scrollbars:active {\n  background-color: rgb(117, 57, 255) !important;\n}\n/*# sourceMappingURL=side-menu-two.component.css.map */\n"] }]
  }], () => [{ type: Router }, { type: DataService }, { type: SideBarService }, { type: AuthService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SideMenuTwoComponent, { className: "SideMenuTwoComponent", filePath: "src/app/features/common/side-menus/side-menu-two/side-menu-two.component.ts", lineNumber: 16 });
})();

// src/app/features/common/side-menus/side-menu-one/side-menu-one.component.ts
var _c04 = (a0) => ({ "min-height": a0 });
var _c12 = (a0) => ({ "display": a0 });
var _c22 = (a0) => ({ "subdrop": a0 });
var _c32 = (a0) => ({ subdrop: a0 });
function SideMenuOneComponent_For_67_For_6_Conditional_0_For_9_Conditional_0_For_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li")(1, "a", 74);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const subMenu2_r6 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("routerLink", subMenu2_r6.route);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(subMenu2_r6.menuValue);
  }
}
function SideMenuOneComponent_For_67_For_6_Conditional_0_For_9_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "li", 73)(1, "a", 75);
    \u0275\u0275listener("click", function SideMenuOneComponent_For_67_For_6_Conditional_0_For_9_Conditional_0_Template_a_click_1_listener() {
      \u0275\u0275restoreView(_r4);
      const subMenu_r5 = \u0275\u0275nextContext().$implicit;
      const ctx_r2 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r2.openSubmenuOne(subMenu_r5));
    });
    \u0275\u0275text(2);
    \u0275\u0275element(3, "span", 51);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "ul", 72);
    \u0275\u0275repeaterCreate(5, SideMenuOneComponent_For_67_For_6_Conditional_0_For_9_Conditional_0_For_6_Template, 3, 2, "li", null, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const subMenu_r5 = \u0275\u0275nextContext().$implicit;
    const ctx_r2 = \u0275\u0275nextContext(4);
    \u0275\u0275advance();
    \u0275\u0275classProp("active", ctx_r2.page === subMenu_r5.page)("active", ctx_r2.page === subMenu_r5.page);
    \u0275\u0275property("routerLink", subMenu_r5.route)("ngClass", \u0275\u0275pureFunction1(8, _c32, ctx_r2.openSubmenuOneItem === subMenu_r5));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(subMenu_r5.menuValue);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngClass", ctx_r2.openSubmenuOneItem === subMenu_r5 ? "d-block" : "d-none");
    \u0275\u0275advance();
    \u0275\u0275repeater(subMenu_r5.subMenus);
  }
}
function SideMenuOneComponent_For_67_For_6_Conditional_0_For_9_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "a", 76);
    \u0275\u0275listener("click", function SideMenuOneComponent_For_67_For_6_Conditional_0_For_9_Conditional_1_Template_a_click_0_listener() {
      \u0275\u0275restoreView(_r7);
      const subMenu_r5 = \u0275\u0275nextContext().$implicit;
      const ctx_r2 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r2.openSubmenuOne(subMenu_r5));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const subMenu_r5 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("routerLink", subMenu_r5.route);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(subMenu_r5.menuValue);
  }
}
function SideMenuOneComponent_For_67_For_6_Conditional_0_For_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, SideMenuOneComponent_For_67_For_6_Conditional_0_For_9_Conditional_0_Template, 7, 10, "li", 73)(1, SideMenuOneComponent_For_67_For_6_Conditional_0_For_9_Conditional_1_Template, 2, 2, "a", 74);
  }
  if (rf & 2) {
    const subMenu_r5 = ctx.$implicit;
    \u0275\u0275conditional(subMenu_r5.hasSubRouteTwo2 === true ? 0 : 1);
  }
}
function SideMenuOneComponent_For_67_For_6_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "li", 46)(1, "a", 70);
    \u0275\u0275listener("click", function SideMenuOneComponent_For_67_For_6_Conditional_0_Template_a_click_1_listener() {
      \u0275\u0275restoreView(_r1);
      const menu_r2 = \u0275\u0275nextContext().$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.expandSubMenus(menu_r2));
    });
    \u0275\u0275element(2, "i", 71);
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275element(5, "span", 49);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "ul", 72)(7, "li");
    \u0275\u0275repeaterCreate(8, SideMenuOneComponent_For_67_For_6_Conditional_0_For_9_Template, 2, 1, null, null, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const menu_r2 = \u0275\u0275nextContext().$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275classProp("active", ctx_r2.base === menu_r2.base || ctx_r2.base === menu_r2.base1);
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(7, _c22, menu_r2.showSubRoute === true));
    \u0275\u0275advance();
    \u0275\u0275classMap("isax-" + menu_r2.icon);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(menu_r2.menuValue);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngClass", menu_r2.showSubRoute === true ? "d-block" : "d-none");
    \u0275\u0275advance(2);
    \u0275\u0275repeater(menu_r2.subMenus);
  }
}
function SideMenuOneComponent_For_67_For_6_Conditional_1_For_8_For_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li")(1, "a", 21);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const subMenu2_r11 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(5);
    \u0275\u0275advance();
    \u0275\u0275classProp("active", ctx_r2.last === subMenu2_r11.base);
    \u0275\u0275property("routerLink", subMenu2_r11.route);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(subMenu2_r11.menuValue);
  }
}
function SideMenuOneComponent_For_67_For_6_Conditional_1_For_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "li", 73)(1, "a", 70);
    \u0275\u0275listener("click", function SideMenuOneComponent_For_67_For_6_Conditional_1_For_8_Template_a_click_1_listener() {
      const subMenu_r10 = \u0275\u0275restoreView(_r9).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r2.openSubmenuOne(subMenu_r10));
    });
    \u0275\u0275text(2);
    \u0275\u0275element(3, "span", 49);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "ul", 72);
    \u0275\u0275repeaterCreate(5, SideMenuOneComponent_For_67_For_6_Conditional_1_For_8_For_6_Template, 3, 4, "li", null, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const subMenu_r10 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(4);
    \u0275\u0275advance();
    \u0275\u0275classProp("active", ctx_r2.page === subMenu_r10.page);
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(5, _c32, ctx_r2.openSubmenuOneItem === subMenu_r10));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(subMenu_r10.menuValue);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngClass", ctx_r2.openSubmenuOneItem === subMenu_r10 ? "d-block" : "d-none");
    \u0275\u0275advance();
    \u0275\u0275repeater(subMenu_r10.subMenus);
  }
}
function SideMenuOneComponent_For_67_For_6_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "li", 46)(1, "a", 70);
    \u0275\u0275listener("click", function SideMenuOneComponent_For_67_For_6_Conditional_1_Template_a_click_1_listener() {
      \u0275\u0275restoreView(_r8);
      const menu_r2 = \u0275\u0275nextContext().$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.expandSubMenus(menu_r2));
    });
    \u0275\u0275element(2, "i", 71);
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275element(5, "span", 49);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "ul", 72);
    \u0275\u0275repeaterCreate(7, SideMenuOneComponent_For_67_For_6_Conditional_1_For_8_Template, 7, 7, "li", 73, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const menu_r2 = \u0275\u0275nextContext().$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275classProp("active", ctx_r2.base === menu_r2.base);
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(7, _c22, menu_r2.showSubRoute === true));
    \u0275\u0275advance();
    \u0275\u0275classMap("isax-" + menu_r2.icon);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(menu_r2.menuValue);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngClass", menu_r2.showSubRoute === true ? "d-block" : "d-none");
    \u0275\u0275advance();
    \u0275\u0275repeater(menu_r2.subMenus);
  }
}
function SideMenuOneComponent_For_67_For_6_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "li")(1, "a", 77);
    \u0275\u0275listener("click", function SideMenuOneComponent_For_67_For_6_Conditional_2_Template_a_click_1_listener() {
      \u0275\u0275restoreView(_r12);
      const menu_r2 = \u0275\u0275nextContext().$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.expandSubMenus(menu_r2));
    });
    \u0275\u0275element(2, "i", 71);
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const menu_r2 = \u0275\u0275nextContext().$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("active", ctx_r2.base === menu_r2.base);
    \u0275\u0275advance();
    \u0275\u0275property("routerLink", menu_r2.route);
    \u0275\u0275advance();
    \u0275\u0275classMap("isax-" + menu_r2.icon);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(menu_r2.menuValue);
  }
}
function SideMenuOneComponent_For_67_For_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, SideMenuOneComponent_For_67_For_6_Conditional_0_Template, 10, 9, "li", 46);
    \u0275\u0275conditionalCreate(1, SideMenuOneComponent_For_67_For_6_Conditional_1_Template, 9, 9, "li", 46);
    \u0275\u0275conditionalCreate(2, SideMenuOneComponent_For_67_For_6_Conditional_2_Template, 5, 6, "li", 69);
  }
  if (rf & 2) {
    const menu_r2 = ctx.$implicit;
    \u0275\u0275conditional(menu_r2.hasSubRoute === true ? 0 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(menu_r2.hasSubRouteTwo === true ? 1 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(menu_r2.hasSubRoute === false ? 2 : -1);
  }
}
function SideMenuOneComponent_For_67_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li", 40)(1, "span");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(3, "li")(4, "ul");
    \u0275\u0275repeaterCreate(5, SideMenuOneComponent_For_67_For_6_Template, 3, 3, null, null, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const mainMenus_r13 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(mainMenus_r13.tittle);
    \u0275\u0275advance(3);
    \u0275\u0275repeater(mainMenus_r13.menu);
  }
}
var SideMenuOneComponent = class _SideMenuOneComponent {
  router;
  data;
  sideBar;
  auth;
  perm;
  routes = routes;
  headerSidebarStyle = "1";
  primarySkinStyle = "0";
  mobileSidebar = false;
  multilevel = [false, false, false];
  toggleSidebar() {
    this.sideBar.switchSideMenuPosition();
  }
  base = "index";
  page = "";
  last = "";
  currentRoute = "";
  openMenuItem = null;
  openSubmenuOneItem = null;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  side_bar_data = signal([], ...ngDevMode ? [{ debugName: "side_bar_data" }] : []);
  side_bar_data1 = [];
  constructor(router, data, sideBar, auth, perm) {
    this.router = router;
    this.data = data;
    this.sideBar = sideBar;
    this.auth = auth;
    this.perm = perm;
    router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.getRoutes(event);
      }
    });
    this.getRoutes(this.router);
    this.sideBar.headerSidebarStyle.subscribe((res) => {
      this.headerSidebarStyle = res;
    });
    this.sideBar.primarySkinStyle.subscribe((res) => {
      this.primarySkinStyle = res;
    });
    this.sideBar.toggleMobileSideBar.subscribe((res) => {
      if (res == "true") {
        this.mobileSidebar = true;
      } else {
        this.mobileSidebar = false;
      }
    });
    this.data.getSideBarData.subscribe((res) => {
    });
    effect(() => {
      const _ = this.perm.permissions();
      const allMenus = this.data.sideBar;
      this.side_bar_data.set(filterSideBar(allMenus, this.perm));
    });
  }
  getRoutes(route) {
    const splitVal = route.url.split("/");
    this.currentRoute = route.url;
    this.base = splitVal[1];
    this.page = splitVal[2];
    this.last = splitVal[3];
  }
  miniSideBarMouseHover(position) {
    if (position == "over") {
      this.sideBar.expandSideBar.next("true");
    } else {
      this.sideBar.expandSideBar.next("false");
    }
  }
  expandSubMenus(menu) {
    sessionStorage.setItem("menuValue", menu.menuValue);
    this.side_bar_data().map((mainMenus) => {
      mainMenus.menu.map((resMenu) => {
        if (resMenu.menuValue == menu.menuValue) {
          menu.showSubRoute = !menu.showSubRoute;
        } else {
          resMenu.showSubRoute = false;
        }
      });
    });
  }
  isOpen = false;
  expandSubMenusActive() {
    const activeMenu = sessionStorage.getItem("menuValue");
    if (!Array.isArray(this.side_bar_data)) {
      console.warn("side_bar_data is not initialized");
      return;
    }
    this.side_bar_data.forEach((mainMenu) => {
      if (!Array.isArray(mainMenu.menu))
        return;
      mainMenu.menu.forEach((resMenu) => {
        if (activeMenu) {
          resMenu.showSubRoute = resMenu.menuValue === activeMenu;
        } else {
          resMenu.showSubRoute = resMenu.base === "index";
        }
      });
    });
    this.isOpen = !activeMenu;
  }
  openMenu(menu) {
    if (this.openMenuItem === menu) {
      this.openMenuItem = null;
    } else {
      this.openMenuItem = menu;
    }
  }
  openSubmenuOne(subMenus) {
    if (this.openSubmenuOneItem === subMenus) {
      this.openSubmenuOneItem = null;
    } else {
      this.openSubmenuOneItem = subMenus;
    }
  }
  navigateAuth(menuValue) {
    if (menuValue == "Authentication")
      localStorage.removeItem("authenticated");
  }
  ngOnInit() {
    this.expandSubMenusActive();
  }
  ngOnDestroy() {
    this.sideBar.resetMiniSidebar();
  }
  logOut() {
    this.auth.logout();
  }
  multiLevel1 = false;
  multiLevel2 = false;
  multiLevel3 = false;
  multiLevelOne() {
    this.multiLevel1 = !this.multiLevel1;
  }
  multiLevelTwo() {
    this.multiLevel2 = !this.multiLevel2;
  }
  multiLevelThree() {
    this.multiLevel3 = !this.multiLevel3;
    this.multiLevel2 = true;
  }
  sidebarfooter = false;
  closefooter() {
    this.sidebarfooter = true;
  }
  static \u0275fac = function SideMenuOneComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _SideMenuOneComponent)(\u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(DataService), \u0275\u0275directiveInject(SideBarService), \u0275\u0275directiveInject(AuthService), \u0275\u0275directiveInject(PermissionService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SideMenuOneComponent, selectors: [["app-side-menu-one"]], decls: 145, vars: 28, consts: [["id", "two-col-sidebar", 1, "two-col-sidebar", "d-block", 3, "mouseover", "focus", "mouseout", "blur"], [1, "twocol-mini"], [1, "dropdown"], ["data-bs-toggle", "dropdown", "href", "javascript:void(0);", "role", "button", "data-bs-display", "static", "data-bs-reference", "parent", 1, "btn", "btn-primary", "bg-gradient", "btn-sm", "btn-icon", "rounded-circle", "d-flex", "align-items-center", "justify-content-center"], [1, "isax", "isax-add"], [1, "dropdown-menu", "dropdown-menu-start"], [1, "dropdown-item", "d-flex", "align-items-center", 3, "routerLink"], [1, "isax", "isax-document-text-1", "me-2"], [1, "isax", "isax-money-send", "me-2"], [1, "isax", "isax-money-add", "me-2"], [1, "isax", "isax-money-recive", "me-2"], [1, "isax", "isax-document", "me-2"], [1, "isax", "isax-document-download", "me-2"], [1, "isax", "isax-document-forward", "me-2"], [1, "menu-list"], ["data-bs-toggle", "tooltip", "data-bs-placement", "right", "data-bs-title", "Settings", 3, "routerLink"], [1, "isax", "isax-setting-25"], ["href", "javascript:void(0);", "data-bs-toggle", "tooltip", "data-bs-placement", "right", "data-bs-title", "Documentation"], [1, "isax", "isax-document-normal4"], ["href", "javascript:void(0);", "data-bs-toggle", "tooltip", "data-bs-placement", "right", "data-bs-title", "Changelog"], [1, "isax", "isax-cloud-change5"], [3, "routerLink"], [1, "isax", "isax-login-15"], ["id", "sidebar-two", 1, "sidebar"], [1, "sidebar-logo"], [1, "logo", "logo-normal", 3, "routerLink"], ["src", "assets/img/logo.svg", "alt", "Logo"], [1, "logo-small", 3, "routerLink"], ["src", "assets/img/logo-small.svg", "alt", "Logo"], [1, "dark-logo", 3, "routerLink"], ["src", "assets/img/logo-white.svg", "alt", "Logo"], ["id", "toggle_btn", "href", "javascript:void(0);", 3, "click"], [1, "isax", "isax-menu-1"], [1, "sidebar-search"], [1, "input-icon-end", "position-relative"], ["type", "text", "placeholder", "Search", 1, "form-control"], [1, "input-icon-addon"], [1, "isax", "isax-search-normal"], [1, "sidebar-inner", "slimscroll"], ["id", "sidebar-menu", 1, "sidebar-menu"], [1, "menu-title"], [3, "ngStyle"], ["href", "javascript:void(0);"], [1, "isax", "isax-document-code-25"], [1, "isax", "isax-programming-arrows5"], [1, "badge", "bg-primary", "ms-2", "badge-sm", "text-white", "fs-12", "fw-medium"], [1, "submenu"], ["href", "javascript:void(0);", 3, "click"], [1, "isax", "isax-layer5"], [1, "menu-arrow"], [1, "submenu", "submenu-two", 3, "click"], [1, "menu-arrow", "inside-submenu"], [1, "submenu", "submenu-two", "submenu-three", 3, "click"], [1, "menu-arrow", "inside-submenu", "inside-submenu-two"], [1, "sidebar-footer", 3, "hidden"], [1, "trial-item", "bg-white", "text-center", "border"], [1, "bg-light", "p-3", "text-center"], ["src", "assets/img/icons/upgrade.svg", "alt", "img"], [1, "p-2"], [1, "fs-14", "fw-semibold", "mb-1"], [1, "fs-13", "mb-2"], [1, "btn", "btn-sm", "btn-primary", "w-100", "d-flex", "align-items-center", "justify-content-center", 3, "routerLink"], [1, "isax", "isax-crown5", "me-1"], ["href", "javascript:void(0);", 1, "close-icon", 3, "click"], [1, "fa-solid", "fa-x"], ["data-bs-toggle", "tooltip", "data-bs-placement", "top", "data-bs-title", "Settings", 3, "routerLink"], ["href", "javascript:void(0);", "data-bs-toggle", "tooltip", "data-bs-placement", "top", "data-bs-title", "Documentation"], ["href", "javascript:void(0);", "data-bs-toggle", "tooltip", "data-bs-placement", "top", "data-bs-title", "Changelog"], ["data-bs-toggle", "tooltip", "data-bs-placement", "top", "data-bs-title", "Login", 3, "routerLink"], [3, "active"], ["href", "javascript:void(0);", 3, "click", "ngClass"], [1, "isax"], [3, "ngClass"], [1, "submenu", "submenu-two"], ["routerLinkActive", "active", 3, "routerLink"], [3, "click", "routerLink", "ngClass"], ["routerLinkActive", "active", 3, "click", "routerLink"], [3, "click", "routerLink"]], template: function SideMenuOneComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0);
      \u0275\u0275listener("mouseover", function SideMenuOneComponent_Template_div_mouseover_0_listener() {
        return ctx.miniSideBarMouseHover("over");
      })("focus", function SideMenuOneComponent_Template_div_focus_0_listener() {
        return ctx.miniSideBarMouseHover("over");
      })("mouseout", function SideMenuOneComponent_Template_div_mouseout_0_listener() {
        return ctx.miniSideBarMouseHover("out");
      })("blur", function SideMenuOneComponent_Template_div_blur_0_listener() {
        return ctx.miniSideBarMouseHover("out");
      });
      \u0275\u0275elementStart(1, "div", 1)(2, "div", 2)(3, "a", 3);
      \u0275\u0275element(4, "i", 4);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "ul", 5)(6, "li")(7, "a", 6);
      \u0275\u0275element(8, "i", 7);
      \u0275\u0275text(9, "Invoice ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(10, "li")(11, "a", 6);
      \u0275\u0275element(12, "i", 8);
      \u0275\u0275text(13, "Expense ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(14, "li")(15, "a", 6);
      \u0275\u0275element(16, "i", 9);
      \u0275\u0275text(17, "Credit Notes ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(18, "li")(19, "a", 6);
      \u0275\u0275element(20, "i", 10);
      \u0275\u0275text(21, "Debit Notes ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(22, "li")(23, "a", 6);
      \u0275\u0275element(24, "i", 11);
      \u0275\u0275text(25, "Purchase Order ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(26, "li")(27, "a", 6);
      \u0275\u0275element(28, "i", 12);
      \u0275\u0275text(29, "Quotation ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(30, "li")(31, "a", 6);
      \u0275\u0275element(32, "i", 13);
      \u0275\u0275text(33, "Delivery Challan ");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(34, "ul", 14)(35, "li")(36, "a", 15);
      \u0275\u0275element(37, "i", 16);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(38, "li")(39, "a", 17);
      \u0275\u0275element(40, "i", 18);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(41, "li")(42, "a", 19);
      \u0275\u0275element(43, "i", 20);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(44, "li")(45, "a", 21);
      \u0275\u0275element(46, "i", 22);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(47, "div", 23)(48, "div", 24)(49, "a", 25);
      \u0275\u0275element(50, "img", 26);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(51, "a", 27);
      \u0275\u0275element(52, "img", 28);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(53, "a", 29);
      \u0275\u0275element(54, "img", 30);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(55, "a", 31);
      \u0275\u0275listener("click", function SideMenuOneComponent_Template_a_click_55_listener() {
        return ctx.toggleSidebar();
      });
      \u0275\u0275element(56, "i", 32);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(57, "div", 33)(58, "div", 34);
      \u0275\u0275element(59, "input", 35);
      \u0275\u0275elementStart(60, "span", 36);
      \u0275\u0275element(61, "i", 37);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(62, "ng-scrollbar")(63, "div", 38)(64, "div", 39)(65, "ul");
      \u0275\u0275repeaterCreate(66, SideMenuOneComponent_For_67_Template, 7, 1, null, null, \u0275\u0275repeaterTrackByIdentity);
      \u0275\u0275element(68, "li");
      \u0275\u0275elementStart(69, "li", 40)(70, "span");
      \u0275\u0275text(71, "Help");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(72, "li", 41)(73, "ul")(74, "li")(75, "a", 42);
      \u0275\u0275element(76, "i", 43);
      \u0275\u0275elementStart(77, "span");
      \u0275\u0275text(78, "Documentation");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(79, "li")(80, "a", 42);
      \u0275\u0275element(81, "i", 44);
      \u0275\u0275elementStart(82, "span");
      \u0275\u0275text(83, "Changelog");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(84, "span", 45);
      \u0275\u0275text(85, "v2.0.9");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(86, "li", 46)(87, "a", 47);
      \u0275\u0275listener("click", function SideMenuOneComponent_Template_a_click_87_listener() {
        return ctx.multiLevelOne();
      });
      \u0275\u0275element(88, "i", 48);
      \u0275\u0275elementStart(89, "span");
      \u0275\u0275text(90, "Multi Level");
      \u0275\u0275elementEnd();
      \u0275\u0275element(91, "span", 49);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(92, "ul", 41)(93, "li")(94, "a", 42);
      \u0275\u0275text(95, "Multilevel 1");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(96, "li", 50);
      \u0275\u0275listener("click", function SideMenuOneComponent_Template_li_click_96_listener() {
        return ctx.multiLevelTwo();
      });
      \u0275\u0275elementStart(97, "a", 42);
      \u0275\u0275text(98, "Multilevel 2");
      \u0275\u0275element(99, "span", 51);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(100, "ul", 41)(101, "li")(102, "a", 42);
      \u0275\u0275text(103, "Multilevel 2.1");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(104, "li", 52);
      \u0275\u0275listener("click", function SideMenuOneComponent_Template_li_click_104_listener() {
        return ctx.multiLevelThree();
      });
      \u0275\u0275elementStart(105, "a", 42);
      \u0275\u0275text(106, "Multilevel 2.2");
      \u0275\u0275element(107, "span", 53);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(108, "ul", 41)(109, "li")(110, "a", 42);
      \u0275\u0275text(111, "Multilevel 2.2.1");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(112, "li")(113, "a", 42);
      \u0275\u0275text(114, "Multilevel 2.2.2");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(115, "li")(116, "a", 42);
      \u0275\u0275text(117, "Multilevel 3");
      \u0275\u0275elementEnd()()()()()()();
      \u0275\u0275elementStart(118, "div", 54)(119, "div", 55)(120, "div", 56);
      \u0275\u0275element(121, "img", 57);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(122, "div", 58)(123, "h6", 59);
      \u0275\u0275text(124, "Upgrade to More");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(125, "p", 60);
      \u0275\u0275text(126, "Subscribe to get more with Premium Features");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(127, "a", 61);
      \u0275\u0275element(128, "i", 62);
      \u0275\u0275text(129, "Upgrade");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(130, "a", 63);
      \u0275\u0275listener("click", function SideMenuOneComponent_Template_a_click_130_listener() {
        return ctx.closefooter();
      });
      \u0275\u0275element(131, "i", 64);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(132, "ul", 14)(133, "li")(134, "a", 65);
      \u0275\u0275element(135, "i", 16);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(136, "li")(137, "a", 66);
      \u0275\u0275element(138, "i", 18);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(139, "li")(140, "a", 67);
      \u0275\u0275element(141, "i", 20);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(142, "li")(143, "a", 68);
      \u0275\u0275element(144, "i", 22);
      \u0275\u0275elementEnd()()()()()()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(7);
      \u0275\u0275property("routerLink", ctx.routes.addInvoice);
      \u0275\u0275advance(4);
      \u0275\u0275property("routerLink", ctx.routes.expenses);
      \u0275\u0275advance(4);
      \u0275\u0275property("routerLink", ctx.routes.addCreditNotes);
      \u0275\u0275advance(4);
      \u0275\u0275property("routerLink", ctx.routes.addDebitNotes);
      \u0275\u0275advance(4);
      \u0275\u0275property("routerLink", ctx.routes.addPurchaseOrder);
      \u0275\u0275advance(4);
      \u0275\u0275property("routerLink", ctx.routes.addQuotations);
      \u0275\u0275advance(4);
      \u0275\u0275property("routerLink", ctx.routes.addDeliveryChallan);
      \u0275\u0275advance(5);
      \u0275\u0275property("routerLink", ctx.routes.accountSettings);
      \u0275\u0275advance(9);
      \u0275\u0275property("routerLink", ctx.routes.login);
      \u0275\u0275advance(4);
      \u0275\u0275property("routerLink", ctx.routes.index);
      \u0275\u0275advance(2);
      \u0275\u0275property("routerLink", ctx.routes.index);
      \u0275\u0275advance(2);
      \u0275\u0275property("routerLink", ctx.routes.index);
      \u0275\u0275advance(13);
      \u0275\u0275repeater(ctx.side_bar_data());
      \u0275\u0275advance(6);
      \u0275\u0275property("ngStyle", \u0275\u0275pureFunction1(20, _c04, ctx.sidebarfooter ? "190px" : "0"));
      \u0275\u0275advance(20);
      \u0275\u0275property("ngStyle", \u0275\u0275pureFunction1(22, _c12, ctx.multiLevel1 ? "block" : ""));
      \u0275\u0275advance(8);
      \u0275\u0275property("ngStyle", \u0275\u0275pureFunction1(24, _c12, ctx.multiLevel2 ? "block" : ""));
      \u0275\u0275advance(8);
      \u0275\u0275property("ngStyle", \u0275\u0275pureFunction1(26, _c12, ctx.multiLevel3 ? "block" : ""));
      \u0275\u0275advance(10);
      \u0275\u0275property("hidden", ctx.sidebarfooter);
      \u0275\u0275advance(9);
      \u0275\u0275property("routerLink", ctx.routes.plansBillings);
      \u0275\u0275advance(7);
      \u0275\u0275property("routerLink", ctx.routes.accountSettings);
      \u0275\u0275advance(9);
      \u0275\u0275property("routerLink", ctx.routes.login);
    }
  }, dependencies: [CommonModule, NgClass, NgStyle, RouterLink, NgScrollbarModule, NgScrollbar, RouterLinkActive], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SideMenuOneComponent, [{
    type: Component,
    args: [{ selector: "app-side-menu-one", imports: [CommonModule, RouterLink, NgScrollbarModule, RouterLinkActive], template: `<!-- Sidebar -->
<div class="two-col-sidebar d-block" id="two-col-sidebar" (mouseover)="miniSideBarMouseHover('over')"
  (focus)="miniSideBarMouseHover('over')" (mouseout)="miniSideBarMouseHover('out')"
  (blur)="miniSideBarMouseHover('out')">
  <div class="twocol-mini">
    <!-- Add -->
    <div class="dropdown">
      <a class="btn btn-primary bg-gradient btn-sm btn-icon rounded-circle d-flex align-items-center justify-content-center"
        data-bs-toggle="dropdown" href="javascript:void(0);" role="button" data-bs-display="static"
        data-bs-reference="parent">
        <i class="isax isax-add"></i>
      </a>
      <ul class="dropdown-menu dropdown-menu-start">
        <li>
          <a [routerLink]="routes.addInvoice" class="dropdown-item d-flex align-items-center">
            <i class="isax isax-document-text-1 me-2"></i>Invoice
          </a>
        </li>
        <li>
          <a [routerLink]="routes.expenses" class="dropdown-item d-flex align-items-center">
            <i class="isax isax-money-send me-2"></i>Expense
          </a>
        </li>
        <li>
          <a [routerLink]="routes.addCreditNotes" class="dropdown-item d-flex align-items-center">
            <i class="isax isax-money-add me-2"></i>Credit Notes
          </a>
        </li>
        <li>
          <a [routerLink]="routes.addDebitNotes" class="dropdown-item d-flex align-items-center">
            <i class="isax isax-money-recive me-2"></i>Debit Notes
          </a>
        </li>
        <li>
          <a [routerLink]="routes.addPurchaseOrder" class="dropdown-item d-flex align-items-center">
            <i class="isax isax-document me-2"></i>Purchase Order
          </a>
        </li>
        <li>
          <a [routerLink]="routes.addQuotations" class="dropdown-item d-flex align-items-center">
            <i class="isax isax-document-download me-2"></i>Quotation
          </a>
        </li>
        <li>
          <a [routerLink]="routes.addDeliveryChallan" class="dropdown-item d-flex align-items-center">
            <i class="isax isax-document-forward me-2"></i>Delivery Challan
          </a>
        </li>
      </ul>
    </div>
    <!-- /Add -->

    <ul class="menu-list">
      <li>
        <a [routerLink]="routes.accountSettings" data-bs-toggle="tooltip" data-bs-placement="right"
          data-bs-title="Settings"><i class="isax isax-setting-25"></i></a>
      </li>
      <li>
        <a href="javascript:void(0);" data-bs-toggle="tooltip" data-bs-placement="right"
          data-bs-title="Documentation"><i class="isax isax-document-normal4"></i></a>
      </li>
      <li>
        <a href="javascript:void(0);" data-bs-toggle="tooltip" data-bs-placement="right" data-bs-title="Changelog"><i
            class="isax isax-cloud-change5"></i></a>
      </li>
      <li>
        <a [routerLink]="routes.login"><i class="isax isax-login-15"></i></a>
      </li>
    </ul>
  </div>
  <div class="sidebar" id="sidebar-two">
    <!-- Logo -->
    <div class="sidebar-logo">
      <a [routerLink]="routes.index" class="logo logo-normal">
        <img src="assets/img/logo.svg" alt="Logo">
      </a>
      <a [routerLink]="routes.index" class="logo-small">
        <img src="assets/img/logo-small.svg" alt="Logo">
      </a>
      <a [routerLink]="routes.index" class="dark-logo">
        <img src="assets/img/logo-white.svg" alt="Logo">
      </a>

      <a id="toggle_btn" href="javascript:void(0);" (click)="toggleSidebar()">
        <i class="isax isax-menu-1"></i>
      </a>
    </div>
    <!-- /Logo -->

    <!-- Search -->
    <div class="sidebar-search">
      <div class="input-icon-end position-relative">
        <input type="text" class="form-control" placeholder="Search">
        <span class="input-icon-addon">
          <i class="isax isax-search-normal"></i>
        </span>
      </div>
    </div>
    <!-- /Search -->
    <ng-scrollbar>
      <div class="sidebar-inner slimscroll">
        <div id="sidebar-menu" class="sidebar-menu">
          <ul>
            @for(mainMenus of side_bar_data();track mainMenus){
            <li class="menu-title"><span>{{mainMenus.tittle}}</span></li>
            <li>
              <ul>
                @for(menu of mainMenus.menu;track menu){
                @if(menu.hasSubRoute===true){

                <li class="submenu">
                  <a href="javascript:void(0);" (click)="expandSubMenus(menu)"
                    [ngClass]="{ 'subdrop': menu.showSubRoute === true }"
                    [class.active]="base===menu.base || base===menu.base1">
                    <i class="isax" [class]="'isax-' + menu.icon"></i><span>{{menu.menuValue}}</span>
                    <span class="menu-arrow"></span>
                  </a>
                  <ul [ngClass]="
                  menu.showSubRoute === true
                    ? 'd-block'
                    : 'd-none'
                ">
                    <li>
                      @for(subMenu of menu.subMenus;track subMenu){
                      @if(subMenu.hasSubRouteTwo2===true){
                    <li class="submenu submenu-two">
                      <a [routerLink]="subMenu.route" [class.active]="page===subMenu.page"
                        (click)="openSubmenuOne(subMenu)" [class.active]="page===subMenu.page"
                        [ngClass]="{ subdrop: openSubmenuOneItem === subMenu }">{{subMenu.menuValue}}<span
                          class="menu-arrow inside-submenu"></span></a>
                      <ul [ngClass]="
                                                openSubmenuOneItem === subMenu ? 'd-block' : 'd-none'
                                              ">
                        @for(subMenu2 of subMenu.subMenus;track subMenu2){
                        <li><a [routerLink]="subMenu2.route" routerLinkActive="active">{{subMenu2.menuValue}}</a></li>

                        }
                      </ul>
                    </li>
                    }
                    @else{
                    <a [routerLink]="subMenu.route" routerLinkActive="active"
                      (click)="openSubmenuOne(subMenu)">{{subMenu.menuValue}}</a>
                    }
                    }

                </li>
              </ul>

            </li>
            }
            @if(menu.hasSubRouteTwo===true){
            <li class="submenu">
              <a href="javascript:void(0);" [class.active]="base===menu.base"
                [ngClass]="{ 'subdrop': menu.showSubRoute === true}" (click)="expandSubMenus(menu)">
                <i class="isax" [class]="'isax-' + menu.icon"></i><span>{{menu.menuValue}}</span>
                <span class="menu-arrow"></span>
              </a>
              <ul [ngClass]="
                    menu.showSubRoute === true
                      ? 'd-block'
                      : 'd-none'
                  ">
                @for(subMenu of menu.subMenus;track subMenu){
                <li class="submenu submenu-two">
                  <a href="javascript:void(0);" (click)="openSubmenuOne(subMenu)" [class.active]="page===subMenu.page"
                    [ngClass]="{ subdrop: openSubmenuOneItem === subMenu  }">{{subMenu.menuValue}}<span
                      class="menu-arrow"></span></a>
                  <ul [ngClass]="
                            openSubmenuOneItem === subMenu ? 'd-block' : 'd-none'
                          ">
                    @for(subMenu2 of subMenu.subMenus;track subMenu2){
                    <li><a [routerLink]="subMenu2.route"
                        [class.active]="last===subMenu2.base">{{subMenu2.menuValue}}</a></li>
                    }
                  </ul>
                </li>
                }
              </ul>
            </li>
            }
            @if(menu.hasSubRoute===false){
            <li [class.active]="base===menu.base">
              <a [routerLink]="menu.route" (click)="expandSubMenus(menu)">
                <i class="isax" [class]="'isax-' + menu.icon"></i><span>{{menu.menuValue}}</span>
              </a>
            </li>
            }
            }
          </ul>
          </li>
          }
          <li>
          <li class="menu-title"><span>Help</span></li>
          <li [ngStyle]="{'min-height':sidebarfooter?'190px':'0'}">
            <ul>
              <li>
                <a href="javascript:void(0);"><i class="isax isax-document-code-25"></i><span>Documentation</span></a>
              </li>
              <li>
                <a href="javascript:void(0);"><i class="isax isax-programming-arrows5"></i><span>Changelog</span><span
                    class="badge bg-primary ms-2 badge-sm text-white fs-12 fw-medium">v2.0.9</span></a>
              </li>
              <li class="submenu">
                <a href="javascript:void(0);" (click)="multiLevelOne()">
                  <i class="isax isax-layer5"></i><span>Multi Level</span>
                  <span class="menu-arrow"></span>
                </a>
                <ul [ngStyle]="{'display':multiLevel1?'block':''}">
                  <li><a href="javascript:void(0);">Multilevel 1</a></li>
                  <li class="submenu submenu-two" (click)="multiLevelTwo()">
                    <a href="javascript:void(0);">Multilevel 2<span class="menu-arrow inside-submenu"></span></a>
                    <ul [ngStyle]="{'display':multiLevel2?'block':''}">
                      <li><a href="javascript:void(0);">Multilevel 2.1</a></li>
                      <li class="submenu submenu-two submenu-three" (click)="multiLevelThree()">
                        <a href="javascript:void(0);">Multilevel 2.2<span
                            class="menu-arrow inside-submenu inside-submenu-two"></span></a>
                        <ul [ngStyle]="{'display':multiLevel3?'block':''}">
                          <li><a href="javascript:void(0);">Multilevel 2.2.1</a></li>
                          <li><a href="javascript:void(0);">Multilevel 2.2.2</a></li>
                        </ul>
                      </li>
                    </ul>
                  </li>
                  <li><a href="javascript:void(0);">Multilevel 3</a></li>
                </ul>
              </li>
            </ul>
          </li>

          </ul>
          <div class="sidebar-footer" [hidden]="sidebarfooter">
            <div class="trial-item bg-white text-center border">
              <div class="bg-light p-3 text-center">
                <img src="assets/img/icons/upgrade.svg" alt="img">
              </div>
              <div class="p-2">
                <h6 class="fs-14 fw-semibold mb-1">Upgrade to More</h6>
                <p class="fs-13 mb-2">Subscribe to get more with Premium Features</p>
                <a [routerLink]="routes.plansBillings"
                  class="btn btn-sm btn-primary w-100 d-flex align-items-center justify-content-center"><i
                    class="isax isax-crown5 me-1"></i>Upgrade</a>
              </div>
              <a href="javascript:void(0);" class="close-icon" (click)="closefooter()"><i class="fa-solid fa-x"></i></a>
            </div>
            <ul class="menu-list">
              <li>
                <a [routerLink]="routes.accountSettings" data-bs-toggle="tooltip" data-bs-placement="top"
                  data-bs-title="Settings"><i class="isax isax-setting-25"></i></a>
              </li>
              <li>
                <a href="javascript:void(0);" data-bs-toggle="tooltip" data-bs-placement="top"
                  data-bs-title="Documentation"><i class="isax isax-document-normal4"></i></a>
              </li>
              <li>
                <a href="javascript:void(0);" data-bs-toggle="tooltip" data-bs-placement="top"
                  data-bs-title="Changelog"><i class="isax isax-cloud-change5"></i></a>
              </li>
              <li>
                <a [routerLink]="routes.login" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="Login"><i
                    class="isax isax-login-15"></i></a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </ng-scrollbar>
  </div>


</div>
<!-- /Sidebar -->` }]
  }], () => [{ type: Router }, { type: DataService }, { type: SideBarService }, { type: AuthService }, { type: PermissionService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SideMenuOneComponent, { className: "SideMenuOneComponent", filePath: "src/app/features/common/side-menus/side-menu-one/side-menu-one.component.ts", lineNumber: 53 });
})();
function filterSideBar(menuData, permService) {
  return menuData.map((item) => {
    const filteredSubMenus = item.subMenus ? filterSideBar(item.subMenus, permService) : [];
    const filteredMenuItems = item.menu ? filterSideBar(item.menu, permService) : [];
    const hasPermission = !item.permissions || item.permissions.length === 0 ? true : permService.hasSome(item.permissions);
    if (item.permissions && item.permissions.length != 0 && !permService.hasSome(item.permissions))
      return null;
    if (!hasPermission && filteredSubMenus.length === 0 && filteredMenuItems.length === 0)
      return null;
    return __spreadProps(__spreadValues({}, item), {
      subMenus: filteredSubMenus,
      menu: filteredMenuItems
    });
  }).filter(Boolean);
}

// src/app/features/common/headers/header-one/header-one.component.ts
var _c05 = (a0) => ({ "d-none": a0 });
var _c13 = (a0) => ({ "activate": a0 });
function HeaderOneComponent_ng_container_53_li_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li", 120);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const mainMenus_r1 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", mainMenus_r1.data, " ");
  }
}
function HeaderOneComponent_ng_container_53_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "li", 26)(2, "a", 27);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "li", 120);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const mainMenus_r1 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275property("routerLink", mainMenus_r1.route);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(mainMenus_r1.data);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", mainMenus_r1.data2, " ");
  }
}
function HeaderOneComponent_ng_container_53_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, HeaderOneComponent_ng_container_53_li_1_Template, 2, 1, "li", 118)(2, HeaderOneComponent_ng_container_53_ng_container_2_Template, 6, 3, "ng-container", 119);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const mainMenus_r1 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !mainMenus_r1.hasSubData && (ctx_r1.base === mainMenus_r1.base || ctx_r1.page === mainMenus_r1.base));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", mainMenus_r1.hasSubData && (ctx_r1.page === mainMenus_r1.page || ctx_r1.last === mainMenus_r1.page));
  }
}
var HeaderOneComponent = class _HeaderOneComponent {
  auth;
  sideBar;
  data;
  router;
  miniSidebar = false;
  headerSidebarStyle = "1";
  routes = routes;
  base = "";
  page = "";
  last = "";
  currentRoute = "";
  themeColor = "light";
  themeMode = "";
  mobileSidebar = false;
  elem = document.documentElement;
  bread_Crumb = [];
  currentUser = null;
  constructor(auth, sideBar, data, router) {
    this.auth = auth;
    this.sideBar = sideBar;
    this.data = data;
    this.router = router;
    this.sideBar.toggleSideBar.subscribe((res) => {
      if (res == "true") {
        this.miniSidebar = true;
      } else {
        this.miniSidebar = false;
      }
    });
    router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.getRoutes(event);
      }
    });
    this.getRoutes(this.router);
    this.sideBar.headerSidebarStyle.subscribe((res) => {
      this.headerSidebarStyle = res;
    });
    this.data.getBreadCrumb.subscribe((res) => {
      this.bread_Crumb = res;
    });
    this.sideBar.themeColors.subscribe((res) => {
      this.themeColor = res;
    });
    this.currentUser = this.auth.user;
  }
  getRoutes(route) {
    const splitVal = route.url.split("/");
    this.currentRoute = route.url;
    this.base = splitVal[1];
    this.page = splitVal[2];
    this.last = splitVal[3];
  }
  logOut() {
    return __async(this, null, function* () {
      yield this.auth.logout();
    });
  }
  toggleSideBar() {
    this.sideBar.switchSideMenuPosition();
  }
  toggleMobileIcon() {
    this.sideBar.switchMobileSideBarPosition();
    this.mobileSidebar = !this.mobileSidebar;
  }
  overlayClose() {
    this.mobileSidebar = false;
  }
  fullscreen() {
    if (!document.fullscreenElement) {
      this.elem.requestFullscreen();
    } else {
      document.exitFullscreen();
    }
  }
  ngOnInit() {
    const themeColor = localStorage.getItem("themeColor") || "light";
    this.sideBar.changeThemeColor(themeColor);
  }
  /**
   * Get user avatar URL or generate initials avatar
   */
  getUserAvatar() {
    if (this.currentUser?.photo && this.currentUser.photo != "string") {
      return this.currentUser.photo;
    }
    return "assets/img/profiles/avatar-01.jpg";
  }
  /**
   * Get user initials for avatar
   */
  getUserInitials() {
    if (!this.currentUser?.nomPrenom) {
      return "U";
    }
    const names = this.currentUser.nomPrenom.split(" ");
    if (names.length >= 2) {
      return (names[0].charAt(0) + names[1].charAt(0)).toUpperCase();
    }
    return names[0].charAt(0).toUpperCase();
  }
  static \u0275fac = function HeaderOneComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _HeaderOneComponent)(\u0275\u0275directiveInject(AuthService), \u0275\u0275directiveInject(SideBarService), \u0275\u0275directiveInject(DataService), \u0275\u0275directiveInject(Router));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _HeaderOneComponent, selectors: [["app-header-one"]], decls: 246, vars: 34, consts: [[1, "header"], [1, "main-header"], [1, "header-left"], [1, "logo", 3, "routerLink"], ["src", "assets/img/logo.svg", "alt", "Logo"], [1, "dark-logo", 3, "routerLink"], ["src", "assets/img/logo-white.svg", "alt", "Logo"], ["id", "mobile_btn", "href", "javascript:void(0);", 1, "mobile_btn", 3, "click"], [1, "bar-icon"], [1, "header-user"], [1, "nav", "user-menu", "nav-list"], ["id", "header-search", 1, "me-auto", "d-flex", "align-items-center"], [1, "dropdown", "me-3"], ["data-bs-toggle", "dropdown", "href", "javascript:void(0);", "role", "button", 1, "btn", "btn-primary", "bg-gradient", "btn-xs", "btn-icon", "rounded-circle", "d-flex", "align-items-center", "justify-content-center"], [1, "isax", "isax-add", "text-white"], [1, "dropdown-menu", "dropdown-menu-start", "p-2"], [1, "dropdown-item", "d-flex", "align-items-center", 3, "routerLink"], [1, "isax", "isax-document-text-1", "me-2"], [1, "isax", "isax-money-send", "me-2"], [1, "isax", "isax-money-add", "me-2"], [1, "isax", "isax-money-recive", "me-2"], [1, "isax", "isax-document", "me-2"], [1, "isax", "isax-document-download", "me-2"], [1, "isax", "isax-document-forward", "me-2"], ["aria-label", "breadcrumb"], [1, "breadcrumb", "breadcrumb-divide", "mb-0"], [1, "breadcrumb-item", "d-flex", "align-items-center"], [3, "routerLink"], [1, "isax", "isax-home-2", "me-1"], [4, "ngFor", "ngForOf"], [1, "d-flex", "align-items-center"], [1, "input-icon-end", "position-relative", "me-2"], ["type", "text", "placeholder", "Search", 1, "form-control"], [1, "input-icon-addon"], [1, "isax", "isax-search-normal"], [1, "nav-item", "flag-nav", "me-2"], [1, "notification_item", "me-2"], ["href", "javascript:void(0);", "id", "notification_popup", "data-bs-toggle", "dropdown", "data-bs-auto-close", "outside", 1, "btn", "btn-menubar", "position-relative"], [1, "isax", "isax-notification-bing5"], [1, "position-absolute", "badge", "bg-success", "border", "border-white"], [1, "dropdown-menu", "p-0", "dropdown-menu-end", "dropdown-menu-lg", 2, "min-height", "300px"], [1, "p-2", "border-bottom"], [1, "row", "align-items-center"], [1, "col"], [1, "m-0", "fs-16", "fw-semibold"], [1, "col-auto"], [1, "dropdown"], ["href", "javascript:void(0);", "data-bs-toggle", "dropdown", "data-bs-offset", "0,15", "aria-expanded", "false", 1, "dropdown-toggle", "drop-arrow-none", "link-dark"], [1, "isax", "isax-setting-2", "fs-16", "text-body", "align-middle"], [1, "dropdown-menu", "dropdown-menu-end"], ["href", "javascript:void(0);", 1, "dropdown-item"], [1, "ti", "ti-bell-check", "me-1"], [1, "ti", "ti-trash", "me-1"], ["data-simplebar", "", 1, "notification-body", "position-relative", "z-2", "rounded-0"], ["id", "notification-1", 1, "dropdown-item", "notification-item", "py-2", "text-wrap", "border-bottom"], [1, "d-flex"], [1, "me-2", "position-relative", "flex-shrink-0"], ["src", "assets/img/profiles/avatar-05.jpg", "alt", "", 1, "avatar-md", "rounded-circle"], [1, "flex-grow-1"], [1, "mb-0", "fw-semibold", "text-dark"], [1, "mb-1", "text-wrap", "fs-14"], [1, "fw-semibold"], [1, "d-flex", "justify-content-between", "align-items-center"], [1, "fs-12"], [1, "isax", "isax-clock", "me-1"], [1, "notification-action", "d-flex", "align-items-center", "float-end", "gap-2"], ["href", "javascript:void(0);", "data-bs-toggle", "tooltip", "title", "", "data-bs-original-title", "Make as Read", "aria-label", "Make as Read", 1, "notification-read", "rounded-circle", "bg-info"], ["data-dismissible", "#notification-1", 1, "btn", "rounded-circle", "text-danger", "p-0"], [1, "isax", "isax-close-circle", "fs-12"], ["id", "notification-2", 1, "dropdown-item", "notification-item", "py-2", "text-wrap", "border-bottom"], [1, "flex-shrink-0"], [1, "avatar-sm", "me-2"], [1, "avatar-title", "bg-soft-info", "text-info", "fs-18", "rounded-circle"], [1, "mb-0", "text-wrap", "fs-14"], ["data-dismissible", "#notification-2", 1, "btn", "rounded-circle", "text-danger", "p-0"], ["id", "notification-3", 1, "dropdown-item", "notification-item", "py-2", "text-wrap", "border-bottom"], ["src", "assets/img/profiles/avatar-03.jpg", "alt", "", 1, "avatar-md", "rounded-circle"], ["data-dismissible", "#notification-3", 1, "btn", "rounded-circle", "text-danger", "p-0"], ["id", "notification-4", 1, "dropdown-item", "notification-item", "py-2", "text-wrap", "border-bottom"], [1, "avatar-title", "bg-soft-warning", "text-warning", "fs-18", "rounded-circle"], [1, "isax", "isax-message"], ["data-dismissible", "#notification-4", 1, "btn", "rounded-circle", "text-danger", "p-0"], ["id", "notification-5", 1, "dropdown-item", "notification-item", "py-2", "text-wrap", "border-bottom"], ["src", "assets/img/profiles/avatar-17.jpg", "alt", "", 1, "avatar-md", "rounded-circle"], [1, "mb-1"], ["href", "javascript:void(0);", 1, "badge", "bg-success", "p-2", "py-1", "me-1"], ["href", "javascript:void(0);", 1, "badge", "bg-danger", "p-2", "py-1"], ["data-dismissible", "#notification-5", 1, "btn", "rounded-circle", "text-danger", "p-0"], [1, "p-2", "rounded-bottom", "border-top", "text-center"], [1, "text-center", "fw-medium", "fs-14", "mb-0", 3, "routerLink"], [1, "me-2", "theme-item", 3, "ngClass"], ["href", "javascript:void(0);", "id", "dark-mode-toggle", 1, "theme-toggle", "btn", "btn-menubar", 3, "click", "ngClass"], [1, "isax", "isax-moon"], ["href", "javascript:void(0);", "id", "light-mode-toggle", 1, "theme-toggle", "btn", "btn-menubar", 3, "click", "ngClass"], [1, "isax", "isax-sun-1"], [1, "dropdown", "profile-dropdown"], ["href", "javascript:void(0);", "data-bs-toggle", "dropdown", "data-bs-auto-close", "outside", 1, "dropdown-toggle", "d-flex", "align-items-center"], [1, "avatar", "online"], ["alt", "Img", 1, "img-fluid", "rounded-circle", 3, "src"], [1, "dropdown-menu", "p-2"], [1, "d-flex", "align-items-center", "bg-light", "rounded-1", "p-2", "mb-2"], [1, "avatar", "avatar-lg", "me-2"], ["alt", "img", 1, "rounded-circle", 3, "src"], [1, "fs-14", "fw-medium", "mb-1"], [1, "fs-13"], [1, "isax", "isax-profile-circle", "me-2"], [1, "isax", "isax-document-text", "me-2"], [1, "form-check", "form-switch", "form-check-reverse", "d-flex", "align-items-center", "justify-content-between", "dropdown-item", "mb-0"], ["for", "notify", 1, "form-check-label"], [1, "isax", "isax-notification", "me-2"], ["type", "checkbox", "role", "switch", "id", "notify", 1, "form-check-input"], [1, "dropdown-divider", "my-2"], [1, "dropdown-item", "logout", "d-flex", "align-items-center", 3, "click"], [1, "isax", "isax-logout", "me-2"], [1, "dropdown", "mobile-user-menu", "profile-dropdown"], [1, "avatar", "avatar-md", "online"], [1, "dropdown-menu", "p-2", "mt-0"], [1, "isax", "isax-setting", "me-2"], ["class", "breadcrumb-item active", "aria-current", "page", 4, "ngIf"], [4, "ngIf"], ["aria-current", "page", 1, "breadcrumb-item", "active"]], template: function HeaderOneComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "a", 3);
      \u0275\u0275element(4, "img", 4);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "a", 5);
      \u0275\u0275element(6, "img", 6);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(7, "a", 7);
      \u0275\u0275listener("click", function HeaderOneComponent_Template_a_click_7_listener() {
        return ctx.toggleMobileIcon();
      });
      \u0275\u0275elementStart(8, "span", 8);
      \u0275\u0275element(9, "span")(10, "span")(11, "span");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(12, "div", 9)(13, "div", 10)(14, "div", 11)(15, "div", 12)(16, "a", 13);
      \u0275\u0275element(17, "i", 14);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(18, "ul", 15)(19, "li")(20, "a", 16);
      \u0275\u0275element(21, "i", 17);
      \u0275\u0275text(22, "Invoice ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(23, "li")(24, "a", 16);
      \u0275\u0275element(25, "i", 18);
      \u0275\u0275text(26, "Expense ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(27, "li")(28, "a", 16);
      \u0275\u0275element(29, "i", 19);
      \u0275\u0275text(30, "Credit Notes ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(31, "li")(32, "a", 16);
      \u0275\u0275element(33, "i", 20);
      \u0275\u0275text(34, "Debit Notes ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(35, "li")(36, "a", 16);
      \u0275\u0275element(37, "i", 21);
      \u0275\u0275text(38, "Purchase Order ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(39, "li")(40, "a", 16);
      \u0275\u0275element(41, "i", 22);
      \u0275\u0275text(42, "Quotation ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(43, "li")(44, "a", 16);
      \u0275\u0275element(45, "i", 23);
      \u0275\u0275text(46, "Delivery Challan ");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(47, "nav", 24)(48, "ol", 25)(49, "li", 26)(50, "a", 27);
      \u0275\u0275element(51, "i", 28);
      \u0275\u0275text(52, "Home ");
      \u0275\u0275elementEnd()();
      \u0275\u0275template(53, HeaderOneComponent_ng_container_53_Template, 3, 2, "ng-container", 29);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(54, "div", 30)(55, "div", 31);
      \u0275\u0275element(56, "input", 32);
      \u0275\u0275elementStart(57, "span", 33);
      \u0275\u0275element(58, "i", 34);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(59, "div", 35);
      \u0275\u0275element(60, "app-language-selector");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(61, "div", 36)(62, "a", 37);
      \u0275\u0275element(63, "i", 38)(64, "span", 39);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(65, "div", 40)(66, "div", 41)(67, "div", 42)(68, "div", 43)(69, "h6", 44);
      \u0275\u0275text(70, " Notifications");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(71, "div", 45)(72, "div", 46)(73, "a", 47);
      \u0275\u0275element(74, "i", 48);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(75, "div", 49)(76, "a", 50);
      \u0275\u0275element(77, "i", 51);
      \u0275\u0275text(78, "Mark as Read");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(79, "a", 50);
      \u0275\u0275element(80, "i", 52);
      \u0275\u0275text(81, "Delete All");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(82, "div", 53)(83, "div", 54)(84, "div", 55)(85, "div", 56);
      \u0275\u0275element(86, "img", 57);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(87, "div", 58)(88, "p", 59);
      \u0275\u0275text(89, "John Smith");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(90, "p", 60);
      \u0275\u0275text(91, " A ");
      \u0275\u0275elementStart(92, "span", 61);
      \u0275\u0275text(93, "new sale");
      \u0275\u0275elementEnd();
      \u0275\u0275text(94, " has been recorded. ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(95, "div", 62)(96, "span", 63);
      \u0275\u0275element(97, "i", 64);
      \u0275\u0275text(98, "4 min ago");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(99, "div", 65);
      \u0275\u0275element(100, "a", 66);
      \u0275\u0275elementStart(101, "button", 67);
      \u0275\u0275element(102, "i", 68);
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(103, "div", 69)(104, "div", 55)(105, "div", 70)(106, "div", 71)(107, "span", 72);
      \u0275\u0275text(108, " D ");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(109, "div", 58)(110, "p", 59);
      \u0275\u0275text(111, "Donoghue Susan");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(112, "p", 73);
      \u0275\u0275text(113, " Switched to a lower-tier package ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(114, "div", 62)(115, "span", 63);
      \u0275\u0275element(116, "i", 64);
      \u0275\u0275text(117, "4 min ago");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(118, "div", 65);
      \u0275\u0275element(119, "a", 66);
      \u0275\u0275elementStart(120, "button", 74);
      \u0275\u0275element(121, "i", 68);
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(122, "div", 75)(123, "div", 55)(124, "div", 56);
      \u0275\u0275element(125, "img", 76);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(126, "div", 58)(127, "p", 59);
      \u0275\u0275text(128, "Robert Fox ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(129, "p", 60);
      \u0275\u0275text(130, " Completed payment for ");
      \u0275\u0275elementStart(131, "span", 61);
      \u0275\u0275text(132, "#INV00025");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(133, "div", 62)(134, "span", 63);
      \u0275\u0275element(135, "i", 64);
      \u0275\u0275text(136, "4 min ago");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(137, "div", 65);
      \u0275\u0275element(138, "a", 66);
      \u0275\u0275elementStart(139, "button", 77);
      \u0275\u0275element(140, "i", 68);
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(141, "div", 78)(142, "div", 55)(143, "div", 70)(144, "div", 71)(145, "span", 79);
      \u0275\u0275element(146, "i", 80);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(147, "div", 58)(148, "p", 73);
      \u0275\u0275text(149, "You have received ");
      \u0275\u0275elementStart(150, "span", 61);
      \u0275\u0275text(151, "20");
      \u0275\u0275elementEnd();
      \u0275\u0275text(152, " new messages in the conversation");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(153, "div", 62)(154, "span", 63);
      \u0275\u0275element(155, "i", 64);
      \u0275\u0275text(156, "3 min ago");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(157, "div", 65);
      \u0275\u0275element(158, "a", 66);
      \u0275\u0275elementStart(159, "button", 81);
      \u0275\u0275element(160, "i", 68);
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(161, "div", 82)(162, "div", 55)(163, "div", 56);
      \u0275\u0275element(164, "img", 83);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(165, "div", 58)(166, "p", 59);
      \u0275\u0275text(167, "Charlotte Brown");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(168, "p", 60);
      \u0275\u0275text(169, " New invoice generated ");
      \u0275\u0275elementStart(170, "span", 61);
      \u0275\u0275text(171, " #INV00028");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(172, "div", 84)(173, "a", 85);
      \u0275\u0275text(174, "Approve");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(175, "a", 86);
      \u0275\u0275text(176, "Deny");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(177, "div", 62)(178, "span", 63);
      \u0275\u0275element(179, "i", 64);
      \u0275\u0275text(180, "45 min ago");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(181, "div", 65);
      \u0275\u0275element(182, "a", 66);
      \u0275\u0275elementStart(183, "button", 87);
      \u0275\u0275element(184, "i", 68);
      \u0275\u0275elementEnd()()()()()()();
      \u0275\u0275elementStart(185, "div", 88)(186, "a", 89);
      \u0275\u0275text(187, " View All ");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(188, "div", 90)(189, "a", 91);
      \u0275\u0275listener("click", function HeaderOneComponent_Template_a_click_189_listener() {
        return ctx.sideBar.changeThemeColor("dark");
      });
      \u0275\u0275element(190, "i", 92);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(191, "a", 93);
      \u0275\u0275listener("click", function HeaderOneComponent_Template_a_click_191_listener() {
        return ctx.sideBar.changeThemeColor("light");
      });
      \u0275\u0275element(192, "i", 94);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(193, "div", 95)(194, "a", 96)(195, "span", 97);
      \u0275\u0275element(196, "img", 98);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(197, "div", 99)(198, "div", 100)(199, "span", 101);
      \u0275\u0275element(200, "img", 102);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(201, "div")(202, "h6", 103);
      \u0275\u0275text(203);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(204, "p", 104);
      \u0275\u0275text(205);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(206, "a", 16);
      \u0275\u0275element(207, "i", 105);
      \u0275\u0275text(208, "Profile Settings ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(209, "a", 16);
      \u0275\u0275element(210, "i", 106);
      \u0275\u0275text(211, "Reports ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(212, "div", 107)(213, "label", 108);
      \u0275\u0275element(214, "i", 109);
      \u0275\u0275text(215, "Notifications");
      \u0275\u0275elementEnd();
      \u0275\u0275element(216, "input", 110);
      \u0275\u0275elementEnd();
      \u0275\u0275element(217, "hr", 111);
      \u0275\u0275elementStart(218, "a", 112);
      \u0275\u0275listener("click", function HeaderOneComponent_Template_a_click_218_listener() {
        return ctx.logOut();
      });
      \u0275\u0275element(219, "i", 113);
      \u0275\u0275text(220, "Sign Out ");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(221, "div", 114)(222, "a", 96)(223, "span", 115);
      \u0275\u0275element(224, "img", 98);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(225, "div", 116)(226, "div", 100)(227, "span", 101);
      \u0275\u0275element(228, "img", 102);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(229, "div")(230, "h6", 103);
      \u0275\u0275text(231);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(232, "p", 104);
      \u0275\u0275text(233);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(234, "a", 16);
      \u0275\u0275element(235, "i", 105);
      \u0275\u0275text(236, "Profile Settings ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(237, "a", 16);
      \u0275\u0275element(238, "i", 106);
      \u0275\u0275text(239, "Reports ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(240, "a", 16);
      \u0275\u0275element(241, "i", 117);
      \u0275\u0275text(242, "Settings ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(243, "a", 112);
      \u0275\u0275listener("click", function HeaderOneComponent_Template_a_click_243_listener() {
        return ctx.logOut();
      });
      \u0275\u0275element(244, "i", 113);
      \u0275\u0275text(245, "Signout ");
      \u0275\u0275elementEnd()()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(3);
      \u0275\u0275property("routerLink", ctx.routes.index);
      \u0275\u0275advance(2);
      \u0275\u0275property("routerLink", ctx.routes.index);
      \u0275\u0275advance(15);
      \u0275\u0275property("routerLink", ctx.routes.addInvoice);
      \u0275\u0275advance(4);
      \u0275\u0275property("routerLink", ctx.routes.expenses);
      \u0275\u0275advance(4);
      \u0275\u0275property("routerLink", ctx.routes.addCreditNotes);
      \u0275\u0275advance(4);
      \u0275\u0275property("routerLink", ctx.routes.addDebitNotes);
      \u0275\u0275advance(4);
      \u0275\u0275property("routerLink", ctx.routes.addPurchaseOrder);
      \u0275\u0275advance(4);
      \u0275\u0275property("routerLink", ctx.routes.addQuotations);
      \u0275\u0275advance(4);
      \u0275\u0275property("routerLink", ctx.routes.addDeliveryChallan);
      \u0275\u0275advance(6);
      \u0275\u0275property("routerLink", ctx.routes.index);
      \u0275\u0275advance(3);
      \u0275\u0275property("ngForOf", ctx.bread_Crumb);
      \u0275\u0275advance(133);
      \u0275\u0275property("routerLink", ctx.routes.notifications);
      \u0275\u0275advance(2);
      \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(28, _c05, ctx.base === "layout-dark"));
      \u0275\u0275advance();
      \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(30, _c13, ctx.themeColor === "light"));
      \u0275\u0275advance(2);
      \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(32, _c13, ctx.themeColor === "dark"));
      \u0275\u0275advance(5);
      \u0275\u0275property("src", ctx.getUserAvatar(), \u0275\u0275sanitizeUrl);
      \u0275\u0275advance(4);
      \u0275\u0275property("src", ctx.getUserAvatar(), \u0275\u0275sanitizeUrl);
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate((ctx.currentUser == null ? null : ctx.currentUser.nomPrenom) || "Utilisateur");
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate((ctx.currentUser == null ? null : ctx.currentUser.roles == null ? null : ctx.currentUser.roles[0]) || "Administrator");
      \u0275\u0275advance();
      \u0275\u0275property("routerLink", ctx.routes.accountSettings);
      \u0275\u0275advance(3);
      \u0275\u0275property("routerLink", ctx.routes.inventoryReport);
      \u0275\u0275advance(15);
      \u0275\u0275property("src", ctx.getUserAvatar(), \u0275\u0275sanitizeUrl);
      \u0275\u0275advance(4);
      \u0275\u0275property("src", ctx.getUserAvatar(), \u0275\u0275sanitizeUrl);
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate((ctx.currentUser == null ? null : ctx.currentUser.nomPrenom) || "Utilisateur");
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate((ctx.currentUser == null ? null : ctx.currentUser.roles == null ? null : ctx.currentUser.roles[0]) || "Administrator");
      \u0275\u0275advance();
      \u0275\u0275property("routerLink", ctx.routes.profile);
      \u0275\u0275advance(3);
      \u0275\u0275property("routerLink", ctx.routes.stockSummary);
      \u0275\u0275advance(3);
      \u0275\u0275property("routerLink", ctx.routes.accountSettings);
    }
  }, dependencies: [CommonModule, NgClass, NgForOf, NgIf, RouterLink, LanguageSelectorComponent], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(HeaderOneComponent, [{
    type: Component,
    args: [{ selector: "app-header-one", imports: [CommonModule, RouterLink, LanguageSelectorComponent], template: `<div class="header">
	<div class="main-header">

		<!-- Logo -->
		<div class="header-left">
			<a [routerLink]="routes.index" class="logo">
				<img src="assets/img/logo.svg" alt="Logo">
			</a>
			<a [routerLink]="routes.index" class="dark-logo">
				<img src="assets/img/logo-white.svg" alt="Logo">
			</a>
		</div>

		<!-- Sidebar Menu Toggle Button -->
		<a id="mobile_btn" class="mobile_btn" href="javascript:void(0);" (click)="toggleMobileIcon()">
			<span class="bar-icon">
				<span></span>
				<span></span>
				<span></span>
			</span>
		</a>

		<div class="header-user">
			<div class="nav user-menu nav-list">
				<div class="me-auto d-flex align-items-center" id="header-search">

					<!-- Add -->
					<div class="dropdown me-3">
						<a class="btn btn-primary bg-gradient btn-xs btn-icon rounded-circle d-flex align-items-center justify-content-center" data-bs-toggle="dropdown" href="javascript:void(0);" role="button">
							<i class="isax isax-add text-white"></i>
						</a>
						<ul class="dropdown-menu dropdown-menu-start p-2">
							<li>
								<a [routerLink]="routes.addInvoice" class="dropdown-item d-flex align-items-center">
									<i class="isax isax-document-text-1 me-2"></i>Invoice
								</a>
							</li>
							<li>
								<a [routerLink]="routes.expenses" class="dropdown-item d-flex align-items-center">
									<i class="isax isax-money-send me-2"></i>Expense
								</a>
							</li>
							<li>
								<a [routerLink]="routes.addCreditNotes" class="dropdown-item d-flex align-items-center">
									<i class="isax isax-money-add me-2"></i>Credit Notes
								</a>
							</li>
							<li>
								<a [routerLink]="routes.addDebitNotes" class="dropdown-item d-flex align-items-center">
									<i class="isax isax-money-recive me-2"></i>Debit Notes
								</a>
							</li>
							<li>
								<a [routerLink]="routes.addPurchaseOrder" class="dropdown-item d-flex align-items-center">
									<i class="isax isax-document me-2"></i>Purchase Order
								</a>
							</li>
							<li>
								<a [routerLink]="routes.addQuotations" class="dropdown-item d-flex align-items-center">
									<i class="isax isax-document-download me-2"></i>Quotation
								</a>
							</li>
							<li>
								<a [routerLink]="routes.addDeliveryChallan" class="dropdown-item d-flex align-items-center">
									<i class="isax isax-document-forward me-2"></i>Delivery Challan
								</a>
							</li>
						</ul>
					</div>

					<!-- Breadcrumb -->
					<nav aria-label="breadcrumb">
						<ol class="breadcrumb breadcrumb-divide mb-0">
							<li class="breadcrumb-item d-flex align-items-center">
							  <a [routerLink]="routes.index">
								<i class="isax isax-home-2 me-1"></i>Home
							  </a>
							</li>
							<ng-container *ngFor="let mainMenus of bread_Crumb">
							  <li 
								*ngIf="!mainMenus.hasSubData && (base === mainMenus.base || page === mainMenus.base)" 
								class="breadcrumb-item active" 
								aria-current="page">
								{{ mainMenus.data }}
							  </li>
							  <ng-container *ngIf="mainMenus.hasSubData && (page === mainMenus.page || last === mainMenus.page)">
								<li class="breadcrumb-item d-flex align-items-center">
								  <a [routerLink]="mainMenus.route">{{ mainMenus.data }}</a>
								</li>
								<li class="breadcrumb-item active" aria-current="page">
								  {{ mainMenus.data2 }}
								</li>
							  </ng-container>
						  
							</ng-container>
						  </ol>
						  
					</nav>

				</div>

				<div class="d-flex align-items-center">

					<!-- Search -->
					<div class="input-icon-end position-relative me-2">
						<input type="text" class="form-control" placeholder="Search">
						<span class="input-icon-addon">
							<i class="isax isax-search-normal"></i>
						</span>
					</div>
					<!-- /Search -->

					<!-- Language Selector -->
					<div class="nav-item flag-nav me-2">
						<app-language-selector></app-language-selector>
					</div>

					<!-- Notification -->
					<div class="notification_item me-2">
						<a href="javascript:void(0);" class="btn btn-menubar position-relative" id="notification_popup" data-bs-toggle="dropdown" data-bs-auto-close="outside">
							<i class="isax isax-notification-bing5"></i>
							<span class="position-absolute badge bg-success border border-white"></span>
						</a>
						<div class="dropdown-menu p-0 dropdown-menu-end dropdown-menu-lg" style="min-height: 300px;">

							<div class="p-2 border-bottom">
								<div class="row align-items-center">
									<div class="col">
										<h6 class="m-0 fs-16 fw-semibold"> Notifications</h6>
									</div>
									<div class="col-auto">
										<div class="dropdown">
											<a href="javascript:void(0);" class="dropdown-toggle drop-arrow-none link-dark" data-bs-toggle="dropdown" data-bs-offset="0,15" aria-expanded="false">
												<i class="isax isax-setting-2 fs-16 text-body align-middle"></i>
											</a>
											<div class="dropdown-menu dropdown-menu-end">
												<!-- item-->
												<a href="javascript:void(0);" class="dropdown-item"><i class="ti ti-bell-check me-1"></i>Mark as Read</a>
												<!-- item-->
												<a href="javascript:void(0);" class="dropdown-item"><i class="ti ti-trash me-1"></i>Delete All</a>
											</div>
										</div>
									</div>
								</div>
							</div>

							<!-- Notification Dropdown -->
							<div class="notification-body position-relative z-2 rounded-0" data-simplebar>

								<!-- Item-->
								<div class="dropdown-item notification-item py-2 text-wrap border-bottom" id="notification-1">
									<div class="d-flex">
										<div class="me-2 position-relative flex-shrink-0">
											<img src="assets/img/profiles/avatar-05.jpg" class="avatar-md rounded-circle" alt="">
										</div>
										<div class="flex-grow-1">
											<p class="mb-0 fw-semibold text-dark">John Smith</p>
											<p class="mb-1 text-wrap fs-14">
												A <span class="fw-semibold">new sale</span> has been recorded.
											</p>
											<div class="d-flex justify-content-between align-items-center">
												<span class="fs-12"><i class="isax isax-clock me-1"></i>4 min ago</span>
												<div class="notification-action d-flex align-items-center float-end gap-2">
													<a href="javascript:void(0);" class="notification-read rounded-circle bg-info" data-bs-toggle="tooltip" title="" data-bs-original-title="Make as Read" aria-label="Make as Read"></a>
													<button class="btn rounded-circle text-danger p-0" data-dismissible="#notification-1">
														<i class="isax isax-close-circle fs-12"></i>
													</button>
												</div>
											</div>
										</div>
									</div>
								</div>

								<!-- Item-->
								<div class="dropdown-item notification-item py-2 text-wrap border-bottom" id="notification-2">
									<div class="d-flex">
										<div class="flex-shrink-0">
											<div class="avatar-sm me-2">
												<span class="avatar-title bg-soft-info text-info fs-18 rounded-circle">
													  D
												 </span>
											</div>
										</div>
										<div class="flex-grow-1">
											<p class="mb-0 fw-semibold text-dark">Donoghue Susan</p>
											<p class="mb-0 text-wrap fs-14">
												Switched to a lower-tier package
											</p>
											<div class="d-flex justify-content-between align-items-center">
												<span class="fs-12"><i class="isax isax-clock me-1"></i>4 min ago</span>
												<div class="notification-action d-flex align-items-center float-end gap-2">
													<a href="javascript:void(0);" class="notification-read rounded-circle bg-info" data-bs-toggle="tooltip" title="" data-bs-original-title="Make as Read" aria-label="Make as Read"></a>
													<button class="btn rounded-circle text-danger p-0" data-dismissible="#notification-2">
														<i class="isax isax-close-circle fs-12"></i>
													</button>
												</div>
											</div>
										</div>
									</div>
								</div>

								<!-- Item-->
								<div class="dropdown-item notification-item py-2 text-wrap border-bottom" id="notification-3">
									<div class="d-flex">
										<div class="me-2 position-relative flex-shrink-0">
											<img src="assets/img/profiles/avatar-03.jpg" class="avatar-md rounded-circle" alt="">
										</div>
										<div class="flex-grow-1">
											<p class="mb-0 fw-semibold text-dark">Robert Fox </p>
											<p class="mb-1 text-wrap fs-14">
												Completed payment for <span class="fw-semibold">#INV00025</span>
											</p>
											<div class="d-flex justify-content-between align-items-center">
												<span class="fs-12"><i class="isax isax-clock me-1"></i>4 min ago</span>
												<div class="notification-action d-flex align-items-center float-end gap-2">
													<a href="javascript:void(0);" class="notification-read rounded-circle bg-info" data-bs-toggle="tooltip" title="" data-bs-original-title="Make as Read" aria-label="Make as Read"></a>
													<button class="btn rounded-circle text-danger p-0" data-dismissible="#notification-3">
														<i class="isax isax-close-circle fs-12"></i>
													</button>
												</div>
											</div>
										</div>
									</div>
								</div>

								<!-- Item-->
								<div class="dropdown-item notification-item py-2 text-wrap border-bottom" id="notification-4">
									<div class="d-flex">
										<div class="flex-shrink-0">
											<div class="avatar-sm me-2">
												<span class="avatar-title bg-soft-warning text-warning fs-18 rounded-circle">
													<i class="isax isax-message"></i>
												</span>
											</div>
										</div>
										<div class="flex-grow-1">
											<p class="mb-0 text-wrap fs-14">You have received <span class="fw-semibold">20</span> new messages in the conversation</p>
											<div class="d-flex justify-content-between align-items-center">
												<span class="fs-12"><i class="isax isax-clock me-1"></i>3 min ago</span>
												<div class="notification-action d-flex align-items-center float-end gap-2">
													<a href="javascript:void(0);" class="notification-read rounded-circle bg-info" data-bs-toggle="tooltip" title="" data-bs-original-title="Make as Read" aria-label="Make as Read"></a>
													<button class="btn rounded-circle text-danger p-0" data-dismissible="#notification-4">
														<i class="isax isax-close-circle fs-12"></i>
													</button>
												</div>
											</div>
										</div>
									</div>
								</div>

								<!-- Item-->
								<div class="dropdown-item notification-item py-2 text-wrap border-bottom" id="notification-5">
									<div class="d-flex">
										<div class="me-2 position-relative flex-shrink-0">
											<img src="assets/img/profiles/avatar-17.jpg" class="avatar-md rounded-circle" alt="">
										</div>
										<div class="flex-grow-1">
											<p class="mb-0 fw-semibold text-dark">Charlotte Brown</p>
											<p class="mb-1 text-wrap fs-14">
												New invoice generated <span class="fw-semibold"> #INV00028</span>
											</p>
											<div class="mb-1">
												<a class="badge bg-success p-2 py-1 me-1" href="javascript:void(0);">Approve</a>
												<a class="badge bg-danger p-2 py-1" href="javascript:void(0);">Deny</a>
											</div>
											<div class="d-flex justify-content-between align-items-center">
												<span class="fs-12"><i class="isax isax-clock me-1"></i>45 min ago</span>
												<div class="notification-action d-flex align-items-center float-end gap-2">
													<a href="javascript:void(0);" class="notification-read rounded-circle bg-info" data-bs-toggle="tooltip" title="" data-bs-original-title="Make as Read" aria-label="Make as Read"></a>
													<button class="btn rounded-circle text-danger p-0" data-dismissible="#notification-5">
														<i class="isax isax-close-circle fs-12"></i>
													</button>
												</div>
											</div>
										</div>
									</div>
								</div>

							</div>

							<!-- View All-->
							<div class="p-2 rounded-bottom border-top text-center">
								<a [routerLink]="routes.notifications" class="text-center fw-medium fs-14 mb-0">
									View All
								</a>
							</div>

						</div>
					</div>

					<!-- Light/Dark Mode Button -->
					<div class="me-2 theme-item" [ngClass]="{'d-none':base==='layout-dark'}">
						<a href="javascript:void(0);" id="dark-mode-toggle" class="theme-toggle btn btn-menubar" [ngClass]="{'activate' : themeColor==='light'}" (click)="sideBar.changeThemeColor('dark')">
							<i class="isax isax-moon"></i>
						</a>
						<a href="javascript:void(0);" id="light-mode-toggle" class="theme-toggle btn btn-menubar" [ngClass]="{'activate' : themeColor==='dark'}" (click)="sideBar.changeThemeColor('light')" >
							<i class="isax isax-sun-1"></i>
						</a>
					</div>

					<!-- User Dropdown -->
					<div class="dropdown profile-dropdown">
						<a href="javascript:void(0);" class="dropdown-toggle d-flex align-items-center" data-bs-toggle="dropdown" data-bs-auto-close="outside">
							<span class="avatar online">
								<img [src]="getUserAvatar()" alt="Img" class="img-fluid rounded-circle">
							</span>
						</a>
						<div class="dropdown-menu p-2">
							<div class="d-flex align-items-center bg-light rounded-1 p-2 mb-2">
								<span class="avatar avatar-lg me-2">
									<img [src]="getUserAvatar()" alt="img" class="rounded-circle" >
								</span>
								<div>
									<h6 class="fs-14 fw-medium mb-1">{{ currentUser?.nomPrenom || 'Utilisateur' }}</h6>
									<p class="fs-13">{{ currentUser?.roles?.[0] || 'Administrator' }}</p>
								</div>
							</div>

							<!-- Item-->
							<a class="dropdown-item d-flex align-items-center" [routerLink]="routes.accountSettings">
								<i class="isax isax-profile-circle me-2"></i>Profile Settings
							</a>

							<!-- Item-->
							<a class="dropdown-item d-flex align-items-center" [routerLink]="routes.inventoryReport">
								<i class="isax isax-document-text me-2"></i>Reports
							</a>

							<!-- Item-->
							<div class="form-check form-switch form-check-reverse d-flex align-items-center justify-content-between dropdown-item mb-0">
								<label class="form-check-label" for="notify"><i class="isax isax-notification me-2"></i>Notifications</label>
								<input class="form-check-input" type="checkbox" role="switch" id="notify">
							</div>

							<hr class="dropdown-divider my-2">

							<!-- Item-->
							<a class="dropdown-item logout d-flex align-items-center" (click)="logOut()">
								<i class="isax isax-logout me-2"></i>Sign Out
							</a>
						</div>
					</div>

				</div>
			</div>
		</div>

		<!-- Mobile Menu -->
		<div class="dropdown mobile-user-menu profile-dropdown">
			<a href="javascript:void(0);" class="dropdown-toggle d-flex align-items-center" data-bs-toggle="dropdown" data-bs-auto-close="outside">
				<span class="avatar avatar-md online">
					<img [src]="getUserAvatar()" alt="Img" class="img-fluid rounded-circle">
				</span>
			</a>
			<div class="dropdown-menu p-2 mt-0">
				<div class="d-flex align-items-center bg-light rounded-1 p-2 mb-2">
					<span class="avatar avatar-lg me-2">
						<img [src]="getUserAvatar()" alt="img" class="rounded-circle" >
					</span>
					<div>
						<h6 class="fs-14 fw-medium mb-1">{{ currentUser?.nomPrenom || 'Utilisateur' }}</h6>
						<p class="fs-13">{{ currentUser?.roles?.[0] || 'Administrator' }}</p>
					</div>
				</div>
				<a class="dropdown-item d-flex align-items-center" [routerLink]="routes.profile">
					<i class="isax isax-profile-circle me-2"></i>Profile Settings
				</a>
				<a class="dropdown-item d-flex align-items-center" [routerLink]="routes.stockSummary">
					<i class="isax isax-document-text me-2"></i>Reports
				</a>
				<a class="dropdown-item d-flex align-items-center" [routerLink]="routes.accountSettings">
					<i class="isax isax-setting me-2"></i>Settings
				</a>
				<a class="dropdown-item logout d-flex align-items-center" (click)="logOut()">
					<i class="isax isax-logout me-2"></i>Signout
				</a>
			</div>
		</div>
		<!-- /Mobile Menu -->

	</div>
</div>
` }]
  }], () => [{ type: AuthService }, { type: SideBarService }, { type: DataService }, { type: Router }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(HeaderOneComponent, { className: "HeaderOneComponent", filePath: "src/app/features/common/headers/header-one/header-one.component.ts", lineNumber: 26 });
})();

// src/app/features/common/layout/layout.component.ts
var _c06 = (a0) => ({ "active": a0 });
var _c14 = (a0) => ({ "background-color": a0 });
var LayoutComponent = class _LayoutComponent {
  settings;
  sidebar;
  routes = routes;
  layoutMode = "default";
  layoutWidth = "fluid";
  cardStyle = "1";
  sidebarColor = "light";
  dynamicSidebarColor = "";
  themeColor = "light";
  sidebarSize = "1";
  isLoader = "1";
  primaryColor = "primary";
  primaryColor1 = "1";
  topbarColor2 = "1";
  topbarColor3 = "1";
  topbarColor4 = "1";
  topbarColor = "white";
  topbarImage = "1";
  sidebarImage = "";
  selectedColor = "84, 109, 254, 1";
  selectedColor1 = "84, 109, 254, 1";
  // Default HEX color
  horizontalColor = "84, 109, 254, 1";
  dthemeColor = "84, 109, 254, 1";
  rgbaValues = "84, 109, 254, 1";
  // Default RGBA values without "rgba()"
  rgbaValues1 = "84, 109, 254, 1";
  rgbaValues2 = "84, 109, 254, 1";
  rgbaValues3 = "84, 109, 254, 1";
  constructor(settings, sidebar) {
    this.settings = settings;
    this.sidebar = sidebar;
    this.settings.layoutMode.subscribe((res) => {
      this.layoutMode = res;
    });
    this.settings.layoutWidth.subscribe((res) => {
      this.layoutWidth = res;
    });
    this.settings.sidebarColor.subscribe((res) => {
      this.sidebarColor = res;
    });
    this.settings.themeColor.subscribe((res) => {
      this.themeColor = res;
    });
    this.settings.primaryColor.subscribe((res) => {
      this.primaryColor = res;
    });
    this.settings.topbarColor.subscribe((res) => {
      this.topbarColor = res;
    });
    this.settings.sidebarImage.subscribe((res) => {
      this.sidebarImage = res;
    });
    this.settings.sidebarColor2.subscribe((res) => {
      this.selectedColor = res;
    });
    this.settings.topbarColor2.subscribe((res) => {
      this.selectedColor1 = res;
    });
    this.settings.topbarColor4.subscribe((res) => {
      this.topbarColor4 = res;
    });
    this.settings.primaryColor1.subscribe((res) => {
      this.primaryColor1 = res;
    });
  }
  setColor() {
    this.settings.changeSidebarColor("all");
    this.rgbaValues = this.hexToRgbaValues(this.selectedColor, 1);
    this.settings.changeSidebarColor2(this.rgbaValues);
  }
  setColor1() {
    this.settings.changeTopbarColor("all");
    this.rgbaValues1 = this.hexToRgbaValues(this.selectedColor1, 1);
    this.settings.changeTopbarColor3(this.rgbaValues1);
  }
  sethorizontalColor() {
    this.settings.changeTopbarColor2("7");
    this.rgbaValues2 = this.hexToRgbaValues(this.horizontalColor, 1);
    this.settings.changeTopbarHorizontalColor(this.rgbaValues2);
  }
  setprimaryColor() {
    this.settings.changePrimaryColor("all");
    this.rgbaValues3 = this.hexToRgbaValues(this.dthemeColor, 1);
    this.settings.changePrimaryColor1(this.rgbaValues3);
  }
  // Function to convert HEX to RGBA values string without "rgba()"
  hexToRgbaValues(hex, alpha) {
    const r = parseInt(hex.slice(1, 3), 16);
    const g = parseInt(hex.slice(3, 5), 16);
    const b = parseInt(hex.slice(5, 7), 16);
    return `${r}, ${g}, ${b}`;
  }
  ngOnInit() {
    const layout = localStorage.getItem("layoutMode") || "default";
    const layoutWidth = localStorage.getItem("layoutWidth") || "fluid";
    const sidebarColor = localStorage.getItem("sidebarColor") || "1";
    const themeColor = localStorage.getItem("themeColor") || "1";
    const primaryColor = localStorage.getItem("primaryColor") || "primary";
    const topbarColor = localStorage.getItem("topbarColor") || "white";
    const topbarColor2 = localStorage.getItem("topbarColor2") || "1";
    const sidebarImage = localStorage.getItem("sidebarImage") || "";
    const dynamicColorSidebar = localStorage.getItem("sidebarColor2") || "1";
    this.rgbaValues = dynamicColorSidebar;
    this.settings.changeLayoutMode(layout);
    this.settings.changeLayoutWidth(layoutWidth);
    this.settings.changeSidebarColor(sidebarColor);
    this.settings.changeThemeColor(themeColor);
    this.settings.changePrimaryColor(primaryColor);
    this.settings.changeTopbarColor2(topbarColor2);
    this.settings.changeTopbarColor(topbarColor);
    this.settings.changeSidebarImage(sidebarImage);
    this.settings.changeSidebarColor2(dynamicColorSidebar);
  }
  changeLayoutMode(layout) {
    this.settings.layoutMode.next(layout);
    this.settings.changeLayoutMode(layout);
    localStorage.setItem("layoutMode", layout);
  }
  changeLayoutWidth(width) {
    this.settings.layoutWidth.next(width);
    this.settings.changeLayoutWidth(width);
    localStorage.setItem("layoutWidth", width);
  }
  changeTopbarColor(topbar) {
    this.settings.topbarColor.next(topbar);
    localStorage.setItem("topbarColor", topbar);
  }
  changeSidebarColor(sidebarColor) {
    this.settings.sidebarColor.next(sidebarColor);
    localStorage.setItem("sidebarColor", sidebarColor);
  }
  toggleSidebar() {
    this.sidebar.sideBarPosition.next("true");
    this.sidebar.expandSideBar.next("false");
    localStorage.setItem("sideBarPosition", "true");
  }
  toggleSidebar2() {
    this.sidebar.sideBarPosition.next("false");
    this.sidebar.expandSideBar.next("true");
    localStorage.removeItem("sideBarPosition");
  }
  resetAllMode() {
    this.settings.changeLayoutMode("default");
    this.settings.changeLayoutWidth("fluid");
    this.settings.changeSidebarColor("light");
    this.settings.changeThemeColor("light");
    this.settings.changeTopbarColor("white");
    this.settings.changeTopbarColor2("1");
    this.settings.changePrimaryColor("primary");
    this.settings.changeSidebarImage("");
    this.rgbaValues = "84, 109, 254, 1";
  }
  static \u0275fac = function LayoutComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _LayoutComponent)(\u0275\u0275directiveInject(SettingsService), \u0275\u0275directiveInject(SideBarService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _LayoutComponent, selectors: [["app-layout"]], decls: 383, vars: 57, consts: [[1, "sidebar-contact"], ["data-bs-toggle", "offcanvas", "data-bs-target", "#theme-setting", 1, "toggle-theme"], [1, "fa-solid", "fa-gear", "fa-spin"], ["id", "theme-setting", 1, "sidebar-themesettings", "offcanvas", "offcanvas-end"], [1, "offcanvas-header", "d-flex", "align-items-center", "justify-content-between", "bg-primary"], [1, "mb-0", "text-white"], ["href", "javascript:void(0);", "data-bs-dismiss", "offcanvas", 1, "custom-btn-close", "d-flex", "align-items-center", "justify-content-center", "text-white"], [1, "isax", "isax-close-circle"], [1, "themecard-body", "offcanvas-body"], ["id", "settingtheme", 1, "accordion", "accordion-customicon1", "accordions-items-seperate"], [1, "accordion-item"], [1, "accordion-header"], ["type", "button", "data-bs-toggle", "collapse", "data-bs-target", "#layoutsetting", "aria-expanded", "true", "aria-controls", "collapsecustomicon1One", 1, "accordion-button", "text-gray-9", "fw-semibold", "fs-16"], [1, "ti", "ti-circle-chevron-up", "ms-auto", "text-primary"], ["id", "layoutsetting", 1, "accordion-collapse", "collapse", "show"], [1, "accordion-body"], [1, "theme-content"], [1, "row", "gx-3"], [1, "col-4"], [1, "theme-layout", "mb-3"], ["type", "radio", "name", "LayoutTheme", "id", "defaultLayout", "value", "default", 3, "checked"], ["for", "defaultLayout", "tabindex", "0", 3, "click", "keydown.enter"], [1, "d-block", "mb-2", "layout-img"], [1, "theme-check", "rounded-circle"], [1, "fa-solid", "fa-check"], ["src", "assets/img/theme/default.svg", "alt", "img"], [1, "layout-type"], ["type", "radio", "name", "LayoutTheme", "id", "singleLayout", "value", "single", 3, "checked"], ["for", "singleLayout", "tabindex", "0", 3, "click", "keydown.enter"], ["src", "assets/img/theme/single.svg", "alt", "img"], ["type", "radio", "name", "LayoutTheme", "id", "miniLayout", "value", "mini", 3, "checked"], ["for", "miniLayout", "tabindex", "0", 3, "click", "keydown.enter"], ["src", "assets/img/theme/mini.svg", "alt", "img"], ["type", "radio", "name", "LayoutTheme", "id", "twocolumnLayout", "value", "twocolumn", 3, "checked"], ["for", "twocolumnLayout", "tabindex", "0", 3, "click", "keydown.enter"], ["src", "assets/img/theme/transparent.svg", "alt", "img"], ["type", "radio", "name", "LayoutTheme", "id", "without-headerLayout", "value", "without-header", 3, "checked"], ["for", "without-headerLayout", 3, "click", "keydown.enter"], ["src", "assets/img/theme/without-header.svg", "alt", "img"], [1, "theme-layout", "mb-3", 3, "routerLink"], ["src", "assets/img/theme/rtl.svg", "alt", "img"], [1, "layout-type", "d-block"], ["type", "button", "data-bs-toggle", "collapse", "data-bs-target", "#sidebarsetting", "aria-expanded", "true", 1, "accordion-button", "text-gray-9", "fw-semibold", "fs-16"], ["id", "sidebarsetting", 1, "accordion-collapse", "collapse", "show"], [1, "d-flex", "align-items-center"], [1, "theme-width", "m-1", "me-2"], ["type", "radio", "name", "width", "id", "fluidWidth", "value", "fluid", 3, "checked"], ["for", "fluidWidth", "tabindex", "0", 1, "d-block", "rounded", "fs-12", 3, "click", "keydown.enter"], [1, "ti", "ti-layout-list", "me-1"], [1, "theme-width", "m-1"], ["type", "radio", "name", "width", "id", "boxWidth", "value", "box", 3, "checked"], ["for", "boxWidth", "tabindex", "0", 1, "d-block", "rounded", "fs-12", 3, "click", "keydown.enter"], [1, "ti", "ti-layout-distribute-horizontal", "me-1"], [1, "mb-2", "text-gray-9"], [1, "theme-colorselect", "m-1", "me-3"], ["type", "radio", "name", "sidebar", "id", "lightSidebar", "value", "light", 3, "checked"], ["for", "lightSidebar", "tabindex", "0", 1, "d-block", "rounded", "mb-2", 3, "click", "keydown.enter"], ["type", "radio", "name", "sidebar", "id", "whiteSidebar", "value", "sidebar2", 3, "checked"], ["for", "whiteSidebar", "tabindex", "0", 1, "d-block", "rounded", "bg-white", "mb-2", 3, "click", "keydown.enter"], [1, "theme-colorselect", "me-3"], ["type", "radio", "name", "sidebar", "id", "bgcolorSidebar", "value", "sidebar3", 3, "checked"], ["for", "bgcolorSidebar", "tabindex", "0", 1, "d-block", "rounded", "bg-dark", "mb-2", 3, "click", "keydown.enter"], ["type", "radio", "name", "sidebar", "id", "bgcolor2Sidebar", "value", "sidebar4", 3, "checked"], ["for", "bgcolor2Sidebar", "tabindex", "0", 1, "d-block", "bg-primary", "mb-2", 3, "click", "keydown.enter"], ["type", "radio", "name", "sidebar", "id", "bgcolor3Sidebar", "value", "sidebar5", 3, "checked"], ["for", "bgcolor3Sidebar", "tabindex", "0", 1, "d-block", "bg-secondary", "mb-2", 3, "click", "keydown.enter"], ["type", "radio", "name", "sidebar", "id", "bgcolor4Sidebar", "value", "sidebar6", 3, "checked"], ["for", "bgcolor4Sidebar", "tabindex", "0", 1, "d-block", "rounded", "bg-info", "mb-2", 3, "click", "keydown.enter"], ["type", "radio", "name", "sidebar", "id", "bgcolor5Sidebar", "value", "sidebar7", 3, "checked"], ["for", "bgcolor5Sidebar", "tabindex", "0", 1, "d-block", "rounded", "bg-success", "mb-2", 3, "click", "keydown.enter"], ["type", "radio", "name", "sidebar", "id", "bgcolor6Sidebar", "value", "sidebarcolorsix", 3, "checked"], ["for", "bgcolor6Sidebar", "tabindex", "0", 1, "d-block", "bg-sidebar-color-6", "mb-2", 3, "click", "keydown.enter"], [1, "theme-colorselect", "position-relative", "dynamic-box2", "mt-0", 3, "ngClass"], [1, "select-color", "position-absolute"], [1, "ti", "ti-palette"], ["type", "color", "name", "sidebar", "id", "dynamicColor", 3, "ngModelChange", "input", "ngModel"], ["for", "dynamicColor", 1, "d-block", "rounded", "mb-2", 3, "ngStyle"], ["type", "radio", "name", "sidebar", "id", "bgcolor7Sidebar", "value", "gradientsidebar1", 3, "checked"], ["for", "bgcolor7Sidebar", "tabindex", "0", 1, "d-block", "rounded", "bg-primary", "bg-gradient", "mb-2", 3, "click", "keydown.enter"], ["type", "radio", "name", "sidebar", "id", "bgcolor8Sidebar", "value", "gradientsidebar2", 3, "checked"], ["for", "bgcolor8Sidebar", "tabindex", "0", 1, "d-block", "rounded", "bg-secondary", "bg-gradient", "mb-2", 3, "click", "keydown.enter"], ["type", "radio", "name", "sidebar", "id", "bgcolor9Sidebar", "value", "gradientsidebar3", 3, "checked"], ["for", "bgcolor9Sidebar", "tabindex", "0", 1, "d-block", "rounded", "bg-success", "bg-gradient", "mb-2", 3, "click", "keydown.enter"], ["type", "radio", "name", "sidebar", "id", "bgcolor10Sidebar", "value", "gradientsidebar4", 3, "checked"], ["for", "bgcolor10Sidebar", "tabindex", "0", 1, "d-block", "rounded", "bg-info", "bg-gradient", "mb-2", 3, "click", "keydown.enter"], ["type", "radio", "name", "sidebar", "id", "bgcolor11Sidebar", "value", "gradientsidebar5", 3, "checked"], ["for", "bgcolor11Sidebar", "tabindex", "0", 1, "d-block", "rounded", "bg-dark", "bg-gradient", "mb-2", 3, "click", "keydown.enter"], ["type", "radio", "name", "sidebar", "id", "bgcolor12Sidebar", "value", "gradientsidebar6", 3, "checked"], ["for", "bgcolor12Sidebar", "tabindex", "0", 1, "d-block", "rounded", "bg-danger", "bg-gradient", "mb-2", 3, "click", "keydown.enter"], ["type", "button", "data-bs-toggle", "collapse", "data-bs-target", "#layoutsetting7", "aria-expanded", "true", "aria-controls", "collapsecustomicon1nine", 1, "accordion-button", "text-gray-9", "fw-semibold", "fs-16"], ["id", "layoutsetting7", 1, "accordion-collapse", "collapse", "show"], ["type", "radio", "name", "LayoutTheme", "id", "defaultLayout2", "value", "default", 3, "checked"], ["for", "defaultLayout2", "tabindex", "0", 3, "click", "keydown.enter"], ["type", "radio", "name", "LayoutTheme", "id", "singleLayout2", "value", "single", 3, "checked"], ["for", "singleLayout2", "tabindex", "0", 3, "click", "keydown.enter"], ["type", "radio", "name", "LayoutTheme", "id", "compactLayout", "value", "mini", 3, "checked"], ["for", "compactLayout", "tabindex", "0", 3, "click", "keydown.enter"], ["type", "button", "data-bs-toggle", "collapse", "data-bs-target", "#colorsetting", "aria-expanded", "true", 1, "accordion-button", "text-gray-9", "fw-semibold", "fs-16"], ["id", "colorsetting", 1, "accordion-collapse", "collapse", "show"], [1, "accordion-body", "pb-1"], [1, "d-flex", "align-items-center", "flex-wrap", "topbar-background"], ["tabindex", "0", 1, "theme-colorselect", "mb-3", "me-3", 3, "click", "keydown.enter"], ["type", "radio", "name", "topbar", "id", "whiteTopbar", "value", "white", 3, "checked"], ["for", "whiteTopbar", 1, "bg-white"], ["type", "radio", "name", "topbar", "id", "darkaquaTopbar", "value", "topbar1", 3, "checked"], ["for", "darkaquaTopbar", 1, "bg-light"], ["type", "radio", "name", "topbar", "id", "whiterockTopbar", "value", "topbar2", 3, "checked"], ["for", "whiterockTopbar", 1, "bg-dark"], ["type", "radio", "name", "topbar", "id", "rockblueTopbar", "value", "topbar3", 3, "checked"], ["for", "rockblueTopbar", 1, "bg-primary"], ["type", "radio", "name", "topbar", "id", "bluehazeTopbar", "value", "topbar4", 3, "checked"], ["for", "bluehazeTopbar", 1, "bg-secondary"], ["tabindex", "0", 1, "theme-colorselect", "mb-3", 3, "click", "keydown.enter"], ["type", "radio", "name", "topbar", "id", "topbar-color-5", "value", "topbar5", 3, "checked"], ["for", "topbar-color-5", 1, "bg-info"], ["tabindex", "0", 1, "theme-colorselect", "mb-3", "ms-3", 3, "click", "keydown.enter"], ["type", "radio", "name", "topbar", "id", "topbar-color-6", "value", "topbar6", 3, "checked"], ["for", "topbar-color-6", 1, "bg-success"], [1, "theme-colorselect", "theme-colorselect-rounded", "mb-3", "me-3"], ["type", "radio", "name", "topbar", "id", "topbar-color-7", "value", "gradienttopbar1", 3, "checked"], ["for", "topbar-color-7", "tabindex", "0", 1, "bg-primary", "bg-gradient", 3, "click", "keydown.enter"], ["tabindex", "0", 1, "theme-colorselect", "theme-colorselect-rounded", "mb-3", "me-3", 3, "click", "keydown.enter"], ["type", "radio", "name", "topbar", "id", "topbar-color-8", "value", "gradienttopbar2", 3, "checked"], ["for", "topbar-color-8", 1, "bg-secondary", "bg-gradient"], ["type", "radio", "name", "topbar", "id", "topbar-color-9", "value", "gradienttopbar3", 3, "checked"], ["for", "topbar-color-9", 1, "bg-success", "bg-gradient"], ["type", "radio", "name", "topbar", "id", "topbar-color-10", "value", "gradienttopbar4", 3, "checked"], ["for", "topbar-color-10", 1, "bg-info", "bg-gradient"], ["type", "radio", "name", "topbar", "id", "topbar-color-11", "value", "gradienttopbar5", 3, "checked"], ["for", "topbar-color-11", 1, "bg-dark", "bg-gradient"], ["type", "radio", "name", "topbar", "id", "topbar-color-12", "value", "gradienttopbar6", 3, "checked"], ["for", "topbar-color-12", 1, "bg-danger", "bg-gradient"], ["type", "button", "data-bs-toggle", "collapse", "data-bs-target", "#sidebarbgsetting", "aria-expanded", "true", 1, "accordion-button", "text-gray-9", "fw-semibold", "fs-16"], ["id", "sidebarbgsetting", 1, "accordion-collapse", "collapse", "show"], [1, "d-flex", "align-items-center", "flex-wrap"], [1, "theme-sidebarbg", "me-3", "mb-3"], ["type", "radio", "name", "sidebarbg", "id", "sidebarbg6", "value", "sidebarbg1", 3, "checked"], ["for", "sidebarbg6", "tabindex", "0", 1, "d-block", "rounded", 3, "click", "keydown.enter"], [1, "theme-check2", "rounded-circle"], ["src", "assets/img/theme/sidebar-bg-01.svg", "alt", "img", 1, "rounded"], ["type", "radio", "name", "sidebarbg", "id", "sidebarBg2", "value", "sidebarbg2", 3, "checked"], ["for", "sidebarBg2", "tabindex", "0", 1, "d-block", "rounded", 3, "click", "keydown.enter"], ["src", "assets/img/theme/sidebar-bg-02.svg", "alt", "img", 1, "rounded"], ["type", "radio", "name", "sidebarbg", "id", "sidebarBg3", "value", "sidebarbg3", 3, "checked"], ["for", "sidebarBg3", "tabindex", "0", 1, "d-block", "rounded", 3, "click", "keydown.enter"], ["src", "assets/img/theme/sidebar-bg-03.svg", "alt", "img", 1, "rounded"], ["type", "radio", "name", "sidebarbg", "id", "sidebarBg4", "value", "sidebarbg4", 3, "checked"], ["for", "sidebarBg4", "tabindex", "0", 1, "d-block", "rounded", 3, "click", "keydown.enter"], ["src", "assets/img/theme/sidebar-bg-04.svg", "alt", "img", 1, "rounded"], ["type", "radio", "name", "sidebarbg", "id", "sidebarBg5", "value", "sidebarbg5", 3, "checked"], ["for", "sidebarBg5", "tabindex", "0", 1, "d-block", "rounded", 3, "click", "keydown.enter"], ["src", "assets/img/theme/sidebar-bg-05.svg", "alt", "img", 1, "rounded"], ["type", "radio", "name", "sidebarbg", "id", "sidebarBg6", "value", "sidebarbg6", 3, "checked"], ["for", "sidebarBg6", "tabindex", "0", 1, "d-block", "rounded", 3, "click", "keydown.enter"], ["src", "assets/img/theme/sidebar-bg-06.svg", "alt", "img", 1, "rounded"], ["type", "button", "data-bs-toggle", "collapse", "data-bs-target", "#sidebarcolor", "aria-expanded", "true", 1, "accordion-button", "text-gray-9", "fw-semibold", "fs-16"], ["id", "sidebarcolor", 1, "accordion-collapse", "collapse", "show"], [1, "theme-colorsset", "me-2", "mb-2"], ["type", "radio", "name", "color", "id", "primaryColor", "value", "primary", 3, "checked"], ["for", "primaryColor", "tabindex", "0", 1, "primary-clr", 3, "click", "keydown.enter"], ["type", "radio", "name", "color", "id", "secondaryColor", "value", "secondary", 3, "checked"], ["for", "secondaryColor", "tabindex", "0", 1, "secondary-clr", 3, "click", "keydown.enter"], ["type", "radio", "name", "color", "id", "successColor", "value", "success", 3, "checked"], ["for", "successColor", "tabindex", "0", 1, "success-clr", 3, "click", "keydown.enter"], ["type", "radio", "name", "color", "id", "dangerColor", "value", "danger", 3, "checked"], ["for", "dangerColor", "tabindex", "0", 1, "danger-clr", 3, "click", "keydown.enter"], ["type", "radio", "name", "color", "id", "infoColor", "value", "info", 3, "checked"], ["for", "infoColor", "tabindex", "0", 1, "info-clr", 3, "click", "keydown.enter"], ["type", "radio", "name", "color", "id", "warningColor", "value", "warning", 3, "checked"], ["for", "warningColor", "tabindex", "0", 1, "warning-clr", 3, "click", "keydown.enter"], [1, "p-3", "pt-0"], [1, "col-6"], ["href", "javascript:void(0);", "id", "resetbutton", 1, "btn", "btn-light", "close-theme", "w-100", 3, "click"], [1, "ti", "ti-restore", "me-1"], ["href", "javascript:void(0);", "data-bs-dismiss", "offcanvas", 1, "btn", "btn-primary", "w-100"], [1, "ti", "ti-shopping-cart-plus", "me-1"]], template: function LayoutComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1);
      \u0275\u0275element(2, "i", 2);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(3, "div", 3)(4, "div", 4)(5, "div")(6, "h3", 5);
      \u0275\u0275text(7, "Theme Customizer");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(8, "a", 6);
      \u0275\u0275element(9, "i", 7);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(10, "div", 8)(11, "div", 9)(12, "div", 10)(13, "h2", 11)(14, "button", 12);
      \u0275\u0275text(15, " Select Layouts ");
      \u0275\u0275element(16, "i", 13);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(17, "div", 14)(18, "div", 15)(19, "div", 16)(20, "div", 17)(21, "div", 18)(22, "div", 19);
      \u0275\u0275element(23, "input", 20);
      \u0275\u0275elementStart(24, "label", 21);
      \u0275\u0275listener("click", function LayoutComponent_Template_label_click_24_listener() {
        ctx.settings.changeLayoutMode("default");
        return ctx.toggleSidebar2();
      })("keydown.enter", function LayoutComponent_Template_label_keydown_enter_24_listener() {
        return ctx.settings.changeLayoutMode("default");
      });
      \u0275\u0275elementStart(25, "span", 22)(26, "span", 23);
      \u0275\u0275element(27, "i", 24);
      \u0275\u0275elementEnd();
      \u0275\u0275element(28, "img", 25);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(29, "span", 26);
      \u0275\u0275text(30, "Default");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(31, "div", 18)(32, "div", 19);
      \u0275\u0275element(33, "input", 27);
      \u0275\u0275elementStart(34, "label", 28);
      \u0275\u0275listener("click", function LayoutComponent_Template_label_click_34_listener() {
        ctx.settings.changeLayoutMode("single");
        return ctx.toggleSidebar();
      })("keydown.enter", function LayoutComponent_Template_label_keydown_enter_34_listener() {
        return ctx.settings.changeLayoutMode("single");
      });
      \u0275\u0275elementStart(35, "span", 22)(36, "span", 23);
      \u0275\u0275element(37, "i", 24);
      \u0275\u0275elementEnd();
      \u0275\u0275element(38, "img", 29);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(39, "span", 26);
      \u0275\u0275text(40, "Single");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(41, "div", 18)(42, "div", 19);
      \u0275\u0275element(43, "input", 30);
      \u0275\u0275elementStart(44, "label", 31);
      \u0275\u0275listener("click", function LayoutComponent_Template_label_click_44_listener() {
        ctx.settings.changeLayoutMode("mini");
        return ctx.toggleSidebar();
      })("keydown.enter", function LayoutComponent_Template_label_keydown_enter_44_listener() {
        return ctx.settings.changeLayoutMode("mini");
      });
      \u0275\u0275elementStart(45, "span", 22)(46, "span", 23);
      \u0275\u0275element(47, "i", 24);
      \u0275\u0275elementEnd();
      \u0275\u0275element(48, "img", 32);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(49, "span", 26);
      \u0275\u0275text(50, "Mini");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(51, "div", 18)(52, "div", 19);
      \u0275\u0275element(53, "input", 33);
      \u0275\u0275elementStart(54, "label", 34);
      \u0275\u0275listener("click", function LayoutComponent_Template_label_click_54_listener() {
        return ctx.settings.changeLayoutMode("twocolumn");
      })("keydown.enter", function LayoutComponent_Template_label_keydown_enter_54_listener() {
        return ctx.settings.changeLayoutMode("twocolumn");
      });
      \u0275\u0275elementStart(55, "span", 22)(56, "span", 23);
      \u0275\u0275element(57, "i", 24);
      \u0275\u0275elementEnd();
      \u0275\u0275element(58, "img", 35);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(59, "span", 26);
      \u0275\u0275text(60, "Transparent");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(61, "div", 18)(62, "div", 19);
      \u0275\u0275element(63, "input", 36);
      \u0275\u0275elementStart(64, "label", 37);
      \u0275\u0275listener("click", function LayoutComponent_Template_label_click_64_listener() {
        return ctx.settings.changeLayoutMode("without-header");
      })("keydown.enter", function LayoutComponent_Template_label_keydown_enter_64_listener() {
        return ctx.settings.changeLayoutMode("without-header");
      });
      \u0275\u0275elementStart(65, "span", 22)(66, "span", 23);
      \u0275\u0275element(67, "i", 24);
      \u0275\u0275elementEnd();
      \u0275\u0275element(68, "img", 38);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(69, "span", 26);
      \u0275\u0275text(70, "Without Header");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(71, "div", 18)(72, "a", 39)(73, "span", 22);
      \u0275\u0275element(74, "img", 40);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(75, "span", 41);
      \u0275\u0275text(76, "RTL");
      \u0275\u0275elementEnd()()()()()()()();
      \u0275\u0275elementStart(77, "div", 10)(78, "h2", 11)(79, "button", 42);
      \u0275\u0275text(80, " Layout Width ");
      \u0275\u0275element(81, "i", 13);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(82, "div", 43)(83, "div", 15)(84, "div", 16)(85, "div", 44)(86, "div", 45);
      \u0275\u0275element(87, "input", 46);
      \u0275\u0275elementStart(88, "label", 47);
      \u0275\u0275listener("click", function LayoutComponent_Template_label_click_88_listener() {
        return ctx.settings.changeLayoutWidth("fluid");
      })("keydown.enter", function LayoutComponent_Template_label_keydown_enter_88_listener() {
        return ctx.settings.changeLayoutWidth("fluid");
      });
      \u0275\u0275element(89, "i", 48);
      \u0275\u0275text(90, " Fluid Layout ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(91, "div", 49);
      \u0275\u0275element(92, "input", 50);
      \u0275\u0275elementStart(93, "label", 51);
      \u0275\u0275listener("click", function LayoutComponent_Template_label_click_93_listener() {
        return ctx.settings.changeLayoutWidth("box");
      })("keydown.enter", function LayoutComponent_Template_label_keydown_enter_93_listener() {
        return ctx.settings.changeLayoutWidth("box");
      });
      \u0275\u0275element(94, "i", 52);
      \u0275\u0275text(95, " Boxed Layout ");
      \u0275\u0275elementEnd()()()()()()();
      \u0275\u0275elementStart(96, "div", 10)(97, "h2", 11)(98, "button", 42);
      \u0275\u0275text(99, " Sidebar Color ");
      \u0275\u0275element(100, "i", 13);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(101, "div", 43)(102, "div", 15)(103, "div", 16)(104, "p", 53);
      \u0275\u0275text(105, "Solid Colors");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(106, "div", 44)(107, "div", 54);
      \u0275\u0275element(108, "input", 55);
      \u0275\u0275elementStart(109, "label", 56);
      \u0275\u0275listener("click", function LayoutComponent_Template_label_click_109_listener() {
        return ctx.settings.changeSidebarColor("light");
      })("keydown.enter", function LayoutComponent_Template_label_keydown_enter_109_listener() {
        return ctx.settings.changeSidebarColor("light");
      });
      \u0275\u0275elementStart(110, "span", 23);
      \u0275\u0275element(111, "i", 24);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(112, "div", 54);
      \u0275\u0275element(113, "input", 57);
      \u0275\u0275elementStart(114, "label", 58);
      \u0275\u0275listener("click", function LayoutComponent_Template_label_click_114_listener() {
        return ctx.settings.changeSidebarColor("sidebar2");
      })("keydown.enter", function LayoutComponent_Template_label_keydown_enter_114_listener() {
        return ctx.settings.changeSidebarColor("sidebar2");
      });
      \u0275\u0275elementStart(115, "span", 23);
      \u0275\u0275element(116, "i", 24);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(117, "div", 59);
      \u0275\u0275element(118, "input", 60);
      \u0275\u0275elementStart(119, "label", 61);
      \u0275\u0275listener("click", function LayoutComponent_Template_label_click_119_listener() {
        return ctx.settings.changeSidebarColor("sidebar3");
      })("keydown.enter", function LayoutComponent_Template_label_keydown_enter_119_listener() {
        return ctx.settings.changeSidebarColor("sidebar3");
      });
      \u0275\u0275elementStart(120, "span", 23);
      \u0275\u0275element(121, "i", 24);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(122, "div", 59);
      \u0275\u0275element(123, "input", 62);
      \u0275\u0275elementStart(124, "label", 63);
      \u0275\u0275listener("click", function LayoutComponent_Template_label_click_124_listener() {
        return ctx.settings.changeSidebarColor("sidebar4");
      })("keydown.enter", function LayoutComponent_Template_label_keydown_enter_124_listener() {
        return ctx.settings.changeSidebarColor("sidebar4");
      });
      \u0275\u0275elementStart(125, "span", 23);
      \u0275\u0275element(126, "i", 24);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(127, "div", 59);
      \u0275\u0275element(128, "input", 64);
      \u0275\u0275elementStart(129, "label", 65);
      \u0275\u0275listener("click", function LayoutComponent_Template_label_click_129_listener() {
        return ctx.settings.changeSidebarColor("sidebar5");
      })("keydown.enter", function LayoutComponent_Template_label_keydown_enter_129_listener() {
        return ctx.settings.changeSidebarColor("sidebar5");
      });
      \u0275\u0275elementStart(130, "span", 23);
      \u0275\u0275element(131, "i", 24);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(132, "div", 59);
      \u0275\u0275element(133, "input", 66);
      \u0275\u0275elementStart(134, "label", 67);
      \u0275\u0275listener("click", function LayoutComponent_Template_label_click_134_listener() {
        return ctx.settings.changeSidebarColor("sidebar6");
      })("keydown.enter", function LayoutComponent_Template_label_keydown_enter_134_listener() {
        return ctx.settings.changeSidebarColor("sidebar6");
      });
      \u0275\u0275elementStart(135, "span", 23);
      \u0275\u0275element(136, "i", 24);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(137, "div", 59);
      \u0275\u0275element(138, "input", 68);
      \u0275\u0275elementStart(139, "label", 69);
      \u0275\u0275listener("click", function LayoutComponent_Template_label_click_139_listener() {
        return ctx.settings.changeSidebarColor("sidebar7");
      })("keydown.enter", function LayoutComponent_Template_label_keydown_enter_139_listener() {
        return ctx.settings.changeSidebarColor("sidebar7");
      });
      \u0275\u0275elementStart(140, "span", 23);
      \u0275\u0275element(141, "i", 24);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(142, "div", 59);
      \u0275\u0275element(143, "input", 70);
      \u0275\u0275elementStart(144, "label", 71);
      \u0275\u0275listener("click", function LayoutComponent_Template_label_click_144_listener() {
        return ctx.settings.changeSidebarColor("sidebarcolorsix");
      })("keydown.enter", function LayoutComponent_Template_label_keydown_enter_144_listener() {
        return ctx.settings.changeSidebarColor("sidebarcolorsix");
      });
      \u0275\u0275elementStart(145, "span", 23);
      \u0275\u0275element(146, "i", 24);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(147, "div", 72)(148, "div", 73);
      \u0275\u0275element(149, "i", 74);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(150, "input", 75);
      \u0275\u0275twoWayListener("ngModelChange", function LayoutComponent_Template_input_ngModelChange_150_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.selectedColor, $event) || (ctx.selectedColor = $event);
        return $event;
      });
      \u0275\u0275listener("input", function LayoutComponent_Template_input_input_150_listener() {
        return ctx.setColor();
      });
      \u0275\u0275elementEnd();
      \u0275\u0275element(151, "label", 76);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(152, "p", 53);
      \u0275\u0275text(153, "Gradient Colors");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(154, "div", 44)(155, "div", 54);
      \u0275\u0275element(156, "input", 77);
      \u0275\u0275elementStart(157, "label", 78);
      \u0275\u0275listener("click", function LayoutComponent_Template_label_click_157_listener() {
        return ctx.settings.changeSidebarColor("gradientsidebar1");
      })("keydown.enter", function LayoutComponent_Template_label_keydown_enter_157_listener() {
        return ctx.settings.changeSidebarColor("gradientsidebar1");
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(158, "div", 59);
      \u0275\u0275element(159, "input", 79);
      \u0275\u0275elementStart(160, "label", 80);
      \u0275\u0275listener("click", function LayoutComponent_Template_label_click_160_listener() {
        return ctx.settings.changeSidebarColor("gradientsidebar2");
      })("keydown.enter", function LayoutComponent_Template_label_keydown_enter_160_listener() {
        return ctx.settings.changeSidebarColor("gradientsidebar2");
      });
      \u0275\u0275elementStart(161, "span", 23);
      \u0275\u0275element(162, "i", 24);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(163, "div", 59);
      \u0275\u0275element(164, "input", 81);
      \u0275\u0275elementStart(165, "label", 82);
      \u0275\u0275listener("click", function LayoutComponent_Template_label_click_165_listener() {
        return ctx.settings.changeSidebarColor("gradientsidebar3");
      })("keydown.enter", function LayoutComponent_Template_label_keydown_enter_165_listener() {
        return ctx.settings.changeSidebarColor("gradientsidebar3");
      });
      \u0275\u0275elementStart(166, "span", 23);
      \u0275\u0275element(167, "i", 24);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(168, "div", 59);
      \u0275\u0275element(169, "input", 83);
      \u0275\u0275elementStart(170, "label", 84);
      \u0275\u0275listener("click", function LayoutComponent_Template_label_click_170_listener() {
        return ctx.settings.changeSidebarColor("gradientsidebar4");
      })("keydown.enter", function LayoutComponent_Template_label_keydown_enter_170_listener() {
        return ctx.settings.changeSidebarColor("gradientsidebar4");
      });
      \u0275\u0275elementStart(171, "span", 23);
      \u0275\u0275element(172, "i", 24);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(173, "div", 59);
      \u0275\u0275element(174, "input", 85);
      \u0275\u0275elementStart(175, "label", 86);
      \u0275\u0275listener("click", function LayoutComponent_Template_label_click_175_listener() {
        return ctx.settings.changeSidebarColor("gradientsidebar5");
      })("keydown.enter", function LayoutComponent_Template_label_keydown_enter_175_listener() {
        return ctx.settings.changeSidebarColor("gradientsidebar5");
      });
      \u0275\u0275elementStart(176, "span", 23);
      \u0275\u0275element(177, "i", 24);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(178, "div", 59);
      \u0275\u0275element(179, "input", 87);
      \u0275\u0275elementStart(180, "label", 88);
      \u0275\u0275listener("click", function LayoutComponent_Template_label_click_180_listener() {
        return ctx.settings.changeSidebarColor("gradientsidebar6");
      })("keydown.enter", function LayoutComponent_Template_label_keydown_enter_180_listener() {
        return ctx.settings.changeSidebarColor("gradientsidebar6");
      });
      \u0275\u0275elementStart(181, "span", 23);
      \u0275\u0275element(182, "i", 24);
      \u0275\u0275elementEnd()()()()()()()();
      \u0275\u0275elementStart(183, "div", 10)(184, "h2", 11)(185, "button", 89);
      \u0275\u0275text(186, " Sidebar Size ");
      \u0275\u0275element(187, "i", 13);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(188, "div", 90)(189, "div", 15)(190, "div", 16)(191, "div", 17)(192, "div", 18)(193, "div", 19);
      \u0275\u0275element(194, "input", 91);
      \u0275\u0275elementStart(195, "label", 92);
      \u0275\u0275listener("click", function LayoutComponent_Template_label_click_195_listener() {
        ctx.settings.changeLayoutMode("default");
        return ctx.toggleSidebar2();
      })("keydown.enter", function LayoutComponent_Template_label_keydown_enter_195_listener() {
        return ctx.settings.changeLayoutMode("default");
      });
      \u0275\u0275elementStart(196, "span", 22)(197, "span", 23);
      \u0275\u0275element(198, "i", 24);
      \u0275\u0275elementEnd();
      \u0275\u0275element(199, "img", 25);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(200, "span", 26);
      \u0275\u0275text(201, "Default");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(202, "div", 18)(203, "div", 19);
      \u0275\u0275element(204, "input", 93);
      \u0275\u0275elementStart(205, "label", 94);
      \u0275\u0275listener("click", function LayoutComponent_Template_label_click_205_listener() {
        ctx.settings.changeLayoutMode("single");
        return ctx.toggleSidebar();
      })("keydown.enter", function LayoutComponent_Template_label_keydown_enter_205_listener() {
        return ctx.settings.changeLayoutMode("single");
      });
      \u0275\u0275elementStart(206, "span", 22)(207, "span", 23);
      \u0275\u0275element(208, "i", 24);
      \u0275\u0275elementEnd();
      \u0275\u0275element(209, "img", 29);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(210, "span", 26);
      \u0275\u0275text(211, "Single");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(212, "div", 18)(213, "div", 19);
      \u0275\u0275element(214, "input", 95);
      \u0275\u0275elementStart(215, "label", 96);
      \u0275\u0275listener("click", function LayoutComponent_Template_label_click_215_listener() {
        ctx.settings.changeLayoutMode("mini");
        return ctx.toggleSidebar();
      })("keydown.enter", function LayoutComponent_Template_label_keydown_enter_215_listener() {
        return ctx.settings.changeLayoutMode("mini");
      });
      \u0275\u0275elementStart(216, "span", 22)(217, "span", 23);
      \u0275\u0275element(218, "i", 24);
      \u0275\u0275elementEnd();
      \u0275\u0275element(219, "img", 32);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(220, "span", 26);
      \u0275\u0275text(221, "Compact");
      \u0275\u0275elementEnd()()()()()()()()();
      \u0275\u0275elementStart(222, "div", 10)(223, "h2", 11)(224, "button", 97);
      \u0275\u0275text(225, " Top Bar Color ");
      \u0275\u0275element(226, "i", 13);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(227, "div", 98)(228, "div", 99)(229, "div", 16)(230, "p", 53);
      \u0275\u0275text(231, "Solid Colors");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(232, "div", 100)(233, "div", 101);
      \u0275\u0275listener("click", function LayoutComponent_Template_div_click_233_listener() {
        return ctx.settings.changeTopbarColor("white");
      })("keydown.enter", function LayoutComponent_Template_div_keydown_enter_233_listener() {
        return ctx.settings.changeTopbarColor("white");
      });
      \u0275\u0275element(234, "input", 102);
      \u0275\u0275elementStart(235, "label", 103)(236, "span", 23);
      \u0275\u0275element(237, "i", 24);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(238, "div", 101);
      \u0275\u0275listener("click", function LayoutComponent_Template_div_click_238_listener() {
        return ctx.settings.changeTopbarColor("topbar1");
      })("keydown.enter", function LayoutComponent_Template_div_keydown_enter_238_listener() {
        return ctx.settings.changeTopbarColor("topbar1");
      });
      \u0275\u0275element(239, "input", 104);
      \u0275\u0275elementStart(240, "label", 105)(241, "span", 23);
      \u0275\u0275element(242, "i", 24);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(243, "div", 101);
      \u0275\u0275listener("click", function LayoutComponent_Template_div_click_243_listener() {
        return ctx.settings.changeTopbarColor("topbar2");
      })("keydown.enter", function LayoutComponent_Template_div_keydown_enter_243_listener() {
        return ctx.settings.changeTopbarColor("topbar2");
      });
      \u0275\u0275element(244, "input", 106);
      \u0275\u0275elementStart(245, "label", 107)(246, "span", 23);
      \u0275\u0275element(247, "i", 24);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(248, "div", 101);
      \u0275\u0275listener("click", function LayoutComponent_Template_div_click_248_listener() {
        return ctx.settings.changeTopbarColor("topbar3");
      })("keydown.enter", function LayoutComponent_Template_div_keydown_enter_248_listener() {
        return ctx.settings.changeTopbarColor("topbar3");
      });
      \u0275\u0275element(249, "input", 108);
      \u0275\u0275elementStart(250, "label", 109)(251, "span", 23);
      \u0275\u0275element(252, "i", 24);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(253, "div", 101);
      \u0275\u0275listener("click", function LayoutComponent_Template_div_click_253_listener() {
        return ctx.settings.changeTopbarColor("topbar4");
      })("keydown.enter", function LayoutComponent_Template_div_keydown_enter_253_listener() {
        return ctx.settings.changeTopbarColor("topbar4");
      });
      \u0275\u0275element(254, "input", 110);
      \u0275\u0275elementStart(255, "label", 111)(256, "span", 23);
      \u0275\u0275element(257, "i", 24);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(258, "div", 112);
      \u0275\u0275listener("click", function LayoutComponent_Template_div_click_258_listener() {
        return ctx.settings.changeTopbarColor("topbar5");
      })("keydown.enter", function LayoutComponent_Template_div_keydown_enter_258_listener() {
        return ctx.settings.changeTopbarColor("topbar5");
      });
      \u0275\u0275element(259, "input", 113);
      \u0275\u0275elementStart(260, "label", 114)(261, "span", 23);
      \u0275\u0275element(262, "i", 24);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(263, "div", 115);
      \u0275\u0275listener("click", function LayoutComponent_Template_div_click_263_listener() {
        return ctx.settings.changeTopbarColor("topbar6");
      })("keydown.enter", function LayoutComponent_Template_div_keydown_enter_263_listener() {
        return ctx.settings.changeTopbarColor("topbar6");
      });
      \u0275\u0275element(264, "input", 116);
      \u0275\u0275elementStart(265, "label", 117)(266, "span", 23);
      \u0275\u0275element(267, "i", 24);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(268, "p", 53);
      \u0275\u0275text(269, "Gradient Colors");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(270, "div", 100)(271, "div", 118);
      \u0275\u0275element(272, "input", 119);
      \u0275\u0275elementStart(273, "label", 120);
      \u0275\u0275listener("click", function LayoutComponent_Template_label_click_273_listener() {
        return ctx.settings.changeTopbarColor("gradienttopbar1");
      })("keydown.enter", function LayoutComponent_Template_label_keydown_enter_273_listener() {
        return ctx.settings.changeTopbarColor("gradienttopbar1");
      });
      \u0275\u0275elementStart(274, "span", 23);
      \u0275\u0275element(275, "i", 24);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(276, "div", 121);
      \u0275\u0275listener("click", function LayoutComponent_Template_div_click_276_listener() {
        return ctx.settings.changeTopbarColor("gradienttopbar2");
      })("keydown.enter", function LayoutComponent_Template_div_keydown_enter_276_listener() {
        return ctx.settings.changeTopbarColor("gradienttopbar2");
      });
      \u0275\u0275element(277, "input", 122);
      \u0275\u0275elementStart(278, "label", 123)(279, "span", 23);
      \u0275\u0275element(280, "i", 24);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(281, "div", 121);
      \u0275\u0275listener("click", function LayoutComponent_Template_div_click_281_listener() {
        return ctx.settings.changeTopbarColor("gradienttopbar3");
      })("keydown.enter", function LayoutComponent_Template_div_keydown_enter_281_listener() {
        return ctx.settings.changeTopbarColor("gradienttopbar3");
      });
      \u0275\u0275element(282, "input", 124);
      \u0275\u0275elementStart(283, "label", 125)(284, "span", 23);
      \u0275\u0275element(285, "i", 24);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(286, "div", 121);
      \u0275\u0275listener("click", function LayoutComponent_Template_div_click_286_listener() {
        return ctx.settings.changeTopbarColor("gradienttopbar4");
      })("keydown.enter", function LayoutComponent_Template_div_keydown_enter_286_listener() {
        return ctx.settings.changeTopbarColor("gradienttopbar4");
      });
      \u0275\u0275element(287, "input", 126);
      \u0275\u0275elementStart(288, "label", 127)(289, "span", 23);
      \u0275\u0275element(290, "i", 24);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(291, "div", 121);
      \u0275\u0275listener("click", function LayoutComponent_Template_div_click_291_listener() {
        return ctx.settings.changeTopbarColor("gradienttopbar5");
      })("keydown.enter", function LayoutComponent_Template_div_keydown_enter_291_listener() {
        return ctx.settings.changeTopbarColor("gradienttopbar5");
      });
      \u0275\u0275element(292, "input", 128);
      \u0275\u0275elementStart(293, "label", 129)(294, "span", 23);
      \u0275\u0275element(295, "i", 24);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(296, "div", 121);
      \u0275\u0275listener("click", function LayoutComponent_Template_div_click_296_listener() {
        return ctx.settings.changeTopbarColor("gradienttopbar6");
      })("keydown.enter", function LayoutComponent_Template_div_keydown_enter_296_listener() {
        return ctx.settings.changeTopbarColor("gradienttopbar6");
      });
      \u0275\u0275element(297, "input", 130);
      \u0275\u0275elementStart(298, "label", 131)(299, "span", 23);
      \u0275\u0275element(300, "i", 24);
      \u0275\u0275elementEnd()()()()()()()();
      \u0275\u0275elementStart(301, "div", 10)(302, "h2", 11)(303, "button", 132);
      \u0275\u0275text(304, " Sidebar Background ");
      \u0275\u0275element(305, "i", 13);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(306, "div", 133)(307, "div", 15)(308, "div", 16)(309, "div", 134)(310, "div", 135);
      \u0275\u0275element(311, "input", 136);
      \u0275\u0275elementStart(312, "label", 137);
      \u0275\u0275listener("click", function LayoutComponent_Template_label_click_312_listener() {
        return ctx.settings.changeSidebarImage("sidebarbg1");
      })("keydown.enter", function LayoutComponent_Template_label_keydown_enter_312_listener() {
        return ctx.settings.changeSidebarImage("sidebarbg1");
      });
      \u0275\u0275elementStart(313, "span", 138);
      \u0275\u0275element(314, "i", 24);
      \u0275\u0275elementEnd();
      \u0275\u0275element(315, "img", 139);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(316, "div", 135);
      \u0275\u0275element(317, "input", 140);
      \u0275\u0275elementStart(318, "label", 141);
      \u0275\u0275listener("click", function LayoutComponent_Template_label_click_318_listener() {
        return ctx.settings.changeSidebarImage("sidebarbg2");
      })("keydown.enter", function LayoutComponent_Template_label_keydown_enter_318_listener() {
        return ctx.settings.changeSidebarImage("sidebarbg2");
      });
      \u0275\u0275elementStart(319, "span", 138);
      \u0275\u0275element(320, "i", 24);
      \u0275\u0275elementEnd();
      \u0275\u0275element(321, "img", 142);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(322, "div", 135);
      \u0275\u0275element(323, "input", 143);
      \u0275\u0275elementStart(324, "label", 144);
      \u0275\u0275listener("click", function LayoutComponent_Template_label_click_324_listener() {
        return ctx.settings.changeSidebarImage("sidebarbg3");
      })("keydown.enter", function LayoutComponent_Template_label_keydown_enter_324_listener() {
        return ctx.settings.changeSidebarImage("sidebarbg3");
      });
      \u0275\u0275elementStart(325, "span", 138);
      \u0275\u0275element(326, "i", 24);
      \u0275\u0275elementEnd();
      \u0275\u0275element(327, "img", 145);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(328, "div", 135);
      \u0275\u0275element(329, "input", 146);
      \u0275\u0275elementStart(330, "label", 147);
      \u0275\u0275listener("click", function LayoutComponent_Template_label_click_330_listener() {
        return ctx.settings.changeSidebarImage("sidebarbg4");
      })("keydown.enter", function LayoutComponent_Template_label_keydown_enter_330_listener() {
        return ctx.settings.changeSidebarImage("sidebarbg4");
      });
      \u0275\u0275elementStart(331, "span", 138);
      \u0275\u0275element(332, "i", 24);
      \u0275\u0275elementEnd();
      \u0275\u0275element(333, "img", 148);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(334, "div", 135);
      \u0275\u0275element(335, "input", 149);
      \u0275\u0275elementStart(336, "label", 150);
      \u0275\u0275listener("click", function LayoutComponent_Template_label_click_336_listener() {
        return ctx.settings.changeSidebarImage("sidebarbg5");
      })("keydown.enter", function LayoutComponent_Template_label_keydown_enter_336_listener() {
        return ctx.settings.changeSidebarImage("sidebarbg5");
      });
      \u0275\u0275elementStart(337, "span", 138);
      \u0275\u0275element(338, "i", 24);
      \u0275\u0275elementEnd();
      \u0275\u0275element(339, "img", 151);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(340, "div", 135);
      \u0275\u0275element(341, "input", 152);
      \u0275\u0275elementStart(342, "label", 153);
      \u0275\u0275listener("click", function LayoutComponent_Template_label_click_342_listener() {
        return ctx.settings.changeSidebarImage("sidebarbg6");
      })("keydown.enter", function LayoutComponent_Template_label_keydown_enter_342_listener() {
        return ctx.settings.changeSidebarImage("sidebarbg6");
      });
      \u0275\u0275elementStart(343, "span", 138);
      \u0275\u0275element(344, "i", 24);
      \u0275\u0275elementEnd();
      \u0275\u0275element(345, "img", 154);
      \u0275\u0275elementEnd()()()()()()();
      \u0275\u0275elementStart(346, "div", 10)(347, "h2", 11)(348, "button", 155);
      \u0275\u0275text(349, " Theme Colors ");
      \u0275\u0275element(350, "i", 13);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(351, "div", 156)(352, "div", 15)(353, "div", 16)(354, "div", 134)(355, "div", 157);
      \u0275\u0275element(356, "input", 158);
      \u0275\u0275elementStart(357, "label", 159);
      \u0275\u0275listener("click", function LayoutComponent_Template_label_click_357_listener() {
        return ctx.settings.changePrimaryColor("primary");
      })("keydown.enter", function LayoutComponent_Template_label_keydown_enter_357_listener() {
        return ctx.settings.changePrimaryColor("primary");
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(358, "div", 157);
      \u0275\u0275element(359, "input", 160);
      \u0275\u0275elementStart(360, "label", 161);
      \u0275\u0275listener("click", function LayoutComponent_Template_label_click_360_listener() {
        return ctx.settings.changePrimaryColor("secondary");
      })("keydown.enter", function LayoutComponent_Template_label_keydown_enter_360_listener() {
        return ctx.settings.changePrimaryColor("secondary");
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(361, "div", 157);
      \u0275\u0275element(362, "input", 162);
      \u0275\u0275elementStart(363, "label", 163);
      \u0275\u0275listener("click", function LayoutComponent_Template_label_click_363_listener() {
        return ctx.settings.changePrimaryColor("success");
      })("keydown.enter", function LayoutComponent_Template_label_keydown_enter_363_listener() {
        return ctx.settings.changePrimaryColor("success");
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(364, "div", 157);
      \u0275\u0275element(365, "input", 164);
      \u0275\u0275elementStart(366, "label", 165);
      \u0275\u0275listener("click", function LayoutComponent_Template_label_click_366_listener() {
        return ctx.settings.changePrimaryColor("danger");
      })("keydown.enter", function LayoutComponent_Template_label_keydown_enter_366_listener() {
        return ctx.settings.changePrimaryColor("danger");
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(367, "div", 157);
      \u0275\u0275element(368, "input", 166);
      \u0275\u0275elementStart(369, "label", 167);
      \u0275\u0275listener("click", function LayoutComponent_Template_label_click_369_listener() {
        return ctx.settings.changePrimaryColor("info");
      })("keydown.enter", function LayoutComponent_Template_label_keydown_enter_369_listener() {
        return ctx.settings.changePrimaryColor("info");
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(370, "div", 157);
      \u0275\u0275element(371, "input", 168);
      \u0275\u0275elementStart(372, "label", 169);
      \u0275\u0275listener("click", function LayoutComponent_Template_label_click_372_listener() {
        return ctx.settings.changePrimaryColor("warning");
      })("keydown.enter", function LayoutComponent_Template_label_keydown_enter_372_listener() {
        return ctx.settings.changePrimaryColor("warning");
      });
      \u0275\u0275elementEnd()()()()()()()()();
      \u0275\u0275elementStart(373, "div", 170)(374, "div", 17)(375, "div", 171)(376, "a", 172);
      \u0275\u0275listener("click", function LayoutComponent_Template_a_click_376_listener() {
        return ctx.resetAllMode();
      });
      \u0275\u0275element(377, "i", 173);
      \u0275\u0275text(378, "Reset");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(379, "div", 171)(380, "a", 174);
      \u0275\u0275element(381, "i", 175);
      \u0275\u0275text(382, "Buy Product");
      \u0275\u0275elementEnd()()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(23);
      \u0275\u0275property("checked", ctx.layoutMode === "default");
      \u0275\u0275advance(10);
      \u0275\u0275property("checked", ctx.layoutMode === "single");
      \u0275\u0275advance(10);
      \u0275\u0275property("checked", ctx.layoutMode === "mini");
      \u0275\u0275advance(10);
      \u0275\u0275property("checked", ctx.layoutMode === "twocolumn");
      \u0275\u0275advance(10);
      \u0275\u0275property("checked", ctx.layoutMode === "without-header");
      \u0275\u0275advance(9);
      \u0275\u0275property("routerLink", ctx.routes.RTL);
      \u0275\u0275advance(15);
      \u0275\u0275property("checked", ctx.layoutWidth === "fluid");
      \u0275\u0275advance(5);
      \u0275\u0275property("checked", ctx.layoutWidth === "box");
      \u0275\u0275advance(16);
      \u0275\u0275property("checked", ctx.sidebarColor === "light");
      \u0275\u0275advance(5);
      \u0275\u0275property("checked", ctx.sidebarColor === "sidebar2");
      \u0275\u0275advance(5);
      \u0275\u0275property("checked", ctx.sidebarColor === "sidebar3");
      \u0275\u0275advance(5);
      \u0275\u0275property("checked", ctx.sidebarColor === "sidebar4");
      \u0275\u0275advance(5);
      \u0275\u0275property("checked", ctx.sidebarColor === "sidebar5");
      \u0275\u0275advance(5);
      \u0275\u0275property("checked", ctx.sidebarColor === "sidebar6");
      \u0275\u0275advance(5);
      \u0275\u0275property("checked", ctx.sidebarColor === "sidebar7");
      \u0275\u0275advance(5);
      \u0275\u0275property("checked", ctx.sidebarColor === "sidebarcolorsix");
      \u0275\u0275advance(4);
      \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(53, _c06, ctx.sidebarColor === "all"));
      \u0275\u0275advance(3);
      \u0275\u0275twoWayProperty("ngModel", ctx.selectedColor);
      \u0275\u0275advance();
      \u0275\u0275property("ngStyle", \u0275\u0275pureFunction1(55, _c14, "rgba(" + ctx.rgbaValues + ")"));
      \u0275\u0275advance(5);
      \u0275\u0275property("checked", ctx.sidebarColor === "gradientsidebar1");
      \u0275\u0275advance(3);
      \u0275\u0275property("checked", ctx.sidebarColor === "gradientsidebar2");
      \u0275\u0275advance(5);
      \u0275\u0275property("checked", ctx.sidebarColor === "gradientsidebar3");
      \u0275\u0275advance(5);
      \u0275\u0275property("checked", ctx.sidebarColor === "gradientsidebar4");
      \u0275\u0275advance(5);
      \u0275\u0275property("checked", ctx.sidebarColor === "gradientsidebar5");
      \u0275\u0275advance(5);
      \u0275\u0275property("checked", ctx.sidebarColor === "gradientsidebar6");
      \u0275\u0275advance(15);
      \u0275\u0275property("checked", ctx.layoutMode === "default");
      \u0275\u0275advance(10);
      \u0275\u0275property("checked", ctx.layoutMode === "single");
      \u0275\u0275advance(10);
      \u0275\u0275property("checked", ctx.layoutMode === "mini");
      \u0275\u0275advance(20);
      \u0275\u0275property("checked", ctx.topbarColor === "white");
      \u0275\u0275advance(5);
      \u0275\u0275property("checked", ctx.topbarColor === "topbar1");
      \u0275\u0275advance(5);
      \u0275\u0275property("checked", ctx.topbarColor === "topbar2");
      \u0275\u0275advance(5);
      \u0275\u0275property("checked", ctx.topbarColor === "topbar3");
      \u0275\u0275advance(5);
      \u0275\u0275property("checked", ctx.topbarColor === "topbar4");
      \u0275\u0275advance(5);
      \u0275\u0275property("checked", ctx.topbarColor === "topbar5");
      \u0275\u0275advance(5);
      \u0275\u0275property("checked", ctx.topbarColor === "topbar6");
      \u0275\u0275advance(8);
      \u0275\u0275property("checked", ctx.topbarColor === "gradienttopbar1");
      \u0275\u0275advance(5);
      \u0275\u0275property("checked", ctx.topbarColor === "gradienttopbar2");
      \u0275\u0275advance(5);
      \u0275\u0275property("checked", ctx.topbarColor === "gradienttopbar3");
      \u0275\u0275advance(5);
      \u0275\u0275property("checked", ctx.topbarColor === "gradienttopbar4");
      \u0275\u0275advance(5);
      \u0275\u0275property("checked", ctx.topbarColor === "gradienttopbar5");
      \u0275\u0275advance(5);
      \u0275\u0275property("checked", ctx.topbarColor === "gradienttopbar6");
      \u0275\u0275advance(14);
      \u0275\u0275property("checked", ctx.sidebarImage === "sidebarbg1");
      \u0275\u0275advance(6);
      \u0275\u0275property("checked", ctx.sidebarImage === "sidebarbg2");
      \u0275\u0275advance(6);
      \u0275\u0275property("checked", ctx.sidebarImage === "sidebarbg3");
      \u0275\u0275advance(6);
      \u0275\u0275property("checked", ctx.sidebarImage === "sidebarbg4");
      \u0275\u0275advance(6);
      \u0275\u0275property("checked", ctx.sidebarImage === "sidebarbg5");
      \u0275\u0275advance(6);
      \u0275\u0275property("checked", ctx.sidebarImage === "sidebarbg6");
      \u0275\u0275advance(15);
      \u0275\u0275property("checked", ctx.primaryColor === "primary");
      \u0275\u0275advance(3);
      \u0275\u0275property("checked", ctx.primaryColor === "secondary");
      \u0275\u0275advance(3);
      \u0275\u0275property("checked", ctx.primaryColor === "success");
      \u0275\u0275advance(3);
      \u0275\u0275property("checked", ctx.primaryColor === "danger");
      \u0275\u0275advance(3);
      \u0275\u0275property("checked", ctx.primaryColor === "info");
      \u0275\u0275advance(3);
      \u0275\u0275property("checked", ctx.primaryColor === "warning");
    }
  }, dependencies: [CommonModule, NgClass, NgStyle, FormsModule, DefaultValueAccessor, NgControlStatus, NgModel, RouterLink], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LayoutComponent, [{
    type: Component,
    args: [{ selector: "app-layout", imports: [CommonModule, FormsModule, RouterLink], template: `<div class="sidebar-contact ">
<div class="toggle-theme"  data-bs-toggle="offcanvas" data-bs-target="#theme-setting">
    <i class="fa-solid fa-gear fa-spin"></i></div>
    </div>
    <div class="sidebar-themesettings offcanvas offcanvas-end" id="theme-setting">
    <div class="offcanvas-header d-flex align-items-center justify-content-between bg-primary">
        <div>
            <h3 class="mb-0 text-white">Theme Customizer</h3>
        </div>
        <a href="javascript:void(0);" class="custom-btn-close d-flex align-items-center justify-content-center text-white"  data-bs-dismiss="offcanvas"><i class="isax isax-close-circle"></i></a>
    </div>
    <div class="themecard-body offcanvas-body">
        <div class="accordion accordion-customicon1 accordions-items-seperate" id="settingtheme">
            <div class="accordion-item">
                <h2 class="accordion-header">
                    <button class="accordion-button text-gray-9 fw-semibold fs-16" type="button" data-bs-toggle="collapse" data-bs-target="#layoutsetting" aria-expanded="true" aria-controls="collapsecustomicon1One">
                        Select Layouts
                        <i class="ti ti-circle-chevron-up ms-auto text-primary"></i>
                    </button>
                </h2>
                <div id="layoutsetting" class="accordion-collapse collapse show"  >
                    <div class="accordion-body">
                        <div class="theme-content">
                            <div class="row gx-3">
                                <div class="col-4">
                                    <div class="theme-layout mb-3">
                                        <input type="radio" name="LayoutTheme" id="defaultLayout" value="default" [checked]="layoutMode === 'default'" >
                                        <label for="defaultLayout" (click)="settings.changeLayoutMode('default');toggleSidebar2()"  (keydown.enter)="settings.changeLayoutMode('default')"  tabindex="0">
                                            <span class="d-block mb-2 layout-img">
                                                <span class="theme-check rounded-circle"><i class="fa-solid fa-check"></i></span>
                                                <img src="assets/img/theme/default.svg" alt="img">
                                            </span>                                     
                                            <span class="layout-type">Default</span>
                                        </label>
                                    </div>
                                </div>
                                <div class="col-4">
                                    <div class="theme-layout mb-3">
                                        <input type="radio" name="LayoutTheme" id="singleLayout" value="single" [checked]="layoutMode === 'single'">
                                        <label for="singleLayout" (click)="settings.changeLayoutMode('single') ;toggleSidebar()"  (keydown.enter)="settings.changeLayoutMode('single')"  tabindex="0">
                                            <span class="d-block mb-2 layout-img">
                                                <span class="theme-check rounded-circle"><i class="fa-solid fa-check"></i></span>
                                                <img src="assets/img/theme/single.svg" alt="img">
                                            </span>                                    
                                            <span class="layout-type">Single</span>
                                        </label>
                                    </div>
                                </div>
                                <div class="col-4">
                                    <div class="theme-layout mb-3">
                                        <input type="radio" name="LayoutTheme" id="miniLayout" value="mini" [checked]="layoutMode === 'mini'">
                                        <label for="miniLayout" (click)="settings.changeLayoutMode('mini') ;toggleSidebar()"  (keydown.enter)="settings.changeLayoutMode('mini')"  tabindex="0">
                                            <span class="d-block mb-2 layout-img">
                                                <span class="theme-check rounded-circle"><i class="fa-solid fa-check"></i></span>
                                                <img src="assets/img/theme/mini.svg" alt="img">
                                            </span>                                    
                                            <span class="layout-type">Mini</span>
                                        </label>
                                    </div>
                                </div>
                                <div class="col-4">
                                    <div class="theme-layout mb-3">
                                        <input type="radio" name="LayoutTheme" id="twocolumnLayout" value="twocolumn" [checked]="layoutMode === 'twocolumn'" >
                                        <label for="twocolumnLayout" (click)="settings.changeLayoutMode('twocolumn')"  (keydown.enter)="settings.changeLayoutMode('twocolumn')"  tabindex="0">
                                            <span class="d-block mb-2 layout-img">
                                                <span class="theme-check rounded-circle"><i class="fa-solid fa-check"></i></span>
                                                <img src="assets/img/theme/transparent.svg" alt="img">
                                            </span>                                    
                                            <span class="layout-type">Transparent</span>
                                        </label>
                                    </div>
                                </div>
                                <div class="col-4">
                                    <div class="theme-layout mb-3">
                                        <input type="radio" name="LayoutTheme" id="without-headerLayout" value="without-header" [checked]="layoutMode === 'without-header'" >
                                        <label for="without-headerLayout" (click)="settings.changeLayoutMode('without-header')"  (keydown.enter)="settings.changeLayoutMode('without-header')" >
                                            <span class="d-block mb-2 layout-img">
                                                <span class="theme-check rounded-circle"><i class="fa-solid fa-check"></i></span>
                                                <img src="assets/img/theme/without-header.svg" alt="img">
                                            </span>                                    
                                            <span class="layout-type">Without Header</span>
                                        </label>
                                    </div>
                                </div>
                                <div class="col-4">
                                    <a [routerLink]="routes.RTL" class="theme-layout mb-3">
                                        <span class="d-block mb-2 layout-img">
                                            <img src="assets/img/theme/rtl.svg" alt="img">
                                        </span>                                    
                                        <span class="layout-type d-block">RTL</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div> 
            <div class="accordion-item">
                <h2 class="accordion-header">
                    <button class="accordion-button text-gray-9 fw-semibold fs-16" type="button" data-bs-toggle="collapse" data-bs-target="#sidebarsetting" aria-expanded="true">
                        Layout Width
                        <i class="ti ti-circle-chevron-up ms-auto text-primary"></i>
                    </button>
                </h2>
                <div id="sidebarsetting" class="accordion-collapse collapse show">
                    <div class="accordion-body">
                        <div class="theme-content">
                            <div class="d-flex align-items-center">
                                <div class="theme-width m-1 me-2">
                                    <input type="radio" name="width" id="fluidWidth" value="fluid" [checked]="layoutWidth === 'fluid'">
                                    <label for="fluidWidth" class="d-block rounded fs-12"  (click)="settings.changeLayoutWidth('fluid')"  (keydown.enter)="settings.changeLayoutWidth('fluid')"  tabindex="0">
                                        <i class="ti ti-layout-list me-1"></i>
                                        Fluid Layout
                                    </label>
                                </div>
                                <div class="theme-width m-1">
                                    <input type="radio" name="width" id="boxWidth" value="box" [checked]="layoutWidth === 'box'">
                                    <label for="boxWidth" class="d-block rounded fs-12" (click)="settings.changeLayoutWidth('box')"  (keydown.enter)="settings.changeLayoutWidth('box')"  tabindex="0">
                                    <i class="ti ti-layout-distribute-horizontal me-1"></i>
                                        Boxed Layout
                                    </label>
                                </div>
                            </div>  
                        </div>
                    </div>
                </div>
            </div>
            <div class="accordion-item">
                <h2 class="accordion-header">
                    <button class="accordion-button text-gray-9 fw-semibold fs-16" type="button" data-bs-toggle="collapse" data-bs-target="#sidebarsetting" aria-expanded="true">
                        Sidebar Color
                        <i class="ti ti-circle-chevron-up ms-auto text-primary"></i>
                    </button>
                </h2>
                <div id="sidebarsetting" class="accordion-collapse collapse show">
                    <div class="accordion-body">
                        <div class="theme-content">
                            <p class="mb-2 text-gray-9">Solid Colors</p>
                            <div class="d-flex align-items-center">
                                <div class="theme-colorselect m-1 me-3">
                                    <input type="radio" name="sidebar" id="lightSidebar" value="light" [checked]="sidebarColor === 'light'">
                                    <label for="lightSidebar" class="d-block rounded mb-2" (click)="settings.changeSidebarColor('light')"  (keydown.enter)="settings.changeSidebarColor('light')"  tabindex="0">
                                        <span class="theme-check rounded-circle"><i class="fa-solid fa-check"></i></span>
                                    </label>
                                </div>
                                <div class="theme-colorselect m-1 me-3">
                                    <input type="radio" name="sidebar" id="whiteSidebar" value="sidebar2" [checked]="sidebarColor === 'sidebar2'">
                                    <label for="whiteSidebar" class="d-block rounded bg-white mb-2" (click)="settings.changeSidebarColor('sidebar2')"  (keydown.enter)="settings.changeSidebarColor('sidebar2')"  tabindex="0">
                                        <span class="theme-check rounded-circle"><i class="fa-solid fa-check"></i></span>
                                    </label>
                                </div>
                                <div class="theme-colorselect me-3">
                                    <input type="radio" name="sidebar" id="bgcolorSidebar" value="sidebar3" [checked]="sidebarColor === 'sidebar3'">
                                    <label for="bgcolorSidebar" class="d-block rounded bg-dark mb-2" (click)="settings.changeSidebarColor('sidebar3')"  (keydown.enter)="settings.changeSidebarColor('sidebar3')"  tabindex="0">
                                        <span class="theme-check rounded-circle"><i class="fa-solid fa-check"></i></span>
                                    </label>
                                </div>
                                <div class="theme-colorselect me-3">
                                    <input type="radio" name="sidebar" id="bgcolor2Sidebar" value="sidebar4" [checked]="sidebarColor === 'sidebar4'">
                                    <label for="bgcolor2Sidebar" class="d-block bg-primary mb-2" (click)="settings.changeSidebarColor('sidebar4')"  (keydown.enter)="settings.changeSidebarColor('sidebar4')"  tabindex="0">
                                        <span class="theme-check rounded-circle"><i class="fa-solid fa-check"></i></span>
                                    </label>
                                </div>
                                <div class="theme-colorselect me-3">
                                    <input type="radio" name="sidebar" id="bgcolor3Sidebar" value="sidebar5" [checked]="sidebarColor === 'sidebar5'">
                                    <label for="bgcolor3Sidebar" class="d-block bg-secondary mb-2" (click)="settings.changeSidebarColor('sidebar5')"  (keydown.enter)="settings.changeSidebarColor('sidebar5')"  tabindex="0">
                                        <span class="theme-check rounded-circle"><i class="fa-solid fa-check"></i></span>
                                    </label>
                                </div>
                                <div class="theme-colorselect me-3">
                                    <input type="radio" name="sidebar" id="bgcolor4Sidebar" value="sidebar6" [checked]="sidebarColor === 'sidebar6'">
                                    <label for="bgcolor4Sidebar" class="d-block rounded bg-info mb-2" (click)="settings.changeSidebarColor('sidebar6')"  (keydown.enter)="settings.changeSidebarColor('sidebar6')"  tabindex="0">
                                        <span class="theme-check rounded-circle"><i class="fa-solid fa-check"></i></span>
                                    </label>
                                </div>
                                <div class="theme-colorselect me-3">
                                    <input type="radio" name="sidebar" id="bgcolor5Sidebar" value="sidebar7" [checked]="sidebarColor === 'sidebar7'">
                                    <label for="bgcolor5Sidebar" class="d-block rounded bg-success mb-2" (click)="settings.changeSidebarColor('sidebar7')"  (keydown.enter)="settings.changeSidebarColor('sidebar7')"  tabindex="0">
                                        <span class="theme-check rounded-circle"><i class="fa-solid fa-check"></i></span>
                                    </label>
                                </div>                            
                                <div class="theme-colorselect me-3">
                                    <input type="radio" name="sidebar" id="bgcolor6Sidebar" value="sidebarcolorsix" [checked]="sidebarColor === 'sidebarcolorsix'">
                                    <label for="bgcolor6Sidebar" class="d-block bg-sidebar-color-6 mb-2" (click)="settings.changeSidebarColor('sidebarcolorsix')"  (keydown.enter)="settings.changeSidebarColor('sidebarcolorsix')"  tabindex="0">
                                        <span class="theme-check rounded-circle"><i class="fa-solid fa-check"></i></span>
                                    </label>
                                </div>                          
                                <div class="theme-colorselect position-relative dynamic-box2 mt-0 " [ngClass]="{'active': sidebarColor === 'all'}">
                                    <div class="select-color position-absolute"><i class="ti ti-palette"></i></div>
                                <input type="color" name="sidebar" id="dynamicColor" [(ngModel)]="selectedColor" (input)="setColor()" />
                                <label for="dynamicColor" class="d-block rounded mb-2" [ngStyle]="{'background-color': 'rgba(' + rgbaValues + ')'}">
                                </label>
                                </div>
                            </div>
                            <p class="mb-2 text-gray-9">Gradient Colors</p>
                            <div class="d-flex align-items-center">
                                <div class="theme-colorselect m-1 me-3">
                                    <input type="radio" name="sidebar" id="bgcolor7Sidebar" value="gradientsidebar1" [checked]="sidebarColor === 'gradientsidebar1'">
                                    <label for="bgcolor7Sidebar" class="d-block rounded bg-primary bg-gradient mb-2" (click)="settings.changeSidebarColor('gradientsidebar1')"  (keydown.enter)="settings.changeSidebarColor('gradientsidebar1')"  tabindex="0">
                                    </label>
                                </div>
                                <div class="theme-colorselect me-3">
                                    <input type="radio" name="sidebar" id="bgcolor8Sidebar" value="gradientsidebar2" [checked]="sidebarColor === 'gradientsidebar2'">
                                    <label for="bgcolor8Sidebar" class="d-block rounded bg-secondary bg-gradient mb-2" (click)="settings.changeSidebarColor('gradientsidebar2')"  (keydown.enter)="settings.changeSidebarColor('gradientsidebar2')"  tabindex="0">
                                        <span class="theme-check rounded-circle"><i class="fa-solid fa-check"></i></span>
                                    </label>
                                </div>
                                <div class="theme-colorselect me-3">
                                    <input type="radio" name="sidebar" id="bgcolor9Sidebar" value="gradientsidebar3" [checked]="sidebarColor === 'gradientsidebar3'">
                                    <label for="bgcolor9Sidebar" class="d-block rounded bg-success bg-gradient mb-2" (click)="settings.changeSidebarColor('gradientsidebar3')"  (keydown.enter)="settings.changeSidebarColor('gradientsidebar3')"  tabindex="0">
                                        <span class="theme-check rounded-circle"><i class="fa-solid fa-check"></i></span>
                                    </label>
                                </div>
                                <div class="theme-colorselect me-3">
                                    <input type="radio" name="sidebar" id="bgcolor10Sidebar" value="gradientsidebar4" [checked]="sidebarColor === 'gradientsidebar4'">
                                    <label for="bgcolor10Sidebar" class="d-block rounded bg-info bg-gradient mb-2" (click)="settings.changeSidebarColor('gradientsidebar4')"  (keydown.enter)="settings.changeSidebarColor('gradientsidebar4')"  tabindex="0">
                                        <span class="theme-check rounded-circle"><i class="fa-solid fa-check"></i></span>
                                    </label>
                                </div>
                                <div class="theme-colorselect me-3">
                                    <input type="radio" name="sidebar" id="bgcolor11Sidebar" value="gradientsidebar5" [checked]="sidebarColor === 'gradientsidebar5'">
                                    <label for="bgcolor11Sidebar" class="d-block rounded bg-dark bg-gradient mb-2" (click)="settings.changeSidebarColor('gradientsidebar5')"  (keydown.enter)="settings.changeSidebarColor('gradientsidebar5')"  tabindex="0">
                                        <span class="theme-check rounded-circle"><i class="fa-solid fa-check"></i></span>
                                    </label>
                                </div>  
                                <div class="theme-colorselect me-3">
                                    <input type="radio" name="sidebar" id="bgcolor12Sidebar" value="gradientsidebar6" [checked]="sidebarColor === 'gradientsidebar6'">
                                    <label for="bgcolor12Sidebar" class="d-block rounded bg-danger bg-gradient mb-2" (click)="settings.changeSidebarColor('gradientsidebar6')"  (keydown.enter)="settings.changeSidebarColor('gradientsidebar6')"  tabindex="0">
                                        <span class="theme-check rounded-circle"><i class="fa-solid fa-check"></i></span>
                                    </label>
                                </div>  
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="accordion-item">
                <h2 class="accordion-header">
                    <button class="accordion-button text-gray-9 fw-semibold fs-16" type="button" data-bs-toggle="collapse" data-bs-target="#layoutsetting7" aria-expanded="true" aria-controls="collapsecustomicon1nine">
                        Sidebar Size
                        <i class="ti ti-circle-chevron-up ms-auto text-primary"></i>
                    </button>
                </h2>
                <div id="layoutsetting7" class="accordion-collapse collapse show"  >
                    <div class="accordion-body">
                        <div class="theme-content">
                            <div class="row gx-3">
                                <div class="col-4">
                                    <div class="theme-layout mb-3">
                                        <input type="radio" name="LayoutTheme" id="defaultLayout2" value="default" [checked]="layoutMode === 'default'" >
                                        <label for="defaultLayout2" (click)="settings.changeLayoutMode('default');toggleSidebar2()"  (keydown.enter)="settings.changeLayoutMode('default')"  tabindex="0">
                                            <span class="d-block mb-2 layout-img">
                                                <span class="theme-check rounded-circle"><i class="fa-solid fa-check"></i></span>
                                                <img src="assets/img/theme/default.svg" alt="img">
                                            </span>                                     
                                            <span class="layout-type">Default</span>
                                        </label>
                                    </div>
                                </div>
                                <div class="col-4">
                                    <div class="theme-layout mb-3">
                                        <input type="radio" name="LayoutTheme" id="singleLayout2" value="single" [checked]="layoutMode === 'single'">
                                        <label for="singleLayout2" (click)="settings.changeLayoutMode('single') ;toggleSidebar()"  (keydown.enter)="settings.changeLayoutMode('single')"  tabindex="0">
                                            <span class="d-block mb-2 layout-img">
                                                <span class="theme-check rounded-circle"><i class="fa-solid fa-check"></i></span>
                                                <img src="assets/img/theme/single.svg" alt="img">
                                            </span>                                    
                                            <span class="layout-type">Single</span>
                                        </label>
                                    </div>
                                </div>
                                <div class="col-4">
                                    <div class="theme-layout mb-3">
                                        <input type="radio" name="LayoutTheme" id="compactLayout" value="mini" [checked]="layoutMode === 'mini'">
                                        <label for="compactLayout" (click)="settings.changeLayoutMode('mini') ;toggleSidebar()"  (keydown.enter)="settings.changeLayoutMode('mini')"  tabindex="0">
                                            <span class="d-block mb-2 layout-img">
                                                <span class="theme-check rounded-circle"><i class="fa-solid fa-check"></i></span>
                                                <img src="assets/img/theme/mini.svg" alt="img">
                                            </span>                                    
                                            <span class="layout-type">Compact</span>
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>    
            <div class="accordion-item">
                <h2 class="accordion-header">
                    <button class="accordion-button text-gray-9 fw-semibold fs-16" type="button" data-bs-toggle="collapse" data-bs-target="#colorsetting" aria-expanded="true">
                        Top Bar Color
                        <i class="ti ti-circle-chevron-up ms-auto text-primary"></i>
                    </button>
                </h2>
                <div id="colorsetting" class="accordion-collapse collapse show"	>
                    <div class="accordion-body pb-1">
                        <div class="theme-content">
                            <p class="mb-2 text-gray-9">Solid Colors</p>
                            <div class="d-flex align-items-center flex-wrap topbar-background">
                                    <div class="theme-colorselect  mb-3 me-3" (click)="settings.changeTopbarColor('white')"  (keydown.enter)="settings.changeTopbarColor('white')"  tabindex="0"   >
                                        <input type="radio" name="topbar" id="whiteTopbar" value="white" [checked]="topbarColor === 'white'">
                                        <label for="whiteTopbar" class="bg-white">
                                            <span class="theme-check rounded-circle"><i class="fa-solid fa-check"></i></span>
                                        </label>
                                    </div>
                                    <div class="theme-colorselect  mb-3 me-3" (click)="settings.changeTopbarColor('topbar1')"  (keydown.enter)="settings.changeTopbarColor('topbar1')"  tabindex="0"   >
                                        <input type="radio" name="topbar" id="darkaquaTopbar" value="topbar1" [checked]="topbarColor === 'topbar1'">
                                        <label for="darkaquaTopbar" class=" bg-light">
                                            <span class="theme-check rounded-circle"><i class="fa-solid fa-check"></i></span>
                                        </label>
                                    </div>
                                    <div class="theme-colorselect  mb-3 me-3" (click)="settings.changeTopbarColor('topbar2')"  (keydown.enter)="settings.changeTopbarColor('topbar2')"  tabindex="0"   >
                                        <input type="radio" name="topbar" id="whiterockTopbar" value="topbar2" [checked]="topbarColor === 'topbar2'">
                                        <label for="whiterockTopbar" class="bg-dark">
                                            <span class="theme-check rounded-circle"><i class="fa-solid fa-check"></i></span>
                                        </label>
                                    </div>
                                    <div class="theme-colorselect  mb-3 me-3" (click)="settings.changeTopbarColor('topbar3')"  (keydown.enter)="settings.changeTopbarColor('topbar3')"  tabindex="0"   >
                                        <input type="radio" name="topbar" id="rockblueTopbar" value="topbar3" [checked]="topbarColor === 'topbar3'">
                                        <label for="rockblueTopbar" class="bg-primary">
                                            <span class="theme-check rounded-circle"><i class="fa-solid fa-check"></i></span>
                                        </label>
                                    </div>
                                    <div class="theme-colorselect  mb-3 me-3" (click)="settings.changeTopbarColor('topbar4')"  (keydown.enter)="settings.changeTopbarColor('topbar4')"  tabindex="0"   >
                                        <input type="radio" name="topbar" id="bluehazeTopbar" value="topbar4" [checked]="topbarColor === 'topbar4'">
                                        <label for="bluehazeTopbar" class="bg-secondary">
                                            <span class="theme-check rounded-circle"><i class="fa-solid fa-check"></i></span>
                                        </label>
                                    </div>              
                                    <div class="theme-colorselect  mb-3" (click)="settings.changeTopbarColor('topbar5')"  (keydown.enter)="settings.changeTopbarColor('topbar5')"  tabindex="0"   >
                                        <input type="radio" name="topbar" id="topbar-color-5" value="topbar5" [checked]="topbarColor === 'topbar5'">
                                        <label for="topbar-color-5" class="bg-info">
                                            <span class="theme-check rounded-circle"><i class="fa-solid fa-check"></i></span>
                                        </label>
                                    </div>              
                                    <div class="theme-colorselect  mb-3 ms-3" (click)="settings.changeTopbarColor('topbar6')"  (keydown.enter)="settings.changeTopbarColor('topbar6')"  tabindex="0"   >
                                        <input type="radio" name="topbar" id="topbar-color-6" value="topbar6" [checked]="topbarColor === 'topbar6'">
                                        <label for="topbar-color-6" class="bg-success">
                                            <span class="theme-check rounded-circle"><i class="fa-solid fa-check"></i></span>
                                        </label>
                                    </div>  
                                </div>
                                <p class="mb-2 text-gray-9">Gradient Colors</p>
                            <div class="d-flex align-items-center flex-wrap topbar-background">
                                    <div class="theme-colorselect theme-colorselect-rounded  mb-3 me-3" >
                                        <input type="radio" name="topbar" id="topbar-color-7" value="gradienttopbar1" [checked]="topbarColor === 'gradienttopbar1'">
                                        <label for="topbar-color-7" class="bg-primary bg-gradient" (click)="settings.changeTopbarColor('gradienttopbar1')"  (keydown.enter)="settings.changeTopbarColor('gradienttopbar1')"  tabindex="0">
                                            <span class="theme-check rounded-circle"><i class="fa-solid fa-check"></i></span>
                                        </label>
                                       
                                    </div>
                                    <div class="theme-colorselect theme-colorselect-rounded  mb-3 me-3" (click)="settings.changeTopbarColor('gradienttopbar2')"  (keydown.enter)="settings.changeTopbarColor('gradienttopbar2')"  tabindex="0">
                                        <input type="radio" name="topbar" id="topbar-color-8" value="gradienttopbar2" [checked]="topbarColor === 'gradienttopbar2'">
                                        <label for="topbar-color-8" class=" bg-secondary bg-gradient ">
                                            <span class="theme-check rounded-circle"><i class="fa-solid fa-check"></i></span>
                                        </label>
                                    </div>
                                    <div class="theme-colorselect theme-colorselect-rounded  mb-3 me-3" (click)="settings.changeTopbarColor('gradienttopbar3')"  (keydown.enter)="settings.changeTopbarColor('gradienttopbar3')"  tabindex="0">
                                        <input type="radio" name="topbar" id="topbar-color-9" value="gradienttopbar3" [checked]="topbarColor === 'gradienttopbar3'">
                                        <label for="topbar-color-9" class="bg-success bg-gradient">
                                            <span class="theme-check rounded-circle"><i class="fa-solid fa-check"></i></span>
                                        </label>
                                    </div>
                                    <div class="theme-colorselect theme-colorselect-rounded mb-3 me-3" (click)="settings.changeTopbarColor('gradienttopbar4')"  (keydown.enter)="settings.changeTopbarColor('gradienttopbar4')"  tabindex="0">
                                        <input type="radio" name="topbar" id="topbar-color-10" value="gradienttopbar4" [checked]="topbarColor === 'gradienttopbar4'">
                                        <label for="topbar-color-10" class="bg-info bg-gradient">
                                            <span class="theme-check rounded-circle"><i class="fa-solid fa-check"></i></span>
                                        </label>
                                    </div>
                                    <div class="theme-colorselect theme-colorselect-rounded mb-3 me-3" (click)="settings.changeTopbarColor('gradienttopbar5')"  (keydown.enter)="settings.changeTopbarColor('gradienttopbar5')"  tabindex="0">
                                        <input type="radio" name="topbar" id="topbar-color-11" value="gradienttopbar5" [checked]="topbarColor === 'gradienttopbar5'">
                                        <label for="topbar-color-11" class="bg-dark bg-gradient">
                                            <span class="theme-check rounded-circle"><i class="fa-solid fa-check"></i></span>
                                        </label>
                                    </div> 
                                    <div class="theme-colorselect theme-colorselect-rounded mb-3 me-3" (click)="settings.changeTopbarColor('gradienttopbar6')"  (keydown.enter)="settings.changeTopbarColor('gradienttopbar6')"  tabindex="0">
                                        <input type="radio" name="topbar" id="topbar-color-12" value="gradienttopbar6" [checked]="topbarColor === 'gradienttopbar6'">
                                        <label for="topbar-color-12" class=" bg-danger bg-gradient">
                                            <span class="theme-check rounded-circle"><i class="fa-solid fa-check"></i></span>
                                        </label>
                                    </div> 
                                </div>
                        </div>
                    </div>
                </div>
            </div>  	    
            <div class="accordion-item">
                <h2 class="accordion-header">
                    <button class="accordion-button text-gray-9 fw-semibold fs-16" type="button" data-bs-toggle="collapse" data-bs-target="#sidebarbgsetting" aria-expanded="true">
                        Sidebar Background
                        <i class="ti ti-circle-chevron-up ms-auto text-primary"></i>
                    </button>
                </h2>
                <div id="sidebarbgsetting" class="accordion-collapse collapse show">
                    <div class="accordion-body">
                        <div class="theme-content">
                            <div class="d-flex align-items-center flex-wrap">
                                <div class="theme-sidebarbg me-3 mb-3">
                                    <input type="radio" name="sidebarbg" id="sidebarbg6" value="sidebarbg1" [checked]="sidebarImage === 'sidebarbg1'">
                                    <label for="sidebarbg6" class="d-block rounded" (click)="settings.changeSidebarImage('sidebarbg1')"  (keydown.enter)="settings.changeSidebarImage('sidebarbg1')"  tabindex="0">
                                        <span class="theme-check2 rounded-circle"><i class="fa-solid fa-check"></i></span>
                                        <img src="assets/img/theme/sidebar-bg-01.svg" alt="img" class="rounded">
                                    </label>
                                </div>
                                <div class="theme-sidebarbg me-3 mb-3">
                                    <input type="radio" name="sidebarbg" id="sidebarBg2" value="sidebarbg2" [checked]="sidebarImage === 'sidebarbg2'">
                                    <label for="sidebarBg2" class="d-block rounded" (click)="settings.changeSidebarImage('sidebarbg2')"  (keydown.enter)="settings.changeSidebarImage('sidebarbg2')"  tabindex="0">
                                        <span class="theme-check2 rounded-circle"><i class="fa-solid fa-check"></i></span>
                                        <img src="assets/img/theme/sidebar-bg-02.svg" alt="img" class="rounded">
                                    </label>
                                </div>
                                <div class="theme-sidebarbg me-3 mb-3">
                                    <input type="radio" name="sidebarbg" id="sidebarBg3" value="sidebarbg3" [checked]="sidebarImage === 'sidebarbg3'">
                                    <label for="sidebarBg3" class="d-block rounded" (click)="settings.changeSidebarImage('sidebarbg3')"  (keydown.enter)="settings.changeSidebarImage('sidebarbg3')"  tabindex="0">
                                        <span class="theme-check2 rounded-circle"><i class="fa-solid fa-check"></i></span>
                                        <img src="assets/img/theme/sidebar-bg-03.svg" alt="img" class="rounded">
                                    </label>
                                </div>
                                <div class="theme-sidebarbg me-3 mb-3">
                                    <input type="radio" name="sidebarbg" id="sidebarBg4" value="sidebarbg4" [checked]="sidebarImage === 'sidebarbg4'">
                                    <label for="sidebarBg4" class="d-block rounded" (click)="settings.changeSidebarImage('sidebarbg4')"  (keydown.enter)="settings.changeSidebarImage('sidebarbg4')"  tabindex="0">
                                        <span class="theme-check2 rounded-circle"><i class="fa-solid fa-check"></i></span>
                                        <img src="assets/img/theme/sidebar-bg-04.svg" alt="img" class="rounded">
                                    </label>
                                </div>
                                <div class="theme-sidebarbg me-3 mb-3">
                                    <input type="radio" name="sidebarbg" id="sidebarBg5" value="sidebarbg5" [checked]="sidebarImage === 'sidebarbg5'">
                                    <label for="sidebarBg5" class="d-block rounded" (click)="settings.changeSidebarImage('sidebarbg5')"  (keydown.enter)="settings.changeSidebarImage('sidebarbg5')"  tabindex="0">
                                        <span class="theme-check2 rounded-circle"><i class="fa-solid fa-check"></i></span>
                                        <img src="assets/img/theme/sidebar-bg-05.svg" alt="img" class="rounded">
                                    </label>
                                </div>
                                <div class="theme-sidebarbg me-3 mb-3">
                                    <input type="radio" name="sidebarbg" id="sidebarBg6" value="sidebarbg6" [checked]="sidebarImage === 'sidebarbg6'">
                                    <label for="sidebarBg6" class="d-block rounded" (click)="settings.changeSidebarImage('sidebarbg6')"  (keydown.enter)="settings.changeSidebarImage('sidebarbg6')"  tabindex="0">
                                        <span class="theme-check2 rounded-circle"><i class="fa-solid fa-check"></i></span>
                                        <img src="assets/img/theme/sidebar-bg-06.svg" alt="img" class="rounded">
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>    
            <div class="accordion-item">
                <h2 class="accordion-header">
                    <button class="accordion-button text-gray-9 fw-semibold fs-16" type="button" data-bs-toggle="collapse" data-bs-target="#sidebarcolor" aria-expanded="true">
                        Theme Colors
                        <i class="ti ti-circle-chevron-up ms-auto text-primary"></i>
                    </button>
                </h2>
                <div id="sidebarcolor" class="accordion-collapse collapse show"	 >
                    <div class="accordion-body">
                        <div class="theme-content">
                            <div class="d-flex align-items-center flex-wrap">
                                    <div class="theme-colorsset me-2 mb-2">
                                        <input type="radio" name="color" id="primaryColor" value="primary" [checked]="primaryColor === 'primary'">
                                        <label for="primaryColor" class="primary-clr" (click)="settings.changePrimaryColor('primary')"  (keydown.enter)="settings.changePrimaryColor('primary')"  tabindex="0"></label>
                                    </div>
                                    <div class="theme-colorsset me-2 mb-2">
                                        <input type="radio" name="color" id="secondaryColor" value="secondary"  [checked]="primaryColor === 'secondary'">
                                        <label for="secondaryColor" class="secondary-clr" (click)="settings.changePrimaryColor('secondary')"  (keydown.enter)="settings.changePrimaryColor('secondary')"  tabindex="0"></label>
                                    </div>
                                    <div class="theme-colorsset me-2 mb-2">
                                        <input type="radio" name="color" id="successColor" value="success"  [checked]="primaryColor === 'success'">
                                        <label for="successColor" class="success-clr" (click)="settings.changePrimaryColor('success')"  (keydown.enter)="settings.changePrimaryColor('success')"  tabindex="0"></label>
                                    </div>
                                    <div class="theme-colorsset me-2 mb-2">
                                        <input type="radio" name="color" id="dangerColor" value="danger" [checked]="primaryColor === 'danger'">
                                        <label for="dangerColor" class="danger-clr" (click)="settings.changePrimaryColor('danger')"  (keydown.enter)="settings.changePrimaryColor('danger')"  tabindex="0"></label>
                                    </div>
                                    <div class="theme-colorsset me-2 mb-2">
                                        <input type="radio" name="color" id="infoColor" value="info" [checked]="primaryColor === 'info'">
                                        <label for="infoColor" class="info-clr" (click)="settings.changePrimaryColor('info')"  (keydown.enter)="settings.changePrimaryColor('info')"  tabindex="0"></label>
                                    </div>
                                    <div class="theme-colorsset me-2 mb-2">
                                        <input type="radio" name="color" id="warningColor" value="warning" [checked]="primaryColor === 'warning'">
                                        <label for="warningColor" class="warning-clr" (click)="settings.changePrimaryColor('warning')"  (keydown.enter)="settings.changePrimaryColor('warning')"  tabindex="0"></label>
                                    </div> 
                            </div>
                        </div>
                    </div>
                </div>
            </div> 
        </div> 
    </div>
        <div class="p-3 pt-0">
            <div class="row gx-3">
                <div class="col-6">
                    <a href="javascript:void(0);" id="resetbutton" class="btn btn-light close-theme w-100" (click)="resetAllMode()"><i class="ti ti-restore me-1"></i>Reset</a>
                </div>
                <div class="col-6">
                    <a href="javascript:void(0);" class="btn btn-primary w-100" data-bs-dismiss="offcanvas"><i class="ti ti-shopping-cart-plus me-1"></i>Buy Product</a>
                </div>
            </div>
        </div>    
    </div>` }]
  }], () => [{ type: SettingsService }, { type: SideBarService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(LayoutComponent, { className: "LayoutComponent", filePath: "src/app/features/common/layout/layout.component.ts", lineNumber: 18 });
})();

export {
  SideMenuThreeComponent,
  SideMenuTwoComponent,
  SideMenuOneComponent,
  HeaderOneComponent,
  LayoutComponent
};
//# sourceMappingURL=chunk-PBIUV5QF.js.map

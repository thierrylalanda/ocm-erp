import {
  SharedResizeObserver,
  init_private
} from "./chunk-46HFNSZZ.js";
import {
  init_platform
} from "./chunk-6XCX22WB.js";
import {
  ContentObserver,
  init_coercion,
  init_observers
} from "./chunk-33YSR6MK.js";
import {
  Directionality,
  Platform,
  coerceElement,
  init_bidi
} from "./chunk-MTEB3W4S.js";
import {
  init_rxjs_interop,
  toSignal
} from "./chunk-SR4JAI3W.js";
import {
  init_common,
  isPlatformBrowser
} from "./chunk-HQHIWYWO.js";
import {
  ApplicationRef,
  ChangeDetectionStrategy,
  Component,
  DOCUMENT,
  Directive,
  EMPTY,
  ElementRef,
  FactoryTarget,
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
  core_exports,
  createComponent,
  delay,
  effect,
  finalize,
  from,
  fromEvent,
  init_core,
  init_esm,
  inject,
  input,
  interval,
  linkedSignal,
  map,
  merge,
  numberAttribute,
  of,
  output,
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
  ɵɵngDeclareClassMetadata,
  ɵɵngDeclareComponent,
  ɵɵngDeclareDirective,
  ɵɵngDeclareFactory,
  ɵɵngDeclareInjectable,
  ɵɵngDeclareInjector,
  ɵɵngDeclareNgModule
} from "./chunk-W6MIRXHE.js";
import {
  __async,
  __esm,
  __spreadValues
} from "./chunk-FWMZPJRE.js";

// node_modules/ngx-scrollbar/fesm2022/ngx-scrollbar-smooth-scroll.mjs
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
var NEWTON_ITERATIONS, NEWTON_MIN_SLOPE, SUBDIVISION_PRECISION, SUBDIVISION_MAX_ITERATIONS, kSplineTableSize, kSampleStepSize, float32ArraySupported, defaultSmoothScrollOptions, SMOOTH_SCROLL_OPTIONS, _SmoothScrollManager, SmoothScrollManager, _SmoothScroll, SmoothScroll;
var init_ngx_scrollbar_smooth_scroll = __esm({
  "node_modules/ngx-scrollbar/fesm2022/ngx-scrollbar-smooth-scroll.mjs"() {
    "use strict";
    init_core();
    init_core();
    init_common();
    init_coercion();
    init_esm();
    NEWTON_ITERATIONS = 4;
    NEWTON_MIN_SLOPE = 1e-3;
    SUBDIVISION_PRECISION = 1e-7;
    SUBDIVISION_MAX_ITERATIONS = 10;
    kSplineTableSize = 11;
    kSampleStepSize = 1 / (kSplineTableSize - 1);
    float32ArraySupported = typeof Float32Array === "function";
    defaultSmoothScrollOptions = {
      duration: 468,
      easing: {
        x1: 0.42,
        y1: 0,
        x2: 0.58,
        y2: 1
      }
    };
    SMOOTH_SCROLL_OPTIONS = new InjectionToken("SMOOTH_SCROLL_OPTIONS", {
      providedIn: "root",
      factory: () => defaultSmoothScrollOptions
    });
    _SmoothScrollManager = class _SmoothScrollManager {
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
        return merge(fromEvent(el, "wheel", { passive: true, capture: true }), fromEvent(el, "touchmove", { passive: true, capture: true }), destroyed).pipe(take(1));
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
    _SmoothScrollManager.\u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "19.1.1", ngImport: core_exports, type: _SmoothScrollManager, deps: [], target: FactoryTarget.Injectable });
    _SmoothScrollManager.\u0275prov = \u0275\u0275ngDeclareInjectable({ minVersion: "12.0.0", version: "19.1.1", ngImport: core_exports, type: _SmoothScrollManager, providedIn: "root" });
    SmoothScrollManager = _SmoothScrollManager;
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "19.1.1", ngImport: core_exports, type: SmoothScrollManager, decorators: [{
      type: Injectable,
      args: [{
        providedIn: "root"
      }]
    }] });
    _SmoothScroll = class _SmoothScroll {
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
    _SmoothScroll.\u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "19.1.1", ngImport: core_exports, type: _SmoothScroll, deps: [], target: FactoryTarget.Directive });
    _SmoothScroll.\u0275dir = \u0275\u0275ngDeclareDirective({ minVersion: "14.0.0", version: "19.1.1", type: _SmoothScroll, isStandalone: true, selector: "[smoothScroll]", exportAs: ["smoothScroll"], ngImport: core_exports });
    SmoothScroll = _SmoothScroll;
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "19.1.1", ngImport: core_exports, type: SmoothScroll, decorators: [{
      type: Directive,
      args: [{
        standalone: true,
        selector: "[smoothScroll]",
        exportAs: "smoothScroll"
      }]
    }] });
  }
});

// node_modules/ngx-scrollbar/fesm2022/ngx-scrollbar.mjs
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
function filterResizeEntries(entries, target) {
  return entries.filter((entry) => entry.target === target)[0]?.contentRect;
}
function startPolyfill(ScrollTimeline, element, source, axis) {
  return element.animate({
    translate: [
      "var(--_scrollbar-thumb-transform-from)",
      "var(--_scrollbar-thumb-transform-to)"
    ]
  }, {
    fill: "both",
    easing: "linear",
    timeline: new ScrollTimeline({ source, axis })
  });
}
var _ScrollViewport, ScrollViewport, ViewportClasses, _ViewportAdapter, ViewportAdapter, NG_SCROLLBAR, defaultOptions, defaultScrollTimelinePolyfill, ScrollbarUpdateReason, NG_SCROLLBAR_OPTIONS, NG_SCROLLBAR_POLYFILL, _NgScrollbarCore, NgScrollbarCore, SCROLLBAR_CONTROL, _ScrollbarAdapter, ScrollbarAdapter, _PointerEventsAdapter, PointerEventsAdapter, _TrackAdapter, TrackAdapter, _TrackXDirective, TrackXDirective, _TrackYDirective, TrackYDirective, _ScrollbarManager, ScrollbarManager, _ThumbAdapter, ThumbAdapter, _ThumbXDirective, ThumbXDirective, _ThumbYDirective, ThumbYDirective, canScrollFunc, scrollStepFunc, horizontalScrollStepFunc, _ScrollbarButton, ScrollbarButton, _ScrollbarY, ScrollbarY, _ScrollbarX, ScrollbarX, _Scrollbars, Scrollbars, _NgScrollbar, NgScrollbar, _NgScrollbarExt, NgScrollbarExt, _AsyncDetection, AsyncDetection, _SyncSpacer, SyncSpacer, _NgScrollbarModule, NgScrollbarModule;
var init_ngx_scrollbar = __esm({
  "node_modules/ngx-scrollbar/fesm2022/ngx-scrollbar.mjs"() {
    "use strict";
    init_core();
    init_core();
    init_esm();
    init_platform();
    init_bidi();
    init_private();
    init_rxjs_interop();
    init_ngx_scrollbar_smooth_scroll();
    init_common();
    init_observers();
    _ScrollViewport = class _ScrollViewport {
      constructor() {
        this.nativeElement = inject(ElementRef).nativeElement;
      }
    };
    _ScrollViewport.\u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "19.1.1", ngImport: core_exports, type: _ScrollViewport, deps: [], target: FactoryTarget.Directive });
    _ScrollViewport.\u0275dir = \u0275\u0275ngDeclareDirective({ minVersion: "14.0.0", version: "19.1.1", type: _ScrollViewport, isStandalone: true, selector: "[scrollViewport]", ngImport: core_exports });
    ScrollViewport = _ScrollViewport;
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "19.1.1", ngImport: core_exports, type: ScrollViewport, decorators: [{
      type: Directive,
      args: [{
        standalone: true,
        selector: "[scrollViewport]"
      }]
    }] });
    (function(ViewportClasses2) {
      ViewportClasses2["Viewport"] = "ng-scroll-viewport";
      ViewportClasses2["Content"] = "ng-scroll-content";
      ViewportClasses2["Spacer"] = "ng-scroll-spacer";
    })(ViewportClasses || (ViewportClasses = {}));
    _ViewportAdapter = class _ViewportAdapter {
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
    _ViewportAdapter.\u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "19.1.1", ngImport: core_exports, type: _ViewportAdapter, deps: [], target: FactoryTarget.Injectable });
    _ViewportAdapter.\u0275prov = \u0275\u0275ngDeclareInjectable({ minVersion: "12.0.0", version: "19.1.1", ngImport: core_exports, type: _ViewportAdapter });
    ViewportAdapter = _ViewportAdapter;
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "19.1.1", ngImport: core_exports, type: ViewportAdapter, decorators: [{
      type: Injectable
    }] });
    NG_SCROLLBAR = new InjectionToken("NG_SCROLLBAR");
    defaultOptions = {
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
    defaultScrollTimelinePolyfill = "https://cdn.statically.io/gist/MurhafSousli/c852b6a672069396953f06ddd4b64620/raw/ef55db72e2abb7bc002ed79f4ad4cf408bfdb72f/scroll-timeline-lite.js";
    (function(ScrollbarUpdateReason2) {
      ScrollbarUpdateReason2["AfterInit"] = "AfterInit";
      ScrollbarUpdateReason2["Resized"] = "ResizeObserver";
    })(ScrollbarUpdateReason || (ScrollbarUpdateReason = {}));
    NG_SCROLLBAR_OPTIONS = new InjectionToken("NG_SCROLLBAR_OPTIONS", {
      providedIn: "root",
      factory: () => defaultOptions
    });
    NG_SCROLLBAR_POLYFILL = new InjectionToken("NG_SCROLLBAR_POLYFILL", {
      providedIn: "root",
      factory: () => defaultScrollTimelinePolyfill
    });
    _NgScrollbarCore = class _NgScrollbarCore {
      constructor() {
        this.options = inject(NG_SCROLLBAR_OPTIONS);
        this.sharedResizeObserver = inject(SharedResizeObserver);
        this.zone = inject(NgZone);
        this.platform = inject(Platform);
        this.isMobile = this.platform.IOS || this.platform.ANDROID;
        this.dir = inject(Directionality);
        this.smoothScroll = inject(SmoothScrollManager);
        this.viewport = inject(ViewportAdapter, { self: true });
        this.nativeElement = inject(ElementRef).nativeElement;
        this.direction = toSignal(this.dir.change, { initialValue: this.dir.value });
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
        this.viewportDimension = signal({ width: 0, height: 0 });
        this.contentDimension = signal({ width: 0, height: 0 });
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
                    resizeSub$ = getThrottledStream(combineLatest([
                      this.sharedResizeObserver.observe(this.viewport.nativeElement),
                      this.sharedResizeObserver.observe(this.viewport.contentWrapperElement)
                    ]), throttleDuration).subscribe(() => {
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
        this.viewportDimension.set({ width: this.viewport.offsetWidth, height: this.viewport.offsetHeight });
        this.contentDimension.set({ width: this.viewport.contentWidth, height: this.viewport.contentHeight });
      }
    };
    _NgScrollbarCore.\u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "19.1.1", ngImport: core_exports, type: _NgScrollbarCore, deps: [], target: FactoryTarget.Directive });
    _NgScrollbarCore.\u0275dir = \u0275\u0275ngDeclareDirective({ minVersion: "17.1.0", version: "19.1.1", type: _NgScrollbarCore, isStandalone: true, inputs: { orientation: { classPropertyName: "orientation", publicName: "orientation", isSignal: true, isRequired: false, transformFunction: null }, visibility: { classPropertyName: "visibility", publicName: "visibility", isSignal: true, isRequired: false, transformFunction: null }, buttons: { classPropertyName: "buttons", publicName: "buttons", isSignal: true, isRequired: false, transformFunction: null }, disableInteraction: { classPropertyName: "disableInteraction", publicName: "disableInteraction", isSignal: true, isRequired: false, transformFunction: null }, disableSensor: { classPropertyName: "disableSensor", publicName: "disableSensor", isSignal: true, isRequired: false, transformFunction: null }, sensorThrottleTime: { classPropertyName: "sensorThrottleTime", publicName: "sensorThrottleTime", isSignal: true, isRequired: false, transformFunction: null }, hoverOffset: { classPropertyName: "hoverOffset", publicName: "hoverOffset", isSignal: true, isRequired: false, transformFunction: null }, trackScrollDuration: { classPropertyName: "trackScrollDuration", publicName: "trackScrollDuration", isSignal: true, isRequired: false, transformFunction: null }, appearance: { classPropertyName: "appearance", publicName: "appearance", isSignal: true, isRequired: false, transformFunction: null }, position: { classPropertyName: "position", publicName: "position", isSignal: true, isRequired: false, transformFunction: null }, trackClass: { classPropertyName: "trackClass", publicName: "trackClass", isSignal: true, isRequired: false, transformFunction: null }, thumbClass: { classPropertyName: "thumbClass", publicName: "thumbClass", isSignal: true, isRequired: false, transformFunction: null }, buttonClass: { classPropertyName: "buttonClass", publicName: "buttonClass", isSignal: true, isRequired: false, transformFunction: null } }, outputs: { afterInit: "afterInit", afterUpdate: "afterUpdate" }, host: { properties: { "class.ng-scrollbar": "true", "attr.verticalUsed": "verticalUsed()", "attr.horizontalUsed": "horizontalUsed()", "attr.isVerticallyScrollable": "isVerticallyScrollable()", "attr.isHorizontallyScrollable": "isHorizontallyScrollable()", "attr.mobile": "isMobile", "attr.dir": "direction()", "attr.position": "position()", "attr.dragging": "dragging()", "attr.appearance": "appearance()", "attr.visibility": "visibility()", "attr.orientation": "orientation()", "attr.disableInteraction": "disableInteraction()", "style.--content-height": "contentDimension().height", "style.--content-width": "contentDimension().width", "style.--viewport-height": "viewportDimension().height", "style.--viewport-width": "viewportDimension().width" } }, providers: [
      { provide: NG_SCROLLBAR, useExisting: _NgScrollbarCore }
    ], ngImport: core_exports });
    NgScrollbarCore = _NgScrollbarCore;
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "19.1.1", ngImport: core_exports, type: NgScrollbarCore, decorators: [{
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
        providers: [
          { provide: NG_SCROLLBAR, useExisting: NgScrollbarCore }
        ]
      }]
    }], ctorParameters: () => [] });
    SCROLLBAR_CONTROL = new InjectionToken("SCROLLBAR_CONTROL");
    _ScrollbarAdapter = class _ScrollbarAdapter {
      constructor() {
        this.trackSize = signal(0);
        this.cmp = inject(NG_SCROLLBAR);
      }
    };
    _ScrollbarAdapter.\u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "19.1.1", ngImport: core_exports, type: _ScrollbarAdapter, deps: [], target: FactoryTarget.Directive });
    _ScrollbarAdapter.\u0275dir = \u0275\u0275ngDeclareDirective({ minVersion: "14.0.0", version: "19.1.1", type: _ScrollbarAdapter, isStandalone: true, ngImport: core_exports });
    ScrollbarAdapter = _ScrollbarAdapter;
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "19.1.1", ngImport: core_exports, type: ScrollbarAdapter, decorators: [{
      type: Directive
    }] });
    _PointerEventsAdapter = class _PointerEventsAdapter {
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
    _PointerEventsAdapter.\u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "19.1.1", ngImport: core_exports, type: _PointerEventsAdapter, deps: [], target: FactoryTarget.Directive });
    _PointerEventsAdapter.\u0275dir = \u0275\u0275ngDeclareDirective({ minVersion: "14.0.0", version: "19.1.1", type: _PointerEventsAdapter, isStandalone: true, ngImport: core_exports });
    PointerEventsAdapter = _PointerEventsAdapter;
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "19.1.1", ngImport: core_exports, type: PointerEventsAdapter, decorators: [{
      type: Directive
    }], ctorParameters: () => [] });
    _TrackAdapter = class _TrackAdapter extends PointerEventsAdapter {
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
        const pointerUp$ = fromEvent(this.document, "pointerup", { passive: true }).pipe(enableSelection(this.document));
        const pointerEnter$ = fromEvent(this.nativeElement, "pointerover", { passive: true }).pipe(
          // When mouse is out and enters again, must set the current position first
          tap((e) => this.currMousePosition = e[this.control.offsetProperty]),
          map(() => true)
        );
        const pointerLeave$ = fromEvent(this.nativeElement, "pointerout", { passive: true }).pipe(map(() => false));
        const pointerOver$ = merge(pointerEnter$, pointerLeave$).pipe(startWith(true));
        const pointerMove$ = fromEvent(this.nativeElement, "pointermove", { passive: true }).pipe(tap((e) => this.currMousePosition = e[this.control.offsetProperty]));
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
    _TrackAdapter.\u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "19.1.1", ngImport: core_exports, type: _TrackAdapter, deps: [], target: FactoryTarget.Directive });
    _TrackAdapter.\u0275dir = \u0275\u0275ngDeclareDirective({ minVersion: "14.0.0", version: "19.1.1", type: _TrackAdapter, isStandalone: true, usesInheritance: true, ngImport: core_exports });
    TrackAdapter = _TrackAdapter;
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "19.1.1", ngImport: core_exports, type: TrackAdapter, decorators: [{
      type: Directive
    }], ctorParameters: () => [] });
    _TrackXDirective = class _TrackXDirective extends TrackAdapter {
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
        return from(this.cmp.scrollTo({ start, duration: this.cmp.trackScrollDuration() }));
      }
      getScrollForwardStep() {
        return this.control.viewportScrollOffset + this.viewportSize;
      }
      getScrollBackwardStep() {
        return this.control.viewportScrollOffset - this.viewportSize;
      }
    };
    _TrackXDirective.\u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "19.1.1", ngImport: core_exports, type: _TrackXDirective, deps: [], target: FactoryTarget.Directive });
    _TrackXDirective.\u0275dir = \u0275\u0275ngDeclareDirective({ minVersion: "14.0.0", version: "19.1.1", type: _TrackXDirective, isStandalone: true, selector: "[scrollbarTrackX]", providers: [{ provide: TrackAdapter, useExisting: _TrackXDirective }], usesInheritance: true, ngImport: core_exports });
    TrackXDirective = _TrackXDirective;
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "19.1.1", ngImport: core_exports, type: TrackXDirective, decorators: [{
      type: Directive,
      args: [{
        standalone: true,
        selector: "[scrollbarTrackX]",
        providers: [{ provide: TrackAdapter, useExisting: TrackXDirective }]
      }]
    }], ctorParameters: () => [] });
    _TrackYDirective = class _TrackYDirective extends TrackAdapter {
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
        return from(this.cmp.scrollTo({ top, duration: this.cmp.trackScrollDuration() }));
      }
      getScrollForwardStep() {
        return this.control.viewportScrollOffset + this.viewportSize;
      }
      getScrollBackwardStep() {
        return this.control.viewportScrollOffset - this.viewportSize;
      }
    };
    _TrackYDirective.\u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "19.1.1", ngImport: core_exports, type: _TrackYDirective, deps: null, target: FactoryTarget.Directive });
    _TrackYDirective.\u0275dir = \u0275\u0275ngDeclareDirective({ minVersion: "14.0.0", version: "19.1.1", type: _TrackYDirective, isStandalone: true, selector: "[scrollbarTrackY]", providers: [{ provide: TrackAdapter, useExisting: _TrackYDirective }], usesInheritance: true, ngImport: core_exports });
    TrackYDirective = _TrackYDirective;
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "19.1.1", ngImport: core_exports, type: TrackYDirective, decorators: [{
      type: Directive,
      args: [{
        standalone: true,
        selector: "[scrollbarTrackY]",
        providers: [{ provide: TrackAdapter, useExisting: TrackYDirective }]
      }]
    }] });
    _ScrollbarManager = class _ScrollbarManager {
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
    _ScrollbarManager.\u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "19.1.1", ngImport: core_exports, type: _ScrollbarManager, deps: [], target: FactoryTarget.Injectable });
    _ScrollbarManager.\u0275prov = \u0275\u0275ngDeclareInjectable({ minVersion: "12.0.0", version: "19.1.1", ngImport: core_exports, type: _ScrollbarManager, providedIn: "root" });
    ScrollbarManager = _ScrollbarManager;
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "19.1.1", ngImport: core_exports, type: ScrollbarManager, decorators: [{
      type: Injectable,
      args: [{ providedIn: "root" }]
    }], ctorParameters: () => [] });
    _ThumbAdapter = class _ThumbAdapter extends PointerEventsAdapter {
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
          const dragEnd = fromEvent(this.document, "pointerup", { capture: true }).pipe(stopPropagation(), enableSelection(this.document), tap(() => this.setDragging("none")));
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
    _ThumbAdapter.\u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "19.1.1", ngImport: core_exports, type: _ThumbAdapter, deps: [], target: FactoryTarget.Directive });
    _ThumbAdapter.\u0275dir = \u0275\u0275ngDeclareDirective({ minVersion: "14.0.0", version: "19.1.1", type: _ThumbAdapter, isStandalone: true, usesInheritance: true, ngImport: core_exports });
    ThumbAdapter = _ThumbAdapter;
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "19.1.1", ngImport: core_exports, type: ThumbAdapter, decorators: [{
      type: Directive
    }], ctorParameters: () => [] });
    _ThumbXDirective = class _ThumbXDirective extends ThumbAdapter {
    };
    _ThumbXDirective.\u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "19.1.1", ngImport: core_exports, type: _ThumbXDirective, deps: null, target: FactoryTarget.Directive });
    _ThumbXDirective.\u0275dir = \u0275\u0275ngDeclareDirective({ minVersion: "14.0.0", version: "19.1.1", type: _ThumbXDirective, isStandalone: true, selector: "[scrollbarThumbX]", providers: [{ provide: ThumbAdapter, useExisting: _ThumbXDirective }], usesInheritance: true, ngImport: core_exports });
    ThumbXDirective = _ThumbXDirective;
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "19.1.1", ngImport: core_exports, type: ThumbXDirective, decorators: [{
      type: Directive,
      args: [{
        standalone: true,
        selector: "[scrollbarThumbX]",
        providers: [{ provide: ThumbAdapter, useExisting: ThumbXDirective }]
      }]
    }] });
    _ThumbYDirective = class _ThumbYDirective extends ThumbAdapter {
    };
    _ThumbYDirective.\u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "19.1.1", ngImport: core_exports, type: _ThumbYDirective, deps: null, target: FactoryTarget.Directive });
    _ThumbYDirective.\u0275dir = \u0275\u0275ngDeclareDirective({ minVersion: "14.0.0", version: "19.1.1", type: _ThumbYDirective, isStandalone: true, selector: "[scrollbarThumbY]", providers: [{ provide: ThumbAdapter, useExisting: _ThumbYDirective }], usesInheritance: true, ngImport: core_exports });
    ThumbYDirective = _ThumbYDirective;
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "19.1.1", ngImport: core_exports, type: ThumbYDirective, decorators: [{
      type: Directive,
      args: [{
        standalone: true,
        selector: "[scrollbarThumbY]",
        providers: [{ provide: ThumbAdapter, useExisting: ThumbYDirective }]
      }]
    }] });
    canScrollFunc = {
      forward: (scrollOffset, scrollMax) => scrollOffset < scrollMax,
      backward: (scrollOffset) => scrollOffset > 0
    };
    scrollStepFunc = {
      forward: (scrollBy, offset) => offset + scrollBy,
      backward: (scrollBy, offset) => offset - scrollBy
    };
    horizontalScrollStepFunc = {
      rtl: {
        forward: (scrollBy, offset, scrollMax) => scrollMax - offset - scrollBy,
        backward: (scrollBy, offset, scrollMax) => scrollMax - offset + scrollBy
      },
      ltr: scrollStepFunc
    };
    _ScrollbarButton = class _ScrollbarButton extends PointerEventsAdapter {
      get pointerEvents() {
        const pointerDown$ = fromEvent(this.nativeElement, "pointerdown").pipe(stopPropagation(), preventSelection(this.document));
        const pointerUp$ = fromEvent(this.document, "pointerup", { passive: true }).pipe(enableSelection(this.document));
        const pointerLeave$ = fromEvent(this.nativeElement, "pointerleave", { passive: true });
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
    _ScrollbarButton.\u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "19.1.1", ngImport: core_exports, type: _ScrollbarButton, deps: [], target: FactoryTarget.Component });
    _ScrollbarButton.\u0275cmp = \u0275\u0275ngDeclareComponent({ minVersion: "17.1.0", version: "19.1.1", type: _ScrollbarButton, isStandalone: true, selector: "button[scrollbarButton]", inputs: { scrollbarButton: { classPropertyName: "scrollbarButton", publicName: "scrollbarButton", isSignal: true, isRequired: true, transformFunction: null }, scrollDirection: { classPropertyName: "scrollDirection", publicName: "scrollDirection", isSignal: true, isRequired: true, transformFunction: null } }, usesInheritance: true, ngImport: core_exports, template: '<div class="ng-scrollbar-button-icon">\r\n  <svg viewBox="0 0 512 512"\r\n       xmlns="http://www.w3.org/2000/svg">\r\n    <path\r\n      d="M413.1,327.3l-1.8-2.1l-136-156.5c-4.6-5.3-11.5-8.6-19.2-8.6c-7.7,0-14.6,3.4-19.2,8.6L101,324.9l-2.3,2.6  C97,330,96,333,96,336.2c0,8.7,7.4,15.8,16.6,15.8v0h286.8v0c9.2,0,16.6-7.1,16.6-15.8C416,332.9,414.9,329.8,413.1,327.3z"/>\r\n  </svg>\r\n</div>\r\n', styles: [":host{position:relative;border:none;margin:0;padding:0;border-radius:0;appearance:none;background-color:var(--INTERNAL-scrollbar-button-color)}:host svg{width:100%;height:100%;fill:var(--INTERNAL-scrollbar-button-fill)}:host:hover{background:var(--INTERNAL-scrollbar-button-hover-color)}:host:hover svg{fill:var(--INTERNAL-scrollbar-button-hover-fill)}:host:active{background:var(--INTERNAL-scrollbar-button-active-color)}:host:active svg{fill:var(--INTERNAL-scrollbar-button-active-fill)}:host[scrollbarButton=top],:host[scrollbarButton=start]{order:1}:host[scrollbarButton=bottom],:host[scrollbarButton=end]{order:3}:host[scrollbarButton=top],:host[scrollbarButton=bottom]{width:100%;height:var(--INTERNAL-scrollbar-button-size)}:host[scrollbarButton=start],:host[scrollbarButton=end]{width:var(--INTERNAL-scrollbar-button-size);height:100%}:host[scrollbarButton=bottom]{--_button-rotate: 180deg}:host[scrollbarButton=start]{--_button-rotate: -90deg}:host[scrollbarButton=start] .ng-scrollbar-button-icon{writing-mode:vertical-lr}:host[scrollbarButton=end]{--_button-rotate: 90deg}:host[scrollbarButton=end] .ng-scrollbar-button-icon{writing-mode:vertical-rl}.ng-scrollbar-button-icon{rotate:var(--_button-rotate);display:flex;place-content:center;place-items:center;width:100%;height:100%}\n"], changeDetection: ChangeDetectionStrategy.OnPush });
    ScrollbarButton = _ScrollbarButton;
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "19.1.1", ngImport: core_exports, type: ScrollbarButton, decorators: [{
      type: Component,
      args: [{ selector: "button[scrollbarButton]", changeDetection: ChangeDetectionStrategy.OnPush, template: '<div class="ng-scrollbar-button-icon">\r\n  <svg viewBox="0 0 512 512"\r\n       xmlns="http://www.w3.org/2000/svg">\r\n    <path\r\n      d="M413.1,327.3l-1.8-2.1l-136-156.5c-4.6-5.3-11.5-8.6-19.2-8.6c-7.7,0-14.6,3.4-19.2,8.6L101,324.9l-2.3,2.6  C97,330,96,333,96,336.2c0,8.7,7.4,15.8,16.6,15.8v0h286.8v0c9.2,0,16.6-7.1,16.6-15.8C416,332.9,414.9,329.8,413.1,327.3z"/>\r\n  </svg>\r\n</div>\r\n', styles: [":host{position:relative;border:none;margin:0;padding:0;border-radius:0;appearance:none;background-color:var(--INTERNAL-scrollbar-button-color)}:host svg{width:100%;height:100%;fill:var(--INTERNAL-scrollbar-button-fill)}:host:hover{background:var(--INTERNAL-scrollbar-button-hover-color)}:host:hover svg{fill:var(--INTERNAL-scrollbar-button-hover-fill)}:host:active{background:var(--INTERNAL-scrollbar-button-active-color)}:host:active svg{fill:var(--INTERNAL-scrollbar-button-active-fill)}:host[scrollbarButton=top],:host[scrollbarButton=start]{order:1}:host[scrollbarButton=bottom],:host[scrollbarButton=end]{order:3}:host[scrollbarButton=top],:host[scrollbarButton=bottom]{width:100%;height:var(--INTERNAL-scrollbar-button-size)}:host[scrollbarButton=start],:host[scrollbarButton=end]{width:var(--INTERNAL-scrollbar-button-size);height:100%}:host[scrollbarButton=bottom]{--_button-rotate: 180deg}:host[scrollbarButton=start]{--_button-rotate: -90deg}:host[scrollbarButton=start] .ng-scrollbar-button-icon{writing-mode:vertical-lr}:host[scrollbarButton=end]{--_button-rotate: 90deg}:host[scrollbarButton=end] .ng-scrollbar-button-icon{writing-mode:vertical-rl}.ng-scrollbar-button-icon{rotate:var(--_button-rotate);display:flex;place-content:center;place-items:center;width:100%;height:100%}\n"] }]
    }], ctorParameters: () => [] });
    _ScrollbarY = class _ScrollbarY extends ScrollbarAdapter {
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
        return from(this.cmp.scrollTo({ top, duration }));
      }
      instantScrollTo(value) {
        this.cmp.viewport.scrollYTo(value);
      }
    };
    _ScrollbarY.\u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "19.1.1", ngImport: core_exports, type: _ScrollbarY, deps: null, target: FactoryTarget.Component });
    _ScrollbarY.\u0275cmp = \u0275\u0275ngDeclareComponent({ minVersion: "17.0.0", version: "19.1.1", type: _ScrollbarY, isStandalone: true, selector: "scrollbar-y", host: { properties: { "style.--track-size": "trackSize()" } }, providers: [
      { provide: SCROLLBAR_CONTROL, useExisting: _ScrollbarY }
    ], usesInheritance: true, ngImport: core_exports, template: `
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
  `, isInline: true, styles: [":host{position:absolute;inset:0;pointer-events:none;min-width:calc(var(--viewport-width) * 1px);min-height:calc(var(--viewport-height) * 1px)}.ng-scrollbar-sticky{top:calc(var(--_scrollbar-wrapper-top) * 1px);left:calc(var(--_scrollbar-wrapper-left) * 1px);right:calc(var(--_scrollbar-wrapper-right) * 1px);height:calc(var(--_scrollbar-wrapper-height) * 1px);width:calc(var(--_scrollbar-wrapper-width) * 1px);position:sticky;z-index:100;opacity:var(--_scrollbar-hover-opacity);transition:var(--_scrollbar-opacity-transition);pointer-events:var(--_scrollbar-pointer-events)}.ng-scrollbar-track-wrapper{touch-action:none;-webkit-user-select:none;user-select:none;top:var(--_scrollbar-track-top);bottom:var(--_scrollbar-track-bottom);right:var(--_scrollbar-track-right);left:var(--_scrollbar-track-left);transition:var(--INTERNAL-scrollbar-track-wrapper-transition);position:absolute;overflow:hidden;display:flex;place-items:center}.ng-scrollbar-track{position:relative;width:100%;height:100%;background-color:var(--INTERNAL-scrollbar-track-color);border-radius:var(--INTERNAL-scrollbar-border-radius);cursor:default;z-index:1;order:2}.ng-scrollbar-thumb{box-sizing:border-box;position:absolute;transition:var(--INTERNAL-scrollbar-thumb-transition);border-radius:var(--INTERNAL-scrollbar-border-radius);height:var(--_thumb-height);width:var(--_thumb-width);animation-name:scrollbarThumbAnimation;animation-duration:1ms;animation-timing-function:linear}@keyframes scrollbarThumbAnimation{0%{translate:var(--_scrollbar-thumb-transform-from)}to{translate:var(--_scrollbar-thumb-transform-to)}}\n", ":host{--_scrollbar-wrapper-top: 0;--_scrollbar-wrapper-left: var(--_scrollbar-wrapper-y-left);--_scrollbar-wrapper-right: var(--_scrollbar-wrapper-y-right);--_scrollbar-wrapper-height: var(--viewport-height);--_scrollbar-wrapper-width: var(--_scrollbar-thickness);--_scrollbar-track-top: var(--_vertical-top);--_scrollbar-track-bottom: var(--_vertical-bottom);--_scrollbar-track-right: var(--_vertical-right);--_scrollbar-track-left: var(--_vertical-left);--thumb-size: max(calc(var(--viewport-height) * var(--track-size) / var(--content-height)), var(--INTERNAL-scrollbar-thumb-min-size));--_thumb-height: calc(var(--thumb-size) * 1px);--_thumb-width: 100%;--_scrollbar-y-thumb-transform-to-value: calc(var(--track-size) - var(--thumb-size));--_scrollbar-thumb-transform-from: 0 0;--_scrollbar-thumb-transform-to: 0 calc(var(--_scrollbar-y-thumb-transform-to-value) * 1px)}.ng-scrollbar-track-wrapper{width:var(--_track-y-thickness);flex-direction:column}.ng-scrollbar-hover:hover,.ng-scrollbar-hover:active{--_track-y-thickness: var(--_scrollbar-hover-thickness-px);--_thumb-y-color: var(--INTERNAL-scrollbar-thumb-hover-color)}.ng-scrollbar-thumb{animation-timeline:var(--_animation-timeline-y);min-height:calc(var(--INTERNAL-scrollbar-thumb-min-size) * 1px);display:var(--_vertical-thumb-display);background-color:var(--_thumb-y-color)}\n"], dependencies: [{ kind: "directive", type: TrackYDirective, selector: "[scrollbarTrackY]" }, { kind: "directive", type: ThumbYDirective, selector: "[scrollbarThumbY]" }, { kind: "component", type: ScrollbarButton, selector: "button[scrollbarButton]", inputs: ["scrollbarButton", "scrollDirection"] }], changeDetection: ChangeDetectionStrategy.OnPush });
    ScrollbarY = _ScrollbarY;
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "19.1.1", ngImport: core_exports, type: ScrollbarY, decorators: [{
      type: Component,
      args: [{ selector: "scrollbar-y", template: `
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
  `, imports: [TrackYDirective, ThumbYDirective, ScrollbarButton], providers: [
        { provide: SCROLLBAR_CONTROL, useExisting: ScrollbarY }
      ], host: {
        "[style.--track-size]": "trackSize()"
      }, changeDetection: ChangeDetectionStrategy.OnPush, styles: [":host{position:absolute;inset:0;pointer-events:none;min-width:calc(var(--viewport-width) * 1px);min-height:calc(var(--viewport-height) * 1px)}.ng-scrollbar-sticky{top:calc(var(--_scrollbar-wrapper-top) * 1px);left:calc(var(--_scrollbar-wrapper-left) * 1px);right:calc(var(--_scrollbar-wrapper-right) * 1px);height:calc(var(--_scrollbar-wrapper-height) * 1px);width:calc(var(--_scrollbar-wrapper-width) * 1px);position:sticky;z-index:100;opacity:var(--_scrollbar-hover-opacity);transition:var(--_scrollbar-opacity-transition);pointer-events:var(--_scrollbar-pointer-events)}.ng-scrollbar-track-wrapper{touch-action:none;-webkit-user-select:none;user-select:none;top:var(--_scrollbar-track-top);bottom:var(--_scrollbar-track-bottom);right:var(--_scrollbar-track-right);left:var(--_scrollbar-track-left);transition:var(--INTERNAL-scrollbar-track-wrapper-transition);position:absolute;overflow:hidden;display:flex;place-items:center}.ng-scrollbar-track{position:relative;width:100%;height:100%;background-color:var(--INTERNAL-scrollbar-track-color);border-radius:var(--INTERNAL-scrollbar-border-radius);cursor:default;z-index:1;order:2}.ng-scrollbar-thumb{box-sizing:border-box;position:absolute;transition:var(--INTERNAL-scrollbar-thumb-transition);border-radius:var(--INTERNAL-scrollbar-border-radius);height:var(--_thumb-height);width:var(--_thumb-width);animation-name:scrollbarThumbAnimation;animation-duration:1ms;animation-timing-function:linear}@keyframes scrollbarThumbAnimation{0%{translate:var(--_scrollbar-thumb-transform-from)}to{translate:var(--_scrollbar-thumb-transform-to)}}\n", ":host{--_scrollbar-wrapper-top: 0;--_scrollbar-wrapper-left: var(--_scrollbar-wrapper-y-left);--_scrollbar-wrapper-right: var(--_scrollbar-wrapper-y-right);--_scrollbar-wrapper-height: var(--viewport-height);--_scrollbar-wrapper-width: var(--_scrollbar-thickness);--_scrollbar-track-top: var(--_vertical-top);--_scrollbar-track-bottom: var(--_vertical-bottom);--_scrollbar-track-right: var(--_vertical-right);--_scrollbar-track-left: var(--_vertical-left);--thumb-size: max(calc(var(--viewport-height) * var(--track-size) / var(--content-height)), var(--INTERNAL-scrollbar-thumb-min-size));--_thumb-height: calc(var(--thumb-size) * 1px);--_thumb-width: 100%;--_scrollbar-y-thumb-transform-to-value: calc(var(--track-size) - var(--thumb-size));--_scrollbar-thumb-transform-from: 0 0;--_scrollbar-thumb-transform-to: 0 calc(var(--_scrollbar-y-thumb-transform-to-value) * 1px)}.ng-scrollbar-track-wrapper{width:var(--_track-y-thickness);flex-direction:column}.ng-scrollbar-hover:hover,.ng-scrollbar-hover:active{--_track-y-thickness: var(--_scrollbar-hover-thickness-px);--_thumb-y-color: var(--INTERNAL-scrollbar-thumb-hover-color)}.ng-scrollbar-thumb{animation-timeline:var(--_animation-timeline-y);min-height:calc(var(--INTERNAL-scrollbar-thumb-min-size) * 1px);display:var(--_vertical-thumb-display);background-color:var(--_thumb-y-color)}\n"] }]
    }] });
    _ScrollbarX = class _ScrollbarX extends ScrollbarAdapter {
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
        return from(this.cmp.scrollTo({ left, duration }));
      }
      instantScrollTo(value, scrollMax) {
        this.cmp.viewport.scrollXTo(this.handlePosition(value, scrollMax));
      }
    };
    _ScrollbarX.\u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "19.1.1", ngImport: core_exports, type: _ScrollbarX, deps: [], target: FactoryTarget.Component });
    _ScrollbarX.\u0275cmp = \u0275\u0275ngDeclareComponent({ minVersion: "17.0.0", version: "19.1.1", type: _ScrollbarX, isStandalone: true, selector: "scrollbar-x", host: { properties: { "attr.dir": "cmp.direction()", "style.--track-size": "trackSize()" } }, providers: [
      { provide: SCROLLBAR_CONTROL, useExisting: _ScrollbarX }
    ], usesInheritance: true, ngImport: core_exports, template: `
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
  `, isInline: true, styles: [":host{position:absolute;inset:0;pointer-events:none;min-width:calc(var(--viewport-width) * 1px);min-height:calc(var(--viewport-height) * 1px)}.ng-scrollbar-sticky{top:calc(var(--_scrollbar-wrapper-top) * 1px);left:calc(var(--_scrollbar-wrapper-left) * 1px);right:calc(var(--_scrollbar-wrapper-right) * 1px);height:calc(var(--_scrollbar-wrapper-height) * 1px);width:calc(var(--_scrollbar-wrapper-width) * 1px);position:sticky;z-index:100;opacity:var(--_scrollbar-hover-opacity);transition:var(--_scrollbar-opacity-transition);pointer-events:var(--_scrollbar-pointer-events)}.ng-scrollbar-track-wrapper{touch-action:none;-webkit-user-select:none;user-select:none;top:var(--_scrollbar-track-top);bottom:var(--_scrollbar-track-bottom);right:var(--_scrollbar-track-right);left:var(--_scrollbar-track-left);transition:var(--INTERNAL-scrollbar-track-wrapper-transition);position:absolute;overflow:hidden;display:flex;place-items:center}.ng-scrollbar-track{position:relative;width:100%;height:100%;background-color:var(--INTERNAL-scrollbar-track-color);border-radius:var(--INTERNAL-scrollbar-border-radius);cursor:default;z-index:1;order:2}.ng-scrollbar-thumb{box-sizing:border-box;position:absolute;transition:var(--INTERNAL-scrollbar-thumb-transition);border-radius:var(--INTERNAL-scrollbar-border-radius);height:var(--_thumb-height);width:var(--_thumb-width);animation-name:scrollbarThumbAnimation;animation-duration:1ms;animation-timing-function:linear}@keyframes scrollbarThumbAnimation{0%{translate:var(--_scrollbar-thumb-transform-from)}to{translate:var(--_scrollbar-thumb-transform-to)}}\n", ":host{--_scrollbar-wrapper-top: var(--_scrollbar-wrapper-x-top);--_scrollbar-wrapper-left: 0;--_scrollbar-wrapper-right: 0;--_scrollbar-wrapper-height: var(--_scrollbar-thickness);--_scrollbar-wrapper-width: var(--viewport-width);--_scrollbar-track-top: var(--_horizontal-top);--_scrollbar-track-bottom: var(--_horizontal-bottom);--_scrollbar-track-right: var(--_horizontal-right);--_scrollbar-track-left: var(--_horizontal-left);--thumb-size: max(calc(var(--viewport-width) * var(--track-size) / var(--content-width)), var(--INTERNAL-scrollbar-thumb-min-size));--_thumb-height: 100%;--_thumb-width: calc(var(--thumb-size) * 1px);--_scrollbar-x-thumb-transform-to-value: calc(var(--track-size) - var(--thumb-size));--_scrollbar-thumb-transform-from: 0;--_scrollbar-thumb-transform-to: calc(var(--_scrollbar-x-thumb-transform-to-value) * 1px)}:host .ng-scrollbar-button[scrollbarButton=start]{_--button-rotate:90}:host .ng-scrollbar-button[scrollbarButton=end]{_--button-rotate:-90}:host[dir=rtl] .ng-scrollbar-thumb{animation-name:scrollbarThumbRTLAnimation;will-change:right;--_scrollbar-thumb-transform-to: calc(var(--_scrollbar-x-thumb-transform-to-value) * -1px)}:host[dir=rtl] .ng-scrollbar-button[scrollbarButton=start]{--_button-rotate: 90deg}:host[dir=rtl] .ng-scrollbar-button[scrollbarButton=end]{--_button-rotate: -90deg}.ng-scrollbar-track-wrapper{height:var(--_track-x-thickness);flex-direction:row}.ng-scrollbar-hover:hover,.ng-scrollbar-hover:active{--_track-x-thickness: var(--_scrollbar-hover-thickness-px);--_thumb-x-color: var(--INTERNAL-scrollbar-thumb-hover-color)}.ng-scrollbar-thumb{animation-timeline:var(--_animation-timeline-x);min-width:calc(var(--INTERNAL-scrollbar-thumb-min-size) * 1px);display:var(--_horizontal-thumb-display);background-color:var(--_thumb-x-color)}@keyframes scrollbarThumbRTLAnimation{0%{right:var(--_scrollbar-thumb-transform-from)}to{right:calc(var(--_scrollbar-thumb-transform-to) * -1)}}\n"], dependencies: [{ kind: "directive", type: TrackXDirective, selector: "[scrollbarTrackX]" }, { kind: "directive", type: ThumbXDirective, selector: "[scrollbarThumbX]" }, { kind: "component", type: ScrollbarButton, selector: "button[scrollbarButton]", inputs: ["scrollbarButton", "scrollDirection"] }], changeDetection: ChangeDetectionStrategy.OnPush });
    ScrollbarX = _ScrollbarX;
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "19.1.1", ngImport: core_exports, type: ScrollbarX, decorators: [{
      type: Component,
      args: [{ selector: "scrollbar-x", template: `
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
  `, imports: [TrackXDirective, ThumbXDirective, ScrollbarButton], providers: [
        { provide: SCROLLBAR_CONTROL, useExisting: ScrollbarX }
      ], host: {
        "[attr.dir]": "cmp.direction()",
        "[style.--track-size]": "trackSize()"
      }, changeDetection: ChangeDetectionStrategy.OnPush, styles: [":host{position:absolute;inset:0;pointer-events:none;min-width:calc(var(--viewport-width) * 1px);min-height:calc(var(--viewport-height) * 1px)}.ng-scrollbar-sticky{top:calc(var(--_scrollbar-wrapper-top) * 1px);left:calc(var(--_scrollbar-wrapper-left) * 1px);right:calc(var(--_scrollbar-wrapper-right) * 1px);height:calc(var(--_scrollbar-wrapper-height) * 1px);width:calc(var(--_scrollbar-wrapper-width) * 1px);position:sticky;z-index:100;opacity:var(--_scrollbar-hover-opacity);transition:var(--_scrollbar-opacity-transition);pointer-events:var(--_scrollbar-pointer-events)}.ng-scrollbar-track-wrapper{touch-action:none;-webkit-user-select:none;user-select:none;top:var(--_scrollbar-track-top);bottom:var(--_scrollbar-track-bottom);right:var(--_scrollbar-track-right);left:var(--_scrollbar-track-left);transition:var(--INTERNAL-scrollbar-track-wrapper-transition);position:absolute;overflow:hidden;display:flex;place-items:center}.ng-scrollbar-track{position:relative;width:100%;height:100%;background-color:var(--INTERNAL-scrollbar-track-color);border-radius:var(--INTERNAL-scrollbar-border-radius);cursor:default;z-index:1;order:2}.ng-scrollbar-thumb{box-sizing:border-box;position:absolute;transition:var(--INTERNAL-scrollbar-thumb-transition);border-radius:var(--INTERNAL-scrollbar-border-radius);height:var(--_thumb-height);width:var(--_thumb-width);animation-name:scrollbarThumbAnimation;animation-duration:1ms;animation-timing-function:linear}@keyframes scrollbarThumbAnimation{0%{translate:var(--_scrollbar-thumb-transform-from)}to{translate:var(--_scrollbar-thumb-transform-to)}}\n", ":host{--_scrollbar-wrapper-top: var(--_scrollbar-wrapper-x-top);--_scrollbar-wrapper-left: 0;--_scrollbar-wrapper-right: 0;--_scrollbar-wrapper-height: var(--_scrollbar-thickness);--_scrollbar-wrapper-width: var(--viewport-width);--_scrollbar-track-top: var(--_horizontal-top);--_scrollbar-track-bottom: var(--_horizontal-bottom);--_scrollbar-track-right: var(--_horizontal-right);--_scrollbar-track-left: var(--_horizontal-left);--thumb-size: max(calc(var(--viewport-width) * var(--track-size) / var(--content-width)), var(--INTERNAL-scrollbar-thumb-min-size));--_thumb-height: 100%;--_thumb-width: calc(var(--thumb-size) * 1px);--_scrollbar-x-thumb-transform-to-value: calc(var(--track-size) - var(--thumb-size));--_scrollbar-thumb-transform-from: 0;--_scrollbar-thumb-transform-to: calc(var(--_scrollbar-x-thumb-transform-to-value) * 1px)}:host .ng-scrollbar-button[scrollbarButton=start]{_--button-rotate:90}:host .ng-scrollbar-button[scrollbarButton=end]{_--button-rotate:-90}:host[dir=rtl] .ng-scrollbar-thumb{animation-name:scrollbarThumbRTLAnimation;will-change:right;--_scrollbar-thumb-transform-to: calc(var(--_scrollbar-x-thumb-transform-to-value) * -1px)}:host[dir=rtl] .ng-scrollbar-button[scrollbarButton=start]{--_button-rotate: 90deg}:host[dir=rtl] .ng-scrollbar-button[scrollbarButton=end]{--_button-rotate: -90deg}.ng-scrollbar-track-wrapper{height:var(--_track-x-thickness);flex-direction:row}.ng-scrollbar-hover:hover,.ng-scrollbar-hover:active{--_track-x-thickness: var(--_scrollbar-hover-thickness-px);--_thumb-x-color: var(--INTERNAL-scrollbar-thumb-hover-color)}.ng-scrollbar-thumb{animation-timeline:var(--_animation-timeline-x);min-width:calc(var(--INTERNAL-scrollbar-thumb-min-size) * 1px);display:var(--_horizontal-thumb-display);background-color:var(--_thumb-x-color)}@keyframes scrollbarThumbRTLAnimation{0%{right:var(--_scrollbar-thumb-transform-from)}to{right:calc(var(--_scrollbar-thumb-transform-to) * -1)}}\n"] }]
    }], ctorParameters: () => [] });
    _Scrollbars = class _Scrollbars {
      constructor() {
        this.cmp = inject(NG_SCROLLBAR);
      }
    };
    _Scrollbars.\u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "19.1.1", ngImport: core_exports, type: _Scrollbars, deps: [], target: FactoryTarget.Component });
    _Scrollbars.\u0275cmp = \u0275\u0275ngDeclareComponent({ minVersion: "17.0.0", version: "19.1.1", type: _Scrollbars, isStandalone: true, selector: "scrollbars", ngImport: core_exports, template: `
    @if (cmp.verticalUsed()) {
      <scrollbar-y/>
    }
    @if (cmp.horizontalUsed()) {
      <scrollbar-x/>
    }
  `, isInline: true, styles: [":host{display:contents}\n"], dependencies: [{ kind: "component", type: ScrollbarX, selector: "scrollbar-x" }, { kind: "component", type: ScrollbarY, selector: "scrollbar-y" }], changeDetection: ChangeDetectionStrategy.OnPush });
    Scrollbars = _Scrollbars;
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "19.1.1", ngImport: core_exports, type: Scrollbars, decorators: [{
      type: Component,
      args: [{ selector: "scrollbars", changeDetection: ChangeDetectionStrategy.OnPush, imports: [ScrollbarX, ScrollbarY], template: `
    @if (cmp.verticalUsed()) {
      <scrollbar-y/>
    }
    @if (cmp.horizontalUsed()) {
      <scrollbar-x/>
    }
  `, styles: [":host{display:contents}\n"] }]
    }] });
    _NgScrollbar = class _NgScrollbar extends NgScrollbarCore {
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
    _NgScrollbar.\u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "19.1.1", ngImport: core_exports, type: _NgScrollbar, deps: [], target: FactoryTarget.Component });
    _NgScrollbar.\u0275cmp = \u0275\u0275ngDeclareComponent({ minVersion: "17.2.0", version: "19.1.1", type: _NgScrollbar, isStandalone: true, selector: "ng-scrollbar:not([externalViewport])", providers: [
      { provide: NG_SCROLLBAR, useExisting: _NgScrollbar },
      ViewportAdapter
    ], viewQueries: [{ propertyName: "contentWrapper", first: true, predicate: ["contentWrapper"], descendants: true, isSignal: true }, { propertyName: "_scrollbars", first: true, predicate: Scrollbars, descendants: true, isSignal: true }], exportAs: ["ngScrollbar"], usesInheritance: true, ngImport: core_exports, template: `
    <div #contentWrapper>
      <ng-content/>
      <scrollbars/>
    </div>
  `, isInline: true, styles: [":host{display:block;position:relative;max-height:100%;max-width:100%;--INTERNAL-scrollbar-border-radius: var(--scrollbar-border-radius, 0px);--INTERNAL-scrollbar-thickness: var(--scrollbar-thickness, 5);--INTERNAL-scrollbar-offset: var(--scrollbar-offset, 0);--INTERNAL-scrollbar-track-wrapper-transition: var(--scrollbar-track-wrapper-transition, width 60ms linear, height 60ms linear);--INTERNAL-scrollbar-track-color: var(--scrollbar-track-color, transparent);--INTERNAL-scrollbar-thumb-color: var(--scrollbar-thumb-color, rgb(0 0 0 / 20%));--INTERNAL-scrollbar-thumb-hover-color: var(--scrollbar-thumb-hover-color, var(--INTERNAL-scrollbar-thumb-color));--INTERNAL-scrollbar-hover-thickness: var(--scrollbar-hover-thickness, var(--INTERNAL-scrollbar-thickness));--INTERNAL-scrollbar-thumb-transition: var(--scrollbar-thumb-transition, none);--INTERNAL-scrollbar-thumb-min-size: var(--scrollbar-thumb-min-size, 20);--INTERNAL-scrollbar-button-color: var(--scrollbar-button-color, var(--INTERNAL-scrollbar-thumb-color));--INTERNAL-scrollbar-button-hover-color: var(--scrollbar-button-hover-color, var(--INTERNAL-scrollbar-button-color));--INTERNAL-scrollbar-button-active-color: var(--scrollbar-button-active-color, var(--INTERNAL-scrollbar-button-hover-color));--INTERNAL-scrollbar-button-fill: var(--scrollbar-button-fill, white);--INTERNAL-scrollbar-button-hover-fill: var(--scrollbar-button-hover-fill, var(--INTERNAL-scrollbar-button-fill));--INTERNAL-scrollbar-button-active-fill: var(--scrollbar-button-active-fill, var(--INTERNAL-scrollbar-button-hover-fill));--INTERNAL-scrollbar-button-size: var(--scrollbar-button-size, 20px);--INTERNAL-scrollbar-hover-opacity-transition-enter-duration: var(--scrollbar-hover-opacity-transition-enter-duration, 0);--INTERNAL-scrollbar-hover-opacity-transition-leave-duration: var(--scrollbar-hover-opacity-transition-leave-duration, .4s);--INTERNAL-scrollbar-hover-opacity-transition-leave-delay: var(--scrollbar-hover-opacity-transition-leave-delay, 1s);--INTERNAL-scrollbar-overscroll-behavior: var(--scrollbar-overscroll-behavior, initial);--INTERNAL-scrollbar-mobile-overscroll-behavior: var(--scrollbar-mobile-overscroll-behavior, none);--_scrollbar-thickness: calc(var(--INTERNAL-scrollbar-thickness) + var(--INTERNAL-scrollbar-offset) * 2);--_scrollbar-pointer-events: auto;--_scrollbar-offset-px: calc(var(--INTERNAL-scrollbar-offset) * 1px);--_scrollbar-thickness-px: calc(var(--INTERNAL-scrollbar-thickness) * 1px);--_scrollbar-hover-thickness-px: calc(var(--INTERNAL-scrollbar-hover-thickness) * 1px);--_viewport-padding-top: 0;--_viewport-padding-bottom: 0;--_viewport-padding-left: 0;--_viewport-padding-right: 0;--_horizontal-thumb-display: block;--_vertical-thumb-display: block;--_viewport-overflow: auto;--_viewport-pointer-events: auto;--_thumb-x-color: var(--INTERNAL-scrollbar-thumb-color);--_thumb-y-color: var(--INTERNAL-scrollbar-thumb-color);--_track-y-thickness: var(--_scrollbar-thickness-px);--_track-x-thickness: var(--_scrollbar-thickness-px);--_viewport-overscroll-behavior: var(--INTERNAL-scrollbar-overscroll-behavior);--_scrollbar-content-width: fit-content}:host{--_spacer-width: var(--spacer-width);--_spacer-height: var(--spacer-height);--_vertical-top: var(--_scrollbar-offset-px);--_vertical-bottom: var(--_scrollbar-offset-px);--_horizontal-left: var(--_scrollbar-offset-px);--_horizontal-right: var(--_scrollbar-offset-px);--_horizontal-top: initial;--_horizontal-bottom: var(--_scrollbar-offset-px);--_scrollbar-wrapper-x-top: calc(var(--viewport-height) - var(--_scrollbar-thickness));--reached-offset: 1px;--reached-offset-top: var(--reached-offset);--reached-offset-bottom: var(--reached-offset);--reached-offset-start: var(--reached-offset);--reached-offset-end: var(--reached-offset);--dropped-offset: 1px;--dropped-offset-top: var(--dropped-offset);--dropped-offset-bottom: var(--dropped-offset);--dropped-offset-start: var(--dropped-offset);--dropped-offset-end: var(--dropped-offset);--_viewport_scroll-timeline: unset;--_animation-timeline-y: unset;--_scrollbar-y-thumb-transform-to-value: unset;--_scrollbar-x-thumb-transform-to-value: unset;--_scrollbar-thumb-transform-from: unset;--_scrollbar-thumb-transform-to: unset}:host.ng-scrollbar-external-viewport ::ng-deep .ng-scroll-viewport{min-height:100%;min-width:100%;height:100%;max-height:100%;max-width:100%}:host.ng-scroll-viewport,:host.ng-scrollbar-external-viewport ::ng-deep .ng-scroll-viewport{position:relative;overflow:var(--_viewport-overflow);scroll-timeline:var(--_viewport_scroll-timeline);box-sizing:border-box!important;-webkit-overflow-scrolling:touch;will-change:scroll-position;-webkit-user-select:var(--_viewport-user-select);user-select:var(--_viewport-user-select);overscroll-behavior:var(--_viewport-overscroll-behavior);pointer-events:var(--_viewport-pointer-events)}:host.ng-scroll-viewport>.ng-scroll-content,:host.ng-scrollbar-external-viewport ::ng-deep .ng-scroll-viewport>.ng-scroll-content{width:var(--_scrollbar-content-width);z-index:1;min-width:100%;min-height:100%;contain:content;padding:var(--_viewport-padding-top, 0) var(--_viewport-padding-right, 0) var(--_viewport-padding-bottom, 0) var(--_viewport-padding-left, 0)}:host[appearance=native]{--_spacer-width: calc(var(--spacer-width) + var(--_scrollbar-thickness));--_spacer-height: calc(var(--spacer-height) + var(--_scrollbar-thickness))}:host.ng-scroll-viewport>.ng-scroll-spacer,:host.ng-scrollbar-external-viewport ::ng-deep .ng-scroll-viewport>.ng-scroll-spacer{position:relative;width:calc(var(--_spacer-width) * 1px);height:calc(var(--_spacer-height) * 1px)}:host.ng-scroll-viewport,:host.ng-scrollbar-external-viewport ::ng-deep .ng-scroll-viewport{scrollbar-width:none!important}:host.ng-scroll-viewport::-webkit-scrollbar,:host.ng-scrollbar-external-viewport ::ng-deep .ng-scroll-viewport::-webkit-scrollbar{display:none!important}:host[position=invertX],:host[position=invertAll]{--_horizontal-top: var(--_scrollbar-offset-px);--_horizontal-bottom: initial;--_scrollbar-wrapper-x-top: 0}:host[dir=ltr]{--_scrollbar-wrapper-y-right: initial;--_vertical-right: var(--_scrollbar-offset-px);--_vertical-left: initial;--_scrollbar-wrapper-y-left: calc(var(--viewport-width) - var(--_scrollbar-thickness))}:host[dir=ltr][position=invertY],:host[dir=ltr][position=invertAll]{--_vertical-left: var(--_scrollbar-offset-px);--_vertical-right: initial;--_scrollbar-wrapper-y-left: 0}:host[dir=rtl]{--_scrollbar-wrapper-y-left: initial;--_vertical-left: var(--_scrollbar-offset-px);--_vertical-right: initial;--_scrollbar-wrapper-y-right: calc(var(--viewport-width) - var(--_scrollbar-thickness))}:host[dir=rtl][position=invertY],:host[dir=rtl][position=invertAll]{--_vertical-right: var(--_scrollbar-offset-px);--_vertical-left: initial;--_scrollbar-wrapper-y-right: 0}:host[verticalUsed=true][horizontalUsed=true]{--_scrollbar-thickness-margin: calc(var(--INTERNAL-scrollbar-thickness) + var(--INTERNAL-scrollbar-offset) * 3);--_scrollbar-thickness-margin-px: calc(var(--_scrollbar-thickness-margin) * 1px)}:host[horizontalUsed=true]{--_vertical-top: var(--_scrollbar-offset-px);--_vertical-bottom: var(--_scrollbar-thickness-margin-px)}:host[horizontalUsed=true][position=invertX],:host[horizontalUsed=true][position=invertAll]{--_vertical-top: var(--_scrollbar-thickness-margin-px);--_vertical-bottom: var(--_scrollbar-offset-px)}:host[verticalUsed=true][dir=ltr]{--_horizontal-left: var(--_scrollbar-offset-px);--_horizontal-right: var(--_scrollbar-thickness-margin-px)}:host[verticalUsed=true][dir=rtl]{--_horizontal-left: var(--_scrollbar-thickness-margin-px);--_horizontal-right: var(--_scrollbar-offset-px)}:host[verticalUsed=true][position=invertY][dir=ltr],:host[verticalUsed=true][position=invertAll][dir=ltr]{--_horizontal-left: var(--_scrollbar-thickness-margin-px);--_horizontal-right: var(--_scrollbar-offset-px)}:host[verticalUsed=true][position=invertY][dir=rtl],:host[verticalUsed=true][position=invertAll][dir=rtl]{--_horizontal-left: var(--_scrollbar-offset-px);--_horizontal-right: var(--_scrollbar-thickness-margin-px)}:host[appearance=native][verticalUsed=true][dir=ltr]{--_viewport-padding-left: 0;--_viewport-padding-right: calc(var(--_scrollbar-thickness) * 1px)}:host[appearance=native][verticalUsed=true][dir=rtl]{--_viewport-padding-left: calc(var(--_scrollbar-thickness) * 1px);--_viewport-padding-right: 0}:host[appearance=native][verticalUsed=true][position=invertY][dir=ltr],:host[appearance=native][verticalUsed=true][position=invertAll][dir=ltr]{--_viewport-padding-left: calc(var(--_scrollbar-thickness) * 1px);--_viewport-padding-right: 0}:host[appearance=native][verticalUsed=true][position=invertY][dir=rtl],:host[appearance=native][verticalUsed=true][position=invertAll][dir=rtl]{--_viewport-padding-left: 0;--_viewport-padding-right: calc(var(--_scrollbar-thickness) * 1px)}:host[appearance=native][horizontalUsed=true]{--_viewport-padding-top: 0;--_viewport-padding-bottom: calc(var(--_scrollbar-thickness) * 1px)}:host[appearance=native][horizontalUsed=true][position=invertX],:host[appearance=native][horizontalUsed=true][position=invertAll]{--_viewport-padding-top: calc(var(--_scrollbar-thickness) * 1px);--_viewport-padding-bottom: 0}:host[visibility=hover]{--_scrollbar-hover-opacity: 0;--_scrollbar-opacity-transition: opacity var(--INTERNAL-scrollbar-hover-opacity-transition-leave-duration) var(--INTERNAL-scrollbar-hover-opacity-transition-leave-delay)}:host[visibility=hover]:hover,:host[visibility=hover]:active,:host[visibility=hover]:focus{--_scrollbar-hover-opacity: 1;--_scrollbar-opacity-transition: opacity var(--INTERNAL-scrollbar-hover-opacity-transition-enter-duration)}:host[dir=ltr] ::ng-deep .scroll-reached-trigger-element[trigger=start],:host[dir=ltr] ::ng-deep .scroll-dropped-trigger-element[trigger=start]{left:0;right:unset}:host[dir=ltr] ::ng-deep .scroll-reached-trigger-element[trigger=end],:host[dir=ltr] ::ng-deep .scroll-dropped-trigger-element[trigger=end]{right:0;left:unset}:host[dir=rtl] ::ng-deep .scroll-reached-trigger-element[trigger=start],:host[dir=rtl] ::ng-deep .scroll-dropped-trigger-element[trigger=start]{right:0;left:unset}:host[dir=rtl] ::ng-deep .scroll-reached-trigger-element[trigger=end],:host[dir=rtl] ::ng-deep .scroll-dropped-trigger-element[trigger=end]{left:0;right:unset}:host ::ng-deep .ng-scroll-reached-wrapper,:host ::ng-deep .ng-scroll-dropped-wrapper,:host ::ng-deep .scroll-reached-trigger-element,:host ::ng-deep .scroll-dropped-trigger-element{position:absolute;-webkit-user-select:none;user-select:none;pointer-events:none;z-index:-9999}:host ::ng-deep .ng-scroll-reached-wrapper,:host ::ng-deep .ng-scroll-dropped-wrapper{visibility:hidden;inset:0;min-width:calc(var(--viewport-width) * 1px);min-height:calc(var(--viewport-height) * 1px)}:host ::ng-deep [isHorizontallyScrollable=false] .scroll-reached-trigger-element[trigger=end],:host ::ng-deep [isHorizontallyScrollable=false] .scroll-dropped-trigger-element[trigger=end]{display:none}:host ::ng-deep [isVerticallyScrollable=false] .scroll-reached-trigger-element[trigger=bottom],:host ::ng-deep [isVerticallyScrollable=false] .scroll-dropped-trigger-element[trigger=bottom]{display:none}:host ::ng-deep .scroll-reached-trigger-element{background:red}:host ::ng-deep .scroll-reached-trigger-element[trigger=top],:host ::ng-deep .scroll-reached-trigger-element[trigger=bottom]{left:0;right:0}:host ::ng-deep .scroll-reached-trigger-element[trigger=start],:host ::ng-deep .scroll-reached-trigger-element[trigger=end]{top:0;bottom:0}:host ::ng-deep .scroll-reached-trigger-element[trigger=top]{top:0;height:var(--reached-offset-top)}:host ::ng-deep .scroll-reached-trigger-element[trigger=bottom]{bottom:0;height:var(--reached-offset-bottom)}:host ::ng-deep .scroll-reached-trigger-element[trigger=start]{width:var(--reached-offset-start)}:host ::ng-deep .scroll-reached-trigger-element[trigger=end]{width:var(--reached-offset-end)}:host .scroll-dropped-trigger-element{background:#00f}:host .scroll-dropped-trigger-element[trigger=top],:host .scroll-dropped-trigger-element[trigger=bottom]{left:0;right:0}:host .scroll-dropped-trigger-element[trigger=start],:host .scroll-dropped-trigger-element[trigger=end]{top:0;bottom:0}:host .scroll-dropped-trigger-element[trigger=top]{top:0;height:var(--dropped-offset-top)}:host .scroll-dropped-trigger-element[trigger=bottom]{bottom:0;height:var(--dropped-offset-bottom)}:host .scroll-dropped-trigger-element[trigger=start]{width:var(--dropped-offset-start)}:host .scroll-dropped-trigger-element[trigger=end]{width:var(--dropped-offset-end)}:host[verticalUsed=true]{--_timeline-scope: --scrollerY;--_animation-timeline-y: --scrollerY;--_viewport_scroll-timeline: --scrollerY y}:host[horizontalUsed=true]{--_timeline-scope: --scrollerX;--_animation-timeline-x: --scrollerX;--_viewport_scroll-timeline: --scrollerX x}:host[verticalUsed=true][horizontalUsed=true]{--_timeline-scope: --scrollerX, --scrollerY;--_viewport_scroll-timeline: --scrollerX x, --scrollerY y}:host[orientation=vertical]{--_viewport-overflow: hidden auto;--_scrollbar-content-width: unset}:host[orientation=horizontal]{--_viewport-overflow: auto hidden}:host[disableInteraction=true]{--_viewport-pointer-events: none;--_scrollbar-pointer-events: none}:host[isVerticallyScrollable=false]{--_vertical-thumb-display: none}:host[isHorizontallyScrollable=false]{--_horizontal-thumb-display: none}:host[dragging=x],:host[dragging=y]{--_viewport-user-select: none}:host[dragging=x]{--_track-x-thickness: calc(var(--INTERNAL-scrollbar-hover-thickness) * 1px);--_thumb-x-color: var(var(--INTERNAL-scrollbar-thumb-min-size))}:host[dragging=y]{--_track-y-thickness: calc(var(--INTERNAL-scrollbar-hover-thickness) * 1px);--_thumb-y-color: var(var(--INTERNAL-scrollbar-thumb-min-size))}:host[mobile=true]{--_viewport-overscroll-behavior: var(--INTERNAL-scrollbar-mobile-overscroll-behavior)}\n"], dependencies: [{ kind: "component", type: Scrollbars, selector: "scrollbars" }], changeDetection: ChangeDetectionStrategy.OnPush });
    NgScrollbar = _NgScrollbar;
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "19.1.1", ngImport: core_exports, type: NgScrollbar, decorators: [{
      type: Component,
      args: [{ selector: "ng-scrollbar:not([externalViewport])", exportAs: "ngScrollbar", imports: [Scrollbars], template: `
    <div #contentWrapper>
      <ng-content/>
      <scrollbars/>
    </div>
  `, changeDetection: ChangeDetectionStrategy.OnPush, providers: [
        { provide: NG_SCROLLBAR, useExisting: NgScrollbar },
        ViewportAdapter
      ], styles: [":host{display:block;position:relative;max-height:100%;max-width:100%;--INTERNAL-scrollbar-border-radius: var(--scrollbar-border-radius, 0px);--INTERNAL-scrollbar-thickness: var(--scrollbar-thickness, 5);--INTERNAL-scrollbar-offset: var(--scrollbar-offset, 0);--INTERNAL-scrollbar-track-wrapper-transition: var(--scrollbar-track-wrapper-transition, width 60ms linear, height 60ms linear);--INTERNAL-scrollbar-track-color: var(--scrollbar-track-color, transparent);--INTERNAL-scrollbar-thumb-color: var(--scrollbar-thumb-color, rgb(0 0 0 / 20%));--INTERNAL-scrollbar-thumb-hover-color: var(--scrollbar-thumb-hover-color, var(--INTERNAL-scrollbar-thumb-color));--INTERNAL-scrollbar-hover-thickness: var(--scrollbar-hover-thickness, var(--INTERNAL-scrollbar-thickness));--INTERNAL-scrollbar-thumb-transition: var(--scrollbar-thumb-transition, none);--INTERNAL-scrollbar-thumb-min-size: var(--scrollbar-thumb-min-size, 20);--INTERNAL-scrollbar-button-color: var(--scrollbar-button-color, var(--INTERNAL-scrollbar-thumb-color));--INTERNAL-scrollbar-button-hover-color: var(--scrollbar-button-hover-color, var(--INTERNAL-scrollbar-button-color));--INTERNAL-scrollbar-button-active-color: var(--scrollbar-button-active-color, var(--INTERNAL-scrollbar-button-hover-color));--INTERNAL-scrollbar-button-fill: var(--scrollbar-button-fill, white);--INTERNAL-scrollbar-button-hover-fill: var(--scrollbar-button-hover-fill, var(--INTERNAL-scrollbar-button-fill));--INTERNAL-scrollbar-button-active-fill: var(--scrollbar-button-active-fill, var(--INTERNAL-scrollbar-button-hover-fill));--INTERNAL-scrollbar-button-size: var(--scrollbar-button-size, 20px);--INTERNAL-scrollbar-hover-opacity-transition-enter-duration: var(--scrollbar-hover-opacity-transition-enter-duration, 0);--INTERNAL-scrollbar-hover-opacity-transition-leave-duration: var(--scrollbar-hover-opacity-transition-leave-duration, .4s);--INTERNAL-scrollbar-hover-opacity-transition-leave-delay: var(--scrollbar-hover-opacity-transition-leave-delay, 1s);--INTERNAL-scrollbar-overscroll-behavior: var(--scrollbar-overscroll-behavior, initial);--INTERNAL-scrollbar-mobile-overscroll-behavior: var(--scrollbar-mobile-overscroll-behavior, none);--_scrollbar-thickness: calc(var(--INTERNAL-scrollbar-thickness) + var(--INTERNAL-scrollbar-offset) * 2);--_scrollbar-pointer-events: auto;--_scrollbar-offset-px: calc(var(--INTERNAL-scrollbar-offset) * 1px);--_scrollbar-thickness-px: calc(var(--INTERNAL-scrollbar-thickness) * 1px);--_scrollbar-hover-thickness-px: calc(var(--INTERNAL-scrollbar-hover-thickness) * 1px);--_viewport-padding-top: 0;--_viewport-padding-bottom: 0;--_viewport-padding-left: 0;--_viewport-padding-right: 0;--_horizontal-thumb-display: block;--_vertical-thumb-display: block;--_viewport-overflow: auto;--_viewport-pointer-events: auto;--_thumb-x-color: var(--INTERNAL-scrollbar-thumb-color);--_thumb-y-color: var(--INTERNAL-scrollbar-thumb-color);--_track-y-thickness: var(--_scrollbar-thickness-px);--_track-x-thickness: var(--_scrollbar-thickness-px);--_viewport-overscroll-behavior: var(--INTERNAL-scrollbar-overscroll-behavior);--_scrollbar-content-width: fit-content}:host{--_spacer-width: var(--spacer-width);--_spacer-height: var(--spacer-height);--_vertical-top: var(--_scrollbar-offset-px);--_vertical-bottom: var(--_scrollbar-offset-px);--_horizontal-left: var(--_scrollbar-offset-px);--_horizontal-right: var(--_scrollbar-offset-px);--_horizontal-top: initial;--_horizontal-bottom: var(--_scrollbar-offset-px);--_scrollbar-wrapper-x-top: calc(var(--viewport-height) - var(--_scrollbar-thickness));--reached-offset: 1px;--reached-offset-top: var(--reached-offset);--reached-offset-bottom: var(--reached-offset);--reached-offset-start: var(--reached-offset);--reached-offset-end: var(--reached-offset);--dropped-offset: 1px;--dropped-offset-top: var(--dropped-offset);--dropped-offset-bottom: var(--dropped-offset);--dropped-offset-start: var(--dropped-offset);--dropped-offset-end: var(--dropped-offset);--_viewport_scroll-timeline: unset;--_animation-timeline-y: unset;--_scrollbar-y-thumb-transform-to-value: unset;--_scrollbar-x-thumb-transform-to-value: unset;--_scrollbar-thumb-transform-from: unset;--_scrollbar-thumb-transform-to: unset}:host.ng-scrollbar-external-viewport ::ng-deep .ng-scroll-viewport{min-height:100%;min-width:100%;height:100%;max-height:100%;max-width:100%}:host.ng-scroll-viewport,:host.ng-scrollbar-external-viewport ::ng-deep .ng-scroll-viewport{position:relative;overflow:var(--_viewport-overflow);scroll-timeline:var(--_viewport_scroll-timeline);box-sizing:border-box!important;-webkit-overflow-scrolling:touch;will-change:scroll-position;-webkit-user-select:var(--_viewport-user-select);user-select:var(--_viewport-user-select);overscroll-behavior:var(--_viewport-overscroll-behavior);pointer-events:var(--_viewport-pointer-events)}:host.ng-scroll-viewport>.ng-scroll-content,:host.ng-scrollbar-external-viewport ::ng-deep .ng-scroll-viewport>.ng-scroll-content{width:var(--_scrollbar-content-width);z-index:1;min-width:100%;min-height:100%;contain:content;padding:var(--_viewport-padding-top, 0) var(--_viewport-padding-right, 0) var(--_viewport-padding-bottom, 0) var(--_viewport-padding-left, 0)}:host[appearance=native]{--_spacer-width: calc(var(--spacer-width) + var(--_scrollbar-thickness));--_spacer-height: calc(var(--spacer-height) + var(--_scrollbar-thickness))}:host.ng-scroll-viewport>.ng-scroll-spacer,:host.ng-scrollbar-external-viewport ::ng-deep .ng-scroll-viewport>.ng-scroll-spacer{position:relative;width:calc(var(--_spacer-width) * 1px);height:calc(var(--_spacer-height) * 1px)}:host.ng-scroll-viewport,:host.ng-scrollbar-external-viewport ::ng-deep .ng-scroll-viewport{scrollbar-width:none!important}:host.ng-scroll-viewport::-webkit-scrollbar,:host.ng-scrollbar-external-viewport ::ng-deep .ng-scroll-viewport::-webkit-scrollbar{display:none!important}:host[position=invertX],:host[position=invertAll]{--_horizontal-top: var(--_scrollbar-offset-px);--_horizontal-bottom: initial;--_scrollbar-wrapper-x-top: 0}:host[dir=ltr]{--_scrollbar-wrapper-y-right: initial;--_vertical-right: var(--_scrollbar-offset-px);--_vertical-left: initial;--_scrollbar-wrapper-y-left: calc(var(--viewport-width) - var(--_scrollbar-thickness))}:host[dir=ltr][position=invertY],:host[dir=ltr][position=invertAll]{--_vertical-left: var(--_scrollbar-offset-px);--_vertical-right: initial;--_scrollbar-wrapper-y-left: 0}:host[dir=rtl]{--_scrollbar-wrapper-y-left: initial;--_vertical-left: var(--_scrollbar-offset-px);--_vertical-right: initial;--_scrollbar-wrapper-y-right: calc(var(--viewport-width) - var(--_scrollbar-thickness))}:host[dir=rtl][position=invertY],:host[dir=rtl][position=invertAll]{--_vertical-right: var(--_scrollbar-offset-px);--_vertical-left: initial;--_scrollbar-wrapper-y-right: 0}:host[verticalUsed=true][horizontalUsed=true]{--_scrollbar-thickness-margin: calc(var(--INTERNAL-scrollbar-thickness) + var(--INTERNAL-scrollbar-offset) * 3);--_scrollbar-thickness-margin-px: calc(var(--_scrollbar-thickness-margin) * 1px)}:host[horizontalUsed=true]{--_vertical-top: var(--_scrollbar-offset-px);--_vertical-bottom: var(--_scrollbar-thickness-margin-px)}:host[horizontalUsed=true][position=invertX],:host[horizontalUsed=true][position=invertAll]{--_vertical-top: var(--_scrollbar-thickness-margin-px);--_vertical-bottom: var(--_scrollbar-offset-px)}:host[verticalUsed=true][dir=ltr]{--_horizontal-left: var(--_scrollbar-offset-px);--_horizontal-right: var(--_scrollbar-thickness-margin-px)}:host[verticalUsed=true][dir=rtl]{--_horizontal-left: var(--_scrollbar-thickness-margin-px);--_horizontal-right: var(--_scrollbar-offset-px)}:host[verticalUsed=true][position=invertY][dir=ltr],:host[verticalUsed=true][position=invertAll][dir=ltr]{--_horizontal-left: var(--_scrollbar-thickness-margin-px);--_horizontal-right: var(--_scrollbar-offset-px)}:host[verticalUsed=true][position=invertY][dir=rtl],:host[verticalUsed=true][position=invertAll][dir=rtl]{--_horizontal-left: var(--_scrollbar-offset-px);--_horizontal-right: var(--_scrollbar-thickness-margin-px)}:host[appearance=native][verticalUsed=true][dir=ltr]{--_viewport-padding-left: 0;--_viewport-padding-right: calc(var(--_scrollbar-thickness) * 1px)}:host[appearance=native][verticalUsed=true][dir=rtl]{--_viewport-padding-left: calc(var(--_scrollbar-thickness) * 1px);--_viewport-padding-right: 0}:host[appearance=native][verticalUsed=true][position=invertY][dir=ltr],:host[appearance=native][verticalUsed=true][position=invertAll][dir=ltr]{--_viewport-padding-left: calc(var(--_scrollbar-thickness) * 1px);--_viewport-padding-right: 0}:host[appearance=native][verticalUsed=true][position=invertY][dir=rtl],:host[appearance=native][verticalUsed=true][position=invertAll][dir=rtl]{--_viewport-padding-left: 0;--_viewport-padding-right: calc(var(--_scrollbar-thickness) * 1px)}:host[appearance=native][horizontalUsed=true]{--_viewport-padding-top: 0;--_viewport-padding-bottom: calc(var(--_scrollbar-thickness) * 1px)}:host[appearance=native][horizontalUsed=true][position=invertX],:host[appearance=native][horizontalUsed=true][position=invertAll]{--_viewport-padding-top: calc(var(--_scrollbar-thickness) * 1px);--_viewport-padding-bottom: 0}:host[visibility=hover]{--_scrollbar-hover-opacity: 0;--_scrollbar-opacity-transition: opacity var(--INTERNAL-scrollbar-hover-opacity-transition-leave-duration) var(--INTERNAL-scrollbar-hover-opacity-transition-leave-delay)}:host[visibility=hover]:hover,:host[visibility=hover]:active,:host[visibility=hover]:focus{--_scrollbar-hover-opacity: 1;--_scrollbar-opacity-transition: opacity var(--INTERNAL-scrollbar-hover-opacity-transition-enter-duration)}:host[dir=ltr] ::ng-deep .scroll-reached-trigger-element[trigger=start],:host[dir=ltr] ::ng-deep .scroll-dropped-trigger-element[trigger=start]{left:0;right:unset}:host[dir=ltr] ::ng-deep .scroll-reached-trigger-element[trigger=end],:host[dir=ltr] ::ng-deep .scroll-dropped-trigger-element[trigger=end]{right:0;left:unset}:host[dir=rtl] ::ng-deep .scroll-reached-trigger-element[trigger=start],:host[dir=rtl] ::ng-deep .scroll-dropped-trigger-element[trigger=start]{right:0;left:unset}:host[dir=rtl] ::ng-deep .scroll-reached-trigger-element[trigger=end],:host[dir=rtl] ::ng-deep .scroll-dropped-trigger-element[trigger=end]{left:0;right:unset}:host ::ng-deep .ng-scroll-reached-wrapper,:host ::ng-deep .ng-scroll-dropped-wrapper,:host ::ng-deep .scroll-reached-trigger-element,:host ::ng-deep .scroll-dropped-trigger-element{position:absolute;-webkit-user-select:none;user-select:none;pointer-events:none;z-index:-9999}:host ::ng-deep .ng-scroll-reached-wrapper,:host ::ng-deep .ng-scroll-dropped-wrapper{visibility:hidden;inset:0;min-width:calc(var(--viewport-width) * 1px);min-height:calc(var(--viewport-height) * 1px)}:host ::ng-deep [isHorizontallyScrollable=false] .scroll-reached-trigger-element[trigger=end],:host ::ng-deep [isHorizontallyScrollable=false] .scroll-dropped-trigger-element[trigger=end]{display:none}:host ::ng-deep [isVerticallyScrollable=false] .scroll-reached-trigger-element[trigger=bottom],:host ::ng-deep [isVerticallyScrollable=false] .scroll-dropped-trigger-element[trigger=bottom]{display:none}:host ::ng-deep .scroll-reached-trigger-element{background:red}:host ::ng-deep .scroll-reached-trigger-element[trigger=top],:host ::ng-deep .scroll-reached-trigger-element[trigger=bottom]{left:0;right:0}:host ::ng-deep .scroll-reached-trigger-element[trigger=start],:host ::ng-deep .scroll-reached-trigger-element[trigger=end]{top:0;bottom:0}:host ::ng-deep .scroll-reached-trigger-element[trigger=top]{top:0;height:var(--reached-offset-top)}:host ::ng-deep .scroll-reached-trigger-element[trigger=bottom]{bottom:0;height:var(--reached-offset-bottom)}:host ::ng-deep .scroll-reached-trigger-element[trigger=start]{width:var(--reached-offset-start)}:host ::ng-deep .scroll-reached-trigger-element[trigger=end]{width:var(--reached-offset-end)}:host .scroll-dropped-trigger-element{background:#00f}:host .scroll-dropped-trigger-element[trigger=top],:host .scroll-dropped-trigger-element[trigger=bottom]{left:0;right:0}:host .scroll-dropped-trigger-element[trigger=start],:host .scroll-dropped-trigger-element[trigger=end]{top:0;bottom:0}:host .scroll-dropped-trigger-element[trigger=top]{top:0;height:var(--dropped-offset-top)}:host .scroll-dropped-trigger-element[trigger=bottom]{bottom:0;height:var(--dropped-offset-bottom)}:host .scroll-dropped-trigger-element[trigger=start]{width:var(--dropped-offset-start)}:host .scroll-dropped-trigger-element[trigger=end]{width:var(--dropped-offset-end)}:host[verticalUsed=true]{--_timeline-scope: --scrollerY;--_animation-timeline-y: --scrollerY;--_viewport_scroll-timeline: --scrollerY y}:host[horizontalUsed=true]{--_timeline-scope: --scrollerX;--_animation-timeline-x: --scrollerX;--_viewport_scroll-timeline: --scrollerX x}:host[verticalUsed=true][horizontalUsed=true]{--_timeline-scope: --scrollerX, --scrollerY;--_viewport_scroll-timeline: --scrollerX x, --scrollerY y}:host[orientation=vertical]{--_viewport-overflow: hidden auto;--_scrollbar-content-width: unset}:host[orientation=horizontal]{--_viewport-overflow: auto hidden}:host[disableInteraction=true]{--_viewport-pointer-events: none;--_scrollbar-pointer-events: none}:host[isVerticallyScrollable=false]{--_vertical-thumb-display: none}:host[isHorizontallyScrollable=false]{--_horizontal-thumb-display: none}:host[dragging=x],:host[dragging=y]{--_viewport-user-select: none}:host[dragging=x]{--_track-x-thickness: calc(var(--INTERNAL-scrollbar-hover-thickness) * 1px);--_thumb-x-color: var(var(--INTERNAL-scrollbar-thumb-min-size))}:host[dragging=y]{--_track-y-thickness: calc(var(--INTERNAL-scrollbar-hover-thickness) * 1px);--_thumb-y-color: var(var(--INTERNAL-scrollbar-thumb-min-size))}:host[mobile=true]{--_viewport-overscroll-behavior: var(--INTERNAL-scrollbar-mobile-overscroll-behavior)}\n"] }]
    }], ctorParameters: () => [] });
    _NgScrollbarExt = class _NgScrollbarExt extends NgScrollbarCore {
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
        this.customViewport = contentChild(ScrollViewport, { descendants: true });
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
          elementInjector: Injector.create({ providers: [{ provide: NG_SCROLLBAR, useValue: this }] })
        });
        this.renderer.appendChild(this.viewport.contentWrapperElement, this._scrollbarsRef.location.nativeElement);
        this.appRef.attachView(this._scrollbarsRef.hostView);
        this._scrollbars.set(this._scrollbarsRef.instance);
      }
      getElement(selector) {
        return selector ? this.nativeElement.querySelector(selector) : null;
      }
    };
    _NgScrollbarExt.\u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "19.1.1", ngImport: core_exports, type: _NgScrollbarExt, deps: [], target: FactoryTarget.Component });
    _NgScrollbarExt.\u0275cmp = \u0275\u0275ngDeclareComponent({ minVersion: "17.2.0", version: "19.1.1", type: _NgScrollbarExt, isStandalone: true, selector: "ng-scrollbar[externalViewport]", inputs: { externalViewport: { classPropertyName: "externalViewport", publicName: "externalViewport", isSignal: true, isRequired: false, transformFunction: null }, externalContentWrapper: { classPropertyName: "externalContentWrapper", publicName: "externalContentWrapper", isSignal: true, isRequired: false, transformFunction: null }, externalSpacer: { classPropertyName: "externalSpacer", publicName: "externalSpacer", isSignal: true, isRequired: false, transformFunction: null } }, host: { attributes: { "ngSkipHydration": "true" }, properties: { "class.ng-scrollbar-external-viewport": "true" } }, providers: [
      { provide: NG_SCROLLBAR, useExisting: _NgScrollbarExt },
      { provide: NgScrollbarCore, useExisting: NgScrollbar },
      ViewportAdapter
    ], queries: [{ propertyName: "customViewport", first: true, predicate: ScrollViewport, descendants: true, isSignal: true }], exportAs: ["ngScrollbar"], usesInheritance: true, ngImport: core_exports, template: "<ng-content/>", isInline: true, styles: [":host{display:block;position:relative;max-height:100%;max-width:100%;--INTERNAL-scrollbar-border-radius: var(--scrollbar-border-radius, 0px);--INTERNAL-scrollbar-thickness: var(--scrollbar-thickness, 5);--INTERNAL-scrollbar-offset: var(--scrollbar-offset, 0);--INTERNAL-scrollbar-track-wrapper-transition: var(--scrollbar-track-wrapper-transition, width 60ms linear, height 60ms linear);--INTERNAL-scrollbar-track-color: var(--scrollbar-track-color, transparent);--INTERNAL-scrollbar-thumb-color: var(--scrollbar-thumb-color, rgb(0 0 0 / 20%));--INTERNAL-scrollbar-thumb-hover-color: var(--scrollbar-thumb-hover-color, var(--INTERNAL-scrollbar-thumb-color));--INTERNAL-scrollbar-hover-thickness: var(--scrollbar-hover-thickness, var(--INTERNAL-scrollbar-thickness));--INTERNAL-scrollbar-thumb-transition: var(--scrollbar-thumb-transition, none);--INTERNAL-scrollbar-thumb-min-size: var(--scrollbar-thumb-min-size, 20);--INTERNAL-scrollbar-button-color: var(--scrollbar-button-color, var(--INTERNAL-scrollbar-thumb-color));--INTERNAL-scrollbar-button-hover-color: var(--scrollbar-button-hover-color, var(--INTERNAL-scrollbar-button-color));--INTERNAL-scrollbar-button-active-color: var(--scrollbar-button-active-color, var(--INTERNAL-scrollbar-button-hover-color));--INTERNAL-scrollbar-button-fill: var(--scrollbar-button-fill, white);--INTERNAL-scrollbar-button-hover-fill: var(--scrollbar-button-hover-fill, var(--INTERNAL-scrollbar-button-fill));--INTERNAL-scrollbar-button-active-fill: var(--scrollbar-button-active-fill, var(--INTERNAL-scrollbar-button-hover-fill));--INTERNAL-scrollbar-button-size: var(--scrollbar-button-size, 20px);--INTERNAL-scrollbar-hover-opacity-transition-enter-duration: var(--scrollbar-hover-opacity-transition-enter-duration, 0);--INTERNAL-scrollbar-hover-opacity-transition-leave-duration: var(--scrollbar-hover-opacity-transition-leave-duration, .4s);--INTERNAL-scrollbar-hover-opacity-transition-leave-delay: var(--scrollbar-hover-opacity-transition-leave-delay, 1s);--INTERNAL-scrollbar-overscroll-behavior: var(--scrollbar-overscroll-behavior, initial);--INTERNAL-scrollbar-mobile-overscroll-behavior: var(--scrollbar-mobile-overscroll-behavior, none);--_scrollbar-thickness: calc(var(--INTERNAL-scrollbar-thickness) + var(--INTERNAL-scrollbar-offset) * 2);--_scrollbar-pointer-events: auto;--_scrollbar-offset-px: calc(var(--INTERNAL-scrollbar-offset) * 1px);--_scrollbar-thickness-px: calc(var(--INTERNAL-scrollbar-thickness) * 1px);--_scrollbar-hover-thickness-px: calc(var(--INTERNAL-scrollbar-hover-thickness) * 1px);--_viewport-padding-top: 0;--_viewport-padding-bottom: 0;--_viewport-padding-left: 0;--_viewport-padding-right: 0;--_horizontal-thumb-display: block;--_vertical-thumb-display: block;--_viewport-overflow: auto;--_viewport-pointer-events: auto;--_thumb-x-color: var(--INTERNAL-scrollbar-thumb-color);--_thumb-y-color: var(--INTERNAL-scrollbar-thumb-color);--_track-y-thickness: var(--_scrollbar-thickness-px);--_track-x-thickness: var(--_scrollbar-thickness-px);--_viewport-overscroll-behavior: var(--INTERNAL-scrollbar-overscroll-behavior);--_scrollbar-content-width: fit-content}:host{--_spacer-width: var(--spacer-width);--_spacer-height: var(--spacer-height);--_vertical-top: var(--_scrollbar-offset-px);--_vertical-bottom: var(--_scrollbar-offset-px);--_horizontal-left: var(--_scrollbar-offset-px);--_horizontal-right: var(--_scrollbar-offset-px);--_horizontal-top: initial;--_horizontal-bottom: var(--_scrollbar-offset-px);--_scrollbar-wrapper-x-top: calc(var(--viewport-height) - var(--_scrollbar-thickness));--reached-offset: 1px;--reached-offset-top: var(--reached-offset);--reached-offset-bottom: var(--reached-offset);--reached-offset-start: var(--reached-offset);--reached-offset-end: var(--reached-offset);--dropped-offset: 1px;--dropped-offset-top: var(--dropped-offset);--dropped-offset-bottom: var(--dropped-offset);--dropped-offset-start: var(--dropped-offset);--dropped-offset-end: var(--dropped-offset);--_viewport_scroll-timeline: unset;--_animation-timeline-y: unset;--_scrollbar-y-thumb-transform-to-value: unset;--_scrollbar-x-thumb-transform-to-value: unset;--_scrollbar-thumb-transform-from: unset;--_scrollbar-thumb-transform-to: unset}:host.ng-scrollbar-external-viewport ::ng-deep .ng-scroll-viewport{min-height:100%;min-width:100%;height:100%;max-height:100%;max-width:100%}:host.ng-scroll-viewport,:host.ng-scrollbar-external-viewport ::ng-deep .ng-scroll-viewport{position:relative;overflow:var(--_viewport-overflow);scroll-timeline:var(--_viewport_scroll-timeline);box-sizing:border-box!important;-webkit-overflow-scrolling:touch;will-change:scroll-position;-webkit-user-select:var(--_viewport-user-select);user-select:var(--_viewport-user-select);overscroll-behavior:var(--_viewport-overscroll-behavior);pointer-events:var(--_viewport-pointer-events)}:host.ng-scroll-viewport>.ng-scroll-content,:host.ng-scrollbar-external-viewport ::ng-deep .ng-scroll-viewport>.ng-scroll-content{width:var(--_scrollbar-content-width);z-index:1;min-width:100%;min-height:100%;contain:content;padding:var(--_viewport-padding-top, 0) var(--_viewport-padding-right, 0) var(--_viewport-padding-bottom, 0) var(--_viewport-padding-left, 0)}:host[appearance=native]{--_spacer-width: calc(var(--spacer-width) + var(--_scrollbar-thickness));--_spacer-height: calc(var(--spacer-height) + var(--_scrollbar-thickness))}:host.ng-scroll-viewport>.ng-scroll-spacer,:host.ng-scrollbar-external-viewport ::ng-deep .ng-scroll-viewport>.ng-scroll-spacer{position:relative;width:calc(var(--_spacer-width) * 1px);height:calc(var(--_spacer-height) * 1px)}:host.ng-scroll-viewport,:host.ng-scrollbar-external-viewport ::ng-deep .ng-scroll-viewport{scrollbar-width:none!important}:host.ng-scroll-viewport::-webkit-scrollbar,:host.ng-scrollbar-external-viewport ::ng-deep .ng-scroll-viewport::-webkit-scrollbar{display:none!important}:host[position=invertX],:host[position=invertAll]{--_horizontal-top: var(--_scrollbar-offset-px);--_horizontal-bottom: initial;--_scrollbar-wrapper-x-top: 0}:host[dir=ltr]{--_scrollbar-wrapper-y-right: initial;--_vertical-right: var(--_scrollbar-offset-px);--_vertical-left: initial;--_scrollbar-wrapper-y-left: calc(var(--viewport-width) - var(--_scrollbar-thickness))}:host[dir=ltr][position=invertY],:host[dir=ltr][position=invertAll]{--_vertical-left: var(--_scrollbar-offset-px);--_vertical-right: initial;--_scrollbar-wrapper-y-left: 0}:host[dir=rtl]{--_scrollbar-wrapper-y-left: initial;--_vertical-left: var(--_scrollbar-offset-px);--_vertical-right: initial;--_scrollbar-wrapper-y-right: calc(var(--viewport-width) - var(--_scrollbar-thickness))}:host[dir=rtl][position=invertY],:host[dir=rtl][position=invertAll]{--_vertical-right: var(--_scrollbar-offset-px);--_vertical-left: initial;--_scrollbar-wrapper-y-right: 0}:host[verticalUsed=true][horizontalUsed=true]{--_scrollbar-thickness-margin: calc(var(--INTERNAL-scrollbar-thickness) + var(--INTERNAL-scrollbar-offset) * 3);--_scrollbar-thickness-margin-px: calc(var(--_scrollbar-thickness-margin) * 1px)}:host[horizontalUsed=true]{--_vertical-top: var(--_scrollbar-offset-px);--_vertical-bottom: var(--_scrollbar-thickness-margin-px)}:host[horizontalUsed=true][position=invertX],:host[horizontalUsed=true][position=invertAll]{--_vertical-top: var(--_scrollbar-thickness-margin-px);--_vertical-bottom: var(--_scrollbar-offset-px)}:host[verticalUsed=true][dir=ltr]{--_horizontal-left: var(--_scrollbar-offset-px);--_horizontal-right: var(--_scrollbar-thickness-margin-px)}:host[verticalUsed=true][dir=rtl]{--_horizontal-left: var(--_scrollbar-thickness-margin-px);--_horizontal-right: var(--_scrollbar-offset-px)}:host[verticalUsed=true][position=invertY][dir=ltr],:host[verticalUsed=true][position=invertAll][dir=ltr]{--_horizontal-left: var(--_scrollbar-thickness-margin-px);--_horizontal-right: var(--_scrollbar-offset-px)}:host[verticalUsed=true][position=invertY][dir=rtl],:host[verticalUsed=true][position=invertAll][dir=rtl]{--_horizontal-left: var(--_scrollbar-offset-px);--_horizontal-right: var(--_scrollbar-thickness-margin-px)}:host[appearance=native][verticalUsed=true][dir=ltr]{--_viewport-padding-left: 0;--_viewport-padding-right: calc(var(--_scrollbar-thickness) * 1px)}:host[appearance=native][verticalUsed=true][dir=rtl]{--_viewport-padding-left: calc(var(--_scrollbar-thickness) * 1px);--_viewport-padding-right: 0}:host[appearance=native][verticalUsed=true][position=invertY][dir=ltr],:host[appearance=native][verticalUsed=true][position=invertAll][dir=ltr]{--_viewport-padding-left: calc(var(--_scrollbar-thickness) * 1px);--_viewport-padding-right: 0}:host[appearance=native][verticalUsed=true][position=invertY][dir=rtl],:host[appearance=native][verticalUsed=true][position=invertAll][dir=rtl]{--_viewport-padding-left: 0;--_viewport-padding-right: calc(var(--_scrollbar-thickness) * 1px)}:host[appearance=native][horizontalUsed=true]{--_viewport-padding-top: 0;--_viewport-padding-bottom: calc(var(--_scrollbar-thickness) * 1px)}:host[appearance=native][horizontalUsed=true][position=invertX],:host[appearance=native][horizontalUsed=true][position=invertAll]{--_viewport-padding-top: calc(var(--_scrollbar-thickness) * 1px);--_viewport-padding-bottom: 0}:host[visibility=hover]{--_scrollbar-hover-opacity: 0;--_scrollbar-opacity-transition: opacity var(--INTERNAL-scrollbar-hover-opacity-transition-leave-duration) var(--INTERNAL-scrollbar-hover-opacity-transition-leave-delay)}:host[visibility=hover]:hover,:host[visibility=hover]:active,:host[visibility=hover]:focus{--_scrollbar-hover-opacity: 1;--_scrollbar-opacity-transition: opacity var(--INTERNAL-scrollbar-hover-opacity-transition-enter-duration)}:host[dir=ltr] ::ng-deep .scroll-reached-trigger-element[trigger=start],:host[dir=ltr] ::ng-deep .scroll-dropped-trigger-element[trigger=start]{left:0;right:unset}:host[dir=ltr] ::ng-deep .scroll-reached-trigger-element[trigger=end],:host[dir=ltr] ::ng-deep .scroll-dropped-trigger-element[trigger=end]{right:0;left:unset}:host[dir=rtl] ::ng-deep .scroll-reached-trigger-element[trigger=start],:host[dir=rtl] ::ng-deep .scroll-dropped-trigger-element[trigger=start]{right:0;left:unset}:host[dir=rtl] ::ng-deep .scroll-reached-trigger-element[trigger=end],:host[dir=rtl] ::ng-deep .scroll-dropped-trigger-element[trigger=end]{left:0;right:unset}:host ::ng-deep .ng-scroll-reached-wrapper,:host ::ng-deep .ng-scroll-dropped-wrapper,:host ::ng-deep .scroll-reached-trigger-element,:host ::ng-deep .scroll-dropped-trigger-element{position:absolute;-webkit-user-select:none;user-select:none;pointer-events:none;z-index:-9999}:host ::ng-deep .ng-scroll-reached-wrapper,:host ::ng-deep .ng-scroll-dropped-wrapper{visibility:hidden;inset:0;min-width:calc(var(--viewport-width) * 1px);min-height:calc(var(--viewport-height) * 1px)}:host ::ng-deep [isHorizontallyScrollable=false] .scroll-reached-trigger-element[trigger=end],:host ::ng-deep [isHorizontallyScrollable=false] .scroll-dropped-trigger-element[trigger=end]{display:none}:host ::ng-deep [isVerticallyScrollable=false] .scroll-reached-trigger-element[trigger=bottom],:host ::ng-deep [isVerticallyScrollable=false] .scroll-dropped-trigger-element[trigger=bottom]{display:none}:host ::ng-deep .scroll-reached-trigger-element{background:red}:host ::ng-deep .scroll-reached-trigger-element[trigger=top],:host ::ng-deep .scroll-reached-trigger-element[trigger=bottom]{left:0;right:0}:host ::ng-deep .scroll-reached-trigger-element[trigger=start],:host ::ng-deep .scroll-reached-trigger-element[trigger=end]{top:0;bottom:0}:host ::ng-deep .scroll-reached-trigger-element[trigger=top]{top:0;height:var(--reached-offset-top)}:host ::ng-deep .scroll-reached-trigger-element[trigger=bottom]{bottom:0;height:var(--reached-offset-bottom)}:host ::ng-deep .scroll-reached-trigger-element[trigger=start]{width:var(--reached-offset-start)}:host ::ng-deep .scroll-reached-trigger-element[trigger=end]{width:var(--reached-offset-end)}:host .scroll-dropped-trigger-element{background:#00f}:host .scroll-dropped-trigger-element[trigger=top],:host .scroll-dropped-trigger-element[trigger=bottom]{left:0;right:0}:host .scroll-dropped-trigger-element[trigger=start],:host .scroll-dropped-trigger-element[trigger=end]{top:0;bottom:0}:host .scroll-dropped-trigger-element[trigger=top]{top:0;height:var(--dropped-offset-top)}:host .scroll-dropped-trigger-element[trigger=bottom]{bottom:0;height:var(--dropped-offset-bottom)}:host .scroll-dropped-trigger-element[trigger=start]{width:var(--dropped-offset-start)}:host .scroll-dropped-trigger-element[trigger=end]{width:var(--dropped-offset-end)}:host[verticalUsed=true]{--_timeline-scope: --scrollerY;--_animation-timeline-y: --scrollerY;--_viewport_scroll-timeline: --scrollerY y}:host[horizontalUsed=true]{--_timeline-scope: --scrollerX;--_animation-timeline-x: --scrollerX;--_viewport_scroll-timeline: --scrollerX x}:host[verticalUsed=true][horizontalUsed=true]{--_timeline-scope: --scrollerX, --scrollerY;--_viewport_scroll-timeline: --scrollerX x, --scrollerY y}:host[orientation=vertical]{--_viewport-overflow: hidden auto;--_scrollbar-content-width: unset}:host[orientation=horizontal]{--_viewport-overflow: auto hidden}:host[disableInteraction=true]{--_viewport-pointer-events: none;--_scrollbar-pointer-events: none}:host[isVerticallyScrollable=false]{--_vertical-thumb-display: none}:host[isHorizontallyScrollable=false]{--_horizontal-thumb-display: none}:host[dragging=x],:host[dragging=y]{--_viewport-user-select: none}:host[dragging=x]{--_track-x-thickness: calc(var(--INTERNAL-scrollbar-hover-thickness) * 1px);--_thumb-x-color: var(var(--INTERNAL-scrollbar-thumb-min-size))}:host[dragging=y]{--_track-y-thickness: calc(var(--INTERNAL-scrollbar-hover-thickness) * 1px);--_thumb-y-color: var(var(--INTERNAL-scrollbar-thumb-min-size))}:host[mobile=true]{--_viewport-overscroll-behavior: var(--INTERNAL-scrollbar-mobile-overscroll-behavior)}\n"], changeDetection: ChangeDetectionStrategy.OnPush });
    NgScrollbarExt = _NgScrollbarExt;
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "19.1.1", ngImport: core_exports, type: NgScrollbarExt, decorators: [{
      type: Component,
      args: [{ standalone: true, selector: "ng-scrollbar[externalViewport]", exportAs: "ngScrollbar", template: "<ng-content/>", changeDetection: ChangeDetectionStrategy.OnPush, host: {
        // This component appends a content wrapper element to the viewport
        // A hydration mismatch error will be thrown (NG0500) during DOM manipulation.
        // To avoid this error, the 'ngSkipHydration' attribute is added to skip hydration.
        ngSkipHydration: "true",
        "[class.ng-scrollbar-external-viewport]": "true"
      }, providers: [
        { provide: NG_SCROLLBAR, useExisting: NgScrollbarExt },
        { provide: NgScrollbarCore, useExisting: NgScrollbar },
        ViewportAdapter
      ], styles: [":host{display:block;position:relative;max-height:100%;max-width:100%;--INTERNAL-scrollbar-border-radius: var(--scrollbar-border-radius, 0px);--INTERNAL-scrollbar-thickness: var(--scrollbar-thickness, 5);--INTERNAL-scrollbar-offset: var(--scrollbar-offset, 0);--INTERNAL-scrollbar-track-wrapper-transition: var(--scrollbar-track-wrapper-transition, width 60ms linear, height 60ms linear);--INTERNAL-scrollbar-track-color: var(--scrollbar-track-color, transparent);--INTERNAL-scrollbar-thumb-color: var(--scrollbar-thumb-color, rgb(0 0 0 / 20%));--INTERNAL-scrollbar-thumb-hover-color: var(--scrollbar-thumb-hover-color, var(--INTERNAL-scrollbar-thumb-color));--INTERNAL-scrollbar-hover-thickness: var(--scrollbar-hover-thickness, var(--INTERNAL-scrollbar-thickness));--INTERNAL-scrollbar-thumb-transition: var(--scrollbar-thumb-transition, none);--INTERNAL-scrollbar-thumb-min-size: var(--scrollbar-thumb-min-size, 20);--INTERNAL-scrollbar-button-color: var(--scrollbar-button-color, var(--INTERNAL-scrollbar-thumb-color));--INTERNAL-scrollbar-button-hover-color: var(--scrollbar-button-hover-color, var(--INTERNAL-scrollbar-button-color));--INTERNAL-scrollbar-button-active-color: var(--scrollbar-button-active-color, var(--INTERNAL-scrollbar-button-hover-color));--INTERNAL-scrollbar-button-fill: var(--scrollbar-button-fill, white);--INTERNAL-scrollbar-button-hover-fill: var(--scrollbar-button-hover-fill, var(--INTERNAL-scrollbar-button-fill));--INTERNAL-scrollbar-button-active-fill: var(--scrollbar-button-active-fill, var(--INTERNAL-scrollbar-button-hover-fill));--INTERNAL-scrollbar-button-size: var(--scrollbar-button-size, 20px);--INTERNAL-scrollbar-hover-opacity-transition-enter-duration: var(--scrollbar-hover-opacity-transition-enter-duration, 0);--INTERNAL-scrollbar-hover-opacity-transition-leave-duration: var(--scrollbar-hover-opacity-transition-leave-duration, .4s);--INTERNAL-scrollbar-hover-opacity-transition-leave-delay: var(--scrollbar-hover-opacity-transition-leave-delay, 1s);--INTERNAL-scrollbar-overscroll-behavior: var(--scrollbar-overscroll-behavior, initial);--INTERNAL-scrollbar-mobile-overscroll-behavior: var(--scrollbar-mobile-overscroll-behavior, none);--_scrollbar-thickness: calc(var(--INTERNAL-scrollbar-thickness) + var(--INTERNAL-scrollbar-offset) * 2);--_scrollbar-pointer-events: auto;--_scrollbar-offset-px: calc(var(--INTERNAL-scrollbar-offset) * 1px);--_scrollbar-thickness-px: calc(var(--INTERNAL-scrollbar-thickness) * 1px);--_scrollbar-hover-thickness-px: calc(var(--INTERNAL-scrollbar-hover-thickness) * 1px);--_viewport-padding-top: 0;--_viewport-padding-bottom: 0;--_viewport-padding-left: 0;--_viewport-padding-right: 0;--_horizontal-thumb-display: block;--_vertical-thumb-display: block;--_viewport-overflow: auto;--_viewport-pointer-events: auto;--_thumb-x-color: var(--INTERNAL-scrollbar-thumb-color);--_thumb-y-color: var(--INTERNAL-scrollbar-thumb-color);--_track-y-thickness: var(--_scrollbar-thickness-px);--_track-x-thickness: var(--_scrollbar-thickness-px);--_viewport-overscroll-behavior: var(--INTERNAL-scrollbar-overscroll-behavior);--_scrollbar-content-width: fit-content}:host{--_spacer-width: var(--spacer-width);--_spacer-height: var(--spacer-height);--_vertical-top: var(--_scrollbar-offset-px);--_vertical-bottom: var(--_scrollbar-offset-px);--_horizontal-left: var(--_scrollbar-offset-px);--_horizontal-right: var(--_scrollbar-offset-px);--_horizontal-top: initial;--_horizontal-bottom: var(--_scrollbar-offset-px);--_scrollbar-wrapper-x-top: calc(var(--viewport-height) - var(--_scrollbar-thickness));--reached-offset: 1px;--reached-offset-top: var(--reached-offset);--reached-offset-bottom: var(--reached-offset);--reached-offset-start: var(--reached-offset);--reached-offset-end: var(--reached-offset);--dropped-offset: 1px;--dropped-offset-top: var(--dropped-offset);--dropped-offset-bottom: var(--dropped-offset);--dropped-offset-start: var(--dropped-offset);--dropped-offset-end: var(--dropped-offset);--_viewport_scroll-timeline: unset;--_animation-timeline-y: unset;--_scrollbar-y-thumb-transform-to-value: unset;--_scrollbar-x-thumb-transform-to-value: unset;--_scrollbar-thumb-transform-from: unset;--_scrollbar-thumb-transform-to: unset}:host.ng-scrollbar-external-viewport ::ng-deep .ng-scroll-viewport{min-height:100%;min-width:100%;height:100%;max-height:100%;max-width:100%}:host.ng-scroll-viewport,:host.ng-scrollbar-external-viewport ::ng-deep .ng-scroll-viewport{position:relative;overflow:var(--_viewport-overflow);scroll-timeline:var(--_viewport_scroll-timeline);box-sizing:border-box!important;-webkit-overflow-scrolling:touch;will-change:scroll-position;-webkit-user-select:var(--_viewport-user-select);user-select:var(--_viewport-user-select);overscroll-behavior:var(--_viewport-overscroll-behavior);pointer-events:var(--_viewport-pointer-events)}:host.ng-scroll-viewport>.ng-scroll-content,:host.ng-scrollbar-external-viewport ::ng-deep .ng-scroll-viewport>.ng-scroll-content{width:var(--_scrollbar-content-width);z-index:1;min-width:100%;min-height:100%;contain:content;padding:var(--_viewport-padding-top, 0) var(--_viewport-padding-right, 0) var(--_viewport-padding-bottom, 0) var(--_viewport-padding-left, 0)}:host[appearance=native]{--_spacer-width: calc(var(--spacer-width) + var(--_scrollbar-thickness));--_spacer-height: calc(var(--spacer-height) + var(--_scrollbar-thickness))}:host.ng-scroll-viewport>.ng-scroll-spacer,:host.ng-scrollbar-external-viewport ::ng-deep .ng-scroll-viewport>.ng-scroll-spacer{position:relative;width:calc(var(--_spacer-width) * 1px);height:calc(var(--_spacer-height) * 1px)}:host.ng-scroll-viewport,:host.ng-scrollbar-external-viewport ::ng-deep .ng-scroll-viewport{scrollbar-width:none!important}:host.ng-scroll-viewport::-webkit-scrollbar,:host.ng-scrollbar-external-viewport ::ng-deep .ng-scroll-viewport::-webkit-scrollbar{display:none!important}:host[position=invertX],:host[position=invertAll]{--_horizontal-top: var(--_scrollbar-offset-px);--_horizontal-bottom: initial;--_scrollbar-wrapper-x-top: 0}:host[dir=ltr]{--_scrollbar-wrapper-y-right: initial;--_vertical-right: var(--_scrollbar-offset-px);--_vertical-left: initial;--_scrollbar-wrapper-y-left: calc(var(--viewport-width) - var(--_scrollbar-thickness))}:host[dir=ltr][position=invertY],:host[dir=ltr][position=invertAll]{--_vertical-left: var(--_scrollbar-offset-px);--_vertical-right: initial;--_scrollbar-wrapper-y-left: 0}:host[dir=rtl]{--_scrollbar-wrapper-y-left: initial;--_vertical-left: var(--_scrollbar-offset-px);--_vertical-right: initial;--_scrollbar-wrapper-y-right: calc(var(--viewport-width) - var(--_scrollbar-thickness))}:host[dir=rtl][position=invertY],:host[dir=rtl][position=invertAll]{--_vertical-right: var(--_scrollbar-offset-px);--_vertical-left: initial;--_scrollbar-wrapper-y-right: 0}:host[verticalUsed=true][horizontalUsed=true]{--_scrollbar-thickness-margin: calc(var(--INTERNAL-scrollbar-thickness) + var(--INTERNAL-scrollbar-offset) * 3);--_scrollbar-thickness-margin-px: calc(var(--_scrollbar-thickness-margin) * 1px)}:host[horizontalUsed=true]{--_vertical-top: var(--_scrollbar-offset-px);--_vertical-bottom: var(--_scrollbar-thickness-margin-px)}:host[horizontalUsed=true][position=invertX],:host[horizontalUsed=true][position=invertAll]{--_vertical-top: var(--_scrollbar-thickness-margin-px);--_vertical-bottom: var(--_scrollbar-offset-px)}:host[verticalUsed=true][dir=ltr]{--_horizontal-left: var(--_scrollbar-offset-px);--_horizontal-right: var(--_scrollbar-thickness-margin-px)}:host[verticalUsed=true][dir=rtl]{--_horizontal-left: var(--_scrollbar-thickness-margin-px);--_horizontal-right: var(--_scrollbar-offset-px)}:host[verticalUsed=true][position=invertY][dir=ltr],:host[verticalUsed=true][position=invertAll][dir=ltr]{--_horizontal-left: var(--_scrollbar-thickness-margin-px);--_horizontal-right: var(--_scrollbar-offset-px)}:host[verticalUsed=true][position=invertY][dir=rtl],:host[verticalUsed=true][position=invertAll][dir=rtl]{--_horizontal-left: var(--_scrollbar-offset-px);--_horizontal-right: var(--_scrollbar-thickness-margin-px)}:host[appearance=native][verticalUsed=true][dir=ltr]{--_viewport-padding-left: 0;--_viewport-padding-right: calc(var(--_scrollbar-thickness) * 1px)}:host[appearance=native][verticalUsed=true][dir=rtl]{--_viewport-padding-left: calc(var(--_scrollbar-thickness) * 1px);--_viewport-padding-right: 0}:host[appearance=native][verticalUsed=true][position=invertY][dir=ltr],:host[appearance=native][verticalUsed=true][position=invertAll][dir=ltr]{--_viewport-padding-left: calc(var(--_scrollbar-thickness) * 1px);--_viewport-padding-right: 0}:host[appearance=native][verticalUsed=true][position=invertY][dir=rtl],:host[appearance=native][verticalUsed=true][position=invertAll][dir=rtl]{--_viewport-padding-left: 0;--_viewport-padding-right: calc(var(--_scrollbar-thickness) * 1px)}:host[appearance=native][horizontalUsed=true]{--_viewport-padding-top: 0;--_viewport-padding-bottom: calc(var(--_scrollbar-thickness) * 1px)}:host[appearance=native][horizontalUsed=true][position=invertX],:host[appearance=native][horizontalUsed=true][position=invertAll]{--_viewport-padding-top: calc(var(--_scrollbar-thickness) * 1px);--_viewport-padding-bottom: 0}:host[visibility=hover]{--_scrollbar-hover-opacity: 0;--_scrollbar-opacity-transition: opacity var(--INTERNAL-scrollbar-hover-opacity-transition-leave-duration) var(--INTERNAL-scrollbar-hover-opacity-transition-leave-delay)}:host[visibility=hover]:hover,:host[visibility=hover]:active,:host[visibility=hover]:focus{--_scrollbar-hover-opacity: 1;--_scrollbar-opacity-transition: opacity var(--INTERNAL-scrollbar-hover-opacity-transition-enter-duration)}:host[dir=ltr] ::ng-deep .scroll-reached-trigger-element[trigger=start],:host[dir=ltr] ::ng-deep .scroll-dropped-trigger-element[trigger=start]{left:0;right:unset}:host[dir=ltr] ::ng-deep .scroll-reached-trigger-element[trigger=end],:host[dir=ltr] ::ng-deep .scroll-dropped-trigger-element[trigger=end]{right:0;left:unset}:host[dir=rtl] ::ng-deep .scroll-reached-trigger-element[trigger=start],:host[dir=rtl] ::ng-deep .scroll-dropped-trigger-element[trigger=start]{right:0;left:unset}:host[dir=rtl] ::ng-deep .scroll-reached-trigger-element[trigger=end],:host[dir=rtl] ::ng-deep .scroll-dropped-trigger-element[trigger=end]{left:0;right:unset}:host ::ng-deep .ng-scroll-reached-wrapper,:host ::ng-deep .ng-scroll-dropped-wrapper,:host ::ng-deep .scroll-reached-trigger-element,:host ::ng-deep .scroll-dropped-trigger-element{position:absolute;-webkit-user-select:none;user-select:none;pointer-events:none;z-index:-9999}:host ::ng-deep .ng-scroll-reached-wrapper,:host ::ng-deep .ng-scroll-dropped-wrapper{visibility:hidden;inset:0;min-width:calc(var(--viewport-width) * 1px);min-height:calc(var(--viewport-height) * 1px)}:host ::ng-deep [isHorizontallyScrollable=false] .scroll-reached-trigger-element[trigger=end],:host ::ng-deep [isHorizontallyScrollable=false] .scroll-dropped-trigger-element[trigger=end]{display:none}:host ::ng-deep [isVerticallyScrollable=false] .scroll-reached-trigger-element[trigger=bottom],:host ::ng-deep [isVerticallyScrollable=false] .scroll-dropped-trigger-element[trigger=bottom]{display:none}:host ::ng-deep .scroll-reached-trigger-element{background:red}:host ::ng-deep .scroll-reached-trigger-element[trigger=top],:host ::ng-deep .scroll-reached-trigger-element[trigger=bottom]{left:0;right:0}:host ::ng-deep .scroll-reached-trigger-element[trigger=start],:host ::ng-deep .scroll-reached-trigger-element[trigger=end]{top:0;bottom:0}:host ::ng-deep .scroll-reached-trigger-element[trigger=top]{top:0;height:var(--reached-offset-top)}:host ::ng-deep .scroll-reached-trigger-element[trigger=bottom]{bottom:0;height:var(--reached-offset-bottom)}:host ::ng-deep .scroll-reached-trigger-element[trigger=start]{width:var(--reached-offset-start)}:host ::ng-deep .scroll-reached-trigger-element[trigger=end]{width:var(--reached-offset-end)}:host .scroll-dropped-trigger-element{background:#00f}:host .scroll-dropped-trigger-element[trigger=top],:host .scroll-dropped-trigger-element[trigger=bottom]{left:0;right:0}:host .scroll-dropped-trigger-element[trigger=start],:host .scroll-dropped-trigger-element[trigger=end]{top:0;bottom:0}:host .scroll-dropped-trigger-element[trigger=top]{top:0;height:var(--dropped-offset-top)}:host .scroll-dropped-trigger-element[trigger=bottom]{bottom:0;height:var(--dropped-offset-bottom)}:host .scroll-dropped-trigger-element[trigger=start]{width:var(--dropped-offset-start)}:host .scroll-dropped-trigger-element[trigger=end]{width:var(--dropped-offset-end)}:host[verticalUsed=true]{--_timeline-scope: --scrollerY;--_animation-timeline-y: --scrollerY;--_viewport_scroll-timeline: --scrollerY y}:host[horizontalUsed=true]{--_timeline-scope: --scrollerX;--_animation-timeline-x: --scrollerX;--_viewport_scroll-timeline: --scrollerX x}:host[verticalUsed=true][horizontalUsed=true]{--_timeline-scope: --scrollerX, --scrollerY;--_viewport_scroll-timeline: --scrollerX x, --scrollerY y}:host[orientation=vertical]{--_viewport-overflow: hidden auto;--_scrollbar-content-width: unset}:host[orientation=horizontal]{--_viewport-overflow: auto hidden}:host[disableInteraction=true]{--_viewport-pointer-events: none;--_scrollbar-pointer-events: none}:host[isVerticallyScrollable=false]{--_vertical-thumb-display: none}:host[isHorizontallyScrollable=false]{--_horizontal-thumb-display: none}:host[dragging=x],:host[dragging=y]{--_viewport-user-select: none}:host[dragging=x]{--_track-x-thickness: calc(var(--INTERNAL-scrollbar-hover-thickness) * 1px);--_thumb-x-color: var(var(--INTERNAL-scrollbar-thumb-min-size))}:host[dragging=y]{--_track-y-thickness: calc(var(--INTERNAL-scrollbar-hover-thickness) * 1px);--_thumb-y-color: var(var(--INTERNAL-scrollbar-thumb-min-size))}:host[mobile=true]{--_viewport-overscroll-behavior: var(--INTERNAL-scrollbar-mobile-overscroll-behavior)}\n"] }]
    }], ctorParameters: () => [] });
    _AsyncDetection = class _AsyncDetection {
      constructor() {
        this.scrollbar = inject(NgScrollbarExt, { self: true });
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
    _AsyncDetection.\u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "19.1.1", ngImport: core_exports, type: _AsyncDetection, deps: [], target: FactoryTarget.Directive });
    _AsyncDetection.\u0275dir = \u0275\u0275ngDeclareDirective({ minVersion: "17.1.0", version: "19.1.1", type: _AsyncDetection, isStandalone: true, selector: "ng-scrollbar[externalViewport][asyncDetection]", inputs: { asyncDetection: { classPropertyName: "asyncDetection", publicName: "asyncDetection", isSignal: true, isRequired: false, transformFunction: null } }, ngImport: core_exports });
    AsyncDetection = _AsyncDetection;
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "19.1.1", ngImport: core_exports, type: AsyncDetection, decorators: [{
      type: Directive,
      args: [{
        standalone: true,
        selector: "ng-scrollbar[externalViewport][asyncDetection]"
      }]
    }], ctorParameters: () => [] });
    _SyncSpacer = class _SyncSpacer {
      constructor() {
        this.sharedResizeObserver = inject(SharedResizeObserver);
        this.scrollbar = inject(NgScrollbarExt, { self: true });
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
    _SyncSpacer.\u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "19.1.1", ngImport: core_exports, type: _SyncSpacer, deps: [], target: FactoryTarget.Directive });
    _SyncSpacer.\u0275dir = \u0275\u0275ngDeclareDirective({ minVersion: "14.0.0", version: "19.1.1", type: _SyncSpacer, isStandalone: true, selector: "ng-scrollbar[externalViewport][syncSpacer]", host: { properties: { "style.--spacer-width": "spacerDimension().width", "style.--spacer-height": "spacerDimension().height" } }, ngImport: core_exports });
    SyncSpacer = _SyncSpacer;
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "19.1.1", ngImport: core_exports, type: SyncSpacer, decorators: [{
      type: Directive,
      args: [{
        standalone: true,
        selector: "ng-scrollbar[externalViewport][syncSpacer]",
        host: {
          "[style.--spacer-width]": "spacerDimension().width",
          "[style.--spacer-height]": "spacerDimension().height"
        }
      }]
    }], ctorParameters: () => [] });
    _NgScrollbarModule = class _NgScrollbarModule {
    };
    _NgScrollbarModule.\u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "19.1.1", ngImport: core_exports, type: _NgScrollbarModule, deps: [], target: FactoryTarget.NgModule });
    _NgScrollbarModule.\u0275mod = \u0275\u0275ngDeclareNgModule({ minVersion: "14.0.0", version: "19.1.1", ngImport: core_exports, type: _NgScrollbarModule, imports: [
      NgScrollbar,
      ScrollViewport,
      NgScrollbarExt,
      AsyncDetection,
      SyncSpacer
    ], exports: [
      NgScrollbar,
      ScrollViewport,
      NgScrollbarExt,
      AsyncDetection,
      SyncSpacer
    ] });
    _NgScrollbarModule.\u0275inj = \u0275\u0275ngDeclareInjector({ minVersion: "12.0.0", version: "19.1.1", ngImport: core_exports, type: _NgScrollbarModule });
    NgScrollbarModule = _NgScrollbarModule;
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "19.1.1", ngImport: core_exports, type: NgScrollbarModule, decorators: [{
      type: NgModule,
      args: [{
        imports: [
          NgScrollbar,
          ScrollViewport,
          NgScrollbarExt,
          AsyncDetection,
          SyncSpacer
        ],
        exports: [
          NgScrollbar,
          ScrollViewport,
          NgScrollbarExt,
          AsyncDetection,
          SyncSpacer
        ]
      }]
    }] });
  }
});

export {
  NgScrollbarModule,
  init_ngx_scrollbar
};
//# sourceMappingURL=chunk-4AUJWHIX.js.map

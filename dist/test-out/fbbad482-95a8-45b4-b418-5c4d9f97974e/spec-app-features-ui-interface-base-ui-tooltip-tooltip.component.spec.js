import {
  ComponentPortal,
  OverlayModule,
  createFlexibleConnectedPositionStrategy,
  createOverlayRef,
  createRepositionScrollStrategy,
  init_overlay,
  init_portal
} from "./chunk-ZLTBFUHR.js";
import {
  _animationsDisabled,
  init_animation_ChQ1vjiF
} from "./chunk-WYJ2IQUD.js";
import {
  A11yModule,
  AriaDescriber,
  ESCAPE,
  FocusMonitor,
  MatCommonModule,
  hasModifierKey,
  init_a11y,
  init_common_module_cKSwHniA,
  init_keycodes
} from "./chunk-BDO5G4JQ.js";
import {
  CdkScrollableModule,
  ScrollDispatcher,
  init_scrolling
} from "./chunk-BAYPUVG5.js";
import "./chunk-V5QKIDZC.js";
import {
  init_platform
} from "./chunk-6XCX22WB.js";
import "./chunk-I2GXMQDC.js";
import "./chunk-UJXPUDZY.js";
import {
  coerceBooleanProperty,
  init_coercion,
  normalizePassiveListenerOptions
} from "./chunk-33YSR6MK.js";
import "./chunk-LKMTQ47C.js";
import {
  Directionality,
  Platform,
  coerceNumberProperty,
  init_bidi
} from "./chunk-MTEB3W4S.js";
import {
  CommonModule,
  NgClass,
  init_common
} from "./chunk-HQHIWYWO.js";
import "./chunk-PV6FWBJN.js";
import {
  TestBed,
  init_testing
} from "./chunk-SXCZ3RJK.js";
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  DOCUMENT,
  Directive,
  ElementRef,
  FactoryTarget,
  InjectionToken,
  Injector,
  Input,
  NgModule,
  NgZone,
  Subject,
  ViewChild,
  ViewContainerRef,
  ViewEncapsulation,
  __decorate,
  afterNextRender,
  core_exports,
  init_core,
  init_esm,
  init_operators,
  init_tslib_es6,
  inject,
  takeUntil,
  ɵɵngDeclareClassMetadata,
  ɵɵngDeclareComponent,
  ɵɵngDeclareDirective,
  ɵɵngDeclareFactory,
  ɵɵngDeclareInjector,
  ɵɵngDeclareNgModule
} from "./chunk-W6MIRXHE.js";
import {
  __async,
  __commonJS,
  __esm,
  __spreadValues
} from "./chunk-FWMZPJRE.js";

// angular:jit:template:src/app/features/ui-interface/base-ui/tooltip/tooltip.component.html
var tooltip_component_default;
var init_tooltip_component = __esm({
  "angular:jit:template:src/app/features/ui-interface/base-ui/tooltip/tooltip.component.html"() {
    tooltip_component_default = `			<!-- Start Content -->
      <div class="content">

        <!-- Page Header -->
        <div class="d-flex align-items-sm-center flex-sm-row flex-column gap-2 pb-3">
            <div class="flex-grow-1">
                <h4 class="fs-18 fw-semibold mb-0">Tooltips</h4>
            </div>

            <div class="text-end">
                <ol class="breadcrumb m-0 py-0">
                    <li class="breadcrumb-item"><a href="javascript: void(0);">Home</a></li>
                    
                    <li class="breadcrumb-item"><a href="javascript: void(0);">Base UI</a></li>
                    
                    <li class="breadcrumb-item active">Tooltips</li>
                </ol>
            </div>
        </div>
        <!--  End Page Header-->

        
        <!-- start row -->
        <div class="row">
            <div class="col-xl-6">
                <div class="card">
                    <div class="card-header">
                        <h5 class="card-title">Tooltips on links</h5>
                    </div>
                    <div class="card-body">
                        <p>Hover over the links below to see tooltips.</p>
        <p class="muted mb-0">Placeholder text to demonstrate some <a href="javascript:void(0);" class="text-primary" data-bs-toggle="tooltip" matTooltip="Default Tooltip" matTooltipPosition="above" data-bs-title="Default tooltip">inline links</a> with tooltips. This is now just filler, no killer. Content placed here just to mimic the presence of <a href="javascript:void(0);" class="text-primary" matTooltip="Another Tooltip" matTooltipPosition="above"  data-bs-toggle="tooltip" data-bs-title="Another tooltip">real text</a>. And all that just to give you an idea of how tooltips would look when used in real-world situations. So hopefully you've now seen how <a href="javascript:void(0);" class="text-primary" data-bs-toggle="tooltip" data-bs-title="Another one here too" matTooltip="Another one here too" matTooltipPosition="above" >these tooltips on links</a> can work in practice, once you use them on <a href="javascript:void(0);" class="text-primary" data-bs-toggle="tooltip" matTooltip="last Tooltip" matTooltipPosition="above"  data-bs-title="The last tip!">your own</a> site or project.</p>
                    </div> <!-- end card body -->
                </div> <!-- end card -->
                <div class="card">
                    <div class="card-header">
                        <h5 class="card-title">Disabled Elements</h5>
                    </div>
                    <div class="card-body">
                        <p class="text-muted">Elements with the <code>disabled</code> attribute aren\u2019t interactive, meaning users cannot focus, hover, or click them to trigger a tooltip (or popover). As a workaround, you\u2019ll want to trigger the tooltip from a wrapper <code>&lt;div&gt;</code> or <code>&lt;span&gt;</code>, ideally made keyboard-focusable using <code>tabindex="0"</code>, and override the <code>pointer-events</code> on the disabled element.</p>
                        <div>
                            <span class="d-inline-block" tabindex="0" matTooltip="Disabled Tooltip" matTooltipPosition="above"  data-bs-toggle="tooltip" data-bs-title="Disabled tooltip">
                                <button class="btn btn-primary pe-none" type="button" disabled>Disabled
                                    button</button>
                            </span>
                        </div>

                    </div> <!-- end card body -->
                </div> <!-- end card -->

                <div class="card">
                    <div class="card-header">
                        <h5 class="card-title">Hover Elements</h5>
                    </div>
                    <div class="card-body">
                        <p class="text-muted">Elements with the <code>disabled</code> attribute aren\u2019t interactive, meaning users cannot focus, hover, or click them to trigger a tooltip (or popover). As a workaround, you\u2019ll want to trigger the tooltip from a wrapper <code>&lt;div&gt;</code> or <code>&lt;span&gt;</code>, ideally made keyboard-focusable using <code>tabindex="0"</code>, and override the <code>pointer-events</code> on the disabled element.</p>
                        <button class="btn btn-primary" type="button" data-bs-toggle="tooltip" data-bs-trigger="hover" matTooltip="Hover Only, Not a Focus" matTooltipPosition="above"  data-bs-title="Hover Only, Not a Focus">Hover</button>
                    </div> <!-- end card body -->
                </div> <!-- end card -->
            </div> <!-- end col -->

            <div class="col-xl-6">
                <div class="card">
                    <div class="card-header">
                        <h5 class="card-title">Directions</h5>
                    </div>
                    <div class="card-body">
                        <p>Hover over the buttons below to see the four tooltips directions: top, right, bottom, and left.</p>
                        <div class="d-flex flex-wrap gap-2">
                            <button type="button" class="btn btn-primary" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="Tooltip on top" matTooltip="Tooltip on top" matTooltipPosition="above" >Tooltip on
                                top</button>
                            <button type="button" class="btn btn-primary" data-bs-toggle="tooltip" data-bs-placement="bottom" data-bs-title="Tooltip on bottom" matTooltip="Tooltip on bottom" matTooltipPosition="below">Tooltip on
                                bottom</button>
                            <button type="button" class="btn btn-primary" data-bs-toggle="tooltip" data-bs-placement="left" data-bs-title="Tooltip on left" matTooltip="Tooltip on left" matTooltipPosition="left">Tooltip on
                                left</button>
                            <button type="button" class="btn btn-primary" data-bs-toggle="tooltip" data-bs-placement="right" data-bs-title="Tooltip on right" matTooltip="Tooltip on right" matTooltipPosition="right">Tooltip on
                                right</button>
                        </div>
                    </div> <!-- end card body -->
                </div> <!-- end card -->

                <div class="card">
                    <div class="card-header">
                        <h5 class="card-title">HTML Tags</h5>
                    </div>
                    <div class="card-body">
                        <p class="text-muted">And with custom HTML added:</p>
                        <button type="button" class="btn btn-secondary" data-bs-toggle="tooltip" matTooltip="Tooltip with HTML" matTooltipPosition="above" data-bs-html="true" data-bs-title="<em>Tooltip</em> <u>with</u> <b>HTML</b>">
                            Tooltip with HTML
                        </button>
        <button type="button" class="btn btn-primary ms-2" data-bs-toggle="tooltip" matTooltip="Tooltip on top" matTooltipPosition="above" data-bs-trigger="click" data-bs-html="true" data-bs-placement="bottom" title="" data-bs-original-title="<em>Tooltip</em> <u>with</u> <b>HTML</b>">
          Click Me
        </button>
                    </div> <!-- end card body -->
                </div> <!-- end card -->

            </div> <!-- end col -->
        </div>
        <!-- end row -->

    </div> 
    <!-- End Content -->`;
  }
});

// angular:jit:style:src/app/features/ui-interface/base-ui/tooltip/tooltip.component.scss
var tooltip_component_default2;
var init_tooltip_component2 = __esm({
  "angular:jit:style:src/app/features/ui-interface/base-ui/tooltip/tooltip.component.scss"() {
    tooltip_component_default2 = "/* src/app/features/ui-interface/base-ui/tooltip/tooltip.component.scss */\n.tooltip-list .btn-primary {\n  margin-left: 20px;\n}\n.popover-list .btn-primary {\n  margin-left: 20px;\n}\n/*# sourceMappingURL=tooltip.component.css.map */\n";
  }
});

// node_modules/@angular/material/fesm2022/module-DVPFZEhf.mjs
function getMatTooltipInvalidPositionError(position) {
  return Error(`Tooltip position "${position}" is invalid.`);
}
function MAT_TOOLTIP_SCROLL_STRATEGY_FACTORY(_overlay) {
  const injector = inject(Injector);
  return () => createRepositionScrollStrategy(injector, { scrollThrottle: SCROLL_THROTTLE_MS });
}
function MAT_TOOLTIP_DEFAULT_OPTIONS_FACTORY() {
  return {
    showDelay: 0,
    hideDelay: 0,
    touchendHideDelay: 1500
  };
}
var SCROLL_THROTTLE_MS, MAT_TOOLTIP_SCROLL_STRATEGY, MAT_TOOLTIP_SCROLL_STRATEGY_FACTORY_PROVIDER, MAT_TOOLTIP_DEFAULT_OPTIONS, PANEL_CLASS, passiveListenerOptions, MIN_VIEWPORT_TOOLTIP_THRESHOLD, UNBOUNDED_ANCHOR_GAP, MIN_HEIGHT, MAX_WIDTH, MatTooltip, TooltipComponent, MatTooltipModule;
var init_module_DVPFZEhf = __esm({
  "node_modules/@angular/material/fesm2022/module-DVPFZEhf.mjs"() {
    "use strict";
    init_core();
    init_core();
    init_a11y();
    init_overlay();
    init_scrolling();
    init_operators();
    init_coercion();
    init_keycodes();
    init_common();
    init_platform();
    init_bidi();
    init_portal();
    init_esm();
    init_animation_ChQ1vjiF();
    init_common_module_cKSwHniA();
    SCROLL_THROTTLE_MS = 20;
    MAT_TOOLTIP_SCROLL_STRATEGY = new InjectionToken("mat-tooltip-scroll-strategy", {
      providedIn: "root",
      factory: () => {
        const injector = inject(Injector);
        return () => createRepositionScrollStrategy(injector, { scrollThrottle: SCROLL_THROTTLE_MS });
      }
    });
    MAT_TOOLTIP_SCROLL_STRATEGY_FACTORY_PROVIDER = {
      provide: MAT_TOOLTIP_SCROLL_STRATEGY,
      deps: [],
      useFactory: MAT_TOOLTIP_SCROLL_STRATEGY_FACTORY
    };
    MAT_TOOLTIP_DEFAULT_OPTIONS = new InjectionToken("mat-tooltip-default-options", {
      providedIn: "root",
      factory: MAT_TOOLTIP_DEFAULT_OPTIONS_FACTORY
    });
    PANEL_CLASS = "tooltip-panel";
    passiveListenerOptions = normalizePassiveListenerOptions({ passive: true });
    MIN_VIEWPORT_TOOLTIP_THRESHOLD = 8;
    UNBOUNDED_ANCHOR_GAP = 8;
    MIN_HEIGHT = 24;
    MAX_WIDTH = 200;
    MatTooltip = class _MatTooltip {
      _elementRef = inject(ElementRef);
      _ngZone = inject(NgZone);
      _platform = inject(Platform);
      _ariaDescriber = inject(AriaDescriber);
      _focusMonitor = inject(FocusMonitor);
      _dir = inject(Directionality);
      _injector = inject(Injector);
      _viewContainerRef = inject(ViewContainerRef);
      _animationsDisabled = _animationsDisabled();
      _defaultOptions = inject(MAT_TOOLTIP_DEFAULT_OPTIONS, {
        optional: true
      });
      _overlayRef;
      _tooltipInstance;
      _overlayPanelClass;
      // Used for styling internally.
      _portal;
      _position = "below";
      _positionAtOrigin = false;
      _disabled = false;
      _tooltipClass;
      _viewInitialized = false;
      _pointerExitEventsInitialized = false;
      _tooltipComponent = TooltipComponent;
      _viewportMargin = 8;
      _currentPosition;
      _cssClassPrefix = "mat-mdc";
      _ariaDescriptionPending;
      _dirSubscribed = false;
      /** Allows the user to define the position of the tooltip relative to the parent element */
      get position() {
        return this._position;
      }
      set position(value) {
        if (value !== this._position) {
          this._position = value;
          if (this._overlayRef) {
            this._updatePosition(this._overlayRef);
            this._tooltipInstance?.show(0);
            this._overlayRef.updatePosition();
          }
        }
      }
      /**
       * Whether tooltip should be relative to the click or touch origin
       * instead of outside the element bounding box.
       */
      get positionAtOrigin() {
        return this._positionAtOrigin;
      }
      set positionAtOrigin(value) {
        this._positionAtOrigin = coerceBooleanProperty(value);
        this._detach();
        this._overlayRef = null;
      }
      /** Disables the display of the tooltip. */
      get disabled() {
        return this._disabled;
      }
      set disabled(value) {
        const isDisabled = coerceBooleanProperty(value);
        if (this._disabled !== isDisabled) {
          this._disabled = isDisabled;
          if (isDisabled) {
            this.hide(0);
          } else {
            this._setupPointerEnterEventsIfNeeded();
          }
          this._syncAriaDescription(this.message);
        }
      }
      /** The default delay in ms before showing the tooltip after show is called */
      get showDelay() {
        return this._showDelay;
      }
      set showDelay(value) {
        this._showDelay = coerceNumberProperty(value);
      }
      _showDelay;
      /** The default delay in ms before hiding the tooltip after hide is called */
      get hideDelay() {
        return this._hideDelay;
      }
      set hideDelay(value) {
        this._hideDelay = coerceNumberProperty(value);
        if (this._tooltipInstance) {
          this._tooltipInstance._mouseLeaveHideDelay = this._hideDelay;
        }
      }
      _hideDelay;
      /**
       * How touch gestures should be handled by the tooltip. On touch devices the tooltip directive
       * uses a long press gesture to show and hide, however it can conflict with the native browser
       * gestures. To work around the conflict, Angular Material disables native gestures on the
       * trigger, but that might not be desirable on particular elements (e.g. inputs and draggable
       * elements). The different values for this option configure the touch event handling as follows:
       * - `auto` - Enables touch gestures for all elements, but tries to avoid conflicts with native
       *   browser gestures on particular elements. In particular, it allows text selection on inputs
       *   and textareas, and preserves the native browser dragging on elements marked as `draggable`.
       * - `on` - Enables touch gestures for all elements and disables native
       *   browser gestures with no exceptions.
       * - `off` - Disables touch gestures. Note that this will prevent the tooltip from
       *   showing on touch devices.
       */
      touchGestures = "auto";
      /** The message to be displayed in the tooltip */
      get message() {
        return this._message;
      }
      set message(value) {
        const oldMessage = this._message;
        this._message = value != null ? String(value).trim() : "";
        if (!this._message && this._isTooltipVisible()) {
          this.hide(0);
        } else {
          this._setupPointerEnterEventsIfNeeded();
          this._updateTooltipMessage();
        }
        this._syncAriaDescription(oldMessage);
      }
      _message = "";
      /** Classes to be passed to the tooltip. Supports the same syntax as `ngClass`. */
      get tooltipClass() {
        return this._tooltipClass;
      }
      set tooltipClass(value) {
        this._tooltipClass = value;
        if (this._tooltipInstance) {
          this._setTooltipClass(this._tooltipClass);
        }
      }
      /** Manually-bound passive event listeners. */
      _passiveListeners = [];
      /** Timer started at the last `touchstart` event. */
      _touchstartTimeout = null;
      /** Emits when the component is destroyed. */
      _destroyed = new Subject();
      /** Whether ngOnDestroyed has been called. */
      _isDestroyed = false;
      constructor() {
        const defaultOptions = this._defaultOptions;
        if (defaultOptions) {
          this._showDelay = defaultOptions.showDelay;
          this._hideDelay = defaultOptions.hideDelay;
          if (defaultOptions.position) {
            this.position = defaultOptions.position;
          }
          if (defaultOptions.positionAtOrigin) {
            this.positionAtOrigin = defaultOptions.positionAtOrigin;
          }
          if (defaultOptions.touchGestures) {
            this.touchGestures = defaultOptions.touchGestures;
          }
          if (defaultOptions.tooltipClass) {
            this.tooltipClass = defaultOptions.tooltipClass;
          }
        }
        this._viewportMargin = MIN_VIEWPORT_TOOLTIP_THRESHOLD;
      }
      ngAfterViewInit() {
        this._viewInitialized = true;
        this._setupPointerEnterEventsIfNeeded();
        this._focusMonitor.monitor(this._elementRef).pipe(takeUntil(this._destroyed)).subscribe((origin) => {
          if (!origin) {
            this._ngZone.run(() => this.hide(0));
          } else if (origin === "keyboard") {
            this._ngZone.run(() => this.show());
          }
        });
      }
      /**
       * Dispose the tooltip when destroyed.
       */
      ngOnDestroy() {
        const nativeElement = this._elementRef.nativeElement;
        if (this._touchstartTimeout) {
          clearTimeout(this._touchstartTimeout);
        }
        if (this._overlayRef) {
          this._overlayRef.dispose();
          this._tooltipInstance = null;
        }
        this._passiveListeners.forEach(([event, listener]) => {
          nativeElement.removeEventListener(event, listener, passiveListenerOptions);
        });
        this._passiveListeners.length = 0;
        this._destroyed.next();
        this._destroyed.complete();
        this._isDestroyed = true;
        this._ariaDescriber.removeDescription(nativeElement, this.message, "tooltip");
        this._focusMonitor.stopMonitoring(nativeElement);
      }
      /** Shows the tooltip after the delay in ms, defaults to tooltip-delay-show or 0ms if no input */
      show(delay = this.showDelay, origin) {
        if (this.disabled || !this.message || this._isTooltipVisible()) {
          this._tooltipInstance?._cancelPendingAnimations();
          return;
        }
        const overlayRef = this._createOverlay(origin);
        this._detach();
        this._portal = this._portal || new ComponentPortal(this._tooltipComponent, this._viewContainerRef);
        const instance = this._tooltipInstance = overlayRef.attach(this._portal).instance;
        instance._triggerElement = this._elementRef.nativeElement;
        instance._mouseLeaveHideDelay = this._hideDelay;
        instance.afterHidden().pipe(takeUntil(this._destroyed)).subscribe(() => this._detach());
        this._setTooltipClass(this._tooltipClass);
        this._updateTooltipMessage();
        instance.show(delay);
      }
      /** Hides the tooltip after the delay in ms, defaults to tooltip-delay-hide or 0ms if no input */
      hide(delay = this.hideDelay) {
        const instance = this._tooltipInstance;
        if (instance) {
          if (instance.isVisible()) {
            instance.hide(delay);
          } else {
            instance._cancelPendingAnimations();
            this._detach();
          }
        }
      }
      /** Shows/hides the tooltip */
      toggle(origin) {
        this._isTooltipVisible() ? this.hide() : this.show(void 0, origin);
      }
      /** Returns true if the tooltip is currently visible to the user */
      _isTooltipVisible() {
        return !!this._tooltipInstance && this._tooltipInstance.isVisible();
      }
      /** Create the overlay config and position strategy */
      _createOverlay(origin) {
        if (this._overlayRef) {
          const existingStrategy = this._overlayRef.getConfig().positionStrategy;
          if ((!this.positionAtOrigin || !origin) && existingStrategy._origin instanceof ElementRef) {
            return this._overlayRef;
          }
          this._detach();
        }
        const scrollableAncestors = this._injector.get(ScrollDispatcher).getAncestorScrollContainers(this._elementRef);
        const panelClass = `${this._cssClassPrefix}-${PANEL_CLASS}`;
        const strategy = createFlexibleConnectedPositionStrategy(this._injector, this.positionAtOrigin ? origin || this._elementRef : this._elementRef).withTransformOriginOn(`.${this._cssClassPrefix}-tooltip`).withFlexibleDimensions(false).withViewportMargin(this._viewportMargin).withScrollableContainers(scrollableAncestors);
        strategy.positionChanges.pipe(takeUntil(this._destroyed)).subscribe((change) => {
          this._updateCurrentPositionClass(change.connectionPair);
          if (this._tooltipInstance) {
            if (change.scrollableViewProperties.isOverlayClipped && this._tooltipInstance.isVisible()) {
              this._ngZone.run(() => this.hide(0));
            }
          }
        });
        this._overlayRef = createOverlayRef(this._injector, {
          direction: this._dir,
          positionStrategy: strategy,
          panelClass: this._overlayPanelClass ? [...this._overlayPanelClass, panelClass] : panelClass,
          scrollStrategy: this._injector.get(MAT_TOOLTIP_SCROLL_STRATEGY)(),
          disableAnimations: this._animationsDisabled
        });
        this._updatePosition(this._overlayRef);
        this._overlayRef.detachments().pipe(takeUntil(this._destroyed)).subscribe(() => this._detach());
        this._overlayRef.outsidePointerEvents().pipe(takeUntil(this._destroyed)).subscribe(() => this._tooltipInstance?._handleBodyInteraction());
        this._overlayRef.keydownEvents().pipe(takeUntil(this._destroyed)).subscribe((event) => {
          if (this._isTooltipVisible() && event.keyCode === ESCAPE && !hasModifierKey(event)) {
            event.preventDefault();
            event.stopPropagation();
            this._ngZone.run(() => this.hide(0));
          }
        });
        if (this._defaultOptions?.disableTooltipInteractivity) {
          this._overlayRef.addPanelClass(`${this._cssClassPrefix}-tooltip-panel-non-interactive`);
        }
        if (!this._dirSubscribed) {
          this._dirSubscribed = true;
          this._dir.change.pipe(takeUntil(this._destroyed)).subscribe(() => {
            if (this._overlayRef) {
              this._updatePosition(this._overlayRef);
            }
          });
        }
        return this._overlayRef;
      }
      /** Detaches the currently-attached tooltip. */
      _detach() {
        if (this._overlayRef && this._overlayRef.hasAttached()) {
          this._overlayRef.detach();
        }
        this._tooltipInstance = null;
      }
      /** Updates the position of the current tooltip. */
      _updatePosition(overlayRef) {
        const position = overlayRef.getConfig().positionStrategy;
        const origin = this._getOrigin();
        const overlay = this._getOverlayPosition();
        position.withPositions([
          this._addOffset(__spreadValues(__spreadValues({}, origin.main), overlay.main)),
          this._addOffset(__spreadValues(__spreadValues({}, origin.fallback), overlay.fallback))
        ]);
      }
      /** Adds the configured offset to a position. Used as a hook for child classes. */
      _addOffset(position) {
        const offset = UNBOUNDED_ANCHOR_GAP;
        const isLtr = !this._dir || this._dir.value == "ltr";
        if (position.originY === "top") {
          position.offsetY = -offset;
        } else if (position.originY === "bottom") {
          position.offsetY = offset;
        } else if (position.originX === "start") {
          position.offsetX = isLtr ? -offset : offset;
        } else if (position.originX === "end") {
          position.offsetX = isLtr ? offset : -offset;
        }
        return position;
      }
      /**
       * Returns the origin position and a fallback position based on the user's position preference.
       * The fallback position is the inverse of the origin (e.g. `'below' -> 'above'`).
       */
      _getOrigin() {
        const isLtr = !this._dir || this._dir.value == "ltr";
        const position = this.position;
        let originPosition;
        if (position == "above" || position == "below") {
          originPosition = { originX: "center", originY: position == "above" ? "top" : "bottom" };
        } else if (position == "before" || position == "left" && isLtr || position == "right" && !isLtr) {
          originPosition = { originX: "start", originY: "center" };
        } else if (position == "after" || position == "right" && isLtr || position == "left" && !isLtr) {
          originPosition = { originX: "end", originY: "center" };
        } else if (typeof ngDevMode === "undefined" || ngDevMode) {
          throw getMatTooltipInvalidPositionError(position);
        }
        const { x, y } = this._invertPosition(originPosition.originX, originPosition.originY);
        return {
          main: originPosition,
          fallback: { originX: x, originY: y }
        };
      }
      /** Returns the overlay position and a fallback position based on the user's preference */
      _getOverlayPosition() {
        const isLtr = !this._dir || this._dir.value == "ltr";
        const position = this.position;
        let overlayPosition;
        if (position == "above") {
          overlayPosition = { overlayX: "center", overlayY: "bottom" };
        } else if (position == "below") {
          overlayPosition = { overlayX: "center", overlayY: "top" };
        } else if (position == "before" || position == "left" && isLtr || position == "right" && !isLtr) {
          overlayPosition = { overlayX: "end", overlayY: "center" };
        } else if (position == "after" || position == "right" && isLtr || position == "left" && !isLtr) {
          overlayPosition = { overlayX: "start", overlayY: "center" };
        } else if (typeof ngDevMode === "undefined" || ngDevMode) {
          throw getMatTooltipInvalidPositionError(position);
        }
        const { x, y } = this._invertPosition(overlayPosition.overlayX, overlayPosition.overlayY);
        return {
          main: overlayPosition,
          fallback: { overlayX: x, overlayY: y }
        };
      }
      /** Updates the tooltip message and repositions the overlay according to the new message length */
      _updateTooltipMessage() {
        if (this._tooltipInstance) {
          this._tooltipInstance.message = this.message;
          this._tooltipInstance._markForCheck();
          afterNextRender(() => {
            if (this._tooltipInstance) {
              this._overlayRef.updatePosition();
            }
          }, {
            injector: this._injector
          });
        }
      }
      /** Updates the tooltip class */
      _setTooltipClass(tooltipClass) {
        if (this._tooltipInstance) {
          this._tooltipInstance.tooltipClass = tooltipClass;
          this._tooltipInstance._markForCheck();
        }
      }
      /** Inverts an overlay position. */
      _invertPosition(x, y) {
        if (this.position === "above" || this.position === "below") {
          if (y === "top") {
            y = "bottom";
          } else if (y === "bottom") {
            y = "top";
          }
        } else {
          if (x === "end") {
            x = "start";
          } else if (x === "start") {
            x = "end";
          }
        }
        return { x, y };
      }
      /** Updates the class on the overlay panel based on the current position of the tooltip. */
      _updateCurrentPositionClass(connectionPair) {
        const { overlayY, originX, originY } = connectionPair;
        let newPosition;
        if (overlayY === "center") {
          if (this._dir && this._dir.value === "rtl") {
            newPosition = originX === "end" ? "left" : "right";
          } else {
            newPosition = originX === "start" ? "left" : "right";
          }
        } else {
          newPosition = overlayY === "bottom" && originY === "top" ? "above" : "below";
        }
        if (newPosition !== this._currentPosition) {
          const overlayRef = this._overlayRef;
          if (overlayRef) {
            const classPrefix = `${this._cssClassPrefix}-${PANEL_CLASS}-`;
            overlayRef.removePanelClass(classPrefix + this._currentPosition);
            overlayRef.addPanelClass(classPrefix + newPosition);
          }
          this._currentPosition = newPosition;
        }
      }
      /** Binds the pointer events to the tooltip trigger. */
      _setupPointerEnterEventsIfNeeded() {
        if (this._disabled || !this.message || !this._viewInitialized || this._passiveListeners.length) {
          return;
        }
        if (this._platformSupportsMouseEvents()) {
          this._passiveListeners.push([
            "mouseenter",
            (event) => {
              this._setupPointerExitEventsIfNeeded();
              let point = void 0;
              if (event.x !== void 0 && event.y !== void 0) {
                point = event;
              }
              this.show(void 0, point);
            }
          ]);
        } else if (this.touchGestures !== "off") {
          this._disableNativeGesturesIfNecessary();
          this._passiveListeners.push([
            "touchstart",
            (event) => {
              const touch = event.targetTouches?.[0];
              const origin = touch ? { x: touch.clientX, y: touch.clientY } : void 0;
              this._setupPointerExitEventsIfNeeded();
              if (this._touchstartTimeout) {
                clearTimeout(this._touchstartTimeout);
              }
              const DEFAULT_LONGPRESS_DELAY = 500;
              this._touchstartTimeout = setTimeout(() => {
                this._touchstartTimeout = null;
                this.show(void 0, origin);
              }, this._defaultOptions?.touchLongPressShowDelay ?? DEFAULT_LONGPRESS_DELAY);
            }
          ]);
        }
        this._addListeners(this._passiveListeners);
      }
      _setupPointerExitEventsIfNeeded() {
        if (this._pointerExitEventsInitialized) {
          return;
        }
        this._pointerExitEventsInitialized = true;
        const exitListeners = [];
        if (this._platformSupportsMouseEvents()) {
          exitListeners.push([
            "mouseleave",
            (event) => {
              const newTarget = event.relatedTarget;
              if (!newTarget || !this._overlayRef?.overlayElement.contains(newTarget)) {
                this.hide();
              }
            }
          ], ["wheel", (event) => this._wheelListener(event)]);
        } else if (this.touchGestures !== "off") {
          this._disableNativeGesturesIfNecessary();
          const touchendListener = () => {
            if (this._touchstartTimeout) {
              clearTimeout(this._touchstartTimeout);
            }
            this.hide(this._defaultOptions?.touchendHideDelay);
          };
          exitListeners.push(["touchend", touchendListener], ["touchcancel", touchendListener]);
        }
        this._addListeners(exitListeners);
        this._passiveListeners.push(...exitListeners);
      }
      _addListeners(listeners) {
        listeners.forEach(([event, listener]) => {
          this._elementRef.nativeElement.addEventListener(event, listener, passiveListenerOptions);
        });
      }
      _platformSupportsMouseEvents() {
        return !this._platform.IOS && !this._platform.ANDROID;
      }
      /** Listener for the `wheel` event on the element. */
      _wheelListener(event) {
        if (this._isTooltipVisible()) {
          const elementUnderPointer = this._injector.get(DOCUMENT).elementFromPoint(event.clientX, event.clientY);
          const element = this._elementRef.nativeElement;
          if (elementUnderPointer !== element && !element.contains(elementUnderPointer)) {
            this.hide();
          }
        }
      }
      /** Disables the native browser gestures, based on how the tooltip has been configured. */
      _disableNativeGesturesIfNecessary() {
        const gestures = this.touchGestures;
        if (gestures !== "off") {
          const element = this._elementRef.nativeElement;
          const style = element.style;
          if (gestures === "on" || element.nodeName !== "INPUT" && element.nodeName !== "TEXTAREA") {
            style.userSelect = style.msUserSelect = style.webkitUserSelect = style.MozUserSelect = "none";
          }
          if (gestures === "on" || !element.draggable) {
            style.webkitUserDrag = "none";
          }
          style.touchAction = "none";
          style.webkitTapHighlightColor = "transparent";
        }
      }
      /** Updates the tooltip's ARIA description based on it current state. */
      _syncAriaDescription(oldMessage) {
        if (this._ariaDescriptionPending) {
          return;
        }
        this._ariaDescriptionPending = true;
        this._ariaDescriber.removeDescription(this._elementRef.nativeElement, oldMessage, "tooltip");
        if (!this._isDestroyed) {
          afterNextRender({
            write: () => {
              this._ariaDescriptionPending = false;
              if (this.message && !this.disabled) {
                this._ariaDescriber.describe(this._elementRef.nativeElement, this.message, "tooltip");
              }
            }
          }, { injector: this._injector });
        }
      }
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: _MatTooltip, deps: [], target: FactoryTarget.Directive });
      static \u0275dir = \u0275\u0275ngDeclareDirective({ minVersion: "14.0.0", version: "20.0.0", type: _MatTooltip, isStandalone: true, selector: "[matTooltip]", inputs: { position: ["matTooltipPosition", "position"], positionAtOrigin: ["matTooltipPositionAtOrigin", "positionAtOrigin"], disabled: ["matTooltipDisabled", "disabled"], showDelay: ["matTooltipShowDelay", "showDelay"], hideDelay: ["matTooltipHideDelay", "hideDelay"], touchGestures: ["matTooltipTouchGestures", "touchGestures"], message: ["matTooltip", "message"], tooltipClass: ["matTooltipClass", "tooltipClass"] }, host: { properties: { "class.mat-mdc-tooltip-disabled": "disabled" }, classAttribute: "mat-mdc-tooltip-trigger" }, exportAs: ["matTooltip"], ngImport: core_exports });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: MatTooltip, decorators: [{
      type: Directive,
      args: [{
        selector: "[matTooltip]",
        exportAs: "matTooltip",
        host: {
          "class": "mat-mdc-tooltip-trigger",
          "[class.mat-mdc-tooltip-disabled]": "disabled"
        }
      }]
    }], ctorParameters: () => [], propDecorators: { position: [{
      type: Input,
      args: ["matTooltipPosition"]
    }], positionAtOrigin: [{
      type: Input,
      args: ["matTooltipPositionAtOrigin"]
    }], disabled: [{
      type: Input,
      args: ["matTooltipDisabled"]
    }], showDelay: [{
      type: Input,
      args: ["matTooltipShowDelay"]
    }], hideDelay: [{
      type: Input,
      args: ["matTooltipHideDelay"]
    }], touchGestures: [{
      type: Input,
      args: ["matTooltipTouchGestures"]
    }], message: [{
      type: Input,
      args: ["matTooltip"]
    }], tooltipClass: [{
      type: Input,
      args: ["matTooltipClass"]
    }] } });
    TooltipComponent = class _TooltipComponent {
      _changeDetectorRef = inject(ChangeDetectorRef);
      _elementRef = inject(ElementRef);
      /* Whether the tooltip text overflows to multiple lines */
      _isMultiline = false;
      /** Message to display in the tooltip */
      message;
      /** Classes to be added to the tooltip. Supports the same syntax as `ngClass`. */
      tooltipClass;
      /** The timeout ID of any current timer set to show the tooltip */
      _showTimeoutId;
      /** The timeout ID of any current timer set to hide the tooltip */
      _hideTimeoutId;
      /** Element that caused the tooltip to open. */
      _triggerElement;
      /** Amount of milliseconds to delay the closing sequence. */
      _mouseLeaveHideDelay;
      /** Whether animations are currently disabled. */
      _animationsDisabled = _animationsDisabled();
      /** Reference to the internal tooltip element. */
      _tooltip;
      /** Whether interactions on the page should close the tooltip */
      _closeOnInteraction = false;
      /** Whether the tooltip is currently visible. */
      _isVisible = false;
      /** Subject for notifying that the tooltip has been hidden from the view */
      _onHide = new Subject();
      /** Name of the show animation and the class that toggles it. */
      _showAnimation = "mat-mdc-tooltip-show";
      /** Name of the hide animation and the class that toggles it. */
      _hideAnimation = "mat-mdc-tooltip-hide";
      constructor() {
      }
      /**
       * Shows the tooltip with an animation originating from the provided origin
       * @param delay Amount of milliseconds to the delay showing the tooltip.
       */
      show(delay) {
        if (this._hideTimeoutId != null) {
          clearTimeout(this._hideTimeoutId);
        }
        this._showTimeoutId = setTimeout(() => {
          this._toggleVisibility(true);
          this._showTimeoutId = void 0;
        }, delay);
      }
      /**
       * Begins the animation to hide the tooltip after the provided delay in ms.
       * @param delay Amount of milliseconds to delay showing the tooltip.
       */
      hide(delay) {
        if (this._showTimeoutId != null) {
          clearTimeout(this._showTimeoutId);
        }
        this._hideTimeoutId = setTimeout(() => {
          this._toggleVisibility(false);
          this._hideTimeoutId = void 0;
        }, delay);
      }
      /** Returns an observable that notifies when the tooltip has been hidden from view. */
      afterHidden() {
        return this._onHide;
      }
      /** Whether the tooltip is being displayed. */
      isVisible() {
        return this._isVisible;
      }
      ngOnDestroy() {
        this._cancelPendingAnimations();
        this._onHide.complete();
        this._triggerElement = null;
      }
      /**
       * Interactions on the HTML body should close the tooltip immediately as defined in the
       * material design spec.
       * https://material.io/design/components/tooltips.html#behavior
       */
      _handleBodyInteraction() {
        if (this._closeOnInteraction) {
          this.hide(0);
        }
      }
      /**
       * Marks that the tooltip needs to be checked in the next change detection run.
       * Mainly used for rendering the initial text before positioning a tooltip, which
       * can be problematic in components with OnPush change detection.
       */
      _markForCheck() {
        this._changeDetectorRef.markForCheck();
      }
      _handleMouseLeave({ relatedTarget }) {
        if (!relatedTarget || !this._triggerElement.contains(relatedTarget)) {
          if (this.isVisible()) {
            this.hide(this._mouseLeaveHideDelay);
          } else {
            this._finalizeAnimation(false);
          }
        }
      }
      /**
       * Callback for when the timeout in this.show() gets completed.
       * This method is only needed by the mdc-tooltip, and so it is only implemented
       * in the mdc-tooltip, not here.
       */
      _onShow() {
        this._isMultiline = this._isTooltipMultiline();
        this._markForCheck();
      }
      /** Whether the tooltip text has overflown to the next line */
      _isTooltipMultiline() {
        const rect = this._elementRef.nativeElement.getBoundingClientRect();
        return rect.height > MIN_HEIGHT && rect.width >= MAX_WIDTH;
      }
      /** Event listener dispatched when an animation on the tooltip finishes. */
      _handleAnimationEnd({ animationName }) {
        if (animationName === this._showAnimation || animationName === this._hideAnimation) {
          this._finalizeAnimation(animationName === this._showAnimation);
        }
      }
      /** Cancels any pending animation sequences. */
      _cancelPendingAnimations() {
        if (this._showTimeoutId != null) {
          clearTimeout(this._showTimeoutId);
        }
        if (this._hideTimeoutId != null) {
          clearTimeout(this._hideTimeoutId);
        }
        this._showTimeoutId = this._hideTimeoutId = void 0;
      }
      /** Handles the cleanup after an animation has finished. */
      _finalizeAnimation(toVisible) {
        if (toVisible) {
          this._closeOnInteraction = true;
        } else if (!this.isVisible()) {
          this._onHide.next();
        }
      }
      /** Toggles the visibility of the tooltip element. */
      _toggleVisibility(isVisible) {
        const tooltip = this._tooltip.nativeElement;
        const showClass = this._showAnimation;
        const hideClass = this._hideAnimation;
        tooltip.classList.remove(isVisible ? hideClass : showClass);
        tooltip.classList.add(isVisible ? showClass : hideClass);
        if (this._isVisible !== isVisible) {
          this._isVisible = isVisible;
          this._changeDetectorRef.markForCheck();
        }
        if (isVisible && !this._animationsDisabled && typeof getComputedStyle === "function") {
          const styles = getComputedStyle(tooltip);
          if (styles.getPropertyValue("animation-duration") === "0s" || styles.getPropertyValue("animation-name") === "none") {
            this._animationsDisabled = true;
          }
        }
        if (isVisible) {
          this._onShow();
        }
        if (this._animationsDisabled) {
          tooltip.classList.add("_mat-animation-noopable");
          this._finalizeAnimation(isVisible);
        }
      }
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: _TooltipComponent, deps: [], target: FactoryTarget.Component });
      static \u0275cmp = \u0275\u0275ngDeclareComponent({ minVersion: "14.0.0", version: "20.0.0", type: _TooltipComponent, isStandalone: true, selector: "mat-tooltip-component", host: { attributes: { "aria-hidden": "true" }, listeners: { "mouseleave": "_handleMouseLeave($event)" } }, viewQueries: [{ propertyName: "_tooltip", first: true, predicate: ["tooltip"], descendants: true, static: true }], ngImport: core_exports, template: '<div\n  #tooltip\n  class="mdc-tooltip mat-mdc-tooltip"\n  [ngClass]="tooltipClass"\n  (animationend)="_handleAnimationEnd($event)"\n  [class.mdc-tooltip--multiline]="_isMultiline">\n  <div class="mat-mdc-tooltip-surface mdc-tooltip__surface">{{message}}</div>\n</div>\n', styles: ['.mat-mdc-tooltip{position:relative;transform:scale(0);display:inline-flex}.mat-mdc-tooltip::before{content:"";top:0;right:0;bottom:0;left:0;z-index:-1;position:absolute}.mat-mdc-tooltip-panel-below .mat-mdc-tooltip::before{top:-8px}.mat-mdc-tooltip-panel-above .mat-mdc-tooltip::before{bottom:-8px}.mat-mdc-tooltip-panel-right .mat-mdc-tooltip::before{left:-8px}.mat-mdc-tooltip-panel-left .mat-mdc-tooltip::before{right:-8px}.mat-mdc-tooltip._mat-animation-noopable{animation:none;transform:scale(1)}.mat-mdc-tooltip-surface{word-break:normal;overflow-wrap:anywhere;padding:4px 8px;min-width:40px;max-width:200px;min-height:24px;max-height:40vh;box-sizing:border-box;overflow:hidden;text-align:center;will-change:transform,opacity;background-color:var(--mat-tooltip-container-color, var(--mat-sys-inverse-surface));color:var(--mat-tooltip-supporting-text-color, var(--mat-sys-inverse-on-surface));border-radius:var(--mat-tooltip-container-shape, var(--mat-sys-corner-extra-small));font-family:var(--mat-tooltip-supporting-text-font, var(--mat-sys-body-small-font));font-size:var(--mat-tooltip-supporting-text-size, var(--mat-sys-body-small-size));font-weight:var(--mat-tooltip-supporting-text-weight, var(--mat-sys-body-small-weight));line-height:var(--mat-tooltip-supporting-text-line-height, var(--mat-sys-body-small-line-height));letter-spacing:var(--mat-tooltip-supporting-text-tracking, var(--mat-sys-body-small-tracking))}.mat-mdc-tooltip-surface::before{position:absolute;box-sizing:border-box;width:100%;height:100%;top:0;left:0;border:1px solid rgba(0,0,0,0);border-radius:inherit;content:"";pointer-events:none}.mdc-tooltip--multiline .mat-mdc-tooltip-surface{text-align:left}[dir=rtl] .mdc-tooltip--multiline .mat-mdc-tooltip-surface{text-align:right}.mat-mdc-tooltip-panel{line-height:normal}.mat-mdc-tooltip-panel.mat-mdc-tooltip-panel-non-interactive{pointer-events:none}@keyframes mat-mdc-tooltip-show{0%{opacity:0;transform:scale(0.8)}100%{opacity:1;transform:scale(1)}}@keyframes mat-mdc-tooltip-hide{0%{opacity:1;transform:scale(1)}100%{opacity:0;transform:scale(0.8)}}.mat-mdc-tooltip-show{animation:mat-mdc-tooltip-show 150ms cubic-bezier(0, 0, 0.2, 1) forwards}.mat-mdc-tooltip-hide{animation:mat-mdc-tooltip-hide 75ms cubic-bezier(0.4, 0, 1, 1) forwards}\n'], dependencies: [{ kind: "directive", type: NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }], changeDetection: ChangeDetectionStrategy.OnPush, encapsulation: ViewEncapsulation.None });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: TooltipComponent, decorators: [{
      type: Component,
      args: [{ selector: "mat-tooltip-component", encapsulation: ViewEncapsulation.None, changeDetection: ChangeDetectionStrategy.OnPush, host: {
        "(mouseleave)": "_handleMouseLeave($event)",
        "aria-hidden": "true"
      }, imports: [NgClass], template: '<div\n  #tooltip\n  class="mdc-tooltip mat-mdc-tooltip"\n  [ngClass]="tooltipClass"\n  (animationend)="_handleAnimationEnd($event)"\n  [class.mdc-tooltip--multiline]="_isMultiline">\n  <div class="mat-mdc-tooltip-surface mdc-tooltip__surface">{{message}}</div>\n</div>\n', styles: ['.mat-mdc-tooltip{position:relative;transform:scale(0);display:inline-flex}.mat-mdc-tooltip::before{content:"";top:0;right:0;bottom:0;left:0;z-index:-1;position:absolute}.mat-mdc-tooltip-panel-below .mat-mdc-tooltip::before{top:-8px}.mat-mdc-tooltip-panel-above .mat-mdc-tooltip::before{bottom:-8px}.mat-mdc-tooltip-panel-right .mat-mdc-tooltip::before{left:-8px}.mat-mdc-tooltip-panel-left .mat-mdc-tooltip::before{right:-8px}.mat-mdc-tooltip._mat-animation-noopable{animation:none;transform:scale(1)}.mat-mdc-tooltip-surface{word-break:normal;overflow-wrap:anywhere;padding:4px 8px;min-width:40px;max-width:200px;min-height:24px;max-height:40vh;box-sizing:border-box;overflow:hidden;text-align:center;will-change:transform,opacity;background-color:var(--mat-tooltip-container-color, var(--mat-sys-inverse-surface));color:var(--mat-tooltip-supporting-text-color, var(--mat-sys-inverse-on-surface));border-radius:var(--mat-tooltip-container-shape, var(--mat-sys-corner-extra-small));font-family:var(--mat-tooltip-supporting-text-font, var(--mat-sys-body-small-font));font-size:var(--mat-tooltip-supporting-text-size, var(--mat-sys-body-small-size));font-weight:var(--mat-tooltip-supporting-text-weight, var(--mat-sys-body-small-weight));line-height:var(--mat-tooltip-supporting-text-line-height, var(--mat-sys-body-small-line-height));letter-spacing:var(--mat-tooltip-supporting-text-tracking, var(--mat-sys-body-small-tracking))}.mat-mdc-tooltip-surface::before{position:absolute;box-sizing:border-box;width:100%;height:100%;top:0;left:0;border:1px solid rgba(0,0,0,0);border-radius:inherit;content:"";pointer-events:none}.mdc-tooltip--multiline .mat-mdc-tooltip-surface{text-align:left}[dir=rtl] .mdc-tooltip--multiline .mat-mdc-tooltip-surface{text-align:right}.mat-mdc-tooltip-panel{line-height:normal}.mat-mdc-tooltip-panel.mat-mdc-tooltip-panel-non-interactive{pointer-events:none}@keyframes mat-mdc-tooltip-show{0%{opacity:0;transform:scale(0.8)}100%{opacity:1;transform:scale(1)}}@keyframes mat-mdc-tooltip-hide{0%{opacity:1;transform:scale(1)}100%{opacity:0;transform:scale(0.8)}}.mat-mdc-tooltip-show{animation:mat-mdc-tooltip-show 150ms cubic-bezier(0, 0, 0.2, 1) forwards}.mat-mdc-tooltip-hide{animation:mat-mdc-tooltip-hide 75ms cubic-bezier(0.4, 0, 1, 1) forwards}\n'] }]
    }], ctorParameters: () => [], propDecorators: { _tooltip: [{
      type: ViewChild,
      args: ["tooltip", {
        // Use a static query here since we interact directly with
        // the DOM which can happen before `ngAfterViewInit`.
        static: true
      }]
    }] } });
    MatTooltipModule = class _MatTooltipModule {
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: _MatTooltipModule, deps: [], target: FactoryTarget.NgModule });
      static \u0275mod = \u0275\u0275ngDeclareNgModule({ minVersion: "14.0.0", version: "20.0.0", ngImport: core_exports, type: _MatTooltipModule, imports: [A11yModule, OverlayModule, MatCommonModule, MatTooltip, TooltipComponent], exports: [MatTooltip, TooltipComponent, MatCommonModule, CdkScrollableModule] });
      static \u0275inj = \u0275\u0275ngDeclareInjector({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: _MatTooltipModule, providers: [MAT_TOOLTIP_SCROLL_STRATEGY_FACTORY_PROVIDER], imports: [A11yModule, OverlayModule, MatCommonModule, MatCommonModule, CdkScrollableModule] });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: MatTooltipModule, decorators: [{
      type: NgModule,
      args: [{
        imports: [A11yModule, OverlayModule, MatCommonModule, MatTooltip, TooltipComponent],
        exports: [MatTooltip, TooltipComponent, MatCommonModule, CdkScrollableModule],
        providers: [MAT_TOOLTIP_SCROLL_STRATEGY_FACTORY_PROVIDER]
      }]
    }] });
  }
});

// node_modules/@angular/material/fesm2022/tooltip.mjs
var init_tooltip = __esm({
  "node_modules/@angular/material/fesm2022/tooltip.mjs"() {
    "use strict";
    init_module_DVPFZEhf();
  }
});

// src/app/features/ui-interface/base-ui/tooltip/tooltip.component.ts
var TooltipComponent2;
var init_tooltip_component3 = __esm({
  "src/app/features/ui-interface/base-ui/tooltip/tooltip.component.ts"() {
    "use strict";
    init_tslib_es6();
    init_tooltip_component();
    init_tooltip_component2();
    init_core();
    init_common();
    init_tooltip();
    TooltipComponent2 = class TooltipComponent3 {
      html = `<span class="btn-block btn-danger well-sm">Never trust not sanitized HTML!!!</span>`;
    };
    TooltipComponent2 = __decorate([
      Component({
        selector: "app-tooltip",
        template: tooltip_component_default,
        imports: [CommonModule, MatTooltipModule],
        styles: [tooltip_component_default2]
      })
    ], TooltipComponent2);
  }
});

// src/app/features/ui-interface/base-ui/tooltip/tooltip.component.spec.ts
var require_tooltip_component_spec = __commonJS({
  "src/app/features/ui-interface/base-ui/tooltip/tooltip.component.spec.ts"(exports) {
    init_testing();
    init_tooltip_component3();
    describe("TooltipComponent", () => {
      let component;
      let fixture;
      beforeEach(() => __async(null, null, function* () {
        yield TestBed.configureTestingModule({
          declarations: [TooltipComponent2]
        }).compileComponents();
        fixture = TestBed.createComponent(TooltipComponent2);
        component = fixture.componentInstance;
        fixture.detectChanges();
      }));
      it("should create", () => {
        expect(component).toBeTruthy();
      });
    });
  }
});
export default require_tooltip_component_spec();
//# sourceMappingURL=spec-app-features-ui-interface-base-ui-tooltip-tooltip.component.spec.js.map

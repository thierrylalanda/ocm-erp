import {
  MatButtonModule
} from "./chunk-2LPZIB2S.js";
import {
  SiteService
} from "./chunk-RZDGB625.js";
import {
  MatInputModule
} from "./chunk-YMQR4YQC.js";
import {
  MatFormFieldModule,
  MatSelectModule
} from "./chunk-SFILXEE7.js";
import {
  BasePortalOutlet,
  CdkPortalOutlet,
  ComponentPortal,
  OverlayConfig,
  OverlayContainer,
  OverlayModule,
  OverlayRef,
  PortalModule,
  TemplatePortal,
  createBlockScrollStrategy,
  createGlobalPositionStrategy,
  createOverlayRef
} from "./chunk-A5LCI4UV.js";
import "./chunk-QSJG5NOL.js";
import "./chunk-BVBMCBML.js";
import "./chunk-KA6DODO3.js";
import {
  _animationsDisabled
} from "./chunk-KEUB2FQU.js";
import {
  A11yModule,
  ESCAPE,
  FocusMonitor,
  FocusTrapFactory,
  InteractivityChecker,
  MatCommonModule,
  hasModifierKey
} from "./chunk-T3U7HIOV.js";
import {
  CdkScrollable
} from "./chunk-AZWQ5RV7.js";
import {
  _IdGenerator
} from "./chunk-RIL4TINW.js";
import "./chunk-5H6GXSFV.js";
import "./chunk-YETY7SH2.js";
import "./chunk-M4MC2D7Y.js";
import "./chunk-UNWSAGEL.js";
import {
  _getFocusedElementPierceShadowDom
} from "./chunk-YWH7SLE3.js";
import {
  Directionality,
  Platform,
  coerceNumberProperty
} from "./chunk-YKL5IIDX.js";
import "./chunk-7SCMAJTM.js";
import {
  TranslatePipe
} from "./chunk-VQ4LU4VK.js";
import {
  CheckboxControlValueAccessor,
  DefaultValueAccessor,
  FormBuilder,
  FormControlName,
  FormGroupDirective,
  FormsModule,
  MaxLengthValidator,
  MinValidator,
  NgControlStatus,
  NgControlStatusGroup,
  NgModel,
  NgSelectOption,
  NumberValueAccessor,
  ReactiveFormsModule,
  SelectControlValueAccessor,
  Validators,
  ɵNgNoValidate,
  ɵNgSelectMultipleOption
} from "./chunk-BLAAMQ2R.js";
import "./chunk-U2VXEBUE.js";
import "./chunk-SCUCSJ4X.js";
import "./chunk-PCRWA3NK.js";
import "./chunk-ZM5T2PIK.js";
import "./chunk-PQZYD7EB.js";
import {
  CommonModule,
  NgForOf,
  NgIf,
  SlicePipe
} from "./chunk-ZV6UYXXV.js";
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  DOCUMENT,
  Directive,
  ElementRef,
  EventEmitter,
  Injectable,
  InjectionToken,
  Injector,
  Input,
  NgModule,
  NgZone,
  Renderer2,
  Subject,
  TemplateRef,
  ViewChild,
  ViewEncapsulation,
  afterNextRender,
  debounceTime,
  defer,
  distinctUntilChanged,
  filter,
  inject,
  merge,
  setClassMetadata,
  signal,
  startWith,
  take,
  takeUntil,
  ɵsetClassDebugInfo,
  ɵɵHostDirectivesFeature,
  ɵɵInheritDefinitionFeature,
  ɵɵNgOnChangesFeature,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassProp,
  ɵɵdefineComponent,
  ɵɵdefineDirective,
  ɵɵdefineInjectable,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdirectiveInject,
  ɵɵdomProperty,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵgetInheritedFactory,
  ɵɵinterpolate,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵpipeBind3,
  ɵɵproperty,
  ɵɵqueryRefresh,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵtextInterpolate6,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty,
  ɵɵviewQuery
} from "./chunk-U4CEU3KS.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-TXDUYLVM.js";

// node_modules/@angular/cdk/fesm2022/dialog.mjs
function CdkDialogContainer_ng_template_0_Template(rf, ctx) {
}
var DialogConfig = class {
  /**
   * Where the attached component should live in Angular's *logical* component tree.
   * This affects what is available for injection and the change detection order for the
   * component instantiated inside of the dialog. This does not affect where the dialog
   * content will be rendered.
   */
  viewContainerRef;
  /**
   * Injector used for the instantiation of the component to be attached. If provided,
   * takes precedence over the injector indirectly provided by `ViewContainerRef`.
   */
  injector;
  /** ID for the dialog. If omitted, a unique one will be generated. */
  id;
  /** The ARIA role of the dialog element. */
  role = "dialog";
  /** Optional CSS class or classes applied to the overlay panel. */
  panelClass = "";
  /** Whether the dialog has a backdrop. */
  hasBackdrop = true;
  /** Optional CSS class or classes applied to the overlay backdrop. */
  backdropClass = "";
  /** Whether the dialog closes with the escape key or pointer events outside the panel element. */
  disableClose = false;
  /** Function used to determine whether the dialog is allowed to close. */
  closePredicate;
  /** Width of the dialog. */
  width = "";
  /** Height of the dialog. */
  height = "";
  /** Min-width of the dialog. If a number is provided, assumes pixel units. */
  minWidth;
  /** Min-height of the dialog. If a number is provided, assumes pixel units. */
  minHeight;
  /** Max-width of the dialog. If a number is provided, assumes pixel units. */
  maxWidth;
  /** Max-height of the dialog. If a number is provided, assumes pixel units. */
  maxHeight;
  /** Strategy to use when positioning the dialog. Defaults to centering it on the page. */
  positionStrategy;
  /** Data being injected into the child component. */
  data = null;
  /** Layout direction for the dialog's content. */
  direction;
  /** ID of the element that describes the dialog. */
  ariaDescribedBy = null;
  /** ID of the element that labels the dialog. */
  ariaLabelledBy = null;
  /** Dialog label applied via `aria-label` */
  ariaLabel = null;
  /**
   * Whether this is a modal dialog. Used to set the `aria-modal` attribute. Off by default,
   * because it can interfere with other overlay-based components (e.g. `mat-select`) and because
   * it is redundant since the dialog marks all outside content as `aria-hidden` anyway.
   */
  ariaModal = false;
  /**
   * Where the dialog should focus on open.
   * @breaking-change 14.0.0 Remove boolean option from autoFocus. Use string or
   * AutoFocusTarget instead.
   */
  autoFocus = "first-tabbable";
  /**
   * Whether the dialog should restore focus to the previously-focused element upon closing.
   * Has the following behavior based on the type that is passed in:
   * - `boolean` - when true, will return focus to the element that was focused before the dialog
   *    was opened, otherwise won't restore focus at all.
   * - `string` - focus will be restored to the first element that matches the CSS selector.
   * - `HTMLElement` - focus will be restored to the specific element.
   */
  restoreFocus = true;
  /**
   * Scroll strategy to be used for the dialog. This determines how
   * the dialog responds to scrolling underneath the panel element.
   */
  scrollStrategy;
  /**
   * Whether the dialog should close when the user navigates backwards or forwards through browser
   * history. This does not apply to navigation via anchor element unless using URL-hash based
   * routing (`HashLocationStrategy` in the Angular router).
   */
  closeOnNavigation = true;
  /**
   * Whether the dialog should close when the dialog service is destroyed. This is useful if
   * another service is wrapping the dialog and is managing the destruction instead.
   */
  closeOnDestroy = true;
  /**
   * Whether the dialog should close when the underlying overlay is detached. This is useful if
   * another service is wrapping the dialog and is managing the destruction instead. E.g. an
   * external detachment can happen as a result of a scroll strategy triggering it or when the
   * browser location changes.
   */
  closeOnOverlayDetachments = true;
  /**
   * Whether the built-in overlay animations should be disabled.
   */
  disableAnimations = false;
  /**
   * Providers that will be exposed to the contents of the dialog. Can also
   * be provided as a function in order to generate the providers lazily.
   */
  providers;
  /**
   * Component into which the dialog content will be rendered. Defaults to `CdkDialogContainer`.
   * A configuration object can be passed in to customize the providers that will be exposed
   * to the dialog container.
   */
  container;
  /**
   * Context that will be passed to template-based dialogs.
   * A function can be passed in to resolve the context lazily.
   */
  templateContext;
};
function throwDialogContentAlreadyAttachedError() {
  throw Error("Attempting to attach dialog content after content is already attached");
}
var CdkDialogContainer = class _CdkDialogContainer extends BasePortalOutlet {
  _elementRef = inject(ElementRef);
  _focusTrapFactory = inject(FocusTrapFactory);
  _config;
  _interactivityChecker = inject(InteractivityChecker);
  _ngZone = inject(NgZone);
  _focusMonitor = inject(FocusMonitor);
  _renderer = inject(Renderer2);
  _changeDetectorRef = inject(ChangeDetectorRef);
  _injector = inject(Injector);
  _platform = inject(Platform);
  _document = inject(DOCUMENT);
  /** The portal outlet inside of this container into which the dialog content will be loaded. */
  _portalOutlet;
  _focusTrapped = new Subject();
  /** The class that traps and manages focus within the dialog. */
  _focusTrap = null;
  /** Element that was focused before the dialog was opened. Save this to restore upon close. */
  _elementFocusedBeforeDialogWasOpened = null;
  /**
   * Type of interaction that led to the dialog being closed. This is used to determine
   * whether the focus style will be applied when returning focus to its original location
   * after the dialog is closed.
   */
  _closeInteractionType = null;
  /**
   * Queue of the IDs of the dialog's label element, based on their definition order. The first
   * ID will be used as the `aria-labelledby` value. We use a queue here to handle the case
   * where there are two or more titles in the DOM at a time and the first one is destroyed while
   * the rest are present.
   */
  _ariaLabelledByQueue = [];
  _isDestroyed = false;
  constructor() {
    super();
    this._config = inject(DialogConfig, {
      optional: true
    }) || new DialogConfig();
    if (this._config.ariaLabelledBy) {
      this._ariaLabelledByQueue.push(this._config.ariaLabelledBy);
    }
  }
  _addAriaLabelledBy(id) {
    this._ariaLabelledByQueue.push(id);
    this._changeDetectorRef.markForCheck();
  }
  _removeAriaLabelledBy(id) {
    const index = this._ariaLabelledByQueue.indexOf(id);
    if (index > -1) {
      this._ariaLabelledByQueue.splice(index, 1);
      this._changeDetectorRef.markForCheck();
    }
  }
  _contentAttached() {
    this._initializeFocusTrap();
    this._captureInitialFocus();
  }
  /**
   * Can be used by child classes to customize the initial focus
   * capturing behavior (e.g. if it's tied to an animation).
   */
  _captureInitialFocus() {
    this._trapFocus();
  }
  ngOnDestroy() {
    this._focusTrapped.complete();
    this._isDestroyed = true;
    this._restoreFocus();
  }
  /**
   * Attach a ComponentPortal as content to this dialog container.
   * @param portal Portal to be attached as the dialog content.
   */
  attachComponentPortal(portal) {
    if (this._portalOutlet.hasAttached() && (typeof ngDevMode === "undefined" || ngDevMode)) {
      throwDialogContentAlreadyAttachedError();
    }
    const result = this._portalOutlet.attachComponentPortal(portal);
    this._contentAttached();
    return result;
  }
  /**
   * Attach a TemplatePortal as content to this dialog container.
   * @param portal Portal to be attached as the dialog content.
   */
  attachTemplatePortal(portal) {
    if (this._portalOutlet.hasAttached() && (typeof ngDevMode === "undefined" || ngDevMode)) {
      throwDialogContentAlreadyAttachedError();
    }
    const result = this._portalOutlet.attachTemplatePortal(portal);
    this._contentAttached();
    return result;
  }
  /**
   * Attaches a DOM portal to the dialog container.
   * @param portal Portal to be attached.
   * @deprecated To be turned into a method.
   * @breaking-change 10.0.0
   */
  attachDomPortal = (portal) => {
    if (this._portalOutlet.hasAttached() && (typeof ngDevMode === "undefined" || ngDevMode)) {
      throwDialogContentAlreadyAttachedError();
    }
    const result = this._portalOutlet.attachDomPortal(portal);
    this._contentAttached();
    return result;
  };
  // TODO(crisbeto): this shouldn't be exposed, but there are internal references to it.
  /** Captures focus if it isn't already inside the dialog. */
  _recaptureFocus() {
    if (!this._containsFocus()) {
      this._trapFocus();
    }
  }
  /**
   * Focuses the provided element. If the element is not focusable, it will add a tabIndex
   * attribute to forcefully focus it. The attribute is removed after focus is moved.
   * @param element The element to focus.
   */
  _forceFocus(element, options) {
    if (!this._interactivityChecker.isFocusable(element)) {
      element.tabIndex = -1;
      this._ngZone.runOutsideAngular(() => {
        const callback = () => {
          deregisterBlur();
          deregisterMousedown();
          element.removeAttribute("tabindex");
        };
        const deregisterBlur = this._renderer.listen(element, "blur", callback);
        const deregisterMousedown = this._renderer.listen(element, "mousedown", callback);
      });
    }
    element.focus(options);
  }
  /**
   * Focuses the first element that matches the given selector within the focus trap.
   * @param selector The CSS selector for the element to set focus to.
   */
  _focusByCssSelector(selector, options) {
    let elementToFocus = this._elementRef.nativeElement.querySelector(selector);
    if (elementToFocus) {
      this._forceFocus(elementToFocus, options);
    }
  }
  /**
   * Moves the focus inside the focus trap. When autoFocus is not set to 'dialog', if focus
   * cannot be moved then focus will go to the dialog container.
   */
  _trapFocus(options) {
    if (this._isDestroyed) {
      return;
    }
    afterNextRender(() => {
      const element = this._elementRef.nativeElement;
      switch (this._config.autoFocus) {
        case false:
        case "dialog":
          if (!this._containsFocus()) {
            element.focus(options);
          }
          break;
        case true:
        case "first-tabbable":
          const focusedSuccessfully = this._focusTrap?.focusInitialElement(options);
          if (!focusedSuccessfully) {
            this._focusDialogContainer(options);
          }
          break;
        case "first-heading":
          this._focusByCssSelector('h1, h2, h3, h4, h5, h6, [role="heading"]', options);
          break;
        default:
          this._focusByCssSelector(this._config.autoFocus, options);
          break;
      }
      this._focusTrapped.next();
    }, {
      injector: this._injector
    });
  }
  /** Restores focus to the element that was focused before the dialog opened. */
  _restoreFocus() {
    const focusConfig = this._config.restoreFocus;
    let focusTargetElement = null;
    if (typeof focusConfig === "string") {
      focusTargetElement = this._document.querySelector(focusConfig);
    } else if (typeof focusConfig === "boolean") {
      focusTargetElement = focusConfig ? this._elementFocusedBeforeDialogWasOpened : null;
    } else if (focusConfig) {
      focusTargetElement = focusConfig;
    }
    if (this._config.restoreFocus && focusTargetElement && typeof focusTargetElement.focus === "function") {
      const activeElement = _getFocusedElementPierceShadowDom();
      const element = this._elementRef.nativeElement;
      if (!activeElement || activeElement === this._document.body || activeElement === element || element.contains(activeElement)) {
        if (this._focusMonitor) {
          this._focusMonitor.focusVia(focusTargetElement, this._closeInteractionType);
          this._closeInteractionType = null;
        } else {
          focusTargetElement.focus();
        }
      }
    }
    if (this._focusTrap) {
      this._focusTrap.destroy();
    }
  }
  /** Focuses the dialog container. */
  _focusDialogContainer(options) {
    this._elementRef.nativeElement.focus?.(options);
  }
  /** Returns whether focus is inside the dialog. */
  _containsFocus() {
    const element = this._elementRef.nativeElement;
    const activeElement = _getFocusedElementPierceShadowDom();
    return element === activeElement || element.contains(activeElement);
  }
  /** Sets up the focus trap. */
  _initializeFocusTrap() {
    if (this._platform.isBrowser) {
      this._focusTrap = this._focusTrapFactory.create(this._elementRef.nativeElement);
      if (this._document) {
        this._elementFocusedBeforeDialogWasOpened = _getFocusedElementPierceShadowDom();
      }
    }
  }
  static \u0275fac = function CdkDialogContainer_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CdkDialogContainer)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _CdkDialogContainer,
    selectors: [["cdk-dialog-container"]],
    viewQuery: function CdkDialogContainer_Query(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275viewQuery(CdkPortalOutlet, 7);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx._portalOutlet = _t.first);
      }
    },
    hostAttrs: ["tabindex", "-1", 1, "cdk-dialog-container"],
    hostVars: 6,
    hostBindings: function CdkDialogContainer_HostBindings(rf, ctx) {
      if (rf & 2) {
        \u0275\u0275attribute("id", ctx._config.id || null)("role", ctx._config.role)("aria-modal", ctx._config.ariaModal)("aria-labelledby", ctx._config.ariaLabel ? null : ctx._ariaLabelledByQueue[0])("aria-label", ctx._config.ariaLabel)("aria-describedby", ctx._config.ariaDescribedBy || null);
      }
    },
    features: [\u0275\u0275InheritDefinitionFeature],
    decls: 1,
    vars: 0,
    consts: [["cdkPortalOutlet", ""]],
    template: function CdkDialogContainer_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275template(0, CdkDialogContainer_ng_template_0_Template, 0, 0, "ng-template", 0);
      }
    },
    dependencies: [CdkPortalOutlet],
    styles: [".cdk-dialog-container{display:block;width:100%;height:100%;min-height:inherit;max-height:inherit}\n"],
    encapsulation: 2
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CdkDialogContainer, [{
    type: Component,
    args: [{
      selector: "cdk-dialog-container",
      encapsulation: ViewEncapsulation.None,
      changeDetection: ChangeDetectionStrategy.Default,
      imports: [CdkPortalOutlet],
      host: {
        "class": "cdk-dialog-container",
        "tabindex": "-1",
        "[attr.id]": "_config.id || null",
        "[attr.role]": "_config.role",
        "[attr.aria-modal]": "_config.ariaModal",
        "[attr.aria-labelledby]": "_config.ariaLabel ? null : _ariaLabelledByQueue[0]",
        "[attr.aria-label]": "_config.ariaLabel",
        "[attr.aria-describedby]": "_config.ariaDescribedBy || null"
      },
      template: "<ng-template cdkPortalOutlet />\n",
      styles: [".cdk-dialog-container{display:block;width:100%;height:100%;min-height:inherit;max-height:inherit}\n"]
    }]
  }], () => [], {
    _portalOutlet: [{
      type: ViewChild,
      args: [CdkPortalOutlet, {
        static: true
      }]
    }]
  });
})();
var DialogRef = class {
  overlayRef;
  config;
  /**
   * Instance of component opened into the dialog. Will be
   * null when the dialog is opened using a `TemplateRef`.
   */
  componentInstance;
  /**
   * `ComponentRef` of the component opened into the dialog. Will be
   * null when the dialog is opened using a `TemplateRef`.
   */
  componentRef;
  /** Instance of the container that is rendering out the dialog content. */
  containerInstance;
  /** Whether the user is allowed to close the dialog. */
  disableClose;
  /** Emits when the dialog has been closed. */
  closed = new Subject();
  /** Emits when the backdrop of the dialog is clicked. */
  backdropClick;
  /** Emits when on keyboard events within the dialog. */
  keydownEvents;
  /** Emits on pointer events that happen outside of the dialog. */
  outsidePointerEvents;
  /** Unique ID for the dialog. */
  id;
  /** Subscription to external detachments of the dialog. */
  _detachSubscription;
  constructor(overlayRef, config) {
    this.overlayRef = overlayRef;
    this.config = config;
    this.disableClose = config.disableClose;
    this.backdropClick = overlayRef.backdropClick();
    this.keydownEvents = overlayRef.keydownEvents();
    this.outsidePointerEvents = overlayRef.outsidePointerEvents();
    this.id = config.id;
    this.keydownEvents.subscribe((event) => {
      if (event.keyCode === ESCAPE && !this.disableClose && !hasModifierKey(event)) {
        event.preventDefault();
        this.close(void 0, {
          focusOrigin: "keyboard"
        });
      }
    });
    this.backdropClick.subscribe(() => {
      if (!this.disableClose && this._canClose()) {
        this.close(void 0, {
          focusOrigin: "mouse"
        });
      } else {
        this.containerInstance._recaptureFocus?.();
      }
    });
    this._detachSubscription = overlayRef.detachments().subscribe(() => {
      if (config.closeOnOverlayDetachments !== false) {
        this.close();
      }
    });
  }
  /**
   * Close the dialog.
   * @param result Optional result to return to the dialog opener.
   * @param options Additional options to customize the closing behavior.
   */
  close(result, options) {
    if (this._canClose(result)) {
      const closedSubject = this.closed;
      this.containerInstance._closeInteractionType = options?.focusOrigin || "program";
      this._detachSubscription.unsubscribe();
      this.overlayRef.dispose();
      closedSubject.next(result);
      closedSubject.complete();
      this.componentInstance = this.containerInstance = null;
    }
  }
  /** Updates the position of the dialog based on the current position strategy. */
  updatePosition() {
    this.overlayRef.updatePosition();
    return this;
  }
  /**
   * Updates the dialog's width and height.
   * @param width New width of the dialog.
   * @param height New height of the dialog.
   */
  updateSize(width = "", height = "") {
    this.overlayRef.updateSize({
      width,
      height
    });
    return this;
  }
  /** Add a CSS class or an array of classes to the overlay pane. */
  addPanelClass(classes) {
    this.overlayRef.addPanelClass(classes);
    return this;
  }
  /** Remove a CSS class or an array of classes from the overlay pane. */
  removePanelClass(classes) {
    this.overlayRef.removePanelClass(classes);
    return this;
  }
  /** Whether the dialog is allowed to close. */
  _canClose(result) {
    const config = this.config;
    return !!this.containerInstance && (!config.closePredicate || config.closePredicate(result, config, this.componentInstance));
  }
};
var DIALOG_SCROLL_STRATEGY = new InjectionToken("DialogScrollStrategy", {
  providedIn: "root",
  factory: () => {
    const injector = inject(Injector);
    return () => createBlockScrollStrategy(injector);
  }
});
var DIALOG_DATA = new InjectionToken("DialogData");
var DEFAULT_DIALOG_CONFIG = new InjectionToken("DefaultDialogConfig");
function getDirectionality(value) {
  const valueSignal = signal(value);
  const change = new EventEmitter();
  return {
    valueSignal,
    get value() {
      return valueSignal();
    },
    change,
    ngOnDestroy() {
      change.complete();
    }
  };
}
var Dialog = class _Dialog {
  _injector = inject(Injector);
  _defaultOptions = inject(DEFAULT_DIALOG_CONFIG, {
    optional: true
  });
  _parentDialog = inject(_Dialog, {
    optional: true,
    skipSelf: true
  });
  _overlayContainer = inject(OverlayContainer);
  _idGenerator = inject(_IdGenerator);
  _openDialogsAtThisLevel = [];
  _afterAllClosedAtThisLevel = new Subject();
  _afterOpenedAtThisLevel = new Subject();
  _ariaHiddenElements = /* @__PURE__ */ new Map();
  _scrollStrategy = inject(DIALOG_SCROLL_STRATEGY);
  /** Keeps track of the currently-open dialogs. */
  get openDialogs() {
    return this._parentDialog ? this._parentDialog.openDialogs : this._openDialogsAtThisLevel;
  }
  /** Stream that emits when a dialog has been opened. */
  get afterOpened() {
    return this._parentDialog ? this._parentDialog.afterOpened : this._afterOpenedAtThisLevel;
  }
  /**
   * Stream that emits when all open dialog have finished closing.
   * Will emit on subscribe if there are no open dialogs to begin with.
   */
  afterAllClosed = defer(() => this.openDialogs.length ? this._getAfterAllClosed() : this._getAfterAllClosed().pipe(startWith(void 0)));
  constructor() {
  }
  open(componentOrTemplateRef, config) {
    const defaults = this._defaultOptions || new DialogConfig();
    config = __spreadValues(__spreadValues({}, defaults), config);
    config.id = config.id || this._idGenerator.getId("cdk-dialog-");
    if (config.id && this.getDialogById(config.id) && (typeof ngDevMode === "undefined" || ngDevMode)) {
      throw Error(`Dialog with id "${config.id}" exists already. The dialog id must be unique.`);
    }
    const overlayConfig = this._getOverlayConfig(config);
    const overlayRef = createOverlayRef(this._injector, overlayConfig);
    const dialogRef = new DialogRef(overlayRef, config);
    const dialogContainer = this._attachContainer(overlayRef, dialogRef, config);
    dialogRef.containerInstance = dialogContainer;
    if (!this.openDialogs.length) {
      const overlayContainer = this._overlayContainer.getContainerElement();
      if (dialogContainer._focusTrapped) {
        dialogContainer._focusTrapped.pipe(take(1)).subscribe(() => {
          this._hideNonDialogContentFromAssistiveTechnology(overlayContainer);
        });
      } else {
        this._hideNonDialogContentFromAssistiveTechnology(overlayContainer);
      }
    }
    this._attachDialogContent(componentOrTemplateRef, dialogRef, dialogContainer, config);
    this.openDialogs.push(dialogRef);
    dialogRef.closed.subscribe(() => this._removeOpenDialog(dialogRef, true));
    this.afterOpened.next(dialogRef);
    return dialogRef;
  }
  /**
   * Closes all of the currently-open dialogs.
   */
  closeAll() {
    reverseForEach(this.openDialogs, (dialog) => dialog.close());
  }
  /**
   * Finds an open dialog by its id.
   * @param id ID to use when looking up the dialog.
   */
  getDialogById(id) {
    return this.openDialogs.find((dialog) => dialog.id === id);
  }
  ngOnDestroy() {
    reverseForEach(this._openDialogsAtThisLevel, (dialog) => {
      if (dialog.config.closeOnDestroy === false) {
        this._removeOpenDialog(dialog, false);
      }
    });
    reverseForEach(this._openDialogsAtThisLevel, (dialog) => dialog.close());
    this._afterAllClosedAtThisLevel.complete();
    this._afterOpenedAtThisLevel.complete();
    this._openDialogsAtThisLevel = [];
  }
  /**
   * Creates an overlay config from a dialog config.
   * @param config The dialog configuration.
   * @returns The overlay configuration.
   */
  _getOverlayConfig(config) {
    const state = new OverlayConfig({
      positionStrategy: config.positionStrategy || createGlobalPositionStrategy().centerHorizontally().centerVertically(),
      scrollStrategy: config.scrollStrategy || this._scrollStrategy(),
      panelClass: config.panelClass,
      hasBackdrop: config.hasBackdrop,
      direction: config.direction,
      minWidth: config.minWidth,
      minHeight: config.minHeight,
      maxWidth: config.maxWidth,
      maxHeight: config.maxHeight,
      width: config.width,
      height: config.height,
      disposeOnNavigation: config.closeOnNavigation,
      disableAnimations: config.disableAnimations
    });
    if (config.backdropClass) {
      state.backdropClass = config.backdropClass;
    }
    return state;
  }
  /**
   * Attaches a dialog container to a dialog's already-created overlay.
   * @param overlay Reference to the dialog's underlying overlay.
   * @param config The dialog configuration.
   * @returns A promise resolving to a ComponentRef for the attached container.
   */
  _attachContainer(overlay, dialogRef, config) {
    const userInjector = config.injector || config.viewContainerRef?.injector;
    const providers = [{
      provide: DialogConfig,
      useValue: config
    }, {
      provide: DialogRef,
      useValue: dialogRef
    }, {
      provide: OverlayRef,
      useValue: overlay
    }];
    let containerType;
    if (config.container) {
      if (typeof config.container === "function") {
        containerType = config.container;
      } else {
        containerType = config.container.type;
        providers.push(...config.container.providers(config));
      }
    } else {
      containerType = CdkDialogContainer;
    }
    const containerPortal = new ComponentPortal(containerType, config.viewContainerRef, Injector.create({
      parent: userInjector || this._injector,
      providers
    }));
    const containerRef = overlay.attach(containerPortal);
    return containerRef.instance;
  }
  /**
   * Attaches the user-provided component to the already-created dialog container.
   * @param componentOrTemplateRef The type of component being loaded into the dialog,
   *     or a TemplateRef to instantiate as the content.
   * @param dialogRef Reference to the dialog being opened.
   * @param dialogContainer Component that is going to wrap the dialog content.
   * @param config Configuration used to open the dialog.
   */
  _attachDialogContent(componentOrTemplateRef, dialogRef, dialogContainer, config) {
    if (componentOrTemplateRef instanceof TemplateRef) {
      const injector = this._createInjector(config, dialogRef, dialogContainer, void 0);
      let context = {
        $implicit: config.data,
        dialogRef
      };
      if (config.templateContext) {
        context = __spreadValues(__spreadValues({}, context), typeof config.templateContext === "function" ? config.templateContext() : config.templateContext);
      }
      dialogContainer.attachTemplatePortal(new TemplatePortal(componentOrTemplateRef, null, context, injector));
    } else {
      const injector = this._createInjector(config, dialogRef, dialogContainer, this._injector);
      const contentRef = dialogContainer.attachComponentPortal(new ComponentPortal(componentOrTemplateRef, config.viewContainerRef, injector));
      dialogRef.componentRef = contentRef;
      dialogRef.componentInstance = contentRef.instance;
    }
  }
  /**
   * Creates a custom injector to be used inside the dialog. This allows a component loaded inside
   * of a dialog to close itself and, optionally, to return a value.
   * @param config Config object that is used to construct the dialog.
   * @param dialogRef Reference to the dialog being opened.
   * @param dialogContainer Component that is going to wrap the dialog content.
   * @param fallbackInjector Injector to use as a fallback when a lookup fails in the custom
   * dialog injector, if the user didn't provide a custom one.
   * @returns The custom injector that can be used inside the dialog.
   */
  _createInjector(config, dialogRef, dialogContainer, fallbackInjector) {
    const userInjector = config.injector || config.viewContainerRef?.injector;
    const providers = [{
      provide: DIALOG_DATA,
      useValue: config.data
    }, {
      provide: DialogRef,
      useValue: dialogRef
    }];
    if (config.providers) {
      if (typeof config.providers === "function") {
        providers.push(...config.providers(dialogRef, config, dialogContainer));
      } else {
        providers.push(...config.providers);
      }
    }
    if (config.direction && (!userInjector || !userInjector.get(Directionality, null, {
      optional: true
    }))) {
      providers.push({
        provide: Directionality,
        useValue: getDirectionality(config.direction)
      });
    }
    return Injector.create({
      parent: userInjector || fallbackInjector,
      providers
    });
  }
  /**
   * Removes a dialog from the array of open dialogs.
   * @param dialogRef Dialog to be removed.
   * @param emitEvent Whether to emit an event if this is the last dialog.
   */
  _removeOpenDialog(dialogRef, emitEvent) {
    const index = this.openDialogs.indexOf(dialogRef);
    if (index > -1) {
      this.openDialogs.splice(index, 1);
      if (!this.openDialogs.length) {
        this._ariaHiddenElements.forEach((previousValue, element) => {
          if (previousValue) {
            element.setAttribute("aria-hidden", previousValue);
          } else {
            element.removeAttribute("aria-hidden");
          }
        });
        this._ariaHiddenElements.clear();
        if (emitEvent) {
          this._getAfterAllClosed().next();
        }
      }
    }
  }
  /** Hides all of the content that isn't an overlay from assistive technology. */
  _hideNonDialogContentFromAssistiveTechnology(overlayContainer) {
    if (overlayContainer.parentElement) {
      const siblings = overlayContainer.parentElement.children;
      for (let i = siblings.length - 1; i > -1; i--) {
        const sibling = siblings[i];
        if (sibling !== overlayContainer && sibling.nodeName !== "SCRIPT" && sibling.nodeName !== "STYLE" && !sibling.hasAttribute("aria-live")) {
          this._ariaHiddenElements.set(sibling, sibling.getAttribute("aria-hidden"));
          sibling.setAttribute("aria-hidden", "true");
        }
      }
    }
  }
  _getAfterAllClosed() {
    const parent = this._parentDialog;
    return parent ? parent._getAfterAllClosed() : this._afterAllClosedAtThisLevel;
  }
  static \u0275fac = function Dialog_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _Dialog)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _Dialog,
    factory: _Dialog.\u0275fac,
    providedIn: "root"
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Dialog, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [], null);
})();
function reverseForEach(items, callback) {
  let i = items.length;
  while (i--) {
    callback(items[i]);
  }
}
var DialogModule = class _DialogModule {
  static \u0275fac = function DialogModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _DialogModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
    type: _DialogModule,
    imports: [OverlayModule, PortalModule, A11yModule, CdkDialogContainer],
    exports: [
      // Re-export the PortalModule so that people extending the `CdkDialogContainer`
      // don't have to remember to import it or be faced with an unhelpful error.
      PortalModule,
      CdkDialogContainer
    ]
  });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
    providers: [Dialog],
    imports: [
      OverlayModule,
      PortalModule,
      A11yModule,
      // Re-export the PortalModule so that people extending the `CdkDialogContainer`
      // don't have to remember to import it or be faced with an unhelpful error.
      PortalModule
    ]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DialogModule, [{
    type: NgModule,
    args: [{
      imports: [OverlayModule, PortalModule, A11yModule, CdkDialogContainer],
      exports: [
        // Re-export the PortalModule so that people extending the `CdkDialogContainer`
        // don't have to remember to import it or be faced with an unhelpful error.
        PortalModule,
        CdkDialogContainer
      ],
      providers: [Dialog]
    }]
  }], null, null);
})();

// node_modules/@angular/material/fesm2022/module-Cz4ZB2Wr.mjs
function MatDialogContainer_ng_template_2_Template(rf, ctx) {
}
var MatDialogConfig = class {
  /**
   * Where the attached component should live in Angular's *logical* component tree.
   * This affects what is available for injection and the change detection order for the
   * component instantiated inside of the dialog. This does not affect where the dialog
   * content will be rendered.
   */
  viewContainerRef;
  /**
   * Injector used for the instantiation of the component to be attached. If provided,
   * takes precedence over the injector indirectly provided by `ViewContainerRef`.
   */
  injector;
  /** ID for the dialog. If omitted, a unique one will be generated. */
  id;
  /** The ARIA role of the dialog element. */
  role = "dialog";
  /** Custom class for the overlay pane. */
  panelClass = "";
  /** Whether the dialog has a backdrop. */
  hasBackdrop = true;
  /** Custom class for the backdrop. */
  backdropClass = "";
  /** Whether the user can use escape or clicking on the backdrop to close the modal. */
  disableClose = false;
  /** Function used to determine whether the dialog is allowed to close. */
  closePredicate;
  /** Width of the dialog. */
  width = "";
  /** Height of the dialog. */
  height = "";
  /** Min-width of the dialog. If a number is provided, assumes pixel units. */
  minWidth;
  /** Min-height of the dialog. If a number is provided, assumes pixel units. */
  minHeight;
  /** Max-width of the dialog. If a number is provided, assumes pixel units. */
  maxWidth;
  /** Max-height of the dialog. If a number is provided, assumes pixel units. */
  maxHeight;
  /** Position overrides. */
  position;
  /** Data being injected into the child component. */
  data = null;
  /** Layout direction for the dialog's content. */
  direction;
  /** ID of the element that describes the dialog. */
  ariaDescribedBy = null;
  /** ID of the element that labels the dialog. */
  ariaLabelledBy = null;
  /** Aria label to assign to the dialog element. */
  ariaLabel = null;
  /**
   * Whether this is a modal dialog. Used to set the `aria-modal` attribute. Off by default,
   * because it can interfere with other overlay-based components (e.g. `mat-select`) and because
   * it is redundant since the dialog marks all outside content as `aria-hidden` anyway.
   */
  ariaModal = false;
  /**
   * Where the dialog should focus on open.
   * @breaking-change 14.0.0 Remove boolean option from autoFocus. Use string or
   * AutoFocusTarget instead.
   */
  autoFocus = "first-tabbable";
  /**
   * Whether the dialog should restore focus to the
   * previously-focused element, after it's closed.
   */
  restoreFocus = true;
  /** Whether to wait for the opening animation to finish before trapping focus. */
  delayFocusTrap = true;
  /** Scroll strategy to be used for the dialog. */
  scrollStrategy;
  /**
   * Whether the dialog should close when the user goes backwards/forwards in history.
   * Note that this usually doesn't include clicking on links (unless the user is using
   * the `HashLocationStrategy`).
   */
  closeOnNavigation = true;
  /**
   * Duration of the enter animation in ms.
   * Should be a number, string type is deprecated.
   * @breaking-change 17.0.0 Remove string signature.
   */
  enterAnimationDuration;
  /**
   * Duration of the exit animation in ms.
   * Should be a number, string type is deprecated.
   * @breaking-change 17.0.0 Remove string signature.
   */
  exitAnimationDuration;
};
var OPEN_CLASS = "mdc-dialog--open";
var OPENING_CLASS = "mdc-dialog--opening";
var CLOSING_CLASS = "mdc-dialog--closing";
var OPEN_ANIMATION_DURATION = 150;
var CLOSE_ANIMATION_DURATION = 75;
var MatDialogContainer = class _MatDialogContainer extends CdkDialogContainer {
  /** Emits when an animation state changes. */
  _animationStateChanged = new EventEmitter();
  /** Whether animations are enabled. */
  _animationsEnabled = !_animationsDisabled();
  /** Number of actions projected in the dialog. */
  _actionSectionCount = 0;
  /** Host element of the dialog container component. */
  _hostElement = this._elementRef.nativeElement;
  /** Duration of the dialog open animation. */
  _enterAnimationDuration = this._animationsEnabled ? parseCssTime(this._config.enterAnimationDuration) ?? OPEN_ANIMATION_DURATION : 0;
  /** Duration of the dialog close animation. */
  _exitAnimationDuration = this._animationsEnabled ? parseCssTime(this._config.exitAnimationDuration) ?? CLOSE_ANIMATION_DURATION : 0;
  /** Current timer for dialog animations. */
  _animationTimer = null;
  _contentAttached() {
    super._contentAttached();
    this._startOpenAnimation();
  }
  /** Starts the dialog open animation if enabled. */
  _startOpenAnimation() {
    this._animationStateChanged.emit({
      state: "opening",
      totalTime: this._enterAnimationDuration
    });
    if (this._animationsEnabled) {
      this._hostElement.style.setProperty(TRANSITION_DURATION_PROPERTY, `${this._enterAnimationDuration}ms`);
      this._requestAnimationFrame(() => this._hostElement.classList.add(OPENING_CLASS, OPEN_CLASS));
      this._waitForAnimationToComplete(this._enterAnimationDuration, this._finishDialogOpen);
    } else {
      this._hostElement.classList.add(OPEN_CLASS);
      Promise.resolve().then(() => this._finishDialogOpen());
    }
  }
  /**
   * Starts the exit animation of the dialog if enabled. This method is
   * called by the dialog ref.
   */
  _startExitAnimation() {
    this._animationStateChanged.emit({
      state: "closing",
      totalTime: this._exitAnimationDuration
    });
    this._hostElement.classList.remove(OPEN_CLASS);
    if (this._animationsEnabled) {
      this._hostElement.style.setProperty(TRANSITION_DURATION_PROPERTY, `${this._exitAnimationDuration}ms`);
      this._requestAnimationFrame(() => this._hostElement.classList.add(CLOSING_CLASS));
      this._waitForAnimationToComplete(this._exitAnimationDuration, this._finishDialogClose);
    } else {
      Promise.resolve().then(() => this._finishDialogClose());
    }
  }
  /**
   * Updates the number action sections.
   * @param delta Increase/decrease in the number of sections.
   */
  _updateActionSectionCount(delta) {
    this._actionSectionCount += delta;
    this._changeDetectorRef.markForCheck();
  }
  /**
   * Completes the dialog open by clearing potential animation classes, trapping
   * focus and emitting an opened event.
   */
  _finishDialogOpen = () => {
    this._clearAnimationClasses();
    this._openAnimationDone(this._enterAnimationDuration);
  };
  /**
   * Completes the dialog close by clearing potential animation classes, restoring
   * focus and emitting a closed event.
   */
  _finishDialogClose = () => {
    this._clearAnimationClasses();
    this._animationStateChanged.emit({
      state: "closed",
      totalTime: this._exitAnimationDuration
    });
  };
  /** Clears all dialog animation classes. */
  _clearAnimationClasses() {
    this._hostElement.classList.remove(OPENING_CLASS, CLOSING_CLASS);
  }
  _waitForAnimationToComplete(duration, callback) {
    if (this._animationTimer !== null) {
      clearTimeout(this._animationTimer);
    }
    this._animationTimer = setTimeout(callback, duration);
  }
  /** Runs a callback in `requestAnimationFrame`, if available. */
  _requestAnimationFrame(callback) {
    this._ngZone.runOutsideAngular(() => {
      if (typeof requestAnimationFrame === "function") {
        requestAnimationFrame(callback);
      } else {
        callback();
      }
    });
  }
  _captureInitialFocus() {
    if (!this._config.delayFocusTrap) {
      this._trapFocus();
    }
  }
  /**
   * Callback for when the open dialog animation has finished. Intended to
   * be called by sub-classes that use different animation implementations.
   */
  _openAnimationDone(totalTime) {
    if (this._config.delayFocusTrap) {
      this._trapFocus();
    }
    this._animationStateChanged.next({
      state: "opened",
      totalTime
    });
  }
  ngOnDestroy() {
    super.ngOnDestroy();
    if (this._animationTimer !== null) {
      clearTimeout(this._animationTimer);
    }
  }
  attachComponentPortal(portal) {
    const ref = super.attachComponentPortal(portal);
    ref.location.nativeElement.classList.add("mat-mdc-dialog-component-host");
    return ref;
  }
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275MatDialogContainer_BaseFactory;
    return function MatDialogContainer_Factory(__ngFactoryType__) {
      return (\u0275MatDialogContainer_BaseFactory || (\u0275MatDialogContainer_BaseFactory = \u0275\u0275getInheritedFactory(_MatDialogContainer)))(__ngFactoryType__ || _MatDialogContainer);
    };
  })();
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _MatDialogContainer,
    selectors: [["mat-dialog-container"]],
    hostAttrs: ["tabindex", "-1", 1, "mat-mdc-dialog-container", "mdc-dialog"],
    hostVars: 10,
    hostBindings: function MatDialogContainer_HostBindings(rf, ctx) {
      if (rf & 2) {
        \u0275\u0275domProperty("id", ctx._config.id);
        \u0275\u0275attribute("aria-modal", ctx._config.ariaModal)("role", ctx._config.role)("aria-labelledby", ctx._config.ariaLabel ? null : ctx._ariaLabelledByQueue[0])("aria-label", ctx._config.ariaLabel)("aria-describedby", ctx._config.ariaDescribedBy || null);
        \u0275\u0275classProp("_mat-animation-noopable", !ctx._animationsEnabled)("mat-mdc-dialog-container-with-actions", ctx._actionSectionCount > 0);
      }
    },
    features: [\u0275\u0275InheritDefinitionFeature],
    decls: 3,
    vars: 0,
    consts: [[1, "mat-mdc-dialog-inner-container", "mdc-dialog__container"], [1, "mat-mdc-dialog-surface", "mdc-dialog__surface"], ["cdkPortalOutlet", ""]],
    template: function MatDialogContainer_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1);
        \u0275\u0275template(2, MatDialogContainer_ng_template_2_Template, 0, 0, "ng-template", 2);
        \u0275\u0275elementEnd()();
      }
    },
    dependencies: [CdkPortalOutlet],
    styles: ['.mat-mdc-dialog-container{width:100%;height:100%;display:block;box-sizing:border-box;max-height:inherit;min-height:inherit;min-width:inherit;max-width:inherit;outline:0}.cdk-overlay-pane.mat-mdc-dialog-panel{max-width:var(--mat-dialog-container-max-width, 560px);min-width:var(--mat-dialog-container-min-width, 280px)}@media(max-width: 599px){.cdk-overlay-pane.mat-mdc-dialog-panel{max-width:var(--mat-dialog-container-small-max-width, calc(100vw - 32px))}}.mat-mdc-dialog-inner-container{display:flex;flex-direction:row;align-items:center;justify-content:space-around;box-sizing:border-box;height:100%;opacity:0;transition:opacity linear var(--mat-dialog-transition-duration, 0ms);max-height:inherit;min-height:inherit;min-width:inherit;max-width:inherit}.mdc-dialog--closing .mat-mdc-dialog-inner-container{transition:opacity 75ms linear;transform:none}.mdc-dialog--open .mat-mdc-dialog-inner-container{opacity:1}._mat-animation-noopable .mat-mdc-dialog-inner-container{transition:none}.mat-mdc-dialog-surface{display:flex;flex-direction:column;flex-grow:0;flex-shrink:0;box-sizing:border-box;width:100%;height:100%;position:relative;overflow-y:auto;outline:0;transform:scale(0.8);transition:transform var(--mat-dialog-transition-duration, 0ms) cubic-bezier(0, 0, 0.2, 1);max-height:inherit;min-height:inherit;min-width:inherit;max-width:inherit;box-shadow:var(--mat-dialog-container-elevation-shadow, none);border-radius:var(--mat-dialog-container-shape, var(--mat-sys-corner-extra-large, 4px));background-color:var(--mat-dialog-container-color, var(--mat-sys-surface, white))}[dir=rtl] .mat-mdc-dialog-surface{text-align:right}.mdc-dialog--open .mat-mdc-dialog-surface,.mdc-dialog--closing .mat-mdc-dialog-surface{transform:none}._mat-animation-noopable .mat-mdc-dialog-surface{transition:none}.mat-mdc-dialog-surface::before{position:absolute;box-sizing:border-box;width:100%;height:100%;top:0;left:0;border:2px solid rgba(0,0,0,0);border-radius:inherit;content:"";pointer-events:none}.mat-mdc-dialog-title{display:block;position:relative;flex-shrink:0;box-sizing:border-box;margin:0 0 1px;padding:var(--mat-dialog-headline-padding, 6px 24px 13px)}.mat-mdc-dialog-title::before{display:inline-block;width:0;height:40px;content:"";vertical-align:0}[dir=rtl] .mat-mdc-dialog-title{text-align:right}.mat-mdc-dialog-container .mat-mdc-dialog-title{color:var(--mat-dialog-subhead-color, var(--mat-sys-on-surface, rgba(0, 0, 0, 0.87)));font-family:var(--mat-dialog-subhead-font, var(--mat-sys-headline-small-font, inherit));line-height:var(--mat-dialog-subhead-line-height, var(--mat-sys-headline-small-line-height, 1.5rem));font-size:var(--mat-dialog-subhead-size, var(--mat-sys-headline-small-size, 1rem));font-weight:var(--mat-dialog-subhead-weight, var(--mat-sys-headline-small-weight, 400));letter-spacing:var(--mat-dialog-subhead-tracking, var(--mat-sys-headline-small-tracking, 0.03125em))}.mat-mdc-dialog-content{display:block;flex-grow:1;box-sizing:border-box;margin:0;overflow:auto;max-height:65vh}.mat-mdc-dialog-content>:first-child{margin-top:0}.mat-mdc-dialog-content>:last-child{margin-bottom:0}.mat-mdc-dialog-container .mat-mdc-dialog-content{color:var(--mat-dialog-supporting-text-color, var(--mat-sys-on-surface-variant, rgba(0, 0, 0, 0.6)));font-family:var(--mat-dialog-supporting-text-font, var(--mat-sys-body-medium-font, inherit));line-height:var(--mat-dialog-supporting-text-line-height, var(--mat-sys-body-medium-line-height, 1.5rem));font-size:var(--mat-dialog-supporting-text-size, var(--mat-sys-body-medium-size, 1rem));font-weight:var(--mat-dialog-supporting-text-weight, var(--mat-sys-body-medium-weight, 400));letter-spacing:var(--mat-dialog-supporting-text-tracking, var(--mat-sys-body-medium-tracking, 0.03125em))}.mat-mdc-dialog-container .mat-mdc-dialog-content{padding:var(--mat-dialog-content-padding, 20px 24px)}.mat-mdc-dialog-container-with-actions .mat-mdc-dialog-content{padding:var(--mat-dialog-with-actions-content-padding, 20px 24px 0)}.mat-mdc-dialog-container .mat-mdc-dialog-title+.mat-mdc-dialog-content{padding-top:0}.mat-mdc-dialog-actions{display:flex;position:relative;flex-shrink:0;flex-wrap:wrap;align-items:center;box-sizing:border-box;min-height:52px;margin:0;border-top:1px solid rgba(0,0,0,0);padding:var(--mat-dialog-actions-padding, 16px 24px);justify-content:var(--mat-dialog-actions-alignment, flex-end)}@media(forced-colors: active){.mat-mdc-dialog-actions{border-top-color:CanvasText}}.mat-mdc-dialog-actions.mat-mdc-dialog-actions-align-start,.mat-mdc-dialog-actions[align=start]{justify-content:start}.mat-mdc-dialog-actions.mat-mdc-dialog-actions-align-center,.mat-mdc-dialog-actions[align=center]{justify-content:center}.mat-mdc-dialog-actions.mat-mdc-dialog-actions-align-end,.mat-mdc-dialog-actions[align=end]{justify-content:flex-end}.mat-mdc-dialog-actions .mat-button-base+.mat-button-base,.mat-mdc-dialog-actions .mat-mdc-button-base+.mat-mdc-button-base{margin-left:8px}[dir=rtl] .mat-mdc-dialog-actions .mat-button-base+.mat-button-base,[dir=rtl] .mat-mdc-dialog-actions .mat-mdc-button-base+.mat-mdc-button-base{margin-left:0;margin-right:8px}.mat-mdc-dialog-component-host{display:contents}\n'],
    encapsulation: 2
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatDialogContainer, [{
    type: Component,
    args: [{
      selector: "mat-dialog-container",
      encapsulation: ViewEncapsulation.None,
      changeDetection: ChangeDetectionStrategy.Default,
      imports: [CdkPortalOutlet],
      host: {
        "class": "mat-mdc-dialog-container mdc-dialog",
        "tabindex": "-1",
        "[attr.aria-modal]": "_config.ariaModal",
        "[id]": "_config.id",
        "[attr.role]": "_config.role",
        "[attr.aria-labelledby]": "_config.ariaLabel ? null : _ariaLabelledByQueue[0]",
        "[attr.aria-label]": "_config.ariaLabel",
        "[attr.aria-describedby]": "_config.ariaDescribedBy || null",
        "[class._mat-animation-noopable]": "!_animationsEnabled",
        "[class.mat-mdc-dialog-container-with-actions]": "_actionSectionCount > 0"
      },
      template: '<div class="mat-mdc-dialog-inner-container mdc-dialog__container">\n  <div class="mat-mdc-dialog-surface mdc-dialog__surface">\n    <ng-template cdkPortalOutlet />\n  </div>\n</div>\n',
      styles: ['.mat-mdc-dialog-container{width:100%;height:100%;display:block;box-sizing:border-box;max-height:inherit;min-height:inherit;min-width:inherit;max-width:inherit;outline:0}.cdk-overlay-pane.mat-mdc-dialog-panel{max-width:var(--mat-dialog-container-max-width, 560px);min-width:var(--mat-dialog-container-min-width, 280px)}@media(max-width: 599px){.cdk-overlay-pane.mat-mdc-dialog-panel{max-width:var(--mat-dialog-container-small-max-width, calc(100vw - 32px))}}.mat-mdc-dialog-inner-container{display:flex;flex-direction:row;align-items:center;justify-content:space-around;box-sizing:border-box;height:100%;opacity:0;transition:opacity linear var(--mat-dialog-transition-duration, 0ms);max-height:inherit;min-height:inherit;min-width:inherit;max-width:inherit}.mdc-dialog--closing .mat-mdc-dialog-inner-container{transition:opacity 75ms linear;transform:none}.mdc-dialog--open .mat-mdc-dialog-inner-container{opacity:1}._mat-animation-noopable .mat-mdc-dialog-inner-container{transition:none}.mat-mdc-dialog-surface{display:flex;flex-direction:column;flex-grow:0;flex-shrink:0;box-sizing:border-box;width:100%;height:100%;position:relative;overflow-y:auto;outline:0;transform:scale(0.8);transition:transform var(--mat-dialog-transition-duration, 0ms) cubic-bezier(0, 0, 0.2, 1);max-height:inherit;min-height:inherit;min-width:inherit;max-width:inherit;box-shadow:var(--mat-dialog-container-elevation-shadow, none);border-radius:var(--mat-dialog-container-shape, var(--mat-sys-corner-extra-large, 4px));background-color:var(--mat-dialog-container-color, var(--mat-sys-surface, white))}[dir=rtl] .mat-mdc-dialog-surface{text-align:right}.mdc-dialog--open .mat-mdc-dialog-surface,.mdc-dialog--closing .mat-mdc-dialog-surface{transform:none}._mat-animation-noopable .mat-mdc-dialog-surface{transition:none}.mat-mdc-dialog-surface::before{position:absolute;box-sizing:border-box;width:100%;height:100%;top:0;left:0;border:2px solid rgba(0,0,0,0);border-radius:inherit;content:"";pointer-events:none}.mat-mdc-dialog-title{display:block;position:relative;flex-shrink:0;box-sizing:border-box;margin:0 0 1px;padding:var(--mat-dialog-headline-padding, 6px 24px 13px)}.mat-mdc-dialog-title::before{display:inline-block;width:0;height:40px;content:"";vertical-align:0}[dir=rtl] .mat-mdc-dialog-title{text-align:right}.mat-mdc-dialog-container .mat-mdc-dialog-title{color:var(--mat-dialog-subhead-color, var(--mat-sys-on-surface, rgba(0, 0, 0, 0.87)));font-family:var(--mat-dialog-subhead-font, var(--mat-sys-headline-small-font, inherit));line-height:var(--mat-dialog-subhead-line-height, var(--mat-sys-headline-small-line-height, 1.5rem));font-size:var(--mat-dialog-subhead-size, var(--mat-sys-headline-small-size, 1rem));font-weight:var(--mat-dialog-subhead-weight, var(--mat-sys-headline-small-weight, 400));letter-spacing:var(--mat-dialog-subhead-tracking, var(--mat-sys-headline-small-tracking, 0.03125em))}.mat-mdc-dialog-content{display:block;flex-grow:1;box-sizing:border-box;margin:0;overflow:auto;max-height:65vh}.mat-mdc-dialog-content>:first-child{margin-top:0}.mat-mdc-dialog-content>:last-child{margin-bottom:0}.mat-mdc-dialog-container .mat-mdc-dialog-content{color:var(--mat-dialog-supporting-text-color, var(--mat-sys-on-surface-variant, rgba(0, 0, 0, 0.6)));font-family:var(--mat-dialog-supporting-text-font, var(--mat-sys-body-medium-font, inherit));line-height:var(--mat-dialog-supporting-text-line-height, var(--mat-sys-body-medium-line-height, 1.5rem));font-size:var(--mat-dialog-supporting-text-size, var(--mat-sys-body-medium-size, 1rem));font-weight:var(--mat-dialog-supporting-text-weight, var(--mat-sys-body-medium-weight, 400));letter-spacing:var(--mat-dialog-supporting-text-tracking, var(--mat-sys-body-medium-tracking, 0.03125em))}.mat-mdc-dialog-container .mat-mdc-dialog-content{padding:var(--mat-dialog-content-padding, 20px 24px)}.mat-mdc-dialog-container-with-actions .mat-mdc-dialog-content{padding:var(--mat-dialog-with-actions-content-padding, 20px 24px 0)}.mat-mdc-dialog-container .mat-mdc-dialog-title+.mat-mdc-dialog-content{padding-top:0}.mat-mdc-dialog-actions{display:flex;position:relative;flex-shrink:0;flex-wrap:wrap;align-items:center;box-sizing:border-box;min-height:52px;margin:0;border-top:1px solid rgba(0,0,0,0);padding:var(--mat-dialog-actions-padding, 16px 24px);justify-content:var(--mat-dialog-actions-alignment, flex-end)}@media(forced-colors: active){.mat-mdc-dialog-actions{border-top-color:CanvasText}}.mat-mdc-dialog-actions.mat-mdc-dialog-actions-align-start,.mat-mdc-dialog-actions[align=start]{justify-content:start}.mat-mdc-dialog-actions.mat-mdc-dialog-actions-align-center,.mat-mdc-dialog-actions[align=center]{justify-content:center}.mat-mdc-dialog-actions.mat-mdc-dialog-actions-align-end,.mat-mdc-dialog-actions[align=end]{justify-content:flex-end}.mat-mdc-dialog-actions .mat-button-base+.mat-button-base,.mat-mdc-dialog-actions .mat-mdc-button-base+.mat-mdc-button-base{margin-left:8px}[dir=rtl] .mat-mdc-dialog-actions .mat-button-base+.mat-button-base,[dir=rtl] .mat-mdc-dialog-actions .mat-mdc-button-base+.mat-mdc-button-base{margin-left:0;margin-right:8px}.mat-mdc-dialog-component-host{display:contents}\n']
    }]
  }], null, null);
})();
var TRANSITION_DURATION_PROPERTY = "--mat-dialog-transition-duration";
function parseCssTime(time) {
  if (time == null) {
    return null;
  }
  if (typeof time === "number") {
    return time;
  }
  if (time.endsWith("ms")) {
    return coerceNumberProperty(time.substring(0, time.length - 2));
  }
  if (time.endsWith("s")) {
    return coerceNumberProperty(time.substring(0, time.length - 1)) * 1e3;
  }
  if (time === "0") {
    return 0;
  }
  return null;
}
var MatDialogState;
(function(MatDialogState2) {
  MatDialogState2[MatDialogState2["OPEN"] = 0] = "OPEN";
  MatDialogState2[MatDialogState2["CLOSING"] = 1] = "CLOSING";
  MatDialogState2[MatDialogState2["CLOSED"] = 2] = "CLOSED";
})(MatDialogState || (MatDialogState = {}));
var MatDialogRef = class {
  _ref;
  _config;
  _containerInstance;
  /** The instance of component opened into the dialog. */
  componentInstance;
  /**
   * `ComponentRef` of the component opened into the dialog. Will be
   * null when the dialog is opened using a `TemplateRef`.
   */
  componentRef;
  /** Whether the user is allowed to close the dialog. */
  disableClose;
  /** Unique ID for the dialog. */
  id;
  /** Subject for notifying the user that the dialog has finished opening. */
  _afterOpened = new Subject();
  /** Subject for notifying the user that the dialog has started closing. */
  _beforeClosed = new Subject();
  /** Result to be passed to afterClosed. */
  _result;
  /** Handle to the timeout that's running as a fallback in case the exit animation doesn't fire. */
  _closeFallbackTimeout;
  /** Current state of the dialog. */
  _state = MatDialogState.OPEN;
  // TODO(crisbeto): we shouldn't have to declare this property, because `DialogRef.close`
  // already has a second `options` parameter that we can use. The problem is that internal tests
  // have assertions like `expect(MatDialogRef.close).toHaveBeenCalledWith(foo)` which will break,
  // because it'll be called with two arguments by things like `MatDialogClose`.
  /** Interaction that caused the dialog to close. */
  _closeInteractionType;
  constructor(_ref, _config, _containerInstance) {
    this._ref = _ref;
    this._config = _config;
    this._containerInstance = _containerInstance;
    this.disableClose = _config.disableClose;
    this.id = _ref.id;
    _ref.addPanelClass("mat-mdc-dialog-panel");
    _containerInstance._animationStateChanged.pipe(filter((event) => event.state === "opened"), take(1)).subscribe(() => {
      this._afterOpened.next();
      this._afterOpened.complete();
    });
    _containerInstance._animationStateChanged.pipe(filter((event) => event.state === "closed"), take(1)).subscribe(() => {
      clearTimeout(this._closeFallbackTimeout);
      this._finishDialogClose();
    });
    _ref.overlayRef.detachments().subscribe(() => {
      this._beforeClosed.next(this._result);
      this._beforeClosed.complete();
      this._finishDialogClose();
    });
    merge(this.backdropClick(), this.keydownEvents().pipe(filter((event) => event.keyCode === ESCAPE && !this.disableClose && !hasModifierKey(event)))).subscribe((event) => {
      if (!this.disableClose) {
        event.preventDefault();
        _closeDialogVia(this, event.type === "keydown" ? "keyboard" : "mouse");
      }
    });
  }
  /**
   * Close the dialog.
   * @param dialogResult Optional result to return to the dialog opener.
   */
  close(dialogResult) {
    const closePredicate = this._config.closePredicate;
    if (closePredicate && !closePredicate(dialogResult, this._config, this.componentInstance)) {
      return;
    }
    this._result = dialogResult;
    this._containerInstance._animationStateChanged.pipe(filter((event) => event.state === "closing"), take(1)).subscribe((event) => {
      this._beforeClosed.next(dialogResult);
      this._beforeClosed.complete();
      this._ref.overlayRef.detachBackdrop();
      this._closeFallbackTimeout = setTimeout(() => this._finishDialogClose(), event.totalTime + 100);
    });
    this._state = MatDialogState.CLOSING;
    this._containerInstance._startExitAnimation();
  }
  /**
   * Gets an observable that is notified when the dialog is finished opening.
   */
  afterOpened() {
    return this._afterOpened;
  }
  /**
   * Gets an observable that is notified when the dialog is finished closing.
   */
  afterClosed() {
    return this._ref.closed;
  }
  /**
   * Gets an observable that is notified when the dialog has started closing.
   */
  beforeClosed() {
    return this._beforeClosed;
  }
  /**
   * Gets an observable that emits when the overlay's backdrop has been clicked.
   */
  backdropClick() {
    return this._ref.backdropClick;
  }
  /**
   * Gets an observable that emits when keydown events are targeted on the overlay.
   */
  keydownEvents() {
    return this._ref.keydownEvents;
  }
  /**
   * Updates the dialog's position.
   * @param position New dialog position.
   */
  updatePosition(position) {
    let strategy = this._ref.config.positionStrategy;
    if (position && (position.left || position.right)) {
      position.left ? strategy.left(position.left) : strategy.right(position.right);
    } else {
      strategy.centerHorizontally();
    }
    if (position && (position.top || position.bottom)) {
      position.top ? strategy.top(position.top) : strategy.bottom(position.bottom);
    } else {
      strategy.centerVertically();
    }
    this._ref.updatePosition();
    return this;
  }
  /**
   * Updates the dialog's width and height.
   * @param width New width of the dialog.
   * @param height New height of the dialog.
   */
  updateSize(width = "", height = "") {
    this._ref.updateSize(width, height);
    return this;
  }
  /** Add a CSS class or an array of classes to the overlay pane. */
  addPanelClass(classes) {
    this._ref.addPanelClass(classes);
    return this;
  }
  /** Remove a CSS class or an array of classes from the overlay pane. */
  removePanelClass(classes) {
    this._ref.removePanelClass(classes);
    return this;
  }
  /** Gets the current state of the dialog's lifecycle. */
  getState() {
    return this._state;
  }
  /**
   * Finishes the dialog close by updating the state of the dialog
   * and disposing the overlay.
   */
  _finishDialogClose() {
    this._state = MatDialogState.CLOSED;
    this._ref.close(this._result, {
      focusOrigin: this._closeInteractionType
    });
    this.componentInstance = null;
  }
};
function _closeDialogVia(ref, interactionType, result) {
  ref._closeInteractionType = interactionType;
  return ref.close(result);
}
var MAT_DIALOG_DATA = new InjectionToken("MatMdcDialogData");
var MAT_DIALOG_DEFAULT_OPTIONS = new InjectionToken("mat-mdc-dialog-default-options");
var MAT_DIALOG_SCROLL_STRATEGY = new InjectionToken("mat-mdc-dialog-scroll-strategy", {
  providedIn: "root",
  factory: () => {
    const injector = inject(Injector);
    return () => createBlockScrollStrategy(injector);
  }
});
var MatDialog = class _MatDialog {
  _defaultOptions = inject(MAT_DIALOG_DEFAULT_OPTIONS, {
    optional: true
  });
  _scrollStrategy = inject(MAT_DIALOG_SCROLL_STRATEGY);
  _parentDialog = inject(_MatDialog, {
    optional: true,
    skipSelf: true
  });
  _idGenerator = inject(_IdGenerator);
  _injector = inject(Injector);
  _dialog = inject(Dialog);
  _animationsDisabled = _animationsDisabled();
  _openDialogsAtThisLevel = [];
  _afterAllClosedAtThisLevel = new Subject();
  _afterOpenedAtThisLevel = new Subject();
  dialogConfigClass = MatDialogConfig;
  _dialogRefConstructor;
  _dialogContainerType;
  _dialogDataToken;
  /** Keeps track of the currently-open dialogs. */
  get openDialogs() {
    return this._parentDialog ? this._parentDialog.openDialogs : this._openDialogsAtThisLevel;
  }
  /** Stream that emits when a dialog has been opened. */
  get afterOpened() {
    return this._parentDialog ? this._parentDialog.afterOpened : this._afterOpenedAtThisLevel;
  }
  _getAfterAllClosed() {
    const parent = this._parentDialog;
    return parent ? parent._getAfterAllClosed() : this._afterAllClosedAtThisLevel;
  }
  /**
   * Stream that emits when all open dialog have finished closing.
   * Will emit on subscribe if there are no open dialogs to begin with.
   */
  afterAllClosed = defer(() => this.openDialogs.length ? this._getAfterAllClosed() : this._getAfterAllClosed().pipe(startWith(void 0)));
  constructor() {
    this._dialogRefConstructor = MatDialogRef;
    this._dialogContainerType = MatDialogContainer;
    this._dialogDataToken = MAT_DIALOG_DATA;
  }
  open(componentOrTemplateRef, config) {
    let dialogRef;
    config = __spreadValues(__spreadValues({}, this._defaultOptions || new MatDialogConfig()), config);
    config.id = config.id || this._idGenerator.getId("mat-mdc-dialog-");
    config.scrollStrategy = config.scrollStrategy || this._scrollStrategy();
    const cdkRef = this._dialog.open(componentOrTemplateRef, __spreadProps(__spreadValues({}, config), {
      positionStrategy: createGlobalPositionStrategy(this._injector).centerHorizontally().centerVertically(),
      // Disable closing since we need to sync it up to the animation ourselves.
      disableClose: true,
      // Closing is tied to our animation so the close predicate has to be implemented separately.
      closePredicate: void 0,
      // Disable closing on destroy, because this service cleans up its open dialogs as well.
      // We want to do the cleanup here, rather than the CDK service, because the CDK destroys
      // the dialogs immediately whereas we want it to wait for the animations to finish.
      closeOnDestroy: false,
      // Disable closing on detachments so that we can sync up the animation.
      // The Material dialog ref handles this manually.
      closeOnOverlayDetachments: false,
      disableAnimations: this._animationsDisabled || config.enterAnimationDuration?.toLocaleString() === "0" || config.exitAnimationDuration?.toString() === "0",
      container: {
        type: this._dialogContainerType,
        providers: () => [
          // Provide our config as the CDK config as well since it has the same interface as the
          // CDK one, but it contains the actual values passed in by the user for things like
          // `disableClose` which we disable for the CDK dialog since we handle it ourselves.
          {
            provide: this.dialogConfigClass,
            useValue: config
          },
          {
            provide: DialogConfig,
            useValue: config
          }
        ]
      },
      templateContext: () => ({
        dialogRef
      }),
      providers: (ref, cdkConfig, dialogContainer) => {
        dialogRef = new this._dialogRefConstructor(ref, config, dialogContainer);
        dialogRef.updatePosition(config?.position);
        return [{
          provide: this._dialogContainerType,
          useValue: dialogContainer
        }, {
          provide: this._dialogDataToken,
          useValue: cdkConfig.data
        }, {
          provide: this._dialogRefConstructor,
          useValue: dialogRef
        }];
      }
    }));
    dialogRef.componentRef = cdkRef.componentRef;
    dialogRef.componentInstance = cdkRef.componentInstance;
    this.openDialogs.push(dialogRef);
    this.afterOpened.next(dialogRef);
    dialogRef.afterClosed().subscribe(() => {
      const index = this.openDialogs.indexOf(dialogRef);
      if (index > -1) {
        this.openDialogs.splice(index, 1);
        if (!this.openDialogs.length) {
          this._getAfterAllClosed().next();
        }
      }
    });
    return dialogRef;
  }
  /**
   * Closes all of the currently-open dialogs.
   */
  closeAll() {
    this._closeDialogs(this.openDialogs);
  }
  /**
   * Finds an open dialog by its id.
   * @param id ID to use when looking up the dialog.
   */
  getDialogById(id) {
    return this.openDialogs.find((dialog) => dialog.id === id);
  }
  ngOnDestroy() {
    this._closeDialogs(this._openDialogsAtThisLevel);
    this._afterAllClosedAtThisLevel.complete();
    this._afterOpenedAtThisLevel.complete();
  }
  _closeDialogs(dialogs) {
    let i = dialogs.length;
    while (i--) {
      dialogs[i].close();
    }
  }
  static \u0275fac = function MatDialog_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MatDialog)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _MatDialog,
    factory: _MatDialog.\u0275fac,
    providedIn: "root"
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatDialog, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [], null);
})();
var MatDialogClose = class _MatDialogClose {
  dialogRef = inject(MatDialogRef, {
    optional: true
  });
  _elementRef = inject(ElementRef);
  _dialog = inject(MatDialog);
  /** Screen-reader label for the button. */
  ariaLabel;
  /** Default to "button" to prevents accidental form submits. */
  type = "button";
  /** Dialog close input. */
  dialogResult;
  _matDialogClose;
  constructor() {
  }
  ngOnInit() {
    if (!this.dialogRef) {
      this.dialogRef = getClosestDialog(this._elementRef, this._dialog.openDialogs);
    }
  }
  ngOnChanges(changes) {
    const proxiedChange = changes["_matDialogClose"] || changes["_matDialogCloseResult"];
    if (proxiedChange) {
      this.dialogResult = proxiedChange.currentValue;
    }
  }
  _onButtonClick(event) {
    _closeDialogVia(this.dialogRef, event.screenX === 0 && event.screenY === 0 ? "keyboard" : "mouse", this.dialogResult);
  }
  static \u0275fac = function MatDialogClose_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MatDialogClose)();
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _MatDialogClose,
    selectors: [["", "mat-dialog-close", ""], ["", "matDialogClose", ""]],
    hostVars: 2,
    hostBindings: function MatDialogClose_HostBindings(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275listener("click", function MatDialogClose_click_HostBindingHandler($event) {
          return ctx._onButtonClick($event);
        });
      }
      if (rf & 2) {
        \u0275\u0275attribute("aria-label", ctx.ariaLabel || null)("type", ctx.type);
      }
    },
    inputs: {
      ariaLabel: [0, "aria-label", "ariaLabel"],
      type: "type",
      dialogResult: [0, "mat-dialog-close", "dialogResult"],
      _matDialogClose: [0, "matDialogClose", "_matDialogClose"]
    },
    exportAs: ["matDialogClose"],
    features: [\u0275\u0275NgOnChangesFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatDialogClose, [{
    type: Directive,
    args: [{
      selector: "[mat-dialog-close], [matDialogClose]",
      exportAs: "matDialogClose",
      host: {
        "(click)": "_onButtonClick($event)",
        "[attr.aria-label]": "ariaLabel || null",
        "[attr.type]": "type"
      }
    }]
  }], () => [], {
    ariaLabel: [{
      type: Input,
      args: ["aria-label"]
    }],
    type: [{
      type: Input
    }],
    dialogResult: [{
      type: Input,
      args: ["mat-dialog-close"]
    }],
    _matDialogClose: [{
      type: Input,
      args: ["matDialogClose"]
    }]
  });
})();
var MatDialogLayoutSection = class _MatDialogLayoutSection {
  _dialogRef = inject(MatDialogRef, {
    optional: true
  });
  _elementRef = inject(ElementRef);
  _dialog = inject(MatDialog);
  constructor() {
  }
  ngOnInit() {
    if (!this._dialogRef) {
      this._dialogRef = getClosestDialog(this._elementRef, this._dialog.openDialogs);
    }
    if (this._dialogRef) {
      Promise.resolve().then(() => {
        this._onAdd();
      });
    }
  }
  ngOnDestroy() {
    const instance = this._dialogRef?._containerInstance;
    if (instance) {
      Promise.resolve().then(() => {
        this._onRemove();
      });
    }
  }
  static \u0275fac = function MatDialogLayoutSection_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MatDialogLayoutSection)();
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _MatDialogLayoutSection
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatDialogLayoutSection, [{
    type: Directive
  }], () => [], null);
})();
var MatDialogTitle = class _MatDialogTitle extends MatDialogLayoutSection {
  id = inject(_IdGenerator).getId("mat-mdc-dialog-title-");
  _onAdd() {
    this._dialogRef._containerInstance?._addAriaLabelledBy?.(this.id);
  }
  _onRemove() {
    this._dialogRef?._containerInstance?._removeAriaLabelledBy?.(this.id);
  }
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275MatDialogTitle_BaseFactory;
    return function MatDialogTitle_Factory(__ngFactoryType__) {
      return (\u0275MatDialogTitle_BaseFactory || (\u0275MatDialogTitle_BaseFactory = \u0275\u0275getInheritedFactory(_MatDialogTitle)))(__ngFactoryType__ || _MatDialogTitle);
    };
  })();
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _MatDialogTitle,
    selectors: [["", "mat-dialog-title", ""], ["", "matDialogTitle", ""]],
    hostAttrs: [1, "mat-mdc-dialog-title", "mdc-dialog__title"],
    hostVars: 1,
    hostBindings: function MatDialogTitle_HostBindings(rf, ctx) {
      if (rf & 2) {
        \u0275\u0275domProperty("id", ctx.id);
      }
    },
    inputs: {
      id: "id"
    },
    exportAs: ["matDialogTitle"],
    features: [\u0275\u0275InheritDefinitionFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatDialogTitle, [{
    type: Directive,
    args: [{
      selector: "[mat-dialog-title], [matDialogTitle]",
      exportAs: "matDialogTitle",
      host: {
        "class": "mat-mdc-dialog-title mdc-dialog__title",
        "[id]": "id"
      }
    }]
  }], null, {
    id: [{
      type: Input
    }]
  });
})();
var MatDialogContent = class _MatDialogContent {
  static \u0275fac = function MatDialogContent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MatDialogContent)();
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _MatDialogContent,
    selectors: [["", "mat-dialog-content", ""], ["mat-dialog-content"], ["", "matDialogContent", ""]],
    hostAttrs: [1, "mat-mdc-dialog-content", "mdc-dialog__content"],
    features: [\u0275\u0275HostDirectivesFeature([CdkScrollable])]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatDialogContent, [{
    type: Directive,
    args: [{
      selector: `[mat-dialog-content], mat-dialog-content, [matDialogContent]`,
      host: {
        "class": "mat-mdc-dialog-content mdc-dialog__content"
      },
      hostDirectives: [CdkScrollable]
    }]
  }], null, null);
})();
var MatDialogActions = class _MatDialogActions extends MatDialogLayoutSection {
  /**
   * Horizontal alignment of action buttons.
   */
  align;
  _onAdd() {
    this._dialogRef._containerInstance?._updateActionSectionCount?.(1);
  }
  _onRemove() {
    this._dialogRef._containerInstance?._updateActionSectionCount?.(-1);
  }
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275MatDialogActions_BaseFactory;
    return function MatDialogActions_Factory(__ngFactoryType__) {
      return (\u0275MatDialogActions_BaseFactory || (\u0275MatDialogActions_BaseFactory = \u0275\u0275getInheritedFactory(_MatDialogActions)))(__ngFactoryType__ || _MatDialogActions);
    };
  })();
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _MatDialogActions,
    selectors: [["", "mat-dialog-actions", ""], ["mat-dialog-actions"], ["", "matDialogActions", ""]],
    hostAttrs: [1, "mat-mdc-dialog-actions", "mdc-dialog__actions"],
    hostVars: 6,
    hostBindings: function MatDialogActions_HostBindings(rf, ctx) {
      if (rf & 2) {
        \u0275\u0275classProp("mat-mdc-dialog-actions-align-start", ctx.align === "start")("mat-mdc-dialog-actions-align-center", ctx.align === "center")("mat-mdc-dialog-actions-align-end", ctx.align === "end");
      }
    },
    inputs: {
      align: "align"
    },
    features: [\u0275\u0275InheritDefinitionFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatDialogActions, [{
    type: Directive,
    args: [{
      selector: `[mat-dialog-actions], mat-dialog-actions, [matDialogActions]`,
      host: {
        "class": "mat-mdc-dialog-actions mdc-dialog__actions",
        "[class.mat-mdc-dialog-actions-align-start]": 'align === "start"',
        "[class.mat-mdc-dialog-actions-align-center]": 'align === "center"',
        "[class.mat-mdc-dialog-actions-align-end]": 'align === "end"'
      }
    }]
  }], null, {
    align: [{
      type: Input
    }]
  });
})();
function getClosestDialog(element, openDialogs) {
  let parent = element.nativeElement.parentElement;
  while (parent && !parent.classList.contains("mat-mdc-dialog-container")) {
    parent = parent.parentElement;
  }
  return parent ? openDialogs.find((dialog) => dialog.id === parent.id) : null;
}
var DIRECTIVES = [MatDialogContainer, MatDialogClose, MatDialogTitle, MatDialogActions, MatDialogContent];
var MatDialogModule = class _MatDialogModule {
  static \u0275fac = function MatDialogModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MatDialogModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
    type: _MatDialogModule,
    imports: [DialogModule, OverlayModule, PortalModule, MatCommonModule, MatDialogContainer, MatDialogClose, MatDialogTitle, MatDialogActions, MatDialogContent],
    exports: [MatCommonModule, MatDialogContainer, MatDialogClose, MatDialogTitle, MatDialogActions, MatDialogContent]
  });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
    providers: [MatDialog],
    imports: [DialogModule, OverlayModule, PortalModule, MatCommonModule, MatCommonModule]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatDialogModule, [{
    type: NgModule,
    args: [{
      imports: [DialogModule, OverlayModule, PortalModule, MatCommonModule, ...DIRECTIVES],
      exports: [MatCommonModule, ...DIRECTIVES],
      providers: [MatDialog]
    }]
  }], null, null);
})();

// src/app/modules/setting/domain/dto/site.dto.ts
var COUNTRIES = [
  { code: "AF", name: "Afghanistan" },
  { code: "ZA", name: "Afrique du Sud" },
  { code: "AL", name: "Albanie" },
  { code: "DZ", name: "Alg\xE9rie" },
  { code: "DE", name: "Allemagne" },
  { code: "AD", name: "Andorre" },
  { code: "AO", name: "Angola" },
  { code: "SA", name: "Arabie Saoudite" },
  { code: "AR", name: "Argentine" },
  { code: "AM", name: "Arm\xE9nie" },
  { code: "AU", name: "Australie" },
  { code: "AT", name: "Autriche" },
  { code: "AZ", name: "Azerba\xEFdjan" },
  { code: "BS", name: "Bahamas" },
  { code: "BH", name: "Bahre\xEFn" },
  { code: "BD", name: "Bangladesh" },
  { code: "BB", name: "Barbade" },
  { code: "BE", name: "Belgique" },
  { code: "BZ", name: "Belize" },
  { code: "BJ", name: "B\xE9nin" },
  { code: "BT", name: "Bhoutan" },
  { code: "BY", name: "Bi\xE9lorussie" },
  { code: "BO", name: "Bolivie" },
  { code: "BA", name: "Bosnie-Herz\xE9govine" },
  { code: "BW", name: "Botswana" },
  { code: "BR", name: "Br\xE9sil" },
  { code: "BN", name: "Brunei" },
  { code: "BG", name: "Bulgarie" },
  { code: "BF", name: "Burkina Faso" },
  { code: "BI", name: "Burundi" },
  { code: "KH", name: "Cambodge" },
  { code: "CM", name: "Cameroun" },
  { code: "CA", name: "Canada" },
  { code: "CV", name: "Cap-Vert" },
  { code: "CL", name: "Chili" },
  { code: "CN", name: "Chine" },
  { code: "CY", name: "Chypre" },
  { code: "CO", name: "Colombie" },
  { code: "KM", name: "Comores" },
  { code: "CG", name: "Congo" },
  { code: "CD", name: "Congo (RDC)" },
  { code: "KR", name: "Cor\xE9e du Sud" },
  { code: "KP", name: "Cor\xE9e du Nord" },
  { code: "CR", name: "Costa Rica" },
  { code: "CI", name: "C\xF4te d'Ivoire" },
  { code: "HR", name: "Croatie" },
  { code: "CU", name: "Cuba" },
  { code: "DK", name: "Danemark" },
  { code: "DJ", name: "Djibouti" },
  { code: "DM", name: "Dominique" },
  { code: "EG", name: "\xC9gypte" },
  { code: "AE", name: "\xC9mirats arabes unis" },
  { code: "EC", name: "\xC9quateur" },
  { code: "ER", name: "\xC9rythr\xE9e" },
  { code: "ES", name: "Espagne" },
  { code: "EE", name: "Estonie" },
  { code: "US", name: "\xC9tats-Unis" },
  { code: "ET", name: "\xC9thiopie" },
  { code: "FJ", name: "Fidji" },
  { code: "FI", name: "Finlande" },
  { code: "FR", name: "France" },
  { code: "GA", name: "Gabon" },
  { code: "GM", name: "Gambie" },
  { code: "GE", name: "G\xE9orgie" },
  { code: "GH", name: "Ghana" },
  { code: "GR", name: "Gr\xE8ce" },
  { code: "GD", name: "Grenade" },
  { code: "GT", name: "Guatemala" },
  { code: "GN", name: "Guin\xE9e" },
  { code: "GQ", name: "Guin\xE9e \xE9quatoriale" },
  { code: "GW", name: "Guin\xE9e-Bissau" },
  { code: "GY", name: "Guyana" },
  { code: "HT", name: "Ha\xEFti" },
  { code: "HN", name: "Honduras" },
  { code: "HU", name: "Hongrie" },
  { code: "IN", name: "Inde" },
  { code: "ID", name: "Indon\xE9sie" },
  { code: "IQ", name: "Irak" },
  { code: "IR", name: "Iran" },
  { code: "IE", name: "Irlande" },
  { code: "IS", name: "Islande" },
  { code: "IL", name: "Isra\xEBl" },
  { code: "IT", name: "Italie" },
  { code: "JM", name: "Jama\xEFque" },
  { code: "JP", name: "Japon" },
  { code: "JO", name: "Jordanie" },
  { code: "KZ", name: "Kazakhstan" },
  { code: "KE", name: "Kenya" },
  { code: "KG", name: "Kirghizistan" },
  { code: "KI", name: "Kiribati" },
  { code: "KW", name: "Kowe\xEFt" },
  { code: "LA", name: "Laos" },
  { code: "LS", name: "Lesotho" },
  { code: "LV", name: "Lettonie" },
  { code: "LB", name: "Liban" },
  { code: "LR", name: "Liberia" },
  { code: "LY", name: "Libye" },
  { code: "LI", name: "Liechtenstein" },
  { code: "LT", name: "Lituanie" },
  { code: "LU", name: "Luxembourg" },
  { code: "MK", name: "Mac\xE9doine du Nord" },
  { code: "MG", name: "Madagascar" },
  { code: "MY", name: "Malaisie" },
  { code: "MW", name: "Malawi" },
  { code: "MV", name: "Maldives" },
  { code: "ML", name: "Mali" },
  { code: "MT", name: "Malte" },
  { code: "MA", name: "Maroc" },
  { code: "MH", name: "\xCEles Marshall" },
  { code: "MU", name: "Maurice" },
  { code: "MR", name: "Mauritanie" },
  { code: "MX", name: "Mexique" },
  { code: "FM", name: "Micron\xE9sie" },
  { code: "MD", name: "Moldavie" },
  { code: "MC", name: "Monaco" },
  { code: "MN", name: "Mongolie" },
  { code: "ME", name: "Mont\xE9n\xE9gro" },
  { code: "MZ", name: "Mozambique" },
  { code: "MM", name: "Myanmar" },
  { code: "NA", name: "Namibie" },
  { code: "NR", name: "Nauru" },
  { code: "NP", name: "N\xE9pal" },
  { code: "NI", name: "Nicaragua" },
  { code: "NE", name: "Niger" },
  { code: "NG", name: "Nigeria" },
  { code: "NO", name: "Norv\xE8ge" },
  { code: "NZ", name: "Nouvelle-Z\xE9lande" },
  { code: "OM", name: "Oman" },
  { code: "UG", name: "Ouganda" },
  { code: "UZ", name: "Ouzb\xE9kistan" },
  { code: "PK", name: "Pakistan" },
  { code: "PW", name: "Palaos" },
  { code: "PA", name: "Panama" },
  { code: "PG", name: "Papouasie-Nouvelle-Guin\xE9e" },
  { code: "PY", name: "Paraguay" },
  { code: "NL", name: "Pays-Bas" },
  { code: "PE", name: "P\xE9rou" },
  { code: "PH", name: "Philippines" },
  { code: "PL", name: "Pologne" },
  { code: "PT", name: "Portugal" },
  { code: "QA", name: "Qatar" },
  { code: "CF", name: "R\xE9publique centrafricaine" },
  { code: "DO", name: "R\xE9publique dominicaine" },
  { code: "CZ", name: "R\xE9publique tch\xE8que" },
  { code: "RO", name: "Roumanie" },
  { code: "GB", name: "Royaume-Uni" },
  { code: "RU", name: "Russie" },
  { code: "RW", name: "Rwanda" },
  { code: "KN", name: "Saint-Christophe-et-Ni\xE9v\xE8s" },
  { code: "SM", name: "Saint-Marin" },
  { code: "VC", name: "Saint-Vincent-et-les-Grenadines" },
  { code: "LC", name: "Sainte-Lucie" },
  { code: "SV", name: "Salvador" },
  { code: "WS", name: "Samoa" },
  { code: "ST", name: "Sao Tom\xE9-et-Principe" },
  { code: "SN", name: "S\xE9n\xE9gal" },
  { code: "RS", name: "Serbie" },
  { code: "SC", name: "Seychelles" },
  { code: "SL", name: "Sierra Leone" },
  { code: "SG", name: "Singapour" },
  { code: "SK", name: "Slovaquie" },
  { code: "SI", name: "Slov\xE9nie" },
  { code: "SO", name: "Somalie" },
  { code: "SD", name: "Soudan" },
  { code: "SS", name: "Soudan du Sud" },
  { code: "LK", name: "Sri Lanka" },
  { code: "SE", name: "Su\xE8de" },
  { code: "CH", name: "Suisse" },
  { code: "SR", name: "Suriname" },
  { code: "SY", name: "Syrie" },
  { code: "TJ", name: "Tadjikistan" },
  { code: "TZ", name: "Tanzanie" },
  { code: "TD", name: "Tchad" },
  { code: "TH", name: "Tha\xEFlande" },
  { code: "TL", name: "Timor oriental" },
  { code: "TG", name: "Togo" },
  { code: "TO", name: "Tonga" },
  { code: "TT", name: "Trinit\xE9-et-Tobago" },
  { code: "TN", name: "Tunisie" },
  { code: "TM", name: "Turkm\xE9nistan" },
  { code: "TR", name: "Turquie" },
  { code: "TV", name: "Tuvalu" },
  { code: "UA", name: "Ukraine" },
  { code: "UY", name: "Uruguay" },
  { code: "VU", name: "Vanuatu" },
  { code: "VA", name: "Vatican" },
  { code: "VE", name: "Venezuela" },
  { code: "VN", name: "Vietnam" },
  { code: "YE", name: "Y\xE9men" },
  { code: "ZM", name: "Zambie" },
  { code: "ZW", name: "Zimbabwe" }
];
var SITE_TYPE_LABELS = {
  SIEGE: "Si\xE8ge social",
  SUCCURSALE: "Succursale",
  ENTREPOT: "Entrep\xF4t",
  USINE: "Usine",
  BUREAU: "Bureau",
  MAGASIN: "Magasin",
  ATELIER: "Atelier",
  LABORATOIRE: "Laboratoire",
  CENTRE_DISTRIBUTION: "Centre de distribution"
};
function generateSiteCode(nom) {
  const cleanName = nom.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toUpperCase().replace(/[^A-Z]/g, "");
  const prefix = cleanName.substring(0, Math.min(3, cleanName.length)) || "SIT";
  const timestamp = Date.now().toString().slice(-4);
  return `${prefix}${timestamp}`;
}
function getCountryName(code) {
  const country = COUNTRIES.find((c) => c.code === code);
  return country ? country.name : code;
}
function getSiteTypeLabel(type) {
  return SITE_TYPE_LABELS[type] || type;
}

// src/app/modules/setting/presentation/pages/general-settings/site-settings/site-settings.component.ts
function SiteSettingsComponent_div_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 70);
    \u0275\u0275element(1, "i", 71);
    \u0275\u0275text(2);
    \u0275\u0275elementStart(3, "button", 44);
    \u0275\u0275listener("click", function SiteSettingsComponent_div_12_Template_button_click_3_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.successMessage = "");
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r1.successMessage, " ");
  }
}
function SiteSettingsComponent_div_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 72);
    \u0275\u0275element(1, "i", 73);
    \u0275\u0275text(2);
    \u0275\u0275elementStart(3, "button", 44);
    \u0275\u0275listener("click", function SiteSettingsComponent_div_13_Template_button_click_3_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.errorMessage = "");
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r1.errorMessage, " ");
  }
}
function SiteSettingsComponent_option_80_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 74);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const type_r4 = ctx.$implicit;
    \u0275\u0275property("value", type_r4.value);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 2, "siteSettings.siteTypes." + type_r4.value), " ");
  }
}
function SiteSettingsComponent_option_103_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 74);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const country_r5 = ctx.$implicit;
    \u0275\u0275property("value", country_r5.code);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", country_r5.name, " ");
  }
}
function SiteSettingsComponent_div_106_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 75)(1, "div", 76)(2, "span", 77);
    \u0275\u0275text(3, "Chargement...");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "p", 78);
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(6, 1, "siteSettings.loading"));
  }
}
function SiteSettingsComponent_div_107_tr_32_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 83);
    \u0275\u0275element(2, "i", 84);
    \u0275\u0275elementStart(3, "p", 85);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(5, 1, "siteSettings.noSites"));
  }
}
function SiteSettingsComponent_div_107_tr_33_small_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 52);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "slice");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const site_r7 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2(" ", \u0275\u0275pipeBind3(2, 2, site_r7.description, 0, 50), "", site_r7.description.length > 50 ? "..." : "", " ");
  }
}
function SiteSettingsComponent_div_107_tr_33_span_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 103);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const site_r7 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", site_r7.responsableNom, " ");
  }
}
function SiteSettingsComponent_div_107_tr_33_span_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 52);
    \u0275\u0275text(1, "-");
    \u0275\u0275elementEnd();
  }
}
function SiteSettingsComponent_div_107_tr_33_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td")(2, "strong");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "td")(5, "div", 86)(6, "div", 87);
    \u0275\u0275element(7, "i", 17);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div")(9, "div", 88);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275template(11, SiteSettingsComponent_div_107_tr_33_small_11_Template, 3, 6, "small", 89);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(12, "td")(13, "span", 90);
    \u0275\u0275text(14);
    \u0275\u0275pipe(15, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "td");
    \u0275\u0275text(17);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "td")(19, "span", 91);
    \u0275\u0275text(20);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(21, "td");
    \u0275\u0275template(22, SiteSettingsComponent_div_107_tr_33_span_22_Template, 2, 1, "span", 92)(23, SiteSettingsComponent_div_107_tr_33_span_23_Template, 2, 0, "span", 89);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "td")(25, "div", 93)(26, "input", 94);
    \u0275\u0275listener("change", function SiteSettingsComponent_div_107_tr_33_Template_input_change_26_listener() {
      const site_r7 = \u0275\u0275restoreView(_r6).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.toggleSiteStatus(site_r7));
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(27, "td");
    \u0275\u0275text(28);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "td", 81)(30, "div", 95)(31, "button", 96);
    \u0275\u0275element(32, "i", 97);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(33, "ul", 98)(34, "li")(35, "a", 99);
    \u0275\u0275listener("click", function SiteSettingsComponent_div_107_tr_33_Template_a_click_35_listener() {
      const site_r7 = \u0275\u0275restoreView(_r6).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.openEditModal(site_r7));
    });
    \u0275\u0275element(36, "i", 100);
    \u0275\u0275text(37);
    \u0275\u0275pipe(38, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(39, "li")(40, "a", 101);
    \u0275\u0275listener("click", function SiteSettingsComponent_div_107_tr_33_Template_a_click_40_listener() {
      const site_r7 = \u0275\u0275restoreView(_r6).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.deleteSite(site_r7));
    });
    \u0275\u0275element(41, "i", 102);
    \u0275\u0275text(42);
    \u0275\u0275pipe(43, "translate");
    \u0275\u0275elementEnd()()()()()();
  }
  if (rf & 2) {
    const site_r7 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(site_r7.code);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(site_r7.nom);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", site_r7.description);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(15, 12, "siteSettings.siteTypes." + site_r7.type), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(site_r7.ville);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r1.getCountryName(site_r7.pays), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", site_r7.responsableNom);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !site_r7.responsableNom);
    \u0275\u0275advance(3);
    \u0275\u0275property("checked", site_r7.actif);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.formatDate(site_r7.dateCreation));
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(38, 14, "siteSettings.edit"), " ");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(43, 16, "siteSettings.delete"), " ");
  }
}
function SiteSettingsComponent_div_107_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 79)(1, "table", 80)(2, "thead")(3, "tr")(4, "th");
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "th");
    \u0275\u0275text(8);
    \u0275\u0275pipe(9, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "th");
    \u0275\u0275text(11);
    \u0275\u0275pipe(12, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "th");
    \u0275\u0275text(14);
    \u0275\u0275pipe(15, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "th");
    \u0275\u0275text(17);
    \u0275\u0275pipe(18, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "th");
    \u0275\u0275text(20);
    \u0275\u0275pipe(21, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "th");
    \u0275\u0275text(23);
    \u0275\u0275pipe(24, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "th");
    \u0275\u0275text(26);
    \u0275\u0275pipe(27, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "th", 81);
    \u0275\u0275text(29);
    \u0275\u0275pipe(30, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(31, "tbody");
    \u0275\u0275template(32, SiteSettingsComponent_div_107_tr_32_Template, 6, 3, "tr", 68)(33, SiteSettingsComponent_div_107_tr_33_Template, 44, 18, "tr", 82);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(6, 11, "siteSettings.code"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(9, 13, "siteSettings.name"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(12, 15, "siteSettings.type"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(15, 17, "siteSettings.city"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(18, 19, "siteSettings.country"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(21, 21, "siteSettings.manager"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(24, 23, "siteSettings.status"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(27, 25, "siteSettings.creationDate"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(30, 27, "siteSettings.actions"));
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", ctx_r1.paginatedSites.length === 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.paginatedSites);
  }
}
function SiteSettingsComponent_div_108_li_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "li", 106)(1, "a", 107);
    \u0275\u0275listener("click", function SiteSettingsComponent_div_108_li_11_Template_a_click_1_listener() {
      const page_r10 = \u0275\u0275restoreView(_r9).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.goToPage(page_r10));
    });
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const page_r10 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("active", page_r10 === ctx_r1.currentPage);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(page_r10 + 1);
  }
}
function SiteSettingsComponent_div_108_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 104)(1, "div");
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "nav")(7, "ul", 105)(8, "li", 106)(9, "a", 107);
    \u0275\u0275listener("click", function SiteSettingsComponent_div_108_Template_a_click_9_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.previousPage());
    });
    \u0275\u0275element(10, "i", 108);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(11, SiteSettingsComponent_div_108_li_11_Template, 3, 3, "li", 109);
    \u0275\u0275elementStart(12, "li", 106)(13, "a", 107);
    \u0275\u0275listener("click", function SiteSettingsComponent_div_108_Template_a_click_13_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.nextPage());
    });
    \u0275\u0275element(14, "i", 110);
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate6(" ", \u0275\u0275pipeBind1(3, 11, "siteSettings.showing"), " ", ctx_r1.currentPage * ctx_r1.pageSize + 1, " - ", ctx_r1.Math.min((ctx_r1.currentPage + 1) * ctx_r1.pageSize, ctx_r1.totalElements), " ", \u0275\u0275pipeBind1(4, 13, "siteSettings.of"), " ", ctx_r1.totalElements, " ", \u0275\u0275pipeBind1(5, 15, "siteSettings.sites"), " ");
    \u0275\u0275advance(6);
    \u0275\u0275classProp("disabled", ctx_r1.currentPage === 0);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngForOf", ctx_r1.paginationPages);
    \u0275\u0275advance();
    \u0275\u0275classProp("disabled", ctx_r1.currentPage >= ctx_r1.totalPages - 1);
  }
}
function SiteSettingsComponent_div_120_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 111);
    \u0275\u0275element(1, "i", 73);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r1.errorMessage, " ");
  }
}
function SiteSettingsComponent_div_129_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 112);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "siteSettings.siteForm.nameRequired"), " ");
  }
}
function SiteSettingsComponent_div_130_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 112);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "siteSettings.siteForm.nameMinLength"), " ");
  }
}
function SiteSettingsComponent_div_141_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 112);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "siteSettings.siteForm.codeRequired"), " ");
  }
}
function SiteSettingsComponent_div_142_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 112);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "siteSettings.siteForm.codePattern"), " ");
  }
}
function SiteSettingsComponent_option_150_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 74);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const type_r11 = ctx.$implicit;
    \u0275\u0275property("value", type_r11.value);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 2, "siteSettings.siteTypes." + type_r11.value), " ");
  }
}
function SiteSettingsComponent_div_151_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 112);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "siteSettings.siteForm.typeRequired"), " ");
  }
}
function SiteSettingsComponent_div_169_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 112);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "siteSettings.siteForm.cityRequired"), " ");
  }
}
function SiteSettingsComponent_option_180_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 74);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const country_r12 = ctx.$implicit;
    \u0275\u0275property("value", country_r12.code);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", country_r12.name, " ");
  }
}
function SiteSettingsComponent_div_181_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 112);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "siteSettings.siteForm.countryRequired"), " ");
  }
}
function SiteSettingsComponent_div_187_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 112);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "siteSettings.siteForm.emailInvalid"), " ");
  }
}
function SiteSettingsComponent_div_193_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 112);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "siteSettings.siteForm.phoneInvalid"), " ");
  }
}
function SiteSettingsComponent_div_199_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 112);
    \u0275\u0275text(1, " La superficie doit \xEAtre positive. ");
    \u0275\u0275elementEnd();
  }
}
function SiteSettingsComponent_span_216_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.isEditMode ? "Mettre \xE0 jour" : "Cr\xE9er", " ");
  }
}
function SiteSettingsComponent_span_217_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275element(1, "span", 113);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r1.isEditMode ? "Mise \xE0 jour..." : "Cr\xE9ation...", " ");
  }
}
function SiteSettingsComponent_div_218_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 114);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275classProp("show", ctx_r1.showModal);
  }
}
var SiteSettingsComponent = class _SiteSettingsComponent {
  fb;
  siteService;
  // Données
  sites = [];
  filteredSites = [];
  paginatedSites = [];
  // Formulaire
  siteForm;
  // États
  isLoading = false;
  isSaving = false;
  showModal = false;
  isEditMode = false;
  currentSiteId;
  // Messages
  errorMessage = "";
  successMessage = "";
  // Pagination
  currentPage = 0;
  pageSize = 10;
  totalPages = 0;
  totalElements = 0;
  // Filtres
  searchTerm = "";
  filterType = "";
  filterStatus = "";
  filterPays = "";
  // Options
  siteTypes = [];
  countries = COUNTRIES;
  responsables = [];
  // Statistiques
  statistics = {
    total: 0,
    actifs: 0,
    inactifs: 0,
    parType: {}
  };
  // Société de l'utilisateur
  currentUserSocieteId = null;
  // Unsubscribe
  destroy$ = new Subject();
  // Expose global objects for template
  Object = Object;
  Math = Math;
  constructor(fb, siteService) {
    this.fb = fb;
    this.siteService = siteService;
    this.siteForm = this.createSiteForm();
    this.initializeSiteTypes();
  }
  ngOnInit() {
    this.currentUserSocieteId = this.siteService.getCurrentUserSocieteId();
    if (this.currentUserSocieteId) {
      this.loadSites();
      this.loadStatistics();
    } else {
      this.errorMessage = "Impossible de r\xE9cup\xE9rer les informations de votre soci\xE9t\xE9.";
    }
    this.setupCodeGeneration();
  }
  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
  /**
   * Initialise les types de sites
   */
  initializeSiteTypes() {
    this.siteTypes = Object.entries(SITE_TYPE_LABELS).map(([value, label]) => ({
      value,
      label
    }));
  }
  /**
   * Crée le formulaire de site
   */
  createSiteForm() {
    return this.fb.group({
      nom: ["", [Validators.required, Validators.minLength(3), Validators.maxLength(100)]],
      code: ["", [Validators.required, Validators.pattern(/^[A-Z0-9]{3,20}$/)]],
      description: ["", [Validators.maxLength(500)]],
      ville: ["", [Validators.required, Validators.minLength(2)]],
      pays: ["", [Validators.required]],
      type: ["SIEGE", [Validators.required]],
      responsableId: [null],
      getEmplacement: [null],
      superficie: [null, [Validators.min(0)]],
      email: ["", [Validators.email]],
      telephone: ["", [Validators.pattern(/^[+]?[\d\s\-().]{8,20}$/)]],
      actif: [true]
    });
  }
  /**
   * Configure la génération automatique du code
   */
  setupCodeGeneration() {
    this.siteForm.get("nom")?.valueChanges.pipe(debounceTime(300), distinctUntilChanged(), takeUntil(this.destroy$)).subscribe((nom) => {
      if (nom && !this.siteForm.get("code")?.touched && !this.isEditMode) {
        const generatedCode = generateSiteCode(nom);
        this.siteForm.get("code")?.setValue(generatedCode);
      }
    });
  }
  /**
   * Charge la liste des sites
   */
  loadSites() {
    if (!this.currentUserSocieteId)
      return;
    this.isLoading = true;
    this.errorMessage = "";
    const params = {
      page: this.currentPage,
      size: this.pageSize,
      societeId: this.currentUserSocieteId
    };
    if (this.filterType) {
      params.type = this.filterType;
    }
    if (this.filterStatus === "active") {
      params.actif = true;
    } else if (this.filterStatus === "inactive") {
      params.actif = false;
    }
    if (this.filterPays) {
      params.pays = this.filterPays;
    }
    this.siteService.getSites(params).subscribe({
      next: (response) => {
        this.sites = response.content;
        this.totalPages = response.totalPages;
        this.totalElements = response.totalElements;
        this.applyClientSideFilters();
        this.isLoading = false;
      },
      error: (error) => {
        this.errorMessage = error.message;
        this.isLoading = false;
      }
    });
  }
  /**
   * Charge les statistiques
   */
  loadStatistics() {
    if (!this.currentUserSocieteId)
      return;
    this.siteService.getSiteStatistics(this.currentUserSocieteId).subscribe({
      next: (stats) => {
        this.statistics = stats;
      },
      error: (error) => {
        console.error("Erreur lors du chargement des statistiques:", error);
      }
    });
  }
  /**
   * Applique les filtres côté client (recherche)
   */
  applyClientSideFilters() {
    let filtered = [...this.sites];
    if (this.searchTerm) {
      const term = this.searchTerm.toLowerCase();
      filtered = filtered.filter((site) => site.nom.toLowerCase().includes(term) || site.code.toLowerCase().includes(term) || site.ville.toLowerCase().includes(term) || site.email && site.email.toLowerCase().includes(term));
    }
    this.filteredSites = filtered;
    this.updatePagination();
  }
  /**
   * Met à jour la pagination
   */
  updatePagination() {
    const startIndex = this.currentPage * this.pageSize;
    const endIndex = startIndex + this.pageSize;
    this.paginatedSites = this.filteredSites.slice(startIndex, endIndex);
    this.totalPages = Math.ceil(this.filteredSites.length / this.pageSize);
  }
  /**
   * Recherche avec debounce
   */
  onSearch(term) {
    this.searchTerm = term;
    this.currentPage = 0;
    this.applyClientSideFilters();
  }
  /**
   * Applique un filtre
   */
  onFilterChange() {
    this.currentPage = 0;
    this.loadSites();
  }
  /**
   * Ouvre le modal de création
   */
  openCreateModal() {
    this.isEditMode = false;
    this.currentSiteId = void 0;
    this.siteForm.reset({
      actif: true,
      type: "SIEGE"
    });
    this.showModal = true;
    this.errorMessage = "";
    this.successMessage = "";
  }
  /**
   * Ouvre le modal d'édition
   */
  openEditModal(site) {
    this.isEditMode = true;
    this.currentSiteId = site.id;
    this.siteForm.patchValue({
      nom: site.nom,
      code: site.code,
      description: site.description,
      ville: site.ville,
      pays: site.pays,
      type: site.type,
      responsableId: site.responsableId,
      getEmplacement: site.getEmplacement,
      superficie: site.superficie,
      email: site.email,
      telephone: site.telephone,
      actif: site.actif
    });
    this.showModal = true;
    this.errorMessage = "";
    this.successMessage = "";
  }
  /**
   * Ferme le modal
   */
  closeModal() {
    this.showModal = false;
    this.siteForm.reset();
    this.isEditMode = false;
    this.currentSiteId = void 0;
  }
  /**
   * Soumet le formulaire
   */
  onSubmit() {
    if (this.siteForm.invalid || !this.currentUserSocieteId) {
      this.markFormGroupTouched(this.siteForm);
      return;
    }
    this.isSaving = true;
    this.errorMessage = "";
    const formData = __spreadProps(__spreadValues({}, this.siteForm.value), {
      societeId: this.currentUserSocieteId
    });
    const operation = this.isEditMode && this.currentSiteId ? this.siteService.updateSite(this.currentSiteId, __spreadProps(__spreadValues({}, formData), { id: this.currentSiteId })) : this.siteService.createSite(formData);
    operation.subscribe({
      next: () => {
        this.successMessage = this.isEditMode ? "Site mis \xE0 jour avec succ\xE8s" : "Site cr\xE9\xE9 avec succ\xE8s";
        this.isSaving = false;
        this.closeModal();
        this.loadSites();
        this.loadStatistics();
        setTimeout(() => {
          this.successMessage = "";
        }, 3e3);
      },
      error: (error) => {
        this.errorMessage = error.message;
        this.isSaving = false;
      }
    });
  }
  /**
   * Supprime un site
   */
  deleteSite(site) {
    if (!confirm(`\xCAtes-vous s\xFBr de vouloir supprimer le site "${site.nom}" ?`)) {
      return;
    }
    this.siteService.deleteSite(site.id).subscribe({
      next: () => {
        this.successMessage = "Site supprim\xE9 avec succ\xE8s";
        this.loadSites();
        this.loadStatistics();
        setTimeout(() => {
          this.successMessage = "";
        }, 3e3);
      },
      error: (error) => {
        this.errorMessage = error.message;
      }
    });
  }
  /**
   * Change le statut d'un site
   */
  toggleSiteStatus(site) {
    const newStatus = !site.actif;
    this.siteService.toggleSiteStatus(site.id, newStatus).subscribe({
      next: () => {
        site.actif = newStatus;
        this.successMessage = `Site ${newStatus ? "activ\xE9" : "d\xE9sactiv\xE9"} avec succ\xE8s`;
        this.loadStatistics();
        setTimeout(() => {
          this.successMessage = "";
        }, 3e3);
      },
      error: (error) => {
        this.errorMessage = error.message;
      }
    });
  }
  /**
   * Pagination
   */
  previousPage() {
    if (this.currentPage > 0) {
      this.currentPage--;
      this.loadSites();
    }
  }
  nextPage() {
    if (this.currentPage < this.totalPages - 1) {
      this.currentPage++;
      this.loadSites();
    }
  }
  goToPage(page) {
    if (page >= 0 && page < this.totalPages) {
      this.currentPage = page;
      this.loadSites();
    }
  }
  /**
   * Helpers de validation
   */
  hasError(controlName, errorName) {
    const control = this.siteForm.get(controlName);
    return control ? control.hasError(errorName) && control.touched : false;
  }
  isFieldInvalid(controlName) {
    const control = this.siteForm.get(controlName);
    return control ? control.invalid && control.touched : false;
  }
  markFormGroupTouched(formGroup) {
    Object.values(formGroup.controls).forEach((control) => {
      control.markAsTouched();
    });
  }
  /**
   * Helpers de formatage
   */
  getSiteTypeLabel(type) {
    return getSiteTypeLabel(type);
  }
  getCountryName(code) {
    return getCountryName(code);
  }
  formatDate(dateString) {
    const date = new Date(dateString);
    return date.toLocaleDateString("fr-FR", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric"
    });
  }
  /**
   * Calcule les pages pour la pagination
   */
  get paginationPages() {
    const maxPages = 5;
    const pages = [];
    let startPage = Math.max(0, this.currentPage - Math.floor(maxPages / 2));
    let endPage = Math.min(this.totalPages - 1, startPage + maxPages - 1);
    if (endPage - startPage < maxPages - 1) {
      startPage = Math.max(0, endPage - maxPages + 1);
    }
    for (let i = startPage; i <= endPage; i++) {
      pages.push(i);
    }
    return pages;
  }
  static \u0275fac = function SiteSettingsComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _SiteSettingsComponent)(\u0275\u0275directiveInject(FormBuilder), \u0275\u0275directiveInject(SiteService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SiteSettingsComponent, selectors: [["app-site-settings"]], decls: 219, vars: 149, consts: [[1, "mb-3"], [1, "pb-3", "border-bottom", "mb-3"], [1, "row", "align-items-center"], [1, "col-md-6"], [1, "mb-0"], [1, "col-md-6", "text-end"], ["type", "button", 1, "btn", "btn-primary", 3, "click"], [1, "isax", "isax-add", "me-2"], ["class", "alert alert-success alert-dismissible fade show", "role", "alert", 4, "ngIf"], ["class", "alert alert-danger alert-dismissible fade show", "role", "alert", 4, "ngIf"], [1, "row", "mb-4"], [1, "col-xl-3", "col-sm-6"], [1, "card"], [1, "card-body"], [1, "d-flex", "align-items-center", "justify-content-between"], [1, "d-block", "mb-1"], [1, "avatar", "avatar-lg", "bg-primary-light", "rounded-circle"], [1, "isax", "isax-building-4", "text-primary"], [1, "avatar", "avatar-lg", "bg-success-light", "rounded-circle"], [1, "isax", "isax-tick-circle", "text-success"], [1, "avatar", "avatar-lg", "bg-danger-light", "rounded-circle"], [1, "isax", "isax-close-circle", "text-danger"], [1, "avatar", "avatar-lg", "bg-info-light", "rounded-circle"], [1, "isax", "isax-category", "text-info"], [1, "card", "mb-4"], [1, "row", "g-3"], [1, "col-md-4"], [1, "form-label"], ["type", "text", 1, "form-control", 3, "ngModelChange", "input", "placeholder", "ngModel"], [1, "col-md-3"], [1, "form-select", 3, "ngModelChange", "change", "ngModel"], ["value", ""], [3, "value", 4, "ngFor", "ngForOf"], ["value", "active"], ["value", "inactive"], [1, "col-md-2"], ["class", "text-center py-5", 4, "ngIf"], ["class", "table-responsive", 4, "ngIf"], ["class", "d-flex justify-content-between align-items-center mt-3", 4, "ngIf"], ["tabindex", "-1", 1, "modal", "fade"], [1, "modal-dialog", "modal-lg", "modal-dialog-centered"], [1, "modal-content"], [1, "modal-header"], [1, "modal-title"], ["type", "button", 1, "btn-close", 3, "click"], [3, "ngSubmit", "formGroup"], [1, "modal-body"], ["class", "alert alert-danger", 4, "ngIf"], [1, "text-danger"], ["type", "text", "formControlName", "nom", 1, "form-control"], ["class", "invalid-feedback", 4, "ngIf"], ["type", "text", "formControlName", "code", 1, "form-control", "text-uppercase"], [1, "text-muted"], ["formControlName", "type", 1, "form-select"], [1, "form-check", "form-switch", "mt-2"], ["type", "checkbox", "formControlName", "actif", 1, "form-check-input"], [1, "form-check-label"], ["type", "text", "formControlName", "ville", 1, "form-control"], ["formControlName", "pays", 1, "form-select"], ["type", "email", "formControlName", "email", 1, "form-control"], ["type", "tel", "formControlName", "telephone", "placeholder", "+237 6 12 34 56 78", 1, "form-control"], ["type", "number", "formControlName", "superficie", "min", "0", 1, "form-control"], ["type", "number", "formControlName", "getEmplacement", "placeholder", "Optionnel", 1, "form-control"], [1, "col-12"], ["rows", "3", "formControlName", "description", "maxlength", "500", 1, "form-control"], [1, "modal-footer"], ["type", "button", 1, "btn", "btn-secondary", 3, "click", "disabled"], ["type", "submit", 1, "btn", "btn-primary", 3, "disabled"], [4, "ngIf"], ["class", "modal-backdrop fade", 3, "show", 4, "ngIf"], ["role", "alert", 1, "alert", "alert-success", "alert-dismissible", "fade", "show"], [1, "isax", "isax-tick-circle", "me-2"], ["role", "alert", 1, "alert", "alert-danger", "alert-dismissible", "fade", "show"], [1, "isax", "isax-close-circle", "me-2"], [3, "value"], [1, "text-center", "py-5"], ["role", "status", 1, "spinner-border", "text-primary"], [1, "visually-hidden"], [1, "mt-2"], [1, "table-responsive"], [1, "table", "table-hover"], [1, "text-end"], [4, "ngFor", "ngForOf"], ["colspan", "9", 1, "text-center", "py-4"], [1, "isax", "isax-search-normal-1", "fs-1", "text-muted"], [1, "mt-2", "mb-0"], [1, "d-flex", "align-items-center"], [1, "avatar", "avatar-sm", "bg-primary-light", "me-2"], [1, "fw-medium"], ["class", "text-muted", 4, "ngIf"], [1, "badge", "bg-info-light", "text-info"], [1, "badge", "bg-secondary-light", "text-secondary"], ["class", "text-truncate d-inline-block", "style", "max-width: 150px;", 4, "ngIf"], [1, "form-check", "form-switch"], ["type", "checkbox", 1, "form-check-input", 3, "change", "checked"], [1, "dropdown"], ["type", "button", "data-bs-toggle", "dropdown", 1, "btn", "btn-sm", "btn-outline-secondary", "dropdown-toggle"], [1, "isax", "isax-more"], [1, "dropdown-menu"], [1, "dropdown-item", 3, "click"], [1, "isax", "isax-edit", "me-2"], [1, "dropdown-item", "text-danger", 3, "click"], [1, "isax", "isax-trash", "me-2"], [1, "text-truncate", "d-inline-block", 2, "max-width", "150px"], [1, "d-flex", "justify-content-between", "align-items-center", "mt-3"], [1, "pagination", "mb-0"], [1, "page-item"], [1, "page-link", 3, "click"], [1, "isax", "isax-arrow-left-2"], ["class", "page-item", 3, "active", 4, "ngFor", "ngForOf"], [1, "isax", "isax-arrow-right-3"], [1, "alert", "alert-danger"], [1, "invalid-feedback"], [1, "spinner-border", "spinner-border-sm", "me-1"], [1, "modal-backdrop", "fade"]], template: function SiteSettingsComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "h6", 4);
      \u0275\u0275text(5);
      \u0275\u0275pipe(6, "translate");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(7, "div", 5)(8, "button", 6);
      \u0275\u0275listener("click", function SiteSettingsComponent_Template_button_click_8_listener() {
        return ctx.openCreateModal();
      });
      \u0275\u0275element(9, "i", 7);
      \u0275\u0275text(10);
      \u0275\u0275pipe(11, "translate");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275template(12, SiteSettingsComponent_div_12_Template, 4, 1, "div", 8)(13, SiteSettingsComponent_div_13_Template, 4, 1, "div", 9);
      \u0275\u0275elementStart(14, "div", 10)(15, "div", 11)(16, "div", 12)(17, "div", 13)(18, "div", 14)(19, "div")(20, "span", 15);
      \u0275\u0275text(21);
      \u0275\u0275pipe(22, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(23, "h4", 4);
      \u0275\u0275text(24);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(25, "div", 16);
      \u0275\u0275element(26, "i", 17);
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(27, "div", 11)(28, "div", 12)(29, "div", 13)(30, "div", 14)(31, "div")(32, "span", 15);
      \u0275\u0275text(33);
      \u0275\u0275pipe(34, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(35, "h4", 4);
      \u0275\u0275text(36);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(37, "div", 18);
      \u0275\u0275element(38, "i", 19);
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(39, "div", 11)(40, "div", 12)(41, "div", 13)(42, "div", 14)(43, "div")(44, "span", 15);
      \u0275\u0275text(45);
      \u0275\u0275pipe(46, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(47, "h4", 4);
      \u0275\u0275text(48);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(49, "div", 20);
      \u0275\u0275element(50, "i", 21);
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(51, "div", 11)(52, "div", 12)(53, "div", 13)(54, "div", 14)(55, "div")(56, "span", 15);
      \u0275\u0275text(57);
      \u0275\u0275pipe(58, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(59, "h4", 4);
      \u0275\u0275text(60);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(61, "div", 22);
      \u0275\u0275element(62, "i", 23);
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(63, "div", 24)(64, "div", 13)(65, "div", 25)(66, "div", 26)(67, "label", 27);
      \u0275\u0275text(68);
      \u0275\u0275pipe(69, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(70, "input", 28);
      \u0275\u0275pipe(71, "translate");
      \u0275\u0275twoWayListener("ngModelChange", function SiteSettingsComponent_Template_input_ngModelChange_70_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.searchTerm, $event) || (ctx.searchTerm = $event);
        return $event;
      });
      \u0275\u0275listener("input", function SiteSettingsComponent_Template_input_input_70_listener($event) {
        return ctx.onSearch($event.target.value);
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(72, "div", 29)(73, "label", 27);
      \u0275\u0275text(74);
      \u0275\u0275pipe(75, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(76, "select", 30);
      \u0275\u0275twoWayListener("ngModelChange", function SiteSettingsComponent_Template_select_ngModelChange_76_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.filterType, $event) || (ctx.filterType = $event);
        return $event;
      });
      \u0275\u0275listener("change", function SiteSettingsComponent_Template_select_change_76_listener() {
        return ctx.onFilterChange();
      });
      \u0275\u0275elementStart(77, "option", 31);
      \u0275\u0275text(78);
      \u0275\u0275pipe(79, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275template(80, SiteSettingsComponent_option_80_Template, 3, 4, "option", 32);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(81, "div", 29)(82, "label", 27);
      \u0275\u0275text(83);
      \u0275\u0275pipe(84, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(85, "select", 30);
      \u0275\u0275twoWayListener("ngModelChange", function SiteSettingsComponent_Template_select_ngModelChange_85_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.filterStatus, $event) || (ctx.filterStatus = $event);
        return $event;
      });
      \u0275\u0275listener("change", function SiteSettingsComponent_Template_select_change_85_listener() {
        return ctx.onFilterChange();
      });
      \u0275\u0275elementStart(86, "option", 31);
      \u0275\u0275text(87);
      \u0275\u0275pipe(88, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(89, "option", 33);
      \u0275\u0275text(90);
      \u0275\u0275pipe(91, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(92, "option", 34);
      \u0275\u0275text(93);
      \u0275\u0275pipe(94, "translate");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(95, "div", 35)(96, "label", 27);
      \u0275\u0275text(97);
      \u0275\u0275pipe(98, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(99, "select", 30);
      \u0275\u0275twoWayListener("ngModelChange", function SiteSettingsComponent_Template_select_ngModelChange_99_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.filterPays, $event) || (ctx.filterPays = $event);
        return $event;
      });
      \u0275\u0275listener("change", function SiteSettingsComponent_Template_select_change_99_listener() {
        return ctx.onFilterChange();
      });
      \u0275\u0275elementStart(100, "option", 31);
      \u0275\u0275text(101);
      \u0275\u0275pipe(102, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275template(103, SiteSettingsComponent_option_103_Template, 2, 2, "option", 32);
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(104, "div", 12)(105, "div", 13);
      \u0275\u0275template(106, SiteSettingsComponent_div_106_Template, 7, 3, "div", 36)(107, SiteSettingsComponent_div_107_Template, 34, 29, "div", 37)(108, SiteSettingsComponent_div_108_Template, 15, 17, "div", 38);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(109, "div", 39)(110, "div", 40)(111, "div", 41)(112, "div", 42)(113, "h5", 43);
      \u0275\u0275text(114);
      \u0275\u0275pipe(115, "translate");
      \u0275\u0275pipe(116, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(117, "button", 44);
      \u0275\u0275listener("click", function SiteSettingsComponent_Template_button_click_117_listener() {
        return ctx.closeModal();
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(118, "form", 45);
      \u0275\u0275listener("ngSubmit", function SiteSettingsComponent_Template_form_ngSubmit_118_listener() {
        return ctx.onSubmit();
      });
      \u0275\u0275elementStart(119, "div", 46);
      \u0275\u0275template(120, SiteSettingsComponent_div_120_Template, 3, 1, "div", 47);
      \u0275\u0275elementStart(121, "div", 25)(122, "div", 3)(123, "label", 27);
      \u0275\u0275text(124);
      \u0275\u0275pipe(125, "translate");
      \u0275\u0275elementStart(126, "span", 48);
      \u0275\u0275text(127, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(128, "input", 49);
      \u0275\u0275template(129, SiteSettingsComponent_div_129_Template, 3, 3, "div", 50)(130, SiteSettingsComponent_div_130_Template, 3, 3, "div", 50);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(131, "div", 3)(132, "label", 27);
      \u0275\u0275text(133);
      \u0275\u0275pipe(134, "translate");
      \u0275\u0275elementStart(135, "span", 48);
      \u0275\u0275text(136, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(137, "input", 51);
      \u0275\u0275elementStart(138, "small", 52);
      \u0275\u0275text(139);
      \u0275\u0275pipe(140, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275template(141, SiteSettingsComponent_div_141_Template, 3, 3, "div", 50)(142, SiteSettingsComponent_div_142_Template, 3, 3, "div", 50);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(143, "div", 3)(144, "label", 27);
      \u0275\u0275text(145);
      \u0275\u0275pipe(146, "translate");
      \u0275\u0275elementStart(147, "span", 48);
      \u0275\u0275text(148, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(149, "select", 53);
      \u0275\u0275template(150, SiteSettingsComponent_option_150_Template, 3, 4, "option", 32);
      \u0275\u0275elementEnd();
      \u0275\u0275template(151, SiteSettingsComponent_div_151_Template, 3, 3, "div", 50);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(152, "div", 3)(153, "label", 27);
      \u0275\u0275text(154);
      \u0275\u0275pipe(155, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(156, "div", 54);
      \u0275\u0275element(157, "input", 55);
      \u0275\u0275elementStart(158, "label", 56);
      \u0275\u0275text(159);
      \u0275\u0275pipe(160, "translate");
      \u0275\u0275pipe(161, "translate");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(162, "div", 3)(163, "label", 27);
      \u0275\u0275text(164);
      \u0275\u0275pipe(165, "translate");
      \u0275\u0275elementStart(166, "span", 48);
      \u0275\u0275text(167, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(168, "input", 57);
      \u0275\u0275template(169, SiteSettingsComponent_div_169_Template, 3, 3, "div", 50);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(170, "div", 3)(171, "label", 27);
      \u0275\u0275text(172);
      \u0275\u0275pipe(173, "translate");
      \u0275\u0275elementStart(174, "span", 48);
      \u0275\u0275text(175, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(176, "select", 58)(177, "option", 31);
      \u0275\u0275text(178);
      \u0275\u0275pipe(179, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275template(180, SiteSettingsComponent_option_180_Template, 2, 2, "option", 32);
      \u0275\u0275elementEnd();
      \u0275\u0275template(181, SiteSettingsComponent_div_181_Template, 3, 3, "div", 50);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(182, "div", 3)(183, "label", 27);
      \u0275\u0275text(184);
      \u0275\u0275pipe(185, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275element(186, "input", 59);
      \u0275\u0275template(187, SiteSettingsComponent_div_187_Template, 3, 3, "div", 50);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(188, "div", 3)(189, "label", 27);
      \u0275\u0275text(190);
      \u0275\u0275pipe(191, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275element(192, "input", 60);
      \u0275\u0275template(193, SiteSettingsComponent_div_193_Template, 3, 3, "div", 50);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(194, "div", 3)(195, "label", 27);
      \u0275\u0275text(196);
      \u0275\u0275pipe(197, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275element(198, "input", 61);
      \u0275\u0275template(199, SiteSettingsComponent_div_199_Template, 2, 0, "div", 50);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(200, "div", 3)(201, "label", 27);
      \u0275\u0275text(202, "ID Emplacement");
      \u0275\u0275elementEnd();
      \u0275\u0275element(203, "input", 62);
      \u0275\u0275elementStart(204, "small", 52);
      \u0275\u0275text(205, "ID d'emplacement g\xE9ographique");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(206, "div", 63)(207, "label", 27);
      \u0275\u0275text(208, "Description");
      \u0275\u0275elementEnd();
      \u0275\u0275element(209, "textarea", 64);
      \u0275\u0275elementStart(210, "small", 52);
      \u0275\u0275text(211);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(212, "div", 65)(213, "button", 66);
      \u0275\u0275listener("click", function SiteSettingsComponent_Template_button_click_213_listener() {
        return ctx.closeModal();
      });
      \u0275\u0275text(214, " Annuler ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(215, "button", 67);
      \u0275\u0275template(216, SiteSettingsComponent_span_216_Template, 2, 1, "span", 68)(217, SiteSettingsComponent_span_217_Template, 3, 1, "span", 68);
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275template(218, SiteSettingsComponent_div_218_Template, 1, 2, "div", 69);
    }
    if (rf & 2) {
      let tmp_50_0;
      let tmp_69_0;
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(6, 87, "siteSettings.title"));
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(11, 89, "siteSettings.newSite"), " ");
      \u0275\u0275advance(2);
      \u0275\u0275property("ngIf", ctx.successMessage);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.errorMessage);
      \u0275\u0275advance(8);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(22, 91, "siteSettings.totalSites"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(ctx.statistics.total);
      \u0275\u0275advance(9);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(34, 93, "siteSettings.activeSites"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(ctx.statistics.actifs);
      \u0275\u0275advance(9);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(46, 95, "siteSettings.inactiveSites"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(ctx.statistics.inactifs);
      \u0275\u0275advance(9);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(58, 97, "siteSettings.types"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(ctx.Object.keys(ctx.statistics.parType).length);
      \u0275\u0275advance(8);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(69, 99, "common.search"));
      \u0275\u0275advance(2);
      \u0275\u0275property("placeholder", \u0275\u0275interpolate(\u0275\u0275pipeBind1(71, 101, "siteSettings.search")));
      \u0275\u0275twoWayProperty("ngModel", ctx.searchTerm);
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(75, 103, "siteSettings.type"));
      \u0275\u0275advance(2);
      \u0275\u0275twoWayProperty("ngModel", ctx.filterType);
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(79, 105, "siteSettings.allTypes"));
      \u0275\u0275advance(2);
      \u0275\u0275property("ngForOf", ctx.siteTypes);
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(84, 107, "siteSettings.status"));
      \u0275\u0275advance(2);
      \u0275\u0275twoWayProperty("ngModel", ctx.filterStatus);
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(88, 109, "siteSettings.allStatus"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(91, 111, "siteSettings.active"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(94, 113, "siteSettings.inactive"));
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(98, 115, "siteSettings.country"));
      \u0275\u0275advance(2);
      \u0275\u0275twoWayProperty("ngModel", ctx.filterPays);
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(102, 117, "siteSettings.allCountries"));
      \u0275\u0275advance(2);
      \u0275\u0275property("ngForOf", ctx.countries);
      \u0275\u0275advance(3);
      \u0275\u0275property("ngIf", ctx.isLoading);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.isLoading);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.isLoading && ctx.paginatedSites.length > 0);
      \u0275\u0275advance();
      \u0275\u0275styleProp("display", ctx.showModal ? "block" : "none");
      \u0275\u0275classProp("show", ctx.showModal);
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate1(" ", ctx.isEditMode ? \u0275\u0275pipeBind1(115, 119, "siteSettings.editSite") : \u0275\u0275pipeBind1(116, 121, "siteSettings.newSiteModal"), " ");
      \u0275\u0275advance(4);
      \u0275\u0275property("formGroup", ctx.siteForm);
      \u0275\u0275advance(2);
      \u0275\u0275property("ngIf", ctx.errorMessage);
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(125, 123, "siteSettings.siteForm.name"), " ");
      \u0275\u0275advance(4);
      \u0275\u0275classProp("is-invalid", ctx.isFieldInvalid("nom"));
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.hasError("nom", "required"));
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.hasError("nom", "minlength"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(134, 125, "siteSettings.siteForm.code"), " ");
      \u0275\u0275advance(4);
      \u0275\u0275classProp("is-invalid", ctx.isFieldInvalid("code"));
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(140, 127, "siteSettings.siteForm.optional"));
      \u0275\u0275advance(2);
      \u0275\u0275property("ngIf", ctx.hasError("code", "required"));
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.hasError("code", "pattern"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(146, 129, "siteSettings.siteForm.type"), " ");
      \u0275\u0275advance(4);
      \u0275\u0275classProp("is-invalid", ctx.isFieldInvalid("type"));
      \u0275\u0275advance();
      \u0275\u0275property("ngForOf", ctx.siteTypes);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.hasError("type", "required"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(155, 131, "siteSettings.siteForm.status"));
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate1(" ", ((tmp_50_0 = ctx.siteForm.get("actif")) == null ? null : tmp_50_0.value) ? \u0275\u0275pipeBind1(160, 133, "siteSettings.siteForm.active") : \u0275\u0275pipeBind1(161, 135, "siteSettings.siteForm.inactive"), " ");
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(165, 137, "siteSettings.siteForm.city"), " ");
      \u0275\u0275advance(4);
      \u0275\u0275classProp("is-invalid", ctx.isFieldInvalid("ville"));
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.hasError("ville", "required"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(173, 139, "siteSettings.siteForm.country"), " ");
      \u0275\u0275advance(4);
      \u0275\u0275classProp("is-invalid", ctx.isFieldInvalid("pays"));
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(179, 141, "siteSettings.siteForm.selectCountry"));
      \u0275\u0275advance(2);
      \u0275\u0275property("ngForOf", ctx.countries);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.hasError("pays", "required"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(185, 143, "siteSettings.siteForm.email"));
      \u0275\u0275advance(2);
      \u0275\u0275classProp("is-invalid", ctx.isFieldInvalid("email"));
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.hasError("email", "email"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(191, 145, "siteSettings.siteForm.phone"));
      \u0275\u0275advance(2);
      \u0275\u0275classProp("is-invalid", ctx.isFieldInvalid("telephone"));
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.hasError("telephone", "pattern"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(197, 147, "siteSettings.siteForm.area"));
      \u0275\u0275advance(2);
      \u0275\u0275classProp("is-invalid", ctx.isFieldInvalid("superficie"));
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.hasError("superficie", "min"));
      \u0275\u0275advance(10);
      \u0275\u0275classProp("is-invalid", ctx.isFieldInvalid("description"));
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate1(" ", ((tmp_69_0 = ctx.siteForm.get("description")) == null ? null : tmp_69_0.value == null ? null : tmp_69_0.value.length) || 0, " / 500 caract\xE8res ");
      \u0275\u0275advance(2);
      \u0275\u0275property("disabled", ctx.isSaving);
      \u0275\u0275advance(2);
      \u0275\u0275property("disabled", ctx.siteForm.invalid || ctx.isSaving);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.isSaving);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.isSaving);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.showModal);
    }
  }, dependencies: [
    CommonModule,
    NgForOf,
    NgIf,
    ReactiveFormsModule,
    \u0275NgNoValidate,
    NgSelectOption,
    \u0275NgSelectMultipleOption,
    DefaultValueAccessor,
    NumberValueAccessor,
    CheckboxControlValueAccessor,
    SelectControlValueAccessor,
    NgControlStatus,
    NgControlStatusGroup,
    MaxLengthValidator,
    MinValidator,
    FormGroupDirective,
    FormControlName,
    FormsModule,
    NgModel,
    MatSelectModule,
    MatInputModule,
    MatFormFieldModule,
    MatDialogModule,
    MatButtonModule,
    SlicePipe,
    TranslatePipe
  ], styles: ["\n\n.table-responsive[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%] {\n  min-width: 1000px;\n}\n.table-responsive[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  white-space: nowrap;\n}\n.badge.bg-info-light[_ngcontent-%COMP%] {\n  background-color: rgba(13, 110, 253, 0.1) !important;\n  color: #0d6efd;\n}\n.badge.bg-secondary-light[_ngcontent-%COMP%] {\n  background-color: rgba(108, 117, 125, 0.1) !important;\n  color: #6c757d;\n}\n.avatar.avatar-lg[_ngcontent-%COMP%] {\n  width: 48px;\n  height: 48px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.avatar.avatar-lg[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 24px;\n}\n.avatar.avatar-sm[_ngcontent-%COMP%] {\n  width: 36px;\n  height: 36px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n}\n.avatar.avatar-sm[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 18px;\n}\n.bg-primary-light[_ngcontent-%COMP%] {\n  background-color: rgba(13, 110, 253, 0.1) !important;\n}\n.bg-success-light[_ngcontent-%COMP%] {\n  background-color: rgba(25, 135, 84, 0.1) !important;\n}\n.bg-danger-light[_ngcontent-%COMP%] {\n  background-color: rgba(220, 53, 69, 0.1) !important;\n}\n.bg-info-light[_ngcontent-%COMP%] {\n  background-color: rgba(13, 202, 240, 0.1) !important;\n}\n@media (max-width: 768px) {\n  .table-responsive[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%] {\n    font-size: 0.875rem;\n  }\n  .table-responsive[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%], \n   .table-responsive[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n    padding: 8px;\n  }\n}\n/*# sourceMappingURL=site-settings.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SiteSettingsComponent, [{
    type: Component,
    args: [{ selector: "app-site-settings", standalone: true, imports: [
      CommonModule,
      ReactiveFormsModule,
      FormsModule,
      MatSelectModule,
      MatInputModule,
      MatFormFieldModule,
      MatDialogModule,
      MatButtonModule,
      TranslatePipe
    ], template: `<div class="mb-3">
  <!-- En-t\xEAte -->
  <div class="pb-3 border-bottom mb-3">
    <div class="row align-items-center">
      <div class="col-md-6">
        <h6 class="mb-0">{{ 'siteSettings.title' | translate }}</h6>
      </div>
      <div class="col-md-6 text-end">
        <button type="button" class="btn btn-primary" (click)="openCreateModal()">
          <i class="isax isax-add me-2"></i>
          {{ 'siteSettings.newSite' | translate }}
        </button>
      </div>
    </div>
  </div>

    <!-- Messages -->
    <div *ngIf="successMessage" class="alert alert-success alert-dismissible fade show" role="alert">
      <i class="isax isax-tick-circle me-2"></i>
      {{ successMessage }}
      <button type="button" class="btn-close" (click)="successMessage = ''"></button>
    </div>

    <div *ngIf="errorMessage" class="alert alert-danger alert-dismissible fade show" role="alert">
      <i class="isax isax-close-circle me-2"></i>
      {{ errorMessage }}
      <button type="button" class="btn-close" (click)="errorMessage = ''"></button>
    </div>

    <!-- Statistiques -->
    <div class="row mb-4">
      <div class="col-xl-3 col-sm-6">
        <div class="card">
          <div class="card-body">
            <div class="d-flex align-items-center justify-content-between">
                <div>
                  <span class="d-block mb-1">{{ 'siteSettings.totalSites' | translate }}</span>
                  <h4 class="mb-0">{{ statistics.total }}</h4>
                </div>
              <div class="avatar avatar-lg bg-primary-light rounded-circle">
                <i class="isax isax-building-4 text-primary"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
 
      <div class="col-xl-3 col-sm-6">
        <div class="card">
          <div class="card-body">
            <div class="d-flex align-items-center justify-content-between">
                <div>
                  <span class="d-block mb-1">{{ 'siteSettings.activeSites' | translate }}</span>
                  <h4 class="mb-0">{{ statistics.actifs }}</h4>
                </div>
              <div class="avatar avatar-lg bg-success-light rounded-circle">
                <i class="isax isax-tick-circle text-success"></i>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="col-xl-3 col-sm-6">
        <div class="card">
          <div class="card-body">
            <div class="d-flex align-items-center justify-content-between">
                <div>
                  <span class="d-block mb-1">{{ 'siteSettings.inactiveSites' | translate }}</span>
                  <h4 class="mb-0">{{ statistics.inactifs }}</h4>
                </div>
              <div class="avatar avatar-lg bg-danger-light rounded-circle">
                <i class="isax isax-close-circle text-danger"></i>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="col-xl-3 col-sm-6">
        <div class="card">
          <div class="card-body">
            <div class="d-flex align-items-center justify-content-between">
                <div>
                  <span class="d-block mb-1">{{ 'siteSettings.types' | translate }}</span>
                  <h4 class="mb-0">{{ Object.keys(statistics.parType).length }}</h4>
                </div>
              <div class="avatar avatar-lg bg-info-light rounded-circle">
                <i class="isax isax-category text-info"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Filtres et Recherche -->
    <div class="card mb-4">
      <div class="card-body">
        <div class="row g-3">
          <div class="col-md-4">
            <label class="form-label">{{ 'common.search' | translate }}</label>
            <input 
              type="text" 
              class="form-control" 
              placeholder="{{ 'siteSettings.search' | translate }}"
              [(ngModel)]="searchTerm"
              (input)="onSearch($any($event.target).value)"
            >
          </div>

          <div class="col-md-3">
            <label class="form-label">{{ 'siteSettings.type' | translate }}</label>
            <select class="form-select" [(ngModel)]="filterType" (change)="onFilterChange()">
              <option value="">{{ 'siteSettings.allTypes' | translate }}</option>
              <option *ngFor="let type of siteTypes" [value]="type.value">
                {{ 'siteSettings.siteTypes.' + type.value | translate }}
              </option>
            </select>
          </div>

          <div class="col-md-3">
            <label class="form-label">{{ 'siteSettings.status' | translate }}</label>
            <select class="form-select" [(ngModel)]="filterStatus" (change)="onFilterChange()">
              <option value="">{{ 'siteSettings.allStatus' | translate }}</option>
              <option value="active">{{ 'siteSettings.active' | translate }}</option>
              <option value="inactive">{{ 'siteSettings.inactive' | translate }}</option>
            </select>
          </div>

          <div class="col-md-2">
            <label class="form-label">{{ 'siteSettings.country' | translate }}</label>
            <select class="form-select" [(ngModel)]="filterPays" (change)="onFilterChange()">
              <option value="">{{ 'siteSettings.allCountries' | translate }}</option>
              <option *ngFor="let country of countries" [value]="country.code">
                {{ country.name }}
              </option>
            </select>
          </div>
        </div>
      </div>
    </div>

    <!-- Table des sites -->
    <div class="card">
      <div class="card-body">
        <!-- Loader -->
        <div *ngIf="isLoading" class="text-center py-5">
          <div class="spinner-border text-primary" role="status">
            <span class="visually-hidden">Chargement...</span>
          </div>
          <p class="mt-2">{{ 'siteSettings.loading' | translate }}</p>
        </div>

        <!-- Table -->
        <div *ngIf="!isLoading" class="table-responsive">
          <table class="table table-hover">
            <thead>
              <tr>
                <th>{{ 'siteSettings.code' | translate }}</th>
                <th>{{ 'siteSettings.name' | translate }}</th>
                <th>{{ 'siteSettings.type' | translate }}</th>
                <th>{{ 'siteSettings.city' | translate }}</th>
                <th>{{ 'siteSettings.country' | translate }}</th>
                <th>{{ 'siteSettings.manager' | translate }}</th>
                <th>{{ 'siteSettings.status' | translate }}</th>
                <th>{{ 'siteSettings.creationDate' | translate }}</th>
                <th class="text-end">{{ 'siteSettings.actions' | translate }}</th>
              </tr>
            </thead>
            <tbody>
              <tr *ngIf="paginatedSites.length === 0">
                <td colspan="9" class="text-center py-4">
                  <i class="isax isax-search-normal-1 fs-1 text-muted"></i>
                  <p class="mt-2 mb-0">{{ 'siteSettings.noSites' | translate }}</p>
                </td>
              </tr>
              <tr *ngFor="let site of paginatedSites">
                <td><strong>{{ site.code }}</strong></td>
                <td>
                  <div class="d-flex align-items-center">
                    <div class="avatar avatar-sm bg-primary-light me-2">
                      <i class="isax isax-building-4 text-primary"></i>
                    </div>
                    <div>
                      <div class="fw-medium">{{ site.nom }}</div>
                      <small class="text-muted" *ngIf="site.description">
                        {{ site.description | slice:0:50 }}{{ site.description.length > 50 ? '...' : '' }}
                      </small>
                    </div>
                  </div>
                </td>
                <td>
                  <span class="badge bg-info-light text-info">
                    {{ 'siteSettings.siteTypes.' + site.type | translate }}
                  </span>
                </td>
                <td>{{ site.ville }}</td>
                <td>
                  <span class="badge bg-secondary-light text-secondary">
                    {{ getCountryName(site.pays) }}
                  </span>
                </td>
                <td>
                  <span *ngIf="site.responsableNom" class="text-truncate d-inline-block" style="max-width: 150px;">
                    {{ site.responsableNom }}
                  </span>
                  <span *ngIf="!site.responsableNom" class="text-muted">-</span>
                </td>
                <td>
                  <div class="form-check form-switch">
                    <input 
                      class="form-check-input" 
                      type="checkbox" 
                      [checked]="site.actif"
                      (change)="toggleSiteStatus(site)"
                    >
                  </div>
                </td>
                <td>{{ formatDate(site.dateCreation) }}</td>
                <td class="text-end">
                  <div class="dropdown">
                    <button 
                      class="btn btn-sm btn-outline-secondary dropdown-toggle" 
                      type="button" 
                      data-bs-toggle="dropdown"
                    >
                      <i class="isax isax-more"></i>
                    </button>
                    <ul class="dropdown-menu">
                      <li>
                        <a class="dropdown-item" (click)="openEditModal(site)">
                          <i class="isax isax-edit me-2"></i>
                          {{ 'siteSettings.edit' | translate }}
                        </a>
                      </li>
                      <li>
                        <a class="dropdown-item text-danger" (click)="deleteSite(site)">
                          <i class="isax isax-trash me-2"></i>
                          {{ 'siteSettings.delete' | translate }}
                        </a>
                      </li>
                    </ul>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <!-- Pagination -->
        <div *ngIf="!isLoading && paginatedSites.length > 0" class="d-flex justify-content-between align-items-center mt-3">
          <div>
            {{ 'siteSettings.showing' | translate }} {{ (currentPage * pageSize) + 1 }} - 
            {{ Math.min((currentPage + 1) * pageSize, totalElements) }} 
            {{ 'siteSettings.of' | translate }} {{ totalElements }} {{ 'siteSettings.sites' | translate }}
          </div>
          <nav>
            <ul class="pagination mb-0">
              <li class="page-item" [class.disabled]="currentPage === 0">
                <a class="page-link" (click)="previousPage()">
                  <i class="isax isax-arrow-left-2"></i>
                </a>
              </li>
              <li 
                *ngFor="let page of paginationPages" 
                class="page-item" 
                [class.active]="page === currentPage"
              >
                <a class="page-link" (click)="goToPage(page)">{{ page + 1 }}</a>
              </li>
              <li class="page-item" [class.disabled]="currentPage >= totalPages - 1">
                <a class="page-link" (click)="nextPage()">
                  <i class="isax isax-arrow-right-3"></i>
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
</div>

<!-- Modal Formulaire -->
<div class="modal fade" [class.show]="showModal" [style.display]="showModal ? 'block' : 'none'" tabindex="-1">
  <div class="modal-dialog modal-lg modal-dialog-centered">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title">
          {{ isEditMode ? ('siteSettings.editSite' | translate) : ('siteSettings.newSiteModal' | translate) }}
        </h5>
        <button type="button" class="btn-close" (click)="closeModal()"></button>
      </div>

      <form [formGroup]="siteForm" (ngSubmit)="onSubmit()">
        <div class="modal-body">
          <!-- Message d'erreur dans le modal -->
          <div *ngIf="errorMessage" class="alert alert-danger">
            <i class="isax isax-close-circle me-2"></i>
            {{ errorMessage }}
          </div>

          <div class="row g-3">
            <!-- Nom -->
            <div class="col-md-6">
              <label class="form-label">
                {{ 'siteSettings.siteForm.name' | translate }} <span class="text-danger">*</span>
              </label>
              <input 
                type="text" 
                class="form-control" 
                formControlName="nom"
                [class.is-invalid]="isFieldInvalid('nom')"
              >
              <div class="invalid-feedback" *ngIf="hasError('nom', 'required')">
                {{ 'siteSettings.siteForm.nameRequired' | translate }}
              </div>
              <div class="invalid-feedback" *ngIf="hasError('nom', 'minlength')">
                {{ 'siteSettings.siteForm.nameMinLength' | translate }}
              </div>
            </div>

            <!-- Code -->
            <div class="col-md-6">
              <label class="form-label">
                {{ 'siteSettings.siteForm.code' | translate }} <span class="text-danger">*</span>
              </label>
              <input 
                type="text" 
                class="form-control text-uppercase" 
                formControlName="code"
                [class.is-invalid]="isFieldInvalid('code')"
              >
              <small class="text-muted">{{ 'siteSettings.siteForm.optional' | translate }}</small>
              <div class="invalid-feedback" *ngIf="hasError('code', 'required')">
                {{ 'siteSettings.siteForm.codeRequired' | translate }}
              </div>
              <div class="invalid-feedback" *ngIf="hasError('code', 'pattern')">
                {{ 'siteSettings.siteForm.codePattern' | translate }}
              </div>
            </div>

            <!-- Type -->
            <div class="col-md-6">
              <label class="form-label">
                {{ 'siteSettings.siteForm.type' | translate }} <span class="text-danger">*</span>
              </label>
              <select 
                class="form-select" 
                formControlName="type"
                [class.is-invalid]="isFieldInvalid('type')"
              >
                <option *ngFor="let type of siteTypes" [value]="type.value">
                  {{ 'siteSettings.siteTypes.' + type.value | translate }}
                </option>
              </select>
              <div class="invalid-feedback" *ngIf="hasError('type', 'required')">
                {{ 'siteSettings.siteForm.typeRequired' | translate }}
              </div>
            </div>

            <!-- Statut -->
            <div class="col-md-6">
              <label class="form-label">{{ 'siteSettings.siteForm.status' | translate }}</label>
              <div class="form-check form-switch mt-2">
                <input 
                  class="form-check-input" 
                  type="checkbox" 
                  formControlName="actif"
                >
                <label class="form-check-label">
                  {{ siteForm.get('actif')?.value ? ('siteSettings.siteForm.active' | translate) : ('siteSettings.siteForm.inactive' | translate) }}
                </label>
              </div>
            </div>

            <!-- Ville -->
            <div class="col-md-6">
              <label class="form-label">
                {{ 'siteSettings.siteForm.city' | translate }} <span class="text-danger">*</span>
              </label>
              <input 
                type="text" 
                class="form-control" 
                formControlName="ville"
                [class.is-invalid]="isFieldInvalid('ville')"
              >
              <div class="invalid-feedback" *ngIf="hasError('ville', 'required')">
                {{ 'siteSettings.siteForm.cityRequired' | translate }}
              </div>
            </div>

            <!-- Pays -->
            <div class="col-md-6">
              <label class="form-label">
                {{ 'siteSettings.siteForm.country' | translate }} <span class="text-danger">*</span>
              </label>
              <select 
                class="form-select" 
                formControlName="pays"
                [class.is-invalid]="isFieldInvalid('pays')"
              >
                <option value="">{{ 'siteSettings.siteForm.selectCountry' | translate }}</option>
                <option *ngFor="let country of countries" [value]="country.code">
                  {{ country.name }}
                </option>
              </select>
              <div class="invalid-feedback" *ngIf="hasError('pays', 'required')">
                {{ 'siteSettings.siteForm.countryRequired' | translate }}
              </div>
            </div>

            <!-- Email -->
            <div class="col-md-6">
              <label class="form-label">{{ 'siteSettings.siteForm.email' | translate }}</label>
              <input 
                type="email" 
                class="form-control" 
                formControlName="email"
                [class.is-invalid]="isFieldInvalid('email')"
              >
              <div class="invalid-feedback" *ngIf="hasError('email', 'email')">
                {{ 'siteSettings.siteForm.emailInvalid' | translate }}
              </div>
            </div>

            <!-- T\xE9l\xE9phone -->
            <div class="col-md-6">
              <label class="form-label">{{ 'siteSettings.siteForm.phone' | translate }}</label>
              <input 
                type="tel" 
                class="form-control" 
                formControlName="telephone"
                placeholder="+237 6 12 34 56 78"
                [class.is-invalid]="isFieldInvalid('telephone')"
              >
              <div class="invalid-feedback" *ngIf="hasError('telephone', 'pattern')">
                {{ 'siteSettings.siteForm.phoneInvalid' | translate }}
              </div>
            </div>

            <!-- Superficie -->
            <div class="col-md-6">
              <label class="form-label">{{ 'siteSettings.siteForm.area' | translate }}</label>
              <input 
                type="number" 
                class="form-control" 
                formControlName="superficie"
                min="0"
                [class.is-invalid]="isFieldInvalid('superficie')"
              >
              <div class="invalid-feedback" *ngIf="hasError('superficie', 'min')">
                La superficie doit \xEAtre positive.
              </div>
            </div>

            <!-- Emplacement (optionnel) -->
            <div class="col-md-6">
              <label class="form-label">ID Emplacement</label>
              <input 
                type="number" 
                class="form-control" 
                formControlName="getEmplacement"
                placeholder="Optionnel"
              >
              <small class="text-muted">ID d'emplacement g\xE9ographique</small>
            </div>

            <!-- Description -->
            <div class="col-12">
              <label class="form-label">Description</label>
              <textarea 
                class="form-control" 
                rows="3" 
                formControlName="description"
                maxlength="500"
                [class.is-invalid]="isFieldInvalid('description')"
              ></textarea>
              <small class="text-muted">
                {{ siteForm.get('description')?.value?.length || 0 }} / 500 caract\xE8res
              </small>
            </div>
          </div>
        </div>

        <div class="modal-footer">
          <button 
            type="button" 
            class="btn btn-secondary" 
            (click)="closeModal()"
            [disabled]="isSaving"
          >
            Annuler
          </button>
          <button 
            type="submit" 
            class="btn btn-primary"
            [disabled]="siteForm.invalid || isSaving"
          >
            <span *ngIf="!isSaving">
              {{ isEditMode ? 'Mettre \xE0 jour' : 'Cr\xE9er' }}
            </span>
            <span *ngIf="isSaving">
              <span class="spinner-border spinner-border-sm me-1"></span>
              {{ isEditMode ? 'Mise \xE0 jour...' : 'Cr\xE9ation...' }}
            </span>
          </button>
        </div>
      </form>
    </div>
  </div>
</div>

<!-- Backdrop du modal -->
<div class="modal-backdrop fade" [class.show]="showModal" *ngIf="showModal"></div>
`, styles: ["/* src/app/modules/setting/presentation/pages/general-settings/site-settings/site-settings.component.scss */\n.table-responsive .table {\n  min-width: 1000px;\n}\n.table-responsive .table thead th {\n  white-space: nowrap;\n}\n.badge.bg-info-light {\n  background-color: rgba(13, 110, 253, 0.1) !important;\n  color: #0d6efd;\n}\n.badge.bg-secondary-light {\n  background-color: rgba(108, 117, 125, 0.1) !important;\n  color: #6c757d;\n}\n.avatar.avatar-lg {\n  width: 48px;\n  height: 48px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.avatar.avatar-lg i {\n  font-size: 24px;\n}\n.avatar.avatar-sm {\n  width: 36px;\n  height: 36px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n}\n.avatar.avatar-sm i {\n  font-size: 18px;\n}\n.bg-primary-light {\n  background-color: rgba(13, 110, 253, 0.1) !important;\n}\n.bg-success-light {\n  background-color: rgba(25, 135, 84, 0.1) !important;\n}\n.bg-danger-light {\n  background-color: rgba(220, 53, 69, 0.1) !important;\n}\n.bg-info-light {\n  background-color: rgba(13, 202, 240, 0.1) !important;\n}\n@media (max-width: 768px) {\n  .table-responsive .table {\n    font-size: 0.875rem;\n  }\n  .table-responsive .table td,\n  .table-responsive .table th {\n    padding: 8px;\n  }\n}\n/*# sourceMappingURL=site-settings.component.css.map */\n"] }]
  }], () => [{ type: FormBuilder }, { type: SiteService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SiteSettingsComponent, { className: "SiteSettingsComponent", filePath: "src/app/modules/setting/presentation/pages/general-settings/site-settings/site-settings.component.ts", lineNumber: 40 });
})();
export {
  SiteSettingsComponent
};
//# sourceMappingURL=chunk-DJBRQYD4.js.map

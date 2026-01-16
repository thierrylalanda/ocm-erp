import {
  AutoFocus,
  AutoFocusModule,
  BaseEditableHolder,
  ConnectedOverlayScrollHandler,
  DatePicker,
  DatePickerModule,
  DomHandler
} from "./chunk-J7RBY4JG.js";
import {
  BaseStyle,
  D,
  I,
  OverlayService,
  SharedModule,
  TranslationKeys,
  Yt,
  f,
  zindexutils
} from "./chunk-EZIYOP75.js";
import {
  BsDatepickerDirective,
  BsDatepickerInlineDirective,
  BsDatepickerInputDirective,
  BsDatepickerModule,
  BsDaterangepickerDirective,
  BsDaterangepickerInputDirective
} from "./chunk-6H2KZBXU.js";
import "./chunk-KKWHEPUK.js";
import {
  DefaultValueAccessor,
  FormsModule,
  NG_VALUE_ACCESSOR,
  NgControlStatus,
  NgModel
} from "./chunk-BLAAMQ2R.js";
import {
  CommonService
} from "./chunk-U2VXEBUE.js";
import {
  animate,
  style,
  transition,
  trigger
} from "./chunk-SCUCSJ4X.js";
import "./chunk-PCRWA3NK.js";
import "./chunk-ZM5T2PIK.js";
import "./chunk-PQZYD7EB.js";
import {
  CommonModule,
  NgIf,
  isPlatformBrowser
} from "./chunk-ZV6UYXXV.js";
import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Injectable,
  Input,
  NgModule,
  Output,
  ViewChild,
  ViewEncapsulation,
  booleanAttribute,
  computed,
  forwardRef,
  inject,
  input,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵInheritDefinitionFeature,
  ɵɵProvidersFeature,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassMap,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵgetInheritedFactory,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵpureFunction1,
  ɵɵpureFunction2,
  ɵɵqueryRefresh,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty,
  ɵɵviewQuery
} from "./chunk-U4CEU3KS.js";
import "./chunk-TXDUYLVM.js";

// node_modules/@primeuix/styles/dist/colorpicker/index.mjs
var style2 = "\n    .p-colorpicker {\n        display: inline-block;\n        position: relative;\n    }\n\n    .p-colorpicker-dragging {\n        cursor: pointer;\n    }\n\n    .p-colorpicker-preview {\n        width: dt('colorpicker.preview.width');\n        height: dt('colorpicker.preview.height');\n        padding: 0;\n        border: 0 none;\n        border-radius: dt('colorpicker.preview.border.radius');\n        transition:\n            background dt('colorpicker.transition.duration'),\n            color dt('colorpicker.transition.duration'),\n            border-color dt('colorpicker.transition.duration'),\n            outline-color dt('colorpicker.transition.duration'),\n            box-shadow dt('colorpicker.transition.duration');\n        outline-color: transparent;\n        cursor: pointer;\n    }\n\n    .p-colorpicker-preview:enabled:focus-visible {\n        border-color: dt('colorpicker.preview.focus.border.color');\n        box-shadow: dt('colorpicker.preview.focus.ring.shadow');\n        outline: dt('colorpicker.preview.focus.ring.width') dt('colorpicker.preview.focus.ring.style') dt('colorpicker.preview.focus.ring.color');\n        outline-offset: dt('colorpicker.preview.focus.ring.offset');\n    }\n\n    .p-colorpicker-panel {\n        background: dt('colorpicker.panel.background');\n        border: 1px solid dt('colorpicker.panel.border.color');\n        border-radius: dt('colorpicker.panel.border.radius');\n        box-shadow: dt('colorpicker.panel.shadow');\n        width: 193px;\n        height: 166px;\n        position: absolute;\n        top: 0;\n        left: 0;\n    }\n\n    .p-colorpicker-panel-inline {\n        box-shadow: none;\n        position: static;\n    }\n\n    .p-colorpicker-content {\n        position: relative;\n    }\n\n    .p-colorpicker-color-selector {\n        width: 150px;\n        height: 150px;\n        inset-block-start: 8px;\n        inset-inline-start: 8px;\n        position: absolute;\n    }\n\n    .p-colorpicker-color-background {\n        width: 100%;\n        height: 100%;\n        background: linear-gradient(to top, #000 0%, rgba(0, 0, 0, 0) 100%), linear-gradient(to right, #fff 0%, rgba(255, 255, 255, 0) 100%);\n    }\n\n    .p-colorpicker-color-handle {\n        position: absolute;\n        inset-block-start: 0px;\n        inset-inline-start: 150px;\n        border-radius: 100%;\n        width: 10px;\n        height: 10px;\n        border-width: 1px;\n        border-style: solid;\n        margin: -5px 0 0 -5px;\n        cursor: pointer;\n        opacity: 0.85;\n        border-color: dt('colorpicker.handle.color');\n    }\n\n    .p-colorpicker-hue {\n        width: 17px;\n        height: 150px;\n        inset-block-start: 8px;\n        inset-inline-start: 167px;\n        position: absolute;\n        opacity: 0.85;\n        background: linear-gradient(0deg, red 0, #ff0 17%, #0f0 33%, #0ff 50%, #00f 67%, #f0f 83%, red);\n    }\n\n    .p-colorpicker-hue-handle {\n        position: absolute;\n        inset-block-start: 150px;\n        inset-inline-start: 0px;\n        width: 21px;\n        margin-inline-start: -2px;\n        margin-block-start: -5px;\n        height: 10px;\n        border-width: 2px;\n        border-style: solid;\n        opacity: 0.85;\n        cursor: pointer;\n        border-color: dt('colorpicker.handle.color');\n    }\n";

// node_modules/primeng/fesm2022/primeng-colorpicker.mjs
var _c0 = ["input"];
var _c1 = ["colorSelector"];
var _c2 = ["colorHandle"];
var _c3 = ["hue"];
var _c4 = ["hueHandle"];
var _c5 = (a0, a1) => ({
  showTransitionParams: a0,
  hideTransitionParams: a1
});
var _c6 = (a0) => ({
  value: "visible",
  params: a0
});
function ColorPicker_input_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "input", 7, 0);
    \u0275\u0275listener("click", function ColorPicker_input_0_Template_input_click_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onInputClick());
    })("keydown", function ColorPicker_input_0_Template_input_keydown_0_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onInputKeydown($event));
    })("focus", function ColorPicker_input_0_Template_input_focus_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onInputFocus());
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275classMap(ctx_r1.cx("preview"));
    \u0275\u0275styleProp("background-color", ctx_r1.inputBgColor);
    \u0275\u0275property("pAutoFocus", ctx_r1.autofocus);
    \u0275\u0275attribute("tabindex", ctx_r1.tabindex)("disabled", ctx_r1.$disabled() ? "" : void 0)("id", ctx_r1.inputId)("data-pc-section", "input")("aria-label", ctx_r1.ariaLabel);
  }
}
function ColorPicker_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 8);
    \u0275\u0275listener("click", function ColorPicker_div_1_Template_div_click_0_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onOverlayClick($event));
    })("@overlayAnimation.start", function ColorPicker_div_1_Template_div_animation_overlayAnimation_start_0_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onOverlayAnimationStart($event));
    })("@overlayAnimation.done", function ColorPicker_div_1_Template_div_animation_overlayAnimation_done_0_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onOverlayAnimationEnd($event));
    });
    \u0275\u0275elementStart(1, "div")(2, "div", 9, 1);
    \u0275\u0275listener("touchstart", function ColorPicker_div_1_Template_div_touchstart_2_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onColorDragStart($event));
    })("touchmove", function ColorPicker_div_1_Template_div_touchmove_2_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onDrag($event));
    })("touchend", function ColorPicker_div_1_Template_div_touchend_2_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onDragEnd());
    })("mousedown", function ColorPicker_div_1_Template_div_mousedown_2_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onColorMousedown($event));
    });
    \u0275\u0275elementStart(4, "div");
    \u0275\u0275element(5, "div", null, 2);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 10, 3);
    \u0275\u0275listener("mousedown", function ColorPicker_div_1_Template_div_mousedown_7_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onHueMousedown($event));
    })("touchstart", function ColorPicker_div_1_Template_div_touchstart_7_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onHueDragStart($event));
    })("touchmove", function ColorPicker_div_1_Template_div_touchmove_7_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onDrag($event));
    })("touchend", function ColorPicker_div_1_Template_div_touchend_7_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onDragEnd());
    });
    \u0275\u0275element(9, "div", null, 4);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275classMap(ctx_r1.cx("panel"));
    \u0275\u0275property("@overlayAnimation", \u0275\u0275pureFunction1(26, _c6, \u0275\u0275pureFunction2(23, _c5, ctx_r1.showTransitionOptions, ctx_r1.hideTransitionOptions)))("@.disabled", ctx_r1.inline === true);
    \u0275\u0275attribute("data-pc-section", "panel");
    \u0275\u0275advance();
    \u0275\u0275classMap(ctx_r1.cx("content"));
    \u0275\u0275attribute("data-pc-section", "content");
    \u0275\u0275advance();
    \u0275\u0275classMap(ctx_r1.cx("colorSelector"));
    \u0275\u0275attribute("data-pc-section", "selector");
    \u0275\u0275advance(2);
    \u0275\u0275classMap(ctx_r1.cx("colorBackground"));
    \u0275\u0275attribute("data-pc-section", "color");
    \u0275\u0275advance();
    \u0275\u0275classMap(ctx_r1.cx("colorHandle"));
    \u0275\u0275attribute("data-pc-section", "colorHandle");
    \u0275\u0275advance(2);
    \u0275\u0275classMap(ctx_r1.cx("hue"));
    \u0275\u0275attribute("data-pc-section", "hue");
    \u0275\u0275advance(2);
    \u0275\u0275classMap(ctx_r1.cx("hueHandle"));
    \u0275\u0275attribute("data-pc-section", "hueHandle");
  }
}
var classes = {
  root: ({
    instance
  }) => ["p-colorpicker p-component", {
    "p-colorpicker-overlay": !instance.inline,
    "p-colorpicker-dragging": instance.colorDragging || instance.hueDragging
  }],
  preview: ({
    instance
  }) => ["p-colorpicker-preview", {
    "p-disabled": instance.$disabled()
  }],
  panel: ({
    instance
  }) => ["p-colorpicker-panel", {
    "p-colorpicker-panel-inline": instance.inline,
    "p-disabled": instance.$disabled()
  }],
  content: "p-colorpicker-content",
  colorSelector: "p-colorpicker-color-selector",
  colorBackground: "p-colorpicker-color-background",
  colorHandle: "p-colorpicker-color-handle",
  hue: "p-colorpicker-hue",
  hueHandle: "p-colorpicker-hue-handle"
};
var ColorPickerStyle = class _ColorPickerStyle extends BaseStyle {
  name = "colorpicker";
  theme = style2;
  classes = classes;
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275ColorPickerStyle_BaseFactory;
    return function ColorPickerStyle_Factory(__ngFactoryType__) {
      return (\u0275ColorPickerStyle_BaseFactory || (\u0275ColorPickerStyle_BaseFactory = \u0275\u0275getInheritedFactory(_ColorPickerStyle)))(__ngFactoryType__ || _ColorPickerStyle);
    };
  })();
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _ColorPickerStyle,
    factory: _ColorPickerStyle.\u0275fac
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ColorPickerStyle, [{
    type: Injectable
  }], null, null);
})();
var ColorPickerClasses;
(function(ColorPickerClasses2) {
  ColorPickerClasses2["root"] = "p-colorpicker";
  ColorPickerClasses2["preview"] = "p-colorpicker-preview";
  ColorPickerClasses2["panel"] = "p-colorpicker-panel";
  ColorPickerClasses2["colorSelector"] = "p-colorpicker-color-selector";
  ColorPickerClasses2["colorBackground"] = "p-colorpicker-color-background";
  ColorPickerClasses2["colorHandle"] = "p-colorpicker-color-handle";
  ColorPickerClasses2["hue"] = "p-colorpicker-hue";
  ColorPickerClasses2["hueHandle"] = "p-colorpicker-hue-handle";
})(ColorPickerClasses || (ColorPickerClasses = {}));
var COLORPICKER_VALUE_ACCESSOR = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => ColorPicker),
  multi: true
};
var ColorPicker = class _ColorPicker extends BaseEditableHolder {
  overlayService;
  /**
   * Style class of the component.
   * @deprecated since v20.0.0, use `class` instead.
   * @group Props
   */
  styleClass;
  /**
   * Whether to display as an overlay or not.
   * @group Props
   */
  inline;
  /**
   * Format to use in value binding.
   * @group Props
   */
  format = "hex";
  /**
   * Index of the element in tabbing order.
   * @group Props
   */
  tabindex;
  /**
   * Identifier of the focus input to match a label defined for the dropdown.
   * @group Props
   */
  inputId;
  /**
   * Whether to automatically manage layering.
   * @group Props
   */
  autoZIndex = true;
  /**
   * Transition options of the show animation.
   * @group Props
   */
  showTransitionOptions = ".12s cubic-bezier(0, 0, 0.2, 1)";
  /**
   * Transition options of the hide animation.
   * @group Props
   */
  hideTransitionOptions = ".1s linear";
  /**
   * When present, it specifies that the component should automatically get focus on load.
   * @group Props
   */
  autofocus;
  /**
   * Default color to display initially when model value is not present.
   * @group Props
   */
  defaultColor = "ff0000";
  /**
   * Target element to attach the overlay, valid values are "body" or a local ng-template variable of another element (note: use binding with brackets for template variables, e.g. [appendTo]="mydiv" for a div element having #mydiv as variable name).
   * @defaultValue 'self'
   * @group Props
   */
  appendTo = input(void 0, ...ngDevMode ? [{
    debugName: "appendTo"
  }] : []);
  /**
   * Callback to invoke on value change.
   * @param {ColorPickerChangeEvent} event - Custom value change event.
   * @group Emits
   */
  onChange = new EventEmitter();
  /**
   * Callback to invoke on panel is shown.
   * @group Emits
   */
  onShow = new EventEmitter();
  /**
   * Callback to invoke on panel is hidden.
   * @group Emits
   */
  onHide = new EventEmitter();
  inputViewChild;
  $appendTo = computed(() => this.appendTo() || this.config.overlayAppendTo(), ...ngDevMode ? [{
    debugName: "$appendTo"
  }] : []);
  value = {
    h: 0,
    s: 100,
    b: 100
  };
  inputBgColor;
  shown;
  overlayVisible;
  documentClickListener;
  documentResizeListener;
  documentMousemoveListener;
  documentMouseupListener;
  documentHueMoveListener;
  scrollHandler;
  selfClick;
  colorDragging;
  hueDragging;
  overlay;
  colorSelectorViewChild;
  colorHandleViewChild;
  hueViewChild;
  hueHandleViewChild;
  _componentStyle = inject(ColorPickerStyle);
  constructor(overlayService) {
    super();
    this.overlayService = overlayService;
  }
  set colorSelector(element) {
    this.colorSelectorViewChild = element;
  }
  set colorHandle(element) {
    this.colorHandleViewChild = element;
  }
  set hue(element) {
    this.hueViewChild = element;
  }
  set hueHandle(element) {
    this.hueHandleViewChild = element;
  }
  get ariaLabel() {
    return this.config?.getTranslation(TranslationKeys.ARIA)[TranslationKeys.SELECT_COLOR];
  }
  onHueMousedown(event) {
    if (this.$disabled()) {
      return;
    }
    this.bindDocumentMousemoveListener();
    this.bindDocumentMouseupListener();
    this.hueDragging = true;
    this.pickHue(event);
  }
  onHueDragStart(event) {
    if (this.$disabled()) {
      return;
    }
    this.hueDragging = true;
    this.pickHue(event, event.changedTouches[0]);
  }
  onColorDragStart(event) {
    if (this.$disabled()) {
      return;
    }
    this.colorDragging = true;
    this.pickColor(event, event.changedTouches[0]);
  }
  pickHue(event, position) {
    let pageY = position ? position.pageY : event.pageY;
    let top = this.hueViewChild?.nativeElement.getBoundingClientRect().top + (this.document.defaultView.pageYOffset || this.document.documentElement.scrollTop || this.document.body.scrollTop || 0);
    this.value = this.validateHSB({
      h: Math.floor(360 * (150 - Math.max(0, Math.min(150, pageY - top))) / 150),
      s: this.value.s,
      b: this.value.b
    });
    this.updateColorSelector();
    this.updateUI();
    this.updateModel();
    this.onChange.emit({
      originalEvent: event,
      value: this.getValueToUpdate()
    });
  }
  onColorMousedown(event) {
    if (this.$disabled()) {
      return;
    }
    this.bindDocumentMousemoveListener();
    this.bindDocumentMouseupListener();
    this.colorDragging = true;
    this.pickColor(event);
  }
  onDrag(event) {
    if (this.colorDragging) {
      this.pickColor(event, event.changedTouches[0]);
      event.preventDefault();
    }
    if (this.hueDragging) {
      this.pickHue(event, event.changedTouches[0]);
      event.preventDefault();
    }
  }
  onDragEnd() {
    this.colorDragging = false;
    this.hueDragging = false;
    this.unbindDocumentMousemoveListener();
    this.unbindDocumentMouseupListener();
  }
  pickColor(event, position) {
    let pageX = position ? position.pageX : event.pageX;
    let pageY = position ? position.pageY : event.pageY;
    let rect = this.colorSelectorViewChild?.nativeElement.getBoundingClientRect();
    let top = rect.top + (this.document.defaultView.pageYOffset || this.document.documentElement.scrollTop || this.document.body.scrollTop || 0);
    let left = rect.left + this.document.body.scrollLeft;
    let saturation = Math.floor(100 * Math.max(0, Math.min(150, pageX - left)) / 150);
    let brightness = Math.floor(100 * (150 - Math.max(0, Math.min(150, pageY - top))) / 150);
    this.value = this.validateHSB({
      h: this.value.h,
      s: saturation,
      b: brightness
    });
    this.updateUI();
    this.updateModel();
    this.onChange.emit({
      originalEvent: event,
      value: this.getValueToUpdate()
    });
  }
  getValueToUpdate() {
    let val;
    switch (this.format) {
      case "hex":
        val = "#" + this.HSBtoHEX(this.value);
        break;
      case "rgb":
        val = this.HSBtoRGB(this.value);
        break;
      case "hsb":
        val = this.value;
        break;
    }
    return val;
  }
  updateModel() {
    this.onModelChange(this.getValueToUpdate());
    this.cd.markForCheck();
  }
  updateColorSelector() {
    if (this.colorSelectorViewChild) {
      const hsb = {};
      hsb.s = 100;
      hsb.b = 100;
      hsb.h = this.value.h;
      this.colorSelectorViewChild.nativeElement.style.backgroundColor = "#" + this.HSBtoHEX(hsb);
    }
  }
  updateUI() {
    if (this.colorHandleViewChild && this.hueHandleViewChild?.nativeElement) {
      this.colorHandleViewChild.nativeElement.style.left = Math.floor(150 * this.value.s / 100) + "px";
      this.colorHandleViewChild.nativeElement.style.top = Math.floor(150 * (100 - this.value.b) / 100) + "px";
      this.hueHandleViewChild.nativeElement.style.top = Math.floor(150 - 150 * this.value.h / 360) + "px";
    }
    this.inputBgColor = "#" + this.HSBtoHEX(this.value);
  }
  onInputFocus() {
    this.onModelTouched();
  }
  show() {
    this.overlayVisible = true;
    this.cd.markForCheck();
  }
  onOverlayAnimationStart(event) {
    switch (event.toState) {
      case "visible":
        if (!this.inline) {
          this.overlay = event.element;
          this.attrSelector && this.overlay.setAttribute(this.attrSelector, "");
          this.appendOverlay();
          if (this.autoZIndex) {
            zindexutils.set("overlay", this.overlay, this.config.zIndex.overlay);
          }
          this.alignOverlay();
          this.bindDocumentClickListener();
          this.bindDocumentResizeListener();
          this.bindScrollListener();
          this.updateColorSelector();
          this.updateUI();
        }
        break;
      case "void":
        this.onOverlayHide();
        break;
    }
  }
  onOverlayAnimationEnd(event) {
    switch (event.toState) {
      case "visible":
        if (!this.inline) {
          this.onShow.emit({});
        }
        break;
      case "void":
        if (this.autoZIndex) {
          zindexutils.clear(event.element);
        }
        this.onHide.emit({});
        break;
    }
  }
  appendOverlay() {
    DomHandler.appendOverlay(this.overlay, this.$appendTo() === "body" ? this.document.body : this.$appendTo(), this.$appendTo());
  }
  restoreOverlayAppend() {
    if (this.overlay && this.$appendTo() !== "self") {
      this.renderer.appendChild(this.inputViewChild?.nativeElement, this.overlay);
    }
  }
  alignOverlay() {
    if (this.$appendTo() === "self") I(this.overlay, this.inputViewChild?.nativeElement);
    else D(this.overlay, this.inputViewChild?.nativeElement);
  }
  hide() {
    this.overlayVisible = false;
    this.cd.markForCheck();
  }
  onInputClick() {
    this.selfClick = true;
    this.togglePanel();
  }
  togglePanel() {
    if (!this.overlayVisible) this.show();
    else this.hide();
  }
  onInputKeydown(event) {
    switch (event.code) {
      case "Space":
        this.togglePanel();
        event.preventDefault();
        break;
      case "Escape":
      case "Tab":
        this.hide();
        break;
      default:
        break;
    }
  }
  onOverlayClick(event) {
    this.overlayService.add({
      originalEvent: event,
      target: this.el.nativeElement
    });
    this.selfClick = true;
  }
  bindDocumentClickListener() {
    if (!this.documentClickListener) {
      const documentTarget = this.el ? this.el.nativeElement.ownerDocument : "document";
      this.documentClickListener = this.renderer.listen(documentTarget, "click", () => {
        if (!this.selfClick) {
          this.overlayVisible = false;
          this.unbindDocumentClickListener();
        }
        this.selfClick = false;
        this.cd.markForCheck();
      });
    }
  }
  unbindDocumentClickListener() {
    if (this.documentClickListener) {
      this.documentClickListener();
      this.documentClickListener = null;
    }
  }
  bindDocumentMousemoveListener() {
    if (!this.documentMousemoveListener) {
      const documentTarget = this.el ? this.el.nativeElement.ownerDocument : "document";
      this.documentMousemoveListener = this.renderer.listen(documentTarget, "mousemove", (event) => {
        if (this.colorDragging) {
          this.pickColor(event);
        }
        if (this.hueDragging) {
          this.pickHue(event);
        }
      });
    }
  }
  unbindDocumentMousemoveListener() {
    if (this.documentMousemoveListener) {
      this.documentMousemoveListener();
      this.documentMousemoveListener = null;
    }
  }
  bindDocumentMouseupListener() {
    if (!this.documentMouseupListener) {
      const documentTarget = this.el ? this.el.nativeElement.ownerDocument : "document";
      this.documentMouseupListener = this.renderer.listen(documentTarget, "mouseup", () => {
        this.colorDragging = false;
        this.hueDragging = false;
        this.unbindDocumentMousemoveListener();
        this.unbindDocumentMouseupListener();
      });
    }
  }
  unbindDocumentMouseupListener() {
    if (this.documentMouseupListener) {
      this.documentMouseupListener();
      this.documentMouseupListener = null;
    }
  }
  bindDocumentResizeListener() {
    if (isPlatformBrowser(this.platformId)) {
      this.documentResizeListener = this.renderer.listen(this.document.defaultView, "resize", this.onWindowResize.bind(this));
    }
  }
  unbindDocumentResizeListener() {
    if (this.documentResizeListener) {
      this.documentResizeListener();
      this.documentResizeListener = null;
    }
  }
  onWindowResize() {
    if (this.overlayVisible && !Yt()) {
      this.hide();
    }
  }
  bindScrollListener() {
    if (!this.scrollHandler) {
      this.scrollHandler = new ConnectedOverlayScrollHandler(this.el?.nativeElement, () => {
        if (this.overlayVisible) {
          this.hide();
        }
      });
    }
    this.scrollHandler.bindScrollListener();
  }
  unbindScrollListener() {
    if (this.scrollHandler) {
      this.scrollHandler.unbindScrollListener();
    }
  }
  validateHSB(hsb) {
    return {
      h: Math.min(360, Math.max(0, hsb.h)),
      s: Math.min(100, Math.max(0, hsb.s)),
      b: Math.min(100, Math.max(0, hsb.b))
    };
  }
  validateRGB(rgb) {
    return {
      r: Math.min(255, Math.max(0, rgb.r)),
      g: Math.min(255, Math.max(0, rgb.g)),
      b: Math.min(255, Math.max(0, rgb.b))
    };
  }
  validateHEX(hex) {
    var len = 6 - hex.length;
    if (len > 0) {
      var o = [];
      for (var i = 0; i < len; i++) {
        o.push("0");
      }
      o.push(hex);
      hex = o.join("");
    }
    return hex;
  }
  HEXtoRGB(hex) {
    let hexValue = parseInt(hex.indexOf("#") > -1 ? hex.substring(1) : hex, 16);
    return {
      r: hexValue >> 16,
      g: (hexValue & 65280) >> 8,
      b: hexValue & 255
    };
  }
  HEXtoHSB(hex) {
    return this.RGBtoHSB(this.HEXtoRGB(hex));
  }
  RGBtoHSB(rgb) {
    var hsb = {
      h: 0,
      s: 0,
      b: 0
    };
    var min = Math.min(rgb.r, rgb.g, rgb.b);
    var max = Math.max(rgb.r, rgb.g, rgb.b);
    var delta = max - min;
    hsb.b = max;
    hsb.s = max != 0 ? 255 * delta / max : 0;
    if (hsb.s != 0) {
      if (rgb.r == max) {
        hsb.h = (rgb.g - rgb.b) / delta;
      } else if (rgb.g == max) {
        hsb.h = 2 + (rgb.b - rgb.r) / delta;
      } else {
        hsb.h = 4 + (rgb.r - rgb.g) / delta;
      }
    } else {
      hsb.h = -1;
    }
    hsb.h *= 60;
    if (hsb.h < 0) {
      hsb.h += 360;
    }
    hsb.s *= 100 / 255;
    hsb.b *= 100 / 255;
    return hsb;
  }
  HSBtoRGB(hsb) {
    var rgb = {
      r: 0,
      g: 0,
      b: 0
    };
    let h = hsb.h;
    let s = hsb.s * 255 / 100;
    let v = hsb.b * 255 / 100;
    if (s == 0) {
      rgb = {
        r: v,
        g: v,
        b: v
      };
    } else {
      let t1 = v;
      let t2 = (255 - s) * v / 255;
      let t3 = (t1 - t2) * (h % 60) / 60;
      if (h == 360) h = 0;
      if (h < 60) {
        rgb.r = t1;
        rgb.b = t2;
        rgb.g = t2 + t3;
      } else if (h < 120) {
        rgb.g = t1;
        rgb.b = t2;
        rgb.r = t1 - t3;
      } else if (h < 180) {
        rgb.g = t1;
        rgb.r = t2;
        rgb.b = t2 + t3;
      } else if (h < 240) {
        rgb.b = t1;
        rgb.r = t2;
        rgb.g = t1 - t3;
      } else if (h < 300) {
        rgb.b = t1;
        rgb.g = t2;
        rgb.r = t2 + t3;
      } else if (h < 360) {
        rgb.r = t1;
        rgb.g = t2;
        rgb.b = t1 - t3;
      } else {
        rgb.r = 0;
        rgb.g = 0;
        rgb.b = 0;
      }
    }
    return {
      r: Math.round(rgb.r),
      g: Math.round(rgb.g),
      b: Math.round(rgb.b)
    };
  }
  RGBtoHEX(rgb) {
    var hex = [rgb.r.toString(16), rgb.g.toString(16), rgb.b.toString(16)];
    for (var key in hex) {
      if (hex[key].length == 1) {
        hex[key] = "0" + hex[key];
      }
    }
    return hex.join("");
  }
  HSBtoHEX(hsb) {
    return this.RGBtoHEX(this.HSBtoRGB(hsb));
  }
  onOverlayHide() {
    this.unbindScrollListener();
    this.unbindDocumentResizeListener();
    this.unbindDocumentClickListener();
    this.overlay = null;
  }
  ngAfterViewInit() {
    if (this.inline) {
      this.updateColorSelector();
      this.updateUI();
    }
  }
  /**
   * @override
   *
   * @see {@link BaseEditableHolder.writeControlValue}
   * Writes the value to the control.
   */
  writeControlValue(value) {
    if (value) {
      switch (this.format) {
        case "hex":
          this.value = this.HEXtoHSB(value);
          break;
        case "rgb":
          this.value = this.RGBtoHSB(value);
          break;
        case "hsb":
          this.value = value;
          break;
      }
    } else {
      this.value = this.HEXtoHSB(this.defaultColor);
    }
    this.updateColorSelector();
    this.updateUI();
    this.cd.markForCheck();
  }
  ngOnDestroy() {
    if (this.scrollHandler) {
      this.scrollHandler.destroy();
      this.scrollHandler = null;
    }
    if (this.overlay && this.autoZIndex) {
      zindexutils.clear(this.overlay);
    }
    this.restoreOverlayAppend();
    this.onOverlayHide();
  }
  cn = f;
  static \u0275fac = function ColorPicker_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ColorPicker)(\u0275\u0275directiveInject(OverlayService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _ColorPicker,
    selectors: [["p-colorPicker"], ["p-colorpicker"], ["p-color-picker"]],
    viewQuery: function ColorPicker_Query(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275viewQuery(_c0, 5);
        \u0275\u0275viewQuery(_c1, 5);
        \u0275\u0275viewQuery(_c2, 5);
        \u0275\u0275viewQuery(_c3, 5);
        \u0275\u0275viewQuery(_c4, 5);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.inputViewChild = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.colorSelector = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.colorHandle = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.hue = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.hueHandle = _t.first);
      }
    },
    hostVars: 4,
    hostBindings: function ColorPicker_HostBindings(rf, ctx) {
      if (rf & 2) {
        \u0275\u0275attribute("data-pc-name", "colorpicker")("data-pc-section", "root");
        \u0275\u0275classMap(ctx.cn(ctx.cx("root"), ctx.styleClass));
      }
    },
    inputs: {
      styleClass: "styleClass",
      inline: [2, "inline", "inline", booleanAttribute],
      format: "format",
      tabindex: "tabindex",
      inputId: "inputId",
      autoZIndex: [2, "autoZIndex", "autoZIndex", booleanAttribute],
      showTransitionOptions: "showTransitionOptions",
      hideTransitionOptions: "hideTransitionOptions",
      autofocus: [2, "autofocus", "autofocus", booleanAttribute],
      defaultColor: "defaultColor",
      appendTo: [1, "appendTo"]
    },
    outputs: {
      onChange: "onChange",
      onShow: "onShow",
      onHide: "onHide"
    },
    features: [\u0275\u0275ProvidersFeature([COLORPICKER_VALUE_ACCESSOR, ColorPickerStyle]), \u0275\u0275InheritDefinitionFeature],
    decls: 2,
    vars: 2,
    consts: [["input", ""], ["colorSelector", ""], ["colorHandle", ""], ["hue", ""], ["hueHandle", ""], ["type", "text", "readonly", "", 3, "class", "backgroundColor", "pAutoFocus", "click", "keydown", "focus", 4, "ngIf"], [3, "class", "click", 4, "ngIf"], ["type", "text", "readonly", "", 3, "click", "keydown", "focus", "pAutoFocus"], [3, "click"], [3, "touchstart", "touchmove", "touchend", "mousedown"], [3, "mousedown", "touchstart", "touchmove", "touchend"]],
    template: function ColorPicker_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275template(0, ColorPicker_input_0_Template, 2, 10, "input", 5)(1, ColorPicker_div_1_Template, 11, 28, "div", 6);
      }
      if (rf & 2) {
        \u0275\u0275property("ngIf", !ctx.inline);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.inline || ctx.overlayVisible);
      }
    },
    dependencies: [CommonModule, NgIf, AutoFocusModule, AutoFocus, SharedModule],
    encapsulation: 2,
    data: {
      animation: [trigger("overlayAnimation", [transition(":enter", [style({
        opacity: 0,
        transform: "scaleY(0.8)"
      }), animate("{{showTransitionParams}}")]), transition(":leave", [animate("{{hideTransitionParams}}", style({
        opacity: 0
      }))])])]
    },
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ColorPicker, [{
    type: Component,
    args: [{
      selector: "p-colorPicker, p-colorpicker, p-color-picker",
      standalone: true,
      imports: [CommonModule, AutoFocusModule, SharedModule],
      template: `
        <input
            *ngIf="!inline"
            #input
            type="text"
            [class]="cx('preview')"
            readonly
            [attr.tabindex]="tabindex"
            [attr.disabled]="$disabled() ? '' : undefined"
            (click)="onInputClick()"
            (keydown)="onInputKeydown($event)"
            (focus)="onInputFocus()"
            [attr.id]="inputId"
            [style.backgroundColor]="inputBgColor"
            [attr.data-pc-section]="'input'"
            [attr.aria-label]="ariaLabel"
            [pAutoFocus]="autofocus"
        />
        <div
            *ngIf="inline || overlayVisible"
            [class]="cx('panel')"
            (click)="onOverlayClick($event)"
            [@overlayAnimation]="{
                value: 'visible',
                params: { showTransitionParams: showTransitionOptions, hideTransitionParams: hideTransitionOptions }
            }"
            [@.disabled]="inline === true"
            (@overlayAnimation.start)="onOverlayAnimationStart($event)"
            (@overlayAnimation.done)="onOverlayAnimationEnd($event)"
            [attr.data-pc-section]="'panel'"
        >
            <div [class]="cx('content')" [attr.data-pc-section]="'content'">
                <div #colorSelector [class]="cx('colorSelector')" (touchstart)="onColorDragStart($event)" (touchmove)="onDrag($event)" (touchend)="onDragEnd()" (mousedown)="onColorMousedown($event)" [attr.data-pc-section]="'selector'">
                    <div [class]="cx('colorBackground')" [attr.data-pc-section]="'color'">
                        <div #colorHandle [class]="cx('colorHandle')" [attr.data-pc-section]="'colorHandle'"></div>
                    </div>
                </div>
                <div #hue [class]="cx('hue')" (mousedown)="onHueMousedown($event)" (touchstart)="onHueDragStart($event)" (touchmove)="onDrag($event)" (touchend)="onDragEnd()" [attr.data-pc-section]="'hue'">
                    <div #hueHandle [class]="cx('hueHandle')" [attr.data-pc-section]="'hueHandle'"></div>
                </div>
            </div>
        </div>
    `,
      animations: [trigger("overlayAnimation", [transition(":enter", [style({
        opacity: 0,
        transform: "scaleY(0.8)"
      }), animate("{{showTransitionParams}}")]), transition(":leave", [animate("{{hideTransitionParams}}", style({
        opacity: 0
      }))])])],
      providers: [COLORPICKER_VALUE_ACCESSOR, ColorPickerStyle],
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation.None,
      host: {
        "[class]": "cn(cx('root'), styleClass)",
        "[attr.data-pc-name]": '"colorpicker"',
        "[attr.data-pc-section]": '"root"'
      }
    }]
  }], () => [{
    type: OverlayService
  }], {
    styleClass: [{
      type: Input
    }],
    inline: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    format: [{
      type: Input
    }],
    tabindex: [{
      type: Input
    }],
    inputId: [{
      type: Input
    }],
    autoZIndex: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    showTransitionOptions: [{
      type: Input
    }],
    hideTransitionOptions: [{
      type: Input
    }],
    autofocus: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    defaultColor: [{
      type: Input
    }],
    onChange: [{
      type: Output
    }],
    onShow: [{
      type: Output
    }],
    onHide: [{
      type: Output
    }],
    inputViewChild: [{
      type: ViewChild,
      args: ["input"]
    }],
    colorSelector: [{
      type: ViewChild,
      args: ["colorSelector"]
    }],
    colorHandle: [{
      type: ViewChild,
      args: ["colorHandle"]
    }],
    hue: [{
      type: ViewChild,
      args: ["hue"]
    }],
    hueHandle: [{
      type: ViewChild,
      args: ["hueHandle"]
    }]
  });
})();
var ColorPickerModule = class _ColorPickerModule {
  static \u0275fac = function ColorPickerModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ColorPickerModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
    type: _ColorPickerModule,
    imports: [ColorPicker, SharedModule],
    exports: [ColorPicker, SharedModule]
  });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
    imports: [ColorPicker, SharedModule, SharedModule]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ColorPickerModule, [{
    type: NgModule,
    args: [{
      imports: [ColorPicker, SharedModule],
      exports: [ColorPicker, SharedModule]
    }]
  }], null, null);
})();

// src/app/features/ui-interface/forms/form-pickers/form-pickers.component.ts
var _c02 = () => ({ adaptivePosition: true });
var _c12 = () => ({ standalone: true });
var FormPickersComponent = class _FormPickersComponent {
  common;
  date;
  time;
  bsInlineValue = /* @__PURE__ */ new Date();
  bsInlineRangeValue;
  color;
  maxDate = /* @__PURE__ */ new Date();
  datePickerValue = new Date(2020, 7);
  dateRangePickerValue;
  range1 = new Date(2020, 5);
  range2 = new Date(2020, 8);
  minMode = "month";
  selectedYear;
  datepicker;
  bsConfig;
  constructor(common) {
    this.common = common;
    this.selectedYear = new Date((/* @__PURE__ */ new Date()).getFullYear(), 0, 1);
    this.bsConfig = {
      minMode: "year",
      dateInputFormat: "YYYY"
      // Display only the year in the input
    };
    this.maxDate.setDate(this.maxDate.getDate() + 7);
    this.bsInlineRangeValue = [this.bsInlineValue, this.maxDate];
  }
  ngOnInit() {
    this.dateRangePickerValue = [this.range1, this.range2];
    this.bsConfig = Object.assign({}, {
      minMode: this.minMode
    });
  }
  static \u0275fac = function FormPickersComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _FormPickersComponent)(\u0275\u0275directiveInject(CommonService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _FormPickersComponent, selectors: [["app-form-pickers"]], viewQuery: function FormPickersComponent_Query(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275viewQuery(BsDatepickerDirective, 5);
    }
    if (rf & 2) {
      let _t;
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.datepicker = _t.first);
    }
  }, decls: 61, vars: 12, consts: [["dp", "bsDatepicker"], [1, "d-flex", "align-items-sm-center", "flex-sm-row", "flex-column", "gap-2", "pb-3"], [1, "flex-grow-1"], [1, "fs-18", "fw-semibold", "mb-0"], [1, "text-end"], [1, "breadcrumb", "m-0", "py-0"], [1, "breadcrumb-item"], ["href", "javascript: void(0);"], [1, "breadcrumb-item", "active"], [1, "row"], [1, "col-12", "mb-6"], [1, "card"], [1, "card-header"], [1, "card-body"], [1, "col-md-6", "col-12", "mb-6"], [1, "ngx-date3"], [1, "form-label"], [1, "input-icon-end", "position-relative"], ["type", "text", "bsDatepicker", "", "container", ".ngx-date3", "placeholder", "dd/mm/yyyy", "value", "02-05-2024", 1, "form-control", "datetimepicker", 3, "bsConfig"], [1, "input-icon-addon"], [1, "ti", "ti-calendar", "text-gray-7"], ["for", "flatpickr-time", 1, "form-label"], ["placeholder", "HH : MM", "inputId", "calendar-timeonly", 1, "timepick", 3, "ngModelChange", "ngModel", "timeOnly"], [1, "mb-3"], ["type", "text", "placeholder", "Daterangepicker", "bsDaterangepicker", "", 1, "form-control"], [1, "ngx-year"], [1, "input-icon", "position-relative"], [1, "ti", "ti-calendar", "text-gray-9"], ["type", "text", "placeholder", "yyyy", "container", ".ngx-year", "bsDatepicker", "", 1, "form-control", "yearpicker", 3, "ngModelChange", "bsConfig", "ngModel", "ngModelOptions"], [3, "bsValue"], [1, "col-md-6", "col-12", "mb-md-0", "mb-6"], ["for", "flatpickr-disabled-range", 1, "form-label"], ["type", "text", "bsDatepicker", "", 1, "form-control", 3, "bsValueChange", "bsConfig", "bsValue"], [1, "col-12"], [1, "classic", "col", "col-sm-3", "col-lg-2"], [3, "ngModelChange", "ngModel"]], template: function FormPickersComponent_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = \u0275\u0275getCurrentView();
      \u0275\u0275elementStart(0, "div", 1)(1, "div", 2)(2, "h4", 3);
      \u0275\u0275text(3, "Form Picker");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(4, "div", 4)(5, "ol", 5)(6, "li", 6)(7, "a", 7);
      \u0275\u0275text(8, "Home");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(9, "li", 6)(10, "a", 7);
      \u0275\u0275text(11, "Forms");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(12, "li", 8);
      \u0275\u0275text(13, "Form Picker");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(14, "div", 9)(15, "div", 10)(16, "div", 11)(17, "h5", 12);
      \u0275\u0275text(18, "Datepickr");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(19, "div", 13)(20, "div", 9)(21, "div", 14)(22, "div", 15)(23, "label", 16);
      \u0275\u0275text(24, "Date Picker");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(25, "div", 17);
      \u0275\u0275element(26, "input", 18);
      \u0275\u0275elementStart(27, "span", 19);
      \u0275\u0275element(28, "i", 20);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(29, "div", 14)(30, "label", 21);
      \u0275\u0275text(31, "Time Picker");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(32, "p-datePicker", 22);
      \u0275\u0275twoWayListener("ngModelChange", function FormPickersComponent_Template_p_datePicker_ngModelChange_32_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.time, $event) || (ctx.time = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(33, "div", 14)(34, "div", 23)(35, "label", 16);
      \u0275\u0275text(36, "Date Range Picker");
      \u0275\u0275elementEnd();
      \u0275\u0275element(37, "input", 24);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(38, "div", 14)(39, "div", 25)(40, "label", 16);
      \u0275\u0275text(41, "Year Picker");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(42, "div", 26)(43, "span", 19);
      \u0275\u0275element(44, "i", 27);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(45, "input", 28);
      \u0275\u0275twoWayListener("ngModelChange", function FormPickersComponent_Template_input_ngModelChange_45_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.selectedYear, $event) || (ctx.selectedYear = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(46, "div", 14);
      \u0275\u0275element(47, "bs-datepicker-inline", 29);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(48, "div", 30)(49, "label", 31);
      \u0275\u0275text(50, "Month Range");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(51, "input", 32, 0);
      \u0275\u0275twoWayListener("bsValueChange", function FormPickersComponent_Template_input_bsValueChange_51_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.datePickerValue, $event) || (ctx.datePickerValue = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(53, "div", 33)(54, "div", 11)(55, "h5", 12);
      \u0275\u0275text(56, "Color Picker");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(57, "div", 13)(58, "div", 9)(59, "div", 34)(60, "p-colorPicker", 35);
      \u0275\u0275twoWayListener("ngModelChange", function FormPickersComponent_Template_p_colorPicker_ngModelChange_60_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.color, $event) || (ctx.color = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275elementEnd()()()()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(26);
      \u0275\u0275property("bsConfig", \u0275\u0275pureFunction0(10, _c02));
      \u0275\u0275advance(6);
      \u0275\u0275twoWayProperty("ngModel", ctx.time);
      \u0275\u0275property("timeOnly", true);
      \u0275\u0275advance(13);
      \u0275\u0275property("bsConfig", ctx.bsConfig);
      \u0275\u0275twoWayProperty("ngModel", ctx.selectedYear);
      \u0275\u0275property("ngModelOptions", \u0275\u0275pureFunction0(11, _c12));
      \u0275\u0275advance(2);
      \u0275\u0275property("bsValue", ctx.bsInlineValue);
      \u0275\u0275advance(4);
      \u0275\u0275property("bsConfig", ctx.bsConfig);
      \u0275\u0275twoWayProperty("bsValue", ctx.datePickerValue);
      \u0275\u0275advance(9);
      \u0275\u0275twoWayProperty("ngModel", ctx.color);
    }
  }, dependencies: [CommonModule, ColorPickerModule, ColorPicker, FormsModule, DefaultValueAccessor, NgControlStatus, NgModel, BsDatepickerModule, BsDatepickerDirective, BsDatepickerInlineDirective, BsDatepickerInputDirective, BsDaterangepickerDirective, BsDaterangepickerInputDirective, DatePickerModule, DatePicker], styles: ["\n\n.p-calendar[_ngcontent-%COMP%]   .p-inputtext[_ngcontent-%COMP%] {\n  max-height: 37px;\n}\n/*# sourceMappingURL=form-pickers.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FormPickersComponent, [{
    type: Component,
    args: [{ selector: "app-form-pickers", imports: [CommonModule, ColorPickerModule, FormsModule, BsDatepickerModule, DatePickerModule], template: ' <!-- Page Header -->\n <div class="d-flex align-items-sm-center flex-sm-row flex-column gap-2 pb-3">\n  <div class="flex-grow-1">\n      <h4 class="fs-18 fw-semibold mb-0">Form Picker</h4>\n  </div>\n  <div class="text-end">\n      <ol class="breadcrumb m-0 py-0">\n          <li class="breadcrumb-item"><a href="javascript: void(0);">Home</a></li>\n          <li class="breadcrumb-item"><a href="javascript: void(0);">Forms</a></li>\n          <li class="breadcrumb-item active">Form Picker</li>\n      </ol>\n  </div>\n</div>\n<!-- End Page Header -->\n\n<div class="row">\n<!-- Date Picker -->\n<div class="col-12 mb-6">\n  <div class="card">\n    <h5 class="card-header">Datepickr</h5>\n    <div class="card-body">\n      <div class="row">\n        <!-- Date Picker-->\n        <div class="col-md-6 col-12 mb-6">\n            <div class="ngx-date3">\n                <label class="form-label">Date Picker</label>\n                <div class="input-icon-end position-relative">\n                    <input\n                      type="text"\n                      class="form-control datetimepicker"\n                      bsDatepicker\n                      container=".ngx-date3"\n                      [bsConfig]="{ adaptivePosition: true }"\n                      placeholder="dd/mm/yyyy"\n                      value="02-05-2024"\n                    />\n                    <span class="input-icon-addon">\n                      <i class="ti ti-calendar text-gray-7"></i>\n                    </span>\n                  </div>\n\n            </div>\n        </div>\n        <!-- /Date Picker -->\n\n        <!-- Time Picker-->\n        <div class="col-md-6 col-12 mb-6">\n          <label for="flatpickr-time" class="form-label">Time Picker</label>\n          <p-datePicker class="timepick" placeholder="HH : MM" inputId="calendar-timeonly" [(ngModel)]="time"  [timeOnly]="true" />\n        </div>\n        <!-- /Time Picker -->\n\n        <!-- Date Range Picker-->\n        <div class="col-md-6 col-12 mb-6">\n            <div class="mb-3">\n                <label class="form-label">Date Range Picker</label>\n                <input type="text" placeholder="Daterangepicker" class="form-control" bsDaterangepicker>\n            </div>\n        </div>\n        <!-- /Date Range Picker-->\n\n        <!-- Range Picker-->\n        <div class="col-md-6 col-12 mb-6">\n            <div class="ngx-year">\n                <label class="form-label">Year Picker</label>\n                <div class="input-icon position-relative">\n                <span class="input-icon-addon">\n                    <i class="ti ti-calendar text-gray-9"></i>\n                  </span>\n                  <input\n                    type="text"\n                    placeholder="yyyy"\n                    class="form-control yearpicker"\n                    container=".ngx-year"\n                    bsDatepicker\n                    [bsConfig]="bsConfig"\n                    [(ngModel)]="selectedYear"\n                    [ngModelOptions]="{ standalone: true }"\n                  />\n                </div>\n              </div>\n        </div>\n        <!-- /Range Picker-->\n\n        <!-- Human Friendly Date Picker-->\n        <div class="col-md-6 col-12 mb-6">\n            <bs-datepicker-inline [bsValue]="bsInlineValue"></bs-datepicker-inline>\n        </div>\n        <!-- /Human Friendly Date Picker-->\n\n        <!-- Disabled Range-->\n        <div class="col-md-6 col-12 mb-md-0 mb-6">\n          <label for="flatpickr-disabled-range" class="form-label">Month Range</label>\n          <input type="text"\n           class="form-control"\n           [bsConfig]="bsConfig"\n           #dp="bsDatepicker"\n           bsDatepicker [(bsValue)]="datePickerValue">\n        </div>\n        <!-- /Disabled Range-->\n      </div>\n    </div>\n  </div>\n</div>\n<!-- /Datepickr -->\n\n<!-- Color Picker -->\n<div class="col-12">\n  <div class="card">\n    <h5 class="card-header">Color Picker</h5>\n    <div class="card-body">\n      <div class="row">\n        <div class="classic col col-sm-3 col-lg-2">\n            <p-colorPicker [(ngModel)]="color" />\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n<!-- /Color Picker-->\n</div>', styles: ["/* src/app/features/ui-interface/forms/form-pickers/form-pickers.component.scss */\n.p-calendar .p-inputtext {\n  max-height: 37px;\n}\n/*# sourceMappingURL=form-pickers.component.css.map */\n"] }]
  }], () => [{ type: CommonService }], { datepicker: [{
    type: ViewChild,
    args: [BsDatepickerDirective, { static: false }]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(FormPickersComponent, { className: "FormPickersComponent", filePath: "src/app/features/ui-interface/forms/form-pickers/form-pickers.component.ts", lineNumber: 15 });
})();
export {
  FormPickersComponent
};
//# sourceMappingURL=chunk-KYQLJOT2.js.map

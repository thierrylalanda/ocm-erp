import {
  DefaultValueAccessor,
  FormControl,
  FormControlDirective,
  FormGroup,
  FormsModule,
  NG_VALUE_ACCESSOR,
  NgControl,
  NgControlStatus,
  NgControlStatusGroup,
  NgForm,
  PatternValidator,
  ReactiveFormsModule,
  ɵNgNoValidate
} from "./chunk-NAWYXTZ5.js";
import {
  routes
} from "./chunk-YJY3UYMJ.js";
import "./chunk-AWXYRVJS.js";
import {
  Router
} from "./chunk-WOBWH5QA.js";
import "./chunk-KYBWVUSB.js";
import "./chunk-ZCJVS2AD.js";
import {
  CommonModule,
  NgClass,
  NgForOf,
  NgIf,
  NgStyle
} from "./chunk-LNSVVXVJ.js";
import {
  Component,
  DOCUMENT,
  Inject,
  Injector,
  Input,
  NgModule,
  Output,
  Subject,
  ViewChild,
  forwardRef,
  setClassMetadata,
  takeUntil,
  ɵsetClassDebugInfo,
  ɵɵProvidersFeature,
  ɵɵadvance,
  ɵɵclassMap,
  ɵɵdefineComponent,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵinterpolate1,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵpureFunction1,
  ɵɵqueryRefresh,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate1,
  ɵɵviewQuery
} from "./chunk-HKG6HBOI.js";
import "./chunk-TXDUYLVM.js";

// node_modules/ng-otp-input/fesm2022/ng-otp-input.mjs
var _c0 = (a0) => ({
  "error-input": a0
});
function NgOtpInputComponent_div_0_ng_container_2_span_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.config.separator, " ");
  }
}
function NgOtpInputComponent_div_0_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "input", 5, 0);
    \u0275\u0275listener("paste", function NgOtpInputComponent_div_0_ng_container_2_Template_input_paste_1_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.handlePaste($event));
    })("keyup", function NgOtpInputComponent_div_0_ng_container_2_Template_input_keyup_1_listener($event) {
      const i_r4 = \u0275\u0275restoreView(_r3).index;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onKeyUp($event, i_r4));
    })("input", function NgOtpInputComponent_div_0_ng_container_2_Template_input_input_1_listener($event) {
      const i_r4 = \u0275\u0275restoreView(_r3).index;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onInput($event, i_r4));
    })("keydown", function NgOtpInputComponent_div_0_ng_container_2_Template_input_keydown_1_listener($event) {
      const i_r4 = \u0275\u0275restoreView(_r3).index;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onKeyDown($event, i_r4));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275template(3, NgOtpInputComponent_div_0_ng_container_2_span_3_Template, 2, 1, "span", 6);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const item_r5 = ctx.$implicit;
    const i_r4 = ctx.index;
    const last_r6 = ctx.last;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275classMap(\u0275\u0275interpolate1("otp-input ", ctx_r1.config.inputClass));
    \u0275\u0275property("pattern", ctx_r1.config.allowNumbersOnly ? "\\d*" : "")("type", ctx_r1.inputType)("placeholder", (ctx_r1.config == null ? null : ctx_r1.config.placeholder) || "")("ngStyle", ctx_r1.config.inputStyles)("formControl", ctx_r1.otpForm.controls[item_r5])("id", ctx_r1.getBoxId(i_r4))("ngClass", \u0275\u0275pureFunction1(11, _c0, (ctx_r1.config == null ? null : ctx_r1.config.showError) && (ctx_r1.formControl == null ? null : ctx_r1.formControl.invalid) && ((ctx_r1.formControl == null ? null : ctx_r1.formControl.dirty) || (ctx_r1.formControl == null ? null : ctx_r1.formControl.touched))));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r1.config.separator && !last_r6);
  }
}
function NgOtpInputComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 2);
    \u0275\u0275listener("focusin", function NgOtpInputComponent_div_0_Template_div_focusin_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onFocusIn());
    })("focusout", function NgOtpInputComponent_div_0_Template_div_focusout_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onFocusOut());
    });
    \u0275\u0275elementStart(1, "div", 3);
    \u0275\u0275template(2, NgOtpInputComponent_div_0_ng_container_2_Template, 4, 13, "ng-container", 4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275classMap(\u0275\u0275interpolate1("ng-otp-input-wrapper wrapper ", ctx_r1.config.containerClass));
    \u0275\u0275property("id", \u0275\u0275interpolate1("c_", ctx_r1.componentKey))("ngStyle", ctx_r1.config.containerStyles);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r1.controlKeys);
  }
}
var KeyboardUtil = class {
  static ifTab(event) {
    return this.ifKey(event, "Tab");
  }
  static ifDelete(event) {
    return this.ifKey(event, "Delete;Del");
  }
  static ifBackspace(event) {
    return this.ifKey(event, "Backspace");
  }
  static ifRightArrow(event) {
    return this.ifKey(event, "ArrowRight;Right");
  }
  static ifLeftArrow(event) {
    return this.ifKey(event, "ArrowLeft;Left");
  }
  static ifSpacebar(event) {
    return this.ifKey(event, "Spacebar; ");
  }
  static ifKey(event, keys) {
    let keysToCheck = keys.split(";");
    return keysToCheck.some((k) => k === event.key);
  }
};
var ObjectUtil = class {
  static keys(obj) {
    if (!obj) return [];
    return Object.keys(obj);
  }
};
var _NgOtpInputComponent = class _NgOtpInputComponent {
  set disabled(isDisabled) {
    this.setDisabledState(isDisabled);
  }
  get inputType() {
    return this.config?.isPasswordInput ? "password" : this.config?.allowNumbersOnly ? "tel" : "text";
  }
  get controlKeys() {
    return ObjectUtil.keys(this.otpForm?.controls);
  }
  get formControl() {
    return this.formCtrl ?? this.inj?.get(NgControl);
  }
  constructor(document, inj) {
    this.document = document;
    this.inj = inj;
    this.config = {
      length: 4
    };
    this.onBlur = new Subject();
    this.onInputChange = new Subject();
    this.inputControls = new Array(this.config.length);
    this.componentKey = Math.random().toString(36).substring(2) + (/* @__PURE__ */ new Date()).getTime().toString(36);
    this.destroy$ = new Subject();
    this.activeFocusCount = 0;
    this.onChange = () => {
    };
    this.onTouched = () => {
    };
    this._isDisabled = false;
  }
  ngOnInit() {
    this.otpForm = new FormGroup({});
    for (let index = 0; index < this.config.length; index++) {
      this.otpForm.addControl(this.getControlName(index), new FormControl());
    }
    this.otpForm.valueChanges.pipe(takeUntil(this.destroy$)).subscribe((v) => {
      ObjectUtil.keys(this.otpForm.controls).forEach((k) => {
        var val = this.otpForm.controls[k].value;
        if (val && val.length > 1) {
          if (val.length >= this.config.length) {
            this.setValue(val);
          } else {
            this.rebuildValue();
          }
        }
      });
    });
  }
  setDisabledState(isDisabled) {
    this._isDisabled = isDisabled;
    if (this.otpForm) {
      if (isDisabled) {
        this.otpForm.disable({
          emitEvent: false
        });
      } else {
        this.otpForm.enable({
          emitEvent: false
        });
      }
    }
  }
  writeValue(value) {
    this.currentVal = !this.hasVal(value) ? null : value;
    this.setValue(this.currentVal);
  }
  registerOnChange(fn) {
    this.onChange = fn;
  }
  registerOnTouched(fn) {
    this.onTouched = fn;
  }
  onFocusIn() {
    this.onTouched();
    this.activeFocusCount++;
  }
  onFocusOut() {
    setTimeout(() => {
      this.activeFocusCount--;
      if (this.activeFocusCount === 0) {
        this.onTouched();
        this.onBlur.next();
      }
    }, 0);
  }
  ngAfterViewInit() {
    if (!this.config.disableAutoFocus) {
      const containerItem = this.document.getElementById(`c_${this.componentKey}`);
      if (containerItem) {
        const ele = containerItem.getElementsByClassName("otp-input")[0];
        if (ele && ele.focus) {
          ele.focus();
        }
      }
    }
  }
  getControlName(idx) {
    return `ctrl_${idx}`;
  }
  onKeyDown($event, inputIdx) {
    const prevInputId = this.getBoxId(inputIdx - 1);
    const currentInputId = this.getBoxId(inputIdx);
    if (KeyboardUtil.ifKey($event, "Enter")) {
      let inp = this.document.getElementById(currentInputId);
      const form = inp?.closest("form");
      if (form) {
        $event.preventDefault();
        const submitEvent = new Event("submit", {
          bubbles: true,
          cancelable: true
        });
        form.dispatchEvent(submitEvent);
        return;
      }
    }
    if (KeyboardUtil.ifSpacebar($event)) {
      $event.preventDefault();
      return false;
    }
    if (KeyboardUtil.ifBackspace($event)) {
      if (!$event.target.value) {
        this.clearInput(prevInputId, inputIdx - 1);
        this.setSelected(prevInputId);
      } else {
        this.clearInput(currentInputId, inputIdx);
      }
      this.rebuildValue();
      return;
    }
    if (KeyboardUtil.ifDelete($event)) {
      if (!$event.target.value) {
        this.clearInput(prevInputId, inputIdx - 1);
        this.setSelected(prevInputId);
      } else {
        this.clearInput(currentInputId, inputIdx);
      }
      this.rebuildValue();
      return;
    }
  }
  hasVal(val) {
    return val != null && val != void 0 && (!val?.trim || val.trim() != "");
  }
  onInput($event, inputIdx) {
    let newVal = this.hasVal(this.currentVal) ? `${this.currentVal}${$event.target.value}` : $event.target.value;
    if (this.config.allowNumbersOnly && !this.validateNumber(newVal)) {
      $event.target.value = null;
      $event.stopPropagation();
      $event.preventDefault();
      this.clearInput(null, inputIdx);
      return;
    }
    if (this.ifValidKeyCode(null, $event.target.value)) {
      const nextInputId = this.getBoxId(inputIdx + 1);
      this.setSelected(nextInputId);
      this.rebuildValue();
    } else {
      $event.target.value = null;
      let ctrlName = this.getControlName(inputIdx);
      this.otpForm.controls[ctrlName]?.setValue(null);
      this.rebuildValue();
    }
  }
  onKeyUp($event, inputIdx) {
    if (KeyboardUtil.ifTab($event)) {
      inputIdx -= 1;
    }
    const nextInputId = this.getBoxId(inputIdx + 1);
    const prevInputId = this.getBoxId(inputIdx - 1);
    if (KeyboardUtil.ifRightArrow($event)) {
      $event.preventDefault();
      this.setSelected(nextInputId);
      return;
    }
    if (KeyboardUtil.ifLeftArrow($event)) {
      $event.preventDefault();
      this.setSelected(prevInputId);
      return;
    }
  }
  validateNumber(val) {
    return val && /^[0-9]+$/.test(val);
  }
  getBoxId(idx) {
    return `otp_${idx}_${this.componentKey}`;
  }
  clearInput(eleId, inputIdx) {
    let ctrlName = this.getControlName(inputIdx);
    this.otpForm.controls[ctrlName]?.setValue(null);
    if (eleId) {
      const ele = this.document.getElementById(eleId);
      if (ele && ele instanceof HTMLInputElement) {
        ele.value = null;
      }
    }
  }
  setSelected(eleId) {
    this.focusTo(eleId);
    const ele = this.document.getElementById(eleId);
    if (ele && ele.setSelectionRange) {
      setTimeout(() => {
        ele.setSelectionRange(0, 1);
      }, 0);
    }
  }
  ifValidKeyCode(event, val) {
    const inp = val ?? event.key;
    if (this.config?.allowNumbersOnly) {
      return this.validateNumber(inp);
    }
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    return isMobile || /^[a-zA-Z0-9%*_\-@#$!]$/.test(inp) && inp.length == 1;
  }
  focusTo(eleId) {
    const ele = this.document.getElementById(eleId);
    if (ele) {
      ele.focus();
    }
  }
  // method to set component value
  setValue(value) {
    if (this.config.allowNumbersOnly && isNaN(value)) {
      return;
    }
    this.otpForm?.reset();
    if (!this.hasVal(value)) {
      this.rebuildValue();
      return;
    }
    value = value.toString().replace(/\s/g, "");
    Array.from(value).forEach((c, idx) => {
      if (this.otpForm.get(this.getControlName(idx))) {
        this.otpForm.get(this.getControlName(idx)).setValue(c);
      }
    });
    if (!this.config.disableAutoFocus) {
      setTimeout(() => {
        const containerItem = this.document.getElementById(`c_${this.componentKey}`);
        var indexOfElementToFocus = value.length < this.config.length ? value.length : this.config.length - 1;
        let ele = containerItem.getElementsByClassName("otp-input")[indexOfElementToFocus];
        if (ele && ele.focus) {
          setTimeout(() => {
            ele.focus();
          }, 1);
        }
      }, 0);
    }
    this.rebuildValue();
  }
  rebuildValue() {
    let val = null;
    ObjectUtil.keys(this.otpForm.controls).forEach((k) => {
      let ctrlVal = this.otpForm.controls[k].value;
      if (ctrlVal) {
        let isLengthExceed = ctrlVal.length > 1;
        let isCaseTransformEnabled = !this.config.allowNumbersOnly && this.config.letterCase && (this.config.letterCase.toLocaleLowerCase() == "upper" || this.config.letterCase.toLocaleLowerCase() == "lower");
        ctrlVal = ctrlVal[0];
        let transformedVal = isCaseTransformEnabled ? this.config.letterCase.toLocaleLowerCase() == "upper" ? ctrlVal.toUpperCase() : ctrlVal.toLowerCase() : ctrlVal;
        if (isCaseTransformEnabled && transformedVal == ctrlVal) {
          isCaseTransformEnabled = false;
        } else {
          ctrlVal = transformedVal;
        }
        if (val == null) {
          val = ctrlVal;
        } else {
          val += ctrlVal;
        }
        if (isLengthExceed || isCaseTransformEnabled) {
          this.otpForm.controls[k].setValue(ctrlVal);
        }
      }
    });
    if (this.currentVal != val) {
      this.currentVal = val;
      this.onChange(val);
      if (this.formCtrl?.setValue) {
        this.formCtrl.setValue(val);
      }
      this.onInputChange.next(val);
    }
  }
  handlePaste(e) {
    let clipboardData = e.clipboardData || window["clipboardData"];
    if (clipboardData) {
      var pastedData = clipboardData.getData("Text");
    }
    e.stopPropagation();
    e.preventDefault();
    if (!pastedData || this.config.allowNumbersOnly && !this.validateNumber(pastedData)) {
      return;
    }
    this.setValue(pastedData);
  }
  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
};
_NgOtpInputComponent.\u0275fac = function NgOtpInputComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _NgOtpInputComponent)(\u0275\u0275directiveInject(DOCUMENT), \u0275\u0275directiveInject(Injector));
};
_NgOtpInputComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
  type: _NgOtpInputComponent,
  selectors: [["ng-otp-input"], ["ngx-otp-input"]],
  inputs: {
    config: "config",
    formCtrl: "formCtrl",
    disabled: "disabled"
  },
  outputs: {
    onBlur: "onBlur",
    onInputChange: "onInputChange"
  },
  features: [\u0275\u0275ProvidersFeature([{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => _NgOtpInputComponent),
    multi: true
  }])],
  decls: 1,
  vars: 1,
  consts: [["inp", ""], ["tabindex", "0", 3, "class", "id", "ngStyle", "focusin", "focusout", 4, "ngIf"], ["tabindex", "0", 3, "focusin", "focusout", "id", "ngStyle"], [1, "n-o-c"], [4, "ngFor", "ngForOf"], ["autocomplete", "one-time-code", 3, "paste", "keyup", "input", "keydown", "pattern", "type", "placeholder", "ngStyle", "formControl", "id", "ngClass"], [4, "ngIf"]],
  template: function NgOtpInputComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275template(0, NgOtpInputComponent_div_0_Template, 3, 7, "div", 1);
    }
    if (rf & 2) {
      \u0275\u0275property("ngIf", ctx.otpForm == null ? null : ctx.otpForm.controls);
    }
  },
  dependencies: [ReactiveFormsModule, DefaultValueAccessor, NgControlStatus, PatternValidator, FormControlDirective, NgIf, NgForOf, NgStyle, NgClass],
  styles: [".otp-input[_ngcontent-%COMP%]{width:50px;height:50px;border-radius:4px;border:solid 1px #c5c5c5;text-align:center;font-size:32px}.ng-otp-input-wrapper[_ngcontent-%COMP%]   .otp-input[_ngcontent-%COMP%]{margin:0 .51rem}.ng-otp-input-wrapper[_ngcontent-%COMP%]   .otp-input[_ngcontent-%COMP%]:first-child{margin-left:0}.ng-otp-input-wrapper[_ngcontent-%COMP%]   .otp-input[_ngcontent-%COMP%]:last-child{margin-right:0}.n-o-c[_ngcontent-%COMP%]{display:flex;align-items:center}.error-input[_ngcontent-%COMP%]{border-color:red}@media screen and (max-width: 767px){.otp-input[_ngcontent-%COMP%]{width:40px;font-size:24px;height:40px}}@media screen and (max-width: 420px){.otp-input[_ngcontent-%COMP%]{width:30px;font-size:18px;height:30px}}"]
});
var NgOtpInputComponent = _NgOtpInputComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgOtpInputComponent, [{
    type: Component,
    args: [{
      selector: "ng-otp-input, ngx-otp-input",
      imports: [ReactiveFormsModule, NgIf, NgForOf, NgStyle, NgClass],
      providers: [{
        provide: NG_VALUE_ACCESSOR,
        useExisting: forwardRef(() => NgOtpInputComponent),
        multi: true
      }],
      template: `<div class="ng-otp-input-wrapper wrapper {{config.containerClass}}" id="c_{{componentKey}}" *ngIf="otpForm?.controls"\r
  [ngStyle]="config.containerStyles" tabindex="0" \r
  (focusin)="onFocusIn()" \r
  (focusout)="onFocusOut()">\r
  <div class="n-o-c">\r
    <ng-container *ngFor="let item of controlKeys;let i=index;let last=last">\r
      <input (paste)="handlePaste($event)" [pattern]="config.allowNumbersOnly ? '\\\\d*' : ''" [type]="inputType"  [placeholder]="config?.placeholder || ''"\r
      [ngStyle]="config.inputStyles" \r
      class="otp-input {{config.inputClass}}" autocomplete="one-time-code" \r
      [formControl]="otpForm.controls[item]" #inp [id]="getBoxId(i)" \r
      (keyup)="onKeyUp($event,i)" (input)="onInput($event,i)" (keydown)="onKeyDown($event,i)" [ngClass]="{'error-input': (config?.showError && formControl?.invalid && (formControl?.dirty || formControl?.touched))}">\r
      <span *ngIf="config.separator && !last">\r
        {{config.separator}}\r
      </span>\r
    </ng-container>\r
  </div>  \r
</div>`,
      styles: [".otp-input{width:50px;height:50px;border-radius:4px;border:solid 1px #c5c5c5;text-align:center;font-size:32px}.ng-otp-input-wrapper .otp-input{margin:0 .51rem}.ng-otp-input-wrapper .otp-input:first-child{margin-left:0}.ng-otp-input-wrapper .otp-input:last-child{margin-right:0}.n-o-c{display:flex;align-items:center}.error-input{border-color:red}@media screen and (max-width: 767px){.otp-input{width:40px;font-size:24px;height:40px}}@media screen and (max-width: 420px){.otp-input{width:30px;font-size:18px;height:30px}}\n"]
    }]
  }], () => [{
    type: Document,
    decorators: [{
      type: Inject,
      args: [DOCUMENT]
    }]
  }, {
    type: Injector
  }], {
    config: [{
      type: Input
    }],
    formCtrl: [{
      type: Input
    }],
    disabled: [{
      type: Input
    }],
    onBlur: [{
      type: Output
    }],
    onInputChange: [{
      type: Output
    }]
  });
})();
var _NgOtpInputModule = class _NgOtpInputModule {
};
_NgOtpInputModule.\u0275fac = function NgOtpInputModule_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _NgOtpInputModule)();
};
_NgOtpInputModule.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
  type: _NgOtpInputModule,
  imports: [NgOtpInputComponent],
  exports: [NgOtpInputComponent]
});
_NgOtpInputModule.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
  imports: [NgOtpInputComponent]
});
var NgOtpInputModule = _NgOtpInputModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgOtpInputModule, [{
    type: NgModule,
    args: [{
      imports: [NgOtpInputComponent],
      exports: [NgOtpInputComponent]
    }]
  }], null, null);
})();

// src/app/auth/two-step-verification/two-step-verification.component.ts
var _c02 = ["otpRef"];
var _c1 = () => ({ length: 4, allowNumbersOnly: true });
var TwoStepVerificationComponent = class _TwoStepVerificationComponent {
  router;
  routes = routes;
  value;
  otpInput;
  handleOtpChange(value) {
    console.log("OTP Changed:", value);
  }
  resetOtp() {
    this.otpInput?.setValue("");
  }
  constructor(router) {
    this.router = router;
  }
  redirectPage() {
    this.router.navigate([routes.resetPassword]);
  }
  static \u0275fac = function TwoStepVerificationComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _TwoStepVerificationComponent)(\u0275\u0275directiveInject(Router));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _TwoStepVerificationComponent, selectors: [["app-two-step-verification"]], viewQuery: function TwoStepVerificationComponent_Query(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275viewQuery(_c02, 5);
    }
    if (rf & 2) {
      let _t;
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.otpInput = _t.first);
    }
  }, decls: 34, vars: 2, consts: [["otpRef", ""], [1, "main-wrapper", "auth-bg"], [1, "container-fuild"], [1, "w-100", "overflow-hidden", "position-relative", "flex-wrap", "d-block", "vh-100"], [1, "row", "justify-content-center", "align-items-center", "vh-100", "overflow-auto", "flex-wrap"], [1, "col-lg-4", "mx-auto"], [1, "digit-group", "d-flex", "justify-content-center", "align-items-center", 3, "ngSubmit"], [1, "d-flex", "flex-column", "justify-content-lg-center", "p-4", "p-lg-0", "pb-0", "flex-fill"], [1, "mx-auto", "mb-5", "text-center"], ["src", "assets/img/logo.svg", "alt", "Logo", 1, "img-fluid"], [1, "card", "border-0", "p-lg-3", "shadow-lg", "rounded-2"], [1, "card-body"], [1, "mb-3", "text-center"], [1, "isax", "isax-tick-circle5", "text-success", "fs-48"], [1, "text-center", "mb-3"], [1, "mb-2"], [1, "mb-0"], [1, "text-center", "otp-input"], [1, "d-flex", "align-items-center", "justify-content-center", "mb-3", "custom-otp"], [3, "onInputChange", "config"], [1, "d-flex", "justify-content-center"], [1, "mb-3", "d-flex", "align-items-center"], [1, "text-gray-9", "me-4", "mb-0"], ["href", "javascript:void(0);", 1, "text-primary", 3, "click"], [1, "text-danger"], ["type", "submit", 1, "btn", "bg-primary-gradient", "text-white", "w-100"]], template: function TwoStepVerificationComponent_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = \u0275\u0275getCurrentView();
      \u0275\u0275elementStart(0, "div", 1)(1, "div", 2)(2, "div", 3)(3, "div", 4)(4, "div", 5)(5, "form", 6);
      \u0275\u0275listener("ngSubmit", function TwoStepVerificationComponent_Template_form_ngSubmit_5_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.redirectPage());
      });
      \u0275\u0275elementStart(6, "div", 7)(7, "div", 8);
      \u0275\u0275element(8, "img", 9);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(9, "div", 10)(10, "div", 11)(11, "div", 12)(12, "span");
      \u0275\u0275element(13, "i", 13);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(14, "div", 14)(15, "h5", 15);
      \u0275\u0275text(16, "Reset Password");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(17, "p", 16);
      \u0275\u0275text(18, "We sent a code to info@example.com");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(19, "div", 17)(20, "div", 18)(21, "ng-otp-input", 19, 0);
      \u0275\u0275listener("onInputChange", function TwoStepVerificationComponent_Template_ng_otp_input_onInputChange_21_listener($event) {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.handleOtpChange($event));
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(23, "div", 20)(24, "div", 21)(25, "p", 22);
      \u0275\u0275text(26, "Didn't receive code. ");
      \u0275\u0275elementStart(27, "a", 23);
      \u0275\u0275listener("click", function TwoStepVerificationComponent_Template_a_click_27_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.resetOtp());
      });
      \u0275\u0275text(28, "Resend Code");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(29, "span", 24);
      \u0275\u0275text(30, "00:45");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(31, "div")(32, "button", 25);
      \u0275\u0275text(33, "Reset Password");
      \u0275\u0275elementEnd()()()()()()()()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(21);
      \u0275\u0275property("config", \u0275\u0275pureFunction0(1, _c1));
    }
  }, dependencies: [CommonModule, FormsModule, \u0275NgNoValidate, NgControlStatusGroup, NgForm, NgOtpInputModule, NgOtpInputComponent], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TwoStepVerificationComponent, [{
    type: Component,
    args: [{ selector: "app-two-step-verification", imports: [CommonModule, FormsModule, NgOtpInputModule], template: `<div class="main-wrapper auth-bg">

    <!-- ========================
        Start Page Content
    ========================= -->

    <div class="container-fuild">
        <div class="w-100 overflow-hidden position-relative flex-wrap d-block vh-100">
            <!-- row start -->
            <div class="row justify-content-center align-items-center vh-100 overflow-auto flex-wrap ">
                <div class="col-lg-4 mx-auto">
                    <form (ngSubmit)="redirectPage()" class="digit-group d-flex justify-content-center align-items-center">
                        <div class="d-flex flex-column justify-content-lg-center p-4 p-lg-0 pb-0 flex-fill">
                            <div class=" mx-auto mb-5 text-center">
                                <img src="assets/img/logo.svg"
                                    class="img-fluid" alt="Logo">
                            </div>
                            <!-- card start -->
                            <div class="card border-0 p-lg-3 shadow-lg rounded-2">
                                <!-- card body start -->
                                <div class="card-body">
                                    <div class="mb-3 text-center">
                                        <span><i class="isax isax-tick-circle5 text-success fs-48"></i></span>
                                    </div>
                                    <div class="text-center mb-3">
                                        <h5 class="mb-2">Reset Password</h5>
                                        <p class="mb-0">We sent a code to info&#64;example.com</p>
                                    </div>
                                    <div class="text-center otp-input">
                                        <div class="d-flex align-items-center justify-content-center mb-3 custom-otp">
                                            <ng-otp-input  #otpRef [config]="{ length: 4, allowNumbersOnly: true }" (onInputChange)="handleOtpChange($event)"></ng-otp-input>
                                        </div>
                                        <div class="d-flex justify-content-center">
                                            <div class="mb-3 d-flex align-items-center ">
                                                <p class="text-gray-9 me-4 mb-0">Didn't receive code. <a href="javascript:void(0);" (click)="resetOtp()" class="text-primary">Resend Code</a></p>
                                                <span class="text-danger">00:45</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <button type="submit" class="btn bg-primary-gradient text-white w-100">Reset Password</button>
                                    </div>
                                </div>
                                <!-- card body end -->
                            </div>
                            <!-- card end -->
                        </div>
                    </form>
                </div>

            </div>
            <!-- row end -->
        </div>
    </div>

    <!-- ========================
        End Page Content
    ========================= -->

</div>` }]
  }], () => [{ type: Router }], { otpInput: [{
    type: ViewChild,
    args: ["otpRef", { static: false }]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(TwoStepVerificationComponent, { className: "TwoStepVerificationComponent", filePath: "src/app/auth/two-step-verification/two-step-verification.component.ts", lineNumber: 14 });
})();
export {
  TwoStepVerificationComponent
};
//# sourceMappingURL=chunk-6DT4YDDP.js.map

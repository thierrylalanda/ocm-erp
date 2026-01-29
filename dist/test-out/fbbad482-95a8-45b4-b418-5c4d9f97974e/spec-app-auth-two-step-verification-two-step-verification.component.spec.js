import {
  DefaultValueAccessor,
  FormControl,
  FormControlDirective,
  FormGroup,
  FormsModule,
  NG_VALUE_ACCESSOR,
  NgControl,
  NgControlStatus,
  PatternValidator,
  ReactiveFormsModule,
  init_forms
} from "./chunk-2RBILSOV.js";
import {
  init_core_index,
  routes
} from "./chunk-SDAHDEJE.js";
import "./chunk-2O5UQ647.js";
import "./chunk-EOPPSJQQ.js";
import "./chunk-FUOYOFVQ.js";
import "./chunk-5B5ZAECM.js";
import {
  Router,
  init_router
} from "./chunk-EDGRTZKC.js";
import "./chunk-BIGDKMS7.js";
import "./chunk-RSLHKDCR.js";
import "./chunk-H7VTUQ3B.js";
import {
  CommonModule,
  NgClass,
  NgForOf,
  NgIf,
  NgStyle,
  init_common
} from "./chunk-HQHIWYWO.js";
import "./chunk-PV6FWBJN.js";
import {
  TestBed,
  init_testing
} from "./chunk-SXCZ3RJK.js";
import {
  Component,
  DOCUMENT,
  FactoryTarget,
  Inject,
  Injector,
  Input,
  NgModule,
  Output,
  Subject,
  ViewChild,
  __decorate,
  core_exports,
  forwardRef,
  init_core,
  init_esm,
  init_operators,
  init_tslib_es6,
  takeUntil,
  ɵɵngDeclareClassMetadata,
  ɵɵngDeclareComponent,
  ɵɵngDeclareFactory,
  ɵɵngDeclareInjector,
  ɵɵngDeclareNgModule
} from "./chunk-W6MIRXHE.js";
import {
  __async,
  __commonJS,
  __esm
} from "./chunk-FWMZPJRE.js";

// angular:jit:template:src/app/auth/two-step-verification/two-step-verification.component.html
var two_step_verification_component_default;
var init_two_step_verification_component = __esm({
  "angular:jit:template:src/app/auth/two-step-verification/two-step-verification.component.html"() {
    two_step_verification_component_default = `<div class="main-wrapper auth-bg">

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

</div>`;
  }
});

// angular:jit:style:src/app/auth/two-step-verification/two-step-verification.component.scss
var two_step_verification_component_default2;
var init_two_step_verification_component2 = __esm({
  "angular:jit:style:src/app/auth/two-step-verification/two-step-verification.component.scss"() {
    two_step_verification_component_default2 = "/* src/app/auth/two-step-verification/two-step-verification.component.scss */\n/*# sourceMappingURL=two-step-verification.component.css.map */\n";
  }
});

// node_modules/ng-otp-input/fesm2022/ng-otp-input.mjs
var KeyboardUtil, ObjectUtil, _NgOtpInputComponent, NgOtpInputComponent, _NgOtpInputModule, NgOtpInputModule;
var init_ng_otp_input = __esm({
  "node_modules/ng-otp-input/fesm2022/ng-otp-input.mjs"() {
    "use strict";
    init_core();
    init_core();
    init_forms();
    init_forms();
    init_common();
    init_esm();
    init_operators();
    KeyboardUtil = class {
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
    ObjectUtil = class {
      static keys(obj) {
        if (!obj)
          return [];
        return Object.keys(obj);
      }
    };
    _NgOtpInputComponent = class _NgOtpInputComponent {
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
        this.config = { length: 4 };
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
            this.otpForm.disable({ emitEvent: false });
          } else {
            this.otpForm.enable({ emitEvent: false });
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
            const submitEvent = new Event("submit", { bubbles: true, cancelable: true });
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
    _NgOtpInputComponent.\u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "19.2.14", ngImport: core_exports, type: _NgOtpInputComponent, deps: [{ token: DOCUMENT }, { token: Injector }], target: FactoryTarget.Component });
    _NgOtpInputComponent.\u0275cmp = \u0275\u0275ngDeclareComponent({ minVersion: "14.0.0", version: "19.2.14", type: _NgOtpInputComponent, isStandalone: true, selector: "ng-otp-input, ngx-otp-input", inputs: { config: "config", formCtrl: "formCtrl", disabled: "disabled" }, outputs: { onBlur: "onBlur", onInputChange: "onInputChange" }, providers: [
      {
        provide: NG_VALUE_ACCESSOR,
        useExisting: forwardRef(() => _NgOtpInputComponent),
        multi: true
      }
    ], ngImport: core_exports, template: `<div class="ng-otp-input-wrapper wrapper {{config.containerClass}}" id="c_{{componentKey}}" *ngIf="otpForm?.controls"\r
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
</div>`, styles: [".otp-input{width:50px;height:50px;border-radius:4px;border:solid 1px #c5c5c5;text-align:center;font-size:32px}.ng-otp-input-wrapper .otp-input{margin:0 .51rem}.ng-otp-input-wrapper .otp-input:first-child{margin-left:0}.ng-otp-input-wrapper .otp-input:last-child{margin-right:0}.n-o-c{display:flex;align-items:center}.error-input{border-color:red}@media screen and (max-width: 767px){.otp-input{width:40px;font-size:24px;height:40px}}@media screen and (max-width: 420px){.otp-input{width:30px;font-size:18px;height:30px}}\n"], dependencies: [{ kind: "ngmodule", type: ReactiveFormsModule }, { kind: "directive", type: DefaultValueAccessor, selector: "input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]" }, { kind: "directive", type: NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "directive", type: PatternValidator, selector: "[pattern][formControlName],[pattern][formControl],[pattern][ngModel]", inputs: ["pattern"] }, { kind: "directive", type: FormControlDirective, selector: "[formControl]", inputs: ["formControl", "disabled", "ngModel"], outputs: ["ngModelChange"], exportAs: ["ngForm"] }, { kind: "directive", type: NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "directive", type: NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { kind: "directive", type: NgStyle, selector: "[ngStyle]", inputs: ["ngStyle"] }, { kind: "directive", type: NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }] });
    NgOtpInputComponent = _NgOtpInputComponent;
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "19.2.14", ngImport: core_exports, type: NgOtpInputComponent, decorators: [{
      type: Component,
      args: [{ selector: "ng-otp-input, ngx-otp-input", imports: [ReactiveFormsModule, NgIf, NgForOf, NgStyle, NgClass], providers: [
        {
          provide: NG_VALUE_ACCESSOR,
          useExisting: forwardRef(() => NgOtpInputComponent),
          multi: true
        }
      ], template: `<div class="ng-otp-input-wrapper wrapper {{config.containerClass}}" id="c_{{componentKey}}" *ngIf="otpForm?.controls"\r
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
</div>`, styles: [".otp-input{width:50px;height:50px;border-radius:4px;border:solid 1px #c5c5c5;text-align:center;font-size:32px}.ng-otp-input-wrapper .otp-input{margin:0 .51rem}.ng-otp-input-wrapper .otp-input:first-child{margin-left:0}.ng-otp-input-wrapper .otp-input:last-child{margin-right:0}.n-o-c{display:flex;align-items:center}.error-input{border-color:red}@media screen and (max-width: 767px){.otp-input{width:40px;font-size:24px;height:40px}}@media screen and (max-width: 420px){.otp-input{width:30px;font-size:18px;height:30px}}\n"] }]
    }], ctorParameters: () => [{ type: Document, decorators: [{
      type: Inject,
      args: [DOCUMENT]
    }] }, { type: Injector }], propDecorators: { config: [{
      type: Input
    }], formCtrl: [{
      type: Input
    }], disabled: [{
      type: Input
    }], onBlur: [{
      type: Output
    }], onInputChange: [{
      type: Output
    }] } });
    _NgOtpInputModule = class _NgOtpInputModule {
    };
    _NgOtpInputModule.\u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "19.2.14", ngImport: core_exports, type: _NgOtpInputModule, deps: [], target: FactoryTarget.NgModule });
    _NgOtpInputModule.\u0275mod = \u0275\u0275ngDeclareNgModule({ minVersion: "14.0.0", version: "19.2.14", ngImport: core_exports, type: _NgOtpInputModule, imports: [NgOtpInputComponent], exports: [NgOtpInputComponent] });
    _NgOtpInputModule.\u0275inj = \u0275\u0275ngDeclareInjector({ minVersion: "12.0.0", version: "19.2.14", ngImport: core_exports, type: _NgOtpInputModule, imports: [NgOtpInputComponent] });
    NgOtpInputModule = _NgOtpInputModule;
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "19.2.14", ngImport: core_exports, type: NgOtpInputModule, decorators: [{
      type: NgModule,
      args: [{
        imports: [
          NgOtpInputComponent
        ],
        exports: [NgOtpInputComponent]
      }]
    }] });
  }
});

// src/app/auth/two-step-verification/two-step-verification.component.ts
var TwoStepVerificationComponent;
var init_two_step_verification_component3 = __esm({
  "src/app/auth/two-step-verification/two-step-verification.component.ts"() {
    "use strict";
    init_tslib_es6();
    init_two_step_verification_component();
    init_two_step_verification_component2();
    init_core();
    init_router();
    init_ng_otp_input();
    init_core_index();
    init_common();
    init_forms();
    TwoStepVerificationComponent = class TwoStepVerificationComponent2 {
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
      static ctorParameters = () => [
        { type: Router }
      ];
      static propDecorators = {
        otpInput: [{ type: ViewChild, args: ["otpRef", { static: false }] }]
      };
    };
    TwoStepVerificationComponent = __decorate([
      Component({
        selector: "app-two-step-verification",
        template: two_step_verification_component_default,
        imports: [CommonModule, FormsModule, NgOtpInputModule],
        styles: [two_step_verification_component_default2]
      })
    ], TwoStepVerificationComponent);
  }
});

// src/app/auth/two-step-verification/two-step-verification.component.spec.ts
var require_two_step_verification_component_spec = __commonJS({
  "src/app/auth/two-step-verification/two-step-verification.component.spec.ts"(exports) {
    init_testing();
    init_two_step_verification_component3();
    describe("TwoStepVerificationComponent", () => {
      let component;
      let fixture;
      beforeEach(() => __async(null, null, function* () {
        yield TestBed.configureTestingModule({
          declarations: [TwoStepVerificationComponent]
        }).compileComponents();
        fixture = TestBed.createComponent(TwoStepVerificationComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
      }));
      it("should create", () => {
        expect(component).toBeTruthy();
      });
    });
  }
});
export default require_two_step_verification_component_spec();
//# sourceMappingURL=spec-app-auth-two-step-verification-two-step-verification.component.spec.js.map

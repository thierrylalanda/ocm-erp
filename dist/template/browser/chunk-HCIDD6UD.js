import {
  NgxMaskDirective,
  NgxMaskModule
} from "./chunk-NHK6RMYZ.js";
import {
  DefaultValueAccessor,
  FormControlName,
  FormGroupDirective,
  FormsModule,
  NgControlStatus,
  NgControlStatusGroup,
  ReactiveFormsModule,
  UntypedFormBuilder,
  ɵNgNoValidate
} from "./chunk-NAWYXTZ5.js";
import {
  CommonModule
} from "./chunk-LNSVVXVJ.js";
import {
  Component,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵproperty,
  ɵɵtext
} from "./chunk-HKG6HBOI.js";
import "./chunk-TXDUYLVM.js";

// src/app/features/ui-interface/forms/form-mask/form-mask.component.ts
var FormMaskComponent = class _FormMaskComponent {
  formBuilder;
  basicForm;
  customPatterns = {
    V: { pattern: new RegExp("-?") },
    "0": { pattern: new RegExp("[0-9]") }
  };
  constructor(formBuilder) {
    this.formBuilder = formBuilder;
  }
  ngOnInit() {
    this.basicForm = this.formBuilder.group({
      txt: [""]
    });
  }
  static \u0275fac = function FormMaskComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _FormMaskComponent)(\u0275\u0275directiveInject(UntypedFormBuilder));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _FormMaskComponent, selectors: [["app-form-mask"]], decls: 78, vars: 3, consts: [[1, "d-flex", "align-items-sm-center", "flex-sm-row", "flex-column", "gap-2", "pb-3"], [1, "flex-grow-1"], [1, "fs-18", "fw-semibold", "mb-0"], [1, "text-end"], [1, "breadcrumb", "m-0", "py-0"], [1, "breadcrumb-item"], ["href", "javascript: void(0);"], [1, "breadcrumb-item", "active"], [1, "row"], [1, "col-sm-12"], [1, "card"], [1, "card-header"], [1, "card-title", "mb-2"], [1, "card-text"], [1, "card-body"], [3, "formGroup"], [1, "input-block", "mb-3"], ["htmlFor", "label"], ["id", "label", "type", "text", "id", "phone", "mask", "(000) 000-0000", "formControlName", "txt", 1, "form-control"], [1, "form-text", "text-muted"], ["id", "label", "type", "text", "id", "date", "mask", "00/00/0000", 1, "form-control"], ["id", "label", "type", "text", "id", "ssn", "mask", "000-00-0000", 1, "form-control"], ["id", "label", "type", "text", "id", "phoneExt", "prefix", "+96", "mask", "000 000 000", 1, "form-control"], ["id", "label", "type", "text", "id", "product", "prefix", "a*", "mask", "-000-A000", 1, "form-control"], ["id", "label", "type", "text", "id", "currency", "prefix", "$", "mask", "099,099,099.99", 1, "form-control"], ["id", "label", "type", "text", "id", "eyescript", "mask", "V0.00V0.00 000", 1, "form-control", 3, "patterns", "dropSpecialCharacters"], ["id", "label", "type", "text", "id", "pct", "suffix", "%", "mask", "00", 1, "form-control"], [1, "input-block", "mb-3", "mb-0"], ["id", "label", "type", "text", "id", "ccn", "mask", "099.099.099.0999", 1, "form-control"]], template: function FormMaskComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "h4", 2);
      \u0275\u0275text(3, "Input Mask");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(4, "div", 3)(5, "ol", 4)(6, "li", 5)(7, "a", 6);
      \u0275\u0275text(8, "Home");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(9, "li", 5)(10, "a", 6);
      \u0275\u0275text(11, "Forms");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(12, "li", 7);
      \u0275\u0275text(13, "Input Mask");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(14, "div", 8)(15, "div", 9)(16, "div", 10)(17, "div", 11)(18, "h5", 12);
      \u0275\u0275text(19, "Form Mask");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(20, "p", 13);
      \u0275\u0275text(21, " Input masks can be used to force the user to enter data conform a specific format. Unlike validation, the user can't enter any other key than the ones specified by the mask. ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(22, "div", 14)(23, "form", 15)(24, "div", 16)(25, "label", 17);
      \u0275\u0275text(26, "Phone");
      \u0275\u0275elementEnd();
      \u0275\u0275element(27, "input", 18);
      \u0275\u0275elementStart(28, "span", 19);
      \u0275\u0275text(29, "(999) 999-9999");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(30, "div", 16)(31, "label", 17);
      \u0275\u0275text(32, "Date");
      \u0275\u0275elementEnd();
      \u0275\u0275element(33, "input", 20);
      \u0275\u0275elementStart(34, "span", 19);
      \u0275\u0275text(35, "dd/mm/yyyy");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(36, "div", 16)(37, "label", 17);
      \u0275\u0275text(38, "SSN field 1");
      \u0275\u0275elementEnd();
      \u0275\u0275element(39, "input", 21);
      \u0275\u0275elementStart(40, "span", 19);
      \u0275\u0275text(41, 'e.g "999-99-9999"');
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(42, "div", 16)(43, "label", 17);
      \u0275\u0275text(44, "Phone field + ext.");
      \u0275\u0275elementEnd();
      \u0275\u0275element(45, "input", 22);
      \u0275\u0275elementStart(46, "span", 19);
      \u0275\u0275text(47, "+40 999 999 999");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(48, "div", 16)(49, "label", 17);
      \u0275\u0275text(50, "Product Key");
      \u0275\u0275elementEnd();
      \u0275\u0275element(51, "input", 23);
      \u0275\u0275elementStart(52, "span", 19);
      \u0275\u0275text(53, "e.g a*-999-a999");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(54, "div", 16)(55, "label", 17);
      \u0275\u0275text(56, "Currency");
      \u0275\u0275elementEnd();
      \u0275\u0275element(57, "input", 24);
      \u0275\u0275elementStart(58, "span", 19);
      \u0275\u0275text(59, "$ 999,999,999.99");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(60, "div", 16)(61, "label", 17);
      \u0275\u0275text(62, "Eye Script");
      \u0275\u0275elementEnd();
      \u0275\u0275element(63, "input", 25);
      \u0275\u0275elementStart(64, "span", 19);
      \u0275\u0275text(65, "~9.99 ~9.99 999");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(66, "div", 16)(67, "label", 17);
      \u0275\u0275text(68, "Percent");
      \u0275\u0275elementEnd();
      \u0275\u0275element(69, "input", 26);
      \u0275\u0275elementStart(70, "span", 19);
      \u0275\u0275text(71, 'e.g "99%"');
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(72, "div", 27)(73, "label", 17);
      \u0275\u0275text(74, "Credit Card Number");
      \u0275\u0275elementEnd();
      \u0275\u0275element(75, "input", 28);
      \u0275\u0275elementStart(76, "span", 19);
      \u0275\u0275text(77, 'e.g "999.999.999.9999"');
      \u0275\u0275elementEnd()()()()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(23);
      \u0275\u0275property("formGroup", ctx.basicForm);
      \u0275\u0275advance(40);
      \u0275\u0275property("patterns", ctx.customPatterns)("dropSpecialCharacters", false);
    }
  }, dependencies: [CommonModule, NgxMaskModule, NgxMaskDirective, FormsModule, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, ReactiveFormsModule, FormGroupDirective, FormControlName], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FormMaskComponent, [{
    type: Component,
    args: [{ selector: "app-form-mask", imports: [CommonModule, NgxMaskModule, FormsModule, ReactiveFormsModule], template: `              <!-- Page Header -->
              <div class="d-flex align-items-sm-center flex-sm-row flex-column gap-2 pb-3">
                <div class="flex-grow-1">
                    <h4 class="fs-18 fw-semibold mb-0">Input Mask</h4>
                </div>
                <div class="text-end">
                    <ol class="breadcrumb m-0 py-0">
                        <li class="breadcrumb-item"><a href="javascript: void(0);">Home</a></li>
                        <li class="breadcrumb-item"><a href="javascript: void(0);">Forms</a></li>
                        <li class="breadcrumb-item active">Input Mask</li>
                    </ol>
                </div>
            </div>
            <!-- End Page Header -->

<div class="row">
  <div class="col-sm-12">
    <div class="card">
      <div class="card-header">
        <h5 class="card-title mb-2">Form Mask</h5>
        <p class="card-text">
          Input masks can be used to force the user to enter data conform a
          specific format. Unlike validation, the user can't enter any other key
          than the ones specified by the mask.
        </p>
      </div>
      <div class="card-body">
        <form  [formGroup]="basicForm">
          <div class="input-block mb-3">
            <label htmlFor="label">Phone</label>
            <input id="label"
              type="text"
              id="phone"
              class="form-control"
              mask="(000) 000-0000"
              formControlName="txt"
            />
            <span class="form-text text-muted">(999) 999-9999</span>
          </div>
          <div class="input-block mb-3">
            <label htmlFor="label">Date</label>
             <input id="label"
              type="text"
              id="date"
              class="form-control"
              mask="00/00/0000"
            />
            <span class="form-text text-muted">dd/mm/yyyy</span>
          </div>
          <div class="input-block mb-3">
            <label htmlFor="label">SSN field 1</label>
            <input id="label"
              type="text"
              id="ssn"
              class="form-control"
              mask="000-00-0000"
            />
            <span class="form-text text-muted">e.g "999-99-9999"</span>
          </div>
          <div class="input-block mb-3">
            <label htmlFor="label">Phone field + ext.</label>
            <input id="label"
              type="text"
              id="phoneExt"
              class="form-control"
              prefix="+96"
              mask="000 000 000"
            />
            <span class="form-text text-muted">+40 999 999 999</span>
          </div>
          <div class="input-block mb-3">
            <label htmlFor="label">Product Key</label>
            <input id="label"
              type="text"
              id="product"
              class="form-control"
              prefix="a*"
              mask="-000-A000"
            />
            <span class="form-text text-muted">e.g a*-999-a999</span>
          </div>
          <div class="input-block mb-3">
            <label htmlFor="label">Currency</label>
            <input id="label"
              type="text"
              id="currency"
              class="form-control"
              prefix="$"
              mask="099,099,099.99"
            />
            <span class="form-text text-muted">$ 999,999,999.99</span>
          </div>
          <div class="input-block mb-3">
            <label htmlFor="label">Eye Script</label>
            <input id="label"
              type="text"
              id="eyescript"
              class="form-control"
              mask="V0.00V0.00 000"
              [patterns]="customPatterns"
              [dropSpecialCharacters]="false"
            />
            <span class="form-text text-muted">~9.99 ~9.99 999</span>
          </div>
          <div class="input-block mb-3">
            <label htmlFor="label">Percent</label>
            <input id="label"
              type="text"
              id="pct"
              class="form-control"
              suffix="%"
              mask="00"
            />
            <span class="form-text text-muted">e.g "99%"</span>
          </div>
          <div class="input-block mb-3 mb-0">
            <label htmlFor="label">Credit Card Number</label>
            <input id="label"
              type="text"
              class="form-control"
              id="ccn"
              mask="099.099.099.0999"
            />
            <span class="form-text text-muted">e.g "999.999.999.9999"</span>
          </div>
        </form>
      </div>
    </div>
  </div>
</div>
` }]
  }], () => [{ type: UntypedFormBuilder }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(FormMaskComponent, { className: "FormMaskComponent", filePath: "src/app/features/ui-interface/forms/form-mask/form-mask.component.ts", lineNumber: 12 });
})();
export {
  FormMaskComponent
};
//# sourceMappingURL=chunk-HCIDD6UD.js.map

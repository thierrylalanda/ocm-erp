import {
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgControlStatusGroup,
  NgForm,
  NgModel,
  ReactiveFormsModule,
  ɵNgNoValidate
} from "./chunk-BLAAMQ2R.js";
import {
  CommonModule
} from "./chunk-ZV6UYXXV.js";
import {
  Component,
  DOCUMENT,
  Directive,
  EventEmitter,
  Injectable,
  InjectionToken,
  Input,
  NgModule,
  NgZone,
  Output,
  inject,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵdefineDirective,
  ɵɵdefineInjectable,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵlistener,
  ɵɵproperty,
  ɵɵtext,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-U4CEU3KS.js";
import "./chunk-TXDUYLVM.js";

// node_modules/@angular/cdk/fesm2022/clipboard.mjs
var PendingCopy = class {
  _document;
  _textarea;
  constructor(text, _document) {
    this._document = _document;
    const textarea = this._textarea = this._document.createElement("textarea");
    const styles = textarea.style;
    styles.position = "fixed";
    styles.top = styles.opacity = "0";
    styles.left = "-999em";
    textarea.setAttribute("aria-hidden", "true");
    textarea.value = text;
    textarea.readOnly = true;
    (this._document.fullscreenElement || this._document.body).appendChild(textarea);
  }
  /** Finishes copying the text. */
  copy() {
    const textarea = this._textarea;
    let successful = false;
    try {
      if (textarea) {
        const currentFocus = this._document.activeElement;
        textarea.select();
        textarea.setSelectionRange(0, textarea.value.length);
        successful = this._document.execCommand("copy");
        if (currentFocus) {
          currentFocus.focus();
        }
      }
    } catch {
    }
    return successful;
  }
  /** Cleans up DOM changes used to perform the copy operation. */
  destroy() {
    const textarea = this._textarea;
    if (textarea) {
      textarea.remove();
      this._textarea = void 0;
    }
  }
};
var Clipboard = class _Clipboard {
  _document = inject(DOCUMENT);
  constructor() {
  }
  /**
   * Copies the provided text into the user's clipboard.
   *
   * @param text The string to copy.
   * @returns Whether the operation was successful.
   */
  copy(text) {
    const pendingCopy = this.beginCopy(text);
    const successful = pendingCopy.copy();
    pendingCopy.destroy();
    return successful;
  }
  /**
   * Prepares a string to be copied later. This is useful for large strings
   * which take too long to successfully render and be copied in the same tick.
   *
   * The caller must call `destroy` on the returned `PendingCopy`.
   *
   * @param text The string to copy.
   * @returns the pending copy operation.
   */
  beginCopy(text) {
    return new PendingCopy(text, this._document);
  }
  static \u0275fac = function Clipboard_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _Clipboard)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _Clipboard,
    factory: _Clipboard.\u0275fac,
    providedIn: "root"
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Clipboard, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [], null);
})();
var CDK_COPY_TO_CLIPBOARD_CONFIG = new InjectionToken("CDK_COPY_TO_CLIPBOARD_CONFIG");
var CdkCopyToClipboard = class _CdkCopyToClipboard {
  _clipboard = inject(Clipboard);
  _ngZone = inject(NgZone);
  /** Content to be copied. */
  text = "";
  /**
   * How many times to attempt to copy the text. This may be necessary for longer text, because
   * the browser needs time to fill an intermediate textarea element and copy the content.
   */
  attempts = 1;
  /**
   * Emits when some text is copied to the clipboard. The
   * emitted value indicates whether copying was successful.
   */
  copied = new EventEmitter();
  /** Copies that are currently being attempted. */
  _pending = /* @__PURE__ */ new Set();
  /** Whether the directive has been destroyed. */
  _destroyed;
  /** Timeout for the current copy attempt. */
  _currentTimeout;
  constructor() {
    const config = inject(CDK_COPY_TO_CLIPBOARD_CONFIG, {
      optional: true
    });
    if (config && config.attempts != null) {
      this.attempts = config.attempts;
    }
  }
  /** Copies the current text to the clipboard. */
  copy(attempts = this.attempts) {
    if (attempts > 1) {
      let remainingAttempts = attempts;
      const pending = this._clipboard.beginCopy(this.text);
      this._pending.add(pending);
      const attempt = () => {
        const successful = pending.copy();
        if (!successful && --remainingAttempts && !this._destroyed) {
          this._currentTimeout = this._ngZone.runOutsideAngular(() => setTimeout(attempt, 1));
        } else {
          this._currentTimeout = null;
          this._pending.delete(pending);
          pending.destroy();
          this.copied.emit(successful);
        }
      };
      attempt();
    } else {
      this.copied.emit(this._clipboard.copy(this.text));
    }
  }
  ngOnDestroy() {
    if (this._currentTimeout) {
      clearTimeout(this._currentTimeout);
    }
    this._pending.forEach((copy) => copy.destroy());
    this._pending.clear();
    this._destroyed = true;
  }
  static \u0275fac = function CdkCopyToClipboard_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CdkCopyToClipboard)();
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _CdkCopyToClipboard,
    selectors: [["", "cdkCopyToClipboard", ""]],
    hostBindings: function CdkCopyToClipboard_HostBindings(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275listener("click", function CdkCopyToClipboard_click_HostBindingHandler() {
          return ctx.copy();
        });
      }
    },
    inputs: {
      text: [0, "cdkCopyToClipboard", "text"],
      attempts: [0, "cdkCopyToClipboardAttempts", "attempts"]
    },
    outputs: {
      copied: "cdkCopyToClipboardCopied"
    }
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CdkCopyToClipboard, [{
    type: Directive,
    args: [{
      selector: "[cdkCopyToClipboard]",
      host: {
        "(click)": "copy()"
      }
    }]
  }], () => [], {
    text: [{
      type: Input,
      args: ["cdkCopyToClipboard"]
    }],
    attempts: [{
      type: Input,
      args: ["cdkCopyToClipboardAttempts"]
    }],
    copied: [{
      type: Output,
      args: ["cdkCopyToClipboardCopied"]
    }]
  });
})();
var ClipboardModule = class _ClipboardModule {
  static \u0275fac = function ClipboardModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ClipboardModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
    type: _ClipboardModule,
    imports: [CdkCopyToClipboard],
    exports: [CdkCopyToClipboard]
  });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({});
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ClipboardModule, [{
    type: NgModule,
    args: [{
      imports: [CdkCopyToClipboard],
      exports: [CdkCopyToClipboard]
    }]
  }], null, null);
})();

// src/app/features/ui-interface/advanced-ui/clipboards/clipboards.component.ts
var ClipboardsComponent = class _ClipboardsComponent {
  copyFromInput = "http://www.admin-dashboard.com";
  static \u0275fac = function ClipboardsComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ClipboardsComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ClipboardsComponent, selectors: [["app-clipboards"]], decls: 76, vars: 4, consts: [[1, "d-flex", "align-items-sm-center", "flex-sm-row", "flex-column", "gap-2", "pb-3"], [1, "flex-grow-1"], [1, "fs-18", "fw-semibold", "mb-0"], [1, "text-end"], [1, "breadcrumb", "m-0", "py-0"], [1, "breadcrumb-item"], ["href", "javascript: void(0);"], [1, "breadcrumb-item", "active"], [1, "row"], [1, "col-md-12"], [1, "card"], [1, "card-header"], [1, "card-title"], [1, "card-body"], [1, "clipboard"], ["type", "text", 1, "form-control", "mb-4", 3, "ngModelChange", "value", "ngModel"], [1, "mb-1", "btn", "clip-btn", "btn-primary", "me-1", 3, "cdkCopyToClipboard"], [1, "far", "fa-copy"], ["href", "javascript:void(0);", 1, "mb-1", "btn", "clip-btn", "btn-dark", 3, "click", "cdkCopyToClipboard"], [1, "fas", "fa-cut"], [1, "form-horizontal"], ["rows", "3", 1, "form-control", "mb-4"], [1, "mb-1", "me-1", "btn", "clip-btn", "btn-primary"], [1, "mb-1", "btn", "clip-btn", "btn-dark"], [1, "clipboard", "copy-txt"], [1, "otp-pass"], [1, "mb-4"], [1, "mb-1", "btn", "clip-btn", "btn-primary"], [1, "mb-1", "btn", "clip-btn", "btn-warning"]], template: function ClipboardsComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "h4", 2);
      \u0275\u0275text(3, "Clipboard");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(4, "div", 3)(5, "ol", 4)(6, "li", 5)(7, "a", 6);
      \u0275\u0275text(8, "Home");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(9, "li", 5)(10, "a", 6);
      \u0275\u0275text(11, "Advanced UI");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(12, "li", 7);
      \u0275\u0275text(13, "Clipboard");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(14, "div", 8)(15, "div", 9)(16, "div", 10)(17, "div", 11)(18, "h5", 12);
      \u0275\u0275text(19, "Copy from input");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(20, "div", 13)(21, "div", 14)(22, "input", 15);
      \u0275\u0275twoWayListener("ngModelChange", function ClipboardsComponent_Template_input_ngModelChange_22_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.copyFromInput, $event) || (ctx.copyFromInput = $event);
        return $event;
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(23, "a", 16);
      \u0275\u0275element(24, "i", 17);
      \u0275\u0275text(25, " Copy from Input");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(26, "a", 18);
      \u0275\u0275listener("click", function ClipboardsComponent_Template_a_click_26_listener() {
        return ctx.copyFromInput = "";
      });
      \u0275\u0275element(27, "i", 19);
      \u0275\u0275text(28, " Cut from Input");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(29, "div", 10)(30, "div", 11)(31, "h5", 12);
      \u0275\u0275text(32, "Copy from Text Area");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(33, "div", 13)(34, "div", 14)(35, "form", 20)(36, "textarea", 21);
      \u0275\u0275text(37, "Lorem ipsum dolor sit amet, consectetur adipiscing elit...");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(38, "a", 22);
      \u0275\u0275element(39, "i", 17);
      \u0275\u0275text(40, " Copy from Input");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(41, "a", 23);
      \u0275\u0275element(42, "i", 19);
      \u0275\u0275text(43, " Cut from Input");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(44, "div", 10)(45, "div", 11)(46, "h5", 12);
      \u0275\u0275text(47, "Copy Text from Paragraph");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(48, "div", 13)(49, "div", 24)(50, "p", 25);
      \u0275\u0275text(51, "Here is your OTP ");
      \u0275\u0275elementStart(52, "span");
      \u0275\u0275text(53, "22991");
      \u0275\u0275elementEnd();
      \u0275\u0275text(54, ".");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(55, "p", 26);
      \u0275\u0275text(56, "Please do not share it to anyone");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(57, "a", 27);
      \u0275\u0275element(58, "i", 17);
      \u0275\u0275text(59, " Copy from Input");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(60, "div", 10)(61, "div", 11)(62, "h5", 12);
      \u0275\u0275text(63, "Copy Hidden Text (Advanced)");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(64, "div", 13)(65, "div", 24)(66, "p", 26);
      \u0275\u0275text(67, " Link -> ");
      \u0275\u0275elementStart(68, "span");
      \u0275\u0275text(69, "http://www.example.com/example");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(70, "a", 22);
      \u0275\u0275element(71, "i", 17);
      \u0275\u0275text(72, " Copy Link");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(73, "a", 28);
      \u0275\u0275element(74, "i", 17);
      \u0275\u0275text(75, " Copy Hidden Code");
      \u0275\u0275elementEnd()()()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(22);
      \u0275\u0275property("value", ctx.copyFromInput);
      \u0275\u0275twoWayProperty("ngModel", ctx.copyFromInput);
      \u0275\u0275advance();
      \u0275\u0275property("cdkCopyToClipboard", ctx.copyFromInput);
      \u0275\u0275advance(3);
      \u0275\u0275property("cdkCopyToClipboard", ctx.copyFromInput);
    }
  }, dependencies: [CommonModule, ClipboardModule, CdkCopyToClipboard, FormsModule, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, NgModel, NgForm, ReactiveFormsModule], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ClipboardsComponent, [{
    type: Component,
    args: [{ selector: "app-clipboards", imports: [CommonModule, ClipboardModule, FormsModule, ReactiveFormsModule], template: `<!-- Page Header -->
<div class="d-flex align-items-sm-center flex-sm-row flex-column gap-2 pb-3">
  <div class="flex-grow-1">
      <h4 class="fs-18 fw-semibold mb-0">Clipboard</h4>
  </div>

  <div class="text-end">
      <ol class="breadcrumb m-0 py-0">
          <li class="breadcrumb-item"><a href="javascript: void(0);">Home</a></li>

          <li class="breadcrumb-item"><a href="javascript: void(0);">Advanced UI</a></li>

          <li class="breadcrumb-item active">Clipboard</li>
      </ol>
  </div>
</div>
<!-- /Page Header -->
<div class="row">
  <!-- Drag Card -->
  <div class="col-md-12">
    <div class="card">
      <div class="card-header">
        <h5 class="card-title">Copy from input</h5>
      </div>
      <div class="card-body">
        <div class="clipboard">

            <input
              type="text"
              class="form-control mb-4"
              [value]="copyFromInput"
              [(ngModel)]="copyFromInput"
            />
            <a
              [cdkCopyToClipboard]="copyFromInput"
              class="mb-1 btn clip-btn btn-primary me-1"
              ><i class="far fa-copy"></i> Copy from Input</a
            >
            <a
              [cdkCopyToClipboard]="copyFromInput"
              (click)="copyFromInput = ''" href="javascript:void(0);"
              class="mb-1 btn clip-btn btn-dark"
              ><i class="fas fa-cut"></i> Cut from Input</a
            >

        </div>
      </div>
    </div>

    <div class="card">
      <div class="card-header">
        <h5 class="card-title">Copy from Text Area</h5>
      </div>
      <div class="card-body">
        <div class="clipboard">
          <form class="form-horizontal">
            <textarea class="form-control mb-4" rows="3">
Lorem ipsum dolor sit amet, consectetur adipiscing elit...</textarea
            >
            <a class="mb-1 me-1 btn clip-btn btn-primary"
              ><i class="far fa-copy"></i> Copy from Input</a
            >
            <a class="mb-1 btn clip-btn btn-dark"
              ><i class="fas fa-cut"></i> Cut from Input</a
            >
          </form>
        </div>
      </div>
    </div>

    <div class="card">
      <div class="card-header">
        <h5 class="card-title">Copy Text from Paragraph</h5>
      </div>
      <div class="card-body">
        <div class="clipboard copy-txt">
          <p class="otp-pass">Here is your OTP <span>22991</span>.</p>
          <p class="mb-4">Please do not share it to anyone</p>
          <a class="mb-1 btn clip-btn btn-primary"
            ><i class="far fa-copy"></i> Copy from Input</a
          >
        </div>
      </div>
    </div>

    <div class="card">
      <div class="card-header">
        <h5 class="card-title">Copy Hidden Text (Advanced)</h5>
      </div>
      <div class="card-body">
        <div class="clipboard copy-txt">
          <p class="mb-4">
            Link -> <span>http://www.example.com/example</span>
          </p>
          <a class="mb-1 me-1 btn clip-btn btn-primary"
            ><i class="far fa-copy"></i> Copy Link</a
          >
          <a class="mb-1 btn clip-btn btn-warning"
            ><i class="far fa-copy"></i> Copy Hidden Code</a
          >
        </div>
      </div>
    </div>
  </div>
  <!-- /Drag Card -->
</div>
` }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ClipboardsComponent, { className: "ClipboardsComponent", filePath: "src/app/features/ui-interface/advanced-ui/clipboards/clipboards.component.ts", lineNumber: 11 });
})();
export {
  ClipboardsComponent
};
//# sourceMappingURL=chunk-RV6SDI7T.js.map

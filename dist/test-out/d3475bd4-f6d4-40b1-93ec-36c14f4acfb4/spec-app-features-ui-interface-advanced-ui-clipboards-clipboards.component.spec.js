import {
  FormsModule,
  ReactiveFormsModule,
  init_forms
} from "./chunk-2RBILSOV.js";
import {
  CommonModule,
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
  Directive,
  EventEmitter,
  FactoryTarget,
  Injectable,
  InjectionToken,
  Input,
  NgModule,
  NgZone,
  Output,
  __decorate,
  core_exports,
  init_core,
  init_tslib_es6,
  inject,
  ɵɵngDeclareClassMetadata,
  ɵɵngDeclareDirective,
  ɵɵngDeclareFactory,
  ɵɵngDeclareInjectable,
  ɵɵngDeclareInjector,
  ɵɵngDeclareNgModule
} from "./chunk-W6MIRXHE.js";
import {
  __async,
  __commonJS,
  __esm
} from "./chunk-FWMZPJRE.js";

// angular:jit:template:src/app/features/ui-interface/advanced-ui/clipboards/clipboards.component.html
var clipboards_component_default;
var init_clipboards_component = __esm({
  "angular:jit:template:src/app/features/ui-interface/advanced-ui/clipboards/clipboards.component.html"() {
    clipboards_component_default = `<!-- Page Header -->
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
`;
  }
});

// angular:jit:style:src/app/features/ui-interface/advanced-ui/clipboards/clipboards.component.scss
var clipboards_component_default2;
var init_clipboards_component2 = __esm({
  "angular:jit:style:src/app/features/ui-interface/advanced-ui/clipboards/clipboards.component.scss"() {
    clipboards_component_default2 = "/* src/app/features/ui-interface/advanced-ui/clipboards/clipboards.component.scss */\n/*# sourceMappingURL=clipboards.component.css.map */\n";
  }
});

// node_modules/@angular/cdk/fesm2022/clipboard.mjs
var PendingCopy, Clipboard, CDK_COPY_TO_CLIPBOARD_CONFIG, CdkCopyToClipboard, ClipboardModule;
var init_clipboard = __esm({
  "node_modules/@angular/cdk/fesm2022/clipboard.mjs"() {
    "use strict";
    init_core();
    init_core();
    PendingCopy = class {
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
    Clipboard = class _Clipboard {
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
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: _Clipboard, deps: [], target: FactoryTarget.Injectable });
      static \u0275prov = \u0275\u0275ngDeclareInjectable({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: _Clipboard, providedIn: "root" });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: Clipboard, decorators: [{
      type: Injectable,
      args: [{ providedIn: "root" }]
    }], ctorParameters: () => [] });
    CDK_COPY_TO_CLIPBOARD_CONFIG = new InjectionToken("CDK_COPY_TO_CLIPBOARD_CONFIG");
    CdkCopyToClipboard = class _CdkCopyToClipboard {
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
        const config = inject(CDK_COPY_TO_CLIPBOARD_CONFIG, { optional: true });
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
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: _CdkCopyToClipboard, deps: [], target: FactoryTarget.Directive });
      static \u0275dir = \u0275\u0275ngDeclareDirective({ minVersion: "14.0.0", version: "20.0.0", type: _CdkCopyToClipboard, isStandalone: true, selector: "[cdkCopyToClipboard]", inputs: { text: ["cdkCopyToClipboard", "text"], attempts: ["cdkCopyToClipboardAttempts", "attempts"] }, outputs: { copied: "cdkCopyToClipboardCopied" }, host: { listeners: { "click": "copy()" } }, ngImport: core_exports });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: CdkCopyToClipboard, decorators: [{
      type: Directive,
      args: [{
        selector: "[cdkCopyToClipboard]",
        host: {
          "(click)": "copy()"
        }
      }]
    }], ctorParameters: () => [], propDecorators: { text: [{
      type: Input,
      args: ["cdkCopyToClipboard"]
    }], attempts: [{
      type: Input,
      args: ["cdkCopyToClipboardAttempts"]
    }], copied: [{
      type: Output,
      args: ["cdkCopyToClipboardCopied"]
    }] } });
    ClipboardModule = class _ClipboardModule {
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: _ClipboardModule, deps: [], target: FactoryTarget.NgModule });
      static \u0275mod = \u0275\u0275ngDeclareNgModule({ minVersion: "14.0.0", version: "20.0.0", ngImport: core_exports, type: _ClipboardModule, imports: [CdkCopyToClipboard], exports: [CdkCopyToClipboard] });
      static \u0275inj = \u0275\u0275ngDeclareInjector({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: _ClipboardModule });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: ClipboardModule, decorators: [{
      type: NgModule,
      args: [{
        imports: [CdkCopyToClipboard],
        exports: [CdkCopyToClipboard]
      }]
    }] });
  }
});

// src/app/features/ui-interface/advanced-ui/clipboards/clipboards.component.ts
var ClipboardsComponent;
var init_clipboards_component3 = __esm({
  "src/app/features/ui-interface/advanced-ui/clipboards/clipboards.component.ts"() {
    "use strict";
    init_tslib_es6();
    init_clipboards_component();
    init_clipboards_component2();
    init_core();
    init_common();
    init_forms();
    init_clipboard();
    ClipboardsComponent = class ClipboardsComponent2 {
      copyFromInput = "http://www.admin-dashboard.com";
    };
    ClipboardsComponent = __decorate([
      Component({
        selector: "app-clipboards",
        template: clipboards_component_default,
        imports: [CommonModule, ClipboardModule, FormsModule, ReactiveFormsModule],
        styles: [clipboards_component_default2]
      })
    ], ClipboardsComponent);
  }
});

// src/app/features/ui-interface/advanced-ui/clipboards/clipboards.component.spec.ts
var require_clipboards_component_spec = __commonJS({
  "src/app/features/ui-interface/advanced-ui/clipboards/clipboards.component.spec.ts"(exports) {
    init_testing();
    init_clipboards_component3();
    describe("ClipboardsComponent", () => {
      let component;
      let fixture;
      beforeEach(() => __async(null, null, function* () {
        yield TestBed.configureTestingModule({
          declarations: [ClipboardsComponent]
        }).compileComponents();
        fixture = TestBed.createComponent(ClipboardsComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
      }));
      it("should create", () => {
        expect(component).toBeTruthy();
      });
    });
  }
});
export default require_clipboards_component_spec();
//# sourceMappingURL=spec-app-features-ui-interface-advanced-ui-clipboards-clipboards.component.spec.js.map

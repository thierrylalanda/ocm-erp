import {
  Editor,
  MenuComponent,
  NgxEditorComponent,
  NgxEditorModule,
  Validators
} from "./chunk-T6JEQ3C5.js";
import {
  FormControl,
  FormGroup
} from "./chunk-NAWYXTZ5.js";
import "./chunk-KYBWVUSB.js";
import "./chunk-ZCJVS2AD.js";
import {
  CommonModule
} from "./chunk-LNSVVXVJ.js";
import {
  Component,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵproperty,
  ɵɵtext
} from "./chunk-HKG6HBOI.js";
import "./chunk-TXDUYLVM.js";

// src/app/features/ui-interface/advanced-ui/text-editor/text-editor.component.ts
var TextEditorComponent = class _TextEditorComponent {
  editor;
  toolbar = [
    ["bold", "italic"],
    ["underline", "strike"],
    ["code", "blockquote"],
    ["ordered_list", "bullet_list"],
    [{ heading: ["h1", "h2", "h3", "h4", "h5", "h6"] }],
    ["link", "image"],
    ["text_color", "background_color"],
    ["align_left", "align_center", "align_right", "align_justify"]
  ];
  form = new FormGroup({
    editorContent: new FormControl("", Validators.required())
  });
  ngOnInit() {
    this.editor = new Editor();
  }
  ngOnDestroy() {
    this.editor.destroy();
  }
  static \u0275fac = function TextEditorComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _TextEditorComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _TextEditorComponent, selectors: [["app-text-editor"]], decls: 23, vars: 3, consts: [[1, "d-flex", "align-items-sm-center", "flex-sm-row", "flex-column", "gap-2", "pb-3"], [1, "flex-grow-1"], [1, "fs-18", "fw-semibold", "mb-0"], [1, "text-end"], [1, "breadcrumb", "m-0", "py-0"], [1, "breadcrumb-item"], ["href", "javascript: void(0);"], [1, "breadcrumb-item", "active"], [1, "row"], [1, "col-md-12"], [1, "card"], [1, "card-header"], [1, "card-title"], [1, "card-body", "editors"], [3, "editor"], [3, "editor", "toolbar"]], template: function TextEditorComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "h4", 2);
      \u0275\u0275text(3, "Text Editor");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(4, "div", 3)(5, "ol", 4)(6, "li", 5)(7, "a", 6);
      \u0275\u0275text(8, "Home");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(9, "li", 5)(10, "a", 6);
      \u0275\u0275text(11, "Advanced UI");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(12, "li", 7);
      \u0275\u0275text(13, "Text Editor");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(14, "div", 8)(15, "div", 9)(16, "div", 10)(17, "div", 11)(18, "h5", 12);
      \u0275\u0275text(19, "Editor");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(20, "div", 13)(21, "ngx-editor", 14);
      \u0275\u0275element(22, "ngx-editor-menu", 15);
      \u0275\u0275elementEnd()()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(21);
      \u0275\u0275property("editor", ctx.editor);
      \u0275\u0275advance();
      \u0275\u0275property("editor", ctx.editor)("toolbar", ctx.toolbar);
    }
  }, dependencies: [CommonModule, NgxEditorModule, NgxEditorComponent, MenuComponent], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TextEditorComponent, [{
    type: Component,
    args: [{ selector: "app-text-editor", imports: [CommonModule, NgxEditorModule], template: '<!-- Page Header -->\n<div class="d-flex align-items-sm-center flex-sm-row flex-column gap-2 pb-3">\n  <div class="flex-grow-1">\n      <h4 class="fs-18 fw-semibold mb-0">Text Editor</h4>\n  </div>\n\n  <div class="text-end">\n      <ol class="breadcrumb m-0 py-0">\n          <li class="breadcrumb-item"><a href="javascript: void(0);">Home</a></li>\n\n          <li class="breadcrumb-item"><a href="javascript: void(0);">Advanced UI</a></li>\n\n          <li class="breadcrumb-item active">Text Editor</li>\n      </ol>\n  </div>\n</div>\n<!-- /Page Header -->\n<div class="row">\n  <!-- Editor -->\n  <div class="col-md-12">\n    <div class="card">\n      <div class="card-header">\n        <h5 class="card-title">Editor</h5>\n      </div>\n      <div class="card-body editors">\n        <ngx-editor [editor]="editor">\n          <ngx-editor-menu [editor]="editor" [toolbar]="toolbar">\n          </ngx-editor-menu>\n      </ngx-editor>\n      </div>\n    </div>\n  </div>\n  <!-- /Editor -->\n</div>\n' }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(TextEditorComponent, { className: "TextEditorComponent", filePath: "src/app/features/ui-interface/advanced-ui/text-editor/text-editor.component.ts", lineNumber: 12 });
})();
export {
  TextEditorComponent
};
//# sourceMappingURL=chunk-NP57IRHA.js.map

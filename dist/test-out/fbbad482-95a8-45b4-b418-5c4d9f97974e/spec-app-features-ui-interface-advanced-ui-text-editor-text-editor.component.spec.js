import {
  Editor,
  NgxEditorModule,
  Validators,
  init_ngx_editor
} from "./chunk-BWQRL5BR.js";
import {
  FormControl,
  FormGroup,
  init_forms
} from "./chunk-2RBILSOV.js";
import "./chunk-BIGDKMS7.js";
import "./chunk-RSLHKDCR.js";
import "./chunk-H7VTUQ3B.js";
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
  __decorate,
  init_core,
  init_tslib_es6
} from "./chunk-W6MIRXHE.js";
import {
  __async,
  __commonJS,
  __esm
} from "./chunk-FWMZPJRE.js";

// angular:jit:template:src/app/features/ui-interface/advanced-ui/text-editor/text-editor.component.html
var text_editor_component_default;
var init_text_editor_component = __esm({
  "angular:jit:template:src/app/features/ui-interface/advanced-ui/text-editor/text-editor.component.html"() {
    text_editor_component_default = '<!-- Page Header -->\n<div class="d-flex align-items-sm-center flex-sm-row flex-column gap-2 pb-3">\n  <div class="flex-grow-1">\n      <h4 class="fs-18 fw-semibold mb-0">Text Editor</h4>\n  </div>\n\n  <div class="text-end">\n      <ol class="breadcrumb m-0 py-0">\n          <li class="breadcrumb-item"><a href="javascript: void(0);">Home</a></li>\n\n          <li class="breadcrumb-item"><a href="javascript: void(0);">Advanced UI</a></li>\n\n          <li class="breadcrumb-item active">Text Editor</li>\n      </ol>\n  </div>\n</div>\n<!-- /Page Header -->\n<div class="row">\n  <!-- Editor -->\n  <div class="col-md-12">\n    <div class="card">\n      <div class="card-header">\n        <h5 class="card-title">Editor</h5>\n      </div>\n      <div class="card-body editors">\n        <ngx-editor [editor]="editor">\n          <ngx-editor-menu [editor]="editor" [toolbar]="toolbar">\n          </ngx-editor-menu>\n      </ngx-editor>\n      </div>\n    </div>\n  </div>\n  <!-- /Editor -->\n</div>\n';
  }
});

// angular:jit:style:src/app/features/ui-interface/advanced-ui/text-editor/text-editor.component.scss
var text_editor_component_default2;
var init_text_editor_component2 = __esm({
  "angular:jit:style:src/app/features/ui-interface/advanced-ui/text-editor/text-editor.component.scss"() {
    text_editor_component_default2 = "/* src/app/features/ui-interface/advanced-ui/text-editor/text-editor.component.scss */\n/*# sourceMappingURL=text-editor.component.css.map */\n";
  }
});

// src/app/features/ui-interface/advanced-ui/text-editor/text-editor.component.ts
var TextEditorComponent;
var init_text_editor_component3 = __esm({
  "src/app/features/ui-interface/advanced-ui/text-editor/text-editor.component.ts"() {
    "use strict";
    init_tslib_es6();
    init_text_editor_component();
    init_text_editor_component2();
    init_core();
    init_common();
    init_forms();
    init_ngx_editor();
    TextEditorComponent = class TextEditorComponent2 {
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
    };
    TextEditorComponent = __decorate([
      Component({
        selector: "app-text-editor",
        template: text_editor_component_default,
        imports: [CommonModule, NgxEditorModule],
        styles: [text_editor_component_default2]
      })
    ], TextEditorComponent);
  }
});

// src/app/features/ui-interface/advanced-ui/text-editor/text-editor.component.spec.ts
var require_text_editor_component_spec = __commonJS({
  "src/app/features/ui-interface/advanced-ui/text-editor/text-editor.component.spec.ts"(exports) {
    init_testing();
    init_text_editor_component3();
    describe("TextEditorComponent", () => {
      let component;
      let fixture;
      beforeEach(() => __async(null, null, function* () {
        yield TestBed.configureTestingModule({
          declarations: [TextEditorComponent]
        }).compileComponents();
        fixture = TestBed.createComponent(TextEditorComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
      }));
      it("should create", () => {
        expect(component).toBeTruthy();
      });
    });
  }
});
export default require_text_editor_component_spec();
//# sourceMappingURL=spec-app-features-ui-interface-advanced-ui-text-editor-text-editor.component.spec.js.map

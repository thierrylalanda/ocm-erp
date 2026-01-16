import {
  FormsModule
} from "./chunk-BLAAMQ2R.js";
import {
  CommonModule
} from "./chunk-ZV6UYXXV.js";
import {
  Component,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵdomElement,
  ɵɵdomElementEnd,
  ɵɵdomElementStart,
  ɵɵdomListener,
  ɵɵdomProperty,
  ɵɵgetCurrentView,
  ɵɵnextContext,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵtext,
  ɵɵtextInterpolate1
} from "./chunk-U4CEU3KS.js";
import "./chunk-TXDUYLVM.js";

// src/app/features/ui-interface/forms/form-fileupload/form-fileupload.component.ts
function FormFileuploadComponent_For_50_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " , ");
  }
}
function FormFileuploadComponent_For_50_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275conditionalCreate(1, FormFileuploadComponent_For_50_Conditional_1_Template, 1, 0);
  }
  if (rf & 2) {
    const item_r1 = ctx.$implicit;
    const \u0275$index_87_r2 = ctx.$index;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275textInterpolate1(" ", item_r1, " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.multipleFileName.length > 1 && ctx_r2.multipleFileName.length - 1 !== \u0275$index_87_r2 ? 1 : -1);
  }
}
function FormFileuploadComponent_For_55_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275domElementStart(0, "span")(1, "a", 16);
    \u0275\u0275domListener("click", function FormFileuploadComponent_For_55_Conditional_1_Template_a_click_1_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r4 = \u0275\u0275nextContext();
      const item_r6 = ctx_r4.$implicit;
      const \u0275$index_96_r7 = ctx_r4.$index;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.removeSingleImage(\u0275$index_96_r7, item_r6));
    });
    \u0275\u0275text(2, "x");
    \u0275\u0275domElementEnd()();
  }
}
function FormFileuploadComponent_For_55_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "div", 25);
    \u0275\u0275conditionalCreate(1, FormFileuploadComponent_For_55_Conditional_1_Template, 3, 0, "span");
    \u0275\u0275domElement(2, "img", 22);
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    const item_r6 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275domProperty("hidden", ctx_r2.selectedImages.length !== 1 && item_r6 === "assets/fileupload.svg");
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.selectedImages.length > 1 ? 1 : -1);
    \u0275\u0275advance();
    \u0275\u0275domProperty("src", item_r6, \u0275\u0275sanitizeUrl);
  }
}
var FormFileuploadComponent = class _FormFileuploadComponent {
  // single file
  singleFileName = "Choose file..";
  singleFileImage;
  selectedImage = "assets/fileupload.svg";
  // single file
  // multiple file
  multipleFileName = ["Choose file.."];
  multipleFileImages;
  selectedImages = ["assets/fileupload.svg"];
  // multiple file
  onFileChange(event) {
    if (event.target.files.length == 0) {
      this.singleFileImage = event.target.files[0];
      const reader = new FileReader();
      reader.readAsDataURL(this.singleFileImage);
      reader.onload = (res) => {
        this.selectedImage = res.target.result;
      };
      this.singleFileName = this.singleFileImage.name;
      event.target.value = "";
    }
    if (event.target.files.length > 0) {
      if (this.multipleFileName[0] == "Choose file..") {
        this.multipleFileName = [];
      }
      const image = event.target.files;
      Array.from(image).map((obj) => {
        const reader = new FileReader();
        this.multipleFileName.push(obj.name);
        reader.readAsDataURL(obj);
        reader.onload = (res) => {
          this.selectedImages.push(res.target.result);
        };
      });
      event.target.value = "";
    }
  }
  clearSingleImage() {
    this.singleFileName = "Choose file..";
    this.selectedImage = "assets/fileupload.svg";
  }
  clearMultipleImage() {
    this.multipleFileName = ["Choose file.."];
    this.selectedImages = ["assets/fileupload.svg"];
  }
  removeSingleImage(index, value) {
    this.multipleFileName.splice(value, 1);
    this.selectedImages.splice(index, 1);
    if (this.multipleFileName.length == 0) {
      this.multipleFileName = ["Choose file.."];
    }
  }
  static \u0275fac = function FormFileuploadComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _FormFileuploadComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _FormFileuploadComponent, selectors: [["app-form-fileupload"]], decls: 56, vars: 2, consts: [[1, "d-flex", "align-items-sm-center", "flex-sm-row", "flex-column", "gap-2", "pb-3"], [1, "flex-grow-1"], [1, "fs-18", "fw-semibold", "mb-0"], [1, "text-end"], [1, "breadcrumb", "m-0", "py-0"], [1, "breadcrumb-item"], ["href", "javascript: void(0);"], [1, "breadcrumb-item", "active"], [1, "row"], [1, "col-md-12"], [1, "card"], [1, "card-header"], [1, "card-title"], [1, "card-body"], [1, "custom-file-container"], ["htmlFor", "label"], ["href", "javascript:void(0)", "title", "Clear Image", 1, "custom-file-container__image-clear", 3, "click"], ["for", "singleFile", 1, "custom-file-container__custom-file"], ["id", "singleFile", "type", "file", "accept", "image/png,image/jpeg,image/jpg", 1, "custom-file-container__custom-file__custom-file-input", 3, "change"], [1, "custom-file-container__custom-file__custom-file-control"], [1, "custom-file-container__custom-file__custom-file-control__button"], [1, "custom-file-container__image-preview"], ["alt", "preview", 3, "src"], ["for", "multipleFile", 1, "custom-file-container__custom-file"], ["id", "multipleFile", "type", "file", "multiple", "true", "accept", "image/png,image/jpeg,image/jpg", 1, "custom-file-container__custom-file__custom-file-input", 3, "change"], [1, "chooseImg", 3, "hidden"]], template: function FormFileuploadComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275domElementStart(0, "div", 0)(1, "div", 1)(2, "h4", 2);
      \u0275\u0275text(3, "File Upload");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(4, "div", 3)(5, "ol", 4)(6, "li", 5)(7, "a", 6);
      \u0275\u0275text(8, "Home");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(9, "li", 5)(10, "a", 6);
      \u0275\u0275text(11, "Forms");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(12, "li", 7);
      \u0275\u0275text(13, "File Upload");
      \u0275\u0275domElementEnd()()()();
      \u0275\u0275domElementStart(14, "div", 8)(15, "div", 9)(16, "div", 10)(17, "div", 11)(18, "h5", 12);
      \u0275\u0275text(19, "Single File Upload");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(20, "div", 13)(21, "div", 14)(22, "div")(23, "label", 15);
      \u0275\u0275text(24, "Upload (Single File) ");
      \u0275\u0275domElementStart(25, "a", 16);
      \u0275\u0275domListener("click", function FormFileuploadComponent_Template_a_click_25_listener() {
        return ctx.clearSingleImage();
      });
      \u0275\u0275text(26, "x");
      \u0275\u0275domElementEnd()()();
      \u0275\u0275domElementStart(27, "label", 17)(28, "input", 18);
      \u0275\u0275domListener("change", function FormFileuploadComponent_Template_input_change_28_listener($event) {
        return ctx.onFileChange($event);
      });
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(29, "span", 19);
      \u0275\u0275text(30);
      \u0275\u0275domElementStart(31, "span", 20);
      \u0275\u0275text(32, "Browse");
      \u0275\u0275domElementEnd()()();
      \u0275\u0275domElementStart(33, "div", 21);
      \u0275\u0275domElement(34, "img", 22);
      \u0275\u0275domElementEnd()()()();
      \u0275\u0275domElementStart(35, "div", 10)(36, "div", 11)(37, "h5", 12);
      \u0275\u0275text(38, "Multiple File Upload");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(39, "div", 13)(40, "div", 14)(41, "div")(42, "label", 15);
      \u0275\u0275text(43, "Upload (Allow Multiple) ");
      \u0275\u0275domElementStart(44, "a", 16);
      \u0275\u0275domListener("click", function FormFileuploadComponent_Template_a_click_44_listener() {
        return ctx.clearMultipleImage();
      });
      \u0275\u0275text(45, "x");
      \u0275\u0275domElementEnd()()();
      \u0275\u0275domElementStart(46, "label", 23)(47, "input", 24);
      \u0275\u0275domListener("change", function FormFileuploadComponent_Template_input_change_47_listener($event) {
        return ctx.onFileChange($event);
      });
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(48, "span", 19);
      \u0275\u0275repeaterCreate(49, FormFileuploadComponent_For_50_Template, 2, 2, null, null, \u0275\u0275repeaterTrackByIdentity);
      \u0275\u0275domElementStart(51, "span", 20);
      \u0275\u0275text(52, "Browse");
      \u0275\u0275domElementEnd()()();
      \u0275\u0275domElementStart(53, "div", 21);
      \u0275\u0275repeaterCreate(54, FormFileuploadComponent_For_55_Template, 3, 3, "div", 25, \u0275\u0275repeaterTrackByIdentity);
      \u0275\u0275domElementEnd()()()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(30);
      \u0275\u0275textInterpolate1("", ctx.singleFileName, " ");
      \u0275\u0275advance(4);
      \u0275\u0275domProperty("src", ctx.selectedImage, \u0275\u0275sanitizeUrl);
      \u0275\u0275advance(15);
      \u0275\u0275repeater(ctx.multipleFileName);
      \u0275\u0275advance(5);
      \u0275\u0275repeater(ctx.selectedImages);
    }
  }, dependencies: [CommonModule, FormsModule], styles: ["\n\n.custom-file-container__image-preview[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n  transition: all 0.2s ease;\n  margin-top: 54px;\n  margin-bottom: 40px;\n  height: 250px;\n  width: 100%;\n  border-radius: 4px;\n  background-repeat: no-repeat;\n  background-color: #fff;\n  overflow: auto;\n  padding: 15px;\n  display: flex;\n  justify-content: center;\n}\n.custom-file-container__image-preview[_ngcontent-%COMP%]   .chooseImg[_ngcontent-%COMP%] {\n  display: contents;\n}\n.custom-file-container__image-preview[_ngcontent-%COMP%]   .chooseImg[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  height: 100%;\n}\n.custom-file-container__image-preview[_ngcontent-%COMP%]   .chooseImg[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  background: #ffffff;\n  width: 20px;\n  height: 20px;\n  border-radius: 50%;\n  text-align: center;\n  margin-top: -6px;\n  box-shadow: 0 4px 10px 0 rgba(51, 51, 51, 0.25);\n  margin: 6px -28px;\n  z-index: 9;\n}\n/*# sourceMappingURL=form-fileupload.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FormFileuploadComponent, [{
    type: Component,
    args: [{ selector: "app-form-fileupload", imports: [CommonModule, FormsModule], template: `
              <!-- Page Header -->
              <div class="d-flex align-items-sm-center flex-sm-row flex-column gap-2 pb-3">
                <div class="flex-grow-1">
                    <h4 class="fs-18 fw-semibold mb-0">File Upload</h4>
                </div>
                <div class="text-end">
                    <ol class="breadcrumb m-0 py-0">
                        <li class="breadcrumb-item"><a href="javascript: void(0);">Home</a></li>
                        <li class="breadcrumb-item"><a href="javascript: void(0);">Forms</a></li>
                        <li class="breadcrumb-item active">File Upload</li>
                    </ol>
                </div>
            </div>
            <!-- End Page Header -->
<div class="row">
  <div class="col-md-12">
    <div class="card">
      <div class="card-header">
        <h5 class="card-title">Single File Upload</h5>
      </div>
      <div class="card-body">
        <div class="custom-file-container">
          <div>
            <label htmlFor="label"
              >Upload (Single File)
              <a
                (click)="clearSingleImage()"
                href="javascript:void(0)"
                class="custom-file-container__image-clear"
                title="Clear Image"
                >x</a
                ></label
                >
              </div>
              <label for="singleFile" class="custom-file-container__custom-file">
                <input
                  id="singleFile"
                  type="file"
                  (change)="onFileChange($event)"
                  accept="image/png,image/jpeg,image/jpg"
                  class="custom-file-container__custom-file__custom-file-input"
                  />
                  <span
                    class="custom-file-container__custom-file__custom-file-control"
                    >{{ singleFileName }}
                    <span
                      class="custom-file-container__custom-file__custom-file-control__button"
                      >Browse</span
                      >
                    </span>
                  </label>
                  <div class="custom-file-container__image-preview">
                    <img [src]="selectedImage" alt="preview" />
                  </div>
                </div>
              </div>
            </div>

            <div class="card">
              <div class="card-header">
                <h5 class="card-title">Multiple File Upload</h5>
              </div>
              <div class="card-body">
                <div class="custom-file-container">
                  <div>
                    <label htmlFor="label"
                      >Upload (Allow Multiple)
                      <a
                        (click)="clearMultipleImage()"
                        href="javascript:void(0)"
                        class="custom-file-container__image-clear"
                        title="Clear Image"
                        >x</a
                        ></label
                        >
                      </div>
                      <label for="multipleFile" class="custom-file-container__custom-file">
                        <input
                          id="multipleFile"
                          type="file"
                          multiple="true"
                          (change)="onFileChange($event)"
                          accept="image/png,image/jpeg,image/jpg"
                          class="custom-file-container__custom-file__custom-file-input"
                          />
                          <span
                            class="custom-file-container__custom-file__custom-file-control"
                            >
                            @for (item of multipleFileName; track item; let i = $index) {
                              {{ item }}
                              @if (
                                multipleFileName.length > 1 &&
                                multipleFileName.length - 1 !== i
                                ) {
                                ,
                              }
                            }
                            <span
                              class="custom-file-container__custom-file__custom-file-control__button"
                              >Browse</span
                              >
                            </span>
                          </label>
                          <div class="custom-file-container__image-preview">
                            @for (item of selectedImages; track item; let i = $index) {
                              <div
                                class="chooseImg"
                [hidden]="
                  selectedImages.length !== 1 &&
                  item === 'assets/fileupload.svg'
                "
                                >
                                @if (selectedImages.length > 1) {
                                  <span>
                                    <a
                                      (click)="removeSingleImage(i,item)"
                                      href="javascript:void(0)"
                                      class="custom-file-container__image-clear"
                                      title="Clear Image"
                                      >x</a
                                      >
                                    </span>
                                  }
                                  <img [src]="item" alt="preview" />
                                </div>
                              }
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
`, styles: ["/* src/app/features/ui-interface/forms/form-fileupload/form-fileupload.component.scss */\n.custom-file-container__image-preview {\n  box-sizing: border-box;\n  transition: all 0.2s ease;\n  margin-top: 54px;\n  margin-bottom: 40px;\n  height: 250px;\n  width: 100%;\n  border-radius: 4px;\n  background-repeat: no-repeat;\n  background-color: #fff;\n  overflow: auto;\n  padding: 15px;\n  display: flex;\n  justify-content: center;\n}\n.custom-file-container__image-preview .chooseImg {\n  display: contents;\n}\n.custom-file-container__image-preview .chooseImg img {\n  height: 100%;\n}\n.custom-file-container__image-preview .chooseImg span {\n  background: #ffffff;\n  width: 20px;\n  height: 20px;\n  border-radius: 50%;\n  text-align: center;\n  margin-top: -6px;\n  box-shadow: 0 4px 10px 0 rgba(51, 51, 51, 0.25);\n  margin: 6px -28px;\n  z-index: 9;\n}\n/*# sourceMappingURL=form-fileupload.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(FormFileuploadComponent, { className: "FormFileuploadComponent", filePath: "src/app/features/ui-interface/forms/form-fileupload/form-fileupload.component.ts", lineNumber: 12 });
})();
export {
  FormFileuploadComponent
};
//# sourceMappingURL=chunk-VUWRH2H5.js.map

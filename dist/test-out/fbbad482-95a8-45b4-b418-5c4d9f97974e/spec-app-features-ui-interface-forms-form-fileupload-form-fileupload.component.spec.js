import {
  FormsModule,
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
  __decorate,
  init_core,
  init_tslib_es6
} from "./chunk-W6MIRXHE.js";
import {
  __async,
  __commonJS,
  __esm
} from "./chunk-FWMZPJRE.js";

// angular:jit:template:src/app/features/ui-interface/forms/form-fileupload/form-fileupload.component.html
var form_fileupload_component_default;
var init_form_fileupload_component = __esm({
  "angular:jit:template:src/app/features/ui-interface/forms/form-fileupload/form-fileupload.component.html"() {
    form_fileupload_component_default = `
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
`;
  }
});

// angular:jit:style:src/app/features/ui-interface/forms/form-fileupload/form-fileupload.component.scss
var form_fileupload_component_default2;
var init_form_fileupload_component2 = __esm({
  "angular:jit:style:src/app/features/ui-interface/forms/form-fileupload/form-fileupload.component.scss"() {
    form_fileupload_component_default2 = "/* src/app/features/ui-interface/forms/form-fileupload/form-fileupload.component.scss */\n.custom-file-container__image-preview {\n  box-sizing: border-box;\n  transition: all 0.2s ease;\n  margin-top: 54px;\n  margin-bottom: 40px;\n  height: 250px;\n  width: 100%;\n  border-radius: 4px;\n  background-repeat: no-repeat;\n  background-color: #fff;\n  overflow: auto;\n  padding: 15px;\n  display: flex;\n  justify-content: center;\n}\n.custom-file-container__image-preview .chooseImg {\n  display: contents;\n}\n.custom-file-container__image-preview .chooseImg img {\n  height: 100%;\n}\n.custom-file-container__image-preview .chooseImg span {\n  background: #ffffff;\n  width: 20px;\n  height: 20px;\n  border-radius: 50%;\n  text-align: center;\n  margin-top: -6px;\n  box-shadow: 0 4px 10px 0 rgba(51, 51, 51, 0.25);\n  margin: 6px -28px;\n  z-index: 9;\n}\n/*# sourceMappingURL=form-fileupload.component.css.map */\n";
  }
});

// src/app/features/ui-interface/forms/form-fileupload/form-fileupload.component.ts
var FormFileuploadComponent;
var init_form_fileupload_component3 = __esm({
  "src/app/features/ui-interface/forms/form-fileupload/form-fileupload.component.ts"() {
    "use strict";
    init_tslib_es6();
    init_form_fileupload_component();
    init_form_fileupload_component2();
    init_common();
    init_core();
    init_forms();
    FormFileuploadComponent = class FormFileuploadComponent2 {
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
    };
    FormFileuploadComponent = __decorate([
      Component({
        selector: "app-form-fileupload",
        template: form_fileupload_component_default,
        imports: [CommonModule, FormsModule],
        styles: [form_fileupload_component_default2]
      })
    ], FormFileuploadComponent);
  }
});

// src/app/features/ui-interface/forms/form-fileupload/form-fileupload.component.spec.ts
var require_form_fileupload_component_spec = __commonJS({
  "src/app/features/ui-interface/forms/form-fileupload/form-fileupload.component.spec.ts"(exports) {
    init_testing();
    init_form_fileupload_component3();
    describe("FormFileuploadComponent", () => {
      let component;
      let fixture;
      beforeEach(() => __async(null, null, function* () {
        yield TestBed.configureTestingModule({
          declarations: [FormFileuploadComponent]
        }).compileComponents();
        fixture = TestBed.createComponent(FormFileuploadComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
      }));
      it("should create", () => {
        expect(component).toBeTruthy();
      });
    });
  }
});
export default require_form_fileupload_component_spec();
//# sourceMappingURL=spec-app-features-ui-interface-forms-form-fileupload-form-fileupload.component.spec.js.map

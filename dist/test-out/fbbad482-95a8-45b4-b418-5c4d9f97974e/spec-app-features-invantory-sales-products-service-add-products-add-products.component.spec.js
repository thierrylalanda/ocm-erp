import {
  MatSliderModule,
  init_slider
} from "./chunk-W5TEORCC.js";
import {
  BsDatepickerModule,
  init_ngx_bootstrap_datepicker
} from "./chunk-WSBEZP5X.js";
import {
  Editor,
  NgxEditorModule,
  Validators,
  init_ngx_editor
} from "./chunk-BWQRL5BR.js";
import {
  MatSelectModule,
  init_select
} from "./chunk-PJP4EZYQ.js";
import "./chunk-ZLTBFUHR.js";
import "./chunk-N2Q3HONL.js";
import "./chunk-ZQVU7KV2.js";
import "./chunk-Y46UO4F7.js";
import "./chunk-WYJ2IQUD.js";
import "./chunk-BDO5G4JQ.js";
import "./chunk-BAYPUVG5.js";
import "./chunk-V5QKIDZC.js";
import "./chunk-SR4JAI3W.js";
import "./chunk-46HFNSZZ.js";
import "./chunk-6XCX22WB.js";
import "./chunk-I2GXMQDC.js";
import "./chunk-UJXPUDZY.js";
import "./chunk-33YSR6MK.js";
import "./chunk-LKMTQ47C.js";
import "./chunk-MTEB3W4S.js";
import {
  FormControl,
  FormGroup,
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
  RouterLink,
  init_router
} from "./chunk-EDGRTZKC.js";
import "./chunk-BIGDKMS7.js";
import "./chunk-RSLHKDCR.js";
import "./chunk-H7VTUQ3B.js";
import "./chunk-HQHIWYWO.js";
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

// angular:jit:template:src/app/features/invantory-sales/products-service/add-products/add-products.component.html
var add_products_component_default;
var init_add_products_component = __esm({
  "angular:jit:template:src/app/features/invantory-sales/products-service/add-products/add-products.component.html"() {
    add_products_component_default = '<!-- Start row -->\n<div class="row">\n  <div class="col-md-10 mx-auto">\n      <div>\n          <div class="d-flex align-items-center justify-content-between mb-3">\n              <h6><a [routerLink]="routes.productlist"><i class="isax isax-arrow-left me-2"></i>Products</a></h6>\n              <a href="javascript:void(0);" class="btn btn-outline-white d-inline-flex align-items-center"><i class="isax isax-eye me-1"></i>Preview</a>\n          </div>\n          <div class="card">\n              <div class="card-body">\n                  <h6 class="mb-3">Basic Details</h6>\n                  <form>\n                      <div class="mb-3">\n                          <span class="text-gray-9 fw-bold mb-2 d-flex">Product Image<span class="text-danger ms-1">*</span></span>\n                          <div class="d-flex align-items-center">\n                              <div class="avatar avatar-xxl border border-dashed bg-light me-3 flex-shrink-0">\n                                  <i class="isax isax-image text-primary fs-24"></i>\n                              </div>\n                              <div class="d-inline-flex flex-column align-items-start">\n                                  <div class="drag-upload-btn btn btn-sm btn-primary position-relative mb-2">\n                                      <i class="isax isax-image me-1"></i>Upload Image\n                                      <input type="file" class="form-control image-sign" multiple="">\n                                  </div>\n                                  <span class="text-gray-9 fs-12">JPG or PNG format, not exceeding 5MB.</span>\n                              </div>\n                          </div>\n                      </div>\n                      <label class="form-label">Item Type<span class="text-danger ms-1">*</span></label>\n                      <div class="d-flex align-items-center mb-3">\n                          <div class="form-check me-3">\n                              <input class="form-check-input" type="radio" name="Radio" id="Radio-sm-1" checked>\n                              <label class="form-check-label" for="Radio-sm-1">\n                                  Product\n                              </label>\n                          </div>\n                          <div class="form-check">\n                              <input class="form-check-input" type="radio" name="Radio" id="Radio-sm-2">\n                              <label class="form-check-label" for="Radio-sm-2">\n                                  Service\n                              </label>\n                          </div>\n                      </div>\n                      <div class="row gx-3">\n                          <div class="col-lg-4 col-md-6">\n                              <div class="mb-3">\n                                  <label class="form-label">Name<span class="text-danger ms-1">*</span></label>\n                                  <input type="text" class="form-control">\n                              </div>\n                          </div>\n                          <div class="col-lg-4 col-md-6">\n                              <div class="mb-3">\n                                  <label class="form-label">Code<span class="text-danger ms-1">*</span></label>\n                                  <div class="position-relative">\n                                      <input type="text" class="form-control">\n                                      <a href="javascript:void(0);" class="btn btn-sm btn-dark position-absolute end-0 top-0 bottom-0 mx-2 my-1 d-inline-flex align-items-center">Generate</a>\n                                  </div>\n                              </div>\n                          </div>\n                          <div class="col-lg-4 col-md-6">\n                              <div class="mb-3">\n                                  <label class="form-label">Category<span class="text-danger ms-1">*</span></label>\n                                  <mat-select class="custom-mat-select select" placeholder="Select">\n                                      <mat-option value="1">Select</mat-option>\n                                      <mat-option value="1">Smartphones</mat-option>\n                                      <mat-option value="1">Laptops</mat-option>\n                                      <mat-option value="1">Headphones</mat-option>\n                                      <mat-option value="1">Computer Service</mat-option>\n                                      <mat-option value="1">Footwear</mat-option>\n                                      <mat-option value="1">Kitchen</mat-option>\n                                      <mat-option value="1">Cleaning</mat-option>\n                                  </mat-select>\n                              </div>\n                          </div>\n                          <div class="col-lg-4 col-md-6">\n                              <div class="mb-3">\n                                  <label class="form-label">Selling Price<span class="text-danger ms-1">*</span></label>\n                                  <input type="text" class="form-control">\n                              </div>\n                          </div>\n                          <div class="col-lg-4 col-md-6">\n                              <div class="mb-3">\n                                  <label class="form-label">Purchase Price<span class="text-danger ms-1">*</span></label>\n                                  <input type="text" class="form-control">\n                              </div>\n                          </div>\n                          <div class="col-lg-4 col-md-6">\n                              <div class="mb-3">\n                                  <label class="form-label">Quantity<span class="text-danger ms-1">*</span></label>\n                                  <input type="text" class="form-control">\n                              </div>\n                          </div>\n                          <div class="col-lg-4 col-md-6">\n                              <div class="mb-3">\n                                  <label class="form-label">Units<span class="text-danger ms-1">*</span></label>\n                                  <mat-select class="custom-mat-select select" placeholder="Select">\n                                      <mat-option value="1">Select</mat-option>\n                                      <mat-option value="1">Kilograms (Kg)</mat-option>\n                                      <mat-option value="1">Gram (g)</mat-option>\n                                      <mat-option value="1">Liter (l)</mat-option>\n                                      <mat-option value="1">Millimetre (mm)</mat-option>\n                                      <mat-option value="1">Milliliter (ml)</mat-option>\n                                      <mat-option value="1">Pack (pk)</mat-option>\n                                      <mat-option value="1">Piece (pc)</mat-option>\n                                  </mat-select>\n                              </div>\n                          </div>\n                          <div class="col-lg-4 col-md-6">\n                              <div class="mb-3">\n                                  <label class="form-label">Discount Type<span class="text-danger ms-1">*</span></label>\n                                  <mat-select class="custom-mat-select select" placeholder="Select">\n                                      <mat-option value="1">Select</mat-option>\n                                      <mat-option value="1">%</mat-option>\n                                      <mat-option value="1">Fixed</mat-option>\n                                  </mat-select>\n                              </div>\n                          </div>\n                          <div class="col-lg-4 col-md-6">\n                              <div class="mb-3">\n                                  <label class="form-label">Barcode<span class="text-danger ms-1">*</span></label>\n                                  <div class="position-relative">\n                                      <input type="text" class="form-control">\n                                      <a href="javascript:void(0);" class="btn btn-sm btn-dark position-absolute end-0 top-0 bottom-0 mx-2 my-1 d-inline-flex align-items-center">Generate</a>\n                                  </div>\n                              </div>\n                          </div>\n                          <div class="col-lg-4 col-md-6">\n                              <div class="mb-3">\n                                  <label class="form-label">Alert Quantity<span class="text-danger ms-1">*</span></label>\n                                  <input type="text" class="form-control">\n                              </div>\n                          </div>\n                          <div class="col-lg-4 col-md-6">\n                              <div class="mb-3">\n                                  <label class="form-label">Tax<span class="text-danger ms-1">*</span></label>\n                                  <mat-select class="custom-mat-select select" placeholder="Select">\n                                      <mat-option value="1">Select</mat-option>\n                                      <mat-option value="1">VAT (10%)</mat-option>\n                                      <mat-option value="1">CGST (08%)</mat-option>\n                                      <mat-option value="1">SGST (10%)</mat-option>\n                                  </mat-select>\n                              </div>\n                          </div>\n                          <div class="col-lg-12">\n                              <div class="mb-3">\n                                  <label class="form-label">Product Description</label>\n                                  <ngx-editor [editor]="editor">\n                                    <ngx-editor-menu [editor]="editor" [toolbar]="toolbar" >\n                                    </ngx-editor-menu>\n                                 </ngx-editor>\n                              </div>\n                          </div>\n                          <div class="col-lg-12">\n                              <div class="mb-3 pb-3 border-bottom">\n                                  <label class="form-label">Gallery Images</label>\n                                  <div class="file-upload drag-file w-100 d-flex align-items-center justify-content-center flex-column">\n                                      <span class="upload-img d-block mb-2"><i class="isax isax-image text-primary"></i></span>\n                                      <p class="mb-0 text-gray-9 fw-semibold">Drop Your Files or <a href="javascript:void(0);" class="text-primary text-decoration-underline">\n              Browse</a></p>\n                                      <input type="file" accept="video/image">\n                                      <p class="fs-13">Max Upload Size 800x800px. PNG / JPEG file, Maximum Upload size 5MB</p>\n                                  </div>\n                              </div>\n                          </div>\n                      </div>\n                      <div class="d-flex align-items-center justify-content-between">\n                          <button type="button" class="btn btn-outline-white">Cancel</button>\n                          <button type="submit" class="btn btn-primary">Create New</button>\n                      </div>\n                  </form>\n              </div><!-- End card body -->\n          </div><!-- End card -->\n      </div>\n  </div><!-- End col -->\n</div>\n<!-- End row -->';
  }
});

// angular:jit:style:src/app/features/invantory-sales/products-service/add-products/add-products.component.scss
var add_products_component_default2;
var init_add_products_component2 = __esm({
  "angular:jit:style:src/app/features/invantory-sales/products-service/add-products/add-products.component.scss"() {
    add_products_component_default2 = "/* src/app/features/invantory-sales/products-service/add-products/add-products.component.scss */\n/*# sourceMappingURL=add-products.component.css.map */\n";
  }
});

// src/app/features/invantory-sales/products-service/add-products/doc.ts
var doc_default;
var init_doc = __esm({
  "src/app/features/invantory-sales/products-service/add-products/doc.ts"() {
    "use strict";
    doc_default = {
      type: "doc",
      content: [
        //   {
        //     type: "heading",
        //     attrs: {
        //       level: 1,
        //       align: null
        //     },
        //     content: [
        //       {
        //         type: "text",
        //         text: "Hello"
        //       }
        //     ]
        //   },
        //   {
        //     type: "paragraph",
        //     attrs: {
        //       align: null
        //     },
        //     content: [
        //       {
        //         type: "text",
        //         text: "This is editable text. "
        //       },
        //       {
        //         type: "text",
        //         marks: [
        //           {
        //             type: "text_color",
        //             attrs: {
        //               color: "#d93f0b"
        //             }
        //           }
        //         ],
        //         text: "You can focus it and start typing"
        //       },
        //       {
        //         type: "text",
        //         text: "."
        //       }
        //     ]
        //   },
        //   {
        //     type: "paragraph",
        //     attrs: {
        //       align: null
        //     },
        //     content: [
        //       {
        //         type: "text",
        //         marks: [
        //           {
        //             type: "code"
        //           }
        //         ],
        //         text: "code block"
        //       }
        //     ]
        //   },
        //   {
        //     type: "blockquote",
        //     content: [
        //       {
        //         type: "paragraph",
        //         attrs: {
        //           align: null
        //         },
        //         content: [
        //           {
        //             type: "text",
        //             marks: [
        //               {
        //                 type: "strong"
        //               }
        //             ],
        //             text: "Lorem Ipsum"
        //           },
        //           {
        //             type: "text",
        //             text: "is "
        //           },
        //           {
        //             type: "text",
        //             marks: [
        //               {
        //                 type: "text_background_color",
        //                 attrs: {
        //                   backgroundColor: "#fbca04"
        //                 }
        //               }
        //             ],
        //             text: "simply dummy"
        //           },
        //           {
        //             type: "text",
        //             text: " text of the printing and typesetting industry. "
        //           },
        //           {
        //             type: "text",
        //             marks: [
        //               {
        //                 type: "em"
        //               }
        //             ],
        //             text:
        //               "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
        //           },
        //           {
        //             type: "text",
        //             text:
        //               ", when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        //           }
        //         ]
        //       }
        //     ]
        //   },
        //   {
        //     type: "heading",
        //     attrs: {
        //       level: 2,
        //       align: null
        //     },
        //     content: [
        //       {
        //         type: "text",
        //         text: "The code block is a code editor"
        //       }
        //     ]
        //   },
        //   {
        //     type: "paragraph",
        //     attrs: {
        //       align: null
        //     },
        //     content: [
        //       {
        //         type: "text",
        //         text:
        //           "This editor has been wired up to render code blocks as instances of the "
        //       },
        //       {
        //         type: "text",
        //         marks: [
        //           {
        //             type: "link",
        //             attrs: {
        //               href: "https://codemirror.net",
        //               title: "https://codemirror.net",
        //               target: "_blank"
        //             }
        //           }
        //         ],
        //         text: "CodeMirror"
        //       },
        //       {
        //         type: "text",
        //         text: " code editor, which provides "
        //       },
        //       {
        //         type: "text",
        //         marks: [
        //           {
        //             type: "link",
        //             attrs: {
        //               href: "https://en.wikipedia.org",
        //               title: "",
        //               target: "_blank"
        //             }
        //           }
        //         ],
        //         text: "syntax highlighting"
        //       },
        //       {
        //         type: "text",
        //         text: ", auto-indentation, and similar."
        //       }
        //     ]
        //   },
        //   {
        //     type: "code_block",
        //     content: [
        //       {
        //         type: "text",
        //         text: "function max(a, b) {\n  return a > b ? a : b\n}"
        //       }
        //     ]
        //   },
        //   {
        //     type: "paragraph",
        //     attrs: {
        //       align: null
        //     },
        //     content: [
        //       {
        //         type: "text",
        //         text:
        //           "The content of the code editor is kept in sync with the content of the code block in the rich text editor, so that it is as if you're directly editing the outer document, using a more convenient interface."
        //       }
        //     ]
        //   },
        //   {
        //     type: "heading",
        //     attrs: {
        //       level: 4,
        //       align: "center"
        //     },
        //     content: [
        //       {
        //         type: "text",
        //         text: "Mr. Bean"
        //       }
        //     ]
        //   },
        //   {
        //     type: "paragraph",
        //     attrs: {
        //       align: "center"
        //     },
        //     content: [
        //       {
        //         type: "text",
        //         text: "The image is resizable. Include "
        //       },
        //       {
        //         type: "text",
        //         marks: [
        //           {
        //             type: "strong"
        //           }
        //         ],
        //         text: "image"
        //       },
        //       {
        //         type: "text",
        //         text: " plugin to enable image resizing"
        //       }
        //     ]
        //   },
        //   {
        //     type: "heading",
        //     attrs: {
        //       level: 3,
        //       align: "center"
        //     },
        //     content: [
        //       {
        //         type: "image",
        //         attrs: {
        //           src: "https://wallpapercave.com/wp/wp2318909.png",
        //           alt: "Bean",
        //           title: "Mr. Bean",
        //           width: "98px"
        //         }
        //       }
        //     ]
        //   },
        //   {
        //     type: "heading",
        //     attrs: {
        //       level: 3,
        //       align: null
        //     },
        //     content: [
        //       {
        //         type: "text",
        //         text: "Bullet list"
        //       }
        //     ]
        //   },
        //   {
        //     type: "bullet_list",
        //     content: [
        //       {
        //         type: "list_item",
        //         content: [
        //           {
        //             type: "paragraph",
        //             attrs: {
        //               align: null
        //             },
        //             content: [
        //               {
        //                 type: "text",
        //                 marks: [
        //                   {
        //                     type: "strong"
        //                   }
        //                 ],
        //                 text: "Lorem Ipsum"
        //               },
        //               {
        //                 type: "text",
        //                 text:
        //                   "is simply dummy text of the printing and typesetting industry"
        //               }
        //             ]
        //           },
        //           {
        //             type: "bullet_list",
        //             content: [
        //               {
        //                 type: "list_item",
        //                 content: [
        //                   {
        //                     type: "paragraph",
        //                     attrs: {
        //                       align: null
        //                     },
        //                     content: [
        //                       {
        //                         type: "text",
        //                         text: "("
        //                       },
        //                       {
        //                         type: "text",
        //                         marks: [
        //                           {
        //                             type: "strong"
        //                           }
        //                         ],
        //                         text: "depth 1"
        //                       },
        //                       {
        //                         type: "text",
        //                         text:
        //                           ") It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."
        //                       }
        //                     ]
        //                   },
        //                   {
        //                     type: "bullet_list",
        //                     content: [
        //                       {
        //                         type: "list_item",
        //                         content: [
        //                           {
        //                             type: "paragraph",
        //                             attrs: {
        //                               align: null
        //                             },
        //                             content: [
        //                               {
        //                                 type: "text",
        //                                 text: "("
        //                               },
        //                               {
        //                                 type: "text",
        //                                 marks: [
        //                                   {
        //                                     type: "strong"
        //                                   }
        //                                 ],
        //                                 text: "depth 2"
        //                               },
        //                               {
        //                                 type: "text",
        //                                 text:
        //                                   ") The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested."
        //                               }
        //                             ]
        //                           }
        //                         ]
        //                       }
        //                     ]
        //                   }
        //                 ]
        //               }
        //             ]
        //           }
        //         ]
        //       },
        //       {
        //         type: "list_item",
        //         content: [
        //           {
        //             type: "paragraph",
        //             attrs: {
        //               align: null
        //             },
        //             content: [
        //               {
        //                 type: "text",
        //                 text:
        //                   "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable"
        //               }
        //             ]
        //           }
        //         ]
        //       },
        //       {
        //         type: "list_item",
        //         content: [
        //           {
        //             type: "paragraph",
        //             attrs: {
        //               align: null
        //             },
        //             content: [
        //               {
        //                 type: "text",
        //                 text:
        //                   "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old."
        //               }
        //             ]
        //           }
        //         ]
        //       }
        //     ]
        //   },
        //   {
        //     type: "heading",
        //     attrs: {
        //       level: 4,
        //       align: null
        //     },
        //     content: [
        //       {
        //         type: "text",
        //         text: "Ordered List"
        //       }
        //     ]
        //   },
        //   {
        //     type: "ordered_list",
        //     attrs: {
        //       order: 1
        //     },
        //     content: [
        //       {
        //         type: "list_item",
        //         content: [
        //           {
        //             type: "paragraph",
        //             attrs: {
        //               align: null
        //             },
        //             content: [
        //               {
        //                 type: "text",
        //                 marks: [
        //                   {
        //                     type: "strong"
        //                   }
        //                 ],
        //                 text: "Lorem Ipsum"
        //               },
        //               {
        //                 type: "text",
        //                 text:
        //                   "is simply dummy text of the printing and typesetting industry"
        //               }
        //             ]
        //           }
        //         ]
        //       },
        //       {
        //         type: "list_item",
        //         content: [
        //           {
        //             type: "paragraph",
        //             attrs: {
        //               align: null
        //             },
        //             content: [
        //               {
        //                 type: "text",
        //                 text:
        //                   "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable"
        //               }
        //             ]
        //           },
        //           {
        //             type: "ordered_list",
        //             attrs: {
        //               order: 1
        //             },
        //             content: [
        //               {
        //                 type: "list_item",
        //                 content: [
        //                   {
        //                     type: "paragraph",
        //                     attrs: {
        //                       align: null
        //                     },
        //                     content: [
        //                       {
        //                         type: "text",
        //                         text: "("
        //                       },
        //                       {
        //                         type: "text",
        //                         marks: [
        //                           {
        //                             type: "strong"
        //                           }
        //                         ],
        //                         text: "depth 1"
        //                       },
        //                       {
        //                         type: "text",
        //                         text:
        //                           ") It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."
        //                       }
        //                     ]
        //                   },
        //                   {
        //                     type: "ordered_list",
        //                     attrs: {
        //                       order: 1
        //                     },
        //                     content: [
        //                       {
        //                         type: "list_item",
        //                         content: [
        //                           {
        //                             type: "paragraph",
        //                             attrs: {
        //                               align: null
        //                             },
        //                             content: [
        //                               {
        //                                 type: "text",
        //                                 text: "("
        //                               },
        //                               {
        //                                 type: "text",
        //                                 marks: [
        //                                   {
        //                                     type: "strong"
        //                                   }
        //                                 ],
        //                                 text: "depth 2"
        //                               },
        //                               {
        //                                 type: "text",
        //                                 text:
        //                                   ") The chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested."
        //                               }
        //                             ]
        //                           }
        //                         ]
        //                       }
        //                     ]
        //                   }
        //                 ]
        //               }
        //             ]
        //           }
        //         ]
        //       },
        //       {
        //         type: "list_item",
        //         content: [
        //           {
        //             type: "paragraph",
        //             attrs: {
        //               align: null
        //             },
        //             content: [
        //               {
        //                 type: "text",
        //                 text:
        //                   "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old."
        //               }
        //             ]
        //           }
        //         ]
        //       }
        //     ]
        //   }
      ]
    };
  }
});

// src/app/features/invantory-sales/products-service/add-products/add-products.component.ts
var AddProductsComponent;
var init_add_products_component3 = __esm({
  "src/app/features/invantory-sales/products-service/add-products/add-products.component.ts"() {
    "use strict";
    init_tslib_es6();
    init_add_products_component();
    init_add_products_component2();
    init_core();
    init_forms();
    init_ngx_editor();
    init_core_index();
    init_doc();
    init_select();
    init_router();
    init_slider();
    init_ngx_bootstrap_datepicker();
    AddProductsComponent = class AddProductsComponent2 {
      editordoc = doc_default;
      files = [];
      routes = routes;
      nation = "units";
      Discount = "select Discount";
      Tax = "tax";
      config = {
        editable: true,
        spellcheck: true,
        sanitize: false,
        height: "15rem",
        minHeight: "5rem",
        placeholder: "Enter text here...",
        translate: "no",
        defaultParagraphSeparator: "p",
        defaultFontName: "Arial",
        toolbarHiddenButtons: [["bold"]],
        customClasses: [
          {
            name: "quote",
            class: "quote"
          },
          {
            name: "redText",
            class: "redText"
          },
          {
            name: "titleText",
            class: "titleText",
            tag: "h1"
          }
        ]
      };
      onSelect(event) {
        this.files.push(...event.addedFiles);
      }
      onRemove(event) {
        this.files.splice(this.files.indexOf(event), 1);
      }
      editor;
      toolbar = [
        ["bold", "italic"],
        ["underline", "strike"],
        ["code", "blockquote"],
        [{ heading: ["h1", "h2", "h3", "h4", "h5", "h6"] }],
        ["link", "image"],
        ["text_color", "background_color"],
        ["align_left", "align_center", "align_right", "align_justify"]
      ];
      form = new FormGroup({
        editorContent: new FormControl({ value: doc_default, disabled: false }, Validators.required())
      });
      ngOnDestroy() {
        this.editor.destroy();
      }
      ngOnInit() {
        this.editor = new Editor();
      }
    };
    AddProductsComponent = __decorate([
      Component({
        selector: "app-add-products",
        template: add_products_component_default,
        imports: [NgxEditorModule, MatSelectModule, RouterLink, MatSliderModule, BsDatepickerModule],
        styles: [add_products_component_default2]
      })
    ], AddProductsComponent);
  }
});

// src/app/features/invantory-sales/products-service/add-products/add-products.component.spec.ts
var require_add_products_component_spec = __commonJS({
  "src/app/features/invantory-sales/products-service/add-products/add-products.component.spec.ts"(exports) {
    init_testing();
    init_add_products_component3();
    describe("AddProductsComponent", () => {
      let component;
      let fixture;
      beforeEach(() => __async(null, null, function* () {
        yield TestBed.configureTestingModule({
          declarations: [AddProductsComponent]
        }).compileComponents();
        fixture = TestBed.createComponent(AddProductsComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
      }));
      it("should create", () => {
        expect(component).toBeTruthy();
      });
    });
  }
});
export default require_add_products_component_spec();
//# sourceMappingURL=spec-app-features-invantory-sales-products-service-add-products-add-products.component.spec.js.map

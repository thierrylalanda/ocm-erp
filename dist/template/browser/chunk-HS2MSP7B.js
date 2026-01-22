import {
  Editor,
  MenuComponent,
  NgxEditorComponent,
  NgxEditorModule
} from "./chunk-T6JEQ3C5.js";
import {
  MatOption,
  MatSelect,
  MatSelectModule
} from "./chunk-MUITGCTV.js";
import "./chunk-O6CHOV5Y.js";
import "./chunk-OMNMTJX2.js";
import "./chunk-2GQT47Z7.js";
import "./chunk-OSDWQYYA.js";
import "./chunk-4CMXULEF.js";
import "./chunk-HQMPBCJK.js";
import "./chunk-Y23EXZTF.js";
import "./chunk-WLTG2KP6.js";
import "./chunk-ZTQFL2WC.js";
import "./chunk-OWHJPR44.js";
import "./chunk-5PLILXVY.js";
import "./chunk-MDKDGAXP.js";
import "./chunk-YWH7SLE3.js";
import "./chunk-EXNS3HGN.js";
import "./chunk-NAWYXTZ5.js";
import {
  routes
} from "./chunk-YJY3UYMJ.js";
import "./chunk-AWXYRVJS.js";
import {
  RouterLink
} from "./chunk-WOBWH5QA.js";
import "./chunk-KYBWVUSB.js";
import "./chunk-ZCJVS2AD.js";
import {
  CommonModule,
  NgClass
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
  ɵɵlistener,
  ɵɵproperty,
  ɵɵpureFunction1,
  ɵɵtext
} from "./chunk-HKG6HBOI.js";
import "./chunk-TXDUYLVM.js";

// src/app/features/invantory-sales/products-service/edit-products/edit-products.component.ts
var _c0 = (a0) => ({ "d-none": a0 });
var EditProductsComponent = class _EditProductsComponent {
  routes = routes;
  files = [];
  Units = "select units";
  Discount = "select discount";
  Tax = "select tax";
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
  onSelect(event) {
    this.files.push(...event.addedFiles);
  }
  onRemove(event) {
    this.files.splice(this.files.indexOf(event), 1);
  }
  trash = [true];
  remove(index) {
    this.trash[index] = !this.trash[index];
  }
  ngOnDestroy() {
    this.editor.destroy();
  }
  ngOnInit() {
    this.editor = new Editor();
  }
  static \u0275fac = function EditProductsComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _EditProductsComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _EditProductsComponent, selectors: [["app-edit-products"]], decls: 215, vars: 13, consts: [[1, "row"], [1, "col-md-10", "mx-auto"], [1, "d-flex", "align-items-center", "justify-content-between", "mb-3"], [3, "routerLink"], [1, "isax", "isax-arrow-left", "me-2"], ["href", "javascript:void(0);", 1, "btn", "btn-outline-white", "d-inline-flex", "align-items-center"], [1, "isax", "isax-eye", "me-1"], [1, "card"], [1, "card-body"], [1, "mb-3"], [1, "text-gray-9", "fw-bold", "mb-2", "d-flex"], [1, "text-danger", "ms-1"], [1, "d-flex", "align-items-center"], [1, "avatar", "avatar-xxl", "border", "border-dashed", "bg-light", "me-3", "flex-shrink-0"], [1, "position-relative", "d-flex", "align-items-center"], ["src", "assets/img/products/product-05.jpg", "alt", "", 1, "avatar", "avatar-xl"], ["href", "javascript:void(0);", 1, "rounded-trash", "trash-top", "d-flex", "align-items-center", "justify-content-center"], [1, "isax", "isax-trash"], [1, "d-inline-flex", "flex-column", "align-items-start"], [1, "drag-upload-btn", "btn", "btn-sm", "btn-primary", "position-relative", "mb-2"], [1, "isax", "isax-image", "me-1"], ["type", "file", "multiple", "", 1, "form-control", "image-sign"], [1, "text-gray-9", "fs-12"], [1, "form-label"], [1, "text-danger"], [1, "d-flex", "align-items-center", "mb-3"], [1, "form-check", "me-3"], ["type", "radio", "name", "Radio", "id", "Radio-sm-1", "checked", "", 1, "form-check-input"], ["for", "Radio-sm-1", 1, "form-check-label"], [1, "form-check"], ["type", "radio", "name", "Radio", "id", "Radio-sm-2", 1, "form-check-input"], ["for", "Radio-sm-2", 1, "form-check-label"], [1, "row", "gx-3"], [1, "col-lg-4", "col-md-6"], ["type", "text", "value", "Adidas Ultraboost 22 Running Shoe", 1, "form-control"], [1, "position-relative"], ["type", "text", "value", "PR345466", 1, "form-control"], ["href", "javascript:void(0);", 1, "btn", "btn-sm", "btn-dark", "position-absolute", "end-0", "top-0", "bottom-0", "mx-2", "my-1", "d-inline-flex", "align-items-center"], ["placeholder", "Footwear", 1, "custom-mat-select", "select"], ["value", "1"], ["type", "text", "value", "99", 1, "form-control"], ["type", "text", "value", "108", 1, "form-control"], ["type", "text", "value", "98", 1, "form-control"], ["placeholder", "Piece (pc)", 1, "custom-mat-select", "select"], ["placeholder", "%", 1, "custom-mat-select", "select"], ["type", "text", "value", "0129-4597", 1, "form-control"], ["type", "text", "value", "100", 1, "form-control"], ["placeholder", "VAT (10%)", 1, "custom-mat-select", "select"], [1, "col-lg-12"], [3, "editor"], [3, "editor", "toolbar"], [1, "mb-3", "pb-3", "border-bottom"], [1, "file-upload", "drag-file", "w-100", "d-flex", "align-items-center", "justify-content-center", "flex-column", "mb-3"], [1, "upload-img", "d-block", "mb-2"], [1, "isax", "isax-image", "text-primary"], [1, "mb-0", "text-gray-9", "fw-semibold"], ["href", "javascript:void(0);", 1, "text-primary", "text-decoration-underline"], ["type", "file", "accept", "video/image"], [1, "fs-13"], [1, "d-flex", "align-items-center", "gap-3"], [1, "avatar", "avatar-xl", "border", "gallery-img", "p-1", 3, "ngClass"], ["src", "assets/img/products/product-10.jpg", "alt", ""], ["href", "javascript:void(0);", 1, "rounded-trash", "gallery-trash", "d-flex", "align-items-center", "justify-content-center", 3, "click"], ["src", "assets/img/products/product-11.jpg", "alt", ""], ["src", "assets/img/products/product-12.jpg", "alt", ""], [1, "d-flex", "align-items-center", "justify-content-between"], ["type", "button", 1, "btn", "btn-outline-white"], ["type", "submit", 1, "btn", "btn-primary"]], template: function EditProductsComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div")(3, "div", 2)(4, "h6")(5, "a", 3);
      \u0275\u0275element(6, "i", 4);
      \u0275\u0275text(7, "Products");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(8, "a", 5);
      \u0275\u0275element(9, "i", 6);
      \u0275\u0275text(10, "Preview");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(11, "div", 7)(12, "div", 8)(13, "h6", 9);
      \u0275\u0275text(14, "Basic Details");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(15, "form")(16, "div", 9)(17, "span", 10);
      \u0275\u0275text(18, "Project Image");
      \u0275\u0275elementStart(19, "span", 11);
      \u0275\u0275text(20, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(21, "div", 12)(22, "div", 13)(23, "div", 14);
      \u0275\u0275element(24, "img", 15);
      \u0275\u0275elementStart(25, "a", 16);
      \u0275\u0275element(26, "i", 17);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(27, "div", 18)(28, "div", 19);
      \u0275\u0275element(29, "i", 20);
      \u0275\u0275text(30, "Upload Image ");
      \u0275\u0275element(31, "input", 21);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(32, "span", 22);
      \u0275\u0275text(33, "JPG or PNG format, not exceeding 5MB.");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(34, "label", 23);
      \u0275\u0275text(35, "Item Type ");
      \u0275\u0275elementStart(36, "span", 24);
      \u0275\u0275text(37, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(38, "div", 25)(39, "div", 26);
      \u0275\u0275element(40, "input", 27);
      \u0275\u0275elementStart(41, "label", 28);
      \u0275\u0275text(42, " Product ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(43, "div", 29);
      \u0275\u0275element(44, "input", 30);
      \u0275\u0275elementStart(45, "label", 31);
      \u0275\u0275text(46, " Service ");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(47, "div", 32)(48, "div", 33)(49, "div", 9)(50, "label", 23);
      \u0275\u0275text(51, "Name ");
      \u0275\u0275elementStart(52, "span", 24);
      \u0275\u0275text(53, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(54, "input", 34);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(55, "div", 33)(56, "div", 9)(57, "label", 23);
      \u0275\u0275text(58, "Code ");
      \u0275\u0275elementStart(59, "span", 24);
      \u0275\u0275text(60, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(61, "div", 35);
      \u0275\u0275element(62, "input", 36);
      \u0275\u0275elementStart(63, "a", 37);
      \u0275\u0275text(64, "Generate");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(65, "div", 33)(66, "div", 9)(67, "label", 23);
      \u0275\u0275text(68, "Category ");
      \u0275\u0275elementStart(69, "span", 24);
      \u0275\u0275text(70, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(71, "mat-select", 38)(72, "mat-option", 39);
      \u0275\u0275text(73, "Select");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(74, "mat-option", 39);
      \u0275\u0275text(75, "Smartphones");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(76, "mat-option", 39);
      \u0275\u0275text(77, "Laptops");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(78, "mat-option", 39);
      \u0275\u0275text(79, "Headphones");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(80, "mat-option", 39);
      \u0275\u0275text(81, "Computer Service");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(82, "mat-option", 39);
      \u0275\u0275text(83, "Footwear");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(84, "mat-option", 39);
      \u0275\u0275text(85, "Kitchen");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(86, "mat-option", 39);
      \u0275\u0275text(87, "Cleaning");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(88, "div", 33)(89, "div", 9)(90, "label", 23);
      \u0275\u0275text(91, "Selling Price ($) ");
      \u0275\u0275elementStart(92, "span", 24);
      \u0275\u0275text(93, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(94, "input", 40);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(95, "div", 33)(96, "div", 9)(97, "label", 23);
      \u0275\u0275text(98, "Purchase Price ($) ");
      \u0275\u0275elementStart(99, "span", 24);
      \u0275\u0275text(100, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(101, "input", 41);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(102, "div", 33)(103, "div", 9)(104, "label", 23);
      \u0275\u0275text(105, "Quantity ");
      \u0275\u0275elementStart(106, "span", 24);
      \u0275\u0275text(107, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(108, "input", 42);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(109, "div", 33)(110, "div", 9)(111, "label", 23);
      \u0275\u0275text(112, "Units ");
      \u0275\u0275elementStart(113, "span", 24);
      \u0275\u0275text(114, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(115, "mat-select", 43)(116, "mat-option", 39);
      \u0275\u0275text(117, "Select");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(118, "mat-option", 39);
      \u0275\u0275text(119, "Kilograms (Kg)");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(120, "mat-option", 39);
      \u0275\u0275text(121, "Gram (g)");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(122, "mat-option", 39);
      \u0275\u0275text(123, "Liter (l)");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(124, "mat-option", 39);
      \u0275\u0275text(125, "Millimetre (mm)");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(126, "mat-option", 39);
      \u0275\u0275text(127, "Milliliter (ml)");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(128, "mat-option", 39);
      \u0275\u0275text(129, "Pack (pk)");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(130, "mat-option", 39);
      \u0275\u0275text(131, "Piece (pc)");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(132, "div", 33)(133, "div", 9)(134, "label", 23);
      \u0275\u0275text(135, "Discount Type ");
      \u0275\u0275elementStart(136, "span", 24);
      \u0275\u0275text(137, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(138, "mat-select", 44)(139, "mat-option", 39);
      \u0275\u0275text(140, "Select");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(141, "mat-option", 39);
      \u0275\u0275text(142, "%");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(143, "mat-option", 39);
      \u0275\u0275text(144, "Fixed");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(145, "div", 33)(146, "div", 9)(147, "label", 23);
      \u0275\u0275text(148, "Barcode ");
      \u0275\u0275elementStart(149, "span", 24);
      \u0275\u0275text(150, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(151, "div", 35);
      \u0275\u0275element(152, "input", 45);
      \u0275\u0275elementStart(153, "a", 37);
      \u0275\u0275text(154, "Generate");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(155, "div", 33)(156, "div", 9)(157, "label", 23);
      \u0275\u0275text(158, "Alert Quantity ");
      \u0275\u0275elementStart(159, "span", 24);
      \u0275\u0275text(160, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(161, "input", 46);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(162, "div", 33)(163, "div", 9)(164, "label", 23);
      \u0275\u0275text(165, "Tax ");
      \u0275\u0275elementStart(166, "span", 24);
      \u0275\u0275text(167, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(168, "mat-select", 47)(169, "mat-option", 39);
      \u0275\u0275text(170, "Select");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(171, "mat-option", 39);
      \u0275\u0275text(172, "VAT (10%)");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(173, "mat-option", 39);
      \u0275\u0275text(174, "CGST (08%)");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(175, "mat-option", 39);
      \u0275\u0275text(176, "SGST (10%)");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(177, "div", 48)(178, "div", 9)(179, "label", 23);
      \u0275\u0275text(180, "Product Description");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(181, "ngx-editor", 49);
      \u0275\u0275element(182, "ngx-editor-menu", 50);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(183, "div", 48)(184, "div", 51)(185, "label", 23);
      \u0275\u0275text(186, "Gallery Images");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(187, "div", 52)(188, "span", 53);
      \u0275\u0275element(189, "i", 54);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(190, "p", 55);
      \u0275\u0275text(191, "Drop Your Files or ");
      \u0275\u0275elementStart(192, "a", 56);
      \u0275\u0275text(193, " Browse");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(194, "input", 57);
      \u0275\u0275elementStart(195, "p", 58);
      \u0275\u0275text(196, "Max Upload Size 800x800px. PNG / JPEG file, Maximum Upload size 5MB");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(197, "div", 59)(198, "div", 60);
      \u0275\u0275element(199, "img", 61);
      \u0275\u0275elementStart(200, "a", 62);
      \u0275\u0275listener("click", function EditProductsComponent_Template_a_click_200_listener() {
        return ctx.remove(3);
      });
      \u0275\u0275element(201, "i", 17);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(202, "div", 60);
      \u0275\u0275element(203, "img", 63);
      \u0275\u0275elementStart(204, "a", 62);
      \u0275\u0275listener("click", function EditProductsComponent_Template_a_click_204_listener() {
        return ctx.remove(1);
      });
      \u0275\u0275element(205, "i", 17);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(206, "div", 60);
      \u0275\u0275element(207, "img", 64);
      \u0275\u0275elementStart(208, "a", 62);
      \u0275\u0275listener("click", function EditProductsComponent_Template_a_click_208_listener() {
        return ctx.remove(2);
      });
      \u0275\u0275element(209, "i", 17);
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(210, "div", 65)(211, "button", 66);
      \u0275\u0275text(212, "Cancel");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(213, "button", 67);
      \u0275\u0275text(214, "Save Changes");
      \u0275\u0275elementEnd()()()()()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(5);
      \u0275\u0275property("routerLink", ctx.routes.productlist);
      \u0275\u0275advance(176);
      \u0275\u0275property("editor", ctx.editor);
      \u0275\u0275advance();
      \u0275\u0275property("editor", ctx.editor)("toolbar", ctx.toolbar);
      \u0275\u0275advance(16);
      \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(7, _c0, ctx.trash[3]));
      \u0275\u0275advance(4);
      \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(9, _c0, ctx.trash[1]));
      \u0275\u0275advance(4);
      \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(11, _c0, ctx.trash[2]));
    }
  }, dependencies: [CommonModule, NgClass, NgxEditorModule, NgxEditorComponent, MenuComponent, MatSelectModule, MatSelect, MatOption, RouterLink], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(EditProductsComponent, [{
    type: Component,
    args: [{ selector: "app-edit-products", imports: [CommonModule, NgxEditorModule, MatSelectModule, RouterLink], template: `<!-- Start Row -->
<div class="row">
  <div class="col-md-10 mx-auto">
    <div>
      <div class="d-flex align-items-center justify-content-between mb-3">
        <h6><a [routerLink]="routes.productlist"><i class="isax isax-arrow-left me-2"></i>Products</a></h6>
        <a href="javascript:void(0);" class="btn btn-outline-white d-inline-flex align-items-center"><i class="isax isax-eye me-1"></i>Preview</a>
      </div>
      <div class="card">
        <div class="card-body">
          <h6 class="mb-3">Basic Details</h6>
          <form>
            <div class="mb-3">
              <span class="text-gray-9 fw-bold mb-2 d-flex">Project Image<span class="text-danger ms-1">*</span></span>
              <div class="d-flex align-items-center">
                <div class="avatar avatar-xxl border border-dashed bg-light me-3 flex-shrink-0">
                  <div class="position-relative d-flex align-items-center">
                    <img src="assets/img/products/product-05.jpg" class="avatar avatar-xl " alt="">
                    <a href="javascript:void(0);" class="rounded-trash trash-top d-flex align-items-center justify-content-center"><i class="isax isax-trash"></i></a>
                  </div>
                </div>
                <div class="d-inline-flex flex-column align-items-start">
                  <div class="drag-upload-btn btn btn-sm btn-primary position-relative mb-2">
                    <i class="isax isax-image me-1"></i>Upload Image
                    <input type="file" class="form-control image-sign" multiple="">
                  </div>
                  <span class="text-gray-9 fs-12">JPG or PNG format, not exceeding 5MB.</span>
                </div>
              </div>
            </div>
            <label class="form-label">Item Type <span class="text-danger">*</span></label>
            <div class="d-flex align-items-center mb-3">
              <div class="form-check me-3">
                <input class="form-check-input" type="radio" name="Radio" id="Radio-sm-1" checked>
                <label class="form-check-label" for="Radio-sm-1">
                  Product
                </label>
              </div>
              <div class="form-check">
                <input class="form-check-input" type="radio" name="Radio" id="Radio-sm-2">
                <label class="form-check-label" for="Radio-sm-2">
                  Service
                </label>
              </div>
            </div>
            <div class="row gx-3">
              <div class="col-lg-4 col-md-6">
                <div class="mb-3">
                  <label class="form-label">Name <span class="text-danger">*</span></label>
                  <input type="text" class="form-control" value="Adidas Ultraboost 22 Running Shoe">
                </div>
              </div>
              <div class="col-lg-4 col-md-6">
                <div class="mb-3">
                  <label class="form-label">Code <span class="text-danger">*</span></label>
                  <div class="position-relative">
                    <input type="text" class="form-control" value="PR345466">
                    <a href="javascript:void(0);" class="btn btn-sm btn-dark position-absolute end-0 top-0 bottom-0 mx-2 my-1 d-inline-flex align-items-center">Generate</a>
                  </div>
                </div>
              </div>
              <div class="col-lg-4 col-md-6">
                <div class="mb-3">
                  <label class="form-label">Category <span class="text-danger">*</span></label>
                  <mat-select class="custom-mat-select select" placeholder="Footwear">
                    <mat-option value="1">Select</mat-option>
                    <mat-option value="1">Smartphones</mat-option>
                    <mat-option value="1">Laptops</mat-option>
                    <mat-option value="1">Headphones</mat-option>
                    <mat-option value="1">Computer Service</mat-option>
                    <mat-option value="1">Footwear</mat-option>
                    <mat-option value="1">Kitchen</mat-option>
                    <mat-option value="1">Cleaning</mat-option>
                  </mat-select>
                </div>
              </div>
              <div class="col-lg-4 col-md-6">
                <div class="mb-3">
                  <label class="form-label">Selling Price ($) <span class="text-danger">*</span></label>
                  <input type="text" class="form-control" value="99">
                </div>
              </div>
              <div class="col-lg-4 col-md-6">
                <div class="mb-3">
                  <label class="form-label">Purchase Price ($) <span class="text-danger">*</span></label>
                  <input type="text" class="form-control" value="108">
                </div>
              </div>
              <div class="col-lg-4 col-md-6">
                <div class="mb-3">
                  <label class="form-label">Quantity <span class="text-danger">*</span></label>
                  <input type="text" class="form-control" value="98">
                </div>
              </div>
              <div class="col-lg-4 col-md-6">
                <div class="mb-3">
                  <label class="form-label">Units <span class="text-danger">*</span></label>
                  <mat-select class="custom-mat-select select" placeholder="Piece (pc)">
                    <mat-option value="1">Select</mat-option>
                    <mat-option value="1">Kilograms (Kg)</mat-option>
                    <mat-option value="1">Gram (g)</mat-option>
                    <mat-option value="1">Liter (l)</mat-option>
                    <mat-option value="1">Millimetre (mm)</mat-option>
                    <mat-option value="1">Milliliter (ml)</mat-option>
                    <mat-option value="1">Pack (pk)</mat-option>
                    <mat-option value="1">Piece (pc)</mat-option>
                  </mat-select>
                </div>
              </div>
              <div class="col-lg-4 col-md-6">
                <div class="mb-3">
                  <label class="form-label">Discount Type <span class="text-danger">*</span></label>
                  <mat-select class="custom-mat-select select" placeholder="%">
                    <mat-option value="1">Select</mat-option>
                    <mat-option value="1">%</mat-option>
                    <mat-option value="1">Fixed</mat-option>
                  </mat-select>
                </div>
              </div>
              <div class="col-lg-4 col-md-6">
                <div class="mb-3">
                  <label class="form-label">Barcode <span class="text-danger">*</span></label>
                  <div class="position-relative">
                    <input type="text" class="form-control" value="0129-4597">
                    <a href="javascript:void(0);" class="btn btn-sm btn-dark position-absolute end-0 top-0 bottom-0 mx-2 my-1 d-inline-flex align-items-center">Generate</a>
                  </div>
                </div>
              </div>
              <div class="col-lg-4 col-md-6">
                <div class="mb-3">
                  <label class="form-label">Alert Quantity <span class="text-danger">*</span></label>
                  <input type="text" class="form-control" value="100">
                </div>
              </div>
              <div class="col-lg-4 col-md-6">
                <div class="mb-3">
                  <label class="form-label">Tax <span class="text-danger">*</span></label>
                  <mat-select class="custom-mat-select select" placeholder="VAT (10%)">
                    <mat-option value="1">Select</mat-option>
                    <mat-option value="1">VAT (10%)</mat-option>
                    <mat-option value="1">CGST (08%)</mat-option>
                    <mat-option value="1">SGST (10%)</mat-option>
                  </mat-select>
                </div>
              </div>
              <div class="col-lg-12">
                <div class="mb-3">
                  <label class="form-label">Product Description</label>
                  <ngx-editor [editor]="editor">
                    <ngx-editor-menu [editor]="editor" [toolbar]="toolbar" >
                    </ngx-editor-menu>
                 </ngx-editor>
                </div>
              </div>
              <div class="col-lg-12">
                <div class="mb-3 pb-3 border-bottom">
                  <label class="form-label">Gallery Images</label>
                  <div class="file-upload drag-file w-100 d-flex align-items-center justify-content-center flex-column mb-3">
                    <span class="upload-img d-block mb-2"><i class="isax isax-image text-primary"></i></span>
                    <p class="mb-0 text-gray-9 fw-semibold">Drop Your Files or <a href="javascript:void(0);" class="text-primary text-decoration-underline">
                        Browse</a></p>
                    <input type="file" accept="video/image">
                    <p class="fs-13">Max Upload  Size 800x800px. PNG / JPEG file, Maximum Upload size 5MB</p>
                  </div>
                  <div class="d-flex align-items-center gap-3">
                    <div class="avatar avatar-xl border gallery-img p-1 " [ngClass]="{'d-none':trash[3]}">
                      <img src="assets/img/products/product-10.jpg" alt="">
                      <a href="javascript:void(0);" class="rounded-trash gallery-trash d-flex align-items-center justify-content-center" (click)="remove(3)"><i class="isax isax-trash"></i></a>
                    </div>
                    <div class="avatar avatar-xl border gallery-img p-1 " [ngClass]="{'d-none':trash[1]}">
                      <img src="assets/img/products/product-11.jpg" alt="">
                      <a href="javascript:void(0);" class="rounded-trash gallery-trash d-flex align-items-center justify-content-center" (click)="remove(1)"><i class="isax isax-trash"></i></a>
                    </div>
                    <div class="avatar avatar-xl border gallery-img p-1" [ngClass]="{'d-none':trash[2]}">
                      <img src="assets/img/products/product-12.jpg" alt="">
                      <a href="javascript:void(0);" class="rounded-trash gallery-trash d-flex align-items-center justify-content-center" (click)="remove(2)"><i class="isax isax-trash"></i></a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="d-flex align-items-center justify-content-between">
              <button type="button" class="btn btn-outline-white">Cancel</button>
              <button type="submit" class="btn btn-primary">Save Changes</button>
            </div>
          </form>
        </div><!-- end card body -->
      </div><!-- end card -->
    </div>
  </div><!-- end col -->
</div>
<!-- End Row -->` }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(EditProductsComponent, { className: "EditProductsComponent", filePath: "src/app/features/invantory-sales/products-service/edit-products/edit-products.component.ts", lineNumber: 16 });
})();
export {
  EditProductsComponent
};
//# sourceMappingURL=chunk-HS2MSP7B.js.map

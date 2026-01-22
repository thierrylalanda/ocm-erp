import {
  LightboxModule
} from "./chunk-2LAYINKN.js";
import {
  lg_video_es5_default,
  lg_zoom_es5_default
} from "./chunk-5P3VLMEM.js";
import {
  LightgalleryComponent,
  LightgalleryModule
} from "./chunk-Q45D2WIA.js";
import {
  routes
} from "./chunk-YJY3UYMJ.js";
import "./chunk-AWXYRVJS.js";
import "./chunk-WOBWH5QA.js";
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

// src/app/features/application/search-list/search-list.component.ts
var SearchListComponent = class _SearchListComponent {
  routes = routes;
  lightGallery;
  needRefresh = false;
  settings = {
    counter: false,
    plugins: [lg_zoom_es5_default, lg_video_es5_default]
  };
  ngAfterViewInit() {
    if (this.needRefresh) {
      this.lightGallery.refresh();
      this.needRefresh = false;
    }
  }
  onInit = (detail) => {
    this.lightGallery = detail.instance;
  };
  onBeforeSlide = (detail) => {
    const { index, prevIndex } = detail;
  };
  static \u0275fac = function SearchListComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _SearchListComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SearchListComponent, selectors: [["app-search-list"]], decls: 72, vars: 2, consts: [[1, "content"], [1, "card"], [1, "card-body"], [1, "d-flex", "align-items-center"], ["type", "text", "value", "Kanakku", 1, "form-control", "flex-fill", "me-3"], ["type", "submit", 1, "btn", "btn-primary"], [1, "mb-3", "text-capitalize"], [1, "row"], [1, "col-md-6"], [1, "card", "shadow-none"], ["href", "javascript:void(0);", 1, "text-info", "text-truncate", "mb-2", "text-wrap"], [1, "text-truncate", "line-clamb-2", "mb-2"], [1, "d-flex", "align-items-center", "flex-wrap", "row-gap-2"], [1, "text-gray-9", "me-3", "pe-3", "border-end"], [1, "text-gray-9", "d-flex", "align-items-center", "me-3", "pe-3", "border-end"], [1, "ti", "ti-star-filled", "text-warning", "me-1"], [1, "ti", "ti-star-filled", "text-gray-2", "me-1"], [1, "text-gray-9"], [1, "mb-3"], [1, "row", "g-3"], [1, "row", "g-3", 3, "settings", "onBeforeSlide"], ["data-responsive", "assets/img/media/media-15.jpg", "data-src", "assets/img/media/media-15.jpg", 1, "col-xl-2", "col-md-4", "col-6"], ["href", "assets/img/media/media-15.jpg", "data-fancybox", "gallery", 1, "gallery-item"], ["src", "assets/img/media/media-15.jpg", "alt", "img", 1, "rounded"], ["data-responsive", "assets/img/media/media-16.jpg", "data-src", "assets/img/media/media-16.jpg", 1, "col-xl-2", "col-md-4", "col-6"], ["href", "assets/img/media/media-16.jpg", "data-fancybox", "gallery", 1, "gallery-item"], ["src", "assets/img/media/media-16.jpg", "alt", "img", 1, "rounded"], ["data-responsive", "assets/img/media/media-17.jpg", "data-src", "assets/img/media/media-17.jpg", 1, "col-xl-2", "col-md-4", "col-6"], ["href", "assets/img/media/media-17.jpg", "data-fancybox", "gallery", 1, "gallery-item"], ["src", "assets/img/media/media-17.jpg", "alt", "img", 1, "rounded"], ["data-responsive", "assets/img/media/media-18.jpg", "data-src", "assets/img/media/media-18.jpg", 1, "col-xl-2", "col-md-4", "col-6"], ["href", "assets/img/media/media-18.jpg", "data-fancybox", "gallery", 1, "gallery-item"], ["src", "assets/img/media/media-18.jpg", "alt", "img", 1, "rounded"], ["data-responsive", "assets/img/media/media-19.jpg", "data-src", "assets/img/media/media-19.jpg", 1, "col-xl-2", "col-md-4", "col-6"], ["href", "assets/img/media/media-19.jpg", "data-fancybox", "gallery", 1, "gallery-item"], ["src", "assets/img/media/media-19.jpg", "alt", "img", 1, "rounded"], ["data-responsive", "assets/img/media/media-20.jpg", "data-src", "assets/img/media/media-20.jpg", 1, "col-xl-2", "col-md-4", "col-6"], ["href", "assets/img/media/media-20.jpg", "data-fancybox", "gallery", 1, "gallery-item"], ["src", "assets/img/media/media-20.jpg", "alt", "img", 1, "rounded"], ["data-responsive", "assets/img/media/media-21.jpg", "data-src", "assets/img/media/media-21.jpg", 1, "col-xl-2", "col-md-4", "col-6"], ["href", "assets/img/media/media-21.jpg", "data-fancybox", "gallery", 1, "gallery-item"], ["src", "assets/img/media/media-21.jpg", "alt", "img", 1, "rounded"], ["data-responsive", "assets/img/media/media-22.jpg", "data-src", "assets/img/media/media-22.jpg", 1, "col-xl-2", "col-md-4", "col-6"], ["href", "assets/img/media/media-22.jpg", "data-fancybox", "gallery", 1, "gallery-item"], ["src", "assets/img/media/media-22.jpg", "alt", "img", 1, "rounded"], ["data-responsive", "assets/img/media/media-23.jpg", "data-src", "assets/img/media/media-23.jpg", 1, "col-xl-2", "col-md-4", "col-6"], ["href", "assets/img/media/media-23.jpg", "data-fancybox", "gallery", 1, "gallery-item"], ["src", "assets/img/media/media-23.jpg", "alt", "img", 1, "rounded"], ["data-responsive", "assets/img/media/media-24.jpg", "data-src", "assets/img/media/media-24.jpg", 1, "col-xl-2", "col-md-4", "col-6"], ["href", "assets/img/media/media-24.jpg", "data-fancybox", "gallery", 1, "gallery-item"], ["src", "assets/img/media/media-24.jpg", "alt", "img", 1, "rounded"], ["data-responsive", "assets/img/media/media-25.jpg", "data-src", "assets/img/media/media-25.jpg", 1, "col-xl-2", "col-md-4", "col-6"], ["href", "assets/img/media/media-25.jpg", "data-fancybox", "gallery", 1, "gallery-item"], ["src", "assets/img/media/media-25.jpg", "alt", "img", 1, "rounded"], ["data-responsive", "assets/img/media/media-26.jpg", "data-src", "assets/img/media/media-26.jpg", 1, "col-xl-2", "col-md-4", "col-6"], ["href", "assets/img/media/media-26.jpg", "data-fancybox", "gallery", 1, "gallery-item"], ["src", "assets/img/media/media-26.jpg", "alt", "img", 1, "rounded"]], template: function SearchListComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "form")(4, "div", 3);
      \u0275\u0275element(5, "input", 4);
      \u0275\u0275elementStart(6, "button", 5);
      \u0275\u0275text(7, "Search");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(8, "div", 1)(9, "div", 2)(10, "h6", 6);
      \u0275\u0275text(11, 'Search result for "Kanakku"');
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(12, "div", 7)(13, "div", 8)(14, "div", 9)(15, "div", 2)(16, "a", 10);
      \u0275\u0275text(17, "https://themeforest.net/search/kanakku");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(18, "p", 11);
      \u0275\u0275text(19, "Kanakku - Html, Vue 3, Angular 17+, React & Node HR Project Management & CRM Admin Dashboard Template");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(20, "div", 12)(21, "span", 13);
      \u0275\u0275text(22, "1.7K Sales");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(23, "div", 14);
      \u0275\u0275element(24, "i", 15)(25, "i", 15)(26, "i", 15)(27, "i", 15)(28, "i", 16);
      \u0275\u0275text(29, " (45) ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(30, "span", 17);
      \u0275\u0275text(31, "$35");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(32, "h6", 18);
      \u0275\u0275text(33, "Images");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(34, "div", 19)(35, "lightgallery", 20)(36, "div", 21)(37, "a", 22);
      \u0275\u0275element(38, "img", 23);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(39, "div", 24)(40, "a", 25);
      \u0275\u0275element(41, "img", 26);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(42, "div", 27)(43, "a", 28);
      \u0275\u0275element(44, "img", 29);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(45, "div", 30)(46, "a", 31);
      \u0275\u0275element(47, "img", 32);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(48, "div", 33)(49, "a", 34);
      \u0275\u0275element(50, "img", 35);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(51, "div", 36)(52, "a", 37);
      \u0275\u0275element(53, "img", 38);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(54, "div", 39)(55, "a", 40);
      \u0275\u0275element(56, "img", 41);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(57, "div", 42)(58, "a", 43);
      \u0275\u0275element(59, "img", 44);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(60, "div", 45)(61, "a", 46);
      \u0275\u0275element(62, "img", 47);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(63, "div", 48)(64, "a", 49);
      \u0275\u0275element(65, "img", 50);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(66, "div", 51)(67, "a", 52);
      \u0275\u0275element(68, "img", 53);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(69, "div", 54)(70, "a", 55);
      \u0275\u0275element(71, "img", 56);
      \u0275\u0275elementEnd()()()()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(35);
      \u0275\u0275property("settings", ctx.settings)("onBeforeSlide", ctx.onBeforeSlide);
    }
  }, dependencies: [CommonModule, LightboxModule, LightgalleryModule, LightgalleryComponent], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SearchListComponent, [{
    type: Component,
    args: [{ selector: "app-search-list", imports: [CommonModule, LightboxModule, LightgalleryModule], template: '			<!-- Start Content -->\n			<div class="content">\n                <div class="card">\n                    <div class="card-body">\n                        <form>\n                            <div class="d-flex align-items-center">\n                                <input type="text" class="form-control flex-fill me-3" value="Kanakku">\n                                <button type="submit" class="btn btn-primary">Search</button>\n                            </div>\n                        </form>\n                    </div><!-- end card body -->\n                </div><!-- end card -->\n                <div class="card">\n                    <div class="card-body">\n                        <h6 class="mb-3 text-capitalize">Search result for "Kanakku"</h6>\n\n						<!-- start row -->\n                        <div class="row">\n                            <div class="col-md-6">\n                                <div class="card shadow-none">\n                                    <div class="card-body">\n                                        <a href="javascript:void(0);" class="text-info text-truncate mb-2 text-wrap">https://themeforest.net/search/kanakku</a>\n                                        <p class="text-truncate line-clamb-2 mb-2">Kanakku - Html, Vue 3, Angular 17+, React & Node HR Project Management & CRM Admin Dashboard Template</p>\n                                        <div class="d-flex align-items-center flex-wrap row-gap-2">\n                                            <span class="text-gray-9 me-3 pe-3 border-end">1.7K Sales</span>\n                                            <div class="text-gray-9 d-flex align-items-center me-3 pe-3 border-end">\n                                                <i class="ti ti-star-filled text-warning me-1"></i>\n                                                <i class="ti ti-star-filled text-warning me-1"></i>\n                                                <i class="ti ti-star-filled text-warning me-1"></i>\n                                                <i class="ti ti-star-filled text-warning me-1"></i>\n                                                <i class="ti ti-star-filled text-gray-2 me-1"></i>\n                                                (45)\n                                            </div>\n                                            <span class="text-gray-9">$35</span>\n                                        </div>\n                                    </div><!-- end card body -->    \n                                </div><!-- end card -->    \n                            </div><!-- end col -->\n                        </div>\n						<!-- end row -->\n\n                        <h6 class="mb-3">Images</h6>\n\n						<!-- start row -->\n                        <div class="row g-3">\n                            <lightgallery class="row g-3" [settings]="settings" [onBeforeSlide]="onBeforeSlide">\n                            <div class="col-xl-2 col-md-4 col-6" data-responsive="assets/img/media/media-15.jpg" data-src="assets/img/media/media-15.jpg">\n                                <a href="assets/img/media/media-15.jpg" data-fancybox="gallery" class="gallery-item">\n                                    <img src="assets/img/media/media-15.jpg" class="rounded" alt="img">\n                                </a>\n                            </div><!-- end col -->\n                            <div class="col-xl-2 col-md-4 col-6" data-responsive="assets/img/media/media-16.jpg" data-src="assets/img/media/media-16.jpg">\n                                <a href="assets/img/media/media-16.jpg" data-fancybox="gallery" class="gallery-item">\n                                    <img src="assets/img/media/media-16.jpg" class="rounded" alt="img">\n                                </a>\n                            </div><!-- end col -->\n                            <div class="col-xl-2 col-md-4 col-6" data-responsive="assets/img/media/media-17.jpg" data-src="assets/img/media/media-17.jpg">\n                                <a href="assets/img/media/media-17.jpg" data-fancybox="gallery" class="gallery-item">\n                                    <img src="assets/img/media/media-17.jpg" class="rounded" alt="img">\n                                </a>\n                            </div><!-- end col -->\n                            <div class="col-xl-2 col-md-4 col-6" data-responsive="assets/img/media/media-18.jpg" data-src="assets/img/media/media-18.jpg">\n                                <a href="assets/img/media/media-18.jpg" data-fancybox="gallery" class="gallery-item">\n                                    <img src="assets/img/media/media-18.jpg" class="rounded" alt="img">\n                                </a>\n                            </div><!-- end col -->\n                            <div class="col-xl-2 col-md-4 col-6" data-responsive="assets/img/media/media-19.jpg" data-src="assets/img/media/media-19.jpg">\n                                <a href="assets/img/media/media-19.jpg" data-fancybox="gallery" class="gallery-item">\n                                    <img src="assets/img/media/media-19.jpg" class="rounded" alt="img">\n                                </a>\n                            </div><!-- end col -->\n                            <div class="col-xl-2 col-md-4 col-6" data-responsive="assets/img/media/media-20.jpg" data-src="assets/img/media/media-20.jpg">\n                                <a href="assets/img/media/media-20.jpg" data-fancybox="gallery" class="gallery-item">\n                                    <img src="assets/img/media/media-20.jpg" class="rounded" alt="img">\n                                </a>\n                            </div><!-- end col -->\n                            <div class="col-xl-2 col-md-4 col-6" data-responsive="assets/img/media/media-21.jpg" data-src="assets/img/media/media-21.jpg">\n                                <a href="assets/img/media/media-21.jpg" data-fancybox="gallery" class="gallery-item">\n                                    <img src="assets/img/media/media-21.jpg" class="rounded" alt="img">\n                                </a>\n                            </div><!-- end col -->\n                            <div class="col-xl-2 col-md-4 col-6" data-responsive="assets/img/media/media-22.jpg" data-src="assets/img/media/media-22.jpg">\n                                <a href="assets/img/media/media-22.jpg" data-fancybox="gallery" class="gallery-item">\n                                    <img src="assets/img/media/media-22.jpg" class="rounded" alt="img">\n                                </a>\n                            </div><!-- end col -->\n                            <div class="col-xl-2 col-md-4 col-6" data-responsive="assets/img/media/media-23.jpg" data-src="assets/img/media/media-23.jpg">\n                                <a href="assets/img/media/media-23.jpg" data-fancybox="gallery" class="gallery-item">\n                                    <img src="assets/img/media/media-23.jpg" class="rounded" alt="img">\n                                </a>\n                            </div><!-- end col -->\n                            <div class="col-xl-2 col-md-4 col-6" data-responsive="assets/img/media/media-24.jpg" data-src="assets/img/media/media-24.jpg">\n                                <a href="assets/img/media/media-24.jpg" data-fancybox="gallery" class="gallery-item">\n                                    <img src="assets/img/media/media-24.jpg" class="rounded" alt="img">\n                                </a>\n                            </div><!-- end col -->\n                            <div class="col-xl-2 col-md-4 col-6" data-responsive="assets/img/media/media-25.jpg" data-src="assets/img/media/media-25.jpg">\n                                <a href="assets/img/media/media-25.jpg" data-fancybox="gallery" class="gallery-item">\n                                    <img src="assets/img/media/media-25.jpg" class="rounded" alt="img">\n                                </a>\n                            </div><!-- end col -->\n                            <div class="col-xl-2 col-md-4 col-6" data-responsive="assets/img/media/media-26.jpg" data-src="assets/img/media/media-26.jpg">\n                                <a href="assets/img/media/media-26.jpg" data-fancybox="gallery" class="gallery-item">\n                                    <img src="assets/img/media/media-26.jpg" class="rounded" alt="img">\n                                </a>\n                            </div><!-- end col -->\n                            </lightgallery>\n                        </div>\n						<!-- end row -->\n\n                    </div><!-- end card body -->\n                </div><!-- end card -->       \n		    </div>\n			<!-- End Content -->\n\n\n\n' }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SearchListComponent, { className: "SearchListComponent", filePath: "src/app/features/application/search-list/search-list.component.ts", lineNumber: 17 });
})();
export {
  SearchListComponent
};
//# sourceMappingURL=chunk-EHBOHAGH.js.map

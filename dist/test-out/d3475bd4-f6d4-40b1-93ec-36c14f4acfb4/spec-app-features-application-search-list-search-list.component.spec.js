import {
  LightboxModule,
  init_ngx_lightbox
} from "./chunk-O22VSTEP.js";
import {
  init_lg_video_es5,
  init_lg_zoom_es5,
  lg_video_es5_default,
  lg_zoom_es5_default
} from "./chunk-LUSSWILE.js";
import {
  LightgalleryModule,
  init_lightgallery_angular
} from "./chunk-PZEBRXEI.js";
import {
  init_core_index,
  routes
} from "./chunk-NSLU4XKJ.js";
import "./chunk-EOPPSJQQ.js";
import "./chunk-FUOYOFVQ.js";
import "./chunk-5B5ZAECM.js";
import "./chunk-2O5UQ647.js";
import "./chunk-EDGRTZKC.js";
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

// angular:jit:template:src/app/features/application/search-list/search-list.component.html
var search_list_component_default;
var init_search_list_component = __esm({
  "angular:jit:template:src/app/features/application/search-list/search-list.component.html"() {
    search_list_component_default = '			<!-- Start Content -->\n			<div class="content">\n                <div class="card">\n                    <div class="card-body">\n                        <form>\n                            <div class="d-flex align-items-center">\n                                <input type="text" class="form-control flex-fill me-3" value="Kanakku">\n                                <button type="submit" class="btn btn-primary">Search</button>\n                            </div>\n                        </form>\n                    </div><!-- end card body -->\n                </div><!-- end card -->\n                <div class="card">\n                    <div class="card-body">\n                        <h6 class="mb-3 text-capitalize">Search result for "Kanakku"</h6>\n\n						<!-- start row -->\n                        <div class="row">\n                            <div class="col-md-6">\n                                <div class="card shadow-none">\n                                    <div class="card-body">\n                                        <a href="javascript:void(0);" class="text-info text-truncate mb-2 text-wrap">https://themeforest.net/search/kanakku</a>\n                                        <p class="text-truncate line-clamb-2 mb-2">Kanakku - Html, Vue 3, Angular 17+, React & Node HR Project Management & CRM Admin Dashboard Template</p>\n                                        <div class="d-flex align-items-center flex-wrap row-gap-2">\n                                            <span class="text-gray-9 me-3 pe-3 border-end">1.7K Sales</span>\n                                            <div class="text-gray-9 d-flex align-items-center me-3 pe-3 border-end">\n                                                <i class="ti ti-star-filled text-warning me-1"></i>\n                                                <i class="ti ti-star-filled text-warning me-1"></i>\n                                                <i class="ti ti-star-filled text-warning me-1"></i>\n                                                <i class="ti ti-star-filled text-warning me-1"></i>\n                                                <i class="ti ti-star-filled text-gray-2 me-1"></i>\n                                                (45)\n                                            </div>\n                                            <span class="text-gray-9">$35</span>\n                                        </div>\n                                    </div><!-- end card body -->    \n                                </div><!-- end card -->    \n                            </div><!-- end col -->\n                        </div>\n						<!-- end row -->\n\n                        <h6 class="mb-3">Images</h6>\n\n						<!-- start row -->\n                        <div class="row g-3">\n                            <lightgallery class="row g-3" [settings]="settings" [onBeforeSlide]="onBeforeSlide">\n                            <div class="col-xl-2 col-md-4 col-6" data-responsive="assets/img/media/media-15.jpg" data-src="assets/img/media/media-15.jpg">\n                                <a href="assets/img/media/media-15.jpg" data-fancybox="gallery" class="gallery-item">\n                                    <img src="assets/img/media/media-15.jpg" class="rounded" alt="img">\n                                </a>\n                            </div><!-- end col -->\n                            <div class="col-xl-2 col-md-4 col-6" data-responsive="assets/img/media/media-16.jpg" data-src="assets/img/media/media-16.jpg">\n                                <a href="assets/img/media/media-16.jpg" data-fancybox="gallery" class="gallery-item">\n                                    <img src="assets/img/media/media-16.jpg" class="rounded" alt="img">\n                                </a>\n                            </div><!-- end col -->\n                            <div class="col-xl-2 col-md-4 col-6" data-responsive="assets/img/media/media-17.jpg" data-src="assets/img/media/media-17.jpg">\n                                <a href="assets/img/media/media-17.jpg" data-fancybox="gallery" class="gallery-item">\n                                    <img src="assets/img/media/media-17.jpg" class="rounded" alt="img">\n                                </a>\n                            </div><!-- end col -->\n                            <div class="col-xl-2 col-md-4 col-6" data-responsive="assets/img/media/media-18.jpg" data-src="assets/img/media/media-18.jpg">\n                                <a href="assets/img/media/media-18.jpg" data-fancybox="gallery" class="gallery-item">\n                                    <img src="assets/img/media/media-18.jpg" class="rounded" alt="img">\n                                </a>\n                            </div><!-- end col -->\n                            <div class="col-xl-2 col-md-4 col-6" data-responsive="assets/img/media/media-19.jpg" data-src="assets/img/media/media-19.jpg">\n                                <a href="assets/img/media/media-19.jpg" data-fancybox="gallery" class="gallery-item">\n                                    <img src="assets/img/media/media-19.jpg" class="rounded" alt="img">\n                                </a>\n                            </div><!-- end col -->\n                            <div class="col-xl-2 col-md-4 col-6" data-responsive="assets/img/media/media-20.jpg" data-src="assets/img/media/media-20.jpg">\n                                <a href="assets/img/media/media-20.jpg" data-fancybox="gallery" class="gallery-item">\n                                    <img src="assets/img/media/media-20.jpg" class="rounded" alt="img">\n                                </a>\n                            </div><!-- end col -->\n                            <div class="col-xl-2 col-md-4 col-6" data-responsive="assets/img/media/media-21.jpg" data-src="assets/img/media/media-21.jpg">\n                                <a href="assets/img/media/media-21.jpg" data-fancybox="gallery" class="gallery-item">\n                                    <img src="assets/img/media/media-21.jpg" class="rounded" alt="img">\n                                </a>\n                            </div><!-- end col -->\n                            <div class="col-xl-2 col-md-4 col-6" data-responsive="assets/img/media/media-22.jpg" data-src="assets/img/media/media-22.jpg">\n                                <a href="assets/img/media/media-22.jpg" data-fancybox="gallery" class="gallery-item">\n                                    <img src="assets/img/media/media-22.jpg" class="rounded" alt="img">\n                                </a>\n                            </div><!-- end col -->\n                            <div class="col-xl-2 col-md-4 col-6" data-responsive="assets/img/media/media-23.jpg" data-src="assets/img/media/media-23.jpg">\n                                <a href="assets/img/media/media-23.jpg" data-fancybox="gallery" class="gallery-item">\n                                    <img src="assets/img/media/media-23.jpg" class="rounded" alt="img">\n                                </a>\n                            </div><!-- end col -->\n                            <div class="col-xl-2 col-md-4 col-6" data-responsive="assets/img/media/media-24.jpg" data-src="assets/img/media/media-24.jpg">\n                                <a href="assets/img/media/media-24.jpg" data-fancybox="gallery" class="gallery-item">\n                                    <img src="assets/img/media/media-24.jpg" class="rounded" alt="img">\n                                </a>\n                            </div><!-- end col -->\n                            <div class="col-xl-2 col-md-4 col-6" data-responsive="assets/img/media/media-25.jpg" data-src="assets/img/media/media-25.jpg">\n                                <a href="assets/img/media/media-25.jpg" data-fancybox="gallery" class="gallery-item">\n                                    <img src="assets/img/media/media-25.jpg" class="rounded" alt="img">\n                                </a>\n                            </div><!-- end col -->\n                            <div class="col-xl-2 col-md-4 col-6" data-responsive="assets/img/media/media-26.jpg" data-src="assets/img/media/media-26.jpg">\n                                <a href="assets/img/media/media-26.jpg" data-fancybox="gallery" class="gallery-item">\n                                    <img src="assets/img/media/media-26.jpg" class="rounded" alt="img">\n                                </a>\n                            </div><!-- end col -->\n                            </lightgallery>\n                        </div>\n						<!-- end row -->\n\n                    </div><!-- end card body -->\n                </div><!-- end card -->       \n		    </div>\n			<!-- End Content -->\n\n\n\n';
  }
});

// angular:jit:style:src/app/features/application/search-list/search-list.component.scss
var search_list_component_default2;
var init_search_list_component2 = __esm({
  "angular:jit:style:src/app/features/application/search-list/search-list.component.scss"() {
    search_list_component_default2 = "/* src/app/features/application/search-list/search-list.component.scss */\n/*# sourceMappingURL=search-list.component.css.map */\n";
  }
});

// src/app/features/application/search-list/search-list.component.ts
var SearchListComponent;
var init_search_list_component3 = __esm({
  "src/app/features/application/search-list/search-list.component.ts"() {
    "use strict";
    init_tslib_es6();
    init_search_list_component();
    init_search_list_component2();
    init_core();
    init_common();
    init_lg_zoom_es5();
    init_lg_video_es5();
    init_core_index();
    init_ngx_lightbox();
    init_lightgallery_angular();
    SearchListComponent = class SearchListComponent2 {
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
    };
    SearchListComponent = __decorate([
      Component({
        selector: "app-search-list",
        template: search_list_component_default,
        imports: [CommonModule, LightboxModule, LightgalleryModule],
        styles: [search_list_component_default2]
      })
    ], SearchListComponent);
  }
});

// src/app/features/application/search-list/search-list.component.spec.ts
var require_search_list_component_spec = __commonJS({
  "src/app/features/application/search-list/search-list.component.spec.ts"(exports) {
    init_testing();
    init_search_list_component3();
    describe("SearchListComponent", () => {
      let component;
      let fixture;
      beforeEach(() => __async(null, null, function* () {
        yield TestBed.configureTestingModule({
          declarations: [SearchListComponent]
        }).compileComponents();
        fixture = TestBed.createComponent(SearchListComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
      }));
      it("should create", () => {
        expect(component).toBeTruthy();
      });
    });
  }
});
export default require_search_list_component_spec();
//# sourceMappingURL=spec-app-features-application-search-list-search-list.component.spec.js.map

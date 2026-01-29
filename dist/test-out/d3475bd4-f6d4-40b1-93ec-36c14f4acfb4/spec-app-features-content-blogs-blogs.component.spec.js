import {
  RouterModule,
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

// angular:jit:template:src/app/features/content/blogs/blogs.component.html
var blogs_component_default;
var init_blogs_component = __esm({
  "angular:jit:template:src/app/features/content/blogs/blogs.component.html"() {
    blogs_component_default = "<router-outlet></router-outlet>";
  }
});

// angular:jit:style:src/app/features/content/blogs/blogs.component.scss
var blogs_component_default2;
var init_blogs_component2 = __esm({
  "angular:jit:style:src/app/features/content/blogs/blogs.component.scss"() {
    blogs_component_default2 = "/* src/app/features/content/blogs/blogs.component.scss */\n/*# sourceMappingURL=blogs.component.css.map */\n";
  }
});

// src/app/features/content/blogs/blogs.component.ts
var BlogsComponent;
var init_blogs_component3 = __esm({
  "src/app/features/content/blogs/blogs.component.ts"() {
    "use strict";
    init_tslib_es6();
    init_blogs_component();
    init_blogs_component2();
    init_core();
    init_router();
    BlogsComponent = class BlogsComponent2 {
    };
    BlogsComponent = __decorate([
      Component({
        selector: "app-blogs",
        imports: [RouterModule],
        template: blogs_component_default,
        styles: [blogs_component_default2]
      })
    ], BlogsComponent);
  }
});

// src/app/features/content/blogs/blogs.component.spec.ts
var require_blogs_component_spec = __commonJS({
  "src/app/features/content/blogs/blogs.component.spec.ts"(exports) {
    init_testing();
    init_blogs_component3();
    describe("BlogsComponent", () => {
      let component;
      let fixture;
      beforeEach(() => __async(null, null, function* () {
        yield TestBed.configureTestingModule({
          declarations: [BlogsComponent]
        }).compileComponents();
        fixture = TestBed.createComponent(BlogsComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
      }));
      it("should create", () => {
        expect(component).toBeTruthy();
      });
    });
  }
});
export default require_blogs_component_spec();
//# sourceMappingURL=spec-app-features-content-blogs-blogs.component.spec.js.map

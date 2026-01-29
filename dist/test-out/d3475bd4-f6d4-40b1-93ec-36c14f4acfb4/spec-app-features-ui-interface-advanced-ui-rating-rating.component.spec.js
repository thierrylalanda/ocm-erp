import {
  FormsModule,
  NG_VALUE_ACCESSOR,
  init_forms
} from "./chunk-2RBILSOV.js";
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
  NgForOf,
  NgTemplateOutlet,
  init_common
} from "./chunk-HQHIWYWO.js";
import "./chunk-PV6FWBJN.js";
import {
  TestBed,
  init_testing
} from "./chunk-SXCZ3RJK.js";
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  EventEmitter,
  FactoryTarget,
  HostListener,
  Injectable,
  Input,
  NgModule,
  Output,
  __decorate,
  core_exports,
  forwardRef,
  init_core,
  init_tslib_es6,
  ɵɵngDeclareClassMetadata,
  ɵɵngDeclareComponent,
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

// angular:jit:template:src/app/features/ui-interface/advanced-ui/rating/rating.component.html
var rating_component_default;
var init_rating_component = __esm({
  "angular:jit:template:src/app/features/ui-interface/advanced-ui/rating/rating.component.html"() {
    rating_component_default = `<!-- Page Header -->
<div class="d-flex align-items-sm-center flex-sm-row flex-column gap-2 pb-3">
  <div class="flex-grow-1">
      <h4 class="fs-18 fw-semibold mb-0">Rating</h4>
  </div>

  <div class="text-end">
      <ol class="breadcrumb m-0 py-0">
          <li class="breadcrumb-item"><a href="javascript: void(0);">Home</a></li>

          <li class="breadcrumb-item"><a href="javascript: void(0);">Advanced UI</a></li>

          <li class="breadcrumb-item active">Rating</li>
      </ol>
  </div>
</div>
<!-- /Page Header -->
<div class="row">
  <div class="col-xxl-4 col-xl-6">
    <div class="card custom-card">
      <div class="card-header">
      <div class="card-title">
          Basic Rater
      </div>
      </div>
      <div class="card-body">
        <div class="d-flex flex-wrap align-items-center justify-content-between">
          <p class="fs-14 mb-0 fw-semibold">Show Some <span class="text-danger">&#10084;</span> with rating :</p>
          <div id="rater-basic">
            <!-- <ngb-rating [(rate)]="defaultSelect" [readonly]="readonly" class="stars" [max]=5 ></ngb-rating> -->
            <rating [(ngModel)]="rate" [max]="max"></rating>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="col-xxl-4 col-xl-6">
    <div class="card custom-card">
      <div class="card-header">
        <div class="card-title">
          5 star rater with steps
        </div>
      </div>
      <div class="card-body">
        <div class="d-flex flex-wrap align-items-center justify-content-between">
          <p class="fs-14 mb-0 fw-semibold">Dont forget to rate the product :</p>
          <div id="rater-steps">
            @for (item of halfRatingStar; track item; let i = $index) {
              @if (item.show === false && item.half === false) {
                <img
                  (click)="clickBasicStar(item, i, halfRatingStar)" class="me-1"
                  src="assets/img/ratings/star-off.png" />
              }
              @if (item.show === true) {
                <img (click)="clickBasicStar(item, i, halfRatingStar)" class="me-1"
                  src="assets/img/ratings/star-on.png" />
              }
              @if (item.half === true) {
                <img src="assets/img/ratings/star-half.png" />
              }
            }
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="col-xxl-4 col-xl-12">
    <div class="card custom-card">
      <div class="card-header">
        <div class="card-title">
          Custom messages
        </div>
      </div>
      <div class="card-body">
        <div class="d-flex flex-wrap align-items-center justify-content-between">
          <p class="fs-14 mb-0 fw-semibold">Your rating is much appreciated:</p>
          <div id="custom-messages">
            @for (item of maxStar; track item; let i = $index) {
              <img
                (click)="clickBasicStar(item, i, maxStar)"
                (mouseover)="hoverStar(i, maxStar)"
                (mouseout)="hoverStar(-1, maxStar)"
                class="me-1"
                [src]="item.show ? 'assets/img/ratings/star-on.png' : 'assets/img/ratings/star-off.png'" />
            }
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="col-xxl-6 col-xl-6">
    <div class="card custom-card">
      <div class="card-header">
        <div class="card-title">
          Unlimited number of stars readOnly
        </div>
      </div>
      <div class="card-body">
        <div class="d-flex flex-wrap align-items-center justify-content-between">
          <p class="fs-14 mb-0 fw-semibold">Thanks for rating :</p>
          <div id="stars-unlimited">
            @for (item of readOnlyStar; track item; let i = $index) {
              @if (item.show === false) {
                <img src="assets/img/ratings/star-off.png" class="me-1"/>
              }
              @if (item.show === true) {
                <img src="assets/img/ratings/star-on.png" class="me-1"/>
              }
            }
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="col-xxl-6 col-xl-6">
    <div class="card custom-card">
      <div class="card-header">
        <div class="card-title">
          5 Star rater with custom isBusyText and simulated backend
        </div>
      </div>
      <div class="card-body">
        <div class="d-flex flex-wrap align-items-center justify-content-between">
          <p class="fs-14 mb-0 fw-semibold">Thanks for rating :</p>
          <div id="stars-busytext">
            @for (item of savedStar; track item; let i = $index) {
              @if (item.show === false) {
                <img (click)="clickBasicStar(item, i, savedStar)" class="me-1"
                  src="assets/img/ratings/star-off.png" />
              }
              @if (item.show === true) {
                <img (click)="clickBasicStar(item, i, savedStar)" class="me-1"
                  src="assets/img/ratings/star-on.png" />
              }
            }
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="col-xxl-4 col-xl-6">
    <div class="card custom-card">
      <div class="card-header">
        <div class="card-title">
          On hover event
        </div>
      </div>
      <div class="card-body">
        <div class="d-flex flex-wrap align-items-center justify-content-between">
          <p class="fs-14 mb-0 fw-semibold">Please give your valuable rating :</p>
          <div class="d-flex flex-wrap align-items-center">
            <div id="stars-hover">
              <!-- <ngb-rating [(rate)]="hoverSelect" (hover)="hovered=$event" (leave)="hovered=0" [readonly]="readonly" class="stars" [max]=5></ngb-rating> -->
              <rating [(ngModel)]="rate" [max]="max"></rating>
            </div>
            <span class="live-rating badge bg-success-transparent ms-3" (click)="increaseRating()">
              {{hovered}}
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="col-xxl-4 col-xl-6">
    <div class="card custom-card">
      <div class="card-header">
        <div class="card-title">
          Clear/reset rater
        </div>
      </div>
      <div class="card-body">
        <div class="d-flex flex-wrap align-items-center justify-content-between">
          <p class="fs-14 mb-0 fw-semibold">Thank You so much for your support :</p>
          <div class="d-flex flex-wrap align-items-center">
            <div id="rater-reset">
              <!-- <ngb-rating [(rate)]="clearRate" [readonly]="readonly" class="stars align-middle star-rating" [max]=5></ngb-rating> -->
              <rating [(ngModel)]="rate" [max]="max"></rating>
            </div>
            <button class="btn btn-icon btn-sm btn-danger-light ms-3" id="rater-reset-button" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="Reset" (click)="clearRate = 0">
              <i  class="feather icon-rotate-cw feather-16"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
`;
  }
});

// angular:jit:style:src/app/features/ui-interface/advanced-ui/rating/rating.component.scss
var rating_component_default2;
var init_rating_component2 = __esm({
  "angular:jit:style:src/app/features/ui-interface/advanced-ui/rating/rating.component.scss"() {
    rating_component_default2 = "/* src/app/features/ui-interface/advanced-ui/rating/rating.component.scss */\n.rating.rating-custom-icon img {\n  margin: 2px;\n}\n/*# sourceMappingURL=rating.component.css.map */\n";
  }
});

// node_modules/ngx-bootstrap/rating/fesm2022/ngx-bootstrap-rating.mjs
var _RatingConfig, RatingConfig, RATING_CONTROL_VALUE_ACCESSOR, _RatingComponent, RatingComponent, _RatingModule, RatingModule;
var init_ngx_bootstrap_rating = __esm({
  "node_modules/ngx-bootstrap/rating/fesm2022/ngx-bootstrap-rating.mjs"() {
    "use strict";
    init_core();
    init_core();
    init_forms();
    init_common();
    _RatingConfig = class _RatingConfig {
      constructor() {
        this.ariaLabel = "rating";
      }
    };
    _RatingConfig.\u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.0.2", ngImport: core_exports, type: _RatingConfig, deps: [], target: FactoryTarget.Injectable });
    _RatingConfig.\u0275prov = \u0275\u0275ngDeclareInjectable({ minVersion: "12.0.0", version: "20.0.2", ngImport: core_exports, type: _RatingConfig, providedIn: "root" });
    RatingConfig = _RatingConfig;
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.0.2", ngImport: core_exports, type: RatingConfig, decorators: [{
      type: Injectable,
      args: [{
        providedIn: "root"
      }]
    }] });
    RATING_CONTROL_VALUE_ACCESSOR = {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => RatingComponent),
      multi: true
    };
    _RatingComponent = class _RatingComponent {
      constructor(changeDetection, config) {
        this.changeDetection = changeDetection;
        this.max = 5;
        this.readonly = false;
        this.titles = [];
        this.onHover = new EventEmitter();
        this.onLeave = new EventEmitter();
        this.onChange = Function.prototype;
        this.onTouched = Function.prototype;
        this.ariaLabel = "rating";
        this.range = [];
        this.value = 0;
        Object.assign(this, config);
      }
      onKeydown(event) {
        if ([37, 38, 39, 40].indexOf(event.which) === -1) {
          return;
        }
        event.preventDefault();
        event.stopPropagation();
        const sign = event.which === 38 || event.which === 39 ? 1 : -1;
        this.rate(this.value + sign);
      }
      ngOnInit() {
        this.max = this.max || 5;
        this.titles = typeof this.titles !== "undefined" && this.titles.length > 0 ? this.titles : [];
        this.range = this.buildTemplateObjects(this.max);
      }
      // model -> view
      writeValue(value) {
        if (value % 1 !== value) {
          this.value = Math.round(value);
          this.preValue = value;
          this.changeDetection.markForCheck();
          return;
        }
        this.preValue = value;
        this.value = value;
        this.changeDetection.markForCheck();
      }
      enter(value) {
        if (!this.readonly) {
          this.value = value;
          this.changeDetection.markForCheck();
          this.onHover.emit(value);
        }
      }
      reset() {
        if (typeof this.preValue === "number") {
          this.value = Math.round(this.preValue);
          this.changeDetection.markForCheck();
          this.onLeave.emit(this.value);
        }
      }
      registerOnChange(fn) {
        this.onChange = fn;
      }
      registerOnTouched(fn) {
        this.onTouched = fn;
      }
      rate(value) {
        if (!this.readonly && this.range && value >= 0 && value <= this.range.length) {
          this.writeValue(value);
          this.onChange(value);
        }
      }
      buildTemplateObjects(max) {
        const result = [];
        for (let i = 0; i < max; i++) {
          result.push({
            index: i,
            title: this.titles[i] || i + 1
          });
        }
        return result;
      }
    };
    _RatingComponent.\u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.0.2", ngImport: core_exports, type: _RatingComponent, deps: [{ token: ChangeDetectorRef }, { token: RatingConfig }], target: FactoryTarget.Component });
    _RatingComponent.\u0275cmp = \u0275\u0275ngDeclareComponent({ minVersion: "14.0.0", version: "20.0.2", type: _RatingComponent, isStandalone: true, selector: "rating", inputs: { max: "max", readonly: "readonly", titles: "titles", customTemplate: "customTemplate" }, outputs: { onHover: "onHover", onLeave: "onLeave" }, host: { listeners: { "keydown": "onKeydown($event)" } }, providers: [RATING_CONTROL_VALUE_ACCESSOR], ngImport: core_exports, template: `<span (mouseleave)="reset()" (keydown)="onKeydown($event)" tabindex="0"
      role="slider" aria-valuemin="0"
      [attr.aria-label]="ariaLabel"
      [attr.aria-valuemax]="range.length"
      [attr.aria-valuenow]="value">
  <ng-template #star let-value="value" let-index="index">{{ index < value ? '&#9733;' : '&#9734;' }}</ng-template>
  <ng-template ngFor let-r [ngForOf]="range" let-index="index">
    <span class="sr-only visually-hidden">({{ index < value ? '*' : ' ' }})</span>
    <span class="bs-rating-star"
          (mouseenter)="enter(index + 1)"
          (click)="rate(index + 1)"
          [title]="r.title"
          [style.cursor]="readonly ? 'default' : 'pointer'"
          [class.active]="index < value">
      <ng-template [ngTemplateOutlet]="customTemplate || star"
                   [ngTemplateOutletContext]="{index: index, value: value}">
      </ng-template>
    </span>
  </ng-template>
</span>
`, dependencies: [{ kind: "directive", type: NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { kind: "directive", type: NgTemplateOutlet, selector: "[ngTemplateOutlet]", inputs: ["ngTemplateOutletContext", "ngTemplateOutlet", "ngTemplateOutletInjector"] }], changeDetection: ChangeDetectionStrategy.OnPush });
    RatingComponent = _RatingComponent;
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.0.2", ngImport: core_exports, type: RatingComponent, decorators: [{
      type: Component,
      args: [{ selector: "rating", providers: [RATING_CONTROL_VALUE_ACCESSOR], changeDetection: ChangeDetectionStrategy.OnPush, standalone: true, imports: [NgForOf, NgTemplateOutlet], template: `<span (mouseleave)="reset()" (keydown)="onKeydown($event)" tabindex="0"
      role="slider" aria-valuemin="0"
      [attr.aria-label]="ariaLabel"
      [attr.aria-valuemax]="range.length"
      [attr.aria-valuenow]="value">
  <ng-template #star let-value="value" let-index="index">{{ index < value ? '&#9733;' : '&#9734;' }}</ng-template>
  <ng-template ngFor let-r [ngForOf]="range" let-index="index">
    <span class="sr-only visually-hidden">({{ index < value ? '*' : ' ' }})</span>
    <span class="bs-rating-star"
          (mouseenter)="enter(index + 1)"
          (click)="rate(index + 1)"
          [title]="r.title"
          [style.cursor]="readonly ? 'default' : 'pointer'"
          [class.active]="index < value">
      <ng-template [ngTemplateOutlet]="customTemplate || star"
                   [ngTemplateOutletContext]="{index: index, value: value}">
      </ng-template>
    </span>
  </ng-template>
</span>
` }]
    }], ctorParameters: () => [{ type: ChangeDetectorRef }, { type: RatingConfig }], propDecorators: { max: [{
      type: Input
    }], readonly: [{
      type: Input
    }], titles: [{
      type: Input
    }], customTemplate: [{
      type: Input
    }], onHover: [{
      type: Output
    }], onLeave: [{
      type: Output
    }], onKeydown: [{
      type: HostListener,
      args: ["keydown", ["$event"]]
    }] } });
    _RatingModule = class _RatingModule {
      // @deprecated method not required anymore, will be deleted in v19.0.0
      static forRoot() {
        return {
          ngModule: _RatingModule,
          providers: []
        };
      }
    };
    _RatingModule.\u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.0.2", ngImport: core_exports, type: _RatingModule, deps: [], target: FactoryTarget.NgModule });
    _RatingModule.\u0275mod = \u0275\u0275ngDeclareNgModule({ minVersion: "14.0.0", version: "20.0.2", ngImport: core_exports, type: _RatingModule, imports: [RatingComponent], exports: [RatingComponent] });
    _RatingModule.\u0275inj = \u0275\u0275ngDeclareInjector({ minVersion: "12.0.0", version: "20.0.2", ngImport: core_exports, type: _RatingModule });
    RatingModule = _RatingModule;
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.0.2", ngImport: core_exports, type: RatingModule, decorators: [{
      type: NgModule,
      args: [{
        imports: [RatingComponent],
        exports: [RatingComponent]
      }]
    }] });
  }
});

// src/app/features/ui-interface/advanced-ui/rating/rating.component.ts
function getRatingConfig() {
  return Object.assign(new RatingConfig(), { ariaLabel: "My Rating" });
}
var RatingComponent2;
var init_rating_component3 = __esm({
  "src/app/features/ui-interface/advanced-ui/rating/rating.component.ts"() {
    "use strict";
    init_tslib_es6();
    init_rating_component();
    init_rating_component2();
    init_core();
    init_common();
    init_core_index();
    init_ngx_bootstrap_rating();
    init_forms();
    RatingComponent2 = class RatingComponent3 {
      routes = routes;
      max = 5;
      rate = 3;
      basicStar = [
        { show: false },
        { show: false },
        { show: false },
        { show: false },
        { show: false }
      ];
      basicStar1 = [
        { show: false },
        { show: false },
        { show: false },
        { show: false },
        { show: false }
      ];
      savedStar = [
        { show: true },
        { show: true },
        { show: true },
        { show: false },
        { show: false }
      ];
      maxStar = [
        { show: false },
        { show: false },
        { show: false },
        { show: false },
        { show: false }
      ];
      readOnlyStar = [
        { show: true },
        { show: true },
        { show: true },
        { show: true },
        { show: true },
        { show: true },
        { show: false },
        { show: false },
        { show: false },
        { show: false }
      ];
      halfRatingStar = [
        { show: true, half: false },
        { show: true, half: false },
        { show: false, half: true },
        { show: false, half: false },
        { show: false, half: false }
      ];
      heartIcon = [
        { show: false },
        { show: false },
        { show: false },
        { show: false },
        { show: false }
      ];
      clickBasicStar(item, i, array) {
        if (item.show == false) {
          array.map((res, index) => {
            if (index <= i) {
              res.show = true;
            }
          });
        } else {
          array.map((res, index) => {
            if (index >= i && index != 0) {
              res.show = false;
            }
          });
        }
        if (array === this.halfRatingStar) {
          array.map((res) => {
            res.half = false;
          });
        }
      }
      clickBasicStar1(item, i, array) {
        if (item.show == false) {
          array.map((res, index) => {
            if (index <= i) {
              res.show = true;
            }
          });
        } else {
          array.map((res, index) => {
            if (index >= i && index != 0) {
              res.show = false;
            }
          });
        }
        this.increaseRating();
        if (array === this.halfRatingStar) {
          array.map((res) => {
            res.half = false;
          });
        }
      }
      liveRating = 1;
      increaseRating() {
        this.liveRating++;
      }
      resetStars() {
        this.heartIcon.forEach((item) => {
          item.show = false;
        });
      }
      hoverStar1(isHovered, index, halfRatingStar) {
        const item = halfRatingStar[index];
        if (item && item.half) {
          item.hover = isHovered;
        }
      }
      hoverStar(index, array) {
        for (let i = 0; i <= index; i++) {
          if (array[i]) {
            array[i].show = true;
          }
        }
        for (let i = index + 1; i < array.length; i++) {
          if (array[i]) {
            array[i].show = false;
          }
        }
      }
      // bread crumb items
      breadCrumbItems;
      readonly = false;
      defaultSelect = 3;
      currentRate = 2;
      customColor = 4;
      hoverSelect = 2;
      hovered = 0;
      clearRate = 2;
      constructor() {
      }
      ngOnInit() {
        this.breadCrumbItems = [
          { label: "Advance UI" },
          { label: "Ratings", active: true }
        ];
      }
      static ctorParameters = () => [];
    };
    RatingComponent2 = __decorate([
      Component({
        selector: "app-rating",
        template: rating_component_default,
        providers: [{ provide: RatingConfig, useFactory: getRatingConfig }],
        imports: [RatingModule, FormsModule, CommonModule],
        styles: [rating_component_default2]
      })
    ], RatingComponent2);
  }
});

// src/app/features/ui-interface/advanced-ui/rating/rating.component.spec.ts
var require_rating_component_spec = __commonJS({
  "src/app/features/ui-interface/advanced-ui/rating/rating.component.spec.ts"(exports) {
    init_testing();
    init_rating_component3();
    describe("RatingComponent", () => {
      let component;
      let fixture;
      beforeEach(() => __async(null, null, function* () {
        yield TestBed.configureTestingModule({
          declarations: [RatingComponent2]
        }).compileComponents();
        fixture = TestBed.createComponent(RatingComponent2);
        component = fixture.componentInstance;
        fixture.detectChanges();
      }));
      it("should create", () => {
        expect(component).toBeTruthy();
      });
    });
  }
});
export default require_rating_component_spec();
//# sourceMappingURL=spec-app-features-ui-interface-advanced-ui-rating-rating.component.spec.js.map

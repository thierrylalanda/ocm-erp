import {
  BaseComponent,
  BaseIcon,
  BaseStyle,
  Kt,
  MessageService,
  PrimeTemplate,
  SharedModule,
  TimesIcon,
  a,
  s2 as s,
  zindexutils
} from "./chunk-EZIYOP75.js";
import {
  routes
} from "./chunk-U2VXEBUE.js";
import {
  animate,
  animateChild,
  query,
  state,
  style,
  transition,
  trigger
} from "./chunk-SCUCSJ4X.js";
import "./chunk-PCRWA3NK.js";
import "./chunk-ZM5T2PIK.js";
import "./chunk-PQZYD7EB.js";
import {
  CommonModule,
  NgClass,
  NgForOf,
  NgIf,
  NgTemplateOutlet
} from "./chunk-ZV6UYXXV.js";
import {
  ChangeDetectionStrategy,
  Component,
  ContentChild,
  ContentChildren,
  EventEmitter,
  Injectable,
  Input,
  NgModule,
  NgZone,
  Output,
  ViewEncapsulation,
  booleanAttribute,
  inject,
  numberAttribute,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵInheritDefinitionFeature,
  ɵɵProvidersFeature,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassMap,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵcontentQuery,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdirectiveInject,
  ɵɵdomElement,
  ɵɵdomElementEnd,
  ɵɵdomElementStart,
  ɵɵdomProperty,
  ɵɵelement,
  ɵɵelementContainer,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵgetInheritedFactory,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵpureFunction1,
  ɵɵpureFunction2,
  ɵɵpureFunction4,
  ɵɵqueryRefresh,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵstyleMap,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-U4CEU3KS.js";
import "./chunk-TXDUYLVM.js";

// node_modules/primeng/fesm2022/primeng-icons-check.mjs
var _c0 = ["data-p-icon", "check"];
var CheckIcon = class _CheckIcon extends BaseIcon {
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275CheckIcon_BaseFactory;
    return function CheckIcon_Factory(__ngFactoryType__) {
      return (\u0275CheckIcon_BaseFactory || (\u0275CheckIcon_BaseFactory = \u0275\u0275getInheritedFactory(_CheckIcon)))(__ngFactoryType__ || _CheckIcon);
    };
  })();
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _CheckIcon,
    selectors: [["", "data-p-icon", "check"]],
    features: [\u0275\u0275InheritDefinitionFeature],
    attrs: _c0,
    decls: 1,
    vars: 0,
    consts: [["d", "M4.86199 11.5948C4.78717 11.5923 4.71366 11.5745 4.64596 11.5426C4.57826 11.5107 4.51779 11.4652 4.46827 11.4091L0.753985 7.69483C0.683167 7.64891 0.623706 7.58751 0.580092 7.51525C0.536478 7.44299 0.509851 7.36177 0.502221 7.27771C0.49459 7.19366 0.506156 7.10897 0.536046 7.03004C0.565935 6.95111 0.613367 6.88 0.674759 6.82208C0.736151 6.76416 0.8099 6.72095 0.890436 6.69571C0.970973 6.67046 1.05619 6.66385 1.13966 6.67635C1.22313 6.68886 1.30266 6.72017 1.37226 6.76792C1.44186 6.81567 1.4997 6.8786 1.54141 6.95197L4.86199 10.2503L12.6397 2.49483C12.7444 2.42694 12.8689 2.39617 12.9932 2.40745C13.1174 2.41873 13.2343 2.47141 13.3251 2.55705C13.4159 2.64268 13.4753 2.75632 13.4938 2.87973C13.5123 3.00315 13.4888 3.1292 13.4271 3.23768L5.2557 11.4091C5.20618 11.4652 5.14571 11.5107 5.07801 11.5426C5.01031 11.5745 4.9368 11.5923 4.86199 11.5948Z", "fill", "currentColor"]],
    template: function CheckIcon_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275namespaceSVG();
        \u0275\u0275domElement(0, "path", 0);
      }
    },
    encapsulation: 2
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CheckIcon, [{
    type: Component,
    args: [{
      selector: '[data-p-icon="check"]',
      standalone: true,
      template: `
        <svg:path
            d="M4.86199 11.5948C4.78717 11.5923 4.71366 11.5745 4.64596 11.5426C4.57826 11.5107 4.51779 11.4652 4.46827 11.4091L0.753985 7.69483C0.683167 7.64891 0.623706 7.58751 0.580092 7.51525C0.536478 7.44299 0.509851 7.36177 0.502221 7.27771C0.49459 7.19366 0.506156 7.10897 0.536046 7.03004C0.565935 6.95111 0.613367 6.88 0.674759 6.82208C0.736151 6.76416 0.8099 6.72095 0.890436 6.69571C0.970973 6.67046 1.05619 6.66385 1.13966 6.67635C1.22313 6.68886 1.30266 6.72017 1.37226 6.76792C1.44186 6.81567 1.4997 6.8786 1.54141 6.95197L4.86199 10.2503L12.6397 2.49483C12.7444 2.42694 12.8689 2.39617 12.9932 2.40745C13.1174 2.41873 13.2343 2.47141 13.3251 2.55705C13.4159 2.64268 13.4753 2.75632 13.4938 2.87973C13.5123 3.00315 13.4888 3.1292 13.4271 3.23768L5.2557 11.4091C5.20618 11.4652 5.14571 11.5107 5.07801 11.5426C5.01031 11.5745 4.9368 11.5923 4.86199 11.5948Z"
            fill="currentColor"
        />
    `
    }]
  }], null, null);
})();

// node_modules/primeng/fesm2022/primeng-icons-exclamationtriangle.mjs
var _c02 = ["data-p-icon", "exclamation-triangle"];
var ExclamationTriangleIcon = class _ExclamationTriangleIcon extends BaseIcon {
  pathId;
  ngOnInit() {
    super.ngOnInit();
    this.pathId = "url(#" + s() + ")";
  }
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275ExclamationTriangleIcon_BaseFactory;
    return function ExclamationTriangleIcon_Factory(__ngFactoryType__) {
      return (\u0275ExclamationTriangleIcon_BaseFactory || (\u0275ExclamationTriangleIcon_BaseFactory = \u0275\u0275getInheritedFactory(_ExclamationTriangleIcon)))(__ngFactoryType__ || _ExclamationTriangleIcon);
    };
  })();
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _ExclamationTriangleIcon,
    selectors: [["", "data-p-icon", "exclamation-triangle"]],
    features: [\u0275\u0275InheritDefinitionFeature],
    attrs: _c02,
    decls: 7,
    vars: 2,
    consts: [["d", "M13.4018 13.1893H0.598161C0.49329 13.189 0.390283 13.1615 0.299143 13.1097C0.208003 13.0578 0.131826 12.9832 0.0780112 12.8932C0.0268539 12.8015 0 12.6982 0 12.5931C0 12.4881 0.0268539 12.3848 0.0780112 12.293L6.47985 1.08982C6.53679 1.00399 6.61408 0.933574 6.70484 0.884867C6.7956 0.836159 6.897 0.810669 7 0.810669C7.103 0.810669 7.2044 0.836159 7.29516 0.884867C7.38592 0.933574 7.46321 1.00399 7.52015 1.08982L13.922 12.293C13.9731 12.3848 14 12.4881 14 12.5931C14 12.6982 13.9731 12.8015 13.922 12.8932C13.8682 12.9832 13.792 13.0578 13.7009 13.1097C13.6097 13.1615 13.5067 13.189 13.4018 13.1893ZM1.63046 11.989H12.3695L7 2.59425L1.63046 11.989Z", "fill", "currentColor"], ["d", "M6.99996 8.78801C6.84143 8.78594 6.68997 8.72204 6.57787 8.60993C6.46576 8.49782 6.40186 8.34637 6.39979 8.18784V5.38703C6.39979 5.22786 6.46302 5.0752 6.57557 4.96265C6.68813 4.85009 6.84078 4.78686 6.99996 4.78686C7.15914 4.78686 7.31179 4.85009 7.42435 4.96265C7.5369 5.0752 7.60013 5.22786 7.60013 5.38703V8.18784C7.59806 8.34637 7.53416 8.49782 7.42205 8.60993C7.30995 8.72204 7.15849 8.78594 6.99996 8.78801Z", "fill", "currentColor"], ["d", "M6.99996 11.1887C6.84143 11.1866 6.68997 11.1227 6.57787 11.0106C6.46576 10.8985 6.40186 10.7471 6.39979 10.5885V10.1884C6.39979 10.0292 6.46302 9.87658 6.57557 9.76403C6.68813 9.65147 6.84078 9.58824 6.99996 9.58824C7.15914 9.58824 7.31179 9.65147 7.42435 9.76403C7.5369 9.87658 7.60013 10.0292 7.60013 10.1884V10.5885C7.59806 10.7471 7.53416 10.8985 7.42205 11.0106C7.30995 11.1227 7.15849 11.1866 6.99996 11.1887Z", "fill", "currentColor"], [3, "id"], ["width", "14", "height", "14", "fill", "white"]],
    template: function ExclamationTriangleIcon_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275namespaceSVG();
        \u0275\u0275domElementStart(0, "g");
        \u0275\u0275domElement(1, "path", 0)(2, "path", 1)(3, "path", 2);
        \u0275\u0275domElementEnd();
        \u0275\u0275domElementStart(4, "defs")(5, "clipPath", 3);
        \u0275\u0275domElement(6, "rect", 4);
        \u0275\u0275domElementEnd()();
      }
      if (rf & 2) {
        \u0275\u0275attribute("clip-path", ctx.pathId);
        \u0275\u0275advance(5);
        \u0275\u0275domProperty("id", ctx.pathId);
      }
    },
    encapsulation: 2
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ExclamationTriangleIcon, [{
    type: Component,
    args: [{
      selector: '[data-p-icon="exclamation-triangle"]',
      standalone: true,
      template: `
        <svg:g [attr.clip-path]="pathId">
            <svg:path
                d="M13.4018 13.1893H0.598161C0.49329 13.189 0.390283 13.1615 0.299143 13.1097C0.208003 13.0578 0.131826 12.9832 0.0780112 12.8932C0.0268539 12.8015 0 12.6982 0 12.5931C0 12.4881 0.0268539 12.3848 0.0780112 12.293L6.47985 1.08982C6.53679 1.00399 6.61408 0.933574 6.70484 0.884867C6.7956 0.836159 6.897 0.810669 7 0.810669C7.103 0.810669 7.2044 0.836159 7.29516 0.884867C7.38592 0.933574 7.46321 1.00399 7.52015 1.08982L13.922 12.293C13.9731 12.3848 14 12.4881 14 12.5931C14 12.6982 13.9731 12.8015 13.922 12.8932C13.8682 12.9832 13.792 13.0578 13.7009 13.1097C13.6097 13.1615 13.5067 13.189 13.4018 13.1893ZM1.63046 11.989H12.3695L7 2.59425L1.63046 11.989Z"
                fill="currentColor"
            />
            <svg:path
                d="M6.99996 8.78801C6.84143 8.78594 6.68997 8.72204 6.57787 8.60993C6.46576 8.49782 6.40186 8.34637 6.39979 8.18784V5.38703C6.39979 5.22786 6.46302 5.0752 6.57557 4.96265C6.68813 4.85009 6.84078 4.78686 6.99996 4.78686C7.15914 4.78686 7.31179 4.85009 7.42435 4.96265C7.5369 5.0752 7.60013 5.22786 7.60013 5.38703V8.18784C7.59806 8.34637 7.53416 8.49782 7.42205 8.60993C7.30995 8.72204 7.15849 8.78594 6.99996 8.78801Z"
                fill="currentColor"
            />
            <svg:path
                d="M6.99996 11.1887C6.84143 11.1866 6.68997 11.1227 6.57787 11.0106C6.46576 10.8985 6.40186 10.7471 6.39979 10.5885V10.1884C6.39979 10.0292 6.46302 9.87658 6.57557 9.76403C6.68813 9.65147 6.84078 9.58824 6.99996 9.58824C7.15914 9.58824 7.31179 9.65147 7.42435 9.76403C7.5369 9.87658 7.60013 10.0292 7.60013 10.1884V10.5885C7.59806 10.7471 7.53416 10.8985 7.42205 11.0106C7.30995 11.1227 7.15849 11.1866 6.99996 11.1887Z"
                fill="currentColor"
            />
        </svg:g>
        <svg:defs>
            <svg:clipPath [id]="pathId">
                <svg:rect width="14" height="14" fill="white" />
            </svg:clipPath>
        </svg:defs>
    `
    }]
  }], null, null);
})();

// node_modules/primeng/fesm2022/primeng-icons-infocircle.mjs
var _c03 = ["data-p-icon", "info-circle"];
var InfoCircleIcon = class _InfoCircleIcon extends BaseIcon {
  pathId;
  ngOnInit() {
    super.ngOnInit();
    this.pathId = "url(#" + s() + ")";
  }
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275InfoCircleIcon_BaseFactory;
    return function InfoCircleIcon_Factory(__ngFactoryType__) {
      return (\u0275InfoCircleIcon_BaseFactory || (\u0275InfoCircleIcon_BaseFactory = \u0275\u0275getInheritedFactory(_InfoCircleIcon)))(__ngFactoryType__ || _InfoCircleIcon);
    };
  })();
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _InfoCircleIcon,
    selectors: [["", "data-p-icon", "info-circle"]],
    features: [\u0275\u0275InheritDefinitionFeature],
    attrs: _c03,
    decls: 5,
    vars: 2,
    consts: [["fill-rule", "evenodd", "clip-rule", "evenodd", "d", "M3.11101 12.8203C4.26215 13.5895 5.61553 14 7 14C8.85652 14 10.637 13.2625 11.9497 11.9497C13.2625 10.637 14 8.85652 14 7C14 5.61553 13.5895 4.26215 12.8203 3.11101C12.0511 1.95987 10.9579 1.06266 9.67879 0.532846C8.3997 0.00303296 6.99224 -0.13559 5.63437 0.134506C4.2765 0.404603 3.02922 1.07129 2.05026 2.05026C1.07129 3.02922 0.404603 4.2765 0.134506 5.63437C-0.13559 6.99224 0.00303296 8.3997 0.532846 9.67879C1.06266 10.9579 1.95987 12.0511 3.11101 12.8203ZM3.75918 2.14976C4.71846 1.50879 5.84628 1.16667 7 1.16667C8.5471 1.16667 10.0308 1.78125 11.1248 2.87521C12.2188 3.96918 12.8333 5.45291 12.8333 7C12.8333 8.15373 12.4912 9.28154 11.8502 10.2408C11.2093 11.2001 10.2982 11.9478 9.23232 12.3893C8.16642 12.8308 6.99353 12.9463 5.86198 12.7212C4.73042 12.4962 3.69102 11.9406 2.87521 11.1248C2.05941 10.309 1.50384 9.26958 1.27876 8.13803C1.05367 7.00647 1.16919 5.83358 1.61071 4.76768C2.05222 3.70178 2.79989 2.79074 3.75918 2.14976ZM7.00002 4.8611C6.84594 4.85908 6.69873 4.79698 6.58977 4.68801C6.48081 4.57905 6.4187 4.43185 6.41669 4.27776V3.88888C6.41669 3.73417 6.47815 3.58579 6.58754 3.4764C6.69694 3.367 6.84531 3.30554 7.00002 3.30554C7.15473 3.30554 7.3031 3.367 7.4125 3.4764C7.52189 3.58579 7.58335 3.73417 7.58335 3.88888V4.27776C7.58134 4.43185 7.51923 4.57905 7.41027 4.68801C7.30131 4.79698 7.1541 4.85908 7.00002 4.8611ZM7.00002 10.6945C6.84594 10.6925 6.69873 10.6304 6.58977 10.5214C6.48081 10.4124 6.4187 10.2652 6.41669 10.1111V6.22225C6.41669 6.06754 6.47815 5.91917 6.58754 5.80977C6.69694 5.70037 6.84531 5.63892 7.00002 5.63892C7.15473 5.63892 7.3031 5.70037 7.4125 5.80977C7.52189 5.91917 7.58335 6.06754 7.58335 6.22225V10.1111C7.58134 10.2652 7.51923 10.4124 7.41027 10.5214C7.30131 10.6304 7.1541 10.6925 7.00002 10.6945Z", "fill", "currentColor"], [3, "id"], ["width", "14", "height", "14", "fill", "white"]],
    template: function InfoCircleIcon_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275namespaceSVG();
        \u0275\u0275domElementStart(0, "g");
        \u0275\u0275domElement(1, "path", 0);
        \u0275\u0275domElementEnd();
        \u0275\u0275domElementStart(2, "defs")(3, "clipPath", 1);
        \u0275\u0275domElement(4, "rect", 2);
        \u0275\u0275domElementEnd()();
      }
      if (rf & 2) {
        \u0275\u0275attribute("clip-path", ctx.pathId);
        \u0275\u0275advance(3);
        \u0275\u0275domProperty("id", ctx.pathId);
      }
    },
    encapsulation: 2
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(InfoCircleIcon, [{
    type: Component,
    args: [{
      selector: '[data-p-icon="info-circle"]',
      standalone: true,
      template: `
        <svg:g [attr.clip-path]="pathId">
            <svg:path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M3.11101 12.8203C4.26215 13.5895 5.61553 14 7 14C8.85652 14 10.637 13.2625 11.9497 11.9497C13.2625 10.637 14 8.85652 14 7C14 5.61553 13.5895 4.26215 12.8203 3.11101C12.0511 1.95987 10.9579 1.06266 9.67879 0.532846C8.3997 0.00303296 6.99224 -0.13559 5.63437 0.134506C4.2765 0.404603 3.02922 1.07129 2.05026 2.05026C1.07129 3.02922 0.404603 4.2765 0.134506 5.63437C-0.13559 6.99224 0.00303296 8.3997 0.532846 9.67879C1.06266 10.9579 1.95987 12.0511 3.11101 12.8203ZM3.75918 2.14976C4.71846 1.50879 5.84628 1.16667 7 1.16667C8.5471 1.16667 10.0308 1.78125 11.1248 2.87521C12.2188 3.96918 12.8333 5.45291 12.8333 7C12.8333 8.15373 12.4912 9.28154 11.8502 10.2408C11.2093 11.2001 10.2982 11.9478 9.23232 12.3893C8.16642 12.8308 6.99353 12.9463 5.86198 12.7212C4.73042 12.4962 3.69102 11.9406 2.87521 11.1248C2.05941 10.309 1.50384 9.26958 1.27876 8.13803C1.05367 7.00647 1.16919 5.83358 1.61071 4.76768C2.05222 3.70178 2.79989 2.79074 3.75918 2.14976ZM7.00002 4.8611C6.84594 4.85908 6.69873 4.79698 6.58977 4.68801C6.48081 4.57905 6.4187 4.43185 6.41669 4.27776V3.88888C6.41669 3.73417 6.47815 3.58579 6.58754 3.4764C6.69694 3.367 6.84531 3.30554 7.00002 3.30554C7.15473 3.30554 7.3031 3.367 7.4125 3.4764C7.52189 3.58579 7.58335 3.73417 7.58335 3.88888V4.27776C7.58134 4.43185 7.51923 4.57905 7.41027 4.68801C7.30131 4.79698 7.1541 4.85908 7.00002 4.8611ZM7.00002 10.6945C6.84594 10.6925 6.69873 10.6304 6.58977 10.5214C6.48081 10.4124 6.4187 10.2652 6.41669 10.1111V6.22225C6.41669 6.06754 6.47815 5.91917 6.58754 5.80977C6.69694 5.70037 6.84531 5.63892 7.00002 5.63892C7.15473 5.63892 7.3031 5.70037 7.4125 5.80977C7.52189 5.91917 7.58335 6.06754 7.58335 6.22225V10.1111C7.58134 10.2652 7.51923 10.4124 7.41027 10.5214C7.30131 10.6304 7.1541 10.6925 7.00002 10.6945Z"
                fill="currentColor"
            />
        </svg:g>
        <svg:defs>
            <svg:clipPath [id]="pathId">
                <svg:rect width="14" height="14" fill="white" />
            </svg:clipPath>
        </svg:defs>
    `
    }]
  }], null, null);
})();

// node_modules/primeng/fesm2022/primeng-icons-timescircle.mjs
var _c04 = ["data-p-icon", "times-circle"];
var TimesCircleIcon = class _TimesCircleIcon extends BaseIcon {
  pathId;
  ngOnInit() {
    super.ngOnInit();
    this.pathId = "url(#" + s() + ")";
  }
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275TimesCircleIcon_BaseFactory;
    return function TimesCircleIcon_Factory(__ngFactoryType__) {
      return (\u0275TimesCircleIcon_BaseFactory || (\u0275TimesCircleIcon_BaseFactory = \u0275\u0275getInheritedFactory(_TimesCircleIcon)))(__ngFactoryType__ || _TimesCircleIcon);
    };
  })();
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _TimesCircleIcon,
    selectors: [["", "data-p-icon", "times-circle"]],
    features: [\u0275\u0275InheritDefinitionFeature],
    attrs: _c04,
    decls: 5,
    vars: 2,
    consts: [["fill-rule", "evenodd", "clip-rule", "evenodd", "d", "M7 14C5.61553 14 4.26215 13.5895 3.11101 12.8203C1.95987 12.0511 1.06266 10.9579 0.532846 9.67879C0.00303296 8.3997 -0.13559 6.99224 0.134506 5.63437C0.404603 4.2765 1.07129 3.02922 2.05026 2.05026C3.02922 1.07129 4.2765 0.404603 5.63437 0.134506C6.99224 -0.13559 8.3997 0.00303296 9.67879 0.532846C10.9579 1.06266 12.0511 1.95987 12.8203 3.11101C13.5895 4.26215 14 5.61553 14 7C14 8.85652 13.2625 10.637 11.9497 11.9497C10.637 13.2625 8.85652 14 7 14ZM7 1.16667C5.84628 1.16667 4.71846 1.50879 3.75918 2.14976C2.79989 2.79074 2.05222 3.70178 1.61071 4.76768C1.16919 5.83358 1.05367 7.00647 1.27876 8.13803C1.50384 9.26958 2.05941 10.309 2.87521 11.1248C3.69102 11.9406 4.73042 12.4962 5.86198 12.7212C6.99353 12.9463 8.16642 12.8308 9.23232 12.3893C10.2982 11.9478 11.2093 11.2001 11.8502 10.2408C12.4912 9.28154 12.8333 8.15373 12.8333 7C12.8333 5.45291 12.2188 3.96918 11.1248 2.87521C10.0308 1.78125 8.5471 1.16667 7 1.16667ZM4.66662 9.91668C4.58998 9.91704 4.51404 9.90209 4.44325 9.87271C4.37246 9.84333 4.30826 9.8001 4.2544 9.74557C4.14516 9.6362 4.0838 9.48793 4.0838 9.33335C4.0838 9.17876 4.14516 9.0305 4.2544 8.92113L6.17553 7L4.25443 5.07891C4.15139 4.96832 4.09529 4.82207 4.09796 4.67094C4.10063 4.51982 4.16185 4.37563 4.26872 4.26876C4.3756 4.16188 4.51979 4.10066 4.67091 4.09799C4.82204 4.09532 4.96829 4.15142 5.07887 4.25446L6.99997 6.17556L8.92106 4.25446C9.03164 4.15142 9.1779 4.09532 9.32903 4.09799C9.48015 4.10066 9.62434 4.16188 9.73121 4.26876C9.83809 4.37563 9.89931 4.51982 9.90198 4.67094C9.90464 4.82207 9.84855 4.96832 9.74551 5.07891L7.82441 7L9.74554 8.92113C9.85478 9.0305 9.91614 9.17876 9.91614 9.33335C9.91614 9.48793 9.85478 9.6362 9.74554 9.74557C9.69168 9.8001 9.62748 9.84333 9.55669 9.87271C9.4859 9.90209 9.40996 9.91704 9.33332 9.91668C9.25668 9.91704 9.18073 9.90209 9.10995 9.87271C9.03916 9.84333 8.97495 9.8001 8.9211 9.74557L6.99997 7.82444L5.07884 9.74557C5.02499 9.8001 4.96078 9.84333 4.88999 9.87271C4.81921 9.90209 4.74326 9.91704 4.66662 9.91668Z", "fill", "currentColor"], [3, "id"], ["width", "14", "height", "14", "fill", "white"]],
    template: function TimesCircleIcon_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275namespaceSVG();
        \u0275\u0275domElementStart(0, "g");
        \u0275\u0275domElement(1, "path", 0);
        \u0275\u0275domElementEnd();
        \u0275\u0275domElementStart(2, "defs")(3, "clipPath", 1);
        \u0275\u0275domElement(4, "rect", 2);
        \u0275\u0275domElementEnd()();
      }
      if (rf & 2) {
        \u0275\u0275attribute("clip-path", ctx.pathId);
        \u0275\u0275advance(3);
        \u0275\u0275domProperty("id", ctx.pathId);
      }
    },
    encapsulation: 2
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TimesCircleIcon, [{
    type: Component,
    args: [{
      selector: '[data-p-icon="times-circle"]',
      standalone: true,
      template: `
        <svg:g [attr.clip-path]="pathId">
            <svg:path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M7 14C5.61553 14 4.26215 13.5895 3.11101 12.8203C1.95987 12.0511 1.06266 10.9579 0.532846 9.67879C0.00303296 8.3997 -0.13559 6.99224 0.134506 5.63437C0.404603 4.2765 1.07129 3.02922 2.05026 2.05026C3.02922 1.07129 4.2765 0.404603 5.63437 0.134506C6.99224 -0.13559 8.3997 0.00303296 9.67879 0.532846C10.9579 1.06266 12.0511 1.95987 12.8203 3.11101C13.5895 4.26215 14 5.61553 14 7C14 8.85652 13.2625 10.637 11.9497 11.9497C10.637 13.2625 8.85652 14 7 14ZM7 1.16667C5.84628 1.16667 4.71846 1.50879 3.75918 2.14976C2.79989 2.79074 2.05222 3.70178 1.61071 4.76768C1.16919 5.83358 1.05367 7.00647 1.27876 8.13803C1.50384 9.26958 2.05941 10.309 2.87521 11.1248C3.69102 11.9406 4.73042 12.4962 5.86198 12.7212C6.99353 12.9463 8.16642 12.8308 9.23232 12.3893C10.2982 11.9478 11.2093 11.2001 11.8502 10.2408C12.4912 9.28154 12.8333 8.15373 12.8333 7C12.8333 5.45291 12.2188 3.96918 11.1248 2.87521C10.0308 1.78125 8.5471 1.16667 7 1.16667ZM4.66662 9.91668C4.58998 9.91704 4.51404 9.90209 4.44325 9.87271C4.37246 9.84333 4.30826 9.8001 4.2544 9.74557C4.14516 9.6362 4.0838 9.48793 4.0838 9.33335C4.0838 9.17876 4.14516 9.0305 4.2544 8.92113L6.17553 7L4.25443 5.07891C4.15139 4.96832 4.09529 4.82207 4.09796 4.67094C4.10063 4.51982 4.16185 4.37563 4.26872 4.26876C4.3756 4.16188 4.51979 4.10066 4.67091 4.09799C4.82204 4.09532 4.96829 4.15142 5.07887 4.25446L6.99997 6.17556L8.92106 4.25446C9.03164 4.15142 9.1779 4.09532 9.32903 4.09799C9.48015 4.10066 9.62434 4.16188 9.73121 4.26876C9.83809 4.37563 9.89931 4.51982 9.90198 4.67094C9.90464 4.82207 9.84855 4.96832 9.74551 5.07891L7.82441 7L9.74554 8.92113C9.85478 9.0305 9.91614 9.17876 9.91614 9.33335C9.91614 9.48793 9.85478 9.6362 9.74554 9.74557C9.69168 9.8001 9.62748 9.84333 9.55669 9.87271C9.4859 9.90209 9.40996 9.91704 9.33332 9.91668C9.25668 9.91704 9.18073 9.90209 9.10995 9.87271C9.03916 9.84333 8.97495 9.8001 8.9211 9.74557L6.99997 7.82444L5.07884 9.74557C5.02499 9.8001 4.96078 9.84333 4.88999 9.87271C4.81921 9.90209 4.74326 9.91704 4.66662 9.91668Z"
                fill="currentColor"
            />
        </svg:g>
        <svg:defs>
            <svg:clipPath [id]="pathId">
                <svg:rect width="14" height="14" fill="white" />
            </svg:clipPath>
        </svg:defs>
    `
    }]
  }], null, null);
})();

// node_modules/@primeuix/styles/dist/toast/index.mjs
var style2 = "\n    .p-toast {\n        width: dt('toast.width');\n        white-space: pre-line;\n        word-break: break-word;\n    }\n\n    .p-toast-message {\n        margin: 0 0 1rem 0;\n    }\n\n    .p-toast-message-icon {\n        flex-shrink: 0;\n        font-size: dt('toast.icon.size');\n        width: dt('toast.icon.size');\n        height: dt('toast.icon.size');\n    }\n\n    .p-toast-message-content {\n        display: flex;\n        align-items: flex-start;\n        padding: dt('toast.content.padding');\n        gap: dt('toast.content.gap');\n    }\n\n    .p-toast-message-text {\n        flex: 1 1 auto;\n        display: flex;\n        flex-direction: column;\n        gap: dt('toast.text.gap');\n    }\n\n    .p-toast-summary {\n        font-weight: dt('toast.summary.font.weight');\n        font-size: dt('toast.summary.font.size');\n    }\n\n    .p-toast-detail {\n        font-weight: dt('toast.detail.font.weight');\n        font-size: dt('toast.detail.font.size');\n    }\n\n    .p-toast-close-button {\n        display: flex;\n        align-items: center;\n        justify-content: center;\n        overflow: hidden;\n        position: relative;\n        cursor: pointer;\n        background: transparent;\n        transition:\n            background dt('toast.transition.duration'),\n            color dt('toast.transition.duration'),\n            outline-color dt('toast.transition.duration'),\n            box-shadow dt('toast.transition.duration');\n        outline-color: transparent;\n        color: inherit;\n        width: dt('toast.close.button.width');\n        height: dt('toast.close.button.height');\n        border-radius: dt('toast.close.button.border.radius');\n        margin: -25% 0 0 0;\n        right: -25%;\n        padding: 0;\n        border: none;\n        user-select: none;\n    }\n\n    .p-toast-close-button:dir(rtl) {\n        margin: -25% 0 0 auto;\n        left: -25%;\n        right: auto;\n    }\n\n    .p-toast-message-info,\n    .p-toast-message-success,\n    .p-toast-message-warn,\n    .p-toast-message-error,\n    .p-toast-message-secondary,\n    .p-toast-message-contrast {\n        border-width: dt('toast.border.width');\n        border-style: solid;\n        backdrop-filter: blur(dt('toast.blur'));\n        border-radius: dt('toast.border.radius');\n    }\n\n    .p-toast-close-icon {\n        font-size: dt('toast.close.icon.size');\n        width: dt('toast.close.icon.size');\n        height: dt('toast.close.icon.size');\n    }\n\n    .p-toast-close-button:focus-visible {\n        outline-width: dt('focus.ring.width');\n        outline-style: dt('focus.ring.style');\n        outline-offset: dt('focus.ring.offset');\n    }\n\n    .p-toast-message-info {\n        background: dt('toast.info.background');\n        border-color: dt('toast.info.border.color');\n        color: dt('toast.info.color');\n        box-shadow: dt('toast.info.shadow');\n    }\n\n    .p-toast-message-info .p-toast-detail {\n        color: dt('toast.info.detail.color');\n    }\n\n    .p-toast-message-info .p-toast-close-button:focus-visible {\n        outline-color: dt('toast.info.close.button.focus.ring.color');\n        box-shadow: dt('toast.info.close.button.focus.ring.shadow');\n    }\n\n    .p-toast-message-info .p-toast-close-button:hover {\n        background: dt('toast.info.close.button.hover.background');\n    }\n\n    .p-toast-message-success {\n        background: dt('toast.success.background');\n        border-color: dt('toast.success.border.color');\n        color: dt('toast.success.color');\n        box-shadow: dt('toast.success.shadow');\n    }\n\n    .p-toast-message-success .p-toast-detail {\n        color: dt('toast.success.detail.color');\n    }\n\n    .p-toast-message-success .p-toast-close-button:focus-visible {\n        outline-color: dt('toast.success.close.button.focus.ring.color');\n        box-shadow: dt('toast.success.close.button.focus.ring.shadow');\n    }\n\n    .p-toast-message-success .p-toast-close-button:hover {\n        background: dt('toast.success.close.button.hover.background');\n    }\n\n    .p-toast-message-warn {\n        background: dt('toast.warn.background');\n        border-color: dt('toast.warn.border.color');\n        color: dt('toast.warn.color');\n        box-shadow: dt('toast.warn.shadow');\n    }\n\n    .p-toast-message-warn .p-toast-detail {\n        color: dt('toast.warn.detail.color');\n    }\n\n    .p-toast-message-warn .p-toast-close-button:focus-visible {\n        outline-color: dt('toast.warn.close.button.focus.ring.color');\n        box-shadow: dt('toast.warn.close.button.focus.ring.shadow');\n    }\n\n    .p-toast-message-warn .p-toast-close-button:hover {\n        background: dt('toast.warn.close.button.hover.background');\n    }\n\n    .p-toast-message-error {\n        background: dt('toast.error.background');\n        border-color: dt('toast.error.border.color');\n        color: dt('toast.error.color');\n        box-shadow: dt('toast.error.shadow');\n    }\n\n    .p-toast-message-error .p-toast-detail {\n        color: dt('toast.error.detail.color');\n    }\n\n    .p-toast-message-error .p-toast-close-button:focus-visible {\n        outline-color: dt('toast.error.close.button.focus.ring.color');\n        box-shadow: dt('toast.error.close.button.focus.ring.shadow');\n    }\n\n    .p-toast-message-error .p-toast-close-button:hover {\n        background: dt('toast.error.close.button.hover.background');\n    }\n\n    .p-toast-message-secondary {\n        background: dt('toast.secondary.background');\n        border-color: dt('toast.secondary.border.color');\n        color: dt('toast.secondary.color');\n        box-shadow: dt('toast.secondary.shadow');\n    }\n\n    .p-toast-message-secondary .p-toast-detail {\n        color: dt('toast.secondary.detail.color');\n    }\n\n    .p-toast-message-secondary .p-toast-close-button:focus-visible {\n        outline-color: dt('toast.secondary.close.button.focus.ring.color');\n        box-shadow: dt('toast.secondary.close.button.focus.ring.shadow');\n    }\n\n    .p-toast-message-secondary .p-toast-close-button:hover {\n        background: dt('toast.secondary.close.button.hover.background');\n    }\n\n    .p-toast-message-contrast {\n        background: dt('toast.contrast.background');\n        border-color: dt('toast.contrast.border.color');\n        color: dt('toast.contrast.color');\n        box-shadow: dt('toast.contrast.shadow');\n    }\n\n    .p-toast-message-contrast .p-toast-detail {\n        color: dt('toast.contrast.detail.color');\n    }\n\n    .p-toast-message-contrast .p-toast-close-button:focus-visible {\n        outline-color: dt('toast.contrast.close.button.focus.ring.color');\n        box-shadow: dt('toast.contrast.close.button.focus.ring.shadow');\n    }\n\n    .p-toast-message-contrast .p-toast-close-button:hover {\n        background: dt('toast.contrast.close.button.hover.background');\n    }\n\n    .p-toast-top-center {\n        transform: translateX(-50%);\n    }\n\n    .p-toast-bottom-center {\n        transform: translateX(-50%);\n    }\n\n    .p-toast-center {\n        min-width: 20vw;\n        transform: translate(-50%, -50%);\n    }\n\n    .p-toast-message-enter-from {\n        opacity: 0;\n        transform: translateY(50%);\n    }\n\n    .p-toast-message-leave-from {\n        max-height: 1000px;\n    }\n\n    .p-toast .p-toast-message.p-toast-message-leave-to {\n        max-height: 0;\n        opacity: 0;\n        margin-bottom: 0;\n        overflow: hidden;\n    }\n\n    .p-toast-message-enter-active {\n        transition:\n            transform 0.3s,\n            opacity 0.3s;\n    }\n\n    .p-toast-message-leave-active {\n        transition:\n            max-height 0.45s cubic-bezier(0, 1, 0, 1),\n            opacity 0.3s,\n            margin-bottom 0.3s;\n    }\n";

// node_modules/primeng/fesm2022/primeng-toast.mjs
var _c05 = (a0, a1, a2, a3) => ({
  showTransformParams: a0,
  hideTransformParams: a1,
  showTransitionParams: a2,
  hideTransitionParams: a3
});
var _c1 = (a0) => ({
  value: "visible",
  params: a0
});
var _c2 = (a0, a1) => ({
  $implicit: a0,
  closeFn: a1
});
var _c3 = (a0) => ({
  $implicit: a0
});
function ToastItem_Conditional_2_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function ToastItem_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, ToastItem_Conditional_2_ng_container_0_Template, 1, 0, "ng-container", 3);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("ngTemplateOutlet", ctx_r1.headlessTemplate)("ngTemplateOutletContext", \u0275\u0275pureFunction2(2, _c2, ctx_r1.message, ctx_r1.onCloseIconClick));
  }
}
function ToastItem_Conditional_3_ng_container_1_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span");
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275classMap(ctx_r1.cn(ctx_r1.cx("messageIcon"), ctx_r1.message == null ? null : ctx_r1.message.icon));
  }
}
function ToastItem_Conditional_3_ng_container_1_Conditional_2_Case_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275element(0, "svg", 10);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275classMap(ctx_r1.cx("messageIcon"));
    \u0275\u0275attribute("aria-hidden", true)("data-pc-section", "icon");
  }
}
function ToastItem_Conditional_3_ng_container_1_Conditional_2_Case_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275element(0, "svg", 11);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275classMap(ctx_r1.cx("messageIcon"));
    \u0275\u0275attribute("aria-hidden", true)("data-pc-section", "icon");
  }
}
function ToastItem_Conditional_3_ng_container_1_Conditional_2_Case_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275element(0, "svg", 12);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275classMap(ctx_r1.cx("messageIcon"));
    \u0275\u0275attribute("aria-hidden", true)("data-pc-section", "icon");
  }
}
function ToastItem_Conditional_3_ng_container_1_Conditional_2_Case_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275element(0, "svg", 13);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275classMap(ctx_r1.cx("messageIcon"));
    \u0275\u0275attribute("aria-hidden", true)("data-pc-section", "icon");
  }
}
function ToastItem_Conditional_3_ng_container_1_Conditional_2_Case_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275element(0, "svg", 11);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275classMap(ctx_r1.cx("messageIcon"));
    \u0275\u0275attribute("aria-hidden", true)("data-pc-section", "icon");
  }
}
function ToastItem_Conditional_3_ng_container_1_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, ToastItem_Conditional_3_ng_container_1_Conditional_2_Case_0_Template, 1, 4, ":svg:svg", 6)(1, ToastItem_Conditional_3_ng_container_1_Conditional_2_Case_1_Template, 1, 4, ":svg:svg", 7)(2, ToastItem_Conditional_3_ng_container_1_Conditional_2_Case_2_Template, 1, 4, ":svg:svg", 8)(3, ToastItem_Conditional_3_ng_container_1_Conditional_2_Case_3_Template, 1, 4, ":svg:svg", 9)(4, ToastItem_Conditional_3_ng_container_1_Conditional_2_Case_4_Template, 1, 4, ":svg:svg", 7);
  }
  if (rf & 2) {
    let tmp_4_0;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275conditional((tmp_4_0 = ctx_r1.message.severity) === "success" ? 0 : tmp_4_0 === "info" ? 1 : tmp_4_0 === "error" ? 2 : tmp_4_0 === "warn" ? 3 : 4);
  }
}
function ToastItem_Conditional_3_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275conditionalCreate(1, ToastItem_Conditional_3_ng_container_1_Conditional_1_Template, 1, 2, "span", 2)(2, ToastItem_Conditional_3_ng_container_1_Conditional_2_Template, 5, 1);
    \u0275\u0275elementStart(3, "div", 5)(4, "div", 5);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 5);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.message.icon ? 1 : 2);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngClass", ctx_r1.cx("messageText"));
    \u0275\u0275attribute("data-pc-section", "text");
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", ctx_r1.cx("summary"));
    \u0275\u0275attribute("data-pc-section", "summary");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.message.summary, " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", ctx_r1.cx("detail"));
    \u0275\u0275attribute("data-pc-section", "detail");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.message.detail);
  }
}
function ToastItem_Conditional_3_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function ToastItem_Conditional_3_Conditional_3_Conditional_2_span_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span");
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275classMap(ctx_r1.cn(ctx_r1.cx("closeIcon"), ctx_r1.message == null ? null : ctx_r1.message.closeIcon));
  }
}
function ToastItem_Conditional_3_Conditional_3_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, ToastItem_Conditional_3_Conditional_3_Conditional_2_span_0_Template, 1, 2, "span", 16);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275property("ngIf", ctx_r1.message.closeIcon);
  }
}
function ToastItem_Conditional_3_Conditional_3_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275element(0, "svg", 17);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275classMap(ctx_r1.cx("closeIcon"));
    \u0275\u0275attribute("aria-hidden", true)("data-pc-section", "closeicon");
  }
}
function ToastItem_Conditional_3_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div")(1, "button", 14);
    \u0275\u0275listener("click", function ToastItem_Conditional_3_Conditional_3_Template_button_click_1_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onCloseIconClick($event));
    })("keydown.enter", function ToastItem_Conditional_3_Conditional_3_Template_button_keydown_enter_1_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onCloseIconClick($event));
    });
    \u0275\u0275conditionalCreate(2, ToastItem_Conditional_3_Conditional_3_Conditional_2_Template, 1, 1, "span", 2)(3, ToastItem_Conditional_3_Conditional_3_Conditional_3_Template, 1, 4, ":svg:svg", 15);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275attribute("class", ctx_r1.cx("closeButton"))("aria-label", ctx_r1.closeAriaLabel)("data-pc-section", "closebutton");
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.message.closeIcon ? 2 : 3);
  }
}
function ToastItem_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div");
    \u0275\u0275template(1, ToastItem_Conditional_3_ng_container_1_Template, 8, 9, "ng-container", 4)(2, ToastItem_Conditional_3_ng_container_2_Template, 1, 0, "ng-container", 3);
    \u0275\u0275conditionalCreate(3, ToastItem_Conditional_3_Conditional_3_Template, 4, 4, "div");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275classMap(ctx_r1.cn(ctx_r1.cx("messageContent"), ctx_r1.message == null ? null : ctx_r1.message.contentStyleClass));
    \u0275\u0275attribute("data-pc-section", "content");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.template);
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", ctx_r1.template)("ngTemplateOutletContext", \u0275\u0275pureFunction1(7, _c3, ctx_r1.message));
    \u0275\u0275advance();
    \u0275\u0275conditional((ctx_r1.message == null ? null : ctx_r1.message.closable) !== false ? 3 : -1);
  }
}
var _c4 = ["message"];
var _c5 = ["headless"];
function Toast_p_toastItem_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "p-toastItem", 1);
    \u0275\u0275listener("onClose", function Toast_p_toastItem_0_Template_p_toastItem_onClose_0_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onMessageClose($event));
    })("@toastAnimation.start", function Toast_p_toastItem_0_Template_p_toastItem_animation_toastAnimation_start_0_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onAnimationStart($event));
    })("@toastAnimation.done", function Toast_p_toastItem_0_Template_p_toastItem_animation_toastAnimation_done_0_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onAnimationEnd($event));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const msg_r3 = ctx.$implicit;
    const i_r4 = ctx.index;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("message", msg_r3)("index", i_r4)("life", ctx_r1.life)("template", ctx_r1.template || ctx_r1._template)("headlessTemplate", ctx_r1.headlessTemplate || ctx_r1._headlessTemplate)("@toastAnimation", void 0)("showTransformOptions", ctx_r1.showTransformOptions)("hideTransformOptions", ctx_r1.hideTransformOptions)("showTransitionOptions", ctx_r1.showTransitionOptions)("hideTransitionOptions", ctx_r1.hideTransitionOptions);
  }
}
var inlineStyles = {
  root: ({
    instance
  }) => {
    const {
      _position
    } = instance;
    return {
      position: "fixed",
      top: _position === "top-right" || _position === "top-left" || _position === "top-center" ? "20px" : _position === "center" ? "50%" : null,
      right: (_position === "top-right" || _position === "bottom-right") && "20px",
      bottom: (_position === "bottom-left" || _position === "bottom-right" || _position === "bottom-center") && "20px",
      left: _position === "top-left" || _position === "bottom-left" ? "20px" : _position === "center" || _position === "top-center" || _position === "bottom-center" ? "50%" : null
    };
  }
};
var classes = {
  root: ({
    instance
  }) => ["p-toast p-component", `p-toast-${instance._position}`],
  message: ({
    instance
  }) => ({
    "p-toast-message": true,
    "p-toast-message-info": instance.message.severity === "info" || instance.message.severity === void 0,
    "p-toast-message-warn": instance.message.severity === "warn",
    "p-toast-message-error": instance.message.severity === "error",
    "p-toast-message-success": instance.message.severity === "success",
    "p-toast-message-secondary": instance.message.severity === "secondary",
    "p-toast-message-contrast": instance.message.severity === "contrast"
  }),
  messageContent: "p-toast-message-content",
  messageIcon: ({
    instance
  }) => ({
    "p-toast-message-icon": true,
    [`pi ${instance.message.icon}`]: !!instance.message.icon
  }),
  messageText: "p-toast-message-text",
  summary: "p-toast-summary",
  detail: "p-toast-detail",
  closeButton: "p-toast-close-button",
  closeIcon: ({
    instance
  }) => ({
    "p-toast-close-icon": true,
    [`pi ${instance.message.closeIcon}`]: !!instance.message.closeIcon
  })
};
var ToastStyle = class _ToastStyle extends BaseStyle {
  name = "toast";
  theme = style2;
  classes = classes;
  inlineStyles = inlineStyles;
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275ToastStyle_BaseFactory;
    return function ToastStyle_Factory(__ngFactoryType__) {
      return (\u0275ToastStyle_BaseFactory || (\u0275ToastStyle_BaseFactory = \u0275\u0275getInheritedFactory(_ToastStyle)))(__ngFactoryType__ || _ToastStyle);
    };
  })();
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _ToastStyle,
    factory: _ToastStyle.\u0275fac
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ToastStyle, [{
    type: Injectable
  }], null, null);
})();
var ToastClasses;
(function(ToastClasses2) {
  ToastClasses2["root"] = "p-toast";
  ToastClasses2["message"] = "p-toast-message";
  ToastClasses2["messageContent"] = "p-toast-message-content";
  ToastClasses2["messageIcon"] = "p-toast-message-icon";
  ToastClasses2["messageText"] = "p-toast-message-text";
  ToastClasses2["summary"] = "p-toast-summary";
  ToastClasses2["detail"] = "p-toast-detail";
  ToastClasses2["closeButton"] = "p-toast-close-button";
  ToastClasses2["closeIcon"] = "p-toast-close-icon";
})(ToastClasses || (ToastClasses = {}));
var ToastItem = class _ToastItem extends BaseComponent {
  zone;
  message;
  index;
  life;
  template;
  headlessTemplate;
  showTransformOptions;
  hideTransformOptions;
  showTransitionOptions;
  hideTransitionOptions;
  onClose = new EventEmitter();
  _componentStyle = inject(ToastStyle);
  timeout;
  constructor(zone) {
    super();
    this.zone = zone;
  }
  ngAfterViewInit() {
    super.ngAfterViewInit();
    this.initTimeout();
  }
  initTimeout() {
    if (!this.message?.sticky) {
      this.zone.runOutsideAngular(() => {
        this.timeout = setTimeout(() => {
          this.onClose.emit({
            index: this.index,
            message: this.message
          });
        }, this.message?.life || this.life || 3e3);
      });
    }
  }
  clearTimeout() {
    if (this.timeout) {
      clearTimeout(this.timeout);
      this.timeout = null;
    }
  }
  onMouseEnter() {
    this.clearTimeout();
  }
  onMouseLeave() {
    this.initTimeout();
  }
  onCloseIconClick = (event) => {
    this.clearTimeout();
    this.onClose.emit({
      index: this.index,
      message: this.message
    });
    event.preventDefault();
  };
  get closeAriaLabel() {
    return this.config.translation.aria ? this.config.translation.aria.close : void 0;
  }
  ngOnDestroy() {
    this.clearTimeout();
    super.ngOnDestroy();
  }
  static \u0275fac = function ToastItem_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ToastItem)(\u0275\u0275directiveInject(NgZone));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _ToastItem,
    selectors: [["p-toastItem"]],
    inputs: {
      message: "message",
      index: [2, "index", "index", numberAttribute],
      life: [2, "life", "life", numberAttribute],
      template: "template",
      headlessTemplate: "headlessTemplate",
      showTransformOptions: "showTransformOptions",
      hideTransformOptions: "hideTransformOptions",
      showTransitionOptions: "showTransitionOptions",
      hideTransitionOptions: "hideTransitionOptions"
    },
    outputs: {
      onClose: "onClose"
    },
    features: [\u0275\u0275ProvidersFeature([ToastStyle]), \u0275\u0275InheritDefinitionFeature],
    decls: 4,
    vars: 14,
    consts: [["container", ""], ["role", "alert", "aria-live", "assertive", "aria-atomic", "true", 3, "mouseenter", "mouseleave"], [3, "class"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], [4, "ngIf"], [3, "ngClass"], ["data-p-icon", "check", 3, "class"], ["data-p-icon", "info-circle", 3, "class"], ["data-p-icon", "times-circle", 3, "class"], ["data-p-icon", "exclamation-triangle", 3, "class"], ["data-p-icon", "check"], ["data-p-icon", "info-circle"], ["data-p-icon", "times-circle"], ["data-p-icon", "exclamation-triangle"], ["type", "button", "autofocus", "", 3, "click", "keydown.enter"], ["data-p-icon", "times", 3, "class"], [3, "class", 4, "ngIf"], ["data-p-icon", "times"]],
    template: function ToastItem_Template(rf, ctx) {
      if (rf & 1) {
        const _r1 = \u0275\u0275getCurrentView();
        \u0275\u0275elementStart(0, "div", 1, 0);
        \u0275\u0275listener("mouseenter", function ToastItem_Template_div_mouseenter_0_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.onMouseEnter());
        })("mouseleave", function ToastItem_Template_div_mouseleave_0_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.onMouseLeave());
        });
        \u0275\u0275conditionalCreate(2, ToastItem_Conditional_2_Template, 1, 5, "ng-container")(3, ToastItem_Conditional_3_Template, 4, 9, "div", 2);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275classMap(ctx.cn(ctx.cx("message"), ctx.message == null ? null : ctx.message.styleClass));
        \u0275\u0275property("@messageState", \u0275\u0275pureFunction1(12, _c1, \u0275\u0275pureFunction4(7, _c05, ctx.showTransformOptions, ctx.hideTransformOptions, ctx.showTransitionOptions, ctx.hideTransitionOptions)));
        \u0275\u0275attribute("id", ctx.message == null ? null : ctx.message.id)("data-pc-name", "toast")("data-pc-section", "root");
        \u0275\u0275advance(2);
        \u0275\u0275conditional(ctx.headlessTemplate ? 2 : 3);
      }
    },
    dependencies: [CommonModule, NgClass, NgIf, NgTemplateOutlet, CheckIcon, ExclamationTriangleIcon, InfoCircleIcon, TimesIcon, TimesCircleIcon, SharedModule],
    encapsulation: 2,
    data: {
      animation: [trigger("messageState", [state("visible", style({
        transform: "translateY(0)",
        opacity: 1
      })), transition("void => *", [style({
        transform: "{{showTransformParams}}",
        opacity: 0
      }), animate("{{showTransitionParams}}")]), transition("* => void", [animate("{{hideTransitionParams}}", style({
        height: 0,
        opacity: 0,
        transform: "{{hideTransformParams}}"
      }))])])]
    },
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ToastItem, [{
    type: Component,
    args: [{
      selector: "p-toastItem",
      standalone: true,
      imports: [CommonModule, CheckIcon, ExclamationTriangleIcon, InfoCircleIcon, TimesIcon, TimesCircleIcon, SharedModule],
      template: `
        <div
            #container
            [attr.id]="message?.id"
            [class]="cn(cx('message'), message?.styleClass)"
            [@messageState]="{
                value: 'visible',
                params: {
                    showTransformParams: showTransformOptions,
                    hideTransformParams: hideTransformOptions,
                    showTransitionParams: showTransitionOptions,
                    hideTransitionParams: hideTransitionOptions
                }
            }"
            (mouseenter)="onMouseEnter()"
            (mouseleave)="onMouseLeave()"
            role="alert"
            aria-live="assertive"
            aria-atomic="true"
            [attr.data-pc-name]="'toast'"
            [attr.data-pc-section]="'root'"
        >
            @if (headlessTemplate) {
                <ng-container *ngTemplateOutlet="headlessTemplate; context: { $implicit: message, closeFn: onCloseIconClick }"></ng-container>
            } @else {
                <div [class]="cn(cx('messageContent'), message?.contentStyleClass)" [attr.data-pc-section]="'content'">
                    <ng-container *ngIf="!template">
                        @if (message.icon) {
                            <span [class]="cn(cx('messageIcon'), message?.icon)"></span>
                        } @else {
                            @switch (message.severity) {
                                @case ('success') {
                                    <svg data-p-icon="check" [class]="cx('messageIcon')" [attr.aria-hidden]="true" [attr.data-pc-section]="'icon'" />
                                }
                                @case ('info') {
                                    <svg data-p-icon="info-circle" [class]="cx('messageIcon')" [attr.aria-hidden]="true" [attr.data-pc-section]="'icon'" />
                                }
                                @case ('error') {
                                    <svg data-p-icon="times-circle" [class]="cx('messageIcon')" [attr.aria-hidden]="true" [attr.data-pc-section]="'icon'" />
                                }
                                @case ('warn') {
                                    <svg data-p-icon="exclamation-triangle" [class]="cx('messageIcon')" [attr.aria-hidden]="true" [attr.data-pc-section]="'icon'" />
                                }
                                @default {
                                    <svg data-p-icon="info-circle" [class]="cx('messageIcon')" [attr.aria-hidden]="true" [attr.data-pc-section]="'icon'" />
                                }
                            }
                        }
                        <div [ngClass]="cx('messageText')" [attr.data-pc-section]="'text'">
                            <div [ngClass]="cx('summary')" [attr.data-pc-section]="'summary'">
                                {{ message.summary }}
                            </div>
                            <div [ngClass]="cx('detail')" [attr.data-pc-section]="'detail'">{{ message.detail }}</div>
                        </div>
                    </ng-container>
                    <ng-container *ngTemplateOutlet="template; context: { $implicit: message }"></ng-container>
                    @if (message?.closable !== false) {
                        <div>
                            <button type="button" [attr.class]="cx('closeButton')" (click)="onCloseIconClick($event)" (keydown.enter)="onCloseIconClick($event)" [attr.aria-label]="closeAriaLabel" [attr.data-pc-section]="'closebutton'" autofocus>
                                @if (message.closeIcon) {
                                    <span *ngIf="message.closeIcon" [class]="cn(cx('closeIcon'), message?.closeIcon)"></span>
                                } @else {
                                    <svg data-p-icon="times" [class]="cx('closeIcon')" [attr.aria-hidden]="true" [attr.data-pc-section]="'closeicon'" />
                                }
                            </button>
                        </div>
                    }
                </div>
            }
        </div>
    `,
      animations: [trigger("messageState", [state("visible", style({
        transform: "translateY(0)",
        opacity: 1
      })), transition("void => *", [style({
        transform: "{{showTransformParams}}",
        opacity: 0
      }), animate("{{showTransitionParams}}")]), transition("* => void", [animate("{{hideTransitionParams}}", style({
        height: 0,
        opacity: 0,
        transform: "{{hideTransformParams}}"
      }))])])],
      encapsulation: ViewEncapsulation.None,
      changeDetection: ChangeDetectionStrategy.OnPush,
      providers: [ToastStyle]
    }]
  }], () => [{
    type: NgZone
  }], {
    message: [{
      type: Input
    }],
    index: [{
      type: Input,
      args: [{
        transform: numberAttribute
      }]
    }],
    life: [{
      type: Input,
      args: [{
        transform: numberAttribute
      }]
    }],
    template: [{
      type: Input
    }],
    headlessTemplate: [{
      type: Input
    }],
    showTransformOptions: [{
      type: Input
    }],
    hideTransformOptions: [{
      type: Input
    }],
    showTransitionOptions: [{
      type: Input
    }],
    hideTransitionOptions: [{
      type: Input
    }],
    onClose: [{
      type: Output
    }]
  });
})();
var Toast = class _Toast extends BaseComponent {
  /**
   * Key of the message in case message is targeted to a specific toast component.
   * @group Props
   */
  key;
  /**
   * Whether to automatically manage layering.
   * @group Props
   */
  autoZIndex = true;
  /**
   * Base zIndex value to use in layering.
   * @group Props
   */
  baseZIndex = 0;
  /**
   * The default time to display messages for in milliseconds.
   * @group Props
   */
  life = 3e3;
  /**
   * Inline class of the component.
   * @deprecated since v20.0.0, use `class` instead.
   * @group Props
   */
  styleClass;
  /**
   * Position of the toast in viewport.
   * @group Props
   */
  get position() {
    return this._position;
  }
  set position(value) {
    this._position = value;
    this.cd.markForCheck();
  }
  /**
   * It does not add the new message if there is already a toast displayed with the same content
   * @group Props
   */
  preventOpenDuplicates = false;
  /**
   * Displays only once a message with the same content.
   * @group Props
   */
  preventDuplicates = false;
  /**
   * Transform options of the show animation.
   * @group Props
   */
  showTransformOptions = "translateY(100%)";
  /**
   * Transform options of the hide animation.
   * @group Props
   */
  hideTransformOptions = "translateY(-100%)";
  /**
   * Transition options of the show animation.
   * @group Props
   */
  showTransitionOptions = "300ms ease-out";
  /**
   * Transition options of the hide animation.
   * @group Props
   */
  hideTransitionOptions = "250ms ease-in";
  /**
   * Object literal to define styles per screen size.
   * @group Props
   */
  breakpoints;
  /**
   * Callback to invoke when a message is closed.
   * @param {ToastCloseEvent} event - custom close event.
   * @group Emits
   */
  onClose = new EventEmitter();
  /**
   * Custom template of message.
   * @group Templates
   */
  template;
  /**
   * Custom headless template.
   * @group Templates
   */
  headlessTemplate;
  messageSubscription;
  clearSubscription;
  messages;
  messagesArchieve;
  _position = "top-right";
  messageService = inject(MessageService);
  _componentStyle = inject(ToastStyle);
  styleElement;
  id = s("pn_id_");
  templates;
  constructor() {
    super();
  }
  ngOnInit() {
    super.ngOnInit();
    this.messageSubscription = this.messageService.messageObserver.subscribe((messages) => {
      if (messages) {
        if (Array.isArray(messages)) {
          const filteredMessages = messages.filter((m) => this.canAdd(m));
          this.add(filteredMessages);
        } else if (this.canAdd(messages)) {
          this.add([messages]);
        }
      }
    });
    this.clearSubscription = this.messageService.clearObserver.subscribe((key) => {
      if (key) {
        if (this.key === key) {
          this.messages = null;
        }
      } else {
        this.messages = null;
      }
      this.cd.markForCheck();
    });
  }
  _template;
  _headlessTemplate;
  ngAfterContentInit() {
    this.templates?.forEach((item) => {
      switch (item.getType()) {
        case "message":
          this._template = item.template;
          break;
        case "headless":
          this._headlessTemplate = item.template;
          break;
        default:
          this._template = item.template;
          break;
      }
    });
  }
  ngAfterViewInit() {
    super.ngAfterViewInit();
    if (this.breakpoints) {
      this.createStyle();
    }
  }
  add(messages) {
    this.messages = this.messages ? [...this.messages, ...messages] : [...messages];
    if (this.preventDuplicates) {
      this.messagesArchieve = this.messagesArchieve ? [...this.messagesArchieve, ...messages] : [...messages];
    }
    this.cd.markForCheck();
  }
  canAdd(message) {
    let allow = this.key === message.key;
    if (allow && this.preventOpenDuplicates) {
      allow = !this.containsMessage(this.messages, message);
    }
    if (allow && this.preventDuplicates) {
      allow = !this.containsMessage(this.messagesArchieve, message);
    }
    return allow;
  }
  containsMessage(collection, message) {
    if (!collection) {
      return false;
    }
    return collection.find((m) => {
      return m.summary === message.summary && m.detail == message.detail && m.severity === message.severity;
    }) != null;
  }
  onMessageClose(event) {
    this.messages?.splice(event.index, 1);
    this.onClose.emit({
      message: event.message
    });
    this.cd.detectChanges();
  }
  onAnimationStart(event) {
    if (event.fromState === "void") {
      this.renderer.setAttribute(this.el?.nativeElement, this.id, "");
      if (this.autoZIndex && this.el?.nativeElement.style.zIndex === "") {
        zindexutils.set("modal", this.el?.nativeElement, this.baseZIndex || this.config.zIndex.modal);
      }
    }
  }
  onAnimationEnd(event) {
    if (event.toState === "void") {
      if (this.autoZIndex && a(this.messages)) {
        zindexutils.clear(this.el?.nativeElement);
      }
    }
  }
  createStyle() {
    if (!this.styleElement) {
      this.styleElement = this.renderer.createElement("style");
      this.styleElement.type = "text/css";
      this.renderer.appendChild(this.document.head, this.styleElement);
      let innerHTML = "";
      for (let breakpoint in this.breakpoints) {
        let breakpointStyle = "";
        for (let styleProp in this.breakpoints[breakpoint]) {
          breakpointStyle += styleProp + ":" + this.breakpoints[breakpoint][styleProp] + " !important;";
        }
        innerHTML += `
                    @media screen and (max-width: ${breakpoint}) {
                        .p-toast[${this.id}] {
                           ${breakpointStyle}
                        }
                    }
                `;
      }
      this.renderer.setProperty(this.styleElement, "innerHTML", innerHTML);
      Kt(this.styleElement, "nonce", this.config?.csp()?.nonce);
    }
  }
  destroyStyle() {
    if (this.styleElement) {
      this.renderer.removeChild(this.document.head, this.styleElement);
      this.styleElement = null;
    }
  }
  ngOnDestroy() {
    if (this.messageSubscription) {
      this.messageSubscription.unsubscribe();
    }
    if (this.el && this.autoZIndex) {
      zindexutils.clear(this.el.nativeElement);
    }
    if (this.clearSubscription) {
      this.clearSubscription.unsubscribe();
    }
    this.destroyStyle();
    super.ngOnDestroy();
  }
  static \u0275fac = function Toast_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _Toast)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _Toast,
    selectors: [["p-toast"]],
    contentQueries: function Toast_ContentQueries(rf, ctx, dirIndex) {
      if (rf & 1) {
        \u0275\u0275contentQuery(dirIndex, _c4, 5);
        \u0275\u0275contentQuery(dirIndex, _c5, 5);
        \u0275\u0275contentQuery(dirIndex, PrimeTemplate, 4);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.template = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.headlessTemplate = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.templates = _t);
      }
    },
    hostVars: 4,
    hostBindings: function Toast_HostBindings(rf, ctx) {
      if (rf & 2) {
        \u0275\u0275styleMap(ctx.sx("root"));
        \u0275\u0275classMap(ctx.cn(ctx.cx("root"), ctx.styleClass));
      }
    },
    inputs: {
      key: "key",
      autoZIndex: [2, "autoZIndex", "autoZIndex", booleanAttribute],
      baseZIndex: [2, "baseZIndex", "baseZIndex", numberAttribute],
      life: [2, "life", "life", numberAttribute],
      styleClass: "styleClass",
      position: "position",
      preventOpenDuplicates: [2, "preventOpenDuplicates", "preventOpenDuplicates", booleanAttribute],
      preventDuplicates: [2, "preventDuplicates", "preventDuplicates", booleanAttribute],
      showTransformOptions: "showTransformOptions",
      hideTransformOptions: "hideTransformOptions",
      showTransitionOptions: "showTransitionOptions",
      hideTransitionOptions: "hideTransitionOptions",
      breakpoints: "breakpoints"
    },
    outputs: {
      onClose: "onClose"
    },
    features: [\u0275\u0275ProvidersFeature([ToastStyle]), \u0275\u0275InheritDefinitionFeature],
    decls: 1,
    vars: 1,
    consts: [[3, "message", "index", "life", "template", "headlessTemplate", "showTransformOptions", "hideTransformOptions", "showTransitionOptions", "hideTransitionOptions", "onClose", 4, "ngFor", "ngForOf"], [3, "onClose", "message", "index", "life", "template", "headlessTemplate", "showTransformOptions", "hideTransformOptions", "showTransitionOptions", "hideTransitionOptions"]],
    template: function Toast_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275template(0, Toast_p_toastItem_0_Template, 1, 10, "p-toastItem", 0);
      }
      if (rf & 2) {
        \u0275\u0275property("ngForOf", ctx.messages);
      }
    },
    dependencies: [CommonModule, NgForOf, ToastItem, SharedModule],
    encapsulation: 2,
    data: {
      animation: [trigger("toastAnimation", [transition(":enter, :leave", [query("@*", animateChild())])])]
    },
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Toast, [{
    type: Component,
    args: [{
      selector: "p-toast",
      standalone: true,
      imports: [CommonModule, ToastItem, SharedModule],
      template: `
        <p-toastItem
            *ngFor="let msg of messages; let i = index"
            [message]="msg"
            [index]="i"
            [life]="life"
            (onClose)="onMessageClose($event)"
            [template]="template || _template"
            [headlessTemplate]="headlessTemplate || _headlessTemplate"
            @toastAnimation
            (@toastAnimation.start)="onAnimationStart($event)"
            (@toastAnimation.done)="onAnimationEnd($event)"
            [showTransformOptions]="showTransformOptions"
            [hideTransformOptions]="hideTransformOptions"
            [showTransitionOptions]="showTransitionOptions"
            [hideTransitionOptions]="hideTransitionOptions"
        ></p-toastItem>
    `,
      animations: [trigger("toastAnimation", [transition(":enter, :leave", [query("@*", animateChild())])])],
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation.None,
      providers: [ToastStyle],
      host: {
        "[class]": "cn(cx('root'), styleClass)",
        "[style]": "sx('root')"
      }
    }]
  }], () => [], {
    key: [{
      type: Input
    }],
    autoZIndex: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    baseZIndex: [{
      type: Input,
      args: [{
        transform: numberAttribute
      }]
    }],
    life: [{
      type: Input,
      args: [{
        transform: numberAttribute
      }]
    }],
    styleClass: [{
      type: Input
    }],
    position: [{
      type: Input
    }],
    preventOpenDuplicates: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    preventDuplicates: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    showTransformOptions: [{
      type: Input
    }],
    hideTransformOptions: [{
      type: Input
    }],
    showTransitionOptions: [{
      type: Input
    }],
    hideTransitionOptions: [{
      type: Input
    }],
    breakpoints: [{
      type: Input
    }],
    onClose: [{
      type: Output
    }],
    template: [{
      type: ContentChild,
      args: ["message"]
    }],
    headlessTemplate: [{
      type: ContentChild,
      args: ["headless"]
    }],
    templates: [{
      type: ContentChildren,
      args: [PrimeTemplate]
    }]
  });
})();
var ToastModule = class _ToastModule {
  static \u0275fac = function ToastModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ToastModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
    type: _ToastModule,
    imports: [Toast, SharedModule],
    exports: [Toast, SharedModule]
  });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
    imports: [Toast, SharedModule, SharedModule]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ToastModule, [{
    type: NgModule,
    args: [{
      imports: [Toast, SharedModule],
      exports: [Toast, SharedModule]
    }]
  }], null, null);
})();

// src/app/features/ui-interface/base-ui/toasts/toasts.component.ts
var ToastsComponent = class _ToastsComponent {
  messageService;
  routes = routes;
  constructor(messageService) {
    this.messageService = messageService;
  }
  show() {
    this.messageService.add({
      summary: "Toast",
      detail: "Hello, world! This is a toast message."
    });
  }
  showPrimaryColor() {
    this.messageService.add({
      summary: "Toast",
      detail: "Your,toast message here.",
      styleClass: "primary-light-popover"
    });
  }
  showSecondaryColor() {
    this.messageService.add({
      summary: "Toast",
      detail: "Your,toast message here.",
      styleClass: "secondary-light-popover"
    });
  }
  showWarningColor() {
    this.messageService.add({
      summary: "Toast",
      detail: "Your,toast message here.",
      styleClass: "primary-light-popover"
    });
  }
  showInfoColor() {
    this.messageService.add({
      summary: "Toast",
      detail: "Your,toast message here.",
      styleClass: "info-light-popover"
    });
  }
  showSuccessColor() {
    this.messageService.add({
      summary: "Toast",
      detail: "Your,toast message here.",
      styleClass: "success-light-popover"
    });
  }
  showDangerColor() {
    this.messageService.add({
      summary: "Error",
      detail: "Your,toast message here.",
      styleClass: "danger-light-popover"
    });
  }
  showPrimaryBackground() {
    this.messageService.add({
      summary: "Toast",
      detail: "Your,toast message here.",
      styleClass: "primary-background-popover"
    });
  }
  showSecondaryBackground() {
    this.messageService.add({
      summary: "Toast",
      detail: "Your,toast message here.",
      styleClass: "secondary-background-popover"
    });
  }
  showWarningBackground() {
    this.messageService.add({
      summary: "Toast",
      detail: "Your,toast message here.",
      styleClass: "warning-background-popover"
    });
  }
  showInfoBackground() {
    this.messageService.add({
      summary: "Toast",
      detail: "Your,toast message here.",
      styleClass: "info-background-popover"
    });
  }
  showSuccessBackground() {
    this.messageService.add({
      summary: "Toast",
      detail: "Your,toast message here.",
      styleClass: "success-background-popover"
    });
  }
  showDangerBackground() {
    this.messageService.add({
      summary: "Toast",
      detail: "Your,toast message here.",
      styleClass: "danger-background-popover"
    });
  }
  showTopLeft() {
    this.messageService.add({
      key: "tl",
      summary: "Toast",
      detail: "Your,toast message here.",
      styleClass: "primary-light-popover"
    });
  }
  showTopCenter() {
    this.messageService.add({
      key: "tc",
      summary: "Toast",
      detail: "Your,toast message here.",
      styleClass: "primary-light-popover"
    });
  }
  showTopRight() {
    this.messageService.add({
      key: "tr",
      summary: "Toast",
      detail: "Your,toast message here.",
      styleClass: "primary-light-popover"
    });
  }
  showMiddleLeft() {
    this.messageService.add({
      key: "ml",
      summary: "Toast",
      detail: "Your,toast message here.",
      styleClass: "primary-light-popover"
    });
  }
  showBottomLeft() {
    this.messageService.add({
      key: "bl",
      summary: "Toast",
      detail: "Your,toast message here.",
      styleClass: "primary-light-popover"
    });
  }
  showBottomCenter() {
    this.messageService.add({
      key: "bc",
      summary: "Toast",
      detail: "Your,toast message here.",
      styleClass: "primary-light-popover"
    });
  }
  showBottomRight() {
    this.messageService.add({
      key: "br",
      summary: "Toast",
      detail: "Your,toast message here.",
      styleClass: "primary-light-popover"
    });
  }
  static \u0275fac = function ToastsComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ToastsComponent)(\u0275\u0275directiveInject(MessageService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ToastsComponent, selectors: [["app-toasts"]], features: [\u0275\u0275ProvidersFeature([MessageService])], decls: 371, vars: 0, consts: [[1, "page-header"], [1, "page-title"], [1, "row"], [1, "col-xl-4"], [1, "card"], [1, "card-header", "justify-content-between"], [1, "card-title"], [1, "card-body"], ["type", "button", "id", "liveToastBtn", "pButton", "", "pRipple", "", "label", "Show", 1, "btn", "btn-primary", "btn-wave", 3, "click"], [1, "toast-container", "position-fixed", "top-0", "end-0", "p-3"], ["id", "liveToast", "role", "alert", "aria-live", "assertive", "aria-atomic", "true", 1, "toast"], [1, "toast-header", "text-default"], [1, "me-auto"], ["type", "button", "data-bs-dismiss", "toast", "aria-label", "Close", 1, "btn-close"], [1, "toast-body"], ["role", "alert", "aria-live", "assertive", "aria-atomic", "true", 1, "toast", "align-items-center", "text-bg-primary", "border-0", "fade", "show", "mb-4"], [1, "d-flex"], ["type", "button", "data-bs-dismiss", "toast", "aria-label", "Close", 1, "btn-close", "btn-close-white", "me-2", "m-auto"], ["role", "alert", "aria-live", "assertive", "aria-atomic", "true", 1, "toast", "align-items-center", "text-bg-secondary", "border-0", "fade", "show", "mb-4"], ["role", "alert", "aria-live", "assertive", "aria-atomic", "true", 1, "toast", "align-items-center", "text-bg-success", "border-0", "fade", "show", "mb-4"], ["role", "alert", "aria-live", "assertive", "aria-atomic", "true", 1, "toast", "align-items-center", "text-bg-info", "border-0", "fade", "show"], ["role", "alert", "aria-live", "assertive", "aria-atomic", "true", 1, "toast", "fade", "show"], [1, "toast-container", "position-static"], [1, "text-muted"], ["role", "alert", "aria-live", "assertive", "aria-atomic", "true", 1, "toast", "align-items-center", "fade", "show", "mb-3"], ["type", "button", "data-bs-dismiss", "toast", "aria-label", "Close", 1, "btn-close", "me-2", "m-auto"], [1, "my-4", "text-muted"], ["role", "alert", "aria-live", "assertive", "aria-atomic", "true", 1, "toast", "fade", "show", "mt-2"], [1, "mt-2", "pt-2", "border-top"], ["type", "button", 1, "btn", "btn-primary", "btn-sm", "btn-wave", "me-1"], ["type", "button", "data-bs-dismiss", "toast", 1, "btn", "btn-secondary", "btn-sm", "btn-wave"], [1, "col-xl-6"], [1, "btn-list"], ["type", "button", "id", "primaryToastBtn", 1, "btn", "btn-primary-light", "me-2", "btn-wave", 3, "click"], ["key", "toast1"], ["type", "button", "id", "secondaryToastBtn", 1, "btn", "btn-secondary-light", "me-2", "btn-wave", 3, "click"], ["key", "toast2"], ["type", "button", "id", "warningToastBtn", 1, "btn", "btn-warning-light", "me-2", "btn-wave", 3, "click"], ["key", "toast3"], ["type", "button", "id", "infoToastBtn", 1, "btn", "btn-info-light", "me-2", "btn-wave", 3, "click"], ["key", "toast4"], ["type", "button", "id", "successToastBtn", 1, "btn", "btn-success-light", "me-2", "btn-wave", 3, "click"], ["key", "toast5"], ["type", "button", "id", "dangerToastBtn", 1, "btn", "btn-danger-light", "me-2", "btn-wave", 3, "click"], ["key", "toast6"], ["id", "primaryToast", "role", "alert", "aria-live", "assertive", "aria-atomic", "true", 1, "toast", "colored-toast", "bg-primary-transparent"], [1, "toast-header", "bg-primary", "text-fixed-white"], ["id", "secondaryToast", "role", "alert", "aria-live", "assertive", "aria-atomic", "true", 1, "toast", "colored-toast", "bg-secondary-transparent"], [1, "toast-header", "bg-secondary", "text-fixed-white"], ["id", "warningToast", "role", "alert", "aria-live", "assertive", "aria-atomic", "true", 1, "toast", "colored-toast", "bg-warning-transparent"], [1, "toast-header", "bg-warning", "text-fixed-white"], ["id", "infoToast", "role", "alert", "aria-live", "assertive", "aria-atomic", "true", 1, "toast", "colored-toast", "bg-info-transparent"], [1, "toast-header", "bg-info", "text-fixed-white"], ["id", "successToast", "role", "alert", "aria-live", "assertive", "aria-atomic", "true", 1, "toast", "colored-toast", "bg-success-transparent"], [1, "toast-header", "bg-success", "text-fixed-white"], ["id", "dangerToast", "role", "alert", "aria-live", "assertive", "aria-atomic", "true", 1, "toast", "colored-toast", "bg-danger-transparent"], [1, "toast-header", "bg-danger", "text-fixed-white"], ["type", "button", "id", "solidprimaryToastBtn", 1, "btn", "btn-primary", "me-2", "btn-wave", 3, "click"], ["type", "button", "id", "solidsecondaryToastBtn", 1, "btn", "btn-secondary", "me-2", "btn-wave", 3, "click"], ["type", "button", "id", "solidwarningToastBtn", 1, "btn", "btn-warning", "me-2", "btn-wave", 3, "click"], ["type", "button", "id", "solidinfoToastBtn", 1, "btn", "btn-info", "me-2", "btn-wave", 3, "click"], ["type", "button", "id", "solidsuccessToastBtn", 1, "btn", "btn-success", "me-2", "btn-wave", 3, "click"], ["type", "button", "id", "soliddangerToastBtn", 1, "btn", "btn-danger", "me-2", "btn-wave", 3, "click"], ["id", "solid-primaryToast", "role", "alert", "aria-live", "assertive", "aria-atomic", "true", 1, "toast", "colored-toast", "bg-primary", "text-fixed-white"], ["id", "solid-secondaryToast", "role", "alert", "aria-live", "assertive", "aria-atomic", "true", 1, "toast", "colored-toast", "bg-secondary", "text-fixed-white"], ["id", "solid-warningToast", "role", "alert", "aria-live", "assertive", "aria-atomic", "true", 1, "toast", "colored-toast", "bg-warning", "text-fixed-white"], ["id", "solid-infoToast", "role", "alert", "aria-live", "assertive", "aria-atomic", "true", 1, "toast", "colored-toast", "bg-info", "text-fixed-white"], ["id", "solid-successToast", "role", "alert", "aria-live", "assertive", "aria-atomic", "true", 1, "toast", "colored-toast", "bg-success", "text-fixed-white"], ["id", "solid-dangerToast", "role", "alert", "aria-live", "assertive", "aria-atomic", "true", 1, "toast", "colored-toast", "bg-danger", "text-fixed-white"], [1, "col-xl-12"], ["type", "button", "id", "topleftToastBtn", 1, "btn", "btn-outline-primary", "me-2", "btn-wave", 3, "click"], ["position", "top-left", "key", "tl"], ["type", "button", "id", "topcenterToastBtn", 1, "btn", "btn-outline-primary", "me-2", "btn-wave", 3, "click"], ["position", "top-center", "key", "tc"], ["type", "button", "id", "toprightToastBtn", 1, "btn", "btn-outline-primary", "me-2", "btn-wave", 3, "click"], ["position", "top-right", "key", "tr"], ["type", "button", "id", "bottomleftToastBtn", 1, "btn", "btn-outline-primary", "me-2", "btn-wave", 3, "click"], ["position", "bottom-left", "key", "bl"], ["type", "button", "id", "bottomcenterToastBtn", 1, "btn", "btn-outline-primary", "me-2", "btn-wave", 3, "click"], ["position", "bottom-center", "key", "bc"], ["type", "button", "id", "bottomrightToastBtn", 1, "btn", "btn-outline-primary", "me-2", "btn-wave", 3, "click"], ["position", "bottom-right", "key", "br"], [1, "toast-container", "position-fixed", "top-0", "start-0", "p-3"], ["id", "topleft-Toast", "role", "alert", "aria-live", "assertive", "aria-atomic", "true", 1, "toast", "colored-toast", "bg-primary-transparent", "text-primary"], [1, "toast-container", "position-fixed", "top-0", "start-50", "translate-middle-x", "p-3"], ["id", "topcenter-Toast", "role", "alert", "aria-live", "assertive", "aria-atomic", "true", 1, "toast", "colored-toast", "bg-primary-transparent", "text-primary"], ["id", "topright-Toast", "role", "alert", "aria-live", "assertive", "aria-atomic", "true", 1, "toast", "colored-toast", "bg-primary-transparent", "text-primary"], [1, "toast-container", "position-fixed", "top-50", "start-0", "translate-middle-y", "p-3"], ["id", "middleleft-Toast", "role", "alert", "aria-live", "assertive", "aria-atomic", "true", 1, "toast", "colored-toast", "bg-primary-transparent", "text-primary"], [1, "toast-container", "position-fixed", "top-50", "start-50", "translate-middle"], ["id", "middlecenter-Toast", "role", "alert", "aria-live", "assertive", "aria-atomic", "true", 1, "toast", "colored-toast", "bg-primary-transparent", "text-primary"], [1, "toast-container", "position-fixed", "top-50", "end-0", "translate-middle-y", "p-3"], ["id", "middleright-Toast", "role", "alert", "aria-live", "assertive", "aria-atomic", "true", 1, "toast", "colored-toast", "bg-primary-transparent", "text-primary"], [1, "toast-container", "position-fixed", "bottom-0", "start-0", "p-3"], ["id", "bottomleft-Toast", "role", "alert", "aria-live", "assertive", "aria-atomic", "true", 1, "toast", "colored-toast", "bg-primary-transparent", "text-primary"], [1, "toast-container", "position-fixed", "bottom-0", "start-50", "translate-middle-x", "p-3"], ["id", "bottomcenter-Toast", "role", "alert", "aria-live", "assertive", "aria-atomic", "true", 1, "toast", "colored-toast", "bg-primary-transparent", "text-primary"], [1, "toast-container", "position-fixed", "bottom-0", "end-0", "p-3"], ["id", "bottomright-Toast", "role", "alert", "aria-live", "assertive", "aria-atomic", "true", 1, "toast", "colored-toast", "bg-primary-transparent", "text-primary"], [1, "bd-example", "bd-example-toasts", "d-flex", "p-2"], ["aria-live", "polite", "aria-atomic", "true", 1, "d-flex", "justify-content-center", "align-items-center", "w-100"], ["role", "alert", "aria-live", "assertive", "aria-atomic", "true", 1, "toast", "fade", "show", "shadow-lg"]], template: function ToastsComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "h4");
      \u0275\u0275text(3, "Toastr");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(4, "div", 2)(5, "div", 3)(6, "div", 4)(7, "div", 5)(8, "div", 6);
      \u0275\u0275text(9, " Live example ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(10, "div", 7);
      \u0275\u0275element(11, "p-toast");
      \u0275\u0275elementStart(12, "button", 8);
      \u0275\u0275listener("click", function ToastsComponent_Template_button_click_12_listener() {
        return ctx.show();
      });
      \u0275\u0275text(13, "Show live toast");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(14, "div", 9)(15, "div", 10)(16, "div", 11)(17, "strong", 12);
      \u0275\u0275text(18, "Toast");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(19, "small");
      \u0275\u0275text(20, "11 mins ago");
      \u0275\u0275elementEnd();
      \u0275\u0275element(21, "button", 13);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(22, "div", 14);
      \u0275\u0275text(23, " Hello, world! This is a toast message. ");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(24, "div", 4)(25, "div", 5)(26, "div", 6);
      \u0275\u0275text(27, " Color schemes ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(28, "div", 7)(29, "div", 15)(30, "div", 16)(31, "div", 14);
      \u0275\u0275text(32, " Hello, world! This is the Primary toast message. ");
      \u0275\u0275elementEnd();
      \u0275\u0275element(33, "button", 17);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(34, "div", 18)(35, "div", 16)(36, "div", 14);
      \u0275\u0275text(37, " Hello, world! This is the Secondary toast. ");
      \u0275\u0275elementEnd();
      \u0275\u0275element(38, "button", 17);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(39, "div", 19)(40, "div", 16)(41, "div", 14);
      \u0275\u0275text(42, " Hello, world! This is the Success toast message. ");
      \u0275\u0275elementEnd();
      \u0275\u0275element(43, "button", 17);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(44, "div", 20)(45, "div", 16)(46, "div", 14);
      \u0275\u0275text(47, " Hello, world! This is the info toast message. ");
      \u0275\u0275elementEnd();
      \u0275\u0275element(48, "button", 17);
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(49, "div", 3)(50, "div", 4)(51, "div", 5)(52, "div", 6);
      \u0275\u0275text(53, " Basic example ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(54, "div", 7)(55, "div", 21)(56, "div", 11)(57, "strong", 12);
      \u0275\u0275text(58, "Toast");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(59, "small");
      \u0275\u0275text(60, "11 mins ago");
      \u0275\u0275elementEnd();
      \u0275\u0275element(61, "button", 13);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(62, "div", 14);
      \u0275\u0275text(63, " Hello, world! This is a toast message. ");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(64, "div", 4)(65, "div", 5)(66, "div", 6);
      \u0275\u0275text(67, " Stacking ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(68, "div", 7)(69, "div", 22)(70, "div", 21)(71, "div", 11)(72, "strong", 12);
      \u0275\u0275text(73, "Toast");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(74, "small", 23);
      \u0275\u0275text(75, "just now");
      \u0275\u0275elementEnd();
      \u0275\u0275element(76, "button", 13);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(77, "div", 14);
      \u0275\u0275text(78, " See? Just like this. ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(79, "div", 21)(80, "div", 11)(81, "strong", 12);
      \u0275\u0275text(82, "Toast");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(83, "small", 23);
      \u0275\u0275text(84, "2 seconds ago");
      \u0275\u0275elementEnd();
      \u0275\u0275element(85, "button", 13);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(86, "div", 14);
      \u0275\u0275text(87, " Heads up, toasts will stack automatically ");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(88, "div", 3)(89, "div", 4)(90, "div", 5)(91, "div", 6);
      \u0275\u0275text(92, " Translucent ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(93, "div", 7)(94, "div", 21)(95, "div", 11)(96, "strong", 12);
      \u0275\u0275text(97, "Toast");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(98, "small", 23);
      \u0275\u0275text(99, "11 mins ago");
      \u0275\u0275elementEnd();
      \u0275\u0275element(100, "button", 13);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(101, "div", 14);
      \u0275\u0275text(102, " Hello, world! This is a toast message. ");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(103, "div", 4)(104, "div", 5)(105, "div", 6);
      \u0275\u0275text(106, " Custom content ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(107, "div", 7)(108, "div", 24)(109, "div", 16)(110, "div", 14);
      \u0275\u0275text(111, " Hello, world! This is a toast message. ");
      \u0275\u0275elementEnd();
      \u0275\u0275element(112, "button", 25);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(113, "div")(114, "span", 26);
      \u0275\u0275text(115, " Alternatively, you can also add additional controls and components to toasts. ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(116, "div", 27)(117, "div", 14);
      \u0275\u0275text(118, " Hello, world! This is a toast message. ");
      \u0275\u0275elementStart(119, "div", 28)(120, "button", 29);
      \u0275\u0275text(121, "Take action");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(122, "button", 30);
      \u0275\u0275text(123, "Close");
      \u0275\u0275elementEnd()()()()()()()();
      \u0275\u0275elementStart(124, "div", 2)(125, "div", 31)(126, "div", 4)(127, "div", 5)(128, "div", 6);
      \u0275\u0275text(129, " Color Variants Live ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(130, "div", 7)(131, "div", 32)(132, "button", 33);
      \u0275\u0275listener("click", function ToastsComponent_Template_button_click_132_listener() {
        return ctx.showPrimaryColor();
      });
      \u0275\u0275text(133, "Primary");
      \u0275\u0275elementEnd();
      \u0275\u0275element(134, "p-toast", 34);
      \u0275\u0275elementStart(135, "button", 35);
      \u0275\u0275listener("click", function ToastsComponent_Template_button_click_135_listener() {
        return ctx.showSecondaryColor();
      });
      \u0275\u0275text(136, "secondary");
      \u0275\u0275elementEnd();
      \u0275\u0275element(137, "p-toast", 36);
      \u0275\u0275elementStart(138, "button", 37);
      \u0275\u0275listener("click", function ToastsComponent_Template_button_click_138_listener() {
        return ctx.showWarningColor();
      });
      \u0275\u0275text(139, "warning");
      \u0275\u0275elementEnd();
      \u0275\u0275element(140, "p-toast", 38);
      \u0275\u0275elementStart(141, "button", 39);
      \u0275\u0275listener("click", function ToastsComponent_Template_button_click_141_listener() {
        return ctx.showInfoColor();
      });
      \u0275\u0275text(142, "info");
      \u0275\u0275elementEnd();
      \u0275\u0275element(143, "p-toast", 40);
      \u0275\u0275elementStart(144, "button", 41);
      \u0275\u0275listener("click", function ToastsComponent_Template_button_click_144_listener() {
        return ctx.showSuccessColor();
      });
      \u0275\u0275text(145, "success");
      \u0275\u0275elementEnd();
      \u0275\u0275element(146, "p-toast", 42);
      \u0275\u0275elementStart(147, "button", 43);
      \u0275\u0275listener("click", function ToastsComponent_Template_button_click_147_listener() {
        return ctx.showDangerColor();
      });
      \u0275\u0275text(148, "danger");
      \u0275\u0275elementEnd();
      \u0275\u0275element(149, "p-toast", 44);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(150, "div", 9)(151, "div", 45)(152, "div", 46)(153, "strong", 12);
      \u0275\u0275text(154, "Toast");
      \u0275\u0275elementEnd();
      \u0275\u0275element(155, "button", 13);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(156, "div", 14);
      \u0275\u0275text(157, " Your,toast message here. ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(158, "div", 47)(159, "div", 48)(160, "strong", 12);
      \u0275\u0275text(161, "Toast");
      \u0275\u0275elementEnd();
      \u0275\u0275element(162, "button", 13);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(163, "div", 14);
      \u0275\u0275text(164, " Your,toast message here. ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(165, "div", 49)(166, "div", 50)(167, "strong", 12);
      \u0275\u0275text(168, "Toast");
      \u0275\u0275elementEnd();
      \u0275\u0275element(169, "button", 13);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(170, "div", 14);
      \u0275\u0275text(171, " Your,toast message here. ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(172, "div", 51)(173, "div", 52)(174, "strong", 12);
      \u0275\u0275text(175, "Toast");
      \u0275\u0275elementEnd();
      \u0275\u0275element(176, "button", 13);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(177, "div", 14);
      \u0275\u0275text(178, " Your,toast message here. ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(179, "div", 53)(180, "div", 54)(181, "strong", 12);
      \u0275\u0275text(182, "Toast");
      \u0275\u0275elementEnd();
      \u0275\u0275element(183, "button", 13);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(184, "div", 14);
      \u0275\u0275text(185, " Your,toast message here. ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(186, "div", 55)(187, "div", 56)(188, "strong", 12);
      \u0275\u0275text(189, "Toast");
      \u0275\u0275elementEnd();
      \u0275\u0275element(190, "button", 13);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(191, "div", 14);
      \u0275\u0275text(192, " Your,toast message here. ");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(193, "div", 31)(194, "div", 4)(195, "div", 5)(196, "div", 6);
      \u0275\u0275text(197, " Solid Background Toasts ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(198, "div", 7)(199, "div", 32)(200, "button", 57);
      \u0275\u0275listener("click", function ToastsComponent_Template_button_click_200_listener() {
        return ctx.showPrimaryBackground();
      });
      \u0275\u0275text(201, "Primary");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(202, "button", 58);
      \u0275\u0275listener("click", function ToastsComponent_Template_button_click_202_listener() {
        return ctx.showSecondaryBackground();
      });
      \u0275\u0275text(203, "secondary");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(204, "button", 59);
      \u0275\u0275listener("click", function ToastsComponent_Template_button_click_204_listener() {
        return ctx.showWarningBackground();
      });
      \u0275\u0275text(205, "warning");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(206, "button", 60);
      \u0275\u0275listener("click", function ToastsComponent_Template_button_click_206_listener() {
        return ctx.showInfoBackground();
      });
      \u0275\u0275text(207, "info");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(208, "button", 61);
      \u0275\u0275listener("click", function ToastsComponent_Template_button_click_208_listener() {
        return ctx.showSuccessBackground();
      });
      \u0275\u0275text(209, "success");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(210, "button", 62);
      \u0275\u0275listener("click", function ToastsComponent_Template_button_click_210_listener() {
        return ctx.showDangerBackground();
      });
      \u0275\u0275text(211, "danger");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(212, "div", 9)(213, "div", 63)(214, "div", 46)(215, "strong", 12);
      \u0275\u0275text(216, "Toast");
      \u0275\u0275elementEnd();
      \u0275\u0275element(217, "button", 13);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(218, "div", 14);
      \u0275\u0275text(219, " Your,toast message here. ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(220, "div", 64)(221, "div", 48)(222, "strong", 12);
      \u0275\u0275text(223, "Toast");
      \u0275\u0275elementEnd();
      \u0275\u0275element(224, "button", 13);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(225, "div", 14);
      \u0275\u0275text(226, " Your,toast message here. ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(227, "div", 65)(228, "div", 50)(229, "strong", 12);
      \u0275\u0275text(230, "Toast");
      \u0275\u0275elementEnd();
      \u0275\u0275element(231, "button", 13);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(232, "div", 14);
      \u0275\u0275text(233, " Your,toast message here. ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(234, "div", 66)(235, "div", 52)(236, "strong", 12);
      \u0275\u0275text(237, "Toast");
      \u0275\u0275elementEnd();
      \u0275\u0275element(238, "button", 13);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(239, "div", 14);
      \u0275\u0275text(240, " Your,toast message here. ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(241, "div", 67)(242, "div", 54)(243, "strong", 12);
      \u0275\u0275text(244, "Toast");
      \u0275\u0275elementEnd();
      \u0275\u0275element(245, "button", 13);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(246, "div", 14);
      \u0275\u0275text(247, " Your,toast message here. ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(248, "div", 68)(249, "div", 56)(250, "strong", 12);
      \u0275\u0275text(251, "Toast");
      \u0275\u0275elementEnd();
      \u0275\u0275element(252, "button", 13);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(253, "div", 14);
      \u0275\u0275text(254, " Your,toast message here. ");
      \u0275\u0275elementEnd()()()()()()();
      \u0275\u0275elementStart(255, "div", 2)(256, "div", 69)(257, "div", 4)(258, "div", 5)(259, "div", 6);
      \u0275\u0275text(260, " Toast Placements ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(261, "div", 7)(262, "div", 32)(263, "button", 70);
      \u0275\u0275listener("click", function ToastsComponent_Template_button_click_263_listener() {
        return ctx.showTopLeft();
      });
      \u0275\u0275text(264, "Top Left");
      \u0275\u0275elementEnd();
      \u0275\u0275element(265, "p-toast", 71);
      \u0275\u0275elementStart(266, "button", 72);
      \u0275\u0275listener("click", function ToastsComponent_Template_button_click_266_listener() {
        return ctx.showTopCenter();
      });
      \u0275\u0275text(267, "Top Center");
      \u0275\u0275elementEnd();
      \u0275\u0275element(268, "p-toast", 73);
      \u0275\u0275elementStart(269, "button", 74);
      \u0275\u0275listener("click", function ToastsComponent_Template_button_click_269_listener() {
        return ctx.showTopRight();
      });
      \u0275\u0275text(270, "Top Right");
      \u0275\u0275elementEnd();
      \u0275\u0275element(271, "p-toast", 75);
      \u0275\u0275elementStart(272, "button", 76);
      \u0275\u0275listener("click", function ToastsComponent_Template_button_click_272_listener() {
        return ctx.showBottomLeft();
      });
      \u0275\u0275text(273, "Bottom Left");
      \u0275\u0275elementEnd();
      \u0275\u0275element(274, "p-toast", 77);
      \u0275\u0275elementStart(275, "button", 78);
      \u0275\u0275listener("click", function ToastsComponent_Template_button_click_275_listener() {
        return ctx.showBottomCenter();
      });
      \u0275\u0275text(276, "Bottom Center");
      \u0275\u0275elementEnd();
      \u0275\u0275element(277, "p-toast", 79);
      \u0275\u0275elementStart(278, "button", 80);
      \u0275\u0275listener("click", function ToastsComponent_Template_button_click_278_listener() {
        return ctx.showBottomRight();
      });
      \u0275\u0275text(279, "Bottom Right");
      \u0275\u0275elementEnd();
      \u0275\u0275element(280, "p-toast", 81);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(281, "div", 82)(282, "div", 83)(283, "div", 46)(284, "strong", 12);
      \u0275\u0275text(285, "Toast");
      \u0275\u0275elementEnd();
      \u0275\u0275element(286, "button", 13);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(287, "div", 14);
      \u0275\u0275text(288, " Your,toast message here. ");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(289, "div", 84)(290, "div", 85)(291, "div", 46)(292, "strong", 12);
      \u0275\u0275text(293, "Toast");
      \u0275\u0275elementEnd();
      \u0275\u0275element(294, "button", 13);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(295, "div", 14);
      \u0275\u0275text(296, " Your,toast message here. ");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(297, "div", 9)(298, "div", 86)(299, "div", 46)(300, "strong", 12);
      \u0275\u0275text(301, "Toast");
      \u0275\u0275elementEnd();
      \u0275\u0275element(302, "button", 13);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(303, "div", 14);
      \u0275\u0275text(304, " Your,toast message here. ");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(305, "div", 87)(306, "div", 88)(307, "div", 46)(308, "strong", 12);
      \u0275\u0275text(309, "Toast");
      \u0275\u0275elementEnd();
      \u0275\u0275element(310, "button", 13);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(311, "div", 14);
      \u0275\u0275text(312, " Your,toast message here. ");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(313, "div", 89)(314, "div", 90)(315, "div", 46)(316, "strong", 12);
      \u0275\u0275text(317, "Toast");
      \u0275\u0275elementEnd();
      \u0275\u0275element(318, "button", 13);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(319, "div", 14);
      \u0275\u0275text(320, " Your,toast message here. ");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(321, "div", 91)(322, "div", 92)(323, "div", 46)(324, "strong", 12);
      \u0275\u0275text(325, "Toast");
      \u0275\u0275elementEnd();
      \u0275\u0275element(326, "button", 13);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(327, "div", 14);
      \u0275\u0275text(328, " Your,toast message here. ");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(329, "div", 93)(330, "div", 94)(331, "div", 46)(332, "strong", 12);
      \u0275\u0275text(333, "Toast");
      \u0275\u0275elementEnd();
      \u0275\u0275element(334, "button", 13);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(335, "div", 14);
      \u0275\u0275text(336, " Your,toast message here. ");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(337, "div", 95)(338, "div", 96)(339, "div", 46)(340, "strong", 12);
      \u0275\u0275text(341, "Toast");
      \u0275\u0275elementEnd();
      \u0275\u0275element(342, "button", 13);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(343, "div", 14);
      \u0275\u0275text(344, " Your,toast message here. ");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(345, "div", 97)(346, "div", 98)(347, "div", 46)(348, "strong", 12);
      \u0275\u0275text(349, "Toast");
      \u0275\u0275elementEnd();
      \u0275\u0275element(350, "button", 13);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(351, "div", 14);
      \u0275\u0275text(352, " Your,toast message here. ");
      \u0275\u0275elementEnd()()()()()()();
      \u0275\u0275elementStart(353, "div", 2)(354, "div", 69)(355, "div", 4)(356, "div", 5)(357, "div", 6);
      \u0275\u0275text(358, " Aligning Toast Using Flexbox ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(359, "div", 7)(360, "div", 99)(361, "div", 100)(362, "div", 101)(363, "div", 11)(364, "strong", 12);
      \u0275\u0275text(365, "Toast");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(366, "small");
      \u0275\u0275text(367, "11 mins ago");
      \u0275\u0275elementEnd();
      \u0275\u0275element(368, "button", 13);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(369, "div", 14);
      \u0275\u0275text(370, " Hello, world! This is a toast message. ");
      \u0275\u0275elementEnd()()()()()()()();
    }
  }, dependencies: [CommonModule, ToastModule, Toast], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ToastsComponent, [{
    type: Component,
    args: [{ selector: "app-toasts", providers: [MessageService], imports: [CommonModule, ToastModule], template: '<div class="page-header">\n  <div class="page-title">\n      <h4>Toastr</h4>\n  </div>\n</div>\n\n<div class="row">\n\n  <!-- Toastr -->\n  <div class="col-xl-4">\n      <div class="card">\n          <div class="card-header justify-content-between">\n              <div class="card-title">\n                  Live example\n              </div>\n          </div>\n          <div class="card-body">\n              <p-toast></p-toast>\n              <button type="button" class="btn btn-primary btn-wave" id="liveToastBtn" pButton pRipple\n                  (click)="show()" label="Show">Show live\n                  toast</button>\n              <div class="toast-container position-fixed top-0 end-0 p-3">\n                  <div id="liveToast" class="toast" role="alert" aria-live="assertive" aria-atomic="true">\n                      <div class="toast-header text-default">\n                          <strong class="me-auto">Toast</strong>\n                          <small>11 mins ago</small>\n                          <button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>\n                      </div>\n                      <div class="toast-body">\n                          Hello, world! This is a toast message.\n                      </div>\n                  </div>\n              </div>\n          </div>\n      </div>\n      <div class="card">\n          <div class="card-header justify-content-between">\n              <div class="card-title">\n                  Color schemes\n              </div>\n          </div>\n          <div class="card-body">\n              <div class="toast align-items-center text-bg-primary border-0 fade show mb-4" role="alert"\n                  aria-live="assertive" aria-atomic="true">\n                  <div class="d-flex">\n                      <div class="toast-body">\n                          Hello, world! This is the Primary toast message.\n                      </div>\n                      <button type="button" class="btn-close btn-close-white me-2 m-auto" data-bs-dismiss="toast"\n                          aria-label="Close"></button>\n                  </div>\n              </div>\n              <div class="toast align-items-center text-bg-secondary border-0 fade show mb-4" role="alert"\n                  aria-live="assertive" aria-atomic="true">\n                  <div class="d-flex">\n                      <div class="toast-body">\n                          Hello, world! This is the Secondary toast.\n                      </div>\n                      <button type="button" class="btn-close btn-close-white me-2 m-auto" data-bs-dismiss="toast"\n                          aria-label="Close"></button>\n                  </div>\n              </div>\n              <div class="toast align-items-center text-bg-success border-0 fade show mb-4" role="alert"\n                  aria-live="assertive" aria-atomic="true">\n                  <div class="d-flex">\n                      <div class="toast-body">\n                          Hello, world! This is the Success toast message.\n                      </div>\n                      <button type="button" class="btn-close btn-close-white me-2 m-auto" data-bs-dismiss="toast"\n                          aria-label="Close"></button>\n                  </div>\n              </div>\n              <div class="toast align-items-center text-bg-info border-0 fade show" role="alert" aria-live="assertive"\n                  aria-atomic="true">\n                  <div class="d-flex">\n                      <div class="toast-body">\n                          Hello, world! This is the info toast message.\n                      </div>\n                      <button type="button" class="btn-close btn-close-white me-2 m-auto" data-bs-dismiss="toast"\n                          aria-label="Close"></button>\n                  </div>\n              </div>\n          </div>\n      </div>\n  </div>\n  <!-- /Toastr -->\n\n  <!-- Toastr -->\n  <div class="col-xl-4">\n      <div class="card">\n          <div class="card-header justify-content-between">\n              <div class="card-title">\n                  Basic example\n              </div>\n          </div>\n          <div class="card-body">\n              <div class="toast fade show" role="alert" aria-live="assertive" aria-atomic="true">\n                  <div class="toast-header text-default">\n                      <strong class="me-auto">Toast</strong>\n                      <small>11 mins ago</small>\n                      <button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>\n                  </div>\n                  <div class="toast-body">\n                      Hello, world! This is a toast message.\n                  </div>\n              </div>\n          </div>\n      </div>\n      <div class="card">\n          <div class="card-header justify-content-between">\n              <div class="card-title">\n                  Stacking\n              </div>\n          </div>\n          <div class="card-body">\n              <div class="toast-container position-static">\n                  <div class="toast fade show" role="alert" aria-live="assertive" aria-atomic="true">\n                      <div class="toast-header text-default">\n                          <strong class="me-auto">Toast</strong>\n                          <small class="text-muted">just now</small>\n                          <button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>\n                      </div>\n                      <div class="toast-body">\n                          See? Just like this.\n                      </div>\n                  </div>\n                  <div class="toast fade show" role="alert" aria-live="assertive" aria-atomic="true">\n                      <div class="toast-header text-default">\n                          <strong class="me-auto">Toast</strong>\n                          <small class="text-muted">2 seconds ago</small>\n                          <button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>\n                      </div>\n                      <div class="toast-body">\n                          Heads up, toasts will stack automatically\n                      </div>\n                  </div>\n              </div>\n          </div>\n      </div>\n  </div>\n  <!-- /Toastr -->\n\n  <!-- Translucent -->\n  <div class="col-xl-4">\n      <div class="card">\n          <div class="card-header justify-content-between">\n              <div class="card-title">\n                  Translucent\n              </div>\n          </div>\n          <div class="card-body">\n              <div class="toast fade show" role="alert" aria-live="assertive" aria-atomic="true">\n                  <div class="toast-header text-default">\n                      <strong class="me-auto">Toast</strong>\n                      <small class="text-muted">11 mins ago</small>\n                      <button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>\n                  </div>\n                  <div class="toast-body">\n                      Hello, world! This is a toast message.\n                  </div>\n              </div>\n          </div>\n      </div>\n      <div class="card">\n          <div class="card-header justify-content-between">\n              <div class="card-title">\n                  Custom content\n              </div>\n          </div>\n          <div class="card-body">\n              <div class="toast align-items-center fade show mb-3" role="alert" aria-live="assertive"\n                  aria-atomic="true">\n                  <div class="d-flex">\n                      <div class="toast-body">\n                          Hello, world! This is a toast message.\n                      </div>\n                      <button type="button" class="btn-close me-2 m-auto" data-bs-dismiss="toast" aria-label="Close">\n                      </button>\n                  </div>\n              </div>\n              <div>\n                  <span class="my-4 text-muted">\n                      Alternatively, you can also add additional controls and components to\n                      toasts.\n                  </span>\n              </div>\n              <div class="toast fade show mt-2" role="alert" aria-live="assertive" aria-atomic="true">\n                  <div class="toast-body">\n                      Hello, world! This is a toast message.\n                      <div class="mt-2 pt-2 border-top">\n                          <button type="button" class="btn btn-primary btn-sm btn-wave me-1">Take\n                              action</button>\n                          <button type="button" class="btn btn-secondary btn-sm btn-wave"\n                              data-bs-dismiss="toast">Close</button>\n                      </div>\n                  </div>\n              </div>\n          </div>\n      </div>\n  </div>\n  <!-- /Translucent -->\n\n</div>\n\n<div class="row">\n\n  <!-- Color Variants Live -->\n  <div class="col-xl-6">\n      <div class="card">\n          <div class="card-header justify-content-between">\n              <div class="card-title">\n                  Color Variants Live\n              </div>\n          </div>\n          <div class="card-body">\n              <div class="btn-list">\n                  <button type="button" (click)="showPrimaryColor()" class="btn btn-primary-light me-2 btn-wave"\n                      id="primaryToastBtn">Primary</button>\n                  <p-toast key="toast1"></p-toast>\n                  <button type="button" (click)="showSecondaryColor()" class="btn btn-secondary-light me-2 btn-wave"\n                      id="secondaryToastBtn">secondary</button>\n                  <p-toast key="toast2"></p-toast>\n                  <button type="button" (click)="showWarningColor()" class="btn btn-warning-light me-2 btn-wave"\n                      id="warningToastBtn">warning</button>\n                  <p-toast key="toast3"></p-toast>\n                  <button type="button" (click)="showInfoColor()" class="btn btn-info-light me-2 btn-wave"\n                      id="infoToastBtn">info</button>\n                  <p-toast key="toast4"></p-toast>\n                  <button type="button" (click)="showSuccessColor()" class="btn btn-success-light me-2 btn-wave"\n                      id="successToastBtn">success</button>\n                  <p-toast key="toast5"></p-toast>\n                  <button type="button" (click)="showDangerColor()" class="btn btn-danger-light me-2 btn-wave"\n                      id="dangerToastBtn">danger</button>\n                  <p-toast key="toast6"></p-toast>\n              </div>\n              <div class="toast-container position-fixed top-0 end-0 p-3">\n                  <div id="primaryToast" class="toast colored-toast bg-primary-transparent" role="alert"\n                      aria-live="assertive" aria-atomic="true">\n                      <div class="toast-header bg-primary text-fixed-white">\n                          <strong class="me-auto">Toast</strong>\n                          <button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>\n                      </div>\n                      <div class="toast-body">\n                          Your,toast message here.\n                      </div>\n                  </div>\n                  <div id="secondaryToast" class="toast colored-toast bg-secondary-transparent" role="alert"\n                      aria-live="assertive" aria-atomic="true">\n                      <div class="toast-header bg-secondary text-fixed-white">\n                          <strong class="me-auto">Toast</strong>\n                          <button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>\n                      </div>\n                      <div class="toast-body">\n                          Your,toast message here.\n                      </div>\n                  </div>\n                  <div id="warningToast" class="toast colored-toast bg-warning-transparent" role="alert"\n                      aria-live="assertive" aria-atomic="true">\n                      <div class="toast-header bg-warning text-fixed-white">\n                          <strong class="me-auto">Toast</strong>\n                          <button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>\n                      </div>\n                      <div class="toast-body">\n                          Your,toast message here.\n                      </div>\n                  </div>\n                  <div id="infoToast" class="toast colored-toast bg-info-transparent" role="alert"\n                      aria-live="assertive" aria-atomic="true">\n                      <div class="toast-header bg-info text-fixed-white">\n                          <strong class="me-auto">Toast</strong>\n                          <button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>\n                      </div>\n                      <div class="toast-body">\n                          Your,toast message here.\n                      </div>\n                  </div>\n                  <div id="successToast" class="toast colored-toast bg-success-transparent" role="alert"\n                      aria-live="assertive" aria-atomic="true">\n                      <div class="toast-header bg-success text-fixed-white">\n                          <strong class="me-auto">Toast</strong>\n                          <button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>\n                      </div>\n                      <div class="toast-body">\n                          Your,toast message here.\n                      </div>\n                  </div>\n                  <div id="dangerToast" class="toast colored-toast bg-danger-transparent" role="alert"\n                      aria-live="assertive" aria-atomic="true">\n                      <div class="toast-header bg-danger text-fixed-white">\n                          <strong class="me-auto">Toast</strong>\n                          <button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>\n                      </div>\n                      <div class="toast-body">\n                          Your,toast message here.\n                      </div>\n                  </div>\n              </div>\n          </div>\n      </div>\n  </div>\n  <!-- /Color Variants Live -->\n\n  <!-- Solid Background Toasts -->\n  <div class="col-xl-6">\n      <div class="card">\n          <div class="card-header justify-content-between">\n              <div class="card-title">\n                  Solid Background Toasts\n              </div>\n          </div>\n          <div class="card-body">\n              <div class="btn-list">\n                  <button type="button" (click)="showPrimaryBackground()" class="btn btn-primary me-2 btn-wave"\n                      id="solidprimaryToastBtn">Primary</button>\n                  <button type="button" (click)="showSecondaryBackground()" class="btn btn-secondary me-2 btn-wave"\n                      id="solidsecondaryToastBtn">secondary</button>\n                  <button type="button" (click)="showWarningBackground()" class="btn btn-warning me-2 btn-wave"\n                      id="solidwarningToastBtn">warning</button>\n                  <button type="button" (click)="showInfoBackground()" class="btn btn-info me-2 btn-wave"\n                      id="solidinfoToastBtn">info</button>\n                  <button type="button" (click)="showSuccessBackground()" class="btn btn-success me-2 btn-wave"\n                      id="solidsuccessToastBtn">success</button>\n                  <button type="button" (click)="showDangerBackground()" class="btn btn-danger me-2 btn-wave"\n                      id="soliddangerToastBtn">danger</button>\n              </div>\n              <div class="toast-container position-fixed top-0 end-0 p-3">\n                  <div id="solid-primaryToast" class="toast colored-toast bg-primary text-fixed-white" role="alert"\n                      aria-live="assertive" aria-atomic="true">\n                      <div class="toast-header bg-primary text-fixed-white">\n                          <strong class="me-auto">Toast</strong>\n                          <button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>\n                      </div>\n                      <div class="toast-body">\n                          Your,toast message here.\n                      </div>\n                  </div>\n                  <div id="solid-secondaryToast" class="toast colored-toast bg-secondary text-fixed-white"\n                      role="alert" aria-live="assertive" aria-atomic="true">\n                      <div class="toast-header bg-secondary text-fixed-white">\n                          <strong class="me-auto">Toast</strong>\n                          <button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>\n                      </div>\n                      <div class="toast-body">\n                          Your,toast message here.\n                      </div>\n                  </div>\n                  <div id="solid-warningToast" class="toast colored-toast bg-warning text-fixed-white" role="alert"\n                      aria-live="assertive" aria-atomic="true">\n                      <div class="toast-header bg-warning text-fixed-white">\n                          <strong class="me-auto">Toast</strong>\n                          <button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>\n                      </div>\n                      <div class="toast-body">\n                          Your,toast message here.\n                      </div>\n                  </div>\n                  <div id="solid-infoToast" class="toast colored-toast bg-info text-fixed-white" role="alert"\n                      aria-live="assertive" aria-atomic="true">\n                      <div class="toast-header bg-info text-fixed-white">\n                          <strong class="me-auto">Toast</strong>\n                          <button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>\n                      </div>\n                      <div class="toast-body">\n                          Your,toast message here.\n                      </div>\n                  </div>\n                  <div id="solid-successToast" class="toast colored-toast bg-success text-fixed-white" role="alert"\n                      aria-live="assertive" aria-atomic="true">\n                      <div class="toast-header bg-success text-fixed-white">\n                          <strong class="me-auto">Toast</strong>\n                          <button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>\n                      </div>\n                      <div class="toast-body">\n                          Your,toast message here.\n                      </div>\n                  </div>\n                  <div id="solid-dangerToast" class="toast colored-toast bg-danger text-fixed-white" role="alert"\n                      aria-live="assertive" aria-atomic="true">\n                      <div class="toast-header bg-danger text-fixed-white">\n                          <strong class="me-auto">Toast</strong>\n                          <button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>\n                      </div>\n                      <div class="toast-body">\n                          Your,toast message here.\n                      </div>\n                  </div>\n              </div>\n          </div>\n      </div>\n  </div>\n  <!-- /Solid Background Toasts -->\n\n</div>\n\n<!-- Toast Placements -->\n<div class="row">\n  <div class="col-xl-12">\n      <div class="card">\n          <div class="card-header justify-content-between">\n              <div class="card-title">\n                  Toast Placements\n              </div>\n          </div>\n          <div class="card-body">\n              <div class="btn-list">\n                  <button type="button" (click)="showTopLeft()" class="btn btn-outline-primary me-2 btn-wave"\n                      id="topleftToastBtn">Top\n                      Left</button>\n                  <p-toast position="top-left" key="tl"></p-toast>\n\n                  <button type="button" (click)="showTopCenter()" class="btn btn-outline-primary me-2 btn-wave"\n                      id="topcenterToastBtn">Top\n                      Center</button>\n                  <p-toast position="top-center" key="tc"></p-toast>\n\n                  <button type="button" (click)="showTopRight()" class="btn btn-outline-primary me-2 btn-wave"\n                      id="toprightToastBtn">Top\n                      Right</button>\n                  <p-toast position="top-right" key="tr"></p-toast>\n\n                  <!-- <button type="button" (click)="showMiddleLeft()" class="btn btn-outline-primary me-2 btn-wave"\n                      id="middleleftToastBtn">\n                      Middle Left\n                  </button>\n                  <p-toast class="custom-toast middle-left-toast"></p-toast>\n\n                  <button type="button" class="btn btn-outline-primary me-2 btn-wave" id="middlecenterToastBtn">Middle\n                      Center</button>\n                  <p-toast position="top-center" key="ml"></p-toast>\n\n                  <button type="button" class="btn btn-outline-primary me-2 btn-wave" id="middlerightToastBtn">Middle\n                      Right</button>\n                  <p-toast position="top-center" key="tc"></p-toast> -->\n\n                  <button type="button" (click)="showBottomLeft()" class="btn btn-outline-primary me-2 btn-wave"\n                      id="bottomleftToastBtn">Bottom\n                      Left</button>\n                  <p-toast position="bottom-left" key="bl"></p-toast>\n\n                  <button type="button" (click)="showBottomCenter()" class="btn btn-outline-primary me-2 btn-wave"\n                      id="bottomcenterToastBtn">Bottom\n                      Center</button>\n                  <p-toast position="bottom-center" key="bc"></p-toast>\n\n                  <button type="button" (click)="showBottomRight()" class="btn btn-outline-primary me-2 btn-wave"\n                      id="bottomrightToastBtn">Bottom\n                      Right</button>\n                  <p-toast position="bottom-right" key="br"></p-toast>\n\n              </div>\n              <div class="toast-container position-fixed top-0 start-0 p-3">\n                  <div id="topleft-Toast" class="toast colored-toast bg-primary-transparent text-primary" role="alert"\n                      aria-live="assertive" aria-atomic="true">\n                      <div class="toast-header bg-primary text-fixed-white">\n                          <strong class="me-auto">Toast</strong>\n                          <button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>\n                      </div>\n                      <div class="toast-body">\n                          Your,toast message here.\n                      </div>\n                  </div>\n              </div>\n              <div class="toast-container position-fixed top-0 start-50 translate-middle-x p-3">\n                  <div id="topcenter-Toast" class="toast colored-toast bg-primary-transparent text-primary"\n                      role="alert" aria-live="assertive" aria-atomic="true">\n                      <div class="toast-header bg-primary text-fixed-white">\n                          <strong class="me-auto">Toast</strong>\n                          <button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>\n                      </div>\n                      <div class="toast-body">\n                          Your,toast message here.\n                      </div>\n                  </div>\n              </div>\n              <div class="toast-container position-fixed top-0 end-0 p-3">\n                  <div id="topright-Toast" class="toast colored-toast bg-primary-transparent text-primary"\n                      role="alert" aria-live="assertive" aria-atomic="true">\n                      <div class="toast-header bg-primary text-fixed-white">\n                          <strong class="me-auto">Toast</strong>\n                          <button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>\n                      </div>\n                      <div class="toast-body">\n                          Your,toast message here.\n                      </div>\n                  </div>\n              </div>\n              <div class="toast-container position-fixed top-50 start-0 translate-middle-y p-3">\n                  <div id="middleleft-Toast" class="toast colored-toast bg-primary-transparent text-primary"\n                      role="alert" aria-live="assertive" aria-atomic="true">\n                      <div class="toast-header bg-primary text-fixed-white">\n                          <strong class="me-auto">Toast</strong>\n                          <button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>\n                      </div>\n                      <div class="toast-body">\n                          Your,toast message here.\n                      </div>\n                  </div>\n              </div>\n              <div class="toast-container position-fixed top-50 start-50 translate-middle">\n                  <div id="middlecenter-Toast" class="toast colored-toast bg-primary-transparent text-primary"\n                      role="alert" aria-live="assertive" aria-atomic="true">\n                      <div class="toast-header bg-primary text-fixed-white">\n                          <strong class="me-auto">Toast</strong>\n                          <button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>\n                      </div>\n                      <div class="toast-body">\n                          Your,toast message here.\n                      </div>\n                  </div>\n              </div>\n              <div class="toast-container position-fixed top-50 end-0 translate-middle-y p-3">\n                  <div id="middleright-Toast" class="toast colored-toast bg-primary-transparent text-primary"\n                      role="alert" aria-live="assertive" aria-atomic="true">\n                      <div class="toast-header bg-primary text-fixed-white">\n                          <strong class="me-auto">Toast</strong>\n                          <button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>\n                      </div>\n                      <div class="toast-body">\n                          Your,toast message here.\n                      </div>\n                  </div>\n              </div>\n              <div class="toast-container position-fixed bottom-0 start-0 p-3">\n                  <div id="bottomleft-Toast" class="toast colored-toast bg-primary-transparent text-primary"\n                      role="alert" aria-live="assertive" aria-atomic="true">\n                      <div class="toast-header bg-primary text-fixed-white">\n                          <strong class="me-auto">Toast</strong>\n                          <button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>\n                      </div>\n                      <div class="toast-body">\n                          Your,toast message here.\n                      </div>\n                  </div>\n              </div>\n              <div class="toast-container position-fixed bottom-0 start-50 translate-middle-x p-3">\n                  <div id="bottomcenter-Toast" class="toast colored-toast bg-primary-transparent text-primary"\n                      role="alert" aria-live="assertive" aria-atomic="true">\n                      <div class="toast-header bg-primary text-fixed-white">\n                          <strong class="me-auto">Toast</strong>\n                          <button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>\n                      </div>\n                      <div class="toast-body">\n                          Your,toast message here.\n                      </div>\n                  </div>\n              </div>\n              <div class="toast-container position-fixed bottom-0 end-0 p-3">\n                  <div id="bottomright-Toast" class="toast colored-toast bg-primary-transparent text-primary"\n                      role="alert" aria-live="assertive" aria-atomic="true">\n                      <div class="toast-header bg-primary text-fixed-white">\n                          <strong class="me-auto">Toast</strong>\n                          <button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>\n                      </div>\n                      <div class="toast-body">\n                          Your,toast message here.\n                      </div>\n                  </div>\n              </div>\n          </div>\n      </div>\n  </div>\n</div>\n<!-- Toast Placements -->\n\n<!-- Aligning Toast Using Flexbox -->\n<div class="row">\n  <div class="col-xl-12">\n      <div class="card">\n          <div class="card-header justify-content-between">\n              <div class="card-title">\n                  Aligning Toast Using Flexbox\n              </div>\n          </div>\n          <div class="card-body">\n              <div class="bd-example bd-example-toasts d-flex p-2">\n                  <div aria-live="polite" aria-atomic="true"\n                      class="d-flex justify-content-center align-items-center w-100">\n                      <div class="toast fade show shadow-lg" role="alert" aria-live="assertive" aria-atomic="true">\n                          <div class="toast-header text-default">\n                              <strong class="me-auto">Toast</strong>\n                              <small>11 mins ago</small>\n                              <button type="button" class="btn-close" data-bs-dismiss="toast"\n                                  aria-label="Close"></button>\n                          </div>\n                          <div class="toast-body">\n                              Hello, world! This is a toast message.\n                          </div>\n                      </div>\n                  </div>\n              </div>\n          </div>\n      </div>\n  </div>\n</div>\n<!-- Aligning Toast Using Flexbox -->' }]
  }], () => [{ type: MessageService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ToastsComponent, { className: "ToastsComponent", filePath: "src/app/features/ui-interface/base-ui/toasts/toasts.component.ts", lineNumber: 14 });
})();
export {
  ToastsComponent
};
//# sourceMappingURL=chunk-6YK6Z64W.js.map

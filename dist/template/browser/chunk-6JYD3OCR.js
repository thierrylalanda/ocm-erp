import {
  TranslationService
} from "./chunk-VQ4LU4VK.js";
import {
  CommonModule,
  NgForOf,
  NgIf
} from "./chunk-ZV6UYXXV.js";
import {
  Component,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-U4CEU3KS.js";

// src/app/core/services/translation/language-selector.component.ts
function LanguageSelectorComponent_span_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.currentLanguageFlag);
  }
}
function LanguageSelectorComponent_li_5_span_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const lang_r3 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(lang_r3.flag);
  }
}
function LanguageSelectorComponent_li_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "li")(1, "a", 5);
    \u0275\u0275listener("click", function LanguageSelectorComponent_li_5_Template_a_click_1_listener() {
      const lang_r3 = \u0275\u0275restoreView(_r2).$implicit;
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.changeLanguage(lang_r3.code));
    });
    \u0275\u0275template(2, LanguageSelectorComponent_li_5_span_2_Template, 2, 1, "span", 2);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const lang_r3 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", lang_r3.flag);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", lang_r3.name, " ");
  }
}
var LanguageSelectorComponent = class _LanguageSelectorComponent {
  translationService;
  availableLanguages = [];
  currentLanguage = "fr";
  currentLanguageName = "Fran\xE7ais";
  currentLanguageFlag = "\u{1F1EB}\u{1F1F7}";
  constructor(translationService) {
    this.translationService = translationService;
  }
  ngOnInit() {
    this.availableLanguages = this.translationService.getAvailableLanguages();
    this.updateCurrentLanguage();
    this.translationService.languageChanges.subscribe(() => {
      this.updateCurrentLanguage();
    });
  }
  changeLanguage(language) {
    this.translationService.setLanguage(language);
  }
  updateCurrentLanguage() {
    this.currentLanguage = this.translationService.getCurrentLanguage();
    const lang = this.availableLanguages.find((l) => l.code === this.currentLanguage);
    if (lang) {
      this.currentLanguageName = lang.name;
      this.currentLanguageFlag = lang.flag || "";
    }
  }
  static \u0275fac = function LanguageSelectorComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _LanguageSelectorComponent)(\u0275\u0275directiveInject(TranslationService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _LanguageSelectorComponent, selectors: [["app-language-selector"]], decls: 6, vars: 3, consts: [[1, "language-selector", "dropdown"], ["type", "button", "data-bs-toggle", "dropdown", "aria-expanded", "false", 1, "btn", "btn-outline-secondary", "dropdown-toggle"], [4, "ngIf"], [1, "dropdown-menu"], [4, "ngFor", "ngForOf"], ["href", "javascript:void(0)", 1, "dropdown-item", 3, "click"]], template: function LanguageSelectorComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "button", 1);
      \u0275\u0275template(2, LanguageSelectorComponent_span_2_Template, 2, 1, "span", 2);
      \u0275\u0275text(3);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(4, "ul", 3);
      \u0275\u0275template(5, LanguageSelectorComponent_li_5_Template, 4, 2, "li", 4);
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      \u0275\u0275advance(2);
      \u0275\u0275property("ngIf", ctx.currentLanguageFlag);
      \u0275\u0275advance();
      \u0275\u0275textInterpolate1(" ", ctx.currentLanguageName, " ");
      \u0275\u0275advance(2);
      \u0275\u0275property("ngForOf", ctx.availableLanguages);
    }
  }, dependencies: [CommonModule, NgForOf, NgIf], styles: ["\n\n.language-selector[_ngcontent-%COMP%] {\n  display: inline-block;\n}\n.dropdown-item[_ngcontent-%COMP%] {\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n/*# sourceMappingURL=language-selector.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LanguageSelectorComponent, [{
    type: Component,
    args: [{ selector: "app-language-selector", standalone: true, imports: [CommonModule], template: `
    <div class="language-selector dropdown">
      <button class="btn btn-outline-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
        <span *ngIf="currentLanguageFlag">{{ currentLanguageFlag }}</span>
        {{ currentLanguageName }}
      </button>
      <ul class="dropdown-menu">
        <li *ngFor="let lang of availableLanguages">
          <a class="dropdown-item" href="javascript:void(0)" (click)="changeLanguage(lang.code)">
            <span *ngIf="lang.flag">{{ lang.flag }}</span> {{ lang.name }}
          </a>
        </li>
      </ul>
    </div>
  `, styles: ["/* angular:styles/component:scss;afec45b68f4795fb5412c72d932506a8f7008a84d376b359f3ad583b3cff97a5;/Users/a1/Documents/angularProjects/ocm/src/app/core/services/translation/language-selector.component.ts */\n.language-selector {\n  display: inline-block;\n}\n.dropdown-item {\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n/*# sourceMappingURL=language-selector.component.css.map */\n"] }]
  }], () => [{ type: TranslationService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(LanguageSelectorComponent, { className: "LanguageSelectorComponent", filePath: "src/app/core/services/translation/language-selector.component.ts", lineNumber: 36 });
})();

export {
  LanguageSelectorComponent
};
//# sourceMappingURL=chunk-6JYD3OCR.js.map

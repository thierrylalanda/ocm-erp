import {
  TranslationService,
  init_translate_pipe,
  init_translation_service
} from "./chunk-YTCUO5R2.js";
import {
  CommonModule,
  init_common
} from "./chunk-HQHIWYWO.js";
import {
  Component,
  __decorate,
  init_core,
  init_tslib_es6
} from "./chunk-W6MIRXHE.js";
import {
  __esm
} from "./chunk-FWMZPJRE.js";

// angular:jit:style:inline:src/app/core/services/translation/language-selector.component.ts;CiAgICAubGFuZ3VhZ2Utc2VsZWN0b3IgewogICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7CiAgICB9CiAgICAuZHJvcGRvd24taXRlbSB7CiAgICAgIGN1cnNvcjogcG9pbnRlcjsKICAgICAgZGlzcGxheTogZmxleDsKICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjsKICAgICAgZ2FwOiA4cHg7CiAgICB9CiAg
var language_selector_component_default;
var init_language_selector_component = __esm({
  "angular:jit:style:inline:src/app/core/services/translation/language-selector.component.ts;CiAgICAubGFuZ3VhZ2Utc2VsZWN0b3IgewogICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7CiAgICB9CiAgICAuZHJvcGRvd24taXRlbSB7CiAgICAgIGN1cnNvcjogcG9pbnRlcjsKICAgICAgZGlzcGxheTogZmxleDsKICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjsKICAgICAgZ2FwOiA4cHg7CiAgICB9CiAg"() {
    language_selector_component_default = "/* angular:styles/component:scss;afec45b68f4795fb5412c72d932506a8f7008a84d376b359f3ad583b3cff97a5;/Users/a1/Documents/angularProjects/ocm/src/app/core/services/translation/language-selector.component.ts */\n.language-selector {\n  display: inline-block;\n}\n.dropdown-item {\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n/*# sourceMappingURL=language-selector.component.css.map */\n";
  }
});

// src/app/core/services/translation/language-selector.component.ts
var LanguageSelectorComponent;
var init_language_selector_component2 = __esm({
  "src/app/core/services/translation/language-selector.component.ts"() {
    "use strict";
    init_tslib_es6();
    init_language_selector_component();
    init_core();
    init_common();
    init_translation_service();
    LanguageSelectorComponent = class LanguageSelectorComponent2 {
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
      static ctorParameters = () => [
        { type: TranslationService }
      ];
    };
    LanguageSelectorComponent = __decorate([
      Component({
        selector: "app-language-selector",
        standalone: true,
        imports: [CommonModule],
        template: `
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
  `,
        styles: [language_selector_component_default]
      })
    ], LanguageSelectorComponent);
  }
});

// src/app/core/services/translation/index.ts
var init_translation = __esm({
  "src/app/core/services/translation/index.ts"() {
    "use strict";
    init_translation_service();
    init_translate_pipe();
    init_language_selector_component2();
  }
});

export {
  LanguageSelectorComponent,
  init_translation
};
//# sourceMappingURL=chunk-O7BLCUFK.js.map

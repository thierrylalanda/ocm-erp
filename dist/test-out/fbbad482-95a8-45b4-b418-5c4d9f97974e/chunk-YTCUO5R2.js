import {
  HttpClient,
  init_http
} from "./chunk-H7VTUQ3B.js";
import {
  init_common,
  isPlatformBrowser
} from "./chunk-HQHIWYWO.js";
import {
  BehaviorSubject,
  ChangeDetectorRef,
  Inject,
  Injectable,
  PLATFORM_ID,
  Pipe,
  __decorate,
  catchError,
  init_core,
  init_esm,
  init_operators,
  init_tslib_es6,
  of,
  tap
} from "./chunk-W6MIRXHE.js";
import {
  __esm
} from "./chunk-FWMZPJRE.js";

// src/app/core/services/translation/translation.service.ts
var TranslationService;
var init_translation_service = __esm({
  "src/app/core/services/translation/translation.service.ts"() {
    "use strict";
    init_tslib_es6();
    init_core();
    init_common();
    init_http();
    init_esm();
    init_operators();
    TranslationService = class TranslationService2 {
      http;
      platformId;
      DEFAULT_LANGUAGE = "fr";
      STORAGE_KEY = "app_language";
      TRANSLATIONS_PATH = "assets/i18n";
      translations = {};
      currentLanguage$ = new BehaviorSubject(this.DEFAULT_LANGUAGE);
      translationsLoaded$ = new BehaviorSubject(false);
      translationsLoaded = false;
      constructor(http, platformId) {
        this.http = http;
        this.platformId = platformId;
        this.initializeLanguage();
      }
      /**
       * Initialize the language based on browser preference or stored preference
       */
      initializeLanguage() {
        let language = this.DEFAULT_LANGUAGE;
        if (this.isBrowser()) {
          const storedLanguage = localStorage.getItem(this.STORAGE_KEY);
          if (storedLanguage && this.isValidLanguage(storedLanguage)) {
            language = storedLanguage;
          } else {
            const browserLang = navigator.language.split("-")[0];
            if (this.isValidLanguage(browserLang)) {
              language = browserLang;
            }
          }
        }
        this.setLanguage(language, false);
      }
      /**
       * Check if running in browser environment
       */
      isBrowser() {
        return isPlatformBrowser(this.platformId);
      }
      /**
       * Check if language code is valid
       */
      isValidLanguage(lang) {
        return ["fr", "en"].includes(lang);
      }
      /**
       * Load translations for a specific language
       */
      loadTranslations(language) {
        const url = `${this.TRANSLATIONS_PATH}/${language}.json`;
        return this.http.get(url).pipe(tap((translations) => {
          this.translations = translations;
          this.translationsLoaded = true;
          this.translationsLoaded$.next(true);
        }), catchError((error) => {
          console.error(`Failed to load translations for ${language}:`, error);
          return of({});
        }));
      }
      /**
       * Set the current language
       * @param language Language code ('fr' or 'en')
       * @param saveToStorage Whether to save to localStorage
       */
      setLanguage(language, saveToStorage = true) {
        if (!this.isValidLanguage(language)) {
          console.warn(`Invalid language code: ${language}. Using default.`);
          language = this.DEFAULT_LANGUAGE;
        }
        if (this.currentLanguage$.value !== language || !this.translationsLoaded) {
          this.loadTranslations(language).subscribe(() => {
            this.currentLanguage$.next(language);
            if (saveToStorage && this.isBrowser()) {
              localStorage.setItem(this.STORAGE_KEY, language);
            }
          });
        }
      }
      /**
       * Get the current language
       */
      getCurrentLanguage() {
        return this.currentLanguage$.value;
      }
      /**
       * Observable for language changes
       */
      get languageChanges() {
        return this.currentLanguage$.asObservable();
      }
      /**
       * Observable for translations loaded state
       */
      get translationsLoadedChanges() {
        return this.translationsLoaded$.asObservable();
      }
      /**
       * Translate a key with optional parameters
       * @param key Translation key (e.g., 'login.title')
       * @param params Optional parameters to replace in the translation
       */
      translate(key, params) {
        if (!this.translationsLoaded) {
          return key;
        }
        const keys = key.split(".");
        let value = this.translations;
        for (const k of keys) {
          if (value && typeof value === "object" && k in value) {
            value = value[k];
          } else {
            return key;
          }
        }
        if (typeof value !== "string") {
          return key;
        }
        if (params) {
          return this.replaceParams(value, params);
        }
        return value;
      }
      /**
       * Replace parameters in translation string
       */
      replaceParams(text, params) {
        return text.replace(/\{(\w+)\}/g, (match, paramName) => {
          return params[paramName] !== void 0 ? params[paramName] : match;
        });
      }
      /**
       * Get available languages
       */
      getAvailableLanguages() {
        return [
          { code: "fr", name: "Fran\xE7ais", flag: "\u{1F1EB}\u{1F1F7}" },
          { code: "en", name: "English", flag: "\u{1F1EC}\u{1F1E7}" }
        ];
      }
      /**
       * Check if translations are loaded
       */
      isLoaded() {
        return this.translationsLoaded;
      }
      static ctorParameters = () => [
        { type: HttpClient },
        { type: Object, decorators: [{ type: Inject, args: [PLATFORM_ID] }] }
      ];
    };
    TranslationService = __decorate([
      Injectable({
        providedIn: "root"
      })
    ], TranslationService);
  }
});

// src/app/core/services/translation/translate.pipe.ts
var TranslatePipe;
var init_translate_pipe = __esm({
  "src/app/core/services/translation/translate.pipe.ts"() {
    "use strict";
    init_tslib_es6();
    init_core();
    init_translation_service();
    TranslatePipe = class TranslatePipe2 {
      translationService;
      changeDetectorRef;
      lastKey = "";
      lastParams = null;
      lastValue = "";
      languageChangeSubscription;
      translationsLoadedSubscription;
      constructor(translationService, changeDetectorRef) {
        this.translationService = translationService;
        this.changeDetectorRef = changeDetectorRef;
        this.languageChangeSubscription = this.translationService.languageChanges.subscribe(() => {
          this.updateTranslation();
          this.changeDetectorRef.markForCheck();
        });
        this.translationsLoadedSubscription = this.translationService.translationsLoadedChanges.subscribe(() => {
          this.updateTranslation();
          this.changeDetectorRef.markForCheck();
        });
      }
      transform(key, params) {
        if (key !== this.lastKey || JSON.stringify(params) !== JSON.stringify(this.lastParams)) {
          this.lastKey = key;
          this.lastParams = params;
          this.updateTranslation();
        }
        return this.lastValue;
      }
      updateTranslation() {
        this.lastValue = this.translationService.translate(this.lastKey, this.lastParams);
      }
      ngOnDestroy() {
        if (this.languageChangeSubscription) {
          this.languageChangeSubscription.unsubscribe();
        }
        if (this.translationsLoadedSubscription) {
          this.translationsLoadedSubscription.unsubscribe();
        }
      }
      static ctorParameters = () => [
        { type: TranslationService },
        { type: ChangeDetectorRef }
      ];
    };
    TranslatePipe = __decorate([
      Pipe({
        name: "translate",
        pure: false
        // Make pipe impure to detect language changes
      })
    ], TranslatePipe);
  }
});

export {
  TranslationService,
  init_translation_service,
  TranslatePipe,
  init_translate_pipe
};
//# sourceMappingURL=chunk-YTCUO5R2.js.map

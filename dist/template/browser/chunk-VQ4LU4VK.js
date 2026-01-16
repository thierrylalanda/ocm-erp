import {
  HttpClient
} from "./chunk-PQZYD7EB.js";
import {
  isPlatformBrowser
} from "./chunk-ZV6UYXXV.js";
import {
  BehaviorSubject,
  ChangeDetectorRef,
  Inject,
  Injectable,
  PLATFORM_ID,
  Pipe,
  catchError,
  of,
  setClassMetadata,
  tap,
  ɵɵdefineInjectable,
  ɵɵdefinePipe,
  ɵɵdirectiveInject,
  ɵɵinject
} from "./chunk-U4CEU3KS.js";

// src/app/core/services/translation/translation.service.ts
var TranslationService = class _TranslationService {
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
  static \u0275fac = function TranslationService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _TranslationService)(\u0275\u0275inject(HttpClient), \u0275\u0275inject(PLATFORM_ID));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _TranslationService, factory: _TranslationService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TranslationService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{ type: HttpClient }, { type: Object, decorators: [{
    type: Inject,
    args: [PLATFORM_ID]
  }] }], null);
})();

// src/app/core/services/translation/translate.pipe.ts
var TranslatePipe = class _TranslatePipe {
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
  static \u0275fac = function TranslatePipe_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _TranslatePipe)(\u0275\u0275directiveInject(TranslationService, 16), \u0275\u0275directiveInject(ChangeDetectorRef, 16));
  };
  static \u0275pipe = /* @__PURE__ */ \u0275\u0275definePipe({ name: "translate", type: _TranslatePipe, pure: false });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TranslatePipe, [{
    type: Pipe,
    args: [{
      name: "translate",
      pure: false
      // Make pipe impure to detect language changes
    }]
  }], () => [{ type: TranslationService }, { type: ChangeDetectorRef }], null);
})();

export {
  TranslationService,
  TranslatePipe
};
//# sourceMappingURL=chunk-VQ4LU4VK.js.map

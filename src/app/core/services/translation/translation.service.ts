import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

export interface TranslationData {
  [key: string]: any;
}

export type LanguageCode = 'fr' | 'en';

@Injectable({
  providedIn: 'root'
})
export class TranslationService {
  private readonly DEFAULT_LANGUAGE: LanguageCode = 'fr';
  private readonly STORAGE_KEY = 'app_language';
  private readonly TRANSLATIONS_PATH = 'assets/i18n';
  
  private translations: TranslationData = {};
  private currentLanguage$ = new BehaviorSubject<LanguageCode>(this.DEFAULT_LANGUAGE);
  private translationsLoaded$ = new BehaviorSubject<boolean>(false);
  private translationsLoaded = false;
  
  constructor(
    private http: HttpClient,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {
    this.initializeLanguage();
  }
  
  /**
   * Initialize the language based on browser preference or stored preference
   */
  private initializeLanguage(): void {
    let language: LanguageCode = this.DEFAULT_LANGUAGE;
    
    if (this.isBrowser()) {
      // Try to get language from localStorage
      const storedLanguage = localStorage.getItem(this.STORAGE_KEY) as LanguageCode;
      if (storedLanguage && this.isValidLanguage(storedLanguage)) {
        language = storedLanguage;
      } else {
        // Try to detect browser language
        const browserLang = navigator.language.split('-')[0];
        if (this.isValidLanguage(browserLang as LanguageCode)) {
          language = browserLang as LanguageCode;
        }
      }
    }
    
    this.setLanguage(language, false);
  }
  
  /**
   * Check if running in browser environment
   */
  private isBrowser(): boolean {
    return isPlatformBrowser(this.platformId);
  }
  
  /**
   * Check if language code is valid
   */
  private isValidLanguage(lang: string): lang is LanguageCode {
    return ['fr', 'en'].includes(lang);
  }
  
  /**
   * Load translations for a specific language
   */
  private loadTranslations(language: LanguageCode): Observable<TranslationData> {
    const url = `${this.TRANSLATIONS_PATH}/${language}.json`;
    
    return this.http.get<TranslationData>(url).pipe(
      tap(translations => {
        this.translations = translations;
        this.translationsLoaded = true;
        this.translationsLoaded$.next(true);
      }),
      catchError(error => {
        console.error(`Failed to load translations for ${language}:`, error);
        // Return empty translations as fallback
        return of({});
      })
    );
  }
  
  /**
   * Set the current language
   * @param language Language code ('fr' or 'en')
   * @param saveToStorage Whether to save to localStorage
   */
  setLanguage(language: LanguageCode, saveToStorage: boolean = true): void {
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
  getCurrentLanguage(): LanguageCode {
    return this.currentLanguage$.value;
  }
  
  /**
   * Observable for language changes
   */
  get languageChanges(): Observable<LanguageCode> {
    return this.currentLanguage$.asObservable();
  }
  
  /**
   * Observable for translations loaded state
   */
  get translationsLoadedChanges(): Observable<boolean> {
    return this.translationsLoaded$.asObservable();
  }
  
  /**
   * Translate a key with optional parameters
   * @param key Translation key (e.g., 'login.title')
   * @param params Optional parameters to replace in the translation
   */
  translate(key: string, params?: { [key: string]: any }): string {
    if (!this.translationsLoaded) {
      return key; // Return key as fallback while loading
    }
    
    // Navigate through nested objects using dot notation
    const keys = key.split('.');
    let value: any = this.translations;
    
    for (const k of keys) {
      if (value && typeof value === 'object' && k in value) {
        value = value[k];
      } else {
        return key; // Key not found
      }
    }
    
    if (typeof value !== 'string') {
      return key;
    }
    
    // Replace parameters if provided
    if (params) {
      return this.replaceParams(value, params);
    }
    
    return value;
  }
  
  /**
   * Replace parameters in translation string
   */
  private replaceParams(text: string, params: { [key: string]: any }): string {
    return text.replace(/\{(\w+)\}/g, (match, paramName) => {
      return params[paramName] !== undefined ? params[paramName] : match;
    });
  }
  
  /**
   * Get available languages
   */
  getAvailableLanguages(): { code: LanguageCode; name: string; flag?: string }[] {
    return [
      { code: 'fr', name: 'Français', flag: '🇫🇷' },
      { code: 'en', name: 'English', flag: '🇬🇧' }
    ];
  }
  
  /**
   * Check if translations are loaded
   */
  isLoaded(): boolean {
    return this.translationsLoaded;
  }
}

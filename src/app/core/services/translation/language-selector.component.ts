import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslationService, LanguageCode } from './translation.service';

@Component({
  selector: 'app-language-selector',
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
  styles: [`
    .language-selector {
      display: inline-block;
    }
    .dropdown-item {
      cursor: pointer;
      display: flex;
      align-items: center;
      gap: 8px;
    }
  `]
})
export class LanguageSelectorComponent implements OnInit {
  availableLanguages: { code: LanguageCode; name: string; flag?: string }[] = [];
  currentLanguage: LanguageCode = 'fr';
  currentLanguageName: string = 'Français';
  currentLanguageFlag: string = '🇫🇷';

  constructor(private translationService: TranslationService) {}

  ngOnInit(): void {
    this.availableLanguages = this.translationService.getAvailableLanguages();
    this.updateCurrentLanguage();
    
    // Subscribe to language changes
    this.translationService.languageChanges.subscribe(() => {
      this.updateCurrentLanguage();
    });
  }

  changeLanguage(language: LanguageCode): void {
    this.translationService.setLanguage(language);
  }

  private updateCurrentLanguage(): void {
    this.currentLanguage = this.translationService.getCurrentLanguage();
    const lang = this.availableLanguages.find(l => l.code === this.currentLanguage);
    if (lang) {
      this.currentLanguageName = lang.name;
      this.currentLanguageFlag = lang.flag || '';
    }
  }
}

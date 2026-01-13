import { Pipe, PipeTransform, OnDestroy, ChangeDetectorRef } from '@angular/core';
import { TranslationService } from './translation.service';
import { Subscription } from 'rxjs';

@Pipe({
  name: 'translate',
  pure: false // Make pipe impure to detect language changes
})
export class TranslatePipe implements PipeTransform, OnDestroy {
  private lastKey: string = '';
  private lastParams: any = null;
  private lastValue: string = '';
  private languageChangeSubscription: Subscription;
  private translationsLoadedSubscription: Subscription;

  constructor(
    private translationService: TranslationService,
    private changeDetectorRef: ChangeDetectorRef
  ) {
    // Subscribe to language changes to trigger pipe update
    this.languageChangeSubscription = this.translationService.languageChanges.subscribe(() => {
      this.updateTranslation();
      this.changeDetectorRef.markForCheck();
    });
    
    // Subscribe to translations loaded state changes
    this.translationsLoadedSubscription = this.translationService.translationsLoadedChanges.subscribe(() => {
      this.updateTranslation();
      this.changeDetectorRef.markForCheck();
    });
  }

  transform(key: string, params?: { [key: string]: any }): string {
    // If key or params changed, get new translation
    if (key !== this.lastKey || JSON.stringify(params) !== JSON.stringify(this.lastParams)) {
      this.lastKey = key;
      this.lastParams = params;
      this.updateTranslation();
    }

    return this.lastValue;
  }
  
  private updateTranslation(): void {
    this.lastValue = this.translationService.translate(this.lastKey, this.lastParams);
  }

  ngOnDestroy(): void {
    if (this.languageChangeSubscription) {
      this.languageChangeSubscription.unsubscribe();
    }
    if (this.translationsLoadedSubscription) {
      this.translationsLoadedSubscription.unsubscribe();
    }
  }
}

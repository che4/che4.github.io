import { NgModule, Inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { ProviderType, TRANSLATION_CONFIG, TranslationConfig } from "angular-l10n";

import { NavigationComponent } from './navigation.component';
import { LangComponent } from './lang.component';
import { SharedModule } from '../shared.module';


@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    SharedModule
  ],
  declarations: [NavigationComponent, LangComponent],
  exports: [NavigationComponent, LangComponent]
})
export class NavigationModule { 
  /**
   * Adds translations for NavigationModule
   * @param translationConfig
   */
  constructor(@Inject(TRANSLATION_CONFIG) private translationConfig: TranslationConfig){
      this.translationConfig
        .providers.unshift(
          { type: ProviderType.Static, prefix: './assets/l10n/navigation/locale-' },
          { type: ProviderType.Fallback, prefix: './assets/l10n/navigation/locale-en', fallbackLanguage: [] },
      );
  }
}

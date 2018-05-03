import { NgModule, ModuleWithProviders } from "@angular/core";
import { HttpModule } from '@angular/http';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { L10nConfig, L10nLoader, TranslationModule, StorageStrategy, ProviderType, LocalizationModule } from 'angular-l10n';

const l10nConfig: L10nConfig = {
  locale: {
      languages: [
          { code: 'en', dir: 'ltr' },
          { code: 'ru', dir: 'ltr' }
      ],
      defaultLocale: { languageCode: 'en', countryCode: 'UK' },
      currency: 'EUR',
      storage: StorageStrategy.Session
  },
  translation: {
      providers: [
          { type: ProviderType.Fallback, prefix: './assets/l10n/locale-en', fallbackLanguage: [] },
          { type: ProviderType.Static, prefix: './assets/l10n/locale-' }
      ],
      caching: true,
      composedKeySeparator : '::'
  }
};

@NgModule({
  imports: [ 
    HttpModule,
    LocalizationModule.forRoot(l10nConfig),
    NgbModule.forRoot()
  ],
  exports: [ LocalizationModule, NgbModule ],
  declarations: []  
})
export class SharedModule {
    static forRoot(): ModuleWithProviders {
      return {
        ngModule: SharedModule,
        providers: []
      };
    }
    constructor(private l10nLoader: L10nLoader){
      l10nLoader.load();
    }
 }
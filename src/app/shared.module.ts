import { NgModule, ModuleWithProviders } from "@angular/core";
import { HttpModule } from '@angular/http';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { LocalizationModule } from 'angular-l10n';

@NgModule({
  imports: [ 
    HttpModule,
    LocalizationModule,
    NgbModule
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

/*
    constructor(public locale: LocaleService, public translation: TranslationService){
        this.locale.addConfiguration()
          .disableStorage()
          .addLanguages(["en", "it", "ru"])
          .defineDefaultLocale("en", "GB")
          .defineCurrency("EUR");
          //.defineLanguage('en');            
        this.locale.init();

        this.translation.addConfiguration()
            .addProvider('./assets/l10n/shared/locale-');
        this.translation.init();
    }
*/
 }
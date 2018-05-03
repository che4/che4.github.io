import { NgModule, Inject } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LightboxModule } from 'angular2-lightbox';
import { TRANSLATION_CONFIG, TranslationConfig, ProviderType } from 'angular-l10n';

import { SharedModule } from '../shared.module';
import { BingSplashComponent } from './bing-splash.component';
import { BingSplashRoutingModule } from './bing-splash-routing.module';
import { PictureService } from './picture.service';

@NgModule({
  imports: [
    CommonModule,
    BingSplashRoutingModule,
    LightboxModule,
    SharedModule
  ],
  providers : [ PictureService ],
  declarations: [ BingSplashComponent ],
  exports: [ BingSplashComponent ]
})
export class BingSplashModule {
  /**
   * Adds translations for NavigationModule
   * @param translationConfig
   */
  constructor(@Inject(TRANSLATION_CONFIG) private translationConfig: TranslationConfig){
    this.translationConfig
      .providers.unshift(
        { type: ProviderType.Static, prefix: './assets/l10n/bing-splash/content-' },
        { type: ProviderType.Fallback, prefix: './assets/l10n/bing-splash/content-en', fallbackLanguage: [] },
    );
}
 }

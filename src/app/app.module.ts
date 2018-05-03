import { BrowserModule, DOCUMENT } from '@angular/platform-browser';
import { NgModule, Inject } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component'
import { NavigationModule } from './navigation/navigation.module';
import { HomePageModule } from './home-page/home-page.module';
import { BingSplashModule } from './bing-splash/bing-splash.module';
import { SharedModule } from './shared.module';

import { L10nConfig, L10nLoader, TranslationModule, StorageStrategy, ProviderType, LocalizationModule } from 'angular-l10n';

const l10nConfig: L10nConfig = {
  locale: {
      languages: [
          { code: 'en', dir: 'ltr' },
          { code: 'ru', dir: 'ltr' }
      ],
      //language: 'ru',
      defaultLocale: { languageCode: 'en', countryCode: 'US' },
      storage: StorageStrategy.Cookie
  },
  translation: {
      providers: [
          { type: ProviderType.Fallback, prefix: './assets/l10n/locale-en', fallbackLanguage: [] },
          { type: ProviderType.Static, prefix: './assets/l10n/locale-' }
      ],
      caching: true,
      composedKeySeparator : '::'
      //missingValue: 'No key'
  }
};

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NgbModule.forRoot(),
    NavigationModule,
    HomePageModule,
    BingSplashModule,
    LocalizationModule.forRoot(l10nConfig),
    //TranslationModule.forRoot(l10nConfig),
    SharedModule.forRoot(),
    RouterModule.forRoot([
      { path: '**', redirectTo: '/' }
   ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  /**
   * Loads external stylesheets dynamically
   * @param document
   */
  constructor(@Inject(DOCUMENT) private document: any, private l10nLoader: L10nLoader) {
    this.l10nLoader.load();
    //bootstrap.css
    const bootswatch = document.createElement('link');
    bootswatch.rel = 'stylesheet';
    bootswatch.type = 'text/css';
    bootswatch.href = 'https://bootswatch.com/4/sandstone/bootstrap.min.css';
    //bootswatch.href = 'https://unpkg.com/bootstrap@4.1.0/dist/css/bootstrap.min.css';
    document.getElementsByTagName('head')[0].appendChild(bootswatch);

    //font-awesome.css
    const fa = document.createElement('link');
    fa.rel = 'stylesheet';
    fa.type = 'text/css';
    fa.href = 'https://unpkg.com/font-awesome@4.7.0/css/font-awesome.min.css';
    document.getElementsByTagName('head')[0].appendChild(fa);

    /* lightbox
    const lightbox = document.createElement('link');
    lightbox.rel = 'stylesheet';
    lightbox.type = 'text/css';
    lightbox.href = 'https://unpkg.com/angular2-lightbox@1.3.0/lightbox.css';
    document.getElementsByTagName('head')[0].appendChild(lightbox);
    */
  }
}

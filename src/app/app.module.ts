import { BrowserModule, DOCUMENT } from '@angular/platform-browser';
import { NgModule, Inject } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component'
import { NavigationModule } from './navigation/navigation.module';
import { HomePageModule } from './home-page/home-page.module';
import { BingSplashModule } from './bing/bing-splash.module';
import { SharedModule } from './shared.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    SharedModule.forRoot(),
    NavigationModule,
    HomePageModule,
    BingSplashModule,
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
  constructor(@Inject(DOCUMENT) private document: any) {
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

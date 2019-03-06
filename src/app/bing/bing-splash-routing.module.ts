import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BingSplashComponent } from './bing-splash.component'

const routes: Routes = [
  { path: 'bingsplash', component: BingSplashComponent }
];


@NgModule({
  imports: [
    RouterModule.forRoot(routes),
  ],
  declarations: [],
  exports: [ RouterModule ]
})
export class BingSplashRoutingModule {}
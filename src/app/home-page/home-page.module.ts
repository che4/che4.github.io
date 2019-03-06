import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { HomePageComponent } from './home-page.component';
import { HomePageRoutingModule } from './home-page-routing.module';
import { SharedModule } from '../shared.module';

@NgModule({
  imports: [
    CommonModule,
    HomePageRoutingModule,
    SharedModule
  ],
  declarations: [HomePageComponent]
})
export class HomePageModule { }

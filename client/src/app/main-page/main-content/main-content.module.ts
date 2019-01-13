import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainContentRoutingModule } from './main-content-routing';
import { TestCompo1Component } from '../test-compo1/test-compo1.component';

@NgModule({
  imports: [
    CommonModule,
    MainContentRoutingModule,
  ],
  declarations: [
    TestCompo1Component
  ]
})
export class MainContentModule { }

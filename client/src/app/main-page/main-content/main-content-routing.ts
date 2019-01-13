import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TestCompo1Component } from '../test-compo1/test-compo1.component';

const routes: Routes = [
  { path: '', component: TestCompo1Component },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainContentRoutingModule { }

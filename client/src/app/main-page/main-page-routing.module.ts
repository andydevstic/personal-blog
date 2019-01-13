import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainPageComponent } from './main-page.component';
import { TestCompo1Component } from './test-compo1/test-compo1.component';

const routes: Routes = [
  {
    path: '', component: MainPageComponent, children: [
      { path: 'compo1', component: TestCompo1Component }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  declarations: [
    TestCompo1Component
  ]
})
export class MainPageRoutingModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainPageRoutingModule } from './main-page-routing.module';
import { MainPageComponent } from './main-page.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MaterialModule } from '../shared/modules/material/material.module';
import { NavigatorComponent } from './navigator/navigator.component';
import { PostCoverComponent } from './model-components/post-cover/post-cover.component';
import { MainNavComponent } from './main-nav/main-nav.component';
import { StringLimit } from '../shared/pipes/string-limit.pipe';

@NgModule({
  imports: [
    CommonModule,
    MainPageRoutingModule,
    MaterialModule,
  ],
  declarations: [
    MainPageComponent,
    HeaderComponent,
    FooterComponent,
    NavigatorComponent,
    PostCoverComponent,
    MainNavComponent,
    StringLimit,
  ],
})
export class MainPageModule { }

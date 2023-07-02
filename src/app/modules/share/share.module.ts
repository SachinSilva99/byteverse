import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShareRoutingModule } from './share-routing.module';
import { ShareComponent } from './share.component';
import { MainHeaderContextComponent } from './components/main-header-context/main-header-context.component';
import { MainHeaderNavbarComponent } from './components/main-header-context/inner-items/main-header-navbar/main-header-navbar.component';


@NgModule({
  declarations: [
    ShareComponent,
    MainHeaderContextComponent,
    MainHeaderNavbarComponent
  ],
  imports: [
    CommonModule,
    ShareRoutingModule
  ]
})
export class ShareModule { }

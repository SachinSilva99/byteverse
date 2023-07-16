import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShareRoutingModule } from './share-routing.module';
import { ShareComponent } from './share.component';
import { MainHeaderContextComponent } from './components/main-header-context/main-header-context.component';
import { MainHeaderNavBarComponent } from './components/main-header-context/inner-items/main-header-nav-bar/main-header-nav-bar.component';
import { MainHeaderFooterComponent } from './components/main-header-context/inner-items/main-header-footer/main-header-footer.component';


@NgModule({
    declarations: [
        ShareComponent,
        MainHeaderContextComponent,
        MainHeaderNavBarComponent,
        MainHeaderFooterComponent,

    ],
  exports: [
    MainHeaderNavBarComponent
  ],
    imports: [
        CommonModule,
        ShareRoutingModule
    ]
})
export class ShareModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShareRoutingModule } from './share-routing.module';
import { ShareComponent } from './share.component';
import { MainHeaderContextComponent } from './components/main-header-context/main-header-context.component';
import {NavbarComponent} from "./components/main-header-context/inner-items/navbar/navbar.component";


@NgModule({
    declarations: [
        ShareComponent,
        MainHeaderContextComponent,
        NavbarComponent,

    ],
    exports: [
        NavbarComponent
    ],
    imports: [
        CommonModule,
        ShareRoutingModule
    ]
})
export class ShareModule { }

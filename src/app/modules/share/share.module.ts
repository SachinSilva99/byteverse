import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShareRoutingModule } from './share-routing.module';
import { ShareComponent } from './share.component';


@NgModule({
    declarations: [
        ShareComponent,

    ],
  exports: [
  ],
    imports: [
        CommonModule,
        ShareRoutingModule
    ]
})
export class ShareModule { }

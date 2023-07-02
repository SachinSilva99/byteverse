import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProcessRoutingModule } from './process-routing.module';
import { ProcessComponent } from './process.component';
import { MainPageContextComponent } from './components/main-page-context/main-page-context.component';


@NgModule({
  declarations: [
    ProcessComponent,
    MainPageContextComponent
  ],
  imports: [
    CommonModule,
    ProcessRoutingModule
  ]
})
export class ProcessModule { }

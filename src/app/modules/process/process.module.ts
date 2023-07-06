import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {ProcessRoutingModule} from './process-routing.module';
import {ProcessComponent} from './process.component';
import {MainPageContextComponent} from './components/main-page-context/main-page-context.component';
import {ShareModule} from "../share/share.module";
import { HeroComponent } from './components/main-page-context/inner-items/hero/hero.component';
import { MainComponent } from './components/main-page-context/inner-items/main/main.component';
import { ClientSectionComponent } from './components/main-page-context/inner-items/main/client-section/client-section.component';
import { AboutUsComponent } from './components/main-page-context/inner-items/main/about-us/about-us.component';


@NgModule({
  declarations: [
    ProcessComponent,
    MainPageContextComponent,
    HeroComponent,
    MainComponent,
    ClientSectionComponent,
    AboutUsComponent,
  ],
  imports: [
    CommonModule,
    ProcessRoutingModule,
    ShareModule
  ]
})
export class ProcessModule {
}

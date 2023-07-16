import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {ProcessRoutingModule} from './process-routing.module';
import {ProcessComponent} from './process.component';
import {MainPageContextComponent} from './components/main-page-context/main-page-context.component';
import {ShareModule} from "../share/share.module";

import { MainPageMainSliderComponent } from './components/main-page-context/inner-items/main-page-main-slider/main-page-main-slider.component';
import { MainPageMainClientsComponent } from './components/main-page-context/inner-items/main-page-main-clients/main-page-main-clients.component';
import { MainPageMainAboutComponent } from './components/main-page-context/inner-items/main-page-main-about/main-page-main-about.component';
import { MainPageCallingAllComponent } from './components/main-page-context/inner-items/main-page-calling-all/main-page-calling-all.component';
import { MainPageWeOfferComponent } from './components/main-page-context/inner-items/main-page-we-offer/main-page-we-offer.component';
import { MainPageMainServicesComponent } from './components/main-page-context/inner-items/main-page-main-services/main-page-main-services.component';
import { MainPageCallActionComponent } from './components/main-page-context/inner-items/main-page-call-action/main-page-call-action.component';
import { MainPageMainPorfolioComponent } from './components/main-page-context/inner-items/main-page-main-porfolio/main-page-main-porfolio.component';
import { MainPageMainTeamComponent } from './components/main-page-context/inner-items/main-page-main-team/main-page-main-team.component';
import { MainPageMainPlanComponent } from './components/main-page-context/inner-items/main-page-main-plan/main-page-main-plan.component';
import { MainPageMainQuestionsComponent } from './components/main-page-context/inner-items/main-page-main-questions/main-page-main-questions.component';
import { MainPageMainContactComponent } from './components/main-page-context/inner-items/main-page-main-contact/main-page-main-contact.component';
import { IndustrialPageContextComponent } from './components/industrial-page-context/industrial-page-context.component';


@NgModule({
  declarations: [
    ProcessComponent,
    MainPageContextComponent,

    MainPageMainSliderComponent,
    MainPageMainClientsComponent,
    MainPageMainAboutComponent,
    MainPageCallingAllComponent,
    MainPageWeOfferComponent,
    MainPageMainServicesComponent,
    MainPageCallActionComponent,
    MainPageMainPorfolioComponent,
    MainPageMainTeamComponent,
    MainPageMainPlanComponent,
    MainPageMainQuestionsComponent,
    MainPageMainContactComponent,
    IndustrialPageContextComponent,
  ],
  imports: [
    CommonModule,
    ProcessRoutingModule,
    ShareModule
  ]
})
export class ProcessModule {
}

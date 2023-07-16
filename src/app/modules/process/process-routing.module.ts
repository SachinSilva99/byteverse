import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ProcessComponent} from './process.component';
import {IndustrialPageContextComponent} from "./components/industrial-page-context/industrial-page-context.component";
import {MainPageContextComponent} from "./components/main-page-context/main-page-context.component";

const routes: Routes = [
  {
    path: '', component: MainPageContextComponent, children: [
      {path: '', redirectTo: 'home', pathMatch: "full"},
      {path: 'home', component: MainPageContextComponent},
      {path: 'industrial', component: IndustrialPageContextComponent},
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProcessRoutingModule {
}

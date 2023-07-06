import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [

  {
    path: '',
    loadChildren: () =>
      import('./modules/process/process.module').then((m) => m.ProcessModule),
  },

  {
    path: 'security',
    loadChildren: () =>
      import('./modules/security/security.module').then(
        (m) => m.SecurityModule
      ),
  },
  {
    path: 'share',
    loadChildren: () =>
      import('./modules/share/share.module').then((m) => m.ShareModule),
  },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {
}

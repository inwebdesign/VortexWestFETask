import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'library',
    loadChildren: () => import('./layout/pages/library/library.module').then(m => m.LibraryModule)
  },
  {
    path: 'home',
    redirectTo: '',
  },
  {
    path: '',
    loadChildren: () => import('./core/components/landing-page/landing-page.module').then(m => m.LandingPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    preloadingStrategy: PreloadAllModules,
    anchorScrolling: 'enabled'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }

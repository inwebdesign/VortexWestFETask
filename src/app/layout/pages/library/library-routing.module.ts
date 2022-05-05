import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeLibraryComponent } from '../library/home-library/home-library.component';
import { GenresWrapperComponent } from './genres-wrapper/genres-wrapper.component';
import { InformationComponent } from './information/information.component';
import { NewSubgenreComponent } from './new-subgenre/new-subgenre.component';
import { RouteGuard } from './route.guard';
import { SubgenresWrapperComponent } from './subgenres-wrapper/subgenres-wrapper.component';
import { SuccessSubmitionComponent } from './success-submition/success-submition.component';

const routes: Routes = [
  {
    path: '',
    component: HomeLibraryComponent,
    children: [
      {
        path: '',
        component: GenresWrapperComponent
      },
      {
        path: 'subgenres',
        component: SubgenresWrapperComponent,
        canActivate: [RouteGuard]
      },
      {
        path: 'new',
        component: NewSubgenreComponent,
        canActivate: [RouteGuard]
      },
      {
        path: 'info',
        component: InformationComponent,
        canActivate: [RouteGuard]
      },
      {
        path: 'success',
        component: SuccessSubmitionComponent,
        canActivate: [RouteGuard]
      }
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LibraryRoutingModule { }

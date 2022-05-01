import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeLibraryComponent } from '../library/home-library/home-library.component';
import { GenresWrapperComponent } from './genres-wrapper/genres-wrapper.component';
import { SubgenresWrapperComponent } from './subgenres-wrapper/subgenres-wrapper.component';

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
        component: SubgenresWrapperComponent
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LibraryRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeLibraryComponent } from '../library/home-library/home-library.component';

const routes: Routes = [
  {
    path: '',
    component: HomeLibraryComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LibraryRoutingModule { }

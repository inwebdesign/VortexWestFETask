import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LibraryRoutingModule } from './library-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { HomeLibraryComponent } from './home-library/home-library.component';
import { GenresWrapperComponent } from './genres-wrapper/genres-wrapper.component';
import { GenresComponent } from './genres/genres.component';


@NgModule({
  declarations: [
    HomeLibraryComponent,
    GenresWrapperComponent,
    GenresComponent
  ],
  imports: [
    CommonModule,
    LibraryRoutingModule,
    SharedModule,
  ]
})
export class LibraryModule { }

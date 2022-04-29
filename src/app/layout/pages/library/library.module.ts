import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LibraryRoutingModule } from './library-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { HomeLibraryComponent } from './home-library/home-library.component';
import { GendersWrapperComponent } from './genders-wrapper/genders-wrapper.component';
import { GendersComponent } from './genders/genders.component';


@NgModule({
  declarations: [
    HomeLibraryComponent,
    GendersWrapperComponent,
    GendersComponent
  ],
  imports: [
    CommonModule,
    LibraryRoutingModule,
    SharedModule,
  ]
})
export class LibraryModule { }

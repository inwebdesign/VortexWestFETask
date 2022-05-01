import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LibraryRoutingModule } from './library-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { HomeLibraryComponent } from './home-library/home-library.component';
import { GenresWrapperComponent } from './genres-wrapper/genres-wrapper.component';
import { GenresComponent } from './genres/genres.component';
import { StoreModule } from '@ngrx/store';
import { appSharedReducer, sharedFeatureKey } from 'src/app/store/reducers/shared.reducer';
import { SubgenresWrapperComponent } from './subgenres-wrapper/subgenres-wrapper.component';
import { SubgenresComponent } from './subgenres/subgenres.component';


@NgModule({
  declarations: [
    HomeLibraryComponent,
    GenresWrapperComponent,
    GenresComponent,
    SubgenresWrapperComponent,
    SubgenresComponent
  ],
  imports: [
    CommonModule,
    LibraryRoutingModule,
    SharedModule,
    StoreModule.forFeature(sharedFeatureKey, appSharedReducer)
  ]
})
export class LibraryModule { }

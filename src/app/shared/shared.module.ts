import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TitleComponent } from './title/title.component';
import { CardComponent } from './card/card.component';


@NgModule({
  declarations: [
    TitleComponent,
    CardComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    TitleComponent,
    CardComponent
  ]
})
export class SharedModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TitleComponent } from './title/title.component';
import { CardComponent } from './card/card.component';
import { ButtonsComponent } from './buttons/buttons.component';


@NgModule({
  declarations: [
    TitleComponent,
    CardComponent,
    ButtonsComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    TitleComponent,
    CardComponent,
    ButtonsComponent
  ]
})
export class SharedModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TitleComponent } from './title/title.component';
import { CardComponent } from './card/card.component';
import { ButtonsComponent } from './buttons/buttons.component';
import { FormComponent } from './form/form.component';
import { InputComponent } from './input/input.component';


@NgModule({
  declarations: [
    TitleComponent,
    CardComponent,
    ButtonsComponent,
    FormComponent,
    InputComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    TitleComponent,
    CardComponent,
    ButtonsComponent,
    FormComponent,
    InputComponent
  ]
})
export class SharedModule { }

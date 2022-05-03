import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TitleComponent } from './title/title.component';
import { CardComponent } from './card/card.component';
import { ButtonsComponent } from './buttons/buttons.component';
import { FormComponent } from './form/form.component';
import { InputComponent } from './input/input.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ProgressIndicatorComponent } from './progress-indicator/progress-indicator.component';


@NgModule({
  declarations: [
    TitleComponent,
    CardComponent,
    ButtonsComponent,
    FormComponent,
    InputComponent,
    ProgressIndicatorComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [
    TitleComponent,
    CardComponent,
    ButtonsComponent,
    FormComponent,
    InputComponent,
    ProgressIndicatorComponent
  ]
})
export class SharedModule { }

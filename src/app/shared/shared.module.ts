import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TitleComponent } from './title/title.component';
import { CardComponent } from './card/card.component';
import { ButtonsComponent } from './buttons/buttons.component';
import { FormComponent } from './form/form.component';
import { InputComponent } from './input/input.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ProgressIndicatorComponent } from './progress-indicator/progress-indicator.component';
import { ValidationMessageComponent } from './validation-message/validation-message.component';
import { NotificationMessageComponent } from './notification-message/notification-message.component';


@NgModule({
  declarations: [
    TitleComponent,
    CardComponent,
    ButtonsComponent,
    FormComponent,
    InputComponent,
    ProgressIndicatorComponent,
    ValidationMessageComponent,
    NotificationMessageComponent
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
    ProgressIndicatorComponent,
    ValidationMessageComponent,
    NotificationMessageComponent
  ]
})
export class SharedModule { }

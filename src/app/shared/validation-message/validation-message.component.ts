import { Component, OnInit, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-validation-message',
  templateUrl: './validation-message.component.html',
  styleUrls: ['./validation-message.component.scss']
})
export class ValidationMessageComponent implements OnInit {

  constructor() { }
  @Input('validation') validationControl!: FormControl;
  @Input('currentField') validationFieldName!: string;
  validationMessage!: string | undefined;
  private space = String.fromCharCode(160);
  
  validationMessages = [
    {
      required: 'is required',
      minlength: 'must be at least',
      maxlength: 'must be less then',
      characters: 'characters',
      pattern: 'is not valid',
      date: 'Expiration date is not valid',
      offline: 'You are currently offline',
    },
  ];
  
  controlFormErrors(control: FormControl): any {
    const { errors } = control;
    for (let key in errors) {
      switch (key) {
        case 'required':
          this.validationMessage =
            this.space + this.validationMessages[0].required;
          return true;
        case 'minlength':
          this.validationMessage =
            this.validationMessages[0].minlength +
            this.space +
            errors[key].requiredLength +
            this.space +
            this.validationMessages[0].characters;
          return true;
        case 'maxlength':
          this.validationMessage =
            this.space +
            this.validationMessages[0].maxlength +
            this.space +
            errors[key].requiredLength +
            this.space +
            this.validationMessages[0].characters;
          return true;
        case 'pattern':
          this.validationMessage =
            this.space + this.validationMessages[0].pattern;
          return true;
        case 'expirationYear':
          this.validationMessage = this.validationMessages[0].date;
          return true;
        default:
          return false;
      }
    }
  }
  ngOnInit(): void {
  }

}

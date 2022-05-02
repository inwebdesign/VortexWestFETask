import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  constructor() { }
  form = new FormGroup({
    'bookTitle': new FormControl('', [
      Validators.required
    ]),
    'Author': new FormControl('', [
      Validators.required
    ]),
    'isbn': new FormControl('', [
      Validators.required
    ]),
    'publisher': new FormControl('', [
      Validators.required
    ]), 
    'datePublished': new FormControl('', [
      Validators.required
    ]),
    'numberOfPages': new FormControl('', [
      Validators.required
    ]),
    'format': new FormControl('', [
      Validators.required
    ]),
    'edition': new FormControl('', [
      Validators.required
    ]),
    'description': new FormControl('', [
      Validators.required
    ]),
  })
  ngOnInit(): void {
  }

}

import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { GenreService } from 'src/app/layout/pages/library/genre.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  constructor(private genreService: GenreService) { }
  libraryForm = new FormGroup({
    'bookTitle': new FormControl('', [
      Validators.required
    ]),
    'author': new FormControl('', [
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
    'editionLanguage': new FormControl('', [
      Validators.required
    ]),
    'description': new FormControl('', [
      Validators.required
    ]),
  })

  get gnrService() {
    return this.genreService;
  }
  onSubmit() {
    console.log(this.libraryForm.value)
  }
  ngOnInit(): void {
  }

}

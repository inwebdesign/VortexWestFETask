import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { GenreService } from '../genre.service';

@Component({
  selector: 'app-new-subgenre',
  templateUrl: './new-subgenre.component.html',
  styleUrls: ['./new-subgenre.component.scss']
})
export class NewSubgenreComponent implements OnInit {

  constructor(private genreService: GenreService) { }
  newSubgenreForm = new FormGroup({
    'subgenreName': new FormControl('', [
      Validators.required,
    ])
  })

  get gnrService() {
    return this.genreService
  }
  onSubmit() {
    console.log(this.newSubgenreForm.value)
  }
  ngOnInit(): void {
  }

}

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
    ]),
    'description': new FormControl(false)
  })

  get gnrService() {
    return this.genreService
  }
  onCheckChange(event: any) {
    if (event.target?.checked) {
      this.newSubgenreForm.patchValue({'description': event.target.checked})
    }
  }
  onSubmit() {
    const {description} = this.newSubgenreForm.value
    this.genreService.setDescriptionRequirement(description, true)
  }
  ngOnInit(): void {
  }

}

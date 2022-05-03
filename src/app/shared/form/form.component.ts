import { Component, OnDestroy } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { GenreService } from 'src/app/layout/pages/library/genre.service';
import { Description } from 'src/app/models/genres';
import { bookSubmitionSuccess } from 'src/app/store/actions/shared.actions';
import { isDescriptionRequired } from 'src/app/store/selectors/shared.selectors';
import { sharedAppState } from 'src/app/store/state';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnDestroy {

  isDescriptionRequired$!: Subscription;
  constructor(private genreService: GenreService, private store: Store<sharedAppState>, private route: Router) {
    this.isDescriptionRequired$ = this.store.select(isDescriptionRequired).subscribe(res => {
      res ? this.libraryForm.get('description')?.setValidators(Validators.required) : null
    })
  }

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
    'description': new FormControl(''),
  })

  get gnrService() {
    return this.genreService;
  }
  onSubmit() {
    console.log(this.libraryForm.value)
    this.route.navigateByUrl('/library/success')
    this.store.dispatch(bookSubmitionSuccess({success: true}))
  }
  ngOnDestroy(): void {
    this.isDescriptionRequired$.unsubscribe()
  }

}

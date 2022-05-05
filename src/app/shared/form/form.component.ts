import { Component, OnDestroy } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { GenreService } from 'src/app/layout/pages/library/genre.service';
import { bookSubmitionSuccess } from 'src/app/store/actions/shared.actions';
import { isDescriptionRequired, payload } from 'src/app/store/selectors/shared.selectors';
import { sharedAppState } from 'src/app/store/state';
import { DatePublishedValidator } from '../date-published-validator';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnDestroy {

  isDescriptionRequired$!: Subscription;
  constructor(private genreService: GenreService, private store: Store<sharedAppState>, private route: Router) {
    this.isDescriptionRequired$ = this.store.select(isDescriptionRequired).subscribe(res => {
      if(res == true) {
        this.libraryForm.get('description')?.setValidators(Validators.required)
      }
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
    'datePublished': new DatePublishedValidator('', [
      Validators.required,
      Validators.pattern(
        /^(0[1-9]|[12][0-9]|3[01])[- /.](0[1-9]|1[012])[- /.](19|20)\d\d$/
      )
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
    'id': new FormControl(''),
    'name': new FormControl(''),
    'subgenres': new FormControl('')
  })

  get gnrService() {
    return this.genreService;
  }
  onSubmit() {
    this.store.select(payload).subscribe(res => {
      this.libraryForm.patchValue({
        id: res.id,
        name: res.name,
        subgenres: res.subgenres
      });
    })
    console.log(this.libraryForm.value)
    this.route.navigateByUrl('/library/success')
    this.store.dispatch(bookSubmitionSuccess({success: true}))
  }
  ngOnDestroy(): void {
    this.isDescriptionRequired$.unsubscribe()
  }

}

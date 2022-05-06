import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { setSubgenresList, submitNewSubgenre } from 'src/app/store/actions/shared.actions';
import { getSubGenreId, payload } from 'src/app/store/selectors/shared.selectors';
import { sharedAppState } from 'src/app/store/state';
import { GenreService } from '../genre.service';

@Component({
  selector: 'app-new-subgenre',
  templateUrl: './new-subgenre.component.html',
  styleUrls: ['./new-subgenre.component.scss']
})
export class NewSubgenreComponent {
  subgenreId = 0
  payload$!: Subscription;
  constructor(private genreService: GenreService, private store: Store<sharedAppState>) {
    this.store.select(getSubGenreId).subscribe(res => this.subgenreId = res.id)
   }
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
    const {description, subgenreName} = this.newSubgenreForm.value
    this.genreService.setDescriptionRequirement(description, true)
    this.store.dispatch(setSubgenresList({subgenres:{id: this.subgenreId, name: subgenreName, isDescriptionRequired: description}}))
    this.payload$ = this.store.select(payload).subscribe(res => this.store.dispatch(submitNewSubgenre({id: res.id, name: res.name, subgenres: res.subgenres})))
  }
  ngOnDestroy(): void {
    this.payload$.unsubscribe()
  }

}

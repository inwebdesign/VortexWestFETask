import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { finalStep, getSubgenresRequest, increaseProgress } from 'src/app/store/actions/shared.actions';
import { getCurrentStep, getGenreId, getSubGenreId, isNewSubgenreAdded } from 'src/app/store/selectors/shared.selectors';
import { sharedAppState } from 'src/app/store/state';
import { GenreService } from './genre.service';

@Injectable({
  providedIn: 'root'
})
export class ProgressService {
  selectedGenreId$!: Subscription;
  selectedSubgenreId$!: Subscription;
  currentStep$!: Subscription
  isNewSubgenreAdded = false
  genreId!: number;
  subgenreId!: number;
  currentStep = 0

  constructor(private store: Store<sharedAppState>, private router: Router, private genreService: GenreService) {
    this.store.select(isNewSubgenreAdded).subscribe(res => this.isNewSubgenreAdded = res.newSubgenre)
    this.selectedGenreId$ = this.store.select(getGenreId).subscribe(res => this.genreId = res.id)
    this.selectedSubgenreId$ = this.store.select(getSubGenreId).subscribe(res => this.subgenreId = res.id)
    this.currentStep$ = this.store.select(getCurrentStep).subscribe(res => this.currentStep = res)
  }

  navigateToNextStep() {
    this.store.dispatch(increaseProgress());
    if(this.isNewSubgenreAdded) {
      this.router.navigateByUrl('/library/new')
      return
    }
    if(this.subgenreId) {
      this.store.dispatch(finalStep({finalStep: true}))
      if (this.genreService.descriptionRequired) this.genreService.setDescriptionRequirement(this.genreService.descriptionRequired, true)
      this.router.navigateByUrl('/library/info')
      return
    }
    if (this.genreId && !this.subgenreId) {
      this.store.dispatch(getSubgenresRequest({id: this.genreId }))
      return
    }
   }

   get step() {
     return this.currentStep
   }

}

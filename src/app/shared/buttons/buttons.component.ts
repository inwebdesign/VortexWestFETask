import { Component, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { GenreService } from 'src/app/layout/pages/library/genre.service';
import { CategorySelected, NewSubgenre } from 'src/app/models/genres';
import { getSubgenresRequest, increaseProgress } from 'src/app/store/actions/shared.actions';
import { getCurrentStep, getGenreId, getSubGenreId, isCategorySelected, isFinalStep, isNewSubgenreAdded } from 'src/app/store/selectors/shared.selectors';
import { sharedAppState } from 'src/app/store/state';

@Component({
  selector: 'app-buttons',
  templateUrl: './buttons.component.html',
  styleUrls: ['./buttons.component.scss']
})
export class ButtonsComponent implements OnDestroy {
  isCategorySelected$!: Observable<CategorySelected>
  isNewSubgenre$!: Observable<NewSubgenre>
  isNewSubgenreAdded = false
  selectedGenreId$!: Subscription;
  selectedSubgenreId$!: Subscription;
  genreId!: number;
  subgenreId!: number;
  currentStep = 0
  finalStep$!: Observable<boolean>
  currentStep$!: Subscription

  constructor(private store: Store<sharedAppState>, private genreService: GenreService, private route: Router) { 
    this.isCategorySelected$ = this.store.select(isCategorySelected)
    this.isNewSubgenre$ = this.store.select(isNewSubgenreAdded)
    this.store.select(isNewSubgenreAdded).subscribe(res => this.isNewSubgenreAdded = res.newSubgenre)
    this.selectedGenreId$ = this.store.select(getGenreId).subscribe(res => this.genreId = res.id)
    this.selectedSubgenreId$ = this.store.select(getSubGenreId).subscribe(res => this.subgenreId = res.id)
    this.finalStep$ = this.store.select(isFinalStep)
    this.currentStep$ = this.store.select(getCurrentStep).subscribe(res => this.currentStep = res)
  }
  get gnrService() {
    return this.genreService;
  }
  navigateToNextStep() {
    this.store.dispatch(increaseProgress());
    if(this.isNewSubgenreAdded) {
      this.route.navigateByUrl('/library/new')
      return
    }
    if(this.subgenreId) {
      this.route.navigateByUrl('/library/info')
      return
    }
    if (this.genreId) {
      this.store.dispatch(getSubgenresRequest({id: this.genreId }))
      return
    }
   }

  ngOnDestroy(): void {
    this.selectedGenreId$.unsubscribe()
    this.selectedSubgenreId$.unsubscribe()
    this.currentStep$.unsubscribe()
  }


}

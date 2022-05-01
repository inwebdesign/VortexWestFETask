import { Component, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { GenreService } from 'src/app/layout/pages/library/genre.service';
import { CategorySelected } from 'src/app/models/genres';
import { getSubgenresRequest } from 'src/app/store/actions/shared.actions';
import { getGenreId, isCategorySelected } from 'src/app/store/selectors/shared.selectors';
import { sharedAppState } from 'src/app/store/state';

@Component({
  selector: 'app-buttons',
  templateUrl: './buttons.component.html',
  styleUrls: ['./buttons.component.scss']
})
export class ButtonsComponent implements OnDestroy {
  isCategorySelected$!: Observable<CategorySelected>
  selectedGenreId$!: Subscription;
  id!: number

  constructor(private store: Store<sharedAppState>, private genreService: GenreService) { 
    this.isCategorySelected$ = this.store.select(isCategorySelected)
    this.selectedGenreId$ = this.store.select(getGenreId).subscribe(res => this.id = res.id)
  }
  get gnrService() {
    return this.genreService;
  }
  navigateToSubgenres() {
    this.store.dispatch(getSubgenresRequest({id: this.id }))
   }

  ngOnDestroy(): void {
    this.selectedGenreId$.unsubscribe()
  }


}

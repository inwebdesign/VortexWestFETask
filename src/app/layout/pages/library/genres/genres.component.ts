import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { CategorySelected, GenreId, Genres } from 'src/app/models/genres';
import { categorySelection, getGenresRequest, getSubgenresRequest, revertToPreviousPage } from 'src/app/store/actions/shared.actions';
import { getGenreId, getGenres, isCategorySelected } from 'src/app/store/selectors/shared.selectors';
import { sharedAppState } from 'src/app/store/state';
import { GenreService } from '../genre.service';

@Component({
  selector: 'app-genres',
  templateUrl: './genres.component.html',
  styleUrls: ['./genres.component.scss']
})
export class GenresComponent implements OnInit {
  listOfGenres$!: Observable<ReadonlyArray<Genres>>
  isCategorySelected$!: Observable<CategorySelected>
  selectedGenreId$!: Subscription;
  id!: number

  constructor(private store: Store<sharedAppState>, private genresService: GenreService) {
    this.listOfGenres$ = this.store.select(getGenres)
    this.isCategorySelected$ = this.store.select(isCategorySelected)
    this.selectedGenreId$ = this.store.select(getGenreId).subscribe(res => this.id = res.id)
   }
   get gnrService() {
     return this.genresService;
   }
   navigateToSubgenres() {
    this.store.dispatch(getSubgenresRequest({id: this.id }))
   }
   ngOnInit(): void {
    this.store.dispatch(getGenresRequest())
  }
  ngOnDestroy(): void {
    this.selectedGenreId$.unsubscribe()
  }
}

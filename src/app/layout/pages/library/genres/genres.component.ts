import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { CategorySelected, Genres } from 'src/app/models/genres';
import { categorySelection, getGenresRequest, revertToPreviousPage } from 'src/app/store/actions/shared.actions';
import { getGenres, isCategorySelected } from 'src/app/store/selectors/shared.selectors';
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
  constructor(private store: Store<sharedAppState>, private genresService: GenreService) {
    this.listOfGenres$ = this.store.select(getGenres)
    this.isCategorySelected$ = this.store.select(isCategorySelected)
   }
   get gnrService() {
     return this.genresService;
   }
   ngOnInit(): void {
    this.store.dispatch(getGenresRequest())
  }

}

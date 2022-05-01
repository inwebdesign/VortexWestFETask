import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { Genres } from 'src/app/models/genres';
import { getGenresRequest } from 'src/app/store/actions/shared.actions';
import { getGenres } from 'src/app/store/selectors/shared.selectors';
import { sharedAppState } from 'src/app/store/state';

@Component({
  selector: 'app-genres',
  templateUrl: './genres.component.html',
  styleUrls: ['./genres.component.scss']
})
export class GenresComponent implements OnInit {
  listOfGenres$!: Observable<ReadonlyArray<Genres>>

  constructor(private store: Store<sharedAppState>) {
    this.listOfGenres$ = this.store.select(getGenres)
   }
   ngOnInit(): void {
    this.store.dispatch(getGenresRequest())
  }
}

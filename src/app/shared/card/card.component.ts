import { Component, OnInit, Input, Output } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Genres, SubGenre } from 'src/app/models/genres';
import { categorySelection, selectedGenreId } from 'src/app/store/actions/shared.actions';
import { sharedAppState } from 'src/app/store/state';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  constructor(private store: Store<sharedAppState>) { }
  @Input('genres') genres!: Observable<ReadonlyArray<Genres>>
  @Input('subgenres') subgenres!: Observable<ReadonlyArray<SubGenre>>
  selectedGenre!: number;
  pickGenre(id: number) {
    this.selectedGenre = id;
    this.store.dispatch(selectedGenreId({id}))
    this.store.dispatch(categorySelection({selected: true}))
  }
  ngOnInit(): void {
  }

}

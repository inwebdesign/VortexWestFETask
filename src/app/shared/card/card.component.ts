import { Component, OnInit, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Genres, SubGenre } from 'src/app/models/genres';
import { categorySelection, selectedGenreId, selectedSubGenreId } from 'src/app/store/actions/shared.actions';
import { getGenreId } from 'src/app/store/selectors/shared.selectors';
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
  selectedGenre!: number | null;
  selectedSubgenre!: number;
  selectedCategory!: number;

  pickGenreOrSubgenre(id: number) {
    this.selectedCategory = id;
    !this.selectedGenre ? this.store.dispatch(selectedGenreId({id})) : this.store.dispatch(selectedSubGenreId({id}))
    this.store.dispatch(categorySelection({selected: true}))
  }
  
  ngOnInit(): void {
    this.store.select(getGenreId).subscribe(res => this.selectedGenre = res.id)
  }

}

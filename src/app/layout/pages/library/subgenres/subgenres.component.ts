import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { SubGenre } from 'src/app/models/genres';
import { getSubGenres } from 'src/app/store/selectors/shared.selectors';
import { sharedAppState } from 'src/app/store/state';

@Component({
  selector: 'app-subgenres',
  templateUrl: './subgenres.component.html',
  styleUrls: ['./subgenres.component.scss']
})
export class SubgenresComponent implements OnInit {
  listOfSubgenres$!: Observable<SubGenre[]>
  constructor(private store: Store<sharedAppState>) {
    this.listOfSubgenres$ = this.store.select(getSubGenres)
   }

  ngOnInit(): void {
  }

}

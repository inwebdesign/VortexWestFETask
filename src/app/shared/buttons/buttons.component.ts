import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { GenreService } from 'src/app/layout/pages/library/genre.service';
import { ProgressService } from 'src/app/layout/pages/library/progress.service';
import { CategorySelected, NewSubgenre } from 'src/app/models/genres';
import { isCategorySelected, isFinalStep, isNewSubgenreAdded } from 'src/app/store/selectors/shared.selectors';
import { sharedAppState } from 'src/app/store/state';

@Component({
  selector: 'app-buttons',
  templateUrl: './buttons.component.html',
  styleUrls: ['./buttons.component.scss']
})
export class ButtonsComponent {
  isCategorySelected$!: Observable<CategorySelected>
  isNewSubgenre$!: Observable<NewSubgenre>
  finalStep$!: Observable<boolean>

  constructor(private store: Store<sharedAppState>, private genreService: GenreService, private progressService: ProgressService) { 
    this.isCategorySelected$ = this.store.select(isCategorySelected)
    this.isNewSubgenre$ = this.store.select(isNewSubgenreAdded)
    this.finalStep$ = this.store.select(isFinalStep)
  }
  get gnrService() {
    return this.genreService;
  }
  get prgService() {
    return this.progressService
  }
}

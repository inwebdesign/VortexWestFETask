import { Component, OnInit, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { Genres, SubGenre } from 'src/app/models/genres';
import { addNewSubgenre, categorySelection, decreaseProgress, genreOfBooks, selectedGenreId, selectedSubGenreId, setSubgenresList } from 'src/app/store/actions/shared.actions';
import { getCurrentStep, getGenreId } from 'src/app/store/selectors/shared.selectors';
import { sharedAppState } from 'src/app/store/state';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  constructor(private store: Store<sharedAppState>) {
    this.activeStep$ = this.store.select(getCurrentStep).subscribe(res => this.currentStep = res)
  }
  @Input('genres') genres!: Observable<ReadonlyArray<Genres>>
  @Input('subgenres') subgenres!: Observable<ReadonlyArray<SubGenre>>
  @Input('listOfSubgenres') listOfSubgenres!: ReadonlyArray<SubGenre>
  selectedGenre!: number | null;
  selectedSubgenre!: number;
  selectedCategory!: number;
  addSubgenre = false
  subgnresList!: any[];
  currentStep!: number;
  listSubgenres!: ReadonlyArray<SubGenre>
  activeStep$!: Subscription

  pickGenreOrSubgenre(id: number, ...rest: any) {
    if (this.selectedGenre && this.selectedGenre > 0 && this.currentStep == 0) this.selectedGenre = 0
    const obj = {...rest}
    localStorage.setItem('subgenres', JSON.stringify(obj[0]))
    this.addSubgenre ? this.toggleNewSubgenre() : ''
    this.store.dispatch(addNewSubgenre({newSubgenre: false}))
    this.selectedCategory = id;
    if (!this.selectedGenre) {
      this.store.dispatch(categorySelection({selected: true}))
      this.store.dispatch(selectedGenreId({id}))
      this.store.dispatch(genreOfBooks({genreName: obj[0] }))
      return
     }
     this.store.dispatch(selectedSubGenreId({id}))
     this.store.dispatch(categorySelection({selected: true}))
     this.store.dispatch(setSubgenresList({subgenres:{id, name: obj[2], isDescriptionRequired: obj[1]}}))
    if(obj[1]) localStorage.setItem('description', 'true')
  }
  addNewSubgenre(list: any) {
    this.subgnresList = Object.values(list)
    const id = this.subgnresList.pop().id + 1
    this.store.dispatch(selectedSubGenreId({id}))
    this.store.dispatch(addNewSubgenre({newSubgenre: true}))
    this.toggleNewSubgenre()
  }

  toggleNewSubgenre() {
    this.selectedCategory = 0
    this.addSubgenre = !this.addSubgenre
  }
  ngOnInit(): void {
    this.store.select(getGenreId).subscribe(res => this.selectedGenre = res.id)
    if (this.subgenres) {this.subgenres.subscribe(res => {
      this.listSubgenres = res
    })
  }
  }
  ngOnDestroy(): void {
    this.addSubgenre = false
    this.activeStep$.unsubscribe()
  }

}

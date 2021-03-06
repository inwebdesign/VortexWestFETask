import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { map } from 'rxjs/operators';
import { Genres, SubgenresList } from 'src/app/models/genres';
import { GenresAPI } from 'src/app/shared/endpoints';
import { bookSubmitionSuccess, descriptionRequired, proceedToFinalStep, resetProgressStepToInitalValue, revertToPreviousPage } from 'src/app/store/actions/shared.actions';
import { isFinalStep } from 'src/app/store/selectors/shared.selectors';
import { sharedAppState } from 'src/app/store/state';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GenreService {

  constructor(private http: HttpClient, private store: Store<sharedAppState>, private router: Router) { }
  private BASE_URL = environment.BASE_URL;
  isFinalStep$!: Subscription;
  finalStep = false;
  
  // get subgenres list for refresh
  get subgernes() {
    const subList = localStorage.getItem('subgenres')
    if (subList == undefined) return
    return JSON.parse(subList)
  }
  // get description required info
  get descriptionRequired() {
    const description = localStorage.getItem('description')
    if (description) return JSON.parse(description)
  }
  // get list of genres
  getGenres(): Observable<Genres[]> {
    return this.http.get<Genres[]>(`${this.BASE_URL}${GenresAPI.GenresList}`)
  }
  // get list of subgenres for seletect genre
  getListOfSubgenres(id: number): Observable<SubgenresList> {
    return this.http.get<SubgenresList>(`${this.BASE_URL}${GenresAPI.GenresList}/${id}`).pipe(
      map((data) => {
        return { subgenres: data.subgenres }
      })
    )
  }
  // submit new subgenre to genres list
  addSubgenreToGenresList(payload: Genres): void {
    this.http.post<Genres>(`${this.BASE_URL}${GenresAPI.GenresList}`, {id: payload.id, name: payload.name, subgenres: payload.subgenres}).subscribe(res => console.log('SAVED TO GENRE LIST:', res))
  }
  // Form Control field values pick
  getFieldControl(item: string, form: FormGroup) {
    return form.get(item) as FormControl;
  }
  // check if it is final step
  getIsFinalStep() {
    this.isFinalStep$ = this.store.select(isFinalStep).subscribe(res => this.finalStep = res)
    return this.finalStep
  }
  // set subgenre description to required
  setDescriptionRequirement(required: boolean, redirectAction = false) {
    this.store.dispatch(descriptionRequired({required}))
    redirectAction ? this.store.dispatch(proceedToFinalStep()) : null
  }
  // redirect to previous page
  goBack() {
    this.store.dispatch(revertToPreviousPage());
  }
  // set errors for validation purpose
  errors(control: FormControl) {
    if (control) {
      const { touched, dirty, errors } = control;
      if (touched) {
        return touched;
      }
      return touched && dirty && errors;
    }
    return null;
  }
   // remove white space from input field
   removeWhiteSpace(control: FormControl) {
    const { value } = control;
    control.setValue(value.trim());
  }
  // start new book submition
  newSubmition() {
    this.router.navigateByUrl('home')
    this.store.dispatch(bookSubmitionSuccess({success: false}))
  }
  // reset description
  resetDescription() {
    localStorage.removeItem('description')
    this.store.dispatch(descriptionRequired({required: false}))
  }
}

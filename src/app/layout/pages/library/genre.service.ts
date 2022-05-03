import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { map } from 'rxjs/operators';
import { Genres, SubgenresList } from 'src/app/models/genres';
import { GenresAPI } from 'src/app/shared/endpoints';
import { decreaseProgress, finalStep, revertToPreviousPage } from 'src/app/store/actions/shared.actions';
import { isFinalStep } from 'src/app/store/selectors/shared.selectors';
import { sharedAppState } from 'src/app/store/state';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GenreService {

  constructor(private http: HttpClient, private store: Store<sharedAppState>) { }
  private BASE_URL = environment.BASE_URL;
  isFinalStep$!: Subscription;
  finalStep = false;
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
  // Form Control field values pick
  getFieldControl(item: string, form: FormGroup) {
    return form.get(item) as FormControl;
  }
  // check if it is final step
  getIsFinalStep() {
    this.isFinalStep$ = this.store.select(isFinalStep).subscribe(res => this.finalStep = res)
    return this.finalStep
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
}

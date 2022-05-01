import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Genres, SubgenresList } from 'src/app/models/genres';
import { GenresAPI } from 'src/app/shared/endpoints';
import { revertToPreviousPage } from 'src/app/store/actions/shared.actions';
import { sharedAppState } from 'src/app/store/state';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GenreService {

  constructor(private http: HttpClient, private store: Store<sharedAppState>) { }
  private BASE_URL = environment.BASE_URL;
  // get list of genres
  getGenres(): Observable<Genres[]> {
    return this.http.get<Genres[]>(`${this.BASE_URL}${GenresAPI.GenresList}`)
  }
  // get list of subgenres for seletect genre
  getListOfSubgenres(id: number) : Observable<SubgenresList>{
    return this.http.get<SubgenresList>(`${this.BASE_URL}${GenresAPI.GenresList}/${id}`).pipe(
      map((data) => {
        return {subgenres: data.subgenres}
      })
    )
  }
  // redirect to previous page
  goBack() {
    this.store.dispatch(revertToPreviousPage());
  }
}

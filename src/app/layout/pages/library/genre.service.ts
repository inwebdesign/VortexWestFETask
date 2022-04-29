import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Genres } from 'src/app/models/genres';
import { GenresAPI } from 'src/app/shared/endpoints';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GenreService {

  constructor(private http: HttpClient) { }
  private BASE_URL = environment.BASE_URL;
  // get list of genres
  getGenres(): Observable<Genres[]> {
    return this.http.get<Genres[]>(`${this.BASE_URL}${GenresAPI.GenresList}`)
  }
}

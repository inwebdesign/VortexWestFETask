import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import * as SharedActions from '../actions/shared.actions'
import { catchError, exhaustMap, map, tap } from 'rxjs/operators'
import { Router } from '@angular/router';
import { GenreService } from 'src/app/layout/pages/library/genre.service';
import { HttpErrorResponse } from '@angular/common/http';
import { EMPTY } from 'rxjs';

@Injectable()
export class SharedEffects {

  loadGenres$ = createEffect(() => 
    this.actions$.pipe(
      ofType(SharedActions.getGenresRequest),
      exhaustMap(() => {
        return this.genresService.getGenres().pipe(
          map((data) => 
            SharedActions.getGenresSuccess({genres: data})
          ),
          catchError((err: HttpErrorResponse) => {
            throw Error(err.message)
          })
        )
      })
    )
  )
  // redirect to library page
  libraryPageRedirect = createEffect(
    () => {
      return this.actions$.pipe(
        ofType(SharedActions.startLibrary),
        tap(() => {
          this.router.navigateByUrl('/library');
        })
      );
    },
    { dispatch: false }
  );


  constructor(
    private actions$: Actions,
    private router: Router,
    private genresService: GenreService) {}
    
}

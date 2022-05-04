import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import * as SharedActions from '../actions/shared.actions'
import { catchError, exhaustMap, filter, map, tap } from 'rxjs/operators'
import { NavigationEnd, Router } from '@angular/router';
import { GenreService } from 'src/app/layout/pages/library/genre.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Store } from '@ngrx/store';
import { sharedAppState } from '../state';

@Injectable()
export class SharedEffects {

  loadGenres$ = createEffect(() =>
    this.actions$.pipe(
      ofType(SharedActions.getGenresRequest),
      exhaustMap(() => {
        return this.genresService.getGenres().pipe(
          map((data) =>
            SharedActions.getGenresSuccess({ genres: data })
          ),
          catchError((err: HttpErrorResponse) => {
            throw Error(err.message)
          })
        )
      })
    )
  )
  loadSubGenres$ = createEffect(() =>
    this.actions$.pipe(
      ofType(SharedActions.getSubgenresRequest),
      exhaustMap(({ id }) => {
        return this.genresService.getListOfSubgenres(id).pipe(
          tap(() => {
            this.router.navigateByUrl('/library/subgenres')
          }),
          map((data) =>
            SharedActions.getSubgenresSuccess({ subgenres: data.subgenres })
          )
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
  // redirect to previous page
  PreviousPageRedirect = createEffect(
    () => {
      return this.actions$.pipe(
        ofType(SharedActions.revertToPreviousPage),
        tap(() => {

          if (this.router.url === '/library/new') {
            this.router.navigateByUrl('/library/subgenres')
            this.store.dispatch(SharedActions.decreaseProgress());
            this.store.dispatch(SharedActions.categorySelection({ selected: false }))
            this.store.dispatch(SharedActions.finalStep({ finalStep: false }))
            this.store.dispatch(SharedActions.addNewSubgenre({ newSubgenre: false }))
            return
          }
          if (this.router.url === '/library/info') {
            this.router.navigateByUrl('/library/subgenres')
            this.store.dispatch(SharedActions.decreaseProgress());
            this.store.dispatch(SharedActions.categorySelection({ selected: false }))
            this.store.dispatch(SharedActions.finalStep({ finalStep: false }))
            localStorage.removeItem('description')
            return
          }
          if (this.router.url === '/library/subgenres') {
            this.router.navigateByUrl('/library')
            this.store.dispatch(SharedActions.decreaseProgress());
            this.store.dispatch(SharedActions.selectedSubGenreId({ id: 0 }))
            this.store.dispatch(SharedActions.selectedGenreId({ id: 0 }))
            this.store.dispatch(SharedActions.categorySelection({ selected: false }))
            return
          }
          if (this.router.url === '/library' && NavigationEnd) {
            this.router.navigateByUrl('home')
            this.store.dispatch(SharedActions.resetProgress())
            this.store.dispatch(SharedActions.selectedGenreId({ id: 0 }))
            this.store.dispatch(SharedActions.selectedSubGenreId({ id: 0 }))
            this.store.dispatch(SharedActions.categorySelection({ selected: false }))
            return
          }
          this.store.dispatch(SharedActions.finalStep({ finalStep: false }))

        })
      );
    },
    { dispatch: false }
  );
  // redirect to final step - info page
  proceedToInfoPage = createEffect(
    () => {
      return this.actions$.pipe(
        ofType(SharedActions.proceedToFinalStep),
        tap(() => {
          this.store.dispatch(SharedActions.finalStep({finalStep: true}))
          this.router.navigateByUrl('/library/info')
        })
      )
    }, { dispatch: false })


  constructor(
    private actions$: Actions,
    private router: Router,
    private genresService: GenreService,
    private store: Store<sharedAppState>) { }

}

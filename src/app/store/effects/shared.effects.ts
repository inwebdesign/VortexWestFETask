import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import * as SharedActions from '../actions/shared.actions'
import { tap } from 'rxjs/operators'
import { Router } from '@angular/router';

@Injectable()
export class SharedEffects {

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
    private router: Router) {}
  
}

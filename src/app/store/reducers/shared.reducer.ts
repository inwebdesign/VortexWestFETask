import { Action, createReducer, on } from '@ngrx/store';
import * as SharedActions from '../actions/shared.actions'
import { initialAppState } from '../state';

export const sharedFeatureKey = 'shared';


export const appSharedReducer = createReducer(
  initialAppState,
  on(SharedActions.getGenresSuccess, (state, {genres}) => {
    return {
      ...state,
      genres
    }
  }),
  on(SharedActions.selectedGenreId, (state, id) => {
    return {
      ...state,
      genreId: id
    }
  }),
  on(SharedActions.categorySelection, (state, selected) => {
    return {
      ...state,
      categorySelected: selected
    }
  })
);

import { createAction, props } from '@ngrx/store';
import { Genres } from 'src/app/models/genres';

export const startLibrary = createAction(
  '[Landing Page Home Component] Start The App'
);

export const getGenresRequest = createAction(
  '[Genres Component] Get List of Genres'
);
export const getGenresSuccess = createAction(
  '[Genres Component] Get List of Genres Success',
  props<{genres: Genres[]}>()
);

export const getGenresListFailure = createAction(
  '[Shared] Shared Shareds Failure',
  props<{ error: any }>()
);

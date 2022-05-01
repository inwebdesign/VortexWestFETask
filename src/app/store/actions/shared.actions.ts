import { createAction, props } from '@ngrx/store';
import { Genres, SubGenre, SubgenresList } from 'src/app/models/genres';

export const startLibrary = createAction(
  '[Landing Page Home Component] Start The App'
);
// handle genres list
export const getGenresRequest = createAction(
  '[Genres Component] Get List of Genres'
);
export const getGenresSuccess = createAction(
  '[Genres Component] Get List of Genres Success',
  props<{genres: Genres[]}>()
);

export const getGenresListFailure = createAction(
  '[Genres Component] Get List of Genres Failure',
  props<{ error: any }>()
);
// handle subgenres list
export const getSubgenresRequest = createAction(
  '[SubgenresWrapper Component] Get List of Subgenres',
  props<{id: number}>()
);
export const getSubgenresSuccess = createAction(
  '[SubgenresWrapper Component] Get List of Subgenres Success',
  props<{subgenres: SubGenre[]}>()
);

export const getSubGenresListFailure = createAction(
  '[SubgenresWrapper Component] Subgenres List Failure',
  props<{ error: any }>()
);

// selected Genre
export const selectedGenreId = createAction(
  '[Card Component] Selected Genre ID',
  props<{id: number}>()
)

// category (sub/genre) selected
export const categorySelection = createAction(
  '[Card Component] Selecte Category - Genre or Subgenre',
  props<{selected: boolean}>()
)

// redirect back
export const revertToPreviousPage = createAction(
  '[Various Component] Revert To Previous Page'
)

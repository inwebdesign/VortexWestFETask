import { createAction, props } from '@ngrx/store';
import { Genres, SubGenre, SubgenresIds, SubgenresList } from 'src/app/models/genres';

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
export const setSubgenresList = createAction(
  '[Cards Component] Set Subgenres',
  props<{subgenres: SubGenre}>()
)
export const getSubGenresListFailure = createAction(
  '[SubgenresWrapper Component] Subgenres List Failure',
  props<{ error: any }>()
);

// selected Genre
export const selectedGenreId = createAction(
  '[Card Component] Selected Genre ID',
  props<{id: number}>()
)
// selected Subgenre
export const selectedSubGenreId = createAction(
  '[Card Component] Selected SubGenre ID',
  props<{id: number}>()
)

// category (sub/genre) selected
export const categorySelection = createAction(
  '[Card Component] Selecte Category - Genre or Subgenre',
  props<{selected: boolean}>()
)
// handle steps of progress
export const increaseProgress = createAction(
  '[Genre/Subgenre Component] Increase Step Forward'
)
export const decreaseProgress = createAction(
  '[Genre/Subgenre Component] Decrease Step Forward'
)
export const resetProgress = createAction(
  '[Genre Component] Reset Progress Step Indicator'
)
export const proceedToFinalStep = createAction(
  '[New Subgenre Component] Proceed To Final Step After Adding New Subgenre'
)
export const finalStep = createAction(
  '[Information Component] Final Step',
  props<{finalStep: boolean}>()
)
export const genreOfBooks = createAction(
  '[Genre/Subgenre Component] Set Name',
  props<{genreName: string}>()
)
// add new subgenre
export const addNewSubgenre = createAction(
  '[Subgenre Component] Adding New Subgenre',
  props<{newSubgenre: boolean}>()
)
// add description
export const descriptionRequired = createAction(
  '[New Subgenre Component] Adding Required Description',
  props<{required: boolean}>()
)
// redirect back
export const revertToPreviousPage = createAction(
  '[Various Component] Revert To Previous Page'
)
// book is submited!!!
export const bookSubmitionSuccess = createAction(
  '[Info Component] Book Submition',
  props<{success: boolean}>()
)
export const setLastSubgenreId = createAction(
  '[Store Effects] Store Last Subgenre Id',
  props<SubgenresIds>()
)
// submit new subgenre
export const submitNewSubgenre = createAction(
  '[New Subgenre Component] Submit New Subgenre',
  props<Genres>()
)

import { createAction, props } from '@ngrx/store';

export const startLibrary = createAction(
  '[Landing Page Home Component] Start The App'
);

export const sharedSharedsSuccess = createAction(
  '[Shared] Shared Shareds Success',
  props<{ data: any }>()
);

export const sharedSharedsFailure = createAction(
  '[Shared] Shared Shareds Failure',
  props<{ error: any }>()
);

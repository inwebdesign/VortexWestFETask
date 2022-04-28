import { createAction, props } from '@ngrx/store';

export const sharedShareds = createAction(
  '[Shared] Shared Shareds'
);

export const sharedSharedsSuccess = createAction(
  '[Shared] Shared Shareds Success',
  props<{ data: any }>()
);

export const sharedSharedsFailure = createAction(
  '[Shared] Shared Shareds Failure',
  props<{ error: any }>()
);

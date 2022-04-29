import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../environments/environment';
import { appSharedReducer } from './reducers/shared.reducer';
import { APP_SELECTORS } from './selectors/shared.selectors';
import { sharedAppState } from './state';


export interface AppState {
  [APP_SELECTORS]: sharedAppState;
}

export const appReducers: ActionReducerMap<AppState> = {
  [APP_SELECTORS]: appSharedReducer
};


export const metaReducers: MetaReducer<AppState>[] = !environment.production ? [] : [];

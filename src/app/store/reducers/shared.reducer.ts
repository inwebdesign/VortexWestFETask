import { Action, createReducer, on } from '@ngrx/store';
import * as SharedActions from '../actions/shared.actions'

export const sharedFeatureKey = 'shared';

export interface State {

}

export const initialState: State = {

};

export const reducer = createReducer(
  initialState,
);

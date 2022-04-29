import { createFeatureSelector, createSelector } from '@ngrx/store';
import { sharedAppState } from '../state';
export const APP_SELECTORS = 'shared';

export const getAppState = createFeatureSelector<sharedAppState>(APP_SELECTORS)

export const getGenres = createSelector(getAppState, state => state.genres)

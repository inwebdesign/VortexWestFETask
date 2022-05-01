import { createFeatureSelector, createSelector } from '@ngrx/store';
import { sharedAppState } from '../state';
export const APP_SELECTORS = 'shared';

export const getAppState = createFeatureSelector<sharedAppState>(APP_SELECTORS)

export const getGenres = createSelector(getAppState, state => state.genres)
export const getSubGenres = createSelector(getAppState, state => state.genreSubgenres.subgenres)
export const getGenreId = createSelector(getAppState, state => state.genreId)
export const isCategorySelected = createSelector(getAppState, state => state.categorySelected)

import { createFeatureSelector, createSelector } from '@ngrx/store';
import { sharedAppState } from '../state';
export const APP_SELECTORS = 'shared';

export const getAppState = createFeatureSelector<sharedAppState>(APP_SELECTORS)

export const getGenres = createSelector(getAppState, state => state.genres)
export const getSubGenres = createSelector(getAppState, state => state.genreSubgenres.subgenres)
export const getGenreId = createSelector(getAppState, state => state.genreId)
export const getSubGenreId = createSelector(getAppState, state => state.subgenreId)
export const isCategorySelected = createSelector(getAppState, state => state.categorySelected)
export const isNewSubgenreAdded = createSelector(getAppState, state => state.addNewSubgenre)
export const getCurrentStep = createSelector(getAppState, state => state.currentStep.step)
export const isFinalStep = createSelector(getAppState, state => state.isFinalStep.finalStep)

import { createFeatureSelector, createSelector } from '@ngrx/store';
import { sharedAppState } from '../state';
export const APP_SELECTORS = 'shared';

export const getAppState = createFeatureSelector<sharedAppState>(APP_SELECTORS)

export const getGenres = createSelector(getAppState, state => state.genres)
export const getSubGenres = createSelector(getAppState, state => state.genreSubgenres.subgenres)
export const getGenreId = createSelector(getAppState, state => state.genreId)
export const getSubGenreId = createSelector(getAppState, state => state.subgenreId)
export const getLastSubgenreId = createSelector(getAppState, state => state.subgenresLastId.id)
export const isCategorySelected = createSelector(getAppState, state => state.categorySelected)
export const isNewSubgenreAdded = createSelector(getAppState, state => state.addNewSubgenre)
export const isDescriptionRequired = createSelector(getAppState, state => state.subgenreDescription.required)
export const getCurrentStep = createSelector(getAppState, state => state.currentStep.step)
export const isFinalStep = createSelector(getAppState, state => state.isFinalStep.finalStep)
export const isBookSubmited = createSelector(getAppState, state => state.bookSubmited.success)
export const payload = createSelector(getAppState, state => {
  return {
    id: state.genres.length + 1,
    name: "Genre " + (state.genres.length + 1),
    subgenres: [{
      id: state.subgenresLastId.id + 1,
      name: state.selectedSubgenre.subgenres[0].name,
      isDescriptionRequired: state.selectedSubgenre.subgenres[0].isDescriptionRequired
    }]
  }
})

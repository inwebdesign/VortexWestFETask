import { Action, createReducer, on } from '@ngrx/store';
import * as SharedActions from '../actions/shared.actions'
import { initialAppState } from '../state';

export const sharedFeatureKey = 'shared';


export const appSharedReducer = createReducer(
  initialAppState,
  on(SharedActions.getGenresSuccess, (state, {genres}) => {
    return {
      ...state,
      genres
    }
  }),
  on(SharedActions.selectedGenreId, (state, id) => {
    return {
      ...state,
      genreId: id
    }
  }),
  on(SharedActions.selectedSubGenreId, (state, id) => {
    return {
      ...state,
      subgenreId: id
    }
  }),
  on(SharedActions.categorySelection, (state, selected) => {
    return {
      ...state,
      categorySelected: selected
    }
  }),
  on(SharedActions.increaseProgress, (state) => {
    return {
      ...state,
      currentStep: {
        step: state.currentStep.step + 1
      }
    }
  }),
  on(SharedActions.decreaseProgress, (state) => {
    return {
      ...state,
      currentStep: {
        step: state.currentStep.step - 1
      }
    }
  }),
  on(SharedActions.addNewSubgenre, (state, {newSubgenre}) => {
    return {
      ...state,
      addNewSubgenre: {
        newSubgenre
      }
    }
  }),
  on(SharedActions.resetProgress, (state) => {
    return {
      ...state,
      currentStep: {
        step: 0
      }
    }
  }),
  on(SharedActions.finalStep, (state, {finalStep}) => {
    return {
      ...state,
      isFinalStep: {
        finalStep
      }
    }
  }),
  on(SharedActions.getSubgenresSuccess, (state, {subgenres}) => {
    return {
      ...state,
      genreSubgenres: {
        subgenres
      }
    }
  })
);

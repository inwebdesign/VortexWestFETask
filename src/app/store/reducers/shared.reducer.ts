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
  on(SharedActions.genreOfBooks, (state, {genreName}) => {
    return {
      ...state,
      genreName: {
        genreName
      }
    }
  }),
  on(SharedActions.setSubgenresList, (state, {subgenres}) => {
    return {
      ...state,
        selectedSubgenre: {
          subgenres: [
            {
              id: subgenres.id,
              name: subgenres.name,
              isDescriptionRequired: subgenres.isDescriptionRequired
            }
          ]
        }
    }
  }),
  on(SharedActions.setLastSubgenreId, (state, {id}) => {
    return {
      ...state,
      subgenresLastId: {
        id
      }
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
  on(SharedActions.descriptionRequired, (state, {required}) => {
    return {
      ...state,
      subgenreDescription: {
        required
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
  }),
  on(SharedActions.bookSubmitionSuccess, (state, {success}) => {
    return {
      ...state,
      bookSubmited: {
        success
      }
    }
  }),
  on(SharedActions.resetProgressStepToInitalValue, (state) => {
    return {
      ...state,
      currentStep: {
        step: 0
      }
    }
  })
);

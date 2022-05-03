import { CategorySelected, FinalStepIndicator, GenreId, Genres, StepIndicator, SubGenre, SubgenreId, SubgenresList } from "../models/genres";

export interface sharedAppState {
  genres: Genres[],
  genreId: GenreId,
  subgenreId: SubgenreId,
  categorySelected: CategorySelected,
  currentStep: StepIndicator,
  isFinalStep: FinalStepIndicator,
  genreSubgenres: SubgenresList
}

export const initialAppState: sharedAppState = {
  genres: [
    {
      id: 0,
      name: '',
      subgenres: [
        {
          id: 0,
          name: '',
          isDescriptionRequired: false
        }
      ]
    }
  ],
  genreId: {
    id: 0
  },
  subgenreId: {
    id: 0
  },
  categorySelected: {
    selected: false
  },
  currentStep: {
    step: 0
  },
  isFinalStep: {
    finalStep: false
  },
  genreSubgenres: {
    subgenres: [{
      id: 0,
      name: '',
      isDescriptionRequired: false
    }
    ]
  }
}
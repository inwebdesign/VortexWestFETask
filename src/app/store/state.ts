import { CategorySelected, Description, FinalStepIndicator, GenreId, GenreName, Genres, NewSubgenre, StepIndicator, SubGenre, SubgenreId, SubgenresIds, SubgenresList, Submit } from "../models/genres";

export interface sharedAppState {
  genres: Genres[],
  genreId: GenreId,
  subgenreId: SubgenreId,
  subgenresLastId: SubgenresIds,
  genreName: GenreName,
  categorySelected: CategorySelected,
  currentStep: StepIndicator,
  isFinalStep: FinalStepIndicator,
  genreSubgenres: SubgenresList,
  selectedSubgenre: SubgenresList,
  addNewSubgenre: NewSubgenre,
  subgenreDescription: Description,
  bookSubmited: Submit
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
  subgenresLastId: {
    id: 0
  },
  genreName: {
    genreName: '',
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
  },
  selectedSubgenre: {
    subgenres: [
      {
        id: 0,
        name: '',
        isDescriptionRequired: false
      }
    ]
  },
  addNewSubgenre: {
    newSubgenre: false
  },
  subgenreDescription: {
    required: false
  },
  bookSubmited: {
    success: false
  }
}
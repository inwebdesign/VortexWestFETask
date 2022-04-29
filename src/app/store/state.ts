import { CategorySelected, GenreId, Genres } from "../models/genres";

export interface sharedAppState {
  genres: Genres[],
  genreId: GenreId,
  categorySelected: CategorySelected
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
  categorySelected: {
    selected: false
  }
}
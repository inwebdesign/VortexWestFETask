import { Genres } from "../models/genres";

export interface sharedAppState {
  genres: Genres[]
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
  ]
}
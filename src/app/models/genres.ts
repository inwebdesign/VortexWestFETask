export interface SubGenre {
  id: number;
  name: string;
  isDescriptionRequired: boolean;
}

export interface Genres {
  id: number;
  name: string;
  subgenres: SubGenre[]
}

export interface GenreId {
  id: number;
}

export interface SubgenreId {
  id: number;
}

export interface SubgenresList {
  subgenres: SubGenre[]
}

export interface CategorySelected {
  selected: boolean;
}

export interface StepIndicator {
  step: number;
}

export interface FinalStepIndicator {
  finalStep: boolean;
}
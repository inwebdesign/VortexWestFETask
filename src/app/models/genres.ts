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

export interface GenreName {
  genreName?: string;
}

export interface SubgenresList {
  subgenres: SubGenre[]
}

export interface CategorySelected {
  selected: boolean;
}

export interface NewSubgenre {
  newSubgenre: boolean;
}

export interface Description {
  required: boolean;
}

export interface StepIndicator {
  step: number;
}

export interface FinalStepIndicator {
  finalStep: boolean;
}

export interface Submit {
  success: boolean;
}
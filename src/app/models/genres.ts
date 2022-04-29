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

export interface CategorySelected {
  selected: boolean;
}
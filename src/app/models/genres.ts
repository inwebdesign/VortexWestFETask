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
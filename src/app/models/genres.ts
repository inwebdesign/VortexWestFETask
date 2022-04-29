export interface SubGenre {
  id: number;
  name: string;
  isDescriptionRequired: string;
}

export interface Genres {
  id: number;
  title: string;
  subgenres: SubGenre[]
}
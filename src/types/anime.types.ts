export type data = {
  success: boolean;
  data: DataResponseProperty | undefined;
};

export interface DataResponseProperty {
  currentPage: number;
  hasNextPage: boolean;
  previousPage: null;
  nextPage: string;
  foundPages: number;
  media: AnimeRatingResponse[];
}

export interface AnimeRatingResponse {
  title: string;
  cover: string;
  synopsis: string;
  rating: string;
  slug: string;
  type: string;
  url: string;
}

export interface DataFiltered {
  title: string;
  cover: string;
  synopsis: string;
  rating: string;
  slug: string;
  type: string;
  url: string;
}

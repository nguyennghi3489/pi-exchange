const GiphyRating = {
  g: "Level 1",
  pg: "Level 2",
  pg13: "Level 3",
  r: "Level 4",
} as const;

export interface IGiphyResponse {
  data: IGiphy[];
  pagination: IPagination;
}

export interface IGiphy {
  id: string;
  images: IImages;
  rating: keyof typeof GiphyRating;
  slug: string;
  title: string;
  url: string;
  username: string;
}

export interface IImages {
  original: IFixedHeight;
}

export interface IFixedHeight {
  height: string;
  size: string;
  url: string;
  webp: string;
  webp_size: string;
  width: string;
}

export interface IPagination {
  count: number;
  offset: number;
  total_count: number;
}

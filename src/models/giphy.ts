const GiphyRating = {
  g: "Level 1",
  pg: "Level 2",
  pg13: "Level 3",
  r: "Level 4",
} as const;

export interface IGiphy {
  id: string;
  url: string;
  username: string;
  rating: keyof typeof GiphyRating;
  title: string;
  imageUrl: string;
}

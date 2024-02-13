import { IGiphy } from "../models/giphy";

export const item1: IGiphy = {
  id: "1",
  rating: "pg",
  title: "testing title 1",
  slug: "#test",
  url: "testing url 1",
  username: "test username 1",
  images: {
    original: {
      url: "url for test 1",
      height: "100",
      width: "100",
      size: "",
      webp: "http://giphy/test-giphy-1.webp",
      webp_size: "",
    },
  },
};

export const item2: IGiphy = {
  id: "2",
  rating: "g",
  title: "testing title 2",
  slug: "#test",
  url: "testing url 2",
  username: "test username 2",
  images: {
    original: {
      url: "url for test 2",
      height: "100",
      width: "100",
      size: "",
      webp: "http://giphy/test-giphy-2.webp",
      webp_size: "",
    },
  },
};

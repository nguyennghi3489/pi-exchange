export const BASE_GIPHY_URL = "https://api.giphy.com/v1/gifs/";
export const TRENDING_GIPHY_URL = `${BASE_GIPHY_URL}trending?api_key=${process.env.REACT_APP_GIPHY_API_KEY}`;
export const SEARCH_GIPHY_URL = `${BASE_GIPHY_URL}search?api_key=${process.env.REACT_APP_GIPHY_API_KEY}`;

import axios, { AxiosResponse } from "axios";
import { SEARCH_GIPHY_URL, TRENDING_GIPHY_URL } from "../data";
import { IGiphy } from "../models/giphy";

export const getGIFTrending = async (page: number = 0, limit: number = 25) => {
  try {
    const response: AxiosResponse = await axios.get(
      `${TRENDING_GIPHY_URL}&offset=${page * limit}&limit=${limit}`
    );
    const data: IGiphy[] = response.data;
    return data;
  } catch (error) {
    return error;
  }
};

export const searchGIF = async (
  q: string,
  page: number = 0,
  limit: number = 25
) => {
  try {
    const response: AxiosResponse = await axios.get(
      `${SEARCH_GIPHY_URL}&q=${q}&offset=${page * limit}&limit=${limit}`
    );
    const data: IGiphy[] = response.data;
    return data;
  } catch (error) {
    return error;
  }
};

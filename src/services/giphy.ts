import axios, { AxiosResponse } from "axios";
import { SEARCH_GIPHY_URL, TRENDING_GIPHY_URL } from "../data";
import { IGiphyResponse } from "../models/giphy";

export const getGIFTrending = async (
  page: number = 0,
  limit: number = 25
): Promise<IGiphyResponse> => {
  console.log("CALL API ", page);
  try {
    const response: AxiosResponse = await axios.get(
      `${TRENDING_GIPHY_URL}&offset=${page * limit}&limit=${limit}`
    );
    const data = response.data;
    return data;
  } catch (error) {
    throw error;
  }
};

export const searchGIF = async (
  q: string,
  page: number = 0,
  limit: number = 25
): Promise<IGiphyResponse> => {
  try {
    const response: AxiosResponse = await axios.get(
      `${SEARCH_GIPHY_URL}&q=${q}&offset=${page * limit}&limit=${limit}`
    );
    const data = response.data;
    return data;
  } catch (error) {
    throw error;
  }
};

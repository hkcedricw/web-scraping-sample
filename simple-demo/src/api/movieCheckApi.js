import axios from 'axios';
import { MOVIE_CHECK_API_ENDPOINT } from '../config';

const MOVIE_CHECK_API_PATH = '/moviesCheck/';

export const movieCheckApiCall = async (date='') => {
  try {
    const response = await axios.get(`${MOVIE_CHECK_API_ENDPOINT}${MOVIE_CHECK_API_PATH}${date}`);
    return response.data;
  } catch (error) {
    throw error;
  }
}
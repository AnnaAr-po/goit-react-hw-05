import axios from "axios";

const BASE_URL = "https://api.themoviedb.org/3";
const API_KEY =
  '8aba4e3419a44727b7eb66f35fce4fa2';

export const fetchTrendingMovies = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/trending/movie/day?api_key=${API_KEY}`);
    return response.data.results;
  } catch (error) {
    console.error("Помилка при отриманні трендових фільмів:", error.message);
    return [];
  }
};

export const fetchMoviesByQuery = async (query) => {
  try {
    const response = await axios.get(
      `${BASE_URL}/search/movie?query=${query}&api_key=${API_KEY}`
    );
    return response.data.results;
  } catch (error) {
    console.error("Помилка при пошуку фільмів:", error.message);
    return [];
  }
};

export const fetchMovieDetails = async (id) => {
  try {
    const response = await axios.get(`${BASE_URL}/movie/${id}?api_key=${API_KEY}`);
    return response.data;
  } catch (error) {
    console.error("Помилка при отриманні деталей фільму:", error.message);
    return null;
  }
};

export const fetchMovieCast = async (id) => {
  try {
    const response = await axios.get(`${BASE_URL}/movie/${id}/credits?api_key=${API_KEY}`);
    return response.data.cast;
  } catch (error) {
    console.error("Помилка при отриманні акторського складу:", error.message);
    return [];
  }
};

export const fetchMovieReviews = async (id) => {
  try {
    const response = await axios.get(`${BASE_URL}/movie/${id}/reviews?api_key=${API_KEY}`);
    return response.data.results;
  } catch (error) {
    console.error("Помилка при отриманні відгуків на фільм:", error.message);
    
return [];
  }
};
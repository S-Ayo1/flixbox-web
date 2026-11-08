const API_KEY = import.meta.env.VITE_TMDB_KEY;
const BASE_URL = "https://api.themoviedb.org/3";

export const IMAGE_URL = "https://image.tmdb.org/t/p/w500";
export const BACKDROP_URL = "https://image.tmdb.org/t/p/original";

async function fetchFromTMDB(path) {
  const res = await fetch(`${BASE_URL}${path}?api_key=${API_KEY}`);
  if (!res.ok) throw new Error("Failed to fetch movies");
  const data = await res.json();
  return data.results;
}

export const getTrending = () => fetchFromTMDB("/trending/movie/week");
export const getTopRated = () => fetchFromTMDB("/movie/top_rated");
export const getUpcoming = () => fetchFromTMDB("/movie/upcoming");
const API_URL = "https://api.themoviedb.org/3";
const API_KEY = "b1d2c9a09e45a52636989d87d7340e70";

// selected by type
// const TOP_RATED = '/movie/top_rated'
// const POPULAR = '/movie/popular'
// const NOW_PLAYING = '/movie/now_playing'


const NOW_PLAYING = `${API_URL}/movie/now_playing?api_key=${API_KEY}`
const POPULAR = `${API_URL}/movie/popular?api_key=${API_KEY}`
const TOP_RATED = `${API_URL}/movie/top_rated?api_key=${API_KEY}`
const UPCOMING = `${API_URL}/movie/upcoming?api_key=${API_KEY}`
const MOVIE_DETAILS = `${API_URL}/movie/upcoming?api_key=${API_KEY}`



export { API_KEY, API_URL, TOP_RATED, NOW_PLAYING, POPULAR, UPCOMING}
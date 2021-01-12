import {combineReducers} from "redux";
import fetchMoviesReducer from './movies/movies.reducer'
import fetchMovieDetailsReducer from './movie-details/movie-details.reducer'
import fetchCastsReducer from './casts/casts.reducer'

const rootReducer = combineReducers({
  movies: fetchMoviesReducer,
  movieDetails: fetchMovieDetailsReducer,
  casts: fetchCastsReducer
});

export default rootReducer;

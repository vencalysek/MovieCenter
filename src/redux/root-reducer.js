import {combineReducers} from "redux";
import fetchMoviesReducer from './movies/movies.reducer'
import fetchMovieDetailsReducer from './movie-details/movie-details.reducer'
import fetchCastsReducer from './casts/casts.reducer'
import userReducer from './user/user.reducer'

const rootReducer = combineReducers({
  movies: fetchMoviesReducer,
  movieDetails: fetchMovieDetailsReducer,
  casts: fetchCastsReducer,
  user: userReducer
});

export default rootReducer;

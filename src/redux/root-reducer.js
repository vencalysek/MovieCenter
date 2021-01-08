import {combineReducers} from "redux";
import fetchMoviesReducer from './movies/movies.reducer'

const rootReducer = combineReducers({
  movies: fetchMoviesReducer
});

export default rootReducer;

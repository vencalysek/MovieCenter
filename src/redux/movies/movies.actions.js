import {MoviesActionTypes} from "./movies.types";
import axios from "axios";

const fetchMoviesRequest = () => {
  return {
    type: MoviesActionTypes.FETCH_MOVIES_REQUEST,
  };
};

const fetchMoviesSuccess = movies => {
  return {
    type: MoviesActionTypes.FETCH_MOVIES_SUCCES,
    payload: movies,
  };
};

const fetchMoviesFailure = error => {
  return {
    type: MoviesActionTypes.FETCH_MOVIES_FAILURE,
    payload: error,
  };
};

export const fetchMovies = url => {
  return dispatch => {
    //? 1 fetch movies request
    dispatch(fetchMoviesRequest);

    //? 2 call to API
    axios
      .get(url)
      .then(response => {
        // const movies = response.movies.results.slice(0, 20);
        const movies = response.data.results.slice(0, 20);
        dispatch(fetchMoviesSuccess(movies));
      })

      //? 3 failure
      .catch(err => {
        const errorMessage = err.message;
        dispatch(fetchMoviesFailure(errorMessage));
      });
  };
};

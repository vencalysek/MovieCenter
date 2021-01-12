import {MovieDetailsActionTypes} from "./movie-details.types";
import axios from "axios";

const fetchMovieDetailsRequest = () => {
  return {
    type: MovieDetailsActionTypes.FETCH_MOVIE_DETAILS_REQUEST,
  };
};

const fetchMovieDetailsSuccess = movies => {
  return {
    type: MovieDetailsActionTypes.FETCH_MOVIE_DETAILS_SUCCES,
    payload: movies,
  };
};

const fetchMovieDetailsFailure = error => {
  return {
    type: MovieDetailsActionTypes.FETCH_MOVIE_DETAILS_FAILURE,
    payload: error,
  };
};

export const fetchMovieDetails = url => {
  return dispatch => {
    //? 1 fetch movies request
    dispatch(fetchMovieDetailsRequest);

    //? 2 call to API
    axios
      .get(url)
      .then(response => {
        // const movies = response.movies.results.slice(0, 20);
        const movieDetails = response.data;
        dispatch(fetchMovieDetailsSuccess(movieDetails));
      })

      //? 3 failure
      .catch(err => {
        const errorMessage = err.message;
        dispatch(fetchMovieDetailsFailure(errorMessage));
      });
  };
};

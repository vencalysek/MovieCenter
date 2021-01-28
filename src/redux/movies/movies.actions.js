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

const fetchMoreMoviesSuccess = movies => {
  return {
    type: MoviesActionTypes.FETCH_MORE_MOVIES_SUCCES,
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
        const movies = response.data.results;
        console.log(response)
        dispatch(fetchMoviesSuccess(movies));
      })

      //? 3 failure
      .catch(err => {
        const errorMessage = err.message;
        dispatch(fetchMoviesFailure(errorMessage));
      });
  };
};

export const fetchMoreMovies = (url, pageNum) => {
  return dispatch => {
    //? 1 fetch movies request
    dispatch(fetchMoviesRequest);

    //? 2 call to API
    axios
      .get(`${url}&page=${pageNum}`)
      .then(response => {
        const movies = response.data.results;
        console.log(response)
        dispatch(fetchMoreMoviesSuccess(movies));
      })

      //? 3 failure
      .catch(err => {
        const errorMessage = err.message;
        dispatch(fetchMoviesFailure(errorMessage));
      });
  };
};

import {CastsActionTypes} from "./casts.types";
import axios from "axios";

const fetchCastsRequest = () => {
  return {
    type: CastsActionTypes.FETCH_CASTS_REQUEST,
  };
};

const fetchCastsSuccess = movies => {
  return {
    type: CastsActionTypes.FETCH_CASTS_SUCCES,
    payload: movies,
  };
};

const fetchCastsFailure = error => {
  return {
    type: CastsActionTypes.FETCH_CASTS_FAILURE,
    payload: error,
  };
};

export const fetchCasts = url => {
  return dispatch => {
    //? 1 fetch movies request
    dispatch(fetchCastsRequest);

    //? 2 call to API
    axios
      .get(url)
      .then(response => {
        const casts = response.data.cast.slice(0, 20);
        dispatch(fetchCastsSuccess(casts));
      })

      //? 3 failure
      .catch(err => {
        const errorMessage = err.message;
        dispatch(fetchCastsFailure(errorMessage));
      });
  };
};

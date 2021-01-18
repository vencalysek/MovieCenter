import {CommentsActionTypes} from "./comments.types";
import axios from "axios";

const fetchCommentsRequest = () => {
  return {
    type: CommentsActionTypes.FETCH_COMMENTS_REQUEST,
  };
};

const fetchCommentsSuccess = movies => {
  return {
    type: CommentsActionTypes.FETCH_COMMENTS_SUCCES,
    payload: movies,
  };
};

const fetchCommentsFailure = error => {
  return {
    type: CommentsActionTypes.FETCH_COMMENTS_FAILURE,
    payload: error,
  };
};

export const fetchComments = url => {
  return dispatch => {
    //? 1 fetch movies request
    dispatch(fetchCommentsRequest);

    //? 2 call to API
    axios
      .get(url)
      .then(response => {
        const casts = response.data.cast.slice(0, 20);
        dispatch(fetchCommentsSuccess(casts));
      })

      //? 3 failure
      .catch(err => {
        const errorMessage = err.message;
        dispatch(fetchCommentsFailure(errorMessage));
      });
  };
};

import {MovieDetailsActionTypes} from './movie-details.types'

const initState = {
  loading: false,
  movieDetails: [],
  error: ''
}

const fetchMovieDetailsReducer = (state = initState, action) => {
  switch (action.type) {
    case MovieDetailsActionTypes.FETCH_MOVIE_DETAILS_REQUEST:
      return {
        ...state,
        loading: true
      }
      case MovieDetailsActionTypes.FETCH_MOVIE_DETAILS_SUCCES:
        return {
          ...state,
          loading: false,
          movieDetails: action.payload,
          error: ''
        }
      case MovieDetailsActionTypes.FETCH_MOVIE_DETAILS_FAILURE:
        return {
          ...state,
          loading: false,
          error: action.payload
        }

    default:
      return state
  }
}

export default fetchMovieDetailsReducer
import {MoviesActionTypes} from './movies.types'

const initState = {
  loading: false,
  movies: [],
  error: '',
}

const fetchMoviesReducer = (state = initState, action) => {
  switch (action.type) {
    case MoviesActionTypes.FETCH_MOVIES_REQUEST:
      return {
        ...state,
        loading: true
      }
      case MoviesActionTypes.FETCH_MOVIES_SUCCES:
        return {
          ...state,
          loading: false,
          movies: [...action.payload],
          error: ''
        }
      case MoviesActionTypes.FETCH_MORE_MOVIES_SUCCES:
        return {
          ...state,
          loading: false,
          movies: [...state.movies, ...action.payload],
          error: ''
        }
      case MoviesActionTypes.FETCH_MOVIES_FAILURE:
        return {
          ...state,
          loading: false,
          error: action.payload
        }

    default:
      return state
  }
}

export default fetchMoviesReducer
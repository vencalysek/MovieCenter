import {CastsActionTypes} from './casts.types'

const initState = {
  loadingCasts: false,
  casts: [],
  errorCasts: ''
}

const fetchCastsReducer = (state = initState, action) => {
  switch (action.type) {
    case CastsActionTypes.FETCH_CASTS_REQUEST:
      return {
        ...state,
        loadingCasts: true
      }
      case CastsActionTypes.FETCH_CASTS_SUCCES:
        return {
          ...state,
          loadingCasts: false,
          casts: action.payload,
          errorCasts: ''
        }
      case CastsActionTypes.FETCH_CASTS_FAILURE:
        return {
          ...state,
          loadingCasts: false,
          errorCasts: action.payload
        }

    default:
      return state
  }
}

export default fetchCastsReducer
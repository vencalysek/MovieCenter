import {CommentsActionTypes} from './comments.types'

const initState = {
  loadingComments: false,
  comments: [],
  errorComments: ''
}

const fetchCommentsReducer = (state = initState, action) => {
  switch (action.type) {
    case CommentsActionTypes.FETCH_COMMENTS_REQUEST:
      return {
        ...state,
        loadingComments: true
      }
      case CommentsActionTypes.FETCH_COMMENTS_SUCCES:
        return {
          ...state,
          loadingComments: false,
          comments: action.payload,
          errorComments: ''
        }
      case CommentsActionTypes.FETCH_COMMENTS_FAILURE:
        return {
          ...state,
          loadingComments: false,
          errorComments: action.payload
        }

    default:
      return state
  }
}

export default fetchCommentsReducer
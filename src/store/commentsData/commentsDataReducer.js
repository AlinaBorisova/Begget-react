import {
  COMMENTS_REQUEST,
  COMMENTS_REQUEST_SUCCESS,
  COMMENTS_REQUEST_ERROR,
  COMMENTS_UPDATE,
} from './commentsDataAction';


const initialState = {
  comment: 'Hello, Redux',
  post: {},
  comments: [],
  status: '',
  error: '',
};

export const commentsDataReducer = (state = initialState, action) => {
  switch (action.type) {
    case COMMENTS_REQUEST:
      return {
        ...state,
        status: 'loading',
      };
    case COMMENTS_REQUEST_SUCCESS:
      return {
        ...state,
        post: action.post,
        comments: action.comments,
        status: 'loaded',
        error: '',
      };
    case COMMENTS_UPDATE:
      return {
        ...state,
        comment: action.comment,
      };
    case COMMENTS_REQUEST_ERROR:
      return {
        ...state,
        status: 'error',
        error: action.error,
      };

    default:
      return state;
  }
};

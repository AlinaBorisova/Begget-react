import {
  POST_REQUEST,
  POST_REQUEST_ERROR,
  POST_REQUEST_SUCCESS
} from './postDataAction';

const initialState = {
  loading: false,
  posts: [],
  error: '',
};

export const postDataReducer = (state = initialState, action) => {
  switch (action.type) {
    case POST_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case POST_REQUEST_SUCCESS:
      return {
        ...state,
        loading: false,
        posts: action.posts,
        error: '',
      };
    case POST_REQUEST_ERROR:
      return {
        ...state,
        loading: false,
        error: action.error,
      };

    default:
      return state;
  }
};

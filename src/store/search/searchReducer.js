import {
  SEARCH_REQUEST,
  SEARCH_REQUEST_SUCCESS,
  SEARCH_REQUEST_ERROR
} from './searchAction';

const initialState = {
  posts: [],
  error: '',
  after: '',
  isLast: false,
  page: '',
  status: '',
  loading: false,
};

export const searchReducer = (state = initialState, action) => {
  switch (action.type) {
    case SEARCH_REQUEST:
      return {
        ...state,
        loading: true,
        error: '',
        status: 'loading',
      };
    case SEARCH_REQUEST_SUCCESS:
      return {
        ...state,
        posts: action.posts,
        after: action.after,
        loading: false,
        error: '',
        status: 'loaded',
        // isLast = !action.after;
      };
    case SEARCH_REQUEST_ERROR:
      return {
        ...state,
        loading: false,
        error: action.error,
        status: 'error',
      };

    default:
      return state;
  }
};

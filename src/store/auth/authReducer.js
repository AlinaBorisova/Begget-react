import {
  AUTH_LOGOUT,
  AUTH_REQUEST,
  AUTH_REQUEST_ERROR,
  AUTH_REQUEST_SUCCESS} from './authAction';

const initialState = {
  loading: false,
  data: {},
  error: '',
};

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case AUTH_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case AUTH_REQUEST_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.data,
        error: '',
      };
    case AUTH_REQUEST_ERROR:
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    case AUTH_LOGOUT:
      return {
        ...state,
        data: {},
      };

    default:
      return state;
  }
};

import {
  AUTH_LOGOUT,
  AUTH_REQUEST,
  AUTH_REQUEST_ERROR,
  AUTH_REQUEST_SUCCESS} from './authAction';

const initialState = {
  loading: false,
  data: {},
  error: '',
  status: '',
};

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case AUTH_REQUEST:
      return {
        ...state,
        loading: true,
        error: '',
      };
    case AUTH_REQUEST_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.data,
        error: '',
        status: 'loaded',
      };
    case AUTH_REQUEST_ERROR:
      return {
        ...state,
        loading: false,
        error: action.error,
        status: 'error',
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

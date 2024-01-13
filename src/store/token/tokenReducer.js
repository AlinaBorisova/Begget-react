import {UPDATE_TOKEN, DELETE_TOKEN} from './tokenAction';

const initialState = {
  token: '',
};

export const tokenReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_TOKEN:
      return {
        ...state,
        token: action.token,
      };

    case DELETE_TOKEN:
      return {
        ...state,
        token: '',
      };

    default:
      return state;
  }
};

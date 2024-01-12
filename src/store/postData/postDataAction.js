import axios from 'axios';
import {URL_API} from '../../api/const';

export const POST_REQUEST = 'POST_REQUEST';
export const POST_REQUEST_SUCCESS = 'POST_REQUEST_SUCCESS';
export const POST_REQUEST_ERROR = 'POST_REQUEST_ERROR';

export const postDataRequest = () => ({
  type: POST_REQUEST,
  error: '',
});

export const postDataRequestSuccess = (data) => ({
  type: POST_REQUEST_SUCCESS,
  posts: data.children,
});

export const postDataRequestError = (error) => ({
  type: POST_REQUEST_ERROR,
  error,
});


export const postDataRequestAsync = () => (dispatch, getState) => {
  const token = getState().tokenReducer.token;
  if (!token) return;
  dispatch(postDataRequest());

  axios(`${URL_API}/best`, {
    headers: {
      // 'Content-Type': 'application/json',
      'Authorization': `bearer ${token}`,
    },
  })
    .then(({data}) => {
      dispatch(postDataRequestSuccess(data.data));
    })
    .catch(error => dispatch(postDataRequestError(error.toString())));
};

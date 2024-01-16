import axios from 'axios';
import {URL_API} from '../../api/const';

export const POST_REQUEST = 'POST_REQUEST';
export const POST_REQUEST_SUCCESS = 'POST_REQUEST_SUCCESS';
export const POST_REQUEST_SUCCESS_AFTER = 'POST_REQUEST_SUCCESS_AFTER';
export const POST_REQUEST_ERROR = 'POST_REQUEST_ERROR';
export const CHANGE_PAGE = 'CHANGE_PAGE';

export const postDataRequest = () => ({
  type: POST_REQUEST,
  error: '',
});

export const postDataRequestSuccess = (data) => ({
  type: POST_REQUEST_SUCCESS,
  posts: data.children,
  after: data.after,
});

export const postDataRequestSuccessAfter = (data) => ({
  type: POST_REQUEST_SUCCESS_AFTER,
  posts: data.children,
  after: data.after,
});

export const postDataRequestError = (error) => ({
  type: POST_REQUEST_ERROR,
  error,
});

export const changePage = page => ({
  type: CHANGE_PAGE,
  page,
});


export const postDataRequestAsync = (newPage) => (dispatch, getState) => {
  let page = getState().postDataReducer.page;
  if (newPage) {
    page = newPage;
    dispatch(changePage(page));
  }

  const token = getState().tokenReducer.token;
  const after = getState().postDataReducer.after;
  const loading = getState().postDataReducer.loading;
  const isLast = getState().postDataReducer.isLast;

  if (!token || loading || isLast) return;
  dispatch(postDataRequest());

  axios(`${URL_API}/${page}?limit=10&${after ? `after=${after}` : ''}`, {
    headers: {
      'Authorization': `bearer ${token}`,
    },
  })
    .then(({data}) => {
      if (after) {
        dispatch(postDataRequestSuccessAfter(data.data));
      } else {
        dispatch(postDataRequestSuccess(data.data));
      }
    })
    .catch(error => dispatch(postDataRequestError(error.toString())));
};

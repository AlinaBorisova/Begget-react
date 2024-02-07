
// Файл не используется. Был дляRedux Tollkit
import axios from 'axios';
import {URL_API} from '../../api/const';
import {createAsyncThunk} from '@reduxjs/toolkit';

export const POST_REQUEST = 'POST_REQUEST';
export const POST_REQUEST_SUCCESS = 'POST_REQUEST_SUCCESS';
export const POST_REQUEST_ERROR = 'POST_REQUEST_ERROR';

export const postDataRequest = (post) => ({
  type: POST_REQUEST,
  post,
});

export const postDataRequestSuccess = ({children, after}) => ({
  type: POST_REQUEST_SUCCESS,
  post: children,
  after,
});

export const postDataRequestError = (error) => ({
  type: POST_REQUEST_ERROR,
  error,
});

export const postDataRequestAsync = createAsyncThunk(
  'postData/fetch',
  (newPage, {getState}) => {
    let page = getState().postDataReducer.page;
    if (newPage) {
      page = newPage;
    }

    const token = getState().tokenReducer.token;
    const after = getState().postDataReducer.after;
    const isLast = getState().postDataReducer.isLast;

    if (!token || isLast) return;

    return axios(
      `${URL_API}/${page}?limit=10&${after ? `after=${after}` : ''}`, {
        headers: {
          Authorization: `bearer ${token}`,
        },
      })
      .then(({data}) => data.data)
      .catch((error) => (error.toString()));
  });

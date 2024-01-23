import axios from 'axios';
import {URL_API} from '../../api/const';
import {createAsyncThunk} from '@reduxjs/toolkit';

export const postDataRequestAsync = createAsyncThunk(
  'postData/fetch',
  (newPage, thunkArg) => {
    let page = thunkArg.getState().postDataReducer.page;
    if (newPage) {
      page = newPage;
    }

    const token = thunkArg.getState().tokenReducer.token;
    const after = thunkArg.getState().postDataReducer.after;
    const isLast = thunkArg.getState().postDataReducer.isLast;

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

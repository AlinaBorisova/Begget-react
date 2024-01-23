import axios from 'axios';
import {URL_API} from '../../api/const';
import {createAsyncThunk} from '@reduxjs/toolkit';

export const commentsRequestAsync = createAsyncThunk(
  'comments/fetch',
  (id, {getState}) => {
    const token = getState().tokenReducer.token;
    if (!token) return;

    if (!id) {
      console.log('нет id');
      return;
    }

    return axios(`${URL_API}/comments/${id}`, {
      headers: {
        Authorization: `bearer ${token}`,
      },
    })
      .then(
        ({
          data: [
            {
              data: {
                children: [{data: post}],
              }
            },
            {
              data: {children}
            }
          ]
        }
            // .then((
            //     {
            //       data:
            //               [
            //                 {
            //                   data:
            //                           {
            //                             children: [
            //                               {
            //                                 data: post
            //                               }
            //                             ]
            //                           }
            //                 }, {
            //                   data: {children}
            //                 }
            //               ]
            //     }
        ) => {
          const comments = children.map(item => item.data);
          return {post, comments};
        },
      )
      .catch((error) => ({error: error.toString()}));
  },
);

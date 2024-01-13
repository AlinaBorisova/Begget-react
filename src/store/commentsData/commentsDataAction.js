import axios from 'axios';
import {URL_API} from '../../api/const';

export const COMMENTS_REQUEST = 'COMMENTS_REQUEST';
export const COMMENTS_REQUEST_SUCCESS = 'COMMENTS_REQUEST_SUCCESS';
export const COMMENTS_REQUEST_ERROR = 'COMMENTS_REQUEST_ERROR';
export const COMMENTS_UPDATE = 'COMMENTS_UPDATE';

export const updateComment = comment => ({
  type: COMMENTS_UPDATE,
  comment,
});

export const commentsDataRequest = () => ({
  type: COMMENTS_REQUEST,
  error: '',
});

export const commentsDataRequestSuccess = (data) => ({
  type: COMMENTS_REQUEST_SUCCESS,
  status: 'loaded',
  post: data.post,
  comments: data.comments,
});

export const commentsDataRequestError = (error) => ({
  type: COMMENTS_REQUEST_ERROR,
  status: 'error',
  error,
});


export const commentsDataRequestAsync = (id) => (dispatch, getState) => {
  const token = getState().tokenReducer.token;
  if (!token) return;
  dispatch(commentsDataRequest());

  if (!id) {
    console.log('нет id');
    return;
  }

  axios(`${URL_API}/comments/${id}`, {
    headers: {
      Authorization: `bearer ${token}`,
    },
  })
    .then((
        {
          data:
              [
                {
                  data:
                      {
                        children: [
                          {
                            data: post
                          }
                        ]
                      }
                },
                {
                  data: {children}
                }
              ]
        }
    ) => {
      const comments = children.map(item => item.data);
      dispatch(commentsDataRequestSuccess({post, comments}));
    },
    )
    .catch((error) => {
      dispatch(commentsDataRequestError(error.toString()));
    });
};

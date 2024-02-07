import {takeLatest, put, select} from 'redux-saga/effects';
import {URL_API} from '../../api/const';
import {
  commentsSlice,
  commentsRequestError,
  commentsRequestSuccess
} from './commentsSlice';
import axios from 'axios';

function* fetchComments(action) {
  const id = action.payload;
  const token = yield select(state => state.tokenReducer.token);
  if (!token || !id) return;

  try {
    const request = yield axios(`${URL_API}/comments/${id}`, {
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
        }) => {
          const comments = children.map(item => item.data);
          return {post, comments};
        },
      );

    yield put(commentsRequestSuccess(request));
  } catch (error) {
    yield put(commentsRequestError(error));
  }
}

export function* watchComments() {
  yield takeLatest(commentsSlice.actions.commentsRequest.type, fetchComments);
}

import {takeLatest, put, select, call} from 'redux-saga/effects';
import {URL_API} from '../../api/const';
import {
  postDataRequestSuccess,
  postDataRequestError,
  postDataSlice
} from './postDataSlice';
import axios from 'axios';

function* fetchPostData(action) {
  let page = yield select(state => state.postDataReducer.page);

  if (action.payload) {
    page = action.payload;
  }

  const token = yield select(state => state.tokenReducer.token);
  const after = yield select(state => state.postDataReducer.after);
  const isLast = yield select(state => state.postDataReducer.isLast);

  if (!token || isLast || page === 'search') return;

  try {
    const request = yield call(axios,
      `${URL_API}/${page}?limit=10&${after ? `after=${after}` : ''}`, {
        headers: {
          Authorization: `bearer ${token}`,
        },
      });

    yield put(postDataRequestSuccess(request.data.data));
  } catch (error) {
    yield put(postDataRequestError(error));
  }
}

export function* watchPostData() {
  yield takeLatest(postDataSlice.actions.postDataRequest.type, fetchPostData);
}

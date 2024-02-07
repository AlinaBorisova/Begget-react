import {takeLatest, put, select, call, apply} from 'redux-saga/effects';
import {URL_API} from '../../api/const';
import {
  postDataSlice,
  searchRequestError,
  searchRequestSuccess
} from '../postData/postDataSlice';

function* fetchSearch(action) {
  const token = yield select(state => state.tokenReducer.token);
  const after = yield select(state => state.postDataReducer.afterSearch);
  const isLast = yield select(state => state.postDataReducer.isLast);

  if (!token || isLast) return;

  try {
    const request = yield call(
      fetch,
      // eslint-disable-next-line max-len
      `${URL_API}/search?q=${action.payload}&limit=10&${after ? `after=${after}` : ''}`, {
        headers: {
          Authorization: `bearer ${token}`,
        },
      });

    const response = yield apply(request, request.json);
    yield put(searchRequestSuccess(response.data));
  } catch (error) {
    yield put(searchRequestError(error));
  }
}

export function* watchSearch() {
  yield takeLatest(postDataSlice.actions.searchRequest.type, fetchSearch);
}

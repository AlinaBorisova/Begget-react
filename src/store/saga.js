import {watchSearch} from './search/searchSaga';
import {watchPostData} from './postData/postDataSaga';
import {all} from 'redux-saga/effects';
import {watchComments} from './commentsData/commentsDataSaga';

export default function* rootSaga() {
  yield all([watchPostData(), watchSearch(), watchComments()]);
}

import {tokenReducer} from './token/tokenReducer';
import {tokenMiddleware} from './token/tokenAction';
import {authReducer} from './auth/authReducer';
import postDataReducer from './postData/postDataSlice';
import commentsReducer from './commentsData/commentsSlice';
import {commentReducer} from './comment/commentReducer';
// import {searchReducer} from './search/searchReducer';
// import searchReducer from './search/searchSlice';
import {configureStore} from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './saga';

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: {
    tokenReducer,
    commentReducer,
    authReducer,
    postDataReducer,
    commentsReducer,
    // searchReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(tokenMiddleware, sagaMiddleware),
});

sagaMiddleware.run(rootSaga);
export default store;

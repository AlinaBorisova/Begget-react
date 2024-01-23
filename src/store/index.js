import {tokenReducer} from './token/tokenReducer';
import {tokenMiddleware} from './token/tokenAction';
import {authReducer} from './auth/authReducer';
import postDataReducer from './postData/postDataSlice';
import commentsReducer from './commentsData/commentsSlice';
import {commentReducer} from './comment/commentReducer';
import {configureStore} from '@reduxjs/toolkit';

const store = configureStore({
  reducer: {
    tokenReducer,
    commentReducer,
    authReducer,
    postDataReducer,
    commentsReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(tokenMiddleware),
});
export default store;

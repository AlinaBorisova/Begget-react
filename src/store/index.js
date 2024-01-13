import {combineReducers, createStore, applyMiddleware} from 'redux';
import {composeWithDevTools} from '@redux-devtools/extension';
import {tokenReducer} from './token/tokenReducer';
import {tokenMiddleware} from './token/tokenAction';
import {authReducer} from './auth/authReducer';
import {postDataReducer} from './postData/postDataReducer';
import {commentsDataReducer} from './commentsData/commentsDataReducer';
import {thunk} from 'redux-thunk';

const rootReducer = combineReducers({
  tokenReducer,
  authReducer,
  postDataReducer,
  commentsDataReducer,
});

export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(tokenMiddleware, thunk)),
);

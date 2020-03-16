import { combineReducers } from 'redux';
import errorReducer from './errorReducer';
import authReducer from './authReducer';
import usersReducer from './usersReducer';

export default combineReducers({
  error: errorReducer,
  auth: authReducer,
  user : usersReducer,
});
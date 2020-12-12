import {combineReducers} from 'redux';
import authReducer from './authReducer';

const roorReducer = combineReducers({
  auth: authReducer,
});

export default roorReducer;

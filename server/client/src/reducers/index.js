//  node modules
import { combineReducers } from 'redux';

//  local modules
import authReducer         from './authReducer';

export default combineReducers({
    auth: authReducer
});
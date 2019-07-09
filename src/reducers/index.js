import { combineReducers } from 'redux';
import UserDetailsReducer from './users/UserDetailsReducer';
import AuthReducer from './auth/authReducer';

export default combineReducers({
    users: UserDetailsReducer,
    auth: AuthReducer
});
import { combineReducers } from 'redux';
import currentUser from './current_user';
import signUp from './sign_up';
import logIn from './log_in';

export default combineReducers({
  signUp,
  logIn,
  currentUser
});

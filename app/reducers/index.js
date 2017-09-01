import { combineReducers } from 'redux';
import currentUser from './current_user';
import signUp from './sign_up';
import logIn from './log_in';
import addExtraInfo from './add_extra_info';

export default combineReducers({
  signUp,
  logIn,
  currentUser,
  addExtraInfo
});

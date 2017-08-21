import { combineReducers } from 'redux';
import currentUser from './current_user';
import signUp from './sign_up';

export default combineReducers({
  signUp,
  currentUser
});

import { combineReducers } from 'redux';
import signUp from './sign_up';
import signIn from './sign_in';
import currentUser from './current_user';
import addExtraInfo from './add_extra_info';
import categories from './categories';

export default combineReducers({
  signUp,
  signIn,
  currentUser,
  addExtraInfo,
  categories
});

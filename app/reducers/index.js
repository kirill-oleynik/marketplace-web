import { combineReducers } from 'redux';

import cookie from './cookie';
import signUp from './sign_up';
import signIn from './sign_in';
import currentUser from './current_user';
import addExtraInfo from './add_extra_info';
import categories from './categories';
import profile from './profile';
import application from './application';
import applications from './applications';

export default combineReducers({
  cookie,
  signUp,
  signIn,
  currentUser,
  addExtraInfo,
  categories,
  profile,
  application,
  applications
});

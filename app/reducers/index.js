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
import favorites from './favorites';
import submitApplication from './submit_application';
import resetPassword from './reset_password';
import search from './search';

export default combineReducers({
  cookie,
  signUp,
  signIn,
  currentUser,
  addExtraInfo,
  categories,
  profile,
  application,
  applications,
  favorites,
  submitApplication,
  resetPassword,
  search
});

import { combineReducers } from 'redux';

// domains
import { reducer as user } from '../domains/user';

// generic
import modals from './modals';
import nav from './routing'

export default combineReducers({
  user,

  modals,
  nav,
});

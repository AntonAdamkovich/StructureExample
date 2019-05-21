import { createSelector } from 'reselect';
import get from 'lodash/get';

import { UserState } from './types';

export const user = (state: UserState) => get(state, 'user', {});
export const accessToken = createSelector(
  user,
  userState => get(userState, 'accessToken', null),
);

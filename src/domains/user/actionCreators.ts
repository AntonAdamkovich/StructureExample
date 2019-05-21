import { createAction } from 'typesafe-actions';

import { ActionTypes } from './actionTypes';

export const fetchUserData = createAction(ActionTypes.FETCH_USER_DATA);

import { createAction } from 'typesafe-actions';

import { ActionTypes } from './actionTypes';

export const fetchUserData = createAction(ActionTypes.FETCH_USER_DATA);
export const logOut = createAction(ActionTypes.LOG_OUT_REQUEST);

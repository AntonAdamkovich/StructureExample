import { createAction } from 'typesafe-actions';
import { ActionTypes } from '../../actionTypes/screens/secondExample';

export const logOut = createAction(ActionTypes.LOG_OUT);

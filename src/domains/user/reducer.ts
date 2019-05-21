import { ActionType } from 'typesafe-actions';

import { ActionTypes } from './actionTypes';
import * as ActionCreators from './actionCreators';

export interface State {
  accessToken: string | null,
}

const initialState: State = {
  accessToken: null,
};

export type Action = ActionType<typeof ActionCreators>;

export default function(state = initialState, action: Action) {
  switch (action.type) {
    case ActionTypes.FETCH_USER_DATA:
      return state;
    default:
      return state;
  }
}

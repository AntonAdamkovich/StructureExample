import { ActionTypes } from '../actionTypes/modals';

const initialState = [];

export default function (state = initialState, action) {
  switch (action.type) {
    case ActionTypes.OPEN_MODAL: {
      return [
        action.payload,
        ...state,
      ]
    }

    case ActionTypes.CLOSE_MODAL: {
      state.shift();
      return [...state];
    }

    default: {
      return state;
    }
  }
}

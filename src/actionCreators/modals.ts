import { createAction, action } from 'typesafe-actions';

import { ActionTypes } from '../actionTypes/modals';
import { BASE } from '../constants/modalTypes';

export const openModal = createAction(ActionTypes.OPEN_MODAL);
export const closeModal = createAction(ActionTypes.CLOSE_MODAL);

export const openBaseModal = () => action(ActionTypes.OPEN_MODAL, { type: BASE });

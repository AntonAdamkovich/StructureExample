import get from 'lodash/get';

export const routing = state => get(state, 'nav');


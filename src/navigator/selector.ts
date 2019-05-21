import { createStructuredSelector } from 'reselect';

import { routing } from '../selectors/routing';

export default createStructuredSelector({
  state: routing,
})

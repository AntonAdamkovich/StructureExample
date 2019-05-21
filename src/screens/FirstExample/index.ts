import { connect } from 'react-redux';

import FirstExample from './FirstExample';

import { navigateToSecondExample } from '../../actionCreators/routing';

const mapDispatchToProps = {
  navigateToSecondExample,
};

export default connect(null, mapDispatchToProps)(FirstExample);

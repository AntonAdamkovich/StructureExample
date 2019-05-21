import { connect } from 'react-redux';

import SecondExample from './SecondExample';

import { removeItemById } from '../../actionCreators/screens/secondExample';

const mapDispatchToProps = {
  removeItemById,
};

export default connect(null, mapDispatchToProps)(SecondExample);

import { connect } from 'react-redux';

import SecondExample from './SecondExample';

import { logOut } from '../../actionCreators/screens/secondExample';

const mapDispatchToProps = {
  logOut,
};

export default connect(null, mapDispatchToProps)(SecondExample);

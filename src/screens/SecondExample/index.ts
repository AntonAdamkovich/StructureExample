import { connect } from 'react-redux';

import SecondExample from './SecondExample';

import { openBaseModal } from '../../actionCreators/modals';

const mapDispatchToProps = {
  openBaseModal,
};

export default connect(null, mapDispatchToProps)(SecondExample);

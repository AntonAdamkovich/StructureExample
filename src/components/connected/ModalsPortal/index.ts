import { connect } from 'react-redux';

// actions creators
import {
  closeModal,
} from '../../../actionCreators/modals';

import ModalsPortal from './ModalsPortal';
import mapStateToProps from './selector';

const mapDispatchToProps = {
  closeModal,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ModalsPortal);

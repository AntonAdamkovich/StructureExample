import { connect } from 'react-redux';
import { createReduxContainer } from 'react-navigation-redux-helpers';
import { createSwitchNavigator } from 'react-navigation';

import AuthFlow from './flows/authFlow';
import mainFLow from './flows/mainFlow';
import startingFlow from './flows/startingFlow';

import { AUTH, MAIN, STARTING } from '../constants/flowNames';

import selector from './selector';

export const RootNavigator = createSwitchNavigator({
    [MAIN]: {
      screen: mainFLow
    },
    [AUTH]: {
      screen: AuthFlow
    },
    [STARTING]: {
      screen: startingFlow,
    }
  },
  {
    initialRouteName: STARTING,
  }
);

export default connect(selector)(createReduxContainer(RootNavigator));

import { createStackNavigator } from 'react-navigation';

import { SECOND_EXAMPLE, THIRD_EXAMPLE } from '../../constants/routeNames';

import SecondExample from '../../screens/SecondExample';
import LoadingScreen from '../../screens/LoadingScreen';

export default createStackNavigator(
  {
    [SECOND_EXAMPLE]: {
      screen: SecondExample,
    },
    [THIRD_EXAMPLE]: {
      screen: LoadingScreen,
    }
  },
  {
    initialRouteName: SECOND_EXAMPLE,
    headerMode: 'none',
  }
);

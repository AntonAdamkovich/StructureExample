import { createStackNavigator } from 'react-navigation';

import { FIRST_EXAMPLE } from '../../constants/routeNames';

import FirstExample from '../../screens/FirstExample';

export default createStackNavigator(
  {
    [FIRST_EXAMPLE]: {
      screen: FirstExample,
    }
  }, {
    initialRouteName: FIRST_EXAMPLE,
    headerMode: 'none',
  }
);

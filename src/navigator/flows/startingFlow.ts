import { createStackNavigator } from 'react-navigation';

import { LOADING } from '../../constants/routeNames';

import LoadingScreen from '../../screens/LoadingScreen';

export default createStackNavigator(
  {
    [LOADING]: {
      screen: LoadingScreen,
    },
  },
  {
    initialRouteName: LOADING,
    headerMode: 'none',
  }
);

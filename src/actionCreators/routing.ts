import { NavigationActions, NavigationAction, SwitchActions } from 'react-navigation'

import * as RouteNames from '../constants/routeNames';

export const navigateTo = (routeName: string,
                           params?: any,
                           action?: NavigationAction) => NavigationActions.navigate({ routeName, params, action });

export const navigateToSecondExample = () => navigateTo(RouteNames.SECOND_EXAMPLE);

export const navigateToFirstExample = () => navigateTo(RouteNames.FIRST_EXAMPLE);

export const navigateBack = () => NavigationActions.back();

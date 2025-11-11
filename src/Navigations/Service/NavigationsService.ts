import {
  createNavigationContainerRef,
  NavigationContainerRefWithCurrent,
} from '@react-navigation/native';

import { RootTabParamList } from '../../type/NavigationsType/NavType';

export const navigationRef: NavigationContainerRefWithCurrent<RootTabParamList> =
  createNavigationContainerRef<RootTabParamList>();

export function navigate<RouteName extends keyof RootTabParamList>(
  name: RouteName,
  params?: RootTabParamList[RouteName],
) {
  if (navigationRef.isReady()) {
    navigationRef.navigate(name as any, params as any);
  }
}

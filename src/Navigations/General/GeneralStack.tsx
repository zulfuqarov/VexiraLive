import React from 'react';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import {
  createNativeStackNavigator,
  NativeStackNavigationOptions,
} from '@react-navigation/native-stack';

type ScreenItem<T extends Record<string, object | undefined>> = {
  screenName: keyof T;
  component: React.ComponentType<any>;
  options?: NativeStackNavigationOptions;
};

type Props<T extends Record<string, object | undefined>> = {
  screens: ScreenItem<T>[];
};

const Stack = createNativeStackNavigator();

const GeneralStack = <T extends Record<string, object | undefined>>({
  screens,
}: Props<T>) => {
  const insets = useSafeAreaInsets();

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        contentStyle: {
          paddingTop: insets.top,
          backgroundColor: 'black',
        },
      }}
    >
      {screens.map(({ screenName, component, options }) => (
        <Stack.Screen
          key={String(screenName)}
          name={String(screenName)}
          component={component}
          options={options}
        />
      ))}
    </Stack.Navigator>
  );
};

export default GeneralStack;

import { createNativeStackNavigator, NativeStackNavigationProp } from '@react-navigation/native-stack';
import React from 'react';

import { HomePage, ProfilePage } from '@pages'

type StackList = {
  Home: undefined;
  Profile: undefined;
};

export type StackType = NativeStackNavigationProp<StackList>

const Stack = createNativeStackNavigator<StackList>()

export function BaseNavigation() {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false
      }}
    >
      <Stack.Screen
        name="Home"
        component={HomePage}
      />
      <Stack.Screen name="Profile" component={ProfilePage} />
    </Stack.Navigator>
  );
}

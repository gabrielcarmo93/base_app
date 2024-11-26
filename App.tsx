import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';

import { BaseNavigation } from '@navigations/BaseNavigation';

export default function App() {
  return (
    <NavigationContainer>
      <BaseNavigation />
    </NavigationContainer>
  );
}
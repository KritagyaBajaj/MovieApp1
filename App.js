import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Ionicons} from 'react-native-vector-icons/Ionicons';
import HomePage from './Screens/HomePage';
import Checkout from './Screens/Checkout';

export default function App() {
  return (
    <NavigationContainer>
      <TabNaviga
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

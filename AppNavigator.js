import React from 'react';
import { createStackNavigator } from 'react-navigation';
import Todos from './screens/Todos';

const AppNavigator = createStackNavigator({
  Home: {
    screen: Todos
  }
});

export default AppNavigator;
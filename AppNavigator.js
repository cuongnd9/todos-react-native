import React from 'react';
import { createStackNavigator } from 'react-navigation';
import Todos from './screens/Todos';
import Todo from './screens/Todo';

const AppNavigator = createStackNavigator({
  Home: {
    screen: Todos
  },
  Todo
});

export default AppNavigator;
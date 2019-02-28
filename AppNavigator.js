import React from 'react';
import { createStackNavigator } from 'react-navigation';
import Todos from './screens/Todos';
import Todo from './screens/Todo';
import AddTodo from './screens/AddTodo';
import EditTodo from './screens/EditTodo';

const AppNavigator = createStackNavigator({
  Home: {
    screen: Todos
  },
  Todo,
  AddTodo,
  EditTodo
});

export default AppNavigator;
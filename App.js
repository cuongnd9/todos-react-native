import React from 'react';
import { createAppContainer } from 'react-navigation';
import AppNavigator from './AppNavigator';
import { TodosProvider } from './contexts/TodosContext';

const AppContainer = createAppContainer(AppNavigator);

export default class App extends React.Component {
  render() {
    return (
      <TodosProvider>
        <AppContainer />
      </TodosProvider>
    );
  }
}
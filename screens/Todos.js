import React, { Component } from 'react';
import { FlatList, View, StyleSheet } from 'react-native';
import { Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/AntDesign';

import { TodosProvider, TodosConsumer } from '../contexts/TodosContext';
import TodoItem from '../components/TodoItem';

export default class extends Component {
  static navigationOptions = {
    headerTitle: 'Home'
  };

  render() {
    const { navigation } = this.props;
    return (
      <TodosProvider>
        <View style={styles.container}>
          <Button 
            containerStyle={styles.newButton} 
            title='New' 
            titleStyle={{color: 'green', paddingLeft: 8}}
            type='outline' 
            icon={<Icon name='plus' size={15} color='green' />}
            onPress={() => 
              navigation.navigate('AddTodo')
            }
          />
          <TodosConsumer>
            {
              ({ todos, onDeleteTodo }) => {
                return (
                  <FlatList
                    data={todos}
                    renderItem={({item}) => {
                      return <TodoItem 
                        todo={item} 
                        onItemClick={() => 
                          navigation.navigate('Todo', { todo: item })
                        }
                        onDeleteTodo={onDeleteTodo.bind(this, item)}
                      />
                    }}
                    keyExtractor={item => item._id}
                    contentContainerStyle={styles.contentContainer}
                  />
                );
              }
            }
          </TodosConsumer>
        </View>
      </TodosProvider>
    );
  }
};

const styles =StyleSheet.create({
  container: {
    flex: 1
  },
  newButton: { 
    width: 100, 
    margin: 16
  },
  contentContainer: {
    paddingBottom: 8
  }
});
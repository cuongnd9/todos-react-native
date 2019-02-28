import React, { Component } from 'react';
import { TouchableOpacity ,View, Text, StyleSheet } from 'react-native';
import { Badge, Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/AntDesign';

export default class extends Component {
  render() {
    const { todo, onItemClick, onDeleteTodo, onEditTodo } = this.props;
    return (
      <TouchableOpacity activeOpacity={0.3} onPress={onItemClick}>
        <View style={styles.container}>
          <View style={styles.titleRow}>
            <Text style={styles.title}>{todo.name}</Text>
            <Badge 
              textStyle={styles.badge}
              badgeStyle={{paddingVertical: 10, paddingHorizontal: 5}}
              status={todo.isCompleted ? 'success' : 'error'} 
              value={todo.isCompleted ? 'active' : 'inactive'} 
            />
          </View>
          <View style={styles.groupButton}>
            <Button 
              containerStyle={styles.editButton} 
              title='Edit' 
              titleStyle={{color: 'blue', paddingLeft: 8}} 
              type='outline' 
              icon={<Icon name='edit' size={15} color='blue' />}
              onPress={onEditTodo}
            />
            <Button 
              containerStyle={styles.deleteButton} 
              title='Delete' 
              titleStyle={{color: 'red', paddingLeft: 8}} 
              type='outline' 
              icon={<Icon name='close' size={15} color='red' />} 
              onPress={onDeleteTodo}
            />
          </View>
        </View>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    marginHorizontal: 16,
    marginVertical: 8,
    borderRadius: 20,
    backgroundColor: '#deecff',
    elevation: 5,
    shadowColor: '#000',
    shadowOpacity: 0.3,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 0}
  },
  titleRow: {
    alignItems: 'center',
    flexDirection: 'row',
    paddingBottom: 8
  },
  title: {
    flex: 1,
    fontSize: 36,
    color: '#35477d'
  },
  badge: {
    fontSize: 16
  },
  groupButton: {
    flexDirection: 'row'
  },
  editButton: {
    width: 100,
    marginRight: 16
  },
  deleteButton: {
    width: 100
  }
});
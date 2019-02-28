import React from 'react';
import { TouchableOpacity ,View, Text, StyleSheet } from 'react-native';
import { Badge } from 'react-native-elements';

export default class extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    headerTitle: navigation.getParam('todo').name
  });

  render() {
    const { navigation } = this.props;
    const todo = navigation.getParam('todo');
    return (
      <TouchableOpacity activeOpacity={0.3}>
        <View style={styles.container}>
          <Text style={styles.title}>{todo.name}</Text>
          <Badge 
            textStyle={styles.badge}
            badgeStyle={{paddingVertical: 10, paddingHorizontal: 5}}
            status={todo.isCompleted ? 'success' : 'error'} 
            value={todo.isCompleted ? 'active' : 'inactive'} 
          />
        </View>
      </TouchableOpacity>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
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
  title: {
    flex: 1,
    fontSize: 36,
    color: '#35477d'
  },
  badge: {
    fontSize: 16
  }
});
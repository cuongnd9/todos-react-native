import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Button, CheckBox, Input } from 'react-native-elements';
import Icon from 'react-native-vector-icons/AntDesign';


export default class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
      checked: false
    };
  }

  static navigationOptions = {
    headerTitle: 'Add Todo'
  };

  onChange() {
    this.setState({
      text: this.refs.input.value
    });
  }

  onPress() {
    this.setState(state => ({
      checked: !state.checked
    }));
  }

  onButtonPress() {
    
  }

  render() {
    const { checked } = this.state;
    return (
      <View style={styles.container}>
        <Input
          ref='input'
          containerStyle={styles.input}
          inputStyle={styles.inputText}
          placeholder='Enter your todo...'
          leftIcon={
            <Icon
              name='form'
              size={24}
              color='green'
            />
          }
          leftIconContainerStyle={styles.inputIcon}
          onChange={this.onChange.bind(this)}
        />
        <CheckBox
          title='Click Here'
          checkedIcon='dot-circle-o'
          uncheckedIcon='circle-o'
          checkedColor='green'
          checked={checked}
          onPress={this.onPress.bind(this)}
          textStyle={styles.checkBox}
        />
        <Button 
          containerStyle={styles.button} 
          title='Save' 
          titleStyle={{color: 'blue', paddingLeft: 8}} 
          type='outline' 
          icon={<Icon name='edit' size={15} color='blue' />}
          onPress={this.onButtonPress.bind(this)}
        />
      </View>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    padding: 16
  },
  input: {
    marginBottom: 16
  },
  inputIcon: {
    marginRight: 16
  },
  inputText: {
    fontSize: 24,
    fontWeight: '100',
    color: 'gray'
  },
  checkBox: {
    fontSize: 24,
    fontWeight: '100',
    color: 'gray'
  },
  button: {
    width: 100,
    marginTop: 16,
    marginLeft: 12
  }
});
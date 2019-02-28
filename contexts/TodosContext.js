import React, { Component } from 'react';
import { Alert } from 'react-native';
import axios from 'axios';
import nanoid from 'nanoid/non-secure';

axios.defaults.baseURL = 'http://10.0.2.2:8080/api';

const TodosContext = React.createContext();

class TodosProvider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: []
    };
  }

  componentDidMount() {
    axios.get('/todos')
      .then(res => this.setState({ todos: res.data }) )
      .catch(err => console.log(err));
  }

  onDeleteTodo(todo) {
    const { todos } = this.state;
    const cloneTodos = [...todos];
    const index = cloneTodos.findIndex(item => item._id === todo._id);
    cloneTodos.splice(index, 1);

    this.setState({
      todos: cloneTodos
    });

    axios.delete(`/todos/${todo._id}`)
      .then( res => Alert.alert(`${todo.name} was deleted!!!`))
      .catch(err => Alert.alert('Delete failed!!!'))
  }

  onAddTodo(todo) {
    const { todos } = this.state;
    const cloneTodos = [...todos];
    todo._id = nanoid();
    cloneTodos.push(todo);

    this.setState({
      todos: cloneTodos
    });

    axios.post('/todos', todo)
      .then( res => Alert.alert(`${todo.name} was created!!!`))
      .catch(err => Alert.alert('Create failed!!!'))
  }

  onEditTodo(todo) {
    const { todos } = this.state;
    const cloneTodos = [...todos];
    const index = cloneTodos.findIndex(item => item._id === todo._id);
    cloneTodos[index] = {...todo};

    this.setState({
      todos: cloneTodos
    });

    axios.put(`/todos/${todo._id}`, todo)
      .then( res => Alert.alert(`${todo.name} was updated!!!`))
      .catch(err => Alert.alert('Update failed!!!'))
  }

  render() {
    return (
      <TodosContext.Provider
        value={{
          todos: this.state.todos,
          onDeleteTodo: this.onDeleteTodo.bind(this),
          onAddTodo: this.onAddTodo.bind(this),
          onEditTodo: this.onEditTodo.bind(this)
        }}
      >
        {this.props.children}
      </TodosContext.Provider>
    );
  }
}

const TodosConsumer = TodosContext.Consumer;

export { TodosProvider, TodosConsumer };
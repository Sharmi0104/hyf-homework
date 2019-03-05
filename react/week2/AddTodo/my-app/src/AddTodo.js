import React from 'react';

import List from './List';

class AddTodo extends React.Component {
  constructor(props) {
    super(props);
    this.state = { todos: [
      {
        "id":'1',
        "description":'todo 1',
        "Done":true
      }
    ], inputText: '' };
  }

  componentDidMount() {}

  addTodo = () => {
     
   const newTodos = this.state.todos.concat({
    "id": this.state.todos + 1,
    "description": this.state.inputText,
    "Done": false
  });
this.setState({ todos: newTodos });

 };

  todoTextHandler = e => {
    const typedText = e.target.value;
    this.setState({ inputText: typedText });
  };

  deleteTodo = id => {
    const newTodos = this.state.todos.filter(toDo => toDo.id !== id);    
    this.setState({ todos: newTodos });
};

completedToDo = id => {
    const index = this.state.todos.findIndex(toDo => toDo.id === id);
    const toDo = this.state.todos[index];   
    toDo.done = !toDo.done;
    this.setState({ todos: this.state.todos})
};

  render() {
    return (
      <React.Fragment>
        <input
          placeholder="Enter todo items"
          value={this.state.inputText}
          onChange={this.todoTextHandler}
        />
        <button onClick={this.addTodo}>add</button>
        <List info = {this.state.todos} deleteItem = {this.deleteTodo} toDoStatus = {this.completedToDo} />   
  
      </React.Fragment>
    );
  }
}

export default AddTodo;

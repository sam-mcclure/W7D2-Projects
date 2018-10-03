import React from 'react';
import TodoListItem from './todo_list_item';
import TodoForm from '../todo_list/todo_form'



class TodoList extends React.Component {

  componentDidMount() {
    this.props.fetchTodos();
  }


  render(){
    const TodoListItems = this.props.todos.map((el) => {

      return <TodoListItem key={el.id} listItem={el} />;
    });

    return (
      <ul>
        {TodoListItems}
        <br />
        <TodoForm action={this.props.addTodo} />

      </ul>
    );
  }



}





export default TodoList;

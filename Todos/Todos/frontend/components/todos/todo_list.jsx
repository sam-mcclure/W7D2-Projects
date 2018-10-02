import React from 'react';
import TodoListItem from './todo_list_item';
import TodoForm from '../todo_list/todo_form'



const TodoList = ({todos, addTodo}) => {

  const TodoListItems = todos.map((el) => {
    return <TodoListItem listItem={el} prop2={"prop2"}/>;
  })
  return (
    <ul>
      {TodoListItems}
      <br />
      <TodoForm action={addTodo} />

    </ul>
  )
}





export default TodoList;

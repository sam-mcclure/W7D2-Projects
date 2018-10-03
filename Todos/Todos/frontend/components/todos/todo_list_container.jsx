import React from 'react';
import {connect} from 'react-redux';
import TodoList from './todo_list';
import {allTodos} from '../../reducers/selectors';

const mapStateToProps = state => ({
  todos: allTodos(state)

});

const mapDispatchToProps = dispatch => ({
  addTodo: todo => dispatch(receiveTodo(todo)),
  fetchTodos: todos => dispatch(fetchTodos(todos)),
  createTodo: todo => dispatch(createTodo(todo))
});

export default connect(
  mapStateToProps, mapDispatchToProps
)(TodoList);

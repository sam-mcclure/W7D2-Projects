import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import merge from 'lodash/merge';
import {receiveTodos, receiveTodo} from './actions/todo_actions';
import Root from './components/root';

const store = configureStore();
window.store = store;
window.merge = merge;
window.receiveTodo = receiveTodo;
window.receiveTodos = receiveTodos;

document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');
  ReactDOM.render (
    <Root store={store} />,
  root
  );
});

import merge from 'lodash/merge';


import {RECEIVE_TODOS, RECEIVE_TODO} from '../actions/todo_actions';

const initialState = {
  1: {
    id: 1,
    title: 'wash car',
    body: 'with soap',
    done: false
  },
  2: {
    id: 2,
    title: 'wash dog',
    body: 'with shampoo',
    done: true
  },
};


const todosReducer = (state = initialState, action) => {
  switch(action.type) {

    case RECEIVE_TODOS:
    //return new object
      let newObject = {};
      action.todos.forEach((el) => {
        newObject[el.id] = el;
      });
      return newObject;

    case RECEIVE_TODO:
      let copyState = merge({}, state, {[action.todo.id]: action.todo});
      return copyState;

    default :
      return state;
  }
};

export default todosReducer;

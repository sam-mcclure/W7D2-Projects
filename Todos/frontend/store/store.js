import { createStore } from 'redux';
import { rootReducer } from '../reducers/root_reducer.js';

export default function configureStore () {
  return createStore(rootReducer);
}

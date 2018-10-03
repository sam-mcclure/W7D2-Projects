import { createStore, applyMiddleware } from 'redux';
import { rootReducer } from '../reducers/root_reducer.js';
import { thunk } from '../middleware/thunk';

export default function configureStore () {
  return createStore(rootReducer,
  applyMiddleware(thunk));
}

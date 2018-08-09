import { combineReducers } from 'redux';
import counter from './counter.js';
import todo from './todo.js';

export default combineReducers({
  todo,
  counter
})
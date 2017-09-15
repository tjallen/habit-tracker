import { combineReducers } from 'redux';
import tasks from './tasks';
import date from './date';

const rootReducer = combineReducers({
  tasks,
  date,
});

export default rootReducer;
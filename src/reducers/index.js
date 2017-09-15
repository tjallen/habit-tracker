import { combineReducers } from 'redux';
import tasks from './tasks';
import settings from './settings';
import date from './date';

const rootReducer = combineReducers({
  tasks,
  settings,
  date,
});

export default rootReducer;
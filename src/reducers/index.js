import { combineReducers } from 'redux';
import tasks from './tasks';
import settings from './settings';

const rootReducer = combineReducers({
  tasks,
  settings,
});

export default rootReducer;
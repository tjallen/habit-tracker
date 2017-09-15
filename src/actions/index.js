import { v4 } from 'uuid';

import {
  ADD_TASK,
  UPDATE_TASK_COUNT,
  REMOVE_TASK,
  SET_DATE,
} from './../constants';

export const setDate = (date) => ({
  type: SET_DATE, date, 
});

export const addTask = (name) => ({
  type: ADD_TASK, name, id: v4(), data: {},
});

export const updateTaskCount = (id, date, count) => ({
  type: UPDATE_TASK_COUNT, id, date, count,
});

export const removeTask = (id) => ({
  type: REMOVE_TASK, id,
});
import { v4 } from 'uuid';

import {
  ADD_TASK,
  REMOVE_TASK,
  RENAME_TASK,
  UPDATE_TASK_COUNT,
  SET_DATE,
} from './../constants';

export const setDate = (date) => ({
  type: SET_DATE, date, 
});

export const addTask = (name) => ({
  type: ADD_TASK, name, id: v4(), data: [],
});

export const renameTask = (id, name) => ({
  type: RENAME_TASK, id, name,
});

export const updateTaskCount = (id, date, value) => ({
  type: UPDATE_TASK_COUNT, id, date, value,
});

export const removeTask = (id) => ({
  type: REMOVE_TASK, id,
});
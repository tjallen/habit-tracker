import { v4 } from 'uuid';
import { ADD_TASK, UPDATE_TASK_COUNT } from './../constants';

export const addTask = (name) => ({
  type: ADD_TASK, name, id: v4(), data: {},
});

export const updateTaskCount = (id, date, value) => ({
  type: UPDATE_TASK_COUNT, id, date, value,
});
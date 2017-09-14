import { v4 } from 'uuid';
import { ADD_TASK } from './../constants';

export const addTask = (text) => ({
  type: ADD_TASK, text, id: v4(), data: {},
});
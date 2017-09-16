import {
  ADD_TASK,
  REMOVE_TASK,
  RENAME_TASK,
  UPDATE_TASK_COUNT,
} from './../constants';

function tasksReducer(state = [], action) {
  switch (action.type) {
    case ADD_TASK: {
      return state.concat({
        id: action.id,
        name: action.name,
        data: action.data,
      });
    }
    case REMOVE_TASK: {
      return state.filter((item) => item.id !== action.id);
    }
    case RENAME_TASK: {
      return state.map((task) => {
        if (task.id !== action.id) return task;
        return {
          ...task,
          name: action.name,
        };
      });
    }
    case UPDATE_TASK_COUNT: {
      return state.map((task) => {
        if (task.id !== action.id) {
          return task;
        }
        return {
          ...task,
          data: {
            ...task.data,
            [action.date]: action.count,
          }
        }
      });
    }
    default:
      return state;
  }
}

export default tasksReducer;
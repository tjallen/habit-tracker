import {
  ADD_TASK,
  UPDATE_TASK_COUNT,
  REMOVE_TASK,
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
    case REMOVE_TASK: {
      return state.filter((item) => item.id !== action.id);
    }
    default:
      return state;
  }
}

export default tasksReducer;
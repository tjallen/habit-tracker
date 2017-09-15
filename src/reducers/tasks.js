import { ADD_TASK, UPDATE_TASK_COUNT } from './../constants';

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
      return state.map((task, index) => {
        if (task.id !== action.id) {
          return task;
        }
        return Object.assign(task, {
          data: {
            ...task.data,
            [action.date]: action.count,
          }
        });
      });
    }
    default:
      return state;
  }
}

export default tasksReducer;
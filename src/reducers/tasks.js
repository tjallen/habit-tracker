import { ADD_TASK } from './../constants';

function tasksReducer(state = [], action) {
  switch (action.type) {
    case ADD_TASK: {
      return state.concat({
        id: action.id,
        text: action.text,
        data: action.data,
      });
    }
    default:
      return state;
  }
}

export default tasksReducer;
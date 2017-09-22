import {
  ADD_TASK,
  REMOVE_TASK,
  RENAME_TASK,
  UPDATE_TASK_COUNT,
} from './../constants';

// utility fns
function updateObject(obj, updatedValues) {
  return Object.assign({}, obj, updatedValues);
}

function updateItemInArray(array, prop, val, callback) {
  const updatedArray = array.map(item => {
    if (item[prop] !== val) {
      return item;
    }
    const updatedItem = callback(item);
    return updatedItem;
  });
  return updatedArray;
}

// subreducers
function datesReducer(array, action) {
  switch(action.type) {
    case UPDATE_TASK_COUNT: {
      const { date, value } = action;
      const dateIsPresent = array.find(item => item.date === date);
      if (dateIsPresent) {
        return updateItemInArray(array, 'date', date, (dataItem) => {
          return updateObject(dataItem, { value });
        });
      } else {
        return array.concat({
          date,
          value,
        });
      }
    }
    default: return array;
  }
}

// main reducer
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
      return state.filter(item => item.id !== action.id);
    }
    case RENAME_TASK: {
      return updateItemInArray(state, 'id', action.id, (task) => {
        return updateObject(task, { name: action.name });
      });
    }
    case UPDATE_TASK_COUNT: {
      return state.map(task => {
        if (task.id !== action.id) {
          return task;
        }
        return {
          ...task,
          data: datesReducer(task.data, action),
        }
      });
    }
    default:
      return state;
  }
}

export default tasksReducer;
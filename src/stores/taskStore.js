/*eslint-disable no-unused-vars*/
import { v4 } from 'uuid';

const saveTasks = (tasks) => {
  try {
    const serializedTasks = JSON.stringify(tasks);
    localStorage.setItem('tasks', serializedTasks);
  } catch(err) {
    console.log(err);
  }
}

const loadTasks = () => {
  try {
    const serializedTasks = localStorage.getItem('tasks');
    if (!serializedTasks) {
      return undefined;
    }
    return JSON.parse(serializedTasks);
  } catch (err) {
    return undefined;
  }
}

class TaskStore {
  tasks = loadTasks() || [];
  addTask(name) {
    if (!name) {
      console.log('no task name provided');
      return
    }
    this.tasks.push({
      id: v4(),
      name,
    });
    saveTasks(this.tasks);
  }
  setDayTaskCount(id, date, value) {
    const task = this.tasks.find(task => task.id === id);
    if (task) {
      if (!task.hasOwnProperty('data')) {
        task.data = {};
        console.log('init task data');
      }
      task.data[date] = value;
      console.log('set task data value', task.data, task.data[date], value);
    } else {
      console.log('unknown task id');
    }
    saveTasks(this.tasks);
  }
  deleteTask() {
    // TODO
  }
  renameTask() {
    // TODO
  }
  getAll() {
    return this.tasks;
  }
}

const taskStore = new TaskStore();
export default taskStore;
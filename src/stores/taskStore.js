import { v4 } from 'uuid';
import { observable } from 'mobx';

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
  @observable tasks = loadTasks() || [];
  addTask(name) {
    if (!name) {
      console.log('no task name provided');
      return;
    }
    this.tasks.push({ name, id: v4() });
    saveTasks(this.tasks);
  }
  getAll() {
    return this.tasks;
  }
}

const taskStore = new TaskStore();
export default taskStore;
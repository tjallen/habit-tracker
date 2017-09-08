/*eslint-disable no-unused-vars*/
import { v4 } from 'uuid';
import { observable, extendObservable, action, autorun, isObservable, toJS } from 'mobx';

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
  // @observable tasks = loadTasks() || [];
  @observable tasks = new observable.map();
  @action addTask(name) {
    if (!name) {
      console.log('no task name provided');
      return
    }
    this.tasks.set(v4(), {
      id: v4(),
      name,
      data: new observable.map(),
    });
    // saveTasks(this.tasks);
  }
  @action setDayTaskCount(id, date, value) {
    if (this.tasks.has(id)) {
      const task = this.tasks.get(id);
      task.data.set(date, value);
    }
    // saveTasks(this.tasks);
  }
  @action deleteTask() {
    // TODO
  }
  @action renameTask() {
    // TODO
  }
  getAll() {
    // console.log(toJS(this.tasks.entries()))
    return this.tasks.entries();
  }
}

const taskStore = new TaskStore();
export default taskStore;
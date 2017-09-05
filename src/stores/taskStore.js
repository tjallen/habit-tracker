import { v4 } from 'uuid';
import { observable } from 'mobx';

// const placeholders = [
//   {name: 'foo!', id: v4() },
//   {name: 'bar', id: v4() },
// ];

class TaskStore {
  @observable tasks = [];
  addTask(name) {
    if (!name) {
      console.log('no task name provided');
      return;
    }
    this.tasks.push({ name, id: v4() });
  }
  getAll() {
    return this.tasks;
  }
}

const taskStore = new TaskStore();
export default taskStore;
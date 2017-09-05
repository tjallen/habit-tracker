import React, { Component } from 'react';
import './App.css';
import { observer } from 'mobx-react';
import taskStore from '../stores/taskStore';

@observer
class App extends Component {
  constructor() {
    super();
    this.onSubmit = this.onSubmit.bind(this);
  }
  componentDidMount() {
    this.addTaskInput.focus();
  }
  onSubmit(e) {
    e.preventDefault();
    const task = this.addTaskInput.value;
    if (task) {
      taskStore.addTask(task);
      // this.forceUpdate();
    }
    this.addTaskInput.value = '';
  }
  render() {
    return (
      <div className="App">
        {
          taskStore.getAll().length > 0
          ? <pre>{JSON.stringify(taskStore.getAll(), null, 2)}</pre>
          : <p>no tasks</p>
        }
        <form onSubmit={this.onSubmit}>
          <input type="text" placeholder="add a habit or task to track" onChange={this.onChange} ref={(input) => { this.addTaskInput = input; }} />
          <input type="submit" />
        </form>
      </div>
    );
  }
}

export default App;

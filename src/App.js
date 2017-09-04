import React, { Component } from 'react';
import './App.css';
import { v4 } from 'uuid';

class App extends Component {
  constructor() {
    super();
    this.state = {
      tasks: [
        {name: 'foo', id: v4() },
        {name: 'bar', id: v4() },
      ],
    }
    this.onSubmit = this.onSubmit.bind(this);
  }
  componentDidMount() {
    this.addTaskInput.focus();
  }
  onChange(e) {
    console.log('onChange', e.target.value);
  }
  onSubmit(e) {
    e.preventDefault();
    const task = this.addTaskInput.value;
    console.log('onSubmit', task);
    if (task) {
      this.setState({
        tasks: [ ...this.state.tasks, {
          name: task,
          id: v4(),
        }],
      }, this.addTaskInput.value = '');
    }
  }
  render() {
    return (
      <div className="App">
        {
          this.state.tasks.length > 0
          ? <pre>{JSON.stringify(this.state.tasks, null, 2)}</pre>
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

import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      tasks: [
        {name: 'foo'},
        {name: 'bar'},
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
        tasks: [ ...this.state.tasks, { name: task }]
      }, this.addTaskInput.value = '');
    }
  }
  render() {
    return (
      <div className="App">
        {
          this.state.tasks.length > 0
          ? <pre>{JSON.stringify(this.state.tasks)}</pre>
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

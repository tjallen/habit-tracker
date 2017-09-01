import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      tasks: [
        'foo',
        'bar'
      ],
    }
  }
  onChange() {
    console.log('onChange');
  }
  onSubmit(e) {
    e.preventDefault();
    console.log('onSubmit');
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
          <input type="text" placeholder="add a habit or task to track" onChange={this.onChange} />
          <input type="submit" />
        </form>
      </div>
    );
  }
}

export default App;

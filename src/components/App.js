import React, { Component } from 'react';
import AddTaskForm from './AddTaskForm';
import QuickDebugInfo from './QuickDebugInfo';
import UpdateTasks from './UpdateTasks';

export default class App extends Component {
  render() {
    const props = this.props;
    return (
      <div style={{textAlign: 'left'}}>
        <QuickDebugInfo {...props} />
        <AddTaskForm {...props} />
        <UpdateTasks {...props} />
      </div>
    );
  }
}

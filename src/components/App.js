import React, { Component } from 'react';
import AddTaskForm from './AddTaskForm';
import QuickDebugInfo from './QuickDebugInfo';
import UpdateTasks from './UpdateTasks';
import moment from 'moment';
// import taskStore from '../stores/taskStore';

export default class App extends Component {
  render() {
    const props = this.props;
    // const { taskStore } = this.props;
    // const { date } = this.state;
    // console.log(taskStore.getAll());
    return (
      <div style={{textAlign: 'center'}}>
        <QuickDebugInfo {...props} />
        <AddTaskForm {...props} />
        <UpdateTasks {...props} />
      </div>
    );
  }
}

import React, { Component } from 'react';
import AddTaskForm from './AddTaskForm';
import QuickDebugInfo from './QuickDebugInfo';
import UpdateTasks from './UpdateTasks';
import moment from 'moment';
import taskStore from '../stores/taskStore';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      tasks: taskStore.getAll(),
      date: moment().format('YYYY-MM-DD'),
    }
  }
  render() {
    const { taskStore } = this.props;
    const { date } = this.state;
    console.log(taskStore.getAll());
    return (
      <div style={{textAlign: 'center'}}>
        <QuickDebugInfo date={date} taskStore={taskStore} />
        <AddTaskForm date={date} taskStore={taskStore} />
        <UpdateTasks date={date} taskStore={taskStore} />
      </div>
    );
  }
}

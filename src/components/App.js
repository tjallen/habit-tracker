import React, { Component } from 'react';
import AddTaskForm from './AddTaskForm';
import QuickDebugInfo from './QuickDebugInfo';
import UpdateTasks from './UpdateTasks';
import moment from 'moment';

export default class App extends Component {
  componentWillMount() {
    this.updateCurrentDate();
  }
  updateCurrentDate() {
    const date = moment().format('YYYY-MM-DD');
    this.setState({
      date
    });
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

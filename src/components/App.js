import React, { Component } from 'react';
import AddTaskForm from './AddTaskForm';
import QuickDebugInfo from './QuickDebugInfo';
import UpdateTasks from './UpdateTasks';
import DatePicker from './DatePicker';
import Task from './Task';

export default class App extends Component {
  render() {
    const { tasks } = this.props;
    return (
      <div style={{textAlign: 'left'}}>
        <QuickDebugInfo {...this.props} />
        <DatePicker {...this.props} />
        <AddTaskForm {...this.props} />
        {tasks.map((task, index) =>
          <Task
            data={task.data}
            weekCount={4}
            name={task.name}
            key={index}
          />
        )}
        <UpdateTasks {...this.props} />
      </div>
    );
  }
}

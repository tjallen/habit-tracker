import React, { Component } from 'react';
import AddTaskForm from './AddTaskForm';
// import QuickDebugInfo from './QuickDebugInfo';
// import DatePicker from './DatePicker';
import Task from './Task';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.handleDayClick = this.handleDayClick.bind(this);
  }
  handleDayClick(payload) {
    this.props.onDayClick(payload.date);
  }
  render() {
    const {
      tasks,
      date,
      onCountChange,
      onRemoveClick,
      onNameChange
    } = this.props;
    return (
      <div style={{textAlign: 'left'}}>
        {/* <QuickDebugInfo {...this.props} />
        <DatePicker {...this.props} /> */}
        <AddTaskForm {...this.props} />
        {tasks.map((task, index) =>
          <Task
            data={task.data}
            weekCount={4}
            name={task.name}
            key={index}
            id={task.id}
            date={date}
            onCountChange={onCountChange}
            onRemoveClick={onRemoveClick}
            onNameChange={onNameChange}
            onDayClick={this.handleDayClick}
          />
        )}
      </div>
    );
  }
}

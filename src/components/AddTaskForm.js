import React, { Component } from 'react';
import { observer } from 'mobx-react';

@observer
class AddTaskForm extends Component {
  constructor(props) {
    super(props);
    this.onSubmit = this.onSubmit.bind(this);
  }
  componentDidMount() {
    this.addTaskInput.focus();
  }
  onChange(e) {
    const { taskStore } = this.props;
    taskStore.addTask(this.addTaskInput.value);
  }
  onSubmit(e) {
    const { taskStore } = this.props;
    e.preventDefault();
    const task = this.addTaskInput.value;
    if (task) {
      taskStore.addTask(task);
    }
    this.addTaskInput.value = '';
  }
  render() {
    return (
      <div>
        <form onSubmit={this.onSubmit}>
          <input
            type="text"
            placeholder="add a habit or task to track"  
            ref={(input) => { this.addTaskInput = input; }}
          />
          <input type="submit" />
        </form>
     </div>
   );
  }

};

export default AddTaskForm;
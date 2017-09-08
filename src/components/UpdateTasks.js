import React, { Component } from 'react';
import moment from 'moment';
import { observer } from 'mobx-react';

@observer
export default class UpdateTasks extends Component {
  constructor(props) {
    super(props);
    this.handleUpdateInputChange = this.handleUpdateInputChange.bind(this);
    // this.state = {
    //   tasks: props.taskStore.getAll()
    // };
  }
  handleUpdateInputChange(e, id) {
    console.log('============');
    console.log(e.target.value);
    console.log(id);
    // const newTaskBatch = this.state.tasks;
    // const itemToChange = newTaskBatch.findIndex(item => item.id === id);
    // console.log(newTaskBatch[itemToChange]);
    // newTaskBatch[itemToChange].value = e.target.value;
    const date = moment().format('YYYY-MM-DD');
    const value = e.target.value;
    const { taskStore } = this.props;
    taskStore.updateTask(id, date, value);
    // this.setState({
    //   tasks: newTaskBatch,
    // });
  }
  handleUpdateFormSubmit(e) {
    e.preventDefault();
    console.log('!');
  }
  render() {
    const { taskStore } = this.props;
    const tasks = taskStore.getAll();
    // const { tasks } = this.state;
    const today = moment().format('YYYY-MM-DD');
    const inputType = 'number'; // TODO make customiseable
    return (
      <div>updatetasks for {today}
        <form onSubmit={this.handleUpdateFormSubmit} >
          {Array.from(tasks.map((task, index) =>
            <div key={task[1].id}>
              <label>{task[0]}</label>
              <input
                type={inputType}
                value={
                  task[1].data && task[1].data.hasOwnProperty(today) 
                  ? task[1].data[today]
                  : 0
                }
                onChange={(e) => this.handleUpdateInputChange(
                  e, task[0] 
                )}
              />
            </div>
          ))}
          <input type="submit" />
        </form>
      </div>
    )
  }
}
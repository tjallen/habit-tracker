import React, { Component } from 'react';
import moment from 'moment';

export default class UpdateTasks extends Component {
  constructor(props) {
    super(props);
    this.handleDayCountInputChange = this.handleDayCountInputChange.bind(this);
  }
  handleDayCountInputChange(e, id) {
    const date = moment().format('YYYY-MM-DD');
    const value = e.target.value;
    const { taskStore } = this.props;
    taskStore.setDayTaskCount(id, date, value);
  }
  handleNameInputChange(e, id) {
    console.log(e, id, 'rename');
  }
  handleRemoveClick(e, id) {
    console.log('remove', id);
  }
  // handleUpdateFormSubmit(e) {
  //   e.preventDefault();
  //   console.log('form submitted - not currently used');
  // }
  render() {
    const { taskStore } = this.props;
    const tasks = taskStore.getAll();
    // const { tasks } = this.state;
    const today = moment().format('YYYY-MM-DD');
    const inputType = 'number'; // TODO make customiseable
    const pres = taskStore.getAll().length;
    console.log('=>', pres, 'tasks present');
    return (
      <div><hr />updatetasks for {today}
        <form onSubmit={this.handleUpdateFormSubmit}>
          {tasks.map((task, index) => {
            const { id, name } = task;
            const count = task.hasOwnProperty('data') ? task.data[today] : undefined;
            return (
              <div key={id}>
                <label><b>{name}</b></label>
                <br />
                <input type="text" value={name} onChange={(e) => this.handleNameInputChange(e, id)}/>
                <input
                  type={inputType}
                  value={count}
                  onChange={(e) => this.handleDayCountInputChange(
                    e, id 
                  )}
                />
                <a onClick={this.handleRemoveClick}>x</a>
                <hr />
              </div>
              )
            }
          )}
          {/* <input type="submit" /> */}
        </form>
      </div>
    )
  }
}
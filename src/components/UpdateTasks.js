import React, { Component } from 'react';
import moment from 'moment';

export default class UpdateTasks extends Component {
  constructor(props) {
    super(props);
    this.handleDayCountInputChange = this.handleDayCountInputChange.bind(this);
  }
  handleDayCountInputChange(e, id) {
    const date = moment().format('YYYY-MM-DD');
    const count = e.target.value;
    const { onTaskCountUpdate } = this.props;
    onTaskCountUpdate(id, date, count);
  }
  handleNameInputChange(e, id) {
    console.log(e, id, 'rename');
  }
  handleRemoveClick(e, id) {
    console.log('remove', id);
  }
  render() {
    const { tasks } = this.props;
    // const tasks = taskStore.getAll();
    const today = moment().format('YYYY-MM-DD');
    const inputType = 'number'; // TODO make customiseable
    // const pres = taskStore.getAll().length;
    // console.log('=>', pres, 'tasks present');
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
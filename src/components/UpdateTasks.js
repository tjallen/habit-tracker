import React, { Component } from 'react';
import moment from 'moment';
import { observer } from 'mobx-react';

@observer
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
    return (
      <div><hr />updatetasks for {today}
        <form onSubmit={this.handleUpdateFormSubmit} >
          {Array.from(tasks.map((task, index) => {
            const key = task[0];
            const value = task[1];
            const { data, id, name } = value;
            const count = data && data.hasOwnProperty(today) ? data[today] : undefined;
            return (
              <div key={id}>
                <label><b>{name}</b></label>
                <br />
                <input type="text" value={name} onChange={(e) => this.handleNameInputChange(e, key)}/>
                <input
                  type={inputType}
                  value={count}
                  onChange={(e) => this.handleDayCountInputChange(
                    e, key 
                  )}
                />
                <a onClick={this.handleRemoveClick}>x</a>
                <hr />
              </div>
              )
            }
          ))}
          {/* <input type="submit" /> */}
        </form>
      </div>
    )
  }
}
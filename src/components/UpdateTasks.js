import React, { Component } from 'react';
import moment from 'moment';
import { observer } from 'mobx-react';

@observer
export default class UpdateTasks extends Component {
  constructor(props) {
    super(props);
    this.handleUpdateInputChange = this.handleUpdateInputChange.bind(this);
  }
  handleUpdateInputChange(e, id) {
    const date = moment().format('YYYY-MM-DD');
    const value = e.target.value;
    const { taskStore } = this.props;
    taskStore.setDayTaskCount(id, date, value);
  }
  handleUpdateFormSubmit(e) {
    e.preventDefault();
    console.log('form submitted - not currently used');
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
          {Array.from(tasks.map((task, index) => {
            const key = task[0];
            const value = task[1];
            const { data, id, name } = value;
            return (
              <div key={id}>
                <label>{name}</label>
                <input
                  type={inputType}
                  value={
                    data && data.hasOwnProperty(today) 
                    ? data[today]
                    : 0
                  }
                  onChange={(e) => this.handleUpdateInputChange(
                    e, key 
                  )}
                />
              </div>
              )
            }
          ))}
          <input type="submit" />
        </form>
      </div>
    )
  }
}
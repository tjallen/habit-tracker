import React, { Component } from 'react';
import moment from 'moment';

export default class UpdateTasks extends Component {
  constructor(props) {
    super(props);
    this.handleCountChange = this.handleCountChange.bind(this);
    this.handleRemoveClick = this.handleRemoveClick.bind(this);
  }
  handleCountChange(e, id) {
    const date = moment().format('YYYY-MM-DD');
    const count = e.target.value;
    const { onCountChange } = this.props;
    onCountChange(id, date, count);
  }
  handleRemoveClick(id) {
    this.props.onRemoveClick(id);
  }
  render() {
    const { tasks } = this.props;
    const today = moment().format('YYYY-MM-DD');
    const inputType = 'number'; // TODO make customiseable
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
                  onChange={(e) => this.handleCountChange(
                    e, id 
                  )}
                />
                <a onClick={() => this.handleRemoveClick(id)}>x</a>
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
import React, { Component } from 'react';
import UpdateTask from './UpdateTask';

export default class UpdateTasks extends Component {
  constructor(props) {
    super(props);
    this.handleCountChange = this.handleCountChange.bind(this);
    this.handleRemoveClick = this.handleRemoveClick.bind(this);
  }
  handleCountChange(e, id) {
    const { onCountChange, date } = this.props;
    const count = e.target.value;
    onCountChange(id, date, count);
  }
  handleRemoveClick(id) {
    this.props.onRemoveClick(id);
  }
  render() {
    const { tasks, date } = this.props;
    return (
      <div><hr />updatetasks for {date}
        <form onSubmit={this.handleUpdateFormSubmit}>
          {tasks.map((task, index) => {
            const { id, name } = task;
            const count = task.data[date];
            return (
              <div key={id}>
                <UpdateTask
                  handleCountChange={this.handleCountChange}
                  handleRemoveClick={this.handleRemoveClick}
                  id={id}
                  key={id}
                  name={name}
                  count={count}
                />
              </div>
              )
            }
          )}
        </form>
      </div>
    )
  }
}
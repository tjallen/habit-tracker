import React, { Component } from 'react';

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
    const inputType = 'number'; // TODO make customiseable
    return (
      <div><hr />updatetasks for {date}
        <form onSubmit={this.handleUpdateFormSubmit}>
          {tasks.map((task, index) => {
            const { id, name } = task;
            const count = task.hasOwnProperty('data') ? task.data[date] : undefined;
            return (
              <div key={id}>
                <label><b>name</b></label>&nbsp;
                <input type="text" defaultValue={name} onChange={(e) => this.handleNameInputChange(e, id)}/>
                <br />
                <label><b>count</b></label>&nbsp;
                <input
                  type={inputType}
                  defaultValue={count}
                  onChange={(e) => this.handleCountChange(
                    e, id 
                  )}
                />
                <br />
                <a onClick={() => this.handleRemoveClick(id)}><button>Remove</button></a>
                <hr />
              </div>
              )
            }
          )}
        </form>
      </div>
    )
  }
}
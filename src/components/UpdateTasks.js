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
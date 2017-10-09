import React, { Component } from 'react';
import UpdateTaskLabel from './UpdateTaskLabel';
import UpdateTaskInput from './UpdateTaskInput';

class UpdateTask extends Component {
  constructor(props) {
    super(props);
    this.handleCountChange = this.handleCountChange.bind(this);
    // this.handleRemoveClick = this.handleRemoveClick.bind(this);
    this.handleNameChange = this.handleNameChange.bind(this);
  }
  handleCountChange(e, id) {
    const { onCountChange, date } = this.props;
    const count = e.target.value;
    onCountChange(id, date, count);
  }
  handleRemoveClick(id) {
    this.props.onRemoveClick(id);
  }
  handleNameChange(e, id, name) {
    console.log('name change', id, name);
    this.props.onNameChange(id, name);
  }
  render() {
    const { id, name, date } = this.props;
    const txt = `count for ${date}`
    const day = this.props.data.find((item) => {
      return item.date === date
    });
    const dayValue = !day ? 0 : day.value;
    return (
      <div>
        <UpdateTaskLabel text='name' />
        <UpdateTaskInput
          type="text"
          id={id}
          value={name}
          onValueChange={this.handleNameChange}
        />
        <UpdateTaskLabel text={txt} />
        <UpdateTaskInput
          type='number'
          id={id}
          value={dayValue}
          onValueChange={this.handleCountChange}
        />
        <a onClick={() => this.handleRemoveClick(id)}   ><button>Remove</button></a>
        <hr />
      </div>
    );
  }
};

  export default UpdateTask;
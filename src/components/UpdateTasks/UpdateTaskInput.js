import React, { Component } from 'react';

export default class UpdateTaskInput extends Component {
  constructor(props) {
    super(props)
    this.state = {
      value: this.props.value
    }
  }
  handleChange(e, id) {
    const value = e.target.value;
    this.setState({
      value,
    }, this.props.onValueChange(e, id, value));
  }
  render() {
    const {
      type,
      id,
    } = this.props;
    return (
      <input
        type={type}
        value={this.state.value}
        onChange={(e) => this.handleChange(e, id)}
      />
    );
  }
};
// the only instance this should occur currently is when new task added, & count is not yet set, so we can default to 0 to prevent uncontrolled input changing to controlled input errs for now
UpdateTaskInput.defaultProps = {
  value: 0,
};
import React, { Component } from 'react';
import { observer } from 'mobx-react';
import AddTaskForm from './AddTaskForm';
import QuickDebugInfo from './QuickDebugInfo';

@observer
export default class App extends Component {
  render() {
    const { taskStore } = this.props;
    return (
      <div style={{textAlign: 'center'}}>
        <QuickDebugInfo taskStore={taskStore} />
        <AddTaskForm taskStore={taskStore} />
      </div>
    );
  }
}

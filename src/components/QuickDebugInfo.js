import React from 'react';
import { observer } from 'mobx-react';

const QuickDebugInfo = observer(({ taskStore }) => {
  return (
    <div>
      {
        taskStore.getAll().length > 0
        ? <pre>{JSON.stringify(taskStore.getAll(), null, 2)}</pre>
        : <p>no tasks</p>
      }
    </div>
  )

});
export default QuickDebugInfo;
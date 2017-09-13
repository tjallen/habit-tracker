import React from 'react';

const QuickDebugInfo = ({ taskStore }) => {
  return (
    <div>
      {
        taskStore.getAll() !== undefined
        ? <pre>{JSON.stringify(taskStore.getAll(), null, 2)}</pre>
        : <p>no tasks</p>
      }
    </div>
  )
};
export default QuickDebugInfo;
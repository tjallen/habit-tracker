import React from 'react';

const QuickDebugInfo = ({ tasks }) => {
  return (
    <div>
      {
        tasks !== undefined
        ? <pre>{JSON.stringify(tasks, null, 2)}</pre>
        : <p>no tasks</p>
      }
    </div>
  )
};
export default QuickDebugInfo;
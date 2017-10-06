import React from 'react';
import Graph from 'react-activity-graph';

const Task = ({ name, data }) => (
  <div style={{ textAlign: 'center' }}>
    <p>{name}</p>
    <Graph data={data} weekCount={4} />
  </div>
);

export default Task;
import React from 'react';
import Graph from 'react-activity-graph';
import UpdateTask from './UpdateTask';

const Task = ({ id, name, data, date, onCountChange, onNameChange, onRemoveClick, onDayClick }) => (
  <div style={{ textAlign: 'center' }}>
    <p>{name}</p>
    <Graph data={data} weekCount={4} onDayClick={onDayClick} />
    <UpdateTask id={id} name={name} data={data} date={date} onCountChange={onCountChange} onNameChange={onNameChange} onRemoveClick={onRemoveClick} />
  </div>
);

export default Task;
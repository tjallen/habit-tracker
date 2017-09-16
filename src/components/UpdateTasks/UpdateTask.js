import React from 'react';
import UpdateTaskLabel from './UpdateTaskLabel';
import UpdateTaskInput from './UpdateTaskInput';

const UpdateTask = (props) => {
  const {
    id,
    name,
    count,
    handleCountChange,
    handleRemoveClick,
    handleNameChange,
  } = props;
  return (
    <div>
      <UpdateTaskLabel text='name' />
      <UpdateTaskInput
        type="text"
        id={id}
        value={name}
        onValueChange={handleNameChange}
      />
      <UpdateTaskLabel text='count' />
      <UpdateTaskInput
        type='number'
        id={id}
        value={count}
        onValueChange={handleCountChange}
      />
      <a onClick={() => handleRemoveClick(id)}   ><button>Remove</button></a>
      <hr />
    </div>
  );
};

  export default UpdateTask;
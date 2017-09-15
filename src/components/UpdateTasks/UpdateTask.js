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
  } = props;
  return (
    <div>
      <UpdateTaskLabel text='name' />
      <UpdateTaskInput
        type="text"
        value={name}
      />
      <UpdateTaskLabel text='count' />
      <UpdateTaskInput
        type='number'
        id={id}
        value={count}
        handleCountChange={handleCountChange}
      />
      <a onClick={() => handleRemoveClick(id)}   ><button>Remove</button></a>
      <hr />
    </div>
  );
};

  export default UpdateTask;
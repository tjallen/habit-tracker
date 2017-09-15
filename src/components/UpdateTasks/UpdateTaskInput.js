import React from 'react';

const UpdateTaskInput = (props) => {
  const {
    type,
    handleCountChange,
    id
  } = props;
  const value = props.value || 0;
  return (
  <input
    type={type}
    value={value}
    onChange={(e) => handleCountChange(e, id)}
  />
  );
};

export default UpdateTaskInput;
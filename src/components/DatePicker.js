import React from 'react';

const DatePicker = ({ onDatePickerChange }) => {
  return (
    <div>
      <span>current date:</span>&nbsp;
      <input
        type="date"
        onChange={(e) => onDatePickerChange(e.target.value)} />
      <hr />
    </div>
  )
}

export default DatePicker;
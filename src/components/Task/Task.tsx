import React from 'react';

const Task= (id, status, description, onTaskCompleted, onDeleteTask) => (
  <li className='task'>
    <input
        className='checkmark'
        type="radio"
        checked= {status}
        onChange={() => onTaskCompleted(id)}
    />
    <span>{description}</span>
    <button onClick={() => onDeleteTask(id)}>Delete</button>
  </li>
);

export default Task;

import React, {memo} from 'react';
import '@fortawesome/fontawesome-free/js/all.js';

const Habit = memo(({habit, onIncrement, onDecrement, onDelete}) => {
    return (
    <li className='habit'>
      <span className="habit-name">{habit.name}</span>
      <span className="habit-count">{habit.count}</span>
      <button className='habit-button habit-increase' onClick={() => onIncrement(habit)}>
        <i className="fas fa-plus-circle"></i>
      </button>
      <button className='habit-button habit-decrease' onClick={() => onDecrement(habit)}>
        <i className="fas fa-minus-circle"></i>
      </button>
      <button className='habit-button habit-delete' onClick={()=> onDelete(habit)}>
        <i className="fas fa-trash"></i>
      </button>
    </li>
  )
});

export default Habit;
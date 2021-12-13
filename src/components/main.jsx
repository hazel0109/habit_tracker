import React, {memo} from 'react';
import AddHabit from './addHabit';
import Habits from './habits';

const Main = memo(({habits, onAddHabits, onIncrement, onDecrement, onDelete, onReset}) => {
    return (
      <div className='main'>
        <AddHabit onAddHabits={onAddHabits}/>
        <Habits 
          habits={habits} 
          onIncrement={onIncrement} 
          onDecrement={onDecrement} 
          onDelete={onDelete}
        />
        <button className='reset-btn' onClick={() => onReset()}>Reset All</button>
      </div>
    );
})

export default Main;
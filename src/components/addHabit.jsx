import React, { memo } from 'react';

const AddHabit = memo(props => {
  const formRef = React.createRef();
  const inputRef = React.createRef();

  const handleAddBtn = (e) => {
    e.preventDefault();
    const input = inputRef.current.value;
    input && props.onAddHabits(input);
    formRef.current.reset();
  }

  return (
    <form ref={formRef} onSubmit={handleAddBtn} className='add-habit'>
      <input 
        className='add-input' 
        ref={inputRef}
        type="text" 
        placeholder='Habit' 
      />
      <button className='add-btn' type='submit' >Add</button>
    </form>
  );
});

export default AddHabit;
import React, { useState, useCallback } from 'react';
import Navbar from './navbar';
import Main from './main';

const Container = () => {
  const initHabits= [
    {id: 1, name: 'Reading', count: 3}, 
    {id: 2, name: 'Traveling', count: 1},
    {id: 3, name: 'Drinking water', count: 2},
  ]
  const [habits, setHabits] = useState(initHabits);

  const handleAddHabits = useCallback((name) => {
    const habit = {id: Date.now(), name, count: 0}
    setHabits(habits => [...habits, habit])
  }, []);

  const handleIncrement = useCallback((habit) => {
    setHabits(habits => habits.map(item => {
      if (item.id === habit.id) {
        return {...habit, count: habit.count + 1};
      } else {
        return item;
      }
    }));
  }, []);

  const handleDecrement = useCallback((habit) => {
    setHabits(habits => habits.map(item => {
      if (item.id === habit.id) {
        return {...habit, count: habit.count > 0 ? habit.count - 1 : 0};
      } else {
        return item;
      }
    }))
  }, [])

  const handleDelete = useCallback((habit) => {
    setHabits(habit => habits.filter((item, i) => item.id !== habit.id));
  }, [])

  const handleReset = useCallback(() => {
    setHabits(habits =>  habits.map((item) => {
      if (item.count !== 0) return {...item, count: 0};
      return item;
    }));
  },[])

  return( 
    <>
      <Navbar totalCount={habits.filter((item) => item.count > 0).length}/>
      <Main habits={habits} onAddHabits={handleAddHabits} onIncrement={handleIncrement} onDecrement={handleDecrement} onDelete={handleDelete} onReset={handleReset}/>
    </>
  )


}

export default Container;
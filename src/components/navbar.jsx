import React, { memo } from 'react';
import '@fortawesome/fontawesome-free/js/all.js';

const Navbar = memo(props => {
  return (
    <nav className='navbar'>
      <span className='navbar-logo'>
        <i className="fas fa-democrat"></i>
      </span>
      <span className='navbar-title'>Habit Tracker</span>
      <span className='navbar-count'>{props.totalCount}</span>
    </nav>
  );
});
export default Navbar;

// ({totalCount})
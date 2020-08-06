import React, { useState } from 'react';
import {useDarkMode} from "../hooks/useDarkMode"
import { Link} from "react-router-dom"

const Navbar = ({toggleMode, darkMode}) => {
  //  const [darkMode, setDarkMode] = useDarkMode(false);
  // const toggleMode = e => {
  //   e.preventDefault();
  //   setDarkMode(!darkMode);
  // };
  const toggleMode1 = (event ) => {
    event.preventDefault()
    toggleMode()
  }

  return (
    <nav className="navbar">
      <h1>Crypto Tracker</h1>
      
      <Link   to='/'>
      <button className="green">Home</button>
      </Link>

      <Link to='/something'>
       <button className="green">Something</button>
       </Link>

      <div className="dark-mode__toggle">
        <div
          onClick={toggleMode1}
          className={darkMode ? 'toggle toggled' : 'toggle'}
        />
      </div>
    </nav>
  );
};

export default Navbar;

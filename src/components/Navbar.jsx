import React, { useState } from 'react';
import {useDarkMode} from "../hooks/useDarkMode"

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

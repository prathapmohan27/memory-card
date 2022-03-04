import React from 'react';
import Score from './Score';
import logo from '../assets/logo.png';
function Header() {
  return (
    <header>
      <img src={logo} alt="luffy" />
      <Score />
    </header>
  );
}

export default Header;

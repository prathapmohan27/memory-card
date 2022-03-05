import React from 'react';
import Score from './Score';
import logo from '../assets/logo.png';
function Header(props) {
  return (
    <header>
      <img src={logo} alt="luffy" />
      <Score scores={props} />
    </header>
  );
}

export default Header;

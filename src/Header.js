import React from 'react';
import logo from './assets/images/Logo.svg';

function Header() {
  return (
    <header>
        <img src={logo} alt="Little Lemon Logo" />
      {/* Header content here */}
    </header>
  );
}

export default Header;

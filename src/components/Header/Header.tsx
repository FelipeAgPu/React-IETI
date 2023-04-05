import React, { FC } from 'react';


interface HeaderProps {}

const Header: FC<HeaderProps> = () => (
  <header className='header'>
    <h1 style={{ color: "#212121", fontSize: "2.5rem", fontWeight: "bold" }}>React Todo App</h1>
  </header>
);

export default Header;

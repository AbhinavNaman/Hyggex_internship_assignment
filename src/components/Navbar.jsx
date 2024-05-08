import React from 'react';
import logo from '/logo.png';
import ListItem from './ListItem';

function Navbar() {
  return (
    <div className='flex flex-col md:flex-row justify-between items-center m-6'>
      <div className='md:ml-0  mb-4 md:mb-0'>
        <img src={logo} alt="Logo" />
      </div>
      <div className='flex justify-around pr-10'>
        <ul className='list-none flex flex-row'>
          <ListItem data="Home"/>
          <ListItem data="Flashcard"/>
          <ListItem data="Contact"/>
          <ListItem data="FAQ"/>
          <ListItem data="Login" />
        </ul>
      </div>
    </div>
  );
}

export default Navbar;

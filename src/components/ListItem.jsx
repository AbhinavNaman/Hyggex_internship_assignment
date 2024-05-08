import React from 'react';

const ListItem = ({ data }) => {
  return (
    <li
      className={`pl-4 pr-4 pt-2 pb-2 cursor-pointer ${
        data === 'Login'
          ? 'bg-gradient-to-r from-blue-700 to-blue-500 rounded-full text-white'
          : ''
      } hover:bg-gradient-to-r from-cyan-500 to-blue-500 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300 hover:rounded-full`}
    >
      {data}
    </li>
  );
};

export default ListItem;

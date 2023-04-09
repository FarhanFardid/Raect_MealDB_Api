import React from 'react';

import { NavLink } from 'react-router-dom';


const ActiveLink = ({to, children}) => {
    return (
        <NavLink
        to={to}
        className={({ isActive, isPending }) =>isActive ? "text-yellow-400 text-sm md:text-xl font-bold p-1 m-1 md:p-3 md:m-2 hover:text-yellow-600" : 'text-white text-sm md:text-xl  font-bold p-1 m-1 md:p-3 md:m-2 hover:text-slate-950'}
        
       >
          {children}
      </NavLink>
    );
};

export default ActiveLink;
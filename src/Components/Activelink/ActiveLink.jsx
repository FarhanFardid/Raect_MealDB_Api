import React from 'react';

import { NavLink } from 'react-router-dom';


const ActiveLink = ({to, children}) => {
    return (
        <NavLink
        to={to}
        className={({ isActive, isPending }) =>isActive ? "text-yellow-400 text-2xl font-bold p-3 m-2 hover:text-yellow-600" : 'text-white text-2xl font-bold p-3 m-2 hover:text-slate-950'}
        
       >
          {children}
      </NavLink>
    );
};

export default ActiveLink;
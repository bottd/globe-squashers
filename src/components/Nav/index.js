import React from 'react';
import {NavLink} from 'react-router-dom';
import './Nav.css';

export default function Nav() {
  return (
    <div className="Nav">
      <NavLink exact to="/" className="NavLink">
        HOME
      </NavLink>
      <NavLink to="/create" className="NavLink">
        CREATE
      </NavLink>
      <NavLink to="/browse" className="NavLink">
        BROWSE
      </NavLink>
    </div>
  );
}

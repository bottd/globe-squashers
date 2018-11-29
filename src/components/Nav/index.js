import React from 'react';
import {NavLink} from 'react-router-dom';
import './Nav.css';

export default function Nav() {
  return (
    <div className="Nav">
      <NavLink exact to="/globe-squashers" className="NavLink">
        HOME
      </NavLink>
      <NavLink to="/globe-squashers/create" className="NavLink">
        CREATE
      </NavLink>
      <NavLink to="/globe-squashers/browse" className="NavLink">
        BROWSE
      </NavLink>
    </div>
  );
}

import React from 'react';
import classes from './Navbar.module.css';
import {NavLink} from 'react-router-dom';

export const Navbar = () => {
  return (
    <div>
      <nav className={classes.nav}>
        <div className="item"><NavLink to="/profile">Profile</NavLink></div>
        <div className="item"><NavLink to="/dialogs">Messages</NavLink></div>
        <div className="item"><NavLink to="/news">News</NavLink></div>
        <div className="item"><NavLink to="/music">Music</NavLink></div>
        <div className="item"><NavLink to="/settings">Settings</NavLink></div>
      </nav>
    </div>
  );
};

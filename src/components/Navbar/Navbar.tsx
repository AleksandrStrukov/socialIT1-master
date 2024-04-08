import React from 'react';
import classes from './Navbar.module.css';
import {NavLink} from 'react-router-dom';

export const Navbar = () => {
  return (
    <div>
      <nav className={classes.nav}>
        <div className={classes.item}><NavLink to="/profile"
                                               className={({isActive}) => (isActive ? classes.active : classes.item)}>Profile</NavLink>
        </div>
        <div className={classes.item}><NavLink to="/dialogs"
                                               className={({isActive}) => (isActive ? classes.active : classes.item)}>Messages</NavLink>
        </div>
        <div className={classes.item}><NavLink to="/news"
                                               className={({isActive}) => (isActive ? classes.active : classes.item)}>News</NavLink>
        </div>
        <div className={classes.item}><NavLink to="/music"
                                               className={({isActive}) => (isActive ? classes.active : classes.item)}>Music</NavLink>
        </div>
        <div className={classes.item}><NavLink to="/settings"
                                               className={({isActive}) => (isActive ? classes.active : classes.item)}>Settings</NavLink>
        </div>
      </nav>
    </div>
  );
};

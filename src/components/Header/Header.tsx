import React from 'react';
import classes from './Header.module.css';
import {NavLink} from 'react-router-dom';

export const Header = () => {
  return (
    <div className={classes.header}>
      <header>
        <NavLink to='/header'>
          <img
            src="https://freepngimg.com/thumb/despicable_me/60195-minion-bob-the-minions-stuart-download-free-image.png" />
        </NavLink>

      </header>
    </div>
  );
};

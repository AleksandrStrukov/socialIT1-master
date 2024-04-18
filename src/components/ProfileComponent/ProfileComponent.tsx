import React from 'react';
import classes from './ProfileComponent.module.css';
import {MyPosts} from './posts/MyPosts';
import {ProfileInfo} from './ProfileInfo/ProfileInfo';
import {propsy} from '../../App';

export const ProfileComponent = (props: propsy) => {
  return (
    <div className={classes.contentProfile}>
      <ProfileInfo image="https://media.collegetimes.com/uploads/2016/10/24200002/perfect.jpg" />
      <MyPosts {...props} />
    </div>
  );
};

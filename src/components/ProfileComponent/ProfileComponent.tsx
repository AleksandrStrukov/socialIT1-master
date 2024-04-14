import React from 'react';
import classes from './ProfileComponent.module.css';
import {MyPosts} from './posts/MyPosts';
import {ProfileInfo} from './ProfileInfo/ProfileInfo';
import {state} from '../Redux/state';

export const ProfileComponent = (props: state) => {
  return (
    <div className={classes.contentProfile}>
      <ProfileInfo image="https://media.collegetimes.com/uploads/2016/10/24200002/perfect.jpg" />
      <MyPosts {...props} />
    </div>
  );
};

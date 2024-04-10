import React from 'react';
import classes from './ProfileComponent.module.css';
import {MyPosts} from './posts/MyPosts';
import {ProfileInfo} from './ProfileInfo/ProfileInfo';
import {posts} from '../../index';

export const ProfileComponent = (props: posts[]) => {
  return (
    <div className={classes.contentProfile}>
      <ProfileInfo image="https://media.collegetimes.com/uploads/2016/10/24200002/perfect.jpg" />
      <MyPosts {...props} />
    </div>
  );
};

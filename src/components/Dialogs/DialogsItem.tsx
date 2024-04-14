import s from './Dialogs.module.css';
import {NavLink} from 'react-router-dom';
import React from 'react';

type DialogsItem = {
  name: string;
  id: string;
  image: string;
};

export const DialogsItem = (props: DialogsItem) => {
  return (
    <div className={s.dialogs}>
      <div>
        {/*<img src={props.image} />*/}
        <NavLink to={'/dialogs/' + props.id} className={({isActive}) => (isActive ? s.active : s.dialogs)}>
          <img src={props.image} />
          {props.name}
        </NavLink>
      </div>
    </div>
  );
};

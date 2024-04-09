import s from './Dialogs.module.css';
import {NavLink} from 'react-router-dom';
import React from 'react';

type DialogsItem = {
  name: string
}

export const DialogsItem = (props: DialogsItem) => {

  return <div>
    <div className={s.dialogs}><NavLink to={'/dialogs/' + props.name}
                                        className={({isActive}) => (isActive ? s.active : s.dialogs)}>{props.name}</NavLink>
    </div>
  </div>
}
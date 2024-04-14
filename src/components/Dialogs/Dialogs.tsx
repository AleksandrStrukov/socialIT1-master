import React from 'react';
import s from './Dialogs.module.css';
import {DialogsItem} from './DialogsItem';
import {Message} from './Messages';
import {state} from '../Redux/state';

export const Dialogs = (props: state) => {
  return (
    <div>
      <div className={s.content}>
        <div className={s.dialogs}>
          {props.dialogs.map(dialog => (
            <DialogsItem name={dialog.name} id={dialog.id} image={dialog.image} />
          ))}
        </div>
        <div className={s.messages}>
          {props.messages.map(message => (
            <Message message={message.message} id={message.id} image={message.image} />
          ))}
        </div>
      </div>
    </div>
  );
};

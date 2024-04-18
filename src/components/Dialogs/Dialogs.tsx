import React from 'react';
import s from './Dialogs.module.css';
import {DialogsItem} from './DialogsItem';
import {Message} from './Messages';
import {propsy} from '../../App';

export const Dialogs = (props: propsy) => {
  return (
    <div>
      <div className={s.content}>
        <div className={s.dialogs}>
          {props.state.dialogs.map(dialog => (
            <DialogsItem name={dialog.name} id={dialog.id} image={dialog.image} />
          ))}
        </div>
        <div className={s.messages}>
          {props.state.messages.map(message => (
            <Message message={message.message} id={message.id} image={message.image} />
          ))}
        </div>
      </div>
    </div>
  );
};

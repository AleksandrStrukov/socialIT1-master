import React from 'react';
import s from './Dialogs.module.css';
import {NavLink} from 'react-router-dom';
import {DialogsItem} from './DialogsItem';
import {Message} from './Messages';


export const Dialogs = () => {
  return <div>
    <div className={s.content}>
      <div className={s.dialogs}>
        <DialogsItem name="Stepan" />
        <DialogsItem name="Sasha" />
        <DialogsItem name="Petr" />
        <DialogsItem name="Vosol" />
      </div>
      <div className={s.messages}>

        <Message message="Hey how are you?"
                 image="https://www.clipartmax.com/png/small/93-935110_minion-43-minions-png.png" />
        <Message message="I am on holiday!"
                 image="https://e7.pngegg.com/pngimages/254/719/png-clipart-minions-kevin-hawaiian-minions-hula-computer-icons-minion-heroes-despicable-me-thumbnail.png" />
        <Message message="What is the weather today?"
                 image="https://e7.pngegg.com/pngimages/328/553/png-clipart-three-minions-character-in-denim-jumpers-desktop-1080p-high-definition-video-minions-heroes-film-thumbnail.png" />
        <Message message="Hey!Where are you?"
                 image="https://e7.pngegg.com/pngimages/847/351/png-clipart-stuart-the-minion-bob-the-minion-kevin-the-minion-minions-minion-stuart-cartoon-desktop-wallpaper-thumbnail.png" />
      </div>
    </div>
    ;
  </div>
    ;


};
;
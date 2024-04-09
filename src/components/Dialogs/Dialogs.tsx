import React from 'react';
import s from './Dialogs.module.css';
import {DialogsItem} from './DialogsItem';
import {Message} from './Messages';

type dialogs = {
  name: string;
  id: string;
};

export const Dialogs = () => {
  let dialogsData: dialogs[] = [
    {name: 'Stepan', id: '1'},
    {name: 'Sasha', id: '2'},
    {name: 'Petr', id: '3'},
    {name: 'Vosol', id: '4'},
  ];

  let messagesData = [
    {
      message: 'Hey how are you?',
      image: 'https://www.clipartmax.com/png/small/93-935110_minion-43-minions-png.png',
      id: '1',
    },
    {
      message: 'I am on holiday!',
      image:
        'https://e7.pngegg.com/pngimages/254/719/png-clipart-minions-kevin-hawaiian-minions-hula-computer-icons-minion-heroes-despicable-me-thumbnail.png',
      id: '2',
    },
    {
      message: 'What is the weather today?',
      image:
        'https://e7.pngegg.com/pngimages/328/553/png-clipart-three-minions-character-in-denim-jumpers-desktop-1080p-high-definition-video-minions-heroes-film-thumbnail.png',
      id: '3',
    },
    {
      message: 'Hey!Where are you?',
      image:
        'https://e7.pngegg.com/pngimages/847/351/png-clipart-stuart-the-minion-bob-the-minion-kevin-the-minion-minions-minion-stuart-cartoon-desktop-wallpaper-thumbnail.png',
      id: '4',
    },
  ];

  return (
    <div>
      <div className={s.content}>
        <div className={s.dialogs}>
          {dialogsData.map(dialog => (
            <DialogsItem name={dialog.name} id={dialog.id} />
          ))}
        </div>
        <div className={s.messages}>
          {messagesData.map(message => (
            <Message message={message.message} image={message.image} id={message.id} />
          ))}
        </div>
      </div>
    </div>
  );
};

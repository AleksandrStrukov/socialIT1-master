import React from 'react';
import s from '../Navbar/Navbar.module.css';


export const Dialogs = () => {
  return <div>
    <div className={s.content}>
      <div className={s.dialogs}>
        <div>Stepan</div>
        <div>Fedia</div>
        <div>Kolya</div>
        <div>Darisha</div>
      </div>
      <div className={s.messages}>
        <div>
          <img src="https://www.clipartmax.com/png/small/93-935110_minion-43-minions-png.png" />
          Hey how are you?
        </div>
        <div><img
          src="https://e7.pngegg.com/pngimages/328/553/png-clipart-three-minions-character-in-denim-jumpers-desktop-1080p-high-definition-video-minions-heroes-film-thumbnail.png" />
          What is the weather today?
        </div>
        <div>
          <img src="https://e7.pngegg.com/pngimages/847/351/png-clipart-stuart-the-minion-bob-the-minion-kevin-the-minion-minions-minion-stuart-cartoon-desktop-wallpaper-thumbnail.png" />
          Hey!Where are you?
        </div>
        <div>
          <img src="https://e7.pngegg.com/pngimages/254/719/png-clipart-minions-kevin-hawaiian-minions-hula-computer-icons-minion-heroes-despicable-me-thumbnail.png" />
          I am on holiday!
        </div>
      </div>
    </div>;
  </div>



};
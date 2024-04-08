import React from 'react';
import s from '../Navbar/Navbar.module.css'
export const Music = () => {
  return <div className={s.content}>
    <audio controls>
      <source
        id="audio-player"
        src="https://www.101soundboards.com/sounds/1460985-banana-2"
        type="audio/mp3"
      />
    </audio>
  </div>;
};

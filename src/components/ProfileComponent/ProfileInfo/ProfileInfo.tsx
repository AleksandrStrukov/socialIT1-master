import React from 'react';


type ProfileInfo = {
  image: string
}

export const ProfileInfo = (props: ProfileInfo) => {
  return <div>
    <img src={props.image} />
  </div>
}
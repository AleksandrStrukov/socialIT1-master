import React from 'react';

type Message = {
  message: string
  image: string
}
export const Message = (props: Message) => {
  return <div>
    <div>
      <img src={props.image} />
      {props.message}
    </div>
  </div>
}
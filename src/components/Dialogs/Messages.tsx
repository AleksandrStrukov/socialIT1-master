import React from 'react';
import {message} from '../Redux/state';

export const Message = (props: message) => {
  return (
    <div>
      <div>
        <img src={props.image} />
        {props.message}
      </div>
    </div>
  );
};

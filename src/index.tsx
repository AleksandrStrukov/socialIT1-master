import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from 'react-router-dom';

export type posts = {
  message: string;
  image: string;
  id: string;
};

let posstsData: posts[] = [
  {
    message: 'I am fine!',
    image: 'https://www.freepnglogos.com/uploads/minions-png/minions-png-shy-minion-transparent-png-stickpng-31.png',
    id: '1',
  },
  {
    message: 'I am Web developer!',
    image: 'https://www.freepnglogos.com/uploads/minions-png/dancing-minions-transparent-png-stickpng-18.png',
    id: '2',
  },
  {
    message: ' I am in USA!',
    image:
      'https://www.freepnglogos.com/uploads/minions-png/minions-png-minion-concerned-transparent-png-stickpng-24.png',
    id: '3',
  },
];

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App {...posstsData} />
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

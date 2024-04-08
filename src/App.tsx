import React from 'react';
import './App.css';
import {Header} from './components/Header/Header';
import {Navbar} from './components/Navbar/Navbar';
import {ProfileComponent} from './components/ProfileComponent/ProfileComponent';
import {Route, Routes} from 'react-router-dom';
import {Dialogs} from './components/Dialogs/Dialogs';

function App() {
  return (
    <div className="wrapper">
      <Header />
      <Navbar />
      <Routes>
        <Route path='/dialogs' element={<Dialogs/>} />
        <Route path='/profile' element={<ProfileComponent/>} />

      </Routes>
    </div>
  );
}

export default App;

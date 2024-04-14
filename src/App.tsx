import React from 'react';
import './App.css';
import {Header} from './components/Header/Header';
import {Navbar} from './components/Navbar/Navbar';
import {ProfileComponent} from './components/ProfileComponent/ProfileComponent';
import {Route, Routes} from 'react-router-dom';
import {Dialogs} from './components/Dialogs/Dialogs';
import {News} from './components/News/News';
import {Music} from './components/Music/Music';
import {state} from './components/Redux/state';

function App(props: state) {
  return (
    <div className="wrapper">
      <Header />
      <Navbar />
      <Routes>
        <Route path="/dialogs" element={<Dialogs {...props} />} />
        <Route path="/profile" element={<ProfileComponent {...props} />} />
        <Route path="/news" element={<News />} />
        <Route path="/music" element={<Music />} />
      </Routes>
    </div>
  );
}

export default App;

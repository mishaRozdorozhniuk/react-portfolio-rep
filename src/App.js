import React from 'react';
import Categoris from './components/Categories/Categories';
import Contact from './components/Contact/Contact';
import Featured from './components/Featured/Featured';

import Home from './components/Home/Home';
import './components/Home/Home.css';
import Recent from './components/Recent/Recent';
import './App.css';

const App = () => {
  return (
    <>
      <Home />
      <Categoris />
      <div className="bg">
        <Featured />
        <Recent />
      </div>

      <Contact />
    </>
  );
};

export default App;

import React from 'react';
import './App.css';
import Header from './components/Header';
import Presentation from './components/Presentation';
import Experience from './components/Experience';
import experiences from './data/data';

function App() {
  return (
    <div>
      <Header />
      <Presentation />
      <Experience experienceData={experiences} />
    </div>
  );
}

export default App;

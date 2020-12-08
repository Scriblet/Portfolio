import React from 'react';
import './App.css';
import Header from './components/Header';
import Presentation from './components/Presentation';
import ExperienceList from './components/ExperienceList';
import experienceData from './data/data';
import Values from './components/Values';

function App() {
  return (
    <div>
      <Header />
      <Presentation />
      <ExperienceList experienceData={experienceData} />
      <Values />
    </div>
  );
}

export default App;

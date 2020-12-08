import React from 'react';
import './App.css';
import Header from './components/Header';
import Presentation from './components/Presentation';
import ExperienceList from './components/ExperienceList';
import experienceData from './data/data';
import Values from './components/Values';
import Skills from './components/Skills';

function App() {
  return (
    <div className="mother">
      <Header />
      <Presentation />
      <ExperienceList experienceData={experienceData} />
      <Values />
      <Skills />
    </div>
  );
}

export default App;

import React from 'react';
import './App.css';
import Header from './components/Header';
import Presentation from './components/Presentation';
import ExperienceList from './components/ExperienceList';
import experienceData from './data/data';

function App() {
  return (
    <div>
      <Header />
      <Presentation />
      <ExperienceList experienceData={experienceData} />
    </div>
  );
}

export default App;

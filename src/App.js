import React from 'react';
import './App.css';
import Header from './components/Header';
import Presentation from './components/Presentation';
import ExperienceList from './components/ExperienceList';
import experienceData from './data/experienceData';
import skillsData from './data/skillsData';
import Values from './components/Values';
import SkillsList from './components/SkillsList';

function App() {
  return (
    <div className="mother">
      <Header />
      <Presentation />
      <ExperienceList experienceData={experienceData} />
      <Values />
      <SkillsList skillsData={skillsData} />
    </div>
  );
}

export default App;

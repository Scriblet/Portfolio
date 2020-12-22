import React from 'react';
import './App.css';
import Header from './components/Header';
import Presentation from './components/Presentation';
import ExperienceList from './components/ExperienceList';
import experienceData from './data/experienceData';
import skillsData from './data/skillsData';
import Values from './components/Values';
import SkillsList from './components/SkillsList';
import Portfolio from './components/Portfolio';
import Github from './components/Github';
import Contact from './components/Contact';

function App() {
  return (
    <div className="mother">
      <Header />
      <Presentation />
      <ExperienceList experienceData={experienceData} />
      <Values />
      <SkillsList skillsData={skillsData} />
      <Portfolio />
      <Github />
      <Contact />
    </div>
  );
}

export default App;

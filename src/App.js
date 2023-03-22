import React from 'react';
import { Route, Routes } from 'react-router-dom';
import About from './pages/About';
import Home from './pages/Home/Home';
import Projects from './pages/Projects/Projects';
import Skills from './pages/Skills/Skills';

function App() {
  return (
    <Routes>
      <Route path="/" element={ <Home /> }/>
      <Route path="/projetos" element={ <Projects /> }/>
      <Route path="/skills" element={ <Skills /> }/>
      <Route path="/sobre" element={ <About /> }/>
    </Routes>
  );
}

export default App;

import React from 'react';
import { Route, Routes } from "react-router-dom";
import './index.css'
import Main from './components/Main.js';
import Project from './components/Project.js';
import About from './components/About.js';
import Contact from './components/contact.js';





function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/Project' element={<Project />} />
        <Route path='/About' element={<About />} />
        <Route path='/Contact' element={<Contact />} />

      </Routes>
    </>

  );
}

export default App;

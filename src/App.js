import React from 'react';
import { Route, Routes } from 'react-router-dom';

import 'bootstrap-icons/font/bootstrap-icons.css';

import NavBar from './pages/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Blobs from './pages/Blobs';
import Projects from './pages/Projects';
import Resume from './pages/Resume';
import Contact from './pages/Contact';

import { ThemeProvider } from './ThemeContext';

function App() {

  return (
    <div>
      <ThemeProvider>
        <NavBar />
        <Blobs />
          <div>
            <Routes>
              <Route path="/" element={<Home/>} />
              <Route path="/about" element={<About/>} />
              <Route path="/projects" element={<Projects/>} />
              <Route path="/resume" element={<Resume/>} />
              <Route path="/contact" element={<Contact/>} />
            </Routes>
          </div>
        
      </ThemeProvider>
    </div>
  );
}

export default App;

import logo from './logo.svg';
import './App.css';
import Nav from './components/Nav';
import Footer from './components/Footer';
import Contact from './components/Contact';
import Resume from './components/Resume';
import Skills from './components/Skills';
import Project from './components/Project';
import About from './components/About';
import React from 'react';

function App() {
  return (
    <div className="App">
      <Nav/>
      <About/>
      <Project/>
      <Skills />
      <Resume />
      <Contact />
      <Footer/>
    </div>
  );
}

export default App;

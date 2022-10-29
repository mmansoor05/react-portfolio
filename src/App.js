import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom';
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
      <React.Fragment>
        <Router  basename={process.env.PUBLIC_URL}>
        <Nav/>
      <About/>
      <Project/>
      <Skills />
      <Resume />
      <Contact />
      <Footer/>
      </Router>
    </React.Fragment>
    </div>
  );
}

export default App;

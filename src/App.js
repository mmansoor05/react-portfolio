import logo from './logo.svg';
import './App.css';
import Nav from './components/Nav';
import Footer from './components/Footer';
import Contact from './components/Contact';
import Resume from './components/Resume';
import Skills from './components/Skills';
import Project from './components/Project';
import About from './components/About';
import {Routes, Route} from 'react-router-dom';
import React from 'react';

const header = document.querySelector("header");
const sectionOne = document.querySelector(".top-section");

// const navObserver = new IntersectionObserver((entries, observer) => {
//   const entry = entries[0];
//   if(!entry.isIntersecting) {
//     header.classList.add("on-scroll");
//   }else{
//     header.classList.remove("on-scroll")
//   }
// }, {});

// navObserver.observe(sectionOne)


function App() {
  return (
    <div className="App">
       <Routes>
          <Route path="/" element={<About/>}/>
          <Route path="/project" element={<Project/>}/>
          <Route path="/skills" element={<Skills/>}/>
          <Route path="/resume" element={<Resume/>}/>
          <Route path="/contact" element={<Contact/>}/>
      </Routes>
      <Nav/>
      <Footer/>
    </div>
  );
}

export default App;

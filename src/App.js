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

import React from 'react'
import {FiMail} from "react-icons/fi"
import {AiOutlineLinkedin} from "react-icons/ai"
import {FiGithub} from "react-icons/fi"
import {Routes, Route, Link} from 'react-router-dom';
import Project from './Project';

class Nav extends React.Component{
    render(){
        return( 
        <header class="on-scroll">
        <nav class="navbar navbar-expand-sm navbar-light">
        <img class="logo" src="assets/images/icon/logo.png" alt="logo" width="250px" height="250px"/>
        <div class="container">

            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false"
                aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                <span class="navbar-toggler-icon"></span>
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarNav"> 
                <ul class="navbar-nav mx-auto" id="thisnav">
                {/* <li class="nav-item">
                <img src="assets/images/icon/logo.png" alt="logo" width="250px"/>
                    </li> */}
                    <li class="nav-item">
                    <Link to="/">
                        <a href="#about" class="nav-link"><span data-hover="About">About</span></a>
                        </Link>
                    </li>
                    <li class="nav-item">
                        <Link to="/project">
                        <a href="#project" class="nav-link"><span data-hover="Projects">Projects</span></a>
                        </Link>
                    </li>
                    <li class="nav-item">
                    <Link to="/skills">
                      <a href="#skills" class="nav-link"><span data-hover="Skills">Skills</span></a>
                      </Link>
                  </li>
                    <li class="nav-item">
                    <Link to="/resume">
                        <a href="#resume" class="nav-link"><span data-hover="Resume">Resume</span></a>
                        </Link>
                    </li>
                    <li class="nav-item">
                    <Link to="/contact">
                        <a href="#contact" class="nav-link"><span data-hover="Contact">Contact</span></a>
                        </Link>
                    </li>
                </ul>

                <ul class="navbar-nav ml-lg-auto">
                  <div class="ml-lg-4">
                    <div class="icons">
                      <a href="https://github.com/mmansoor05" target="_blank"> 
                      
                      <FiGithub color="green"/>
                    </a>
                    <a href="https://www.linkedin.com/in/mahnoor-mansoor-27a498215/" target="_blank">
                      <AiOutlineLinkedin  color="green" /> 
        
                    </a>
                    <a href="mailto:mahnoormansoor05@gmail.com" target="_blank"> 
                    <FiMail color="green"/>
                    </a>
                  </div>
                  </div>
              </ul>
            </div>
        </div>
    </nav>
    </header>

            )
    }
}

export default Nav;
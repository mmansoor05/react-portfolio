import React from 'react'
import {FiMail} from "react-icons/fi"
import {AiOutlineLinkedin} from "react-icons/ai"
import {FiGithub} from "react-icons/fi"

class Nav extends React.Component{
    render(){
        return( 
        <nav class="navbar navbar-expand-sm navbar-light">
        <div class="container">

            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false"
                aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                <span class="navbar-toggler-icon"></span>
                <span class="navbar-toggler-icon"></span>
            </button>

            {/* <img src="assets/images/undraw/4853433.jpg"class="img-fluid" alt="jpeg image"/>  */}
            
            <div class="collapse navbar-collapse" id="navbarNav"> 
                <ul class="navbar-nav mx-auto" id="thisnav">
                    <li class="nav-item">
                        <a href="#about" class="nav-link"><span data-hover="About">About</span></a>
                    </li>
                    <li class="nav-item">
                        <a href="#project" class="nav-link"><span data-hover="Projects">Projects</span></a>
                    </li>
                    <li class="nav-item">
                      <a href="#skills" class="nav-link"><span data-hover="Skills">Skills</span></a>
                  </li>
                    <li class="nav-item">
                        <a href="#resume" class="nav-link"><span data-hover="Resume">Resume</span></a>
                    </li>
                    <li class="nav-item">
                        <a href="#contact" class="nav-link"><span data-hover="Contact">Contact</span></a>
                    </li>
                </ul>


                <ul class="navbar-nav ml-lg-auto">
                  <div class="ml-lg-4">
                    <div class="icons">
                      <a href="https://github.com/mmansoor05" target="_blank"> 
                      
                      <FiGithub color="white"/>
                    </a>
                    <a href="https://www.linkedin.com/in/mahnoor-mansoor-27a498215/" target="_blank">
                      <AiOutlineLinkedin  color="white" /> 
        
                    </a>
                    <a href="mailto:mahnoormansoor05@gmail.com" target="_blank"> 
                    <FiMail color="white"/>
                    </a>
                  </div>
                  </div>
              </ul>
            </div>
        </div>
    </nav>

            )
    }
}

export default Nav;
import React from 'react'
import {FaPython} from "react-icons/fa"
import {SiAnsible} from "react-icons/si"
import {SiPostman} from "react-icons/si"
import {AiFillHtml5} from "react-icons/ai"
import {IoLogoCss3} from "react-icons/io"
import {SiJavascript} from "react-icons/si"
import {FaNode} from "react-icons/fa"
import {SiMysql} from "react-icons/si"
import {SiMongodb} from "react-icons/si"
import {FiFigma} from "react-icons/fi"
import {DiReact} from "react-icons/di"
import {DiIllustrator} from "react-icons/di"
import {DiPhotoshop} from "react-icons/di"

class Skills extends React.Component{
    render(){
        return(
          <section class="skills" id="skills">
          <h2 class="skill-header">My Skills</h2>
    
          <div class="skills-wrapper">
            <div class="gfg">
              <FaPython class="icon icon-card"/>
              <p class="first-text">Python</p>
      
                <SiAnsible class="icon icon-card"/>
                <p class="second-text">Ansible</p>
              
              <SiPostman class="icon icon-card"/>
              <p class="third-text">Postman</p>
              
               <DiReact class="icon icon-card"/>
               <p class="fourth-text">React</p>
             
            </div>
              <br/>
            {/* <div class="second-set animate__animated animate__pulse"> */}
            <div class="gfg">
              <AiFillHtml5 class="icon icon-card"/>
              <p class="fifth-text">HTML</p>
             
              <IoLogoCss3 class="icon icon-card"/>
              <p class="sixth-text">CSS</p>
              
              <SiJavascript class="icon icon-card"/>
              <p class="seventh-text">JavaScript</p>
              <FaNode class="icon icon-card"/>
              <p class="eigth-text">Node.js</p>
            </div>
            <br/>

            {/* <div class="second-set animate__animated animate__pulse"> */}
            <div class="gfg">
            
            <DiIllustrator class="icon icon-card"/>
            <p class="ninth-text">Adobe Illustrator</p>

            <FiFigma class="icon icon-card"/>
            <p class="tenth-text">Figma</p>
              
            <DiPhotoshop class="icon icon-card"/>
            <p class="eleventh-text">Adobe Photoshop</p>
              
            </div>

            <br/>
            {/* <div class="second-set animate__animated animate__pulse"> */}
            <div class="gfg">
            <SiMysql class="icon icon-card"/>
            <p class="twelveth-text">MySQL</p>

            <SiMongodb class="icon icon-card"/>
            <p class="thirteenth-text">MongoDB</p>
             
            </div>
          </div>
        </section>





      //     <section class="contact py-5" id="skills">
      //   <div class="container">
      //     <div class="row">
            
      //       <div class="col-lg-11 text-center mx-auto col-12">
      //         <h2>My Skills</h2>
  
      //         <div class="col-lg-8 mx-auto">
  
      //           <div class="item">
      //                  <div class="container">
      //                   <div class="skills-wrapper">
      //                  <div class="gfg"> 
      //                   <FaPython class="icon icon-card"/>
      //                   <p class="first-text">Python</p>
      //                   {/* <p text-align="center" class = "skills"> Python </p> */}
                      
      //                   <SiAnsible class="icon icon-card"/>
      //                   <p class="second-text">Ansible</p>
      //                   {/* <p text-align="center" class = "skills">  Ansible 
      //                   </p> */}

      //                   <SiPostman class="icon icon-card"/>
      //                   <p class="third-text">Postman</p>
              
      //                   <DiReact class="icon icon-card"/>
      //                   <p class="fourth-text">React</p>
      //                   {/* <p text-align="center" class = "skills">  Postman </p> */}
      //                   </div>
                       
      //                    <p text-align="center" class = "skills"> HTML</p>
      //                    <p text-align="center" class = "skills"> CSS</p>
      //                    <p text-align="center" class = "skills"> JavaScript</p>
                       
                       
                         
      //                   <p text-align="center" class = "skills"> React.js</p>
      //                   <p text-align="center" class = "skills"> Express.js</p>
      //                   <p text-align="center" class = "skills"> Node.js</p>
                       
                        
      //                   <p text-align="center" class = "skills"> MySQL</p>
      //                  <p text-align="center" class = "skills"> MongoDB</p>
                      
                       
      //                   <p text-align="center" class = "skills"> Figma</p>
      //                   <p text-align="center" class = "skills"> Adobe Photoshop</p>
      //                   <p text-align="center" class = "skills"> Adobe Illustrator</p>
                        
      //               </div>
  
                
                    
      //             </div>
  
      //     </div>
      //   </div>
      //   </div>
      //   </div>
      //   </div>
      // </section>





      //was already commented out
        // <section class="contact py-5" id="skills">
        // <div class="container">
                
        //         <div class="row">
        //           <div class="col-lg-11 text-center mx-auto col-12">
        //           <h2>Skills</h2>
  
        //               <div class="col-lg-8 mx-auto">
  
        //               <div class="container">
        //                 <p text-align="center" class = "skills"> Python</p>
        //                 <p text-align="center" class = "skills"> Ansible</p>
        //                 <p text-align="center" class = "skills"> Postman</p>
        //                 <br/>
        //                 <p text-align="center" class = "skills"> HTML</p>
        //                 <p text-align="center" class = "skills"> CSS</p>
        //                 <p text-align="center" class = "skills"> JavaScript</p>
        //                 <br/>
        //                 <p text-align="center" class = "skills"> React.js</p>
        //                 <p text-align="center" class = "skills"> Express.js</p>
        //                 <p text-align="center" class = "skills"> Node.js</p>
        //                 <br/>
        //                 <p text-align="center" class = "skills"> MySQL</p>
        //                 <p text-align="center" class = "skills"> MongoDB</p>
        //                 <br/>
        //                 <p text-align="center" class = "skills"> Figma</p>
        //                 <p text-align="center" class = "skills"> Adobe Photoshop</p>
        //                 <p text-align="center" class = "skills"> Adobe Illustrator</p>
        //             </div>
  
  
        //             </div> 
        //               </div>
        //               </div>
        //               </div>
        //               </section>
            )
    }
}

export default Skills;

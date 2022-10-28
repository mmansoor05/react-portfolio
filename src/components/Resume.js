import React from 'react'
import {VscBriefcase} from "react-icons/vsc"
import {FaGraduationCap} from "react-icons/fa"


class Resume extends React.Component{
    render(){
        return(<section class="project py-5" id="resume">
        <div class="container">
                <div class="row">
                  <div class="col-lg-11 text-center mx-auto col-12">
                    <div class="row">
                      <div class="col-md-12 col-md-offset-0">

                        <ul class="timeline">
                          <li class="timeline-heading text-center animate-box fadeInUp animated-fast">
                            <div><h2>Work Experience</h2></div>
                          </li>

                          <li class="animate-box timeline-unverted fadeInUp animated-fast">
                            <div class="timeline-badge">
                             
                            <VscBriefcase/>
                              {/* <img src="assets/images/icon/briefcase.png" class="img-fluid"  width="15px" height="15px"/> */}
                            </div>
                            
                            <div class="timeline-panel">
                                <div class="portfolio-background">
                                  <div class="title-company">
                                <h3 class="timeline-title">Technology Intern</h3>
                                <span class="company">Wells Fargo - 2022 - Charlotte, NC</span>
                                   </div>
                                <div class="text">
                                <p>Interned for three months with Platform Engineering Team. Worked on automating the fail-over process to improve Recovery Time Objective(RTO).</p>
                                 <br/> 
                                  <p text-align="center" class = "resume-button"> Ansible</p>
                                  <p text-align="center" class = "resume-button"> Postman</p>
                                  <p text-align="center" class = "resume-button"> REST APIs</p>
                                </div>
                              </div>
                            </div>
                          </li>

                          <li class="timeline-inverted animate-box fadeInUp animated-fast">
                            <div class="timeline-badge">
                              <VscBriefcase/>
                              {/* <img src="assets/images/icon/briefcase.png" class="img-fluid" width="15px" height="15px"/> */}
                            </div>
                            <div class="timeline-panel">
                                <div class ="portfolio-background">
                                  <div class="title-company">
                                <h3 class="timeline-title">HelpDesk Analyst</h3>
                                <span class="company">Medsphere Systems Corporation - 2021 - 2022</span>
                                  </div>
                                <div class="text">
                                <p>Worked with different clients helping users by diagnosing and resoling a range of hardware, network and software issues.</p>
                                
                                
                                  <p text-align="center" class = "resume-button"> Active Directory</p>
                                  <p text-align="center" class = "resume-button">SharePoint</p>
                                  <p text-align="center" class = "resume-button">Jira</p>
                                </div>
                              </div>
                            </div>
                          </li>
                        
              
                          <br/>
                          <li class="timeline-heading text-center animate-box fadeInUp animated-fast">
                            <div><h2>Education</h2></div>
                          </li>
                          
                          
                          <li class="animate-box timeline-unverted fadeInUp animated-fast">
                            <div class="timeline-badge">
                              <FaGraduationCap />
                              {/* <img src="assets/images/icon/graduation-cap.png" class="img-fluid" width="18px" height="18px"/> */}
                            </div>
                            <div class="timeline-panel">
                                <div class ="portfolio-background">
                                  <div class="title-company">
                                <h3 class="timeline-title">Bachelor of Science in Computer Science</h3>
                                <span class="company">Oregon State University - 2021 - 2024</span>
                                  </div>
                              <div class="text"> 
                                <p><b>Relevant Coursework</b><br/> Introducton to Programming I <br/> Introducton to Programming II <br/>Computer Architecture <br/> Data Structures <br/> Analysis of Algorithms <br/> Web Development</p>
                              </div>
                            </div>
                            </div>
                          </li>
                          
                          
                          </ul>
                      </div>
                    </div> 

                      </div>
                      </div>
                      </div>
                      </section>
            
           
            )
    }
}

export default Resume;
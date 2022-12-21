import React from 'react'

class About extends React.Component{
    render(){
        return(
        <section class="about full-screen d-lg-flex justify-content-center align-items-center" id="about">
         <section class="top-section">
            
        <div class="container">
            <div class="row">
                
                {/* <div class="col-lg-7 col-md-12 col-12 d-flex align-items-center"> */}
                <div class="col-lg-5 col-md-12 col-12">
                    <div class="about-image-svg">
                        <img src="assets/images/icon/Professional Photo.JPG" class="img-fluid" width="200px"/>
                    </div>
                </div>
                
                    <div class="about-text">
                         <small class="small-text">Welcome to <span class="mobile-block">my portfolio website!</span></small>
                        <h1 class="animated animated-text">
                            <span class="mr-2">Hello World, I'm </span>
                                    <span class="name">Mahnoor</span>
                        </h1>

                        <p class="about-para">I am a computer science student at Oregon State University and will be graduating in 2024. I am fond of front end development. If I am not working on my homework, you will find me taking long walks. And I love mountains more than beaches!
                        </p>
                        
                        <div class="custom-btn-group mt-4">
                          <a href="assets/Mansoor_Mahnoor.pdf" target="_blank" download class="btn mr-lg-2 custom-btn"><i class='uil uil-file-alt'></i> Download Resume</a>
                        </div>
                    </div>
                </div>
              
                {/* <div class="col-lg-5 col-md-12 col-12">
                    <div class="about-image-svg">
                        <img src="assets/images/icon/Professional Photo.JPG" class="img-fluid" width="350px" height="200px" />
                    </div>
                </div> */}

            </div>
        {/* </div> */}
    </section>
    </section>
            )
    }
}

export default About;

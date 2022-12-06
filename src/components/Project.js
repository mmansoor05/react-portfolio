import React from 'react'

class Project extends React.Component{
    render(){
        return( <section class="project py-5" id="project">
        <div class="container">
                
                <div class="row">
                  <div class="col-lg-11 text-center mx-auto col-12">

                    

                      <div class="col-lg-8 mx-auto">
                        <h2>My Projects</h2>
                      </div>

                      {/* <div className="float-container"> 

                      <div class="float-child">
                      <div class="portfolio-thumb portfolio-big">
                          <a href="assets/images/project/Project3.PNG">
                          <img src="assets/images/project/Project3.PNG"/>
                          </a>
                          <p class="description"><b>Pollutant Data Visualizer</b>&nbsp;&nbsp; A hackathon project for Oregon State University Beaverhacks Fall 2021 inspired by data visualization to understand the scope of a problem, particularly in regards to climate change and other large, almost unimaginable issues. This web application allows a user to select a state and a county to get information on the amount of different pollutants in the air. This was built using HTML, JavaScript, and CSS (with Bootstrap) to lay out the project and give it the functionality. We used EPA API to get data on the air quality of different locations. I worked on data visualization aspect and used the library Chart.js to make the graphs to show the pollutants based on user selection.
                          </p>
                          <em class="center">Winner - First Place(New Student)</em>
                        </div>
                        </div>

                        <div class="float-child">
                        <div class="portfolio-thumb portfolio-big">
                        <a href="assets/images/project/project2.jpg">
                        <img src="assets/images/project/project2.jpg" />
                        </a>
                        <p class="description"><b>Cortex: your second brain</b>&nbsp;&nbsp;A hackathon project for Hydrangea Hacks inspired by student's struggle of staying focused and motivated while going through their undergraduate studies during the pandemic. We wanted to create a productivity app to help students get organized for their school year, and stay motivated to finish their tasks. Cortex breaks down all of their desired assignments and projects into smaller tasks, with suggested deadlines evenly spaced out. This automation and personalization alleviates stress and removes an obstacle for students with their coursework. Built in Andorid Studio using Java and XML. </p>
                        <em class="center">Winner - Best Beginner Hack</em>
                      </div>
                     
                  </div>
                      
                      </div> */}

                            <div class="item">
                            <div class="portfolio-thumb portfolio-big">
                              <a href="assets/images/project/weather-app.PNG">
                              <img src="assets/images/project/weather-app.PNG" />
                              </a>
                              <p class="description"><b>Weather App</b>&nbsp;&nbsp;A personal project to create a weather application. A simple weather app that lets you search for the city and fetches current weather data and then displays different temperature and weather conditions for that city. Made using React.js and OpenWeather API.
                              </p>
                            </div>
                        </div>

                        <div class="item">
                            <div class="portfolio-thumb portfolio-big">
                              <a href="assets/images/project/frontPage.PNG">
                              <img src="assets/images/project/frontPage.PNG" />
                              </a>
                              <p class="description"><b>Exercise Tracker</b>&nbsp;&nbsp;A project for web development class to create a full-stack application. Created this to apply all the material learnt during the course. A simple web application that tracks exercises completed by the user. Also lets the user edit or delete exercises. The front-end of the app is made using Node and React as well as global design features. The backend is made using MongoDB, Express, REST, and Node.
                              </p>
                            </div>
                        </div>

                      <div class="item">
                        <div class="portfolio-thumb portfolio-big">
                          <a href="assets/images/project/Project3.PNG">
                          <img src="assets/images/project/Project3.PNG"/>
                          </a>
                          <p class="description"><b>Pollutant Data Visualizer</b>&nbsp;&nbsp; A hackathon project for Oregon State University Beaverhacks Fall 2021 inspired by data visualization to understand the scope of a problem, particularly in regards to climate change and other large, almost unimaginable issues. This web application allows a user to select a state and a county to get information on the amount of different pollutants in the air. This was built using HTML, JavaScript, and CSS (with Bootstrap) to lay out the project and give it the functionality. We used EPA API to get data on the air quality of different locations. I worked on data visualization aspect and used the library Chart.js to make the graphs to show the pollutants based on user selection.
                          </p>
                          <em class="center">Winner - First Place(New Student)</em>
                        </div>
                    </div>
                    

                    <div class="item">
                      <div class="portfolio-thumb portfolio-big">
                        <a href="assets/images/project/robotGame.png">
                        <img src="assets/images/project/robotGame.png" />
                        </a>
                        <p class="description"><b>Robot Invader</b>&nbsp;&nbsp;A game created by me using Python and Pygame library. This is my take on Space Invader game. Inspiration behind this game was to apply Python knowledge that I learnt in my earlier programming course. Also wanted to create fun, user-friendly interface so built it using Pygame. This game maintains an active score board as well as shows collison details when monkey fires bananas at robots.</p>
                      </div>
                  </div>

                    <div class="item">
                      <div class="portfolio-thumb portfolio-big">
                        <a href="assets/images/project/project2.jpg">
                        <img src="assets/images/project/project2.jpg" />
                        </a>
                        <p class="description"><b>Cortex: your second brain</b>&nbsp;&nbsp;A hackathon project for Hydrangea Hacks inspired by student's struggle of staying focused and motivated while going through their undergraduate studies during the pandemic. We wanted to create a productivity app to help students get organized for their school year, and stay motivated to finish their tasks. Cortex breaks down all of their desired assignments and projects into smaller tasks, with suggested deadlines evenly spaced out. This automation and personalization alleviates stress and removes an obstacle for students with their coursework. Built in Andorid Studio using Java and XML. </p>
                        <em class="center">Winner - Best Beginner Hack</em>
                      </div>
                  </div>


                  </div>
                </div>
        </div>
    </section>
            )
    }
}

export default Project;

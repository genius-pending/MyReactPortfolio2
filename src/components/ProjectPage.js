import React from 'react';
import screenshotImg from './assets/screenshot.jpg'
import screenshot1Img from './assets/screenshot 1.jpg'
import screenshot2Img from './assets/screenshot 2.jpg'
import screenshot3Img from './assets/screenshot 3.jpg'
import screenshot4Img from './assets/screenshot 4.jpg'
import screenshot5Img from './assets/screenshot 5.jpg'
import ScrollAnimation from 'react-animate-on-scroll';

function ProjectPage() {
    return (
        <div>
            <div class="bodyContained">
            <ScrollAnimation animateIn="fadeIn" animateOut='fadeOut'>
            <div class="row container mx-auto myBox">
                <div class="col-lg-6">
                    <img src={screenshotImg} alt="quiz app"/>
                </div>
                <div  class="col-lg-6 text-center pt-4">
                    <h2 class="mt-3 mb-4">
                    My Master Mind Quiz
                    </h2>
                    <p>This application was created using javascript,HTML and CSS this was the first application I created where I learnt to manipulate the DOM. 
                    </p>
                    <div class="d-flex justify-content-center mt-4">
                        <a class="myBtn text-center" href="https://github.com/genius-pending/MyFullStackMasterMindQuiz">LIVE DEMO</a>
                    </div>
                    <div class="d-flex justify-content-center mt-4">
                        <a class="myBtn text-center" href="https://genius-pending.github.io/MyFullStackMasterMindQuiz/">GITHUB</a>
                    </div>
                </div>
            </div>
        </ScrollAnimation>         
        <ScrollAnimation animateIn="fadeIn" animateOut='fadeOut'>
        <div class="row container mx-auto myBox">
            <div class="col-lg-6">
                <img src={screenshot1Img} alt="weather app"/>
            </div>
            <div  class="col-lg-6 text-center pt-4">
                <h2 class="mt-3 mb-4">
                My React Employee Directory
                </h2>
                <p>This app allows users to search for current employees within a directory and then filter them out by click on the headings. I created this using react.js 
                </p>
                <div class="d-flex justify-content-center mt-4">
                    <a class="myBtn text-center" href=" https://genius-pending.github.io/MyReactEmployeeDirectory/">LIVE DEMO</a>
                </div>
                <div class="d-flex justify-content-center mt-4">
                    <a class="myBtn text-center" href="https://github.com/genius-pending/MyReactEmployeeDirectory">GITHUB</a>
                </div>
            </div>
        </div>
    </ScrollAnimation>      
                <ScrollAnimation animateIn="fadeIn" animateOut='fadeOut'>
                    <div class="row container mx-auto myBox">
                        <div class="col-lg-6">
                            <img src={screenshot2Img} alt="traveltracker app"/>
                        </div>
                        <div  class="col-lg-6 text-center pt-4">
                            <h2 class="mt-3 mb-4">
                            Travel Tracker
                            </h2>
                            <p>This app allows users to  write a review on holidays they have been on and also browse other peoples reviews. It was created using backend server run on Mysql database and express and node.js making sure that it adhered to the MVC principles.
                            </p>
                            <div class="d-flex justify-content-center mt-4">
                                <a class="myBtn text-center" href="https://travel-tracker-2021.herokuapp.com/">LIVE DEMO</a>
                            </div>
                            <div class="d-flex justify-content-center mt-4">
                                <a class="myBtn text-center" href="https://github.com/genius-pending/TravelTracker">GITHUB</a>
                            </div>
                        </div>
                    </div>
                </ScrollAnimation>    
                <ScrollAnimation animateIn="fadeIn" animateOut='fadeOut'>
                <div class="row container mx-auto myBox">
                    <div class="col-lg-6">
                        <img src={screenshot3Img} alt="dailyplanner app"/>
                    </div>
                    <div  class="col-lg-6 text-center pt-4">
                        <h2 class="mt-3 mb-4">
                        My Daily Planner
                        </h2>
                        <p>This daily planner app allows users to search for a day with current and future scehdules for that day. Users are able to add to the search history and also retrive the data when they visit the app again. The user can delete the entries from the search history
                        </p>
                        <div class="d-flex justify-content-center mt-4">
                            <a class="myBtn text-center" href="https://genius-pending.github.io/MyDailyPlanner/">LIVE DEMO</a>
                        </div>
                        <div class="d-flex justify-content-center mt-4">
                            <a class="myBtn text-center" href="https://github.com/genius-pending/MyDailyPlanner">GITHUB</a>
                        </div>
                    </div>
                </div>
            </ScrollAnimation>   
            <ScrollAnimation animateIn="fadeIn" animateOut='fadeOut'>
            <div class="row container mx-auto myBox">
                <div class="col-lg-6">
                    <img src={screenshot4Img} alt="best of the rest app"/>
                </div>
                <div  class="col-lg-6 text-center pt-4">
                    <h2 class="mt-3 mb-4">
                    Best Of The Rest
                    </h2>
                    <p>This application allows users to search for the top 10 restuarants in the city they are in. This was the first application created where API integration was introduced using an AJAX call.
                    </p>
                    <div class="d-flex justify-content-center mt-4">
                        <a class="myBtn text-center" href="https://genius-pending.github.io/BestOfTheRest/">LIVE DEMO</a>
                    </div>
                    <div class="d-flex justify-content-center mt-4">
                        <a class="myBtn text-center" href="https://github.com/genius-pending/BestOfTheRest">GITHUB</a>
                    </div>
                </div>
            </div>
        </ScrollAnimation>   
        <ScrollAnimation animateIn="fadeIn" animateOut='fadeOut'>
        <div class="row container mx-auto myBox">
            <div class="col-lg-6">
                <img src={screenshot5Img} alt="burger app"/>
            </div>
            <div  class="col-lg-6 text-center pt-4">
                <h2 class="mt-3 mb-4">
                My Burger Menu Application
                </h2>
                <p>This application allows users the create a burger and order it on a menu they can then delete the burger off the menu this was created to practice using databases and express and node.js.
                </p>
                <div class="d-flex justify-content-center mt-4">
                    <a class="myBtn text-center" href="https://murmuring-river-91418.herokuapp.com/">LIVE DEMO</a>
                </div>
                <div class="d-flex justify-content-center mt-4">
                    <a class="myBtn text-center" href="https://github.com/genius-pending/MyAmazingBurgerApp">GITHUB</a>
                </div>
            </div>
        </div>
    </ScrollAnimation>   
            </div>
        </div>
    )
}

export default ProjectPage

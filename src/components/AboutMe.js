import React from 'react';
import { Link } from "react-router-dom";
import myProfile from './assets/myProfile.jpg';


function AboutMe(props) {

    return (
        <div ref={props.myRef} id="aboutMe" class="row container aboutMe mx-auto">
                <div class="col-lg-6">
                    <img class="rndImg" src={myProfile} alt="my profilePic"/>
                </div>
                <div class="col-lg-6 text-center">
                    <h2 class="pinkTxt" >About Me</h2>
                    <p class="">Hi I'm Shivey singh,I am currently a student at the university of Birmingham fullstack coding bootcamp. I enjoy learning Full Stack Development, currently diving deeper into React.Js. I believe that to be successful in life, one needs to be obsessive with the life they want and keep working towards it. I learnt how to code so I could develop websites and software for people and businesses.</p>
                    <div class="d-flex justify-content-center mt-4">
                        <Link to={'/ProjectPage'}>
                            <div class="myBtn text-center" >SHOW PROJECT</div>
                        </Link>
                    </div>
                </div>
            </div>
    )
}

export default AboutMe

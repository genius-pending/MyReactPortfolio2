import React from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
import mapImg from './assets/birminghamMap.jpg';
function ContactPage() {
    const imgStyle= {width: "100%", height: "80vh", objectFit: "cover"}
    return (
        <div>
            <div class="bodyContained">
                <ScrollAnimation animateIn="fadeIn" animateOut='fadeOut'>
                    <div class="container myBox">
                        <div class="row mx-auto myMy ">
                            <img class="col-lg-6" src={mapImg} alt="weather app" style={imgStyle}/>
                            <div class="col-lg-6 text-center contactMe">
                                <h2 class="mt-2">Contact Me</h2>
                                <form class="card-body mt-2">
                                    <div class="form-group text-left">
                                        <label for="fullName">Shivey Singh</label>
                                        
                                    </div>
                                    <div class="form-group  text-left">
                                        <label for="emailAddress">shivey_khangura@hotmail.com</label>
                                       
                                    </div>
                                    <div class="form-group text-left">
                                        <label for="message">Birmingham UK, B706EQ</label>
                                        
                                    </div>
                                    <div class="d-flex justify-content-center mt-5">
                                        
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </ScrollAnimation>
                <div class="d-flex justify-content-center mt-5 container socialBar">
                    <a class="socialLinks text-center" href="https://www.linkedin.com/in/shiveysingh/"><i class="fab fa-linkedin fa-3x"></i></a>
                    <a class="socialLinks text-center" href="https://github.com/genius-pending"><i class="fab fa-github fa-3x"></i></a>
                    <a class="socialLinks text-center" href="https://drive.google.com/file/d/1Erwkvt7-MhF_w9AW2BPceswPsJ0Zu1Rp/view?usp=sharing"><i class="far fa-file fa-3x"></i></a>
                </div>
            </div>
        </div>
    )
}

export default ContactPage

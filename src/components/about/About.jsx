import React from "react";

import "./About.css";
import about_img from "../../assets/about.png";
import play_icon from "../../assets/play-icon.png";

export default function About({setPlayState}) {
    return (
        <div className="about">
            <div className="about-left">
                <img src={about_img} alt="" className="about-img" />
                <img src={play_icon} alt="" className="play-icon" onClick={() => {
                    setPlayState(true)
                } }/>
            </div>
            <div className="about-right">
                <h3>ABOUT UNIVERSITY</h3>
                <h2>Nurturing Tomorrow's Leaders Today</h2>
                <p>Embark on transformative educational journey with our Univerity's comprehensive educational programs.</p>
                <p>With a focus of inovation , hands-on learning and personilezed mentorship.</p>
                <p>Achieve your goal and unlock your potential </p>
            </div>
        </div>
    )
}
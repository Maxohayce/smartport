import React from "react";
import "./About.css";
import Underline from "../Images/second.svg";

const Skills = [
    { title: "ReactJS +2 years" },
    { title: "NodeJS +2 years" },
    { title: "Google Ads +2 months" },
    { title: "Azure +6 months" },
    { title: "Unlocking locked IOS devices +1 year" },
    { title: "Javascript" }
]
const About = () => {
    return (
        <div className="About">
            <img src={Underline} alt="underline" />
            <div className="a-container">
                <section className="a-left">
                    <h3>about me</h3>
                    <p>Helping you reach your full potential</p>
                </section>
                <section className="a-right">
                    <div className="a-top-right">
                        <h5><bold>who am I</bold></h5>
                        <p>Experienced Web and App Developer with digital
                            experience. Skills include web and app development,
                            analytical thinking and creative problem solving. Able
                            to apply customer service concepts to digital services
                            to improve user experience for clients, employees and
                            administration.
                        </p>
                    </div>
                    <div className="a-bottom-right">
                        <h5><bold>What are your skills</bold></h5>
                        <ul className="skills-list">
                            {Skills.map((item, id) => {
                                return (
                                    <li key={id}>
                                        {item.title}
                                    </li>
                                )
                            })}
                        </ul>
                    </div>
                </section>
            </div>
        </div>
    )
};

export default About;
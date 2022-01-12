import React from "react";
import "./Instructor.css";
import Instructor1 from "../Images/Page-7-Image-7.png";
import Instructor2 from "../Images/Page-7-Image-8.png";
import firstSvg from "../Images/first.svg";
import greenBottom from "../Images/bottomgreen.svg";

const Instructor = () => {
    return (
        <div className="ILayout">
            <img src={firstSvg} alt="" />
            <img  src={greenBottom} alt="greenBottom" />
            <section className="ILeftLayout">
                <img src={Instructor1} alt="" />
                <img src={Instructor2} alt="" />
            </section>
            <section className="IRightLayout">
                <div className="IRightContainer">
                    <h5>ONUOHA UI (DWC)</h5>
                    <p>The Watch me Design
                        series is a Canva Design
                        monthly workshop where
                        Onuoha UI (A Canva
                        Certified Creative, and
                        Ambassador) shows how to
                        use Canva to create the
                        most beautiful designs. I
                        crafted a website to help
                        publicize the training.
                    </p>
                    <a href="https://bit.ly/3ErHhEB">https://bit.ly/3ErHhEB</a>
                </div>
            </section>
        </div>
    )
};

export default Instructor;
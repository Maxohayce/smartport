import React from "react";
import "./Muse.css";
import Muse1 from "../Images/Page-6-Image-5.png";
import Muse2 from "../Images/Page-6-Image-6.png";


const Muse = () => {
    return (
        <div className="M-Layout">
            <section className="M-LeftLayout">
                <div className="M-LeftContainer">
                    <h5>MUSE - AFRICAN
                        COMIC BOOKS AND
                        GRAPHIC NOVELS
                        APP
                    </h5>
                    <p>MUSE is an app where you
                        can access African stories
                        told in comic books and
                        graphic novels. If you want
                        to enter Africa from
                        wherever you are in the
                        world, get MUSE.
                    </p>
                    <a href="https://bit.ly/33U1WVx">https://bit.ly/33U1WVx</a>
                </div>
            </section>
            <section className="M-RightLayout">
                <img src={Muse1} alt="Muse1" />
                <img src={Muse2} alt="Muse2" />
            </section>
        </div>
    )
};

export default Muse;
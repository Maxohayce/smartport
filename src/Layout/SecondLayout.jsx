import React from "react";
import "./SecondLayout.css";
import leftThin from "../Images/leftthin.svg";
import greenBottom from "../Images/bottomgreen.svg";



const SecondLayout = ({ title = "Title", description = "Description", url = "Url",
     FirstPicture, SecondPicture }) => {
    return (
        <div className="SecondLayout">
            <img src={leftThin} alt="leftThin" />
            <img src={greenBottom} alt="greenBottom" />
            <section className="SecondLeftLayout">
                <img src={FirstPicture} alt="" />
                <img src={SecondPicture} alt="" />
            </section>

            <section className="SecondRightLayout">
                <div className="SecondRightContainer">
                    <h5>{title}</h5>
                    <p>{description}</p>
                    <a href={url}>{url}</a>
                </div>
            </section>
        </div>
    )
};

export default SecondLayout;
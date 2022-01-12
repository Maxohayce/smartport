import React from "react";
import "./FirstLayout.css";
import rightUnderline from "../Images/fourthright.svg";

const FirstLayout = ({ title="Title", description="Description", url="Url", RightLayout,
   FirstPicture, SecondPicture }) => {
    return(
        <div className="Layout">
            <img className="rightUnderline" src={rightUnderline} alt="rightUnderline" />
            <section className="LeftLayout">
                <div className="LeftContainer">
                    <h5>{title}</h5>
                    <p>{description}</p>
                    <a href={url}>{url}</a>
                </div>
            </section>
            <section className="R-Layout">
                <img src={FirstPicture} alt=""/>
                <img  src={SecondPicture} alt=""/>
            </section>
        </div>
    )
};

export default FirstLayout;
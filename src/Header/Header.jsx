import React from "react";
import "./Header.css";
import firstSvg from "../Images/first.svg";
import firstLeft from "../Images/first2.svg";
import firstBottom from "../Images/first3.svg";

const Header = () => {
    return(
        
        <header className="header">
                <img src={firstSvg} alt="svg"/>
                <img src={firstLeft} alt="svg"/>
                <img className="H-bottom" src={firstBottom} alt="svg"/>
            <div className="h-container">
                <h1>NGENE <br/> CHIDUBEM</h1>
                <p>Software Developer</p>
            </div>
        </header>
    )
};

export default Header;
import React from "react";
import "./Mission.css";
import missionCenter from "../Images/missioncenter.svg";
import missionThick from "../Images/missionthick.svg";
import missionThin from "../Images/leftthin.svg";


const Mission = () => {
    return (
        <div className="Mission">
            <img src={missionThick} alt="missionThick" />
            <img src={missionThin} alt="missionThin" />
            <img src={missionCenter} alt="circle" />
            <h3>
                My mission is to <br/>create positive impact
            </h3>
        </div>
    )
};

export default Mission;
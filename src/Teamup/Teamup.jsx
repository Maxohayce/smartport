import React from "react";
import "./Teamup.css";
import FirstLayout from "../Layout/FirstLayout";
import Team1 from "../Images/Page-4-Image-1.png";
import Team2 from "../Images/Page-4-Image-2.png";

const Teamup = () => {
    return(
        <FirstLayout title="TEAMUP" description="Teamup is a task management
        web application for small remote
        teams. It’s basic feature is
        focused on simplicity and
        efficiency. Teamup recieved it’s
        200th users on its first post on
        Facebook." url="https://bit.ly/32tIrCm" FirstPicture={Team1} SecondPicture={Team2}>
        </FirstLayout>
    )
};

export default Teamup;
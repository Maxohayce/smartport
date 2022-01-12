import React from "react";
import SecondLayout from "../Layout/SecondLayout";
import Project1 from "../Images/Page-9-Image-11.png";
import Project2 from "../Images/Page-9-Image-12.png";

const RightLayout = {
    width: "50%",
    flex: "1",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-evenly",
    alignItems: "center",
    margin: "2em",
    textAlign: "start",
    position: "absolute",
    left: "50%",
}

const RightContainer = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-evenly",
    alignItems: "flex-start",
    height: "60vh",
    width: "60%",
    marginTop: "4em",
}


const LeftLayout = {
    width: "50%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    padding: "3em",
    position: "relative",
    marginLeft: "-15%"
}

const Projects = () => {
    return(
        <SecondLayout title="EPACT" description="EPACT is an online agro
        farm platform. Built a
        functional website with a
        blockchain to manage
        investors investment and
        EPACT coin."
         url="https://bit.ly/3Hajdb5" FirstPicture={Project1} SecondPicture={Project2}
         LeftLayout={LeftLayout} RightContainer={RightContainer} RightLayout={RightLayout}>
        </SecondLayout>
    )
};

export default Projects;
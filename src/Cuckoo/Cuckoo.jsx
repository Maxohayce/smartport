import React from "react";
import "./Cuckoo.css";
import FirstLayout from "../Layout/FirstLayout";
import Project1 from "../Images/Page-8-Image-9.png";
import Project2 from "../Images/Page-8-Image-10.png";



const Cuckoo = () => {
    return(
        <FirstLayout title="CUCKOO DEX" description="Cuckoo DEX is an exchange
        platform built under serum for the
        Cuckoo smart contract project.
        Tools used, React (Typescript),
        Web3js, Serum.
        " url="https://bit.ly/3JfrBrE" FirstPicture={Project1} SecondPicture={Project2}>
        </FirstLayout>
    )
};

export default Cuckoo;
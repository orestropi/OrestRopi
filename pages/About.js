import React from "react";
import MainBody2 from "../Components/MainBody2";
import ResponsiveAppBar from "../Components/ResponsiveAppBar";
import MainFooter from "../Components/MainFooter";
import styles from '../styles/Home.module.css'

function About() {
    return <div className={styles.container}>     
    <ResponsiveAppBar/> 
    <MainBody2 />
    <MainFooter/> 
    </div>;
}

export default About;
import React from "react";
import MainBody3 from "../Components/MainBody3";
import ResponsiveAppBar from "../Components/ResponsiveAppBar";
import MainFooter from "../Components/MainFooter";
import styles from '../styles/Home.module.css'

function Contact() {
    return <div className={styles.container}>      
    <ResponsiveAppBar/> 
    <MainBody3 />
    <MainFooter/> 
    </div>;
}

export default Contact;
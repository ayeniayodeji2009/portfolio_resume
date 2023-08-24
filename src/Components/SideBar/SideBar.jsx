import React from 'react';
import "./SideBar.scss";
// import react-icons
import { FaTwitter, FaLinkedin, FaEnvelope, FaWhatsapp, FaGithub } from "react-icons/fa";


const SideBar = () => {
    return (
        <div className="sidebar">
            {/* <a href="tel:+2348099772916"><FaPhone /></a> */}
            <a href="https://twitter.com/@ayeni_ayodeji01"
            ><FaTwitter /></a>
            <a href="mailto:ayeniayodeji2009@gmail.com"><FaEnvelope /></a>
            <a href="https://www.linkedin.com/in/ayeni-ayodeji-8b8a4223a"
            ><FaLinkedin /></a>
            <a href="https://wa.link/t93y8u"><FaWhatsapp /></a>
            <a href="https://github.com/ayeniayodeji2009">
                <FaGithub />
            </a>
        </div>
    )
}

export default SideBar

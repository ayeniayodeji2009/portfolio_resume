import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.scss";
import me from "../../Assets/img/My_Picture_face-Deji.png"

const Navbar = () => {
    const handleToggle = () => {
        let sidebar = document.querySelector(".nav__links");
        sidebar.classList.toggle("show");
    };
    // remove show class from nav__links when each link is clicked
    const handleLinkClick = () => {
        let sidebar = document.querySelector(".nav__links");
        sidebar.classList.remove("show");
    };
    return (
        <nav className="nav">
            {" "}
            <div className="nav__logo">
                <NavLink to="/">AYO</NavLink>
            </div>
            <div className="nav__toggler" onClick={handleToggle}>
                <button>MENU</button> <span className="nav__toggler__line"></span>
            </div>
            <div className="nav__links">
                <div className="nav__links-wrapper">
                    {" "}
                    <NavLink
                        to="/"
                        activeclassname="nav__links_link--active"
                        className="nav__links_link hover-btm-navbar"
                        onClick={handleLinkClick}
                        title="Go back to reception"
                    >
                        Home
                    </NavLink>
                    <NavLink
                        to="/about"
                        activeclassname="nav__links_link--active"
                        className="nav__links_link hover-btm-navbar "
                        onClick={handleLinkClick}
                        title="Get to know me, my works and experiences"
                    >
                        About
                    </NavLink>
                    <NavLink
                        to="/projects"
                        activeclassname="nav__links_link--active"
                        className="nav__links_link hover-btm-navbar "
                        onClick={handleLinkClick}
                        title="Check out Some cool projects I've worked on recently"
                    >
                        Projects
                    </NavLink>
                    <NavLink
                        to="/contact"
                        activeclassname="nav__links_link--active"
                        className="nav__links_link hover-btm-navbar "
                        onClick={handleLinkClick}
                        title="Contact me for gigs, projects ideas"
                    >
                        Contact
                    </NavLink>
                </div>
                <div className="nav__links-img">
                    <div className="about__intro_img">
                        <img
                            src={me}
                            alt="Ayodeji"
                        />
                    </div>
                </div>

                {/* close nav */}
                <button className="nav__links-close" onClick={handleToggle}>
                    X
                </button>
            </div>
        </nav>
    );
};

export default Navbar;

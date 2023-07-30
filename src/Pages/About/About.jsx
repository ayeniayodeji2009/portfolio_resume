import React from "react";
import {
    FaBootstrap,
    FaCss3,
    FaGitAlt,
    FaHtml5,
    FaReact,
    FaSass,
    FaVuejs,
    FaWordpress,
} from "react-icons/fa";
//import { SiNextdotjs } from "react-icons/si";
import { Link } from "react-router-dom";
import { Heading } from "../../Components/Typography/Typography";
import mo from "../../Assets/img/my_picture-Deji.jpg";
import "./About.scss";

const About = () => {
    return (
        <div className="about">
            <Heading title="About Me" />
            <div className="about__intro">
                <div className="about__intro_img">
                    <img src={mo} alt="Ayodeji" />
                </div>
                <div className="about__intro_text">
                    {/*<p>Are you ready to hear the story of a Primary School Teacher turned tech enthusiast?. Keep reading!</p>
                    <p>
                        It was mid-2020, and the world was in lockdown. While most people were binge-watching TV shows or having fun during the lockdown, I decided to take a different route. I started learning how to code from scratch, and little did I know, it would lead me down an exciting and fulfilling path.
                    </p>
            
                    <p>
                        Before I got into tech, I was a Primary School Teacher. It was fun being a Teacher and having the opportunity to teach kids, but I had the urge to experience the tech world and here I am today experiencing and enjoying what tech has to offer to me and to People tech has put smiles on their faces through me as a result of providing solutions to their problems and making their lifes easy with the use of tech. !-- I had created <a href="http://homemusicschool.org">Home Music School</a> a platform that connects music teachers to parents that require their services. I also founded   <a
                            href="http://instagram.com/bandittude"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                           Bandittude
    </a> an all-female platform that allows women in music find a place of expression and oppurtunities to learn, grow and be discovered. Now, as an enthusiastic and innovative developer,  "
                    </p>*/}
                    <p>
                        I am passionate about building solutions that make lives easier and better using mordern technology and tools. I have proven experience focusing on building fast, scalable and feature-rich websites/webapps from start to finish. <Link to="/projects"><em>Here</em></Link> is a catalog of Projects I have worked on. I love to work closely with designers to take wireframes from conception to implementation.
                    </p>
                 
                    <br />
                    <h3>Here are some technologies I’ve been working with recently:</h3>
                    <div className="about__tech">
                        <FaReact />
                        {/* <SiNextdotjs /> */}
                        <FaHtml5 />
                        <FaCss3 />
                        <FaSass />
                        <FaBootstrap />
                        <FaWordpress />
                        <FaGitAlt />
                        <FaVuejs />
                    </div>
                    <p>
                        {" "}
                        I love listening to Music and in my free time, I
                        enjoy watching movies, reading books, swimming, eating good Food and staying at home.
                    </p>{" "}
                    <p>If you're looking for a passionate and creative developer who is dedicated to building solutions that make a difference, you're in the right place!</p>
                    <br />{" "}
                    <Link className="btn" to="/projects">
                       Some of my projects
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default About;

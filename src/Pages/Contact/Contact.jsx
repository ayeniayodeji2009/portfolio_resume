import React from "react";
import "./Contact.scss";
import { Heading } from "../../Components/Typography/Typography";
import {
    FaCodepen,
    FaDownload,
    FaEnvelope,
    FaGithub,
    FaInstagram,
    FaLinkedin,
    FaTwitter,
    FaWhatsapp,
} from "react-icons/fa";

const Contact = () => {
    return (
        <div className="contact">
            <Heading title="Contact Me" />
            <p className="contact__heading">
                You're looking for a frontend developer, have questions or enquiries or you're simply looking to connect with me.
            </p>
            <br />
            <div className="contact__links">
                <div className="d-f">
                    {" "}
                    <a className="hover-btm mr-2" href="mailto:ayeniayodeji2009@gmail.com">
                        <FaEnvelope /> Send me a mail
                    </a>
                    <a className="hover-btm" href="https://wa.link/t93y8u">
                        <FaWhatsapp /> Whatsapp Me
                    </a>
                </div>
                <a className="hover-btm mr-2" target="_blank" href="https://drive.google.com/file/d/1zIKZQ7k24Nvr0MTmjELsfaAv5g0BpuEI/view?usp=sharing" rel="noreferrer"
                ><FaDownload /> View my resume</a>
                <div className="d-f">
                    <a title="GitHub" className="mr-1 zoom" href="https://github.com/ayeniayodeji2009">
                        <FaGithub />
                    </a>
                    <a title="Twitter" className="mr-1 zoom" href="https://twitter.com/@ayeni_ayodeji01">
                        <FaTwitter />
                    </a>
                    <a title="Instagram" className="mr-1 zoom" href="https://www.instagram.com/ayeniayodeji2009/">
                        <FaInstagram />
                    </a>
                    <a title="LinkedIn"
                        className="mr-1 zoom"
                        href="https://www.linkedin.com/in/ayeni-ayodeji-8b8a4223a"
                    >
                        <FaLinkedin />
                    </a>
                    <a title="Codepen" className="mr-1 zoom" href="https://replit.com/@ayeniayodeji">
                        <FaCodepen />
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Contact;

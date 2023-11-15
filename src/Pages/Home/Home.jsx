import React from "react";
import "./Home.scss";
import { BsArrowRight } from "react-icons/bs";
import { Heading } from "../../Components/Typography/Typography";
import { Link } from "react-router-dom";
import mo from "../../Assets/img/USD_passport_picture.JPG";

const Home = () => {
    // const [show, setShow] = React.useState(false);

    // const takeAction = () => {
    //     setShow(!show);
    // };

    return (
        <div className="home">
            <div className="home__container">

                <div className="home__container_text">
                    <p>{"Hi, my name is"}</p>
                    <img src={mo} alt="Ayodeji" className="home__img" />
                    <Heading title="Ayeni Ayodeji" />
                    <p>
                        I'm a Frontend developer with a passion for building solutions. I
                        enjoy building everything from small business sites to rich interactive web apps. 
                        If you are a business seeking a web presense or an employer looking to hire, you can get in touch with me here.
                    </p>
                </div>{" "}
                <br />
                <Link
                    style={{ display: "flex", alignItems: "center" }}
                    className="pry_btn"
                    to="/about"
                > Learn More <BsArrowRight style={{ marginLeft: "10px" }} />
                </Link>
                {/* <button onClick={takeAction} className="pry_btn">
                    Connect with Me <BsArrowDown />{" "}
                </button>
                {show && (
                    <div className="home__container_btns">
                        <a href="/Morenike_Resume.pdf">
                            View my resume <BsArrowRight />
                        </a>
                        <a href="https://github.com/mo-renike">
                            Go to my Github <BsArrowRight />
                        </a>
                    </div>
                )} */}
            </div>
            {/* eslint-disable-next-line jsx-a11y/no-distracting-elements */}
            <marquee scrollamount="10" className="marquee">
                WELCOME TO MY PORTFOLIO
            </marquee>
        </div>
    );
};

export default Home;

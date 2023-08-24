import React from "react";
import { ProjectsData } from "./ProjectsData";
import "./Projects.scss";
import { Heading } from "../../Components/Typography/Typography";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import SIngleProject from "./SIngleProject";


const Projects = () => {


  return (
    <div className="projects">
      <Heading title={`Projects`} />
      <p>{/*I like to get my hands dirty and I'm almost always working on something. */}<br /> Here are some projects I have worked on recent times. Check my <span className="_text"><a href="https://github.com/ayeniayodeji2009"><em>Github</em></a></span>  for more.
      </p>

      <div className="projects__container">
        {
          ProjectsData.map(
            ({ id, ...props }) => (
              <SIngleProject key={id} {...props} />
            )
          )
        }
      </div>
    </div>
  );
};

export default Projects;

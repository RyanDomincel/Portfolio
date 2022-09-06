import React, { useState } from "react";
import { ProjectList } from "./ProjectList";

function ProjectItem({ image, name, id, skills }) {
  const project = ProjectList[id];
  const [toggleState, setToggleState] = useState();
  const toggleTab = (index) => {
    setToggleState(index);
  };
  return (
    <div className="portfolio__content">
      <div style={{ backgroundImage: `url(${image})` }} className="bgImage" />
      <h1 className="portfolio__title">{name}</h1>

      <span className=" portfolio__button" onClick={() => toggleTab(id)}>
        View More
        <i className="uil uil-arrow-right portfolio__button-icon"></i>
      </span>

      <div
        className={
          toggleState === id
            ? "portfolio__modal active-modal"
            : "portfolio__modal"
        }
      >
        <div className="portfolio__modal-content">
          <div
            style={{ backgroundImage: `url(${image})` }}
            className="bgImage"
          />

          <i
            className="uil uil-times portfolio__modal-close"
            onClick={() => toggleTab(-1)}
          ></i>
          <h3 className="portfolio__modal-title">{name}</h3>
          <p className="portfolio__modal-description">
            <b>Skills: </b> {project.skills}
          </p>

          <a href={project.link} target="_blank" rel="noreferrer">
            <span className=" portfolio__modal-button">
              <b>Demo</b> <i class="uil uil-github portfolio__button-icon"></i>
            </span>
          </a>
        </div>
      </div>
    </div>
    // <div
    //   className="projectItem"
    //   onClick={() => {
    //     navigate("/My-Portfolio/project/" + id);
    //   }}
    // >
    //   <div style={{ backgroundImage: `url(${image})` }} className="bgImage" />
    //   <h1>{name}</h1>
    // </div>
  );
}

export default ProjectItem;

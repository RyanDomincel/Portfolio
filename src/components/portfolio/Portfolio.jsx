import React from "react";
import "./Portfolio.css";
import { ProjectList } from "./ProjectList";
import ProjectItem from "./ProjectItem";

const Portfolio = () => {
  return (
    <section className="services section" id="portfolio">
      <h2 className="section__title">Portfolio</h2>
      <span className="section__subtitle">Some of my Work</span>

      <div className=" portfolio__container container grid">
        {ProjectList.map((project, idx) => {
          return (
            <ProjectItem id={idx} name={project.name} image={project.image} />
          );
        })}

        {/* <div className="portfolio__content">
          <div>
            <i class="uil uil-server-network portfolio__icon"></i>
            <h3 className="portfolio__title">
              Back-End <br /> Development
            </h3>

            <span className=" portfolio__button" onClick={() => toggleTab(2)}>
              View More
              <i className="uil uil-arrow-right portfolio__button-icon"></i>
            </span>

            <div
              className={
                toggleState === 2
                  ? "portfolio__modal active-modal"
                  : "portfolio__modal"
              }
            >
              <div className="portfolio__modal-content">
                <i
                  className="uil uil-times portfolio__modal-close"
                  onClick={() => toggleTab(0)}
                ></i>
                <h3 className="portfolio__modal-title">Back-End Development</h3>
                <p className="portfolio__modal-description">
                  Knowledge with almost 3 years about languages such as PHP,
                  Express, NodeJs, MySQL and Firebase. Can provide quality work
                  to clients and companies and also willing to be trained for
                  more languages and dig deeper on the ones that I have learned
                  already.
                </p>

                <ul className="portfolio__modal-services grid">
                  <li className="portfolio__modal-service">
                    <i className="uil uil-check-circle portfolio__modal-icon"></i>
                    <p className="portfolio__modal-info">
                      Web page development.
                    </p>
                  </li>

                  <li className="portfolio__modal-service">
                    <i className="uil uil-check-circle portfolio__modal-icon"></i>
                    <p className="portfolio__modal-info">
                      I create the backend functionality of your website
                    </p>
                  </li>

                  <li className="portfolio__modal-service">
                    <i className="uil uil-check-circle portfolio__modal-icon"></i>
                    <p className="portfolio__modal-info">
                      I create codes that are co-coder-friendly
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="portfolio__content">
          <div>
            <i class="uil uil-arrow portfolio__icon"></i>
            <h3 className="portfolio__title">
              Full-Stack Web <br /> Development
            </h3>

            <span className=" portfolio__button" onClick={() => toggleTab(3)}>
              View More
              <i className="uil uil-arrow-right portfolio__button-icon"></i>
            </span>

            <div
              className={
                toggleState === 3
                  ? "portfolio__modal active-modal"
                  : "portfolio__modal"
              }
            >
              <div className="portfolio__modal-content">
                <i
                  className="uil uil-times portfolio__modal-close"
                  onClick={() => toggleTab(0)}
                ></i>
                <h3 className="portfolio__modal-title">
                  Full-Stack Web Development
                </h3>
                <p className="portfolio__modal-description">
                  With the knowledge I gained throughout my journey, I can
                  proudly say that I'm confident building a website for a client
                  and be able to deliver the necessary targets with ease. If I
                  lack skills on specific languages, I'd be happy to undergo
                  training for it to be able to meet the clients' need for
                  his/her website.
                </p>

                <ul className="portfolio__modal-services grid">
                  <li className="portfolio__modal-service">
                    <i className="uil uil-check-circle portfolio__modal-icon"></i>
                    <p className="portfolio__modal-info">
                      Web page development.
                    </p>
                  </li>

                  <li className="portfolio__modal-service">
                    <i className="uil uil-check-circle portfolio__modal-icon"></i>
                    <p className="portfolio__modal-info">
                      I create ux element interactions.
                    </p>
                  </li>

                  <li className="portfolio__modal-service">
                    <i className="uil uil-check-circle portfolio__modal-icon"></i>
                    <p className="portfolio__modal-info">
                      I develop the user interface.
                    </p>
                  </li>

                  <li className="portfolio__modal-service">
                    <i className="uil uil-check-circle portfolio__modal-icon"></i>
                    <p className="portfolio__modal-info">
                      I position your company brand.
                    </p>
                  </li>

                  <li className="portfolio__modal-service">
                    <i className="uil uil-check-circle portfolio__modal-icon"></i>
                    <p className="portfolio__modal-info">
                      I create the backend functionality of your website
                    </p>
                  </li>

                  <li className="portfolio__modal-service">
                    <i className="uil uil-check-circle portfolio__modal-icon"></i>
                    <p className="portfolio__modal-info">
                      I create codes that are co-coder-friendly
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default Portfolio;

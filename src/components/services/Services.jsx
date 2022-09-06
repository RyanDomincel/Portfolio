import React, { useState } from "react";
import "./Services.css";

const Services = () => {
  const [toggleState, setToggleState] = useState(0);
  const toggleTab = (index) => {
    setToggleState(index);
  };
  return (
    <section className="services section" id="services">
      <h2 className="section__title">Services</h2>
      <span className="section__subtitle">What i offer</span>

      <div className=" services__container container grid">
        <div className="services__content">
          <div>
            <i className="uil uil-web-grid services__icon"></i>
            <h3 className="services__title">
              Front-End <br /> Development
            </h3>

            <span className=" services__button" onClick={() => toggleTab(1)}>
              View More
              <i className="uil uil-arrow-right services__button-icon"></i>
            </span>

            <div
              className={
                toggleState === 1
                  ? "services__modal active-modal"
                  : "services__modal"
              }
            >
              <div className="services__modal-content">
                <i
                  className="uil uil-times services__modal-close"
                  onClick={() => toggleTab(0)}
                ></i>
                <h3 className="services__modal-title">Front-End Development</h3>
                <p className="services__modal-description">
                  Knowledge with almost 5 years about languages such as HTML,
                  CSS, JavaScript. Can provide quality work to clients and
                  companies and also willing to be trained for more languages
                  and dig deeper on the ones that I have learned already.
                </p>

                <ul className="services__modal-services grid">
                  <li className="services__modal-service">
                    <i className="uil uil-check-circle services__modal-icon"></i>
                    <p className="services__modal-info">
                      Web page development.
                    </p>
                  </li>

                  <li className="services__modal-service">
                    <i className="uil uil-check-circle services__modal-icon"></i>
                    <p className="services__modal-info">
                      I create ux element interactions.
                    </p>
                  </li>

                  <li className="services__modal-service">
                    <i className="uil uil-check-circle services__modal-icon"></i>
                    <p className="services__modal-info">
                      I develop the user interface.
                    </p>
                  </li>

                  <li className="services__modal-service">
                    <i className="uil uil-check-circle services__modal-icon"></i>
                    <p className="services__modal-info">
                      I position your company brand.
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="services__content">
          <div>
            <i class="uil uil-server-network services__icon"></i>
            <h3 className="services__title">
              Back-End <br /> Development
            </h3>

            <span className=" services__button" onClick={() => toggleTab(2)}>
              View More
              <i className="uil uil-arrow-right services__button-icon"></i>
            </span>

            <div
              className={
                toggleState === 2
                  ? "services__modal active-modal"
                  : "services__modal"
              }
            >
              <div className="services__modal-content">
                <i
                  className="uil uil-times services__modal-close"
                  onClick={() => toggleTab(0)}
                ></i>
                <h3 className="services__modal-title">Back-End Development</h3>
                <p className="services__modal-description">
                  Knowledge with almost 3 years about languages such as PHP,
                  Express, NodeJs, MySQL and Firebase. Can provide quality work
                  to clients and companies and also willing to be trained for
                  more languages and dig deeper on the ones that I have learned
                  already.
                </p>

                <ul className="services__modal-services grid">
                  <li className="services__modal-service">
                    <i className="uil uil-check-circle services__modal-icon"></i>
                    <p className="services__modal-info">
                      Web page development.
                    </p>
                  </li>

                  <li className="services__modal-service">
                    <i className="uil uil-check-circle services__modal-icon"></i>
                    <p className="services__modal-info">
                      I create the backend functionality of your website
                    </p>
                  </li>

                  <li className="services__modal-service">
                    <i className="uil uil-check-circle services__modal-icon"></i>
                    <p className="services__modal-info">
                      I create codes that are co-coder-friendly
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="services__content">
          <div>
            <i class="uil uil-arrow services__icon"></i>
            <h3 className="services__title">
              Full-Stack Web <br /> Development
            </h3>

            <span className=" services__button" onClick={() => toggleTab(3)}>
              View More
              <i className="uil uil-arrow-right services__button-icon"></i>
            </span>

            <div
              className={
                toggleState === 3
                  ? "services__modal active-modal"
                  : "services__modal"
              }
            >
              <div className="services__modal-content">
                <i
                  className="uil uil-times services__modal-close"
                  onClick={() => toggleTab(0)}
                ></i>
                <h3 className="services__modal-title">
                  Full-Stack Web Development
                </h3>
                <p className="services__modal-description">
                  With the knowledge I gained throughout my journey, I can
                  proudly say that I'm confident building a website for a client
                  and be able to deliver the necessary targets with ease. If I
                  lack skills on specific languages, I'd be happy to undergo
                  training for it to be able to meet the clients' need for
                  his/her website.
                </p>

                <ul className="services__modal-services grid">
                  <li className="services__modal-service">
                    <i className="uil uil-check-circle services__modal-icon"></i>
                    <p className="services__modal-info">
                      Web page development.
                    </p>
                  </li>

                  <li className="services__modal-service">
                    <i className="uil uil-check-circle services__modal-icon"></i>
                    <p className="services__modal-info">
                      I create ux element interactions.
                    </p>
                  </li>

                  <li className="services__modal-service">
                    <i className="uil uil-check-circle services__modal-icon"></i>
                    <p className="services__modal-info">
                      I develop the user interface.
                    </p>
                  </li>

                  <li className="services__modal-service">
                    <i className="uil uil-check-circle services__modal-icon"></i>
                    <p className="services__modal-info">
                      I position your company brand.
                    </p>
                  </li>

                  <li className="services__modal-service">
                    <i className="uil uil-check-circle services__modal-icon"></i>
                    <p className="services__modal-info">
                      I create the backend functionality of your website
                    </p>
                  </li>

                  <li className="services__modal-service">
                    <i className="uil uil-check-circle services__modal-icon"></i>
                    <p className="services__modal-info">
                      I create codes that are co-coder-friendly
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;

import React, { useState } from "react";
import "./Qualification.css";

const Qualification = () => {
  const [toggleState, setToggleState] = useState(1);
  const toggleTab = (index) => {
    setToggleState(index);
  };
  return (
    <section className="qualification section" id="qualification">
      <h2 className="section__title">Qualificaion</h2>
      <span className="section__subtitle">My Personal Journey</span>

      <div className="qualification__container container">
        <div className="qualification__tabs">
          <div
            className={
              toggleState === 1
                ? "qualification__button qualification__active button--flex"
                : "qualification__button  button--flex"
            }
            onClick={() => toggleTab(1)}
          >
            <i className="uil uil-graduation-cap qualification__icon"></i>
            Education
          </div>

          <div
            className={
              toggleState === 2
                ? "qualification__button qualification__active button--flex"
                : "qualification__button  button--flex"
            }
            onClick={() => toggleTab(2)}
          >
            <i className="uil uil-briefcase-alt qualification__icon"></i>Work
            Experience
          </div>
        </div>

        <div className="qualification__sections">
          <div
            className={
              toggleState === 1
                ? "qualification__content qualification__content-active"
                : "qualification__content "
            }
          >
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">
                  Kapatagan National High School
                </h3>
                <span className="qualification__subtitle">Kapatagan</span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i> 2011-2012
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

            <div className="qualification__data">
              <div></div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
              <div>
                <h3 className="qualification__title">BS Marine Engineering</h3>
                <span className="qualification__subtitle">
                  CDO - Capitol University
                </span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i> 2012-2012 (1
                  semester)
                </div>
              </div>
            </div>

            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">
                  2 Years Diploma in Information Technology
                </h3>
                <span className="qualification__subtitle">Kapatagan - ICI</span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i> 2013-2015
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

            <div className="qualification__data">
              <div></div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
              <div>
                <h3 className="qualification__title">
                  Full Stack Web Development
                </h3>
                <span className="qualification__subtitle">
                  Philippines - KodeGo
                </span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i> June 2022 - August
                  2022
                </div>
              </div>
            </div>
          </div>

          <div
            className={
              toggleState === 2
                ? "qualification__content qualification__content-active"
                : "qualification__content "
            }
          >
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">
                  Graphic Designer & Social Media Manager
                </h3>
                <span className="qualification__subtitle">
                  Kapatagan - Mogul Marketeers
                </span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i> 2015-2016 (1 Year)
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

            <div className="qualification__data">
              <div></div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
              <div>
                <h3 className="qualification__title">
                  Instructor & Graphic Designer
                </h3>
                <span className="qualification__subtitle">Kapatagan - ICI</span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i> 2016-2022 (6 Years)
                </div>
              </div>
            </div>

            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Website Development</h3>
                <span className="qualification__subtitle">Freelancing</span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i> 2022 - Present
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Qualification;

import React from "react";
import Typical from "react-typical";
import ScrollService from "../../../utilities/ScrollService";
import "./Profile.css";

export default function Profile() {
  return (
    <div className="profile-container">
      <div className="profile-parent">
        <div className="profile-details">
          <div className="colz">
            <div className="colz-icon">
            <a href="https://www.facebook.com/khan.jawadkhan.509">
                <i className="fa fa-facebook-square" />
              </a>
              <a href="https://github.com/jkbells">
                {/* <i className="fa fa-google-plus-square" /> */}
                <i className="fa fa-github"/>
              </a>
              <a href="https://www.instagram.com/jawadkhan.jkbells/">
                <i className="fa fa-instagram" />
              </a>
              <a href="https://www.youtube.com/@marinelifelovers940/videos">
                <i className="fa fa-youtube-square" />
              </a>
              <a href="https://twitter.com/KhanJawadKhan9">
                <i className="fa fa-twitter" />
              </a>
              <a href="https://www.linkedin.com/in/jkbells/">
                <i className="fa fa-linkedin" />
              </a>
            </div>
          </div>
          <div className="profile-details-name">
            <span className="primary-text">
              {" "}
              Hello, I'M <span className="highlighted-text">Jawad</span>
            </span>
          </div>
          <div className="profile-details-role">
            <span className="primary-text">
              {" "}
              <h1>
                <Typical
                  loop={Infinity}
                  steps={[
                    "Enthusiastic Dev 😎",
                    1000,
                    "Full stack Developer 💻",
                    1000,
                    "Mern stack Dev 📱",
                    1000,
                    "Cross Platform Dev 🔴",
                    1000,
                    "React/React Native 🌐",
                    1000,
                    "Andriod Developer 📱",
                    1000,
                    "Data Scientist🌐",
                    1000,
                  ]}
                />
              </h1>
            </span>
            <span className="profile-role-tagline">
              Knack of building applications with front and back end operations.
            </span>
          </div>

          <div className="profile-options">
            <button className="btn primary-btn"
            onClick={() => ScrollService.scrollHandler.scrollToHireMe()}
            > Hire Me </button>
            <a href="jawad_cv.pdf" download="Jkbells jawad_cv.pdf">
              <button className="btn highlighted-btn">Get Resume</button>
            </a>
          </div>
        </div>
        <div className="profile-picture">
          <div className="profile-picture-background"></div>
        </div>
      </div>
    </div>
  );
}

import React, { useState, useEffect } from "react";
import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading";
import ScrollService from "../../utilities/ScrollService";
import Animations from "../../utilities/Animations";
import "./Resume.css";

const Resume = (props) => {
  /* STATES */
  const [selectedBulletIndex, setSelectedBulletIndex] = useState(0);
  const [carousalOffsetStyle, setCarousalOffsetStyle] = useState({});

  let fadeInScreenHandler = (screen) => {
    if (screen.fadeInScreen !== props.id) return;

    Animations.animations.fadeInScreen(props.id);
  };
  const fadeInSubscription =
    ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

  /* REUSABLE MINOR COMPONENTS */
  const ResumeHeading = (props) => {
    return (
      <div className="resume-heading">
        <div className="resume-main-heading">
          <div className="heading-bullet"></div>
          <span>{props.heading ? props.heading : ""}</span>
          {props.fromDate && props.toDate ? (
            <div className="heading-date">
              {props.fromDate + "-" + props.toDate}
            </div>
          ) : (
            <div></div>
          )}
        </div>
        <div className="resume-sub-heading">
          <span>{props.subHeading ? props.subHeading : ""}</span>
        </div>
        <div className="resume-heading-description">
          <span>{props.description ? props.description : ""}</span>
        </div>
      </div>
    );
  };

  /* STATIC RESUME DATA FOR THE LABELS*/
  const resumeBullets = [
    { label: "Education", logoSrc: "education.svg" },
    { label: "Work History", logoSrc: "work-history.svg" },
    { label: "Programming Skills", logoSrc: "programming-skills.svg" },
    { label: "Projects", logoSrc: "projects.svg" },
    { label: "Interests", logoSrc: "interests.svg" },
  ];

  //here we have
  const programmingSkillsDetails = [
    { skill: "Data Science", ratingPercentage: 65 },
    { skill: "Full Stack Developer", ratingPercentage: 85 },
    { skill: "Mern developer", ratingPercentage: 80 },
    { skill: "Data Visulization", ratingPercentage: 40 },
    { skill: "Amazon Web Services(AWS)", ratingPercentage: 30 },
    { skill: "Machine learning", ratingPercentage: 20 },
    { skill: "Andriod Development", ratingPercentage: 40 },
    { skill: "Digital Marketing", ratingPercentage: 50 },
    { skill: "UI / UX Design", ratingPercentage: 80 },
  ];

  const projectsDetails = [
    {
      title: " Fertilizer Recommendation System (Final Year Project)",
      duration: { fromDate: "2023", toDate: "Present" },
      description:
        "In this project, I present a website in which the following applications are implemented; Fertilizer Recommendation.",
      subHeading: "Technologies Used: Html , Css , javascript , python , Flask",
    },
    {
      title: "Personal Portfolio Website",
      duration: { fromDate: "2023", toDate: "Present" },
      description:
        "A Personal Portfolio Website to showcase all my details and projects at one place.",
      subHeading: "Technologies Used:  React JS, Bootsrap, Node JS",
      
    },
    {
      title: "Auto Spare Parts Management system",
      duration: { fromDate: "2021", toDate: "2022" },
      description:
        "The purpose of this project is to develop an application program to reduce the manual work for managing inventory, product, customer, dealer and orders",
      subHeading: "Technologies Used: Html, Css, Javascript, Scss, Php, Mysql",
    },
  ];

  const resumeDetails = [
    <div className="resume-screen-container" key="education">
      <ResumeHeading
        heading={"Fast National University of Computer and Emerging Sciences "}
        subHeading={"Bachelor of Science in Computer Science (GPA:2.3/4.0)"}
        fromDate={"2019"}
        toDate={"2023"}
      />

      <ResumeHeading
        heading={"Al Beruni Govt College Pind Dadan Khan"}
        subHeading={"F.Sc (Pre Engineering) (MARKS:807/1100)"}
        fromDate={"2018"}
        toDate={"2019"}
      />
      <ResumeHeading
        heading={"Government High School Pind Dadan Khan "}
        subHeading={"Matriculation (Pre Medical) (MARKS:832/1100)"}
        fromDate={"2016"}
        toDate={"2017"}
      />
    </div>,

    /* WORK EXPERIENCE */
    <div className="resume-screen-container" key="work-experience">
      <div className="experience-container">
        <ResumeHeading
          heading={"LetsGrowMore "}
          subHeading={"Web Developer INTERN"}
          fromDate={"Jun 2022"}
          toDate={"Aug 2022"}
        />
        <div className="experience-description">
          <span className="resume-description-text">
            - Worked with basics of HTML, CSS, Javascript and performed
            different level of tasks that were assigned. Also learn the basics
            of Web development through hands-on experience and guidence from
            mentor. I gained valueable skills in coding and web development and
            also in project management that will benifit me in my future
            endeavor.
          </span>
        </div>
        <span className="resume-description-text">
          - I stretch my mental capacity to develope UI as per the given
          designs.
        </span>
        <br />
        <br />
        <ResumeHeading
          heading={"National University of Computer and Emerging Sciences"}
          subHeading={"Teaching Assistant"}
          fromDate={"2021"}
          toDate={"2021"}
        />
        <div className="experience-description">
          <span className="resume-description-text">
            - Involved in setting and checking the assignment and arranging a
            session for students to answer their queries.
          </span>
        </div>
        <span className="resume-description-text">
          - For Programming Fundamentals course
        </span>
        <br />
      </div>
    </div>,

    /* PROGRAMMING SKILLS */
    <div
      className="resume-screen-container programming-skills-container"
      key="programming-skills"
    >
      {programmingSkillsDetails.map((skill, index) => (
        <div className="skill-parent" key={index}>
          <div className="heading-bullet"></div>
          <span>{skill.skill}</span>
          <div className="skill-percentage">
            <div
              style={{ width: skill.ratingPercentage + "%" }}
              className="active-percentage-bar"
            ></div>
          </div>
        </div>
      ))}
    </div>,

    /* PROJECTS */
    <div className="resume-screen-container" key="projects">
      {projectsDetails.map((projectsDetails, index) => (
        <ResumeHeading
          key={index}
          heading={projectsDetails.title}
          subHeading={projectsDetails.subHeading}
          description={projectsDetails.description}
          fromDate={projectsDetails.duration.fromDate}
          toDate={projectsDetails.duration.toDate}
        />
      ))}
    </div>,

    /* Interests */
    <div className="resume-screen-container" key="interests">
      <ResumeHeading
        heading="Teaching"
        description="Apart from being a tech enthusiast and a code writer, i also love to teach people what i know simply because i believe in sharing."
      />
      <ResumeHeading
        heading="Music"
        description="Listening to soothing music is something i can never compromise with, skimming through Spotify's pop songs charts is at times the best stress reliever that i can get my hands on."
      />
      <ResumeHeading
        heading="Competitive Gaming"
        description="I like to challenge my reflexes a lot while competing in football games, pushing the rank and having interactive gaming sessions excites me the most."
      />
    </div>,
  ];

  const handleCarousal = (index) => {
    let offsetHeight = 360;

    let newCarousalOffset = {
      style: { transform: "translateY(" + index * offsetHeight * -1 + "px)" },
    };

    setCarousalOffsetStyle(newCarousalOffset);
    setSelectedBulletIndex(index);
  };

  const getBullets = () => {
    return resumeBullets.map((bullet, index) => (
      <div
        onClick={() => handleCarousal(index)}
        className={
          index === selectedBulletIndex ? "bullet selected-bullet" : "bullet"
        }
        key={index}
      >
        <img
          className="bullet-logo"
          src={require(`../../assets/Resume/${bullet.logoSrc}`)}
          alt="B"
        />
        <span className="bullet-label">{bullet.label}</span>
      </div>
    ));
  };

  const getResumeScreens = () => {
    return (
      <div
        style={carousalOffsetStyle.style}
        className="resume-details-carousal"
      >
        {resumeDetails.map((ResumeDetail) => ResumeDetail)}
      </div>
    );
  };

  useEffect(() => {
    return () => {
      /* UNSUBSCRIBE THE SUBSCRIPTIONS */
      fadeInSubscription.unsubscribe();
    };
  }, [fadeInSubscription]);

  return (
    <div
      className="resume-container screen-container fade-in"
      id={props.id || ""}
    >
      <div className="resume-content">
        <ScreenHeading title={"Resume"} subHeading={"My formal Bio Details"} />
        <div className="resume-card">
          <div className="resume-bullets">
            <div className="bullet-container">
              <div className="bullet-icons"></div>
              <div className="bullets">{getBullets()}</div>
            </div>
          </div>

          <div className="resume-bullet-details">{getResumeScreens()}</div>
        </div>
      </div>
    </div>
  );
};

export default Resume;

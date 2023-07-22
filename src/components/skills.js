import React,{useEffect} from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import ProgressBar from "./progressBar";
import animatedhomepage from "../image/animated.png";
import attendance from "../image/atteandance.png";
import recruitment from "../image/recruitment.png";
export default function Skills() {
  const skill1 = "HTML";
  const skill2 = "CSS";
  const skill3 = "JS";
  const skill4 = "REACT";
  const skill5 = "Nodejs";
  const skill6 = "Mongodb";
  const progressValueHTML = 70;
  const progressValueCSS = 60;
  const progressValueJS = 40;
  const progressValueREACT = 50;
  const progressValueNodejs = 55;
  const progressValueMongodb = 40;
  
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
      mirror: false,
    });
  }, []);
  

  return (
    <>
      <hr />
      <div className="container">
        <div className="section-title " style={{ paddingBottom: 50 }}>
          <h2>Skills</h2>
        </div>

        <div  data-aos="fade-up">
          <ProgressBar value={progressValueHTML} skillName={skill1}  />
          <ProgressBar value={progressValueCSS} skillName={skill2} />
          <ProgressBar skillName={skill3} value={progressValueJS}></ProgressBar>
          <ProgressBar value={progressValueREACT} skillName={skill4} />
          <ProgressBar value={progressValueNodejs} skillName={skill5} />
          <ProgressBar value={progressValueMongodb} skillName={skill6} />
        </div>
      </div>
      <hr />
      <div className="container" id="project">
        <div className="section-title " style={{ paddingBottom: 50 }}>
          <h2>Projects</h2>
        </div>

        <div class="projects">
          <div className="project"data-aos='zoom-in'>
            <img src={animatedhomepage} className="project-img" />
            <h2 className="project-name">Animated homepage</h2>
            <p className="project-details">
              Description: This is an awesome animated homepage I built using
              HTML, CSS.
            </p>

            <div className="button">
              <a className="link"href="https://homepage-animated.vercel.app/" target="_blank">
                View Project
              </a>
            </div>
          </div>
          <div className="project" data-aos='zoom-in' data-aos-delay="500">
            <img src={recruitment} className="project-img" />
            <h2 className="project-name">Recruitment Solution</h2>
            <p className="project-details">
              Description: Developed frontend for Recruitment Solution
              application, enabling user registration, candidate search, and
              connection. Used HTML, CSS, JavaScript. Collaborated and
              implemented features.
            </p>

            <div className="button" >
              <a className="link"href="https://recruitment-solution-frontend.vercel.app/" target="_blank">
                View Project
              </a>
            </div>
          </div>
          <div className="project" data-aos='zoom-in' data-aos-delay="1000">
            <img src={attendance} className="project-img" />
            <h2 className="project-name">Attendance tracker</h2>
            <p className="project-details">
              Description: Developed an attendance management system for
              tracking student attendance. Created a timetable, visual calendar,
              and generated reports. Collaborated on system enhancements.it is made using MERN stack
            </p>
            <div className="button">
              <a className="link" href="https://attendancetracker-frontend.onrender.com/" target="_blank">
                View Project
              </a>
            </div>
          </div>
        </div>
      </div>
      <hr />
      <div className="container" id="resume">
        <div  className="section-title">
          <h2>Resume</h2>
        </div>
        <div className="resume" >
          <a
            href="https://flowcv.com/resume/k8er42o65s"
            target="_blank"
            className="animated-button1"
          >
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            Resume
          </a>
        </div>
      </div>
    </>
  );
}

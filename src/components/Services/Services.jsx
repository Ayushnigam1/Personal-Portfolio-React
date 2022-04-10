import React, { useContext } from "react";
import "./Services.css";
import Card from "../Card/Card";
import HeartEmoji from "../../img/heartemoji.png";
import Glasses from "../../img/glasses.png";
import Humble from "../../img/humble.png";
import { themeContext } from "../../Context";
import { motion } from "framer-motion";
import Resume from './resume.pdf';

const Services = () => {
  // context
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  // transition
  const transition = {
    duration: 1,
    type: "spring",
  };

  return (
    <div className="services" id="services">
      {/* left side */}
      <div className="awesome">
        {/* dark mode */}
        <span style={{ color: darkMode ? "white" : "" }}>My Awesome</span>
        <span>Skills</span>
        <spane>
        <p>I'm a dedicated programmer and love to do <b>CP</b> in Python language</p>
        <p>There are some online course <b>certificates</b> link which is done by me</p>
        <a style={{textDecoration:"none"}} href="https://www.hackerrank.com/certificates/eaded1645600">Python certificate </a>
        <br/>
        <a style={{textDecoration:"none"}} href="https://olympus1.greatlearning.in/course_certificate/EHCTIIDU">MySql certificate </a>
        <br/>
        <a style={{textDecoration:"none"}} href="https://www.credly.com/badges/aa197aa5-9a2b-405f- a54b-a1d6f264b49b?source=linked_in_profile
        ">Introduction to Network certificate </a>
        </spane>
        <a href={Resume} download>
          <button className="button s-button">Download CV</button>
        </a>
        <div className="blur s-blur1" style={{ background: "#ABF1FF94" }}></div>
      </div>
      {/* right */}
      <div className="cards">
        {/* first card */}
        <motion.div
          initial={{ left: "25rem" }}
          whileInView={{ left: "14rem" }}
          transition={transition}
        >
          <Card
            emoji={HeartEmoji}
            heading={"Programming Language"}
            detail={"I use to do programming in C ,  C++,  Python , SQL database"}
          />
        </motion.div>
        {/* second card */}
        <motion.div
          initial={{ left: "-11rem", top: "12rem" }}
          whileInView={{ left: "-4rem" }}
          transition={transition}
        >
          <Card
            emoji={Glasses}
            heading={"Developer"}
            detail={"Html, Css, JavaScript, React, Nodejs, Express, Django, Mongodb, Figma, Django, Typescript"}
            
          />
        </motion.div>
        {/* 3rd */}
        <motion.div
          initial={{ top: "19rem", left: "25rem" }}
          whileInView={{ left: "12rem" }}
          transition={transition}
        >
          <Card
            emoji={Humble}
            heading={"Comptetive Programming"}
            detail={
              "Now a days I love to do CP and My highest rating in codechef is 1636. Once I win the Codekhaze and secured  2nd rank in RGPV"
            }
            color="#DDF8FE"
          />
        </motion.div>
        <div
          className="blur s-blur2"
          style={{ background: "var(--purple)" }}
        ></div>
      </div>
    </div>
  );
};

export default Services;

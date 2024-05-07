import React from "react";
import default_logo from "../../assets/Logo_Blue_White_BG.png";
import bs_logo from "../../assets/Bowstring Studio - Logo - Box White copy.png";
import "./index.css";
import "../../App.css";

export default function WorkExperience() {
  return (
    <div className="Section-Default work-experience">
      <h1 className="section-heading">
        <u>Work Experience</u>
      </h1>
      <div className="work-experience-item">
        <div className="work-experience-text">
          <h1>Default</h1>
          <h2>Co Founder & CTO, 2019 - Current</h2>
        </div>
        <img
          className="work-experience-logo"
          src={default_logo}
          alt="Newcastle University Logo"
        />
      </div>
      <div className="work-experience-item">
        <div className="work-experience-text">
          <h1>Bowstring Studio</h1>
          <h2>Co Founder & Mobile Lead, 2013 - 2019</h2>
        </div>
        <img
          className="work-experience-logo"
          src={bs_logo}
          alt="Jaypee Institute of Information Technology Logo"
        />
      </div>
    </div>
  );
}

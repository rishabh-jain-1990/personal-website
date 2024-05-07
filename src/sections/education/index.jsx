import React from "react";
import ncl_logo from "../../assets/png-transparent-newcastle-university-hd-logo.png";
import jiit_logo from "../../assets/jiit-logo.png";
import "./index.css";
import "../../App.css";

export default function Education() {
  return (
    <div className="section-default education">
      <h1
        className="section-heading"
        style={{ color: "var(--secondary-dark)" }}
      >
        <u>Education</u>
      </h1>
      <div className="education-item">
        <div className="education-text">
          <h1>Newcastle University, UK</h1>
          <h2>B. Eng, Electronics and Computer Science, 2009 - 2011</h2>
        </div>
        <img
          className="education-ncl-img"
          src={ncl_logo}
          alt="Newcastle University Logo"
          title="Newcastle University"
        />
      </div>
      <div className="education-item">
        <div className="education-text">
          <h1>Jaypee Institue of Information Technology, JIIT</h1>
          <h2>B. Tech, Computer Science Engineering, 2008 - 2009</h2>
        </div>
        <img
          className="education-jiit-img"
          src={jiit_logo}
          alt="Jaypee Institute of Information Technology Logo"
          title="Jaypee Institute of Information Technology"
        />
      </div>
    </div>
  );
}

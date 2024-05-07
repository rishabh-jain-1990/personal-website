import React from "react";
import hero_img from "../../assets/1610519214747_plus.jpg";
import { hero_title, hero_subtitle } from "../../utils/Constants";
import "./index.css";
import "../../App.css";

export default function Hero() {
  return (
    <div className="Section-Default hero">
      <div style={{ marginLeft: "50px", marginRight: "50px" }}>
        <h1 style={{ color: "var(--secondary-dark)" }}>{hero_title}</h1>
        <h3 style={{ color: "var(--secondary-dark)", marginTop: "10px" }}>
          {hero_subtitle}
        </h3>
      </div>
      <div className="hero-square">
        <img
          className="hero-image"
          src={hero_img}
          alt="Image of Rishabh Jain"
        ></img>
      </div>
    </div>
  );
}

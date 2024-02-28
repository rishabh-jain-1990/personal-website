import React from "react";
import hero_img from "../assets/img_hero.JPG";

import "../App.css";

export default function Hero() {
return (
  <div className="Section-Default Hero">
    <div>
   <h1 style={{ color: 'var(--primary-dark)' }}>Hi, I'm Rishabh Jain</h1>
   <h3 style={{ color: 'var(--primary-dark)', marginTop:"10px"}}>Entrepreneur | Techie | Adventurer</h3>
   </div>
   <div className="Hero-Square">
    <img className="Hero-Image" src={hero_img}></img>
   </div>
  </div>
);
}
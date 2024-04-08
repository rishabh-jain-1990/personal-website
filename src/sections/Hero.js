import React from "react";
import hero_img from "../assets/1610519214747_plus.jpg";
import {hero_title , hero_subtitle} from "../utils/Constants";

import "../App.css";

export default function Hero() {
return (
  <div className="Section-Default Hero">
    <div>
   <h1 style={{ color: 'var(--primary-dark)' }}>{hero_title}</h1>
   <h3 style={{ color: 'var(--primary-dark)', marginTop:"10px"}}>{hero_subtitle}</h3>
   </div>
   <div className="Hero-Square">
    <img className="Hero-Image" src={hero_img}></img>
   </div>
  </div>
);
}
import React from "react";
import { life_quote } from "../../utils/Constants";
import "./index.css";
import "../../App.css"

export default function LifeQuote() {
  return (
    <div className="section-default life-quote">
      <p className="life-quote-text">{life_quote}</p>
    </div>
  );
}

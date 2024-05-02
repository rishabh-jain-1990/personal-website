import React from "react";
import { life_quote } from "../../utils/Constants";
import "./index.css";
import "../../App.css"

export default function LifeQuote() {
  return (
    <div className="Section-Default life-quote">
      <p className="life-quote-text">{life_quote}</p>
    </div>
  );
}

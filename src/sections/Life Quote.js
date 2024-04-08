import React from "react";
import "../App.css";
import { life_quote } from "../utils/Constants";

export default function LifeQuote() {
  return (
    <div className="Section-Default Life-Quote">
      <p
        style={{
          color: "var(--primary-dark)",
          textAlign: "center",
          marginLeft: "5%",
          marginRight: "5%",
          lineHeight: "40px",
          fontSize: 26,
          whiteSpace: "pre-wrap",
        }}
      >
        {life_quote}
      </p>
    </div>
  );
}

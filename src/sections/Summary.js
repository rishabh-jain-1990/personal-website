import React from "react";
import "../App.css";
import { summary_text } from "../utils/Constants";

export default function Summary() {
  return (
    <div className="Section-Default Summary">
      {/* <h2
        style={{
          color: "var(--primary-dark)",
          textAlign: "center",
          marginLeft: "5%",
          marginRight: "5%",
          lineHeight: 2,
          fontWeight: "300",
          whiteSpace: "pre-wrap",
        }}
      >
        {summary_text}
      </h2> */}
      <div
        dangerouslySetInnerHTML={{ __html: summary_text }}
        style={{
          color: "var(--primary-dark)",
          textAlign: "center",
          marginLeft: "5%",
          marginRight: "5%",
          lineHeight: 2,
          fontWeight: "300",
          fontSize: "21px",
          whiteSpace: "pre-wrap",
        }}
      />
    </div>
  );
}

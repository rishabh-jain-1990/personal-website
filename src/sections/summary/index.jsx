import React from "react";
import { summary_text } from "../../utils/Constants";
import "./index.css";
import "../../App.css"

export default function Summary() {
  return (
    <div className="section-default summary">
      <div
        dangerouslySetInnerHTML={{ __html: summary_text }}
        className="summary-text"
      />
    </div>
  );
}

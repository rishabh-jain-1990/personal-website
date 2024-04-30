import React from "react";
import { summary_text } from "../../utils/Constants";
import "./index.css";

export default function Summary() {
  return (
    <div className="Section-Default summary">
      <div
        dangerouslySetInnerHTML={{ __html: summary_text }}
        className="summary-text"
      />
    </div>
  );
}

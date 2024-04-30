import React from "react";
import "../App.css";
import { summary_text } from "../utils/Constants";

export default function Summary() {
  return (
    <div className="Section-Default Summary">
      <div
        dangerouslySetInnerHTML={{ __html: summary_text }}
        style={styles.summary_text}
      />
    </div>
  );
}

const styles = {
    summary_text:{
        color: "var(--primary-dark)",
        textAlign: "center",
        marginLeft: "5%",
        marginRight: "5%",
        lineHeight: 2,
        fontWeight: "300",
        fontSize: "21px",
        whiteSpace: "pre-wrap",
      }
}
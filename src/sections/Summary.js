import React from "react";
import "../App.css";
import {summary_text} from "../utils/Constants";


export default function Summary() {
  return (
    <div className="Section-Default Summary">
      <h2 style={{ color: 'var(--primary-dark)', textAlign:'center', marginLeft: '5%', marginRight:'5%', 
    lineHeight: 2}}>{summary_text}</h2>
    </div>
  );
}
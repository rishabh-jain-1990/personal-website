import React from "react";
import "../App.css";

export default function Summary({id}) {
  return (
    <div className="Section-Default Summary">
      <h1 style={{ color: 'var(--secondary-dark)' }}>Hello there summary {id}</h1>
    </div>
  );
}
import React from "react";
import { ReactComponent as InstaLogo } from "../assets/Instagram_Glyph_Black.svg";
import { ReactComponent as GitLogo } from "../assets/github-mark.svg";
import { ReactComponent as LiLogo } from "../assets/icons8-linkedin.svg";
import { ReactComponent as XLogo } from "../assets/x_logo.svg";
import { ReactComponent as MediumLogo } from "../assets/Medium_Symbol_NoPadding.svg";
import { openInNewTab } from "../utils/Methods.js";

export default function SocialMedia() {
  return (
    <div
      className="Section-Default Social-Media"
      style={{ flexDirection: "column", justifyContent: "center" }}
    >
      <h1 style={{ color: "white", marginTop: "5%" }}>Social Media</h1>
      <div
        style={{
          flexDirection: "row",
          display: "flex",
          justifyContent: "space-evenly",
          width: "100%",
          flexWrap: "wrap",
          marginTop: "auto",
          marginBottom: "auto",
          gap: "50px",
        }}
      >
        {/* Here Div should be replaced with button, styling of the SVG icons should be done in CSS file to stop repeating the code */}
        <div
          onClick={() => openInNewTab("https://www.instagram.com/rjain90")}
          className="Social-Media-Item"
        >
          <InstaLogo fill="white" style={{ width: "100px", height: "100px" }} />
        </div>
        <div
          onClick={() => openInNewTab("https://github.com/rishabh-jain-1990")}
          className="Social-Media-Item"
        >
          <GitLogo fill="white" style={{ width: "100px", height: "100px" }} />
        </div>
        <div
          onClick={() => openInNewTab("https://www.linkedin.com/in/rjain90")}
          className="Social-Media-Item"
        >
          <LiLogo fill="white" style={{ width: "100px", height: "100px" }} />
        </div>
        <div
          onClick={() => openInNewTab("https://twitter.com/rjain90")}
          className="Social-Media-Item"
        >
          <XLogo fill="white" style={{ width: "100px", height: "100px" }} />
        </div>
        <div
          onClick={() => openInNewTab("https://medium.com/@rjain90")}
          className="Social-Media-Item"
        >
          <MediumLogo
            fill="white"
            style={{ width: "120px", height: "100px" }}
          />
        </div>
      </div>
    </div>
  );
}

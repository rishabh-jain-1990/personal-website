import React from "react";
import { ReactComponent as InstaLogo } from "../../assets/Instagram_Glyph_Black.svg";
import { ReactComponent as GitLogo } from "../../assets/github-mark.svg";
import { ReactComponent as LiLogo } from "../../assets/icons8-linkedin.svg";
import { ReactComponent as XLogo } from "../../assets/x_logo.svg";
import { ReactComponent as MediumLogo } from "../../assets/Medium_Symbol_NoPadding.svg";
import { openInNewTab } from "../../utils/Methods.js";
import "./index.css"

export default function SocialMedia() {
  return (
    <div className="Section-Default social-media">
      <h1 style={{ color: "white", marginTop: "5%" }}>Social Media</h1>
      <div className="social-media-container">
        <div
          onClick={() => openInNewTab("https://www.instagram.com/rjain90")}
          className="social-media-item"
        >
          <InstaLogo className="social-media-item-logo" />
        </div>
        <div
          onClick={() => openInNewTab("https://github.com/rishabh-jain-1990")}
          className="social-media-item"
        >
          <GitLogo className="social-media-item-logo" />
        </div>
        <div
          onClick={() => openInNewTab("https://www.linkedin.com/in/rjain90")}
          className="social-media-item"
        >
          <LiLogo className="social-media-item-logo" />
        </div>
        <div
          onClick={() => openInNewTab("https://twitter.com/rjain90")}
          className="social-media-item"
        >
          <XLogo className="social-media-item-logo" />
        </div>
        <div
          onClick={() => openInNewTab("https://medium.com/@rjain90")}
          className="social-media-item"
        >
          <MediumLogo className="social-media-item-logo" />
        </div>
      </div>
    </div>
  );
}

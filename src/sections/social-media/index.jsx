import React from "react";
import { ReactComponent as InstaLogo } from "../../assets/Instagram_Glyph_Black.svg";
import { ReactComponent as GitLogo } from "../../assets/github-mark.svg";
import { ReactComponent as LiLogo } from "../../assets/icons8-linkedin.svg";
import { ReactComponent as XLogo } from "../../assets/x_logo.svg";
import { ReactComponent as MediumLogo } from "../../assets/Medium_Symbol_NoPadding.svg";
import { openInNewTab } from "../../utils/Methods.js";
import "./index.css";
import "../../App.css";

export default function SocialMedia() {
  return (
    <div className="section-default social-media">
      <h1
        className="section-heading"
        style={{ color: "var(--secondary-dark)" }}
      >
        <u>Social Media</u>
      </h1>
      <div className="social-media-container">
        <div
          onClick={() => openInNewTab("https://www.instagram.com/rjain90")}
          className="social-media-item"
        >
          <InstaLogo
            className="social-media-item-logo"
            alt="Instagram, Link: https://www.instagram.com/rjain90"
            title="Instagram"
          />
        </div>
        <div
          onClick={() => openInNewTab("https://github.com/rishabh-jain-1990")}
          className="social-media-item"
        >
          <GitLogo
            className="social-media-item-logo"
            alt="Github, Link: https://github.com/rishabh-jain-1990"
            title="Github"
          />
        </div>
        <div
          onClick={() => openInNewTab("https://www.linkedin.com/in/rjain90")}
          className="social-media-item"
        >
          <LiLogo
            className="social-media-item-logo"
            alt="LinkedIn, Link: https://www.linkedin.com/in/rjain90"
            title="LinkedIn"
          />
        </div>
        <div
          onClick={() => openInNewTab("https://twitter.com/rjain90")}
          className="social-media-item"
        >
          <XLogo
            className="social-media-item-logo"
            style={{ height: "85px", width: "85px" }}
            alt="X (ex Twitter), Link: https://twitter.com/rjain90"
            title="X (ex Twitter)"
          />
        </div>
        <div
          onClick={() => openInNewTab("https://medium.com/@rjain90")}
          className="social-media-item"
        >
          <MediumLogo
            className="social-media-item-logo"
            alt="Medium Logo, Link: https://medium.com/@rjain90"
            title="Medium"
          />
        </div>
      </div>
    </div>
  );
}

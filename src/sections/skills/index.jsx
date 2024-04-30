import React from "react";
import { ReactComponent as AndroidLogo } from "../../assets/Android_logo_2023_(stacked).svg";
import { ReactComponent as IosLogo } from "../../assets/ios.svg";
import { ReactComponent as NodeLogo } from "../../assets/nodejsStackedDark.svg";
import { ReactComponent as JavaLogo } from "../../assets/java-horizontal-cropped.svg";
import { ReactComponent as ReactLogo } from "../../assets/react-2.svg";
import { ReactComponent as ReactNativeLogo } from "../../assets/react-native-1.svg";
import { ReactComponent as GenAILogo } from "../../assets/openai.svg";
import { ReactComponent as PostgresLogo } from "../../assets/Postgresql_elephant.svg";
import { ReactComponent as ElasticLogo } from "../../assets/Elasticsearch_logo.svg";
import { ReactComponent as AWSLogo } from "../../assets/Amazon_Web_Services_Logo.svg";
import "./index.css"

export default function Skills() {
  return (
    <div className="Section-Default skills">
      <h2 style={{ color: "var(--primary-dark)", fontSize: "28px" }}>
        <u>Technical Skills</u>
      </h2>
      <div
        style={{
          flexDirection: "row",
          display: "flex",
          width: "100%",
          flexWrap: "wrap",
          alignItems: "center",
          justifyContent: "space-evenly",
        }}
      >
        <p
          className="skill-technical-item"
          style={{
            color: "var(--primary-dark)",
            textAlign: "center",
            fontSize: 32,
            fontWeight: "bold",
            alignContent: "center",
          }}
        >
          System
          <br />
          Design
        </p>
        <div>
          <AndroidLogo
            className="skill-technical-item"
            style={{
              width: "100px",
            }}
            title="Android"
            alt="Android Logo"
          />
        </div>
        <div>
          <IosLogo
            className="skill-technical-item"
            style={{
              width: "100px",
            }}
            title="iOS"
            alt="iOS Logo"
          />
        </div>
        <div>
          <JavaLogo
            className="skill-technical-item"
            style={{
              width: "100px",
            }}
            title="Java"
            alt="Java Logo"
          />
        </div>
        <div>
          <NodeLogo
            className="skill-technical-item"
            style={{
              width: "100px",
            }}
            title="NodeJS"
            alt="NodeJS Logo"
          />
        </div>
        <div>
          <ReactLogo
            className="skill-technical-item"
            style={{
              width: "100px",
            }}
            title="ReactJS"
            alt="ReactJS Logo"
          />
        </div>
        <div>
          <ReactNativeLogo
            className="skill-technical-item"
            style={{
              width: "110px",
            }}
            title="React Native"
            alt="React Native Logo"
          />
        </div>
        <div>
          <GenAILogo
            className="skill-technical-item"
            style={{
              width: "100px",
            }}
            title="Generative AI"
            alt="Generative AI Logo"
          />
        </div>
        <div>
          <PostgresLogo
            className="skill-technical-item"
            stroke="var(--secondary-dark)"
            style={{
              width: "100px",
            }}
            title="PostgresSQL"
            alt="PostgresSQL Logo"
          />
        </div>
        <div>
          <AWSLogo
            className="skill-technical-item"
            style={{
              width: "100px",
            }}
            title="AWS"
            alt="AWS Logo"
          />
        </div>
        <div>
          <ElasticLogo
            className="skill-technical-item"
            style={{
              width: "250px",
            }}
            title="Elastic Search"
            alt="Elastic Search Logo"
          />
        </div>
      </div>

      <h2
        style={{
          color: "var(--primary-dark)",
          marginTop: "4%",
          fontSize: "28px",
        }}
      >
        <u>People Skills</u>
      </h2>
      <div
        style={{
          flexDirection: "row",
          display: "flex",
          width: "100%",
          flexWrap: "wrap",
          alignItems: "center",
          justifyContent: "space-evenly",
        }}
      >
        <p className="skill-people-item">Cross-functional Team Leadership</p>
        <p className="skill-people-item">Strategic Networking</p>
        <p className="skill-people-item">Talent Acquisition & Development</p>
        <p className="skill-people-item">Conflict Management</p>
        <p className="skill-people-item">Product Management</p>
      </div>
    </div>
  );
}

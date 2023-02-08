import React from "react";

// Components
import { Button } from "../Button/Button";
import logo from "../../assets/walmart.png";

// Styles
import "./experience.css";

export const Experience = ({
  companyName,
  jobTitle,
  dates,
  place,
  description,
  tools,
  link,
}) => (
  <div className="card">
    <div>
      <img src={logo} className="logo" />
      <div className="info">
        <h1>{jobTitle}</h1>
        <h2>{companyName}</h2>
        <h2>{dates}</h2>
        <h2>{place}</h2>
      </div>
    </div>
    <ul>
      <li>{description[0]}</li>
      <li>{description[1]}</li>
      <li>{description[2]}</li>
    </ul>
    <div className="tags">
      <p>Languages</p>
      <div className="tag">
        <h1>JavaScript</h1>
      </div>
      <p>Tools</p>
      <div className="tag">
        <h1>JavaScript</h1>
      </div>
      <p>Skills</p>
      <div className="tag">
        <h1>JavaScript</h1>
      </div>
    </div>
    <div className="button">
      <Button size="small" label="More Info" />
    </div>
  </div>
);

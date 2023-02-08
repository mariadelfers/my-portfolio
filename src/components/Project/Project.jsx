import React from "react";

// Components
import { Button } from "../Button/Button";

// Styles
import "./project.css";

export const Project = ({ name, description, tools, link }) => (
  <div className="card">
    <div className="info">
      <h1>{name}</h1>
      <p>{description}</p>
    </div>
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

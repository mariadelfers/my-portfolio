import React from "react";
import { Container } from "react-bootstrap";
import Techstack from "../../components/skills/techstack";
import Frontend from "../../components/skills/frontend";
import Backend from "../../components/skills/backend";

function Skills() {
  return (
    <Container fluid className="about-section">
      <Container>
        <h1 className="project-heading">
          My <strong className="purple">skills </strong>
        </h1>
        <Techstack />
        <h1 className="project-heading">
          Front <strong className="purple">end</strong>
        </h1>
        <Frontend />
        <h1 className="project-heading">
          Back <strong className="purple">end</strong>
        </h1>
        <Backend />
      </Container>
    </Container>
  );
}

export default Skills;

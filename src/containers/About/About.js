import React from "react";
import { Container } from "react-bootstrap";
import Techstack from "../../components/about/Techstack";
import Toolstack from "../../components/about/Toolstack";
import Info from "../../components/about/Info";

function About() {
  return (
    <Container fluid className="about-section">
      <Container>
        <Info />
        <h1 className="project-heading">
          My <strong className="purple">Skills </strong>
        </h1>
        <Techstack />
        <h1 className="project-heading">
          <strong className="purple">Tools</strong>
        </h1>
        <Toolstack />
      </Container>
    </Container>
  );
}

export default About;

import React from "react";
import { Container } from "react-bootstrap";
import Techstack from "../../components/About/Techstack";
import Toolstack from "../../components/About/Toolstack";
import Info from "../../components/About/Info";

function About() {
  return (
    <Container fluid className="about-section">
      <Container>
        <Info />
      </Container>
    </Container>
  );
}

export default About;

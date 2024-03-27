import React from "react";
import { Container } from "react-bootstrap";
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

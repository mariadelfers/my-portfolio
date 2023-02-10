import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../../components/core/Particle";
import Github from "../../components/about/Github";
import Techstack from "../../components/about/Techstack";
import Aboutcard from "../../components/about/AboutCard";
import laptopImg from "../../assets/about.png";
import Toolstack from "../../components/about/Toolstack";
import Info from "../../components/about/Info";

function About() {
  return (
    <Container fluid className="about-section">
      <Particle />
      <Container>
       
        <Info />
        <h1 className="project-heading">
          Professional <strong className="purple">Skillset </strong>
        </h1>

        <Techstack />

        <h1 className="project-heading">
          <strong className="purple">Tools</strong> I use
        </h1>
        <Toolstack />

        <Github />
      </Container>
    </Container>
  );
}

export default About;

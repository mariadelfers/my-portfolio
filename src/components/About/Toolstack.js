import React from "react";
import { Col, Row } from "react-bootstrap";
import { DiNetbeans } from "react-icons/di";
import {
  SiVisualstudiocode,
  SiPostman,
  SiAndroidstudio,
  SiXcode,
  SiFigma,
  SiStorybook,
  SiXampp,
  SiMariadb,
} from "react-icons/si";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode />
        <p>Visual Studio</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPostman />
        <p>Postman</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiAndroidstudio />
        <p>Android Studio</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiXcode />
        <p>Xcode</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiFigma />
        <p>Figma</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiStorybook />
        <p>Storybook</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiNetbeans />
        <p>Netbeans</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiXampp />
        <p>Xampp</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiMariadb />
        <p>MariaDB</p>
      </Col>
    </Row>
  );
}

export default Toolstack;

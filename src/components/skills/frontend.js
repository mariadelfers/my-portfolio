import React from "react";
import { Col, Row } from "react-bootstrap";
import { DiJavascript1, DiReact, DiHtml5, DiCss3 } from "react-icons/di";
import {
  SiFigma,
  SiJest,
  SiReactrouter,
  SiRedux,
  SiReduxsaga,
  SiStorybook,
  SiTypescript,
} from "react-icons/si";

function Frontend() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiTypescript />
        <p>Typescript</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiJavascript1 />
        <p>Javascript</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiHtml5 />
        <p>HTML</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiCss3 />
        <p>CSS</p>
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
        <DiReact />
        <p>React</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiReactrouter />
        <p>React Router</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiRedux />
        <p>React Redux</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiReduxsaga />
        <p>React Sagas</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiJest />
        <p>Jest</p>
      </Col>
    </Row>
  );
}

export default Frontend;

import React from "react";
import { Col, Row } from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiGit,
  DiJava,
  DiJira,
  DiHtml5,
  DiCss3,
} from "react-icons/di";
import {
  SiNextdotjs,
  SiElixir,
  SiMysql,
  SiBitbucket,
  SiJest,
  SiRedux,
  SiReduxsaga,
  SiJson,
  SiFlask,
  SiTypescript,
  SiCplusplus,
} from "react-icons/si";

function Techstack() {
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
        <DiJava />
        <p>Java</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiElixir />
        <p>Elixir</p>
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
        <SiCplusplus />
        <p>C++</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiReact />
        <p>React</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiNodejs />
        <p>Nodejs</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiMysql />
        <p>MySQL</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiMongodb />
        <p>MongoDB</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiJest />
        <p>Jest</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiJira />
        <p>JIRA</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiRedux />
        <p>Redux</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiReduxsaga />
        <p>Sagas</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiJson />
        <p>JSON</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiFlask />
        <p>Flask</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiBitbucket />
        <p>Bitbucket</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiGit />
        <p>Github</p>
      </Col>
    </Row>
  );
}

export default Techstack;

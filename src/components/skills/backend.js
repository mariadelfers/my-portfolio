import React from "react";
import { Col, Row } from "react-bootstrap";
import { DiMongodb, DiNodejs, DiPhp } from "react-icons/di";
import {
  SiPostman,
  SiXampp,
  SiMariadb,
  SiPostgresql,
  SiMysql,
  SiJson,
  SiFlask,
} from "react-icons/si";

function Backend() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiPostman />
        <p>Postman</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPostgresql />
        <p>Postgresql</p>
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
        <SiMariadb />
        <p>MariaDB</p>
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
        <SiXampp />
        <p>Xampp</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiPhp />
        <p>PHP</p>
      </Col>
    </Row>
  );
}

export default Backend;

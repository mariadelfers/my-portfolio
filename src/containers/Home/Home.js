import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Type from "../../components/Home/Type";

function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Container className="home-content">
          <Row>
            <Col md={15} className="home-header">
             
              <h1 className="heading-name">
                <strong className="main-name"> María Fernanda Hernández</strong>
              </h1>
              <h1 style={{ paddingBottom: 15 }} className="heading">
                Portfolio
              </h1>

              <div style={{ textAlign: "center" }}>
                <Type />
              </div>
            </Col>
          </Row>
        </Container>
      </Container>
    </section>
  );
}

export default Home;

import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/photo.jpg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
  AiFillYoutube,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              About <span className="purple"> Me </span>
            </h1>
            <Row>
              <Col md={12} className="home-about-social">
                <ul className="home-about-social-links">
                  <li className="social-icons">
                    <a
                      href="https://github.com/mariadelfers"
                      target="_blank"
                      rel="noreferrer"
                      className="icon-colour  home-social-icons"
                    >
                      <AiFillGithub />
                    </a>
                  </li>
                  <li className="social-icons">
                    <a
                      href="https://www.linkedin.com/in/mar%C3%ADa-fernanda-hern%C3%A1ndez-8a2098182/"
                      target="_blank"
                      rel="noreferrer"
                      className="icon-colour  home-social-icons"
                    >
                      <FaLinkedinIn />
                    </a>
                  </li>
                  <li className="social-icons">
                    <a
                      href="https://twitter.com/mariadelfers"
                      target="_blank"
                      rel="noreferrer"
                      className="icon-colour  home-social-icons"
                    >
                      <AiOutlineTwitter />
                    </a>
                  </li>
                  <li className="social-icons">
                    <a
                      href="https://www.instagram.com/mariadelfers"
                      target="_blank"
                      rel="noreferrer"
                      className="icon-colour home-social-icons"
                    >
                      <AiFillInstagram />
                    </a>
                  </li>
                  <li className="social-icons">
                    <a
                      href="https://www.youtube.com/@mariadelfers"
                      target="_blank"
                      rel="noreferrer"
                      className="icon-colour  home-social-icons"
                    >
                      <AiFillYoutube />
                    </a>
                  </li>
                </ul>
              </Col>
            </Row>
            <p className="home-about-body">
              I'm a <b className="purple">software engineer,</b> but I'm a
              runner, traveler, and video game player too. I have a master's
              degree in horror movies and suspense series. I like to transform
              my clothes, and my extreme sport is to taste every dish in the
              world.
              <br />
              <br />
              I like to create and develop tools that can help. It makes me
              happy when my work is tangible and has a positive impact.
              <br />
              <br />I studied at Instituto Tecnológico de Estudios Superiores de
              Monterrey (ITESM) from 2015 to 2020 and get a
              <b className="purple"> B.S. in Computer Science and Technology </b>
              with GPA of 3.7
              <br />I also studied for one semester in Netherlands at Fontys
              University of Applied Sciences in 2019 to get a Minor in EMBRACE
              TEC
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;

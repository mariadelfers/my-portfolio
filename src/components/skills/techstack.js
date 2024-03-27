import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  DiAndroid,
  DiApple,
  DiCisco,
  DiGit,
  DiGitBranch,
  DiGitCommit,
  DiGitPullRequest,
  DiIllustrator,
  DiJava,
  DiJira,
  DiNetbeans,
  DiPython,
  DiRasberryPi,
  DiResponsive,
  DiScrum,
  DiSublime,
} from "react-icons/di";
import {
  SiElixir,
  SiBitbucket,
  SiCplusplus,
  SiVisualstudiocode,
  SiAndroidstudio,
  SiXcode,
  SiAudacity,
  SiAtom,
} from "react-icons/si";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <DiJira />
        <p>JIRA</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiScrum />
        <p>SCRUM</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiBitbucket />
        <p>Bitbucket</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiGit />
        <p>Github</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiCplusplus />
        <p>C++</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiElixir />
        <p>Elixir</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiJava />
        <p>Java</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiPython />
        <p>Python</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiNetbeans />
        <p>Netbeans</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode />
        <p>Visual Studio</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiAtom />
        <p>Atom</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiSublime />
        <p>Sublime</p>
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
        <DiAndroid />
        <p>Android</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiApple />
        <p>Apple</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiGitBranch />
        <p>Git Branch</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiGitCommit />
        <p>Git Commit</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiGitPullRequest />
        <p>Git Pull Request</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiIllustrator />
        <p>Ilustrator</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiRasberryPi />
        <p>RasberryPi</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiResponsive />
        <p>Responsive</p>
      </Col>
    </Row>
  );
}

export default Techstack;

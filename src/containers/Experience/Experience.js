import React from "react";
import { Container, Row, Col } from "react-bootstrap";

// Components
import ExperienceCard from "../../components/experience/experience-card";

// Images
import walmart from "../../Assets/experience/walmart.png";
import ternium from "../../Assets/experience/ternium.png";
import volkswagen from "../../Assets/experience/volkswagen.png";
import mexilab from "../../Assets/experience/mexilab.png";

// Styles
import "./styles.css";

function Experience() {
  return (
    <Container fluid className="experience-section">
      <Container>
        <h1 className="experience-heading">
          My <strong className="experience-title">Experience </strong>
        </h1>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="experience-card">
            <ExperienceCard
              imgPath={walmart}
              jobTitle="Software Engineer II"
              company="Walmart International"
              companyLink="https://corporate.walmart.com/about#walmart-international"
              date="July 2020 - Currently"
              description="Personal Chat Room or Workspace to share resources and hangout with friends build with react.js, Material-UI, and Firebase. Have features which allows user for realtime messaging, image sharing as well as supports reactions on messages."
              tools="React Native,JavaScript,TypeScript,Redux,Sagas,Flipper,Jest,MySQL,XCode,Android Studio,Appium,Github,JIRA,Confluence,Postman"
              ghLink="github-link"
              moreInfo="link"
            />
          </Col>

          <Col md={4} className="experience-card">
            <ExperienceCard
              imgPath={ternium}
              jobTitle="Back-end Developer Intern"
              company="Ternium Mexico"
              companyLink="https://www.ternium.com/en"
              date="August 2018 - November 2018"
              description="Personal Chat Room or Workspace to share resources and hangout with friends build with react.js, Material-UI, and Firebase. Have features which allows user for realtime messaging, image sharing as well as supports reactions on messages."
              tools="MySQL,MongoDB,API RESTFul,JSON,Python,Flask,CISCO Systems,Github"
              ghLink="github-link"
              moreInfo="link"
            />
          </Col>

          <Col md={4} className="experience-card">
            <ExperienceCard
              imgPath={volkswagen}
              jobTitle="App Mobile Developer Intern"
              company="Volkswagen Mexico"
              companyLink="https://www.vw.com.mx/es/informacion-corporativa.html"
              date="January 2018 - May 2018"
              description="Mobile application for internal use of the company and its employees. It helps the employees move inside the buildings"
              tools="XCode,Swift,Unit Test"
              ghLink="github-link"
              moreInfo="link"
            />
          </Col>

          <Col md={4} className="experience-card">
            <ExperienceCard
              imgPath={mexilab}
              jobTitle="Fullstack Developer Intern"
              company="MexiLab"
              date="August 2019 - June 2020"
              description="Personal Chat Room or Workspace to share resources and hangout with friends build with react.js, Material-UI, and Firebase. Have features which allows user for realtime messaging, image sharing as well as supports reactions on messages."
              tools="ReactJS,JavaScript,MaterialUI,Storybook,MySQL,API RESTFul,JSON,Python,Flask,Github"
              ghLink="github-link"
              moreInfo="link"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Experience;

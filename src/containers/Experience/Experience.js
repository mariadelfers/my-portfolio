import React from "react";
import { Container, Row, Col } from "react-bootstrap";

// Components
import ExperienceCard from "../../components/experience/experience-card";
import Particle from "../../components/core/Particle";

// Images
import walmart from "../../Assets/experience/walmart.png";
import ternium from "../../Assets/experience/ternium.png";
import volkswagen from "../../Assets/experience/volkswagen.png";
import mexilab from "../../Assets/experience/mexilab.png";
import fontys from "../../Assets/experience/fontys.png"

// Styles
import "./styles.css";

function Experience() {
  return (
    <Container fluid className="experience-section">
      <Container>
      <Particle />
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
              description="I support mobile applications for Walmart Store's workers in Mexico, Canada, America Central, the UK, China, Chile, etc. Also, I develop apps for those countries for Android and iOS, using React Native, JavaScript, and Typescript. And I do testing each feature with Jest and Testing Library. We work by sprints using JIRA, and we develop by CI/CD."
              tools="React Native,JavaScript,TypeScript,Redux,Sagas,Flipper,Jest,MySQL,XCode,Android Studio,Appium,Github,JIRA,Confluence,Postman"
             // ghLink="https://play.google.com/store/apps/details?id=com.walmart.squiggly&hl=es_MX&gl=US&pli=1"
              moreInfo="https://one.walmart.com/content/usone/en_us/company/programs/me-app.html"
            />
          </Col>

          <Col md={4} className="experience-card">
            <ExperienceCard
              imgPath={ternium}
              jobTitle="Back-end Developer Intern"
              company="Ternium Mexico"
              companyLink="https://www.ternium.com/en"
              date="August 2018 - November 2018"
              description="As a team, we created a system for the internal use of the factory. We developed a database in MySQL for static data as ids and MongoDB to store real-time data. So that the front-end team could consume our data we created a RESTful API with Python. Also, we  connect our API to Ternium's Cisco system to get the neccesary data."
              tools="MySQL,MongoDB,API RESTFul,JSON,Python,Flask,CISCO Systems,Github"
              ghLink="https://github.com/mariadelfers/ternium-back-end-project"
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

          <Col md={4} className="experience-card">
            <ExperienceCard
              imgPath={fontys}
              jobTitle="EmbraceTEC Exchange Program"
              company="Fontys"
              companyLink="https://fontys.edu/Home.htm"
              date="February 2019 - July 2019"
              description="Personal Chat Room or Workspace to share resources and hangout with friends build with react.js, Material-UI, and Firebase. Have features which allows user for realtime messaging, image sharing as well as supports reactions on messages."
              tools="Design Thinking,Unreal Engine,Excel,QlikSense,Firebase,3D Printing,Arduino,Python,RaspberryPi,"
              moreInfo="https://maria-embracetec.tumblr.com/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Experience;

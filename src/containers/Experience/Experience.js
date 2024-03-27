import React from "react";
import { Container } from "react-bootstrap";

// Components
import ExperienceCard from "../../components/experience/experience-card";

// Images
import walmart from "../../Assets/experience/walmart.png";
import ternium from "../../Assets/experience/ternium.png";
import volkswagen from "../../Assets/experience/volkswagen.png";
import mexilab from "../../Assets/experience/mexilab.png";
import fontys from "../../Assets/experience/fontys.png";

// Portfolio
import walmart1 from "../../Assets/experience/walmart/walmart1.png";
import walmart2 from "../../Assets/experience/walmart/walmart2.png";
import walmart3 from "../../Assets/experience/walmart/walmart3.png";
import mexilab1 from "../../Assets/experience/mexilab/mexilab1.png";

// Styles
import "./styles.css";

function Experience() {
  return (
    <Container fluid className="experience-section">
      <Container>
        <ExperienceCard
          imgPath={walmart}
          jobTitle="Software engineer II"
          company="Walmart International"
          companyLink="https://corporate.walmart.com/about#walmart-international"
          date="July 2020 - Currently"
          place="Mexico City, Mexico"
          description="Develop, support, and maintain mobile applications for Walmart store workers globally, with a focus on
          markets including Mexico, Canada, Central America, Chile, and the USA. Devising solutions that are
          adaptable across all markets.
          •Provide support for legacy applications in the UK, Chile, China, and Argentina.
          •Use React Native for cross-platform development, creating mobile apps that function seamlessly on both iOS
          and Android devices.
          •Utilize JavaScript and TypeScript for application development, leveraging these languages to build robust,
          efficient, and scalable apps.
          •Engage in the entire application lifecycle, from the initial concept and development to launch, maintenance,
          and iterative improvements.
          •Perform rigorous unit testing with Jest, Cucumber, and testing-library to ensure the apps meet high-quality
          standards.
          •Work with Figma for UI/UX design, emphasizing responsive design to ensure applications are optimized for a
          variety of devices and screen sizes.
          •Follow CI/CD practices for efficient and reliable app deployment and updates.
          •Use Git for version control, maintaining code integrity and facilitating collaborative development.
          •Implement Scrum methodology for agile project management, ensuring timely delivery of app features and
          updates.
          •Conduct monthly release cycles, involving extensive testing and review to maintain application performance
          and user satisfaction across all platforms.
          •Address and resolve incidents related to the apps, ensuring continuous service availability and a positive
          user experience for Walmart’s global workforce."
          img1={walmart1}
          img2={walmart2}
          img3={walmart3}
          tools="React Native,JavaScript,TypeScript,Redux,Sagas,Flipper,Jest,MySQL,XCode,Android Studio,Appium,Github,JIRA,Confluence,Postman"
          moreInfo="https://one.walmart.com/content/usone/en_us/company/programs/me-app.html"
        />

        <ExperienceCard
          imgPath={mexilab}
          jobTitle="Fullstack developer jr"
          company="MexiLab"
          date="August 2019 - June 2020"
          place="Puebla, Mexico"
          description="
          Developed a web application for controlling electronic devices in homes and offices, enhancing user
          experience and operational efficiency.
          •Utilized React JS and Storybooks for front-end development, ensuring a responsive and intuitive user
          interface, with Material-UI for icons.
          •Designed and implemented a secure MySQL database with stored procedures to enhance data security and
          integrity, managed via Xampp.
         • Created a RESTful API using Python within the Anaconda environment for seamless web application and
          database communication.
          • Organized and managed the development process using the Scrum methodology, promoting team
          collaboration and project transparency.
          • Employed NodeJS for the server environment, ensuring robust backend services.
          • Used Balsamiq and Figma for creating detailed UI/UX design mockups and sketches, facilitating a clear vision
          of the final product."
          img4={mexilab1}
          tools="ReactJS,JavaScript,MaterialUI,Storybook,MySQL,API RESTFul,JSON,Python,Flask,Github"
          ghLink="https://github.com/mariadelfers/control-of-energy-consumption"
          //moreInfo="link"
        />

        <ExperienceCard
          imgPath={fontys}
          jobTitle="EmbraceTEC Exchange Program"
          company="Fontys"
          companyLink="https://fontys.edu/Home.htm"
          date="February 2019 - July 2019"
          place="Eidhoven, Netherlands"
          description="I studied for 6 months abroad, in the Netherlands. 
          •I had a lot of culture shocks from which I learned, improved my English, and learned a lot about design. 
          •The program I took was very focused on how to obtain requirements, understand the user, design solutions, and improve them."
          tools="Design Thinking,Unreal Engine,Excel,QlikSense,Firebase,3D Printing,Arduino,Python,RaspberryPi,"
          moreInfo="https://maria-embracetec.tumblr.com/"
        />

        <ExperienceCard
          imgPath={ternium}
          jobTitle="Back end developer intern"
          company="Ternium Mexico"
          companyLink="https://www.ternium.com/en"
          date="August 2018 - November 2018"
          place="Monterrey, Mexico"
          description="Collaborated with a team to develop a system for internal use within the factory.
          • Implemented a MySQL database for storing static data such as employee information and utilized MongoDB
          for real-time data.
          • Enhanced database functionality by incorporating stored procedures for improved efficiency and security.
          • Created a RESTful API using Python to integrate Ternium's Cisco system with the internal software
          infrastructure."
          tools="MySQL,MongoDB,API RESTFul,JSON,Python,Flask,CISCO Systems,Github"
          ghLink="https://github.com/mariadelfers/ternium-back-end-project"
        />

        <ExperienceCard
          imgPath={volkswagen}
          jobTitle="App mobile developer intern"
          company="Volkswagen Mexico"
          companyLink="https://www.vw.com.mx/es/informacion-corporativa.html"
          date="January 2018 - May 2018"
          place="Puebla, Mexico"
          description="Developed a mobile application for internal company use, catering to the needs of employees.
          • Created an iOS application using Xcode and Swift, ensuring compatibility and optimization for Apple devices.
          • Integrated Google Maps API to provide location-based services and functionalities within the application."
          tools="XCode,Swift,Unit Test"
          //ghLink="github-link"
          //moreInfo="link"
        />
      </Container>
    </Container>
  );
}

export default Experience;

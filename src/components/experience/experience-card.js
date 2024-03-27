import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { BsGithub, BsPlus } from "react-icons/bs";
import "./styles.css";
import { Badge } from "react-bootstrap";

function ExperienceCard(props) {
  return (
    <div className="experience-card">
      <div style={{ display: "flex", alignItems: "center" }}>
        <div className="experience-card-imagen">
          <img src={props.imgPath} alt={props.company} />
        </div>

        <div>
          <div style={{ display: "flex", alignItems: "center" }}>
            <Card.Title
              className="experience-title"
              style={{ fontWeight: "bold" }}
            >
              {props.jobTitle}
            </Card.Title>
            <Card.Title
              className="experience-company"
              style={{ textAlign: "center" }}
              href={props.moreInfo}
            >
              {props.company}
            </Card.Title>
          </div>
          <Card.Text className="experience-info" style={{ textAlign: "left" }}>
            {props.date}
          </Card.Text>
          <Card.Text className="experience-info" style={{ textAlign: "left" }}>
            {props.place}
          </Card.Text>
        </div>
      </div>

      <Card.Body>
        <div>
          {props.description.split("•").map((point) => (
            <Card.Text style={{ textAlign: "justify" }}>
              {"•"}
              {point}
            </Card.Text>
          ))}
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginTop: 30,
            marginBottom: 30,
          }}
        >
          {props.img1 && (
            <div className="experience-portfolio-imagen">
              <img src={props.img1} alt={props.company} />
            </div>
          )}
          {props.img2 && (
            <div className="experience-portfolio-imagen">
              <img src={props.img2} alt={props.company} />
            </div>
          )}
          {props.img3 && (
            <div className="experience-portfolio-imagen">
              <img src={props.img3} alt={props.company} />
            </div>
          )}
          {props.img4 && (
            <div className="experience-portfolio-imagen2">
              <img src={props.img4} alt={props.company} />
            </div>
          )}
        </div>

        <Card.Text className="experience-info" style={{ fontWeight: "bold" }}>
          Tech Stack
        </Card.Text>
        <div>
          {props.tools.split(",").map((tool) => (
            <Badge pill bg="primary">
              {tool}
            </Badge>
          ))}
        </div>
        {props.ghLink ? (
          <Button
            variant="experience"
            href={props.ghLink}
            target="_blank"
            style={{ marginTop: "16px" }}
          >
            <BsGithub /> &nbsp;
            {"More Info"}
          </Button>
        ) : null}
        {props.moreInfo ? (
          <Button
            variant="experience"
            href={props.moreInfo}
            target="_blank"
            style={{ marginTop: "16px" }}
          >
            <BsPlus /> &nbsp;
            {"Company"}
          </Button>
        ) : null}
      </Card.Body>
    </div>
  );
}
export default ExperienceCard;

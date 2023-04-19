import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";
import { BsGithub, BsPlus } from "react-icons/bs";
import "./styles.css";
import { Badge, Row } from "react-bootstrap";

function ExperienceCard(props) {
  return (
    <Card className="experience-card-view">
      <div className="card-container">
        <Card.Img src={props.imgPath} className="card-img-company" />
      </div>
      <Card.Body>
        <Card.Title style={{ fontWeight: "bold" }}>{props.jobTitle}</Card.Title>
        <Card.Text
          style={{ textAlign: "center" }}
          href="https://github.com/mariadelfers"
        >
          {props.company}
        </Card.Text>
        <Card.Text style={{ textAlign: "center" }}>{props.date}</Card.Text>
        <Card.Text style={{ textAlign: "justify" }}>
          {props.description}
        </Card.Text>
        <Card.Text style={{ fontWeight: "bold" }}>Tech Stack</Card.Text>
        <div>
          {props.tools.split(",").map((tool) => (
            <Badge pill bg="secondary">
              {tool}
            </Badge>
          ))}
        </div>
        {props.ghLink ? (
          <Button variant="experience" href={props.ghLink} target="_blank">
            <BsGithub /> &nbsp;
            {"GitHub"}
          </Button>
        ) : null}
        {props.moreInfo ? (
          <Button variant="experience" href={props.moreInfo} target="_blank">
            <BsPlus /> &nbsp;
            {"More"}
          </Button>
        ) : null}
      </Card.Body>
    </Card>
  );
}
export default ExperienceCard;

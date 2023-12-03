import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi everyone, I am <span className="purple"> GREHA SHAH </span>
            from <span className="purple"> Mumbai, India.</span>
            <br /> I am a final year student pursuing BTech in Computer Engineering at Dwarkadas J. Sanghvi College of Engineering.
            <br />
            <br />
            Some of my major achievements include
            <br />
            <br />
            {/* </p> */}
          <ul>
            <li className="about-activity">
              <ImPointRight /> Winner of Smart India Hackathon 2022
            </li>
            <li className="about-activity">
              <ImPointRight /> Top 50 of 18000 teams in Samsung Solve for Tomorrow
            </li>
            <li className="about-activity">
              <ImPointRight /> Lead of Google Developer Student Club DJSCE 
            </li>
          </ul>

            {/* Additionally, I am currently employed as a software developer at
            Infiheal. */}
            <br />
            {/* <br /> */}
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Piano
            </li>
            <li className="about-activity">
              <ImPointRight /> Reading about rockets
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          {/* <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p> */}
          {/* <footer className="blockquote-footer">GREHA</footer> */}
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;

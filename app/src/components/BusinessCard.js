import React from "react";
import "./BusinessCard.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { Link } from "react-router-dom";

function BusinessCard() {
  return (
    <card className="App-card">
      <div className="card-container">
        <div className="contact-box">
          <img className="avatar" src="/images/yuki.jpeg" alt="Avatar" />
        </div>
        <div className="contact-box">
          <div className="text-container">
            <h4 className="name">
              <b>Yukiko Laurentiu</b>
            </h4>
            <p className="title">Fullstack Developer</p>
            <div className="social">
              <a
                href="https://www.linkedin.com/in/yukikolaurentiu"
                target="_blank"
              >
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
              <a href="https://github.com/yukilaurentiu" target="_blank">
                <FontAwesomeIcon icon={faGithub} />
              </a>
              <Link to="/contact">
               <FontAwesomeIcon icon={faEnvelope} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </card>
  );
}

export default BusinessCard;

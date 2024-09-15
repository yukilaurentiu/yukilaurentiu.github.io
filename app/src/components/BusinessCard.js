import React from "react";
import "./BusinessCard.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

function BusinessCard() {
  return (
    <card className="App-card">
      <div class="contact-container">
        <div class="contact-box">
          <img className="avatar" src="/images/yuki.jpeg" alt="Avatar" />
        </div>
        <div class="contact-box">
          <div class="text-container">
            <h4 class="name">
              <b>Yukiko Laurentiu</b>
            </h4>
            <p class="title">Fullstack Developer</p>
            <div class="social">
              <a
                href="https://www.linkedin.com/in/yukikolaurentiu"
                target="_blank"
              >
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
              <a href="https://github.com/yukilaurentiu" target="_blank">
                <FontAwesomeIcon icon={faGithub} />
              </a>
              <a href="https://yukilaurentiu.github.io/#/contact">
              <FontAwesomeIcon icon={faEnvelope} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </card>
  );
}

export default BusinessCard;

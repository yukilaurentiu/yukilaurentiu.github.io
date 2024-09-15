import React from "react";
import "./BusinessCard.css";

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
            <p>yuuk</p>
            <div class="social">
              <a
                href="https://www.linkedin.com/in/yukikolaurentiu"
                target="_blank"
              >
                <i class="fab fa-linkedin">LI</i>
              </a>
              <a href="https://github.com/yukilaurentiu" target="_blank">
                <i class="fa-brands fa-github">GH</i>
              </a>
              <a href="https://yukilaurentiu.github.io/app/build/">
                <i class="fa-regular fa-envelope">MA</i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </card>
  );
}

export default BusinessCard;

import React from "react";
import emailjs from "@emailjs/browser";
import "./ContactForm.css";

function ContactForm() {
  // Function to handle form submission
  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent the default form submission

    // Send the form using EmailJS
    emailjs
      .sendForm(
        "service_wuza4o8",
        "template_ne0bpod",
        event.target,
        "wKNarYp2Gevq-MU1Z"
      )
      .then(
        (result) => {
          alert("Email sent successfully!");
        },
        (error) => {
          alert("Failed to send email. Error: " + JSON.stringify(error));
        }
      );
  };

  return (
    <card className="App-card">
      <div class="card-container">
        <div className="contact-box">
          <h1>Get in touch 👋</h1>
          <div className="App-p">
            <p>Feel free to send me a message.</p>
            <p>I would love to hear from you!</p>
          </div>
        </div>
        <div className="contact-box">
          <form onSubmit={handleSubmit} className="Contact-form">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Your Name"
              required
            />

            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Your Email"
              required
            />

            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              placeholder="Your Message"
              required
            ></textarea>

            <button type="submit">Send</button>
          </form>
        </div>
      </div>
    </card>
  );
}

export default ContactForm;

import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import "./ContactForm.css";

function ContactForm() {
  
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  // State to manage success message
  const [successMessage, setSuccessMessage] = useState("");
  
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
          // Show success message and clear form fields
          setSuccessMessage("Thank you! Your message was sent successfully!");
          setFormData({
            name: "",
            email: "",
            message: ""
          });
        },
        (error) => {
          alert("Failed to send email. Error: " + JSON.stringify(error));
        }
      );
  };

  // Function to handle input changes
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
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
              value={formData.name}
              onChange={handleChange}
              required
            />

            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
            />

            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>

            <button type="submit">Send</button>
          </form>
          {successMessage && <p>{successMessage}</p>}
        </div>
      </div>
    </card>
  );
}

export default ContactForm;

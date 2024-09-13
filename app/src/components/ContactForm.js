import React from "react";
import emailjs from "@emailjs/browser";

function ContactForm() {
  // Function to handle form submission
  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent the default form submission

    // Send the form using EmailJS
    emailjs
      .sendForm(
        "YOUR_SERVICE_ID",
        "YOUR_TEMPLATE_ID",
        event.target,
        "YOUR_USER_ID"
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
    <div>
      <div>
        <h1>Get in touch 👋</h1>
        <div className="App-p">
          <p>Feel free to send me a message.</p>
          <p> I would love to hear from you!</p>
        </div>
      </div>
      <form onSubmit={handleSubmit} className="App-form">
        <label>Name</label>
        <input type="text" name="name" placeholder="Your Name" required />
        <label>Email</label>
        <input type="email" name="email" placeholder="Your Email" required />
        <label>Message</label>
        <textarea name="message" placeholder="Your Message" required></textarea>
        <button type="submit">Send</button>
      </form>
    </div>
  );
}

export default ContactForm;

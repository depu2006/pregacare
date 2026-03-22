import React from "react";
import "./Contact.css";

function Contact() {
  return (
    <div className="contact">

      <div className="contact-container">

        <h1>Contact Us</h1>
        <br></br>

        <p className="contact-tag">
          We’re here to support your recovery journey 💛
        </p>

        {/* INFO */}
        <div className="contact-info">
          <p>📧 support@pregacare.com</p>
          <p>📱 +91 9876543210</p>
          <p>📍 Hyderabad, India</p>
        </div>

        {/* FORM */}
        <div className="contact-form">
          <input type="text" placeholder="Your Name" />
          <input type="email" placeholder="Your Email" />
          <textarea placeholder="Your Message"></textarea>

          <button>Send Message</button>
        </div>

      </div>
    </div>
  );
}

export default Contact;
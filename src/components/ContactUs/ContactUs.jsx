// ContactUs.js

import React from "react";
import "./ContactUs.scss";

const ContactUs = () => {
  return (
    <section className="contact-us">
      <div className="contact-container">
        <h2>Contact Us</h2>
        <p>
          Have questions or need more information? Feel free to reach out to us.
        </p>
        <form className="contact-form">
          <div className="input-group">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" name="name" />
          </div>
          <div className="input-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" />
          </div>
          <div className="input-group">
            <label htmlFor="message">Message</label>
            <textarea id="message" name="message"></textarea>
          </div>
          <button type="submit">Send</button>
        </form>
      </div>
    </section>
  );
};

export default ContactUs;

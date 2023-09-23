import React from "react";
import "./HeaderContact.scss";
import { FaPhone, FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
// eslint-disable-next-line no-unused-vars
import { AiFillMail, AiOutlineWhatsApp, AiFillInstagram } from "react-icons/ai";

function HeaderContact() {
  return (
    <div className="header-contact-container">
      <div className="left-contact">
        <div className="call">
          <FaPhone />{" "}
          {window.screen.width > 670 ? (
            <div style={{ display: "flex", gap: "10px" }}>
              <a
                style={{ textDecoration: "none", color: "#fff" }}
                href="tel:+255689168775"
              >
                <span>+255 689 168 775</span>
              </a>
              /
              <a
                href="tel:+255752566508"
                style={{ textDecoration: "none", color: "#fff" }}
              >
                <span>+255 752 566 508</span>
              </a>
            </div>
          ) : (
            <a
              href="tel:+255689168775"
              style={{ textDecoration: "none", color: "#fff" }}
            >
              <span>+255 689 168 775</span>
            </a>
          )}
        </div>
      </div>
      <div className="right-contact">
        <div className="social">
          <FaFacebook />
          <FaTwitter />
          <FaInstagram />
        </div>
      </div>
    </div>
  );
}

export default HeaderContact;

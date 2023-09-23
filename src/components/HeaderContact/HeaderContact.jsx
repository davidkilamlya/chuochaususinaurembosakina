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
              <span>+255 689 168 775</span>/
              <span>+255 752 566 508</span>
            </div>
          ) : (
            <span>+255 689 168 775</span>
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

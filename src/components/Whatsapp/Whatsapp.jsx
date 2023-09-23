import React from "react";
import "./Whatsapp.scss";
import { AiOutlineWhatsApp } from "react-icons/ai";
function Whatsapp() {
  return (
    <div className="whatsapp">
      <div>
        <a href="https://api.whatsapp.com/send?phone=+255689168775&text=hello, from your website THE GIVES">
          <AiOutlineWhatsApp />
        </a>
        <div className="whatsapp-alert-red"></div>
      </div>
    </div>
  );
}

export default Whatsapp;

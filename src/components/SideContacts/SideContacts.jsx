import contacts from "../../util/contacts";
import "./SideContacts.scss";
import { FaPhone, FaWhatsapp, FaMailBulk } from "react-icons/fa";
import { AiFillMail, AiOutlineWhatsApp, AiFillInstagram } from "react-icons/ai";

function SideContacts() {
  return (
    <div className="side-contacts-container">
      <div className="side-contacts-div">
        <div className="contact-icon-div" title="call us">
          <a href={`tel:${contacts.tel}`} className="contact-icon-link">
            <FaPhone className="icon" />
          </a>
        </div>
        <div className="contact-icon-div" title="mail us">
          <a href={`tel:${contacts.email}`} className="contact-icon-link">
            <AiFillMail className="icon" />
          </a>
        </div>
        <div className="contact-icon-div" title="Whatsapp">
          <a href={`tel:${contacts.tel}`} className="contact-icon-link">
            <AiOutlineWhatsApp className="icon" />
          </a>
        </div>
        <div className="contact-icon-div" title="instagram">
          <a href={`tel:${contacts.tel}`} className="contact-icon-link">
            <AiFillInstagram className="icon" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default SideContacts;

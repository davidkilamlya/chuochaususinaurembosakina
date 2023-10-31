import React, { useRef, useState } from "react";
import "./NavBar.scss";
import { HiX } from "react-icons/hi";
import { GiHamburgerMenu } from "react-icons/gi";
import { AnimatePresence, motion } from "framer-motion";
import axios from "axios";
import { toast } from "react-toastify";
import Loader from "../Loader/Loader";

const NavBar = () => {
  const navList = [
    { name: "Home", link: "home" },
    { name: "about us", link: "about_us" },
    { name: "Academics", link: "academics" },
    { name: "Admission", link: "admission" },
    { name: "Calendar", link: "calendar" },
    { name: "Testimonial", link: "testimonial" },
    { name: "Location", link: "location" },
  ];
  const contactFormRef = useRef();
  const [toggle, setToggle] = useState(false);
  const [formVisible, setFormVisible] = useState(true);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleFormVisible = () => {
    if (formVisible) {
      setFormVisible(false);
    } else {
      setFormVisible(true);
    }
  };
  const handleChange = (e) => {
    if (e.target.name === "name") {
      setName(e.target.value);
    }
    if (e.target.name === "email") {
      setEmail(e.target.value);
    }
    if (e.target.name === "phone") {
      setPhone(e.target.value);
    }
    if (e.target.name === "message") {
      setMessage(e.target.value);
    }
  };
  const handleContactSubmit = async (e) => {
    e.preventDefault();

    setIsLoading(true);
    const config = {
      headers: {
        Authorization: `Bearer ${process.env.REACT_APP_SHARED_SECRET_KEY}`,
      },
    };
    const axiosInstance = axios.create(config);
    try {
      //check values are not empty and toastify if is empty
      if (name === "" || phone === "" || message === "") {
        toast.error("Please fill all necessary inputs (phone,message,name) ", {
          position: "top-right",
          autoClose: false,
          hideProgressBar: false,
          closeOnClick: true,
          draggable: false,
          progress: undefined,
          theme: "light",
        });
        setIsLoading(false);
      } else {
        const contactData = {
          name,
          email,
          phone,
          message,
        };
        await axiosInstance
          .post(process.env.REACT_APP_END_POINT_CONTACT, contactData)
          .then((res) => {
            setIsLoading(false);
            setName("");
            setEmail("");
            setPhone("");
            setMessage("");
            toast.success(res.data.message, {
              position: "top-right",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "light",
            });
          });
      }
    } catch (error) {
      setIsLoading(false);
      toast.error(
        `Oops! something went wrong, please try again : ${error.message}`,
        {
          position: "top-right",
          autoClose: false,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        }
      );
    }
  };
  return (
    <>
      <nav className="NavBar" id="#home">
        <div className="navbar_logo">
          {/* <img
          className="logo"
          src={images.logo}
          alt="st.monica_girls_secondary_logo"
          title={`st.monica_girls_secondary_logo`}
          loading="eager"
        /> */}
          <img
            src="https://ik.imagekit.io/fa4kq1qqo/the_gives/gatewaylogo-transparent_cropped.png?updatedAt=1698507560705"
            alt="chuo_cha_ususi_na_urembo_logo"
            className="logo"
          />
        </div>
        <ul className="navbar_list">
          {navList.map((item, index) => (
            <li className="navbar_list_item" key={`link-${item}`}>
              {/* <div className="top-link-bar"/> */}
              <a href={`/#${item.link}`}> {item.name}</a>
              <div className="bottom-link-bar" />
            </li>
          ))}
        </ul>

        <div className="contact-us-form-div">
          <div className="contact-us-button-menu">
            <button className="contact-us" onClick={handleFormVisible}>
              Contact us
            </button>
            <div className="app__navbar-menu">
              <GiHamburgerMenu onClick={() => setToggle(true)} />
              <AnimatePresence>
                {toggle && (
                  <motion.div
                    whileInView={{ x: [300, 0] }}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1, x: [0, 100, 0, 100, 0] }}
                    transition={{ duration: 0.85, ease: "backInOut" }}
                    exit={{ opacity: 0 }}
                  >
                    <HiX onClick={() => setToggle(false)} />
                    <ul>
                      {navList.map((item, index) => (
                        <li key={index}>
                          <a
                            href={`#${item.link}`}
                            onClick={() => setToggle(false)}
                          >
                            {item.name}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

          <div className="contact-us-form-container">
            {formVisible && (
              <div className="contact-us-form" ref={contactFormRef}>
                <div className="cancel-form" onClick={handleFormVisible}>
                  <div className="svg-cancel">
                    <HiX />
                  </div>
                </div>
                <div className="contact-form-input">
                  <label htmlFor="name">name</label>
                  <input
                    type="text"
                    onChange={(e) => handleChange(e)}
                    value={name}
                    required
                    name="name"
                    id="contact-name"
                  />
                </div>
                <div className="contact-form-input">
                  <label htmlFor="phone">Phone No:</label>
                  <input
                    type="text"
                    onChange={(e) => handleChange(e)}
                    required
                    value={phone}
                    name="phone"
                    id="phone"
                  />
                </div>
                <div className="contact-form-input">
                  <label htmlFor="email">
                    Email <span>(optional)</span>
                  </label>
                  <input
                    type="email"
                    onChange={(e) => handleChange(e)}
                    id="email"
                    value={email}
                    name="email"
                  />
                </div>
                <div className="contact-form-input">
                  <label htmlFor="message">message</label>
                  <textarea
                    name="message"
                    onChange={(e) => handleChange(e)}
                    required
                    value={message}
                    rows={2}
                  />
                </div>
                <button
                  className="contact-form-submit"
                  onClick={(e) => handleContactSubmit(e)}
                >
                  Submit
                </button>
              </div>
            )}
          </div>
        </div>
      </nav>
      {isLoading && <Loader />}
    </>
  );
};

export default NavBar;

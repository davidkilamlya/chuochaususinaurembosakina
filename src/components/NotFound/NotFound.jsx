import React from "react";
import { Link } from "react-router-dom";
import HeaderContact from "../HeaderContact/HeaderContact";
import PageHeader from "../PageHeader/PageHeader";
import Footer from "../Footer/Footer";
import "./NotFound.scss"

function NotFound() {
  return (
    <div className="notfound">
      <HeaderContact />
      <PageHeader />
      <div className="notfound-div">
        <h1 className="code">404</h1>
        <h2 className="message">
          {" "}
          Oops! This Page Not Found, We will try our best to make sure next time
          it working
        </h2>
        <Link to={"/"} className="back-home">
          back Home
        </Link>
      </div>
      <Footer />
    </div>
  );
}

export default NotFound;

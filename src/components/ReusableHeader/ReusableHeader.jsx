// ReusableHeader.js
import React from "react";
import { Link } from "react-router-dom";
import "./ReusableHeader.scss";
import { images } from "../../constants";

const ReusableHeader = ({ pageTitle }) => {
  return (
    <div className="reusable-header">
      <div className="nav">
        <Link to="/" className="reusable-logo">
          St. Monica girls school
        </Link>
        <div>
          <h1 className="page-title">{pageTitle}</h1>
        </div>
        <Link to="/" className="back-link">
          Back to Home
        </Link>
      </div>
    </div>
  );
};

export default ReusableHeader;

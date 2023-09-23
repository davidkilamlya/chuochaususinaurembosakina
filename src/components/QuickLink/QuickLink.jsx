import React from "react";
import "./QuickLink.scss";
import { MdFiberNew } from "react-icons/md";
import { documents } from "../../Constants";
import { motion } from "framer-motion";
function QuickLink() {
  return (
    <div className="quick-link">
      <div className="quick-icon">
        <MdFiberNew />
      </div>
      <p className="quick">
        download <span className="quick-secondary">registration</span> form
        <a href={documents.registration} className="quick-red">
          here
        </a>
      </p>
    </div>
  );
}

export default QuickLink;

import React from 'react'
import "./PageHeader.scss"
import Title from '../Title/Title';
import BreadCrumbs from "../BreadCumbs/BreadCrumbs";
import { Link } from 'react-router-dom';

function PageHeader({title}) {
  return (
    <div className="gallery-image-banner">
      <div className="home-link">
        <Link to={"/"} className="home-link-text">Home</Link>
      </div>
    </div>
  );
}

export default PageHeader
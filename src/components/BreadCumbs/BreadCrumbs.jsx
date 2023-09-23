import { useContext } from "react";
import "./BreadCrumbs.scss";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import { useLocation } from "react-router-dom";

function BreadCumbs() {
  const { pathname, search } = useLocation();

  let path = pathname.split("/").filter((path) => path !== "");

  return (
    <div className="breadCumbs-container">
      <a href="/">
        <span className="breadCumbs-pathname">Home</span>
      </a>
    </div>
  );
}

export default BreadCumbs;

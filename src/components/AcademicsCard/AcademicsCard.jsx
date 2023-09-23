import React, { useState } from "react";
import "./AcademicsCard.scss";
import {FaChevronLeft,FaChevronRight} from "react-icons/fa"

const AcademicsCard = ({ image, title, description, translations }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [currentTranslation, setCurrentTranslation] = useState(0);

  const toggleExpansion = () => {
    setIsExpanded(!isExpanded);
  };

  const nextTranslation = () => {
    setCurrentTranslation((prevTranslation) => {
      if (prevTranslation === translations.length - 1) {
        return 0;
      } else {
        return prevTranslation + 1;
      }
    });
  };

  const previousTranslation = () => {
    setCurrentTranslation((prevTranslation) => {
      if (prevTranslation === 0) {
        return translations.length - 1;
      } else {
        return prevTranslation - 1;
      }
    });
  };

  const cardContent = isExpanded ? (
    <div className={"content"}>
      <p className={"description"}>{description}</p>

      {/* <div className={"translations"}>
        <button
          className={"translationButton"}
          onClick={previousTranslation}
          disabled={currentTranslation === 0}
        >
          <FaChevronLeft/>
        </button>

        <p className={"translation"}>
          {translations[currentTranslation].language}:
          {translations[currentTranslation].text}
        </p>

        <button
          className={"translationButton"}
          onClick={nextTranslation}
          disabled={currentTranslation === translations.length - 1}
        >
         <FaChevronRight/>
        </button>
      </div> */}
    </div>
  ) : null;

  return (
    <div className={"card"}>
      <img className={"image"} src={image} alt={title} />

      <div className={"content"}>
        <h2 className={"title"}>{title}</h2>

        {cardContent}

        <button className={"button"} onClick={toggleExpansion}>
          {isExpanded ? "Hide" : "Show More"}
        </button>
      </div>
    </div>
  );
};

export default AcademicsCard;

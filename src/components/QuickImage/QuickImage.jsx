import React, { useState } from "react";
import "./QuickImage.scss";
import { IoMdArrowBack, IoMdArrowForward } from "react-icons/io";
import sliderImages from "../../constants/sliderImages";

const quickImage = [
  "https://ik.imagekit.io/fa4kq1qqo/the_gives/assets/Gallery/Slider/SKY_9437.jpg?updatedAt=1695333410630",
  "https://ik.imagekit.io/fa4kq1qqo/the_gives/assets/Gallery/Slider/THE%20GIVES%20(17).jpg?updatedAt=1695333410585",
  "https://ik.imagekit.io/fa4kq1qqo/the_gives/assets/Gallery/Slider/SKY_9356.jpg?updatedAt=1695333411286",
];

function QuickImage({
  firstText,
  secondText,
  thirdText,
  fourthText,
  fifthText,
}) {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleBack = (e) => {
    setCurrentSlide((prev) => prev + 1);
  };
  const handleForward = (e) => {
    setCurrentSlide((prev) => prev - 1);
  };
  return (
    <div className="quick-image">
      <div className="quick-image-title">
        <p className="quick-image-title-title">
          {firstText} {" "}
          <span className="quick-image-title-focus">
           {secondText}{" "}
          </span>
           {thirdText}
          <span className="quick-image-title-focus">
            {" "}
            {fourthText} 
          </span>
          {} {fifthText}
        </p>
      </div>
      <div className="arrow-back">
        <IoMdArrowBack onClick={(e) => handleBack(e)} />
      </div>

      <div className="quick-image-container">
        {quickImage.map((image, index) => {
          return (
            <div
              className="quick-image-div"
              key={index}
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              // ref={(ref)=>ref=quickDivRef.current[0]}
            >
              <img src={image} alt={image} className="quick-image-image" />
            </div>
          );
        })}
      </div>
      <div className="arrow-forward" onClick={() => handleForward()}>
        <IoMdArrowForward />
      </div>
    </div>
  );
}

export default QuickImage;

import React from "react";
import "./Flier.scss";
import { useEffect, useState } from "react";
// import "./Slider.scss";
import { MdArrowBackIosNew, MdArrowForwardIos } from "react-icons/md";
import SideContacts from "../../components/SideContacts/SideContacts";

function Flier() {
  const image = [
    "https://ik.imagekit.io/fa4kq1qqo/the_gives/assets/Gallery/Slider/MAPAMBO_SLIDE.png?updatedAt=1695435173288",
    "https://ik.imagekit.io/fa4kq1qqo/the_gives/assets/Gallery/Slider/THEGIVES_SLIDE%20(1).png?updatedAt=1695435172853",
    "https://ik.imagekit.io/fa4kq1qqo/the_gives/assets/Gallery/Slider/USUSI_NA_UREMBO_SLIDE.png?updatedAt=1695435172865",
    "https://ik.imagekit.io/fa4kq1qqo/the_gives/assets/Gallery/Slider/MAKEUP_SLIDE.png?updatedAt=1695435173189",
    "https://ik.imagekit.io/fa4kq1qqo/the_gives/assets/Gallery/Slider/KUTWA_BWENI_SLIDE.png?updatedAt=1695435171722",
  ];

  const [CurrentSlide, setCurrentSlide] = useState(0);
  const [touchStart, setTouchStart] = useState(null);

  const handleTouchStart = (event) => {
    setTouchStart(event.touches[0].pageX);
  };

  const handleTouchEnd = (event) => {
    const touchEnd = event.nativeEvent.changedTouches[0].pageX;
    const touchDifference = touchStart - touchEnd;

    if (touchDifference > 0) {
      handleNextSlide();
    } else if (touchDifference < 0) {
      handlePrevSlide();
    }
  };

  const handleNextSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === image.length - 1 ? 0 : prevSlide + 1
    );
    
  };

  const handlePrevSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? image.length - 1 : prevSlide - 1
    );
  };

  useEffect(() => {
    const interval = setInterval(handleNextSlide, 10000);

    return () => clearInterval(interval);
  });

  return (
    <div className="div-slider-holder">
      <SideContacts />
      <div className="slider-holder">
        {image.map((item, index) => {
          return (
            <div
              className="slider-image-container"
              style={{ transform: `translateX(-${CurrentSlide * 100}%)` }}
              onTouchStart={handleTouchStart}
              onTouchEnd={handleTouchEnd}
            >
              <img
                className="slider-image"
                src={item}
                alt="slider"
                key={index}
              />
            </div>
          );
        })}
      </div>
      <div className="controlers">
        <div
          className="prev-slide"
          onClick={() => {
            handlePrevSlide();
          }}
        >
          <MdArrowBackIosNew />
        </div>
        <div
          className="next-slide"
          onClick={() => {
            handleNextSlide();
          }}
        >
          <MdArrowForwardIos />
        </div>
      </div>
    </div>
  );
}

export default Flier;

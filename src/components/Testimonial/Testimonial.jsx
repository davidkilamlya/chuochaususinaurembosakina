import React, { useState, useEffect } from "react";
import  "./Testimonial.scss";

const Testimonial = ({ testimonials }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const autoSlide = () => {
    setCurrentIndex((prevIndex) => {
      if (prevIndex === testimonials.length - 1) {
        return 0;
      } else {
        return prevIndex + 1;
      }
    });
  };

  useEffect(() => {
    const interval = setInterval(autoSlide, 5000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  const currentTestimonial = testimonials[currentIndex];

  return (
    <div className={"testimonial"}>
      <div className={"image"}>
        <img src={currentTestimonial.image} alt={currentTestimonial.author} />
      </div>
      <div className={"content testimonial-border"}>
        <p>{currentTestimonial.text}</p>
        <span className={"author"}>{currentTestimonial.author}</span>
      </div>
      <div className={"dots"}>
        {testimonials.map((testimonial, index) => (
          <span
            key={index}
            className={`${"dot"} ${
              index === currentIndex ? "active" : ""
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Testimonial;

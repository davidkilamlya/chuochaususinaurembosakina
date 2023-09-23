exports.generateSlider = (slider, currentSlider,setCurrentIndexSlide, setSlider,setCurrentSlider) => {
  if (currentSlider === undefined) {
    setSlider((prev) => [...prev, 0]);
    // setCurrentSlider(0)
  } else {
    if (slider[slider.length - 1] === 0) {
      setSlider((prev) => [...prev, 1]);
    } else {
      setSlider((prev) => [...prev, currentSlider]);
    }
  }
  // console.log("slider from gen ",slider, "slider ", currentSlider);
};

exports.handleBackSlider = (slider, setSlider, setCurrentIndex) => {
  let prevSlider = slider.pop();
  setSlider((prev) => [prevSlider, ...prev]);
  setCurrentIndex((prev) => prev - 1);
};

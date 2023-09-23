import React, { useRef, useState } from "react";

import "./Gallery.scss";

import Footer from "../Footer/Footer";
import PageHeader from "../PageHeader/PageHeader";
import HeaderContact from "../HeaderContact/HeaderContact";

import { easeInOut, motion } from "framer-motion";
import { MdCancel } from "react-icons/md";
import { useLocation } from "react-router-dom";

import Title from "../Title/Title";
// import sliderImages from "../../constants/sliderImages";
// { image: image125, title: "Image 125" },
const officialImages = [
  {
    image:
      "https://ik.imagekit.io/fa4kq1qqo/the_gives/assets/Gallery/Slider/THE%20GIVES%20(25).jpg?updatedAt=1695333410762",
    title: "Image 1",
  },
  {
    image:
      "https://ik.imagekit.io/fa4kq1qqo/the_gives/assets/Gallery/Banner/SKY_9552.jpg?updatedAt=1695333410354",
    title: "Image 2",
  },
  {
    image:
      "https://ik.imagekit.io/fa4kq1qqo/the_gives/assets/Gallery/Banner/SKY_9710.jpg?updatedAt=1695333410873",
    title: "Image 3",
  },
  {
    image:
      "https://ik.imagekit.io/fa4kq1qqo/the_gives/assets/Gallery/Banner/SKY_9567.jpg?updatedAt=1695438167616",
    title: "Image 4",
  },
  {
    image:
      "https://ik.imagekit.io/fa4kq1qqo/the_gives/assets/Gallery/Banner/THE%20GIVES%20(106).jpg?updatedAt=1695333410746",
    title: "Image 5",
  },
  {
    image:
      "https://ik.imagekit.io/fa4kq1qqo/the_gives/assets/Gallery/Banner/SKY_9315.jpg?updatedAt=1695333410708",
    title: "Image 6",
  },
  {
    image:
      "https://ik.imagekit.io/fa4kq1qqo/the_gives/assets/Gallery/Banner/APA_0016.jpg?updatedAt=1695437751392",
    title: "Image 7",
  },
  {
    image:
      "https://ik.imagekit.io/fa4kq1qqo/the_gives/assets/Gallery/Banner/SKY_9551.jpg?updatedAt=1695333410551",
    title: "Image 8",
  },
  {
    image:
      "https://ik.imagekit.io/fa4kq1qqo/the_gives/assets/Gallery/Slider/THE%20GIVES%20(52).jpg?updatedAt=1695428660530",
    title: "Image 9",
  },
  {
    image:
      "https://ik.imagekit.io/fa4kq1qqo/the_gives/assets/Gallery/Slider/THE%20GIVES%20(43).jpg?updatedAt=1695333410289",
    title: "Image 10",
  },
];


function Gallery() {
  const imageRef = useRef();
  const galleryRef = useRef();
  const [imageHolder, setImageHolder] = useState();
  const { pathname, search } = useLocation();
  console.log("path ", pathname, " search ", search);

  const handleClick = (id) => {
    setImageHolder(officialImages[id].image);
    imageRef.current.style.height = "100%";
    imageRef.current.style.width = "100vw";
    imageRef.current.style.padding = "50px";
  };
  const handleCancel = () => {
    imageRef.current.style.height = "0vh";
    imageRef.current.style.padding = "0px";
  };
  return (
    <div>
      <HeaderContact />
      <div className="gallery-container">
      <Title title={"OUR GALLERY"}/>
        <PageHeader title={"Fikiria Kwanza/Gallery"} />
        <motion.div
          initial={{ y: [0, 100] }}
          whileInView={{ y: [-300, 0] }}
          transition={{ duration: 2, ease: easeInOut }}
          className="gallery-card-image"
          ref={galleryRef}
        >
          {officialImages.map((item, index) => {
            console.log(item, index);
            return (
              <div className="gallery-card" key={index}>
                <div className="gallery-image">
                  {item.image ? (
                    <img
                      src={item.image}
                      onClick={() => handleClick(index)}
                      alt="gallery"
                      className="gallery-image-image"
                    />
                  ) : (
                    <h4>loading.....</h4>
                  )}
                </div>
                <div className="gallery-tittle">
                  <span className="gallery-tittle-h2">{item.title}</span>
                  {/* <span className="gallery-tittle-date">{item.date}</span> */}
                </div>
              </div>
            );
          })}
          <div
            className="image-holder"
            ref={imageRef}
            onClick={() => handleCancel()}
          >
            <div className="image-holder-icon">
              <MdCancel
                className="cancel-icon"
                onClick={() => handleCancel()}
              />
            </div>
            <div className="image-holder-container">
              {" "}
              <img
                src={imageHolder}
                alt="gallery"
                className="image-holder-image"
                onClick={() => handleCancel()}
              />
            </div>
          </div>
        </motion.div>
      </div>
      <Footer />
    </div>
  );
}

export default Gallery;

import React, { useEffect, useState } from "react";
import "./About.scss";
// import { images } from "../../Constants";
import { Link } from "react-router-dom";
import Title from "../../components/Title/Title";

export default function About() {
  const [image, setimage] = useState([]);
  useEffect(() => {
    if (window.screen.availWidth < 601) {
      setimage([
        "https://ik.imagekit.io/fa4kq1qqo/the_gives/assets/Gallery/Slider/THE%20GIVES%20(43).jpg?updatedAt=1695333410289",
      ]);
    } else {
      setimage([
        "https://ik.imagekit.io/fa4kq1qqo/the_gives/assets/Gallery/Slider/THE%20GIVES%20(43).jpg?updatedAt=1695333410289",
        "https://ik.imagekit.io/fa4kq1qqo/the_gives/assets/Gallery/Slider/THE%20GIVES%20(52).jpg?updatedAt=1695428660530",
      ]);
    }
  }, []);
  return (
    <div className="About">
      <div className="about-container">
        <Title
          title={"About Chuo Cha Ususi na Urembo Sakina (THE GIVES)"}
          id="about_us"
        />

        <div className="about-description">
          <div className="about-description-details">
            <p className="about-paragraph">
              This visionary institution (THE GATEWAY INSTITUTE OF VOCATIONAL
              AND EDUCATIONAL STUDIES) aims at looking for the solutions to the women and girls
              problems such never-ending abject poverty which makes them unable
              even to buy sanitary pads, unexpected teenage pregnancies that may
              lead to profuse bleeding hence loss of life, voluntary and
              involuntary child labour which denies them the right to education.
            </p>
            <p className="about-paragraph">
              institution expects that all the aforementioned problems may only
              be eradicated by dint of vocational training and Integrated Post
              Primary and Post- Secondary Skills (IPPS) and (IPSS) respectively
              under the occupations of Hairdressing skills as well as Beauty
              Therapy. By so doing, the target young girls and ladies will be
              turned into useful people who can contribute to the economic
              growth of individual and the nation at large notably in this era
              of industrialization.
            </p>
          </div>

          <div className="about-images-container">
            {image.map((item, index) => {
              return (
                <div className="about-images" key={index}>
                  <img src={item} alt={item} className="about-image" />
                </div>
              );
            })}
          </div>
        </div>
        <button className="about-us-button">
          <Link to="/aboutUs">Read More</Link>
        </button>
      </div>
    </div>
  );
}

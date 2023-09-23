import React from "react";
// import "./About.scss";
import "./Aboutus.scss";

import Footer from "../../components/Footer/Footer";

import Title from "../../components/Title/Title";
import PageHeader from "../../components/PageHeader/PageHeader";
import Contact from "../../components/HeaderContact/HeaderContact";
import { Helmet } from "react-helmet-async";
import QuickImage from "../QuickImage/QuickImage";
import AcademicsCard from "../AcademicsCard/AcademicsCard";
const image = [
  "https://ik.imagekit.io/fa4kq1qqo/the_gives/assets/Gallery/Slider/SKY_9356.jpg?updatedAt=1695333411286",
  "https://ik.imagekit.io/fa4kq1qqo/the_gives/assets/Gallery/Slider/THE%20GIVES%20(25).jpg?updatedAt=1695333410762",
];
const indetails_image = [
  "https://ik.imagekit.io/fa4kq1qqo/the_gives/assets/Gallery/Slider/SKY_9467.jpg?updatedAt=1695333410575",
  "https://ik.imagekit.io/fa4kq1qqo/the_gives/assets/Gallery/Slider/THE%20GIVES%20(52).jpg?updatedAt=1695428660530",
  // images.class_discussion,
];
function Aboutus() {
  return (
    <>
      <Helmet>
        <title>About Chuo cha Ususi na Urembo Sakina</title>
        <meta
          name="description"
          content="Chuo cha Ususi na Urembo Sakina ni chuo kinachotoa mafunzo ya ususi na urembo kwa viwango vya juu. Chuo hiki kinapatikana jijini Arusha, Tanzania."
        />
        <meta
          name="keywords"
          content="beauty, cosmetology, school,university, college, Arusha, Tanzania"
        />
        <meta name="author" content="David Kilamlya" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Helmet>
      <div className="about-container-page">
        {/* put background div with absolute position to act as background for about us page */}
        <div className="aboutBackGround"></div>
        <div className="aboutus">
          {/* <NavBar /> */}
          <Contact position={"sticky"} />
          <PageHeader title={"THE GIVES/About"} />
          <div className="Aboutus" id="aboutus">
            <div className="about-container">
              <Title title={"About Chuo cha Ususi na Urembo "} />

              <div className="about-description">
                <div className="about-description-details">
                  <p className="about-paragraph">
                    The institution expects that all the aforementioned problems
                    may only be eradicated by dint of vocational training and
                    Integrated Post Primary and Post- Secondary Skills (IPPS)
                    and (IPSS) respectively under the occupations of
                    Hairdressing skills as well as Beauty Therapy. By so doing,
                    the target young girls and ladies will be turned into useful
                    people who can contribute to the economic growth of
                    individual and the nation at large notably in this era of
                    industrialization.
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
            </div>
            <QuickImage
              firstText={"We build"}
              secondText={"Innovative"}
              thirdText={"and"}
              fourthText={"Industry ready"}
              fifthText={"Students"}
            />
            <Title title={"In THE GIVES "} />
            <div className="aboutus-details">
              <div className="indetails">
                <div className="indetails-images">
                  {indetails_image.map((item, index) => {
                    return (
                      <div className="about-images" key={index}>
                        <img src={item} alt={item} className="about-image" />
                      </div>
                    );
                  })}
                </div>
                <div className="about-description">
                  <div className="about-description-details">
                    <h3 className="about-paragraph">
                      This visionary institution (THE GATEWAY INSTITUTE OF
                      VOCATIONAL AND EDUCATIONAL STUDIES) aims at looking for
                      the solutions to the problems such never-ending abject
                      poverty which makes them unable even to buy sanitary pads,
                      unexpected teenage pregnancies that may lead to profuse
                      bleeding hence loss of life, voluntary and involuntary
                      child labour which denies them the right to education.
                    </h3>
                  </div>
                </div>
              </div>
              <div className="about-individual-description-details"></div>
              {/* <div className="admission-advert">
            <marquee behavior='' direction=""></marquee>
          </div> */}
              <Title title={"OUR COURSES"} />
              <div className="academics-home">
                <AcademicsCard
                  image={
                    "https://ik.imagekit.io/fa4kq1qqo/the_gives/assets/Gallery/Banner/SKY_9551.jpg?updatedAt=1695333410551"
                  }
                  title="Hairdressing"
                  description="This course will teach you the skills and knowledge you need to become a professional hairdresser. You will learn how to cut, style, and color hair, as well as how to provide other hair care services."
                  // translations={[
                  //   { language: "English", text: "Hairdressing" },
                  //   { language: "Swahili", text: "Upendelezaji wa Nywele" },
                  // ]}
                />
                <AcademicsCard
                  image={
                    "https://ik.imagekit.io/fa4kq1qqo/the_gives/assets/Gallery/Banner/APA_0016.jpg?updatedAt=1695437751392"
                  }
                  title="Makeup"
                  description="This course will teach you the skills and knowledge you need to become a professional makeup artist. You will learn how to apply makeup for a variety of occasions, including weddings, special events, and everyday wear."
                  // translations={[
                  //   { language: "English", text: "Makeup" },
                  //   { language: "Swahili", text: "Upendelezaji wa Nywele" },
                  // ]}
                />
                <AcademicsCard
                  image={
                    "https://ik.imagekit.io/fa4kq1qqo/the_gives/assets/Gallery/Banner/SKY_9315.jpg?updatedAt=1695333410708"
                  }
                  title="Dreadlocks"
                  description="This course will teach you everything you need to know about dreadlocks, from how to install them to how to maintain them. You will learn how to create different types of dreadlocks, and you will also learn how to repair and style dreadlocks."
                  // translations={[
                  //   { language: "English", text: "Makeup" },
                  //   { language: "Swahili", text: "Upendelezaji wa Nywele" },
                  // ]}
                />
                <AcademicsCard
                  image={
                    "https://ik.imagekit.io/fa4kq1qqo/the_gives/assets/Gallery/Banner/THE%20GIVES%20(106).jpg?updatedAt=1695333410746"
                  }
                  title="Natural hair"
                  description="This course will teach you the skills and knowledge you need to care for natural hair. You will learn how to wash, condition, and style natural hair, as well as how to treat common hair problems."
                  // translations={[
                  //   { language: "English", text: "Makeup" },
                  //   { language: "Swahili", text: "Upendelezaji wa Nywele" },
                  // ]}
                />
                <AcademicsCard
                  image={
                    "https://ik.imagekit.io/fa4kq1qqo/the_gives/assets/Gallery/Banner/SKY_9607.jpg?updatedAt=1695333410276"
                  }
                  title="Henna"
                  description="This course will teach you everything you need to know about henna, from how to prepare it to how to apply it. You will learn how to create different henna designs, and you will also learn how to care for henna tattoos."
                  // translations={[
                  //   { language: "English", text: "Makeup" },
                  //   { language: "Swahili", text: "Upendelezaji wa Nywele" },
                  // ]}
                />
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default Aboutus;

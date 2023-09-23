import React from "react";
// import "./About.scss";
import "./Aboutus.scss";
import { images } from "../../Constants";
import Footer from "../../Components/Footer/Footer";

import Title from "../../Components/Title/Title";
import { NavBar } from "../../Components/NavBar/NavBar";
import PageHeader from "../../Components/PageHeader/PageHeader";
import Contact from "../../Components/Contact/Contact";
import { Helmet } from "react-helmet-async";
const image = [images.library_choose_book, images.physics_teach];
const indetails_image = [
  images.class_session,
  images.school_leaders,
  // images.class_discussion,
];
function Aboutus() {
  return (
    <>
      <Helmet>
        <title>About us</title>
        <meta
          name="description"
          content=" About Fikiria Kwanza Primary and Secondary Schools"
        />
        <link rel="canonical" href="/about" />
      </Helmet>
      <div className="aboutus">
        {/* <NavBar /> */}
        <Contact position={"sticky"} />
        <PageHeader title={"Fikiria Kwanza/About"} />
        <div className="Aboutus" id="aboutus">
          <div className="about-container">
            <Title
              title={"About Fikiria Kwanza Secondary and Primary School"}
            />

            <div className="about-description">
              <div className="about-description-details">
                <p className="about-paragraph">
                  Fikiria Kwanza Schools is a reputable educational institution
                  known for providing a comprehensive and balanced education to
                  students in the region. Established with the vision of
                  fostering academic excellence and holistic development, the
                  schools offers a wide range of subjects, including science,
                  arts, and business, to cater to the diverse interests and
                  aspirations of its students.
                </p>
                <p className="about-paragraph">
                  At Fikiria Kwanza Schools, we prioritize academic excellence
                  and offer a well-rounded curriculum that encompasses science,
                  Literature, arts, and business subjects. This ensures that
                  students have the opportunity to explore their interests,
                  discover their strengths, and make informed decisions about
                  their future career paths.
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
          <Title title={"In Fikiria Kwanza"} />
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
                  <p className="about-paragraph">
                    VISION: Our school vision is to create a pathway to assist
                    students in achieving their educational and personal goals
                    leading to a fulfilling future within the greater community.
                  </p>
                  <p className="about-paragraph">
                    MISSION: Our mission is to educate all students to the
                    highest levels of academic achievement, to enable them to
                    reach and expand their potential and to prepare them to
                    become productive, responsible, ethical, creative and
                    compassionate members of society.
                  </p>
                </div>
              </div>
            </div>
            <div className="about-individual-description-details"></div>
            {/* <div className="admission-advert">
            <marquee behavior='' direction=""></marquee>
          </div> */}
            <div className="aboutus-details-more">
              <p className="about-paragraph">
                ACADEMICS: We prioritize academic excellence and offer a
                well-rounded curriculum that encompasses science, arts, and
                literature. This ensures that students have the opportunity to
                explore their interests, discover their strengths, and make
                informed decisions about their future career paths.
                CO-CURRICULAR
              </p>
              <p className="about-paragraph">
                ACTIVITIES: Our Schools places a great emphasis on the holistic
                development of students beyond the classroom. We offer a diverse
                range of co-curricular activities such as, clubs, sports,
                debate, talent show, drama production, arts and crafts. These
                activities provide opportunities for students to develop
                leadership skills, teamwork, and a well-rounded personality.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Aboutus;

import "./Home.scss";
import NavBar from "../../components/NavBar/NavBar";
import ExtraNav from "../../components/NavBar/ExtraNav";
import QuickImage from "../../components/QuickImage/QuickImage";
import Footer from "../../components/Footer/Footer";
import Calendar from "../../components/Calender/Calender";
import Location from "../../components/Location/Location";
import Title from "../../components/Title/Title";
import Whatsapp from "../../components/Whatsapp/Whatsapp";
// import QuickLink from "../../components/QuickLink/QuickLink"
import About from "../../components/About/About";
import Testimonial from "../../components/Testimonial/Testimonial";
import AcademicsCard from "../../components/AcademicsCard/AcademicsCard";
import Admission from "../../components/Admission/Admission";
import HeaderContact from "../../components/HeaderContact/HeaderContact";
import SearchCourse from "../../components/SearchCourse/SearchCourse"
import { Link } from "react-router-dom";
import Flier from "../Flier/Flier";

function Home() {
  return (
    <div className="home">
      <HeaderContact />
      <NavBar />
      {/* <Slider /> */}
      <Flier />

      <SearchCourse />
      <ExtraNav />
      {/* <Title title={"About us"} /> */}
      <About />
      {/* <QuickText /> */}
      <QuickImage
        firstText={"We are the"}
        secondText={"Talented"}
        thirdText={"and"}
        fourthText={"Professional"}
        fifthText={"Trainers"}
      />
      <Title title={"Academics"} id={"academics"} />
      <div className="academics-container-home">
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
        <div className="go-academics-div">
          {" "}
          <button className="go-academics">
            <Link to={"academics"}>View More</Link>{" "}
          </button>
        </div>
      </div>
      <Title title={"Admission"} id={"admission"} />
      <Admission />
      <Calendar />
      <Title title={"What people say about THE GIVES"} id={"testimonial"} />

      <Testimonial
        testimonials={[
          {
            text: "I am so grateful for the opportunity to have studied at Chuo cha Urembo na Ususi Sakina. The instructors were excellent and the training was top-notch. I learned everything I needed to know to become a successful hair stylist and beauty therapist.",
            author: "Jane Amani",
            image:
              "https://ik.imagekit.io/fa4kq1qqo/the_gives/assets/Gallery/Banner/SKY_9552.jpg?updatedAt=1695333410354",
          },
          {
            text: " I am now working at my own salon and I am loving every minute of it. I highly recommend Chuo cha Urembo na Ususi to anyone who is serious about a career in the beauty industry.",
            author: "Jasmin John",
            image:
              "https://ik.imagekit.io/fa4kq1qqo/the_gives/assets/Gallery/Banner/SKY_9710.jpg?updatedAt=1695333410873",
          },
          {
            text: "I was always interested in hairdressing and beauty therapy, but I didn't know where to start. I did some research and found Chuo cha Urembo na Ususi. I'm so glad I chose this school! The instructors are amazing and they really care about their students.",
            author: "Vaileth Daniel",
            image:
              "https://ik.imagekit.io/fa4kq1qqo/the_gives/assets/Gallery/Banner/SKY_9567.jpg?updatedAt=1695438167616",
          },
        ]}
      />

      <Location />
      <Whatsapp/>
      <Footer />
    </div>
  );
}

export default Home;

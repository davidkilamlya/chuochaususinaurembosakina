import "./WhyChooseUs.scss";
import { easeInOut, motion } from "framer-motion";
import { FaGraduationCap, FaUsers, FaGlobe } from "react-icons/fa";

const WhyChooseUs = () => {
  return (
    <section className="why-choose-us">
      <motion.div
          initial={{ x: [100, 0] }}
          whileInView={{
            x: [-300, 0],
            transition: { easeInOut, duration: 2 },
          }} className="why-choose-us-content">
        {/* <h2>Why Choose Us</h2> */}
        <div
          className="feature"
        >
          <div className="icon">
            <FaGraduationCap />
          </div>
          <h3>Quality Education</h3>
          <p>
            Our experienced educators provide top-notch quality education to
            empower students.
          </p>
        </div>
        <div className="feature">
          <div className="icon">
            <FaUsers />
          </div>
          <h3>Inclusive Community</h3>
          <p>
            We foster an inclusive community that celebrates diversity and
            collaboration.
          </p>
        </div>
        <div className="feature">
          <div className="icon">
            <FaGlobe />
          </div>
          <h3>Global Perspective</h3>
          <p>
            Gain a global perspective through our international programs and
            partnerships.
          </p>
        </div>
      </motion.div>
    </section>
  );
};

export default WhyChooseUs;

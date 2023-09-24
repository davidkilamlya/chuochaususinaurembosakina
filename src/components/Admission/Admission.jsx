// Admission.js

import React from "react";
import "./Admission.scss";
import { useNavigate } from "react-router-dom";
import applicationForm from "../../assets/Documents/applicationForm.pdf";

const Admission = () => {
  const navigate = useNavigate();
  return (
    <section className="admission">
      <div className="admission-container">
        <h2>Admission Information</h2>
        <p>Join our college and embark on an exciting educational journey.</p>
        <div className="admission-steps">
          <div className="admission-step">
            <div className="step-number">1</div>
            <div className="step-content">
              <h3>Submit Application</h3>
              <p>
                Complete the online application form and provide the necessary
                documents.
              </p>
            </div>
          </div>
          <div className="admission-step">
            <div className="step-number">2</div>
            <div className="step-content">
              <h3>Interview</h3>
              <p>
                Attend an interview to assess your suitability for our school
                community.
              </p>
            </div>
          </div>
          <div className="admission-step">
            <div className="step-number">3</div>
            <div className="step-content">
              <h3>Acceptance</h3>
              <p>If accepted, you will receive an admission offer from us.</p>
            </div>
          </div>
        </div>
        <div className="download-form">
          <p>Don't have the application form? You can download it here:</p>
          <a href={applicationForm} download>
            Download Application Form
          </a>
        </div>
        <div className="apply-button">
          <button className="apply" onClick={() => navigate("/admission")}>
            Apply Now
          </button>
        </div>
      </div>
    </section>
  );
};

export default Admission;

// FAQ.js

import React from "react";
import "./Faq.scss";

const Faq = () => {
  const faqData = [
    {
      question: "What are the admission requirements?",
      answer:
        "We require a completed application form,application form, letters of recommendation, and an interview.",
    },
    {
      question: "What programs do you offer?",
      answer:
        "We offer a wide range of programs including STEM, arts, languages, and sports.",
    },
    // Add more FAQ items here
  ];

  return (
    <section className="faq">
      <div className="faq-container">
        <h2>Frequently Asked Questions</h2>
        <div className="faq-list">
          {faqData.map((faq, index) => (
            <div className="faq-item" key={index}>
              <h3 className="faq-question">{faq.question}</h3>
              <p className="faq-answer">{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Faq;

// Departments.js

import React from "react";
import "./Department.scss";

const Department = () => {
  const departmentData = [
    {
      name: "Science",
      description:
        "Explore the wonders of biology, chemistry, and physics in our Science Department.",
    },
    {
      name: "Arts",
      description:
        "Unleash your creativity through various forms of artistic expression in our Arts Department.",
    },
    // Add more department entries here
  ];

  return (
    <section className="departments">
      <div className="departments-container">
        {/* <h2>Departments</h2> */}
        <div className="department-list">
          {departmentData.map((department, index) => (
            <div className="department-item" key={index}>
              <h3 className="department-name">{department.name}</h3>
              <p className="department-description">{department.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Department;

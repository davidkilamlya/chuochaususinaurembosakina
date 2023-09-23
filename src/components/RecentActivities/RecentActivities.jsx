import React from "react";
import "./RecentActivities.scss";

const RecentActivities = () => {
  const activities = [
    {
      date: "2023-08-14",
      description: `Application window is open, download Registration form here`,
    },
    {
      date: "2023-08-12",
      description: "Form 4 Necta Result 2022",
    },
    {
      date: "2023-08-12",
      description: "Form 2 Necta Result 2022",
    },
    // Add more activity items as needed
  ];
  return (
    <div className="recent-activities">
      <h2>Recent Activities</h2>
      <ul className="activity-list">
        {activities.map((activity, index) => (
          <li key={index} className="activity-item">
            <span className="activity-date">{activity.date}</span>
            <p className="activity-description">
              <a href="_" className="activity-description">
                {activity.description}
              </a>
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RecentActivities;

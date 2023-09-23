import React from "react";
import { useParams } from "react-router-dom";
import "./ActivityDetailPage.scss"; // Create this SCSS file for styling

const ActivityDetailPage = () => {
  const { id } = useParams();
const activities = [
  {
    id: 1,
    date: "2023-08-14",
    title: "New Blog Article",
    description: "Posted a new article on the blog. Check it out!",
    imageUrl: "path-to-your-image-1.jpg",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. ...",
  },
  {
    id: 2,
    date: "2023-08-12",
    title: "Portfolio Update",
    description:
      "Updated the portfolio section with new projects and case studies.",
    imageUrl: "path-to-your-image-2.jpg",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. ...",
  },
  // Add more activity items as needed
];
  
  const activity = activities.find((activity) => activity.id === parseInt(id));

  if (!activity) {
    return <div>Activity not found.</div>;
  }

  return (
    <div className="activity-detail-page">
      <img
        src={activity.imageUrl}
        alt={`Activity ${activity.id}`}
        className="activity-image"
      />
      <div className="activity-content">
        <h2>{activity.title}</h2>
        <p className="activity-date">{activity.date}</p>
        <p className="activity-description">{activity.description}</p>
        <div className="activity-full-content">{activity.content}</div>
      </div>
    </div>
  );
};

export default ActivityDetailPage;

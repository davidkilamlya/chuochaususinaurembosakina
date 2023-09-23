import { images } from "../../constants";
import "./ActivityPage.scss"; // You can create this SCSS file for styling
import { Link } from "react-router-dom";

const activities = [
  {
    id: 1,
    date: "2023-08-14",
    title: "New Blog Article",
    description: "Posted a new article on the blog. Check it out!",
    imageUrl: images.library,
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. ...",
  },
  {
    id: 2,
    date: "2023-08-12",
    title: "Portfolio Update",
    description:
      "Updated the portfolio section with new projects and case studies.",
    imageUrl: images.library,
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. ...",
  },
  // Add more activity items as needed
];

const ActivitiesPage = () => {
  return (
    <div className="activities-page">
      <div className="activity-list">
        {activities.map((activity,index) => (
          <div className="activity-item" key={activity.id}>
            <img
              src={activity.imageUrl}
              alt={`Activity ${activity.id}`}
              className="activity-image"
              title={`about_image${index}`}
              loading="eager"
            />
            <div className="activity-details">
              <h2>{activity.title}</h2>
              <p className="activity-date">{activity.date}</p>
              <p className="activity-description">{activity.description}</p>
              {/* <Link
                to={`/activities/${activity.id}`}
                className="read-more-link"
              >
                Read More
              </Link> */}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ActivitiesPage;

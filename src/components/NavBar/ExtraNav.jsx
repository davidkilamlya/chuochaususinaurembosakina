import React from "react";
import "./ExtraNav.scss";

function ExtraNav() {
  const extraNav = [
    {
      title: "Admission",
      link: "/admission",
    },
    {
      title: "Sponsorship",
      link: "/sponsorship",
      isNew: true,
    },
    {
      title: "News and Updates",
      link: "/updates",
    },
    {
      title: "Gallery",
      link: "/gallery",
    },
    // {
    //   title: "Resources",
    //   link: "/resources",
    // },
    // {
    //   title: "Co-curricular",
    //   link: "/curricular",
     
    // },
    // {
    //   title: "Our Life",
    //   link: "/life",
    // },
  ];

  return (
    <div className="extraNav">
      <div className="extraNav-container">
        {extraNav.map((item, index) => {
          return (
            <div className="new_alert_nav">
              { item.isNew &&
                <div className="new_alert">
                <span>new</span>
              </div>
              } 
              <div className="extraNav-nav" key={index}>
                <a href={item.link} className="extraNav-nav-link">
                  {item.title}
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ExtraNav;

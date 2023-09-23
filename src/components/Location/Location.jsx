// Location.js

import React from "react";
import "./Location.scss";

const Location = () => {
  return (
    <section className="location" id="location">
      <div className="location-container">
        <h2>Our Location</h2>
        <div className="map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3982.94746850331!2d36.66809027493147!3d-3.363014241422512!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x18371d0a50d61b7f%3A0xe857a246c93a726b!2sChuo%20cha%20ususi%20na%20urembo%20sakina-The%20GIVES!5e0!3m2!1sen!2stz!4v1695009287615!5m2!1sen!2stz"
            width="600"
            height="450"
            style={{ border: 0 }}
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
            title="Chuo cha Urembo na Ususi Sakina"
            allowfullscreen
          ></iframe>
        </div>
        <address className="address">
          <p>Sakina,Arusha, Arusha Mjini</p>
          <p>P.O. Box 23124 Arusha</p>
        </address>
      </div>
    </section>
  );
};

export default Location;

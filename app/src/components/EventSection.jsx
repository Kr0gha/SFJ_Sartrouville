import React from "react";
import "../assets/Basics.css";
import "../assets/EventSection.css";

function EventSection() {
  return (
    <section className="main-event-section">
      <div className="main-event-text">
        <h3>
          Journées Figurines & Jeux <br />
          notre événements annuel
        </h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu ante
          in dolor iaculis lacinia. Quisque sed diam quis nisi cursus cursus.
          Aenean placerat, nibh non auctor semper,
        </p>

        <button className="main-button main-button-white">
            Site web officiel
        </button>
      </div>

      <div className="main-event-image"></div>
    </section>
  );
}

export default EventSection;

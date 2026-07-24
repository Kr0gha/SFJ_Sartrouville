import React from "react";
import "../assets/Basics.css";
import "../assets/HeroBanner.css";

function HeroBanner() {
  return (
    <section className="main-hero-section">
      <div className="main-hero-image">
        \
        <p className="main-hero-adress">
          M.J.C Maison des Jeunes et de la Culture <br />
          22 Quai de Seine, 78500 Sartrouville
        </p>
      </div>
      <div className="main-calendar">
        <p>Calendrier d’ouverture du Club</p>
        {/* Temporaire */}
          <iframe
          className="main-calendar"
            src="https://calendar.google.com/calendar/embed?src=18c965fbb1792eb3b1a011d3b1d78049013eebcdb8ead23fa5dc895ce8bdcd4e%40group.calendar.google.com&ctz=Europe%2FParis"
            frameborder="0"
            scrolling="no"
          ></iframe>
        <p>
          Horaires : <br />
          de xx á xx
        </p>
      </div>
    </section>
  );
}

export default HeroBanner;

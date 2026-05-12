import React from "react";
import "../assets/Basics.css";
import "../assets/StatsBanner.css";

function StatsBanner() {
  return (
    <section className="statsBanner-section">
      {/* Carte */}
      <div className="statsBanner-card">
        <p className="statsBanner-paragraph">
          <span className="statsBanner-number">55</span> <br />
          Membres
        </p>
      </div>

      <span className="statsBanner-sideBar"></span>

      <div className="statsBanner-card">
        <p className="statsBanner-paragraph">
          <span className="statsBanner-number">55</span> <br />
          Membres
        </p>
      </div>

      <span className="statsBanner-sideBar"></span>

      <div className="statsBanner-card">
        <p className="statsBanner-paragraph">
          <span className="statsBanner-number">55</span> <br />
          Membres
        </p>
      </div>
    </section>
  );
}

export default StatsBanner;

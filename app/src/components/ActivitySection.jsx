import React from "react";
import "../assets/Reset.css";
import "../assets/Basics.css";
import "../assets/ActivitySection.css";

function ActivitySection() {
  return (
    <section className="main-activity-section">
      <h2>Activité du club</h2>

      {/* Normal */}
      <div className="main-activity-card">
        <img src="/src/media/hero-banner-mjc.png" alt="" />
        <div className="main-activity-card-text">
          <h3>Peinture</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu ante
            in dolor iaculis lacinia. Quisque sed diam quis nisi cursus cursus.
            Aenean placerat, nibh non auctor semper, ipsum nisl aliquam turpis,
            eu sagittis mauris arcu vitae turpis. Nunc pretium nisl mauris, id
            pretium nulla pharetra id.{" "}
          </p>
        </div>
      </div>
      {/* Reverse */}
      <div className="main-activity-card main-activity-card-reverse">
        <img src="/src/media/hero-banner-mjc.png" alt="" />
        <div className="main-activity-card-text main-activity-card-text-reverse">
          <h3>Peinture</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu ante
            in dolor iaculis lacinia. Quisque sed diam quis nisi cursus cursus.
            Aenean placerat, nibh non auctor semper, ipsum nisl aliquam turpis,
            eu sagittis mauris arcu vitae turpis. Nunc pretium nisl mauris, id
            pretium nulla pharetra id.{" "}
          </p>
        </div>
      </div>
      {/* Normal */}
      <div className="main-activity-card">
        <img src="/src/media/hero-banner-mjc.png" alt="" />
        <div className="main-activity-card-text">
          <h3>Peinture</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu ante
            in dolor iaculis lacinia. Quisque sed diam quis nisi cursus cursus.
            Aenean placerat, nibh non auctor semper, ipsum nisl aliquam turpis,
            eu sagittis mauris arcu vitae turpis. Nunc pretium nisl mauris, id
            pretium nulla pharetra id.{" "}
          </p>
        </div>
      </div>
    </section>
  );
}

export default ActivitySection;

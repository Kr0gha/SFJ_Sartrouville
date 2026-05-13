import React from "react";
import "../assets/Basics.css";
import "../assets/PlaceSection.css";

function PlaceSection() {
  return (
    <section className="main-place-section">
      <div className="main-place-section-text">
        <h3>Le lieux</h3>
        <p className="main-place-section-simple-text">
          <span>En Voiture :</span> <br />
          Parking Disponible
        </p>
        <p className="main-place-section-simple-text">
          <span>En Transport:</span> <br />
          Gare proche : Gare Sartrouville
        </p>

        <div className="main-place-section-transport-ico">
          <img src="" alt="" />
          <p>
            <span>RER A</span> <br /> Gare de Sartrouville
          </p>
        </div>

        <div className="main-place-section-transport-ico">
          <img src="" alt="" />
          <p>
            <span>Ligne L</span> <br />
            Gare de Sartrouville
          </p>
        </div>
      </div>

      <iframe
        className="main-place-section-plan"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d10481.831007153014!2d2.1411242871581972!3d48.94476910000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e6617cb20ee8c7%3A0x8f2b2d03ac963605!2sM.J.C%20Maison%20des%20Jeunes%20et%20de%20la%20Culture!5e0!3m2!1sfr!2sfr!4v1778674245664!5m2!1sfr!2sfr"
        width="auto"
        height="450"
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
    </section>
  );
}

export default PlaceSection;

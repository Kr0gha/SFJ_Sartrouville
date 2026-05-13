import React from "react";
import "../assets/Basics.css";
import "../assets/StepBanner.css";

function StepBannerNumber() {
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

function StepBannerJoin() {
  return (
    <>
      <h2 className="statsBanner-section-title-number">Activité du club</h2>

      <section className="statsBanner-section statsBanner-section-white">
        {/* Carte  1 */}
        <div className="statsBanner-card statsBanner-section-white">
          <div>
            <p className="statsBanner-paragraph-join">
              Rejoindre notre communauté via
                          <button className="main-button">Discord</button>
            </p>

          </div>
        </div>

        <span className="statsBanner-sideBar"></span>

        {/* Carte 2 */}
        <div className="statsBanner-card statsBanner-section-white">
          <div>
            <p className="statsBanner-paragraph-join">
              Venir un Vendredi au Club en tant que joueur ou visiteurs
            </p>
          </div>
        </div>

        <span className="statsBanner-sideBar"></span>

        {/* Carte 3*/}
        <div className="statsBanner-card statsBanner-section-white">
          <div>
            <p className="statsBanner-paragraph-join">
              Remplir le formulaire et payer son année
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default { StepBannerNumber, StepBannerJoin };

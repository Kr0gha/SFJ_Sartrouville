
import React from 'react';
import '../assets/Basics.css'
import '../assets/App.css'

function HeroBanner() {

  return (
    
    <>
    <section className='main-hero-section'>
      <div className='main-hero-image'>\
        <p className='main-hero-adress'>
          M.J.C Maison des Jeunes et de la Culture <br/>
          22 Quai de Seine, 78500 Sartrouville
        </p>
      </div>
      <div className='main-calendar'> 
        <p>Calendrier d’ouverture du Club</p>
        {/* Temporaire */}
        <div className='main-calendar'></div>
        <p>Horaires : <br />
         de xx á xx</p>
      </div>
    </section>
    </>
  );
}

export default HeroBanner;


import React from 'react';
import '../assets/Basics.css'
import '../assets/FooterSection.css'
import { Link } from "react-router"

function FooterSection() {

  return (
    <footer>
        <Link to="/">Accueil</Link>
        <Link to="/">Contact</Link>
        <Link to="/">Mentions légales</Link>
        <Link to="/">CGU</Link>
        <Link to="/">Espace Membres</Link>
    </footer>
  );
}

export default FooterSection;

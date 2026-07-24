import React from 'react';
import '../assets/Reset.css'
import '../assets/Basics.css'
import '../assets/NavigationBar.css'
import {useEffect,useState } from 'react';
import axios from "axios"; 

import { Link } from "react-router";

function NavigationBar() {

  const [user, setUser] = useState(null);

useEffect(() => {
  // On verifie si l'utilisateur est bien connecter
  const checkAuth = async () => {
    try {
      const response = await axios.get(
        'http://localhost:3000/api/user',
        {
          withCredentials: true,
        }
      );
      setUser(response.data.user);
    } catch (error) {
      setUser(null);
      console.error(error.response?.data || error.message);
    }
  };

  checkAuth();
}, []);

  return (
    <nav>
      <h2 className='navbar-title'>JFJ</h2>
      {/* Changement du bouton si l'utilisateur est connecté ou non via son Compte Discord */}
      <Link to="/profil"><button className={`main-button navbar-button ${user !== null ? 'is-connected' : ''}`}>Espace Membres</button></Link>
    </nav>
  );
}

export default NavigationBar;

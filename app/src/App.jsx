import React, { useState, useEffect } from 'react';
import './assets/Basics.css';
import './assets/HeroBanner.css';
import { Route, Routes, useNavigate, Navigate } from 'react-router-dom';
import MainPage from './pages/MainPage';
import ProfilPage from './pages/ProfilPage';
import axios from 'axios';

function App() {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  // Vérifie si l'utilisateur est connecté au chargement de l'app
  useEffect(() => {
    const checkAuth = async () => {
      try {
        const response = await axios.get('http://localhost:3000/api/user', {
          withCredentials: true,
        });
        setUser(response.data.user);
      } catch (error) {
        setUser(null);
      }
    };
    checkAuth();
  }, []);

  // Fonction pour déclencher la connexion via Discord
  const handleLogin = () => {
    window.location.href = 'http://localhost:3000/auth/discord';
  };

  // Fonction pour se déconnecter
const handleLogout = async () => {
  try {
    await axios.post(
      'http://localhost:3000/auth/logout',
      {},
      { withCredentials: true }
    );

    setUser(null);
    navigate('/');
  } catch (error) {
    console.error('Erreur lors de la déconnexion:', error);
  }
};

  return (
    <>
      <Routes>
        {/* Route principale */}
        <Route
          path="/"
          element={
            <MainPage
              user={user}
              onLogin={handleLogin}
              onLogout={handleLogout}
            />
          }
        />

        {/* Route /login : accessible uniquement si l'utilisateur est connecté */}
        <Route
          path="/profil"
          element={
              <ProfilPage user={user} onLogout={handleLogout} />
          }
        />

        {/* Route pour gérer le callback Discord */}
        <Route
          path="/auth/success"
          element={
            <Navigate to="/profil" replace /> // Redirige vers /login après connexion
          }
        />
      </Routes>
    </>
  );
}

export default App;

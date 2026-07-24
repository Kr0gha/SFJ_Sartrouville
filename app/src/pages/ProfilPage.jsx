import React from 'react';
import { useNavigate } from 'react-router-dom';

const ProfilPage = ({ user, onLogout }) => {
  const navigate = useNavigate();

  const handleLogin = () => {
    window.location.href = 'http://localhost:3000/auth/discord';
  };

  

  if (!user) {
    return (
      <div>
        <h1>Espace Membres</h1>
        <p>Connecte-toi pour accéder à ton profil.</p>
        <button onClick={handleLogin}>Se connecter avec Discord</button>
      </div>
    );
  }

  return (
    // Page a retravailler 
    <>
      <h1>Profil de {user.username}</h1>
      {user.email && <p>Email: {user.email}</p>}
      {user.avatar && (
        <img
          src={`https://cdn.discordapp.com/avatars/${user.id}/${user.avatar}.png`}
          alt="Avatar"
          style={{ width: '100px', borderRadius: '50%' }}
        />
      )}
      <button onClick={onLogout}>Se déconnecter</button>
    </>
  );
};

export default ProfilPage;

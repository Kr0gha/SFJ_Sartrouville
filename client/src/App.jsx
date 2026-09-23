import './styles/Reset.css'
import './styles/Basics.css'
import './styles/App.css' 

// Importation des Fonts


import { Route, Routes, useNavigate, Navigate } from 'react-router-dom';
import HomePage from './pages/HomePage'
import CGU from './pages/CGU'

function App() {

  return (
    <>
     <Routes>
        <Route
        path="/"
        element={<HomePage/>}
        />
        <Route
        path="/cgu"
        element={<CGU/>}
        />
      </Routes>
    </>
  )
}

export default App

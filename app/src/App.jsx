
import React from 'react';
import NavigationBar from './components/NavigationBar';
import './assets/Basics.css'
import './assets/HeroBanner.css'
import HeroBanner from './components/HeroBanner';
import StatsBanner from './components/StatsBanner';
function App() {

  return (
    
    <>
    <NavigationBar/>
    <HeroBanner/>
    <StatsBanner/>
    </>
  );
}

export default App;

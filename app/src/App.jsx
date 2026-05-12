
import React, { Activity } from 'react';
import NavigationBar from './components/NavigationBar';
import './assets/Basics.css'
import './assets/HeroBanner.css'
import HeroBanner from './components/HeroBanner';
import StorySection from './components/StorySection';
import ActivitySection from './components/ActivitySection';

import BannerComponents from './components/StepBanner';



function App() {

  return (
    
    <>
    <NavigationBar/>
    <HeroBanner/>
    <BannerComponents.StepBannerNumber/>
    <StorySection/>
    <ActivitySection/>
    <BannerComponents.StepBannerJoin/>
    </>
  );
}

export default App;

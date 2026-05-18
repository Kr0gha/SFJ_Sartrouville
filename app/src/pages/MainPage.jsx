import React, { Activity } from 'react';
import NavigationBar from '../components/NavigationBar';
import '../assets/Basics.css'
import '../assets/HeroBanner.css'
import HeroBanner from '../components/HeroBanner';
import StorySection from '../components/StorySection';
import ActivitySection from '../components/ActivitySection';
import { useState, useEffect } from 'react';

import BannerComponents from '../components/StepBanner';
import EventSection from '../components/EventSection';
import PlaceSection from '../components/PlaceSection';
import FooterSection from '../components/FooterSection';
import { Route } from 'react-router';


function MainPage() {
  return (
    <>
        <NavigationBar/>
        <HeroBanner/>
        <BannerComponents.StepBannerNumber/>
        <StorySection/>
        <ActivitySection/>
        <BannerComponents.StepBannerJoin/>
        <EventSection/>
        <PlaceSection/>
        <FooterSection/>
    </>
  );
}

export default MainPage;

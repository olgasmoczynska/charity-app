import React, {useState, useEffect} from 'react';
import HomeNav from './HomeNav';
import HomeHeader from './HomeHeader';
import HomeThreeColumns from './HomeThreeColumns';
import HomeFourSteps from './HomeFourSteps';
import HomeAboutUs from './HomeAboutUs';
import HomeOrganizations from './HomeOrganizations';

function Home() {
    return (
        <>
        <HomeNav />
        <HomeHeader />
        <HomeThreeColumns />
        <HomeFourSteps />
        <HomeAboutUs />
        <HomeOrganizations />
        </>
    )
}

export default Home;

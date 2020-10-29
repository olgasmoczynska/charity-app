import React from 'react';
import HomeNav from './HomeNav';
import HomeHeader from './HomeHeader';
import HomeThreeColumns from './HomeThreeColumns';
import HomeFourSteps from './HomeFourSteps';
import HomeAboutUs from './HomeAboutUs';
import HomeBeneficiaries from './HomeBeneficiaries';
import HomeContact from './HomeContact';

function Home() {
    return (
        <>
        <HomeNav />
        <HomeHeader />
        <HomeThreeColumns />
        <HomeFourSteps />
        <HomeAboutUs />
        <HomeBeneficiaries />
        <HomeContact />
        </>
    )
}

export default Home;

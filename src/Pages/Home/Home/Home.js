import React from 'react';
import Banner from '../Banner/Banner';
import HomeSection from '../HomeSection/HomeSection';

const Home = () => {
    return (
        <div className='mx-5'>
           <Banner></Banner>
           <HomeSection></HomeSection>
        </div>
    );
};

export default Home;
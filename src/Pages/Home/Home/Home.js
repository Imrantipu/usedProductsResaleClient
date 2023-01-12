import React from 'react';
import Banner from '../Banner/Banner';
import HomeCategories from '../HomeCategories/HomeCategories';
import HomeSection from '../HomeSection/HomeSection';

const Home = () => {
    return (
        <div className='mx-5'>
           <Banner></Banner>
           <HomeCategories></HomeCategories>
           <HomeSection></HomeSection>
           
        </div>
    );
};

export default Home;
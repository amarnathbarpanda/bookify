import React from 'react';
import Home from './Home'
import Facilities from '../components/Facilities';
import PopularBooks from '../components/PopularBooks';
import Subscribe from '../components/Subscribe';
import Footer from '../components/Footer';

const HomePage = () => {
    return (
        <>
            <Home/>
            <Facilities/>
            <PopularBooks/>
            <Subscribe/>
            <Footer/>
        </>
    )
}

export default HomePage;

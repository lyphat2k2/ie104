import React from 'react';
import Navbar from '../components/Navbar';
import Collection from '../components/Collection';
import Slideshow from '../components/Slideshow';
import Footer from '../components/Footer';

function Homepage() {
    return (
        <>
            <Navbar status="fixed"/>

            <Collection />
            <Slideshow />

            <Footer />
        </>
    );
}

export default Homepage;

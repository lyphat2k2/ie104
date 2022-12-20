import React from 'react';
import Navbar from '../components/Navbar';
import Error from '../components/404NotFound';
import Footer from '../components/Footer';

function ErrorPage() {
    return (
        <>
            <Navbar />
            <Error />
            <Footer />
        </>
    );
}

export default ErrorPage;

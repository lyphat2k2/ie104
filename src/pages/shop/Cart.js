import React from 'react';
import Navbar from '../../components/Navbar';
import Cart from '../../components/Cart';
import Ribbon from '../../components/Ribbon';
import Footer from '../../components/Footer';

function CartPage() {
    return (
        <>
            <Navbar status="fixed" />

            <Ribbon />
            <Cart />

            <Footer />
        </>
    );
}

export default CartPage;

import React, { useState } from 'react';
import Navbar from '../../components/Navbar';
import Product from '../../components/Product';
import ProductNav from '../../components/ProductNav';
import Footer from '../../components/Footer';
import { useParams } from 'react-router-dom';

function Products() {
    const menuchoice = useParams();

    return (
        <>
            <Navbar/>
            {menuchoice.menuchoice === 'overview' && (
                <>
                    <ProductNav />
                    <div
                        className="product-page-content"
                        data-columns="1">
                        <Product.Overview />
                    </div>
                </>
            )}
            {menuchoice.menuchoice === 'specs' && (
                <>
                    <ProductNav />
                    <div
                        className="product-page-content"
                        data-columns="1">
                        <Product.Specs />
                    </div>
                </>
            )}
            {menuchoice.menuchoice === 'reviews' && (
                <>
                    <ProductNav />
                    <div
                        className="product-page-content"
                        data-columns="1">
                        <Product.Reviews />
                    </div>
                </>
            )}
            {menuchoice.menuchoice === 'support' && (
                <>
                    <ProductNav />
                    <div
                        className="product-page-content"
                        data-columns="1">
                        <Product.Support />
                    </div>
                </>
            )}
            {menuchoice.menuchoice === 'customize' && (
                <>
                    <ProductNav />
                    <div
                        className="product-page-content"
                        data-columns="1">
                        <Product.Customize />
                    </div>
                </>
            )}

            <Footer />
        </>
    );
}

export default Products;

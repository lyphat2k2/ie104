import React from 'react';
import Navbar from '../../components/Navbar';
import Product from '../../components/Product';
import ProductNav from '../../components/ProductNav';
import Footer from '../../components/Footer';
import { useParams } from 'react-router-dom';

function Products() {
    const {idproduct, menuchoice} = useParams();

    return (
        <>
            <Navbar/>
            
            {menuchoice === 'overview' && (
                <>
                    <ProductNav />
                    <div
                        className="product-page-content"
                        data-columns="1">
                        <Product.Overview idproducts={idproduct} />
                    </div>
                </>
            )}
            {menuchoice === 'specs' && (
                <>
                    <ProductNav />
                    <div
                        className="product-page-content"
                        data-columns="1">
                        <Product.Specs idproducts={idproduct} />
                    </div>
                </>
            )}
            {menuchoice === 'reviews' && (
                <>
                    <ProductNav />
                    <div
                        className="product-page-content"
                        data-columns="1">
                        <Product.Reviews idproducts={idproduct} />
                    </div>
                </>
            )}
            {menuchoice === 'support' && (
                <>
                    <ProductNav />
                    <div
                        className="product-page-content"
                        data-columns="1">
                        <Product.Support idproducts={idproduct} />
                    </div>
                </>
            )}
            {menuchoice === 'customize' && (
                <>
                    <ProductNav />
                    <div
                        className="product-page-content"
                        data-columns="1">
                        <Product.Customize idproducts={idproduct} />
                    </div>
                </>
            )}

            <Footer />
        </>
    );
}

export default Products;

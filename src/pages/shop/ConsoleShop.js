import React from 'react';
import Navbar from '../../components/Navbar';
import Ribbon from '../../components/Ribbon';
import CategoryHero from '../../components/CategoryHero';
import ProductAds from '../../components/ProductAds';
import BreadCrumb from '../../components/BreadCrumb';
import Filters from '../../components/Filters';
import ProductList from '../../components/ProductList';
import Footer from '../../components/Footer';

function ConsolePage() {
    const { pathname } = window.location;
    const title = 'Console';
    const ads = {
        banner: '/assets/images/ads/console-ads.png',
        events: 'Deal on Week',
        title: 'Play has no limit.',
        subtitle: 'Own your games with PlayStation 5',
        cta: 'Shop Now',
        link: 'https://www.samsung.com/us/mobile/mobile-accessories/galaxy-buds2-pro/SM-R190NZKAXAR/',
    };

    const styles = {
        color: '#1b1e24',
        backgroundColor: 'linear-gradient(to right, #e2e1e6, #fdfdfd, #e2e1e6)',
        colorEvent: '#fff',
        backgroundEvent: '#00439c',
        colorTitle: '#333',
        colorSubtitle: '#6f6f6f',
        colorButton: '#fff',
        backgroundButton: '#1b1e24',
    };

    const products = [
        {
            id: 1,
            uri: 'ps5-digital-edition',
            name: 'Sony PlayStation 5 Digital Edition',
            model: 'PS5 Console',
            image: 'ps5-digital/ps5-digital-img-1.png',
            origprice: 629.55,
            price: 499,
            specs: {
                Processor: 'AMD Zen 2-based CPU with 8 cores at 3.5GHz',
                Graphics: 'NVIDIA® RTX™ A1000',
                Memory: '16GB GDDR6',
                Storage: 'Custom 825GB SSD',
                Controller: 'DualSense Controller',
            },
        },
        {
            id: 2,
            uri: 'ps5-standard-edition',
            name: 'Sony PlayStation 5 Standard Edition',
            model: 'PS5 Console',
            image: 'ps5-digital/ps5-digital-img-2.png',
            origprice: 759.2,
            price: 599,
            specs: {
                Processor: 'AMD Zen 2-based CPU with 8 cores at 3.5GHz',
                Graphics: 'NVIDIA® RTX™ A1000',
                Memory: '16GB GDDR6',
                Storage: 'Custom 825GB SSD',
                Controller: 'DualSense Controller',
            },
        },
    ];

    return (
        <>
            <Navbar />
            <Ribbon />
            <CategoryHero title={title} />
            {products.length === 0 ? (
                <div style={{ margin: '8.4rem', textAlign: 'center' }}>
                    Nothing products to show.
                </div>
            ) : (
                <>
                    <ProductAds.Square
                        ads={ads}
                        styles={styles}
                    />
                    <BreadCrumb pathname={pathname} />
                    <div className="product-page-content">
                        <Filters />
                        <ProductList
                            type="list"
                            products={products}
                        />
                    </div>
                </>
            )}
            <Footer />
        </>
    );
}

export default ConsolePage;

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
    const title = "Console";
    const ads = {
        banner: "/assets/images/ads/console-ads.png",
        events: "Deal on Week",
        title: "Play has no limit.",
        subtitle: "Own your games with PlayStation 5",
        cta: "Shop Now",
        link: "https://www.samsung.com/us/mobile/mobile-accessories/galaxy-buds2-pro/SM-R190NZKAXAR/",
    };

    const styles = {
        color: '#1b1e24',
        backgroundColor: "linear-gradient(to right, #e2e1e6, #fdfdfd, #e2e1e6)",
        colorEvent: '#fff',
        backgroundEvent: '#00439c',
        colorTitle: '#333',
        colorSubtitle: '#6f6f6f',
        colorButton: '#fff',
        backgroundButton: '#1b1e24',
    }

    return (
        <>
            <Navbar />
            <Ribbon />
            <CategoryHero title={title} />
            <ProductAds.Square ads={ads} styles={styles} />
            <BreadCrumb pathname={pathname}/>
            <div className="product-page-content">
                <Filters />
                <ProductList />
            </div>
            <Footer />
        </>
    );
}

export default ConsolePage;

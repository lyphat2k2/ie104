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
    const title = "Mobile";
    const ads = {
        banner: "/assets/images/ads/mobile-ads.png",
        events: "NEW",
        title: "Pro. Beyond.",
        subtitle: "From $41.62/mo. for 24 months or $999 before trade-in",
        cta: "Shop Now",
        link: "https://www.apple.com/iphone-14-pro/",
    };

    const styles = {
        color: '#fff',
        backgroundColor: "#000",
        colorEvent: '#fff',
        backgroundEvent: 'linear-gradient(to bottom, #9128c2, #6f19ae)',
        colorTitle: '#ce6cff',
        colorSubtitle: '#fff',
        colorButton: '#fff',
        backgroundButton: '#0070d1',
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

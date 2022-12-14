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
    const title = "TV & Displays";
    const ads = {
        banner: "/assets/images/ads/display-ads.png",
        title: "Save up to $1000 during the Season of Gaming",
        subtitle: "Unleash your gaming potential with savings off the Samsung Odyssey monitor lineup. ",
        cta: "Buy Now",
        link: "https://www.samsung.com/us/computing/monitors/gaming/55-odyssey-ark-4k-uhd-165hz-1ms-quantum-mini-led-curved-gaming-screen-ls55bg970nnxgo/",
    };

    const styles = {
        color: '#000',
        backgroundColor: "#000",
        colorTitle: '#000',
        colorSubtitle: '#8f8f8f',
        colorButton: '#fff',
        backgroundButton: '#000',
    }

    return (
        <>
            <Navbar />
            <Ribbon />
            <CategoryHero title={title} />
            <ProductAds.Rec ads={ads} styles={styles} />
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

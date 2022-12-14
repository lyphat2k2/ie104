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
        banner: "/assets/images/ads/audio-ads.png",
        title: "Shop early. Listen now.",
        subtitle: "Get up to $300 off Q Series Soundbars. Experience a new level of acoustic immersion like never before.",
        cta: "Buy Now",
        link: "https://www.samsung.com/us/televisions-home-theater/home-theater/sound-bars/hw-q990b-11-1-4ch-soundbar-w-wireless-dolby-atmos-dts-x-and-rear-speakers-2022-hw-q990b-za/",
    };

    const styles = {
        color: '#000',
        backgroundColor: "#e8f1f8",
        colorTitle: '#000',
        colorSubtitle: '#444',
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
